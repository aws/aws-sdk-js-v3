// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteUseCaseRequest } from "../models/models_1";
import { DeleteUseCase } from "../schemas/schemas_11_Integration";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteUseCaseCommand}.
 */
export interface DeleteUseCaseCommandInput extends DeleteUseCaseRequest {}
/**
 * @public
 *
 * The output of {@link DeleteUseCaseCommand}.
 */
export interface DeleteUseCaseCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a use case from an integration association.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DeleteUseCaseCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DeleteUseCaseCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DeleteUseCaseRequest
 *   InstanceId: "STRING_VALUE", // required
 *   IntegrationAssociationId: "STRING_VALUE", // required
 *   UseCaseId: "STRING_VALUE", // required
 * };
 * const command = new DeleteUseCaseCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteUseCaseCommandInput - {@link DeleteUseCaseCommandInput}
 * @returns {@link DeleteUseCaseCommandOutput}
 * @see {@link DeleteUseCaseCommandInput} for command's `input` shape.
 * @see {@link DeleteUseCaseCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class DeleteUseCaseCommand extends $Command
  .classBuilder<
    DeleteUseCaseCommandInput,
    DeleteUseCaseCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "DeleteUseCase", {})
  .n("ConnectClient", "DeleteUseCaseCommand")
  .sc(DeleteUseCase)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteUseCaseRequest;
      output: {};
    };
    sdk: {
      input: DeleteUseCaseCommandInput;
      output: DeleteUseCaseCommandOutput;
    };
  };
}
