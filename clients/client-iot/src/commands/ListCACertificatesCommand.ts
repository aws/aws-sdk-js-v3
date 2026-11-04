// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListCACertificatesRequest, ListCACertificatesResponse } from "../models/models_1";
import { ListCACertificates$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Lists the CA certificates registered for your Amazon Web Services account.
 *
 * The results are paginated with a default page size of 25. You can use the returned marker to retrieve additional results.
 *
 * Requires permission to access the [ListCACertificates](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
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
export class ListCACertificatesCommand extends command<ListCACertificatesCommandInput, ListCACertificatesCommandOutput>(
  _ep0,
  _mw0,
  "ListCACertificates",
  ListCACertificates$
) {
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
