// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteFarmRequest, DeleteFarmResponse } from "../models/models_0";
import { de_DeleteFarmCommand, se_DeleteFarmCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteFarmCommand}.
 */
export interface DeleteFarmCommandInput extends DeleteFarmRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFarmCommand}.
 */
export interface DeleteFarmCommandOutput extends DeleteFarmResponse, __MetadataBearer {}

/**
 * <p>Deletes a farm.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, DeleteFarmCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, DeleteFarmCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * const client = new DeadlineClient(config);
 * const input = { // DeleteFarmRequest
 *   farmId: "STRING_VALUE", // required
 * };
 * const command = new DeleteFarmCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteFarmCommandInput - {@link DeleteFarmCommandInput}
 * @returns {@link DeleteFarmCommandOutput}
 * @see {@link DeleteFarmCommandInput} for command's `input` shape.
 * @see {@link DeleteFarmCommandOutput} for command's `response` shape.
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
export class DeleteFarmCommand extends $Command
  .classBuilder<
    DeleteFarmCommandInput,
    DeleteFarmCommandOutput,
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
  .s("Deadline", "DeleteFarm", {})
  .n("DeadlineClient", "DeleteFarmCommand")
  .f(void 0, void 0)
  .ser(se_DeleteFarmCommand)
  .de(de_DeleteFarmCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFarmRequest;
      output: {};
    };
    sdk: {
      input: DeleteFarmCommandInput;
      output: DeleteFarmCommandOutput;
    };
  };
}
