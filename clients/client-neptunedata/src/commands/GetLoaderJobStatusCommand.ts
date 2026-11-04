// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetLoaderJobStatusInput, GetLoaderJobStatusOutput } from "../models/models_0";
import { GetLoaderJobStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetLoaderJobStatusCommand}.
 */
export interface GetLoaderJobStatusCommandInput extends GetLoaderJobStatusInput {}
/**
 * @public
 *
 * The output of {@link GetLoaderJobStatusCommand}.
 */
export interface GetLoaderJobStatusCommandOutput extends GetLoaderJobStatusOutput, __MetadataBearer {}

/**
 * Gets status information about a specified load job. Neptune keeps track of the most recent 1,024 bulk load jobs, and stores the last 10,000 error details per job.
 *
 * See [Neptune Loader Get-Status API](https://docs.aws.amazon.com/neptune/latest/userguide/load-api-reference-status.htm) for more information.
 *
 * When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the [neptune-db:GetLoaderJobStatus](https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#getloaderjobstatus) IAM action in that cluster..
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptunedataClient, GetLoaderJobStatusCommand } from "@aws-sdk/client-neptunedata"; // ES Modules import
 * // const { NeptunedataClient, GetLoaderJobStatusCommand } = require("@aws-sdk/client-neptunedata"); // CommonJS import
 * // import type { NeptunedataClientConfig } from "@aws-sdk/client-neptunedata";
 * const config = {}; // type is NeptunedataClientConfig
 * const client = new NeptunedataClient(config);
 * const input = { // GetLoaderJobStatusInput
 *   loadId: "STRING_VALUE", // required
 *   details: true || false,
 *   errors: true || false,
 *   page: Number("int"),
 *   errorsPerPage: Number("int"),
 * };
 * const command = new GetLoaderJobStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetLoaderJobStatusOutput
 * //   status: "STRING_VALUE", // required
 * //   payload: "DOCUMENT_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetLoaderJobStatusCommandInput - {@link GetLoaderJobStatusCommandInput}
 * @returns {@link GetLoaderJobStatusCommandOutput}
 * @see {@link GetLoaderJobStatusCommandInput} for command's `input` shape.
 * @see {@link GetLoaderJobStatusCommandOutput} for command's `response` shape.
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
export class GetLoaderJobStatusCommand extends command<GetLoaderJobStatusCommandInput, GetLoaderJobStatusCommandOutput>(
  _ep0,
  _mw0,
  "GetLoaderJobStatus",
  GetLoaderJobStatus$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLoaderJobStatusInput;
      output: GetLoaderJobStatusOutput;
    };
    sdk: {
      input: GetLoaderJobStatusCommandInput;
      output: GetLoaderJobStatusCommandOutput;
    };
  };
}
