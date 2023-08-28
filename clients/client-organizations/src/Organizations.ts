// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AcceptHandshakeCommand,
  AcceptHandshakeCommandInput,
  AcceptHandshakeCommandOutput,
} from "./commands/AcceptHandshakeCommand";
import {
  AttachPolicyCommand,
  AttachPolicyCommandInput,
  AttachPolicyCommandOutput,
} from "./commands/AttachPolicyCommand";
import {
  CancelHandshakeCommand,
  CancelHandshakeCommandInput,
  CancelHandshakeCommandOutput,
} from "./commands/CancelHandshakeCommand";
import {
  CloseAccountCommand,
  CloseAccountCommandInput,
  CloseAccountCommandOutput,
} from "./commands/CloseAccountCommand";
import {
  CreateAccountCommand,
  CreateAccountCommandInput,
  CreateAccountCommandOutput,
} from "./commands/CreateAccountCommand";
import {
  CreateGovCloudAccountCommand,
  CreateGovCloudAccountCommandInput,
  CreateGovCloudAccountCommandOutput,
} from "./commands/CreateGovCloudAccountCommand";
import {
  CreateOrganizationalUnitCommand,
  CreateOrganizationalUnitCommandInput,
  CreateOrganizationalUnitCommandOutput,
} from "./commands/CreateOrganizationalUnitCommand";
import {
  CreateOrganizationCommand,
  CreateOrganizationCommandInput,
  CreateOrganizationCommandOutput,
} from "./commands/CreateOrganizationCommand";
import {
  CreatePolicyCommand,
  CreatePolicyCommandInput,
  CreatePolicyCommandOutput,
} from "./commands/CreatePolicyCommand";
import {
  DeclineHandshakeCommand,
  DeclineHandshakeCommandInput,
  DeclineHandshakeCommandOutput,
} from "./commands/DeclineHandshakeCommand";
import {
  DeleteOrganizationalUnitCommand,
  DeleteOrganizationalUnitCommandInput,
  DeleteOrganizationalUnitCommandOutput,
} from "./commands/DeleteOrganizationalUnitCommand";
import {
  DeleteOrganizationCommand,
  DeleteOrganizationCommandInput,
  DeleteOrganizationCommandOutput,
} from "./commands/DeleteOrganizationCommand";
import {
  DeletePolicyCommand,
  DeletePolicyCommandInput,
  DeletePolicyCommandOutput,
} from "./commands/DeletePolicyCommand";
import {
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import {
  DeregisterDelegatedAdministratorCommand,
  DeregisterDelegatedAdministratorCommandInput,
  DeregisterDelegatedAdministratorCommandOutput,
} from "./commands/DeregisterDelegatedAdministratorCommand";
import {
  DescribeAccountCommand,
  DescribeAccountCommandInput,
  DescribeAccountCommandOutput,
} from "./commands/DescribeAccountCommand";
import {
  DescribeCreateAccountStatusCommand,
  DescribeCreateAccountStatusCommandInput,
  DescribeCreateAccountStatusCommandOutput,
} from "./commands/DescribeCreateAccountStatusCommand";
import {
  DescribeEffectivePolicyCommand,
  DescribeEffectivePolicyCommandInput,
  DescribeEffectivePolicyCommandOutput,
} from "./commands/DescribeEffectivePolicyCommand";
import {
  DescribeHandshakeCommand,
  DescribeHandshakeCommandInput,
  DescribeHandshakeCommandOutput,
} from "./commands/DescribeHandshakeCommand";
import {
  DescribeOrganizationalUnitCommand,
  DescribeOrganizationalUnitCommandInput,
  DescribeOrganizationalUnitCommandOutput,
} from "./commands/DescribeOrganizationalUnitCommand";
import {
  DescribeOrganizationCommand,
  DescribeOrganizationCommandInput,
  DescribeOrganizationCommandOutput,
} from "./commands/DescribeOrganizationCommand";
import {
  DescribePolicyCommand,
  DescribePolicyCommandInput,
  DescribePolicyCommandOutput,
} from "./commands/DescribePolicyCommand";
import {
  DescribeResourcePolicyCommand,
  DescribeResourcePolicyCommandInput,
  DescribeResourcePolicyCommandOutput,
} from "./commands/DescribeResourcePolicyCommand";
import {
  DetachPolicyCommand,
  DetachPolicyCommandInput,
  DetachPolicyCommandOutput,
} from "./commands/DetachPolicyCommand";
import {
  DisableAWSServiceAccessCommand,
  DisableAWSServiceAccessCommandInput,
  DisableAWSServiceAccessCommandOutput,
} from "./commands/DisableAWSServiceAccessCommand";
import {
  DisablePolicyTypeCommand,
  DisablePolicyTypeCommandInput,
  DisablePolicyTypeCommandOutput,
} from "./commands/DisablePolicyTypeCommand";
import {
  EnableAllFeaturesCommand,
  EnableAllFeaturesCommandInput,
  EnableAllFeaturesCommandOutput,
} from "./commands/EnableAllFeaturesCommand";
import {
  EnableAWSServiceAccessCommand,
  EnableAWSServiceAccessCommandInput,
  EnableAWSServiceAccessCommandOutput,
} from "./commands/EnableAWSServiceAccessCommand";
import {
  EnablePolicyTypeCommand,
  EnablePolicyTypeCommandInput,
  EnablePolicyTypeCommandOutput,
} from "./commands/EnablePolicyTypeCommand";
import {
  InviteAccountToOrganizationCommand,
  InviteAccountToOrganizationCommandInput,
  InviteAccountToOrganizationCommandOutput,
} from "./commands/InviteAccountToOrganizationCommand";
import {
  LeaveOrganizationCommand,
  LeaveOrganizationCommandInput,
  LeaveOrganizationCommandOutput,
} from "./commands/LeaveOrganizationCommand";
import {
  ListAccountsCommand,
  ListAccountsCommandInput,
  ListAccountsCommandOutput,
} from "./commands/ListAccountsCommand";
import {
  ListAccountsForParentCommand,
  ListAccountsForParentCommandInput,
  ListAccountsForParentCommandOutput,
} from "./commands/ListAccountsForParentCommand";
import {
  ListAWSServiceAccessForOrganizationCommand,
  ListAWSServiceAccessForOrganizationCommandInput,
  ListAWSServiceAccessForOrganizationCommandOutput,
} from "./commands/ListAWSServiceAccessForOrganizationCommand";
import {
  ListChildrenCommand,
  ListChildrenCommandInput,
  ListChildrenCommandOutput,
} from "./commands/ListChildrenCommand";
import {
  ListCreateAccountStatusCommand,
  ListCreateAccountStatusCommandInput,
  ListCreateAccountStatusCommandOutput,
} from "./commands/ListCreateAccountStatusCommand";
import {
  ListDelegatedAdministratorsCommand,
  ListDelegatedAdministratorsCommandInput,
  ListDelegatedAdministratorsCommandOutput,
} from "./commands/ListDelegatedAdministratorsCommand";
import {
  ListDelegatedServicesForAccountCommand,
  ListDelegatedServicesForAccountCommandInput,
  ListDelegatedServicesForAccountCommandOutput,
} from "./commands/ListDelegatedServicesForAccountCommand";
import {
  ListHandshakesForAccountCommand,
  ListHandshakesForAccountCommandInput,
  ListHandshakesForAccountCommandOutput,
} from "./commands/ListHandshakesForAccountCommand";
import {
  ListHandshakesForOrganizationCommand,
  ListHandshakesForOrganizationCommandInput,
  ListHandshakesForOrganizationCommandOutput,
} from "./commands/ListHandshakesForOrganizationCommand";
import {
  ListOrganizationalUnitsForParentCommand,
  ListOrganizationalUnitsForParentCommandInput,
  ListOrganizationalUnitsForParentCommandOutput,
} from "./commands/ListOrganizationalUnitsForParentCommand";
import { ListParentsCommand, ListParentsCommandInput, ListParentsCommandOutput } from "./commands/ListParentsCommand";
import {
  ListPoliciesCommand,
  ListPoliciesCommandInput,
  ListPoliciesCommandOutput,
} from "./commands/ListPoliciesCommand";
import {
  ListPoliciesForTargetCommand,
  ListPoliciesForTargetCommandInput,
  ListPoliciesForTargetCommandOutput,
} from "./commands/ListPoliciesForTargetCommand";
import { ListRootsCommand, ListRootsCommandInput, ListRootsCommandOutput } from "./commands/ListRootsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTargetsForPolicyCommand,
  ListTargetsForPolicyCommandInput,
  ListTargetsForPolicyCommandOutput,
} from "./commands/ListTargetsForPolicyCommand";
import { MoveAccountCommand, MoveAccountCommandInput, MoveAccountCommandOutput } from "./commands/MoveAccountCommand";
import {
  PutResourcePolicyCommand,
  PutResourcePolicyCommandInput,
  PutResourcePolicyCommandOutput,
} from "./commands/PutResourcePolicyCommand";
import {
  RegisterDelegatedAdministratorCommand,
  RegisterDelegatedAdministratorCommandInput,
  RegisterDelegatedAdministratorCommandOutput,
} from "./commands/RegisterDelegatedAdministratorCommand";
import {
  RemoveAccountFromOrganizationCommand,
  RemoveAccountFromOrganizationCommandInput,
  RemoveAccountFromOrganizationCommandOutput,
} from "./commands/RemoveAccountFromOrganizationCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateOrganizationalUnitCommand,
  UpdateOrganizationalUnitCommandInput,
  UpdateOrganizationalUnitCommandOutput,
} from "./commands/UpdateOrganizationalUnitCommand";
import {
  UpdatePolicyCommand,
  UpdatePolicyCommandInput,
  UpdatePolicyCommandOutput,
} from "./commands/UpdatePolicyCommand";
import { OrganizationsClient, OrganizationsClientConfig } from "./OrganizationsClient";

