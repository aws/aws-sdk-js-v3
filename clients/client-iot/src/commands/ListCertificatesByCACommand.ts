// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListCertificatesByCARequest, ListCertificatesByCAResponse } from "../models/models_1";
import { de_ListCertificatesByCACommand, se_ListCertificatesByCACommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCertificatesByCACommand}.
 */
export interface ListCertificatesByCACommandInput extends ListCertificatesByCARequest {}
/**
 * @public
 *
 * The output of {@link ListCertificatesByCACommand}.
 */
export interface ListCertificatesByCACommandOutput extends ListCertificatesByCAResponse, __MetadataBearer {}

/**
 * <p>List the device certificates signed by the specified CA certificate.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListCertificatesByCA</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListCertificatesByCACommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListCertificatesByCACommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // ListCertificatesByCARequest
 *   caCertificateId: "STRING_VALUE", // required
 *   pageSize: Number("int"),
 *   marker: "STRING_VALUE",
 *   ascendingOrder: true || false,
 * };
 * const command = new ListCertificatesByCACommand(input);
 * const response = await client.send(command);
 * // { // ListCertificatesByCAResponse
 * //   certificates: [ // Certificates
 * //     { // Certificate
 * //       certificateArn: "STRING_VALUE",
 * //       certificateId: "STRING_VALUE",
 * //       status: "ACTIVE" || "INACTIVE" || "REVOKED" || "PENDING_TRANSFER" || "REGISTER_INACTIVE" || "PENDING_ACTIVATION",
 * //       certificateMode: "DEFAULT" || "SNI_ONLY",
 * //       creationDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextMarker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCertificatesByCACommandInput - {@link ListCertificatesByCACommandInput}
 * @returns {@link ListCertificatesByCACommandOutput}
 * @see {@link ListCertificatesByCACommandInput} for command's `input` shape.
 * @see {@link ListCertificatesByCACommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link IoTServiceException}
 * <p>Base exception class for all service exceptions from IoT service.</p>
 *
 *
 * @public
 */
export class ListCertificatesByCACommand extends $Command
  .classBuilder<
    ListCertificatesByCACommandInput,
    ListCertificatesByCACommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIotService", "ListCertificatesByCA", {})
  .n("IoTClient", "ListCertificatesByCACommand")
  .f(void 0, void 0)
  .ser(se_ListCertificatesByCACommand)
  .de(de_ListCertificatesByCACommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCertificatesByCARequest;
      output: ListCertificatesByCAResponse;
    };
    sdk: {
      input: ListCertificatesByCACommandInput;
      output: ListCertificatesByCACommandOutput;
    };
  };
}
