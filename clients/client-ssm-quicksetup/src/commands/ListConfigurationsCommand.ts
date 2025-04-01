// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListConfigurationsInput, ListConfigurationsOutput } from "../models/models_0";
import { de_ListConfigurationsCommand, se_ListConfigurationsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SSMQuickSetupClientResolvedConfig } from "../SSMQuickSetupClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListConfigurationsCommand}.
 */
export interface ListConfigurationsCommandInput extends ListConfigurationsInput {}
/**
 * @public
 *
 * The output of {@link ListConfigurationsCommand}.
 */
export interface ListConfigurationsCommandOutput extends ListConfigurationsOutput, __MetadataBearer {}

/**
 * <p>Returns configurations deployed by Quick Setup in the requesting Amazon Web Services account and Amazon Web Services Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMQuickSetupClient, ListConfigurationsCommand } from "@aws-sdk/client-ssm-quicksetup"; // ES Modules import
 * // const { SSMQuickSetupClient, ListConfigurationsCommand } = require("@aws-sdk/client-ssm-quicksetup"); // CommonJS import
 * const client = new SSMQuickSetupClient(config);
 * const input = { // ListConfigurationsInput
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
 *   ManagerArn: "STRING_VALUE",
 *   ConfigurationDefinitionId: "STRING_VALUE",
 * };
 * const command = new ListConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListConfigurationsOutput
 * //   ConfigurationsList: [ // ConfigurationsList
 * //     { // ConfigurationSummary
 * //       Id: "STRING_VALUE",
 * //       ManagerArn: "STRING_VALUE",
 * //       ConfigurationDefinitionId: "STRING_VALUE",
 * //       Type: "STRING_VALUE",
 * //       TypeVersion: "STRING_VALUE",
 * //       Region: "STRING_VALUE",
 * //       Account: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       FirstClassParameters: { // ConfigurationParametersMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
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
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListConfigurationsCommandInput - {@link ListConfigurationsCommandInput}
 * @returns {@link ListConfigurationsCommandOutput}
 * @see {@link ListConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link SSMQuickSetupClientResolvedConfig | config} for SSMQuickSetupClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The requester has insufficient permissions to perform the operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource couldn't be found. Check the ID or name and try again.</p>
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
export class ListConfigurationsCommand extends $Command
  .classBuilder<
    ListConfigurationsCommandInput,
    ListConfigurationsCommandOutput,
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
  .s("QuickSetup", "ListConfigurations", {})
  .n("SSMQuickSetupClient", "ListConfigurationsCommand")
  .f(void 0, void 0)
  .ser(se_ListConfigurationsCommand)
  .de(de_ListConfigurationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListConfigurationsInput;
      output: ListConfigurationsOutput;
    };
    sdk: {
      input: ListConfigurationsCommandInput;
      output: ListConfigurationsCommandOutput;
    };
  };
}
