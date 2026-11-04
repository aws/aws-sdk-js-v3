// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteRevisionRequest } from "../models/models_0";
import { DeleteRevision$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteRevisionCommand}.
 */
export interface DeleteRevisionCommandInput extends DeleteRevisionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRevisionCommand}.
 */
export interface DeleteRevisionCommandOutput extends __MetadataBearer {}

/**
 * This operation deletes a revision.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, DeleteRevisionCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, DeleteRevisionCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * // import type { DataExchangeClientConfig } from "@aws-sdk/client-dataexchange";
 * const config = {}; // type is DataExchangeClientConfig
 * const client = new DataExchangeClient(config);
 * const input = { // DeleteRevisionRequest
 *   DataSetId: "STRING_VALUE", // required
 *   RevisionId: "STRING_VALUE", // required
 * };
 * const command = new DeleteRevisionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRevisionCommandInput - {@link DeleteRevisionCommandInput}
 * @returns {@link DeleteRevisionCommandOutput}
 * @see {@link DeleteRevisionCommandInput} for command's `input` shape.
 * @see {@link DeleteRevisionCommandOutput} for command's `response` shape.
 * @see {@link DataExchangeClientResolvedConfig | config} for DataExchangeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access to the resource is denied.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request couldn't be completed because it conflicted with the current state of the resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An exception occurred with the service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource couldn't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The limit on the number of requests per second was exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request was invalid.
 *
 * @throws {@link DataExchangeServiceException}
 *
 * Base exception class for all service exceptions from DataExchange service.
 *
 * @public
 */
export class DeleteRevisionCommand extends command<DeleteRevisionCommandInput, DeleteRevisionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteRevision",
  DeleteRevision$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRevisionRequest;
      output: {};
    };
    sdk: {
      input: DeleteRevisionCommandInput;
      output: DeleteRevisionCommandOutput;
    };
  };
}
