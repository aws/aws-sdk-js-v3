// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListApiInventoryItemsRequest, ListApiInventoryItemsResponse } from "../models/models_0";
import { ListApiInventoryItems$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListApiInventoryItemsCommand}.
 */
export interface ListApiInventoryItemsCommandInput extends ListApiInventoryItemsRequest {}
/**
 * @public
 *
 * The output of {@link ListApiInventoryItemsCommand}.
 */
export interface ListApiInventoryItemsCommandOutput extends ListApiInventoryItemsResponse, __MetadataBearer {}

/**
 * Lists discovered API inventory items with filtering and pagination.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIPortalClient, ListApiInventoryItemsCommand } from "@aws-sdk/client-apiportal"; // ES Modules import
 * // const { APIPortalClient, ListApiInventoryItemsCommand } = require("@aws-sdk/client-apiportal"); // CommonJS import
 * // import type { APIPortalClientConfig } from "@aws-sdk/client-apiportal";
 * const config = {}; // type is APIPortalClientConfig
 * const client = new APIPortalClient(config);
 * const input = { // ListApiInventoryItemsRequest
 *   filters: { // ApiInventoryFilters
 *     discoverySource: "API_GATEWAY" || "ELB" || "CLOUDFRONT",
 *     resourceArn: "STRING_VALUE",
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListApiInventoryItemsCommand(input);
 * const response = await client.send(command);
 * // { // ListApiInventoryItemsResponse
 * //   items: [ // ApiInventoryItemList // required
 * //     { // ApiInventoryItem
 * //       method: "GET" || "POST" || "PUT" || "DELETE" || "PATCH" || "ANY" || "HEAD" || "OPTIONS", // required
 * //       host: "STRING_VALUE", // required
 * //       port: Number("int"), // required
 * //       path: "STRING_VALUE", // required
 * //       accountId: "STRING_VALUE", // required
 * //       resourceArn: "STRING_VALUE", // required
 * //       region: "STRING_VALUE", // required
 * //       discoverySource: "API_GATEWAY" || "ELB" || "CLOUDFRONT", // required
 * //       firstSeen: new Date("TIMESTAMP"),
 * //       lastSeen: new Date("TIMESTAMP"),
 * //       visibility: "PUBLIC" || "PRIVATE",
 * //       wafStatus: "ENABLED" || "DISABLED",
 * //       classification: "SHADOW" || "MANAGED" || "MANAGED_ZOMBIE" || "MANAGED_ORPHANED",
 * //       managedBy: "SELF" || "ORGANIZATION",
 * //       workloads: [ // WorkloadList
 * //         "MCP" || "LLM" || "A2A",
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListApiInventoryItemsCommandInput - {@link ListApiInventoryItemsCommandInput}
 * @returns {@link ListApiInventoryItemsCommandOutput}
 * @see {@link ListApiInventoryItemsCommandInput} for command's `input` shape.
 * @see {@link ListApiInventoryItemsCommandOutput} for command's `response` shape.
 * @see {@link APIPortalClientResolvedConfig | config} for APIPortalClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You do not have permission to perform this operation.
 *
 * @throws {@link BadRequestException} (client fault)
 *  The request is not valid. The message identifies the field or value that failed validation.
 *
 * @throws {@link InternalServerException} (server fault)
 *  The service encountered an internal error. Try the request again.
 *
 * @throws {@link APIPortalServiceException}
 * <p>Base exception class for all service exceptions from APIPortal service.</p>
 *
 *
 * @public
 */
export class ListApiInventoryItemsCommand extends command<ListApiInventoryItemsCommandInput, ListApiInventoryItemsCommandOutput>(
  _ep0,
  _mw0,
  "ListApiInventoryItems",
  ListApiInventoryItems$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListApiInventoryItemsRequest;
      output: ListApiInventoryItemsResponse;
    };
    sdk: {
      input: ListApiInventoryItemsCommandInput;
      output: ListApiInventoryItemsCommandOutput;
    };
  };
}
