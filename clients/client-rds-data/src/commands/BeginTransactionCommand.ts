// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { BeginTransactionRequest, BeginTransactionResponse } from "../models/models_0";
import type { RDSDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSDataClient";
import { BeginTransaction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Starts a SQL transaction.</p>
 *          <note>
 *             <p>A transaction can run for a maximum of 24 hours. A transaction is terminated and rolled back automatically after 24
 *                 hours.</p>
 *             <p>A transaction times out if no calls use its transaction ID in three minutes. If a transaction times out before it's
 *                 committed, it's rolled back automatically.</p>
 *             <p>For Aurora MySQL, DDL statements inside a transaction cause an implicit commit. We recommend that you run each MySQL DDL statement in a separate
 *                     <code>ExecuteStatement</code> call with <code>continueAfterTimeout</code> enabled.</p>
 *          </note>
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
 * @throws {@link DatabaseResumingException} (client fault)
 *  <p>A request was cancelled because the Aurora Serverless v2 DB instance was paused.
 *          The Data API request automatically resumes the DB instance. Wait a few seconds and
 *          try again.</p>
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
export class BeginTransactionCommand extends $Command
  .classBuilder<
    BeginTransactionCommandInput,
    BeginTransactionCommandOutput,
    RDSDataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSDataClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RdsDataService", "BeginTransaction", {})
  .n("RDSDataClient", "BeginTransactionCommand")
  .sc(BeginTransaction$)
  .build() {
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
