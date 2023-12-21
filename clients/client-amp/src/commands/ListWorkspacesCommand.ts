// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmpClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmpClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListWorkspacesRequest, ListWorkspacesResponse } from "../models/models_0";
import { de_ListWorkspacesCommand, se_ListWorkspacesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * Lists all AMP workspaces, including workspaces being created or deleted.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, ListWorkspacesCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, ListWorkspacesCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * const client = new AmpClient(config);
 * const input = { // ListWorkspacesRequest
 *   nextToken: "STRING_VALUE",
 *   alias: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListWorkspacesCommand(input);
 * const response = await client.send(command);
 * // { // ListWorkspacesResponse
 * //   workspaces: [ // WorkspaceSummaryList // required
 * //     { // WorkspaceSummary
 * //       workspaceId: "STRING_VALUE", // required
 * //       alias: "STRING_VALUE",
 * //       arn: "STRING_VALUE", // required
 * //       status: { // WorkspaceStatus
 * //         statusCode: "STRING_VALUE", // required
 * //       },
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       kmsKeyArn: "STRING_VALUE",
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
 * @see {@link AmpClientResolvedConfig | config} for AmpClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  User does not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  Unexpected error during processing of request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *  The input fails to satisfy the constraints specified by an AWS service.
 *
 * @throws {@link AmpServiceException}
 * <p>Base exception class for all service exceptions from Amp service.</p>
 *
 */
export class ListWorkspacesCommand extends $Command
  .classBuilder<
    ListWorkspacesCommandInput,
    ListWorkspacesCommandOutput,
    AmpClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any /*Command*/, Command: any /*static*/, config: AmpClientResolvedConfig) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonPrometheusService", "ListWorkspaces", {})
  .n("AmpClient", "ListWorkspacesCommand")
  .f(void 0, void 0)
  .ser(se_ListWorkspacesCommand)
  .de(de_ListWorkspacesCommand)
  .build() {}
