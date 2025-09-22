// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DAXClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DAXClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeDefaultParametersRequest, DescribeDefaultParametersResponse } from "../models/models_0";
import { DescribeDefaultParameters } from "../schemas/schemas_1_Describe";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDefaultParametersCommand}.
 */
export interface DescribeDefaultParametersCommandInput extends DescribeDefaultParametersRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDefaultParametersCommand}.
 */
export interface DescribeDefaultParametersCommandOutput extends DescribeDefaultParametersResponse, __MetadataBearer {}

/**
 * <p>Returns the default system parameter information for the DAX caching
 *             software.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DAXClient, DescribeDefaultParametersCommand } from "@aws-sdk/client-dax"; // ES Modules import
 * // const { DAXClient, DescribeDefaultParametersCommand } = require("@aws-sdk/client-dax"); // CommonJS import
 * // import type { DAXClientConfig } from "@aws-sdk/client-dax";
 * const config = {}; // type is DAXClientConfig
 * const client = new DAXClient(config);
 * const input = { // DescribeDefaultParametersRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeDefaultParametersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDefaultParametersResponse
 * //   NextToken: "STRING_VALUE",
 * //   Parameters: [ // ParameterList
 * //     { // Parameter
 * //       ParameterName: "STRING_VALUE",
 * //       ParameterType: "DEFAULT" || "NODE_TYPE_SPECIFIC",
 * //       ParameterValue: "STRING_VALUE",
 * //       NodeTypeSpecificValues: [ // NodeTypeSpecificValueList
 * //         { // NodeTypeSpecificValue
 * //           NodeType: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Description: "STRING_VALUE",
 * //       Source: "STRING_VALUE",
 * //       DataType: "STRING_VALUE",
 * //       AllowedValues: "STRING_VALUE",
 * //       IsModifiable: "TRUE" || "FALSE" || "CONDITIONAL",
 * //       ChangeType: "IMMEDIATE" || "REQUIRES_REBOOT",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeDefaultParametersCommandInput - {@link DescribeDefaultParametersCommandInput}
 * @returns {@link DescribeDefaultParametersCommandOutput}
 * @see {@link DescribeDefaultParametersCommandInput} for command's `input` shape.
 * @see {@link DescribeDefaultParametersCommandOutput} for command's `response` shape.
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
export class DescribeDefaultParametersCommand extends $Command
  .classBuilder<
    DescribeDefaultParametersCommandInput,
    DescribeDefaultParametersCommandOutput,
    DAXClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DAXClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDAXV3", "DescribeDefaultParameters", {})
  .n("DAXClient", "DescribeDefaultParametersCommand")
  .sc(DescribeDefaultParameters)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDefaultParametersRequest;
      output: DescribeDefaultParametersResponse;
    };
    sdk: {
      input: DescribeDefaultParametersCommandInput;
      output: DescribeDefaultParametersCommandOutput;
    };
  };
}
