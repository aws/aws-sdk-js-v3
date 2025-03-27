// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListReadSetActivationJobsRequest, ListReadSetActivationJobsResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { de_ListReadSetActivationJobsCommand, se_ListReadSetActivationJobsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListReadSetActivationJobsCommand}.
 */
export interface ListReadSetActivationJobsCommandInput extends ListReadSetActivationJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListReadSetActivationJobsCommand}.
 */
export interface ListReadSetActivationJobsCommandOutput extends ListReadSetActivationJobsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of read set activation jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, ListReadSetActivationJobsCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, ListReadSetActivationJobsCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * const client = new OmicsClient(config);
 * const input = { // ListReadSetActivationJobsRequest
 *   sequenceStoreId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   filter: { // ActivateReadSetFilter
 *     status: "STRING_VALUE",
 *     createdAfter: new Date("TIMESTAMP"),
 *     createdBefore: new Date("TIMESTAMP"),
 *   },
 * };
 * const command = new ListReadSetActivationJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListReadSetActivationJobsResponse
 * //   nextToken: "STRING_VALUE",
 * //   activationJobs: [ // ActivateReadSetJobList
 * //     { // ActivateReadSetJobItem
 * //       id: "STRING_VALUE", // required
 * //       sequenceStoreId: "STRING_VALUE", // required
 * //       status: "STRING_VALUE", // required
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //       completionTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListReadSetActivationJobsCommandInput - {@link ListReadSetActivationJobsCommandInput}
 * @returns {@link ListReadSetActivationJobsCommandOutput}
 * @see {@link ListReadSetActivationJobsCommandInput} for command's `input` shape.
 * @see {@link ListReadSetActivationJobsCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The target resource was not found in the current Region.</p>
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
export class ListReadSetActivationJobsCommand extends $Command
  .classBuilder<
    ListReadSetActivationJobsCommandInput,
    ListReadSetActivationJobsCommandOutput,
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
  .s("Omics", "ListReadSetActivationJobs", {})
  .n("OmicsClient", "ListReadSetActivationJobsCommand")
  .f(void 0, void 0)
  .ser(se_ListReadSetActivationJobsCommand)
  .de(de_ListReadSetActivationJobsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListReadSetActivationJobsRequest;
      output: ListReadSetActivationJobsResponse;
    };
    sdk: {
      input: ListReadSetActivationJobsCommandInput;
      output: ListReadSetActivationJobsCommandOutput;
    };
  };
}
