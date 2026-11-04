// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListScheduledActionsRequest, ListScheduledActionsResponse } from "../models/models_1";
import { ListScheduledActions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListScheduledActionsCommand}.
 */
export interface ListScheduledActionsCommandInput extends ListScheduledActionsRequest {}
/**
 * @public
 *
 * The output of {@link ListScheduledActionsCommand}.
 */
export interface ListScheduledActionsCommandOutput extends ListScheduledActionsResponse, __MetadataBearer {}

/**
 * Retrieves a list of configuration changes that are scheduled for a domain. These changes can be [service software updates](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/service-software.html) or [blue/green Auto-Tune enhancements](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html#auto-tune-types).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, ListScheduledActionsCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, ListScheduledActionsCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * // import type { OpenSearchClientConfig } from "@aws-sdk/client-opensearch";
 * const config = {}; // type is OpenSearchClientConfig
 * const client = new OpenSearchClient(config);
 * const input = { // ListScheduledActionsRequest
 *   DomainName: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListScheduledActionsCommand(input);
 * const response = await client.send(command);
 * // { // ListScheduledActionsResponse
 * //   ScheduledActions: [ // ScheduledActionsList
 * //     { // ScheduledAction
 * //       Id: "STRING_VALUE", // required
 * //       Type: "SERVICE_SOFTWARE_UPDATE" || "JVM_HEAP_SIZE_TUNING" || "JVM_YOUNG_GEN_TUNING", // required
 * //       Severity: "HIGH" || "MEDIUM" || "LOW", // required
 * //       ScheduledTime: Number("long"), // required
 * //       Description: "STRING_VALUE",
 * //       ScheduledBy: "CUSTOMER" || "SYSTEM",
 * //       Status: "PENDING_UPDATE" || "IN_PROGRESS" || "FAILED" || "COMPLETED" || "NOT_ELIGIBLE" || "ELIGIBLE",
 * //       Mandatory: true || false,
 * //       Cancellable: true || false,
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListScheduledActionsCommandInput - {@link ListScheduledActionsCommandInput}
 * @returns {@link ListScheduledActionsCommandOutput}
 * @see {@link ListScheduledActionsCommandInput} for command's `input` shape.
 * @see {@link ListScheduledActionsCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *
 * An error occurred while processing the request.
 *
 * @throws {@link InternalException} (server fault)
 *
 * Request processing failed because of an unknown error, exception, or internal failure.
 *
 * @throws {@link InvalidPaginationTokenException} (client fault)
 *
 * Request processing failed because you provided an invalid pagination token.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * An exception for accessing or deleting a resource that doesn't exist.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * An exception for accessing or deleting a resource that doesn't exist.
 *
 * @throws {@link OpenSearchServiceException}
 *
 * Base exception class for all service exceptions from OpenSearch service.
 *
 * @public
 */
export class ListScheduledActionsCommand extends command<ListScheduledActionsCommandInput, ListScheduledActionsCommandOutput>(
  _ep0,
  _mw0,
  "ListScheduledActions",
  ListScheduledActions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListScheduledActionsRequest;
      output: ListScheduledActionsResponse;
    };
    sdk: {
      input: ListScheduledActionsCommandInput;
      output: ListScheduledActionsCommandOutput;
    };
  };
}
