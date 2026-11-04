// smithy-typescript generated code
import { Uint8ArrayBlobAdapter } from "@smithy/core/serde";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetFunctionRequest, GetFunctionResult } from "../models/models_0";
import { GetFunction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Gets the code of a CloudFront function. To get configuration information and metadata about a function, use `DescribeFunction`.
 *
 * To get a function's code, you must provide the function's name and stage. To get these values, you can use `ListFunctions`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetFunctionCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetFunctionCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
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
 *
 * The function does not exist.
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *
 * This operation is not supported in this Amazon Web Services Region.
 *
 * @throws {@link CloudFrontServiceException}
 *
 * Base exception class for all service exceptions from CloudFront service.
 *
 * @public
 */
export class GetFunctionCommand extends command<GetFunctionCommandInput, GetFunctionCommandOutput>(
  _ep0,
  _mw0,
  "GetFunction",
  GetFunction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFunctionRequest;
      output: GetFunctionResult;
    };
    sdk: {
      input: GetFunctionCommandInput;
      output: GetFunctionCommandOutput;
    };
  };
}
