// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type { UpdateEventBusRequest, UpdateEventBusResponse } from "../models/models_0";
import { UpdateEventBus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateEventBusCommand}.
 */
export interface UpdateEventBusCommandInput extends UpdateEventBusRequest {}
/**
 * @public
 *
 * The output of {@link UpdateEventBusCommand}.
 */
export interface UpdateEventBusCommandOutput extends UpdateEventBusResponse, __MetadataBearer {}

/**
 * Updates an event bus. The update is asynchronous: the bus moves to UPDATING
 * and returns to ACTIVE when the change is applied. Fields omitted from the
 * request are left unchanged.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeV2Client, UpdateEventBusCommand } from "@aws-sdk/client-eventbridgev2"; // ES Modules import
 * // const { EventBridgeV2Client, UpdateEventBusCommand } = require("@aws-sdk/client-eventbridgev2"); // CommonJS import
 * // import type { EventBridgeV2ClientConfig } from "@aws-sdk/client-eventbridgev2";
 * const config = {}; // type is EventBridgeV2ClientConfig
 * const client = new EventBridgeV2Client(config);
 * const input = { // UpdateEventBusRequest
 *   EventBusArn: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   EncryptionConfiguration: { // EncryptionConfiguration
 *     KmsKeyIdentifier: "STRING_VALUE",
 *   },
 *   StorageConfiguration: { // StorageConfiguration
 *     RetentionPeriodInDays: Number("int"),
 *   },
 * };
 * const command = new UpdateEventBusCommand(input);
 * const response = await client.send(command);
 * // { // UpdateEventBusResponse
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
 * //   State: "CREATING" || "CREATE_FAILED" || "UPDATING" || "UPDATE_FAILED" || "DELETING" || "ACTIVE" || "DELETE_FAILED",
 * //   StateReason: "STRING_VALUE",
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateEventBusCommandInput - {@link UpdateEventBusCommandInput}
 * @returns {@link UpdateEventBusCommandOutput}
 * @see {@link UpdateEventBusCommandInput} for command's `input` shape.
 * @see {@link UpdateEventBusCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeV2ClientResolvedConfig | config} for EventBridgeV2Client's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  Another change to the resource is already in progress. Retry the request.
 *
 * @throws {@link InvalidStateException} (client fault)
 *  The resource is not in a state that allows the operation. For example, an
 * event bus that is still being created cannot accept events.
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
export class UpdateEventBusCommand extends command<UpdateEventBusCommandInput, UpdateEventBusCommandOutput>(
  _ep1,
  _mw0,
  "UpdateEventBus",
  UpdateEventBus$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateEventBusRequest;
      output: UpdateEventBusResponse;
    };
    sdk: {
      input: UpdateEventBusCommandInput;
      output: UpdateEventBusCommandOutput;
    };
  };
}
