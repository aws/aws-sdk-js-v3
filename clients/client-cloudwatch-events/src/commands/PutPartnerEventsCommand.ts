// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutPartnerEventsRequest, PutPartnerEventsResponse } from "../models/models_0";
import { de_PutPartnerEventsCommand, se_PutPartnerEventsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutPartnerEventsCommand}.
 */
export interface PutPartnerEventsCommandInput extends PutPartnerEventsRequest {}
/**
 * @public
 *
 * The output of {@link PutPartnerEventsCommand}.
 */
export interface PutPartnerEventsCommandOutput extends PutPartnerEventsResponse, __MetadataBearer {}

/**
 * <p>This is used by SaaS partners to write events to a customer's partner event bus. Amazon Web Services
 *       customers do not use this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, PutPartnerEventsCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, PutPartnerEventsCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * const client = new CloudWatchEventsClient(config);
 * const input = { // PutPartnerEventsRequest
 *   Entries: [ // PutPartnerEventsRequestEntryList // required
 *     { // PutPartnerEventsRequestEntry
 *       Time: new Date("TIMESTAMP"),
 *       Source: "STRING_VALUE",
 *       Resources: [ // EventResourceList
 *         "STRING_VALUE",
 *       ],
 *       DetailType: "STRING_VALUE",
 *       Detail: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new PutPartnerEventsCommand(input);
 * const response = await client.send(command);
 * // { // PutPartnerEventsResponse
 * //   FailedEntryCount: Number("int"),
 * //   Entries: [ // PutPartnerEventsResultEntryList
 * //     { // PutPartnerEventsResultEntry
 * //       EventId: "STRING_VALUE",
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param PutPartnerEventsCommandInput - {@link PutPartnerEventsCommandInput}
 * @returns {@link PutPartnerEventsCommandOutput}
 * @see {@link PutPartnerEventsCommandInput} for command's `input` shape.
 * @see {@link PutPartnerEventsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for CloudWatchEventsClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link OperationDisabledException} (client fault)
 *  <p>The operation you are attempting is not available in this region.</p>
 *
 * @throws {@link CloudWatchEventsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchEvents service.</p>
 *
 * @public
 */
export class PutPartnerEventsCommand extends $Command
  .classBuilder<
    PutPartnerEventsCommandInput,
    PutPartnerEventsCommandOutput,
    CloudWatchEventsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CloudWatchEventsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSEvents", "PutPartnerEvents", {})
  .n("CloudWatchEventsClient", "PutPartnerEventsCommand")
  .f(void 0, void 0)
  .ser(se_PutPartnerEventsCommand)
  .de(de_PutPartnerEventsCommand)
  .build() {}
