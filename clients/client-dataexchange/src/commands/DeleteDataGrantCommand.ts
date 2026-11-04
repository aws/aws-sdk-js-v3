// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteDataGrantRequest } from "../models/models_0";
import { DeleteDataGrant$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteDataGrantCommand}.
 */
export interface DeleteDataGrantCommandInput extends DeleteDataGrantRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDataGrantCommand}.
 */
export interface DeleteDataGrantCommandOutput extends __MetadataBearer {}

/**
 * This operation deletes a data grant.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, DeleteDataGrantCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, DeleteDataGrantCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * // import type { DataExchangeClientConfig } from "@aws-sdk/client-dataexchange";
 * const config = {}; // type is DataExchangeClientConfig
 * const client = new DataExchangeClient(config);
 * const input = { // DeleteDataGrantRequest
 *   DataGrantId: "STRING_VALUE", // required
 * };
 * const command = new DeleteDataGrantCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDataGrantCommandInput - {@link DeleteDataGrantCommandInput}
 * @returns {@link DeleteDataGrantCommandOutput}
 * @see {@link DeleteDataGrantCommandInput} for command's `input` shape.
 * @see {@link DeleteDataGrantCommandOutput} for command's `response` shape.
 * @see {@link DataExchangeClientResolvedConfig | config} for DataExchangeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access to the resource is denied.
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
export class DeleteDataGrantCommand extends command<DeleteDataGrantCommandInput, DeleteDataGrantCommandOutput>(
  _ep0,
  _mw0,
  "DeleteDataGrant",
  DeleteDataGrant$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDataGrantRequest;
      output: {};
    };
    sdk: {
      input: DeleteDataGrantCommandInput;
      output: DeleteDataGrantCommandOutput;
    };
  };
}
