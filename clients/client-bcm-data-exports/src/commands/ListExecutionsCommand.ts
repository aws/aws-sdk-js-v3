// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  BCMDataExportsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BCMDataExportsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListExecutionsRequest, ListExecutionsResponse } from "../models/models_0";
import { ListExecutions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListExecutionsCommand}.
 */
export interface ListExecutionsCommandInput extends ListExecutionsRequest {}
/**
 * @public
 *
 * The output of {@link ListExecutionsCommand}.
 */
export interface ListExecutionsCommandOutput extends ListExecutionsResponse, __MetadataBearer {}

/**
 * <p>Lists the historical executions for the export.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMDataExportsClient, ListExecutionsCommand } from "@aws-sdk/client-bcm-data-exports"; // ES Modules import
 * // const { BCMDataExportsClient, ListExecutionsCommand } = require("@aws-sdk/client-bcm-data-exports"); // CommonJS import
 * // import type { BCMDataExportsClientConfig } from "@aws-sdk/client-bcm-data-exports";
 * const config = {}; // type is BCMDataExportsClientConfig
 * const client = new BCMDataExportsClient(config);
 * const input = { // ListExecutionsRequest
 *   ExportArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListExecutionsCommand(input);
 * const response = await client.send(command);
 * // { // ListExecutionsResponse
 * //   Executions: [ // ExecutionReferenceList
 * //     { // ExecutionReference
 * //       ExecutionId: "STRING_VALUE", // required
 * //       ExecutionStatus: { // ExecutionStatus
 * //         StatusCode: "INITIATION_IN_PROCESS" || "QUERY_QUEUED" || "QUERY_IN_PROCESS" || "QUERY_FAILURE" || "DELIVERY_IN_PROCESS" || "DELIVERY_SUCCESS" || "DELIVERY_FAILURE",
 * //         StatusReason: "INSUFFICIENT_PERMISSION" || "BILL_OWNER_CHANGED" || "INTERNAL_FAILURE",
 * //         CreatedAt: new Date("TIMESTAMP"),
 * //         CompletedAt: new Date("TIMESTAMP"),
 * //         LastUpdatedAt: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListExecutionsCommandInput - {@link ListExecutionsCommandInput}
 * @returns {@link ListExecutionsCommandOutput}
 * @see {@link ListExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListExecutionsCommandOutput} for command's `response` shape.
 * @see {@link BCMDataExportsClientResolvedConfig | config} for BCMDataExportsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An error on the server occurred during the processing of your request. Try again
 *       later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified Amazon Resource Name (ARN) in the request doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *       service.</p>
 *
 * @throws {@link BCMDataExportsServiceException}
 * <p>Base exception class for all service exceptions from BCMDataExports service.</p>
 *
 *
 * @public
 */
export class ListExecutionsCommand extends $Command
  .classBuilder<
    ListExecutionsCommandInput,
    ListExecutionsCommandOutput,
    BCMDataExportsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BCMDataExportsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBillingAndCostManagementDataExports", "ListExecutions", {})
  .n("BCMDataExportsClient", "ListExecutionsCommand")
  .sc(ListExecutions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListExecutionsRequest;
      output: ListExecutionsResponse;
    };
    sdk: {
      input: ListExecutionsCommandInput;
      output: ListExecutionsCommandOutput;
    };
  };
}
