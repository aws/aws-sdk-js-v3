// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MemoryDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MemoryDBClient";
import { DescribeMultiRegionParametersRequest, DescribeMultiRegionParametersResponse } from "../models/models_0";
import { DescribeMultiRegionParameters } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeMultiRegionParametersCommand}.
 */
export interface DescribeMultiRegionParametersCommandInput extends DescribeMultiRegionParametersRequest {}
/**
 * @public
 *
 * The output of {@link DescribeMultiRegionParametersCommand}.
 */
export interface DescribeMultiRegionParametersCommandOutput
  extends DescribeMultiRegionParametersResponse,
    __MetadataBearer {}

/**
 * <p>Returns the detailed parameter list for a particular multi-region parameter group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, DescribeMultiRegionParametersCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, DescribeMultiRegionParametersCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * // import type { MemoryDBClientConfig } from "@aws-sdk/client-memorydb";
 * const config = {}; // type is MemoryDBClientConfig
 * const client = new MemoryDBClient(config);
 * const input = { // DescribeMultiRegionParametersRequest
 *   MultiRegionParameterGroupName: "STRING_VALUE", // required
 *   Source: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeMultiRegionParametersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMultiRegionParametersResponse
 * //   NextToken: "STRING_VALUE",
 * //   MultiRegionParameters: [ // MultiRegionParametersList
 * //     { // MultiRegionParameter
 * //       Name: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Source: "STRING_VALUE",
 * //       DataType: "STRING_VALUE",
 * //       AllowedValues: "STRING_VALUE",
 * //       MinimumEngineVersion: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeMultiRegionParametersCommandInput - {@link DescribeMultiRegionParametersCommandInput}
 * @returns {@link DescribeMultiRegionParametersCommandOutput}
 * @see {@link DescribeMultiRegionParametersCommandInput} for command's `input` shape.
 * @see {@link DescribeMultiRegionParametersCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for MemoryDBClient's `config` shape.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>The specified parameter combination is not valid.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The specified parameter value is not valid.</p>
 *
 * @throws {@link MultiRegionParameterGroupNotFoundFault} (client fault)
 *  <p>The specified multi-Region parameter group does not exist.</p>
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *  <p>The required service-linked role was not found.</p>
 *
 * @throws {@link MemoryDBServiceException}
 * <p>Base exception class for all service exceptions from MemoryDB service.</p>
 *
 *
 * @public
 */
export class DescribeMultiRegionParametersCommand extends $Command
  .classBuilder<
    DescribeMultiRegionParametersCommandInput,
    DescribeMultiRegionParametersCommandOutput,
    MemoryDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MemoryDBClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonMemoryDB", "DescribeMultiRegionParameters", {})
  .n("MemoryDBClient", "DescribeMultiRegionParametersCommand")
  .sc(DescribeMultiRegionParameters)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeMultiRegionParametersRequest;
      output: DescribeMultiRegionParametersResponse;
    };
    sdk: {
      input: DescribeMultiRegionParametersCommandInput;
      output: DescribeMultiRegionParametersCommandOutput;
    };
  };
}
