// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteJobTaggingRequest, DeleteJobTaggingResult } from "../models/models_0";
import type { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { DeleteJobTagging$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Removes the entire tag set from the specified S3 Batch Operations job.</p>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <p>To use the
 *                   <code>DeleteJobTagging</code> operation, you must have permission to
 *                   perform the <code>s3:DeleteJobTagging</code> action. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/batch-ops-managing-jobs.html#batch-ops-job-tags">Controlling
 *                      access and labeling jobs using tags</a> in the
 *                   <i>Amazon S3 User Guide</i>.</p>
 *             </dd>
 *          </dl>
 *          <p>Related actions include:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateJob.html">CreateJob</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetJobTagging.html">GetJobTagging</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutJobTagging.html">PutJobTagging</a>
 *                </p>
 *             </li>
 *          </ul>
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
 *  <p></p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p></p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p></p>
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class DeleteJobTaggingCommand extends $Command
  .classBuilder<
    DeleteJobTaggingCommandInput,
    DeleteJobTaggingCommandOutput,
    S3ControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    RequiresAccountId: { type: "staticContextParams", value: true },
    AccountId: { type: "contextParams", name: "AccountId" },
  })
  .m(function (this: any, Command: any, cs: any, config: S3ControlClientResolvedConfig, o: any) {
    return [
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getProcessArnablesPlugin(config),
    ];
  })
  .s("AWSS3ControlServiceV20180820", "DeleteJobTagging", {})
  .n("S3ControlClient", "DeleteJobTaggingCommand")
  .sc(DeleteJobTagging$)
  .build() {
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
