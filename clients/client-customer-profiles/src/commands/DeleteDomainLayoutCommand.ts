// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteDomainLayoutRequest, DeleteDomainLayoutResponse } from "../models/models_0";
import { de_DeleteDomainLayoutCommand, se_DeleteDomainLayoutCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export class DeleteDomainLayoutCommand extends $Command
  .classBuilder<
    DeleteDomainLayoutCommandInput,
    DeleteDomainLayoutCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CustomerProfiles_20200815", "DeleteDomainLayout", {})
  .n("CustomerProfilesClient", "DeleteDomainLayoutCommand")
  .f(void 0, void 0)
  .ser(se_DeleteDomainLayoutCommand)
  .de(de_DeleteDomainLayoutCommand)
  .build() {
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
