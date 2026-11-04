// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAccessGrantsInstanceRequest } from "../models/models_0";
import { DeleteAccessGrantsInstance$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAccessGrantsInstanceCommand}.
 */
export interface DeleteAccessGrantsInstanceCommandInput extends DeleteAccessGrantsInstanceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAccessGrantsInstanceCommand}.
 */
export interface DeleteAccessGrantsInstanceCommandOutput extends __MetadataBearer {}

/**
 * Deletes your S3 Access Grants instance. You must first delete the access grants and locations before S3 Access Grants can delete the instance. See [DeleteAccessGrant](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessGrant.html) and [DeleteAccessGrantsLocation](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessGrantsLocation.html). If you have associated an IAM Identity Center instance with your S3 Access Grants instance, you must first dissassociate the Identity Center instance from the S3 Access Grants instance before you can delete the S3 Access Grants instance. See [AssociateAccessGrantsIdentityCenter](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_AssociateAccessGrantsIdentityCenter.html) and [DissociateAccessGrantsIdentityCenter](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DissociateAccessGrantsIdentityCenter.html).
 *
 * - **Permissions**
 *
 *   You must have the `s3:DeleteAccessGrantsInstance` permission to use this operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, DeleteAccessGrantsInstanceCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, DeleteAccessGrantsInstanceCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // DeleteAccessGrantsInstanceRequest
 *   AccountId: "STRING_VALUE",
 * };
 * const command = new DeleteAccessGrantsInstanceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAccessGrantsInstanceCommandInput - {@link DeleteAccessGrantsInstanceCommandInput}
 * @returns {@link DeleteAccessGrantsInstanceCommandOutput}
 * @see {@link DeleteAccessGrantsInstanceCommandInput} for command's `input` shape.
 * @see {@link DeleteAccessGrantsInstanceCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 *
 * Base exception class for all service exceptions from S3Control service.
 *
 * @public
 */
export class DeleteAccessGrantsInstanceCommand extends command<DeleteAccessGrantsInstanceCommandInput, DeleteAccessGrantsInstanceCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAccessGrantsInstance",
  DeleteAccessGrantsInstance$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAccessGrantsInstanceRequest;
      output: {};
    };
    sdk: {
      input: DeleteAccessGrantsInstanceCommandInput;
      output: DeleteAccessGrantsInstanceCommandOutput;
    };
  };
}
