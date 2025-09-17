// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteFlowLogsRequest, DeleteFlowLogsResult } from "../models/models_3";
import { de_DeleteFlowLogsCommand, se_DeleteFlowLogsCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteFlowLogsCommand}.
 */
export interface DeleteFlowLogsCommandInput extends DeleteFlowLogsRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFlowLogsCommand}.
 */
export interface DeleteFlowLogsCommandOutput extends DeleteFlowLogsResult, __MetadataBearer {}

/**
 * <p>Deletes one or more flow logs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteFlowLogsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteFlowLogsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeleteFlowLogsRequest
 *   DryRun: true || false,
 *   FlowLogIds: [ // FlowLogIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DeleteFlowLogsCommand(input);
 * const response = await client.send(command);
 * // { // DeleteFlowLogsResult
 * //   Unsuccessful: [ // UnsuccessfulItemSet
 * //     { // UnsuccessfulItem
 * //       Error: { // UnsuccessfulItemError
 * //         Code: "STRING_VALUE",
 * //         Message: "STRING_VALUE",
 * //       },
 * //       ResourceId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DeleteFlowLogsCommandInput - {@link DeleteFlowLogsCommandInput}
 * @returns {@link DeleteFlowLogsCommandOutput}
 * @see {@link DeleteFlowLogsCommandInput} for command's `input` shape.
 * @see {@link DeleteFlowLogsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeleteFlowLogsCommand extends $Command
  .classBuilder<
    DeleteFlowLogsCommandInput,
    DeleteFlowLogsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "DeleteFlowLogs", {})
  .n("EC2Client", "DeleteFlowLogsCommand")
  .f(void 0, void 0)
  .ser(se_DeleteFlowLogsCommand)
  .de(de_DeleteFlowLogsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFlowLogsRequest;
      output: DeleteFlowLogsResult;
    };
    sdk: {
      input: DeleteFlowLogsCommandInput;
      output: DeleteFlowLogsCommandOutput;
    };
  };
}
