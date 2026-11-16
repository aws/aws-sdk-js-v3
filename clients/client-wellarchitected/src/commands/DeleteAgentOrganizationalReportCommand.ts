// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type {
  DeleteAgentOrganizationalReportRequest,
  DeleteAgentOrganizationalReportResponse,
} from "../models/models_0";
import { DeleteAgentOrganizationalReport$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAgentOrganizationalReportCommand}.
 */
export interface DeleteAgentOrganizationalReportCommandInput extends DeleteAgentOrganizationalReportRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAgentOrganizationalReportCommand}.
 */
export interface DeleteAgentOrganizationalReportCommandOutput extends DeleteAgentOrganizationalReportResponse, __MetadataBearer {}

/**
 * <p>Deletes an Organizational Report and its associated artifacts. The operation is idempotent, so repeated calls for a report that has already been deleted return success.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, DeleteAgentOrganizationalReportCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, DeleteAgentOrganizationalReportCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // DeleteAgentOrganizationalReportRequest
 *   reportId: "STRING_VALUE", // required
 * };
 * const command = new DeleteAgentOrganizationalReportCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAgentOrganizationalReportCommandInput - {@link DeleteAgentOrganizationalReportCommandInput}
 * @returns {@link DeleteAgentOrganizationalReportCommandOutput}
 * @see {@link DeleteAgentOrganizationalReportCommandInput} for command's `input` shape.
 * @see {@link DeleteAgentOrganizationalReportCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input is not valid.</p>
 *
 * @throws {@link WellArchitectedServiceException}
 * <p>Base exception class for all service exceptions from WellArchitected service.</p>
 *
 *
 * @public
 */
export class DeleteAgentOrganizationalReportCommand extends command<DeleteAgentOrganizationalReportCommandInput, DeleteAgentOrganizationalReportCommandOutput>(
  _ep1,
  _mw0,
  "DeleteAgentOrganizationalReport",
  DeleteAgentOrganizationalReport$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAgentOrganizationalReportRequest;
      output: {};
    };
    sdk: {
      input: DeleteAgentOrganizationalReportCommandInput;
      output: DeleteAgentOrganizationalReportCommandOutput;
    };
  };
}
