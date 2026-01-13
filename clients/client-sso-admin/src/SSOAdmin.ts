// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

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
  CreateApplicationAssignmentCommand,
  CreateApplicationAssignmentCommandInput,
  CreateApplicationAssignmentCommandOutput,
} from "./commands/CreateApplicationAssignmentCommand";
import {
  CreateApplicationCommand,
  CreateApplicationCommandInput,
  CreateApplicationCommandOutput,
} from "./commands/CreateApplicationCommand";
import {
  CreateInstanceAccessControlAttributeConfigurationCommand,
  CreateInstanceAccessControlAttributeConfigurationCommandInput,
  CreateInstanceAccessControlAttributeConfigurationCommandOutput,
} from "./commands/CreateInstanceAccessControlAttributeConfigurationCommand";
import {
  CreateInstanceCommand,
  CreateInstanceCommandInput,
  CreateInstanceCommandOutput,
} from "./commands/CreateInstanceCommand";
import {
  CreatePermissionSetCommand,
  CreatePermissionSetCommandInput,
  CreatePermissionSetCommandOutput,
} from "./commands/CreatePermissionSetCommand";
import {
  CreateTrustedTokenIssuerCommand,
  CreateTrustedTokenIssuerCommandInput,
  CreateTrustedTokenIssuerCommandOutput,
} from "./commands/CreateTrustedTokenIssuerCommand";
import {
  DeleteAccountAssignmentCommand,
  DeleteAccountAssignmentCommandInput,
  DeleteAccountAssignmentCommandOutput,
} from "./commands/DeleteAccountAssignmentCommand";
import {
  DeleteApplicationAccessScopeCommand,
  DeleteApplicationAccessScopeCommandInput,
  DeleteApplicationAccessScopeCommandOutput,
} from "./commands/DeleteApplicationAccessScopeCommand";
import {
  DeleteApplicationAssignmentCommand,
  DeleteApplicationAssignmentCommandInput,
  DeleteApplicationAssignmentCommandOutput,
} from "./commands/DeleteApplicationAssignmentCommand";
import {
  DeleteApplicationAuthenticationMethodCommand,
  DeleteApplicationAuthenticationMethodCommandInput,
  DeleteApplicationAuthenticationMethodCommandOutput,
} from "./commands/DeleteApplicationAuthenticationMethodCommand";
import {
  DeleteApplicationCommand,
  DeleteApplicationCommandInput,
  DeleteApplicationCommandOutput,
} from "./commands/DeleteApplicationCommand";
import {
  DeleteApplicationGrantCommand,
  DeleteApplicationGrantCommandInput,
  DeleteApplicationGrantCommandOutput,
} from "./commands/DeleteApplicationGrantCommand";
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
  DeleteInstanceCommand,
  DeleteInstanceCommandInput,
  DeleteInstanceCommandOutput,
} from "./commands/DeleteInstanceCommand";
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
  DeleteTrustedTokenIssuerCommand,
  DeleteTrustedTokenIssuerCommandInput,
  DeleteTrustedTokenIssuerCommandOutput,
} from "./commands/DeleteTrustedTokenIssuerCommand";
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
  DescribeApplicationAssignmentCommand,
  DescribeApplicationAssignmentCommandInput,
  DescribeApplicationAssignmentCommandOutput,
} from "./commands/DescribeApplicationAssignmentCommand";
import {
  DescribeApplicationCommand,
  DescribeApplicationCommandInput,
  DescribeApplicationCommandOutput,
} from "./commands/DescribeApplicationCommand";
import {
  DescribeApplicationProviderCommand,
  DescribeApplicationProviderCommandInput,
  DescribeApplicationProviderCommandOutput,
} from "./commands/DescribeApplicationProviderCommand";
import {
  DescribeInstanceAccessControlAttributeConfigurationCommand,
  DescribeInstanceAccessControlAttributeConfigurationCommandInput,
  DescribeInstanceAccessControlAttributeConfigurationCommandOutput,
} from "./commands/DescribeInstanceAccessControlAttributeConfigurationCommand";
import {
  DescribeInstanceCommand,
  DescribeInstanceCommandInput,
  DescribeInstanceCommandOutput,
} from "./commands/DescribeInstanceCommand";
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
  DescribeTrustedTokenIssuerCommand,
  DescribeTrustedTokenIssuerCommandInput,
  DescribeTrustedTokenIssuerCommandOutput,
} from "./commands/DescribeTrustedTokenIssuerCommand";
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
  GetApplicationAccessScopeCommand,
  GetApplicationAccessScopeCommandInput,
  GetApplicationAccessScopeCommandOutput,
} from "./commands/GetApplicationAccessScopeCommand";
import {
  GetApplicationAssignmentConfigurationCommand,
  GetApplicationAssignmentConfigurationCommandInput,
  GetApplicationAssignmentConfigurationCommandOutput,
} from "./commands/GetApplicationAssignmentConfigurationCommand";
import {
  GetApplicationAuthenticationMethodCommand,
  GetApplicationAuthenticationMethodCommandInput,
  GetApplicationAuthenticationMethodCommandOutput,
} from "./commands/GetApplicationAuthenticationMethodCommand";
import {
  GetApplicationGrantCommand,
  GetApplicationGrantCommandInput,
  GetApplicationGrantCommandOutput,
} from "./commands/GetApplicationGrantCommand";
import {
  GetApplicationSessionConfigurationCommand,
  GetApplicationSessionConfigurationCommandInput,
  GetApplicationSessionConfigurationCommandOutput,
} from "./commands/GetApplicationSessionConfigurationCommand";
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
  ListAccountAssignmentsForPrincipalCommand,
  ListAccountAssignmentsForPrincipalCommandInput,
  ListAccountAssignmentsForPrincipalCommandOutput,
} from "./commands/ListAccountAssignmentsForPrincipalCommand";
import {
  ListAccountsForProvisionedPermissionSetCommand,
  ListAccountsForProvisionedPermissionSetCommandInput,
  ListAccountsForProvisionedPermissionSetCommandOutput,
} from "./commands/ListAccountsForProvisionedPermissionSetCommand";
import {
  ListApplicationAccessScopesCommand,
  ListApplicationAccessScopesCommandInput,
  ListApplicationAccessScopesCommandOutput,
} from "./commands/ListApplicationAccessScopesCommand";
import {
  ListApplicationAssignmentsCommand,
  ListApplicationAssignmentsCommandInput,
  ListApplicationAssignmentsCommandOutput,
} from "./commands/ListApplicationAssignmentsCommand";
import {
  ListApplicationAssignmentsForPrincipalCommand,
  ListApplicationAssignmentsForPrincipalCommandInput,
  ListApplicationAssignmentsForPrincipalCommandOutput,
} from "./commands/ListApplicationAssignmentsForPrincipalCommand";
import {
  ListApplicationAuthenticationMethodsCommand,
  ListApplicationAuthenticationMethodsCommandInput,
  ListApplicationAuthenticationMethodsCommandOutput,
} from "./commands/ListApplicationAuthenticationMethodsCommand";
import {
  ListApplicationGrantsCommand,
  ListApplicationGrantsCommandInput,
  ListApplicationGrantsCommandOutput,
} from "./commands/ListApplicationGrantsCommand";
import {
  ListApplicationProvidersCommand,
  ListApplicationProvidersCommandInput,
  ListApplicationProvidersCommandOutput,
} from "./commands/ListApplicationProvidersCommand";
import {
  ListApplicationsCommand,
  ListApplicationsCommandInput,
  ListApplicationsCommandOutput,
} from "./commands/ListApplicationsCommand";
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
  ListTrustedTokenIssuersCommand,
  ListTrustedTokenIssuersCommandInput,
  ListTrustedTokenIssuersCommandOutput,
} from "./commands/ListTrustedTokenIssuersCommand";
import {
  ProvisionPermissionSetCommand,
  ProvisionPermissionSetCommandInput,
  ProvisionPermissionSetCommandOutput,
} from "./commands/ProvisionPermissionSetCommand";
import {
  PutApplicationAccessScopeCommand,
  PutApplicationAccessScopeCommandInput,
  PutApplicationAccessScopeCommandOutput,
} from "./commands/PutApplicationAccessScopeCommand";
import {
  PutApplicationAssignmentConfigurationCommand,
  PutApplicationAssignmentConfigurationCommandInput,
  PutApplicationAssignmentConfigurationCommandOutput,
} from "./commands/PutApplicationAssignmentConfigurationCommand";
import {
  PutApplicationAuthenticationMethodCommand,
  PutApplicationAuthenticationMethodCommandInput,
  PutApplicationAuthenticationMethodCommandOutput,
} from "./commands/PutApplicationAuthenticationMethodCommand";
import {
  PutApplicationGrantCommand,
  PutApplicationGrantCommandInput,
  PutApplicationGrantCommandOutput,
} from "./commands/PutApplicationGrantCommand";
import {
  PutApplicationSessionConfigurationCommand,
  PutApplicationSessionConfigurationCommandInput,
  PutApplicationSessionConfigurationCommandOutput,
} from "./commands/PutApplicationSessionConfigurationCommand";
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
  UpdateApplicationCommand,
  UpdateApplicationCommandInput,
  UpdateApplicationCommandOutput,
} from "./commands/UpdateApplicationCommand";
import {
  UpdateInstanceAccessControlAttributeConfigurationCommand,
  UpdateInstanceAccessControlAttributeConfigurationCommandInput,
  UpdateInstanceAccessControlAttributeConfigurationCommandOutput,
} from "./commands/UpdateInstanceAccessControlAttributeConfigurationCommand";
import {
  UpdateInstanceCommand,
  UpdateInstanceCommandInput,
  UpdateInstanceCommandOutput,
} from "./commands/UpdateInstanceCommand";
import {
  UpdatePermissionSetCommand,
  UpdatePermissionSetCommandInput,
  UpdatePermissionSetCommandOutput,
} from "./commands/UpdatePermissionSetCommand";
import {
  UpdateTrustedTokenIssuerCommand,
  UpdateTrustedTokenIssuerCommandInput,
  UpdateTrustedTokenIssuerCommandOutput,
} from "./commands/UpdateTrustedTokenIssuerCommand";
import { SSOAdminClient } from "./SSOAdminClient";

