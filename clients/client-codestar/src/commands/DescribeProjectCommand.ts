// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeStarClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeProjectRequest,
  DescribeProjectResult,
  DescribeProjectResultFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeProjectCommand, se_DescribeProjectCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeProjectCommand}.
 */
export interface DescribeProjectCommandInput extends DescribeProjectRequest {}
/**
 * @public
 *
 * The output of {@link DescribeProjectCommand}.
 */
export interface DescribeProjectCommandOutput extends DescribeProjectResult, __MetadataBearer {}

/**
 * <p>Describes a project and its resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeStarClient, DescribeProjectCommand } from "@aws-sdk/client-codestar"; // ES Modules import
 * // const { CodeStarClient, DescribeProjectCommand } = require("@aws-sdk/client-codestar"); // CommonJS import
 * const client = new CodeStarClient(config);
 * const input = { // DescribeProjectRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new DescribeProjectCommand(input);
 * const response = await client.send(command);
 * // { // DescribeProjectResult
 * //   name: "STRING_VALUE",
 * //   id: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   clientRequestToken: "STRING_VALUE",
 * //   createdTimeStamp: new Date("TIMESTAMP"),
 * //   stackId: "STRING_VALUE",
 * //   projectTemplateId: "STRING_VALUE",
 * //   status: { // ProjectStatus
 * //     state: "STRING_VALUE", // required
 * //     reason: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeProjectCommandInput - {@link DescribeProjectCommandInput}
 * @returns {@link DescribeProjectCommandOutput}
 * @see {@link DescribeProjectCommandInput} for command's `input` shape.
 * @see {@link DescribeProjectCommandOutput} for command's `response` shape.
 * @see {@link CodeStarClientResolvedConfig | config} for CodeStarClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (server fault)
 *  <p>Another modification is being made. That modification must complete before you can make
 *       your change.</p>
 *
 * @throws {@link InvalidServiceRoleException} (client fault)
 *  <p>The service role is not valid.</p>
 *
 * @throws {@link ProjectConfigurationException} (client fault)
 *  <p>Project configuration information is required but not specified.</p>
 *
 * @throws {@link ProjectNotFoundException} (client fault)
 *  <p>The specified AWS CodeStar project was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The specified input is either not valid, or it could not be validated.</p>
 *
 * @throws {@link CodeStarServiceException}
 * <p>Base exception class for all service exceptions from CodeStar service.</p>
 *
 * @public
 */
export class DescribeProjectCommand extends $Command
  .classBuilder<
    DescribeProjectCommandInput,
    DescribeProjectCommandOutput,
    CodeStarClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CodeStarClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeStar_20170419", "DescribeProject", {})
  .n("CodeStarClient", "DescribeProjectCommand")
  .f(void 0, DescribeProjectResultFilterSensitiveLog)
  .ser(se_DescribeProjectCommand)
  .de(de_DescribeProjectCommand)
  .build() {}
