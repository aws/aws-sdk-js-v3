// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeEngineVersionsRequest, DescribeEngineVersionsResponse } from "../models/models_0";
import { DescribeEngineVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * // import type { MemoryDBClientConfig } from "@aws-sdk/client-memorydb";
 * const config = {}; // type is MemoryDBClientConfig
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
 *  <p>The specified parameter combination is not valid.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The specified parameter value is not valid.</p>
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
export class DescribeEngineVersionsCommand extends command<DescribeEngineVersionsCommandInput, DescribeEngineVersionsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeEngineVersions",
  DescribeEngineVersions$
) {
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
