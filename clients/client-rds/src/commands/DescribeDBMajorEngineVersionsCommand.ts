// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeDBMajorEngineVersionsRequest, DescribeDBMajorEngineVersionsResponse } from "../models/models_1";
import {
  de_DescribeDBMajorEngineVersionsCommand,
  se_DescribeDBMajorEngineVersionsCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

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
export interface DescribeDBMajorEngineVersionsCommandOutput
  extends DescribeDBMajorEngineVersionsResponse,
    __MetadataBearer {}

/**
 * <p>Describes the properties of specific major versions of DB engines.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBMajorEngineVersionsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBMajorEngineVersionsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonRDSv19", "DescribeDBMajorEngineVersions", {})
  .n("RDSClient", "DescribeDBMajorEngineVersionsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeDBMajorEngineVersionsCommand)
  .de(de_DescribeDBMajorEngineVersionsCommand)
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
