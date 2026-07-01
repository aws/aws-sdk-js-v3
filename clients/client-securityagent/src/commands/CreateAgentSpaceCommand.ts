// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAgentSpaceInput, CreateAgentSpaceOutput } from "../models/models_0";
import { CreateAgentSpace$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAgentSpaceCommand}.
 */
export interface CreateAgentSpaceCommandInput extends CreateAgentSpaceInput {}
/**
 * @public
 *
 * The output of {@link CreateAgentSpaceCommand}.
 */
export interface CreateAgentSpaceCommandOutput extends CreateAgentSpaceOutput, __MetadataBearer {}

/**
 * <p>Creates a new agent space. An agent space is a dedicated workspace for securing a specific application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityAgentClient, CreateAgentSpaceCommand } from "@aws-sdk/client-securityagent"; // ES Modules import
 * // const { SecurityAgentClient, CreateAgentSpaceCommand } = require("@aws-sdk/client-securityagent"); // CommonJS import
 * // import type { SecurityAgentClientConfig } from "@aws-sdk/client-securityagent";
 * const config = {}; // type is SecurityAgentClientConfig
 * const client = new SecurityAgentClient(config);
 * const input = { // CreateAgentSpaceInput
 *   name: "STRING_VALUE", // required
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
 *   kmsKeyId: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateAgentSpaceCommand(input);
 * const response = await client.send(command);
 * // { // CreateAgentSpaceOutput
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
 * //   kmsKeyId: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateAgentSpaceCommandInput - {@link CreateAgentSpaceCommandInput}
 * @returns {@link CreateAgentSpaceCommandOutput}
 * @see {@link CreateAgentSpaceCommandInput} for command's `input` shape.
 * @see {@link CreateAgentSpaceCommandOutput} for command's `response` shape.
 * @see {@link SecurityAgentClientResolvedConfig | config} for SecurityAgentClient's `config` shape.
 *
 * @throws {@link SecurityAgentServiceException}
 * <p>Base exception class for all service exceptions from SecurityAgent service.</p>
 *
 *
 * @public
 */
export class CreateAgentSpaceCommand extends command<CreateAgentSpaceCommandInput, CreateAgentSpaceCommandOutput>(
  _ep0,
  _mw0,
  "CreateAgentSpace",
  CreateAgentSpace$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAgentSpaceInput;
      output: CreateAgentSpaceOutput;
    };
    sdk: {
      input: CreateAgentSpaceCommandInput;
      output: CreateAgentSpaceCommandOutput;
    };
  };
}
