// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import type { DescribeDimensionRequest, DescribeDimensionResponse } from "../models/models_1";
import { DescribeDimension } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDimensionCommand}.
 */
export interface DescribeDimensionCommandInput extends DescribeDimensionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDimensionCommand}.
 */
export interface DescribeDimensionCommandOutput extends DescribeDimensionResponse, __MetadataBearer {}

/**
 * <p>Provides details about a dimension that is defined in your Amazon Web Services accounts.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeDimension</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeDimensionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeDimensionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // DescribeDimensionRequest
 *   name: "STRING_VALUE", // required
 * };
 * const command = new DescribeDimensionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDimensionResponse
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
 * @param DescribeDimensionCommandInput - {@link DescribeDimensionCommandInput}
 * @returns {@link DescribeDimensionCommandOutput}
 * @see {@link DescribeDimensionCommandInput} for command's `input` shape.
 * @see {@link DescribeDimensionCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class DescribeDimensionCommand extends $Command
  .classBuilder<
    DescribeDimensionCommandInput,
    DescribeDimensionCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "DescribeDimension", {})
  .n("IoTClient", "DescribeDimensionCommand")
  .sc(DescribeDimension)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDimensionRequest;
      output: DescribeDimensionResponse;
    };
    sdk: {
      input: DescribeDimensionCommandInput;
      output: DescribeDimensionCommandOutput;
    };
  };
}
