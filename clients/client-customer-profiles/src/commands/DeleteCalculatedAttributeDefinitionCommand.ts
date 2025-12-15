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
import type {
  DeleteCalculatedAttributeDefinitionRequest,
  DeleteCalculatedAttributeDefinitionResponse,
} from "../models/models_0";
import { DeleteCalculatedAttributeDefinition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCalculatedAttributeDefinitionCommand}.
 */
export interface DeleteCalculatedAttributeDefinitionCommandInput extends DeleteCalculatedAttributeDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCalculatedAttributeDefinitionCommand}.
 */
export interface DeleteCalculatedAttributeDefinitionCommandOutput
  extends DeleteCalculatedAttributeDefinitionResponse,
    __MetadataBearer {}

/**
 * <p>Deletes an existing calculated attribute definition. Note that deleting a default
 *          calculated attribute is possible, however once deleted, you will be unable to undo that
 *          action and will need to recreate it on your own using the
 *          CreateCalculatedAttributeDefinition API if you want it back.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, DeleteCalculatedAttributeDefinitionCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, DeleteCalculatedAttributeDefinitionCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // DeleteCalculatedAttributeDefinitionRequest
 *   DomainName: "STRING_VALUE", // required
 *   CalculatedAttributeName: "STRING_VALUE", // required
 * };
 * const command = new DeleteCalculatedAttributeDefinitionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCalculatedAttributeDefinitionCommandInput - {@link DeleteCalculatedAttributeDefinitionCommandInput}
 * @returns {@link DeleteCalculatedAttributeDefinitionCommandOutput}
 * @see {@link DeleteCalculatedAttributeDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteCalculatedAttributeDefinitionCommandOutput} for command's `response` shape.
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
export class DeleteCalculatedAttributeDefinitionCommand extends $Command
  .classBuilder<
    DeleteCalculatedAttributeDefinitionCommandInput,
    DeleteCalculatedAttributeDefinitionCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CustomerProfiles_20200815", "DeleteCalculatedAttributeDefinition", {})
  .n("CustomerProfilesClient", "DeleteCalculatedAttributeDefinitionCommand")
  .sc(DeleteCalculatedAttributeDefinition$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCalculatedAttributeDefinitionRequest;
      output: {};
    };
    sdk: {
      input: DeleteCalculatedAttributeDefinitionCommandInput;
      output: DeleteCalculatedAttributeDefinitionCommandOutput;
    };
  };
}
