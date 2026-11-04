// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ImportWorkspaceMediaRequest, ImportWorkspaceMediaResponse } from "../models/models_2";
import { ImportWorkspaceMedia$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ImportWorkspaceMediaCommand}.
 */
export interface ImportWorkspaceMediaCommandInput extends ImportWorkspaceMediaRequest {}
/**
 * @public
 *
 * The output of {@link ImportWorkspaceMediaCommand}.
 */
export interface ImportWorkspaceMediaCommandOutput extends ImportWorkspaceMediaResponse, __MetadataBearer {}

/**
 * Imports a media asset (such as a logo) for use in a workspace.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ImportWorkspaceMediaCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ImportWorkspaceMediaCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // ImportWorkspaceMediaRequest
 *   InstanceId: "STRING_VALUE", // required
 *   WorkspaceId: "STRING_VALUE", // required
 *   MediaType: "IMAGE_LOGO_LIGHT_FAVICON" || "IMAGE_LOGO_DARK_FAVICON" || "IMAGE_LOGO_LIGHT_HORIZONTAL" || "IMAGE_LOGO_DARK_HORIZONTAL", // required
 *   MediaSource: "STRING_VALUE", // required
 * };
 * const command = new ImportWorkspaceMediaCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ImportWorkspaceMediaCommandInput - {@link ImportWorkspaceMediaCommandInput}
 * @returns {@link ImportWorkspaceMediaCommandOutput}
 * @see {@link ImportWorkspaceMediaCommandInput} for command's `input` shape.
 * @see {@link ImportWorkspaceMediaCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
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
export class ImportWorkspaceMediaCommand extends command<ImportWorkspaceMediaCommandInput, ImportWorkspaceMediaCommandOutput>(
  _ep0,
  _mw0,
  "ImportWorkspaceMedia",
  ImportWorkspaceMedia$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ImportWorkspaceMediaRequest;
      output: {};
    };
    sdk: {
      input: ImportWorkspaceMediaCommandInput;
      output: ImportWorkspaceMediaCommandOutput;
    };
  };
}
