// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeThingRequest, DescribeThingResponse } from "../models/models_1";
import { DescribeThing$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeThingCommand}.
 */
export interface DescribeThingCommandInput extends DescribeThingRequest {}
/**
 * @public
 *
 * The output of {@link DescribeThingCommand}.
 */
export interface DescribeThingCommandOutput extends DescribeThingResponse, __MetadataBearer {}

/**
 * Gets information about the specified thing.
 *
 * Requires permission to access the [DescribeThing](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeThingCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeThingCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // DescribeThingRequest
 *   thingName: "STRING_VALUE", // required
 * };
 * const command = new DescribeThingCommand(input);
 * const response = await client.send(command);
 * // { // DescribeThingResponse
 * //   defaultClientId: "STRING_VALUE",
 * //   thingName: "STRING_VALUE",
 * //   thingId: "STRING_VALUE",
 * //   thingArn: "STRING_VALUE",
 * //   thingTypeName: "STRING_VALUE",
 * //   attributes: { // Attributes
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   version: Number("long"),
 * //   billingGroupName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeThingCommandInput - {@link DescribeThingCommandInput}
 * @returns {@link DescribeThingCommandOutput}
 * @see {@link DescribeThingCommandInput} for command's `input` shape.
 * @see {@link DescribeThingCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is temporarily unavailable.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You are not authorized to perform this operation.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class DescribeThingCommand extends command<DescribeThingCommandInput, DescribeThingCommandOutput>(
  _ep0,
  _mw0,
  "DescribeThing",
  DescribeThing$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeThingRequest;
      output: DescribeThingResponse;
    };
    sdk: {
      input: DescribeThingCommandInput;
      output: DescribeThingCommandOutput;
    };
  };
}
