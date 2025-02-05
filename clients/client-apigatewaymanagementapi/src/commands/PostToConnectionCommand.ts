// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { BlobPayloadInputTypes, MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ApiGatewayManagementApiClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApiGatewayManagementApiClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PostToConnectionRequest } from "../models/models_0";
import { de_PostToConnectionCommand, se_PostToConnectionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 */
export type PostToConnectionCommandInputType = Omit<PostToConnectionRequest, "Data"> & {
  Data: BlobPayloadInputTypes;
};

/**
 * @public
 *
 * The input for {@link PostToConnectionCommand}.
 */
export interface PostToConnectionCommandInput extends PostToConnectionCommandInputType {}
/**
 * @public
 *
 * The output of {@link PostToConnectionCommand}.
 */
export interface PostToConnectionCommandOutput extends __MetadataBearer {}

/**
 * <p>Sends the provided data to the specified connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApiGatewayManagementApiClient, PostToConnectionCommand } from "@aws-sdk/client-apigatewaymanagementapi"; // ES Modules import
 * // const { ApiGatewayManagementApiClient, PostToConnectionCommand } = require("@aws-sdk/client-apigatewaymanagementapi"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ApiGatewayManagementApiClient(config);
 * const input = { // PostToConnectionRequest
 *   Data: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 *   ConnectionId: "STRING_VALUE", // required
 * };
 * const command = new PostToConnectionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PostToConnectionCommandInput - {@link PostToConnectionCommandInput}
 * @returns {@link PostToConnectionCommandOutput}
 * @see {@link PostToConnectionCommandInput} for command's `input` shape.
 * @see {@link PostToConnectionCommandOutput} for command's `response` shape.
 * @see {@link ApiGatewayManagementApiClientResolvedConfig | config} for ApiGatewayManagementApiClient's `config` shape.
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The caller is not authorized to invoke this operation.</p>
 *
 * @throws {@link GoneException} (client fault)
 *  <p>The connection with the provided id no longer exists.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The client is sending more than the allowed number of requests per unit of time or the WebSocket client side buffer is full.</p>
 *
 * @throws {@link PayloadTooLargeException} (client fault)
 *  <p>The data has exceeded the maximum size allowed.</p>
 *
 * @throws {@link ApiGatewayManagementApiServiceException}
 * <p>Base exception class for all service exceptions from ApiGatewayManagementApi service.</p>
 *
 * @public
 */
export class PostToConnectionCommand extends $Command
  .classBuilder<
    PostToConnectionCommandInput,
    PostToConnectionCommandOutput,
    ApiGatewayManagementApiClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApiGatewayManagementApiClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ApiGatewayManagementApi", "PostToConnection", {})
  .n("ApiGatewayManagementApiClient", "PostToConnectionCommand")
  .f(void 0, void 0)
  .ser(se_PostToConnectionCommand)
  .de(de_PostToConnectionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PostToConnectionRequest;
      output: {};
    };
    sdk: {
      input: PostToConnectionCommandInput;
      output: PostToConnectionCommandOutput;
    };
  };
}
