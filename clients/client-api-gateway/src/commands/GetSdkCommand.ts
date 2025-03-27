// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { Uint8ArrayBlobAdapter } from "@smithy/util-stream";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetSdkRequest, SdkResponse } from "../models/models_0";
import { de_GetSdkCommand, se_GetSdkCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSdkCommand}.
 */
export interface GetSdkCommandInput extends GetSdkRequest {}
/**
 * @public
 */
export type GetSdkCommandOutputType = Omit<SdkResponse, "body"> & {
  body?: Uint8ArrayBlobAdapter;
};

/**
 * @public
 *
 * The output of {@link GetSdkCommand}.
 */
export interface GetSdkCommandOutput extends GetSdkCommandOutputType, __MetadataBearer {}

/**
 * <p>Generates a client SDK for a RestApi and Stage.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetSdkCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetSdkCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const input = { // GetSdkRequest
 *   restApiId: "STRING_VALUE", // required
 *   stageName: "STRING_VALUE", // required
 *   sdkType: "STRING_VALUE", // required
 *   parameters: { // MapOfStringToString
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new GetSdkCommand(input);
 * const response = await client.send(command);
 * // { // SdkResponse
 * //   contentType: "STRING_VALUE",
 * //   contentDisposition: "STRING_VALUE",
 * //   body: new Uint8Array(),
 * // };
 *
 * ```
 *
 * @param GetSdkCommandInput - {@link GetSdkCommandInput}
 * @returns {@link GetSdkCommandOutput}
 * @see {@link GetSdkCommandInput} for command's `input` shape.
 * @see {@link GetSdkCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for APIGatewayClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeded the rate limit. Retry after the specified time period.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The requested resource is not found. Make sure that the request URI is correct.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request has reached its throttling limit. Retry after the specified time period.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The request is denied because the caller has insufficient permissions.</p>
 *
 * @throws {@link APIGatewayServiceException}
 * <p>Base exception class for all service exceptions from APIGateway service.</p>
 *
 *
 * @public
 */
export class GetSdkCommand extends $Command
  .classBuilder<
    GetSdkCommandInput,
    GetSdkCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: APIGatewayClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("BackplaneControlService", "GetSdk", {})
  .n("APIGatewayClient", "GetSdkCommand")
  .f(void 0, void 0)
  .ser(se_GetSdkCommand)
  .de(de_GetSdkCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSdkRequest;
      output: SdkResponse;
    };
    sdk: {
      input: GetSdkCommandInput;
      output: GetSdkCommandOutput;
    };
  };
}
