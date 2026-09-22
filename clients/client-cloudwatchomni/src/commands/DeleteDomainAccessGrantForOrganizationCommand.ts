// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteDomainAccessGrantForOrganizationInput,
  DeleteDomainAccessGrantForOrganizationOutput,
} from "../models/models_0";
import { DeleteDomainAccessGrantForOrganization$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteDomainAccessGrantForOrganizationCommand}.
 */
export interface DeleteDomainAccessGrantForOrganizationCommandInput extends DeleteDomainAccessGrantForOrganizationInput {}
/**
 * @public
 *
 * The output of {@link DeleteDomainAccessGrantForOrganizationCommand}.
 */
export interface DeleteDomainAccessGrantForOrganizationCommandOutput extends DeleteDomainAccessGrantForOrganizationOutput, __MetadataBearer {}

/**
 * Removes an existing organization access grant, revoking the access it
 * granted.
 *
 * A service-managed grant cannot be deleted.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchOmniClient, DeleteDomainAccessGrantForOrganizationCommand } from "@aws-sdk/client-cloudwatchomni"; // ES Modules import
 * // const { CloudWatchOmniClient, DeleteDomainAccessGrantForOrganizationCommand } = require("@aws-sdk/client-cloudwatchomni"); // CommonJS import
 * // import type { CloudWatchOmniClientConfig } from "@aws-sdk/client-cloudwatchomni";
 * const config = {}; // type is CloudWatchOmniClientConfig
 * const client = new CloudWatchOmniClient(config);
 * const input = { // DeleteDomainAccessGrantForOrganizationInput
 *   grantId: "STRING_VALUE", // required
 * };
 * const command = new DeleteDomainAccessGrantForOrganizationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDomainAccessGrantForOrganizationCommandInput - {@link DeleteDomainAccessGrantForOrganizationCommandInput}
 * @returns {@link DeleteDomainAccessGrantForOrganizationCommandOutput}
 * @see {@link DeleteDomainAccessGrantForOrganizationCommandInput} for command's `input` shape.
 * @see {@link DeleteDomainAccessGrantForOrganizationCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchOmniClientResolvedConfig | config} for CloudWatchOmniClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The caller is not authorized to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *  The operation could not be completed because of a conflict with the current
 * state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *  An unexpected error occurred while processing the request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was throttled due to exceeding the allowed request rate.
 *
 * @throws {@link ValidationException} (client fault)
 *  A parameter is specified incorrectly.
 *
 * @throws {@link CloudWatchOmniServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchOmni service.</p>
 *
 *
 * @example Delete an organization domain access grant
 * ```javascript
 * // The following example deletes an organization domain access grant by ID, revoking the access it granted. Payloads are shown as JSON; on the wire they are CBOR-encoded.
 * const input = {
 *   grantId: "7f3e9d21-4c8b-4f6a-b1d2-3e4f5a6b7c8d"
 * };
 * const command = new DeleteDomainAccessGrantForOrganizationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteDomainAccessGrantForOrganizationCommand extends command<DeleteDomainAccessGrantForOrganizationCommandInput, DeleteDomainAccessGrantForOrganizationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteDomainAccessGrantForOrganization",
  DeleteDomainAccessGrantForOrganization$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDomainAccessGrantForOrganizationInput;
      output: {};
    };
    sdk: {
      input: DeleteDomainAccessGrantForOrganizationCommandInput;
      output: DeleteDomainAccessGrantForOrganizationCommandOutput;
    };
  };
}
