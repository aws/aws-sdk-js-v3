// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GrafanaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GrafanaClient";
import {
  ListWorkspacesRequest,
  ListWorkspacesResponse,
  ListWorkspacesResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_ListWorkspacesCommand, se_ListWorkspacesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListWorkspacesCommand}.
 */
export interface ListWorkspacesCommandInput extends ListWorkspacesRequest {}
/**
 * @public
 *
 * The output of {@link ListWorkspacesCommand}.
 */
export interface ListWorkspacesCommandOutput extends ListWorkspacesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of Amazon Managed Grafana workspaces in the account, with some information
 *             about each workspace. For more complete information about one workspace, use <a href="https://docs.aws.amazon.com/AAMG/latest/APIReference/API_DescribeWorkspace.html">DescribeWorkspace</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GrafanaClient, ListWorkspacesCommand } from "@aws-sdk/client-grafana"; // ES Modules import
 * // const { GrafanaClient, ListWorkspacesCommand } = require("@aws-sdk/client-grafana"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new GrafanaClient(config);
 * const input = { // ListWorkspacesRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListWorkspacesCommand(input);
 * const response = await client.send(command);
 * // { // ListWorkspacesResponse
 * //   workspaces: [ // WorkspaceList // required
 * //     { // WorkspaceSummary
 * //       created: new Date("TIMESTAMP"), // required
 * //       description: "STRING_VALUE",
 * //       endpoint: "STRING_VALUE", // required
 * //       grafanaVersion: "STRING_VALUE", // required
 * //       id: "STRING_VALUE", // required
 * //       modified: new Date("TIMESTAMP"), // required
 * //       name: "STRING_VALUE",
 * //       notificationDestinations: [ // NotificationDestinationsList
 * //         "STRING_VALUE",
 * //       ],
 * //       status: "STRING_VALUE", // required
 * //       authentication: { // AuthenticationSummary
 * //         providers: [ // AuthenticationProviders // required
 * //           "STRING_VALUE",
 * //         ],
 * //         samlConfigurationStatus: "STRING_VALUE",
 * //       },
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       licenseType: "STRING_VALUE",
 * //       grafanaToken: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListWorkspacesCommandInput - {@link ListWorkspacesCommandInput}
 * @returns {@link ListWorkspacesCommandOutput}
 * @see {@link ListWorkspacesCommandInput} for command's `input` shape.
 * @see {@link ListWorkspacesCommandOutput} for command's `response` shape.
 * @see {@link GrafanaClientResolvedConfig | config} for GrafanaClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error while processing the request. Retry the request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling. Retry the request.</p>
 *
 * @throws {@link GrafanaServiceException}
 * <p>Base exception class for all service exceptions from Grafana service.</p>
 *
 * @public
 */
export class ListWorkspacesCommand extends $Command
  .classBuilder<
    ListWorkspacesCommandInput,
    ListWorkspacesCommandOutput,
    GrafanaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GrafanaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGrafanaControlPlane", "ListWorkspaces", {})
  .n("GrafanaClient", "ListWorkspacesCommand")
  .f(void 0, ListWorkspacesResponseFilterSensitiveLog)
  .ser(se_ListWorkspacesCommand)
  .de(de_ListWorkspacesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWorkspacesRequest;
      output: ListWorkspacesResponse;
    };
    sdk: {
      input: ListWorkspacesCommandInput;
      output: ListWorkspacesCommandOutput;
    };
  };
}
