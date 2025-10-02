// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetSdkTypeRequest, SdkType } from "../models/models_0";
import { de_GetSdkTypeCommand, se_GetSdkTypeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSdkTypeCommand}.
 */
export interface GetSdkTypeCommandInput extends GetSdkTypeRequest {}
/**
 * @public
 *
 * The output of {@link GetSdkTypeCommand}.
 */
export interface GetSdkTypeCommandOutput extends SdkType, __MetadataBearer {}

/**
 * <p>Gets an SDK type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetSdkTypeCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetSdkTypeCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // import type { APIGatewayClientConfig } from "@aws-sdk/client-api-gateway";
 * const config = {}; // type is APIGatewayClientConfig
 * const client = new APIGatewayClient(config);
 * const input = { // GetSdkTypeRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GetSdkTypeCommand(input);
 * const response = await client.send(command);
 * // { // SdkType
 * //   id: "STRING_VALUE",
 * //   friendlyName: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   configurationProperties: [ // ListOfSdkConfigurationProperty
 * //     { // SdkConfigurationProperty
 * //       name: "STRING_VALUE",
 * //       friendlyName: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       required: true || false,
 * //       defaultValue: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetSdkTypeCommandInput - {@link GetSdkTypeCommandInput}
 * @returns {@link GetSdkTypeCommandOutput}
 * @see {@link GetSdkTypeCommandInput} for command's `input` shape.
 * @see {@link GetSdkTypeCommandOutput} for command's `response` shape.
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
export class GetSdkTypeCommand extends $Command
  .classBuilder<
    GetSdkTypeCommandInput,
    GetSdkTypeCommandOutput,
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
  .s("BackplaneControlService", "GetSdkType", {})
  .n("APIGatewayClient", "GetSdkTypeCommand")
  .f(void 0, void 0)
  .ser(se_GetSdkTypeCommand)
  .de(de_GetSdkTypeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSdkTypeRequest;
      output: SdkType;
    };
    sdk: {
      input: GetSdkTypeCommandInput;
      output: GetSdkTypeCommandOutput;
    };
  };
}
