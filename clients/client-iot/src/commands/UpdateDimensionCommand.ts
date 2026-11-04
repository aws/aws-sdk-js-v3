// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateDimensionRequest, UpdateDimensionResponse } from "../models/models_2";
import { UpdateDimension$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateDimensionCommand}.
 */
export interface UpdateDimensionCommandInput extends UpdateDimensionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDimensionCommand}.
 */
export interface UpdateDimensionCommandOutput extends UpdateDimensionResponse, __MetadataBearer {}

/**
 * > **Note:** The IoT Device Defender detect feature will no longer be available to new customers starting August 31, 2026. If you would like to use the detect feature, sign up prior to August 31, 2026. To learn about alternatives to IoT Device Defender detect, see IoT Device Defender detect feature availability change in the IoT Device Defender Developer Guide. There is no change to IoT Device Defender audit availability.
 *
 * Updates the definition for a dimension. You cannot change the type of a dimension after it is created (you can delete it and recreate it).
 *
 * Requires permission to access the [UpdateDimension](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateDimensionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateDimensionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // UpdateDimensionRequest
 *   name: "STRING_VALUE", // required
 *   stringValues: [ // DimensionStringValues // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateDimensionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDimensionResponse
 * //   name: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   type: "TOPIC_FILTER",
 * //   stringValues: [ // DimensionStringValues
 * //     "STRING_VALUE",
 * //   ],
 * //   creationDate: new Date("TIMESTAMP"),
 * //   lastModifiedDate: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateDimensionCommandInput - {@link UpdateDimensionCommandInput}
 * @returns {@link UpdateDimensionCommandOutput}
 * @see {@link UpdateDimensionCommandInput} for command's `input` shape.
 * @see {@link UpdateDimensionCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
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
export class UpdateDimensionCommand extends command<UpdateDimensionCommandInput, UpdateDimensionCommandOutput>(
  _ep0,
  _mw0,
  "UpdateDimension",
  UpdateDimension$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDimensionRequest;
      output: UpdateDimensionResponse;
    };
    sdk: {
      input: UpdateDimensionCommandInput;
      output: UpdateDimensionCommandOutput;
    };
  };
}
