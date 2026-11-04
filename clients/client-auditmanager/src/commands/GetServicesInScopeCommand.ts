// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetServicesInScopeRequest, GetServicesInScopeResponse } from "../models/models_0";
import { GetServicesInScope$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetServicesInScopeCommand}.
 */
export interface GetServicesInScopeCommandInput extends GetServicesInScopeRequest {}
/**
 * @public
 *
 * The output of {@link GetServicesInScopeCommand}.
 */
export interface GetServicesInScopeCommandOutput extends GetServicesInScopeResponse, __MetadataBearer {}

/**
 * Gets a list of the Amazon Web Services services from which Audit Manager can collect evidence.
 *
 * Audit Manager defines which Amazon Web Services services are in scope for an assessment. Audit Manager infers this scope by examining the assessment’s controls and their data sources, and then mapping this information to one or more of the corresponding Amazon Web Services services that are in this list.
 *
 * > **Note:** For information about why it's no longer possible to specify services in scope manually, see [I can't edit the services in scope for my assessment](https://docs.aws.amazon.com/audit-manager/latest/userguide/evidence-collection-issues.html#unable-to-edit-services) in the *Troubleshooting* section of the Audit Manager user guide.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, GetServicesInScopeCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, GetServicesInScopeCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * // import type { AuditManagerClientConfig } from "@aws-sdk/client-auditmanager";
 * const config = {}; // type is AuditManagerClientConfig
 * const client = new AuditManagerClient(config);
 * const input = {};
 * const command = new GetServicesInScopeCommand(input);
 * const response = await client.send(command);
 * // { // GetServicesInScopeResponse
 * //   serviceMetadata: [ // ServiceMetadataList
 * //     { // ServiceMetadata
 * //       name: "STRING_VALUE",
 * //       displayName: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       category: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetServicesInScopeCommandInput - {@link GetServicesInScopeCommandInput}
 * @returns {@link GetServicesInScopeCommandOutput}
 * @see {@link GetServicesInScopeCommandInput} for command's `input` shape.
 * @see {@link GetServicesInScopeCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for AuditManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Your account isn't registered with Audit Manager. Check the delegated administrator setup on the Audit Manager settings page, and try again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal service error occurred during the processing of your request. Try again later.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request has invalid or missing parameters.
 *
 * @throws {@link AuditManagerServiceException}
 *
 * Base exception class for all service exceptions from AuditManager service.
 *
 * @public
 */
export class GetServicesInScopeCommand extends command<GetServicesInScopeCommandInput, GetServicesInScopeCommandOutput>(
  _ep0,
  _mw0,
  "GetServicesInScope",
  GetServicesInScope$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetServicesInScopeResponse;
    };
    sdk: {
      input: GetServicesInScopeCommandInput;
      output: GetServicesInScopeCommandOutput;
    };
  };
}
