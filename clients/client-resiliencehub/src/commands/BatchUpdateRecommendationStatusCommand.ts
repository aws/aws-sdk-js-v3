// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { BatchUpdateRecommendationStatusRequest, BatchUpdateRecommendationStatusResponse } from "../models/models_0";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";
import { BatchUpdateRecommendationStatus } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchUpdateRecommendationStatusCommand}.
 */
export interface BatchUpdateRecommendationStatusCommandInput extends BatchUpdateRecommendationStatusRequest {}
/**
 * @public
 *
 * The output of {@link BatchUpdateRecommendationStatusCommand}.
 */
export interface BatchUpdateRecommendationStatusCommandOutput
  extends BatchUpdateRecommendationStatusResponse,
    __MetadataBearer {}

/**
 * <p>Enables you to include or exclude one or more operational recommendations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, BatchUpdateRecommendationStatusCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, BatchUpdateRecommendationStatusCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * // import type { ResiliencehubClientConfig } from "@aws-sdk/client-resiliencehub";
 * const config = {}; // type is ResiliencehubClientConfig
 * const client = new ResiliencehubClient(config);
 * const input = { // BatchUpdateRecommendationStatusRequest
 *   appArn: "STRING_VALUE", // required
 *   requestEntries: [ // UpdateRecommendationStatusRequestEntries // required
 *     { // UpdateRecommendationStatusRequestEntry
 *       entryId: "STRING_VALUE", // required
 *       referenceId: "STRING_VALUE", // required
 *       item: { // UpdateRecommendationStatusItem
 *         resourceId: "STRING_VALUE",
 *         targetAccountId: "STRING_VALUE",
 *         targetRegion: "STRING_VALUE",
 *       },
 *       excluded: true || false, // required
 *       appComponentId: "STRING_VALUE",
 *       excludeReason: "AlreadyImplemented" || "NotRelevant" || "ComplexityOfImplementation",
 *     },
 *   ],
 * };
 * const command = new BatchUpdateRecommendationStatusCommand(input);
 * const response = await client.send(command);
 * // { // BatchUpdateRecommendationStatusResponse
 * //   appArn: "STRING_VALUE", // required
 * //   successfulEntries: [ // BatchUpdateRecommendationStatusSuccessfulEntries // required
 * //     { // BatchUpdateRecommendationStatusSuccessfulEntry
 * //       entryId: "STRING_VALUE", // required
 * //       referenceId: "STRING_VALUE", // required
 * //       item: { // UpdateRecommendationStatusItem
 * //         resourceId: "STRING_VALUE",
 * //         targetAccountId: "STRING_VALUE",
 * //         targetRegion: "STRING_VALUE",
 * //       },
 * //       excluded: true || false, // required
 * //       appComponentId: "STRING_VALUE",
 * //       excludeReason: "AlreadyImplemented" || "NotRelevant" || "ComplexityOfImplementation",
 * //     },
 * //   ],
 * //   failedEntries: [ // BatchUpdateRecommendationStatusFailedEntries // required
 * //     { // BatchUpdateRecommendationStatusFailedEntry
 * //       entryId: "STRING_VALUE", // required
 * //       errorMessage: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchUpdateRecommendationStatusCommandInput - {@link BatchUpdateRecommendationStatusCommandInput}
 * @returns {@link BatchUpdateRecommendationStatusCommandOutput}
 * @see {@link BatchUpdateRecommendationStatusCommandInput} for command's `input` shape.
 * @see {@link BatchUpdateRecommendationStatusCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that is
 *       making the request must have at least one IAM permissions policy attached that grants the
 *       required permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Resilience Hub
 *       service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception occurs when the specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception occurs when you have exceeded the limit on the number of requests per second.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>This exception occurs when a request is not valid.</p>
 *
 * @throws {@link ResiliencehubServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehub service.</p>
 *
 *
 * @public
 */
export class BatchUpdateRecommendationStatusCommand extends $Command
  .classBuilder<
    BatchUpdateRecommendationStatusCommandInput,
    BatchUpdateRecommendationStatusCommandOutput,
    ResiliencehubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResiliencehubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsResilienceHub", "BatchUpdateRecommendationStatus", {})
  .n("ResiliencehubClient", "BatchUpdateRecommendationStatusCommand")
  .sc(BatchUpdateRecommendationStatus)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchUpdateRecommendationStatusRequest;
      output: BatchUpdateRecommendationStatusResponse;
    };
    sdk: {
      input: BatchUpdateRecommendationStatusCommandInput;
      output: BatchUpdateRecommendationStatusCommandOutput;
    };
  };
}
