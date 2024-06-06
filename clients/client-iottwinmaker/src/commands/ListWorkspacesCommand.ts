// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTTwinMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTTwinMakerClient";
import { ListWorkspacesRequest, ListWorkspacesResponse } from "../models/models_0";
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
 * <p>Retrieves information about workspaces in the current account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTTwinMakerClient, ListWorkspacesCommand } from "@aws-sdk/client-iottwinmaker"; // ES Modules import
 * // const { IoTTwinMakerClient, ListWorkspacesCommand } = require("@aws-sdk/client-iottwinmaker"); // CommonJS import
 * const client = new IoTTwinMakerClient(config);
 * const input = { // ListWorkspacesRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListWorkspacesCommand(input);
 * const response = await client.send(command);
 * // { // ListWorkspacesResponse
 * //   workspaceSummaries: [ // WorkspaceSummaries
 * //     { // WorkspaceSummary
 * //       workspaceId: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       linkedServices: [ // LinkedServices
 * //         "STRING_VALUE",
 * //       ],
 * //       creationDateTime: new Date("TIMESTAMP"), // required
 * //       updateDateTime: new Date("TIMESTAMP"), // required
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
 * @see {@link IoTTwinMakerClientResolvedConfig | config} for IoTTwinMakerClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error has occurred.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota was exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Failed</p>
 *
 * @throws {@link IoTTwinMakerServiceException}
 * <p>Base exception class for all service exceptions from IoTTwinMaker service.</p>
 *
 * @public
 */
export class ListWorkspacesCommand extends $Command
  .classBuilder<
    ListWorkspacesCommandInput,
    ListWorkspacesCommandOutput,
    IoTTwinMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IoTTwinMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIoTTwinMaker", "ListWorkspaces", {})
  .n("IoTTwinMakerClient", "ListWorkspacesCommand")
  .f(void 0, void 0)
  .ser(se_ListWorkspacesCommand)
  .de(de_ListWorkspacesCommand)
  .build() {}
