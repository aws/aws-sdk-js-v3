// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { Uint8ArrayBlobAdapter } from "@smithy/util-stream";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetConnectionFunctionRequest, GetConnectionFunctionResult } from "../models/models_0";
import { GetConnectionFunction } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetConnectionFunctionCommand}.
 */
export interface GetConnectionFunctionCommandInput extends GetConnectionFunctionRequest {}
/**
 * @public
 */
export type GetConnectionFunctionCommandOutputType = Omit<GetConnectionFunctionResult, "ConnectionFunctionCode"> & {
  ConnectionFunctionCode?: Uint8ArrayBlobAdapter;
};

/**
 * @public
 *
 * The output of {@link GetConnectionFunctionCommand}.
 */
export interface GetConnectionFunctionCommandOutput extends GetConnectionFunctionCommandOutputType, __MetadataBearer {}

/**
 * <p>Gets a connection function.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetConnectionFunctionCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetConnectionFunctionCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // GetConnectionFunctionRequest
 *   Identifier: "STRING_VALUE", // required
 *   Stage: "DEVELOPMENT" || "LIVE",
 * };
 * const command = new GetConnectionFunctionCommand(input);
 * const response = await client.send(command);
 * // { // GetConnectionFunctionResult
 * //   ConnectionFunctionCode: new Uint8Array(),
 * //   ETag: "STRING_VALUE",
 * //   ContentType: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetConnectionFunctionCommandInput - {@link GetConnectionFunctionCommandInput}
 * @returns {@link GetConnectionFunctionCommandOutput}
 * @see {@link GetConnectionFunctionCommandInput} for command's `input` shape.
 * @see {@link GetConnectionFunctionCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link EntityNotFound} (client fault)
 *  <p>The entity was not found.</p>
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *  <p>This operation is not supported in this Amazon Web Services Region.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @public
 */
export class GetConnectionFunctionCommand extends $Command
  .classBuilder<
    GetConnectionFunctionCommandInput,
    GetConnectionFunctionCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Cloudfront2020_05_31", "GetConnectionFunction", {})
  .n("CloudFrontClient", "GetConnectionFunctionCommand")
  .sc(GetConnectionFunction)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetConnectionFunctionRequest;
      output: GetConnectionFunctionResult;
    };
    sdk: {
      input: GetConnectionFunctionCommandInput;
      output: GetConnectionFunctionCommandOutput;
    };
  };
}
