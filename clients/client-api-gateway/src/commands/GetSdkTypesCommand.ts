// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetSdkTypesRequest, SdkTypes } from "../models/models_0";
import { de_GetSdkTypesCommand, se_GetSdkTypesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSdkTypesCommand}.
 */
export interface GetSdkTypesCommandInput extends GetSdkTypesRequest {}
/**
 * @public
 *
 * The output of {@link GetSdkTypesCommand}.
 */
export interface GetSdkTypesCommandOutput extends SdkTypes, __MetadataBearer {}

/**
 * <p>Gets SDK types</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetSdkTypesCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetSdkTypesCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new APIGatewayClient(config);
 * const input = { // GetSdkTypesRequest
 *   position: "STRING_VALUE",
 *   limit: Number("int"),
 * };
 * const command = new GetSdkTypesCommand(input);
 * const response = await client.send(command);
 * // { // SdkTypes
 * //   items: [ // ListOfSdkType
 * //     { // SdkType
 * //       id: "STRING_VALUE",
 * //       friendlyName: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       configurationProperties: [ // ListOfSdkConfigurationProperty
 * //         { // SdkConfigurationProperty
 * //           name: "STRING_VALUE",
 * //           friendlyName: "STRING_VALUE",
 * //           description: "STRING_VALUE",
 * //           required: true || false,
 * //           defaultValue: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetSdkTypesCommandInput - {@link GetSdkTypesCommandInput}
 * @returns {@link GetSdkTypesCommandOutput}
 * @see {@link GetSdkTypesCommandInput} for command's `input` shape.
 * @see {@link GetSdkTypesCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetSdkTypesCommand extends $Command
  .classBuilder<
    GetSdkTypesCommandInput,
    GetSdkTypesCommandOutput,
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
  .s("BackplaneControlService", "GetSdkTypes", {})
  .n("APIGatewayClient", "GetSdkTypesCommand")
  .f(void 0, void 0)
  .ser(se_GetSdkTypesCommand)
  .de(de_GetSdkTypesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSdkTypesRequest;
      output: SdkTypes;
    };
    sdk: {
      input: GetSdkTypesCommandInput;
      output: GetSdkTypesCommandOutput;
    };
  };
}
