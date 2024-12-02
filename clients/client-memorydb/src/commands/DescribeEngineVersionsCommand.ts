// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MemoryDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MemoryDBClient";
import { DescribeEngineVersionsRequest, DescribeEngineVersionsResponse } from "../models/models_0";
import { de_DescribeEngineVersionsCommand, se_DescribeEngineVersionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeEngineVersionsCommand}.
 */
export interface DescribeEngineVersionsCommandInput extends DescribeEngineVersionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEngineVersionsCommand}.
 */
export interface DescribeEngineVersionsCommandOutput extends DescribeEngineVersionsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of the available Redis OSS engine versions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, DescribeEngineVersionsCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, DescribeEngineVersionsCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * const client = new MemoryDBClient(config);
 * const input = { // DescribeEngineVersionsRequest
 *   Engine: "STRING_VALUE",
 *   EngineVersion: "STRING_VALUE",
 *   ParameterGroupFamily: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   DefaultOnly: true || false,
 * };
 * const command = new DescribeEngineVersionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEngineVersionsResponse
 * //   NextToken: "STRING_VALUE",
 * //   EngineVersions: [ // EngineVersionInfoList
 * //     { // EngineVersionInfo
 * //       Engine: "STRING_VALUE",
 * //       EngineVersion: "STRING_VALUE",
 * //       EnginePatchVersion: "STRING_VALUE",
 * //       ParameterGroupFamily: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeEngineVersionsCommandInput - {@link DescribeEngineVersionsCommandInput}
 * @returns {@link DescribeEngineVersionsCommandOutput}
 * @see {@link DescribeEngineVersionsCommandInput} for command's `input` shape.
 * @see {@link DescribeEngineVersionsCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for MemoryDBClient's `config` shape.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p></p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p></p>
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *  <p></p>
 *
 * @throws {@link MemoryDBServiceException}
 * <p>Base exception class for all service exceptions from MemoryDB service.</p>
 *
 * @public
 */
export class DescribeEngineVersionsCommand extends $Command
  .classBuilder<
    DescribeEngineVersionsCommandInput,
    DescribeEngineVersionsCommandOutput,
    MemoryDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MemoryDBClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonMemoryDB", "DescribeEngineVersions", {})
  .n("MemoryDBClient", "DescribeEngineVersionsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeEngineVersionsCommand)
  .de(de_DescribeEngineVersionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeEngineVersionsRequest;
      output: DescribeEngineVersionsResponse;
    };
    sdk: {
      input: DescribeEngineVersionsCommandInput;
      output: DescribeEngineVersionsCommandOutput;
    };
  };
}
