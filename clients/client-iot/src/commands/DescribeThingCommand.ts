// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import type { DescribeThingRequest, DescribeThingResponse } from "../models/models_1";
import { DescribeThing$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Gets information about the specified thing.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeThing</a> action.</p>
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
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class DescribeThingCommand extends $Command
  .classBuilder<
    DescribeThingCommandInput,
    DescribeThingCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "DescribeThing", {})
  .n("IoTClient", "DescribeThingCommand")
  .sc(DescribeThing$)
  .build() {
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
