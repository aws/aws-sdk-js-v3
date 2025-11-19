// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>This is the <i>Amazon Web Services B2B Data Interchange API Reference</i>. It provides descriptions, API request parameters, and the XML response for each of the B2BI API actions.</p> <p>B2BI enables automated exchange of EDI (electronic data interchange) based business-critical transactions at cloud scale, with elasticity and pay-as-you-go pricing. Businesses use EDI documents to exchange transactional data with trading partners, such as suppliers and end customers, using standardized formats such as X12.</p> <note> <p>Rather than actually running a command, you can use the <code>--generate-cli-skeleton</code> parameter with any API call to generate and display a parameter template. You can then use the generated template to customize and use as input on a later command. For details, see <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-skeleton.html#cli-usage-skeleton-generate">Generate and use a parameter skeleton file</a>.</p> </note>
 *
 * @packageDocumentation
 */
export * from "./B2biClient";
export * from "./B2bi";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { B2biExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./pagination";
export * from "./waiters";

export * from "./models/enums";
export * from "./models/errors";
export type * from "./models/models_0";

export { B2biServiceException } from "./models/B2biServiceException";
