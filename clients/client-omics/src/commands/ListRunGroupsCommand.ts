// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListRunGroupsRequest, ListRunGroupsResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { ListRunGroups } from "../schemas/schemas_11_Run";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRunGroupsCommand}.
 */
export interface ListRunGroupsCommandInput extends ListRunGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListRunGroupsCommand}.
 */
export interface ListRunGroupsCommandOutput extends ListRunGroupsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of all run groups and returns the metadata for each run group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, ListRunGroupsCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, ListRunGroupsCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // ListRunGroupsRequest
 *   name: "STRING_VALUE",
 *   startingToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListRunGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListRunGroupsResponse
 * //   items: [ // RunGroupList
 * //     { // RunGroupListItem
 * //       arn: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       maxCpus: Number("int"),
 * //       maxRuns: Number("int"),
 * //       maxDuration: Number("int"),
 * //       creationTime: new Date("TIMESTAMP"),
 * //       maxGpus: Number("int"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRunGroupsCommandInput - {@link ListRunGroupsCommandInput}
 * @returns {@link ListRunGroupsCommandOutput}
 * @see {@link ListRunGroupsCommandInput} for command's `input` shape.
 * @see {@link ListRunGroupsCommandOutput} for command's `response` shape.
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
export class ListRunGroupsCommand extends $Command
  .classBuilder<
    ListRunGroupsCommandInput,
    ListRunGroupsCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Omics", "ListRunGroups", {})
  .n("OmicsClient", "ListRunGroupsCommand")
  .sc(ListRunGroups)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRunGroupsRequest;
      output: ListRunGroupsResponse;
    };
    sdk: {
      input: ListRunGroupsCommandInput;
      output: ListRunGroupsCommandOutput;
    };
  };
}
