// smithy-typescript generated code
/* eslint-disable */
import { version } from "../version.json";
/**
 * <p>Identity and Access Management Access Analyzer helps you to set, verify, and refine your IAM policies by providing
 *          a suite of capabilities. Its features include findings for external and unused access,
 *          basic and custom policy checks for validating policies, and policy generation to generate
 *          fine-grained policies. To start using IAM Access Analyzer to identify external or unused access,
 *          you first need to create an analyzer.</p>
 *          <p>
 *             <b>External access analyzers</b> help identify potential risks
 *          of accessing resources by enabling you to identify any resource policies that grant access
 *          to an external principal. It does this by using logic-based reasoning to analyze
 *          resource-based policies in your Amazon Web Services environment. An external principal can be another
 *          Amazon Web Services account, a root user, an IAM user or role, a federated user, an Amazon Web Services service, or an
 *          anonymous user. You can also use IAM Access Analyzer to preview public and cross-account access
 *          to your resources before deploying permissions changes.</p>
 *          <p>
 *             <b>Unused access analyzers</b> help identify potential
 *          identity access risks by enabling you to identify unused IAM roles, unused access keys,
 *          unused console passwords, and IAM principals with unused service and action-level
 *          permissions.</p>
 *          <p>Beyond findings, IAM Access Analyzer provides basic and custom policy checks to validate IAM
 *          policies before deploying permissions changes. You can use policy generation to refine
 *          permissions by attaching a policy generated using access activity logged in CloudTrail logs. </p>
 *          <p>This guide describes the IAM Access Analyzer operations that you can call programmatically.
 *          For general information about IAM Access Analyzer, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html">Identity and Access Management Access Analyzer</a> in the
 *             <b>IAM User Guide</b>.</p>
 *
 * @packageDocumentation
 */

export const VERSION = version;
export * from "./AccessAnalyzerClient";
export * from "./AccessAnalyzer";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { AccessAnalyzerExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./pagination";
export * from "./models";

export { AccessAnalyzerServiceException } from "./models/AccessAnalyzerServiceException";
