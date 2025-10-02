// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetSecurityControlDefinitionRequest, GetSecurityControlDefinitionResponse } from "../models/models_3";
import {
  de_GetSecurityControlDefinitionCommand,
  se_GetSecurityControlDefinitionCommand,
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
 * The input for {@link GetSecurityControlDefinitionCommand}.
 */
export interface GetSecurityControlDefinitionCommandInput extends GetSecurityControlDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link GetSecurityControlDefinitionCommand}.
 */
export interface GetSecurityControlDefinitionCommandOutput
  extends GetSecurityControlDefinitionResponse,
    __MetadataBearer {}

/**
 * <p>
 *             Retrieves the definition of a security control. The definition includes the control title, description, Region availability, parameter definitions, and other details.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, GetSecurityControlDefinitionCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, GetSecurityControlDefinitionCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // GetSecurityControlDefinitionRequest
 *   SecurityControlId: "STRING_VALUE", // required
 * };
 * const command = new GetSecurityControlDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // GetSecurityControlDefinitionResponse
 * //   SecurityControlDefinition: { // SecurityControlDefinition
 * //     SecurityControlId: "STRING_VALUE", // required
 * //     Title: "STRING_VALUE", // required
 * //     Description: "STRING_VALUE", // required
 * //     RemediationUrl: "STRING_VALUE", // required
 * //     SeverityRating: "LOW" || "MEDIUM" || "HIGH" || "CRITICAL", // required
 * //     CurrentRegionAvailability: "AVAILABLE" || "UNAVAILABLE", // required
 * //     CustomizableProperties: [ // CustomizableProperties
 * //       "Parameters",
 * //     ],
 * //     ParameterDefinitions: { // ParameterDefinitions
 * //       "<keys>": { // ParameterDefinition
 * //         Description: "STRING_VALUE", // required
 * //         ConfigurationOptions: { // ConfigurationOptions Union: only one key present
 * //           Integer: { // IntegerConfigurationOptions
 * //             DefaultValue: Number("int"),
 * //             Min: Number("int"),
 * //             Max: Number("int"),
 * //           },
 * //           IntegerList: { // IntegerListConfigurationOptions
 * //             DefaultValue: [ // IntegerList
 * //               Number("int"),
 * //             ],
 * //             Min: Number("int"),
 * //             Max: Number("int"),
 * //             MaxItems: Number("int"),
 * //           },
 * //           Double: { // DoubleConfigurationOptions
 * //             DefaultValue: Number("double"),
 * //             Min: Number("double"),
 * //             Max: Number("double"),
 * //           },
 * //           String: { // StringConfigurationOptions
 * //             DefaultValue: "STRING_VALUE",
 * //             Re2Expression: "STRING_VALUE",
 * //             ExpressionDescription: "STRING_VALUE",
 * //           },
 * //           StringList: { // StringListConfigurationOptions
 * //             DefaultValue: [ // StringList
 * //               "STRING_VALUE",
 * //             ],
 * //             Re2Expression: "STRING_VALUE",
 * //             MaxItems: Number("int"),
 * //             ExpressionDescription: "STRING_VALUE",
 * //           },
 * //           Boolean: { // BooleanConfigurationOptions
 * //             DefaultValue: true || false,
 * //           },
 * //           Enum: { // EnumConfigurationOptions
 * //             DefaultValue: "STRING_VALUE",
 * //             AllowedValues: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           EnumList: { // EnumListConfigurationOptions
 * //             DefaultValue: [
 * //               "STRING_VALUE",
 * //             ],
 * //             MaxItems: Number("int"),
 * //             AllowedValues: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         },
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSecurityControlDefinitionCommandInput - {@link GetSecurityControlDefinitionCommandInput}
 * @returns {@link GetSecurityControlDefinitionCommandOutput}
 * @see {@link GetSecurityControlDefinitionCommandInput} for command's `input` shape.
 * @see {@link GetSecurityControlDefinitionCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because we can't find the specified resource.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 *
 * @example To get the definition of a security control.
 * ```javascript
 * // The following example retrieves definition details for the specified security control.
 * const input = {
 *   SecurityControlId: "EC2.4"
 * };
 * const command = new GetSecurityControlDefinitionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   SecurityControlDefinition: {
 *     CurrentRegionAvailability: "AVAILABLE",
 *     Description: "This control checks whether an Amazon EC2 instance has been stopped for longer than the allowed number of days. The control fails if an EC2 instance is stopped for longer than the maximum allowed time period. Unless you provide a custom parameter value for the maximum allowed time period, Security Hub uses a default value of 30 days.",
 *     ParameterDefinitions: {
 *       AllowedDays: {
 *         ConfigurationOptions: {
 *           Integer: {
 *             DefaultValue: 30,
 *             Max: 365,
 *             Min: 1
 *           }
 *         },
 *         Description: "Number of days the EC2 instance is allowed to be in a stopped state before generating a failed finding"
 *       }
 *     },
 *     RemediationUrl: "https://docs.aws.amazon.com/console/securityhub/EC2.4/remediation",
 *     SecurityControlId: "EC2.4",
 *     SeverityRating: "MEDIUM",
 *     Title: "Stopped Amazon EC2 instances should be removed after a specified time period"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetSecurityControlDefinitionCommand extends $Command
  .classBuilder<
    GetSecurityControlDefinitionCommandInput,
    GetSecurityControlDefinitionCommandOutput,
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
  .s("SecurityHubAPIService", "GetSecurityControlDefinition", {})
  .n("SecurityHubClient", "GetSecurityControlDefinitionCommand")
  .f(void 0, void 0)
  .ser(se_GetSecurityControlDefinitionCommand)
  .de(de_GetSecurityControlDefinitionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSecurityControlDefinitionRequest;
      output: GetSecurityControlDefinitionResponse;
    };
    sdk: {
      input: GetSecurityControlDefinitionCommandInput;
      output: GetSecurityControlDefinitionCommandOutput;
    };
  };
}
