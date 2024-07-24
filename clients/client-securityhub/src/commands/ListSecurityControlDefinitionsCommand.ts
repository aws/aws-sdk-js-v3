// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListSecurityControlDefinitionsRequest, ListSecurityControlDefinitionsResponse } from "../models/models_2";
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
  .ep({
    ...commonParams,
  })
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
  .build() {}
