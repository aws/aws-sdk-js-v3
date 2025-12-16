// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>The Amazon Braket API Reference provides information about the operations and structures supported by Amazon Braket.</p> <p>To learn about the permissions required to call an Amazon Braket API action, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonbraket.html">Actions, resources, and condition keys for Amazon Braket</a>. <a href="https://amazon-braket-sdk-python.readthedocs.io/en/latest/#">Amazon Braket Python SDK</a> and the <a href="https://docs.aws.amazon.com/cli/latest/reference/braket/">AWS Command Line Interface</a> can be used to make discovery and creation of API calls easier. For more information about Amazon Braket features, see <a href="https://docs.aws.amazon.com/braket/latest/developerguide/what-is-braket.html">What is Amazon Braket?</a> and important <a href="https://docs.aws.amazon.com/braket/latest/developerguide/braket-terms.html">terms and concepts</a> in the <i>Amazon Braket Developer Guide</i>.</p> <p> <b>In this guide:</b> </p> <ul> <li> <p/> </li> <li> <p/> </li> <li> <p> <a>CommonParameters</a> </p> </li> <li> <p> <a>CommonErrors</a> </p> </li> </ul> <p> <b>Available languages for AWS SDK:</b> </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/sdkfornet/v3/apidocs/items/Braket/NBraket.html">.NET</a> </p> </li> <li> <p> <a href="https://sdk.amazonaws.com/cpp/api/LATEST/root/html/index.html">C++</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/sdk-for-go/api/service/braket/">Go API reference</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/services/braket/package-summary.html">Java</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Braket.html">JavaScript</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/aws-sdk-php/v3/api/class-Aws.Braket.BraketClient.html">PHP</a> </p> </li> <li> <p> <a href="https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/braket.html">Python (Boto)</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/sdk-for-ruby/v3/api/Aws/Braket.html">Ruby</a> </p> </li> </ul> <p> <b>Code examples from the Amazon Braket Tutorials GitHub repository:</b> </p> <ul> <li> <p> <a href="https://github.com/amazon-braket/amazon-braket-examples">Amazon Braket Examples</a> </p> </li> </ul>
 *
 * @packageDocumentation
 */
export * from "./BraketClient";
export * from "./Braket";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { BraketExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./schemas/schemas_0";
export * from "./pagination";

export * from "./models/enums";
export * from "./models/errors";
export type * from "./models/models_0";

export { BraketServiceException } from "./models/BraketServiceException";
