// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateAppBlockBuilderStreamingURLRequest, CreateAppBlockBuilderStreamingURLResult } from "../models/models_0";
import {
  de_CreateAppBlockBuilderStreamingURLCommand,
  se_CreateAppBlockBuilderStreamingURLCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAppBlockBuilderStreamingURLCommand}.
 */
export interface CreateAppBlockBuilderStreamingURLCommandInput extends CreateAppBlockBuilderStreamingURLRequest {}
/**
 * @public
 *
 * The output of {@link CreateAppBlockBuilderStreamingURLCommand}.
 */
export interface CreateAppBlockBuilderStreamingURLCommandOutput
  extends CreateAppBlockBuilderStreamingURLResult,
    __MetadataBearer {}

/**
 * <p>Creates a URL to start a create app block builder streaming session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, CreateAppBlockBuilderStreamingURLCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, CreateAppBlockBuilderStreamingURLCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new AppStreamClient(config);
 * const input = { // CreateAppBlockBuilderStreamingURLRequest
 *   AppBlockBuilderName: "STRING_VALUE", // required
 *   Validity: Number("long"),
 * };
 * const command = new CreateAppBlockBuilderStreamingURLCommand(input);
 * const response = await client.send(command);
 * // { // CreateAppBlockBuilderStreamingURLResult
 * //   StreamingURL: "STRING_VALUE",
 * //   Expires: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateAppBlockBuilderStreamingURLCommandInput - {@link CreateAppBlockBuilderStreamingURLCommandInput}
 * @returns {@link CreateAppBlockBuilderStreamingURLCommandOutput}
 * @see {@link CreateAppBlockBuilderStreamingURLCommandInput} for command's `input` shape.
 * @see {@link CreateAppBlockBuilderStreamingURLCommandOutput} for command's `response` shape.
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
 * @public
 */
export class CreateAppBlockBuilderStreamingURLCommand extends $Command
  .classBuilder<
    CreateAppBlockBuilderStreamingURLCommandInput,
    CreateAppBlockBuilderStreamingURLCommandOutput,
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
  .s("PhotonAdminProxyService", "CreateAppBlockBuilderStreamingURL", {})
  .n("AppStreamClient", "CreateAppBlockBuilderStreamingURLCommand")
  .f(void 0, void 0)
  .ser(se_CreateAppBlockBuilderStreamingURLCommand)
  .de(de_CreateAppBlockBuilderStreamingURLCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAppBlockBuilderStreamingURLRequest;
      output: CreateAppBlockBuilderStreamingURLResult;
    };
    sdk: {
      input: CreateAppBlockBuilderStreamingURLCommandInput;
      output: CreateAppBlockBuilderStreamingURLCommandOutput;
    };
  };
}
