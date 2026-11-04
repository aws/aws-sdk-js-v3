// smithy-typescript generated code
/* eslint-disable */
/**
 * - [Amazon Q actions](https://docs.aws.amazon.com/connect/latest/APIReference/API_Operations_Amazon_Q_Connect.html)
 * - [Amazon Q data types](https://docs.aws.amazon.com/connect/latest/APIReference/API_Types_Amazon_Q_Connect.html)
 *
 * > **Note:** **Powered by Amazon Bedrock**: Amazon Web Services implements [automated abuse detection](https://docs.aws.amazon.com/bedrock/latest/userguide/abuse-detection.html). Because Amazon Q in Connect is built on Amazon Bedrock, users can take full advantage of the controls implemented in Amazon Bedrock to enforce safety, security, and the responsible use of artificial intelligence (AI).
 *
 * Amazon Q in Connect is a generative AI customer service assistant. It is an LLM-enhanced evolution of Connect Customer Wisdom that delivers real-time recommendations to help contact center agents resolve customer issues quickly and accurately.
 *
 * Amazon Q in Connect automatically detects customer intent during calls and chats using conversational analytics and natural language understanding (NLU). It then provides agents with immediate, real-time generative responses and suggested actions, and links to relevant documents and articles. Agents can also query Amazon Q in Connect directly using natural language or keywords to answer customer requests.
 *
 * Use the Amazon Q in Connect APIs to create an assistant and a knowledge base, for example, or manage content by uploading custom files.
 *
 * For more information, see [Use Amazon Q in Connect for generative AI powered agent assistance in real-time](https://docs.aws.amazon.com/connect/latest/adminguide/amazon-q-connect.html) in the *Connect Customer Administrator Guide*.
 *
 * @packageDocumentation
 */
export * from "./QConnectClient";
export * from "./QConnect";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { QConnectExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";
export * from "./models/models_1";

export { QConnectServiceException } from "./models/QConnectServiceException";
