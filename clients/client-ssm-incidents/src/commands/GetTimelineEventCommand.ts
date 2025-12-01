// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetTimelineEventInput, GetTimelineEventOutput } from "../models/models_0";
import { GetTimelineEvent } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSMIncidentsClientResolvedConfig } from "../SSMIncidentsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTimelineEventCommand}.
 */
export interface GetTimelineEventCommandInput extends GetTimelineEventInput {}
/**
 * @public
 *
 * The output of {@link GetTimelineEventCommand}.
 */
export interface GetTimelineEventCommandOutput extends GetTimelineEventOutput, __MetadataBearer {}

/**
 * <p>Retrieves a timeline event based on its ID and incident record.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, GetTimelineEventCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, GetTimelineEventCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * // import type { SSMIncidentsClientConfig } from "@aws-sdk/client-ssm-incidents";
 * const config = {}; // type is SSMIncidentsClientConfig
 * const client = new SSMIncidentsClient(config);
 * const input = { // GetTimelineEventInput
 *   incidentRecordArn: "STRING_VALUE", // required
 *   eventId: "STRING_VALUE", // required
 * };
 * const command = new GetTimelineEventCommand(input);
 * const response = await client.send(command);
 * // { // GetTimelineEventOutput
 * //   event: { // TimelineEvent
 * //     incidentRecordArn: "STRING_VALUE", // required
 * //     eventId: "STRING_VALUE", // required
 * //     eventTime: new Date("TIMESTAMP"), // required
 * //     eventUpdatedTime: new Date("TIMESTAMP"), // required
 * //     eventType: "STRING_VALUE", // required
 * //     eventData: "STRING_VALUE", // required
 * //     eventReferences: [ // EventReferenceList
 * //       { // EventReference Union: only one key present
 * //         resource: "STRING_VALUE",
 * //         relatedItemId: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTimelineEventCommandInput - {@link GetTimelineEventCommandInput}
 * @returns {@link GetTimelineEventCommandOutput}
 * @see {@link GetTimelineEventCommandInput} for command's `input` shape.
 * @see {@link GetTimelineEventCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for SSMIncidentsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which doesn't exist. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *       service.</p>
 *
 * @throws {@link SSMIncidentsServiceException}
 * <p>Base exception class for all service exceptions from SSMIncidents service.</p>
 *
 *
 * @public
 */
export class GetTimelineEventCommand extends $Command
  .classBuilder<
    GetTimelineEventCommandInput,
    GetTimelineEventCommandOutput,
    SSMIncidentsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMIncidentsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SSMIncidents", "GetTimelineEvent", {})
  .n("SSMIncidentsClient", "GetTimelineEventCommand")
  .sc(GetTimelineEvent)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTimelineEventInput;
      output: GetTimelineEventOutput;
    };
    sdk: {
      input: GetTimelineEventCommandInput;
      output: GetTimelineEventCommandOutput;
    };
  };
}
