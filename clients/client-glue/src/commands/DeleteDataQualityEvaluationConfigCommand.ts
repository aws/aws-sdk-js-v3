// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteDataQualityEvaluationConfigRequest,
  DeleteDataQualityEvaluationConfigResponse,
} from "../models/models_1";
import { DeleteDataQualityEvaluationConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteDataQualityEvaluationConfigCommand}.
 */
export interface DeleteDataQualityEvaluationConfigCommandInput extends DeleteDataQualityEvaluationConfigRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDataQualityEvaluationConfigCommand}.
 */
export interface DeleteDataQualityEvaluationConfigCommandOutput extends DeleteDataQualityEvaluationConfigResponse, __MetadataBearer {}

/**
 * <p>Deletes a data quality evaluation configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteDataQualityEvaluationConfigCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteDataQualityEvaluationConfigCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // DeleteDataQualityEvaluationConfigRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeleteDataQualityEvaluationConfigCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDataQualityEvaluationConfigCommandInput - {@link DeleteDataQualityEvaluationConfigCommandInput}
 * @returns {@link DeleteDataQualityEvaluationConfigCommandOutput}
 * @see {@link DeleteDataQualityEvaluationConfigCommandInput} for command's `input` shape.
 * @see {@link DeleteDataQualityEvaluationConfigCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class DeleteDataQualityEvaluationConfigCommand extends command<DeleteDataQualityEvaluationConfigCommandInput, DeleteDataQualityEvaluationConfigCommandOutput>(
  _ep0,
  _mw0,
  "DeleteDataQualityEvaluationConfig",
  DeleteDataQualityEvaluationConfig$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDataQualityEvaluationConfigRequest;
      output: {};
    };
    sdk: {
      input: DeleteDataQualityEvaluationConfigCommandInput;
      output: DeleteDataQualityEvaluationConfigCommandOutput;
    };
  };
}
