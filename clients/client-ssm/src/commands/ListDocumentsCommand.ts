// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListDocumentsRequest, ListDocumentsResult } from "../models/models_1";
import { de_ListDocumentsCommand, se_ListDocumentsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDocumentsCommand}.
 */
export interface ListDocumentsCommandInput extends ListDocumentsRequest {}
/**
 * @public
 *
 * The output of {@link ListDocumentsCommand}.
 */
export interface ListDocumentsCommandOutput extends ListDocumentsResult, __MetadataBearer {}

/**
 * <p>Returns all Systems Manager (SSM) documents in the current Amazon Web Services account and Amazon Web Services Region. You can
 *    limit the results of this request by using a filter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListDocumentsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListDocumentsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // ListDocumentsRequest
 *   DocumentFilterList: [ // DocumentFilterList
 *     { // DocumentFilter
 *       key: "Name" || "Owner" || "PlatformTypes" || "DocumentType", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 *   Filters: [ // DocumentKeyValuesFilterList
 *     { // DocumentKeyValuesFilter
 *       Key: "STRING_VALUE",
 *       Values: [ // DocumentKeyValuesFilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListDocumentsCommand(input);
 * const response = await client.send(command);
 * // { // ListDocumentsResult
 * //   DocumentIdentifiers: [ // DocumentIdentifierList
 * //     { // DocumentIdentifier
 * //       Name: "STRING_VALUE",
 * //       CreatedDate: new Date("TIMESTAMP"),
 * //       DisplayName: "STRING_VALUE",
 * //       Owner: "STRING_VALUE",
 * //       VersionName: "STRING_VALUE",
 * //       PlatformTypes: [ // PlatformTypeList
 * //         "Windows" || "Linux" || "MacOS",
 * //       ],
 * //       DocumentVersion: "STRING_VALUE",
 * //       DocumentType: "Command" || "Policy" || "Automation" || "Session" || "Package" || "ApplicationConfiguration" || "ApplicationConfigurationSchema" || "DeploymentStrategy" || "ChangeCalendar" || "Automation.ChangeTemplate" || "ProblemAnalysis" || "ProblemAnalysisTemplate" || "CloudFormation" || "ConformancePackTemplate" || "QuickSetup" || "ManualApprovalPolicy" || "AutoApprovalPolicy",
 * //       SchemaVersion: "STRING_VALUE",
 * //       DocumentFormat: "YAML" || "JSON" || "TEXT",
 * //       TargetType: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       Requires: [ // DocumentRequiresList
 * //         { // DocumentRequires
 * //           Name: "STRING_VALUE", // required
 * //           Version: "STRING_VALUE",
 * //           RequireType: "STRING_VALUE",
 * //           VersionName: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ReviewStatus: "APPROVED" || "NOT_REVIEWED" || "PENDING" || "REJECTED",
 * //       Author: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDocumentsCommandInput - {@link ListDocumentsCommandInput}
 * @returns {@link ListDocumentsCommandOutput}
 * @see {@link ListDocumentsCommandInput} for command's `input` shape.
 * @see {@link ListDocumentsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidFilterKey} (client fault)
 *  <p>The specified key isn't valid.</p>
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
export class ListDocumentsCommand extends $Command
  .classBuilder<
    ListDocumentsCommandInput,
    ListDocumentsCommandOutput,
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
  .s("AmazonSSM", "ListDocuments", {})
  .n("SSMClient", "ListDocumentsCommand")
  .f(void 0, void 0)
  .ser(se_ListDocumentsCommand)
  .de(de_ListDocumentsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDocumentsRequest;
      output: ListDocumentsResult;
    };
    sdk: {
      input: ListDocumentsCommandInput;
      output: ListDocumentsCommandOutput;
    };
  };
}
