// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTTwinMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTTwinMakerClient";
import { DeleteComponentTypeRequest, DeleteComponentTypeResponse } from "../models/models_0";
import { de_DeleteComponentTypeCommand, se_DeleteComponentTypeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteComponentTypeCommand}.
 */
export interface DeleteComponentTypeCommandInput extends DeleteComponentTypeRequest {}
/**
 * @public
 *
 * The output of {@link DeleteComponentTypeCommand}.
 */
export interface DeleteComponentTypeCommandOutput extends DeleteComponentTypeResponse, __MetadataBearer {}

/**
 * <p>Deletes a component type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTTwinMakerClient, DeleteComponentTypeCommand } from "@aws-sdk/client-iottwinmaker"; // ES Modules import
 * // const { IoTTwinMakerClient, DeleteComponentTypeCommand } = require("@aws-sdk/client-iottwinmaker"); // CommonJS import
 * const client = new IoTTwinMakerClient(config);
 * const input = { // DeleteComponentTypeRequest
 *   workspaceId: "STRING_VALUE", // required
 *   componentTypeId: "STRING_VALUE", // required
 * };
 * const command = new DeleteComponentTypeCommand(input);
 * const response = await client.send(command);
 * // { // DeleteComponentTypeResponse
 * //   state: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteComponentTypeCommandInput - {@link DeleteComponentTypeCommandInput}
 * @returns {@link DeleteComponentTypeCommandOutput}
 * @see {@link DeleteComponentTypeCommandInput} for command's `input` shape.
 * @see {@link DeleteComponentTypeCommandOutput} for command's `response` shape.
 * @see {@link IoTTwinMakerClientResolvedConfig | config} for IoTTwinMakerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource wasn't found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Failed</p>
 *
 * @throws {@link IoTTwinMakerServiceException}
 * <p>Base exception class for all service exceptions from IoTTwinMaker service.</p>
 *
 *
 * @public
 */
export class DeleteComponentTypeCommand extends $Command
  .classBuilder<
    DeleteComponentTypeCommandInput,
    DeleteComponentTypeCommandOutput,
    IoTTwinMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTTwinMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIoTTwinMaker", "DeleteComponentType", {})
  .n("IoTTwinMakerClient", "DeleteComponentTypeCommand")
  .f(void 0, void 0)
  .ser(se_DeleteComponentTypeCommand)
  .de(de_DeleteComponentTypeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteComponentTypeRequest;
      output: DeleteComponentTypeResponse;
    };
    sdk: {
      input: DeleteComponentTypeCommandInput;
      output: DeleteComponentTypeCommandOutput;
    };
  };
}
