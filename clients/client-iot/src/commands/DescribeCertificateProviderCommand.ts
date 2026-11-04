// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeCertificateProviderRequest, DescribeCertificateProviderResponse } from "../models/models_1";
import { DescribeCertificateProvider$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface DescribeCertificateProviderCommandOutput extends DescribeCertificateProviderResponse, __MetadataBearer {}

/**
 * Describes a certificate provider.
 *
 * Requires permission to access the [DescribeCertificateProvider](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
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
 *
 * An unexpected error has occurred.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is temporarily unavailable.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The rate exceeds the limit.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You are not authorized to perform this operation.
 *
 * @throws {@link IoTServiceException}
 *
 * Base exception class for all service exceptions from IoT service.
 *
 * @public
 */
export class DescribeCertificateProviderCommand extends command<DescribeCertificateProviderCommandInput, DescribeCertificateProviderCommandOutput>(
  _ep0,
  _mw0,
  "DescribeCertificateProvider",
  DescribeCertificateProvider$
) {
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
