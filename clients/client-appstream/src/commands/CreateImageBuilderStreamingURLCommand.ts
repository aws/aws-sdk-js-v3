// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateImageBuilderStreamingURLRequest, CreateImageBuilderStreamingURLResult } from "../models/models_0";
import { CreateImageBuilderStreamingURL$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateImageBuilderStreamingURLCommand}.
 */
export interface CreateImageBuilderStreamingURLCommandInput extends CreateImageBuilderStreamingURLRequest {}
/**
 * @public
 *
 * The output of {@link CreateImageBuilderStreamingURLCommand}.
 */
export interface CreateImageBuilderStreamingURLCommandOutput extends CreateImageBuilderStreamingURLResult, __MetadataBearer {}

/**
 * <p>Creates a URL to start an image builder streaming session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, CreateImageBuilderStreamingURLCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, CreateImageBuilderStreamingURLCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // CreateImageBuilderStreamingURLRequest
 *   Name: "STRING_VALUE", // required
 *   Validity: Number("long"),
 * };
 * const command = new CreateImageBuilderStreamingURLCommand(input);
 * const response = await client.send(command);
 * // { // CreateImageBuilderStreamingURLResult
 * //   StreamingURL: "STRING_VALUE",
 * //   Expires: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateImageBuilderStreamingURLCommandInput - {@link CreateImageBuilderStreamingURLCommandInput}
 * @returns {@link CreateImageBuilderStreamingURLCommandOutput}
 * @see {@link CreateImageBuilderStreamingURLCommandInput} for command's `input` shape.
 * @see {@link CreateImageBuilderStreamingURLCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
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
export class CreateImageBuilderStreamingURLCommand extends $Command
  .classBuilder<
    CreateImageBuilderStreamingURLCommandInput,
    CreateImageBuilderStreamingURLCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PhotonAdminProxyService", "CreateImageBuilderStreamingURL", {})
  .n("AppStreamClient", "CreateImageBuilderStreamingURLCommand")
  .sc(CreateImageBuilderStreamingURL$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateImageBuilderStreamingURLRequest;
      output: CreateImageBuilderStreamingURLResult;
    };
    sdk: {
      input: CreateImageBuilderStreamingURLCommandInput;
      output: CreateImageBuilderStreamingURLCommandOutput;
    };
  };
}
