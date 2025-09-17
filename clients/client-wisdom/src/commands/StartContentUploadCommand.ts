// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  StartContentUploadRequest,
  StartContentUploadResponse,
  StartContentUploadResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_StartContentUploadCommand, se_StartContentUploadCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WisdomClientResolvedConfig } from "../WisdomClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartContentUploadCommand}.
 */
export interface StartContentUploadCommandInput extends StartContentUploadRequest {}
/**
 * @public
 *
 * The output of {@link StartContentUploadCommand}.
 */
export interface StartContentUploadCommandOutput extends StartContentUploadResponse, __MetadataBearer {}

/**
 * <p>Get a URL to upload content to a knowledge base. To upload content, first make a PUT
 *       request to the returned URL with your file, making sure to include the required headers. Then
 *       use <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_CreateContent.html">CreateContent</a> to finalize the content creation process or <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_UpdateContent.html">UpdateContent</a> to modify an existing resource. You can only upload content to a
 *       knowledge base of type CUSTOM.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WisdomClient, StartContentUploadCommand } from "@aws-sdk/client-wisdom"; // ES Modules import
 * // const { WisdomClient, StartContentUploadCommand } = require("@aws-sdk/client-wisdom"); // CommonJS import
 * // import type { WisdomClientConfig } from "@aws-sdk/client-wisdom";
 * const config = {}; // type is WisdomClientConfig
 * const client = new WisdomClient(config);
 * const input = { // StartContentUploadRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   contentType: "STRING_VALUE", // required
 *   presignedUrlTimeToLive: Number("int"),
 * };
 * const command = new StartContentUploadCommand(input);
 * const response = await client.send(command);
 * // { // StartContentUploadResponse
 * //   uploadId: "STRING_VALUE", // required
 * //   url: "STRING_VALUE", // required
 * //   urlExpiry: new Date("TIMESTAMP"), // required
 * //   headersToInclude: { // Headers // required
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param StartContentUploadCommandInput - {@link StartContentUploadCommandInput}
 * @returns {@link StartContentUploadCommandOutput}
 * @see {@link StartContentUploadCommandInput} for command's `input` shape.
 * @see {@link StartContentUploadCommandOutput} for command's `response` shape.
 * @see {@link WisdomClientResolvedConfig | config} for WisdomClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by a service.</p>
 *
 * @throws {@link WisdomServiceException}
 * <p>Base exception class for all service exceptions from Wisdom service.</p>
 *
 *
 * @public
 */
export class StartContentUploadCommand extends $Command
  .classBuilder<
    StartContentUploadCommandInput,
    StartContentUploadCommandOutput,
    WisdomClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WisdomClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WisdomService", "StartContentUpload", {})
  .n("WisdomClient", "StartContentUploadCommand")
  .f(void 0, StartContentUploadResponseFilterSensitiveLog)
  .ser(se_StartContentUploadCommand)
  .de(de_StartContentUploadCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartContentUploadRequest;
      output: StartContentUploadResponse;
    };
    sdk: {
      input: StartContentUploadCommandInput;
      output: StartContentUploadCommandOutput;
    };
  };
}
