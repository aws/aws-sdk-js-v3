// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateEventBusRequest, CreateEventBusResponse } from "../models/models_0";
import { CreateEventBus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateEventBusCommand}.
 */
export interface CreateEventBusCommandInput extends CreateEventBusRequest {}
/**
 * @public
 *
 * The output of {@link CreateEventBusCommand}.
 */
export interface CreateEventBusCommandOutput extends CreateEventBusResponse, __MetadataBearer {}

/**
 * Creates a new event bus within your account. This can be a custom event bus which you can use to receive events from your custom applications and services, or it can be a partner event bus which can be matched to a partner event source.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, CreateEventBusCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, CreateEventBusCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * // import type { CloudWatchEventsClientConfig } from "@aws-sdk/client-cloudwatch-events";
 * const config = {}; // type is CloudWatchEventsClientConfig
 * const client = new CloudWatchEventsClient(config);
 * const input = { // CreateEventBusRequest
 *   Name: "STRING_VALUE", // required
 *   EventSourceName: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateEventBusCommand(input);
 * const response = await client.send(command);
 * // { // CreateEventBusResponse
 * //   EventBusArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateEventBusCommandInput - {@link CreateEventBusCommandInput}
 * @returns {@link CreateEventBusCommandOutput}
 * @see {@link CreateEventBusCommandInput} for command's `input` shape.
 * @see {@link CreateEventBusCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for CloudWatchEventsClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * There is concurrent modification on a rule, target, archive, or replay.
 *
 * @throws {@link InternalException} (server fault)
 *
 * This exception occurs due to unexpected causes.
 *
 * @throws {@link InvalidStateException} (client fault)
 *
 * The specified state is not a valid state for an event source.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request failed because it attempted to create resource beyond the allowed service quota.
 *
 * @throws {@link OperationDisabledException} (client fault)
 *
 * The operation you are attempting is not available in this region.
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *
 * The resource you are trying to create already exists.
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
export class CreateEventBusCommand extends command<CreateEventBusCommandInput, CreateEventBusCommandOutput>(
  _ep0,
  _mw0,
  "CreateEventBus",
  CreateEventBus$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEventBusRequest;
      output: CreateEventBusResponse;
    };
    sdk: {
      input: CreateEventBusCommandInput;
      output: CreateEventBusCommandOutput;
    };
  };
}
