// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteChannelNamespaceRequest, DeleteChannelNamespaceResponse } from "../models/models_0";
import { de_DeleteChannelNamespaceCommand, se_DeleteChannelNamespaceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteChannelNamespaceCommand}.
 */
export interface DeleteChannelNamespaceCommandInput extends DeleteChannelNamespaceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteChannelNamespaceCommand}.
 */
export interface DeleteChannelNamespaceCommandOutput extends DeleteChannelNamespaceResponse, __MetadataBearer {}

/**
 * <p>Deletes a <code>ChannelNamespace</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, DeleteChannelNamespaceCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, DeleteChannelNamespaceCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const input = { // DeleteChannelNamespaceRequest
 *   apiId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 * };
 * const command = new DeleteChannelNamespaceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteChannelNamespaceCommandInput - {@link DeleteChannelNamespaceCommandInput}
 * @returns {@link DeleteChannelNamespaceCommandOutput}
 * @see {@link DeleteChannelNamespaceCommandInput} for command's `input` shape.
 * @see {@link DeleteChannelNamespaceCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to perform this operation on this resource.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not well formed. For example, a value is invalid or a required field is
 *          missing. Check the field values, and then try again.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Another modification is in progress at this time and it must complete before you can
 *          make your change.</p>
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
export class DeleteChannelNamespaceCommand extends $Command
  .classBuilder<
    DeleteChannelNamespaceCommandInput,
    DeleteChannelNamespaceCommandOutput,
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
  .s("AWSDeepdishControlPlaneService", "DeleteChannelNamespace", {})
  .n("AppSyncClient", "DeleteChannelNamespaceCommand")
  .f(void 0, void 0)
  .ser(se_DeleteChannelNamespaceCommand)
  .de(de_DeleteChannelNamespaceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteChannelNamespaceRequest;
      output: {};
    };
    sdk: {
      input: DeleteChannelNamespaceCommandInput;
      output: DeleteChannelNamespaceCommandOutput;
    };
  };
}
