// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListDiscoveryStatusesRequest, ListDiscoveryStatusesResponse } from "../models/models_0";
import { ListDiscoveryStatuses$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDiscoveryStatusesCommand}.
 */
export interface ListDiscoveryStatusesCommandInput extends ListDiscoveryStatusesRequest {}
/**
 * @public
 *
 * The output of {@link ListDiscoveryStatusesCommand}.
 */
export interface ListDiscoveryStatusesCommandOutput extends ListDiscoveryStatusesResponse, __MetadataBearer {}

/**
 * Lists discovery statuses for services.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIPortalClient, ListDiscoveryStatusesCommand } from "@aws-sdk/client-apiportal"; // ES Modules import
 * // const { APIPortalClient, ListDiscoveryStatusesCommand } = require("@aws-sdk/client-apiportal"); // CommonJS import
 * // import type { APIPortalClientConfig } from "@aws-sdk/client-apiportal";
 * const config = {}; // type is APIPortalClientConfig
 * const client = new APIPortalClient(config);
 * const input = { // ListDiscoveryStatusesRequest
 *   discoverySource: "API_GATEWAY" || "ELB" || "CLOUDFRONT",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListDiscoveryStatusesCommand(input);
 * const response = await client.send(command);
 * // { // ListDiscoveryStatusesResponse
 * //   items: [ // DiscoveryStatusList // required
 * //     { // DiscoveryStatus
 * //       accountId: "STRING_VALUE",
 * //       discoverySource: "API_GATEWAY" || "ELB" || "CLOUDFRONT", // required
 * //       status: "STOPPED" || "PROVISIONING" || "RUNNING" || "FAILED", // required
 * //       failureReason: "ACCESS_DENIED" || "DEPENDENCY_ERROR" || "THROTTLED" || "INVALID_CONFIGURATION" || "INTERNAL_ERROR",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDiscoveryStatusesCommandInput - {@link ListDiscoveryStatusesCommandInput}
 * @returns {@link ListDiscoveryStatusesCommandOutput}
 * @see {@link ListDiscoveryStatusesCommandInput} for command's `input` shape.
 * @see {@link ListDiscoveryStatusesCommandOutput} for command's `response` shape.
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
export class ListDiscoveryStatusesCommand extends command<ListDiscoveryStatusesCommandInput, ListDiscoveryStatusesCommandOutput>(
  _ep0,
  _mw0,
  "ListDiscoveryStatuses",
  ListDiscoveryStatuses$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDiscoveryStatusesRequest;
      output: ListDiscoveryStatusesResponse;
    };
    sdk: {
      input: ListDiscoveryStatusesCommandInput;
      output: ListDiscoveryStatusesCommandOutput;
    };
  };
}
