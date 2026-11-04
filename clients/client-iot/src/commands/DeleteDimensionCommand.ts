// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteDimensionRequest, DeleteDimensionResponse } from "../models/models_0";
import { DeleteDimension$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * > **Note:** The IoT Device Defender detect feature will no longer be available to new customers starting August 31, 2026. If you would like to use the detect feature, sign up prior to August 31, 2026. To learn about alternatives to IoT Device Defender detect, see IoT Device Defender detect feature availability change in the IoT Device Defender Developer Guide. There is no change to IoT Device Defender audit availability.
 *
 * Removes the specified dimension from your Amazon Web Services accounts.
 *
 * Requires permission to access the [DeleteDimension](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
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
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class DeleteDimensionCommand extends command<DeleteDimensionCommandInput, DeleteDimensionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteDimension",
  DeleteDimension$
) {
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
