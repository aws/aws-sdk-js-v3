// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  AttachCustomerManagedPolicyReferenceToPermissionSetCommand,
  AttachCustomerManagedPolicyReferenceToPermissionSetCommandInput,
  AttachCustomerManagedPolicyReferenceToPermissionSetCommandOutput,
} from "./commands/AttachCustomerManagedPolicyReferenceToPermissionSetCommand";
import {
  AttachManagedPolicyToPermissionSetCommand,
  AttachManagedPolicyToPermissionSetCommandInput,
  AttachManagedPolicyToPermissionSetCommandOutput,
} from "./commands/AttachManagedPolicyToPermissionSetCommand";
import {
  CreateAccountAssignmentCommand,
  CreateAccountAssignmentCommandInput,
  CreateAccountAssignmentCommandOutput,
} from "./commands/CreateAccountAssignmentCommand";
import {
  CreateInstanceAccessControlAttributeConfigurationCommand,
  CreateInstanceAccessControlAttributeConfigurationCommandInput,
  CreateInstanceAccessControlAttributeConfigurationCommandOutput,
} from "./commands/CreateInstanceAccessControlAttributeConfigurationCommand";
import {
  CreatePermissionSetCommand,
  CreatePermissionSetCommandInput,
  CreatePermissionSetCommandOutput,
} from "./commands/CreatePermissionSetCommand";
import {
  DeleteAccountAssignmentCommand,
  DeleteAccountAssignmentCommandInput,
  DeleteAccountAssignmentCommandOutput,
} from "./commands/DeleteAccountAssignmentCommand";
import {
  DeleteInlinePolicyFromPermissionSetCommand,
  DeleteInlinePolicyFromPermissionSetCommandInput,
  DeleteInlinePolicyFromPermissionSetCommandOutput,
} from "./commands/DeleteInlinePolicyFromPermissionSetCommand";
import {
  DeleteInstanceAccessControlAttributeConfigurationCommand,
  DeleteInstanceAccessControlAttributeConfigurationCommandInput,
  DeleteInstanceAccessControlAttributeConfigurationCommandOutput,
} from "./commands/DeleteInstanceAccessControlAttributeConfigurationCommand";
import {
  DeletePermissionsBoundaryFromPermissionSetCommand,
  DeletePermissionsBoundaryFromPermissionSetCommandInput,
  DeletePermissionsBoundaryFromPermissionSetCommandOutput,
} from "./commands/DeletePermissionsBoundaryFromPermissionSetCommand";
import {
  DeletePermissionSetCommand,
  DeletePermissionSetCommandInput,
  DeletePermissionSetCommandOutput,
} from "./commands/DeletePermissionSetCommand";
import {
  DescribeAccountAssignmentCreationStatusCommand,
  DescribeAccountAssignmentCreationStatusCommandInput,
  DescribeAccountAssignmentCreationStatusCommandOutput,
} from "./commands/DescribeAccountAssignmentCreationStatusCommand";
import {
  DescribeAccountAssignmentDeletionStatusCommand,
  DescribeAccountAssignmentDeletionStatusCommandInput,
  DescribeAccountAssignmentDeletionStatusCommandOutput,
} from "./commands/DescribeAccountAssignmentDeletionStatusCommand";
import {
  DescribeInstanceAccessControlAttributeConfigurationCommand,
  DescribeInstanceAccessControlAttributeConfigurationCommandInput,
  DescribeInstanceAccessControlAttributeConfigurationCommandOutput,
} from "./commands/DescribeInstanceAccessControlAttributeConfigurationCommand";
import {
  DescribePermissionSetCommand,
  DescribePermissionSetCommandInput,
  DescribePermissionSetCommandOutput,
} from "./commands/DescribePermissionSetCommand";
import {
  DescribePermissionSetProvisioningStatusCommand,
  DescribePermissionSetProvisioningStatusCommandInput,
  DescribePermissionSetProvisioningStatusCommandOutput,
} from "./commands/DescribePermissionSetProvisioningStatusCommand";
import {
  DetachCustomerManagedPolicyReferenceFromPermissionSetCommand,
  DetachCustomerManagedPolicyReferenceFromPermissionSetCommandInput,
  DetachCustomerManagedPolicyReferenceFromPermissionSetCommandOutput,
} from "./commands/DetachCustomerManagedPolicyReferenceFromPermissionSetCommand";
import {
  DetachManagedPolicyFromPermissionSetCommand,
  DetachManagedPolicyFromPermissionSetCommandInput,
  DetachManagedPolicyFromPermissionSetCommandOutput,
} from "./commands/DetachManagedPolicyFromPermissionSetCommand";
import {
  GetInlinePolicyForPermissionSetCommand,
  GetInlinePolicyForPermissionSetCommandInput,
  GetInlinePolicyForPermissionSetCommandOutput,
} from "./commands/GetInlinePolicyForPermissionSetCommand";
import {
  GetPermissionsBoundaryForPermissionSetCommand,
  GetPermissionsBoundaryForPermissionSetCommandInput,
  GetPermissionsBoundaryForPermissionSetCommandOutput,
} from "./commands/GetPermissionsBoundaryForPermissionSetCommand";
import {
  ListAccountAssignmentCreationStatusCommand,
  ListAccountAssignmentCreationStatusCommandInput,
  ListAccountAssignmentCreationStatusCommandOutput,
} from "./commands/ListAccountAssignmentCreationStatusCommand";
import {
  ListAccountAssignmentDeletionStatusCommand,
  ListAccountAssignmentDeletionStatusCommandInput,
  ListAccountAssignmentDeletionStatusCommandOutput,
} from "./commands/ListAccountAssignmentDeletionStatusCommand";
import {
  ListAccountAssignmentsCommand,
  ListAccountAssignmentsCommandInput,
  ListAccountAssignmentsCommandOutput,
} from "./commands/ListAccountAssignmentsCommand";
import {
  ListAccountsForProvisionedPermissionSetCommand,
  ListAccountsForProvisionedPermissionSetCommandInput,
  ListAccountsForProvisionedPermissionSetCommandOutput,
} from "./commands/ListAccountsForProvisionedPermissionSetCommand";
import {
  ListCustomerManagedPolicyReferencesInPermissionSetCommand,
  ListCustomerManagedPolicyReferencesInPermissionSetCommandInput,
  ListCustomerManagedPolicyReferencesInPermissionSetCommandOutput,
} from "./commands/ListCustomerManagedPolicyReferencesInPermissionSetCommand";
import {
  ListInstancesCommand,
  ListInstancesCommandInput,
  ListInstancesCommandOutput,
} from "./commands/ListInstancesCommand";
import {
  ListManagedPoliciesInPermissionSetCommand,
  ListManagedPoliciesInPermissionSetCommandInput,
  ListManagedPoliciesInPermissionSetCommandOutput,
} from "./commands/ListManagedPoliciesInPermissionSetCommand";
import {
  ListPermissionSetProvisioningStatusCommand,
  ListPermissionSetProvisioningStatusCommandInput,
  ListPermissionSetProvisioningStatusCommandOutput,
} from "./commands/ListPermissionSetProvisioningStatusCommand";
import {
  ListPermissionSetsCommand,
  ListPermissionSetsCommandInput,
  ListPermissionSetsCommandOutput,
} from "./commands/ListPermissionSetsCommand";
import {
  ListPermissionSetsProvisionedToAccountCommand,
  ListPermissionSetsProvisionedToAccountCommandInput,
  ListPermissionSetsProvisionedToAccountCommandOutput,
} from "./commands/ListPermissionSetsProvisionedToAccountCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ProvisionPermissionSetCommand,
  ProvisionPermissionSetCommandInput,
  ProvisionPermissionSetCommandOutput,
} from "./commands/ProvisionPermissionSetCommand";
import {
  PutInlinePolicyToPermissionSetCommand,
  PutInlinePolicyToPermissionSetCommandInput,
  PutInlinePolicyToPermissionSetCommandOutput,
} from "./commands/PutInlinePolicyToPermissionSetCommand";
import {
  PutPermissionsBoundaryToPermissionSetCommand,
  PutPermissionsBoundaryToPermissionSetCommandInput,
  PutPermissionsBoundaryToPermissionSetCommandOutput,
} from "./commands/PutPermissionsBoundaryToPermissionSetCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateInstanceAccessControlAttributeConfigurationCommand,
  UpdateInstanceAccessControlAttributeConfigurationCommandInput,
  UpdateInstanceAccessControlAttributeConfigurationCommandOutput,
} from "./commands/UpdateInstanceAccessControlAttributeConfigurationCommand";
import {
  UpdatePermissionSetCommand,
  UpdatePermissionSetCommandInput,
  UpdatePermissionSetCommandOutput,
} from "./commands/UpdatePermissionSetCommand";
import { SSOAdminClient } from "./SSOAdminClient";

