// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListManagedApiEventsRequest, ListManagedApiEventsResponse } from "../models/models_0";
import { ListManagedApiEvents$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListManagedApiEventsCommand}.
 */
export interface ListManagedApiEventsCommandInput extends ListManagedApiEventsRequest {}
/**
 * @public
 *
 * The output of {@link ListManagedApiEventsCommand}.
 */
export interface ListManagedApiEventsCommandOutput extends ListManagedApiEventsResponse, __MetadataBearer {}

/**
 * Lists API-security events for a single managed API, most recent first. Returns up to 20 of the
 * most recent events (not paginated).
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIPortalClient, ListManagedApiEventsCommand } from "@aws-sdk/client-apiportal"; // ES Modules import
 * // const { APIPortalClient, ListManagedApiEventsCommand } = require("@aws-sdk/client-apiportal"); // CommonJS import
 * // import type { APIPortalClientConfig } from "@aws-sdk/client-apiportal";
 * const config = {}; // type is APIPortalClientConfig
 * const client = new APIPortalClient(config);
 * const input = { // ListManagedApiEventsRequest
 *   managedApiId: "STRING_VALUE", // required
 *   startedAfter: new Date("TIMESTAMP"),
 *   startedBefore: new Date("TIMESTAMP"),
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListManagedApiEventsCommand(input);
 * const response = await client.send(command);
 * // { // ListManagedApiEventsResponse
 * //   items: [ // ManagedApiEventSummaryList // required
 * //     { // ManagedApiEventSummary
 * //       eventId: "STRING_VALUE", // required
 * //       eventType: "WAF_API_SECURITY",
 * //       status: "EVENT_STARTED" || "EVENT_IN_PROGRESS" || "EVENT_ENDED",
 * //       wafApiSecurityEventDetail: { // WafApiSecurityEventDetail
 * //         label: "STRING_VALUE",
 * //         category: "STRING_VALUE",
 * //         confidence: "LOW" || "MEDIUM" || "HIGH",
 * //         webAclArn: "STRING_VALUE",
 * //       },
 * //       startedAt: new Date("TIMESTAMP"),
 * //       endedAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListManagedApiEventsCommandInput - {@link ListManagedApiEventsCommandInput}
 * @returns {@link ListManagedApiEventsCommandOutput}
 * @see {@link ListManagedApiEventsCommandInput} for command's `input` shape.
 * @see {@link ListManagedApiEventsCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *  The request rate or a service quota was exceeded. Reduce the request rate or the number of resources and try again.
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
export class ListManagedApiEventsCommand extends command<ListManagedApiEventsCommandInput, ListManagedApiEventsCommandOutput>(
  _ep0,
  _mw0,
  "ListManagedApiEvents",
  ListManagedApiEvents$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListManagedApiEventsRequest;
      output: ListManagedApiEventsResponse;
    };
    sdk: {
      input: ListManagedApiEventsCommandInput;
      output: ListManagedApiEventsCommandOutput;
    };
  };
}
