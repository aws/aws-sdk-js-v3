// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateDataCatalogInput, CreateDataCatalogOutput } from "../models/models_0";
import { de_CreateDataCatalogCommand, se_CreateDataCatalogCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDataCatalogCommand}.
 */
export interface CreateDataCatalogCommandInput extends CreateDataCatalogInput {}
/**
 * @public
 *
 * The output of {@link CreateDataCatalogCommand}.
 */
export interface CreateDataCatalogCommandOutput extends CreateDataCatalogOutput, __MetadataBearer {}

/**
 * <p>Creates (registers) a data catalog with the specified name and properties. Catalogs
 *             created are visible to all users of the same Amazon Web Services account.</p>
 *          <p>For a <code>FEDERATED</code> catalog, this API operation creates the following
 *             resources.</p>
 *          <ul>
 *             <li>
 *                <p>CFN Stack Name with a maximum length of 128 characters and prefix
 *                         <code>athenafederatedcatalog-CATALOG_NAME_SANITIZED</code> with length 23
 *                     characters.</p>
 *             </li>
 *             <li>
 *                <p>Lambda Function Name with a maximum length of 64 characters and prefix
 *                         <code>athenafederatedcatalog_CATALOG_NAME_SANITIZED</code> with length 23
 *                     characters.</p>
 *             </li>
 *             <li>
 *                <p>Glue Connection Name with a maximum length of 255 characters and a prefix
 *                         <code>athenafederatedcatalog_CATALOG_NAME_SANITIZED</code> with length 23
 *                     characters.  </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, CreateDataCatalogCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, CreateDataCatalogCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * // import type { AthenaClientConfig } from "@aws-sdk/client-athena";
 * const config = {}; // type is AthenaClientConfig
 * const client = new AthenaClient(config);
 * const input = { // CreateDataCatalogInput
 *   Name: "STRING_VALUE", // required
 *   Type: "LAMBDA" || "GLUE" || "HIVE" || "FEDERATED", // required
 *   Description: "STRING_VALUE",
 *   Parameters: { // ParametersMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateDataCatalogCommand(input);
 * const response = await client.send(command);
 * // { // CreateDataCatalogOutput
 * //   DataCatalog: { // DataCatalog
 * //     Name: "STRING_VALUE", // required
 * //     Description: "STRING_VALUE",
 * //     Type: "LAMBDA" || "GLUE" || "HIVE" || "FEDERATED", // required
 * //     Parameters: { // ParametersMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     Status: "CREATE_IN_PROGRESS" || "CREATE_COMPLETE" || "CREATE_FAILED" || "CREATE_FAILED_CLEANUP_IN_PROGRESS" || "CREATE_FAILED_CLEANUP_COMPLETE" || "CREATE_FAILED_CLEANUP_FAILED" || "DELETE_IN_PROGRESS" || "DELETE_COMPLETE" || "DELETE_FAILED",
 * //     ConnectionType: "DYNAMODB" || "MYSQL" || "POSTGRESQL" || "REDSHIFT" || "ORACLE" || "SYNAPSE" || "SQLSERVER" || "DB2" || "OPENSEARCH" || "BIGQUERY" || "GOOGLECLOUDSTORAGE" || "HBASE" || "DOCUMENTDB" || "CMDB" || "TPCDS" || "TIMESTREAM" || "SAPHANA" || "SNOWFLAKE" || "DATALAKEGEN2" || "DB2AS400",
 * //     Error: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateDataCatalogCommandInput - {@link CreateDataCatalogCommandInput}
 * @returns {@link CreateDataCatalogCommandOutput}
 * @see {@link CreateDataCatalogCommandInput} for command's `input` shape.
 * @see {@link CreateDataCatalogCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 *
 * @public
 */
export class CreateDataCatalogCommand extends $Command
  .classBuilder<
    CreateDataCatalogCommandInput,
    CreateDataCatalogCommandOutput,
    AthenaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AthenaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonAthena", "CreateDataCatalog", {})
  .n("AthenaClient", "CreateDataCatalogCommand")
  .f(void 0, void 0)
  .ser(se_CreateDataCatalogCommand)
  .de(de_CreateDataCatalogCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDataCatalogInput;
      output: CreateDataCatalogOutput;
    };
    sdk: {
      input: CreateDataCatalogCommandInput;
      output: CreateDataCatalogCommandOutput;
    };
  };
}
