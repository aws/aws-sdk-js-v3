// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BeginTransactionRequest, BeginTransactionResponse } from "../models/models_0";
import { BeginTransaction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BeginTransactionCommand}.
 */
export interface BeginTransactionCommandInput extends BeginTransactionRequest {}
/**
 * @public
 *
 * The output of {@link BeginTransactionCommand}.
 */
export interface BeginTransactionCommandOutput extends BeginTransactionResponse, __MetadataBearer {}

/**
 * Starts a SQL transaction.
 *
 * > **Note:**
 * >
 * > A transaction can run for a maximum of 24 hours. A transaction is terminated and rolled back automatically after 24 hours.
 * >
 * > A transaction times out if no calls use its transaction ID in three minutes. If a transaction times out before it's committed, it's rolled back automatically.
 * >
 * > For Aurora MySQL, DDL statements inside a transaction cause an implicit commit. We recommend that you run each MySQL DDL statement in a separate `ExecuteStatement` call with `continueAfterTimeout` enabled.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSDataClient, BeginTransactionCommand } from "@aws-sdk/client-rds-data"; // ES Modules import
 * // const { RDSDataClient, BeginTransactionCommand } = require("@aws-sdk/client-rds-data"); // CommonJS import
 * // import type { RDSDataClientConfig } from "@aws-sdk/client-rds-data";
 * const config = {}; // type is RDSDataClientConfig
 * const client = new RDSDataClient(config);
 * const input = { // BeginTransactionRequest
 *   resourceArn: "STRING_VALUE", // required
 *   secretArn: "STRING_VALUE", // required
 *   database: "STRING_VALUE",
 *   schema: "STRING_VALUE",
 * };
 * const command = new BeginTransactionCommand(input);
 * const response = await client.send(command);
 * // { // BeginTransactionResponse
 * //   transactionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param BeginTransactionCommandInput - {@link BeginTransactionCommandInput}
 * @returns {@link BeginTransactionCommandOutput}
 * @see {@link BeginTransactionCommandInput} for command's `input` shape.
 * @see {@link BeginTransactionCommandOutput} for command's `response` shape.
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
 * @throws {@link DatabaseResumingException} (client fault)
 *
 * A request was cancelled because the Aurora Serverless DB instance was paused. The Data API request automatically resumes the DB instance. Wait a few seconds and try again.
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
export class BeginTransactionCommand extends command<BeginTransactionCommandInput, BeginTransactionCommandOutput>(
  _ep0,
  _mw0,
  "BeginTransaction",
  BeginTransaction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BeginTransactionRequest;
      output: BeginTransactionResponse;
    };
    sdk: {
      input: BeginTransactionCommandInput;
      output: BeginTransactionCommandOutput;
    };
  };
}
