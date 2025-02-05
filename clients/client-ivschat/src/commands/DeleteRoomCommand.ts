// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IvschatClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvschatClient";
import { DeleteRoomRequest } from "../models/models_0";
import { de_DeleteRoomCommand, se_DeleteRoomCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteRoomCommand}.
 */
export interface DeleteRoomCommandInput extends DeleteRoomRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRoomCommand}.
 */
export interface DeleteRoomCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified room.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvschatClient, DeleteRoomCommand } from "@aws-sdk/client-ivschat"; // ES Modules import
 * // const { IvschatClient, DeleteRoomCommand } = require("@aws-sdk/client-ivschat"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IvschatClient(config);
 * const input = { // DeleteRoomRequest
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteRoomCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRoomCommandInput - {@link DeleteRoomCommandInput}
 * @returns {@link DeleteRoomCommandOutput}
 * @see {@link DeleteRoomCommandInput} for command's `input` shape.
 * @see {@link DeleteRoomCommandOutput} for command's `response` shape.
 * @see {@link IvschatClientResolvedConfig | config} for IvschatClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link PendingVerification} (client fault)
 *  <p/>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link IvschatServiceException}
 * <p>Base exception class for all service exceptions from Ivschat service.</p>
 *
 * @public
 */
export class DeleteRoomCommand extends $Command
  .classBuilder<
    DeleteRoomCommandInput,
    DeleteRoomCommandOutput,
    IvschatClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IvschatClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonInteractiveVideoServiceChat", "DeleteRoom", {})
  .n("IvschatClient", "DeleteRoomCommand")
  .f(void 0, void 0)
  .ser(se_DeleteRoomCommand)
  .de(de_DeleteRoomCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRoomRequest;
      output: {};
    };
    sdk: {
      input: DeleteRoomCommandInput;
      output: DeleteRoomCommandOutput;
    };
  };
}
