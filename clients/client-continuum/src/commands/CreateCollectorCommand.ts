// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateCollectorInput, CreateCollectorOutput } from "../models/models_0";
import { CreateCollector$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateCollectorCommand}.
 */
export interface CreateCollectorCommandInput extends CreateCollectorInput {}
/**
 * @public
 *
 * The output of {@link CreateCollectorCommand}.
 */
export interface CreateCollectorCommandOutput extends CreateCollectorOutput, __MetadataBearer {}

/**
 * Creates the Collector for the caller's account. Provisions an AWS Config service-linked recorder using the caller's federated access session and begins recording infrastructure changes.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ContinuumClient, CreateCollectorCommand } from "@aws-sdk/client-continuum"; // ES Modules import
 * // const { ContinuumClient, CreateCollectorCommand } = require("@aws-sdk/client-continuum"); // CommonJS import
 * // import type { ContinuumClientConfig } from "@aws-sdk/client-continuum";
 * const config = {}; // type is ContinuumClientConfig
 * const client = new ContinuumClient(config);
 * const input = { // CreateCollectorInput
 *   type: "AWS_COLLECTOR",
 *   kubernetesClusterRole: { // KubernetesClusterRoleConfiguration
 *     roleArn: "STRING_VALUE", // required
 *     externalId: "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateCollectorCommand(input);
 * const response = await client.send(command);
 * // { // CreateCollectorOutput
 * //   collectorId: "STRING_VALUE", // required
 * //   collectorArn: "STRING_VALUE", // required
 * //   type: "AWS_COLLECTOR", // required
 * //   status: "ACTIVE" || "PENDING_DELETION", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreateCollectorCommandInput - {@link CreateCollectorCommandInput}
 * @returns {@link CreateCollectorCommandOutput}
 * @see {@link CreateCollectorCommandInput} for command's `input` shape.
 * @see {@link CreateCollectorCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  The request would exceed a service quota. Review your quota and request an increase if needed.
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
export class CreateCollectorCommand extends command<CreateCollectorCommandInput, CreateCollectorCommandOutput>(
  _ep0,
  _mw0,
  "CreateCollector",
  CreateCollector$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCollectorInput;
      output: CreateCollectorOutput;
    };
    sdk: {
      input: CreateCollectorCommandInput;
      output: CreateCollectorCommandOutput;
    };
  };
}
