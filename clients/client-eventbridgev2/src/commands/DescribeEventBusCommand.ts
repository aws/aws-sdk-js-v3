// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
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
 * Returns the full configuration and lifecycle state of an event bus.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeV2Client, DescribeEventBusCommand } from "@aws-sdk/client-eventbridgev2"; // ES Modules import
 * // const { EventBridgeV2Client, DescribeEventBusCommand } = require("@aws-sdk/client-eventbridgev2"); // CommonJS import
 * // import type { EventBridgeV2ClientConfig } from "@aws-sdk/client-eventbridgev2";
 * const config = {}; // type is EventBridgeV2ClientConfig
 * const client = new EventBridgeV2Client(config);
 * const input = { // DescribeEventBusRequest
 *   EventBusArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeEventBusCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEventBusResponse
 * //   EventBusArn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   EncryptionConfiguration: { // EncryptionConfiguration
 * //     KmsKeyIdentifier: "STRING_VALUE",
 * //   },
 * //   StorageConfiguration: { // StorageConfigurationOutput
 * //     RetentionPeriodInDays: Number("int"),
 * //     RetentionWindowStartTime: new Date("TIMESTAMP"),
 * //   },
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   State: "CREATING" || "CREATE_FAILED" || "UPDATING" || "UPDATE_FAILED" || "DELETING" || "ACTIVE" || "DELETE_FAILED",
 * //   StateReason: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeEventBusCommandInput - {@link DescribeEventBusCommandInput}
 * @returns {@link DescribeEventBusCommandOutput}
 * @see {@link DescribeEventBusCommandInput} for command's `input` shape.
 * @see {@link DescribeEventBusCommandOutput} for command's `response` shape.
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
export class DescribeEventBusCommand extends command<DescribeEventBusCommandInput, DescribeEventBusCommandOutput>(
  _ep1,
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
