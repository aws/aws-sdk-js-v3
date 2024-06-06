// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { Uint8ArrayBlobAdapter } from "@smithy/util-stream";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetFunctionRequest, GetFunctionResult, GetFunctionResultFilterSensitiveLog } from "../models/models_1";
import { de_GetFunctionCommand, se_GetFunctionCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetFunctionCommand}.
 */
export interface GetFunctionCommandInput extends GetFunctionRequest {}
/**
 * @public
 */
export type GetFunctionCommandOutputType = Omit<GetFunctionResult, "FunctionCode"> & {
  FunctionCode?: Uint8ArrayBlobAdapter;
};

/**
 * @public
 *
 * The output of {@link GetFunctionCommand}.
 */
export interface GetFunctionCommandOutput extends GetFunctionCommandOutputType, __MetadataBearer {}

/**
 * <p>Gets the code of a CloudFront function. To get configuration information and metadata about
 * 			a function, use <code>DescribeFunction</code>.</p>
 *          <p>To get a function's code, you must provide the function's name and stage. To get these
 * 			values, you can use <code>ListFunctions</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetFunctionCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetFunctionCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // GetFunctionRequest
 *   Name: "STRING_VALUE", // required
 *   Stage: "DEVELOPMENT" || "LIVE",
 * };
 * const command = new GetFunctionCommand(input);
 * const response = await client.send(command);
 * // { // GetFunctionResult
 * //   FunctionCode: new Uint8Array(),
 * //   ETag: "STRING_VALUE",
 * //   ContentType: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetFunctionCommandInput - {@link GetFunctionCommandInput}
 * @returns {@link GetFunctionCommandOutput}
 * @see {@link GetFunctionCommandInput} for command's `input` shape.
 * @see {@link GetFunctionCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link NoSuchFunctionExists} (client fault)
 *  <p>The function does not exist.</p>
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *  <p>This operation is not supported in this region.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 * @public
 */
export class GetFunctionCommand extends $Command
  .classBuilder<
    GetFunctionCommandInput,
    GetFunctionCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Cloudfront2020_05_31", "GetFunction", {})
  .n("CloudFrontClient", "GetFunctionCommand")
  .f(void 0, GetFunctionResultFilterSensitiveLog)
  .ser(se_GetFunctionCommand)
  .de(de_GetFunctionCommand)
  .build() {}
