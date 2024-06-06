// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ClientCertificate, GetClientCertificateRequest } from "../models/models_0";
import { de_GetClientCertificateCommand, se_GetClientCertificateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetClientCertificateCommand}.
 */
export interface GetClientCertificateCommandInput extends GetClientCertificateRequest {}
/**
 * @public
 *
 * The output of {@link GetClientCertificateCommand}.
 */
export interface GetClientCertificateCommandOutput extends ClientCertificate, __MetadataBearer {}

/**
 * <p>Gets information about the current ClientCertificate resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetClientCertificateCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetClientCertificateCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const input = { // GetClientCertificateRequest
 *   clientCertificateId: "STRING_VALUE", // required
 * };
 * const command = new GetClientCertificateCommand(input);
 * const response = await client.send(command);
 * // { // ClientCertificate
 * //   clientCertificateId: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   pemEncodedCertificate: "STRING_VALUE",
 * //   createdDate: new Date("TIMESTAMP"),
 * //   expirationDate: new Date("TIMESTAMP"),
 * //   tags: { // MapOfStringToString
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetClientCertificateCommandInput - {@link GetClientCertificateCommandInput}
 * @returns {@link GetClientCertificateCommandOutput}
 * @see {@link GetClientCertificateCommandInput} for command's `input` shape.
 * @see {@link GetClientCertificateCommandOutput} for command's `response` shape.
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
export class GetClientCertificateCommand extends $Command
  .classBuilder<
    GetClientCertificateCommandInput,
    GetClientCertificateCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: APIGatewayClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("BackplaneControlService", "GetClientCertificate", {})
  .n("APIGatewayClient", "GetClientCertificateCommand")
  .f(void 0, void 0)
  .ser(se_GetClientCertificateCommand)
  .de(de_GetClientCertificateCommand)
  .build() {}
