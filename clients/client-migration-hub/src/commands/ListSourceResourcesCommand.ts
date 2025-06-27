// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import { ListSourceResourcesRequest, ListSourceResourcesResult } from "../models/models_0";
import { de_ListSourceResourcesCommand, se_ListSourceResourcesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSourceResourcesCommand}.
 */
export interface ListSourceResourcesCommandInput extends ListSourceResourcesRequest {}
/**
 * @public
 *
 * The output of {@link ListSourceResourcesCommand}.
 */
export interface ListSourceResourcesCommandOutput extends ListSourceResourcesResult, __MetadataBearer {}

/**
 * <p>Lists all the source resource that are associated with the specified
 *             <code>MigrationTaskName</code> and <code>ProgressUpdateStream</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, ListSourceResourcesCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, ListSourceResourcesCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * const client = new MigrationHubClient(config);
 * const input = { // ListSourceResourcesRequest
 *   ProgressUpdateStream: "STRING_VALUE", // required
 *   MigrationTaskName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListSourceResourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListSourceResourcesResult
 * //   NextToken: "STRING_VALUE",
 * //   SourceResourceList: [ // SourceResourceList
 * //     { // SourceResource
 * //       Name: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE",
 * //       StatusDetail: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSourceResourcesCommandInput - {@link ListSourceResourcesCommandInput}
 * @returns {@link ListSourceResourcesCommandOutput}
 * @see {@link ListSourceResourcesCommandInput} for command's `input` shape.
 * @see {@link ListSourceResourcesCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubClientResolvedConfig | config} for MigrationHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Exception raised when an internal, configuration, or dependency error is
 *          encountered.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Exception raised when the provided input violates a policy constraint or is entered in
 *          the wrong format or data type.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Exception raised when the request references a resource (Application Discovery Service
 *          configuration, update stream, migration task, etc.) that does not exist in Application
 *          Discovery Service (Application Discovery Service) or in Migration Hub's repository.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Exception raised when there is an internal, configuration, or dependency error
 *          encountered.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link MigrationHubServiceException}
 * <p>Base exception class for all service exceptions from MigrationHub service.</p>
 *
 *
 * @public
 */
export class ListSourceResourcesCommand extends $Command
  .classBuilder<
    ListSourceResourcesCommandInput,
    ListSourceResourcesCommandOutput,
    MigrationHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MigrationHubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSMigrationHub", "ListSourceResources", {})
  .n("MigrationHubClient", "ListSourceResourcesCommand")
  .f(void 0, void 0)
  .ser(se_ListSourceResourcesCommand)
  .de(de_ListSourceResourcesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSourceResourcesRequest;
      output: ListSourceResourcesResult;
    };
    sdk: {
      input: ListSourceResourcesCommandInput;
      output: ListSourceResourcesCommandOutput;
    };
  };
}
