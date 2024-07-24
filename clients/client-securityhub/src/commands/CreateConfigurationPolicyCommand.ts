// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateConfigurationPolicyRequest, CreateConfigurationPolicyResponse } from "../models/models_2";
import { de_CreateConfigurationPolicyCommand, se_CreateConfigurationPolicyCommand } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateConfigurationPolicyCommand}.
 */
export interface CreateConfigurationPolicyCommandInput extends CreateConfigurationPolicyRequest {}
/**
 * @public
 *
 * The output of {@link CreateConfigurationPolicyCommand}.
 */
export interface CreateConfigurationPolicyCommandOutput extends CreateConfigurationPolicyResponse, __MetadataBearer {}

/**
 * <p>
 *             Creates a configuration policy with the defined configuration. Only the Security Hub delegated administrator
 *             can invoke this operation from the home Region.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, CreateConfigurationPolicyCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, CreateConfigurationPolicyCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // CreateConfigurationPolicyRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   ConfigurationPolicy: { // Policy Union: only one key present
 *     SecurityHub: { // SecurityHubPolicy
 *       ServiceEnabled: true || false,
 *       EnabledStandardIdentifiers: [ // EnabledStandardIdentifierList
 *         "STRING_VALUE",
 *       ],
 *       SecurityControlsConfiguration: { // SecurityControlsConfiguration
 *         EnabledSecurityControlIdentifiers: [ // EnabledSecurityControlIdentifierList
 *           "STRING_VALUE",
 *         ],
 *         DisabledSecurityControlIdentifiers: [ // DisabledSecurityControlIdentifierList
 *           "STRING_VALUE",
 *         ],
 *         SecurityControlCustomParameters: [ // SecurityControlCustomParametersList
 *           { // SecurityControlCustomParameter
 *             SecurityControlId: "STRING_VALUE",
 *             Parameters: { // Parameters
 *               "<keys>": { // ParameterConfiguration
 *                 ValueType: "DEFAULT" || "CUSTOM", // required
 *                 Value: { // ParameterValue Union: only one key present
 *                   Integer: Number("int"),
 *                   IntegerList: [ // IntegerList
 *                     Number("int"),
 *                   ],
 *                   Double: Number("double"),
 *                   String: "STRING_VALUE",
 *                   StringList: [ // StringList
 *                     "STRING_VALUE",
 *                   ],
 *                   Boolean: true || false,
 *                   Enum: "STRING_VALUE",
 *                   EnumList: [
 *                     "STRING_VALUE",
 *                   ],
 *                 },
 *               },
 *             },
 *           },
 *         ],
 *       },
 *     },
 *   },
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateConfigurationPolicyCommand(input);
 * const response = await client.send(command);
 * // { // CreateConfigurationPolicyResponse
 * //   Arn: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   UpdatedAt: new Date("TIMESTAMP"),
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   ConfigurationPolicy: { // Policy Union: only one key present
 * //     SecurityHub: { // SecurityHubPolicy
 * //       ServiceEnabled: true || false,
 * //       EnabledStandardIdentifiers: [ // EnabledStandardIdentifierList
 * //         "STRING_VALUE",
 * //       ],
 * //       SecurityControlsConfiguration: { // SecurityControlsConfiguration
 * //         EnabledSecurityControlIdentifiers: [ // EnabledSecurityControlIdentifierList
 * //           "STRING_VALUE",
 * //         ],
 * //         DisabledSecurityControlIdentifiers: [ // DisabledSecurityControlIdentifierList
 * //           "STRING_VALUE",
 * //         ],
 * //         SecurityControlCustomParameters: [ // SecurityControlCustomParametersList
 * //           { // SecurityControlCustomParameter
 * //             SecurityControlId: "STRING_VALUE",
 * //             Parameters: { // Parameters
 * //               "<keys>": { // ParameterConfiguration
 * //                 ValueType: "DEFAULT" || "CUSTOM", // required
 * //                 Value: { // ParameterValue Union: only one key present
 * //                   Integer: Number("int"),
 * //                   IntegerList: [ // IntegerList
 * //                     Number("int"),
 * //                   ],
 * //                   Double: Number("double"),
 * //                   String: "STRING_VALUE",
 * //                   StringList: [ // StringList
 * //                     "STRING_VALUE",
 * //                   ],
 * //                   Boolean: true || false,
 * //                   Enum: "STRING_VALUE",
 * //                   EnumList: [
 * //                     "STRING_VALUE",
 * //                   ],
 * //                 },
 * //               },
 * //             },
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateConfigurationPolicyCommandInput - {@link CreateConfigurationPolicyCommandInput}
 * @returns {@link CreateConfigurationPolicyCommandOutput}
 * @see {@link CreateConfigurationPolicyCommandInput} for command's `input` shape.
 * @see {@link CreateConfigurationPolicyCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action specified in the request.</p>
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
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>The resource specified in the request conflicts with an existing resource.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 * @public
 */
export class CreateConfigurationPolicyCommand extends $Command
  .classBuilder<
    CreateConfigurationPolicyCommandInput,
    CreateConfigurationPolicyCommandOutput,
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
  .s("SecurityHubAPIService", "CreateConfigurationPolicy", {})
  .n("SecurityHubClient", "CreateConfigurationPolicyCommand")
  .f(void 0, void 0)
  .ser(se_CreateConfigurationPolicyCommand)
  .de(de_CreateConfigurationPolicyCommand)
  .build() {}
