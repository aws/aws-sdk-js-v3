// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateAccessGrantsIdentityCenterRequest } from "../models/models_0";
import { AssociateAccessGrantsIdentityCenter$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateAccessGrantsIdentityCenterCommand}.
 */
export interface AssociateAccessGrantsIdentityCenterCommandInput extends AssociateAccessGrantsIdentityCenterRequest {}
/**
 * @public
 *
 * The output of {@link AssociateAccessGrantsIdentityCenterCommand}.
 */
export interface AssociateAccessGrantsIdentityCenterCommandOutput extends __MetadataBearer {}

/**
 * <p>Associate your S3 Access Grants instance with an Amazon Web Services IAM Identity Center instance. Use this action if you want to create access grants for users or groups from your corporate identity directory. First, you must add your corporate identity directory to Amazon Web Services IAM Identity Center. Then, you can associate this IAM Identity Center instance with your S3 Access Grants instance.</p>
 *          <dl>
 *             <dt>Permissions</dt>
 *             <dd>
 *                <p>You must have the <code>s3:AssociateAccessGrantsIdentityCenter</code> permission to use this operation. </p>
 *             </dd>
 *             <dt>Additional Permissions</dt>
 *             <dd>
 *                <p>You must also have the following permissions: <code>sso:CreateApplication</code>, <code>sso:PutApplicationGrant</code>, and <code>sso:PutApplicationAuthenticationMethod</code>. </p>
 *             </dd>
 *          </dl>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, AssociateAccessGrantsIdentityCenterCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, AssociateAccessGrantsIdentityCenterCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // AssociateAccessGrantsIdentityCenterRequest
 *   AccountId: "STRING_VALUE",
 *   IdentityCenterArn: "STRING_VALUE", // required
 * };
 * const command = new AssociateAccessGrantsIdentityCenterCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateAccessGrantsIdentityCenterCommandInput - {@link AssociateAccessGrantsIdentityCenterCommandInput}
 * @returns {@link AssociateAccessGrantsIdentityCenterCommandOutput}
 * @see {@link AssociateAccessGrantsIdentityCenterCommandInput} for command's `input` shape.
 * @see {@link AssociateAccessGrantsIdentityCenterCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class AssociateAccessGrantsIdentityCenterCommand extends command<AssociateAccessGrantsIdentityCenterCommandInput, AssociateAccessGrantsIdentityCenterCommandOutput>(
  _ep0,
  _mw0,
  "AssociateAccessGrantsIdentityCenter",
  AssociateAccessGrantsIdentityCenter$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateAccessGrantsIdentityCenterRequest;
      output: {};
    };
    sdk: {
      input: AssociateAccessGrantsIdentityCenterCommandInput;
      output: AssociateAccessGrantsIdentityCenterCommandOutput;
    };
  };
}
