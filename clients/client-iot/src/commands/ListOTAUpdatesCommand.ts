// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListOTAUpdatesRequest, ListOTAUpdatesResponse } from "../models/models_1";
import { ListOTAUpdates$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListOTAUpdatesCommand}.
 */
export interface ListOTAUpdatesCommandInput extends ListOTAUpdatesRequest {}
/**
 * @public
 *
 * The output of {@link ListOTAUpdatesCommand}.
 */
export interface ListOTAUpdatesCommandOutput extends ListOTAUpdatesResponse, __MetadataBearer {}

/**
 * Lists OTA updates.
 *
 * Requires permission to access the [ListOTAUpdates](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions) action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListOTAUpdatesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListOTAUpdatesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * // import type { IoTClientConfig } from "@aws-sdk/client-iot";
 * const config = {}; // type is IoTClientConfig
 * const client = new IoTClient(config);
 * const input = { // ListOTAUpdatesRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   otaUpdateStatus: "CREATE_PENDING" || "CREATE_IN_PROGRESS" || "CREATE_COMPLETE" || "CREATE_FAILED" || "DELETE_IN_PROGRESS" || "DELETE_FAILED",
 * };
 * const command = new ListOTAUpdatesCommand(input);
 * const response = await client.send(command);
 * // { // ListOTAUpdatesResponse
 * //   otaUpdates: [ // OTAUpdatesSummary
 * //     { // OTAUpdateSummary
 * //       otaUpdateId: "STRING_VALUE",
 * //       otaUpdateArn: "STRING_VALUE",
 * //       creationDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListOTAUpdatesCommandInput - {@link ListOTAUpdatesCommandInput}
 * @returns {@link ListOTAUpdatesCommandOutput}
 * @see {@link ListOTAUpdatesCommandInput} for command's `input` shape.
 * @see {@link ListOTAUpdatesCommandOutput} for command's `response` shape.
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
export class ListOTAUpdatesCommand extends command<ListOTAUpdatesCommandInput, ListOTAUpdatesCommandOutput>(
  _ep0,
  _mw0,
  "ListOTAUpdates",
  ListOTAUpdates$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListOTAUpdatesRequest;
      output: ListOTAUpdatesResponse;
    };
    sdk: {
      input: ListOTAUpdatesCommandInput;
      output: ListOTAUpdatesCommandOutput;
    };
  };
}
