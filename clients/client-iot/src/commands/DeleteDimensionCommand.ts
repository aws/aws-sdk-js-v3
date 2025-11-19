// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DeleteDimensionRequest, DeleteDimensionResponse } from "../models/models_0";
import { DeleteDimension } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDimensionCommand}.
 */
export interface DeleteDimensionCommandInput extends DeleteDimensionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDimensionCommand}.
 */
export interface DeleteDimensionCommandOutput extends DeleteDimensionResponse, __MetadataBearer {}

/**
 * <p>Removes the specified dimension from your Amazon Web Services accounts.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteDimension</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteDimensionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteDimensionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // DeleteDimensionRequest
 *   name: "STRING_VALUE", // required
 * };
 * const command = new DeleteDimensionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDimensionCommandInput - {@link DeleteDimensionCommandInput}
 * @returns {@link DeleteDimensionCommandOutput}
 * @see {@link DeleteDimensionCommandInput} for command's `input` shape.
 * @see {@link DeleteDimensionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class DeleteDimensionCommand extends $Command
  .classBuilder<
    DeleteDimensionCommandInput,
    DeleteDimensionCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "DeleteDimension", {})
  .n("IoTClient", "DeleteDimensionCommand")
  .sc(DeleteDimension)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDimensionRequest;
      output: {};
    };
    sdk: {
      input: DeleteDimensionCommandInput;
      output: DeleteDimensionCommandOutput;
    };
  };
}
