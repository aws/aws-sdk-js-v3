// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListCertificateProvidersRequest, ListCertificateProvidersResponse } from "../models/models_1";
import { ListCertificateProviders } from "../schemas/schemas_31_Certificate";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Lists all your certificate providers in your Amazon Web Services account.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListCertificateProviders</a> action.
 *       </p>
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
export class ListCertificateProvidersCommand extends $Command
  .classBuilder<
    ListCertificateProvidersCommandInput,
    ListCertificateProvidersCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "ListCertificateProviders", {})
  .n("IoTClient", "ListCertificateProvidersCommand")
  .sc(ListCertificateProviders)
  .build() {
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
