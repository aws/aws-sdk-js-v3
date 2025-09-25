// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteClientCertificateRequest } from "../models/models_0";
import { DeleteClientCertificate } from "../schemas/schemas_34_DeleteClientCertificate";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteClientCertificateCommand}.
 */
export interface DeleteClientCertificateCommandInput extends DeleteClientCertificateRequest {}
/**
 * @public
 *
 * The output of {@link DeleteClientCertificateCommand}.
 */
export interface DeleteClientCertificateCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the ClientCertificate resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, DeleteClientCertificateCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, DeleteClientCertificateCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * // import type { APIGatewayClientConfig } from "@aws-sdk/client-api-gateway";
 * const config = {}; // type is APIGatewayClientConfig
 * const client = new APIGatewayClient(config);
 * const input = { // DeleteClientCertificateRequest
 *   clientCertificateId: "STRING_VALUE", // required
 * };
 * const command = new DeleteClientCertificateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteClientCertificateCommandInput - {@link DeleteClientCertificateCommandInput}
 * @returns {@link DeleteClientCertificateCommandOutput}
 * @see {@link DeleteClientCertificateCommandInput} for command's `input` shape.
 * @see {@link DeleteClientCertificateCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for APIGatewayClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
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
export class DeleteClientCertificateCommand extends $Command
  .classBuilder<
    DeleteClientCertificateCommandInput,
    DeleteClientCertificateCommandOutput,
    APIGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: APIGatewayClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("BackplaneControlService", "DeleteClientCertificate", {})
  .n("APIGatewayClient", "DeleteClientCertificateCommand")
  .sc(DeleteClientCertificate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteClientCertificateRequest;
      output: {};
    };
    sdk: {
      input: DeleteClientCertificateCommandInput;
      output: DeleteClientCertificateCommandOutput;
    };
  };
}
