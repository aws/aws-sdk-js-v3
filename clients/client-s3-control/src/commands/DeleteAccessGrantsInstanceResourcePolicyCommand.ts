// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAccessGrantsInstanceResourcePolicyRequest } from "../models/models_0";
import { DeleteAccessGrantsInstanceResourcePolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAccessGrantsInstanceResourcePolicyCommand}.
 */
export interface DeleteAccessGrantsInstanceResourcePolicyCommandInput extends DeleteAccessGrantsInstanceResourcePolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAccessGrantsInstanceResourcePolicyCommand}.
 */
export interface DeleteAccessGrantsInstanceResourcePolicyCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the resource policy of the S3 Access Grants instance. The resource policy is used to manage cross-account access to your S3 Access Grants instance. By deleting the resource policy, you delete any cross-account permissions to your S3 Access Grants instance. </p>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <p>You must have the <code>s3:DeleteAccessGrantsInstanceResourcePolicy</code> permission to use this operation. </p>
 *             </dd>
 *          </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, DeleteAccessGrantsInstanceResourcePolicyCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, DeleteAccessGrantsInstanceResourcePolicyCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // DeleteAccessGrantsInstanceResourcePolicyRequest
 *   AccountId: "STRING_VALUE",
 * };
 * const command = new DeleteAccessGrantsInstanceResourcePolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAccessGrantsInstanceResourcePolicyCommandInput - {@link DeleteAccessGrantsInstanceResourcePolicyCommandInput}
 * @returns {@link DeleteAccessGrantsInstanceResourcePolicyCommandOutput}
 * @see {@link DeleteAccessGrantsInstanceResourcePolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteAccessGrantsInstanceResourcePolicyCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class DeleteAccessGrantsInstanceResourcePolicyCommand extends command<DeleteAccessGrantsInstanceResourcePolicyCommandInput, DeleteAccessGrantsInstanceResourcePolicyCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAccessGrantsInstanceResourcePolicy",
  DeleteAccessGrantsInstanceResourcePolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAccessGrantsInstanceResourcePolicyRequest;
      output: {};
    };
    sdk: {
      input: DeleteAccessGrantsInstanceResourcePolicyCommandInput;
      output: DeleteAccessGrantsInstanceResourcePolicyCommandOutput;
    };
  };
}
