// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateRunCacheRequest, CreateRunCacheResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { de_CreateRunCacheCommand, se_CreateRunCacheCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates a run cache to store and reference task outputs from completed private runs. Specify an Amazon S3 location where Amazon Web Services HealthOmics saves the cached data. This data must be immediately accessible and not in an archived state. You can save intermediate task files to a run cache if they are declared as task outputs in the workflow definition file.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/omics/latest/dev/workflows-call-caching.html">Call caching</a> and <a href="https://docs.aws.amazon.com/omics/latest/dev/workflow-cache-create.html">Creating a run cache</a> in the <i>Amazon Web Services HealthOmics User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, CreateRunCacheCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, CreateRunCacheCommand } = require("@aws-sdk/client-omics"); // CommonJS import
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
export class CreateRunCacheCommand extends $Command
  .classBuilder<
    CreateRunCacheCommandInput,
    CreateRunCacheCommandOutput,
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
  .s("Omics", "CreateRunCache", {})
  .n("OmicsClient", "CreateRunCacheCommand")
  .f(void 0, void 0)
  .ser(se_CreateRunCacheCommand)
  .de(de_CreateRunCacheCommand)
  .build() {
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
