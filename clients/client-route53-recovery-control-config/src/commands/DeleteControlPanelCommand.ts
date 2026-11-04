// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteControlPanelRequest, DeleteControlPanelResponse } from "../models/models_0";
import { DeleteControlPanel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteControlPanelCommand}.
 */
export interface DeleteControlPanelCommandInput extends DeleteControlPanelRequest {}
/**
 * @public
 *
 * The output of {@link DeleteControlPanelCommand}.
 */
export interface DeleteControlPanelCommandOutput extends DeleteControlPanelResponse, __MetadataBearer {}

/**
 * Deletes a control panel.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryControlConfigClient, DeleteControlPanelCommand } from "@aws-sdk/client-route53-recovery-control-config"; // ES Modules import
 * // const { Route53RecoveryControlConfigClient, DeleteControlPanelCommand } = require("@aws-sdk/client-route53-recovery-control-config"); // CommonJS import
 * // import type { Route53RecoveryControlConfigClientConfig } from "@aws-sdk/client-route53-recovery-control-config";
 * const config = {}; // type is Route53RecoveryControlConfigClientConfig
 * const client = new Route53RecoveryControlConfigClient(config);
 * const input = { // DeleteControlPanelRequest
 *   ControlPanelArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteControlPanelCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteControlPanelCommandInput - {@link DeleteControlPanelCommandInput}
 * @returns {@link DeleteControlPanelCommandOutput}
 * @see {@link DeleteControlPanelCommandInput} for command's `input` shape.
 * @see {@link DeleteControlPanelCommandOutput} for command's `response` shape.
 * @see {@link Route53RecoveryControlConfigClientResolvedConfig | config} for Route53RecoveryControlConfigClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * 403 response - You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * 409 response - ConflictException. You might be using a predefined variable.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * 500 response - InternalServiceError. Temporary service error. Retry the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * 404 response - MalformedQueryString. The query string contains a syntax error or resource not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * 429 response - LimitExceededException or TooManyRequestsException.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * 400 response - Multiple causes. For example, you might have a malformed query string and input parameter might be out of range, or you might have used parameters together incorrectly.
 *
 * @throws {@link Route53RecoveryControlConfigServiceException}
 *
 * Base exception class for all service exceptions from Route53RecoveryControlConfig service.
 *
 * @public
 */
export class DeleteControlPanelCommand extends command<DeleteControlPanelCommandInput, DeleteControlPanelCommandOutput>(
  _ep0,
  _mw0,
  "DeleteControlPanel",
  DeleteControlPanel$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteControlPanelRequest;
      output: {};
    };
    sdk: {
      input: DeleteControlPanelCommandInput;
      output: DeleteControlPanelCommandOutput;
    };
  };
}
