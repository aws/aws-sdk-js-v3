// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import { type AddRegionCommandInput, type AddRegionCommandOutput, AddRegionCommand } from "./commands/AddRegionCommand";
import {
  type AttachCustomerManagedPolicyReferenceToPermissionSetCommandInput,
  type AttachCustomerManagedPolicyReferenceToPermissionSetCommandOutput,
  AttachCustomerManagedPolicyReferenceToPermissionSetCommand,
} from "./commands/AttachCustomerManagedPolicyReferenceToPermissionSetCommand";
import {
  type AttachManagedPolicyToPermissionSetCommandInput,
  type AttachManagedPolicyToPermissionSetCommandOutput,
  AttachManagedPolicyToPermissionSetCommand,
} from "./commands/AttachManagedPolicyToPermissionSetCommand";
import {
  type CreateAccountAssignmentCommandInput,
  type CreateAccountAssignmentCommandOutput,
  CreateAccountAssignmentCommand,
} from "./commands/CreateAccountAssignmentCommand";
import {
  type CreateApplicationAssignmentCommandInput,
  type CreateApplicationAssignmentCommandOutput,
  CreateApplicationAssignmentCommand,
} from "./commands/CreateApplicationAssignmentCommand";
import {
  type CreateApplicationCommandInput,
  type CreateApplicationCommandOutput,
  CreateApplicationCommand,
} from "./commands/CreateApplicationCommand";
import {
  type CreateInstanceAccessControlAttributeConfigurationCommandInput,
  type CreateInstanceAccessControlAttributeConfigurationCommandOutput,
  CreateInstanceAccessControlAttributeConfigurationCommand,
} from "./commands/CreateInstanceAccessControlAttributeConfigurationCommand";
import {
  type CreateInstanceCommandInput,
  type CreateInstanceCommandOutput,
  CreateInstanceCommand,
} from "./commands/CreateInstanceCommand";
import {
  type CreatePermissionSetCommandInput,
  type CreatePermissionSetCommandOutput,
  CreatePermissionSetCommand,
} from "./commands/CreatePermissionSetCommand";
import {
  type CreateTrustedTokenIssuerCommandInput,
  type CreateTrustedTokenIssuerCommandOutput,
  CreateTrustedTokenIssuerCommand,
} from "./commands/CreateTrustedTokenIssuerCommand";
import {
  type DeleteAccountAssignmentCommandInput,
  type DeleteAccountAssignmentCommandOutput,
  DeleteAccountAssignmentCommand,
} from "./commands/DeleteAccountAssignmentCommand";
import {
  type DeleteApplicationAccessScopeCommandInput,
  type DeleteApplicationAccessScopeCommandOutput,
  DeleteApplicationAccessScopeCommand,
} from "./commands/DeleteApplicationAccessScopeCommand";
import {
  type DeleteApplicationAssignmentCommandInput,
  type DeleteApplicationAssignmentCommandOutput,
  DeleteApplicationAssignmentCommand,
} from "./commands/DeleteApplicationAssignmentCommand";
import {
  type DeleteApplicationAuthenticationMethodCommandInput,
  type DeleteApplicationAuthenticationMethodCommandOutput,
  DeleteApplicationAuthenticationMethodCommand,
} from "./commands/DeleteApplicationAuthenticationMethodCommand";
import {
  type DeleteApplicationCommandInput,
  type DeleteApplicationCommandOutput,
  DeleteApplicationCommand,
} from "./commands/DeleteApplicationCommand";
import {
  type DeleteApplicationGrantCommandInput,
  type DeleteApplicationGrantCommandOutput,
  DeleteApplicationGrantCommand,
} from "./commands/DeleteApplicationGrantCommand";
import {
  type DeleteInlinePolicyFromPermissionSetCommandInput,
  type DeleteInlinePolicyFromPermissionSetCommandOutput,
  DeleteInlinePolicyFromPermissionSetCommand,
} from "./commands/DeleteInlinePolicyFromPermissionSetCommand";
import {
  type DeleteInstanceAccessControlAttributeConfigurationCommandInput,
  type DeleteInstanceAccessControlAttributeConfigurationCommandOutput,
  DeleteInstanceAccessControlAttributeConfigurationCommand,
} from "./commands/DeleteInstanceAccessControlAttributeConfigurationCommand";
import {
  type DeleteInstanceCommandInput,
  type DeleteInstanceCommandOutput,
  DeleteInstanceCommand,
} from "./commands/DeleteInstanceCommand";
import {
  type DeletePermissionsBoundaryFromPermissionSetCommandInput,
  type DeletePermissionsBoundaryFromPermissionSetCommandOutput,
  DeletePermissionsBoundaryFromPermissionSetCommand,
} from "./commands/DeletePermissionsBoundaryFromPermissionSetCommand";
import {
  type DeletePermissionSetCommandInput,
  type DeletePermissionSetCommandOutput,
  DeletePermissionSetCommand,
} from "./commands/DeletePermissionSetCommand";
import {
  type DeleteTrustedTokenIssuerCommandInput,
  type DeleteTrustedTokenIssuerCommandOutput,
  DeleteTrustedTokenIssuerCommand,
} from "./commands/DeleteTrustedTokenIssuerCommand";
import {
  type DescribeAccountAssignmentCreationStatusCommandInput,
  type DescribeAccountAssignmentCreationStatusCommandOutput,
  DescribeAccountAssignmentCreationStatusCommand,
} from "./commands/DescribeAccountAssignmentCreationStatusCommand";
import {
  type DescribeAccountAssignmentDeletionStatusCommandInput,
  type DescribeAccountAssignmentDeletionStatusCommandOutput,
  DescribeAccountAssignmentDeletionStatusCommand,
} from "./commands/DescribeAccountAssignmentDeletionStatusCommand";
import {
  type DescribeApplicationAssignmentCommandInput,
  type DescribeApplicationAssignmentCommandOutput,
  DescribeApplicationAssignmentCommand,
} from "./commands/DescribeApplicationAssignmentCommand";
import {
  type DescribeApplicationCommandInput,
  type DescribeApplicationCommandOutput,
  DescribeApplicationCommand,
} from "./commands/DescribeApplicationCommand";
import {
  type DescribeApplicationProviderCommandInput,
  type DescribeApplicationProviderCommandOutput,
  DescribeApplicationProviderCommand,
} from "./commands/DescribeApplicationProviderCommand";
import {
  type DescribeInstanceAccessControlAttributeConfigurationCommandInput,
  type DescribeInstanceAccessControlAttributeConfigurationCommandOutput,
  DescribeInstanceAccessControlAttributeConfigurationCommand,
} from "./commands/DescribeInstanceAccessControlAttributeConfigurationCommand";
import {
  type DescribeInstanceCommandInput,
  type DescribeInstanceCommandOutput,
  DescribeInstanceCommand,
} from "./commands/DescribeInstanceCommand";
import {
  type DescribePermissionSetCommandInput,
  type DescribePermissionSetCommandOutput,
  DescribePermissionSetCommand,
} from "./commands/DescribePermissionSetCommand";
import {
  type DescribePermissionSetProvisioningStatusCommandInput,
  type DescribePermissionSetProvisioningStatusCommandOutput,
  DescribePermissionSetProvisioningStatusCommand,
} from "./commands/DescribePermissionSetProvisioningStatusCommand";
import {
  type DescribeRegionCommandInput,
  type DescribeRegionCommandOutput,
  DescribeRegionCommand,
} from "./commands/DescribeRegionCommand";
import {
  type DescribeTrustedTokenIssuerCommandInput,
  type DescribeTrustedTokenIssuerCommandOutput,
  DescribeTrustedTokenIssuerCommand,
} from "./commands/DescribeTrustedTokenIssuerCommand";
import {
  type DetachCustomerManagedPolicyReferenceFromPermissionSetCommandInput,
  type DetachCustomerManagedPolicyReferenceFromPermissionSetCommandOutput,
  DetachCustomerManagedPolicyReferenceFromPermissionSetCommand,
} from "./commands/DetachCustomerManagedPolicyReferenceFromPermissionSetCommand";
import {
  type DetachManagedPolicyFromPermissionSetCommandInput,
  type DetachManagedPolicyFromPermissionSetCommandOutput,
  DetachManagedPolicyFromPermissionSetCommand,
} from "./commands/DetachManagedPolicyFromPermissionSetCommand";
import {
  type GetApplicationAccessScopeCommandInput,
  type GetApplicationAccessScopeCommandOutput,
  GetApplicationAccessScopeCommand,
} from "./commands/GetApplicationAccessScopeCommand";
import {
  type GetApplicationAssignmentConfigurationCommandInput,
  type GetApplicationAssignmentConfigurationCommandOutput,
  GetApplicationAssignmentConfigurationCommand,
} from "./commands/GetApplicationAssignmentConfigurationCommand";
import {
  type GetApplicationAuthenticationMethodCommandInput,
  type GetApplicationAuthenticationMethodCommandOutput,
  GetApplicationAuthenticationMethodCommand,
} from "./commands/GetApplicationAuthenticationMethodCommand";
import {
  type GetApplicationGrantCommandInput,
  type GetApplicationGrantCommandOutput,
  GetApplicationGrantCommand,
} from "./commands/GetApplicationGrantCommand";
import {
  type GetApplicationSessionConfigurationCommandInput,
  type GetApplicationSessionConfigurationCommandOutput,
  GetApplicationSessionConfigurationCommand,
} from "./commands/GetApplicationSessionConfigurationCommand";
import {
  type GetInlinePolicyForPermissionSetCommandInput,
  type GetInlinePolicyForPermissionSetCommandOutput,
  GetInlinePolicyForPermissionSetCommand,
} from "./commands/GetInlinePolicyForPermissionSetCommand";
import {
  type GetPermissionsBoundaryForPermissionSetCommandInput,
  type GetPermissionsBoundaryForPermissionSetCommandOutput,
  GetPermissionsBoundaryForPermissionSetCommand,
} from "./commands/GetPermissionsBoundaryForPermissionSetCommand";
import {
  type ListAccountAssignmentCreationStatusCommandInput,
  type ListAccountAssignmentCreationStatusCommandOutput,
  ListAccountAssignmentCreationStatusCommand,
} from "./commands/ListAccountAssignmentCreationStatusCommand";
import {
  type ListAccountAssignmentDeletionStatusCommandInput,
  type ListAccountAssignmentDeletionStatusCommandOutput,
  ListAccountAssignmentDeletionStatusCommand,
} from "./commands/ListAccountAssignmentDeletionStatusCommand";
import {
  type ListAccountAssignmentsCommandInput,
  type ListAccountAssignmentsCommandOutput,
  ListAccountAssignmentsCommand,
} from "./commands/ListAccountAssignmentsCommand";
import {
  type ListAccountAssignmentsForPrincipalCommandInput,
  type ListAccountAssignmentsForPrincipalCommandOutput,
  ListAccountAssignmentsForPrincipalCommand,
} from "./commands/ListAccountAssignmentsForPrincipalCommand";
import {
  type ListAccountsForProvisionedPermissionSetCommandInput,
  type ListAccountsForProvisionedPermissionSetCommandOutput,
  ListAccountsForProvisionedPermissionSetCommand,
} from "./commands/ListAccountsForProvisionedPermissionSetCommand";
import {
  type ListApplicationAccessScopesCommandInput,
  type ListApplicationAccessScopesCommandOutput,
  ListApplicationAccessScopesCommand,
} from "./commands/ListApplicationAccessScopesCommand";
import {
  type ListApplicationAssignmentsCommandInput,
  type ListApplicationAssignmentsCommandOutput,
  ListApplicationAssignmentsCommand,
} from "./commands/ListApplicationAssignmentsCommand";
import {
  type ListApplicationAssignmentsForPrincipalCommandInput,
  type ListApplicationAssignmentsForPrincipalCommandOutput,
  ListApplicationAssignmentsForPrincipalCommand,
} from "./commands/ListApplicationAssignmentsForPrincipalCommand";
import {
  type ListApplicationAuthenticationMethodsCommandInput,
  type ListApplicationAuthenticationMethodsCommandOutput,
  ListApplicationAuthenticationMethodsCommand,
} from "./commands/ListApplicationAuthenticationMethodsCommand";
import {
  type ListApplicationGrantsCommandInput,
  type ListApplicationGrantsCommandOutput,
  ListApplicationGrantsCommand,
} from "./commands/ListApplicationGrantsCommand";
import {
  type ListApplicationProvidersCommandInput,
  type ListApplicationProvidersCommandOutput,
  ListApplicationProvidersCommand,
} from "./commands/ListApplicationProvidersCommand";
import {
  type ListApplicationsCommandInput,
  type ListApplicationsCommandOutput,
  ListApplicationsCommand,
} from "./commands/ListApplicationsCommand";
import {
  type ListCustomerManagedPolicyReferencesInPermissionSetCommandInput,
  type ListCustomerManagedPolicyReferencesInPermissionSetCommandOutput,
  ListCustomerManagedPolicyReferencesInPermissionSetCommand,
} from "./commands/ListCustomerManagedPolicyReferencesInPermissionSetCommand";
import {
  type ListInstancesCommandInput,
  type ListInstancesCommandOutput,
  ListInstancesCommand,
} from "./commands/ListInstancesCommand";
import {
  type ListManagedPoliciesInPermissionSetCommandInput,
  type ListManagedPoliciesInPermissionSetCommandOutput,
  ListManagedPoliciesInPermissionSetCommand,
} from "./commands/ListManagedPoliciesInPermissionSetCommand";
import {
  type ListPermissionSetProvisioningStatusCommandInput,
  type ListPermissionSetProvisioningStatusCommandOutput,
  ListPermissionSetProvisioningStatusCommand,
} from "./commands/ListPermissionSetProvisioningStatusCommand";
import {
  type ListPermissionSetsCommandInput,
  type ListPermissionSetsCommandOutput,
  ListPermissionSetsCommand,
} from "./commands/ListPermissionSetsCommand";
import {
  type ListPermissionSetsProvisionedToAccountCommandInput,
  type ListPermissionSetsProvisionedToAccountCommandOutput,
  ListPermissionSetsProvisionedToAccountCommand,
} from "./commands/ListPermissionSetsProvisionedToAccountCommand";
import {
  type ListRegionsCommandInput,
  type ListRegionsCommandOutput,
  ListRegionsCommand,
} from "./commands/ListRegionsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListTrustedTokenIssuersCommandInput,
  type ListTrustedTokenIssuersCommandOutput,
  ListTrustedTokenIssuersCommand,
} from "./commands/ListTrustedTokenIssuersCommand";
import {
  type ProvisionPermissionSetCommandInput,
  type ProvisionPermissionSetCommandOutput,
  ProvisionPermissionSetCommand,
} from "./commands/ProvisionPermissionSetCommand";
import {
  type PutApplicationAccessScopeCommandInput,
  type PutApplicationAccessScopeCommandOutput,
  PutApplicationAccessScopeCommand,
} from "./commands/PutApplicationAccessScopeCommand";
import {
  type PutApplicationAssignmentConfigurationCommandInput,
  type PutApplicationAssignmentConfigurationCommandOutput,
  PutApplicationAssignmentConfigurationCommand,
} from "./commands/PutApplicationAssignmentConfigurationCommand";
import {
  type PutApplicationAuthenticationMethodCommandInput,
  type PutApplicationAuthenticationMethodCommandOutput,
  PutApplicationAuthenticationMethodCommand,
} from "./commands/PutApplicationAuthenticationMethodCommand";
import {
  type PutApplicationGrantCommandInput,
  type PutApplicationGrantCommandOutput,
  PutApplicationGrantCommand,
} from "./commands/PutApplicationGrantCommand";
import {
  type PutApplicationSessionConfigurationCommandInput,
  type PutApplicationSessionConfigurationCommandOutput,
  PutApplicationSessionConfigurationCommand,
} from "./commands/PutApplicationSessionConfigurationCommand";
import {
  type PutInlinePolicyToPermissionSetCommandInput,
  type PutInlinePolicyToPermissionSetCommandOutput,
  PutInlinePolicyToPermissionSetCommand,
} from "./commands/PutInlinePolicyToPermissionSetCommand";
import {
  type PutPermissionsBoundaryToPermissionSetCommandInput,
  type PutPermissionsBoundaryToPermissionSetCommandOutput,
  PutPermissionsBoundaryToPermissionSetCommand,
} from "./commands/PutPermissionsBoundaryToPermissionSetCommand";
import {
  type RemoveRegionCommandInput,
  type RemoveRegionCommandOutput,
  RemoveRegionCommand,
} from "./commands/RemoveRegionCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateApplicationCommandInput,
  type UpdateApplicationCommandOutput,
  UpdateApplicationCommand,
} from "./commands/UpdateApplicationCommand";
import {
  type UpdateInstanceAccessControlAttributeConfigurationCommandInput,
  type UpdateInstanceAccessControlAttributeConfigurationCommandOutput,
  UpdateInstanceAccessControlAttributeConfigurationCommand,
} from "./commands/UpdateInstanceAccessControlAttributeConfigurationCommand";
import {
  type UpdateInstanceCommandInput,
  type UpdateInstanceCommandOutput,
  UpdateInstanceCommand,
} from "./commands/UpdateInstanceCommand";
import {
  type UpdatePermissionSetCommandInput,
  type UpdatePermissionSetCommandOutput,
  UpdatePermissionSetCommand,
} from "./commands/UpdatePermissionSetCommand";
import {
  type UpdateTrustedTokenIssuerCommandInput,
  type UpdateTrustedTokenIssuerCommandOutput,
  UpdateTrustedTokenIssuerCommand,
} from "./commands/UpdateTrustedTokenIssuerCommand";
import { paginateListAccountAssignmentCreationStatus } from "./pagination/ListAccountAssignmentCreationStatusPaginator";
import { paginateListAccountAssignmentDeletionStatus } from "./pagination/ListAccountAssignmentDeletionStatusPaginator";
import { paginateListAccountAssignmentsForPrincipal } from "./pagination/ListAccountAssignmentsForPrincipalPaginator";
import { paginateListAccountAssignments } from "./pagination/ListAccountAssignmentsPaginator";
import {
  paginateListAccountsForProvisionedPermissionSet,
} from "./pagination/ListAccountsForProvisionedPermissionSetPaginator";
import { paginateListApplicationAccessScopes } from "./pagination/ListApplicationAccessScopesPaginator";
import {
  paginateListApplicationAssignmentsForPrincipal,
} from "./pagination/ListApplicationAssignmentsForPrincipalPaginator";
import { paginateListApplicationAssignments } from "./pagination/ListApplicationAssignmentsPaginator";
import {
  paginateListApplicationAuthenticationMethods,
} from "./pagination/ListApplicationAuthenticationMethodsPaginator";
import { paginateListApplicationGrants } from "./pagination/ListApplicationGrantsPaginator";
import { paginateListApplicationProviders } from "./pagination/ListApplicationProvidersPaginator";
import { paginateListApplications } from "./pagination/ListApplicationsPaginator";
import {
  paginateListCustomerManagedPolicyReferencesInPermissionSet,
} from "./pagination/ListCustomerManagedPolicyReferencesInPermissionSetPaginator";
import { paginateListInstances } from "./pagination/ListInstancesPaginator";
import { paginateListManagedPoliciesInPermissionSet } from "./pagination/ListManagedPoliciesInPermissionSetPaginator";
import { paginateListPermissionSetProvisioningStatus } from "./pagination/ListPermissionSetProvisioningStatusPaginator";
import { paginateListPermissionSets } from "./pagination/ListPermissionSetsPaginator";
import {
  paginateListPermissionSetsProvisionedToAccount,
} from "./pagination/ListPermissionSetsProvisionedToAccountPaginator";
import { paginateListRegions } from "./pagination/ListRegionsPaginator";
import { paginateListTagsForResource } from "./pagination/ListTagsForResourcePaginator";
import { paginateListTrustedTokenIssuers } from "./pagination/ListTrustedTokenIssuersPaginator";
import { SSOAdminClient } from "./SSOAdminClient";

