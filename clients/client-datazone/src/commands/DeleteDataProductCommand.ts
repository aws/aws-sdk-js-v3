// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteDataProductInput, DeleteDataProductOutput } from "../models/models_1";
import { DeleteDataProduct$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteDataProductCommand}.
 */
export interface DeleteDataProductCommandInput extends DeleteDataProductInput {}
/**
 * @public
 *
 * The output of {@link DeleteDataProductCommand}.
 */
export interface DeleteDataProductCommandOutput extends DeleteDataProductOutput, __MetadataBearer {}

/**
 * Deletes a data product in Amazon DataZone.
 *
 * Prerequisites:
 *
 * - The data product must exist and not be deleted or archived.
 * - The user must have delete permissions for the data product.
 * - Domain and project must be active.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, DeleteDataProductCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, DeleteDataProductCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // DeleteDataProductInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteDataProductCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDataProductCommandInput - {@link DeleteDataProductCommandInput}
 * @returns {@link DeleteDataProductCommandOutput}
 * @see {@link DeleteDataProductCommandInput} for command's `input` shape.
 * @see {@link DeleteDataProductCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There is a conflict while performing this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource cannot be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the Amazon Web Services service.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You do not have permission to perform this action.
 *
 * @throws {@link DataZoneServiceException}
 *
 * Base exception class for all service exceptions from DataZone service.
 *
 * @public
 */
export class DeleteDataProductCommand extends command<DeleteDataProductCommandInput, DeleteDataProductCommandOutput>(
  _ep0,
  _mw0,
  "DeleteDataProduct",
  DeleteDataProduct$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDataProductInput;
      output: {};
    };
    sdk: {
      input: DeleteDataProductCommandInput;
      output: DeleteDataProductCommandOutput;
    };
  };
}
