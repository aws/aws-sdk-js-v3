// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeExecutionInput, DescribeExecutionOutput } from "../models/models_0";
import { de_DescribeExecutionCommand, se_DescribeExecutionCommand } from "../protocols/Aws_restJson1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  SnowDeviceManagementClientResolvedConfig,
} from "../SnowDeviceManagementClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeExecutionCommand}.
 */
export interface DescribeExecutionCommandInput extends DescribeExecutionInput {}
/**
 * @public
 *
 * The output of {@link DescribeExecutionCommand}.
 */
export interface DescribeExecutionCommandOutput extends DescribeExecutionOutput, __MetadataBearer {}

/**
 * <p>Checks the status of a remote task running on one or more target devices.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowDeviceManagementClient, DescribeExecutionCommand } from "@aws-sdk/client-snow-device-management"; // ES Modules import
 * // const { SnowDeviceManagementClient, DescribeExecutionCommand } = require("@aws-sdk/client-snow-device-management"); // CommonJS import
 * const client = new SnowDeviceManagementClient(config);
 * const input = { // DescribeExecutionInput
 *   taskId: "STRING_VALUE", // required
 *   managedDeviceId: "STRING_VALUE", // required
 * };
 * const command = new DescribeExecutionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeExecutionOutput
 * //   taskId: "STRING_VALUE",
 * //   executionId: "STRING_VALUE",
 * //   managedDeviceId: "STRING_VALUE",
 * //   state: "STRING_VALUE",
 * //   startedAt: new Date("TIMESTAMP"),
 * //   lastUpdatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeExecutionCommandInput - {@link DescribeExecutionCommandInput}
 * @returns {@link DescribeExecutionCommandOutput}
 * @see {@link DescribeExecutionCommandInput} for command's `input` shape.
 * @see {@link DescribeExecutionCommandOutput} for command's `response` shape.
 * @see {@link SnowDeviceManagementClientResolvedConfig | config} for SnowDeviceManagementClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link SnowDeviceManagementServiceException}
 * <p>Base exception class for all service exceptions from SnowDeviceManagement service.</p>
 *
 * @public
 */
export class DescribeExecutionCommand extends $Command
  .classBuilder<
    DescribeExecutionCommandInput,
    DescribeExecutionCommandOutput,
    SnowDeviceManagementClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SnowDeviceManagementClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SnowDeviceManagement", "DescribeExecution", {})
  .n("SnowDeviceManagementClient", "DescribeExecutionCommand")
  .f(void 0, void 0)
  .ser(se_DescribeExecutionCommand)
  .de(de_DescribeExecutionCommand)
  .build() {}
