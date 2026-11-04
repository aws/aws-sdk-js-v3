// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRunCachesRequest, ListRunCachesResponse } from "../models/models_0";
import { ListRunCaches$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListRunCachesCommand}.
 */
export interface ListRunCachesCommandInput extends ListRunCachesRequest {}
/**
 * @public
 *
 * The output of {@link ListRunCachesCommand}.
 */
export interface ListRunCachesCommandOutput extends ListRunCachesResponse, __MetadataBearer {}

/**
 * Retrieves a list of your run caches and the metadata for each cache.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, ListRunCachesCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, ListRunCachesCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // ListRunCachesRequest
 *   maxResults: Number("int"),
 *   startingToken: "STRING_VALUE",
 * };
 * const command = new ListRunCachesCommand(input);
 * const response = await client.send(command);
 * // { // ListRunCachesResponse
 * //   items: [ // RunCacheList
 * //     { // RunCacheListItem
 * //       arn: "STRING_VALUE",
 * //       cacheBehavior: "STRING_VALUE",
 * //       cacheS3Uri: "STRING_VALUE",
 * //       creationTime: new Date("TIMESTAMP"),
 * //       id: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRunCachesCommandInput - {@link ListRunCachesCommandInput}
 * @returns {@link ListRunCachesCommandOutput}
 * @see {@link ListRunCachesCommandInput} for command's `input` shape.
 * @see {@link ListRunCachesCommandOutput} for command's `response` shape.
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
export class ListRunCachesCommand extends command<ListRunCachesCommandInput, ListRunCachesCommandOutput>(
  _ep0,
  _mw0,
  "ListRunCaches",
  ListRunCaches$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRunCachesRequest;
      output: ListRunCachesResponse;
    };
    sdk: {
      input: ListRunCachesCommandInput;
      output: ListRunCachesCommandOutput;
    };
  };
}
