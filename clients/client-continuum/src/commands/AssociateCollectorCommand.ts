// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateCollectorInput, AssociateCollectorOutput } from "../models/models_0";
import { AssociateCollector$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateCollectorCommand}.
 */
export interface AssociateCollectorCommandInput extends AssociateCollectorInput {}
/**
 * @public
 *
 * The output of {@link AssociateCollectorCommand}.
 */
export interface AssociateCollectorCommandOutput extends AssociateCollectorOutput, __MetadataBearer {}

/**
 * Associates one Collector with this Environment and configures the customer role Continuum uses to authorize access to associated Collector data. The caller must have permission on the Environment and permission to pass the role. Continuum assumes the supplied role and calls GetCollectorDataAccessAuthorization on the requested Collector; only a successful authorization response permits the association. The caller does not need Collector data-access permission. The Environment retains its other Collector associations. Calling again with an existing association is safe and does not create a duplicate.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ContinuumClient, AssociateCollectorCommand } from "@aws-sdk/client-continuum"; // ES Modules import
 * // const { ContinuumClient, AssociateCollectorCommand } = require("@aws-sdk/client-continuum"); // CommonJS import
 * // import type { ContinuumClientConfig } from "@aws-sdk/client-continuum";
 * const config = {}; // type is ContinuumClientConfig
 * const client = new ContinuumClient(config);
 * const input = { // AssociateCollectorInput
 *   environmentId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   collectorArn: "STRING_VALUE", // required
 *   collectorDataAccessRoleArn: "STRING_VALUE", // required
 * };
 * const command = new AssociateCollectorCommand(input);
 * const response = await client.send(command);
 * // { // AssociateCollectorOutput
 * //   environmentId: "STRING_VALUE", // required
 * //   environmentArn: "STRING_VALUE", // required
 * //   associatedCollector: { // AssociatedCollector
 * //     collectorId: "STRING_VALUE", // required
 * //     collectorArn: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param AssociateCollectorCommandInput - {@link AssociateCollectorCommandInput}
 * @returns {@link AssociateCollectorCommandOutput}
 * @see {@link AssociateCollectorCommandInput} for command's `input` shape.
 * @see {@link AssociateCollectorCommandOutput} for command's `response` shape.
 * @see {@link ContinuumClientResolvedConfig | config} for ContinuumClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The request is not authorized. Verify that your credentials and request signature are valid and that you have permission to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *  The request could not be completed due to a conflict with the current state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *  The request couldn't be processed because of an internal server issue. Try again later. If the problem persists, contact AWS Support.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The specified resource was not found. Verify that the resource identifier is correct and that the resource exists.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * @throws {@link ContinuumServiceException}
 * <p>Base exception class for all service exceptions from Continuum service.</p>
 *
 *
 * @public
 */
export class AssociateCollectorCommand extends command<AssociateCollectorCommandInput, AssociateCollectorCommandOutput>(
  _ep0,
  _mw0,
  "AssociateCollector",
  AssociateCollector$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateCollectorInput;
      output: AssociateCollectorOutput;
    };
    sdk: {
      input: AssociateCollectorCommandInput;
      output: AssociateCollectorCommandOutput;
    };
  };
}
