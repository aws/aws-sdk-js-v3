// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateCertificateProviderRequest, UpdateCertificateProviderResponse } from "../models/models_2";
import { UpdateCertificateProvider$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateCertificateProviderCommand}.
 */
export interface UpdateCertificateProviderCommandInput extends UpdateCertificateProviderRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCertificateProviderCommand}.
 */
export interface UpdateCertificateProviderCommandOutput extends UpdateCertificateProviderResponse, __MetadataBearer {}

/**
 * Updates a certificate provider.
 *
 * Requires permission to access the [UpdateCertificateProvider](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateCertificateProviderCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateCertificateProviderCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // UpdateCertificateProviderRequest
 *   certificateProviderName: "STRING_VALUE", // required
 *   lambdaFunctionArn: "STRING_VALUE",
 *   accountDefaultForOperations: [ // CertificateProviderAccountDefaultForOperations
 *     "CreateCertificateFromCsr",
 *   ],
 * };
 * const command = new UpdateCertificateProviderCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCertificateProviderResponse
 * //   certificateProviderName: "STRING_VALUE",
 * //   certificateProviderArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateCertificateProviderCommandInput - {@link UpdateCertificateProviderCommandInput}
 * @returns {@link UpdateCertificateProviderCommandOutput}
 * @see {@link UpdateCertificateProviderCommandInput} for command's `input` shape.
 * @see {@link UpdateCertificateProviderCommandOutput} for command's `response` shape.
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
export class UpdateCertificateProviderCommand extends command<UpdateCertificateProviderCommandInput, UpdateCertificateProviderCommandOutput>(
  _ep0,
  _mw0,
  "UpdateCertificateProvider",
  UpdateCertificateProvider$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCertificateProviderRequest;
      output: UpdateCertificateProviderResponse;
    };
    sdk: {
      input: UpdateCertificateProviderCommandInput;
      output: UpdateCertificateProviderCommandOutput;
    };
  };
}
