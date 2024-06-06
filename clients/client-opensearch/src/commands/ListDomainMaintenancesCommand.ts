// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListDomainMaintenancesRequest, ListDomainMaintenancesResponse } from "../models/models_0";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { de_ListDomainMaintenancesCommand, se_ListDomainMaintenancesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>A list of maintenance actions for the domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, ListDomainMaintenancesCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, ListDomainMaintenancesCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
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
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access an unsupported operation.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Request processing failed because of an unknown error, exception, or internal failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link OpenSearchServiceException}
 * <p>Base exception class for all service exceptions from OpenSearch service.</p>
 *
 * @public
 */
export class ListDomainMaintenancesCommand extends $Command
  .classBuilder<
    ListDomainMaintenancesCommandInput,
    ListDomainMaintenancesCommandOutput,
    OpenSearchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: OpenSearchClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonOpenSearchService", "ListDomainMaintenances", {})
  .n("OpenSearchClient", "ListDomainMaintenancesCommand")
  .f(void 0, void 0)
  .ser(se_ListDomainMaintenancesCommand)
  .de(de_ListDomainMaintenancesCommand)
  .build() {}