/**
 * <p>AWS IAM Identity Center (successor to AWS Single Sign-On) helps you securely create, or connect, your workforce identities and manage their
 *       access centrally across AWS accounts and applications. IAM Identity Center is the recommended
 *       approach for workforce authentication and authorization in AWS, for organizations of any size
 *       and type.</p>
 *          <note>
 *             <p>Although AWS Single Sign-On was renamed, the <code>sso</code> and
 *         <code>identitystore</code> API namespaces will continue to retain their original name for
 *         backward compatibility purposes. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html#renamed">IAM Identity Center rename</a>.</p>
 *          </note>
 *          <p>This reference guide provides information on single sign-on operations which could be used for
 *       access management of AWS accounts. For information about IAM Identity Center features, see the <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html">IAM Identity Center User
 *         Guide</a>.</p>
 *          <p>Many operations in the IAM Identity Center APIs rely on identifiers for users and groups, known as
 *       principals. For more information about how to work with principals and principal IDs in IAM Identity Center,
 *       see the <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/welcome.html">Identity Store API
 *         Reference</a>.</p>
 *          <note>
 *             <p>AWS provides SDKs that consist of libraries and sample code for various programming
 *         languages and platforms (Java, Ruby, .Net, iOS, Android, and more). The SDKs provide a
 *         convenient way to create programmatic access to IAM Identity Center and other AWS services. For more
 *         information about the AWS SDKs, including how to download and install them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p>
 *          </note>
 */
