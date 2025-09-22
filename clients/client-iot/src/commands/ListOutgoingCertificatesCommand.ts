// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListOutgoingCertificatesRequest, ListOutgoingCertificatesResponse } from "../models/models_2";
import { ListOutgoingCertificates } from "../schemas/schemas_96_Certificate";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListOutgoingCertificatesCommand}.
 */
export interface ListOutgoingCertificatesCommandInput extends ListOutgoingCertificatesRequest {}
/**
 * @public
 *
 * The output of {@link ListOutgoingCertificatesCommand}.
 */
export interface ListOutgoingCertificatesCommandOutput extends ListOutgoingCertificatesResponse, __MetadataBearer {}

/**
 * <p>Lists certificates that are being transferred but not yet accepted.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListOutgoingCertificates</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListOutgoingCertificatesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListOutgoingCertificatesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // ListOutgoingCertificatesRequest
 *   pageSize: Number("int"),
 *   marker: "STRING_VALUE",
 *   ascendingOrder: true || false,
 * };
 * const command = new ListOutgoingCertificatesCommand(input);
 * const response = await client.send(command);
 * // { // ListOutgoingCertificatesResponse
 * //   outgoingCertificates: [ // OutgoingCertificates
 * //     { // OutgoingCertificate
 * //       certificateArn: "STRING_VALUE",
 * //       certificateId: "STRING_VALUE",
 * //       transferredTo: "STRING_VALUE",
 * //       transferDate: new Date("TIMESTAMP"),
 * //       transferMessage: "STRING_VALUE",
 * //       creationDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextMarker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListOutgoingCertificatesCommandInput - {@link ListOutgoingCertificatesCommandInput}
 * @returns {@link ListOutgoingCertificatesCommandOutput}
 * @see {@link ListOutgoingCertificatesCommandInput} for command's `input` shape.
 * @see {@link ListOutgoingCertificatesCommandOutput} for command's `response` shape.
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
export class ListOutgoingCertificatesCommand extends $Command
  .classBuilder<
    ListOutgoingCertificatesCommandInput,
    ListOutgoingCertificatesCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "ListOutgoingCertificates", {})
  .n("IoTClient", "ListOutgoingCertificatesCommand")
  .sc(ListOutgoingCertificates)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListOutgoingCertificatesRequest;
      output: ListOutgoingCertificatesResponse;
    };
    sdk: {
      input: ListOutgoingCertificatesCommandInput;
      output: ListOutgoingCertificatesCommandOutput;
    };
  };
}
