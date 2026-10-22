// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteCollectorInput } from "../models/models_0";
import { DeleteCollector$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteCollectorCommand}.
 */
export interface DeleteCollectorCommandInput extends DeleteCollectorInput {}
/**
 * @public
 *
 * The output of {@link DeleteCollectorCommand}.
 */
export interface DeleteCollectorCommandOutput extends __MetadataBearer {}

/**
 * Deletes the Collector for the caller's account. The Collector first enters PENDING_DELETION, then the service removes its schedule, AWS Config service-linked recorder, versioned S3 bucket, KMS key, and persisted record.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ContinuumClient, DeleteCollectorCommand } from "@aws-sdk/client-continuum"; // ES Modules import
 * // const { ContinuumClient, DeleteCollectorCommand } = require("@aws-sdk/client-continuum"); // CommonJS import
 * // import type { ContinuumClientConfig } from "@aws-sdk/client-continuum";
 * const config = {}; // type is ContinuumClientConfig
 * const client = new ContinuumClient(config);
 * const input = { // DeleteCollectorInput
 *   collectorId: "STRING_VALUE", // required
 * };
 * const command = new DeleteCollectorCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCollectorCommandInput - {@link DeleteCollectorCommandInput}
 * @returns {@link DeleteCollectorCommandOutput}
 * @see {@link DeleteCollectorCommandInput} for command's `input` shape.
 * @see {@link DeleteCollectorCommandOutput} for command's `response` shape.
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
export class DeleteCollectorCommand extends command<DeleteCollectorCommandInput, DeleteCollectorCommandOutput>(
  _ep0,
  _mw0,
  "DeleteCollector",
  DeleteCollector$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCollectorInput;
      output: {};
    };
    sdk: {
      input: DeleteCollectorCommandInput;
      output: DeleteCollectorCommandOutput;
    };
  };
}
