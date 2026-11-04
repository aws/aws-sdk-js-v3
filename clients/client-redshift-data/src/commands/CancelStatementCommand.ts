// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelStatementRequest, CancelStatementResponse } from "../models/models_0";
import { CancelStatement$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelStatementCommand}.
 */
export interface CancelStatementCommandInput extends CancelStatementRequest {}
/**
 * @public
 *
 * The output of {@link CancelStatementCommand}.
 */
export interface CancelStatementCommandOutput extends CancelStatementResponse, __MetadataBearer {}

/**
 * Cancels a running query. To be canceled, a query must be running.
 *
 * For more information about the Amazon Redshift Data API and CLI usage examples, see [Using the Amazon Redshift Data API](https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html) in the *Amazon Redshift Management Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftDataClient, CancelStatementCommand } from "@aws-sdk/client-redshift-data"; // ES Modules import
 * // const { RedshiftDataClient, CancelStatementCommand } = require("@aws-sdk/client-redshift-data"); // CommonJS import
 * // import type { RedshiftDataClientConfig } from "@aws-sdk/client-redshift-data";
 * const config = {}; // type is RedshiftDataClientConfig
 * const client = new RedshiftDataClient(config);
 * const input = { // CancelStatementRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new CancelStatementCommand(input);
 * const response = await client.send(command);
 * // { // CancelStatementResponse
 * //   Status: true || false,
 * // };
 *
 * ```
 *
 * @param CancelStatementCommandInput - {@link CancelStatementCommandInput}
 * @returns {@link CancelStatementCommandOutput}
 * @see {@link CancelStatementCommandInput} for command's `input` shape.
 * @see {@link CancelStatementCommandOutput} for command's `response` shape.
 * @see {@link RedshiftDataClientResolvedConfig | config} for RedshiftDataClient's `config` shape.
 *
 * @throws {@link DatabaseConnectionException} (server fault)
 *
 * Connection to a database failed.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The Amazon Redshift Data API operation failed due to invalid input.
 *
 * @throws {@link QueryTimeoutException} (client fault)
 *
 * The Amazon Redshift Data API operation failed due to timeout.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The Amazon Redshift Data API operation failed due to a missing resource.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The Amazon Redshift Data API operation failed due to invalid input.
 *
 * @throws {@link RedshiftDataServiceException}
 *
 * Base exception class for all service exceptions from RedshiftData service.
 *
 * @public
 */
export class CancelStatementCommand extends command<CancelStatementCommandInput, CancelStatementCommandOutput>(
  _ep0,
  _mw0,
  "CancelStatement",
  CancelStatement$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelStatementRequest;
      output: CancelStatementResponse;
    };
    sdk: {
      input: CancelStatementCommandInput;
      output: CancelStatementCommandOutput;
    };
  };
}
