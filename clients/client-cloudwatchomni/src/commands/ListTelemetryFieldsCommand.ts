// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListTelemetryFieldsRequest, ListTelemetryFieldsResponse } from "../models/models_0";
import { ListTelemetryFields$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListTelemetryFieldsCommand}.
 */
export interface ListTelemetryFieldsCommandInput extends ListTelemetryFieldsRequest {}
/**
 * @public
 *
 * The output of {@link ListTelemetryFieldsCommand}.
 */
export interface ListTelemetryFieldsCommandOutput extends ListTelemetryFieldsResponse, __MetadataBearer {}

/**
 * Lists fields available for telemetry queries.
 *
 * Returns a list of fields included in the specified dataset, granular
 * to telemetry type. Returned field names reflect the exact stored casing
 * and are case-sensitive when referenced in query expressions; the query
 * engine does not normalize identifier case.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchOmniClient, ListTelemetryFieldsCommand } from "@aws-sdk/client-cloudwatchomni"; // ES Modules import
 * // const { CloudWatchOmniClient, ListTelemetryFieldsCommand } = require("@aws-sdk/client-cloudwatchomni"); // CommonJS import
 * // import type { CloudWatchOmniClientConfig } from "@aws-sdk/client-cloudwatchomni";
 * const config = {}; // type is CloudWatchOmniClientConfig
 * const client = new CloudWatchOmniClient(config);
 * const input = { // ListTelemetryFieldsRequest
 *   dataSetName: "STRING_VALUE", // required
 *   telemetryType: "LOGS" || "TRACES",
 *   startTime: new Date("TIMESTAMP"),
 *   endTime: new Date("TIMESTAMP"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListTelemetryFieldsCommand(input);
 * const response = await client.send(command);
 * // { // ListTelemetryFieldsResponse
 * //   fields: [ // FieldList // required
 * //     { // Field
 * //       name: "STRING_VALUE", // required
 * //       children: [
 * //         {
 * //           name: "STRING_VALUE", // required
 * //           children: "<FieldList>",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTelemetryFieldsCommandInput - {@link ListTelemetryFieldsCommandInput}
 * @returns {@link ListTelemetryFieldsCommandOutput}
 * @see {@link ListTelemetryFieldsCommandInput} for command's `input` shape.
 * @see {@link ListTelemetryFieldsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchOmniClientResolvedConfig | config} for CloudWatchOmniClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  An unexpected error occurred while processing the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The specified resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was throttled due to exceeding the allowed request rate.
 *
 * @throws {@link ValidationException} (client fault)
 *  A parameter is specified incorrectly.
 *
 * @throws {@link CloudWatchOmniServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchOmni service.</p>
 *
 *
 * @example List fields for a dataset
 * ```javascript
 * // The following example lists the log fields available in the specified dataset. Payloads are shown as JSON; on the wire they are CBOR-encoded.
 * const input = {
 *   dataSetName: "default",
 *   telemetryType: "LOGS"
 * };
 * const command = new ListTelemetryFieldsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   fields: [
 *     {
 *       name: "@timestamp"
 *     },
 *     {
 *       name: "@message"
 *     },
 *     {
 *       children: [
 *         {
 *           name: "http.method"
 *         },
 *         {
 *           name: "http.status_code"
 *         }
 *       ],
 *       name: "attributes"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListTelemetryFieldsCommand extends command<ListTelemetryFieldsCommandInput, ListTelemetryFieldsCommandOutput>(
  _ep0,
  _mw0,
  "ListTelemetryFields",
  ListTelemetryFields$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTelemetryFieldsRequest;
      output: ListTelemetryFieldsResponse;
    };
    sdk: {
      input: ListTelemetryFieldsCommandInput;
      output: ListTelemetryFieldsCommandOutput;
    };
  };
}
