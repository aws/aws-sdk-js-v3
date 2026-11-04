// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeInstanceAssociationsStatusRequest,
  DescribeInstanceAssociationsStatusResult,
} from "../models/models_0";
import { DescribeInstanceAssociationsStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeInstanceAssociationsStatusCommand}.
 */
export interface DescribeInstanceAssociationsStatusCommandInput extends DescribeInstanceAssociationsStatusRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInstanceAssociationsStatusCommand}.
 */
export interface DescribeInstanceAssociationsStatusCommandOutput extends DescribeInstanceAssociationsStatusResult, __MetadataBearer {}

/**
 * The status of the associations for the managed nodes.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeInstanceAssociationsStatusCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeInstanceAssociationsStatusCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // DescribeInstanceAssociationsStatusRequest
 *   InstanceId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeInstanceAssociationsStatusCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInstanceAssociationsStatusResult
 * //   InstanceAssociationStatusInfos: [ // InstanceAssociationStatusInfos
 * //     { // InstanceAssociationStatusInfo
 * //       AssociationId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       DocumentVersion: "STRING_VALUE",
 * //       AssociationVersion: "STRING_VALUE",
 * //       InstanceId: "STRING_VALUE",
 * //       ExecutionDate: new Date("TIMESTAMP"),
 * //       Status: "STRING_VALUE",
 * //       DetailedStatus: "STRING_VALUE",
 * //       ExecutionSummary: "STRING_VALUE",
 * //       ErrorCode: "STRING_VALUE",
 * //       OutputUrl: { // InstanceAssociationOutputUrl
 * //         S3OutputUrl: { // S3OutputUrl
 * //           OutputUrl: "STRING_VALUE",
 * //         },
 * //       },
 * //       AssociationName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeInstanceAssociationsStatusCommandInput - {@link DescribeInstanceAssociationsStatusCommandInput}
 * @returns {@link DescribeInstanceAssociationsStatusCommandOutput}
 * @see {@link DescribeInstanceAssociationsStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceAssociationsStatusCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * An error occurred on the server side.
 *
 * @throws {@link InvalidInstanceId} (client fault)
 *
 * The following problems can cause this exception:
 *
 * - You don't have permission to access the managed node.
 * - Amazon Web Services Systems Manager Agent (SSM Agent) isn't running. Verify that SSM Agent is running.
 * - SSM Agent isn't registered with the SSM endpoint. Try reinstalling SSM Agent.
 * - The managed node isn't in a valid state. Valid states are: `Running`, `Pending`, `Stopped`, and `Stopping`. Invalid states are: `Shutting-down` and `Terminated`.
 *
 * @throws {@link InvalidNextToken} (client fault)
 *
 * The specified token isn't valid.
 *
 * @throws {@link SSMServiceException}
 *
 * Base exception class for all service exceptions from SSM service.
 *
 * @public
 */
export class DescribeInstanceAssociationsStatusCommand extends command<DescribeInstanceAssociationsStatusCommandInput, DescribeInstanceAssociationsStatusCommandOutput>(
  _ep0,
  _mw0,
  "DescribeInstanceAssociationsStatus",
  DescribeInstanceAssociationsStatus$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeInstanceAssociationsStatusRequest;
      output: DescribeInstanceAssociationsStatusResult;
    };
    sdk: {
      input: DescribeInstanceAssociationsStatusCommandInput;
      output: DescribeInstanceAssociationsStatusCommandOutput;
    };
  };
}
