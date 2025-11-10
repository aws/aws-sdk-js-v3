// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetTableRestoreStatusRequest, GetTableRestoreStatusResponse } from "../models/models_0";
import {
  RedshiftServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RedshiftServerlessClient";
import { GetTableRestoreStatus } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTableRestoreStatusCommand}.
 */
export interface GetTableRestoreStatusCommandInput extends GetTableRestoreStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetTableRestoreStatusCommand}.
 */
export interface GetTableRestoreStatusCommandOutput extends GetTableRestoreStatusResponse, __MetadataBearer {}

/**
 * <p>Returns information about a <code>TableRestoreStatus</code> object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, GetTableRestoreStatusCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, GetTableRestoreStatusCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * // import type { RedshiftServerlessClientConfig } from "@aws-sdk/client-redshift-serverless";
 * const config = {}; // type is RedshiftServerlessClientConfig
 * const client = new RedshiftServerlessClient(config);
 * const input = { // GetTableRestoreStatusRequest
 *   tableRestoreRequestId: "STRING_VALUE", // required
 * };
 * const command = new GetTableRestoreStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetTableRestoreStatusResponse
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
 * @param GetTableRestoreStatusCommandInput - {@link GetTableRestoreStatusCommandInput}
 * @returns {@link GetTableRestoreStatusCommandOutput}
 * @see {@link GetTableRestoreStatusCommandInput} for command's `input` shape.
 * @see {@link GetTableRestoreStatusCommandOutput} for command's `response` shape.
 * @see {@link RedshiftServerlessClientResolvedConfig | config} for RedshiftServerlessClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link RedshiftServerlessServiceException}
 * <p>Base exception class for all service exceptions from RedshiftServerless service.</p>
 *
 *
 * @public
 */
export class GetTableRestoreStatusCommand extends $Command
  .classBuilder<
    GetTableRestoreStatusCommandInput,
    GetTableRestoreStatusCommandOutput,
    RedshiftServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftServerlessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServerless", "GetTableRestoreStatus", {})
  .n("RedshiftServerlessClient", "GetTableRestoreStatusCommand")
  .sc(GetTableRestoreStatus)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTableRestoreStatusRequest;
      output: GetTableRestoreStatusResponse;
    };
    sdk: {
      input: GetTableRestoreStatusCommandInput;
      output: GetTableRestoreStatusCommandOutput;
    };
  };
}
