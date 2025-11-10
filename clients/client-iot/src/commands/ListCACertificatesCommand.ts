// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { ListCACertificatesRequest, ListCACertificatesResponse } from "../models/models_1";
import { ListCACertificates } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCACertificatesCommand}.
 */
export interface ListCACertificatesCommandInput extends ListCACertificatesRequest {}
/**
 * @public
 *
 * The output of {@link ListCACertificatesCommand}.
 */
export interface ListCACertificatesCommandOutput extends ListCACertificatesResponse, __MetadataBearer {}

/**
 * <p>Lists the CA certificates registered for your Amazon Web Services account.</p>
 *          <p>The results are paginated with a default page size of 25. You can use the returned
 *          marker to retrieve additional results.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListCACertificates</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListCACertificatesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListCACertificatesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // ListCACertificatesRequest
 *   pageSize: Number("int"),
 *   marker: "STRING_VALUE",
 *   ascendingOrder: true || false,
 *   templateName: "STRING_VALUE",
 * };
 * const command = new ListCACertificatesCommand(input);
 * const response = await client.send(command);
 * // { // ListCACertificatesResponse
 * //   certificates: [ // CACertificates
 * //     { // CACertificate
 * //       certificateArn: "STRING_VALUE",
 * //       certificateId: "STRING_VALUE",
 * //       status: "ACTIVE" || "INACTIVE",
 * //       creationDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextMarker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCACertificatesCommandInput - {@link ListCACertificatesCommandInput}
 * @returns {@link ListCACertificatesCommandOutput}
 * @see {@link ListCACertificatesCommandInput} for command's `input` shape.
 * @see {@link ListCACertificatesCommandOutput} for command's `response` shape.
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
export class ListCACertificatesCommand extends $Command
  .classBuilder<
    ListCACertificatesCommandInput,
    ListCACertificatesCommandOutput,
    IoTClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIotService", "ListCACertificates", {})
  .n("IoTClient", "ListCACertificatesCommand")
  .sc(ListCACertificates)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCACertificatesRequest;
      output: ListCACertificatesResponse;
    };
    sdk: {
      input: ListCACertificatesCommandInput;
      output: ListCACertificatesCommandOutput;
    };
  };
}
