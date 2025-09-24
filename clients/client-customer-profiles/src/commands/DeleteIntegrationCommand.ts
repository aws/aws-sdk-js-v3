// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteIntegrationRequest, DeleteIntegrationResponse } from "../models/models_0";
import { DeleteIntegration } from "../schemas/schemas_41_DeleteIntegration";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteIntegrationCommand}.
 */
export interface DeleteIntegrationCommandInput extends DeleteIntegrationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteIntegrationCommand}.
 */
export interface DeleteIntegrationCommandOutput extends DeleteIntegrationResponse, __MetadataBearer {}

/**
 * <p>Removes an integration from a specific domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, DeleteIntegrationCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, DeleteIntegrationCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // DeleteIntegrationRequest
 *   DomainName: "STRING_VALUE", // required
 *   Uri: "STRING_VALUE", // required
 * };
 * const command = new DeleteIntegrationCommand(input);
 * const response = await client.send(command);
 * // { // DeleteIntegrationResponse
 * //   Message: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteIntegrationCommandInput - {@link DeleteIntegrationCommandInput}
 * @returns {@link DeleteIntegrationCommandOutput}
 * @see {@link DeleteIntegrationCommandInput} for command's `input` shape.
 * @see {@link DeleteIntegrationCommandOutput} for command's `response` shape.
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
export class DeleteIntegrationCommand extends $Command
  .classBuilder<
    DeleteIntegrationCommandInput,
    DeleteIntegrationCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CustomerProfiles_20200815", "DeleteIntegration", {})
  .n("CustomerProfilesClient", "DeleteIntegrationCommand")
  .sc(DeleteIntegration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteIntegrationRequest;
      output: DeleteIntegrationResponse;
    };
    sdk: {
      input: DeleteIntegrationCommandInput;
      output: DeleteIntegrationCommandOutput;
    };
  };
}