export class SSOAdmin extends SSOAdminClient {
  /**
   * <p>Attaches the specified customer managed policy to the specified <a>PermissionSet</a>.</p>
   */
  public attachCustomerManagedPolicyReferenceToPermissionSet(
    args: AttachCustomerManagedPolicyReferenceToPermissionSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachCustomerManagedPolicyReferenceToPermissionSetCommandOutput>;
  public attachCustomerManagedPolicyReferenceToPermissionSet(
    args: AttachCustomerManagedPolicyReferenceToPermissionSetCommandInput,
    cb: (err: any, data?: AttachCustomerManagedPolicyReferenceToPermissionSetCommandOutput) => void
  ): void;
  public attachCustomerManagedPolicyReferenceToPermissionSet(
    args: AttachCustomerManagedPolicyReferenceToPermissionSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachCustomerManagedPolicyReferenceToPermissionSetCommandOutput) => void
  ): void;
  public attachCustomerManagedPolicyReferenceToPermissionSet(
    args: AttachCustomerManagedPolicyReferenceToPermissionSetCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: AttachCustomerManagedPolicyReferenceToPermissionSetCommandOutput) => void),
    cb?: (err: any, data?: AttachCustomerManagedPolicyReferenceToPermissionSetCommandOutput) => void
  ): Promise<AttachCustomerManagedPolicyReferenceToPermissionSetCommandOutput> | void {
    const command = new AttachCustomerManagedPolicyReferenceToPermissionSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Attaches an AWS managed policy ARN to a permission set.</p>
   *          <note>
   *             <p>If the permission set is already referenced by one or more account assignments, you will
   *         need to call <code>
   *                   <a>ProvisionPermissionSet</a>
   *                </code> after this operation.
   *         Calling <code>ProvisionPermissionSet</code> applies the corresponding IAM policy updates
   *         to all assigned accounts.</p>
   *          </note>
   */
  public attachManagedPolicyToPermissionSet(
    args: AttachManagedPolicyToPermissionSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachManagedPolicyToPermissionSetCommandOutput>;
  public attachManagedPolicyToPermissionSet(
    args: AttachManagedPolicyToPermissionSetCommandInput,
    cb: (err: any, data?: AttachManagedPolicyToPermissionSetCommandOutput) => void
  ): void;
  public attachManagedPolicyToPermissionSet(
    args: AttachManagedPolicyToPermissionSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachManagedPolicyToPermissionSetCommandOutput) => void
  ): void;
  public attachManagedPolicyToPermissionSet(
    args: AttachManagedPolicyToPermissionSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AttachManagedPolicyToPermissionSetCommandOutput) => void),
    cb?: (err: any, data?: AttachManagedPolicyToPermissionSetCommandOutput) => void
  ): Promise<AttachManagedPolicyToPermissionSetCommandOutput> | void {
    const command = new AttachManagedPolicyToPermissionSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Assigns access to a principal for a specified AWS account using a specified
   *       permission set.</p>
   *          <note>
   *             <p>The term <i>principal</i> here refers to a user or group that is defined
   *         in IAM Identity Center.</p>
   *          </note>
   *          <note>
   *             <p>As part of a successful <code>CreateAccountAssignment</code> call, the specified
   *         permission set will automatically be provisioned to the account in the form of an IAM
   *         policy. That policy is attached to the IAM role created in IAM Identity Center. If the permission set
   *         is subsequently updated, the corresponding IAM policies attached to roles in your accounts
   *         will not be updated automatically. In this case, you must call <code>
   *                   <a>ProvisionPermissionSet</a>
   *                </code> to make these updates.</p>
   *          </note>
   *          <note>
   *             <p>
   *         After a successful response, call <code>DescribeAccountAssignmentCreationStatus</code> to describe the status of an assignment creation request.
   *       </p>
   *          </note>
   */
  public createAccountAssignment(
    args: CreateAccountAssignmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAccountAssignmentCommandOutput>;
  public createAccountAssignment(
    args: CreateAccountAssignmentCommandInput,
    cb: (err: any, data?: CreateAccountAssignmentCommandOutput) => void
  ): void;
  public createAccountAssignment(
    args: CreateAccountAssignmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAccountAssignmentCommandOutput) => void
  ): void;
  public createAccountAssignment(
    args: CreateAccountAssignmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAccountAssignmentCommandOutput) => void),
    cb?: (err: any, data?: CreateAccountAssignmentCommandOutput) => void
  ): Promise<CreateAccountAssignmentCommandOutput> | void {
    const command = new CreateAccountAssignmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Enables the attributes-based access control (ABAC) feature for the specified IAM Identity Center
   *       instance. You can also specify new attributes to add to your ABAC configuration during the
   *       enabling process. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.</p>
   *          <note>
   *             <p>After a successful response, call <code>DescribeInstanceAccessControlAttributeConfiguration</code> to validate that
   *       <code>InstanceAccessControlAttributeConfiguration</code> was created.</p>
   *          </note>
   */
  public createInstanceAccessControlAttributeConfiguration(
    args: CreateInstanceAccessControlAttributeConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateInstanceAccessControlAttributeConfigurationCommandOutput>;
  public createInstanceAccessControlAttributeConfiguration(
    args: CreateInstanceAccessControlAttributeConfigurationCommandInput,
    cb: (err: any, data?: CreateInstanceAccessControlAttributeConfigurationCommandOutput) => void
  ): void;
  public createInstanceAccessControlAttributeConfiguration(
    args: CreateInstanceAccessControlAttributeConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateInstanceAccessControlAttributeConfigurationCommandOutput) => void
  ): void;
  public createInstanceAccessControlAttributeConfiguration(
    args: CreateInstanceAccessControlAttributeConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateInstanceAccessControlAttributeConfigurationCommandOutput) => void),
    cb?: (err: any, data?: CreateInstanceAccessControlAttributeConfigurationCommandOutput) => void
  ): Promise<CreateInstanceAccessControlAttributeConfigurationCommandOutput> | void {
    const command = new CreateInstanceAccessControlAttributeConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a permission set within a specified IAM Identity Center instance.</p>
   *          <note>
   *             <p>To grant users and groups access to AWS account resources, use <code>
   *                   <a>CreateAccountAssignment</a>
   *                </code>.</p>
   *          </note>
   */
  public createPermissionSet(
    args: CreatePermissionSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePermissionSetCommandOutput>;
  public createPermissionSet(
    args: CreatePermissionSetCommandInput,
    cb: (err: any, data?: CreatePermissionSetCommandOutput) => void
  ): void;
  public createPermissionSet(
    args: CreatePermissionSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePermissionSetCommandOutput) => void
  ): void;
  public createPermissionSet(
    args: CreatePermissionSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreatePermissionSetCommandOutput) => void),
    cb?: (err: any, data?: CreatePermissionSetCommandOutput) => void
  ): Promise<CreatePermissionSetCommandOutput> | void {
    const command = new CreatePermissionSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a principal's access from a specified AWS account using a specified permission
   *       set.</p>
   *          <note>
   *             <p>After a successful response, call <code>DescribeAccountAssignmentCreationStatus</code> to describe the status of an assignment deletion request.</p>
   *          </note>
   */
  public deleteAccountAssignment(
    args: DeleteAccountAssignmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccountAssignmentCommandOutput>;
  public deleteAccountAssignment(
    args: DeleteAccountAssignmentCommandInput,
    cb: (err: any, data?: DeleteAccountAssignmentCommandOutput) => void
  ): void;
  public deleteAccountAssignment(
    args: DeleteAccountAssignmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccountAssignmentCommandOutput) => void
  ): void;
  public deleteAccountAssignment(
    args: DeleteAccountAssignmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAccountAssignmentCommandOutput) => void),
    cb?: (err: any, data?: DeleteAccountAssignmentCommandOutput) => void
  ): Promise<DeleteAccountAssignmentCommandOutput> | void {
    const command = new DeleteAccountAssignmentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the inline policy from a specified permission set.</p>
   */
  public deleteInlinePolicyFromPermissionSet(
    args: DeleteInlinePolicyFromPermissionSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInlinePolicyFromPermissionSetCommandOutput>;
  public deleteInlinePolicyFromPermissionSet(
    args: DeleteInlinePolicyFromPermissionSetCommandInput,
    cb: (err: any, data?: DeleteInlinePolicyFromPermissionSetCommandOutput) => void
  ): void;
  public deleteInlinePolicyFromPermissionSet(
    args: DeleteInlinePolicyFromPermissionSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInlinePolicyFromPermissionSetCommandOutput) => void
  ): void;
  public deleteInlinePolicyFromPermissionSet(
    args: DeleteInlinePolicyFromPermissionSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteInlinePolicyFromPermissionSetCommandOutput) => void),
    cb?: (err: any, data?: DeleteInlinePolicyFromPermissionSetCommandOutput) => void
  ): Promise<DeleteInlinePolicyFromPermissionSetCommandOutput> | void {
    const command = new DeleteInlinePolicyFromPermissionSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disables the attributes-based access control (ABAC) feature for the specified IAM Identity Center
   *       instance and deletes all of the attribute mappings that have been configured. Once deleted,
   *       any attributes that are received from an identity source and any custom attributes you have
   *       previously configured will not be passed. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.</p>
   */
  public deleteInstanceAccessControlAttributeConfiguration(
    args: DeleteInstanceAccessControlAttributeConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInstanceAccessControlAttributeConfigurationCommandOutput>;
  public deleteInstanceAccessControlAttributeConfiguration(
    args: DeleteInstanceAccessControlAttributeConfigurationCommandInput,
    cb: (err: any, data?: DeleteInstanceAccessControlAttributeConfigurationCommandOutput) => void
  ): void;
  public deleteInstanceAccessControlAttributeConfiguration(
    args: DeleteInstanceAccessControlAttributeConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInstanceAccessControlAttributeConfigurationCommandOutput) => void
  ): void;
  public deleteInstanceAccessControlAttributeConfiguration(
    args: DeleteInstanceAccessControlAttributeConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteInstanceAccessControlAttributeConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DeleteInstanceAccessControlAttributeConfigurationCommandOutput) => void
  ): Promise<DeleteInstanceAccessControlAttributeConfigurationCommandOutput> | void {
    const command = new DeleteInstanceAccessControlAttributeConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the permissions boundary from a specified <a>PermissionSet</a>.</p>
   */
  public deletePermissionsBoundaryFromPermissionSet(
    args: DeletePermissionsBoundaryFromPermissionSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePermissionsBoundaryFromPermissionSetCommandOutput>;
  public deletePermissionsBoundaryFromPermissionSet(
    args: DeletePermissionsBoundaryFromPermissionSetCommandInput,
    cb: (err: any, data?: DeletePermissionsBoundaryFromPermissionSetCommandOutput) => void
  ): void;
  public deletePermissionsBoundaryFromPermissionSet(
    args: DeletePermissionsBoundaryFromPermissionSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePermissionsBoundaryFromPermissionSetCommandOutput) => void
  ): void;
  public deletePermissionsBoundaryFromPermissionSet(
    args: DeletePermissionsBoundaryFromPermissionSetCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeletePermissionsBoundaryFromPermissionSetCommandOutput) => void),
    cb?: (err: any, data?: DeletePermissionsBoundaryFromPermissionSetCommandOutput) => void
  ): Promise<DeletePermissionsBoundaryFromPermissionSetCommandOutput> | void {
    const command = new DeletePermissionsBoundaryFromPermissionSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified permission set.</p>
   */
  public deletePermissionSet(
    args: DeletePermissionSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePermissionSetCommandOutput>;
  public deletePermissionSet(
    args: DeletePermissionSetCommandInput,
    cb: (err: any, data?: DeletePermissionSetCommandOutput) => void
  ): void;
  public deletePermissionSet(
    args: DeletePermissionSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePermissionSetCommandOutput) => void
  ): void;
  public deletePermissionSet(
    args: DeletePermissionSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeletePermissionSetCommandOutput) => void),
    cb?: (err: any, data?: DeletePermissionSetCommandOutput) => void
  ): Promise<DeletePermissionSetCommandOutput> | void {
    const command = new DeletePermissionSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the status of the assignment creation request.</p>
   */
  public describeAccountAssignmentCreationStatus(
    args: DescribeAccountAssignmentCreationStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAccountAssignmentCreationStatusCommandOutput>;
  public describeAccountAssignmentCreationStatus(
    args: DescribeAccountAssignmentCreationStatusCommandInput,
    cb: (err: any, data?: DescribeAccountAssignmentCreationStatusCommandOutput) => void
  ): void;
  public describeAccountAssignmentCreationStatus(
    args: DescribeAccountAssignmentCreationStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAccountAssignmentCreationStatusCommandOutput) => void
  ): void;
  public describeAccountAssignmentCreationStatus(
    args: DescribeAccountAssignmentCreationStatusCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeAccountAssignmentCreationStatusCommandOutput) => void),
    cb?: (err: any, data?: DescribeAccountAssignmentCreationStatusCommandOutput) => void
  ): Promise<DescribeAccountAssignmentCreationStatusCommandOutput> | void {
    const command = new DescribeAccountAssignmentCreationStatusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the status of the assignment deletion request.</p>
   */
  public describeAccountAssignmentDeletionStatus(
    args: DescribeAccountAssignmentDeletionStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAccountAssignmentDeletionStatusCommandOutput>;
  public describeAccountAssignmentDeletionStatus(
    args: DescribeAccountAssignmentDeletionStatusCommandInput,
    cb: (err: any, data?: DescribeAccountAssignmentDeletionStatusCommandOutput) => void
  ): void;
  public describeAccountAssignmentDeletionStatus(
    args: DescribeAccountAssignmentDeletionStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAccountAssignmentDeletionStatusCommandOutput) => void
  ): void;
  public describeAccountAssignmentDeletionStatus(
    args: DescribeAccountAssignmentDeletionStatusCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeAccountAssignmentDeletionStatusCommandOutput) => void),
    cb?: (err: any, data?: DescribeAccountAssignmentDeletionStatusCommandOutput) => void
  ): Promise<DescribeAccountAssignmentDeletionStatusCommandOutput> | void {
    const command = new DescribeAccountAssignmentDeletionStatusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the list of IAM Identity Center identity store attributes that have been configured to work
   *       with attributes-based access control (ABAC) for the specified IAM Identity Center instance. This will not
   *       return attributes configured and sent by an external identity provider. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.</p>
   */
  public describeInstanceAccessControlAttributeConfiguration(
    args: DescribeInstanceAccessControlAttributeConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInstanceAccessControlAttributeConfigurationCommandOutput>;
  public describeInstanceAccessControlAttributeConfiguration(
    args: DescribeInstanceAccessControlAttributeConfigurationCommandInput,
    cb: (err: any, data?: DescribeInstanceAccessControlAttributeConfigurationCommandOutput) => void
  ): void;
  public describeInstanceAccessControlAttributeConfiguration(
    args: DescribeInstanceAccessControlAttributeConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInstanceAccessControlAttributeConfigurationCommandOutput) => void
  ): void;
  public describeInstanceAccessControlAttributeConfiguration(
    args: DescribeInstanceAccessControlAttributeConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeInstanceAccessControlAttributeConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DescribeInstanceAccessControlAttributeConfigurationCommandOutput) => void
  ): Promise<DescribeInstanceAccessControlAttributeConfigurationCommandOutput> | void {
    const command = new DescribeInstanceAccessControlAttributeConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the details of the permission set.</p>
   */
  public describePermissionSet(
    args: DescribePermissionSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePermissionSetCommandOutput>;
  public describePermissionSet(
    args: DescribePermissionSetCommandInput,
    cb: (err: any, data?: DescribePermissionSetCommandOutput) => void
  ): void;
  public describePermissionSet(
    args: DescribePermissionSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePermissionSetCommandOutput) => void
  ): void;
  public describePermissionSet(
    args: DescribePermissionSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribePermissionSetCommandOutput) => void),
    cb?: (err: any, data?: DescribePermissionSetCommandOutput) => void
  ): Promise<DescribePermissionSetCommandOutput> | void {
    const command = new DescribePermissionSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the status for the given permission set provisioning request.</p>
   */
  public describePermissionSetProvisioningStatus(
    args: DescribePermissionSetProvisioningStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePermissionSetProvisioningStatusCommandOutput>;
  public describePermissionSetProvisioningStatus(
    args: DescribePermissionSetProvisioningStatusCommandInput,
    cb: (err: any, data?: DescribePermissionSetProvisioningStatusCommandOutput) => void
  ): void;
  public describePermissionSetProvisioningStatus(
    args: DescribePermissionSetProvisioningStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePermissionSetProvisioningStatusCommandOutput) => void
  ): void;
  public describePermissionSetProvisioningStatus(
    args: DescribePermissionSetProvisioningStatusCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribePermissionSetProvisioningStatusCommandOutput) => void),
    cb?: (err: any, data?: DescribePermissionSetProvisioningStatusCommandOutput) => void
  ): Promise<DescribePermissionSetProvisioningStatusCommandOutput> | void {
    const command = new DescribePermissionSetProvisioningStatusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Detaches the specified customer managed policy from the specified <a>PermissionSet</a>.</p>
   */
  public detachCustomerManagedPolicyReferenceFromPermissionSet(
    args: DetachCustomerManagedPolicyReferenceFromPermissionSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachCustomerManagedPolicyReferenceFromPermissionSetCommandOutput>;
  public detachCustomerManagedPolicyReferenceFromPermissionSet(
    args: DetachCustomerManagedPolicyReferenceFromPermissionSetCommandInput,
    cb: (err: any, data?: DetachCustomerManagedPolicyReferenceFromPermissionSetCommandOutput) => void
  ): void;
  public detachCustomerManagedPolicyReferenceFromPermissionSet(
    args: DetachCustomerManagedPolicyReferenceFromPermissionSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachCustomerManagedPolicyReferenceFromPermissionSetCommandOutput) => void
  ): void;
  public detachCustomerManagedPolicyReferenceFromPermissionSet(
    args: DetachCustomerManagedPolicyReferenceFromPermissionSetCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DetachCustomerManagedPolicyReferenceFromPermissionSetCommandOutput) => void),
    cb?: (err: any, data?: DetachCustomerManagedPolicyReferenceFromPermissionSetCommandOutput) => void
  ): Promise<DetachCustomerManagedPolicyReferenceFromPermissionSetCommandOutput> | void {
    const command = new DetachCustomerManagedPolicyReferenceFromPermissionSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Detaches the attached AWS managed policy ARN from the specified permission set.</p>
   */
  public detachManagedPolicyFromPermissionSet(
    args: DetachManagedPolicyFromPermissionSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachManagedPolicyFromPermissionSetCommandOutput>;
  public detachManagedPolicyFromPermissionSet(
    args: DetachManagedPolicyFromPermissionSetCommandInput,
    cb: (err: any, data?: DetachManagedPolicyFromPermissionSetCommandOutput) => void
  ): void;
  public detachManagedPolicyFromPermissionSet(
    args: DetachManagedPolicyFromPermissionSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachManagedPolicyFromPermissionSetCommandOutput) => void
  ): void;
  public detachManagedPolicyFromPermissionSet(
    args: DetachManagedPolicyFromPermissionSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DetachManagedPolicyFromPermissionSetCommandOutput) => void),
    cb?: (err: any, data?: DetachManagedPolicyFromPermissionSetCommandOutput) => void
  ): Promise<DetachManagedPolicyFromPermissionSetCommandOutput> | void {
    const command = new DetachManagedPolicyFromPermissionSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Obtains the inline policy assigned to the permission set.</p>
   */
  public getInlinePolicyForPermissionSet(
    args: GetInlinePolicyForPermissionSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInlinePolicyForPermissionSetCommandOutput>;
  public getInlinePolicyForPermissionSet(
    args: GetInlinePolicyForPermissionSetCommandInput,
    cb: (err: any, data?: GetInlinePolicyForPermissionSetCommandOutput) => void
  ): void;
  public getInlinePolicyForPermissionSet(
    args: GetInlinePolicyForPermissionSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInlinePolicyForPermissionSetCommandOutput) => void
  ): void;
  public getInlinePolicyForPermissionSet(
    args: GetInlinePolicyForPermissionSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetInlinePolicyForPermissionSetCommandOutput) => void),
    cb?: (err: any, data?: GetInlinePolicyForPermissionSetCommandOutput) => void
  ): Promise<GetInlinePolicyForPermissionSetCommandOutput> | void {
    const command = new GetInlinePolicyForPermissionSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Obtains the permissions boundary for a specified <a>PermissionSet</a>.</p>
   */
  public getPermissionsBoundaryForPermissionSet(
    args: GetPermissionsBoundaryForPermissionSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPermissionsBoundaryForPermissionSetCommandOutput>;
  public getPermissionsBoundaryForPermissionSet(
    args: GetPermissionsBoundaryForPermissionSetCommandInput,
    cb: (err: any, data?: GetPermissionsBoundaryForPermissionSetCommandOutput) => void
  ): void;
  public getPermissionsBoundaryForPermissionSet(
    args: GetPermissionsBoundaryForPermissionSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPermissionsBoundaryForPermissionSetCommandOutput) => void
  ): void;
  public getPermissionsBoundaryForPermissionSet(
    args: GetPermissionsBoundaryForPermissionSetCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetPermissionsBoundaryForPermissionSetCommandOutput) => void),
    cb?: (err: any, data?: GetPermissionsBoundaryForPermissionSetCommandOutput) => void
  ): Promise<GetPermissionsBoundaryForPermissionSetCommandOutput> | void {
    const command = new GetPermissionsBoundaryForPermissionSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the status of the AWS account assignment creation requests for a specified IAM Identity Center
   *       instance.</p>
   */
  public listAccountAssignmentCreationStatus(
    args: ListAccountAssignmentCreationStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccountAssignmentCreationStatusCommandOutput>;
  public listAccountAssignmentCreationStatus(
    args: ListAccountAssignmentCreationStatusCommandInput,
    cb: (err: any, data?: ListAccountAssignmentCreationStatusCommandOutput) => void
  ): void;
  public listAccountAssignmentCreationStatus(
    args: ListAccountAssignmentCreationStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccountAssignmentCreationStatusCommandOutput) => void
  ): void;
  public listAccountAssignmentCreationStatus(
    args: ListAccountAssignmentCreationStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAccountAssignmentCreationStatusCommandOutput) => void),
    cb?: (err: any, data?: ListAccountAssignmentCreationStatusCommandOutput) => void
  ): Promise<ListAccountAssignmentCreationStatusCommandOutput> | void {
    const command = new ListAccountAssignmentCreationStatusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the status of the AWS account assignment deletion requests for a specified IAM Identity Center
   *       instance.</p>
   */
  public listAccountAssignmentDeletionStatus(
    args: ListAccountAssignmentDeletionStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccountAssignmentDeletionStatusCommandOutput>;
  public listAccountAssignmentDeletionStatus(
    args: ListAccountAssignmentDeletionStatusCommandInput,
    cb: (err: any, data?: ListAccountAssignmentDeletionStatusCommandOutput) => void
  ): void;
  public listAccountAssignmentDeletionStatus(
    args: ListAccountAssignmentDeletionStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccountAssignmentDeletionStatusCommandOutput) => void
  ): void;
  public listAccountAssignmentDeletionStatus(
    args: ListAccountAssignmentDeletionStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAccountAssignmentDeletionStatusCommandOutput) => void),
    cb?: (err: any, data?: ListAccountAssignmentDeletionStatusCommandOutput) => void
  ): Promise<ListAccountAssignmentDeletionStatusCommandOutput> | void {
    const command = new ListAccountAssignmentDeletionStatusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the assignee of the specified AWS account with the specified permission set.</p>
   */
  public listAccountAssignments(
    args: ListAccountAssignmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccountAssignmentsCommandOutput>;
  public listAccountAssignments(
    args: ListAccountAssignmentsCommandInput,
    cb: (err: any, data?: ListAccountAssignmentsCommandOutput) => void
  ): void;
  public listAccountAssignments(
    args: ListAccountAssignmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccountAssignmentsCommandOutput) => void
  ): void;
  public listAccountAssignments(
    args: ListAccountAssignmentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAccountAssignmentsCommandOutput) => void),
    cb?: (err: any, data?: ListAccountAssignmentsCommandOutput) => void
  ): Promise<ListAccountAssignmentsCommandOutput> | void {
    const command = new ListAccountAssignmentsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all the AWS accounts where the specified permission set is provisioned.</p>
   */
  public listAccountsForProvisionedPermissionSet(
    args: ListAccountsForProvisionedPermissionSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccountsForProvisionedPermissionSetCommandOutput>;
  public listAccountsForProvisionedPermissionSet(
    args: ListAccountsForProvisionedPermissionSetCommandInput,
    cb: (err: any, data?: ListAccountsForProvisionedPermissionSetCommandOutput) => void
  ): void;
  public listAccountsForProvisionedPermissionSet(
    args: ListAccountsForProvisionedPermissionSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccountsForProvisionedPermissionSetCommandOutput) => void
  ): void;
  public listAccountsForProvisionedPermissionSet(
    args: ListAccountsForProvisionedPermissionSetCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListAccountsForProvisionedPermissionSetCommandOutput) => void),
    cb?: (err: any, data?: ListAccountsForProvisionedPermissionSetCommandOutput) => void
  ): Promise<ListAccountsForProvisionedPermissionSetCommandOutput> | void {
    const command = new ListAccountsForProvisionedPermissionSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all customer managed policies attached to a specified <a>PermissionSet</a>.</p>
   */
  public listCustomerManagedPolicyReferencesInPermissionSet(
    args: ListCustomerManagedPolicyReferencesInPermissionSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCustomerManagedPolicyReferencesInPermissionSetCommandOutput>;
  public listCustomerManagedPolicyReferencesInPermissionSet(
    args: ListCustomerManagedPolicyReferencesInPermissionSetCommandInput,
    cb: (err: any, data?: ListCustomerManagedPolicyReferencesInPermissionSetCommandOutput) => void
  ): void;
  public listCustomerManagedPolicyReferencesInPermissionSet(
    args: ListCustomerManagedPolicyReferencesInPermissionSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCustomerManagedPolicyReferencesInPermissionSetCommandOutput) => void
  ): void;
  public listCustomerManagedPolicyReferencesInPermissionSet(
    args: ListCustomerManagedPolicyReferencesInPermissionSetCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListCustomerManagedPolicyReferencesInPermissionSetCommandOutput) => void),
    cb?: (err: any, data?: ListCustomerManagedPolicyReferencesInPermissionSetCommandOutput) => void
  ): Promise<ListCustomerManagedPolicyReferencesInPermissionSetCommandOutput> | void {
    const command = new ListCustomerManagedPolicyReferencesInPermissionSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the IAM Identity Center instances that the caller has access to.</p>
   */
  public listInstances(
    args: ListInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInstancesCommandOutput>;
  public listInstances(
    args: ListInstancesCommandInput,
    cb: (err: any, data?: ListInstancesCommandOutput) => void
  ): void;
  public listInstances(
    args: ListInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInstancesCommandOutput) => void
  ): void;
  public listInstances(
    args: ListInstancesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListInstancesCommandOutput) => void),
    cb?: (err: any, data?: ListInstancesCommandOutput) => void
  ): Promise<ListInstancesCommandOutput> | void {
    const command = new ListInstancesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the AWS managed policy that is attached to a specified permission set.</p>
   */
  public listManagedPoliciesInPermissionSet(
    args: ListManagedPoliciesInPermissionSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListManagedPoliciesInPermissionSetCommandOutput>;
  public listManagedPoliciesInPermissionSet(
    args: ListManagedPoliciesInPermissionSetCommandInput,
    cb: (err: any, data?: ListManagedPoliciesInPermissionSetCommandOutput) => void
  ): void;
  public listManagedPoliciesInPermissionSet(
    args: ListManagedPoliciesInPermissionSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListManagedPoliciesInPermissionSetCommandOutput) => void
  ): void;
  public listManagedPoliciesInPermissionSet(
    args: ListManagedPoliciesInPermissionSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListManagedPoliciesInPermissionSetCommandOutput) => void),
    cb?: (err: any, data?: ListManagedPoliciesInPermissionSetCommandOutput) => void
  ): Promise<ListManagedPoliciesInPermissionSetCommandOutput> | void {
    const command = new ListManagedPoliciesInPermissionSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the status of the permission set provisioning requests for a specified IAM Identity Center
   *       instance.</p>
   */
  public listPermissionSetProvisioningStatus(
    args: ListPermissionSetProvisioningStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPermissionSetProvisioningStatusCommandOutput>;
  public listPermissionSetProvisioningStatus(
    args: ListPermissionSetProvisioningStatusCommandInput,
    cb: (err: any, data?: ListPermissionSetProvisioningStatusCommandOutput) => void
  ): void;
  public listPermissionSetProvisioningStatus(
    args: ListPermissionSetProvisioningStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPermissionSetProvisioningStatusCommandOutput) => void
  ): void;
  public listPermissionSetProvisioningStatus(
    args: ListPermissionSetProvisioningStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPermissionSetProvisioningStatusCommandOutput) => void),
    cb?: (err: any, data?: ListPermissionSetProvisioningStatusCommandOutput) => void
  ): Promise<ListPermissionSetProvisioningStatusCommandOutput> | void {
    const command = new ListPermissionSetProvisioningStatusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the <a>PermissionSet</a>s in an IAM Identity Center instance.</p>
   */
  public listPermissionSets(
    args: ListPermissionSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPermissionSetsCommandOutput>;
  public listPermissionSets(
    args: ListPermissionSetsCommandInput,
    cb: (err: any, data?: ListPermissionSetsCommandOutput) => void
  ): void;
  public listPermissionSets(
    args: ListPermissionSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPermissionSetsCommandOutput) => void
  ): void;
  public listPermissionSets(
    args: ListPermissionSetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPermissionSetsCommandOutput) => void),
    cb?: (err: any, data?: ListPermissionSetsCommandOutput) => void
  ): Promise<ListPermissionSetsCommandOutput> | void {
    const command = new ListPermissionSetsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all the permission sets that are provisioned to a specified AWS account.</p>
   */
  public listPermissionSetsProvisionedToAccount(
    args: ListPermissionSetsProvisionedToAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPermissionSetsProvisionedToAccountCommandOutput>;
  public listPermissionSetsProvisionedToAccount(
    args: ListPermissionSetsProvisionedToAccountCommandInput,
    cb: (err: any, data?: ListPermissionSetsProvisionedToAccountCommandOutput) => void
  ): void;
  public listPermissionSetsProvisionedToAccount(
    args: ListPermissionSetsProvisionedToAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPermissionSetsProvisionedToAccountCommandOutput) => void
  ): void;
  public listPermissionSetsProvisionedToAccount(
    args: ListPermissionSetsProvisionedToAccountCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListPermissionSetsProvisionedToAccountCommandOutput) => void),
    cb?: (err: any, data?: ListPermissionSetsProvisionedToAccountCommandOutput) => void
  ): Promise<ListPermissionSetsProvisionedToAccountCommandOutput> | void {
    const command = new ListPermissionSetsProvisionedToAccountCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the tags that are attached to a specified resource.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>The process by which a specified permission set is provisioned to the specified
   *       target.</p>
   */
  public provisionPermissionSet(
    args: ProvisionPermissionSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ProvisionPermissionSetCommandOutput>;
  public provisionPermissionSet(
    args: ProvisionPermissionSetCommandInput,
    cb: (err: any, data?: ProvisionPermissionSetCommandOutput) => void
  ): void;
  public provisionPermissionSet(
    args: ProvisionPermissionSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ProvisionPermissionSetCommandOutput) => void
  ): void;
  public provisionPermissionSet(
    args: ProvisionPermissionSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ProvisionPermissionSetCommandOutput) => void),
    cb?: (err: any, data?: ProvisionPermissionSetCommandOutput) => void
  ): Promise<ProvisionPermissionSetCommandOutput> | void {
    const command = new ProvisionPermissionSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Attaches an inline policy to a permission set.</p>
   *          <note>
   *             <p>If the permission set is already referenced by one or more account assignments, you will
   *         need to call <code>
   *                   <a>ProvisionPermissionSet</a>
   *                </code> after this action to
   *         apply the corresponding IAM policy updates to all assigned accounts.</p>
   *          </note>
   */
  public putInlinePolicyToPermissionSet(
    args: PutInlinePolicyToPermissionSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutInlinePolicyToPermissionSetCommandOutput>;
  public putInlinePolicyToPermissionSet(
    args: PutInlinePolicyToPermissionSetCommandInput,
    cb: (err: any, data?: PutInlinePolicyToPermissionSetCommandOutput) => void
  ): void;
  public putInlinePolicyToPermissionSet(
    args: PutInlinePolicyToPermissionSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutInlinePolicyToPermissionSetCommandOutput) => void
  ): void;
  public putInlinePolicyToPermissionSet(
    args: PutInlinePolicyToPermissionSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutInlinePolicyToPermissionSetCommandOutput) => void),
    cb?: (err: any, data?: PutInlinePolicyToPermissionSetCommandOutput) => void
  ): Promise<PutInlinePolicyToPermissionSetCommandOutput> | void {
    const command = new PutInlinePolicyToPermissionSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Attaches an AWS managed or customer managed policy to the specified <a>PermissionSet</a> as a permissions boundary.</p>
   */
  public putPermissionsBoundaryToPermissionSet(
    args: PutPermissionsBoundaryToPermissionSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutPermissionsBoundaryToPermissionSetCommandOutput>;
  public putPermissionsBoundaryToPermissionSet(
    args: PutPermissionsBoundaryToPermissionSetCommandInput,
    cb: (err: any, data?: PutPermissionsBoundaryToPermissionSetCommandOutput) => void
  ): void;
  public putPermissionsBoundaryToPermissionSet(
    args: PutPermissionsBoundaryToPermissionSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutPermissionsBoundaryToPermissionSetCommandOutput) => void
  ): void;
  public putPermissionsBoundaryToPermissionSet(
    args: PutPermissionsBoundaryToPermissionSetCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: PutPermissionsBoundaryToPermissionSetCommandOutput) => void),
    cb?: (err: any, data?: PutPermissionsBoundaryToPermissionSetCommandOutput) => void
  ): Promise<PutPermissionsBoundaryToPermissionSetCommandOutput> | void {
    const command = new PutPermissionsBoundaryToPermissionSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associates a set of tags with a specified resource.</p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disassociates a set of tags from a specified resource.</p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the IAM Identity Center identity store attributes that you can use with the IAM Identity Center instance
   *       for attributes-based access control (ABAC). When using an external identity provider as an
   *       identity source, you can pass attributes through the SAML assertion as an alternative to
   *       configuring attributes from the IAM Identity Center identity store. If a SAML assertion passes any of
   *       these attributes, IAM Identity Center replaces the attribute value with the value from the IAM Identity Center
   *       identity store. For more information about ABAC, see <a href="/singlesignon/latest/userguide/abac.html">Attribute-Based Access Control</a> in the <i>IAM Identity Center User Guide</i>.</p>
   */
  public updateInstanceAccessControlAttributeConfiguration(
    args: UpdateInstanceAccessControlAttributeConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateInstanceAccessControlAttributeConfigurationCommandOutput>;
  public updateInstanceAccessControlAttributeConfiguration(
    args: UpdateInstanceAccessControlAttributeConfigurationCommandInput,
    cb: (err: any, data?: UpdateInstanceAccessControlAttributeConfigurationCommandOutput) => void
  ): void;
  public updateInstanceAccessControlAttributeConfiguration(
    args: UpdateInstanceAccessControlAttributeConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateInstanceAccessControlAttributeConfigurationCommandOutput) => void
  ): void;
  public updateInstanceAccessControlAttributeConfiguration(
    args: UpdateInstanceAccessControlAttributeConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateInstanceAccessControlAttributeConfigurationCommandOutput) => void),
    cb?: (err: any, data?: UpdateInstanceAccessControlAttributeConfigurationCommandOutput) => void
  ): Promise<UpdateInstanceAccessControlAttributeConfigurationCommandOutput> | void {
    const command = new UpdateInstanceAccessControlAttributeConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates an existing permission set.</p>
   */
  public updatePermissionSet(
    args: UpdatePermissionSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePermissionSetCommandOutput>;
  public updatePermissionSet(
    args: UpdatePermissionSetCommandInput,
    cb: (err: any, data?: UpdatePermissionSetCommandOutput) => void
  ): void;
  public updatePermissionSet(
    args: UpdatePermissionSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePermissionSetCommandOutput) => void
  ): void;
  public updatePermissionSet(
    args: UpdatePermissionSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdatePermissionSetCommandOutput) => void),
    cb?: (err: any, data?: UpdatePermissionSetCommandOutput) => void
  ): Promise<UpdatePermissionSetCommandOutput> | void {
    const command = new UpdatePermissionSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
