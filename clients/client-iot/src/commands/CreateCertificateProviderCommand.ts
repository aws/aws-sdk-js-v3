// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateCertificateProviderRequest, CreateCertificateProviderResponse } from "../models/models_0";
import { CreateCertificateProvider$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateCertificateProviderCommand}.
 */
export interface CreateCertificateProviderCommandInput extends CreateCertificateProviderRequest {}
/**
 * @public
 *
 * The output of {@link CreateCertificateProviderCommand}.
 */
export interface CreateCertificateProviderCommandOutput extends CreateCertificateProviderResponse, __MetadataBearer {}

/**
 * Creates an Amazon Web Services IoT Core certificate provider. You can use Amazon Web Services IoT Core certificate provider to customize how to sign a certificate signing request (CSR) in IoT fleet provisioning. For more information, see [Customizing certificate signing using Amazon Web Services IoT Core certificate provider](https://docs.aws.amazon.com/iot/latest/developerguide/provisioning-cert-provider.html) from *Amazon Web Services IoT Core Developer Guide*.
 *
 * Requires permission to access the [CreateCertificateProvider](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * > **Important:** After you create a certificate provider, the behavior of [`CreateCertificateFromCsr` API for fleet provisioning](https://docs.aws.amazon.com/iot/latest/developerguide/fleet-provision-api.html#create-cert-csr) will change and all API calls to `CreateCertificateFromCsr` will invoke the certificate provider to create the certificates. It can take up to a few minutes for this behavior to change after a certificate provider is created.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateCertificateProviderCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateCertificateProviderCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // CreateCertificateProviderRequest
 *   certificateProviderName: "STRING_VALUE", // required
 *   lambdaFunctionArn: "STRING_VALUE", // required
 *   accountDefaultForOperations: [ // CertificateProviderAccountDefaultForOperations // required
 *     "CreateCertificateFromCsr",
 *   ],
 *   clientToken: "STRING_VALUE",
 *   tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateCertificateProviderCommand(input);
 * const response = await client.send(command);
 * // { // CreateCertificateProviderResponse
 * //   certificateProviderName: "STRING_VALUE",
 * //   certificateProviderArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateCertificateProviderCommandInput - {@link CreateCertificateProviderCommandInput}
 * @returns {@link CreateCertificateProviderCommandOutput}
 * @see {@link CreateCertificateProviderCommandInput} for command's `input` shape.
 * @see {@link CreateCertificateProviderCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *
 * A limit has been exceeded.
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *
 * The resource already exists.
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
export class CreateCertificateProviderCommand extends command<CreateCertificateProviderCommandInput, CreateCertificateProviderCommandOutput>(
  _ep0,
  _mw0,
  "CreateCertificateProvider",
  CreateCertificateProvider$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCertificateProviderRequest;
      output: CreateCertificateProviderResponse;
    };
    sdk: {
      input: CreateCertificateProviderCommandInput;
      output: CreateCertificateProviderCommandOutput;
    };
  };
}
