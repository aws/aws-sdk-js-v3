// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { HealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthClient";
import { DescribeEventTypesRequest, DescribeEventTypesResponse } from "../models/models_0";
import { de_DescribeEventTypesCommand, se_DescribeEventTypesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeEventTypesCommand}.
 */
export interface DescribeEventTypesCommandInput extends DescribeEventTypesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEventTypesCommand}.
 */
export interface DescribeEventTypesCommandOutput extends DescribeEventTypesResponse, __MetadataBearer {}

/**
 * <p>Returns the event types that meet the specified filter criteria. You can use this API
 *          operation to find information about the Health event, such as the category, Amazon Web Services service, and event code. The metadata for each event appears in the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EventType.html">EventType</a> object. </p>
 *          <p>If you don't specify a filter criteria, the API operation returns all event types, in no
 *          particular order. </p>
 *          <note>
 *             <p>This API operation uses pagination. Specify the <code>nextToken</code> parameter in the next request to return more results.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthClient, DescribeEventTypesCommand } from "@aws-sdk/client-health"; // ES Modules import
 * // const { HealthClient, DescribeEventTypesCommand } = require("@aws-sdk/client-health"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new HealthClient(config);
 * const input = { // DescribeEventTypesRequest
 *   filter: { // EventTypeFilter
 *     eventTypeCodes: [ // EventTypeCodeList
 *       "STRING_VALUE",
 *     ],
 *     services: [ // serviceList
 *       "STRING_VALUE",
 *     ],
 *     eventTypeCategories: [ // EventTypeCategoryList
 *       "issue" || "accountNotification" || "scheduledChange" || "investigation",
 *     ],
 *   },
 *   locale: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new DescribeEventTypesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEventTypesResponse
 * //   eventTypes: [ // EventTypeList
 * //     { // EventType
 * //       service: "STRING_VALUE",
 * //       code: "STRING_VALUE",
 * //       category: "issue" || "accountNotification" || "scheduledChange" || "investigation",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeEventTypesCommandInput - {@link DescribeEventTypesCommandInput}
 * @returns {@link DescribeEventTypesCommandOutput}
 * @see {@link DescribeEventTypesCommandInput} for command's `input` shape.
 * @see {@link DescribeEventTypesCommandOutput} for command's `response` shape.
 * @see {@link HealthClientResolvedConfig | config} for HealthClient's `config` shape.
 *
 * @throws {@link InvalidPaginationToken} (client fault)
 *  <p>The specified pagination token (<code>nextToken</code>) is not valid.</p>
 *
 * @throws {@link UnsupportedLocale} (client fault)
 *  <p>The specified locale is not supported.</p>
 *
 * @throws {@link HealthServiceException}
 * <p>Base exception class for all service exceptions from Health service.</p>
 *
 * @public
 */
export class DescribeEventTypesCommand extends $Command
  .classBuilder<
    DescribeEventTypesCommandInput,
    DescribeEventTypesCommandOutput,
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
  .s("AWSHealth_20160804", "DescribeEventTypes", {})
  .n("HealthClient", "DescribeEventTypesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeEventTypesCommand)
  .de(de_DescribeEventTypesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeEventTypesRequest;
      output: DescribeEventTypesResponse;
    };
    sdk: {
      input: DescribeEventTypesCommandInput;
      output: DescribeEventTypesCommandOutput;
    };
  };
}
