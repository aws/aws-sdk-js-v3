// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

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
import { SSOAdminClient, SSOAdminClientConfig } from "./SSOAdminClient";

const commands = {
  AttachCustomerManagedPolicyReferenceToPermissionSetCommand,
  AttachManagedPolicyToPermissionSetCommand,
  CreateAccountAssignmentCommand,
  CreateInstanceAccessControlAttributeConfigurationCommand,
  CreatePermissionSetCommand,
  DeleteAccountAssignmentCommand,
  DeleteInlinePolicyFromPermissionSetCommand,
  DeleteInstanceAccessControlAttributeConfigurationCommand,
  DeletePermissionsBoundaryFromPermissionSetCommand,
  DeletePermissionSetCommand,
  DescribeAccountAssignmentCreationStatusCommand,
  DescribeAccountAssignmentDeletionStatusCommand,
  DescribeInstanceAccessControlAttributeConfigurationCommand,
  DescribePermissionSetCommand,
  DescribePermissionSetProvisioningStatusCommand,
  DetachCustomerManagedPolicyReferenceFromPermissionSetCommand,
  DetachManagedPolicyFromPermissionSetCommand,
  GetInlinePolicyForPermissionSetCommand,
  GetPermissionsBoundaryForPermissionSetCommand,
  ListAccountAssignmentCreationStatusCommand,
  ListAccountAssignmentDeletionStatusCommand,
  ListAccountAssignmentsCommand,
  ListAccountsForProvisionedPermissionSetCommand,
  ListCustomerManagedPolicyReferencesInPermissionSetCommand,
  ListInstancesCommand,
  ListManagedPoliciesInPermissionSetCommand,
  ListPermissionSetProvisioningStatusCommand,
  ListPermissionSetsCommand,
  ListPermissionSetsProvisionedToAccountCommand,
  ListTagsForResourceCommand,
  ProvisionPermissionSetCommand,
  PutInlinePolicyToPermissionSetCommand,
  PutPermissionsBoundaryToPermissionSetCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateInstanceAccessControlAttributeConfigurationCommand,
  UpdatePermissionSetCommand,
};

export interface SSOAdmin {
  /**
   * @see {@link AttachCustomerManagedPolicyReferenceToPermissionSetCommand}
   */
  attachCustomerManagedPolicyReferenceToPermissionSet(
    args: AttachCustomerManagedPolicyReferenceToPermissionSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachCustomerManagedPolicyReferenceToPermissionSetCommandOutput>;
  attachCustomerManagedPolicyReferenceToPermissionSet(
    args: AttachCustomerManagedPolicyReferenceToPermissionSetCommandInput,
    cb: (err: any, data?: AttachCustomerManagedPolicyReferenceToPermissionSetCommandOutput) => void
  ): void;
  attachCustomerManagedPolicyReferenceToPermissionSet(
    args: AttachCustomerManagedPolicyReferenceToPermissionSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachCustomerManagedPolicyReferenceToPermissionSetCommandOutput) => void
  ): void;

