// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw1, command } from "../commandBuilder";
import type {
  DeleteStorageLensConfigurationTaggingRequest,
  DeleteStorageLensConfigurationTaggingResult,
} from "../models/models_0";
import { DeleteStorageLensConfigurationTagging$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteStorageLensConfigurationTaggingCommand}.
 */
export interface DeleteStorageLensConfigurationTaggingCommandInput extends DeleteStorageLensConfigurationTaggingRequest {}
/**
 * @public
 *
 * The output of {@link DeleteStorageLensConfigurationTaggingCommand}.
 */
export interface DeleteStorageLensConfigurationTaggingCommandOutput extends DeleteStorageLensConfigurationTaggingResult, __MetadataBearer {}

/**
 * > **Note:** This operation is not supported by directory buckets.
 *
 * Deletes the Amazon S3 Storage Lens configuration tags. For more information about S3 Storage Lens, see [Assessing your storage activity and usage with Amazon S3 Storage Lens](https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens.html) in the *Amazon S3 User Guide*.
 *
 * > **Note:** To use this action, you must have permission to perform the `s3:DeleteStorageLensConfigurationTagging` action. For more information, see [Setting permissions to use Amazon S3 Storage Lens](https://docs.aws.amazon.com/AmazonS3/latest/dev/storage_lens_iam_permissions.html) in the *Amazon S3 User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, DeleteStorageLensConfigurationTaggingCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, DeleteStorageLensConfigurationTaggingCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // DeleteStorageLensConfigurationTaggingRequest
 *   ConfigId: "STRING_VALUE", // required
 *   AccountId: "STRING_VALUE",
 * };
 * const command = new DeleteStorageLensConfigurationTaggingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteStorageLensConfigurationTaggingCommandInput - {@link DeleteStorageLensConfigurationTaggingCommandInput}
 * @returns {@link DeleteStorageLensConfigurationTaggingCommandOutput}
 * @see {@link DeleteStorageLensConfigurationTaggingCommandInput} for command's `input` shape.
 * @see {@link DeleteStorageLensConfigurationTaggingCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 *
 * Base exception class for all service exceptions from S3Control service.
 *
 * @public
 */
export class DeleteStorageLensConfigurationTaggingCommand extends command<DeleteStorageLensConfigurationTaggingCommandInput, DeleteStorageLensConfigurationTaggingCommandOutput>(
  _ep0,
  _mw1,
  "DeleteStorageLensConfigurationTagging",
  DeleteStorageLensConfigurationTagging$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteStorageLensConfigurationTaggingRequest;
      output: {};
    };
    sdk: {
      input: DeleteStorageLensConfigurationTaggingCommandInput;
      output: DeleteStorageLensConfigurationTaggingCommandOutput;
    };
  };
}
