// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteScheduledActionMessage } from "../models/models_0";
import { DeleteScheduledAction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteScheduledActionCommand}.
 */
export interface DeleteScheduledActionCommandInput extends DeleteScheduledActionMessage {}
/**
 * @public
 *
 * The output of {@link DeleteScheduledActionCommand}.
 */
export interface DeleteScheduledActionCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a scheduled action.
 *              </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DeleteScheduledActionCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DeleteScheduledActionCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // DeleteScheduledActionMessage
 *   ScheduledActionName: "STRING_VALUE", // required
 * };
 * const command = new DeleteScheduledActionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteScheduledActionCommandInput - {@link DeleteScheduledActionCommandInput}
 * @returns {@link DeleteScheduledActionCommandOutput}
 * @see {@link DeleteScheduledActionCommandInput} for command's `input` shape.
 * @see {@link DeleteScheduledActionCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ScheduledActionNotFoundFault} (client fault)
 *  <p>The scheduled action cannot be found. </p>
 *
 * @throws {@link UnauthorizedOperation} (client fault)
 *  <p>Your account is not authorized to perform the requested operation.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 *
 * @public
 */
export class DeleteScheduledActionCommand extends command<DeleteScheduledActionCommandInput, DeleteScheduledActionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteScheduledAction",
  DeleteScheduledAction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteScheduledActionMessage;
      output: {};
    };
    sdk: {
      input: DeleteScheduledActionCommandInput;
      output: DeleteScheduledActionCommandOutput;
    };
  };
}
