// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListRunTasksRequest, ListRunTasksResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { de_ListRunTasksCommand, se_ListRunTasksCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRunTasksCommand}.
 */
export interface ListRunTasksCommandInput extends ListRunTasksRequest {}
/**
 * @public
 *
 * The output of {@link ListRunTasksCommand}.
 */
export interface ListRunTasksCommandOutput extends ListRunTasksResponse, __MetadataBearer {}

/**
 * <p>Returns a list of tasks and status information within their specified run. Use this operation to monitor runs and to identify which specific tasks have failed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, ListRunTasksCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, ListRunTasksCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * const client = new OmicsClient(config);
 * const input = { // ListRunTasksRequest
 *   id: "STRING_VALUE", // required
 *   status: "STRING_VALUE",
 *   startingToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListRunTasksCommand(input);
 * const response = await client.send(command);
 * // { // ListRunTasksResponse
 * //   items: [ // TaskList
 * //     { // TaskListItem
 * //       taskId: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       cpus: Number("int"),
 * //       cacheHit: true || false,
 * //       cacheS3Uri: "STRING_VALUE",
 * //       memory: Number("int"),
 * //       creationTime: new Date("TIMESTAMP"),
 * //       startTime: new Date("TIMESTAMP"),
 * //       stopTime: new Date("TIMESTAMP"),
 * //       gpus: Number("int"),
 * //       instanceType: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRunTasksCommandInput - {@link ListRunTasksCommandInput}
 * @returns {@link ListRunTasksCommandOutput}
 * @see {@link ListRunTasksCommandInput} for command's `input` shape.
 * @see {@link ListRunTasksCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request cannot be applied to the target resource in its current state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred. Try the request again.</p>
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *  <p>The request timed out.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The target resource was not found in the current Region.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeds a service quota.</p>
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
export class ListRunTasksCommand extends $Command
  .classBuilder<
    ListRunTasksCommandInput,
    ListRunTasksCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Omics", "ListRunTasks", {})
  .n("OmicsClient", "ListRunTasksCommand")
  .f(void 0, void 0)
  .ser(se_ListRunTasksCommand)
  .de(de_ListRunTasksCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRunTasksRequest;
      output: ListRunTasksResponse;
    };
    sdk: {
      input: ListRunTasksCommandInput;
      output: ListRunTasksCommandOutput;
    };
  };
}
