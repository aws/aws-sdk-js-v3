// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { RestoreTableFromRecoveryPointRequest, RestoreTableFromRecoveryPointResponse } from "../models/models_0";
import type {
  RedshiftServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RedshiftServerlessClient";
import { RestoreTableFromRecoveryPoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RestoreTableFromRecoveryPointCommand}.
 */
export interface RestoreTableFromRecoveryPointCommandInput extends RestoreTableFromRecoveryPointRequest {}
/**
 * @public
 *
 * The output of {@link RestoreTableFromRecoveryPointCommand}.
 */
export interface RestoreTableFromRecoveryPointCommandOutput extends RestoreTableFromRecoveryPointResponse, __MetadataBearer {}

/**
 * <p>Restores a table from a recovery point to your Amazon Redshift Serverless instance. You can't use this operation to restore tables with interleaved sort keys.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, RestoreTableFromRecoveryPointCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, RestoreTableFromRecoveryPointCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * // import type { RedshiftServerlessClientConfig } from "@aws-sdk/client-redshift-serverless";
 * const config = {}; // type is RedshiftServerlessClientConfig
 * const client = new RedshiftServerlessClient(config);
 * const input = { // RestoreTableFromRecoveryPointRequest
 *   namespaceName: "STRING_VALUE", // required
 *   workgroupName: "STRING_VALUE", // required
 *   recoveryPointId: "STRING_VALUE", // required
 *   sourceDatabaseName: "STRING_VALUE", // required
 *   sourceSchemaName: "STRING_VALUE",
 *   sourceTableName: "STRING_VALUE", // required
 *   targetDatabaseName: "STRING_VALUE",
 *   targetSchemaName: "STRING_VALUE",
 *   newTableName: "STRING_VALUE", // required
 *   activateCaseSensitiveIdentifier: true || false,
 * };
 * const command = new RestoreTableFromRecoveryPointCommand(input);
 * const response = await client.send(command);
 * // { // RestoreTableFromRecoveryPointResponse
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
 * @param RestoreTableFromRecoveryPointCommandInput - {@link RestoreTableFromRecoveryPointCommandInput}
 * @returns {@link RestoreTableFromRecoveryPointCommandOutput}
 * @see {@link RestoreTableFromRecoveryPointCommandInput} for command's `input` shape.
 * @see {@link RestoreTableFromRecoveryPointCommandOutput} for command's `response` shape.
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
export class RestoreTableFromRecoveryPointCommand extends $Command
  .classBuilder<
    RestoreTableFromRecoveryPointCommandInput,
    RestoreTableFromRecoveryPointCommandOutput,
    RedshiftServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftServerlessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServerless", "RestoreTableFromRecoveryPoint", {})
  .n("RedshiftServerlessClient", "RestoreTableFromRecoveryPointCommand")
  .sc(RestoreTableFromRecoveryPoint$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RestoreTableFromRecoveryPointRequest;
      output: RestoreTableFromRecoveryPointResponse;
    };
    sdk: {
      input: RestoreTableFromRecoveryPointCommandInput;
      output: RestoreTableFromRecoveryPointCommandOutput;
    };
  };
}
