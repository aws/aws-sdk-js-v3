// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateMonitorRequest, UpdateMonitorResponse } from "../models/models_1";
import { de_UpdateMonitorCommand, se_UpdateMonitorCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateMonitorCommand}.
 */
export interface UpdateMonitorCommandInput extends UpdateMonitorRequest {}
/**
 * @public
 *
 * The output of {@link UpdateMonitorCommand}.
 */
export interface UpdateMonitorCommandOutput extends UpdateMonitorResponse, __MetadataBearer {}

/**
 * <p>Modifies the settings for a Deadline Cloud monitor. You can modify one or all of the settings
 *          when you call <code>UpdateMonitor</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, UpdateMonitorCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, UpdateMonitorCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * const client = new DeadlineClient(config);
 * const input = { // UpdateMonitorRequest
 *   monitorId: "STRING_VALUE", // required
 *   subdomain: "STRING_VALUE",
 *   displayName: "STRING_VALUE",
 *   roleArn: "STRING_VALUE",
 * };
 * const command = new UpdateMonitorCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateMonitorCommandInput - {@link UpdateMonitorCommandInput}
 * @returns {@link UpdateMonitorCommandOutput}
 * @see {@link UpdateMonitorCommandInput} for command's `input` shape.
 * @see {@link UpdateMonitorCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Deadline Cloud can't process your request right now. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *          unsupported characters.</p>
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @public
 */
export class UpdateMonitorCommand extends $Command
  .classBuilder<
    UpdateMonitorCommandInput,
    UpdateMonitorCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Deadline", "UpdateMonitor", {})
  .n("DeadlineClient", "UpdateMonitorCommand")
  .f(void 0, void 0)
  .ser(se_UpdateMonitorCommand)
  .de(de_UpdateMonitorCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateMonitorRequest;
      output: {};
    };
    sdk: {
      input: UpdateMonitorCommandInput;
      output: UpdateMonitorCommandOutput;
    };
  };
}