const commands = {
  AddRegionCommand,
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
  DescribeRegionCommand,
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
  ListRegionsCommand,
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
  RemoveRegionCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateApplicationCommand,
  UpdateInstanceCommand,
  UpdateInstanceAccessControlAttributeConfigurationCommand,
  UpdatePermissionSetCommand,
  UpdateTrustedTokenIssuerCommand,
};
const paginators = {
  paginateListAccountAssignmentCreationStatus,
  paginateListAccountAssignmentDeletionStatus,
  paginateListAccountAssignments,
  paginateListAccountAssignmentsForPrincipal,
  paginateListAccountsForProvisionedPermissionSet,
  paginateListApplicationAccessScopes,
  paginateListApplicationAssignments,
  paginateListApplicationAssignmentsForPrincipal,
  paginateListApplicationAuthenticationMethods,
  paginateListApplicationGrants,
  paginateListApplicationProviders,
  paginateListApplications,
  paginateListCustomerManagedPolicyReferencesInPermissionSet,
  paginateListInstances,
  paginateListManagedPoliciesInPermissionSet,
  paginateListPermissionSetProvisioningStatus,
  paginateListPermissionSets,
  paginateListPermissionSetsProvisionedToAccount,
  paginateListRegions,
  paginateListTagsForResource,
  paginateListTrustedTokenIssuers,
};

