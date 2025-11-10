// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetLoaderJobStatusInput, GetLoaderJobStatusOutput } from "../models/models_0";
import { NeptunedataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptunedataClient";
import { GetLoaderJobStatus } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Gets status information about a specified load job. Neptune keeps track of the most recent 1,024 bulk load jobs, and stores the last 10,000 error details per job.</p> <p>See <a href="https://docs.aws.amazon.com/neptune/latest/userguide/load-api-reference-status.htm">Neptune Loader Get-Status API</a> for more information.</p> <p>When invoking this operation in a Neptune cluster that has IAM authentication enabled, the IAM user or role making the request must have a policy attached that allows the <a href="https://docs.aws.amazon.com/neptune/latest/userguide/iam-dp-actions.html#getloaderjobstatus">neptune-db:GetLoaderJobStatus</a> IAM action in that cluster..</p>
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
 *  <p>Raised when a request is submitted that cannot be processed.</p>
 *
 * @throws {@link BulkLoadIdNotFoundException} (client fault)
 *  <p>Raised when a specified bulk-load job ID cannot be found.</p>
 *
 * @throws {@link ClientTimeoutException} (client fault)
 *  <p>Raised when a request timed out in the client.</p>
 *
 * @throws {@link ConstraintViolationException} (client fault)
 *  <p>Raised when a value in a request field did not satisfy required constraints.</p>
 *
 * @throws {@link IllegalArgumentException} (client fault)
 *  <p>Raised when an argument in a request is not supported.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>Raised when the processing of the request failed unexpectedly.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>Raised when an argument in a request has an invalid value.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Raised when a parameter value is not valid.</p>
 *
 * @throws {@link LoadUrlAccessDeniedException} (client fault)
 *  <p>Raised when access is denied to a specified load URL.</p>
 *
 * @throws {@link MissingParameterException} (client fault)
 *  <p>Raised when a required parameter is missing.</p>
 *
 * @throws {@link PreconditionsFailedException} (client fault)
 *  <p>Raised when a precondition for processing a request is not satisfied.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Raised when the number of requests being processed exceeds the limit.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>Raised when a request attempts to initiate an operation that is not supported.</p>
 *
 * @throws {@link NeptunedataServiceException}
 * <p>Base exception class for all service exceptions from Neptunedata service.</p>
 *
 *
 * @public
 */
export class GetLoaderJobStatusCommand extends $Command
  .classBuilder<
    GetLoaderJobStatusCommandInput,
    GetLoaderJobStatusCommandOutput,
    NeptunedataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NeptunedataClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonNeptuneDataplane", "GetLoaderJobStatus", {})
  .n("NeptunedataClient", "GetLoaderJobStatusCommand")
  .sc(GetLoaderJobStatus)
  .build() {
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
