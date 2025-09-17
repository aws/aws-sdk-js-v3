// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeInventoryDeletionsRequest, DescribeInventoryDeletionsResult } from "../models/models_0";
import { de_DescribeInventoryDeletionsCommand, se_DescribeInventoryDeletionsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeInventoryDeletionsCommand}.
 */
export interface DescribeInventoryDeletionsCommandInput extends DescribeInventoryDeletionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInventoryDeletionsCommand}.
 */
export interface DescribeInventoryDeletionsCommandOutput extends DescribeInventoryDeletionsResult, __MetadataBearer {}

/**
 * <p>Describes a specific delete inventory operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeInventoryDeletionsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeInventoryDeletionsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // DescribeInventoryDeletionsRequest
 *   DeletionId: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeInventoryDeletionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInventoryDeletionsResult
 * //   InventoryDeletions: [ // InventoryDeletionsList
 * //     { // InventoryDeletionStatusItem
 * //       DeletionId: "STRING_VALUE",
 * //       TypeName: "STRING_VALUE",
 * //       DeletionStartTime: new Date("TIMESTAMP"),
 * //       LastStatus: "InProgress" || "Complete",
 * //       LastStatusMessage: "STRING_VALUE",
 * //       DeletionSummary: { // InventoryDeletionSummary
 * //         TotalCount: Number("int"),
 * //         RemainingCount: Number("int"),
 * //         SummaryItems: [ // InventoryDeletionSummaryItems
 * //           { // InventoryDeletionSummaryItem
 * //             Version: "STRING_VALUE",
 * //             Count: Number("int"),
 * //             RemainingCount: Number("int"),
 * //           },
 * //         ],
 * //       },
 * //       LastStatusUpdateTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeInventoryDeletionsCommandInput - {@link DescribeInventoryDeletionsCommandInput}
 * @returns {@link DescribeInventoryDeletionsCommandOutput}
 * @see {@link DescribeInventoryDeletionsCommandInput} for command's `input` shape.
 * @see {@link DescribeInventoryDeletionsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidDeletionIdException} (client fault)
 *  <p>The ID specified for the delete operation doesn't exist or isn't valid. Verify the ID and
 *    try again.</p>
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
export class DescribeInventoryDeletionsCommand extends $Command
  .classBuilder<
    DescribeInventoryDeletionsCommandInput,
    DescribeInventoryDeletionsCommandOutput,
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
  .s("AmazonSSM", "DescribeInventoryDeletions", {})
  .n("SSMClient", "DescribeInventoryDeletionsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeInventoryDeletionsCommand)
  .de(de_DescribeInventoryDeletionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeInventoryDeletionsRequest;
      output: DescribeInventoryDeletionsResult;
    };
    sdk: {
      input: DescribeInventoryDeletionsCommandInput;
      output: DescribeInventoryDeletionsCommandOutput;
    };
  };
}
