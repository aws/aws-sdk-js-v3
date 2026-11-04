// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw1, command } from "../commandBuilder";
import type { GetJobTaggingRequest, GetJobTaggingResult } from "../models/models_0";
import { GetJobTagging$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetJobTaggingCommand}.
 */
export interface GetJobTaggingCommandInput extends GetJobTaggingRequest {}
/**
 * @public
 *
 * The output of {@link GetJobTaggingCommand}.
 */
export interface GetJobTaggingCommandOutput extends GetJobTaggingResult, __MetadataBearer {}

/**
 * Returns the tags on an S3 Batch Operations job.
 *
 * - **Permissions**
 *
 *   To use the `GetJobTagging` operation, you must have permission to perform the `s3:GetJobTagging` action. For more information, see [Controlling access and labeling jobs using tags](https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-managing-jobs.html#batch-ops-job-tags) in the *Amazon S3 User Guide*.
 *
 * Related actions include:
 *
 * - [CreateJob](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateJob.html)
 * - [PutJobTagging](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutJobTagging.html)
 * - [DeleteJobTagging](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteJobTagging.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, GetJobTaggingCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, GetJobTaggingCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // GetJobTaggingRequest
 *   AccountId: "STRING_VALUE",
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new GetJobTaggingCommand(input);
 * const response = await client.send(command);
 * // { // GetJobTaggingResult
 * //   Tags: [ // S3TagSet
 * //     { // S3Tag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetJobTaggingCommandInput - {@link GetJobTaggingCommandInput}
 * @returns {@link GetJobTaggingCommandOutput}
 * @see {@link GetJobTaggingCommandInput} for command's `input` shape.
 * @see {@link GetJobTaggingCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * @throws {@link S3ControlServiceException}
 *
 * Base exception class for all service exceptions from S3Control service.
 *
 * @public
 */
export class GetJobTaggingCommand extends command<GetJobTaggingCommandInput, GetJobTaggingCommandOutput>(
  _ep0,
  _mw1,
  "GetJobTagging",
  GetJobTagging$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetJobTaggingRequest;
      output: GetJobTaggingResult;
    };
    sdk: {
      input: GetJobTaggingCommandInput;
      output: GetJobTaggingCommandOutput;
    };
  };
}
