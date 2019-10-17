import { defaultProvider as credentialProvider } from "@aws-sdk/credential-provider-node";

function createCredentialPreprocessor(
  args: any,
  config: any,
  logger: any,
  helper: any
) {
  return async function (
    content: string,
    file: any,
    done: (content: string) => void
  ) {
    // strip the extension from the file since it won't match the preprocessor pattern
    const fileName = file.originalPath;
    // add region and credentials to each file
    const region = process.env.AWS_SMOKE_TEST_REGION || "";
    const credentials = await credentialProvider()();
    // This will affect the generated (ES5) JS
    const regionCode = `var defaultRegion = '${region}';`;
    const credentialsCode = `var credentials = ${JSON.stringify(credentials)};`;

    const contents = content.split("\n");
    let idx = -1;
    for (let i = 0; i < contents.length; i++) {
      const line = contents[i];
      if (line.indexOf(fileName) !== -1) {
        idx = i;
        break;
      }
    }

    contents.splice(idx + 1, 0, regionCode, credentialsCode);
    /* Karma before 4.3 only supported callbacks,
     * after 4.4 now will support returning a promise.
     * Since the function is `async` if it does not return the result,
     * then the undefined value of the promise may be preferred over the callback.
     */
    const result = contents.join("\n");
    done(result);
    return result;
  };
}

module.exports = {
  "preprocessor:credentials": ["factory", createCredentialPreprocessor]
};
