// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  AppIntegrationsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../AppIntegrationsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteDataIntegrationRequest, DeleteDataIntegrationResponse } from "../models/models_0";
import { DeleteDataIntegration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDataIntegrationCommand}.
 */
export interface DeleteDataIntegrationCommandInput extends DeleteDataIntegrationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDataIntegrationCommand}.
 */
export interface DeleteDataIntegrationCommandOutput extends DeleteDataIntegrationResponse, __MetadataBearer {}

/**
 * <p>Deletes the DataIntegration. Only DataIntegrations that don't have any
 *       DataIntegrationAssociations can be deleted. Deleting a DataIntegration also deletes the
 *       underlying Amazon AppFlow flow and service linked role. </p>
 *          <note>
 *             <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated.
 * Use a different DataIntegration, or recreate the DataIntegration using the
 * <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppIntegrationsClient, DeleteDataIntegrationCommand } from "@aws-sdk/client-appintegrations"; // ES Modules import
 * // const { AppIntegrationsClient, DeleteDataIntegrationCommand } = require("@aws-sdk/client-appintegrations"); // CommonJS import
 * // import type { AppIntegrationsClientConfig } from "@aws-sdk/client-appintegrations";
 * const config = {}; // type is AppIntegrationsClientConfig
 * const client = new AppIntegrationsClient(config);
 * const input = { // DeleteDataIntegrationRequest
 *   DataIntegrationIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteDataIntegrationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDataIntegrationCommandInput - {@link DeleteDataIntegrationCommandInput}
 * @returns {@link DeleteDataIntegrationCommandOutput}
 * @see {@link DeleteDataIntegrationCommandInput} for command's `input` shape.
 * @see {@link DeleteDataIntegrationCommandOutput} for command's `response` shape.
 * @see {@link AppIntegrationsClientResolvedConfig | config} for AppIntegrationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>Request processing failed due to an error or failure with the service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link AppIntegrationsServiceException}
 * <p>Base exception class for all service exceptions from AppIntegrations service.</p>
 *
 *
 * @public
 */
export class DeleteDataIntegrationCommand extends $Command
  .classBuilder<
    DeleteDataIntegrationCommandInput,
    DeleteDataIntegrationCommandOutput,
    AppIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppIntegrationsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonAppIntegrationService", "DeleteDataIntegration", {})
  .n("AppIntegrationsClient", "DeleteDataIntegrationCommand")
  .sc(DeleteDataIntegration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDataIntegrationRequest;
      output: {};
    };
    sdk: {
      input: DeleteDataIntegrationCommandInput;
      output: DeleteDataIntegrationCommandOutput;
    };
  };
}
