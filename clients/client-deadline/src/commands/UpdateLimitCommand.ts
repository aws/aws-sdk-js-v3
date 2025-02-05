// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateLimitRequest, UpdateLimitRequestFilterSensitiveLog, UpdateLimitResponse } from "../models/models_1";
import { de_UpdateLimitCommand, se_UpdateLimitCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateLimitCommand}.
 */
export interface UpdateLimitCommandInput extends UpdateLimitRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLimitCommand}.
 */
export interface UpdateLimitCommandOutput extends UpdateLimitResponse, __MetadataBearer {}

/**
 * <p>Updates the properties of the specified limit. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, UpdateLimitCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, UpdateLimitCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new DeadlineClient(config);
 * const input = { // UpdateLimitRequest
 *   farmId: "STRING_VALUE", // required
 *   limitId: "STRING_VALUE", // required
 *   displayName: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   maxCount: Number("int"),
 * };
 * const command = new UpdateLimitCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateLimitCommandInput - {@link UpdateLimitCommandInput}
 * @returns {@link UpdateLimitCommandOutput}
 * @see {@link UpdateLimitCommandInput} for command's `input` shape.
 * @see {@link UpdateLimitCommandOutput} for command's `response` shape.
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
 * @public
 */
export class UpdateLimitCommand extends $Command
  .classBuilder<
    UpdateLimitCommandInput,
    UpdateLimitCommandOutput,
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
  .s("Deadline", "UpdateLimit", {})
  .n("DeadlineClient", "UpdateLimitCommand")
  .f(UpdateLimitRequestFilterSensitiveLog, void 0)
  .ser(se_UpdateLimitCommand)
  .de(de_UpdateLimitCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateLimitRequest;
      output: {};
    };
    sdk: {
      input: UpdateLimitCommandInput;
      output: UpdateLimitCommandOutput;
    };
  };
}
