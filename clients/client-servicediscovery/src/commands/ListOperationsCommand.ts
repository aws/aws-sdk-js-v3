// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListOperationsRequest, ListOperationsResponse } from "../models/models_0";
import { de_ListOperationsCommand, se_ListOperationsCommand } from "../protocols/Aws_json1_1";
import { ServiceDiscoveryClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceDiscoveryClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListOperationsCommand}.
 */
export interface ListOperationsCommandInput extends ListOperationsRequest {}
/**
 * @public
 *
 * The output of {@link ListOperationsCommand}.
 */
export interface ListOperationsCommandOutput extends ListOperationsResponse, __MetadataBearer {}

/**
 * <p>Lists operations that match the criteria that you specify.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, ListOperationsCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, ListOperationsCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * const client = new ServiceDiscoveryClient(config);
 * const input = { // ListOperationsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Filters: [ // OperationFilters
 *     { // OperationFilter
 *       Name: "NAMESPACE_ID" || "SERVICE_ID" || "STATUS" || "TYPE" || "UPDATE_DATE", // required
 *       Values: [ // FilterValues // required
 *         "STRING_VALUE",
 *       ],
 *       Condition: "EQ" || "IN" || "BETWEEN" || "BEGINS_WITH",
 *     },
 *   ],
 * };
 * const command = new ListOperationsCommand(input);
 * const response = await client.send(command);
 * // { // ListOperationsResponse
 * //   Operations: [ // OperationSummaryList
 * //     { // OperationSummary
 * //       Id: "STRING_VALUE",
 * //       Status: "SUBMITTED" || "PENDING" || "SUCCESS" || "FAIL",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListOperationsCommandInput - {@link ListOperationsCommandInput}
 * @returns {@link ListOperationsCommandOutput}
 * @see {@link ListOperationsCommandInput} for command's `input` shape.
 * @see {@link ListOperationsCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for ServiceDiscoveryClient's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>One or more specified values aren't valid. For example, a required value might be missing, a
 *    numeric value might be outside the allowed range, or a string value might exceed length
 *    constraints.</p>
 *
 * @throws {@link ServiceDiscoveryServiceException}
 * <p>Base exception class for all service exceptions from ServiceDiscovery service.</p>
 *
 *
 * @example ListOperations Example
 * ```javascript
 * // This example gets the operations that have a STATUS of either PENDING or SUCCESS.
 * const input = {
 *   Filters: [
 *     {
 *       Condition: "IN",
 *       Name: "STATUS",
 *       Values: [
 *         "PENDING",
 *         "SUCCESS"
 *       ]
 *     }
 *   ]
 * };
 * const command = new ListOperationsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Operations: [
 *     {
 *       Id: "76yy8ovhpdz0plmjzbsnqgnrqvpv2qdt-kexample",
 *       Status: "SUCCESS"
 *     },
 *     {
 *       Id: "prysnyzpji3u2ciy45nke83x2zanl7yk-dexample",
 *       Status: "SUCCESS"
 *     },
 *     {
 *       Id: "ko4ekftir7kzlbechsh7xvcdgcpk66gh-7example",
 *       Status: "PENDING"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListOperationsCommand extends $Command
  .classBuilder<
    ListOperationsCommandInput,
    ListOperationsCommandOutput,
    ServiceDiscoveryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceDiscoveryClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Route53AutoNaming_v20170314", "ListOperations", {})
  .n("ServiceDiscoveryClient", "ListOperationsCommand")
  .f(void 0, void 0)
  .ser(se_ListOperationsCommand)
  .de(de_ListOperationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListOperationsRequest;
      output: ListOperationsResponse;
    };
    sdk: {
      input: ListOperationsCommandInput;
      output: ListOperationsCommandOutput;
    };
  };
}
