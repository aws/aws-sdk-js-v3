// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteDomainForOrganizationInput, DeleteDomainForOrganizationOutput } from "../models/models_0";
import { DeleteDomainForOrganization$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteDomainForOrganizationCommand}.
 */
export interface DeleteDomainForOrganizationCommandInput extends DeleteDomainForOrganizationInput {}
/**
 * @public
 *
 * The output of {@link DeleteDomainForOrganizationCommand}.
 */
export interface DeleteDomainForOrganizationCommandOutput extends DeleteDomainForOrganizationOutput, __MetadataBearer {}

/**
 * Removes an organization domain and all of its resources. Call this operation in the
 * Region where the domain was created.
 *
 * A domain cannot be deleted while it contains spaces.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchOmniClient, DeleteDomainForOrganizationCommand } from "@aws-sdk/client-cloudwatchomni"; // ES Modules import
 * // const { CloudWatchOmniClient, DeleteDomainForOrganizationCommand } = require("@aws-sdk/client-cloudwatchomni"); // CommonJS import
 * // import type { CloudWatchOmniClientConfig } from "@aws-sdk/client-cloudwatchomni";
 * const config = {}; // type is CloudWatchOmniClientConfig
 * const client = new CloudWatchOmniClient(config);
 * const input = { // DeleteDomainForOrganizationInput
 *   domainId: "STRING_VALUE", // required
 * };
 * const command = new DeleteDomainForOrganizationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDomainForOrganizationCommandInput - {@link DeleteDomainForOrganizationCommandInput}
 * @returns {@link DeleteDomainForOrganizationCommandOutput}
 * @see {@link DeleteDomainForOrganizationCommandInput} for command's `input` shape.
 * @see {@link DeleteDomainForOrganizationCommandOutput} for command's `response` shape.
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
 * @example Delete an organization domain
 * ```javascript
 * // The following example deletes an organization domain in the Region where it was created. The domain must not contain any spaces. A successful response returns an empty body. Payloads are shown as JSON; on the wire they are CBOR-encoded.
 * const input = {
 *   domainId: "d-9z8y7x6w5v"
 * };
 * const command = new DeleteDomainForOrganizationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteDomainForOrganizationCommand extends command<DeleteDomainForOrganizationCommandInput, DeleteDomainForOrganizationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteDomainForOrganization",
  DeleteDomainForOrganization$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDomainForOrganizationInput;
      output: {};
    };
    sdk: {
      input: DeleteDomainForOrganizationCommandInput;
      output: DeleteDomainForOrganizationCommandOutput;
    };
  };
}
