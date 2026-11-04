// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteSessionLoggerRequest, DeleteSessionLoggerResponse } from "../models/models_0";
import { DeleteSessionLogger$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteSessionLoggerCommand}.
 */
export interface DeleteSessionLoggerCommandInput extends DeleteSessionLoggerRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSessionLoggerCommand}.
 */
export interface DeleteSessionLoggerCommandOutput extends DeleteSessionLoggerResponse, __MetadataBearer {}

/**
 * Deletes a session logger resource.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, DeleteSessionLoggerCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, DeleteSessionLoggerCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // DeleteSessionLoggerRequest
 *   sessionLoggerArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteSessionLoggerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSessionLoggerCommandInput - {@link DeleteSessionLoggerCommandInput}
 * @returns {@link DeleteSessionLoggerCommandOutput}
 * @see {@link DeleteSessionLoggerCommandInput} for command's `input` shape.
 * @see {@link DeleteSessionLoggerCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesWebClientResolvedConfig | config} for WorkSpacesWebClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access is denied.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There is a conflict.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There is an internal server error.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * There is a throttling error.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * There is a validation error.
 *
 * @throws {@link WorkSpacesWebServiceException}
 *
 * Base exception class for all service exceptions from WorkSpacesWeb service.
 *
 * @example Delete Session Logger
 * ```javascript
 * // Deletes a session logger resource
 * const input = {
 *   sessionLoggerArn: "arn:aws:workspaces-web:us-west-2:123456789012:sessionLogger/12345678-1234-1234-1234-123456789012"
 * };
 * const command = new DeleteSessionLoggerCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteSessionLoggerCommand extends command<DeleteSessionLoggerCommandInput, DeleteSessionLoggerCommandOutput>(
  _ep0,
  _mw0,
  "DeleteSessionLogger",
  DeleteSessionLogger$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSessionLoggerRequest;
      output: {};
    };
    sdk: {
      input: DeleteSessionLoggerCommandInput;
      output: DeleteSessionLoggerCommandOutput;
    };
  };
}
