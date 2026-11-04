// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeEventBusRequest, DescribeEventBusResponse } from "../models/models_0";
import { DescribeEventBus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeEventBusCommand}.
 */
export interface DescribeEventBusCommandInput extends DescribeEventBusRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEventBusCommand}.
 */
export interface DescribeEventBusCommandOutput extends DescribeEventBusResponse, __MetadataBearer {}

/**
 * Displays details about an event bus in your account. This can include the external Amazon Web Services accounts that are permitted to write events to your default event bus, and the associated policy. For custom event buses and partner event buses, it displays the name, ARN, policy, state, and creation time.
 *
 * To enable your account to receive events from other accounts on its default event bus, use [PutPermission](https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutPermission.html).
 *
 * For more information about partner event buses, see [CreateEventBus](https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateEventBus.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, DescribeEventBusCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, DescribeEventBusCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * // import type { CloudWatchEventsClientConfig } from "@aws-sdk/client-cloudwatch-events";
 * const config = {}; // type is CloudWatchEventsClientConfig
 * const client = new CloudWatchEventsClient(config);
 * const input = { // DescribeEventBusRequest
 *   Name: "STRING_VALUE",
 * };
 * const command = new DescribeEventBusCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEventBusResponse
 * //   Name: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * //   Policy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeEventBusCommandInput - {@link DescribeEventBusCommandInput}
 * @returns {@link DescribeEventBusCommandOutput}
 * @see {@link DescribeEventBusCommandInput} for command's `input` shape.
 * @see {@link DescribeEventBusCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for CloudWatchEventsClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *
 * This exception occurs due to unexpected causes.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * An entity that you specified does not exist.
 *
 * @throws {@link CloudWatchEventsServiceException}
 *
 * Base exception class for all service exceptions from CloudWatchEvents service.
 *
 * @public
 */
export class DescribeEventBusCommand extends command<DescribeEventBusCommandInput, DescribeEventBusCommandOutput>(
  _ep0,
  _mw0,
  "DescribeEventBus",
  DescribeEventBus$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeEventBusRequest;
      output: DescribeEventBusResponse;
    };
    sdk: {
      input: DescribeEventBusCommandInput;
      output: DescribeEventBusCommandOutput;
    };
  };
}
