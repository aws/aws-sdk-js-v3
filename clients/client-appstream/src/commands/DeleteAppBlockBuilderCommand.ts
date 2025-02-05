// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAppBlockBuilderRequest, DeleteAppBlockBuilderResult } from "../models/models_0";
import { de_DeleteAppBlockBuilderCommand, se_DeleteAppBlockBuilderCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAppBlockBuilderCommand}.
 */
export interface DeleteAppBlockBuilderCommandInput extends DeleteAppBlockBuilderRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAppBlockBuilderCommand}.
 */
export interface DeleteAppBlockBuilderCommandOutput extends DeleteAppBlockBuilderResult, __MetadataBearer {}

/**
 * <p>Deletes an app block builder.</p>
 *          <p>An app block builder can only be deleted when it has no association with an app
 *             block.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DeleteAppBlockBuilderCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DeleteAppBlockBuilderCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new AppStreamClient(config);
 * const input = { // DeleteAppBlockBuilderRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeleteAppBlockBuilderCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAppBlockBuilderCommandInput - {@link DeleteAppBlockBuilderCommandInput}
 * @returns {@link DeleteAppBlockBuilderCommandOutput}
 * @see {@link DeleteAppBlockBuilderCommandInput} for command's `input` shape.
 * @see {@link DeleteAppBlockBuilderCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>An API error occurred. Wait a few minutes and try again.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The attempted operation is not permitted.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is in use.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link AppStreamServiceException}
 * <p>Base exception class for all service exceptions from AppStream service.</p>
 *
 * @public
 */
export class DeleteAppBlockBuilderCommand extends $Command
  .classBuilder<
    DeleteAppBlockBuilderCommandInput,
    DeleteAppBlockBuilderCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PhotonAdminProxyService", "DeleteAppBlockBuilder", {})
  .n("AppStreamClient", "DeleteAppBlockBuilderCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAppBlockBuilderCommand)
  .de(de_DeleteAppBlockBuilderCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAppBlockBuilderRequest;
      output: {};
    };
    sdk: {
      input: DeleteAppBlockBuilderCommandInput;
      output: DeleteAppBlockBuilderCommandOutput;
    };
  };
}
