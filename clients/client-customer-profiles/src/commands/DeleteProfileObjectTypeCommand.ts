// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CustomerProfilesClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteProfileObjectTypeRequest, DeleteProfileObjectTypeResponse } from "../models/models_0";
import { DeleteProfileObjectType$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteProfileObjectTypeCommand}.
 */
export interface DeleteProfileObjectTypeCommandInput extends DeleteProfileObjectTypeRequest {}
/**
 * @public
 *
 * The output of {@link DeleteProfileObjectTypeCommand}.
 */
export interface DeleteProfileObjectTypeCommandOutput extends DeleteProfileObjectTypeResponse, __MetadataBearer {}

/**
 * <p>Removes a ProfileObjectType from a specific domain as well as removes all the
 *          ProfileObjects of that type. It also disables integrations from this specific
 *          ProfileObjectType. In addition, it scrubs all of the fields of the standard profile that
 *          were populated from this ProfileObjectType.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, DeleteProfileObjectTypeCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, DeleteProfileObjectTypeCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // DeleteProfileObjectTypeRequest
 *   DomainName: "STRING_VALUE", // required
 *   ObjectTypeName: "STRING_VALUE", // required
 * };
 * const command = new DeleteProfileObjectTypeCommand(input);
 * const response = await client.send(command);
 * // { // DeleteProfileObjectTypeResponse
 * //   Message: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteProfileObjectTypeCommandInput - {@link DeleteProfileObjectTypeCommandInput}
 * @returns {@link DeleteProfileObjectTypeCommandOutput}
 * @see {@link DeleteProfileObjectTypeCommandInput} for command's `input` shape.
 * @see {@link DeleteProfileObjectTypeCommandOutput} for command's `response` shape.
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
export class DeleteProfileObjectTypeCommand extends $Command
  .classBuilder<
    DeleteProfileObjectTypeCommandInput,
    DeleteProfileObjectTypeCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CustomerProfiles_20200815", "DeleteProfileObjectType", {})
  .n("CustomerProfilesClient", "DeleteProfileObjectTypeCommand")
  .sc(DeleteProfileObjectType$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteProfileObjectTypeRequest;
      output: DeleteProfileObjectTypeResponse;
    };
    sdk: {
      input: DeleteProfileObjectTypeCommandInput;
      output: DeleteProfileObjectTypeCommandOutput;
    };
  };
}
