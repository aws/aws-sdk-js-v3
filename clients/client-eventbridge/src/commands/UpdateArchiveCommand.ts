// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { UpdateArchiveRequest, UpdateArchiveResponse } from "../models/models_0";
import { de_UpdateArchiveCommand, se_UpdateArchiveCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateArchiveCommand}.
 */
export interface UpdateArchiveCommandInput extends UpdateArchiveRequest {}
/**
 * @public
 *
 * The output of {@link UpdateArchiveCommand}.
 */
export interface UpdateArchiveCommandOutput extends UpdateArchiveResponse, __MetadataBearer {}

/**
 * <p>Updates the specified archive.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, UpdateArchiveCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, UpdateArchiveCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const input = { // UpdateArchiveRequest
 *   ArchiveName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   EventPattern: "STRING_VALUE",
 *   RetentionDays: Number("int"),
 *   KmsKeyIdentifier: "STRING_VALUE",
 * };
 * const command = new UpdateArchiveCommand(input);
 * const response = await client.send(command);
 * // { // UpdateArchiveResponse
 * //   ArchiveArn: "STRING_VALUE",
 * //   State: "ENABLED" || "DISABLED" || "CREATING" || "UPDATING" || "CREATE_FAILED" || "UPDATE_FAILED",
 * //   StateReason: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateArchiveCommandInput - {@link UpdateArchiveCommandInput}
 * @returns {@link UpdateArchiveCommandOutput}
 * @see {@link UpdateArchiveCommandInput} for command's `input` shape.
 * @see {@link UpdateArchiveCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for EventBridgeClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>There is concurrent modification on a rule, target, archive, or replay.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link InvalidEventPatternException} (client fault)
 *  <p>The event pattern is not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request failed because it attempted to create resource beyond the allowed service
 *       quota.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An entity that you specified does not exist.</p>
 *
 * @throws {@link EventBridgeServiceException}
 * <p>Base exception class for all service exceptions from EventBridge service.</p>
 *
 *
 * @public
 */
export class UpdateArchiveCommand extends $Command
  .classBuilder<
    UpdateArchiveCommandInput,
    UpdateArchiveCommandOutput,
    EventBridgeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EventBridgeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSEvents", "UpdateArchive", {})
  .n("EventBridgeClient", "UpdateArchiveCommand")
  .f(void 0, void 0)
  .ser(se_UpdateArchiveCommand)
  .de(de_UpdateArchiveCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateArchiveRequest;
      output: UpdateArchiveResponse;
    };
    sdk: {
      input: UpdateArchiveCommandInput;
      output: UpdateArchiveCommandOutput;
    };
  };
}
