// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeAgentVersionsRequest, DescribeAgentVersionsResult } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_DescribeAgentVersionsCommand, se_DescribeAgentVersionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAgentVersionsCommand}.
 */
export interface DescribeAgentVersionsCommandInput extends DescribeAgentVersionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAgentVersionsCommand}.
 */
export interface DescribeAgentVersionsCommandOutput extends DescribeAgentVersionsResult, __MetadataBearer {}

/**
 * <p>Describes the available OpsWorks Stacks agent versions. You must specify a stack ID or a
 *     configuration manager. <code>DescribeAgentVersions</code> returns a list of available
 *     agent versions for the specified stack or configuration manager.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DescribeAgentVersionsCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DescribeAgentVersionsCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const input = { // DescribeAgentVersionsRequest
 *   StackId: "STRING_VALUE",
 *   ConfigurationManager: { // StackConfigurationManager
 *     Name: "STRING_VALUE",
 *     Version: "STRING_VALUE",
 *   },
 * };
 * const command = new DescribeAgentVersionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAgentVersionsResult
 * //   AgentVersions: [ // AgentVersions
 * //     { // AgentVersion
 * //       Version: "STRING_VALUE",
 * //       ConfigurationManager: { // StackConfigurationManager
 * //         Name: "STRING_VALUE",
 * //         Version: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeAgentVersionsCommandInput - {@link DescribeAgentVersionsCommandInput}
 * @returns {@link DescribeAgentVersionsCommandOutput}
 * @see {@link DescribeAgentVersionsCommandInput} for command's `input` shape.
 * @see {@link DescribeAgentVersionsCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for OpsWorksClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Indicates that a request was not valid.</p>
 *
 * @throws {@link OpsWorksServiceException}
 * <p>Base exception class for all service exceptions from OpsWorks service.</p>
 *
 *
 * @public
 */
export class DescribeAgentVersionsCommand extends $Command
  .classBuilder<
    DescribeAgentVersionsCommandInput,
    DescribeAgentVersionsCommandOutput,
    OpsWorksClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpsWorksClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OpsWorks_20130218", "DescribeAgentVersions", {})
  .n("OpsWorksClient", "DescribeAgentVersionsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeAgentVersionsCommand)
  .de(de_DescribeAgentVersionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAgentVersionsRequest;
      output: DescribeAgentVersionsResult;
    };
    sdk: {
      input: DescribeAgentVersionsCommandInput;
      output: DescribeAgentVersionsCommandOutput;
    };
  };
}
