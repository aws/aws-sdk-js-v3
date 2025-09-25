// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteDataCatalogInput, DeleteDataCatalogOutput } from "../models/models_0";
import { DeleteDataCatalog } from "../schemas/schemas_7_Data";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDataCatalogCommand}.
 */
export interface DeleteDataCatalogCommandInput extends DeleteDataCatalogInput {}
/**
 * @public
 *
 * The output of {@link DeleteDataCatalogCommand}.
 */
export interface DeleteDataCatalogCommandOutput extends DeleteDataCatalogOutput, __MetadataBearer {}

/**
 * <p>Deletes a data catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, DeleteDataCatalogCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, DeleteDataCatalogCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * // import type { AthenaClientConfig } from "@aws-sdk/client-athena";
 * const config = {}; // type is AthenaClientConfig
 * const client = new AthenaClient(config);
 * const input = { // DeleteDataCatalogInput
 *   Name: "STRING_VALUE", // required
 *   DeleteCatalogOnly: true || false,
 * };
 * const command = new DeleteDataCatalogCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDataCatalogOutput
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
 * @param DeleteDataCatalogCommandInput - {@link DeleteDataCatalogCommandInput}
 * @returns {@link DeleteDataCatalogCommandOutput}
 * @see {@link DeleteDataCatalogCommandInput} for command's `input` shape.
 * @see {@link DeleteDataCatalogCommandOutput} for command's `response` shape.
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
export class DeleteDataCatalogCommand extends $Command
  .classBuilder<
    DeleteDataCatalogCommandInput,
    DeleteDataCatalogCommandOutput,
    AthenaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AthenaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonAthena", "DeleteDataCatalog", {})
  .n("AthenaClient", "DeleteDataCatalogCommand")
  .sc(DeleteDataCatalog)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDataCatalogInput;
      output: DeleteDataCatalogOutput;
    };
    sdk: {
      input: DeleteDataCatalogCommandInput;
      output: DeleteDataCatalogCommandOutput;
    };
  };
}
