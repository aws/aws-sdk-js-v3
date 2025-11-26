// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import type { DescribeCertificateProviderRequest, DescribeCertificateProviderResponse } from "../models/models_1";
import { DescribeCertificateProvider } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeCertificateProviderCommand}.
 */
export interface DescribeCertificateProviderCommandInput extends DescribeCertificateProviderRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCertificateProviderCommand}.
 */
export interface DescribeCertificateProviderCommandOutput
  extends DescribeCertificateProviderResponse,
    __MetadataBearer {}

/**
 * <p>Describes a certificate provider.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeCertificateProvider</a> action.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeCertificateProviderCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeCertificateProviderCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // DescribeCertificateProviderRequest
 *   certificateProviderName: "STRING_VALUE", // required
 * };
 * const command = new DescribeCertificateProviderCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCertificateProviderResponse
 * //   certificateProviderName: "STRING_VALUE",
 * //   certificateProviderArn: "STRING_VALUE",
 * //   lambdaFunctionArn: "STRING_VALUE",
 * //   accountDefaultForOperations: [ // CertificateProviderAccountDefaultForOperations
 * //     "CreateCertificateFromCsr",
 * //   ],
 * //   creationDate: new Date("TIMESTAMP"),
 * //   lastModifiedDate: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeCertificateProviderCommandInput - {@link DescribeCertificateProviderCommandInput}
 * @returns {@link DescribeCertificateProviderCommandOutput}
 * @see {@link DescribeCertificateProviderCommandInput} for command's `input` shape.
 * @see {@link DescribeCertificateProviderCommandOutput} for command's `response` shape.
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
export class DescribeCertificateProviderCommand extends $Command
  .classBuilder<
    DescribeCertificateProviderCommandInput,
    DescribeCertificateProviderCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "DescribeCertificateProvider", {})
  .n("IoTClient", "DescribeCertificateProviderCommand")
  .sc(DescribeCertificateProvider)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCertificateProviderRequest;
      output: DescribeCertificateProviderResponse;
    };
    sdk: {
      input: DescribeCertificateProviderCommandInput;
      output: DescribeCertificateProviderCommandOutput;
    };
  };
}
