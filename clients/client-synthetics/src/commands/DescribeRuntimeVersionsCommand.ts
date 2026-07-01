// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeRuntimeVersionsRequest, DescribeRuntimeVersionsResponse } from "../models/models_0";
import { DescribeRuntimeVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeRuntimeVersionsCommand}.
 */
export interface DescribeRuntimeVersionsCommandInput extends DescribeRuntimeVersionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRuntimeVersionsCommand}.
 */
export interface DescribeRuntimeVersionsCommandOutput extends DescribeRuntimeVersionsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of Synthetics canary runtime versions. For more information,
 *          see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html">
 *             Canary Runtime Versions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SyntheticsClient, DescribeRuntimeVersionsCommand } from "@aws-sdk/client-synthetics"; // ES Modules import
 * // const { SyntheticsClient, DescribeRuntimeVersionsCommand } = require("@aws-sdk/client-synthetics"); // CommonJS import
 * // import type { SyntheticsClientConfig } from "@aws-sdk/client-synthetics";
 * const config = {}; // type is SyntheticsClientConfig
 * const client = new SyntheticsClient(config);
 * const input = { // DescribeRuntimeVersionsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeRuntimeVersionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRuntimeVersionsResponse
 * //   RuntimeVersions: [ // RuntimeVersionList
 * //     { // RuntimeVersion
 * //       VersionName: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       ReleaseDate: new Date("TIMESTAMP"),
 * //       DeprecationDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeRuntimeVersionsCommandInput - {@link DescribeRuntimeVersionsCommandInput}
 * @returns {@link DescribeRuntimeVersionsCommandOutput}
 * @see {@link DescribeRuntimeVersionsCommandInput} for command's `input` shape.
 * @see {@link DescribeRuntimeVersionsCommandOutput} for command's `response` shape.
 * @see {@link SyntheticsClientResolvedConfig | config} for SyntheticsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unknown internal error occurred.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter could not be validated.</p>
 *
 * @throws {@link SyntheticsServiceException}
 * <p>Base exception class for all service exceptions from Synthetics service.</p>
 *
 *
 * @public
 */
export class DescribeRuntimeVersionsCommand extends command<DescribeRuntimeVersionsCommandInput, DescribeRuntimeVersionsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeRuntimeVersions",
  DescribeRuntimeVersions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRuntimeVersionsRequest;
      output: DescribeRuntimeVersionsResponse;
    };
    sdk: {
      input: DescribeRuntimeVersionsCommandInput;
      output: DescribeRuntimeVersionsCommandOutput;
    };
  };
}
