// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateConfigurationPolicyRequest, UpdateConfigurationPolicyResponse } from "../models/models_3";
import { UpdateConfigurationPolicy$ } from "../schemas/schemas_0";
import type { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateConfigurationPolicyCommand}.
 */
export interface UpdateConfigurationPolicyCommandInput extends UpdateConfigurationPolicyRequest {}
/**
 * @public
 *
 * The output of {@link UpdateConfigurationPolicyCommand}.
 */
export interface UpdateConfigurationPolicyCommandOutput extends UpdateConfigurationPolicyResponse, __MetadataBearer {}

/**
 * <p>
 *             Updates a configuration policy. Only the Security Hub delegated
 *             administrator can invoke this operation from the home Region.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, UpdateConfigurationPolicyCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, UpdateConfigurationPolicyCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // UpdateConfigurationPolicyRequest
 *   Identifier: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   UpdatedReason: "STRING_VALUE",
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
 * };
 * const command = new UpdateConfigurationPolicyCommand(input);
 * const response = await client.send(command);
 * // { // UpdateConfigurationPolicyResponse
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
 * @param UpdateConfigurationPolicyCommandInput - {@link UpdateConfigurationPolicyCommandInput}
 * @returns {@link UpdateConfigurationPolicyCommandOutput}
 * @see {@link UpdateConfigurationPolicyCommandInput} for command's `input` shape.
 * @see {@link UpdateConfigurationPolicyCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because we can't find the specified resource.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 *
 * @example To update a configuration policy
 * ```javascript
 * // This operation updates the specified configuration policy.
 * const input = {
 *   ConfigurationPolicy: {
 *     SecurityHub: {
 *       EnabledStandardIdentifiers: [
 *         "arn:aws:securityhub:us-east-1::standards/aws-foundational-security-best-practices/v/1.0.0",
 *         "arn:aws:securityhub:::ruleset/cis-aws-foundations-benchmark/v/1.2.0"
 *       ],
 *       SecurityControlsConfiguration: {
 *         DisabledSecurityControlIdentifiers: [
 *           "CloudWatch.1",
 *           "CloudWatch.2"
 *         ],
 *         SecurityControlCustomParameters: [
 *           {
 *             Parameters: {
 *               daysToExpiration: {
 *                 Value: {
 *                   Integer: 21
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
 *   Description: "Updated configuration policy for testing FSBP and CIS",
 *   Identifier: "arn:aws:securityhub:us-east-1:123456789012:configuration-policy/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *   Name: "TestConfigurationPolicy",
 *   UpdatedReason: "Enabling ACM.2"
 * };
 * const command = new UpdateConfigurationPolicyCommand(input);
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
 *           "CloudWatch.1",
 *           "CloudWatch.2"
 *         ],
 *         SecurityControlCustomParameters: [
 *           {
 *             Parameters: {
 *               daysToExpiration: {
 *                 Value: {
 *                   Integer: 21
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
 *   Description: "Updated configuration policy for testing FSBP and CIS",
 *   Id: "a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *   Name: "TestConfigurationPolicy",
 *   UpdatedAt: "2023-01-12T06:17:17.154Z"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateConfigurationPolicyCommand extends $Command
  .classBuilder<
    UpdateConfigurationPolicyCommandInput,
    UpdateConfigurationPolicyCommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityHubAPIService", "UpdateConfigurationPolicy", {})
  .n("SecurityHubClient", "UpdateConfigurationPolicyCommand")
  .sc(UpdateConfigurationPolicy$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateConfigurationPolicyRequest;
      output: UpdateConfigurationPolicyResponse;
    };
    sdk: {
      input: UpdateConfigurationPolicyCommandInput;
      output: UpdateConfigurationPolicyCommandOutput;
    };
  };
}
