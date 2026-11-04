// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDatabaseInput, GetDatabaseOutput } from "../models/models_0";
import { GetDatabase$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDatabaseCommand}.
 */
export interface GetDatabaseCommandInput extends GetDatabaseInput {}
/**
 * @public
 *
 * The output of {@link GetDatabaseCommand}.
 */
export interface GetDatabaseCommandOutput extends GetDatabaseOutput, __MetadataBearer {}

/**
 * Returns a database object for the specified database and data catalog.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, GetDatabaseCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, GetDatabaseCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * // import type { AthenaClientConfig } from "@aws-sdk/client-athena";
 * const config = {}; // type is AthenaClientConfig
 * const client = new AthenaClient(config);
 * const input = { // GetDatabaseInput
 *   CatalogName: "STRING_VALUE", // required
 *   DatabaseName: "STRING_VALUE", // required
 *   WorkGroup: "STRING_VALUE",
 * };
 * const command = new GetDatabaseCommand(input);
 * const response = await client.send(command);
 * // { // GetDatabaseOutput
 * //   Database: { // Database
 * //     Name: "STRING_VALUE", // required
 * //     Description: "STRING_VALUE",
 * //     Parameters: { // ParametersMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDatabaseCommandInput - {@link GetDatabaseCommandInput}
 * @returns {@link GetDatabaseCommandOutput}
 * @see {@link GetDatabaseCommandInput} for command's `input` shape.
 * @see {@link GetDatabaseCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Indicates a platform issue, which may be due to a transient condition or outage.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * Indicates that something is wrong with the input to the request. For example, a required parameter may be missing or out of range.
 *
 * @throws {@link MetadataException} (client fault)
 *
 * An exception that Athena received when it called a custom metastore. Occurs if the error is not caused by user input (`InvalidRequestException`) or from the Athena platform (`InternalServerException`). For example, if a user-created Lambda function is missing permissions, the Lambda `4XX` exception is returned in a `MetadataException`.
 *
 * @throws {@link AthenaServiceException}
 *
 * Base exception class for all service exceptions from Athena service.
 *
 * @public
 */
export class GetDatabaseCommand extends command<GetDatabaseCommandInput, GetDatabaseCommandOutput>(
  _ep0,
  _mw0,
  "GetDatabase",
  GetDatabase$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDatabaseInput;
      output: GetDatabaseOutput;
    };
    sdk: {
      input: GetDatabaseCommandInput;
      output: GetDatabaseCommandOutput;
    };
  };
}
