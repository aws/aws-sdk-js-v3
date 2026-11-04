// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAnomalyDetectorRequest } from "../models/models_0";
import { DeleteAnomalyDetector$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAnomalyDetectorCommand}.
 */
export interface DeleteAnomalyDetectorCommandInput extends DeleteAnomalyDetectorRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAnomalyDetectorCommand}.
 */
export interface DeleteAnomalyDetectorCommandOutput extends __MetadataBearer {}

/**
 * Removes an anomaly detector from a workspace. This operation is idempotent.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, DeleteAnomalyDetectorCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, DeleteAnomalyDetectorCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * // import type { AmpClientConfig } from "@aws-sdk/client-amp";
 * const config = {}; // type is AmpClientConfig
 * const client = new AmpClient(config);
 * const input = { // DeleteAnomalyDetectorRequest
 *   workspaceId: "STRING_VALUE", // required
 *   anomalyDetectorId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DeleteAnomalyDetectorCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAnomalyDetectorCommandInput - {@link DeleteAnomalyDetectorCommandInput}
 * @returns {@link DeleteAnomalyDetectorCommandOutput}
 * @see {@link DeleteAnomalyDetectorCommandInput} for command's `input` shape.
 * @see {@link DeleteAnomalyDetectorCommandOutput} for command's `response` shape.
 * @see {@link AmpClientResolvedConfig | config} for AmpClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request would cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred during the processing of the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request references a resources that doesn't exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link AmpServiceException}
 *
 * Base exception class for all service exceptions from Amp service.
 *
 * @public
 */
export class DeleteAnomalyDetectorCommand extends command<DeleteAnomalyDetectorCommandInput, DeleteAnomalyDetectorCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAnomalyDetector",
  DeleteAnomalyDetector$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAnomalyDetectorRequest;
      output: {};
    };
    sdk: {
      input: DeleteAnomalyDetectorCommandInput;
      output: DeleteAnomalyDetectorCommandOutput;
    };
  };
}
