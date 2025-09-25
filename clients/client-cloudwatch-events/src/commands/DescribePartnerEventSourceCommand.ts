// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribePartnerEventSourceRequest, DescribePartnerEventSourceResponse } from "../models/models_0";
import { DescribePartnerEventSource } from "../schemas/schemas_8_Event";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribePartnerEventSourceCommand}.
 */
export interface DescribePartnerEventSourceCommandInput extends DescribePartnerEventSourceRequest {}
/**
 * @public
 *
 * The output of {@link DescribePartnerEventSourceCommand}.
 */
export interface DescribePartnerEventSourceCommandOutput extends DescribePartnerEventSourceResponse, __MetadataBearer {}

/**
 * <p>An SaaS partner can use this operation to list details about a partner event source that
 *       they have created. Amazon Web Services customers do not use this operation. Instead, Amazon Web Services customers can use <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_DescribeEventSource.html">DescribeEventSource</a>
 *       to see details about a partner event source that is
 *       shared with them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, DescribePartnerEventSourceCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, DescribePartnerEventSourceCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * // import type { CloudWatchEventsClientConfig } from "@aws-sdk/client-cloudwatch-events";
 * const config = {}; // type is CloudWatchEventsClientConfig
 * const client = new CloudWatchEventsClient(config);
 * const input = { // DescribePartnerEventSourceRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DescribePartnerEventSourceCommand(input);
 * const response = await client.send(command);
 * // { // DescribePartnerEventSourceResponse
 * //   Arn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribePartnerEventSourceCommandInput - {@link DescribePartnerEventSourceCommandInput}
 * @returns {@link DescribePartnerEventSourceCommandOutput}
 * @see {@link DescribePartnerEventSourceCommandInput} for command's `input` shape.
 * @see {@link DescribePartnerEventSourceCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for CloudWatchEventsClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link OperationDisabledException} (client fault)
 *  <p>The operation you are attempting is not available in this region.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An entity that you specified does not exist.</p>
 *
 * @throws {@link CloudWatchEventsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchEvents service.</p>
 *
 *
 * @public
 */
export class DescribePartnerEventSourceCommand extends $Command
  .classBuilder<
    DescribePartnerEventSourceCommandInput,
    DescribePartnerEventSourceCommandOutput,
    CloudWatchEventsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchEventsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSEvents", "DescribePartnerEventSource", {})
  .n("CloudWatchEventsClient", "DescribePartnerEventSourceCommand")
  .sc(DescribePartnerEventSource)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribePartnerEventSourceRequest;
      output: DescribePartnerEventSourceResponse;
    };
    sdk: {
      input: DescribePartnerEventSourceCommandInput;
      output: DescribePartnerEventSourceCommandOutput;
    };
  };
}
