// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetConfigurationPolicyRequest, GetConfigurationPolicyResponse } from "../models/models_2";
import { de_GetConfigurationPolicyCommand, se_GetConfigurationPolicyCommand } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetConfigurationPolicyCommand}.
 */
export interface GetConfigurationPolicyCommandInput extends GetConfigurationPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetConfigurationPolicyCommand}.
 */
export interface GetConfigurationPolicyCommandOutput extends GetConfigurationPolicyResponse, __MetadataBearer {}

/**
 * <p>
 *             Provides information about a configuration policy. Only the Security Hub delegated administrator can invoke
 *             this operation from the home Region.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, GetConfigurationPolicyCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, GetConfigurationPolicyCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // GetConfigurationPolicyRequest
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new GetConfigurationPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetConfigurationPolicyResponse
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
 * @param GetConfigurationPolicyCommandInput - {@link GetConfigurationPolicyCommandInput}
 * @returns {@link GetConfigurationPolicyCommandOutput}
 * @see {@link GetConfigurationPolicyCommandInput} for command's `input` shape.
 * @see {@link GetConfigurationPolicyCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because we can't find the specified resource.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 *
 * @example To get details about a configuration policy
 * ```javascript
 * // This operation provides details about the specified configuration policy.
 * const input = {
 *   Identifier: "arn:aws:securityhub:us-east-1:123456789012:configuration-policy/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111"
 * };
 * const command = new GetConfigurationPolicyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Arn: "arn:aws:securityhub:us-east-1:123456789012:configuration-policy/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *   ConfigurationPolicy: {
 *     SecurityHub: {
 *       EnabledStandardIdentifiers: [
 *         "arn:aws:securityhub:us-east-1::standards/aws-foundational-security-best-practices/v/1.0.0",
 *         "arn:aws:securityhub:::ruleset/cis-aws-foundations-benchmark/v/1.2.0"
 *       ],
 *       SecurityControlsConfiguration: {
 *         DisabledSecurityControlIdentifiers: [
 *           "CloudWatch.1"
 *         ],
 *         SecurityControlCustomParameters: [
 *           {
 *             Parameters: {
 *               daysToExpiration: {
 *                 Value: {
 *                   Integer: 14
 *                 },
 *                 ValueType: "CUSTOM"
 *               }
 *             },
 *             SecurityControlId: "ACM.1"
 *           }
 *         ]
 *       },
 *       ServiceEnabled: true
 *     }
 *   },
 *   CreatedAt: "2023-01-11T06:17:17.154Z",
 *   Description: "Configuration policy for testing FSBP and CIS",
 *   Id: "a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *   Name: "TestConfigurationPolicy",
 *   UpdatedAt: "2023-01-11T06:17:17.154Z"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetConfigurationPolicyCommand extends $Command
  .classBuilder<
    GetConfigurationPolicyCommandInput,
    GetConfigurationPolicyCommandOutput,
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
  .s("SecurityHubAPIService", "GetConfigurationPolicy", {})
  .n("SecurityHubClient", "GetConfigurationPolicyCommand")
  .f(void 0, void 0)
  .ser(se_GetConfigurationPolicyCommand)
  .de(de_GetConfigurationPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetConfigurationPolicyRequest;
      output: GetConfigurationPolicyResponse;
    };
    sdk: {
      input: GetConfigurationPolicyCommandInput;
      output: GetConfigurationPolicyCommandOutput;
    };
  };
}
