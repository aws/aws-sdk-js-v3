// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListDomainMaintenancesRequest, ListDomainMaintenancesResponse } from "../models/models_0";
import { ListDomainMaintenances$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDomainMaintenancesCommand}.
 */
export interface ListDomainMaintenancesCommandInput extends ListDomainMaintenancesRequest {}
/**
 * @public
 *
 * The output of {@link ListDomainMaintenancesCommand}.
 */
export interface ListDomainMaintenancesCommandOutput extends ListDomainMaintenancesResponse, __MetadataBearer {}

/**
 * A list of maintenance actions for the domain.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, ListDomainMaintenancesCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, ListDomainMaintenancesCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * // import type { OpenSearchClientConfig } from "@aws-sdk/client-opensearch";
 * const config = {}; // type is OpenSearchClientConfig
 * const client = new OpenSearchClient(config);
 * const input = { // ListDomainMaintenancesRequest
 *   DomainName: "STRING_VALUE", // required
 *   Action: "REBOOT_NODE" || "RESTART_SEARCH_PROCESS" || "RESTART_DASHBOARD",
 *   Status: "PENDING" || "IN_PROGRESS" || "COMPLETED" || "FAILED" || "TIMED_OUT",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListDomainMaintenancesCommand(input);
 * const response = await client.send(command);
 * // { // ListDomainMaintenancesResponse
 * //   DomainMaintenances: [ // DomainMaintenanceList
 * //     { // DomainMaintenanceDetails
 * //       MaintenanceId: "STRING_VALUE",
 * //       DomainName: "STRING_VALUE",
 * //       Action: "REBOOT_NODE" || "RESTART_SEARCH_PROCESS" || "RESTART_DASHBOARD",
 * //       NodeId: "STRING_VALUE",
 * //       Status: "PENDING" || "IN_PROGRESS" || "COMPLETED" || "FAILED" || "TIMED_OUT",
 * //       StatusMessage: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDomainMaintenancesCommandInput - {@link ListDomainMaintenancesCommandInput}
 * @returns {@link ListDomainMaintenancesCommandOutput}
 * @see {@link ListDomainMaintenancesCommandInput} for command's `input` shape.
 * @see {@link ListDomainMaintenancesCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *
 * An error occurred while processing the request.
 *
 * @throws {@link DisabledOperationException} (client fault)
 *
 * An error occured because the client wanted to access an unsupported operation.
 *
 * @throws {@link InternalException} (server fault)
 *
 * Request processing failed because of an unknown error, exception, or internal failure.
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
export class ListDomainMaintenancesCommand extends command<ListDomainMaintenancesCommandInput, ListDomainMaintenancesCommandOutput>(
  _ep0,
  _mw0,
  "ListDomainMaintenances",
  ListDomainMaintenances$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDomainMaintenancesRequest;
      output: ListDomainMaintenancesResponse;
    };
    sdk: {
      input: ListDomainMaintenancesCommandInput;
      output: ListDomainMaintenancesCommandOutput;
    };
  };
}
