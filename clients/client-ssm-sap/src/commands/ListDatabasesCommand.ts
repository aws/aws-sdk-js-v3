// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListDatabasesInput, ListDatabasesOutput } from "../models/models_0";
import { ListDatabases$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDatabasesCommand}.
 */
export interface ListDatabasesCommandInput extends ListDatabasesInput {}
/**
 * @public
 *
 * The output of {@link ListDatabasesCommand}.
 */
export interface ListDatabasesCommandOutput extends ListDatabasesOutput, __MetadataBearer {}

/**
 * <p>Lists the SAP HANA databases of an application registered with AWS Systems Manager for SAP.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SsmSapClient, ListDatabasesCommand } from "@aws-sdk/client-ssm-sap"; // ES Modules import
 * // const { SsmSapClient, ListDatabasesCommand } = require("@aws-sdk/client-ssm-sap"); // CommonJS import
 * // import type { SsmSapClientConfig } from "@aws-sdk/client-ssm-sap";
 * const config = {}; // type is SsmSapClientConfig
 * const client = new SsmSapClient(config);
 * const input = { // ListDatabasesInput
 *   ApplicationId: "STRING_VALUE",
 *   ComponentId: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListDatabasesCommand(input);
 * const response = await client.send(command);
 * // { // ListDatabasesOutput
 * //   Databases: [ // DatabaseSummaryList
 * //     { // DatabaseSummary
 * //       ApplicationId: "STRING_VALUE",
 * //       ComponentId: "STRING_VALUE",
 * //       DatabaseId: "STRING_VALUE",
 * //       DatabaseType: "SYSTEM" || "TENANT",
 * //       Arn: "STRING_VALUE",
 * //       Tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDatabasesCommandInput - {@link ListDatabasesCommandInput}
 * @returns {@link ListDatabasesCommandOutput}
 * @see {@link ListDatabasesCommandInput} for command's `input` shape.
 * @see {@link ListDatabasesCommandOutput} for command's `response` shape.
 * @see {@link SsmSapClientResolvedConfig | config} for SsmSapClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource is not available.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service. </p>
 *
 * @throws {@link SsmSapServiceException}
 * <p>Base exception class for all service exceptions from SsmSap service.</p>
 *
 *
 * @public
 */
export class ListDatabasesCommand extends command<ListDatabasesCommandInput, ListDatabasesCommandOutput>(
  _ep0,
  _mw0,
  "ListDatabases",
  ListDatabases$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDatabasesInput;
      output: ListDatabasesOutput;
    };
    sdk: {
      input: ListDatabasesCommandInput;
      output: ListDatabasesCommandOutput;
    };
  };
}
