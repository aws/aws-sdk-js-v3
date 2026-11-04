// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListOutpostsWithS3Request, ListOutpostsWithS3Result } from "../models/models_0";
import { ListOutpostsWithS3$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListOutpostsWithS3Command}.
 */
export interface ListOutpostsWithS3CommandInput extends ListOutpostsWithS3Request {}
/**
 * @public
 *
 * The output of {@link ListOutpostsWithS3Command}.
 */
export interface ListOutpostsWithS3CommandOutput extends ListOutpostsWithS3Result, __MetadataBearer {}

/**
 * Lists the Outposts with S3 on Outposts capacity for your Amazon Web Services account. Includes S3 on Outposts that you have access to as the Outposts owner, or as a shared user from Resource Access Manager (RAM).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3OutpostsClient, ListOutpostsWithS3Command } from "@aws-sdk/client-s3outposts"; // ES Modules import
 * // const { S3OutpostsClient, ListOutpostsWithS3Command } = require("@aws-sdk/client-s3outposts"); // CommonJS import
 * // import type { S3OutpostsClientConfig } from "@aws-sdk/client-s3outposts";
 * const config = {}; // type is S3OutpostsClientConfig
 * const client = new S3OutpostsClient(config);
 * const input = { // ListOutpostsWithS3Request
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListOutpostsWithS3Command(input);
 * const response = await client.send(command);
 * // { // ListOutpostsWithS3Result
 * //   Outposts: [ // Outposts
 * //     { // Outpost
 * //       OutpostArn: "STRING_VALUE",
 * //       S3OutpostArn: "STRING_VALUE",
 * //       OutpostId: "STRING_VALUE",
 * //       OwnerId: "STRING_VALUE",
 * //       CapacityInBytes: Number("long"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListOutpostsWithS3CommandInput - {@link ListOutpostsWithS3CommandInput}
 * @returns {@link ListOutpostsWithS3CommandOutput}
 * @see {@link ListOutpostsWithS3CommandInput} for command's `input` shape.
 * @see {@link ListOutpostsWithS3CommandOutput} for command's `response` shape.
 * @see {@link S3OutpostsClientResolvedConfig | config} for S3OutpostsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access was denied for this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There was an exception with the internal server.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * There was an exception validating this data.
 *
 * @throws {@link S3OutpostsServiceException}
 *
 * Base exception class for all service exceptions from S3Outposts service.
 *
 * @public
 */
export class ListOutpostsWithS3Command extends command<ListOutpostsWithS3CommandInput, ListOutpostsWithS3CommandOutput>(
  _ep0,
  _mw0,
  "ListOutpostsWithS3",
  ListOutpostsWithS3$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListOutpostsWithS3Request;
      output: ListOutpostsWithS3Result;
    };
    sdk: {
      input: ListOutpostsWithS3CommandInput;
      output: ListOutpostsWithS3CommandOutput;
    };
  };
}
