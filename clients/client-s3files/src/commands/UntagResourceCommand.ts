// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UntagResourceRequest } from "../models/models_0";
import type { S3FilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3FilesClient";
import { UntagResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UntagResourceCommand}.
 */
export interface UntagResourceCommandInput extends UntagResourceRequest {}
/**
 * @public
 *
 * The output of {@link UntagResourceCommand}.
 */
export interface UntagResourceCommandOutput extends __MetadataBearer {}

/**
 * <p>Removes tags from S3 Files resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3FilesClient, UntagResourceCommand } from "@aws-sdk/client-s3files"; // ES Modules import
 * // const { S3FilesClient, UntagResourceCommand } = require("@aws-sdk/client-s3files"); // CommonJS import
 * // import type { S3FilesClientConfig } from "@aws-sdk/client-s3files";
 * const config = {}; // type is S3FilesClientConfig
 * const client = new S3FilesClient(config);
 * const input = { // UntagResourceRequest
 *   resourceId: "STRING_VALUE", // required
 *   tagKeys: [ // TagKeys // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UntagResourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UntagResourceCommandInput - {@link UntagResourceCommandInput}
 * @returns {@link UntagResourceCommandOutput}
 * @see {@link UntagResourceCommandInput} for command's `input` shape.
 * @see {@link UntagResourceCommandOutput} for command's `response` shape.
 * @see {@link S3FilesClientResolvedConfig | config} for S3FilesClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found. Verify that the resource exists and that you have permission to access it.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input parameters are not valid. Check the parameter values and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled. Retry your request using exponential backoff.</p>
 *
 * @throws {@link S3FilesServiceException}
 * <p>Base exception class for all service exceptions from S3Files service.</p>
 *
 *
 * @public
 */
export class UntagResourceCommand extends $Command
  .classBuilder<
    UntagResourceCommandInput,
    UntagResourceCommandOutput,
    S3FilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: S3FilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("S3Files", "UntagResource", {})
  .n("S3FilesClient", "UntagResourceCommand")
  .sc(UntagResource$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UntagResourceRequest;
      output: {};
    };
    sdk: {
      input: UntagResourceCommandInput;
      output: UntagResourceCommandOutput;
    };
  };
}
