// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ClientCertificate, GenerateClientCertificateRequest } from "../models/models_0";
import { de_GenerateClientCertificateCommand, se_GenerateClientCertificateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GenerateClientCertificateCommand}.
 */
export interface GenerateClientCertificateCommandInput extends GenerateClientCertificateRequest {}
/**
 * @public
 *
 * The output of {@link GenerateClientCertificateCommand}.
 */
export interface GenerateClientCertificateCommandOutput extends ClientCertificate, __MetadataBearer {}

/**
 * <p>Generates a ClientCertificate resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GenerateClientCertificateCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GenerateClientCertificateCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // import type { APIGatewayClientConfig } from "@aws-sdk/client-api-gateway";
 * const config = {}; // type is APIGatewayClientConfig
 * const client = new APIGatewayClient(config);
 * const input = { // GenerateClientCertificateRequest
 *   description: "STRING_VALUE",
 *   tags: { // MapOfStringToString
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new GenerateClientCertificateCommand(input);
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
 * @param GenerateClientCertificateCommandInput - {@link GenerateClientCertificateCommandInput}
 * @returns {@link GenerateClientCertificateCommandOutput}
 * @see {@link GenerateClientCertificateCommandInput} for command's `input` shape.
 * @see {@link GenerateClientCertificateCommandOutput} for command's `response` shape.
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
export class GenerateClientCertificateCommand extends $Command
  .classBuilder<
    GenerateClientCertificateCommandInput,
    GenerateClientCertificateCommandOutput,
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
  .s("BackplaneControlService", "GenerateClientCertificate", {})
  .n("APIGatewayClient", "GenerateClientCertificateCommand")
  .f(void 0, void 0)
  .ser(se_GenerateClientCertificateCommand)
  .de(de_GenerateClientCertificateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GenerateClientCertificateRequest;
      output: ClientCertificate;
    };
    sdk: {
      input: GenerateClientCertificateCommandInput;
      output: GenerateClientCertificateCommandOutput;
    };
  };
}
