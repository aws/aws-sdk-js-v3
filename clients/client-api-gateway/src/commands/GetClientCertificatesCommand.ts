// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ClientCertificates, GetClientCertificatesRequest } from "../models/models_0";
import { GetClientCertificates } from "../schemas/schemas_31_Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetClientCertificatesCommand}.
 */
export interface GetClientCertificatesCommandInput extends GetClientCertificatesRequest {}
/**
 * @public
 *
 * The output of {@link GetClientCertificatesCommand}.
 */
export interface GetClientCertificatesCommandOutput extends ClientCertificates, __MetadataBearer {}

/**
 * <p>Gets a collection of ClientCertificate resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetClientCertificatesCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetClientCertificatesCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // import type { APIGatewayClientConfig } from "@aws-sdk/client-api-gateway";
 * const config = {}; // type is APIGatewayClientConfig
 * const client = new APIGatewayClient(config);
 * const input = { // GetClientCertificatesRequest
 *   position: "STRING_VALUE",
 *   limit: Number("int"),
 * };
 * const command = new GetClientCertificatesCommand(input);
 * const response = await client.send(command);
 * // { // ClientCertificates
 * //   items: [ // ListOfClientCertificate
 * //     { // ClientCertificate
 * //       clientCertificateId: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       pemEncodedCertificate: "STRING_VALUE",
 * //       createdDate: new Date("TIMESTAMP"),
 * //       expirationDate: new Date("TIMESTAMP"),
 * //       tags: { // MapOfStringToString
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   position: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetClientCertificatesCommandInput - {@link GetClientCertificatesCommandInput}
 * @returns {@link GetClientCertificatesCommandOutput}
 * @see {@link GetClientCertificatesCommandInput} for command's `input` shape.
 * @see {@link GetClientCertificatesCommandOutput} for command's `response` shape.
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
export class GetClientCertificatesCommand extends $Command
  .classBuilder<
    GetClientCertificatesCommandInput,
    GetClientCertificatesCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: APIGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BackplaneControlService", "GetClientCertificates", {})
  .n("APIGatewayClient", "GetClientCertificatesCommand")
  .sc(GetClientCertificates)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetClientCertificatesRequest;
      output: ClientCertificates;
    };
    sdk: {
      input: GetClientCertificatesCommandInput;
      output: GetClientCertificatesCommandOutput;
    };
  };
}
