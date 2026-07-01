// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeEventConfigurationsRequest, DescribeEventConfigurationsResponse } from "../models/models_1";
import { DescribeEventConfigurations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface DescribeEventConfigurationsCommandOutput extends DescribeEventConfigurationsResponse, __MetadataBearer {}

/**
 * <p>Describes event configurations.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeEventConfigurations</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeEventConfigurationsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeEventConfigurationsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
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
 *
 * @public
 */
export class DescribeEventConfigurationsCommand extends command<DescribeEventConfigurationsCommandInput, DescribeEventConfigurationsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeEventConfigurations",
  DescribeEventConfigurations$
) {
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
