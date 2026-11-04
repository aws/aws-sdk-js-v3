// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteCertificateProviderRequest, DeleteCertificateProviderResponse } from "../models/models_0";
import { DeleteCertificateProvider$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteCertificateProviderCommand}.
 */
export interface DeleteCertificateProviderCommandInput extends DeleteCertificateProviderRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCertificateProviderCommand}.
 */
export interface DeleteCertificateProviderCommandOutput extends DeleteCertificateProviderResponse, __MetadataBearer {}

/**
 * Deletes a certificate provider.
 *
 * Requires permission to access the [DeleteCertificateProvider](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * If you delete the certificate provider resource, the behavior of `CreateCertificateFromCsr` will resume, and IoT will create certificates signed by IoT from a certificate signing request (CSR).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteCertificateProviderCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteCertificateProviderCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // DeleteCertificateProviderRequest
 *   certificateProviderName: "STRING_VALUE", // required
 * };
 * const command = new DeleteCertificateProviderCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCertificateProviderCommandInput - {@link DeleteCertificateProviderCommandInput}
 * @returns {@link DeleteCertificateProviderCommandOutput}
 * @see {@link DeleteCertificateProviderCommandInput} for command's `input` shape.
 * @see {@link DeleteCertificateProviderCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 * @throws {@link DeleteConflictException} (client fault)
 *
 * You can't delete the resource because it is attached to one or more resources.
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
export class DeleteCertificateProviderCommand extends command<DeleteCertificateProviderCommandInput, DeleteCertificateProviderCommandOutput>(
  _ep0,
  _mw0,
  "DeleteCertificateProvider",
  DeleteCertificateProvider$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCertificateProviderRequest;
      output: {};
    };
    sdk: {
      input: DeleteCertificateProviderCommandInput;
      output: DeleteCertificateProviderCommandOutput;
    };
  };
}
