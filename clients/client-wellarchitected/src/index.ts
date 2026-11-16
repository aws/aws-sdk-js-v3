// smithy-typescript generated code
/* eslint-disable */
/**
 * <fullname>Amazon Web Services Well-Architected</fullname> <p>This is the <i>Amazon Web Services Well-Architected API Reference</i>. Amazon Web Services Well-Architected helps you evaluate your architectures against Amazon Web Services best practices across operational excellence, security, reliability, performance efficiency, cost optimization, and sustainability.</p> <p>To view API actions organized by service, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/wa-api-actions.html">API actions</a>.</p> <p> <b>Amazon Web Services Well-Architected Agent (preview)</b> </p> <p>Describes the API operations for managing optimization profiles, goals, application context, and recommendations in the Amazon Web Services Well-Architected Agent. Through this API, you can create and configure agent profiles that define the scope of your Amazon Web Services environment to analyze, set optimization goals across cost, security, performance, and resilience pillars, start recommendation generation, retrieve prioritized recommendations with ready-to-deploy remediation scripts, and provide feedback to improve future recommendations.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/agent.html">What is Amazon Web Services Well-Architected Agent?</a> </p> <p> <b>Well-Architected Tool</b> </p> <p>Describes the API operations for creating and managing workloads, conducting lens reviews, tracking milestones, managing custom lenses, sharing workloads across accounts, and managing profiles with the Well-Architected Tool.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/tool.html">What is Well-Architected Tool?</a> </p>
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
export * from "./waiters";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";
export * from "./models/models_1";

export { WellArchitectedServiceException } from "./models/WellArchitectedServiceException";
