// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListWorkspacePagesRequest, ListWorkspacePagesResponse } from "../models/models_2";
import { ListWorkspacePages$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListWorkspacePagesCommand}.
 */
export interface ListWorkspacePagesCommandInput extends ListWorkspacePagesRequest {}
/**
 * @public
 *
 * The output of {@link ListWorkspacePagesCommand}.
 */
export interface ListWorkspacePagesCommandOutput extends ListWorkspacePagesResponse, __MetadataBearer {}

/**
 * <p>Lists the page configurations in a workspace, including the views assigned to each page.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListWorkspacePagesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListWorkspacePagesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // ListWorkspacePagesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   WorkspaceId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListWorkspacePagesCommand(input);
 * const response = await client.send(command);
 * // { // ListWorkspacePagesResponse
 * //   NextToken: "STRING_VALUE",
 * //   WorkspacePageList: [ // WorkspacePageList // required
 * //     { // WorkspacePage
 * //       ResourceArn: "STRING_VALUE",
 * //       Page: "STRING_VALUE",
 * //       Slug: "STRING_VALUE",
 * //       InputData: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListWorkspacePagesCommandInput - {@link ListWorkspacePagesCommandInput}
 * @returns {@link ListWorkspacePagesCommandOutput}
 * @see {@link ListWorkspacePagesCommandInput} for command's `input` shape.
 * @see {@link ListWorkspacePagesCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class ListWorkspacePagesCommand extends $Command
  .classBuilder<
    ListWorkspacePagesCommandInput,
    ListWorkspacePagesCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "ListWorkspacePages", {})
  .n("ConnectClient", "ListWorkspacePagesCommand")
  .sc(ListWorkspacePages$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWorkspacePagesRequest;
      output: ListWorkspacePagesResponse;
    };
    sdk: {
      input: ListWorkspacePagesCommandInput;
      output: ListWorkspacePagesCommandOutput;
    };
  };
}
