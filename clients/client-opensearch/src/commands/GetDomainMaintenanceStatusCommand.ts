// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDomainMaintenanceStatusRequest, GetDomainMaintenanceStatusResponse } from "../models/models_0";
import { GetDomainMaintenanceStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * The status of the maintenance action.
 *
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
export class GetDomainMaintenanceStatusCommand extends command<GetDomainMaintenanceStatusCommandInput, GetDomainMaintenanceStatusCommandOutput>(
  _ep0,
  _mw0,
  "GetDomainMaintenanceStatus",
  GetDomainMaintenanceStatus$
) {
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
