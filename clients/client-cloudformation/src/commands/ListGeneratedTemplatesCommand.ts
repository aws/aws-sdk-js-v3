// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListGeneratedTemplatesInput, ListGeneratedTemplatesOutput } from "../models/models_0";
import { ListGeneratedTemplates } from "../schemas/schemas_26_Generated";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListGeneratedTemplatesCommand}.
 */
export interface ListGeneratedTemplatesCommandInput extends ListGeneratedTemplatesInput {}
/**
 * @public
 *
 * The output of {@link ListGeneratedTemplatesCommand}.
 */
export interface ListGeneratedTemplatesCommandOutput extends ListGeneratedTemplatesOutput, __MetadataBearer {}

/**
 * <p>Lists your generated templates in this Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, ListGeneratedTemplatesCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, ListGeneratedTemplatesCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = { // ListGeneratedTemplatesInput
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListGeneratedTemplatesCommand(input);
 * const response = await client.send(command);
 * // { // ListGeneratedTemplatesOutput
 * //   Summaries: [ // TemplateSummaries
 * //     { // TemplateSummary
 * //       GeneratedTemplateId: "STRING_VALUE",
 * //       GeneratedTemplateName: "STRING_VALUE",
 * //       Status: "CREATE_PENDING" || "UPDATE_PENDING" || "DELETE_PENDING" || "CREATE_IN_PROGRESS" || "UPDATE_IN_PROGRESS" || "DELETE_IN_PROGRESS" || "FAILED" || "COMPLETE",
 * //       StatusReason: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastUpdatedTime: new Date("TIMESTAMP"),
 * //       NumberOfResources: Number("int"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListGeneratedTemplatesCommandInput - {@link ListGeneratedTemplatesCommandInput}
 * @returns {@link ListGeneratedTemplatesCommandOutput}
 * @see {@link ListGeneratedTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListGeneratedTemplatesCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 *
 * @public
 */
export class ListGeneratedTemplatesCommand extends $Command
  .classBuilder<
    ListGeneratedTemplatesCommandInput,
    ListGeneratedTemplatesCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFormationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudFormation", "ListGeneratedTemplates", {})
  .n("CloudFormationClient", "ListGeneratedTemplatesCommand")
  .sc(ListGeneratedTemplates)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListGeneratedTemplatesInput;
      output: ListGeneratedTemplatesOutput;
    };
    sdk: {
      input: ListGeneratedTemplatesCommandInput;
      output: ListGeneratedTemplatesCommandOutput;
    };
  };
}
