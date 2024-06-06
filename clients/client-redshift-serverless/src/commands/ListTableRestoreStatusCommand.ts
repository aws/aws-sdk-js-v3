// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListTableRestoreStatusRequest, ListTableRestoreStatusResponse } from "../models/models_0";
import { de_ListTableRestoreStatusCommand, se_ListTableRestoreStatusCommand } from "../protocols/Aws_json1_1";
import {
  RedshiftServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RedshiftServerlessClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTableRestoreStatusCommand}.
 */
export interface ListTableRestoreStatusCommandInput extends ListTableRestoreStatusRequest {}
/**
 * @public
 *
 * The output of {@link ListTableRestoreStatusCommand}.
 */
export interface ListTableRestoreStatusCommandOutput extends ListTableRestoreStatusResponse, __MetadataBearer {}

/**
 * <p>Returns information about an array of <code>TableRestoreStatus</code> objects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, ListTableRestoreStatusCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, ListTableRestoreStatusCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * const client = new RedshiftServerlessClient(config);
 * const input = { // ListTableRestoreStatusRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   namespaceName: "STRING_VALUE",
 *   workgroupName: "STRING_VALUE",
 * };
 * const command = new ListTableRestoreStatusCommand(input);
 * const response = await client.send(command);
 * // { // ListTableRestoreStatusResponse
 * //   nextToken: "STRING_VALUE",
 * //   tableRestoreStatuses: [ // TableRestoreStatusList
 * //     { // TableRestoreStatus
 * //       tableRestoreRequestId: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       message: "STRING_VALUE",
 * //       requestTime: new Date("TIMESTAMP"),
 * //       namespaceName: "STRING_VALUE",
 * //       workgroupName: "STRING_VALUE",
 * //       snapshotName: "STRING_VALUE",
 * //       progressInMegaBytes: Number("long"),
 * //       totalDataInMegaBytes: Number("long"),
 * //       sourceDatabaseName: "STRING_VALUE",
 * //       sourceSchemaName: "STRING_VALUE",
 * //       sourceTableName: "STRING_VALUE",
 * //       targetDatabaseName: "STRING_VALUE",
 * //       targetSchemaName: "STRING_VALUE",
 * //       newTableName: "STRING_VALUE",
 * //       recoveryPointId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListTableRestoreStatusCommandInput - {@link ListTableRestoreStatusCommandInput}
 * @returns {@link ListTableRestoreStatusCommandOutput}
 * @see {@link ListTableRestoreStatusCommandInput} for command's `input` shape.
 * @see {@link ListTableRestoreStatusCommandOutput} for command's `response` shape.
 * @see {@link RedshiftServerlessClientResolvedConfig | config} for RedshiftServerlessClient's `config` shape.
 *
 * @throws {@link InvalidPaginationException} (client fault)
 *  <p>The provided pagination token is invalid.</p>
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
 * @public
 */
export class ListTableRestoreStatusCommand extends $Command
  .classBuilder<
    ListTableRestoreStatusCommandInput,
    ListTableRestoreStatusCommandOutput,
    RedshiftServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: RedshiftServerlessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RedshiftServerless", "ListTableRestoreStatus", {})
  .n("RedshiftServerlessClient", "ListTableRestoreStatusCommand")
  .f(void 0, void 0)
  .ser(se_ListTableRestoreStatusCommand)
  .de(de_ListTableRestoreStatusCommand)
  .build() {}
