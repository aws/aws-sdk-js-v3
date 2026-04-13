// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetMonitorSettingsRequest, GetMonitorSettingsResponse } from "../models/models_1";
import { GetMonitorSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMonitorSettingsCommand}.
 */
export interface GetMonitorSettingsCommandInput extends GetMonitorSettingsRequest {}
/**
 * @public
 *
 * The output of {@link GetMonitorSettingsCommand}.
 */
export interface GetMonitorSettingsCommandOutput extends GetMonitorSettingsResponse, __MetadataBearer {}

/**
 * <p>Gets the settings for a Deadline Cloud monitor.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, GetMonitorSettingsCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, GetMonitorSettingsCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // GetMonitorSettingsRequest
 *   monitorId: "STRING_VALUE", // required
 * };
 * const command = new GetMonitorSettingsCommand(input);
 * const response = await client.send(command);
 * // { // GetMonitorSettingsResponse
 * //   settings: { // SettingsMap // required
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetMonitorSettingsCommandInput - {@link GetMonitorSettingsCommandInput}
 * @returns {@link GetMonitorSettingsCommandOutput}
 * @see {@link GetMonitorSettingsCommandInput} for command's `input` shape.
 * @see {@link GetMonitorSettingsCommandOutput} for command's `response` shape.
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
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or unsupported characters.</p>
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @example Get monitor settings
 * ```javascript
 * //
 * const input = {
 *   monitorId: "monitor-1234567890abcdef1234567890abcdef"
 * };
 * const command = new GetMonitorSettingsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class GetMonitorSettingsCommand extends $Command
  .classBuilder<
    GetMonitorSettingsCommandInput,
    GetMonitorSettingsCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Deadline", "GetMonitorSettings", {})
  .n("DeadlineClient", "GetMonitorSettingsCommand")
  .sc(GetMonitorSettings$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMonitorSettingsRequest;
      output: GetMonitorSettingsResponse;
    };
    sdk: {
      input: GetMonitorSettingsCommandInput;
      output: GetMonitorSettingsCommandOutput;
    };
  };
}
