import { defaultProvider as credentialProvider } from "@aws-sdk/credential-provider-node";

// Preprocessor needs to be a function
function createCredentialPreprocessor() {
  return async function (content: string, file: any, done: (content: string) => void) {
    // strip the extension from the file since it won't match the preprocessor pattern
    const fileName = file.originalPath;
    // add region and credentials to each file
    const region = process.env.AWS_SMOKE_TEST_REGION || "";
    const credentials = await credentialProvider()();
    // This will affect the generated (ES5) JS
    const regionCode = `var defaultRegion = '${region}';`;
    const credentialsCode = `var credentials = ${JSON.stringify(credentials)};`;
    const isBrowser = `var isBrowser = true;`;
    const contents = content.split("\n");
    let idx = -1;
    for (let i = 0; i < contents.length; i++) {
      const line = contents[i];
      if (line.indexOf(fileName) !== -1) {
        idx = i;
        break;
      }
    }
    contents.splice(idx + 1, 0, regionCode, credentialsCode, isBrowser);
    done(contents.join("\n"));
  };
}

module.exports = {
  "preprocessor:credentials": ["factory", createCredentialPreprocessor],
};
