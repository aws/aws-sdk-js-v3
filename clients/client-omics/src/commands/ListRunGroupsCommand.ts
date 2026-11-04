// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRunGroupsRequest, ListRunGroupsResponse } from "../models/models_0";
import { ListRunGroups$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves a list of all run groups and returns the metadata for each run group.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request cannot be applied to the target resource in its current state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred. Try the request again.
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *
 * The request timed out.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The target resource was not found in the current Region.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request exceeds a service quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link OmicsServiceException}
 *
 * Base exception class for all service exceptions from Omics service.
 *
 * @public
 */
export class ListRunGroupsCommand extends command<ListRunGroupsCommandInput, ListRunGroupsCommandOutput>(
  _ep0,
  _mw0,
  "ListRunGroups",
  ListRunGroups$
) {
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
