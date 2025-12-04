// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { AssociateSoftwareToImageBuilderRequest, AssociateSoftwareToImageBuilderResult } from "../models/models_0";
import { AssociateSoftwareToImageBuilder } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateSoftwareToImageBuilderCommand}.
 */
export interface AssociateSoftwareToImageBuilderCommandInput extends AssociateSoftwareToImageBuilderRequest {}
/**
 * @public
 *
 * The output of {@link AssociateSoftwareToImageBuilderCommand}.
 */
export interface AssociateSoftwareToImageBuilderCommandOutput
  extends AssociateSoftwareToImageBuilderResult,
    __MetadataBearer {}

/**
 * <p>Associates license included application(s) with an existing image builder instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, AssociateSoftwareToImageBuilderCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, AssociateSoftwareToImageBuilderCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // AssociateSoftwareToImageBuilderRequest
 *   ImageBuilderName: "STRING_VALUE", // required
 *   SoftwareNames: [ // StringList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new AssociateSoftwareToImageBuilderCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateSoftwareToImageBuilderCommandInput - {@link AssociateSoftwareToImageBuilderCommandInput}
 * @returns {@link AssociateSoftwareToImageBuilderCommandOutput}
 * @see {@link AssociateSoftwareToImageBuilderCommandInput} for command's `input` shape.
 * @see {@link AssociateSoftwareToImageBuilderCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>An API error occurred. Wait a few minutes and try again.</p>
 *
 * @throws {@link IncompatibleImageException} (client fault)
 *  <p>The image can't be updated because it's not compatible for updates.</p>
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
export class AssociateSoftwareToImageBuilderCommand extends $Command
  .classBuilder<
    AssociateSoftwareToImageBuilderCommandInput,
    AssociateSoftwareToImageBuilderCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PhotonAdminProxyService", "AssociateSoftwareToImageBuilder", {})
  .n("AppStreamClient", "AssociateSoftwareToImageBuilderCommand")
  .sc(AssociateSoftwareToImageBuilder)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateSoftwareToImageBuilderRequest;
      output: {};
    };
    sdk: {
      input: AssociateSoftwareToImageBuilderCommandInput;
      output: AssociateSoftwareToImageBuilderCommandOutput;
    };
  };
}
