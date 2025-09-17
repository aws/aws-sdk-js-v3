// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DisassociateAppBlockBuilderAppBlockRequest,
  DisassociateAppBlockBuilderAppBlockResult,
} from "../models/models_0";
import {
  de_DisassociateAppBlockBuilderAppBlockCommand,
  se_DisassociateAppBlockBuilderAppBlockCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateAppBlockBuilderAppBlockCommand}.
 */
export interface DisassociateAppBlockBuilderAppBlockCommandInput extends DisassociateAppBlockBuilderAppBlockRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateAppBlockBuilderAppBlockCommand}.
 */
export interface DisassociateAppBlockBuilderAppBlockCommandOutput
  extends DisassociateAppBlockBuilderAppBlockResult,
    __MetadataBearer {}

/**
 * <p>Disassociates a specified app block builder from a specified app block.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DisassociateAppBlockBuilderAppBlockCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DisassociateAppBlockBuilderAppBlockCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // DisassociateAppBlockBuilderAppBlockRequest
 *   AppBlockArn: "STRING_VALUE", // required
 *   AppBlockBuilderName: "STRING_VALUE", // required
 * };
 * const command = new DisassociateAppBlockBuilderAppBlockCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateAppBlockBuilderAppBlockCommandInput - {@link DisassociateAppBlockBuilderAppBlockCommandInput}
 * @returns {@link DisassociateAppBlockBuilderAppBlockCommandOutput}
 * @see {@link DisassociateAppBlockBuilderAppBlockCommandInput} for command's `input` shape.
 * @see {@link DisassociateAppBlockBuilderAppBlockCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>An API error occurred. Wait a few minutes and try again.</p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Indicates an incorrect combination of parameters, or a missing parameter.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>The attempted operation is not permitted.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link AppStreamServiceException}
 * <p>Base exception class for all service exceptions from AppStream service.</p>
 *
 *
 * @public
 */
export class DisassociateAppBlockBuilderAppBlockCommand extends $Command
  .classBuilder<
    DisassociateAppBlockBuilderAppBlockCommandInput,
    DisassociateAppBlockBuilderAppBlockCommandOutput,
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
  .s("PhotonAdminProxyService", "DisassociateAppBlockBuilderAppBlock", {})
  .n("AppStreamClient", "DisassociateAppBlockBuilderAppBlockCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateAppBlockBuilderAppBlockCommand)
  .de(de_DisassociateAppBlockBuilderAppBlockCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateAppBlockBuilderAppBlockRequest;
      output: {};
    };
    sdk: {
      input: DisassociateAppBlockBuilderAppBlockCommandInput;
      output: DisassociateAppBlockBuilderAppBlockCommandOutput;
    };
  };
}
