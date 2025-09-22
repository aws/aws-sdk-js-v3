// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListLineageEventsInput, ListLineageEventsOutput } from "../models/models_1";
import { ListLineageEvents } from "../schemas/schemas_22_Lineage";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListLineageEventsCommand}.
 */
export interface ListLineageEventsCommandInput extends ListLineageEventsInput {}
/**
 * @public
 *
 * The output of {@link ListLineageEventsCommand}.
 */
export interface ListLineageEventsCommandOutput extends ListLineageEventsOutput, __MetadataBearer {}

/**
 * <p>Lists lineage events.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, ListLineageEventsCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, ListLineageEventsCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // ListLineageEventsInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   timestampAfter: new Date("TIMESTAMP"),
 *   timestampBefore: new Date("TIMESTAMP"),
 *   processingStatus: "REQUESTED" || "PROCESSING" || "SUCCESS" || "FAILED",
 *   sortOrder: "ASCENDING" || "DESCENDING",
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListLineageEventsCommand(input);
 * const response = await client.send(command);
 * // { // ListLineageEventsOutput
 * //   items: [ // LineageEventSummaries
 * //     { // LineageEventSummary
 * //       id: "STRING_VALUE",
 * //       domainId: "STRING_VALUE",
 * //       processingStatus: "REQUESTED" || "PROCESSING" || "SUCCESS" || "FAILED",
 * //       eventTime: new Date("TIMESTAMP"),
 * //       eventSummary: { // EventSummary Union: only one key present
 * //         openLineageRunEventSummary: { // OpenLineageRunEventSummary
 * //           eventType: "START" || "RUNNING" || "COMPLETE" || "ABORT" || "FAIL" || "OTHER",
 * //           runId: "STRING_VALUE",
 * //           job: { // NameIdentifier
 * //             name: "STRING_VALUE",
 * //             namespace: "STRING_VALUE",
 * //           },
 * //           inputs: [ // NameIdentifiers
 * //             {
 * //               name: "STRING_VALUE",
 * //               namespace: "STRING_VALUE",
 * //             },
 * //           ],
 * //           outputs: [
 * //             {
 * //               name: "STRING_VALUE",
 * //               namespace: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       createdBy: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLineageEventsCommandInput - {@link ListLineageEventsCommandInput}
 * @returns {@link ListLineageEventsCommandOutput}
 * @see {@link ListLineageEventsCommandInput} for command's `input` shape.
 * @see {@link ListLineageEventsCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 *
 * @public
 */
export class ListLineageEventsCommand extends $Command
  .classBuilder<
    ListLineageEventsCommandInput,
    ListLineageEventsCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataZone", "ListLineageEvents", {})
  .n("DataZoneClient", "ListLineageEventsCommand")
  .sc(ListLineageEvents)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLineageEventsInput;
      output: ListLineageEventsOutput;
    };
    sdk: {
      input: ListLineageEventsCommandInput;
      output: ListLineageEventsCommandOutput;
    };
  };
}
