// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetDomainMaintenanceStatusRequest, GetDomainMaintenanceStatusResponse } from "../models/models_0";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { de_GetDomainMaintenanceStatusCommand, se_GetDomainMaintenanceStatusCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDomainMaintenanceStatusCommand}.
 */
export interface GetDomainMaintenanceStatusCommandInput extends GetDomainMaintenanceStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetDomainMaintenanceStatusCommand}.
 */
export interface GetDomainMaintenanceStatusCommandOutput extends GetDomainMaintenanceStatusResponse, __MetadataBearer {}

/**
 * <p>The status of the maintenance action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, GetDomainMaintenanceStatusCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, GetDomainMaintenanceStatusCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * // import type { OpenSearchClientConfig } from "@aws-sdk/client-opensearch";
 * const config = {}; // type is OpenSearchClientConfig
 * const client = new OpenSearchClient(config);
 * const input = { // GetDomainMaintenanceStatusRequest
 *   DomainName: "STRING_VALUE", // required
 *   MaintenanceId: "STRING_VALUE", // required
 * };
 * const command = new GetDomainMaintenanceStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetDomainMaintenanceStatusResponse
 * //   Status: "PENDING" || "IN_PROGRESS" || "COMPLETED" || "FAILED" || "TIMED_OUT",
 * //   StatusMessage: "STRING_VALUE",
 * //   NodeId: "STRING_VALUE",
 * //   Action: "REBOOT_NODE" || "RESTART_SEARCH_PROCESS" || "RESTART_DASHBOARD",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   UpdatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetDomainMaintenanceStatusCommandInput - {@link GetDomainMaintenanceStatusCommandInput}
 * @returns {@link GetDomainMaintenanceStatusCommandOutput}
 * @see {@link GetDomainMaintenanceStatusCommandInput} for command's `input` shape.
 * @see {@link GetDomainMaintenanceStatusCommandOutput} for command's `response` shape.
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
export class GetDomainMaintenanceStatusCommand extends $Command
  .classBuilder<
    GetDomainMaintenanceStatusCommandInput,
    GetDomainMaintenanceStatusCommandOutput,
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
  .s("AmazonOpenSearchService", "GetDomainMaintenanceStatus", {})
  .n("OpenSearchClient", "GetDomainMaintenanceStatusCommand")
  .f(void 0, void 0)
  .ser(se_GetDomainMaintenanceStatusCommand)
  .de(de_GetDomainMaintenanceStatusCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDomainMaintenanceStatusRequest;
      output: GetDomainMaintenanceStatusResponse;
    };
    sdk: {
      input: GetDomainMaintenanceStatusCommandInput;
      output: GetDomainMaintenanceStatusCommandOutput;
    };
  };
}