  /**
   * @see {@link AttachManagedPolicyToPermissionSetCommand}
   */
  attachManagedPolicyToPermissionSet(
    args: AttachManagedPolicyToPermissionSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachManagedPolicyToPermissionSetCommandOutput>;
  attachManagedPolicyToPermissionSet(
    args: AttachManagedPolicyToPermissionSetCommandInput,
    cb: (err: any, data?: AttachManagedPolicyToPermissionSetCommandOutput) => void
  ): void;
  attachManagedPolicyToPermissionSet(
    args: AttachManagedPolicyToPermissionSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachManagedPolicyToPermissionSetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAccountAssignmentCommand}
   */
  createAccountAssignment(
    args: CreateAccountAssignmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAccountAssignmentCommandOutput>;
  createAccountAssignment(
    args: CreateAccountAssignmentCommandInput,
    cb: (err: any, data?: CreateAccountAssignmentCommandOutput) => void
  ): void;
  createAccountAssignment(
    args: CreateAccountAssignmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAccountAssignmentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateInstanceAccessControlAttributeConfigurationCommand}
   */
  createInstanceAccessControlAttributeConfiguration(
    args: CreateInstanceAccessControlAttributeConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateInstanceAccessControlAttributeConfigurationCommandOutput>;
  createInstanceAccessControlAttributeConfiguration(
    args: CreateInstanceAccessControlAttributeConfigurationCommandInput,
    cb: (err: any, data?: CreateInstanceAccessControlAttributeConfigurationCommandOutput) => void
  ): void;
  createInstanceAccessControlAttributeConfiguration(
    args: CreateInstanceAccessControlAttributeConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateInstanceAccessControlAttributeConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePermissionSetCommand}
   */
  createPermissionSet(
    args: CreatePermissionSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePermissionSetCommandOutput>;
  createPermissionSet(
    args: CreatePermissionSetCommandInput,
    cb: (err: any, data?: CreatePermissionSetCommandOutput) => void
  ): void;
  createPermissionSet(
    args: CreatePermissionSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePermissionSetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAccountAssignmentCommand}
   */
  deleteAccountAssignment(
    args: DeleteAccountAssignmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccountAssignmentCommandOutput>;
  deleteAccountAssignment(
    args: DeleteAccountAssignmentCommandInput,
    cb: (err: any, data?: DeleteAccountAssignmentCommandOutput) => void
  ): void;
  deleteAccountAssignment(
    args: DeleteAccountAssignmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccountAssignmentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteInlinePolicyFromPermissionSetCommand}
   */
  deleteInlinePolicyFromPermissionSet(
    args: DeleteInlinePolicyFromPermissionSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInlinePolicyFromPermissionSetCommandOutput>;
  deleteInlinePolicyFromPermissionSet(
    args: DeleteInlinePolicyFromPermissionSetCommandInput,
    cb: (err: any, data?: DeleteInlinePolicyFromPermissionSetCommandOutput) => void
  ): void;
  deleteInlinePolicyFromPermissionSet(
    args: DeleteInlinePolicyFromPermissionSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInlinePolicyFromPermissionSetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteInstanceAccessControlAttributeConfigurationCommand}
   */
  deleteInstanceAccessControlAttributeConfiguration(
    args: DeleteInstanceAccessControlAttributeConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInstanceAccessControlAttributeConfigurationCommandOutput>;
  deleteInstanceAccessControlAttributeConfiguration(
    args: DeleteInstanceAccessControlAttributeConfigurationCommandInput,
    cb: (err: any, data?: DeleteInstanceAccessControlAttributeConfigurationCommandOutput) => void
  ): void;
  deleteInstanceAccessControlAttributeConfiguration(
    args: DeleteInstanceAccessControlAttributeConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInstanceAccessControlAttributeConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePermissionsBoundaryFromPermissionSetCommand}
   */
  deletePermissionsBoundaryFromPermissionSet(
    args: DeletePermissionsBoundaryFromPermissionSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePermissionsBoundaryFromPermissionSetCommandOutput>;
  deletePermissionsBoundaryFromPermissionSet(
    args: DeletePermissionsBoundaryFromPermissionSetCommandInput,
    cb: (err: any, data?: DeletePermissionsBoundaryFromPermissionSetCommandOutput) => void
  ): void;
  deletePermissionsBoundaryFromPermissionSet(
    args: DeletePermissionsBoundaryFromPermissionSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePermissionsBoundaryFromPermissionSetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePermissionSetCommand}
   */
  deletePermissionSet(
    args: DeletePermissionSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePermissionSetCommandOutput>;
  deletePermissionSet(
    args: DeletePermissionSetCommandInput,
    cb: (err: any, data?: DeletePermissionSetCommandOutput) => void
  ): void;
  deletePermissionSet(
    args: DeletePermissionSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePermissionSetCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAccountAssignmentCreationStatusCommand}
   */
  describeAccountAssignmentCreationStatus(
    args: DescribeAccountAssignmentCreationStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAccountAssignmentCreationStatusCommandOutput>;
  describeAccountAssignmentCreationStatus(
    args: DescribeAccountAssignmentCreationStatusCommandInput,
    cb: (err: any, data?: DescribeAccountAssignmentCreationStatusCommandOutput) => void
  ): void;
  describeAccountAssignmentCreationStatus(
    args: DescribeAccountAssignmentCreationStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAccountAssignmentCreationStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAccountAssignmentDeletionStatusCommand}
   */
  describeAccountAssignmentDeletionStatus(
    args: DescribeAccountAssignmentDeletionStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAccountAssignmentDeletionStatusCommandOutput>;
  describeAccountAssignmentDeletionStatus(
    args: DescribeAccountAssignmentDeletionStatusCommandInput,
    cb: (err: any, data?: DescribeAccountAssignmentDeletionStatusCommandOutput) => void
  ): void;
  describeAccountAssignmentDeletionStatus(
    args: DescribeAccountAssignmentDeletionStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAccountAssignmentDeletionStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeInstanceAccessControlAttributeConfigurationCommand}
   */
  describeInstanceAccessControlAttributeConfiguration(
    args: DescribeInstanceAccessControlAttributeConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInstanceAccessControlAttributeConfigurationCommandOutput>;
  describeInstanceAccessControlAttributeConfiguration(
    args: DescribeInstanceAccessControlAttributeConfigurationCommandInput,
    cb: (err: any, data?: DescribeInstanceAccessControlAttributeConfigurationCommandOutput) => void
  ): void;
  describeInstanceAccessControlAttributeConfiguration(
    args: DescribeInstanceAccessControlAttributeConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInstanceAccessControlAttributeConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePermissionSetCommand}
   */
  describePermissionSet(
    args: DescribePermissionSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePermissionSetCommandOutput>;
  describePermissionSet(
    args: DescribePermissionSetCommandInput,
    cb: (err: any, data?: DescribePermissionSetCommandOutput) => void
  ): void;
  describePermissionSet(
    args: DescribePermissionSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePermissionSetCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePermissionSetProvisioningStatusCommand}
   */
  describePermissionSetProvisioningStatus(
    args: DescribePermissionSetProvisioningStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePermissionSetProvisioningStatusCommandOutput>;
  describePermissionSetProvisioningStatus(
    args: DescribePermissionSetProvisioningStatusCommandInput,
    cb: (err: any, data?: DescribePermissionSetProvisioningStatusCommandOutput) => void
  ): void;
  describePermissionSetProvisioningStatus(
    args: DescribePermissionSetProvisioningStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePermissionSetProvisioningStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link DetachCustomerManagedPolicyReferenceFromPermissionSetCommand}
   */
  detachCustomerManagedPolicyReferenceFromPermissionSet(
    args: DetachCustomerManagedPolicyReferenceFromPermissionSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachCustomerManagedPolicyReferenceFromPermissionSetCommandOutput>;
  detachCustomerManagedPolicyReferenceFromPermissionSet(
    args: DetachCustomerManagedPolicyReferenceFromPermissionSetCommandInput,
    cb: (err: any, data?: DetachCustomerManagedPolicyReferenceFromPermissionSetCommandOutput) => void
  ): void;
  detachCustomerManagedPolicyReferenceFromPermissionSet(
    args: DetachCustomerManagedPolicyReferenceFromPermissionSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachCustomerManagedPolicyReferenceFromPermissionSetCommandOutput) => void
  ): void;

  /**
   * @see {@link DetachManagedPolicyFromPermissionSetCommand}
   */
  detachManagedPolicyFromPermissionSet(
    args: DetachManagedPolicyFromPermissionSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachManagedPolicyFromPermissionSetCommandOutput>;
  detachManagedPolicyFromPermissionSet(
    args: DetachManagedPolicyFromPermissionSetCommandInput,
    cb: (err: any, data?: DetachManagedPolicyFromPermissionSetCommandOutput) => void
  ): void;
  detachManagedPolicyFromPermissionSet(
    args: DetachManagedPolicyFromPermissionSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachManagedPolicyFromPermissionSetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInlinePolicyForPermissionSetCommand}
   */
  getInlinePolicyForPermissionSet(
    args: GetInlinePolicyForPermissionSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInlinePolicyForPermissionSetCommandOutput>;
  getInlinePolicyForPermissionSet(
    args: GetInlinePolicyForPermissionSetCommandInput,
    cb: (err: any, data?: GetInlinePolicyForPermissionSetCommandOutput) => void
  ): void;
  getInlinePolicyForPermissionSet(
    args: GetInlinePolicyForPermissionSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInlinePolicyForPermissionSetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPermissionsBoundaryForPermissionSetCommand}
   */
  getPermissionsBoundaryForPermissionSet(
    args: GetPermissionsBoundaryForPermissionSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPermissionsBoundaryForPermissionSetCommandOutput>;
  getPermissionsBoundaryForPermissionSet(
    args: GetPermissionsBoundaryForPermissionSetCommandInput,
    cb: (err: any, data?: GetPermissionsBoundaryForPermissionSetCommandOutput) => void
  ): void;
  getPermissionsBoundaryForPermissionSet(
    args: GetPermissionsBoundaryForPermissionSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPermissionsBoundaryForPermissionSetCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccountAssignmentCreationStatusCommand}
   */
  listAccountAssignmentCreationStatus(
    args: ListAccountAssignmentCreationStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccountAssignmentCreationStatusCommandOutput>;
  listAccountAssignmentCreationStatus(
    args: ListAccountAssignmentCreationStatusCommandInput,
    cb: (err: any, data?: ListAccountAssignmentCreationStatusCommandOutput) => void
  ): void;
  listAccountAssignmentCreationStatus(
    args: ListAccountAssignmentCreationStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccountAssignmentCreationStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccountAssignmentDeletionStatusCommand}
   */
  listAccountAssignmentDeletionStatus(
    args: ListAccountAssignmentDeletionStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccountAssignmentDeletionStatusCommandOutput>;
  listAccountAssignmentDeletionStatus(
    args: ListAccountAssignmentDeletionStatusCommandInput,
    cb: (err: any, data?: ListAccountAssignmentDeletionStatusCommandOutput) => void
  ): void;
  listAccountAssignmentDeletionStatus(
    args: ListAccountAssignmentDeletionStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccountAssignmentDeletionStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccountAssignmentsCommand}
   */
  listAccountAssignments(
    args: ListAccountAssignmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccountAssignmentsCommandOutput>;
  listAccountAssignments(
    args: ListAccountAssignmentsCommandInput,
    cb: (err: any, data?: ListAccountAssignmentsCommandOutput) => void
  ): void;
  listAccountAssignments(
    args: ListAccountAssignmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccountAssignmentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccountsForProvisionedPermissionSetCommand}
   */
  listAccountsForProvisionedPermissionSet(
    args: ListAccountsForProvisionedPermissionSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccountsForProvisionedPermissionSetCommandOutput>;
  listAccountsForProvisionedPermissionSet(
    args: ListAccountsForProvisionedPermissionSetCommandInput,
    cb: (err: any, data?: ListAccountsForProvisionedPermissionSetCommandOutput) => void
  ): void;
  listAccountsForProvisionedPermissionSet(
    args: ListAccountsForProvisionedPermissionSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccountsForProvisionedPermissionSetCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCustomerManagedPolicyReferencesInPermissionSetCommand}
   */
  listCustomerManagedPolicyReferencesInPermissionSet(
    args: ListCustomerManagedPolicyReferencesInPermissionSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCustomerManagedPolicyReferencesInPermissionSetCommandOutput>;
  listCustomerManagedPolicyReferencesInPermissionSet(
    args: ListCustomerManagedPolicyReferencesInPermissionSetCommandInput,
    cb: (err: any, data?: ListCustomerManagedPolicyReferencesInPermissionSetCommandOutput) => void
  ): void;
  listCustomerManagedPolicyReferencesInPermissionSet(
    args: ListCustomerManagedPolicyReferencesInPermissionSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCustomerManagedPolicyReferencesInPermissionSetCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInstancesCommand}
   */
  listInstances(args: ListInstancesCommandInput, options?: __HttpHandlerOptions): Promise<ListInstancesCommandOutput>;
  listInstances(args: ListInstancesCommandInput, cb: (err: any, data?: ListInstancesCommandOutput) => void): void;
  listInstances(
    args: ListInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListManagedPoliciesInPermissionSetCommand}
   */
  listManagedPoliciesInPermissionSet(
    args: ListManagedPoliciesInPermissionSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListManagedPoliciesInPermissionSetCommandOutput>;
  listManagedPoliciesInPermissionSet(
    args: ListManagedPoliciesInPermissionSetCommandInput,
    cb: (err: any, data?: ListManagedPoliciesInPermissionSetCommandOutput) => void
  ): void;
  listManagedPoliciesInPermissionSet(
    args: ListManagedPoliciesInPermissionSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListManagedPoliciesInPermissionSetCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPermissionSetProvisioningStatusCommand}
   */
  listPermissionSetProvisioningStatus(
    args: ListPermissionSetProvisioningStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPermissionSetProvisioningStatusCommandOutput>;
  listPermissionSetProvisioningStatus(
    args: ListPermissionSetProvisioningStatusCommandInput,
    cb: (err: any, data?: ListPermissionSetProvisioningStatusCommandOutput) => void
  ): void;
  listPermissionSetProvisioningStatus(
    args: ListPermissionSetProvisioningStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPermissionSetProvisioningStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPermissionSetsCommand}
   */
  listPermissionSets(
    args: ListPermissionSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPermissionSetsCommandOutput>;
  listPermissionSets(
    args: ListPermissionSetsCommandInput,
    cb: (err: any, data?: ListPermissionSetsCommandOutput) => void
  ): void;
  listPermissionSets(
    args: ListPermissionSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPermissionSetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPermissionSetsProvisionedToAccountCommand}
   */
  listPermissionSetsProvisionedToAccount(
    args: ListPermissionSetsProvisionedToAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPermissionSetsProvisionedToAccountCommandOutput>;
  listPermissionSetsProvisionedToAccount(
    args: ListPermissionSetsProvisionedToAccountCommandInput,
    cb: (err: any, data?: ListPermissionSetsProvisionedToAccountCommandOutput) => void
  ): void;
  listPermissionSetsProvisionedToAccount(
    args: ListPermissionSetsProvisionedToAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPermissionSetsProvisionedToAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ProvisionPermissionSetCommand}
   */
  provisionPermissionSet(
    args: ProvisionPermissionSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ProvisionPermissionSetCommandOutput>;
  provisionPermissionSet(
    args: ProvisionPermissionSetCommandInput,
    cb: (err: any, data?: ProvisionPermissionSetCommandOutput) => void
  ): void;
  provisionPermissionSet(
    args: ProvisionPermissionSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ProvisionPermissionSetCommandOutput) => void
  ): void;

  /**
   * @see {@link PutInlinePolicyToPermissionSetCommand}
   */
  putInlinePolicyToPermissionSet(
    args: PutInlinePolicyToPermissionSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutInlinePolicyToPermissionSetCommandOutput>;
  putInlinePolicyToPermissionSet(
    args: PutInlinePolicyToPermissionSetCommandInput,
    cb: (err: any, data?: PutInlinePolicyToPermissionSetCommandOutput) => void
  ): void;
  putInlinePolicyToPermissionSet(
    args: PutInlinePolicyToPermissionSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutInlinePolicyToPermissionSetCommandOutput) => void
  ): void;

  /**
   * @see {@link PutPermissionsBoundaryToPermissionSetCommand}
   */
  putPermissionsBoundaryToPermissionSet(
    args: PutPermissionsBoundaryToPermissionSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutPermissionsBoundaryToPermissionSetCommandOutput>;
  putPermissionsBoundaryToPermissionSet(
    args: PutPermissionsBoundaryToPermissionSetCommandInput,
    cb: (err: any, data?: PutPermissionsBoundaryToPermissionSetCommandOutput) => void
  ): void;
  putPermissionsBoundaryToPermissionSet(
    args: PutPermissionsBoundaryToPermissionSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutPermissionsBoundaryToPermissionSetCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateInstanceAccessControlAttributeConfigurationCommand}
   */
  updateInstanceAccessControlAttributeConfiguration(
    args: UpdateInstanceAccessControlAttributeConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateInstanceAccessControlAttributeConfigurationCommandOutput>;
  updateInstanceAccessControlAttributeConfiguration(
    args: UpdateInstanceAccessControlAttributeConfigurationCommandInput,
    cb: (err: any, data?: UpdateInstanceAccessControlAttributeConfigurationCommandOutput) => void
  ): void;
  updateInstanceAccessControlAttributeConfiguration(
    args: UpdateInstanceAccessControlAttributeConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateInstanceAccessControlAttributeConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePermissionSetCommand}
   */
  updatePermissionSet(
    args: UpdatePermissionSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePermissionSetCommandOutput>;
  updatePermissionSet(
    args: UpdatePermissionSetCommandInput,
    cb: (err: any, data?: UpdatePermissionSetCommandOutput) => void
  ): void;
  updatePermissionSet(
    args: UpdatePermissionSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePermissionSetCommandOutput) => void
  ): void;
}

/**
 * @public
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
export class SSOAdmin extends SSOAdminClient implements SSOAdmin {}
createAggregatedClient(commands, SSOAdmin);
