// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  NotifyResourceDeploymentStatusChangeInput,
  NotifyResourceDeploymentStatusChangeOutput,
} from "../models/models_0";
import { NotifyResourceDeploymentStatusChange$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link NotifyResourceDeploymentStatusChangeCommand}.
 */
export interface NotifyResourceDeploymentStatusChangeCommandInput extends NotifyResourceDeploymentStatusChangeInput {}
/**
 * @public
 *
 * The output of {@link NotifyResourceDeploymentStatusChangeCommand}.
 */
export interface NotifyResourceDeploymentStatusChangeCommandOutput extends NotifyResourceDeploymentStatusChangeOutput, __MetadataBearer {}

/**
 * Notify Proton of status changes to a provisioned resource when you use self-managed provisioning.
 *
 * For more information, see [Self-managed provisioning](https://docs.aws.amazon.com/proton/latest/userguide/ag-works-prov-methods.html#ag-works-prov-methods-self) in the *Proton User Guide*.
 *
 * @deprecated (since 10/07/2025) AWS Proton is not accepting new customers.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, NotifyResourceDeploymentStatusChangeCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, NotifyResourceDeploymentStatusChangeCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // NotifyResourceDeploymentStatusChangeInput
 *   resourceArn: "STRING_VALUE", // required
 *   status: "STRING_VALUE",
 *   outputs: [ // OutputsList
 *     { // Output
 *       key: "STRING_VALUE",
 *       valueString: "STRING_VALUE",
 *     },
 *   ],
 *   deploymentId: "STRING_VALUE",
 *   statusMessage: "STRING_VALUE",
 * };
 * const command = new NotifyResourceDeploymentStatusChangeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param NotifyResourceDeploymentStatusChangeCommandInput - {@link NotifyResourceDeploymentStatusChangeCommandInput}
 * @returns {@link NotifyResourceDeploymentStatusChangeCommandOutput}
 * @see {@link NotifyResourceDeploymentStatusChangeCommandInput} for command's `input` shape.
 * @see {@link NotifyResourceDeploymentStatusChangeCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * There *isn't* sufficient access for performing this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request *couldn't* be made due to a conflicting operation or resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request failed to register with the service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource *wasn't* found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * A quota was exceeded. For more information, see [Proton Quotas](https://docs.aws.amazon.com/proton/latest/userguide/ag-limits.html) in the *Proton User Guide*.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input is invalid or an out-of-range value was supplied for the input parameter.
 *
 * @throws {@link ProtonServiceException}
 *
 * Base exception class for all service exceptions from Proton service.
 *
 * @public
 */
export class NotifyResourceDeploymentStatusChangeCommand extends command<NotifyResourceDeploymentStatusChangeCommandInput, NotifyResourceDeploymentStatusChangeCommandOutput>(
  _ep0,
  _mw0,
  "NotifyResourceDeploymentStatusChange",
  NotifyResourceDeploymentStatusChange$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: NotifyResourceDeploymentStatusChangeInput;
      output: {};
    };
    sdk: {
      input: NotifyResourceDeploymentStatusChangeCommandInput;
      output: NotifyResourceDeploymentStatusChangeCommandOutput;
    };
  };
}
