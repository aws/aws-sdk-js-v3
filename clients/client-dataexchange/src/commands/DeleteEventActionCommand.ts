// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataExchangeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataExchangeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteEventActionRequest } from "../models/models_0";
import { de_DeleteEventActionCommand, se_DeleteEventActionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteEventActionCommand}.
 */
export interface DeleteEventActionCommandInput extends DeleteEventActionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteEventActionCommand}.
 */
export interface DeleteEventActionCommandOutput extends __MetadataBearer {}

/**
 * <p>This operation deletes the event action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, DeleteEventActionCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, DeleteEventActionCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * const client = new DataExchangeClient(config);
 * const input = { // DeleteEventActionRequest
 *   EventActionId: "STRING_VALUE", // required
 * };
 * const command = new DeleteEventActionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteEventActionCommandInput - {@link DeleteEventActionCommandInput}
 * @returns {@link DeleteEventActionCommandOutput}
 * @see {@link DeleteEventActionCommandInput} for command's `input` shape.
 * @see {@link DeleteEventActionCommandOutput} for command's `response` shape.
 * @see {@link DataExchangeClientResolvedConfig | config} for DataExchangeClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception occurred with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource couldn't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request was invalid.</p>
 *
 * @throws {@link DataExchangeServiceException}
 * <p>Base exception class for all service exceptions from DataExchange service.</p>
 *
 *
 * @public
 */
export class DeleteEventActionCommand extends $Command
  .classBuilder<
    DeleteEventActionCommandInput,
    DeleteEventActionCommandOutput,
    DataExchangeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataExchangeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DataExchange", "DeleteEventAction", {})
  .n("DataExchangeClient", "DeleteEventActionCommand")
  .f(void 0, void 0)
  .ser(se_DeleteEventActionCommand)
  .de(de_DeleteEventActionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEventActionRequest;
      output: {};
    };
    sdk: {
      input: DeleteEventActionCommandInput;
      output: DeleteEventActionCommandOutput;
    };
  };
}
