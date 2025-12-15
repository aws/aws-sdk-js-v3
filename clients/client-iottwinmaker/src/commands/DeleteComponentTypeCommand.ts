// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTTwinMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTTwinMakerClient";
import type { DeleteComponentTypeRequest, DeleteComponentTypeResponse } from "../models/models_0";
import { DeleteComponentType$ } from "../schemas/schemas_0";

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
 * // import type { IoTTwinMakerClientConfig } from "@aws-sdk/client-iottwinmaker";
 * const config = {}; // type is IoTTwinMakerClientConfig
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIoTTwinMaker", "DeleteComponentType", {})
  .n("IoTTwinMakerClient", "DeleteComponentTypeCommand")
  .sc(DeleteComponentType$)
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
