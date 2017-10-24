# AWS Credential Provider for Node.JS Core

This library provides types and helper methods for loading AWS credentials. It
can be used with static credentials or as a foundation for credential-loading
libraries.

## Types defined

At its core, this library defines two basic types:

* `Credentials` objects, which represent permanent or temporary AWS signing
 credentials, and
* `CredentialProvider` functions, which are zero-argument functions that return
 a promise that will be fulfilled with a `Credentials` object or rejected with
 an error.
 
Additionally, the library provides helper methods for chaining and memoizing
`CredentialProvider` functions.

### Chaining credential providers

The `chain` function composes multiple credential sources into a single 
`CredentialProvider` function:

```javascript
import {chain} from '@aws/credential-provider-base';

const provider = chain(
  fromEnv(), // first, attempt to read from environment variables
  fromSharedConfigFiles(), // second, attempt to read from shared configuration files
  fromCredentials({ // finally, fall back to static credentials
    accessKeyId: 'foo',
    secretAccessKey: 'bar'
  })
);
```

The first provider in the argument list will always be invoked; subsequent
providers in the list will be invoked in the order in which they were received
if the preceding provider did not successfully resolve.

The chain will terminate if an unexpected error is encounter. If you are writing
a custom provider and would like to indicate that the `chain` function should
continue on to the next provider in the list, reject the provider's promise with
a `CredentialError`. For instance, if you wanted to write a provider that read
a JSON file containing credentials from a known location, you might want a
provider chain to continue if the file were missing but terminate with an error
if the file were present but malformed:

```javascript
import {chain, CredentialError} from '@aws/credential-provider-base';
const {readFile} = require('fs');
const {homedir} = require('os');
const {join} = require('path');

const pathToCredentialsFile = join(homedir(), 'foo', 'bar.json');

function jsonFileProvider() {
  return new Promise(function(resolve, reject) {
    readFile(pathToCredentialsFile, 'utf8', function(err, data) {
      if (err) {
        // The lack of a file is treated as a non-terminal error condition,
        // allowing the chain to move on to the next provider.
        reject(new CredentialError('Unable to read JSON credentials file.'));
        return;
      }

      try {
        resolve(JSON.parse(data));
      } catch (e) {
        // The file exists but is malformed. This should halt credential
        // processing and be presented to the user.
        reject(e);
      }
    });
  });
}
```

### Memoizing credential providers

The `memoize` function allows you to retrieve and automatically cache the
credentials sourced from a `CredentialProvider` function:

```typescript
import {memoize} from '@aws/credential-provider-base';

const provider = memoize(fromIni());
```

If the credentials returned by the underlying provider do not expire, the
promise returned by a provider created with `memoize` will always resolve with
the same credentials object. If the credentials have a defined expiration time,
`memoize` will attempt to refresh the credentials if they expire on or before
five minutes from the current second. 
