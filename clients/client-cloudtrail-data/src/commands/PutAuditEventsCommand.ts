// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudTrailDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailDataClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutAuditEventsRequest, PutAuditEventsResponse } from "../models/models_0";
import { de_PutAuditEventsCommand, se_PutAuditEventsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutAuditEventsCommand}.
 */
export interface PutAuditEventsCommandInput extends PutAuditEventsRequest {}
/**
 * @public
 *
 * The output of {@link PutAuditEventsCommand}.
 */
export interface PutAuditEventsCommandOutput extends PutAuditEventsResponse, __MetadataBearer {}

/**
 * <p>Ingests your application events into CloudTrail Lake. A required parameter,
 *             <code>auditEvents</code>, accepts the JSON records (also called
 *             <i>payload</i>) of events that you want CloudTrail to ingest. You
 *          can add up to 100 of these events (or up to 1 MB) per <code>PutAuditEvents</code>
 *          request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailDataClient, PutAuditEventsCommand } from "@aws-sdk/client-cloudtrail-data"; // ES Modules import
 * // const { CloudTrailDataClient, PutAuditEventsCommand } = require("@aws-sdk/client-cloudtrail-data"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CloudTrailDataClient(config);
 * const input = { // PutAuditEventsRequest
 *   auditEvents: [ // AuditEvents // required
 *     { // AuditEvent
 *       id: "STRING_VALUE", // required
 *       eventData: "STRING_VALUE", // required
 *       eventDataChecksum: "STRING_VALUE",
 *     },
 *   ],
 *   channelArn: "STRING_VALUE", // required
 *   externalId: "STRING_VALUE",
 * };
 * const command = new PutAuditEventsCommand(input);
 * const response = await client.send(command);
 * // { // PutAuditEventsResponse
 * //   successful: [ // AuditEventResultEntries // required
 * //     { // AuditEventResultEntry
 * //       id: "STRING_VALUE", // required
 * //       eventID: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   failed: [ // ResultErrorEntries // required
 * //     { // ResultErrorEntry
 * //       id: "STRING_VALUE", // required
 * //       errorCode: "STRING_VALUE", // required
 * //       errorMessage: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param PutAuditEventsCommandInput - {@link PutAuditEventsCommandInput}
 * @returns {@link PutAuditEventsCommandOutput}
 * @see {@link PutAuditEventsCommandInput} for command's `input` shape.
 * @see {@link PutAuditEventsCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailDataClientResolvedConfig | config} for CloudTrailDataClient's `config` shape.
 *
 * @throws {@link ChannelInsufficientPermission} (client fault)
 *  <p>The caller's account ID must be the same as the channel owner's account ID.</p>
 *
 * @throws {@link ChannelNotFound} (client fault)
 *  <p>The channel could not be found.</p>
 *
 * @throws {@link ChannelUnsupportedSchema} (client fault)
 *  <p>The schema type of the event is not supported.</p>
 *
 * @throws {@link DuplicatedAuditEventId} (client fault)
 *  <p>Two or more entries in the request have the same event ID.</p>
 *
 * @throws {@link InvalidChannelARN} (client fault)
 *  <p>The specified channel ARN is not a valid
 *          channel ARN.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The operation requested is not supported in this region or account.</p>
 *
 * @throws {@link CloudTrailDataServiceException}
 * <p>Base exception class for all service exceptions from CloudTrailData service.</p>
 *
 * @public
 */
export class PutAuditEventsCommand extends $Command
  .classBuilder<
    PutAuditEventsCommandInput,
    PutAuditEventsCommandOutput,
    CloudTrailDataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudTrailDataClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CloudTrailDataService", "PutAuditEvents", {})
  .n("CloudTrailDataClient", "PutAuditEventsCommand")
  .f(void 0, void 0)
  .ser(se_PutAuditEventsCommand)
  .de(de_PutAuditEventsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutAuditEventsRequest;
      output: PutAuditEventsResponse;
    };
    sdk: {
      input: PutAuditEventsCommandInput;
      output: PutAuditEventsCommandOutput;
    };
  };
}
