// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MemoryDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MemoryDBClient";
import type { DescribeParametersRequest, DescribeParametersResponse } from "../models/models_0";
import { DescribeParameters$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeParametersCommand}.
 */
export interface DescribeParametersCommandInput extends DescribeParametersRequest {}
/**
 * @public
 *
 * The output of {@link DescribeParametersCommand}.
 */
export interface DescribeParametersCommandOutput extends DescribeParametersResponse, __MetadataBearer {}

/**
 * <p>Returns the detailed parameter list for a particular parameter group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, DescribeParametersCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, DescribeParametersCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * // import type { MemoryDBClientConfig } from "@aws-sdk/client-memorydb";
 * const config = {}; // type is MemoryDBClientConfig
 * const client = new MemoryDBClient(config);
 * const input = { // DescribeParametersRequest
 *   ParameterGroupName: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeParametersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeParametersResponse
 * //   NextToken: "STRING_VALUE",
 * //   Parameters: [ // ParametersList
 * //     { // Parameter
 * //       Name: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       DataType: "STRING_VALUE",
 * //       AllowedValues: "STRING_VALUE",
 * //       MinimumEngineVersion: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeParametersCommandInput - {@link DescribeParametersCommandInput}
 * @returns {@link DescribeParametersCommandOutput}
 * @see {@link DescribeParametersCommandInput} for command's `input` shape.
 * @see {@link DescribeParametersCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for MemoryDBClient's `config` shape.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>The specified parameter combination is not valid.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The specified parameter value is not valid.</p>
 *
 * @throws {@link ParameterGroupNotFoundFault} (client fault)
 *  <p>The specified parameter group does not exist.</p>
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
export class DescribeParametersCommand extends $Command
  .classBuilder<
    DescribeParametersCommandInput,
    DescribeParametersCommandOutput,
    MemoryDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MemoryDBClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonMemoryDB", "DescribeParameters", {})
  .n("MemoryDBClient", "DescribeParametersCommand")
  .sc(DescribeParameters$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeParametersRequest;
      output: DescribeParametersResponse;
    };
    sdk: {
      input: DescribeParametersCommandInput;
      output: DescribeParametersCommandOutput;
    };
  };
}
