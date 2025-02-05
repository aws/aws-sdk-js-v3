// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DescribeEventConfigurationsRequest, DescribeEventConfigurationsResponse } from "../models/models_1";
import {
  de_DescribeEventConfigurationsCommand,
  se_DescribeEventConfigurationsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeEventConfigurationsCommand}.
 */
export interface DescribeEventConfigurationsCommandInput extends DescribeEventConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEventConfigurationsCommand}.
 */
export interface DescribeEventConfigurationsCommandOutput
  extends DescribeEventConfigurationsResponse,
    __MetadataBearer {}

/**
 * <p>Describes event configurations.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeEventConfigurations</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeEventConfigurationsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeEventConfigurationsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new IoTClient(config);
 * const input = {};
 * const command = new DescribeEventConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEventConfigurationsResponse
 * //   eventConfigurations: { // EventConfigurations
 * //     "<keys>": { // Configuration
 * //       Enabled: true || false,
 * //     },
 * //   },
 * //   creationDate: new Date("TIMESTAMP"),
 * //   lastModifiedDate: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeEventConfigurationsCommandInput - {@link DescribeEventConfigurationsCommandInput}
 * @returns {@link DescribeEventConfigurationsCommandOutput}
 * @see {@link DescribeEventConfigurationsCommandInput} for command's `input` shape.
 * @see {@link DescribeEventConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 * @public
 */
export class DescribeEventConfigurationsCommand extends $Command
  .classBuilder<
    DescribeEventConfigurationsCommandInput,
    DescribeEventConfigurationsCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "DescribeEventConfigurations", {})
  .n("IoTClient", "DescribeEventConfigurationsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeEventConfigurationsCommand)
  .de(de_DescribeEventConfigurationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DescribeEventConfigurationsResponse;
    };
    sdk: {
      input: DescribeEventConfigurationsCommandInput;
      output: DescribeEventConfigurationsCommandOutput;
    };
  };
}