const commands = {
  AttachCustomerManagedPolicyReferenceToPermissionSetCommand,
  AttachManagedPolicyToPermissionSetCommand,
  CreateAccountAssignmentCommand,
  CreateApplicationCommand,
  CreateApplicationAssignmentCommand,
  CreateInstanceCommand,
  CreateInstanceAccessControlAttributeConfigurationCommand,
  CreatePermissionSetCommand,
  CreateTrustedTokenIssuerCommand,
  DeleteAccountAssignmentCommand,
  DeleteApplicationCommand,
  DeleteApplicationAccessScopeCommand,
  DeleteApplicationAssignmentCommand,
  DeleteApplicationAuthenticationMethodCommand,
  DeleteApplicationGrantCommand,
  DeleteInlinePolicyFromPermissionSetCommand,
  DeleteInstanceCommand,
  DeleteInstanceAccessControlAttributeConfigurationCommand,
  DeletePermissionsBoundaryFromPermissionSetCommand,
  DeletePermissionSetCommand,
  DeleteTrustedTokenIssuerCommand,
  DescribeAccountAssignmentCreationStatusCommand,
  DescribeAccountAssignmentDeletionStatusCommand,
  DescribeApplicationCommand,
  DescribeApplicationAssignmentCommand,
  DescribeApplicationProviderCommand,
  DescribeInstanceCommand,
  DescribeInstanceAccessControlAttributeConfigurationCommand,
  DescribePermissionSetCommand,
  DescribePermissionSetProvisioningStatusCommand,
  DescribeTrustedTokenIssuerCommand,
  DetachCustomerManagedPolicyReferenceFromPermissionSetCommand,
  DetachManagedPolicyFromPermissionSetCommand,
  GetApplicationAccessScopeCommand,
  GetApplicationAssignmentConfigurationCommand,
  GetApplicationAuthenticationMethodCommand,
  GetApplicationGrantCommand,
  GetApplicationSessionConfigurationCommand,
  GetInlinePolicyForPermissionSetCommand,
  GetPermissionsBoundaryForPermissionSetCommand,
  ListAccountAssignmentCreationStatusCommand,
  ListAccountAssignmentDeletionStatusCommand,
  ListAccountAssignmentsCommand,
  ListAccountAssignmentsForPrincipalCommand,
  ListAccountsForProvisionedPermissionSetCommand,
  ListApplicationAccessScopesCommand,
  ListApplicationAssignmentsCommand,
  ListApplicationAssignmentsForPrincipalCommand,
  ListApplicationAuthenticationMethodsCommand,
  ListApplicationGrantsCommand,
  ListApplicationProvidersCommand,
  ListApplicationsCommand,
  ListCustomerManagedPolicyReferencesInPermissionSetCommand,
  ListInstancesCommand,
  ListManagedPoliciesInPermissionSetCommand,
  ListPermissionSetProvisioningStatusCommand,
  ListPermissionSetsCommand,
  ListPermissionSetsProvisionedToAccountCommand,
  ListTagsForResourceCommand,
  ListTrustedTokenIssuersCommand,
  ProvisionPermissionSetCommand,
  PutApplicationAccessScopeCommand,
  PutApplicationAssignmentConfigurationCommand,
  PutApplicationAuthenticationMethodCommand,
  PutApplicationGrantCommand,
  PutApplicationSessionConfigurationCommand,
  PutInlinePolicyToPermissionSetCommand,
  PutPermissionsBoundaryToPermissionSetCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateApplicationCommand,
  UpdateInstanceCommand,
  UpdateInstanceAccessControlAttributeConfigurationCommand,
  UpdatePermissionSetCommand,
  UpdateTrustedTokenIssuerCommand,
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
   * @see {@link CreateApplicationCommand}
   */
  createApplication(
    args: CreateApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateApplicationCommandOutput>;
  createApplication(
    args: CreateApplicationCommandInput,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;
  createApplication(
    args: CreateApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateApplicationAssignmentCommand}
   */
  createApplicationAssignment(
    args: CreateApplicationAssignmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateApplicationAssignmentCommandOutput>;
  createApplicationAssignment(
    args: CreateApplicationAssignmentCommandInput,
    cb: (err: any, data?: CreateApplicationAssignmentCommandOutput) => void
  ): void;
  createApplicationAssignment(
    args: CreateApplicationAssignmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateApplicationAssignmentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateInstanceCommand}
   */
  createInstance(): Promise<CreateInstanceCommandOutput>;
  createInstance(
    args: CreateInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateInstanceCommandOutput>;
  createInstance(
    args: CreateInstanceCommandInput,
    cb: (err: any, data?: CreateInstanceCommandOutput) => void
  ): void;
  createInstance(
    args: CreateInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateInstanceCommandOutput) => void
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
   * @see {@link CreateTrustedTokenIssuerCommand}
   */
  createTrustedTokenIssuer(
    args: CreateTrustedTokenIssuerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTrustedTokenIssuerCommandOutput>;
  createTrustedTokenIssuer(
    args: CreateTrustedTokenIssuerCommandInput,
    cb: (err: any, data?: CreateTrustedTokenIssuerCommandOutput) => void
  ): void;
  createTrustedTokenIssuer(
    args: CreateTrustedTokenIssuerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTrustedTokenIssuerCommandOutput) => void
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
   * @see {@link DeleteApplicationCommand}
   */
  deleteApplication(
    args: DeleteApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApplicationCommandOutput>;
  deleteApplication(
    args: DeleteApplicationCommandInput,
    cb: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): void;
  deleteApplication(
    args: DeleteApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteApplicationAccessScopeCommand}
   */
  deleteApplicationAccessScope(
    args: DeleteApplicationAccessScopeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApplicationAccessScopeCommandOutput>;
  deleteApplicationAccessScope(
    args: DeleteApplicationAccessScopeCommandInput,
    cb: (err: any, data?: DeleteApplicationAccessScopeCommandOutput) => void
  ): void;
  deleteApplicationAccessScope(
    args: DeleteApplicationAccessScopeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApplicationAccessScopeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteApplicationAssignmentCommand}
   */
  deleteApplicationAssignment(
    args: DeleteApplicationAssignmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApplicationAssignmentCommandOutput>;
  deleteApplicationAssignment(
    args: DeleteApplicationAssignmentCommandInput,
    cb: (err: any, data?: DeleteApplicationAssignmentCommandOutput) => void
  ): void;
  deleteApplicationAssignment(
    args: DeleteApplicationAssignmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApplicationAssignmentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteApplicationAuthenticationMethodCommand}
   */
  deleteApplicationAuthenticationMethod(
    args: DeleteApplicationAuthenticationMethodCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApplicationAuthenticationMethodCommandOutput>;
  deleteApplicationAuthenticationMethod(
    args: DeleteApplicationAuthenticationMethodCommandInput,
    cb: (err: any, data?: DeleteApplicationAuthenticationMethodCommandOutput) => void
  ): void;
  deleteApplicationAuthenticationMethod(
    args: DeleteApplicationAuthenticationMethodCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApplicationAuthenticationMethodCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteApplicationGrantCommand}
   */
  deleteApplicationGrant(
    args: DeleteApplicationGrantCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApplicationGrantCommandOutput>;
  deleteApplicationGrant(
    args: DeleteApplicationGrantCommandInput,
    cb: (err: any, data?: DeleteApplicationGrantCommandOutput) => void
  ): void;
  deleteApplicationGrant(
    args: DeleteApplicationGrantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApplicationGrantCommandOutput) => void
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
   * @see {@link DeleteInstanceCommand}
   */
  deleteInstance(
    args: DeleteInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInstanceCommandOutput>;
  deleteInstance(
    args: DeleteInstanceCommandInput,
    cb: (err: any, data?: DeleteInstanceCommandOutput) => void
  ): void;
  deleteInstance(
    args: DeleteInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInstanceCommandOutput) => void
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
   * @see {@link DeleteTrustedTokenIssuerCommand}
   */
  deleteTrustedTokenIssuer(
    args: DeleteTrustedTokenIssuerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTrustedTokenIssuerCommandOutput>;
  deleteTrustedTokenIssuer(
    args: DeleteTrustedTokenIssuerCommandInput,
    cb: (err: any, data?: DeleteTrustedTokenIssuerCommandOutput) => void
  ): void;
  deleteTrustedTokenIssuer(
    args: DeleteTrustedTokenIssuerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTrustedTokenIssuerCommandOutput) => void
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
   * @see {@link DescribeApplicationCommand}
   */
  describeApplication(
    args: DescribeApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeApplicationCommandOutput>;
  describeApplication(
    args: DescribeApplicationCommandInput,
    cb: (err: any, data?: DescribeApplicationCommandOutput) => void
  ): void;
  describeApplication(
    args: DescribeApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeApplicationAssignmentCommand}
   */
  describeApplicationAssignment(
    args: DescribeApplicationAssignmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeApplicationAssignmentCommandOutput>;
  describeApplicationAssignment(
    args: DescribeApplicationAssignmentCommandInput,
    cb: (err: any, data?: DescribeApplicationAssignmentCommandOutput) => void
  ): void;
  describeApplicationAssignment(
    args: DescribeApplicationAssignmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeApplicationAssignmentCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeApplicationProviderCommand}
   */
  describeApplicationProvider(
    args: DescribeApplicationProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeApplicationProviderCommandOutput>;
  describeApplicationProvider(
    args: DescribeApplicationProviderCommandInput,
    cb: (err: any, data?: DescribeApplicationProviderCommandOutput) => void
  ): void;
  describeApplicationProvider(
    args: DescribeApplicationProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeApplicationProviderCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeInstanceCommand}
   */
  describeInstance(
    args: DescribeInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInstanceCommandOutput>;
  describeInstance(
    args: DescribeInstanceCommandInput,
    cb: (err: any, data?: DescribeInstanceCommandOutput) => void
  ): void;
  describeInstance(
    args: DescribeInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInstanceCommandOutput) => void
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
   * @see {@link DescribeTrustedTokenIssuerCommand}
   */
  describeTrustedTokenIssuer(
    args: DescribeTrustedTokenIssuerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTrustedTokenIssuerCommandOutput>;
  describeTrustedTokenIssuer(
    args: DescribeTrustedTokenIssuerCommandInput,
    cb: (err: any, data?: DescribeTrustedTokenIssuerCommandOutput) => void
  ): void;
  describeTrustedTokenIssuer(
    args: DescribeTrustedTokenIssuerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTrustedTokenIssuerCommandOutput) => void
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
   * @see {@link GetApplicationAccessScopeCommand}
   */
  getApplicationAccessScope(
    args: GetApplicationAccessScopeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetApplicationAccessScopeCommandOutput>;
  getApplicationAccessScope(
    args: GetApplicationAccessScopeCommandInput,
    cb: (err: any, data?: GetApplicationAccessScopeCommandOutput) => void
  ): void;
  getApplicationAccessScope(
    args: GetApplicationAccessScopeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApplicationAccessScopeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetApplicationAssignmentConfigurationCommand}
   */
  getApplicationAssignmentConfiguration(
    args: GetApplicationAssignmentConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetApplicationAssignmentConfigurationCommandOutput>;
  getApplicationAssignmentConfiguration(
    args: GetApplicationAssignmentConfigurationCommandInput,
    cb: (err: any, data?: GetApplicationAssignmentConfigurationCommandOutput) => void
  ): void;
  getApplicationAssignmentConfiguration(
    args: GetApplicationAssignmentConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApplicationAssignmentConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetApplicationAuthenticationMethodCommand}
   */
  getApplicationAuthenticationMethod(
    args: GetApplicationAuthenticationMethodCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetApplicationAuthenticationMethodCommandOutput>;
  getApplicationAuthenticationMethod(
    args: GetApplicationAuthenticationMethodCommandInput,
    cb: (err: any, data?: GetApplicationAuthenticationMethodCommandOutput) => void
  ): void;
  getApplicationAuthenticationMethod(
    args: GetApplicationAuthenticationMethodCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApplicationAuthenticationMethodCommandOutput) => void
  ): void;

  /**
   * @see {@link GetApplicationGrantCommand}
   */
  getApplicationGrant(
    args: GetApplicationGrantCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetApplicationGrantCommandOutput>;
  getApplicationGrant(
    args: GetApplicationGrantCommandInput,
    cb: (err: any, data?: GetApplicationGrantCommandOutput) => void
  ): void;
  getApplicationGrant(
    args: GetApplicationGrantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApplicationGrantCommandOutput) => void
  ): void;

  /**
   * @see {@link GetApplicationSessionConfigurationCommand}
   */
  getApplicationSessionConfiguration(
    args: GetApplicationSessionConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetApplicationSessionConfigurationCommandOutput>;
  getApplicationSessionConfiguration(
    args: GetApplicationSessionConfigurationCommandInput,
    cb: (err: any, data?: GetApplicationSessionConfigurationCommandOutput) => void
  ): void;
  getApplicationSessionConfiguration(
    args: GetApplicationSessionConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApplicationSessionConfigurationCommandOutput) => void
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
   * @see {@link ListAccountAssignmentsForPrincipalCommand}
   */
  listAccountAssignmentsForPrincipal(
    args: ListAccountAssignmentsForPrincipalCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccountAssignmentsForPrincipalCommandOutput>;
  listAccountAssignmentsForPrincipal(
    args: ListAccountAssignmentsForPrincipalCommandInput,
    cb: (err: any, data?: ListAccountAssignmentsForPrincipalCommandOutput) => void
  ): void;
  listAccountAssignmentsForPrincipal(
    args: ListAccountAssignmentsForPrincipalCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccountAssignmentsForPrincipalCommandOutput) => void
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
   * @see {@link ListApplicationAccessScopesCommand}
   */
  listApplicationAccessScopes(
    args: ListApplicationAccessScopesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApplicationAccessScopesCommandOutput>;
  listApplicationAccessScopes(
    args: ListApplicationAccessScopesCommandInput,
    cb: (err: any, data?: ListApplicationAccessScopesCommandOutput) => void
  ): void;
  listApplicationAccessScopes(
    args: ListApplicationAccessScopesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApplicationAccessScopesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListApplicationAssignmentsCommand}
   */
  listApplicationAssignments(
    args: ListApplicationAssignmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApplicationAssignmentsCommandOutput>;
  listApplicationAssignments(
    args: ListApplicationAssignmentsCommandInput,
    cb: (err: any, data?: ListApplicationAssignmentsCommandOutput) => void
  ): void;
  listApplicationAssignments(
    args: ListApplicationAssignmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApplicationAssignmentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListApplicationAssignmentsForPrincipalCommand}
   */
  listApplicationAssignmentsForPrincipal(
    args: ListApplicationAssignmentsForPrincipalCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApplicationAssignmentsForPrincipalCommandOutput>;
  listApplicationAssignmentsForPrincipal(
    args: ListApplicationAssignmentsForPrincipalCommandInput,
    cb: (err: any, data?: ListApplicationAssignmentsForPrincipalCommandOutput) => void
  ): void;
  listApplicationAssignmentsForPrincipal(
    args: ListApplicationAssignmentsForPrincipalCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApplicationAssignmentsForPrincipalCommandOutput) => void
  ): void;

  /**
   * @see {@link ListApplicationAuthenticationMethodsCommand}
   */
  listApplicationAuthenticationMethods(
    args: ListApplicationAuthenticationMethodsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApplicationAuthenticationMethodsCommandOutput>;
  listApplicationAuthenticationMethods(
    args: ListApplicationAuthenticationMethodsCommandInput,
    cb: (err: any, data?: ListApplicationAuthenticationMethodsCommandOutput) => void
  ): void;
  listApplicationAuthenticationMethods(
    args: ListApplicationAuthenticationMethodsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApplicationAuthenticationMethodsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListApplicationGrantsCommand}
   */
  listApplicationGrants(
    args: ListApplicationGrantsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApplicationGrantsCommandOutput>;
  listApplicationGrants(
    args: ListApplicationGrantsCommandInput,
    cb: (err: any, data?: ListApplicationGrantsCommandOutput) => void
  ): void;
  listApplicationGrants(
    args: ListApplicationGrantsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApplicationGrantsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListApplicationProvidersCommand}
   */
  listApplicationProviders(): Promise<ListApplicationProvidersCommandOutput>;
  listApplicationProviders(
    args: ListApplicationProvidersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApplicationProvidersCommandOutput>;
  listApplicationProviders(
    args: ListApplicationProvidersCommandInput,
    cb: (err: any, data?: ListApplicationProvidersCommandOutput) => void
  ): void;
  listApplicationProviders(
    args: ListApplicationProvidersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApplicationProvidersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListApplicationsCommand}
   */
  listApplications(
    args: ListApplicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApplicationsCommandOutput>;
  listApplications(
    args: ListApplicationsCommandInput,
    cb: (err: any, data?: ListApplicationsCommandOutput) => void
  ): void;
  listApplications(
    args: ListApplicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApplicationsCommandOutput) => void
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
  listInstances(): Promise<ListInstancesCommandOutput>;
  listInstances(
    args: ListInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInstancesCommandOutput>;
  listInstances(
    args: ListInstancesCommandInput,
    cb: (err: any, data?: ListInstancesCommandOutput) => void
  ): void;
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
   * @see {@link ListTrustedTokenIssuersCommand}
   */
  listTrustedTokenIssuers(
    args: ListTrustedTokenIssuersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTrustedTokenIssuersCommandOutput>;
  listTrustedTokenIssuers(
    args: ListTrustedTokenIssuersCommandInput,
    cb: (err: any, data?: ListTrustedTokenIssuersCommandOutput) => void
  ): void;
  listTrustedTokenIssuers(
    args: ListTrustedTokenIssuersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTrustedTokenIssuersCommandOutput) => void
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
   * @see {@link PutApplicationAccessScopeCommand}
   */
  putApplicationAccessScope(
    args: PutApplicationAccessScopeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutApplicationAccessScopeCommandOutput>;
  putApplicationAccessScope(
    args: PutApplicationAccessScopeCommandInput,
    cb: (err: any, data?: PutApplicationAccessScopeCommandOutput) => void
  ): void;
  putApplicationAccessScope(
    args: PutApplicationAccessScopeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutApplicationAccessScopeCommandOutput) => void
  ): void;

  /**
   * @see {@link PutApplicationAssignmentConfigurationCommand}
   */
  putApplicationAssignmentConfiguration(
    args: PutApplicationAssignmentConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutApplicationAssignmentConfigurationCommandOutput>;
  putApplicationAssignmentConfiguration(
    args: PutApplicationAssignmentConfigurationCommandInput,
    cb: (err: any, data?: PutApplicationAssignmentConfigurationCommandOutput) => void
  ): void;
  putApplicationAssignmentConfiguration(
    args: PutApplicationAssignmentConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutApplicationAssignmentConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutApplicationAuthenticationMethodCommand}
   */
  putApplicationAuthenticationMethod(
    args: PutApplicationAuthenticationMethodCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutApplicationAuthenticationMethodCommandOutput>;
  putApplicationAuthenticationMethod(
    args: PutApplicationAuthenticationMethodCommandInput,
    cb: (err: any, data?: PutApplicationAuthenticationMethodCommandOutput) => void
  ): void;
  putApplicationAuthenticationMethod(
    args: PutApplicationAuthenticationMethodCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutApplicationAuthenticationMethodCommandOutput) => void
  ): void;

  /**
   * @see {@link PutApplicationGrantCommand}
   */
  putApplicationGrant(
    args: PutApplicationGrantCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutApplicationGrantCommandOutput>;
  putApplicationGrant(
    args: PutApplicationGrantCommandInput,
    cb: (err: any, data?: PutApplicationGrantCommandOutput) => void
  ): void;
  putApplicationGrant(
    args: PutApplicationGrantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutApplicationGrantCommandOutput) => void
  ): void;

  /**
   * @see {@link PutApplicationSessionConfigurationCommand}
   */
  putApplicationSessionConfiguration(
    args: PutApplicationSessionConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutApplicationSessionConfigurationCommandOutput>;
  putApplicationSessionConfiguration(
    args: PutApplicationSessionConfigurationCommandInput,
    cb: (err: any, data?: PutApplicationSessionConfigurationCommandOutput) => void
  ): void;
  putApplicationSessionConfiguration(
    args: PutApplicationSessionConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutApplicationSessionConfigurationCommandOutput) => void
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
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateApplicationCommand}
   */
  updateApplication(
    args: UpdateApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApplicationCommandOutput>;
  updateApplication(
    args: UpdateApplicationCommandInput,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;
  updateApplication(
    args: UpdateApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateInstanceCommand}
   */
  updateInstance(
    args: UpdateInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateInstanceCommandOutput>;
  updateInstance(
    args: UpdateInstanceCommandInput,
    cb: (err: any, data?: UpdateInstanceCommandOutput) => void
  ): void;
  updateInstance(
    args: UpdateInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateInstanceCommandOutput) => void
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

  /**
   * @see {@link UpdateTrustedTokenIssuerCommand}
   */
  updateTrustedTokenIssuer(
    args: UpdateTrustedTokenIssuerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTrustedTokenIssuerCommandOutput>;
  updateTrustedTokenIssuer(
    args: UpdateTrustedTokenIssuerCommandInput,
    cb: (err: any, data?: UpdateTrustedTokenIssuerCommandOutput) => void
  ): void;
  updateTrustedTokenIssuer(
    args: UpdateTrustedTokenIssuerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTrustedTokenIssuerCommandOutput) => void
  ): void;
}

/**
 * <p>IAM Identity Center is the Amazon Web Services solution for connecting your workforce users to Amazon Web Services managed applications and other Amazon Web Services resources. You can connect your existing identity provider and synchronize users and groups from your directory, or create and manage your users directly in IAM Identity Center. You can then use IAM Identity Center for either or both of the following:</p> <ul> <li> <p>User access to applications</p> </li> <li> <p>User access to Amazon Web Services accounts</p> </li> </ul> <p>This guide provides information about single sign-on operations that you can use for access to applications and Amazon Web Services accounts. For information about IAM Identity Center features, see the <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html">IAM Identity Center User Guide</a>.</p> <note> <p>IAM Identity Center uses the <code>sso</code> and <code>identitystore</code> API namespaces.</p> </note> <p>Many API operations for IAM Identity Center rely on identifiers for users and groups, known as principals. For more information about how to work with principals and principal IDs in IAM Identity Center, see the <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/welcome.html">Identity Store API Reference</a>.</p> <note> <p>Amazon Web Services provides SDKs that consist of libraries and sample code for various programming languages and platforms (Java, Ruby, .Net, iOS, Android, and more). The SDKs provide a convenient way to create programmatic access to IAM Identity Center and other Amazon Web Services services. For more information about the Amazon Web Services SDKs, including how to download and install them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p> </note>
 * @public
 */
export class SSOAdmin extends SSOAdminClient implements SSOAdmin {}
createAggregatedClient(commands, SSOAdmin);
