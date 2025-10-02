// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListExecutorsRequest, ListExecutorsResponse } from "../models/models_0";
import { de_ListExecutorsCommand, se_ListExecutorsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListExecutorsCommand}.
 */
export interface ListExecutorsCommandInput extends ListExecutorsRequest {}
/**
 * @public
 *
 * The output of {@link ListExecutorsCommand}.
 */
export interface ListExecutorsCommandOutput extends ListExecutorsResponse, __MetadataBearer {}

/**
 * <p>Lists, in descending order, the executors that joined a session. Newer executors are
 *             listed first; older executors are listed later. The result can be optionally filtered by
 *             state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, ListExecutorsCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, ListExecutorsCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * // import type { AthenaClientConfig } from "@aws-sdk/client-athena";
 * const config = {}; // type is AthenaClientConfig
 * const client = new AthenaClient(config);
 * const input = { // ListExecutorsRequest
 *   SessionId: "STRING_VALUE", // required
 *   ExecutorStateFilter: "CREATING" || "CREATED" || "REGISTERED" || "TERMINATING" || "TERMINATED" || "FAILED",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListExecutorsCommand(input);
 * const response = await client.send(command);
 * // { // ListExecutorsResponse
 * //   SessionId: "STRING_VALUE", // required
 * //   NextToken: "STRING_VALUE",
 * //   ExecutorsSummary: [ // ExecutorsSummaryList
 * //     { // ExecutorsSummary
 * //       ExecutorId: "STRING_VALUE", // required
 * //       ExecutorType: "COORDINATOR" || "GATEWAY" || "WORKER",
 * //       StartDateTime: Number("long"),
 * //       TerminationDateTime: Number("long"),
 * //       ExecutorState: "CREATING" || "CREATED" || "REGISTERED" || "TERMINATING" || "TERMINATED" || "FAILED",
 * //       ExecutorSize: Number("long"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListExecutorsCommandInput - {@link ListExecutorsCommandInput}
 * @returns {@link ListExecutorsCommandOutput}
 * @see {@link ListExecutorsCommandInput} for command's `input` shape.
 * @see {@link ListExecutorsCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource, such as a workgroup, was not found.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 *
 * @public
 */
export class ListExecutorsCommand extends $Command
  .classBuilder<
    ListExecutorsCommandInput,
    ListExecutorsCommandOutput,
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
  .s("AmazonAthena", "ListExecutors", {})
  .n("AthenaClient", "ListExecutorsCommand")
  .f(void 0, void 0)
  .ser(se_ListExecutorsCommand)
  .de(de_ListExecutorsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListExecutorsRequest;
      output: ListExecutorsResponse;
    };
    sdk: {
      input: ListExecutorsCommandInput;
      output: ListExecutorsCommandOutput;
    };
  };
}
