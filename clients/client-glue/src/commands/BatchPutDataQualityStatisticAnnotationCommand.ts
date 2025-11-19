// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import {
  BatchPutDataQualityStatisticAnnotationRequest,
  BatchPutDataQualityStatisticAnnotationResponse,
} from "../models/models_0";
import { BatchPutDataQualityStatisticAnnotation } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchPutDataQualityStatisticAnnotationCommand}.
 */
export interface BatchPutDataQualityStatisticAnnotationCommandInput
  extends BatchPutDataQualityStatisticAnnotationRequest {}
/**
 * @public
 *
 * The output of {@link BatchPutDataQualityStatisticAnnotationCommand}.
 */
export interface BatchPutDataQualityStatisticAnnotationCommandOutput
  extends BatchPutDataQualityStatisticAnnotationResponse,
    __MetadataBearer {}

/**
 * <p>Annotate datapoints over time for a specific data quality statistic.
 *         The API requires both profileID and statisticID as part of the InclusionAnnotation input.
 *         The API only works for a single statisticId across multiple profiles.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, BatchPutDataQualityStatisticAnnotationCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, BatchPutDataQualityStatisticAnnotationCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // BatchPutDataQualityStatisticAnnotationRequest
 *   InclusionAnnotations: [ // InclusionAnnotationList // required
 *     { // DatapointInclusionAnnotation
 *       ProfileId: "STRING_VALUE",
 *       StatisticId: "STRING_VALUE",
 *       InclusionAnnotation: "INCLUDE" || "EXCLUDE",
 *     },
 *   ],
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new BatchPutDataQualityStatisticAnnotationCommand(input);
 * const response = await client.send(command);
 * // { // BatchPutDataQualityStatisticAnnotationResponse
 * //   FailedInclusionAnnotations: [ // AnnotationErrorList
 * //     { // AnnotationError
 * //       ProfileId: "STRING_VALUE",
 * //       StatisticId: "STRING_VALUE",
 * //       FailureReason: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchPutDataQualityStatisticAnnotationCommandInput - {@link BatchPutDataQualityStatisticAnnotationCommandInput}
 * @returns {@link BatchPutDataQualityStatisticAnnotationCommandOutput}
 * @see {@link BatchPutDataQualityStatisticAnnotationCommandInput} for command's `input` shape.
 * @see {@link BatchPutDataQualityStatisticAnnotationCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *  <p>A resource numerical limit was exceeded.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class BatchPutDataQualityStatisticAnnotationCommand extends $Command
  .classBuilder<
    BatchPutDataQualityStatisticAnnotationCommandInput,
    BatchPutDataQualityStatisticAnnotationCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "BatchPutDataQualityStatisticAnnotation", {})
  .n("GlueClient", "BatchPutDataQualityStatisticAnnotationCommand")
  .sc(BatchPutDataQualityStatisticAnnotation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchPutDataQualityStatisticAnnotationRequest;
      output: BatchPutDataQualityStatisticAnnotationResponse;
    };
    sdk: {
      input: BatchPutDataQualityStatisticAnnotationCommandInput;
      output: BatchPutDataQualityStatisticAnnotationCommandOutput;
    };
  };
}
