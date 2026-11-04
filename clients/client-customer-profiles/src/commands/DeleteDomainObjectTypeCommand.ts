// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteDomainObjectTypeRequest, DeleteDomainObjectTypeResponse } from "../models/models_0";
import { DeleteDomainObjectType$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteDomainObjectTypeCommand}.
 */
export interface DeleteDomainObjectTypeCommandInput extends DeleteDomainObjectTypeRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDomainObjectTypeCommand}.
 */
export interface DeleteDomainObjectTypeCommandOutput extends DeleteDomainObjectTypeResponse, __MetadataBearer {}

/**
 * Delete a DomainObjectType for the given Domain and ObjectType name.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, DeleteDomainObjectTypeCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, DeleteDomainObjectTypeCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // DeleteDomainObjectTypeRequest
 *   DomainName: "STRING_VALUE", // required
 *   ObjectTypeName: "STRING_VALUE", // required
 * };
 * const command = new DeleteDomainObjectTypeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDomainObjectTypeCommandInput - {@link DeleteDomainObjectTypeCommandInput}
 * @returns {@link DeleteDomainObjectTypeCommandOutput}
 * @see {@link DeleteDomainObjectTypeCommandInput} for command's `input` shape.
 * @see {@link DeleteDomainObjectTypeCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input you provided is invalid.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource does not exist, or access was denied.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * You exceeded the maximum number of requests.
 *
 * @throws {@link CustomerProfilesServiceException}
 *
 * Base exception class for all service exceptions from CustomerProfiles service.
 *
 * @public
 */
export class DeleteDomainObjectTypeCommand extends command<DeleteDomainObjectTypeCommandInput, DeleteDomainObjectTypeCommandOutput>(
  _ep0,
  _mw0,
  "DeleteDomainObjectType",
  DeleteDomainObjectType$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDomainObjectTypeRequest;
      output: {};
    };
    sdk: {
      input: DeleteDomainObjectTypeCommandInput;
      output: DeleteDomainObjectTypeCommandOutput;
    };
  };
}
