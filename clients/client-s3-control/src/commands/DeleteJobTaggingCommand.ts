// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw1, command } from "../commandBuilder";
import type { DeleteJobTaggingRequest, DeleteJobTaggingResult } from "../models/models_0";
import { DeleteJobTagging$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteJobTaggingCommand}.
 */
export interface DeleteJobTaggingCommandInput extends DeleteJobTaggingRequest {}
/**
 * @public
 *
 * The output of {@link DeleteJobTaggingCommand}.
 */
export interface DeleteJobTaggingCommandOutput extends DeleteJobTaggingResult, __MetadataBearer {}

/**
 * Removes the entire tag set from the specified S3 Batch Operations job.
 *
 * - **Permissions**
 *
 *   To use the `DeleteJobTagging` operation, you must have permission to perform the `s3:DeleteJobTagging` action. For more information, see [Controlling access and labeling jobs using tags](https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-managing-jobs.html#batch-ops-job-tags) in the *Amazon S3 User Guide*.
 *
 * Related actions include:
 *
 * - [CreateJob](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateJob.html)
 * - [GetJobTagging](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetJobTagging.html)
 * - [PutJobTagging](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutJobTagging.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, DeleteJobTaggingCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, DeleteJobTaggingCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // DeleteJobTaggingRequest
 *   AccountId: "STRING_VALUE",
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new DeleteJobTaggingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteJobTaggingCommandInput - {@link DeleteJobTaggingCommandInput}
 * @returns {@link DeleteJobTaggingCommandOutput}
 * @see {@link DeleteJobTaggingCommandInput} for command's `input` shape.
 * @see {@link DeleteJobTaggingCommandOutput} for command's `response` shape.
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
export class DeleteJobTaggingCommand extends command<DeleteJobTaggingCommandInput, DeleteJobTaggingCommandOutput>(
  _ep0,
  _mw1,
  "DeleteJobTagging",
  DeleteJobTagging$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteJobTaggingRequest;
      output: {};
    };
    sdk: {
      input: DeleteJobTaggingCommandInput;
      output: DeleteJobTaggingCommandOutput;
    };
  };
}
