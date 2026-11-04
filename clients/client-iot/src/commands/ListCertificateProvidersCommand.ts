// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListCertificateProvidersRequest, ListCertificateProvidersResponse } from "../models/models_1";
import { ListCertificateProviders$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListCertificateProvidersCommand}.
 */
export interface ListCertificateProvidersCommandInput extends ListCertificateProvidersRequest {}
/**
 * @public
 *
 * The output of {@link ListCertificateProvidersCommand}.
 */
export interface ListCertificateProvidersCommandOutput extends ListCertificateProvidersResponse, __MetadataBearer {}

/**
 * Lists all your certificate providers in your Amazon Web Services account.
 *
 * Requires permission to access the [ListCertificateProviders](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListCertificateProvidersCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListCertificateProvidersCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // ListCertificateProvidersRequest
 *   nextToken: "STRING_VALUE",
 *   ascendingOrder: true || false,
 * };
 * const command = new ListCertificateProvidersCommand(input);
 * const response = await client.send(command);
 * // { // ListCertificateProvidersResponse
 * //   certificateProviders: [ // CertificateProviders
 * //     { // CertificateProviderSummary
 * //       certificateProviderName: "STRING_VALUE",
 * //       certificateProviderArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCertificateProvidersCommandInput - {@link ListCertificateProvidersCommandInput}
 * @returns {@link ListCertificateProvidersCommandOutput}
 * @see {@link ListCertificateProvidersCommandInput} for command's `input` shape.
 * @see {@link ListCertificateProvidersCommandOutput} for command's `response` shape.
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
export class ListCertificateProvidersCommand extends command<ListCertificateProvidersCommandInput, ListCertificateProvidersCommandOutput>(
  _ep0,
  _mw0,
  "ListCertificateProviders",
  ListCertificateProviders$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCertificateProvidersRequest;
      output: ListCertificateProvidersResponse;
    };
    sdk: {
      input: ListCertificateProvidersCommandInput;
      output: ListCertificateProvidersCommandOutput;
    };
  };
}
