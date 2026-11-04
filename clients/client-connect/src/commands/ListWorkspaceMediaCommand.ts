// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListWorkspaceMediaRequest, ListWorkspaceMediaResponse } from "../models/models_3";
import { ListWorkspaceMedia$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListWorkspaceMediaCommand}.
 */
export interface ListWorkspaceMediaCommandInput extends ListWorkspaceMediaRequest {}
/**
 * @public
 *
 * The output of {@link ListWorkspaceMediaCommand}.
 */
export interface ListWorkspaceMediaCommandOutput extends ListWorkspaceMediaResponse, __MetadataBearer {}

/**
 * Lists media assets (such as logos) associated with a workspace.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListWorkspaceMediaCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListWorkspaceMediaCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // ListWorkspaceMediaRequest
 *   InstanceId: "STRING_VALUE", // required
 *   WorkspaceId: "STRING_VALUE", // required
 * };
 * const command = new ListWorkspaceMediaCommand(input);
 * const response = await client.send(command);
 * // { // ListWorkspaceMediaResponse
 * //   Media: [ // MediaList
 * //     { // MediaItem
 * //       Type: "IMAGE_LOGO_LIGHT_FAVICON" || "IMAGE_LOGO_DARK_FAVICON" || "IMAGE_LOGO_LIGHT_HORIZONTAL" || "IMAGE_LOGO_DARK_HORIZONTAL",
 * //       Source: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListWorkspaceMediaCommandInput - {@link ListWorkspaceMediaCommandInput}
 * @returns {@link ListWorkspaceMediaCommandOutput}
 * @see {@link ListWorkspaceMediaCommandInput} for command's `input` shape.
 * @see {@link ListWorkspaceMediaCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient permissions to perform this action.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the specified parameters are not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class ListWorkspaceMediaCommand extends command<ListWorkspaceMediaCommandInput, ListWorkspaceMediaCommandOutput>(
  _ep0,
  _mw0,
  "ListWorkspaceMedia",
  ListWorkspaceMedia$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWorkspaceMediaRequest;
      output: ListWorkspaceMediaResponse;
    };
    sdk: {
      input: ListWorkspaceMediaCommandInput;
      output: ListWorkspaceMediaCommandOutput;
    };
  };
}
