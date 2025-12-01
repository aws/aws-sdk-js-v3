// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteDomainObjectTypeRequest, DeleteDomainObjectTypeResponse } from "../models/models_0";
import { DeleteDomainObjectType } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Delete a DomainObjectType for the given Domain and ObjectType name.</p>
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
export class DeleteDomainObjectTypeCommand extends $Command
  .classBuilder<
    DeleteDomainObjectTypeCommandInput,
    DeleteDomainObjectTypeCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CustomerProfiles_20200815", "DeleteDomainObjectType", {})
  .n("CustomerProfilesClient", "DeleteDomainObjectTypeCommand")
  .sc(DeleteDomainObjectType)
  .build() {
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
