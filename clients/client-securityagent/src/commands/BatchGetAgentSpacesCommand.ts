// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchGetAgentSpacesInput, BatchGetAgentSpacesOutput } from "../models/models_0";
import { BatchGetAgentSpaces$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchGetAgentSpacesCommand}.
 */
export interface BatchGetAgentSpacesCommandInput extends BatchGetAgentSpacesInput {}
/**
 * @public
 *
 * The output of {@link BatchGetAgentSpacesCommand}.
 */
export interface BatchGetAgentSpacesCommandOutput extends BatchGetAgentSpacesOutput, __MetadataBearer {}

/**
 * <p>Retrieves information about one or more agent spaces.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, BatchGetAgentSpacesCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, BatchGetAgentSpacesCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // BatchGetAgentSpacesInput
 *   agentSpaceIds: [ // AgentSpaceIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetAgentSpacesCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetAgentSpacesOutput
 * //   agentSpaces: [ // AgentSpaceList
 * //     { // AgentSpace
 * //       agentSpaceId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       awsResources: { // AWSResources
 * //         vpcs: [ // VpcConfigs
 * //           { // VpcConfig
 * //             vpcArn: "STRING_VALUE",
 * //             securityGroupArns: [ // SecurityGroupArns
 * //               "STRING_VALUE",
 * //             ],
 * //             subnetArns: [ // SubnetArns
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //         logGroups: [ // LogGroupArns
 * //           "STRING_VALUE",
 * //         ],
 * //         s3Buckets: [ // S3BucketArns
 * //           "STRING_VALUE",
 * //         ],
 * //         secretArns: [ // SecretArns
 * //           "STRING_VALUE",
 * //         ],
 * //         lambdaFunctionArns: [ // LambdaFunctionArns
 * //           "STRING_VALUE",
 * //         ],
 * //         iamRoles: [ // IamRoles
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       targetDomainIds: [ // TargetDomainIdList
 * //         "STRING_VALUE",
 * //       ],
 * //       codeReviewSettings: { // CodeReviewSettings
 * //         controlsScanning: true || false, // required
 * //         generalPurposeScanning: true || false, // required
 * //       },
 * //       kmsKeyId: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   notFound: [ // AgentSpaceIdList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetAgentSpacesCommandInput - {@link BatchGetAgentSpacesCommandInput}
 * @returns {@link BatchGetAgentSpacesCommandOutput}
 * @see {@link BatchGetAgentSpacesCommandInput} for command's `input` shape.
 * @see {@link BatchGetAgentSpacesCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link SecurityAgentServiceException}
 * <p>Base exception class for all service exceptions from SecurityAgent service.</p>
 *
 *
 * @public
 */
export class BatchGetAgentSpacesCommand extends command<BatchGetAgentSpacesCommandInput, BatchGetAgentSpacesCommandOutput>(
  _ep0,
  _mw0,
  "BatchGetAgentSpaces",
  BatchGetAgentSpaces$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetAgentSpacesInput;
      output: BatchGetAgentSpacesOutput;
    };
    sdk: {
      input: BatchGetAgentSpacesCommandInput;
      output: BatchGetAgentSpacesCommandOutput;
    };
  };
}
