// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateSessionLoggerRequest, AssociateSessionLoggerResponse } from "../models/models_0";
import { AssociateSessionLogger$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateSessionLoggerCommand}.
 */
export interface AssociateSessionLoggerCommandInput extends AssociateSessionLoggerRequest {}
/**
 * @public
 *
 * The output of {@link AssociateSessionLoggerCommand}.
 */
export interface AssociateSessionLoggerCommandOutput extends AssociateSessionLoggerResponse, __MetadataBearer {}

/**
 * Associates a session logger with a portal.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesWebClient, AssociateSessionLoggerCommand } from "@aws-sdk/client-workspaces-web"; // ES Modules import
 * // const { WorkSpacesWebClient, AssociateSessionLoggerCommand } = require("@aws-sdk/client-workspaces-web"); // CommonJS import
 * // import type { WorkSpacesWebClientConfig } from "@aws-sdk/client-workspaces-web";
 * const config = {}; // type is WorkSpacesWebClientConfig
 * const client = new WorkSpacesWebClient(config);
 * const input = { // AssociateSessionLoggerRequest
 *   portalArn: "STRING_VALUE", // required
 *   sessionLoggerArn: "STRING_VALUE", // required
 * };
 * const command = new AssociateSessionLoggerCommand(input);
 * const response = await client.send(command);
 * // { // AssociateSessionLoggerResponse
 * //   portalArn: "STRING_VALUE", // required
 * //   sessionLoggerArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param AssociateSessionLoggerCommandInput - {@link AssociateSessionLoggerCommandInput}
 * @returns {@link AssociateSessionLoggerCommandOutput}
 * @see {@link AssociateSessionLoggerCommandInput} for command's `input` shape.
 * @see {@link AssociateSessionLoggerCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource cannot be found.
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
 * @example Associate Session Logger with Portal
 * ```javascript
 * // Associates a session logger with a portal
 * const input = {
 *   portalArn: "arn:aws:workspaces-web:us-west-2:123456789012:portal/12345678-1234-1234-1234-123456789012",
 *   sessionLoggerArn: "arn:aws:workspaces-web:us-west-2:123456789012:sessionLogger/11111111-1111-1111-1111-111111111111"
 * };
 * const command = new AssociateSessionLoggerCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   portalArn: "arn:aws:workspaces-web:us-west-2:123456789012:portal/12345678-1234-1234-1234-123456789012",
 *   sessionLoggerArn: "arn:aws:workspaces-web:us-west-2:123456789012:sessionLogger/11111111-1111-1111-1111-111111111111"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class AssociateSessionLoggerCommand extends command<AssociateSessionLoggerCommandInput, AssociateSessionLoggerCommandOutput>(
  _ep0,
  _mw0,
  "AssociateSessionLogger",
  AssociateSessionLogger$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateSessionLoggerRequest;
      output: AssociateSessionLoggerResponse;
    };
    sdk: {
      input: AssociateSessionLoggerCommandInput;
      output: AssociateSessionLoggerCommandOutput;
    };
  };
}
