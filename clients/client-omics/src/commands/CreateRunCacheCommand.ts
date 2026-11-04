// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateRunCacheRequest, CreateRunCacheResponse } from "../models/models_0";
import { CreateRunCache$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateRunCacheCommand}.
 */
export interface CreateRunCacheCommandInput extends CreateRunCacheRequest {}
/**
 * @public
 *
 * The output of {@link CreateRunCacheCommand}.
 */
export interface CreateRunCacheCommandOutput extends CreateRunCacheResponse, __MetadataBearer {}

/**
 * Creates a run cache to store and reference task outputs from completed private runs. Specify an Amazon S3 location where Amazon Web Services HealthOmics saves the cached data. This data must be immediately accessible and not in an archived state. You can save intermediate task files to a run cache if they are declared as task outputs in the workflow definition file.
 *
 * For more information, see [Call caching](https://docs.aws.amazon.com/omics/latest/dev/workflows-call-caching.html) and [Creating a run cache](https://docs.aws.amazon.com/omics/latest/dev/workflow-cache-create.html) in the *Amazon Web Services HealthOmics User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, CreateRunCacheCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, CreateRunCacheCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // CreateRunCacheRequest
 *   cacheBehavior: "STRING_VALUE",
 *   cacheS3Location: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   name: "STRING_VALUE",
 *   requestId: "STRING_VALUE", // required
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   cacheBucketOwnerId: "STRING_VALUE",
 * };
 * const command = new CreateRunCacheCommand(input);
 * const response = await client.send(command);
 * // { // CreateRunCacheResponse
 * //   arn: "STRING_VALUE",
 * //   id: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateRunCacheCommandInput - {@link CreateRunCacheCommandInput}
 * @returns {@link CreateRunCacheCommandOutput}
 * @see {@link CreateRunCacheCommandInput} for command's `input` shape.
 * @see {@link CreateRunCacheCommandOutput} for command's `response` shape.
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
export class CreateRunCacheCommand extends command<CreateRunCacheCommandInput, CreateRunCacheCommandOutput>(
  _ep0,
  _mw0,
  "CreateRunCache",
  CreateRunCache$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRunCacheRequest;
      output: CreateRunCacheResponse;
    };
    sdk: {
      input: CreateRunCacheCommandInput;
      output: CreateRunCacheCommandOutput;
    };
  };
}
