// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { HealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthClient";
import { DescribeEventDetailsRequest, DescribeEventDetailsResponse } from "../models/models_0";
import { de_DescribeEventDetailsCommand, se_DescribeEventDetailsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeEventDetailsCommand}.
 */
export interface DescribeEventDetailsCommandInput extends DescribeEventDetailsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEventDetailsCommand}.
 */
export interface DescribeEventDetailsCommandOutput extends DescribeEventDetailsResponse, __MetadataBearer {}

/**
 * <p>Returns detailed information about one or more specified events. Information includes
 *          standard event data (Amazon Web Services Region, service, and so on, as returned by <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEvents.html">DescribeEvents</a>), a detailed event description, and possible additional metadata
 *          that depends upon the nature of the event. Affected entities are not included. To retrieve
 *          the entities, use the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntities.html">DescribeAffectedEntities</a> operation.</p>
 *          <p>If a specified event can't be retrieved, an error message is returned for that
 *          event.</p>
 *          <note>
 *             <p>This operation supports resource-level permissions. You can use this operation to allow or deny access to specific Health events. For more
 *                   information, see <a href="https://docs.aws.amazon.com/health/latest/ug/security_iam_id-based-policy-examples.html#resource-action-based-conditions">Resource- and action-based conditions</a> in the <i>Health User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, DescribeEventDetailsCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, DescribeEventDetailsCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new HealthClient(config);
 * const input = { // DescribeEventDetailsRequest
 *   eventArns: [ // eventArnList // required
 *     "STRING_VALUE",
 *   ],
 *   locale: "STRING_VALUE",
 * };
 * const command = new DescribeEventDetailsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEventDetailsResponse
 * //   successfulSet: [ // DescribeEventDetailsSuccessfulSet
 * //     { // EventDetails
 * //       event: { // Event
 * //         arn: "STRING_VALUE",
 * //         service: "STRING_VALUE",
 * //         eventTypeCode: "STRING_VALUE",
 * //         eventTypeCategory: "issue" || "accountNotification" || "scheduledChange" || "investigation",
 * //         region: "STRING_VALUE",
 * //         availabilityZone: "STRING_VALUE",
 * //         startTime: new Date("TIMESTAMP"),
 * //         endTime: new Date("TIMESTAMP"),
 * //         lastUpdatedTime: new Date("TIMESTAMP"),
 * //         statusCode: "open" || "closed" || "upcoming",
 * //         eventScopeCode: "PUBLIC" || "ACCOUNT_SPECIFIC" || "NONE",
 * //       },
 * //       eventDescription: { // EventDescription
 * //         latestDescription: "STRING_VALUE",
 * //       },
 * //       eventMetadata: { // eventMetadata
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   failedSet: [ // DescribeEventDetailsFailedSet
 * //     { // EventDetailsErrorItem
 * //       eventArn: "STRING_VALUE",
 * //       errorName: "STRING_VALUE",
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeEventDetailsCommandInput - {@link DescribeEventDetailsCommandInput}
 * @returns {@link DescribeEventDetailsCommandOutput}
 * @see {@link DescribeEventDetailsCommandInput} for command's `input` shape.
 * @see {@link DescribeEventDetailsCommandOutput} for command's `response` shape.
 * @see {@link HealthClientResolvedConfig | config} for HealthClient's `config` shape.
 *
 * @throws {@link UnsupportedLocale} (client fault)
 *  <p>The specified locale is not supported.</p>
 *
 * @throws {@link HealthServiceException}
 * <p>Base exception class for all service exceptions from Health service.</p>
 *
 * @public
 */
export class DescribeEventDetailsCommand extends $Command
  .classBuilder<
    DescribeEventDetailsCommandInput,
    DescribeEventDetailsCommandOutput,
    HealthClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: HealthClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSHealth_20160804", "DescribeEventDetails", {})
  .n("HealthClient", "DescribeEventDetailsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeEventDetailsCommand)
  .de(de_DescribeEventDetailsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeEventDetailsRequest;
      output: DescribeEventDetailsResponse;
    };
    sdk: {
      input: DescribeEventDetailsCommandInput;
      output: DescribeEventDetailsCommandOutput;
    };
  };
}
