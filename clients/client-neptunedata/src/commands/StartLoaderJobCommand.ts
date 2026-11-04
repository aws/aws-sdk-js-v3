// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartLoaderJobInput, StartLoaderJobOutput } from "../models/models_0";
import { StartLoaderJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartLoaderJobCommand}.
 */
export interface StartLoaderJobCommandInput extends StartLoaderJobInput {}
/**
 * @public
 *
 * The output of {@link StartLoaderJobCommand}.
 */
export interface StartLoaderJobCommandOutput extends StartLoaderJobOutput, __MetadataBearer {}

/**
 * Starts a Neptune bulk loader job to load data from an Amazon S3 bucket into a Neptune DB instance. See [Using the Amazon Neptune Bulk Loader to Ingest Data](https://docs.aws.amazon.com/neptune/latest/userguide/bulk-load.html).
 *
 * When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the [neptune-db:StartLoaderJob](https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#startloaderjob) IAM action in that cluster.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptunedataClient, StartLoaderJobCommand } from "@aws-sdk/client-neptunedata"; // ES Modules import
 * // const { NeptunedataClient, StartLoaderJobCommand } = require("@aws-sdk/client-neptunedata"); // CommonJS import
 * // import type { NeptunedataClientConfig } from "@aws-sdk/client-neptunedata";
 * const config = {}; // type is NeptunedataClientConfig
 * const client = new NeptunedataClient(config);
 * const input = { // StartLoaderJobInput
 *   source: "STRING_VALUE", // required
 *   format: "csv" || "opencypher" || "ntriples" || "nquads" || "rdfxml" || "turtle", // required
 *   s3BucketRegion: "us-east-1" || "us-east-2" || "us-west-1" || "us-west-2" || "ca-central-1" || "sa-east-1" || "eu-north-1" || "eu-west-1" || "eu-west-2" || "eu-west-3" || "eu-central-1" || "me-south-1" || "af-south-1" || "ap-east-1" || "ap-northeast-1" || "ap-northeast-2" || "ap-southeast-1" || "ap-southeast-2" || "ap-south-1" || "cn-north-1" || "cn-northwest-1" || "us-gov-west-1" || "us-gov-east-1" || "ca-west-1" || "eu-south-2" || "il-central-1" || "me-central-1" || "ap-northeast-3" || "ap-southeast-3" || "ap-southeast-4" || "ap-southeast-5" || "ap-southeast-7" || "mx-central-1" || "ap-east-2" || "ap-south-2" || "eu-central-2", // required
 *   iamRoleArn: "STRING_VALUE", // required
 *   mode: "RESUME" || "NEW" || "AUTO",
 *   failOnError: true || false,
 *   parallelism: "LOW" || "MEDIUM" || "HIGH" || "OVERSUBSCRIBE",
 *   parserConfiguration: { // StringValuedMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   updateSingleCardinalityProperties: true || false,
 *   queueRequest: true || false,
 *   dependencies: [ // StringList
 *     "STRING_VALUE",
 *   ],
 *   userProvidedEdgeIds: true || false,
 *   edgeOnlyLoad: true || false,
 * };
 * const command = new StartLoaderJobCommand(input);
 * const response = await client.send(command);
 * // { // StartLoaderJobOutput
 * //   status: "STRING_VALUE", // required
 * //   payload: { // StringValuedMap // required
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param StartLoaderJobCommandInput - {@link StartLoaderJobCommandInput}
 * @returns {@link StartLoaderJobCommandOutput}
 * @see {@link StartLoaderJobCommandInput} for command's `input` shape.
 * @see {@link StartLoaderJobCommandOutput} for command's `response` shape.
 * @see {@link NeptunedataClientResolvedConfig | config} for NeptunedataClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * Raised when a request is submitted that cannot be processed.
 *
 * @throws {@link BulkLoadIdNotFoundException} (client fault)
 *
 * Raised when a specified bulk-load job ID cannot be found.
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
 * @throws {@link InternalFailureException} (server fault)
 *
 * Raised when the processing of the request failed unexpectedly.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *
 * Raised when an argument in a request has an invalid value.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * Raised when a parameter value is not valid.
 *
 * @throws {@link LoadUrlAccessDeniedException} (client fault)
 *
 * Raised when access is denied to a specified load URL.
 *
 * @throws {@link MissingParameterException} (client fault)
 *
 * Raised when a required parameter is missing.
 *
 * @throws {@link PreconditionsFailedException} (client fault)
 *
 * Raised when a precondition for processing a request is not satisfied.
 *
 * @throws {@link S3Exception} (client fault)
 *
 * Raised when there is a problem accessing Amazon S3.
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
export class StartLoaderJobCommand extends command<StartLoaderJobCommandInput, StartLoaderJobCommandOutput>(
  _ep0,
  _mw0,
  "StartLoaderJob",
  StartLoaderJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartLoaderJobInput;
      output: StartLoaderJobOutput;
    };
    sdk: {
      input: StartLoaderJobCommandInput;
      output: StartLoaderJobCommandOutput;
    };
  };
}
