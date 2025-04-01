// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteApiKeyRequest, DeleteApiKeyResponse } from "../models/models_0";
import { de_DeleteApiKeyCommand, se_DeleteApiKeyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteApiKeyCommand}.
 */
export interface DeleteApiKeyCommandInput extends DeleteApiKeyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteApiKeyCommand}.
 */
export interface DeleteApiKeyCommandOutput extends DeleteApiKeyResponse, __MetadataBearer {}

/**
 * <p>Deletes an API key.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, DeleteApiKeyCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, DeleteApiKeyCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const input = { // DeleteApiKeyRequest
 *   apiId: "STRING_VALUE", // required
 *   id: "STRING_VALUE", // required
 * };
 * const command = new DeleteApiKeyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteApiKeyCommandInput - {@link DeleteApiKeyCommandInput}
 * @returns {@link DeleteApiKeyCommandOutput}
 * @see {@link DeleteApiKeyCommandInput} for command's `input` shape.
 * @see {@link DeleteApiKeyCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not well formed. For example, a value is invalid or a required field is
 *          missing. Check the field values, and then try again.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal AppSync error occurred. Try your request again.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. Check the resource, and then try
 *          again.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You aren't authorized to perform this operation.</p>
 *
 * @throws {@link AppSyncServiceException}
 * <p>Base exception class for all service exceptions from AppSync service.</p>
 *
 *
 * @public
 */
export class DeleteApiKeyCommand extends $Command
  .classBuilder<
    DeleteApiKeyCommandInput,
    DeleteApiKeyCommandOutput,
    AppSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppSyncClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSDeepdishControlPlaneService", "DeleteApiKey", {})
  .n("AppSyncClient", "DeleteApiKeyCommand")
  .f(void 0, void 0)
  .ser(se_DeleteApiKeyCommand)
  .de(de_DeleteApiKeyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteApiKeyRequest;
      output: {};
    };
    sdk: {
      input: DeleteApiKeyCommandInput;
      output: DeleteApiKeyCommandOutput;
    };
  };
}
