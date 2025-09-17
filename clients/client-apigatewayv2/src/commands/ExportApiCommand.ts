// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { Uint8ArrayBlobAdapter } from "@smithy/util-stream";

import { ApiGatewayV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApiGatewayV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ExportApiRequest, ExportApiResponse } from "../models/models_0";
import { de_ExportApiCommand, se_ExportApiCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ExportApiCommand}.
 */
export interface ExportApiCommandInput extends ExportApiRequest {}
/**
 * @public
 */
export type ExportApiCommandOutputType = Omit<ExportApiResponse, "body"> & {
  body?: Uint8ArrayBlobAdapter;
};

/**
 * @public
 *
 * The output of {@link ExportApiCommand}.
 */
export interface ExportApiCommandOutput extends ExportApiCommandOutputType, __MetadataBearer {}

/**
 * @public
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayV2Client, ExportApiCommand } from "@aws-sdk/client-apigatewayv2"; // ES Modules import
 * // const { ApiGatewayV2Client, ExportApiCommand } = require("@aws-sdk/client-apigatewayv2"); // CommonJS import
 * // import type { ApiGatewayV2ClientConfig } from "@aws-sdk/client-apigatewayv2";
 * const config = {}; // type is ApiGatewayV2ClientConfig
 * const client = new ApiGatewayV2Client(config);
 * const input = { // ExportApiRequest
 *   ApiId: "STRING_VALUE", // required
 *   ExportVersion: "STRING_VALUE",
 *   IncludeExtensions: true || false,
 *   OutputType: "STRING_VALUE", // required
 *   Specification: "STRING_VALUE", // required
 *   StageName: "STRING_VALUE",
 * };
 * const command = new ExportApiCommand(input);
 * const response = await client.send(command);
 * // { // ExportApiResponse
 * //   body: new Uint8Array(),
 * // };
 *
 * ```
 *
 * @param ExportApiCommandInput - {@link ExportApiCommandInput}
 * @returns {@link ExportApiCommandOutput}
 * @see {@link ExportApiCommandInput} for command's `input` shape.
 * @see {@link ExportApiCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayV2ClientResolvedConfig | config} for ApiGatewayV2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. See the message field for more information.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>A limit has been exceeded. See the accompanying error message for details.</p>
 *
 * @throws {@link ApiGatewayV2ServiceException}
 * <p>Base exception class for all service exceptions from ApiGatewayV2 service.</p>
 *
 *
 */
export class ExportApiCommand extends $Command
  .classBuilder<
    ExportApiCommandInput,
    ExportApiCommandOutput,
    ApiGatewayV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApiGatewayV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ApiGatewayV2", "ExportApi", {})
  .n("ApiGatewayV2Client", "ExportApiCommand")
  .f(void 0, void 0)
  .ser(se_ExportApiCommand)
  .de(de_ExportApiCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ExportApiRequest;
      output: ExportApiResponse;
    };
    sdk: {
      input: ExportApiCommandInput;
      output: ExportApiCommandOutput;
    };
  };
}
