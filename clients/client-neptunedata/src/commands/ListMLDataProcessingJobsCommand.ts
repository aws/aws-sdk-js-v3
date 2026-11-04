// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListMLDataProcessingJobsInput, ListMLDataProcessingJobsOutput } from "../models/models_0";
import { ListMLDataProcessingJobs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListMLDataProcessingJobsCommand}.
 */
export interface ListMLDataProcessingJobsCommandInput extends ListMLDataProcessingJobsInput {}
/**
 * @public
 *
 * The output of {@link ListMLDataProcessingJobsCommand}.
 */
export interface ListMLDataProcessingJobsCommandOutput extends ListMLDataProcessingJobsOutput, __MetadataBearer {}

/**
 * Returns a list of Neptune ML data processing jobs. See [Listing active data-processing jobs using the Neptune ML dataprocessing command](https://docs.aws.amazon.com/neptune/latest/userguide/machine-learning-api-dataprocessing.html#machine-learning-api-dataprocessing-list-jobs).
 *
 * When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the [neptune-db:ListMLDataProcessingJobs](https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#listmldataprocessingjobs) IAM action in that cluster.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptunedataClient, ListMLDataProcessingJobsCommand } from "@aws-sdk/client-neptunedata"; // ES Modules import
 * // const { NeptunedataClient, ListMLDataProcessingJobsCommand } = require("@aws-sdk/client-neptunedata"); // CommonJS import
 * // import type { NeptunedataClientConfig } from "@aws-sdk/client-neptunedata";
 * const config = {}; // type is NeptunedataClientConfig
 * const client = new NeptunedataClient(config);
 * const input = { // ListMLDataProcessingJobsInput
 *   maxItems: Number("int"),
 *   neptuneIamRoleArn: "STRING_VALUE",
 * };
 * const command = new ListMLDataProcessingJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListMLDataProcessingJobsOutput
 * //   ids: [ // StringList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListMLDataProcessingJobsCommandInput - {@link ListMLDataProcessingJobsCommandInput}
 * @returns {@link ListMLDataProcessingJobsCommandOutput}
 * @see {@link ListMLDataProcessingJobsCommandInput} for command's `input` shape.
 * @see {@link ListMLDataProcessingJobsCommandOutput} for command's `response` shape.
 * @see {@link NeptunedataClientResolvedConfig | config} for NeptunedataClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * Raised when a request is submitted that cannot be processed.
 *
 * @throws {@link ClientTimeoutException} (client fault)
 *
 * Raised when a request timed out in the client.
 *
 * @throws {@link ConstraintViolationException} (client fault)
 *
 * Raised when a value in a request field did not satisfy required constraints.
 *
 * @throws {@link IllegalArgumentException} (client fault)
 *
 * Raised when an argument in a request is not supported.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *
 * Raised when an argument in a request has an invalid value.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * Raised when a parameter value is not valid.
 *
 * @throws {@link MissingParameterException} (client fault)
 *
 * Raised when a required parameter is missing.
 *
 * @throws {@link MLResourceNotFoundException} (client fault)
 *
 * Raised when a specified machine-learning resource could not be found.
 *
 * @throws {@link PreconditionsFailedException} (client fault)
 *
 * Raised when a precondition for processing a request is not satisfied.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * Raised when the number of requests being processed exceeds the limit.
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *
 * Raised when a request attempts to initiate an operation that is not supported.
 *
 * @throws {@link NeptunedataServiceException}
 *
 * Base exception class for all service exceptions from Neptunedata service.
 *
 * @public
 */
export class ListMLDataProcessingJobsCommand extends command<ListMLDataProcessingJobsCommandInput, ListMLDataProcessingJobsCommandOutput>(
  _ep0,
  _mw0,
  "ListMLDataProcessingJobs",
  ListMLDataProcessingJobs$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMLDataProcessingJobsInput;
      output: ListMLDataProcessingJobsOutput;
    };
    sdk: {
      input: ListMLDataProcessingJobsCommandInput;
      output: ListMLDataProcessingJobsCommandOutput;
    };
  };
}
