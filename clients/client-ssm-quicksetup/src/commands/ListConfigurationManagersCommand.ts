// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListConfigurationManagersInput, ListConfigurationManagersOutput } from "../models/models_0";
import { de_ListConfigurationManagersCommand, se_ListConfigurationManagersCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SSMQuickSetupClientResolvedConfig } from "../SSMQuickSetupClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListConfigurationManagersCommand}.
 */
export interface ListConfigurationManagersCommandInput extends ListConfigurationManagersInput {}
/**
 * @public
 *
 * The output of {@link ListConfigurationManagersCommand}.
 */
export interface ListConfigurationManagersCommandOutput extends ListConfigurationManagersOutput, __MetadataBearer {}

/**
 * <p>Returns Quick Setup configuration managers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMQuickSetupClient, ListConfigurationManagersCommand } from "@aws-sdk/client-ssm-quicksetup"; // ES Modules import
 * // const { SSMQuickSetupClient, ListConfigurationManagersCommand } = require("@aws-sdk/client-ssm-quicksetup"); // CommonJS import
 * const client = new SSMQuickSetupClient(config);
 * const input = { // ListConfigurationManagersInput
 *   StartingToken: "STRING_VALUE",
 *   MaxItems: Number("int"),
 *   Filters: [ // FiltersList
 *     { // Filter
 *       Key: "STRING_VALUE", // required
 *       Values: [ // FilterValues // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new ListConfigurationManagersCommand(input);
 * const response = await client.send(command);
 * // { // ListConfigurationManagersOutput
 * //   ConfigurationManagersList: [ // ConfigurationManagerList
 * //     { // ConfigurationManagerSummary
 * //       ManagerArn: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       StatusSummaries: [ // StatusSummariesList
 * //         { // StatusSummary
 * //           StatusType: "Deployment" || "AsyncExecutions", // required
 * //           Status: "INITIALIZING" || "DEPLOYING" || "SUCCEEDED" || "DELETING" || "STOPPING" || "FAILED" || "STOPPED" || "DELETE_FAILED" || "STOP_FAILED" || "NONE",
 * //           StatusMessage: "STRING_VALUE",
 * //           LastUpdatedAt: new Date("TIMESTAMP"), // required
 * //           StatusDetails: { // StatusDetails
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //       ConfigurationDefinitionSummaries: [ // ConfigurationDefinitionSummariesList
 * //         { // ConfigurationDefinitionSummary
 * //           Id: "STRING_VALUE",
 * //           Type: "STRING_VALUE",
 * //           TypeVersion: "STRING_VALUE",
 * //           FirstClassParameters: { // ConfigurationParametersMap
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListConfigurationManagersCommandInput - {@link ListConfigurationManagersCommandInput}
 * @returns {@link ListConfigurationManagersCommandOutput}
 * @see {@link ListConfigurationManagersCommandInput} for command's `input` shape.
 * @see {@link ListConfigurationManagersCommandOutput} for command's `response` shape.
 * @see {@link SSMQuickSetupClientResolvedConfig | config} for SSMQuickSetupClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The requester has insufficient permissions to perform the operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Another request is being processed. Wait a few minutes and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request or operation exceeds the maximum allowed request rate per Amazon Web Services account and Amazon Web Services Region.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request is invalid. Verify the values provided for the request parameters are
 *                   accurate.</p>
 *
 * @throws {@link SSMQuickSetupServiceException}
 * <p>Base exception class for all service exceptions from SSMQuickSetup service.</p>
 *
 *
 * @public
 */
export class ListConfigurationManagersCommand extends $Command
  .classBuilder<
    ListConfigurationManagersCommandInput,
    ListConfigurationManagersCommandOutput,
    SSMQuickSetupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMQuickSetupClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QuickSetup", "ListConfigurationManagers", {})
  .n("SSMQuickSetupClient", "ListConfigurationManagersCommand")
  .f(void 0, void 0)
  .ser(se_ListConfigurationManagersCommand)
  .de(de_ListConfigurationManagersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListConfigurationManagersInput;
      output: ListConfigurationManagersOutput;
    };
    sdk: {
      input: ListConfigurationManagersCommandInput;
      output: ListConfigurationManagersCommandOutput;
    };
  };
}
