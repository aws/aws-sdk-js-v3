// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteDomainLayoutRequest, DeleteDomainLayoutResponse } from "../models/models_0";
import { DeleteDomainLayout$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteDomainLayoutCommand}.
 */
export interface DeleteDomainLayoutCommandInput extends DeleteDomainLayoutRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDomainLayoutCommand}.
 */
export interface DeleteDomainLayoutCommandOutput extends DeleteDomainLayoutResponse, __MetadataBearer {}

/**
 * <p>Deletes the layout used to view data for a specific domain. This API can only be invoked
 *          from the Amazon Connect admin website.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, DeleteDomainLayoutCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, DeleteDomainLayoutCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // DeleteDomainLayoutRequest
 *   DomainName: "STRING_VALUE", // required
 *   LayoutDefinitionName: "STRING_VALUE", // required
 * };
 * const command = new DeleteDomainLayoutCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDomainLayoutResponse
 * //   Message: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteDomainLayoutCommandInput - {@link DeleteDomainLayoutCommandInput}
 * @returns {@link DeleteDomainLayoutCommandOutput}
 * @see {@link DeleteDomainLayoutCommandInput} for command's `input` shape.
 * @see {@link DeleteDomainLayoutCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist, or access was denied.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>You exceeded the maximum number of requests.</p>
 *
 * @throws {@link CustomerProfilesServiceException}
 * <p>Base exception class for all service exceptions from CustomerProfiles service.</p>
 *
 *
 * @public
 */
export class DeleteDomainLayoutCommand extends command<DeleteDomainLayoutCommandInput, DeleteDomainLayoutCommandOutput>(
  _ep0,
  _mw0,
  "DeleteDomainLayout",
  DeleteDomainLayout$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDomainLayoutRequest;
      output: DeleteDomainLayoutResponse;
    };
    sdk: {
      input: DeleteDomainLayoutCommandInput;
      output: DeleteDomainLayoutCommandOutput;
    };
  };
}