const commands = {
  AcceptHandshakeCommand,
  AttachPolicyCommand,
  CancelHandshakeCommand,
  CloseAccountCommand,
  CreateAccountCommand,
  CreateGovCloudAccountCommand,
  CreateOrganizationCommand,
  CreateOrganizationalUnitCommand,
  CreatePolicyCommand,
  DeclineHandshakeCommand,
  DeleteOrganizationCommand,
  DeleteOrganizationalUnitCommand,
  DeletePolicyCommand,
  DeleteResourcePolicyCommand,
  DeregisterDelegatedAdministratorCommand,
  DescribeAccountCommand,
  DescribeCreateAccountStatusCommand,
  DescribeEffectivePolicyCommand,
  DescribeHandshakeCommand,
  DescribeOrganizationCommand,
  DescribeOrganizationalUnitCommand,
  DescribePolicyCommand,
  DescribeResourcePolicyCommand,
  DetachPolicyCommand,
  DisableAWSServiceAccessCommand,
  DisablePolicyTypeCommand,
  EnableAllFeaturesCommand,
  EnableAWSServiceAccessCommand,
  EnablePolicyTypeCommand,
  InviteAccountToOrganizationCommand,
  LeaveOrganizationCommand,
  ListAccountsCommand,
  ListAccountsForParentCommand,
  ListAWSServiceAccessForOrganizationCommand,
  ListChildrenCommand,
  ListCreateAccountStatusCommand,
  ListDelegatedAdministratorsCommand,
  ListDelegatedServicesForAccountCommand,
  ListHandshakesForAccountCommand,
  ListHandshakesForOrganizationCommand,
  ListOrganizationalUnitsForParentCommand,
  ListParentsCommand,
  ListPoliciesCommand,
  ListPoliciesForTargetCommand,
  ListRootsCommand,
  ListTagsForResourceCommand,
  ListTargetsForPolicyCommand,
  MoveAccountCommand,
  PutResourcePolicyCommand,
  RegisterDelegatedAdministratorCommand,
  RemoveAccountFromOrganizationCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateOrganizationalUnitCommand,
  UpdatePolicyCommand,
};

