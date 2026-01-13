// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeDBMajorEngineVersionsRequest, DescribeDBMajorEngineVersionsResponse } from "../models/models_0";
import type { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DescribeDBMajorEngineVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDBMajorEngineVersionsCommand}.
 */
export interface DescribeDBMajorEngineVersionsCommandInput extends DescribeDBMajorEngineVersionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDBMajorEngineVersionsCommand}.
 */
export interface DescribeDBMajorEngineVersionsCommandOutput extends DescribeDBMajorEngineVersionsResponse, __MetadataBearer {}

/**
 * <p>Describes the properties of specific major versions of DB engines.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBMajorEngineVersionsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBMajorEngineVersionsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // DescribeDBMajorEngineVersionsRequest
 *   Engine: "STRING_VALUE",
 *   MajorEngineVersion: "STRING_VALUE",
 *   Marker: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 * };
 * const command = new DescribeDBMajorEngineVersionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDBMajorEngineVersionsResponse
 * //   DBMajorEngineVersions: [ // DBMajorEngineVersionsList
 * //     { // DBMajorEngineVersion
 * //       Engine: "STRING_VALUE",
 * //       MajorEngineVersion: "STRING_VALUE",
 * //       SupportedEngineLifecycles: [ // SupportedEngineLifecycleList
 * //         { // SupportedEngineLifecycle
 * //           LifecycleSupportName: "open-source-rds-standard-support" || "open-source-rds-extended-support", // required
 * //           LifecycleSupportStartDate: new Date("TIMESTAMP"), // required
 * //           LifecycleSupportEndDate: new Date("TIMESTAMP"), // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeDBMajorEngineVersionsCommandInput - {@link DescribeDBMajorEngineVersionsCommandInput}
 * @returns {@link DescribeDBMajorEngineVersionsCommandOutput}
 * @see {@link DescribeDBMajorEngineVersionsCommandInput} for command's `input` shape.
 * @see {@link DescribeDBMajorEngineVersionsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @public
 */
export class DescribeDBMajorEngineVersionsCommand extends $Command
  .classBuilder<
    DescribeDBMajorEngineVersionsCommandInput,
    DescribeDBMajorEngineVersionsCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "DescribeDBMajorEngineVersions", {})
  .n("RDSClient", "DescribeDBMajorEngineVersionsCommand")
  .sc(DescribeDBMajorEngineVersions$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDBMajorEngineVersionsRequest;
      output: DescribeDBMajorEngineVersionsResponse;
    };
    sdk: {
      input: DescribeDBMajorEngineVersionsCommandInput;
      output: DescribeDBMajorEngineVersionsCommandOutput;
    };
  };
}
