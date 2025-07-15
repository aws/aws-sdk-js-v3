// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartDomainMaintenanceRequest, StartDomainMaintenanceResponse } from "../models/models_1";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { de_StartDomainMaintenanceCommand, se_StartDomainMaintenanceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartDomainMaintenanceCommand}.
 */
export interface StartDomainMaintenanceCommandInput extends StartDomainMaintenanceRequest {}
/**
 * @public
 *
 * The output of {@link StartDomainMaintenanceCommand}.
 */
export interface StartDomainMaintenanceCommandOutput extends StartDomainMaintenanceResponse, __MetadataBearer {}

/**
 * <p>Starts the node maintenance process on the data node. These processes can include a node
 *    reboot, an Opensearch or Elasticsearch process restart, or a Dashboard or Kibana restart.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, StartDomainMaintenanceCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, StartDomainMaintenanceCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const input = { // StartDomainMaintenanceRequest
 *   DomainName: "STRING_VALUE", // required
 *   Action: "REBOOT_NODE" || "RESTART_SEARCH_PROCESS" || "RESTART_DASHBOARD", // required
 *   NodeId: "STRING_VALUE",
 * };
 * const command = new StartDomainMaintenanceCommand(input);
 * const response = await client.send(command);
 * // { // StartDomainMaintenanceResponse
 * //   MaintenanceId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartDomainMaintenanceCommandInput - {@link StartDomainMaintenanceCommandInput}
 * @returns {@link StartDomainMaintenanceCommandOutput}
 * @see {@link StartDomainMaintenanceCommandInput} for command's `input` shape.
 * @see {@link StartDomainMaintenanceCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class StartDomainMaintenanceCommand extends $Command
  .classBuilder<
    StartDomainMaintenanceCommandInput,
    StartDomainMaintenanceCommandOutput,
    OpenSearchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpenSearchClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonOpenSearchService", "StartDomainMaintenance", {})
  .n("OpenSearchClient", "StartDomainMaintenanceCommand")
  .f(void 0, void 0)
  .ser(se_StartDomainMaintenanceCommand)
  .de(de_StartDomainMaintenanceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartDomainMaintenanceRequest;
      output: StartDomainMaintenanceResponse;
    };
    sdk: {
      input: StartDomainMaintenanceCommandInput;
      output: StartDomainMaintenanceCommandOutput;
    };
  };
}
