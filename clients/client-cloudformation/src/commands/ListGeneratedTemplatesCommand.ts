// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListGeneratedTemplatesInput, ListGeneratedTemplatesOutput } from "../models/models_0";
import { de_ListGeneratedTemplatesCommand, se_ListGeneratedTemplatesCommand } from "../protocols/Aws_query";

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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 * @public
 * @example To list generated templates
 * ```javascript
 * // This example lists the generated templates.
 * const input = {};
 * const command = new ListGeneratedTemplatesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Summaries": [
 *     {
 *       "CreationTime": "2023-12-28T17:55:20.086000+00:00",
 *       "GeneratedTemplateId": "arn:aws:cloudformation:us-east-1:123456789012:generatedtemplate/abcdefghi-1234-abcd-abcd-abcdefgh1234567",
 *       "GeneratedTemplateName": "Template3",
 *       "LastUpdatedTime": "2023-12-28T17:57:16.610000+00:00",
 *       "NumberOfResources": 85,
 *       "Status": "COMPLETE",
 *       "StatusReason": "All resources complete"
 *     },
 *     {
 *       "CreationTime": "2023-12-21T01:51:07.764000+00:00",
 *       "GeneratedTemplateId": "arn:aws:cloudformation:us-east-1:123456789012:generatedtemplate/bbcdefghi-1234-abcd-abcd-abcdefgh1234567",
 *       "GeneratedTemplateName": "Template2",
 *       "LastUpdatedTime": "2023-12-21T01:51:22.664000+00:00",
 *       "NumberOfResources": 12,
 *       "Status": "COMPLETE",
 *       "StatusReason": "All resources complete"
 *     },
 *     {
 *       "CreationTime": "2023-11-20T23:53:28.722000+00:00",
 *       "GeneratedTemplateId": "arn:aws:cloudformation:us-east-1:123456789012:generatedtemplate/cbcdefghi-1234-abcd-abcd-abcdefgh1234567",
 *       "GeneratedTemplateName": "Template1",
 *       "LastUpdatedTime": "2023-11-21T04:25:30.527000+00:00",
 *       "NumberOfResources": 19,
 *       "Status": "COMPLETE",
 *       "StatusReason": "All resources complete"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-list-generated-templates
 * ```
 *
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CloudFormation", "ListGeneratedTemplates", {})
  .n("CloudFormationClient", "ListGeneratedTemplatesCommand")
  .f(void 0, void 0)
  .ser(se_ListGeneratedTemplatesCommand)
  .de(de_ListGeneratedTemplatesCommand)
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
