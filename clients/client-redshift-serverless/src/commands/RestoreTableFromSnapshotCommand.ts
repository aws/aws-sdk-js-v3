// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { RestoreTableFromSnapshotRequest, RestoreTableFromSnapshotResponse } from "../models/models_0";
import {
  RedshiftServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RedshiftServerlessClient";
import { RestoreTableFromSnapshot } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RestoreTableFromSnapshotCommand}.
 */
export interface RestoreTableFromSnapshotCommandInput extends RestoreTableFromSnapshotRequest {}
/**
 * @public
 *
 * The output of {@link RestoreTableFromSnapshotCommand}.
 */
export interface RestoreTableFromSnapshotCommandOutput extends RestoreTableFromSnapshotResponse, __MetadataBearer {}

/**
 * <p>Restores a table from a snapshot to your Amazon Redshift Serverless instance. You can't use this operation to restore tables with <a href="https://docs.aws.amazon.com/redshift/latest/dg/t_Sorting_data.html#t_Sorting_data-interleaved">interleaved sort keys</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, RestoreTableFromSnapshotCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, RestoreTableFromSnapshotCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * // import type { RedshiftServerlessClientConfig } from "@aws-sdk/client-redshift-serverless";
 * const config = {}; // type is RedshiftServerlessClientConfig
 * const client = new RedshiftServerlessClient(config);
 * const input = { // RestoreTableFromSnapshotRequest
 *   namespaceName: "STRING_VALUE", // required
 *   workgroupName: "STRING_VALUE", // required
 *   snapshotName: "STRING_VALUE", // required
 *   sourceDatabaseName: "STRING_VALUE", // required
 *   sourceSchemaName: "STRING_VALUE",
 *   sourceTableName: "STRING_VALUE", // required
 *   targetDatabaseName: "STRING_VALUE",
 *   targetSchemaName: "STRING_VALUE",
 *   newTableName: "STRING_VALUE", // required
 *   activateCaseSensitiveIdentifier: true || false,
 * };
 * const command = new RestoreTableFromSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // RestoreTableFromSnapshotResponse
 * //   tableRestoreStatus: { // TableRestoreStatus
 * //     tableRestoreRequestId: "STRING_VALUE",
 * //     status: "STRING_VALUE",
 * //     message: "STRING_VALUE",
 * //     requestTime: new Date("TIMESTAMP"),
 * //     namespaceName: "STRING_VALUE",
 * //     workgroupName: "STRING_VALUE",
 * //     snapshotName: "STRING_VALUE",
 * //     progressInMegaBytes: Number("long"),
 * //     totalDataInMegaBytes: Number("long"),
 * //     sourceDatabaseName: "STRING_VALUE",
 * //     sourceSchemaName: "STRING_VALUE",
 * //     sourceTableName: "STRING_VALUE",
 * //     targetDatabaseName: "STRING_VALUE",
 * //     targetSchemaName: "STRING_VALUE",
 * //     newTableName: "STRING_VALUE",
 * //     recoveryPointId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param RestoreTableFromSnapshotCommandInput - {@link RestoreTableFromSnapshotCommandInput}
 * @returns {@link RestoreTableFromSnapshotCommandOutput}
 * @see {@link RestoreTableFromSnapshotCommandInput} for command's `input` shape.
 * @see {@link RestoreTableFromSnapshotCommandOutput} for command's `response` shape.
 * @see {@link RedshiftServerlessClientResolvedConfig | config} for RedshiftServerlessClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The submitted action has conflicts.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link RedshiftServerlessServiceException}
 * <p>Base exception class for all service exceptions from RedshiftServerless service.</p>
 *
 *
 * @public
 */
export class RestoreTableFromSnapshotCommand extends $Command
  .classBuilder<
    RestoreTableFromSnapshotCommandInput,
    RestoreTableFromSnapshotCommandOutput,
    RedshiftServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftServerlessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServerless", "RestoreTableFromSnapshot", {})
  .n("RedshiftServerlessClient", "RestoreTableFromSnapshotCommand")
  .sc(RestoreTableFromSnapshot)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RestoreTableFromSnapshotRequest;
      output: RestoreTableFromSnapshotResponse;
    };
    sdk: {
      input: RestoreTableFromSnapshotCommandInput;
      output: RestoreTableFromSnapshotCommandOutput;
    };
  };
}
