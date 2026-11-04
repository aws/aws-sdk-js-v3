// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateDimensionRequest, CreateDimensionResponse } from "../models/models_0";
import { CreateDimension$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateDimensionCommand}.
 */
export interface CreateDimensionCommandInput extends CreateDimensionRequest {}
/**
 * @public
 *
 * The output of {@link CreateDimensionCommand}.
 */
export interface CreateDimensionCommandOutput extends CreateDimensionResponse, __MetadataBearer {}

/**
 * > **Note:** The IoT Device Defender detect feature will no longer be available to new customers starting August 31, 2026. If you would like to use the detect feature, sign up prior to August 31, 2026. To learn about alternatives to IoT Device Defender detect, see IoT Device Defender detect feature availability change in the IoT Device Defender Developer Guide. There is no change to IoT Device Defender audit availability.
 *
 * Create a dimension that you can use to limit the scope of a metric used in a security profile for IoT Device Defender. For example, using a `TOPIC_FILTER` dimension, you can narrow down the scope of the metric only to MQTT topics whose name match the pattern specified in the dimension.
 *
 * Requires permission to access the [CreateDimension](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateDimensionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateDimensionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // CreateDimensionRequest
 *   name: "STRING_VALUE", // required
 *   type: "TOPIC_FILTER", // required
 *   stringValues: [ // DimensionStringValues // required
 *     "STRING_VALUE",
 *   ],
 *   tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   clientRequestToken: "STRING_VALUE", // required
 * };
 * const command = new CreateDimensionCommand(input);
 * const response = await client.send(command);
 * // { // CreateDimensionResponse
 * //   name: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateDimensionCommandInput - {@link CreateDimensionCommandInput}
 * @returns {@link CreateDimensionCommandOutput}
 * @see {@link CreateDimensionCommandInput} for command's `input` shape.
 * @see {@link CreateDimensionCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *
 * A limit has been exceeded.
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *
 * The resource already exists.
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
export class CreateDimensionCommand extends command<CreateDimensionCommandInput, CreateDimensionCommandOutput>(
  _ep0,
  _mw0,
  "CreateDimension",
  CreateDimension$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDimensionRequest;
      output: CreateDimensionResponse;
    };
    sdk: {
      input: CreateDimensionCommandInput;
      output: CreateDimensionCommandOutput;
    };
  };
}
