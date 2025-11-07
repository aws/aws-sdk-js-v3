// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DAXClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DAXClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeEventsRequest, DescribeEventsResponse } from "../models/models_0";
import { DescribeEvents } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeEventsCommand}.
 */
export interface DescribeEventsCommandInput extends DescribeEventsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEventsCommand}.
 */
export interface DescribeEventsCommandOutput extends DescribeEventsResponse, __MetadataBearer {}

/**
 * <p>Returns events related to DAX clusters and parameter groups. You can
 *             obtain events specific to a particular DAX cluster or parameter group by
 *             providing the name as a parameter.</p>
 *          <p>By default, only the events occurring within the last 24 hours are returned;
 *             however, you can retrieve up to 14 days' worth of events if necessary.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DAXClient, DescribeEventsCommand } from "@aws-sdk/client-dax"; // ES Modules import
 * // const { DAXClient, DescribeEventsCommand } = require("@aws-sdk/client-dax"); // CommonJS import
 * // import type { DAXClientConfig } from "@aws-sdk/client-dax";
 * const config = {}; // type is DAXClientConfig
 * const client = new DAXClient(config);
 * const input = { // DescribeEventsRequest
 *   SourceName: "STRING_VALUE",
 *   SourceType: "CLUSTER" || "PARAMETER_GROUP" || "SUBNET_GROUP",
 *   StartTime: new Date("TIMESTAMP"),
 *   EndTime: new Date("TIMESTAMP"),
 *   Duration: Number("int"),
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeEventsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEventsResponse
 * //   NextToken: "STRING_VALUE",
 * //   Events: [ // EventList
 * //     { // Event
 * //       SourceName: "STRING_VALUE",
 * //       SourceType: "CLUSTER" || "PARAMETER_GROUP" || "SUBNET_GROUP",
 * //       Message: "STRING_VALUE",
 * //       Date: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeEventsCommandInput - {@link DescribeEventsCommandInput}
 * @returns {@link DescribeEventsCommandOutput}
 * @see {@link DescribeEventsCommandInput} for command's `input` shape.
 * @see {@link DescribeEventsCommandOutput} for command's `response` shape.
 * @see {@link DAXClientResolvedConfig | config} for DAXClient's `config` shape.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Two or more incompatible parameters were specified.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *  <p>The specified service linked role (SLR) was not found.</p>
 *
 * @throws {@link DAXServiceException}
 * <p>Base exception class for all service exceptions from DAX service.</p>
 *
 *
 * @public
 */
export class DescribeEventsCommand extends $Command
  .classBuilder<
    DescribeEventsCommandInput,
    DescribeEventsCommandOutput,
    DAXClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DAXClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDAXV3", "DescribeEvents", {})
  .n("DAXClient", "DescribeEventsCommand")
  .sc(DescribeEvents)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeEventsRequest;
      output: DescribeEventsResponse;
    };
    sdk: {
      input: DescribeEventsCommandInput;
      output: DescribeEventsCommandOutput;
    };
  };
}
