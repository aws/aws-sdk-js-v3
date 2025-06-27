// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppFabricClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppFabricClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteIngestionRequest, DeleteIngestionResponse } from "../models/models_0";
import { de_DeleteIngestionCommand, se_DeleteIngestionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteIngestionCommand}.
 */
export interface DeleteIngestionCommandInput extends DeleteIngestionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteIngestionCommand}.
 */
export interface DeleteIngestionCommandOutput extends DeleteIngestionResponse, __MetadataBearer {}

/**
 * <p>Deletes an ingestion. You must stop (disable) the ingestion and you must delete all
 *          associated ingestion destinations before you can delete an app ingestion.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppFabricClient, DeleteIngestionCommand } from "@aws-sdk/client-appfabric"; // ES Modules import
 * // const { AppFabricClient, DeleteIngestionCommand } = require("@aws-sdk/client-appfabric"); // CommonJS import
 * const client = new AppFabricClient(config);
 * const input = { // DeleteIngestionRequest
 *   appBundleIdentifier: "STRING_VALUE", // required
 *   ingestionIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteIngestionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteIngestionCommandInput - {@link DeleteIngestionCommandInput}
 * @returns {@link DeleteIngestionCommandOutput}
 * @see {@link DeleteIngestionCommandInput} for command's `input` shape.
 * @see {@link DeleteIngestionCommandOutput} for command's `response` shape.
 * @see {@link AppFabricClientResolvedConfig | config} for AppFabricClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure
 *          with an internal server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request rate exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has invalid or missing parameters.</p>
 *
 * @throws {@link AppFabricServiceException}
 * <p>Base exception class for all service exceptions from AppFabric service.</p>
 *
 *
 * @public
 */
export class DeleteIngestionCommand extends $Command
  .classBuilder<
    DeleteIngestionCommandInput,
    DeleteIngestionCommandOutput,
    AppFabricClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppFabricClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("FabricFrontEndService", "DeleteIngestion", {})
  .n("AppFabricClient", "DeleteIngestionCommand")
  .f(void 0, void 0)
  .ser(se_DeleteIngestionCommand)
  .de(de_DeleteIngestionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteIngestionRequest;
      output: {};
    };
    sdk: {
      input: DeleteIngestionCommandInput;
      output: DeleteIngestionCommandOutput;
    };
  };
}
