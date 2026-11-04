// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateBatchPredictionJobRequest, CreateBatchPredictionJobResult } from "../models/models_0";
import { CreateBatchPredictionJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateBatchPredictionJobCommand}.
 */
export interface CreateBatchPredictionJobCommandInput extends CreateBatchPredictionJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateBatchPredictionJobCommand}.
 */
export interface CreateBatchPredictionJobCommandOutput extends CreateBatchPredictionJobResult, __MetadataBearer {}

/**
 * Creates a batch prediction job.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, CreateBatchPredictionJobCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, CreateBatchPredictionJobCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * // import type { FraudDetectorClientConfig } from "@aws-sdk/client-frauddetector";
 * const config = {}; // type is FraudDetectorClientConfig
 * const client = new FraudDetectorClient(config);
 * const input = { // CreateBatchPredictionJobRequest
 *   jobId: "STRING_VALUE", // required
 *   inputPath: "STRING_VALUE", // required
 *   outputPath: "STRING_VALUE", // required
 *   eventTypeName: "STRING_VALUE", // required
 *   detectorName: "STRING_VALUE", // required
 *   detectorVersion: "STRING_VALUE",
 *   iamRoleArn: "STRING_VALUE", // required
 *   tags: [ // tagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateBatchPredictionJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateBatchPredictionJobCommandInput - {@link CreateBatchPredictionJobCommandInput}
 * @returns {@link CreateBatchPredictionJobCommandOutput}
 * @see {@link CreateBatchPredictionJobCommandInput} for command's `input` shape.
 * @see {@link CreateBatchPredictionJobCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for FraudDetectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * An exception indicating Amazon Fraud Detector does not have the needed permissions. This can occur if you submit a request, such as `PutExternalModel`, that specifies a role that is not in your account.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An exception indicating an internal server error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * An exception indicating the specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * An exception indicating a throttling error.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * An exception indicating a specified value is not allowed.
 *
 * @throws {@link FraudDetectorServiceException}
 *
 * Base exception class for all service exceptions from FraudDetector service.
 *
 * @public
 */
export class CreateBatchPredictionJobCommand extends command<CreateBatchPredictionJobCommandInput, CreateBatchPredictionJobCommandOutput>(
  _ep0,
  _mw0,
  "CreateBatchPredictionJob",
  CreateBatchPredictionJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateBatchPredictionJobRequest;
      output: {};
    };
    sdk: {
      input: CreateBatchPredictionJobCommandInput;
      output: CreateBatchPredictionJobCommandOutput;
    };
  };
}
