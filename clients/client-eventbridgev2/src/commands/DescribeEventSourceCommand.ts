// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeEventSourceRequest, DescribeEventSourceResponse } from "../models/models_0";
import { DescribeEventSource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeEventSourceCommand}.
 */
export interface DescribeEventSourceCommandInput extends DescribeEventSourceRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEventSourceCommand}.
 */
export interface DescribeEventSourceCommandOutput extends DescribeEventSourceResponse, __MetadataBearer {}

/**
 * Returns the full configuration and lifecycle state of an EventSource.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeV2Client, DescribeEventSourceCommand } from "@aws-sdk/client-eventbridgev2"; // ES Modules import
 * // const { EventBridgeV2Client, DescribeEventSourceCommand } = require("@aws-sdk/client-eventbridgev2"); // CommonJS import
 * // import type { EventBridgeV2ClientConfig } from "@aws-sdk/client-eventbridgev2";
 * const config = {}; // type is EventBridgeV2ClientConfig
 * const client = new EventBridgeV2Client(config);
 * const input = { // DescribeEventSourceRequest
 *   EventSourceArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeEventSourceCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEventSourceResponse
 * //   EventSourceArn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   EventBusArn: "STRING_VALUE",
 * //   Configuration: { // EventSourceConfiguration Union: only one key present
 * //     AwsServiceEventsConfiguration: { // AwsServiceEventsSourceConfiguration
 * //       AwsService: "STRING_VALUE", // required
 * //       Pattern: "STRING_VALUE",
 * //       OnFailureConfiguration: { // OnFailureConfiguration
 * //         Arn: "STRING_VALUE",
 * //       },
 * //     },
 * //     PartnerEventsConfiguration: { // PartnerEventsSourceConfiguration
 * //       PartnerEventSourceArn: "STRING_VALUE", // required
 * //       Pattern: "STRING_VALUE",
 * //       PartnerBusKmsKeyIdentifier: "STRING_VALUE",
 * //       OnFailureConfiguration: {
 * //         Arn: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * //   Description: "STRING_VALUE",
 * //   State: "CREATING" || "ACTIVE" || "UPDATING" || "CREATE_FAILED" || "UPDATE_FAILED" || "DELETING" || "DELETE_FAILED",
 * //   Revoked: true || false,
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeEventSourceCommandInput - {@link DescribeEventSourceCommandInput}
 * @returns {@link DescribeEventSourceCommandOutput}
 * @see {@link DescribeEventSourceCommandInput} for command's `input` shape.
 * @see {@link DescribeEventSourceCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeV2ClientResolvedConfig | config} for EventBridgeV2Client's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The resource does not exist.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The caller does not have the permissions required to perform the operation.
 * This error is also returned when the operation cannot use the AWS KMS key for
 * the event bus.
 *
 * @throws {@link InternalException} (server fault)
 *  The request failed because of an internal service error. Retry the request.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  A request parameter is missing or not valid.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was throttled because it exceeds a request rate limit. Retry the
 * request with backoff.
 *
 * @throws {@link EventBridgeV2ServiceException}
 * <p>Base exception class for all service exceptions from EventBridgeV2 service.</p>
 *
 *
 * @public
 */
export class DescribeEventSourceCommand extends command<DescribeEventSourceCommandInput, DescribeEventSourceCommandOutput>(
  _ep0,
  _mw0,
  "DescribeEventSource",
  DescribeEventSource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeEventSourceRequest;
      output: DescribeEventSourceResponse;
    };
    sdk: {
      input: DescribeEventSourceCommandInput;
      output: DescribeEventSourceCommandOutput;
    };
  };
}
