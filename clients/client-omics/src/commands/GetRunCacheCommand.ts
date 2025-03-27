// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetRunCacheRequest, GetRunCacheResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { de_GetRunCacheCommand, se_GetRunCacheCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Retrieve the details for the specified run cache.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/omics/latest/dev/workflow-call-caching.html">Call caching for HealthOmics runs</a> in the AWS HealthOmics User Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, GetRunCacheCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, GetRunCacheCommand } = require("@aws-sdk/client-omics"); // CommonJS import
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
export class GetRunCacheCommand extends $Command
  .classBuilder<
    GetRunCacheCommandInput,
    GetRunCacheCommandOutput,
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
  .s("Omics", "GetRunCache", {})
  .n("OmicsClient", "GetRunCacheCommand")
  .f(void 0, void 0)
  .ser(se_GetRunCacheCommand)
  .de(de_GetRunCacheCommand)
  .build() {
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
