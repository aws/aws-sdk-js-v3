// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListSecurityControlDefinitionsRequest, ListSecurityControlDefinitionsResponse } from "../models/models_3";
import {
  de_ListSecurityControlDefinitionsCommand,
  se_ListSecurityControlDefinitionsCommand,
} from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSecurityControlDefinitionsCommand}.
 */
export interface ListSecurityControlDefinitionsCommandInput extends ListSecurityControlDefinitionsRequest {}
/**
 * @public
 *
 * The output of {@link ListSecurityControlDefinitionsCommand}.
 */
export interface ListSecurityControlDefinitionsCommandOutput
  extends ListSecurityControlDefinitionsResponse,
    __MetadataBearer {}

/**
 * <p>
 *          Lists all of the security controls that apply to a specified standard.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, ListSecurityControlDefinitionsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, ListSecurityControlDefinitionsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // ListSecurityControlDefinitionsRequest
 *   StandardsArn: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListSecurityControlDefinitionsCommand(input);
 * const response = await client.send(command);
 * // { // ListSecurityControlDefinitionsResponse
 * //   SecurityControlDefinitions: [ // SecurityControlDefinitions // required
 * //     { // SecurityControlDefinition
 * //       SecurityControlId: "STRING_VALUE", // required
 * //       Title: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE", // required
 * //       RemediationUrl: "STRING_VALUE", // required
 * //       SeverityRating: "LOW" || "MEDIUM" || "HIGH" || "CRITICAL", // required
 * //       CurrentRegionAvailability: "AVAILABLE" || "UNAVAILABLE", // required
 * //       CustomizableProperties: [ // CustomizableProperties
 * //         "Parameters",
 * //       ],
 * //       ParameterDefinitions: { // ParameterDefinitions
 * //         "<keys>": { // ParameterDefinition
 * //           Description: "STRING_VALUE", // required
 * //           ConfigurationOptions: { // ConfigurationOptions Union: only one key present
 * //             Integer: { // IntegerConfigurationOptions
 * //               DefaultValue: Number("int"),
 * //               Min: Number("int"),
 * //               Max: Number("int"),
 * //             },
 * //             IntegerList: { // IntegerListConfigurationOptions
 * //               DefaultValue: [ // IntegerList
 * //                 Number("int"),
 * //               ],
 * //               Min: Number("int"),
 * //               Max: Number("int"),
 * //               MaxItems: Number("int"),
 * //             },
 * //             Double: { // DoubleConfigurationOptions
 * //               DefaultValue: Number("double"),
 * //               Min: Number("double"),
 * //               Max: Number("double"),
 * //             },
 * //             String: { // StringConfigurationOptions
 * //               DefaultValue: "STRING_VALUE",
 * //               Re2Expression: "STRING_VALUE",
 * //               ExpressionDescription: "STRING_VALUE",
 * //             },
 * //             StringList: { // StringListConfigurationOptions
 * //               DefaultValue: [ // StringList
 * //                 "STRING_VALUE",
 * //               ],
 * //               Re2Expression: "STRING_VALUE",
 * //               MaxItems: Number("int"),
 * //               ExpressionDescription: "STRING_VALUE",
 * //             },
 * //             Boolean: { // BooleanConfigurationOptions
 * //               DefaultValue: true || false,
 * //             },
 * //             Enum: { // EnumConfigurationOptions
 * //               DefaultValue: "STRING_VALUE",
 * //               AllowedValues: [
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //             EnumList: { // EnumListConfigurationOptions
 * //               DefaultValue: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               MaxItems: Number("int"),
 * //               AllowedValues: [
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           },
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSecurityControlDefinitionsCommandInput - {@link ListSecurityControlDefinitionsCommandInput}
 * @returns {@link ListSecurityControlDefinitionsCommandOutput}
 * @see {@link ListSecurityControlDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListSecurityControlDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidAccessException} (client fault)
 *  <p>The account doesn't have permission to perform this action.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because you supplied an invalid or out-of-range value for an
 *          input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current Amazon Web Services
 *          account or throttling limits. The error code describes the limit exceeded.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 *
 * @example To list security controls that apply to a standard
 * ```javascript
 * // The following example lists security controls that apply to a specified Security Hub standard.
 * const input = {
 *   MaxResults: 3,
 *   NextToken: "NULL",
 *   StandardsArn: "arn:aws:securityhub:::standards/aws-foundational-security-best-practices/v/1.0.0"
 * };
 * const command = new ListSecurityControlDefinitionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   NextToken: "U2FsdGVkX1...",
 *   SecurityControlDefinitions: [
 *     {
 *       CurrentRegionAvailability: "AVAILABLE",
 *       CustomizableProperties: [
 *         "Parameters"
 *       ],
 *       Description: "This AWS control checks whether ACM Certificates in your account are marked for expiration within a specified time period. Certificates provided by ACM are automatically renewed. ACM does not automatically renew certificates that you import.",
 *       RemediationUrl: "https://docs.aws.amazon.com/console/securityhub/ACM.1/remediation",
 *       SecurityControlId: "ACM.1",
 *       SeverityRating: "MEDIUM",
 *       Title: "Imported and ACM-issued certificates should be renewed after a specified time period"
 *     },
 *     {
 *       CurrentRegionAvailability: "AVAILABLE",
 *       CustomizableProperties: [
 *         "Parameters"
 *       ],
 *       Description: "This control checks whether all stages of Amazon API Gateway REST and WebSocket APIs have logging enabled. The control fails if logging is not enabled for all methods of a stage or if loggingLevel is neither ERROR nor INFO.",
 *       RemediationUrl: "https://docs.aws.amazon.com/console/securityhub/APIGateway.1/remediation",
 *       SecurityControlId: "APIGateway.1",
 *       SeverityRating: "MEDIUM",
 *       Title: "API Gateway REST and WebSocket API execution logging should be enabled"
 *     },
 *     {
 *       CurrentRegionAvailability: "AVAILABLE",
 *       Description: "This control checks whether Amazon API Gateway REST API stages have SSL certificates configured that backend systems can use to authenticate that incoming requests are from the API Gateway.",
 *       RemediationUrl: "https://docs.aws.amazon.com/console/securityhub/APIGateway.2/remediation",
 *       SecurityControlId: "APIGateway.2",
 *       SeverityRating: "MEDIUM",
 *       Title: "API Gateway REST API stages should be configured to use SSL certificates for backend authentication"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListSecurityControlDefinitionsCommand extends $Command
  .classBuilder<
    ListSecurityControlDefinitionsCommandInput,
    ListSecurityControlDefinitionsCommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SecurityHubAPIService", "ListSecurityControlDefinitions", {})
  .n("SecurityHubClient", "ListSecurityControlDefinitionsCommand")
  .f(void 0, void 0)
  .ser(se_ListSecurityControlDefinitionsCommand)
  .de(de_ListSecurityControlDefinitionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSecurityControlDefinitionsRequest;
      output: ListSecurityControlDefinitionsResponse;
    };
    sdk: {
      input: ListSecurityControlDefinitionsCommandInput;
      output: ListSecurityControlDefinitionsCommandOutput;
    };
  };
}
