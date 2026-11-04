// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  AssociateApplicationToEntitlementRequest,
  AssociateApplicationToEntitlementResult,
} from "../models/models_0";
import { AssociateApplicationToEntitlement$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateApplicationToEntitlementCommand}.
 */
export interface AssociateApplicationToEntitlementCommandInput extends AssociateApplicationToEntitlementRequest {}
/**
 * @public
 *
 * The output of {@link AssociateApplicationToEntitlementCommand}.
 */
export interface AssociateApplicationToEntitlementCommandOutput extends AssociateApplicationToEntitlementResult, __MetadataBearer {}

/**
 * Associates an application to entitle.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, AssociateApplicationToEntitlementCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, AssociateApplicationToEntitlementCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // AssociateApplicationToEntitlementRequest
 *   StackName: "STRING_VALUE", // required
 *   EntitlementName: "STRING_VALUE", // required
 *   ApplicationIdentifier: "STRING_VALUE", // required
 * };
 * const command = new AssociateApplicationToEntitlementCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateApplicationToEntitlementCommandInput - {@link AssociateApplicationToEntitlementCommandInput}
 * @returns {@link AssociateApplicationToEntitlementCommandOutput}
 * @see {@link AssociateApplicationToEntitlementCommandInput} for command's `input` shape.
 * @see {@link AssociateApplicationToEntitlementCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link EntitlementNotFoundException} (client fault)
 *
 * The entitlement can't be found.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The requested limit exceeds the permitted limit for an account.
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *
 * The attempted operation is not permitted.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link AppStreamServiceException}
 *
 * Base exception class for all service exceptions from AppStream service.
 *
 * @public
 */
export class AssociateApplicationToEntitlementCommand extends command<AssociateApplicationToEntitlementCommandInput, AssociateApplicationToEntitlementCommandOutput>(
  _ep0,
  _mw0,
  "AssociateApplicationToEntitlement",
  AssociateApplicationToEntitlement$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateApplicationToEntitlementRequest;
      output: {};
    };
    sdk: {
      input: AssociateApplicationToEntitlementCommandInput;
      output: AssociateApplicationToEntitlementCommandOutput;
    };
  };
}
