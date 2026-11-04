// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutInventoryRequest, PutInventoryResult } from "../models/models_1";
import { PutInventory$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutInventoryCommand}.
 */
export interface PutInventoryCommandInput extends PutInventoryRequest {}
/**
 * @public
 *
 * The output of {@link PutInventoryCommand}.
 */
export interface PutInventoryCommandOutput extends PutInventoryResult, __MetadataBearer {}

/**
 * Bulk update custom inventory items on one or more managed nodes. The request adds an inventory item, if it doesn't already exist, or updates an inventory item, if it does exist.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, PutInventoryCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, PutInventoryCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // PutInventoryRequest
 *   InstanceId: "STRING_VALUE", // required
 *   Items: [ // InventoryItemList // required
 *     { // InventoryItem
 *       TypeName: "STRING_VALUE", // required
 *       SchemaVersion: "STRING_VALUE", // required
 *       CaptureTime: "STRING_VALUE", // required
 *       ContentHash: "STRING_VALUE",
 *       Content: [ // InventoryItemEntryList
 *         { // InventoryItemEntry
 *           "<keys>": "STRING_VALUE",
 *         },
 *       ],
 *       Context: { // InventoryItemContentContext
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   ],
 * };
 * const command = new PutInventoryCommand(input);
 * const response = await client.send(command);
 * // { // PutInventoryResult
 * //   Message: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutInventoryCommandInput - {@link PutInventoryCommandInput}
 * @returns {@link PutInventoryCommandOutput}
 * @see {@link PutInventoryCommandInput} for command's `input` shape.
 * @see {@link PutInventoryCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link CustomSchemaCountLimitExceededException} (client fault)
 *
 * You have exceeded the limit for custom schemas. Delete one or more custom schemas and try again.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * An error occurred on the server side.
 *
 * @throws {@link InvalidInstanceId} (client fault)
 *
 * The following problems can cause this exception:
 *
 * - You don't have permission to access the managed node.
 * - Amazon Web Services Systems Manager Agent (SSM Agent) isn't running. Verify that SSM Agent is running.
 * - SSM Agent isn't registered with the SSM endpoint. Try reinstalling SSM Agent.
 * - The managed node isn't in a valid state. Valid states are: `Running`, `Pending`, `Stopped`, and `Stopping`. Invalid states are: `Shutting-down` and `Terminated`.
 *
 * @throws {@link InvalidInventoryItemContextException} (client fault)
 *
 * You specified invalid keys or values in the `Context` attribute for `InventoryItem`. Verify the keys and values, and try again.
 *
 * @throws {@link InvalidItemContentException} (client fault)
 *
 * One or more content items isn't valid.
 *
 * @throws {@link InvalidTypeNameException} (client fault)
 *
 * The parameter type name isn't valid.
 *
 * @throws {@link ItemContentMismatchException} (client fault)
 *
 * The inventory item has invalid content.
 *
 * @throws {@link ItemSizeLimitExceededException} (client fault)
 *
 * The inventory item size has exceeded the size limit.
 *
 * @throws {@link SubTypeCountLimitExceededException} (client fault)
 *
 * The sub-type count exceeded the limit for the inventory type.
 *
 * @throws {@link TotalSizeLimitExceededException} (client fault)
 *
 * The size of inventory data has exceeded the total size limit for the resource.
 *
 * @throws {@link UnsupportedInventoryItemContextException} (client fault)
 *
 * The `Context` attribute that you specified for the `InventoryItem` isn't allowed for this inventory type. You can only use the `Context` attribute with inventory types like `AWS:ComplianceItem`.
 *
 * @throws {@link UnsupportedInventorySchemaVersionException} (client fault)
 *
 * Inventory item type schema version has to match supported versions in the service. Check output of GetInventorySchema to see the available schema version for each type.
 *
 * @throws {@link SSMServiceException}
 *
 * Base exception class for all service exceptions from SSM service.
 *
 * @public
 */
export class PutInventoryCommand extends command<PutInventoryCommandInput, PutInventoryCommandOutput>(
  _ep0,
  _mw0,
  "PutInventory",
  PutInventory$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutInventoryRequest;
      output: PutInventoryResult;
    };
    sdk: {
      input: PutInventoryCommandInput;
      output: PutInventoryCommandOutput;
    };
  };
}
