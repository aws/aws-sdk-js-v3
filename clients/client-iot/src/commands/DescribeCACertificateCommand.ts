// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { DescribeCACertificateRequest, DescribeCACertificateResponse } from "../models/models_1";
import { de_DescribeCACertificateCommand, se_DescribeCACertificateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeCACertificateCommand}.
 */
export interface DescribeCACertificateCommandInput extends DescribeCACertificateRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCACertificateCommand}.
 */
export interface DescribeCACertificateCommandOutput extends DescribeCACertificateResponse, __MetadataBearer {}

/**
 * <p>Describes a registered CA certificate.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeCACertificate</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeCACertificateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeCACertificateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // DescribeCACertificateRequest
 *   certificateId: "STRING_VALUE", // required
 * };
 * const command = new DescribeCACertificateCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCACertificateResponse
 * //   certificateDescription: { // CACertificateDescription
 * //     certificateArn: "STRING_VALUE",
 * //     certificateId: "STRING_VALUE",
 * //     status: "ACTIVE" || "INACTIVE",
 * //     certificatePem: "STRING_VALUE",
 * //     ownedBy: "STRING_VALUE",
 * //     creationDate: new Date("TIMESTAMP"),
 * //     autoRegistrationStatus: "ENABLE" || "DISABLE",
 * //     lastModifiedDate: new Date("TIMESTAMP"),
 * //     customerVersion: Number("int"),
 * //     generationId: "STRING_VALUE",
 * //     validity: { // CertificateValidity
 * //       notBefore: new Date("TIMESTAMP"),
 * //       notAfter: new Date("TIMESTAMP"),
 * //     },
 * //     certificateMode: "DEFAULT" || "SNI_ONLY",
 * //   },
 * //   registrationConfig: { // RegistrationConfig
 * //     templateBody: "STRING_VALUE",
 * //     roleArn: "STRING_VALUE",
 * //     templateName: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeCACertificateCommandInput - {@link DescribeCACertificateCommandInput}
 * @returns {@link DescribeCACertificateCommandOutput}
 * @see {@link DescribeCACertificateCommandInput} for command's `input` shape.
 * @see {@link DescribeCACertificateCommandOutput} for command's `response` shape.
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
export class DescribeCACertificateCommand extends $Command
  .classBuilder<
    DescribeCACertificateCommandInput,
    DescribeCACertificateCommandOutput,
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
  .s("AWSIotService", "DescribeCACertificate", {})
  .n("IoTClient", "DescribeCACertificateCommand")
  .f(void 0, void 0)
  .ser(se_DescribeCACertificateCommand)
  .de(de_DescribeCACertificateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCACertificateRequest;
      output: DescribeCACertificateResponse;
    };
    sdk: {
      input: DescribeCACertificateCommandInput;
      output: DescribeCACertificateCommandOutput;
    };
  };
}
