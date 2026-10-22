// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetCollectorInput, GetCollectorOutput } from "../models/models_0";
import { GetCollector$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetCollectorCommand}.
 */
export interface GetCollectorCommandInput extends GetCollectorInput {}
/**
 * @public
 *
 * The output of {@link GetCollectorCommand}.
 */
export interface GetCollectorCommandOutput extends GetCollectorOutput, __MetadataBearer {}

/**
 * Retrieves the current state of the Collector for the caller's account.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ContinuumClient, GetCollectorCommand } from "@aws-sdk/client-continuum"; // ES Modules import
 * // const { ContinuumClient, GetCollectorCommand } = require("@aws-sdk/client-continuum"); // CommonJS import
 * // import type { ContinuumClientConfig } from "@aws-sdk/client-continuum";
 * const config = {}; // type is ContinuumClientConfig
 * const client = new ContinuumClient(config);
 * const input = { // GetCollectorInput
 *   collectorId: "STRING_VALUE", // required
 * };
 * const command = new GetCollectorCommand(input);
 * const response = await client.send(command);
 * // { // GetCollectorOutput
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
 * @param GetCollectorCommandInput - {@link GetCollectorCommandInput}
 * @returns {@link GetCollectorCommandOutput}
 * @see {@link GetCollectorCommandInput} for command's `input` shape.
 * @see {@link GetCollectorCommandOutput} for command's `response` shape.
 * @see {@link ContinuumClientResolvedConfig | config} for ContinuumClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The request is not authorized. Verify that your credentials and request signature are valid and that you have permission to perform this action.
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
export class GetCollectorCommand extends command<GetCollectorCommandInput, GetCollectorCommandOutput>(
  _ep0,
  _mw0,
  "GetCollector",
  GetCollector$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCollectorInput;
      output: GetCollectorOutput;
    };
    sdk: {
      input: GetCollectorCommandInput;
      output: GetCollectorCommandOutput;
    };
  };
}
