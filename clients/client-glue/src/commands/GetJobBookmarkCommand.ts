// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetJobBookmarkRequest, GetJobBookmarkResponse } from "../models/models_2";
import { GetJobBookmark$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetJobBookmarkCommand}.
 */
export interface GetJobBookmarkCommandInput extends GetJobBookmarkRequest {}
/**
 * @public
 *
 * The output of {@link GetJobBookmarkCommand}.
 */
export interface GetJobBookmarkCommandOutput extends GetJobBookmarkResponse, __MetadataBearer {}

/**
 * Returns information on a job bookmark entry.
 *
 * For more information about enabling and using job bookmarks, see:
 *
 * - [Tracking processed data using job bookmarks](https://docs.aws.amazon.com/glue/latest/dg/monitor-continuations.html)
 * - [Job parameters used by Glue](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html)
 * - [Job structure](https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html#aws-glue-api-jobs-job-Job)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetJobBookmarkCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetJobBookmarkCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // GetJobBookmarkRequest
 *   JobName: "STRING_VALUE", // required
 *   RunId: "STRING_VALUE",
 * };
 * const command = new GetJobBookmarkCommand(input);
 * const response = await client.send(command);
 * // { // GetJobBookmarkResponse
 * //   JobBookmarkEntry: { // JobBookmarkEntry
 * //     JobName: "STRING_VALUE",
 * //     Version: Number("int"),
 * //     Run: Number("int"),
 * //     Attempt: Number("int"),
 * //     PreviousRunId: "STRING_VALUE",
 * //     RunId: "STRING_VALUE",
 * //     JobBookmark: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetJobBookmarkCommandInput - {@link GetJobBookmarkCommandInput}
 * @returns {@link GetJobBookmarkCommandOutput}
 * @see {@link GetJobBookmarkCommandInput} for command's `input` shape.
 * @see {@link GetJobBookmarkCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *
 * A specified entity does not exist
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *
 * The operation timed out.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * A value could not be validated.
 *
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
 *
 * @public
 */
export class GetJobBookmarkCommand extends command<GetJobBookmarkCommandInput, GetJobBookmarkCommandOutput>(
  _ep0,
  _mw0,
  "GetJobBookmark",
  GetJobBookmark$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetJobBookmarkRequest;
      output: GetJobBookmarkResponse;
    };
    sdk: {
      input: GetJobBookmarkCommandInput;
      output: GetJobBookmarkCommandOutput;
    };
  };
}
