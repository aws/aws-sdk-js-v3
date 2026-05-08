// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateAgentSpaceInput, UpdateAgentSpaceOutput } from "../models/models_0";
import { UpdateAgentSpace$ } from "../schemas/schemas_0";
import type { SecurityAgentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityAgentClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAgentSpaceCommand}.
 */
export interface UpdateAgentSpaceCommandInput extends UpdateAgentSpaceInput {}
/**
 * @public
 *
 * The output of {@link UpdateAgentSpaceCommand}.
 */
export interface UpdateAgentSpaceCommandOutput extends UpdateAgentSpaceOutput, __MetadataBearer {}

/**
 * <p>Updates the configuration of an existing agent space, including its name, description, AWS resources, target domains, and code review settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, UpdateAgentSpaceCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, UpdateAgentSpaceCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // UpdateAgentSpaceInput
 *   agentSpaceId: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   awsResources: { // AWSResources
 *     vpcs: [ // VpcConfigs
 *       { // VpcConfig
 *         vpcArn: "STRING_VALUE",
 *         securityGroupArns: [ // SecurityGroupArns
 *           "STRING_VALUE",
 *         ],
 *         subnetArns: [ // SubnetArns
 *           "STRING_VALUE",
 *         ],
 *       },
 *     ],
 *     logGroups: [ // LogGroupArns
 *       "STRING_VALUE",
 *     ],
 *     s3Buckets: [ // S3BucketArns
 *       "STRING_VALUE",
 *     ],
 *     secretArns: [ // SecretArns
 *       "STRING_VALUE",
 *     ],
 *     lambdaFunctionArns: [ // LambdaFunctionArns
 *       "STRING_VALUE",
 *     ],
 *     iamRoles: [ // IamRoles
 *       "STRING_VALUE",
 *     ],
 *   },
 *   targetDomainIds: [ // TargetDomainIdList
 *     "STRING_VALUE",
 *   ],
 *   codeReviewSettings: { // CodeReviewSettings
 *     controlsScanning: true || false, // required
 *     generalPurposeScanning: true || false, // required
 *   },
 * };
 * const command = new UpdateAgentSpaceCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAgentSpaceOutput
 * //   agentSpaceId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   awsResources: { // AWSResources
 * //     vpcs: [ // VpcConfigs
 * //       { // VpcConfig
 * //         vpcArn: "STRING_VALUE",
 * //         securityGroupArns: [ // SecurityGroupArns
 * //           "STRING_VALUE",
 * //         ],
 * //         subnetArns: [ // SubnetArns
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //     logGroups: [ // LogGroupArns
 * //       "STRING_VALUE",
 * //     ],
 * //     s3Buckets: [ // S3BucketArns
 * //       "STRING_VALUE",
 * //     ],
 * //     secretArns: [ // SecretArns
 * //       "STRING_VALUE",
 * //     ],
 * //     lambdaFunctionArns: [ // LambdaFunctionArns
 * //       "STRING_VALUE",
 * //     ],
 * //     iamRoles: [ // IamRoles
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   targetDomainIds: [ // TargetDomainIdList
 * //     "STRING_VALUE",
 * //   ],
 * //   codeReviewSettings: { // CodeReviewSettings
 * //     controlsScanning: true || false, // required
 * //     generalPurposeScanning: true || false, // required
 * //   },
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateAgentSpaceCommandInput - {@link UpdateAgentSpaceCommandInput}
 * @returns {@link UpdateAgentSpaceCommandOutput}
 * @see {@link UpdateAgentSpaceCommandInput} for command's `input` shape.
 * @see {@link UpdateAgentSpaceCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link SecurityAgentServiceException}
 * <p>Base exception class for all service exceptions from SecurityAgent service.</p>
 *
 *
 * @public
 */
export class UpdateAgentSpaceCommand extends $Command
  .classBuilder<
    UpdateAgentSpaceCommandInput,
    UpdateAgentSpaceCommandOutput,
    SecurityAgentClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityAgentClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityAgent", "UpdateAgentSpace", {})
  .n("SecurityAgentClient", "UpdateAgentSpaceCommand")
  .sc(UpdateAgentSpace$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAgentSpaceInput;
      output: UpdateAgentSpaceOutput;
    };
    sdk: {
      input: UpdateAgentSpaceCommandInput;
      output: UpdateAgentSpaceCommandOutput;
    };
  };
}
