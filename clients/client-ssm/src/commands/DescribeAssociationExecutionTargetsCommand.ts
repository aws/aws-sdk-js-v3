// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeAssociationExecutionTargetsRequest,
  DescribeAssociationExecutionTargetsResult,
} from "../models/models_0";
import {
  de_DescribeAssociationExecutionTargetsCommand,
  se_DescribeAssociationExecutionTargetsCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAssociationExecutionTargetsCommand}.
 */
export interface DescribeAssociationExecutionTargetsCommandInput extends DescribeAssociationExecutionTargetsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAssociationExecutionTargetsCommand}.
 */
export interface DescribeAssociationExecutionTargetsCommandOutput
  extends DescribeAssociationExecutionTargetsResult,
    __MetadataBearer {}

/**
 * <p>Views information about a specific execution of a specific association.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeAssociationExecutionTargetsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeAssociationExecutionTargetsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // DescribeAssociationExecutionTargetsRequest
 *   AssociationId: "STRING_VALUE", // required
 *   ExecutionId: "STRING_VALUE", // required
 *   Filters: [ // AssociationExecutionTargetsFilterList
 *     { // AssociationExecutionTargetsFilter
 *       Key: "Status" || "ResourceId" || "ResourceType", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeAssociationExecutionTargetsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAssociationExecutionTargetsResult
 * //   AssociationExecutionTargets: [ // AssociationExecutionTargetsList
 * //     { // AssociationExecutionTarget
 * //       AssociationId: "STRING_VALUE",
 * //       AssociationVersion: "STRING_VALUE",
 * //       ExecutionId: "STRING_VALUE",
 * //       ResourceId: "STRING_VALUE",
 * //       ResourceType: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       DetailedStatus: "STRING_VALUE",
 * //       LastExecutionDate: new Date("TIMESTAMP"),
 * //       OutputSource: { // OutputSource
 * //         OutputSourceId: "STRING_VALUE",
 * //         OutputSourceType: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAssociationExecutionTargetsCommandInput - {@link DescribeAssociationExecutionTargetsCommandInput}
 * @returns {@link DescribeAssociationExecutionTargetsCommandOutput}
 * @see {@link DescribeAssociationExecutionTargetsCommandInput} for command's `input` shape.
 * @see {@link DescribeAssociationExecutionTargetsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link AssociationDoesNotExist} (client fault)
 *  <p>The specified association doesn't exist.</p>
 *
 * @throws {@link AssociationExecutionDoesNotExist} (client fault)
 *  <p>The specified execution ID doesn't exist. Verify the ID number and try again.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The specified token isn't valid.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class DescribeAssociationExecutionTargetsCommand extends $Command
  .classBuilder<
    DescribeAssociationExecutionTargetsCommandInput,
    DescribeAssociationExecutionTargetsCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSSM", "DescribeAssociationExecutionTargets", {})
  .n("SSMClient", "DescribeAssociationExecutionTargetsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeAssociationExecutionTargetsCommand)
  .de(de_DescribeAssociationExecutionTargetsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAssociationExecutionTargetsRequest;
      output: DescribeAssociationExecutionTargetsResult;
    };
    sdk: {
      input: DescribeAssociationExecutionTargetsCommandInput;
      output: DescribeAssociationExecutionTargetsCommandOutput;
    };
  };
}
