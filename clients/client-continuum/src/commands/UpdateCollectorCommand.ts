// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateCollectorInput, UpdateCollectorOutput } from "../models/models_0";
import { UpdateCollector$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateCollectorCommand}.
 */
export interface UpdateCollectorCommandInput extends UpdateCollectorInput {}
/**
 * @public
 *
 * The output of {@link UpdateCollectorCommand}.
 */
export interface UpdateCollectorCommandOutput extends UpdateCollectorOutput, __MetadataBearer {}

/**
 * Updates the customer-controlled mutable properties of a Collector. Only the name and Kubernetes cluster IAM role can be changed.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ContinuumClient, UpdateCollectorCommand } from "@aws-sdk/client-continuum"; // ES Modules import
 * // const { ContinuumClient, UpdateCollectorCommand } = require("@aws-sdk/client-continuum"); // CommonJS import
 * // import type { ContinuumClientConfig } from "@aws-sdk/client-continuum";
 * const config = {}; // type is ContinuumClientConfig
 * const client = new ContinuumClient(config);
 * const input = { // UpdateCollectorInput
 *   collectorId: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   kubernetesClusterRole: { // KubernetesClusterRoleUpdate Union: only one key present
 *     set: { // KubernetesClusterRoleConfiguration
 *       roleArn: "STRING_VALUE", // required
 *       externalId: "STRING_VALUE",
 *     },
 *     remove: {},
 *   },
 * };
 * const command = new UpdateCollectorCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCollectorOutput
 * //   collectorId: "STRING_VALUE", // required
 * //   collectorArn: "STRING_VALUE", // required
 * //   type: "AWS_COLLECTOR", // required
 * //   status: "ACTIVE" || "PENDING_DELETION", // required
 * //   configRecorderArn: "STRING_VALUE",
 * //   kubernetesClusterRoleArn: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param UpdateCollectorCommandInput - {@link UpdateCollectorCommandInput}
 * @returns {@link UpdateCollectorCommandOutput}
 * @see {@link UpdateCollectorCommandInput} for command's `input` shape.
 * @see {@link UpdateCollectorCommandOutput} for command's `response` shape.
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
export class UpdateCollectorCommand extends command<UpdateCollectorCommandInput, UpdateCollectorCommandOutput>(
  _ep0,
  _mw0,
  "UpdateCollector",
  UpdateCollector$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCollectorInput;
      output: UpdateCollectorOutput;
    };
    sdk: {
      input: UpdateCollectorCommandInput;
      output: UpdateCollectorCommandOutput;
    };
  };
}
