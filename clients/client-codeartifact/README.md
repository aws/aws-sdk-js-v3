<!-- generated file, do not edit directly -->

# @aws-sdk/client-codeartifact

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/client-codeartifact/latest.svg)](https://www.npmjs.com/package/@aws-sdk/client-codeartifact)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/client-codeartifact.svg)](https://www.npmjs.com/package/@aws-sdk/client-codeartifact)

## Description

AWS SDK for JavaScript Codeartifact Client for Node.js, Browser and React Native.

<p> CodeArtifact is a fully managed artifact repository compatible with language-native
package managers and build tools such as npm, Apache Maven, pip, and dotnet. You can use CodeArtifact to
share packages with development teams and pull packages. Packages can be pulled from both
public and CodeArtifact repositories. You can also create an upstream relationship between a CodeArtifact
repository and another repository, which effectively merges their contents from the point of
view of a package manager client. </p>
<p>
<b>CodeArtifact Components</b>
</p>
<p>Use the information in this guide to help you work with the following CodeArtifact components:</p>
<ul>
<li>
<p>
<b>Repository</b>: A CodeArtifact repository contains a set of <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/welcome.html#welcome-concepts-package-version">package
versions</a>, each of which maps to a set of assets, or files. Repositories are
polyglot, so a single repository can contain packages of any supported type. Each
repository exposes endpoints for fetching and publishing packages using tools like the
<b>
<code>npm</code>
</b> CLI, the Maven CLI (<b>
<code>mvn</code>
</b>), Python CLIs (<b>
<code>pip</code>
</b> and <code>twine</code>), and NuGet CLIs (<code>nuget</code> and <code>dotnet</code>).</p>
</li>
<li>
<p>
<b>Domain</b>: Repositories are aggregated into a higher-level entity known as a
<i>domain</i>. All package assets and metadata are stored in the domain,
but are consumed through repositories. A given package asset, such as a Maven JAR file, is
stored once per domain, no matter how many repositories it's present in. All of the assets
and metadata in a domain are encrypted with the same customer master key (CMK) stored in
Key Management Service (KMS).</p>
<p>Each repository is a member of a single domain and can't be moved to a
different domain.</p>
<p>The domain allows organizational policy to be applied across multiple
repositories, such as which accounts can access repositories in the domain, and
which public repositories can be used as sources of packages.</p>
<p>Although an organization can have multiple domains, we recommend a single production
domain that contains all published artifacts so that teams can find and share packages
across their organization.</p>
</li>
<li>
<p>
<b>Package</b>: A <i>package</i> is a bundle of software and the metadata required to
resolve dependencies and install the software. CodeArtifact supports <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/using-npm.html">npm</a>, <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/using-python.html">PyPI</a>, <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/using-maven">Maven</a>, and <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/using-nuget">NuGet</a> package formats.</p>
<p>In CodeArtifact, a package consists of:</p>
<ul>
<li>
<p>A <i>name</i> (for example, <code>webpack</code> is the name of a
popular npm package)</p>
</li>
<li>
<p>An optional namespace (for example, <code>@types</code> in <code>@types/node</code>)</p>
</li>
<li>
<p>A set of versions (for example, <code>1.0.0</code>, <code>1.0.1</code>,
<code>1.0.2</code>, etc.)</p>
</li>
<li>
<p> Package-level metadata (for example, npm tags)</p>
</li>
</ul>
</li>
<li>
<p>
<b>Package version</b>: A version of a package, such as <code>@types/node 12.6.9</code>. The version number
format and semantics vary for different package formats. For example, npm package versions
must conform to the <a href="https://semver.org/">Semantic Versioning
specification</a>. In CodeArtifact, a package version consists of the version identifier,
metadata at the package version level, and a set of assets.</p>
</li>
<li>
<p>
<b>Upstream repository</b>: One repository is <i>upstream</i> of another when the package versions in
it can be accessed from the repository endpoint of the downstream repository, effectively
merging the contents of the two repositories from the point of view of a client. CodeArtifact
allows creating an upstream relationship between two repositories.</p>
</li>
<li>
<p>
<b>Asset</b>: An individual file stored in CodeArtifact associated with a package version, such as an npm
<code>.tgz</code> file or Maven POM and JAR files.</p>
</li>
</ul>
<p>CodeArtifact supports these operations:</p>
<ul>
<li>
<p>
<code>AssociateExternalConnection</code>: Adds an existing external
connection to a repository.
</p>
</li>
<li>
<p>
<code>CopyPackageVersions</code>: Copies package versions from one
repository to another repository in the same domain.</p>
</li>
<li>
<p>
<code>CreateDomain</code>: Creates a domain</p>
</li>
<li>
<p>
<code>CreateRepository</code>: Creates a CodeArtifact repository in a domain. </p>
</li>
<li>
<p>
<code>DeleteDomain</code>: Deletes a domain. You cannot delete a domain that contains
repositories. </p>
</li>
<li>
<p>
<code>DeleteDomainPermissionsPolicy</code>: Deletes the resource policy that is set on a domain.</p>
</li>
<li>
<p>
<code>DeletePackageVersions</code>: Deletes versions of a package. After a package has
been deleted, it can be republished, but its assets and metadata cannot be restored
because they have been permanently removed from storage.</p>
</li>
<li>
<p>
<code>DeleteRepository</code>: Deletes a repository.
</p>
</li>
<li>
<p>
<code>DeleteRepositoryPermissionsPolicy</code>: Deletes the resource policy that is set on a repository.</p>
</li>
<li>
<p>
<code>DescribeDomain</code>: Returns a <code>DomainDescription</code> object that
contains information about the requested domain.</p>
</li>
<li>
<p>
<code>DescribePackage</code>: Returns a <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageDescription.html">PackageDescription</a>
object that contains details about a package. </p>
</li>
<li>
<p>
<code>DescribePackageVersion</code>: Returns a <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageVersionDescription.html">PackageVersionDescription</a>
object that contains details about a package version. </p>
</li>
<li>
<p>
<code>DescribeRepository</code>: Returns a <code>RepositoryDescription</code> object
that contains detailed information about the requested repository. </p>
</li>
<li>
<p>
<code>DisposePackageVersions</code>: Disposes versions of a package. A package version
with the status <code>Disposed</code> cannot be restored because they have been
permanently removed from storage.</p>
</li>
<li>
<p>
<code>DisassociateExternalConnection</code>: Removes an existing external connection from a repository.
</p>
</li>
<li>
<p>
<code>GetAuthorizationToken</code>: Generates a temporary authorization token for accessing repositories in the domain. The token expires the authorization period has passed.
The default authorization period is 12 hours and can be customized to any length with a maximum of 12 hours.</p>
</li>
<li>
<p>
<code>GetDomainPermissionsPolicy</code>: Returns the policy of a resource
that is attached to the specified domain. </p>
</li>
<li>
<p>
<code>GetPackageVersionAsset</code>: Returns the contents of an asset that is in a package version. </p>
</li>
<li>
<p>
<code>GetPackageVersionReadme</code>: Gets the readme file or descriptive text for a package version.</p>
</li>
<li>
<p>
<code>GetRepositoryEndpoint</code>: Returns the endpoint of a repository for a specific package format. A repository has one endpoint for each
package format:
</p>
<ul>
<li>
<p>
<code>maven</code>
</p>
</li>
<li>
<p>
<code>npm</code>
</p>
</li>
<li>
<p>
<code>nuget</code>
</p>
</li>
<li>
<p>
<code>pypi</code>
</p>
</li>
</ul>
</li>
<li>
<p>
<code>GetRepositoryPermissionsPolicy</code>: Returns the resource policy that is set on a repository.
</p>
</li>
<li>
<p>
<code>ListDomains</code>: Returns a list of <code>DomainSummary</code> objects. Each
returned <code>DomainSummary</code> object contains information about a domain.</p>
</li>
<li>
<p>
<code>ListPackages</code>: Lists the packages in a repository.</p>
</li>
<li>
<p>
<code>ListPackageVersionAssets</code>: Lists the assets for a given package version.</p>
</li>
<li>
<p>
<code>ListPackageVersionDependencies</code>: Returns a list of the direct dependencies for a
package version. </p>
</li>
<li>
<p>
<code>ListPackageVersions</code>: Returns a list of package versions for a specified
package in a repository.</p>
</li>
<li>
<p>
<code>ListRepositories</code>: Returns a list of repositories owned by the Amazon Web Services account that called this method.</p>
</li>
<li>
<p>
<code>ListRepositoriesInDomain</code>: Returns a list of the repositories in a domain.</p>
</li>
<li>
<p>
<code>PutDomainPermissionsPolicy</code>: Attaches a resource policy to a domain.</p>
</li>
<li>
<p>
<code>PutPackageOriginConfiguration</code>: Sets the package origin configuration for a package, which determine
how new versions of the package can be added to a specific repository.</p>
</li>
<li>
<p>
<code>PutRepositoryPermissionsPolicy</code>: Sets the resource policy on a repository
that specifies permissions to access it. </p>
</li>
<li>
<p>
<code>UpdatePackageVersionsStatus</code>: Updates the status of one or more versions of a package.</p>
</li>
<li>
<p>
<code>UpdateRepository</code>: Updates the properties of a repository.</p>
</li>
</ul>

## Installing

To install the this package, simply type add or install @aws-sdk/client-codeartifact
using your favorite package manager:

- `npm install @aws-sdk/client-codeartifact`
- `yarn add @aws-sdk/client-codeartifact`
- `pnpm add @aws-sdk/client-codeartifact`

## Getting Started

### Import

The AWS SDK is modulized by clients and commands.
To send a request, you only need to import the `CodeartifactClient` and
the commands you need, for example `AssociateExternalConnectionCommand`:

```js
// ES5 example
const { CodeartifactClient, AssociateExternalConnectionCommand } = require("@aws-sdk/client-codeartifact");
```

```ts
// ES6+ example
import { CodeartifactClient, AssociateExternalConnectionCommand } from "@aws-sdk/client-codeartifact";
```

### Usage

To send a request, you:

- Initiate client with configuration (e.g. credentials, region).
- Initiate command with input parameters.
- Call `send` operation on client with command object as input.
- If you are using a custom http handler, you may call `destroy()` to close open connections.

```js
// a client can be shared by different commands.
const client = new CodeartifactClient({ region: "REGION" });

const params = {
  /** input parameters */
};
const command = new AssociateExternalConnectionCommand(params);
```

#### Async/await

We recommend using [await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
operator to wait for the promise returned by send operation as follows:

```js
// async/await.
try {
  const data = await client.send(command);
  // process data.
} catch (error) {
  // error handling.
} finally {
  // finally.
}
```

Async-await is clean, concise, intuitive, easy to debug and has better error handling
as compared to using Promise chains or callbacks.

#### Promises

You can also use [Promise chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#chaining)
to execute send operation.

```js
client.send(command).then(
  (data) => {
    // process data.
  },
  (error) => {
    // error handling.
  }
);
```

Promises can also be called using `.catch()` and `.finally()` as follows:

```js
client
  .send(command)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  })
  .finally(() => {
    // finally.
  });
```

#### Callbacks

We do not recommend using callbacks because of [callback hell](http://callbackhell.com/),
but they are supported by the send operation.

```js
// callbacks.
client.send(command, (err, data) => {
  // process err and data.
});
```

#### v2 compatible style

The client can also send requests using v2 compatible style.
However, it results in a bigger bundle size and may be dropped in next major version. More details in the blog post
on [modular packages in AWS SDK for JavaScript](https://aws.amazon.com/blogs/developer/modular-packages-in-aws-sdk-for-javascript/)

```ts
import * as AWS from "@aws-sdk/client-codeartifact";
const client = new AWS.Codeartifact({ region: "REGION" });

// async/await.
try {
  const data = await client.associateExternalConnection(params);
  // process data.
} catch (error) {
  // error handling.
}

// Promises.
client
  .associateExternalConnection(params)
  .then((data) => {
    // process data.
  })
  .catch((error) => {
    // error handling.
  });

// callbacks.
client.associateExternalConnection(params, (err, data) => {
  // process err and data.
});
```

### Troubleshooting

When the service returns an exception, the error will include the exception information,
as well as response metadata (e.g. request id).

```js
try {
  const data = await client.send(command);
  // process data.
} catch (error) {
  const { requestId, cfId, extendedRequestId } = error.$$metadata;
  console.log({ requestId, cfId, extendedRequestId });
  /**
   * The keys within exceptions are also parsed.
   * You can access them by specifying exception names:
   * if (error.name === 'SomeServiceException') {
   *     const value = error.specialKeyInException;
   * }
   */
}
```

## Getting Help

Please use these community resources for getting help.
We use the GitHub issues for tracking bugs and feature requests, but have limited bandwidth to address them.

- Visit [Developer Guide](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/welcome.html)
  or [API Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/index.html).
- Check out the blog posts tagged with [`aws-sdk-js`](https://aws.amazon.com/blogs/developer/tag/aws-sdk-js/)
  on AWS Developer Blog.
- Ask a question on [StackOverflow](https://stackoverflow.com/questions/tagged/aws-sdk-js) and tag it with `aws-sdk-js`.
- Join the AWS JavaScript community on [gitter](https://gitter.im/aws/aws-sdk-js-v3).
- If it turns out that you may have found a bug, please [open an issue](https://github.com/aws/aws-sdk-js-v3/issues/new/choose).

To test your universal JavaScript code in Node.js, browser and react-native environments,
visit our [code samples repo](https://github.com/aws-samples/aws-sdk-js-tests).

## Contributing

This client code is generated automatically. Any modifications will be overwritten the next time the `@aws-sdk/client-codeartifact` package is updated.
To contribute to client you can check our [generate clients scripts](https://github.com/aws/aws-sdk-js-v3/tree/main/scripts/generate-clients).

## License

This SDK is distributed under the
[Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0),
see LICENSE for more information.
