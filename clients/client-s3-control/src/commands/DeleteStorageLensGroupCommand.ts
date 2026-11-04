// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw1, command } from "../commandBuilder";
import type { DeleteStorageLensGroupRequest } from "../models/models_0";
import { DeleteStorageLensGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteStorageLensGroupCommand}.
 */
export interface DeleteStorageLensGroupCommandInput extends DeleteStorageLensGroupRequest {}
/**
 * @public
 *
 * The output of {@link DeleteStorageLensGroupCommand}.
 */
export interface DeleteStorageLensGroupCommandOutput extends __MetadataBearer {}

/**
 * Deletes an existing S3 Storage Lens group.
 *
 * To use this operation, you must have the permission to perform the `s3:DeleteStorageLensGroup` action. For more information about the required Storage Lens Groups permissions, see [Setting account permissions to use S3 Storage Lens groups](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_iam_permissions.html#storage_lens_groups_permissions).
 *
 * For information about Storage Lens groups errors, see [List of Amazon S3 Storage Lens error codes](https://docs.aws.amazon.com/AmazonS3/latest/API/ErrorResponses.html#S3LensErrorCodeList).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, DeleteStorageLensGroupCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, DeleteStorageLensGroupCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // DeleteStorageLensGroupRequest
 *   Name: "STRING_VALUE", // required
 *   AccountId: "STRING_VALUE",
 * };
 * const command = new DeleteStorageLensGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteStorageLensGroupCommandInput - {@link DeleteStorageLensGroupCommandInput}
 * @returns {@link DeleteStorageLensGroupCommandOutput}
 * @see {@link DeleteStorageLensGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteStorageLensGroupCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 *
 * Base exception class for all service exceptions from S3Control service.
 *
 * @public
 */
export class DeleteStorageLensGroupCommand extends command<DeleteStorageLensGroupCommandInput, DeleteStorageLensGroupCommandOutput>(
  _ep0,
  _mw1,
  "DeleteStorageLensGroup",
  DeleteStorageLensGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteStorageLensGroupRequest;
      output: {};
    };
    sdk: {
      input: DeleteStorageLensGroupCommandInput;
      output: DeleteStorageLensGroupCommandOutput;
    };
  };
}
