// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAttachedFileRequest, DeleteAttachedFileResponse } from "../models/models_0";
import { de_DeleteAttachedFileCommand, se_DeleteAttachedFileCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAttachedFileCommand}.
 */
export interface DeleteAttachedFileCommandInput extends DeleteAttachedFileRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAttachedFileCommand}.
 */
export interface DeleteAttachedFileCommandOutput extends DeleteAttachedFileResponse, __MetadataBearer {}

/**
 * <p>Deletes an attached file along with the underlying S3 Object.</p>
 *          <important>
 *             <p>The attached file is <b>permanently deleted</b> if S3 bucket
 *     versioning is not enabled.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DeleteAttachedFileCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DeleteAttachedFileCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DeleteAttachedFileRequest
 *   InstanceId: "STRING_VALUE", // required
 *   FileId: "STRING_VALUE", // required
 *   AssociatedResourceArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteAttachedFileCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAttachedFileCommandInput - {@link DeleteAttachedFileCommandInput}
 * @returns {@link DeleteAttachedFileCommandOutput}
 * @see {@link DeleteAttachedFileCommandInput} for command's `input` shape.
 * @see {@link DeleteAttachedFileCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
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
export class DeleteAttachedFileCommand extends $Command
  .classBuilder<
    DeleteAttachedFileCommandInput,
    DeleteAttachedFileCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "DeleteAttachedFile", {})
  .n("ConnectClient", "DeleteAttachedFileCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAttachedFileCommand)
  .de(de_DeleteAttachedFileCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAttachedFileRequest;
      output: {};
    };
    sdk: {
      input: DeleteAttachedFileCommandInput;
      output: DeleteAttachedFileCommandOutput;
    };
  };
}
