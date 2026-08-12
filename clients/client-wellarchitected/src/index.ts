// smithy-typescript generated code
/* eslint-disable */
/**
 * <fullname>Amazon Web Services Well-Architected</fullname> <p>Amazon Web Services Well-Architected helps you evaluate your architectures against Amazon Web Services best practices across operational excellence, security, reliability, performance efficiency, cost optimization, and sustainability. The service includes the Amazon Web Services Well-Architected Agent for AI-powered recommendations tailored to your specific environment, and the <a href="http://aws.amazon.com/well-architected-tool">Well-Architected Tool</a> for conducting reviews and tracking improvements.</p> <p>This is the <i>Amazon Web Services Well-Architected API Reference</i>. Through this API, you can programmatically access personalized recommendations and automation scripts from the Amazon Web Services Well-Architected Agent, and create and manage workloads, conduct lens reviews, track milestones, manage custom lenses, share workloads across accounts, and manage profiles with the Well-Architected Tool.</p> <p>For more information about the service, see the <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/intro.html">Amazon Web Services Well-Architected User Guide</a>.</p>
 *
 * @packageDocumentation
 */
export * from "./WellArchitectedClient";
export * from "./WellArchitected";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { WellArchitectedExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { WellArchitectedServiceException } from "./models/WellArchitectedServiceException";
