// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListBatchRequest, ListBatchResponse } from "../models/models_0";
import type { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { ListBatch$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBatchCommand}.
 */
export interface ListBatchCommandInput extends ListBatchRequest {}
/**
 * @public
 *
 * The output of {@link ListBatchCommand}.
 */
export interface ListBatchCommandOutput extends ListBatchResponse, __MetadataBearer {}

/**
 * <p>Returns a list of run batches in your account, with optional filtering by status, name, or run group. Results are paginated. Only one filter per call is supported.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, ListBatchCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, ListBatchCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // ListBatchRequest
 *   maxItems: Number("int"),
 *   startingToken: "STRING_VALUE",
 *   status: "STRING_VALUE",
 *   name: "STRING_VALUE",
 *   runGroupId: "STRING_VALUE",
 * };
 * const command = new ListBatchCommand(input);
 * const response = await client.send(command);
 * // { // ListBatchResponse
 * //   items: [ // BatchList
 * //     { // BatchListItem
 * //       id: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       totalRuns: Number("int"),
 * //       workflowId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBatchCommandInput - {@link ListBatchCommandInput}
 * @returns {@link ListBatchCommandOutput}
 * @see {@link ListBatchCommandInput} for command's `input` shape.
 * @see {@link ListBatchCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred. Try the request again.</p>
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *  <p>The request timed out.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link OmicsServiceException}
 * <p>Base exception class for all service exceptions from Omics service.</p>
 *
 *
 * @public
 */
export class ListBatchCommand extends $Command
  .classBuilder<
    ListBatchCommandInput,
    ListBatchCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Omics", "ListBatch", {})
  .n("OmicsClient", "ListBatchCommand")
  .sc(ListBatch$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBatchRequest;
      output: ListBatchResponse;
    };
    sdk: {
      input: ListBatchCommandInput;
      output: ListBatchCommandOutput;
    };
  };
}
