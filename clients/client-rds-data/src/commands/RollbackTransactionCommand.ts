// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RollbackTransactionRequest, RollbackTransactionResponse } from "../models/models_0";
import { RollbackTransaction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RollbackTransactionCommand}.
 */
export interface RollbackTransactionCommandInput extends RollbackTransactionRequest {}
/**
 * @public
 *
 * The output of {@link RollbackTransactionCommand}.
 */
export interface RollbackTransactionCommandOutput extends RollbackTransactionResponse, __MetadataBearer {}

/**
 * Performs a rollback of a transaction. Rolling back a transaction cancels its changes.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSDataClient, RollbackTransactionCommand } from "@aws-sdk/client-rds-data"; // ES Modules import
 * // const { RDSDataClient, RollbackTransactionCommand } = require("@aws-sdk/client-rds-data"); // CommonJS import
 * // import type { RDSDataClientConfig } from "@aws-sdk/client-rds-data";
 * const config = {}; // type is RDSDataClientConfig
 * const client = new RDSDataClient(config);
 * const input = { // RollbackTransactionRequest
 *   resourceArn: "STRING_VALUE", // required
 *   secretArn: "STRING_VALUE", // required
 *   transactionId: "STRING_VALUE", // required
 * };
 * const command = new RollbackTransactionCommand(input);
 * const response = await client.send(command);
 * // { // RollbackTransactionResponse
 * //   transactionStatus: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RollbackTransactionCommandInput - {@link RollbackTransactionCommandInput}
 * @returns {@link RollbackTransactionCommandOutput}
 * @see {@link RollbackTransactionCommandInput} for command's `input` shape.
 * @see {@link RollbackTransactionCommandOutput} for command's `response` shape.
 * @see {@link RDSDataClientResolvedConfig | config} for RDSDataClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient access to perform this action.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * There is an error in the call or in a SQL statement. This exception is deprecated.
 *
 * @throws {@link DatabaseErrorException} (client fault)
 *
 * There was an error in processing the SQL statement.
 *
 * @throws {@link DatabaseNotFoundException} (client fault)
 *
 * The DB cluster doesn't have a DB instance.
 *
 * @throws {@link DatabaseUnavailableException} (server fault)
 *
 * The writer instance in the DB cluster isn't available.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * There are insufficient privileges to make the call.
 *
 * @throws {@link HttpEndpointNotEnabledException} (client fault)
 *
 * The HTTP endpoint for using RDS Data API isn't enabled for the DB cluster.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * An internal error occurred.
 *
 * @throws {@link InvalidResourceStateException} (client fault)
 *
 * The resource is in an invalid state.
 *
 * @throws {@link InvalidSecretException} (client fault)
 *
 * The Secrets Manager secret used with the request isn't valid.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The `resourceArn`, `secretArn`, or `transactionId` value can't be found.
 *
 * @throws {@link SecretsErrorException} (client fault)
 *
 * There was a problem with the Secrets Manager secret used with the request, caused by one of the following conditions:
 *
 * - RDS Data API timed out retrieving the secret.
 * - The secret provided wasn't found.
 * - The secret couldn't be decrypted.
 *
 * @throws {@link ServiceUnavailableError} (server fault)
 *
 * The service specified by the `resourceArn` parameter isn't available.
 *
 * @throws {@link StatementTimeoutException} (client fault)
 *
 * The execution of the SQL statement timed out.
 *
 * @throws {@link TransactionNotFoundException} (client fault)
 *
 * The transaction ID wasn't found.
 *
 * @throws {@link RDSDataServiceException}
 *
 * Base exception class for all service exceptions from RDSData service.
 *
 * @public
 */
export class RollbackTransactionCommand extends command<RollbackTransactionCommandInput, RollbackTransactionCommandOutput>(
  _ep0,
  _mw0,
  "RollbackTransaction",
  RollbackTransaction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RollbackTransactionRequest;
      output: RollbackTransactionResponse;
    };
    sdk: {
      input: RollbackTransactionCommandInput;
      output: RollbackTransactionCommandOutput;
    };
  };
}
