// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetModelRequest, Model } from "../models/models_0";
import { GetModel } from "../schemas/schemas_14_Model";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetModelCommand}.
 */
export interface GetModelCommandInput extends GetModelRequest {}
/**
 * @public
 *
 * The output of {@link GetModelCommand}.
 */
export interface GetModelCommandOutput extends Model, __MetadataBearer {}

/**
 * <p>Describes an existing model defined for a RestApi resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetModelCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetModelCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // import type { APIGatewayClientConfig } from "@aws-sdk/client-api-gateway";
 * const config = {}; // type is APIGatewayClientConfig
 * const client = new APIGatewayClient(config);
 * const input = { // GetModelRequest
 *   restApiId: "STRING_VALUE", // required
 *   modelName: "STRING_VALUE", // required
 *   flatten: true || false,
 * };
 * const command = new GetModelCommand(input);
 * const response = await client.send(command);
 * // { // Model
 * //   id: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   schema: "STRING_VALUE",
 * //   contentType: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetModelCommandInput - {@link GetModelCommandInput}
 * @returns {@link GetModelCommandOutput}
 * @see {@link GetModelCommandInput} for command's `input` shape.
 * @see {@link GetModelCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for APIGatewayClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
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
export class GetModelCommand extends $Command
  .classBuilder<
    GetModelCommandInput,
    GetModelCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: APIGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BackplaneControlService", "GetModel", {})
  .n("APIGatewayClient", "GetModelCommand")
  .sc(GetModel)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetModelRequest;
      output: Model;
    };
    sdk: {
      input: GetModelCommandInput;
      output: GetModelCommandOutput;
    };
  };
}
