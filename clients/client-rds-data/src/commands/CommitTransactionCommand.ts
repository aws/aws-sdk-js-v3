// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CommitTransactionRequest, CommitTransactionResponse } from "../models/models_0";
import { RDSDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSDataClient";
import { CommitTransaction } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CommitTransactionCommand}.
 */
export interface CommitTransactionCommandInput extends CommitTransactionRequest {}
/**
 * @public
 *
 * The output of {@link CommitTransactionCommand}.
 */
export interface CommitTransactionCommandOutput extends CommitTransactionResponse, __MetadataBearer {}

/**
 * <p>Ends a SQL transaction started with the <code>BeginTransaction</code> operation and
 *             commits the changes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSDataClient, CommitTransactionCommand } from "@aws-sdk/client-rds-data"; // ES Modules import
 * // const { RDSDataClient, CommitTransactionCommand } = require("@aws-sdk/client-rds-data"); // CommonJS import
 * // import type { RDSDataClientConfig } from "@aws-sdk/client-rds-data";
 * const config = {}; // type is RDSDataClientConfig
 * const client = new RDSDataClient(config);
 * const input = { // CommitTransactionRequest
 *   resourceArn: "STRING_VALUE", // required
 *   secretArn: "STRING_VALUE", // required
 *   transactionId: "STRING_VALUE", // required
 * };
 * const command = new CommitTransactionCommand(input);
 * const response = await client.send(command);
 * // { // CommitTransactionResponse
 * //   transactionStatus: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CommitTransactionCommandInput - {@link CommitTransactionCommandInput}
 * @returns {@link CommitTransactionCommandOutput}
 * @see {@link CommitTransactionCommandInput} for command's `input` shape.
 * @see {@link CommitTransactionCommandOutput} for command's `response` shape.
 * @see {@link RDSDataClientResolvedConfig | config} for RDSDataClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>There is an error in the call or in a SQL statement. (This error only appears in calls from Aurora Serverless v1 databases.)</p>
 *
 * @throws {@link DatabaseErrorException} (client fault)
 *  <p>There was an error in processing the SQL statement.</p>
 *
 * @throws {@link DatabaseNotFoundException} (client fault)
 *  <p>The DB cluster doesn't have a DB instance.</p>
 *
 * @throws {@link DatabaseUnavailableException} (server fault)
 *  <p>The writer instance in the DB cluster isn't available.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>There are insufficient privileges to make the call.</p>
 *
 * @throws {@link HttpEndpointNotEnabledException} (client fault)
 *  <p>The HTTP endpoint for using RDS Data API isn't enabled for the DB cluster.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link InvalidResourceStateException} (client fault)
 *  <p>The resource is in an invalid state.</p>
 *
 * @throws {@link InvalidSecretException} (client fault)
 *  <p>The Secrets Manager secret used with the request isn't valid.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The <code>resourceArn</code>, <code>secretArn</code>, or <code>transactionId</code> value can't be found.</p>
 *
 * @throws {@link SecretsErrorException} (client fault)
 *  <p>There was a problem with the Secrets Manager secret used with the request, caused by one of the following conditions:</p>
 *          <ul>
 *             <li>
 *                <p>RDS Data API timed out retrieving the secret.</p>
 *             </li>
 *             <li>
 *                <p>The secret provided wasn't found.</p>
 *             </li>
 *             <li>
 *                <p>The secret couldn't be decrypted.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link ServiceUnavailableError} (server fault)
 *  <p>The service specified by the <code>resourceArn</code> parameter isn't
 *             available.</p>
 *
 * @throws {@link StatementTimeoutException} (client fault)
 *  <p>The execution of the SQL statement timed out.</p>
 *
 * @throws {@link TransactionNotFoundException} (client fault)
 *  <p>The transaction ID wasn't found.</p>
 *
 * @throws {@link RDSDataServiceException}
 * <p>Base exception class for all service exceptions from RDSData service.</p>
 *
 *
 * @public
 */
export class CommitTransactionCommand extends $Command
  .classBuilder<
    CommitTransactionCommandInput,
    CommitTransactionCommandOutput,
    RDSDataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSDataClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RdsDataService", "CommitTransaction", {})
  .n("RDSDataClient", "CommitTransactionCommand")
  .sc(CommitTransaction)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CommitTransactionRequest;
      output: CommitTransactionResponse;
    };
    sdk: {
      input: CommitTransactionCommandInput;
      output: CommitTransactionCommandOutput;
    };
  };
}
