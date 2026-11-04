// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetRunCacheRequest, GetRunCacheResponse } from "../models/models_0";
import { GetRunCache$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetRunCacheCommand}.
 */
export interface GetRunCacheCommandInput extends GetRunCacheRequest {}
/**
 * @public
 *
 * The output of {@link GetRunCacheCommand}.
 */
export interface GetRunCacheCommandOutput extends GetRunCacheResponse, __MetadataBearer {}

/**
 * Retrieves detailed information about the specified run cache using its ID.
 *
 * For more information, see [Call caching for Amazon Web Services HealthOmics runs](https://docs.aws.amazon.com/omics/latest/dev/workflows-call-caching.html) in the *Amazon Web Services HealthOmics User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, GetRunCacheCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, GetRunCacheCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // GetRunCacheRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GetRunCacheCommand(input);
 * const response = await client.send(command);
 * // { // GetRunCacheResponse
 * //   arn: "STRING_VALUE",
 * //   cacheBehavior: "STRING_VALUE",
 * //   cacheBucketOwnerId: "STRING_VALUE",
 * //   cacheS3Uri: "STRING_VALUE",
 * //   creationTime: new Date("TIMESTAMP"),
 * //   description: "STRING_VALUE",
 * //   id: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRunCacheCommandInput - {@link GetRunCacheCommandInput}
 * @returns {@link GetRunCacheCommandOutput}
 * @see {@link GetRunCacheCommandInput} for command's `input` shape.
 * @see {@link GetRunCacheCommandOutput} for command's `response` shape.
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
export class GetRunCacheCommand extends command<GetRunCacheCommandInput, GetRunCacheCommandOutput>(
  _ep0,
  _mw0,
  "GetRunCache",
  GetRunCache$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRunCacheRequest;
      output: GetRunCacheResponse;
    };
    sdk: {
      input: GetRunCacheCommandInput;
      output: GetRunCacheCommandOutput;
    };
  };
}
