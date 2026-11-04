// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateExperimentRequest, CreateExperimentResponse } from "../models/models_1";
import { CreateExperiment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateExperimentCommand}.
 */
export interface CreateExperimentCommandInput extends CreateExperimentRequest {}
/**
 * @public
 *
 * The output of {@link CreateExperimentCommand}.
 */
export interface CreateExperimentCommandOutput extends CreateExperimentResponse, __MetadataBearer {}

/**
 * Creates a SageMaker *experiment*. An experiment is a collection of *trials* that are observed, compared and evaluated as a group. A trial is a set of steps, called *trial components*, that produce a machine learning model.
 *
 * > **Note:** In the Studio UI, trials are referred to as *run groups* and trial components are referred to as *runs*.
 *
 * The goal of an experiment is to determine the components that produce the best model. Multiple trials are performed, each one isolating and measuring the impact of a change to one or more inputs, while keeping the remaining inputs constant.
 *
 * When you use SageMaker Studio or the SageMaker Python SDK, all experiments, trials, and trial components are automatically tracked, logged, and indexed. When you use the Amazon Web Services SDK for Python (Boto), you must use the logging APIs provided by the SDK.
 *
 * You can add tags to experiments, trials, trial components and then use the [Search](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_Search.html) API to search for the tags.
 *
 * To add a description to an experiment, specify the optional `Description` parameter. To add a description later, or to change the description, call the [UpdateExperiment](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_UpdateExperiment.html) API.
 *
 * To get a list of all your experiments, call the [ListExperiments](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListExperiments.html) API. To view an experiment's properties, call the [DescribeExperiment](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeExperiment.html) API. To get a list of all the trials associated with an experiment, call the [ListTrials](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListTrials.html) API. To create a trial call the [CreateTrial](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateTrial.html) API.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateExperimentCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateExperimentCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // CreateExperimentRequest
 *   ExperimentName: "STRING_VALUE", // required
 *   DisplayName: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateExperimentCommand(input);
 * const response = await client.send(command);
 * // { // CreateExperimentResponse
 * //   ExperimentArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateExperimentCommandInput - {@link CreateExperimentCommandInput}
 * @returns {@link CreateExperimentCommandOutput}
 * @see {@link CreateExperimentCommandInput} for command's `input` shape.
 * @see {@link CreateExperimentCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *
 * You have exceeded an SageMaker resource limit. For example, you might have too many training jobs created.
 *
 * @throws {@link SageMakerServiceException}
 *
 * Base exception class for all service exceptions from SageMaker service.
 *
 * @public
 */
export class CreateExperimentCommand extends command<CreateExperimentCommandInput, CreateExperimentCommandOutput>(
  _ep0,
  _mw0,
  "CreateExperiment",
  CreateExperiment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateExperimentRequest;
      output: CreateExperimentResponse;
    };
    sdk: {
      input: CreateExperimentCommandInput;
      output: CreateExperimentCommandOutput;
    };
  };
}
