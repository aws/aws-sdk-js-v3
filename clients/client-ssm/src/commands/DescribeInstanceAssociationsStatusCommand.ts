// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeInstanceAssociationsStatusRequest,
  DescribeInstanceAssociationsStatusResult,
} from "../models/models_0";
import { DescribeInstanceAssociationsStatus } from "../schemas/schemas_11_Association";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface DescribeInstanceAssociationsStatusCommandOutput
  extends DescribeInstanceAssociationsStatusResult,
    __MetadataBearer {}

/**
 * <p>The status of the associations for the managed nodes.</p>
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
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidInstanceId} (client fault)
 *  <p>The following problems can cause this exception:</p>
 *          <ul>
 *             <li>
 *                <p>You don't have permission to access the managed node.</p>
 *             </li>
 *             <li>
 *                <p>Amazon Web Services Systems Manager Agent (SSM Agent) isn't running. Verify that SSM Agent is
 *      running.</p>
 *             </li>
 *             <li>
 *                <p>SSM Agent isn't registered with the SSM endpoint. Try reinstalling SSM Agent.</p>
 *             </li>
 *             <li>
 *                <p>The managed node isn't in a valid state. Valid states are: <code>Running</code>,
 *       <code>Pending</code>, <code>Stopped</code>, and <code>Stopping</code>. Invalid states are:
 *       <code>Shutting-down</code> and <code>Terminated</code>.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The specified token isn't valid.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class DescribeInstanceAssociationsStatusCommand extends $Command
  .classBuilder<
    DescribeInstanceAssociationsStatusCommandInput,
    DescribeInstanceAssociationsStatusCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSSM", "DescribeInstanceAssociationsStatus", {})
  .n("SSMClient", "DescribeInstanceAssociationsStatusCommand")
  .sc(DescribeInstanceAssociationsStatus)
  .build() {
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
