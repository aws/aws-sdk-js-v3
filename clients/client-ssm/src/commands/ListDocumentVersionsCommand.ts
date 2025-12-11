// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListDocumentVersionsRequest, ListDocumentVersionsResult } from "../models/models_1";
import { ListDocumentVersions } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDocumentVersionsCommand}.
 */
export interface ListDocumentVersionsCommandInput extends ListDocumentVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListDocumentVersionsCommand}.
 */
export interface ListDocumentVersionsCommandOutput extends ListDocumentVersionsResult, __MetadataBearer {}

/**
 * <p>List all versions for a document.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListDocumentVersionsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListDocumentVersionsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // ListDocumentVersionsRequest
 *   Name: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListDocumentVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListDocumentVersionsResult
 * //   DocumentVersions: [ // DocumentVersionList
 * //     { // DocumentVersionInfo
 * //       Name: "STRING_VALUE",
 * //       DisplayName: "STRING_VALUE",
 * //       DocumentVersion: "STRING_VALUE",
 * //       VersionName: "STRING_VALUE",
 * //       CreatedDate: new Date("TIMESTAMP"),
 * //       IsDefaultVersion: true || false,
 * //       DocumentFormat: "YAML" || "JSON" || "TEXT",
 * //       Status: "Creating" || "Active" || "Updating" || "Deleting" || "Failed",
 * //       StatusInformation: "STRING_VALUE",
 * //       ReviewStatus: "APPROVED" || "NOT_REVIEWED" || "PENDING" || "REJECTED",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDocumentVersionsCommandInput - {@link ListDocumentVersionsCommandInput}
 * @returns {@link ListDocumentVersionsCommandOutput}
 * @see {@link ListDocumentVersionsCommandInput} for command's `input` shape.
 * @see {@link ListDocumentVersionsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidDocument} (client fault)
 *  <p>The specified SSM document doesn't exist.</p>
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
export class ListDocumentVersionsCommand extends $Command
  .classBuilder<
    ListDocumentVersionsCommandInput,
    ListDocumentVersionsCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSSM", "ListDocumentVersions", {})
  .n("SSMClient", "ListDocumentVersionsCommand")
  .sc(ListDocumentVersions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDocumentVersionsRequest;
      output: ListDocumentVersionsResult;
    };
    sdk: {
      input: ListDocumentVersionsCommandInput;
      output: ListDocumentVersionsCommandOutput;
    };
  };
}