export interface SSOAdmin {
  /**
   * @see {@link AddRegionCommand}
   */
  addRegion(
    args: AddRegionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddRegionCommandOutput>;
  addRegion(
    args: AddRegionCommandInput,
    cb: (err: any, data?: AddRegionCommandOutput) => void
  ): void;
  addRegion(
    args: AddRegionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddRegionCommandOutput) => void
  ): void;

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
   * @see {@link DescribeRegionCommand}
   */
  describeRegion(
    args: DescribeRegionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRegionCommandOutput>;
  describeRegion(
    args: DescribeRegionCommandInput,
    cb: (err: any, data?: DescribeRegionCommandOutput) => void
  ): void;
  describeRegion(
    args: DescribeRegionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRegionCommandOutput) => void
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
   * @see {@link ListRegionsCommand}
   */
  listRegions(
    args: ListRegionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRegionsCommandOutput>;
  listRegions(
    args: ListRegionsCommandInput,
    cb: (err: any, data?: ListRegionsCommandOutput) => void
  ): void;
  listRegions(
    args: ListRegionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRegionsCommandOutput) => void
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
   * @see {@link RemoveRegionCommand}
   */
  removeRegion(
    args: RemoveRegionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveRegionCommandOutput>;
  removeRegion(
    args: RemoveRegionCommandInput,
    cb: (err: any, data?: RemoveRegionCommandOutput) => void
  ): void;
  removeRegion(
    args: RemoveRegionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveRegionCommandOutput) => void
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

  /**
   * @see {@link ListAccountAssignmentCreationStatusCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAccountAssignmentCreationStatusCommandOutput}.
   */
  paginateListAccountAssignmentCreationStatus(
    args: ListAccountAssignmentCreationStatusCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAccountAssignmentCreationStatusCommandOutput>;

  /**
   * @see {@link ListAccountAssignmentDeletionStatusCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAccountAssignmentDeletionStatusCommandOutput}.
   */
  paginateListAccountAssignmentDeletionStatus(
    args: ListAccountAssignmentDeletionStatusCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAccountAssignmentDeletionStatusCommandOutput>;

  /**
   * @see {@link ListAccountAssignmentsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAccountAssignmentsCommandOutput}.
   */
  paginateListAccountAssignments(
    args: ListAccountAssignmentsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAccountAssignmentsCommandOutput>;

  /**
   * @see {@link ListAccountAssignmentsForPrincipalCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAccountAssignmentsForPrincipalCommandOutput}.
   */
  paginateListAccountAssignmentsForPrincipal(
    args: ListAccountAssignmentsForPrincipalCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAccountAssignmentsForPrincipalCommandOutput>;

  /**
   * @see {@link ListAccountsForProvisionedPermissionSetCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAccountsForProvisionedPermissionSetCommandOutput}.
   */
  paginateListAccountsForProvisionedPermissionSet(
    args: ListAccountsForProvisionedPermissionSetCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAccountsForProvisionedPermissionSetCommandOutput>;

  /**
   * @see {@link ListApplicationAccessScopesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListApplicationAccessScopesCommandOutput}.
   */
  paginateListApplicationAccessScopes(
    args: ListApplicationAccessScopesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListApplicationAccessScopesCommandOutput>;

  /**
   * @see {@link ListApplicationAssignmentsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListApplicationAssignmentsCommandOutput}.
   */
  paginateListApplicationAssignments(
    args: ListApplicationAssignmentsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListApplicationAssignmentsCommandOutput>;

  /**
   * @see {@link ListApplicationAssignmentsForPrincipalCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListApplicationAssignmentsForPrincipalCommandOutput}.
   */
  paginateListApplicationAssignmentsForPrincipal(
    args: ListApplicationAssignmentsForPrincipalCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListApplicationAssignmentsForPrincipalCommandOutput>;

  /**
   * @see {@link ListApplicationAuthenticationMethodsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListApplicationAuthenticationMethodsCommandOutput}.
   */
  paginateListApplicationAuthenticationMethods(
    args: ListApplicationAuthenticationMethodsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListApplicationAuthenticationMethodsCommandOutput>;

  /**
   * @see {@link ListApplicationGrantsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListApplicationGrantsCommandOutput}.
   */
  paginateListApplicationGrants(
    args: ListApplicationGrantsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListApplicationGrantsCommandOutput>;

  /**
   * @see {@link ListApplicationProvidersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListApplicationProvidersCommandOutput}.
   */
  paginateListApplicationProviders(
    args?: ListApplicationProvidersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListApplicationProvidersCommandOutput>;

  /**
   * @see {@link ListApplicationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListApplicationsCommandOutput}.
   */
  paginateListApplications(
    args: ListApplicationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListApplicationsCommandOutput>;

  /**
   * @see {@link ListCustomerManagedPolicyReferencesInPermissionSetCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCustomerManagedPolicyReferencesInPermissionSetCommandOutput}.
   */
  paginateListCustomerManagedPolicyReferencesInPermissionSet(
    args: ListCustomerManagedPolicyReferencesInPermissionSetCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCustomerManagedPolicyReferencesInPermissionSetCommandOutput>;

  /**
   * @see {@link ListInstancesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListInstancesCommandOutput}.
   */
  paginateListInstances(
    args?: ListInstancesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListInstancesCommandOutput>;

  /**
   * @see {@link ListManagedPoliciesInPermissionSetCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListManagedPoliciesInPermissionSetCommandOutput}.
   */
  paginateListManagedPoliciesInPermissionSet(
    args: ListManagedPoliciesInPermissionSetCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListManagedPoliciesInPermissionSetCommandOutput>;

  /**
   * @see {@link ListPermissionSetProvisioningStatusCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPermissionSetProvisioningStatusCommandOutput}.
   */
  paginateListPermissionSetProvisioningStatus(
    args: ListPermissionSetProvisioningStatusCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPermissionSetProvisioningStatusCommandOutput>;

  /**
   * @see {@link ListPermissionSetsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPermissionSetsCommandOutput}.
   */
  paginateListPermissionSets(
    args: ListPermissionSetsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPermissionSetsCommandOutput>;

  /**
   * @see {@link ListPermissionSetsProvisionedToAccountCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPermissionSetsProvisionedToAccountCommandOutput}.
   */
  paginateListPermissionSetsProvisionedToAccount(
    args: ListPermissionSetsProvisionedToAccountCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPermissionSetsProvisionedToAccountCommandOutput>;

  /**
   * @see {@link ListRegionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRegionsCommandOutput}.
   */
  paginateListRegions(
    args: ListRegionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRegionsCommandOutput>;

  /**
   * @see {@link ListTagsForResourceCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTagsForResourceCommandOutput}.
   */
  paginateListTagsForResource(
    args: ListTagsForResourceCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTagsForResourceCommandOutput>;

  /**
   * @see {@link ListTrustedTokenIssuersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTrustedTokenIssuersCommandOutput}.
   */
  paginateListTrustedTokenIssuers(
    args: ListTrustedTokenIssuersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTrustedTokenIssuersCommandOutput>;
}

/**
 * <p>IAM Identity Center is the Amazon Web Services solution for connecting your workforce users to Amazon Web Services managed applications and other Amazon Web Services resources. You can connect your existing identity provider and synchronize users and groups from your directory, or create and manage your users directly in IAM Identity Center. You can then use IAM Identity Center for either or both of the following:</p> <ul> <li> <p>User access to applications</p> </li> <li> <p>User access to Amazon Web Services accounts</p> </li> </ul> <p>This guide provides information about single sign-on operations that you can use for access to applications and Amazon Web Services accounts. For information about IAM Identity Center features, see the <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html">IAM Identity Center User Guide</a>.</p> <note> <p>IAM Identity Center uses the <code>sso</code> and <code>identitystore</code> API namespaces.</p> </note> <p>Many API operations for IAM Identity Center rely on identifiers for users and groups, known as principals. For more information about how to work with principals and principal IDs in IAM Identity Center, see the <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/welcome.html">Identity Store API Reference</a>.</p> <note> <p>Amazon Web Services provides SDKs that consist of libraries and sample code for various programming languages and platforms (Java, Ruby, .Net, iOS, Android, and more). The SDKs provide a convenient way to create programmatic access to IAM Identity Center and other Amazon Web Services services. For more information about the Amazon Web Services SDKs, including how to download and install them, see <a href="http://aws.amazon.com/tools/">Tools for Amazon Web Services</a>.</p> </note>
 * @public
 */
export class SSOAdmin extends SSOAdminClient implements SSOAdmin {}
createAggregatedClient(commands, SSOAdmin, { paginators });
