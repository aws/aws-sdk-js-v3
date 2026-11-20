// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetApiInventoryItemRequest, GetApiInventoryItemResponse } from "../models/models_0";
import { GetApiInventoryItem$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetApiInventoryItemCommand}.
 */
export interface GetApiInventoryItemCommandInput extends GetApiInventoryItemRequest {}
/**
 * @public
 *
 * The output of {@link GetApiInventoryItemCommand}.
 */
export interface GetApiInventoryItemCommandOutput extends GetApiInventoryItemResponse, __MetadataBearer {}

/**
 * Gets full details of a single API inventory item.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIPortalClient, GetApiInventoryItemCommand } from "@aws-sdk/client-apiportal"; // ES Modules import
 * // const { APIPortalClient, GetApiInventoryItemCommand } = require("@aws-sdk/client-apiportal"); // CommonJS import
 * // import type { APIPortalClientConfig } from "@aws-sdk/client-apiportal";
 * const config = {}; // type is APIPortalClientConfig
 * const client = new APIPortalClient(config);
 * const input = { // GetApiInventoryItemRequest
 *   method: "GET" || "POST" || "PUT" || "DELETE" || "PATCH" || "ANY" || "HEAD" || "OPTIONS", // required
 *   host: "STRING_VALUE", // required
 *   port: Number("int"), // required
 *   path: "STRING_VALUE", // required
 *   resourceArn: "STRING_VALUE", // required
 * };
 * const command = new GetApiInventoryItemCommand(input);
 * const response = await client.send(command);
 * // { // GetApiInventoryItemResponse
 * //   item: { // ApiInventoryItemDetail
 * //     method: "GET" || "POST" || "PUT" || "DELETE" || "PATCH" || "ANY" || "HEAD" || "OPTIONS", // required
 * //     host: "STRING_VALUE", // required
 * //     port: Number("int"), // required
 * //     path: "STRING_VALUE", // required
 * //     accountId: "STRING_VALUE", // required
 * //     resourceArn: "STRING_VALUE", // required
 * //     region: "STRING_VALUE", // required
 * //     discoverySource: "API_GATEWAY" || "ELB" || "CLOUDFRONT", // required
 * //     visibility: "PUBLIC" || "PRIVATE",
 * //     wafStatus: "ENABLED" || "DISABLED",
 * //     classification: "SHADOW" || "MANAGED" || "MANAGED_ZOMBIE" || "MANAGED_ORPHANED",
 * //     managedBy: "SELF" || "ORGANIZATION",
 * //     workloads: [ // WorkloadList
 * //       "MCP" || "LLM" || "A2A",
 * //     ],
 * //     managedApiId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetApiInventoryItemCommandInput - {@link GetApiInventoryItemCommandInput}
 * @returns {@link GetApiInventoryItemCommandOutput}
 * @see {@link GetApiInventoryItemCommandInput} for command's `input` shape.
 * @see {@link GetApiInventoryItemCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The requested resource does not exist, or you do not have access to it.
 *
 * @throws {@link APIPortalServiceException}
 * <p>Base exception class for all service exceptions from APIPortal service.</p>
 *
 *
 * @public
 */
export class GetApiInventoryItemCommand extends command<GetApiInventoryItemCommandInput, GetApiInventoryItemCommandOutput>(
  _ep0,
  _mw0,
  "GetApiInventoryItem",
  GetApiInventoryItem$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetApiInventoryItemRequest;
      output: GetApiInventoryItemResponse;
    };
    sdk: {
      input: GetApiInventoryItemCommandInput;
      output: GetApiInventoryItemCommandOutput;
    };
  };
}
