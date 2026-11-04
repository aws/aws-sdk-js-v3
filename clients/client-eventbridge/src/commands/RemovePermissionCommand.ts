// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RemovePermissionRequest } from "../models/models_0";
import { RemovePermission$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RemovePermissionCommand}.
 */
export interface RemovePermissionCommandInput extends RemovePermissionRequest {}
/**
 * @public
 *
 * The output of {@link RemovePermissionCommand}.
 */
export interface RemovePermissionCommandOutput extends __MetadataBearer {}

/**
 * Revokes the permission of another Amazon Web Services account to be able to put events to the specified event bus. Specify the account to revoke by the `StatementId` value that you associated with the account when you granted it permission with `PutPermission`. You can find the `StatementId` by using [DescribeEventBus](https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribeEventBus.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, RemovePermissionCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, RemovePermissionCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * // import type { EventBridgeClientConfig } from "@aws-sdk/client-eventbridge";
 * const config = {}; // type is EventBridgeClientConfig
 * const client = new EventBridgeClient(config);
 * const input = { // RemovePermissionRequest
 *   StatementId: "STRING_VALUE",
 *   RemoveAllPermissions: true || false,
 *   EventBusName: "STRING_VALUE",
 * };
 * const command = new RemovePermissionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RemovePermissionCommandInput - {@link RemovePermissionCommandInput}
 * @returns {@link RemovePermissionCommandOutput}
 * @see {@link RemovePermissionCommandInput} for command's `input` shape.
 * @see {@link RemovePermissionCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for EventBridgeClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * There is concurrent modification on a rule, target, archive, or replay.
 *
 * @throws {@link InternalException} (server fault)
 *
 * This exception occurs due to unexpected causes.
 *
 * @throws {@link OperationDisabledException} (client fault)
 *
 * The operation you are attempting is not available in this region.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * An entity that you specified does not exist.
 *
 * @throws {@link EventBridgeServiceException}
 *
 * Base exception class for all service exceptions from EventBridge service.
 *
 * @public
 */
export class RemovePermissionCommand extends command<RemovePermissionCommandInput, RemovePermissionCommandOutput>(
  _ep0,
  _mw0,
  "RemovePermission",
  RemovePermission$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemovePermissionRequest;
      output: {};
    };
    sdk: {
      input: RemovePermissionCommandInput;
      output: RemovePermissionCommandOutput;
    };
  };
}