export interface Organizations {
  /**
   * @see {@link AcceptHandshakeCommand}
   */
  acceptHandshake(
    args: AcceptHandshakeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptHandshakeCommandOutput>;
  acceptHandshake(args: AcceptHandshakeCommandInput, cb: (err: any, data?: AcceptHandshakeCommandOutput) => void): void;
  acceptHandshake(
    args: AcceptHandshakeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptHandshakeCommandOutput) => void
  ): void;

  /**
   * @see {@link AttachPolicyCommand}
   */
  attachPolicy(args: AttachPolicyCommandInput, options?: __HttpHandlerOptions): Promise<AttachPolicyCommandOutput>;
  attachPolicy(args: AttachPolicyCommandInput, cb: (err: any, data?: AttachPolicyCommandOutput) => void): void;
  attachPolicy(
    args: AttachPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelHandshakeCommand}
   */
  cancelHandshake(
    args: CancelHandshakeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelHandshakeCommandOutput>;
  cancelHandshake(args: CancelHandshakeCommandInput, cb: (err: any, data?: CancelHandshakeCommandOutput) => void): void;
  cancelHandshake(
    args: CancelHandshakeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelHandshakeCommandOutput) => void
  ): void;

  /**
   * @see {@link CloseAccountCommand}
   */
  closeAccount(args: CloseAccountCommandInput, options?: __HttpHandlerOptions): Promise<CloseAccountCommandOutput>;
  closeAccount(args: CloseAccountCommandInput, cb: (err: any, data?: CloseAccountCommandOutput) => void): void;
  closeAccount(
    args: CloseAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CloseAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAccountCommand}
   */
  createAccount(args: CreateAccountCommandInput, options?: __HttpHandlerOptions): Promise<CreateAccountCommandOutput>;
  createAccount(args: CreateAccountCommandInput, cb: (err: any, data?: CreateAccountCommandOutput) => void): void;
  createAccount(
    args: CreateAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGovCloudAccountCommand}
   */
  createGovCloudAccount(
    args: CreateGovCloudAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateGovCloudAccountCommandOutput>;
  createGovCloudAccount(
    args: CreateGovCloudAccountCommandInput,
    cb: (err: any, data?: CreateGovCloudAccountCommandOutput) => void
  ): void;
  createGovCloudAccount(
    args: CreateGovCloudAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGovCloudAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateOrganizationCommand}
   */
  createOrganization(
    args: CreateOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateOrganizationCommandOutput>;
  createOrganization(
    args: CreateOrganizationCommandInput,
    cb: (err: any, data?: CreateOrganizationCommandOutput) => void
  ): void;
  createOrganization(
    args: CreateOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateOrganizationalUnitCommand}
   */
  createOrganizationalUnit(
    args: CreateOrganizationalUnitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateOrganizationalUnitCommandOutput>;
  createOrganizationalUnit(
    args: CreateOrganizationalUnitCommandInput,
    cb: (err: any, data?: CreateOrganizationalUnitCommandOutput) => void
  ): void;
  createOrganizationalUnit(
    args: CreateOrganizationalUnitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateOrganizationalUnitCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePolicyCommand}
   */
  createPolicy(args: CreatePolicyCommandInput, options?: __HttpHandlerOptions): Promise<CreatePolicyCommandOutput>;
  createPolicy(args: CreatePolicyCommandInput, cb: (err: any, data?: CreatePolicyCommandOutput) => void): void;
  createPolicy(
    args: CreatePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeclineHandshakeCommand}
   */
  declineHandshake(
    args: DeclineHandshakeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeclineHandshakeCommandOutput>;
  declineHandshake(
    args: DeclineHandshakeCommandInput,
    cb: (err: any, data?: DeclineHandshakeCommandOutput) => void
  ): void;
  declineHandshake(
    args: DeclineHandshakeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeclineHandshakeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteOrganizationCommand}
   */
  deleteOrganization(
    args: DeleteOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteOrganizationCommandOutput>;
  deleteOrganization(
    args: DeleteOrganizationCommandInput,
    cb: (err: any, data?: DeleteOrganizationCommandOutput) => void
  ): void;
  deleteOrganization(
    args: DeleteOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteOrganizationalUnitCommand}
   */
  deleteOrganizationalUnit(
    args: DeleteOrganizationalUnitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteOrganizationalUnitCommandOutput>;
  deleteOrganizationalUnit(
    args: DeleteOrganizationalUnitCommandInput,
    cb: (err: any, data?: DeleteOrganizationalUnitCommandOutput) => void
  ): void;
  deleteOrganizationalUnit(
    args: DeleteOrganizationalUnitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteOrganizationalUnitCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePolicyCommand}
   */
  deletePolicy(args: DeletePolicyCommandInput, options?: __HttpHandlerOptions): Promise<DeletePolicyCommandOutput>;
  deletePolicy(args: DeletePolicyCommandInput, cb: (err: any, data?: DeletePolicyCommandOutput) => void): void;
  deletePolicy(
    args: DeletePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourcePolicyCommand}
   */
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourcePolicyCommandOutput>;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterDelegatedAdministratorCommand}
   */
  deregisterDelegatedAdministrator(
    args: DeregisterDelegatedAdministratorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterDelegatedAdministratorCommandOutput>;
  deregisterDelegatedAdministrator(
    args: DeregisterDelegatedAdministratorCommandInput,
    cb: (err: any, data?: DeregisterDelegatedAdministratorCommandOutput) => void
  ): void;
  deregisterDelegatedAdministrator(
    args: DeregisterDelegatedAdministratorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterDelegatedAdministratorCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAccountCommand}
   */
  describeAccount(
    args: DescribeAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAccountCommandOutput>;
  describeAccount(args: DescribeAccountCommandInput, cb: (err: any, data?: DescribeAccountCommandOutput) => void): void;
  describeAccount(
    args: DescribeAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCreateAccountStatusCommand}
   */
  describeCreateAccountStatus(
    args: DescribeCreateAccountStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCreateAccountStatusCommandOutput>;
  describeCreateAccountStatus(
    args: DescribeCreateAccountStatusCommandInput,
    cb: (err: any, data?: DescribeCreateAccountStatusCommandOutput) => void
  ): void;
  describeCreateAccountStatus(
    args: DescribeCreateAccountStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCreateAccountStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEffectivePolicyCommand}
   */
  describeEffectivePolicy(
    args: DescribeEffectivePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEffectivePolicyCommandOutput>;
  describeEffectivePolicy(
    args: DescribeEffectivePolicyCommandInput,
    cb: (err: any, data?: DescribeEffectivePolicyCommandOutput) => void
  ): void;
  describeEffectivePolicy(
    args: DescribeEffectivePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEffectivePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeHandshakeCommand}
   */
  describeHandshake(
    args: DescribeHandshakeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeHandshakeCommandOutput>;
  describeHandshake(
    args: DescribeHandshakeCommandInput,
    cb: (err: any, data?: DescribeHandshakeCommandOutput) => void
  ): void;
  describeHandshake(
    args: DescribeHandshakeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeHandshakeCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeOrganizationCommand}
   */
  describeOrganization(
    args: DescribeOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOrganizationCommandOutput>;
  describeOrganization(
    args: DescribeOrganizationCommandInput,
    cb: (err: any, data?: DescribeOrganizationCommandOutput) => void
  ): void;
  describeOrganization(
    args: DescribeOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeOrganizationalUnitCommand}
   */
  describeOrganizationalUnit(
    args: DescribeOrganizationalUnitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOrganizationalUnitCommandOutput>;
  describeOrganizationalUnit(
    args: DescribeOrganizationalUnitCommandInput,
    cb: (err: any, data?: DescribeOrganizationalUnitCommandOutput) => void
  ): void;
  describeOrganizationalUnit(
    args: DescribeOrganizationalUnitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeOrganizationalUnitCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePolicyCommand}
   */
  describePolicy(
    args: DescribePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePolicyCommandOutput>;
  describePolicy(args: DescribePolicyCommandInput, cb: (err: any, data?: DescribePolicyCommandOutput) => void): void;
  describePolicy(
    args: DescribePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeResourcePolicyCommand}
   */
  describeResourcePolicy(
    args: DescribeResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeResourcePolicyCommandOutput>;
  describeResourcePolicy(
    args: DescribeResourcePolicyCommandInput,
    cb: (err: any, data?: DescribeResourcePolicyCommandOutput) => void
  ): void;
  describeResourcePolicy(
    args: DescribeResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DetachPolicyCommand}
   */
  detachPolicy(args: DetachPolicyCommandInput, options?: __HttpHandlerOptions): Promise<DetachPolicyCommandOutput>;
  detachPolicy(args: DetachPolicyCommandInput, cb: (err: any, data?: DetachPolicyCommandOutput) => void): void;
  detachPolicy(
    args: DetachPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableAWSServiceAccessCommand}
   */
  disableAWSServiceAccess(
    args: DisableAWSServiceAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableAWSServiceAccessCommandOutput>;
  disableAWSServiceAccess(
    args: DisableAWSServiceAccessCommandInput,
    cb: (err: any, data?: DisableAWSServiceAccessCommandOutput) => void
  ): void;
  disableAWSServiceAccess(
    args: DisableAWSServiceAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableAWSServiceAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link DisablePolicyTypeCommand}
   */
  disablePolicyType(
    args: DisablePolicyTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisablePolicyTypeCommandOutput>;
  disablePolicyType(
    args: DisablePolicyTypeCommandInput,
    cb: (err: any, data?: DisablePolicyTypeCommandOutput) => void
  ): void;
  disablePolicyType(
    args: DisablePolicyTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisablePolicyTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableAllFeaturesCommand}
   */
  enableAllFeatures(
    args: EnableAllFeaturesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableAllFeaturesCommandOutput>;
  enableAllFeatures(
    args: EnableAllFeaturesCommandInput,
    cb: (err: any, data?: EnableAllFeaturesCommandOutput) => void
  ): void;
  enableAllFeatures(
    args: EnableAllFeaturesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableAllFeaturesCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableAWSServiceAccessCommand}
   */
  enableAWSServiceAccess(
    args: EnableAWSServiceAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableAWSServiceAccessCommandOutput>;
  enableAWSServiceAccess(
    args: EnableAWSServiceAccessCommandInput,
    cb: (err: any, data?: EnableAWSServiceAccessCommandOutput) => void
  ): void;
  enableAWSServiceAccess(
    args: EnableAWSServiceAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableAWSServiceAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link EnablePolicyTypeCommand}
   */
  enablePolicyType(
    args: EnablePolicyTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnablePolicyTypeCommandOutput>;
  enablePolicyType(
    args: EnablePolicyTypeCommandInput,
    cb: (err: any, data?: EnablePolicyTypeCommandOutput) => void
  ): void;
  enablePolicyType(
    args: EnablePolicyTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnablePolicyTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link InviteAccountToOrganizationCommand}
   */
  inviteAccountToOrganization(
    args: InviteAccountToOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InviteAccountToOrganizationCommandOutput>;
  inviteAccountToOrganization(
    args: InviteAccountToOrganizationCommandInput,
    cb: (err: any, data?: InviteAccountToOrganizationCommandOutput) => void
  ): void;
  inviteAccountToOrganization(
    args: InviteAccountToOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InviteAccountToOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link LeaveOrganizationCommand}
   */
  leaveOrganization(
    args: LeaveOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<LeaveOrganizationCommandOutput>;
  leaveOrganization(
    args: LeaveOrganizationCommandInput,
    cb: (err: any, data?: LeaveOrganizationCommandOutput) => void
  ): void;
  leaveOrganization(
    args: LeaveOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: LeaveOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccountsCommand}
   */
  listAccounts(args: ListAccountsCommandInput, options?: __HttpHandlerOptions): Promise<ListAccountsCommandOutput>;
  listAccounts(args: ListAccountsCommandInput, cb: (err: any, data?: ListAccountsCommandOutput) => void): void;
  listAccounts(
    args: ListAccountsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccountsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccountsForParentCommand}
   */
  listAccountsForParent(
    args: ListAccountsForParentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccountsForParentCommandOutput>;
  listAccountsForParent(
    args: ListAccountsForParentCommandInput,
    cb: (err: any, data?: ListAccountsForParentCommandOutput) => void
  ): void;
  listAccountsForParent(
    args: ListAccountsForParentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccountsForParentCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAWSServiceAccessForOrganizationCommand}
   */
  listAWSServiceAccessForOrganization(
    args: ListAWSServiceAccessForOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAWSServiceAccessForOrganizationCommandOutput>;
  listAWSServiceAccessForOrganization(
    args: ListAWSServiceAccessForOrganizationCommandInput,
    cb: (err: any, data?: ListAWSServiceAccessForOrganizationCommandOutput) => void
  ): void;
  listAWSServiceAccessForOrganization(
    args: ListAWSServiceAccessForOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAWSServiceAccessForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListChildrenCommand}
   */
  listChildren(args: ListChildrenCommandInput, options?: __HttpHandlerOptions): Promise<ListChildrenCommandOutput>;
  listChildren(args: ListChildrenCommandInput, cb: (err: any, data?: ListChildrenCommandOutput) => void): void;
  listChildren(
    args: ListChildrenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChildrenCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCreateAccountStatusCommand}
   */
  listCreateAccountStatus(
    args: ListCreateAccountStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCreateAccountStatusCommandOutput>;
  listCreateAccountStatus(
    args: ListCreateAccountStatusCommandInput,
    cb: (err: any, data?: ListCreateAccountStatusCommandOutput) => void
  ): void;
  listCreateAccountStatus(
    args: ListCreateAccountStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCreateAccountStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDelegatedAdministratorsCommand}
   */
  listDelegatedAdministrators(
    args: ListDelegatedAdministratorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDelegatedAdministratorsCommandOutput>;
  listDelegatedAdministrators(
    args: ListDelegatedAdministratorsCommandInput,
    cb: (err: any, data?: ListDelegatedAdministratorsCommandOutput) => void
  ): void;
  listDelegatedAdministrators(
    args: ListDelegatedAdministratorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDelegatedAdministratorsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDelegatedServicesForAccountCommand}
   */
  listDelegatedServicesForAccount(
    args: ListDelegatedServicesForAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDelegatedServicesForAccountCommandOutput>;
  listDelegatedServicesForAccount(
    args: ListDelegatedServicesForAccountCommandInput,
    cb: (err: any, data?: ListDelegatedServicesForAccountCommandOutput) => void
  ): void;
  listDelegatedServicesForAccount(
    args: ListDelegatedServicesForAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDelegatedServicesForAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link ListHandshakesForAccountCommand}
   */
  listHandshakesForAccount(
    args: ListHandshakesForAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListHandshakesForAccountCommandOutput>;
  listHandshakesForAccount(
    args: ListHandshakesForAccountCommandInput,
    cb: (err: any, data?: ListHandshakesForAccountCommandOutput) => void
  ): void;
  listHandshakesForAccount(
    args: ListHandshakesForAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListHandshakesForAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link ListHandshakesForOrganizationCommand}
   */
  listHandshakesForOrganization(
    args: ListHandshakesForOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListHandshakesForOrganizationCommandOutput>;
  listHandshakesForOrganization(
    args: ListHandshakesForOrganizationCommandInput,
    cb: (err: any, data?: ListHandshakesForOrganizationCommandOutput) => void
  ): void;
  listHandshakesForOrganization(
    args: ListHandshakesForOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListHandshakesForOrganizationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOrganizationalUnitsForParentCommand}
   */
  listOrganizationalUnitsForParent(
    args: ListOrganizationalUnitsForParentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOrganizationalUnitsForParentCommandOutput>;
  listOrganizationalUnitsForParent(
    args: ListOrganizationalUnitsForParentCommandInput,
    cb: (err: any, data?: ListOrganizationalUnitsForParentCommandOutput) => void
  ): void;
  listOrganizationalUnitsForParent(
    args: ListOrganizationalUnitsForParentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOrganizationalUnitsForParentCommandOutput) => void
  ): void;

  /**
   * @see {@link ListParentsCommand}
   */
  listParents(args: ListParentsCommandInput, options?: __HttpHandlerOptions): Promise<ListParentsCommandOutput>;
  listParents(args: ListParentsCommandInput, cb: (err: any, data?: ListParentsCommandOutput) => void): void;
  listParents(
    args: ListParentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListParentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPoliciesCommand}
   */
  listPolicies(args: ListPoliciesCommandInput, options?: __HttpHandlerOptions): Promise<ListPoliciesCommandOutput>;
  listPolicies(args: ListPoliciesCommandInput, cb: (err: any, data?: ListPoliciesCommandOutput) => void): void;
  listPolicies(
    args: ListPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPoliciesForTargetCommand}
   */
  listPoliciesForTarget(
    args: ListPoliciesForTargetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPoliciesForTargetCommandOutput>;
  listPoliciesForTarget(
    args: ListPoliciesForTargetCommandInput,
    cb: (err: any, data?: ListPoliciesForTargetCommandOutput) => void
  ): void;
  listPoliciesForTarget(
    args: ListPoliciesForTargetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPoliciesForTargetCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRootsCommand}
   */
  listRoots(args: ListRootsCommandInput, options?: __HttpHandlerOptions): Promise<ListRootsCommandOutput>;
  listRoots(args: ListRootsCommandInput, cb: (err: any, data?: ListRootsCommandOutput) => void): void;
  listRoots(
    args: ListRootsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRootsCommandOutput) => void
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
   * @see {@link ListTargetsForPolicyCommand}
   */
  listTargetsForPolicy(
    args: ListTargetsForPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTargetsForPolicyCommandOutput>;
  listTargetsForPolicy(
    args: ListTargetsForPolicyCommandInput,
    cb: (err: any, data?: ListTargetsForPolicyCommandOutput) => void
  ): void;
  listTargetsForPolicy(
    args: ListTargetsForPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTargetsForPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link MoveAccountCommand}
   */
  moveAccount(args: MoveAccountCommandInput, options?: __HttpHandlerOptions): Promise<MoveAccountCommandOutput>;
  moveAccount(args: MoveAccountCommandInput, cb: (err: any, data?: MoveAccountCommandOutput) => void): void;
  moveAccount(
    args: MoveAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MoveAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link PutResourcePolicyCommand}
   */
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutResourcePolicyCommandOutput>;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterDelegatedAdministratorCommand}
   */
  registerDelegatedAdministrator(
    args: RegisterDelegatedAdministratorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterDelegatedAdministratorCommandOutput>;
  registerDelegatedAdministrator(
    args: RegisterDelegatedAdministratorCommandInput,
    cb: (err: any, data?: RegisterDelegatedAdministratorCommandOutput) => void
  ): void;
  registerDelegatedAdministrator(
    args: RegisterDelegatedAdministratorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterDelegatedAdministratorCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveAccountFromOrganizationCommand}
   */
  removeAccountFromOrganization(
    args: RemoveAccountFromOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveAccountFromOrganizationCommandOutput>;
  removeAccountFromOrganization(
    args: RemoveAccountFromOrganizationCommandInput,
    cb: (err: any, data?: RemoveAccountFromOrganizationCommandOutput) => void
  ): void;
  removeAccountFromOrganization(
    args: RemoveAccountFromOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveAccountFromOrganizationCommandOutput) => void
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
   * @see {@link UpdateOrganizationalUnitCommand}
   */
  updateOrganizationalUnit(
    args: UpdateOrganizationalUnitCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateOrganizationalUnitCommandOutput>;
  updateOrganizationalUnit(
    args: UpdateOrganizationalUnitCommandInput,
    cb: (err: any, data?: UpdateOrganizationalUnitCommandOutput) => void
  ): void;
  updateOrganizationalUnit(
    args: UpdateOrganizationalUnitCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateOrganizationalUnitCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePolicyCommand}
   */
  updatePolicy(args: UpdatePolicyCommandInput, options?: __HttpHandlerOptions): Promise<UpdatePolicyCommandOutput>;
  updatePolicy(args: UpdatePolicyCommandInput, cb: (err: any, data?: UpdatePolicyCommandOutput) => void): void;
  updatePolicy(
    args: UpdatePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePolicyCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Organizations is a web service that enables you to consolidate your multiple
 *             Amazon Web Services accounts into an <i>organization</i> and centrally manage your
 *             accounts and their resources.</p>
 *          <p>This guide provides descriptions of the Organizations operations. For more
 *             information about using this service, see the <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html">Organizations User Guide</a>.</p>
 *          <p>
 *             <b>Support and feedback for Organizations</b>
 *          </p>
 *          <p>We welcome your feedback. Send your comments to <a href="mailto:feedback-awsorganizations@amazon.com">feedback-awsorganizations@amazon.com</a> or post your feedback and questions in
 *             the <a href="http://forums.aws.amazon.com/forum.jspa?forumID=219">Organizations support forum</a>. For
 *             more information about the Amazon Web Services support forums, see <a href="http://forums.aws.amazon.com/help.jspa">Forums Help</a>.</p>
 *          <p>
 *             <b>Endpoint to call When using the CLI or the Amazon Web Services
 *                 SDK</b>
 *          </p>
 *          <p>For the current release of Organizations, specify the <code>us-east-1</code> region
 *             for all Amazon Web Services API and CLI calls made from the commercial Amazon Web Services Regions outside of
 *             China. If calling from one of the Amazon Web Services Regions in China, then specify
 *                 <code>cn-northwest-1</code>. You can do this in the CLI by using these parameters
 *             and commands:</p>
 *          <ul>
 *             <li>
 *                <p>Use the following parameter with each command to specify both the endpoint and
 *                     its region:</p>
 *                <p>
 *                   <code>--endpoint-url https://organizations.us-east-1.amazonaws.com</code>
 *                   <i>(from commercial Amazon Web Services Regions outside of China)</i>
 *                </p>
 *                <p>or</p>
 *                <p>
 *                   <code>--endpoint-url
 *                         https://organizations.cn-northwest-1.amazonaws.com.cn</code>
 *                   <i>(from Amazon Web Services Regions in China)</i>
 *                </p>
 *             </li>
 *             <li>
 *                <p>Use the default endpoint, but configure your default region with this
 *                     command:</p>
 *                <p>
 *                   <code>aws configure set default.region us-east-1</code>
 *                   <i>(from commercial Amazon Web Services Regions outside of China)</i>
 *                </p>
 *                <p>or</p>
 *                <p>
 *                   <code>aws configure set default.region cn-northwest-1</code>
 *                   <i>(from Amazon Web Services Regions in China)</i>
 *                </p>
 *             </li>
 *             <li>
 *                <p>Use the following parameter with each command to specify the endpoint:</p>
 *                <p>
 *                   <code>--region us-east-1</code>
 *                   <i>(from commercial Amazon Web Services Regions outside of China)</i>
 *                </p>
 *                <p>or</p>
 *                <p>
 *                   <code>--region cn-northwest-1</code>
 *                   <i>(from Amazon Web Services Regions in China)</i>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Recording API Requests</b>
 *          </p>
 *          <p>Organizations supports CloudTrail, a service that records Amazon Web Services API calls for your
 *             Amazon Web Services account and delivers log files to an Amazon S3 bucket. By using information collected
 *             by CloudTrail, you can determine which requests the Organizations service received, who made the
 *             request and when, and so on. For more about Organizations and its support for CloudTrail, see
 *                 <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_incident-response.html#orgs_cloudtrail-integration">Logging
 *                 Organizations API calls with CloudTrail</a> in the
 *             <i>Organizations User Guide</i>. To learn more about CloudTrail, including how to turn it
 *             on and find your log files, see the <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/what_is_cloud_trail_top_level.html">CloudTrail User Guide</a>.</p>
 */
export class Organizations extends OrganizationsClient implements Organizations {}
createAggregatedClient(commands, Organizations);
