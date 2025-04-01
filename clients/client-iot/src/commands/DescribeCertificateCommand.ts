// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DescribeCertificateRequest, DescribeCertificateResponse } from "../models/models_1";
import { de_DescribeCertificateCommand, se_DescribeCertificateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeCertificateCommand}.
 */
export interface DescribeCertificateCommandInput extends DescribeCertificateRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCertificateCommand}.
 */
export interface DescribeCertificateCommandOutput extends DescribeCertificateResponse, __MetadataBearer {}

/**
 * <p>Gets information about the specified certificate.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeCertificate</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeCertificateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeCertificateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const input = { // DescribeCertificateRequest
 *   certificateId: "STRING_VALUE", // required
 * };
 * const command = new DescribeCertificateCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCertificateResponse
 * //   certificateDescription: { // CertificateDescription
 * //     certificateArn: "STRING_VALUE",
 * //     certificateId: "STRING_VALUE",
 * //     caCertificateId: "STRING_VALUE",
 * //     status: "ACTIVE" || "INACTIVE" || "REVOKED" || "PENDING_TRANSFER" || "REGISTER_INACTIVE" || "PENDING_ACTIVATION",
 * //     certificatePem: "STRING_VALUE",
 * //     ownedBy: "STRING_VALUE",
 * //     previousOwnedBy: "STRING_VALUE",
 * //     creationDate: new Date("TIMESTAMP"),
 * //     lastModifiedDate: new Date("TIMESTAMP"),
 * //     customerVersion: Number("int"),
 * //     transferData: { // TransferData
 * //       transferMessage: "STRING_VALUE",
 * //       rejectReason: "STRING_VALUE",
 * //       transferDate: new Date("TIMESTAMP"),
 * //       acceptDate: new Date("TIMESTAMP"),
 * //       rejectDate: new Date("TIMESTAMP"),
 * //     },
 * //     generationId: "STRING_VALUE",
 * //     validity: { // CertificateValidity
 * //       notBefore: new Date("TIMESTAMP"),
 * //       notAfter: new Date("TIMESTAMP"),
 * //     },
 * //     certificateMode: "DEFAULT" || "SNI_ONLY",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeCertificateCommandInput - {@link DescribeCertificateCommandInput}
 * @returns {@link DescribeCertificateCommandOutput}
 * @see {@link DescribeCertificateCommandInput} for command's `input` shape.
 * @see {@link DescribeCertificateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
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
export class DescribeCertificateCommand extends $Command
  .classBuilder<
    DescribeCertificateCommandInput,
    DescribeCertificateCommandOutput,
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
  .s("AWSIotService", "DescribeCertificate", {})
  .n("IoTClient", "DescribeCertificateCommand")
  .f(void 0, void 0)
  .ser(se_DescribeCertificateCommand)
  .de(de_DescribeCertificateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCertificateRequest;
      output: DescribeCertificateResponse;
    };
    sdk: {
      input: DescribeCertificateCommandInput;
      output: DescribeCertificateCommandOutput;
    };
  };
}
