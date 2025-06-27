// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTEventsClient";
import { DescribeInputRequest, DescribeInputResponse } from "../models/models_0";
import { de_DescribeInputCommand, se_DescribeInputCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeInputCommand}.
 */
export interface DescribeInputCommandInput extends DescribeInputRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInputCommand}.
 */
export interface DescribeInputCommandOutput extends DescribeInputResponse, __MetadataBearer {}

/**
 * <p>Describes an input.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTEventsClient, DescribeInputCommand } from "@aws-sdk/client-iot-events"; // ES Modules import
 * // const { IoTEventsClient, DescribeInputCommand } = require("@aws-sdk/client-iot-events"); // CommonJS import
 * const client = new IoTEventsClient(config);
 * const input = { // DescribeInputRequest
 *   inputName: "STRING_VALUE", // required
 * };
 * const command = new DescribeInputCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInputResponse
 * //   input: { // Input
 * //     inputConfiguration: { // InputConfiguration
 * //       inputName: "STRING_VALUE", // required
 * //       inputDescription: "STRING_VALUE",
 * //       inputArn: "STRING_VALUE", // required
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //       lastUpdateTime: new Date("TIMESTAMP"), // required
 * //       status: "CREATING" || "UPDATING" || "ACTIVE" || "DELETING", // required
 * //     },
 * //     inputDefinition: { // InputDefinition
 * //       attributes: [ // Attributes // required
 * //         { // Attribute
 * //           jsonPath: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeInputCommandInput - {@link DescribeInputCommandInput}
 * @returns {@link DescribeInputCommandOutput}
 * @see {@link DescribeInputCommandInput} for command's `input` shape.
 * @see {@link DescribeInputCommandOutput} for command's `response` shape.
 * @see {@link IoTEventsClientResolvedConfig | config} for IoTEventsClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request was invalid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource was not found.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request could not be completed due to throttling.</p>
 *
 * @throws {@link IoTEventsServiceException}
 * <p>Base exception class for all service exceptions from IoTEvents service.</p>
 *
 *
 * @public
 */
export class DescribeInputCommand extends $Command
  .classBuilder<
    DescribeInputCommandInput,
    DescribeInputCommandOutput,
    IoTEventsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTEventsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IotColumboService", "DescribeInput", {})
  .n("IoTEventsClient", "DescribeInputCommand")
  .f(void 0, void 0)
  .ser(se_DescribeInputCommand)
  .de(de_DescribeInputCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeInputRequest;
      output: DescribeInputResponse;
    };
    sdk: {
      input: DescribeInputCommandInput;
      output: DescribeInputCommandOutput;
    };
  };
}
