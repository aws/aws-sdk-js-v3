// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AssociateWebACLCommand,
  AssociateWebACLCommandInput,
  AssociateWebACLCommandOutput,
} from "./commands/AssociateWebACLCommand";
import {
  CheckCapacityCommand,
  CheckCapacityCommandInput,
  CheckCapacityCommandOutput,
} from "./commands/CheckCapacityCommand";
import {
  CreateAPIKeyCommand,
  CreateAPIKeyCommandInput,
  CreateAPIKeyCommandOutput,
} from "./commands/CreateAPIKeyCommand";
import { CreateIPSetCommand, CreateIPSetCommandInput, CreateIPSetCommandOutput } from "./commands/CreateIPSetCommand";
import {
  CreateRegexPatternSetCommand,
  CreateRegexPatternSetCommandInput,
  CreateRegexPatternSetCommandOutput,
} from "./commands/CreateRegexPatternSetCommand";
import {
  CreateRuleGroupCommand,
  CreateRuleGroupCommandInput,
  CreateRuleGroupCommandOutput,
} from "./commands/CreateRuleGroupCommand";
import {
  CreateWebACLCommand,
  CreateWebACLCommandInput,
  CreateWebACLCommandOutput,
} from "./commands/CreateWebACLCommand";
import {
  DeleteFirewallManagerRuleGroupsCommand,
  DeleteFirewallManagerRuleGroupsCommandInput,
  DeleteFirewallManagerRuleGroupsCommandOutput,
} from "./commands/DeleteFirewallManagerRuleGroupsCommand";
import { DeleteIPSetCommand, DeleteIPSetCommandInput, DeleteIPSetCommandOutput } from "./commands/DeleteIPSetCommand";
import {
  DeleteLoggingConfigurationCommand,
  DeleteLoggingConfigurationCommandInput,
  DeleteLoggingConfigurationCommandOutput,
} from "./commands/DeleteLoggingConfigurationCommand";
import {
  DeletePermissionPolicyCommand,
  DeletePermissionPolicyCommandInput,
  DeletePermissionPolicyCommandOutput,
} from "./commands/DeletePermissionPolicyCommand";
import {
  DeleteRegexPatternSetCommand,
  DeleteRegexPatternSetCommandInput,
  DeleteRegexPatternSetCommandOutput,
} from "./commands/DeleteRegexPatternSetCommand";
import {
  DeleteRuleGroupCommand,
  DeleteRuleGroupCommandInput,
  DeleteRuleGroupCommandOutput,
} from "./commands/DeleteRuleGroupCommand";
import {
  DeleteWebACLCommand,
  DeleteWebACLCommandInput,
  DeleteWebACLCommandOutput,
} from "./commands/DeleteWebACLCommand";
import {
  DescribeAllManagedProductsCommand,
  DescribeAllManagedProductsCommandInput,
  DescribeAllManagedProductsCommandOutput,
} from "./commands/DescribeAllManagedProductsCommand";
import {
  DescribeManagedProductsByVendorCommand,
  DescribeManagedProductsByVendorCommandInput,
  DescribeManagedProductsByVendorCommandOutput,
} from "./commands/DescribeManagedProductsByVendorCommand";
import {
  DescribeManagedRuleGroupCommand,
  DescribeManagedRuleGroupCommandInput,
  DescribeManagedRuleGroupCommandOutput,
} from "./commands/DescribeManagedRuleGroupCommand";
import {
  DisassociateWebACLCommand,
  DisassociateWebACLCommandInput,
  DisassociateWebACLCommandOutput,
} from "./commands/DisassociateWebACLCommand";
import {
  GenerateMobileSdkReleaseUrlCommand,
  GenerateMobileSdkReleaseUrlCommandInput,
  GenerateMobileSdkReleaseUrlCommandOutput,
} from "./commands/GenerateMobileSdkReleaseUrlCommand";
import {
  GetDecryptedAPIKeyCommand,
  GetDecryptedAPIKeyCommandInput,
  GetDecryptedAPIKeyCommandOutput,
} from "./commands/GetDecryptedAPIKeyCommand";
import { GetIPSetCommand, GetIPSetCommandInput, GetIPSetCommandOutput } from "./commands/GetIPSetCommand";
import {
  GetLoggingConfigurationCommand,
  GetLoggingConfigurationCommandInput,
  GetLoggingConfigurationCommandOutput,
} from "./commands/GetLoggingConfigurationCommand";
import {
  GetManagedRuleSetCommand,
  GetManagedRuleSetCommandInput,
  GetManagedRuleSetCommandOutput,
} from "./commands/GetManagedRuleSetCommand";
import {
  GetMobileSdkReleaseCommand,
  GetMobileSdkReleaseCommandInput,
  GetMobileSdkReleaseCommandOutput,
} from "./commands/GetMobileSdkReleaseCommand";
import {
  GetPermissionPolicyCommand,
  GetPermissionPolicyCommandInput,
  GetPermissionPolicyCommandOutput,
} from "./commands/GetPermissionPolicyCommand";
import {
  GetRateBasedStatementManagedKeysCommand,
  GetRateBasedStatementManagedKeysCommandInput,
  GetRateBasedStatementManagedKeysCommandOutput,
} from "./commands/GetRateBasedStatementManagedKeysCommand";
import {
  GetRegexPatternSetCommand,
  GetRegexPatternSetCommandInput,
  GetRegexPatternSetCommandOutput,
} from "./commands/GetRegexPatternSetCommand";
import {
  GetRuleGroupCommand,
  GetRuleGroupCommandInput,
  GetRuleGroupCommandOutput,
} from "./commands/GetRuleGroupCommand";
import {
  GetSampledRequestsCommand,
  GetSampledRequestsCommandInput,
  GetSampledRequestsCommandOutput,
} from "./commands/GetSampledRequestsCommand";
import { GetWebACLCommand, GetWebACLCommandInput, GetWebACLCommandOutput } from "./commands/GetWebACLCommand";
import {
  GetWebACLForResourceCommand,
  GetWebACLForResourceCommandInput,
  GetWebACLForResourceCommandOutput,
} from "./commands/GetWebACLForResourceCommand";
import { ListAPIKeysCommand, ListAPIKeysCommandInput, ListAPIKeysCommandOutput } from "./commands/ListAPIKeysCommand";
import {
  ListAvailableManagedRuleGroupsCommand,
  ListAvailableManagedRuleGroupsCommandInput,
  ListAvailableManagedRuleGroupsCommandOutput,
} from "./commands/ListAvailableManagedRuleGroupsCommand";
import {
  ListAvailableManagedRuleGroupVersionsCommand,
  ListAvailableManagedRuleGroupVersionsCommandInput,
  ListAvailableManagedRuleGroupVersionsCommandOutput,
} from "./commands/ListAvailableManagedRuleGroupVersionsCommand";
import { ListIPSetsCommand, ListIPSetsCommandInput, ListIPSetsCommandOutput } from "./commands/ListIPSetsCommand";
import {
  ListLoggingConfigurationsCommand,
  ListLoggingConfigurationsCommandInput,
  ListLoggingConfigurationsCommandOutput,
} from "./commands/ListLoggingConfigurationsCommand";
import {
  ListManagedRuleSetsCommand,
  ListManagedRuleSetsCommandInput,
  ListManagedRuleSetsCommandOutput,
} from "./commands/ListManagedRuleSetsCommand";
import {
  ListMobileSdkReleasesCommand,
  ListMobileSdkReleasesCommandInput,
  ListMobileSdkReleasesCommandOutput,
} from "./commands/ListMobileSdkReleasesCommand";
import {
  ListRegexPatternSetsCommand,
  ListRegexPatternSetsCommandInput,
  ListRegexPatternSetsCommandOutput,
} from "./commands/ListRegexPatternSetsCommand";
import {
  ListResourcesForWebACLCommand,
  ListResourcesForWebACLCommandInput,
  ListResourcesForWebACLCommandOutput,
} from "./commands/ListResourcesForWebACLCommand";
import {
  ListRuleGroupsCommand,
  ListRuleGroupsCommandInput,
  ListRuleGroupsCommandOutput,
} from "./commands/ListRuleGroupsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListWebACLsCommand, ListWebACLsCommandInput, ListWebACLsCommandOutput } from "./commands/ListWebACLsCommand";
import {
  PutLoggingConfigurationCommand,
  PutLoggingConfigurationCommandInput,
  PutLoggingConfigurationCommandOutput,
} from "./commands/PutLoggingConfigurationCommand";
import {
  PutManagedRuleSetVersionsCommand,
  PutManagedRuleSetVersionsCommandInput,
  PutManagedRuleSetVersionsCommandOutput,
} from "./commands/PutManagedRuleSetVersionsCommand";
import {
  PutPermissionPolicyCommand,
  PutPermissionPolicyCommandInput,
  PutPermissionPolicyCommandOutput,
} from "./commands/PutPermissionPolicyCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { UpdateIPSetCommand, UpdateIPSetCommandInput, UpdateIPSetCommandOutput } from "./commands/UpdateIPSetCommand";
import {
  UpdateManagedRuleSetVersionExpiryDateCommand,
  UpdateManagedRuleSetVersionExpiryDateCommandInput,
  UpdateManagedRuleSetVersionExpiryDateCommandOutput,
} from "./commands/UpdateManagedRuleSetVersionExpiryDateCommand";
import {
  UpdateRegexPatternSetCommand,
  UpdateRegexPatternSetCommandInput,
  UpdateRegexPatternSetCommandOutput,
} from "./commands/UpdateRegexPatternSetCommand";
import {
  UpdateRuleGroupCommand,
  UpdateRuleGroupCommandInput,
  UpdateRuleGroupCommandOutput,
} from "./commands/UpdateRuleGroupCommand";
import {
  UpdateWebACLCommand,
  UpdateWebACLCommandInput,
  UpdateWebACLCommandOutput,
} from "./commands/UpdateWebACLCommand";
import { WAFV2Client, WAFV2ClientConfig } from "./WAFV2Client";

const commands = {
  AssociateWebACLCommand,
  CheckCapacityCommand,
  CreateAPIKeyCommand,
  CreateIPSetCommand,
  CreateRegexPatternSetCommand,
  CreateRuleGroupCommand,
  CreateWebACLCommand,
  DeleteFirewallManagerRuleGroupsCommand,
  DeleteIPSetCommand,
  DeleteLoggingConfigurationCommand,
  DeletePermissionPolicyCommand,
  DeleteRegexPatternSetCommand,
  DeleteRuleGroupCommand,
  DeleteWebACLCommand,
  DescribeAllManagedProductsCommand,
  DescribeManagedProductsByVendorCommand,
  DescribeManagedRuleGroupCommand,
  DisassociateWebACLCommand,
  GenerateMobileSdkReleaseUrlCommand,
  GetDecryptedAPIKeyCommand,
  GetIPSetCommand,
  GetLoggingConfigurationCommand,
  GetManagedRuleSetCommand,
  GetMobileSdkReleaseCommand,
  GetPermissionPolicyCommand,
  GetRateBasedStatementManagedKeysCommand,
  GetRegexPatternSetCommand,
  GetRuleGroupCommand,
  GetSampledRequestsCommand,
  GetWebACLCommand,
  GetWebACLForResourceCommand,
  ListAPIKeysCommand,
  ListAvailableManagedRuleGroupsCommand,
  ListAvailableManagedRuleGroupVersionsCommand,
  ListIPSetsCommand,
  ListLoggingConfigurationsCommand,
  ListManagedRuleSetsCommand,
  ListMobileSdkReleasesCommand,
  ListRegexPatternSetsCommand,
  ListResourcesForWebACLCommand,
  ListRuleGroupsCommand,
  ListTagsForResourceCommand,
  ListWebACLsCommand,
  PutLoggingConfigurationCommand,
  PutManagedRuleSetVersionsCommand,
  PutPermissionPolicyCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateIPSetCommand,
  UpdateManagedRuleSetVersionExpiryDateCommand,
  UpdateRegexPatternSetCommand,
  UpdateRuleGroupCommand,
  UpdateWebACLCommand,
};

export interface WAFV2 {
  /**
   * @see {@link AssociateWebACLCommand}
   */
  associateWebACL(
    args: AssociateWebACLCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateWebACLCommandOutput>;
  associateWebACL(args: AssociateWebACLCommandInput, cb: (err: any, data?: AssociateWebACLCommandOutput) => void): void;
  associateWebACL(
    args: AssociateWebACLCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateWebACLCommandOutput) => void
  ): void;

  /**
   * @see {@link CheckCapacityCommand}
   */
  checkCapacity(args: CheckCapacityCommandInput, options?: __HttpHandlerOptions): Promise<CheckCapacityCommandOutput>;
  checkCapacity(args: CheckCapacityCommandInput, cb: (err: any, data?: CheckCapacityCommandOutput) => void): void;
  checkCapacity(
    args: CheckCapacityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CheckCapacityCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAPIKeyCommand}
   */
  createAPIKey(args: CreateAPIKeyCommandInput, options?: __HttpHandlerOptions): Promise<CreateAPIKeyCommandOutput>;
  createAPIKey(args: CreateAPIKeyCommandInput, cb: (err: any, data?: CreateAPIKeyCommandOutput) => void): void;
  createAPIKey(
    args: CreateAPIKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAPIKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateIPSetCommand}
   */
  createIPSet(args: CreateIPSetCommandInput, options?: __HttpHandlerOptions): Promise<CreateIPSetCommandOutput>;
  createIPSet(args: CreateIPSetCommandInput, cb: (err: any, data?: CreateIPSetCommandOutput) => void): void;
  createIPSet(
    args: CreateIPSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIPSetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRegexPatternSetCommand}
   */
  createRegexPatternSet(
    args: CreateRegexPatternSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRegexPatternSetCommandOutput>;
  createRegexPatternSet(
    args: CreateRegexPatternSetCommandInput,
    cb: (err: any, data?: CreateRegexPatternSetCommandOutput) => void
  ): void;
  createRegexPatternSet(
    args: CreateRegexPatternSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRegexPatternSetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRuleGroupCommand}
   */
  createRuleGroup(
    args: CreateRuleGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRuleGroupCommandOutput>;
  createRuleGroup(args: CreateRuleGroupCommandInput, cb: (err: any, data?: CreateRuleGroupCommandOutput) => void): void;
  createRuleGroup(
    args: CreateRuleGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRuleGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWebACLCommand}
   */
  createWebACL(args: CreateWebACLCommandInput, options?: __HttpHandlerOptions): Promise<CreateWebACLCommandOutput>;
  createWebACL(args: CreateWebACLCommandInput, cb: (err: any, data?: CreateWebACLCommandOutput) => void): void;
  createWebACL(
    args: CreateWebACLCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWebACLCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFirewallManagerRuleGroupsCommand}
   */
  deleteFirewallManagerRuleGroups(
    args: DeleteFirewallManagerRuleGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFirewallManagerRuleGroupsCommandOutput>;
  deleteFirewallManagerRuleGroups(
    args: DeleteFirewallManagerRuleGroupsCommandInput,
    cb: (err: any, data?: DeleteFirewallManagerRuleGroupsCommandOutput) => void
  ): void;
  deleteFirewallManagerRuleGroups(
    args: DeleteFirewallManagerRuleGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFirewallManagerRuleGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIPSetCommand}
   */
  deleteIPSet(args: DeleteIPSetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteIPSetCommandOutput>;
  deleteIPSet(args: DeleteIPSetCommandInput, cb: (err: any, data?: DeleteIPSetCommandOutput) => void): void;
  deleteIPSet(
    args: DeleteIPSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIPSetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLoggingConfigurationCommand}
   */
  deleteLoggingConfiguration(
    args: DeleteLoggingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLoggingConfigurationCommandOutput>;
  deleteLoggingConfiguration(
    args: DeleteLoggingConfigurationCommandInput,
    cb: (err: any, data?: DeleteLoggingConfigurationCommandOutput) => void
  ): void;
  deleteLoggingConfiguration(
    args: DeleteLoggingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLoggingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePermissionPolicyCommand}
   */
  deletePermissionPolicy(
    args: DeletePermissionPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePermissionPolicyCommandOutput>;
  deletePermissionPolicy(
    args: DeletePermissionPolicyCommandInput,
    cb: (err: any, data?: DeletePermissionPolicyCommandOutput) => void
  ): void;
  deletePermissionPolicy(
    args: DeletePermissionPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePermissionPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRegexPatternSetCommand}
   */
  deleteRegexPatternSet(
    args: DeleteRegexPatternSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRegexPatternSetCommandOutput>;
  deleteRegexPatternSet(
    args: DeleteRegexPatternSetCommandInput,
    cb: (err: any, data?: DeleteRegexPatternSetCommandOutput) => void
  ): void;
  deleteRegexPatternSet(
    args: DeleteRegexPatternSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRegexPatternSetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRuleGroupCommand}
   */
  deleteRuleGroup(
    args: DeleteRuleGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRuleGroupCommandOutput>;
  deleteRuleGroup(args: DeleteRuleGroupCommandInput, cb: (err: any, data?: DeleteRuleGroupCommandOutput) => void): void;
  deleteRuleGroup(
    args: DeleteRuleGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRuleGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWebACLCommand}
   */
  deleteWebACL(args: DeleteWebACLCommandInput, options?: __HttpHandlerOptions): Promise<DeleteWebACLCommandOutput>;
  deleteWebACL(args: DeleteWebACLCommandInput, cb: (err: any, data?: DeleteWebACLCommandOutput) => void): void;
  deleteWebACL(
    args: DeleteWebACLCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWebACLCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAllManagedProductsCommand}
   */
  describeAllManagedProducts(
    args: DescribeAllManagedProductsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAllManagedProductsCommandOutput>;
  describeAllManagedProducts(
    args: DescribeAllManagedProductsCommandInput,
    cb: (err: any, data?: DescribeAllManagedProductsCommandOutput) => void
  ): void;
  describeAllManagedProducts(
    args: DescribeAllManagedProductsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAllManagedProductsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeManagedProductsByVendorCommand}
   */
  describeManagedProductsByVendor(
    args: DescribeManagedProductsByVendorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeManagedProductsByVendorCommandOutput>;
  describeManagedProductsByVendor(
    args: DescribeManagedProductsByVendorCommandInput,
    cb: (err: any, data?: DescribeManagedProductsByVendorCommandOutput) => void
  ): void;
  describeManagedProductsByVendor(
    args: DescribeManagedProductsByVendorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeManagedProductsByVendorCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeManagedRuleGroupCommand}
   */
  describeManagedRuleGroup(
    args: DescribeManagedRuleGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeManagedRuleGroupCommandOutput>;
  describeManagedRuleGroup(
    args: DescribeManagedRuleGroupCommandInput,
    cb: (err: any, data?: DescribeManagedRuleGroupCommandOutput) => void
  ): void;
  describeManagedRuleGroup(
    args: DescribeManagedRuleGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeManagedRuleGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateWebACLCommand}
   */
  disassociateWebACL(
    args: DisassociateWebACLCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateWebACLCommandOutput>;
  disassociateWebACL(
    args: DisassociateWebACLCommandInput,
    cb: (err: any, data?: DisassociateWebACLCommandOutput) => void
  ): void;
  disassociateWebACL(
    args: DisassociateWebACLCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateWebACLCommandOutput) => void
  ): void;

  /**
   * @see {@link GenerateMobileSdkReleaseUrlCommand}
   */
  generateMobileSdkReleaseUrl(
    args: GenerateMobileSdkReleaseUrlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GenerateMobileSdkReleaseUrlCommandOutput>;
  generateMobileSdkReleaseUrl(
    args: GenerateMobileSdkReleaseUrlCommandInput,
    cb: (err: any, data?: GenerateMobileSdkReleaseUrlCommandOutput) => void
  ): void;
  generateMobileSdkReleaseUrl(
    args: GenerateMobileSdkReleaseUrlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GenerateMobileSdkReleaseUrlCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDecryptedAPIKeyCommand}
   */
  getDecryptedAPIKey(
    args: GetDecryptedAPIKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDecryptedAPIKeyCommandOutput>;
  getDecryptedAPIKey(
    args: GetDecryptedAPIKeyCommandInput,
    cb: (err: any, data?: GetDecryptedAPIKeyCommandOutput) => void
  ): void;
  getDecryptedAPIKey(
    args: GetDecryptedAPIKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDecryptedAPIKeyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIPSetCommand}
   */
  getIPSet(args: GetIPSetCommandInput, options?: __HttpHandlerOptions): Promise<GetIPSetCommandOutput>;
  getIPSet(args: GetIPSetCommandInput, cb: (err: any, data?: GetIPSetCommandOutput) => void): void;
  getIPSet(
    args: GetIPSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIPSetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLoggingConfigurationCommand}
   */
  getLoggingConfiguration(
    args: GetLoggingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLoggingConfigurationCommandOutput>;
  getLoggingConfiguration(
    args: GetLoggingConfigurationCommandInput,
    cb: (err: any, data?: GetLoggingConfigurationCommandOutput) => void
  ): void;
  getLoggingConfiguration(
    args: GetLoggingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLoggingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetManagedRuleSetCommand}
   */
  getManagedRuleSet(
    args: GetManagedRuleSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetManagedRuleSetCommandOutput>;
  getManagedRuleSet(
    args: GetManagedRuleSetCommandInput,
    cb: (err: any, data?: GetManagedRuleSetCommandOutput) => void
  ): void;
  getManagedRuleSet(
    args: GetManagedRuleSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetManagedRuleSetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMobileSdkReleaseCommand}
   */
  getMobileSdkRelease(
    args: GetMobileSdkReleaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMobileSdkReleaseCommandOutput>;
  getMobileSdkRelease(
    args: GetMobileSdkReleaseCommandInput,
    cb: (err: any, data?: GetMobileSdkReleaseCommandOutput) => void
  ): void;
  getMobileSdkRelease(
    args: GetMobileSdkReleaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMobileSdkReleaseCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPermissionPolicyCommand}
   */
  getPermissionPolicy(
    args: GetPermissionPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPermissionPolicyCommandOutput>;
  getPermissionPolicy(
    args: GetPermissionPolicyCommandInput,
    cb: (err: any, data?: GetPermissionPolicyCommandOutput) => void
  ): void;
  getPermissionPolicy(
    args: GetPermissionPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPermissionPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRateBasedStatementManagedKeysCommand}
   */
  getRateBasedStatementManagedKeys(
    args: GetRateBasedStatementManagedKeysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRateBasedStatementManagedKeysCommandOutput>;
  getRateBasedStatementManagedKeys(
    args: GetRateBasedStatementManagedKeysCommandInput,
    cb: (err: any, data?: GetRateBasedStatementManagedKeysCommandOutput) => void
  ): void;
  getRateBasedStatementManagedKeys(
    args: GetRateBasedStatementManagedKeysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRateBasedStatementManagedKeysCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRegexPatternSetCommand}
   */
  getRegexPatternSet(
    args: GetRegexPatternSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRegexPatternSetCommandOutput>;
  getRegexPatternSet(
    args: GetRegexPatternSetCommandInput,
    cb: (err: any, data?: GetRegexPatternSetCommandOutput) => void
  ): void;
  getRegexPatternSet(
    args: GetRegexPatternSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRegexPatternSetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRuleGroupCommand}
   */
  getRuleGroup(args: GetRuleGroupCommandInput, options?: __HttpHandlerOptions): Promise<GetRuleGroupCommandOutput>;
  getRuleGroup(args: GetRuleGroupCommandInput, cb: (err: any, data?: GetRuleGroupCommandOutput) => void): void;
  getRuleGroup(
    args: GetRuleGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRuleGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSampledRequestsCommand}
   */
  getSampledRequests(
    args: GetSampledRequestsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSampledRequestsCommandOutput>;
  getSampledRequests(
    args: GetSampledRequestsCommandInput,
    cb: (err: any, data?: GetSampledRequestsCommandOutput) => void
  ): void;
  getSampledRequests(
    args: GetSampledRequestsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSampledRequestsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWebACLCommand}
   */
  getWebACL(args: GetWebACLCommandInput, options?: __HttpHandlerOptions): Promise<GetWebACLCommandOutput>;
  getWebACL(args: GetWebACLCommandInput, cb: (err: any, data?: GetWebACLCommandOutput) => void): void;
  getWebACL(
    args: GetWebACLCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWebACLCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWebACLForResourceCommand}
   */
  getWebACLForResource(
    args: GetWebACLForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWebACLForResourceCommandOutput>;
  getWebACLForResource(
    args: GetWebACLForResourceCommandInput,
    cb: (err: any, data?: GetWebACLForResourceCommandOutput) => void
  ): void;
  getWebACLForResource(
    args: GetWebACLForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWebACLForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAPIKeysCommand}
   */
  listAPIKeys(args: ListAPIKeysCommandInput, options?: __HttpHandlerOptions): Promise<ListAPIKeysCommandOutput>;
  listAPIKeys(args: ListAPIKeysCommandInput, cb: (err: any, data?: ListAPIKeysCommandOutput) => void): void;
  listAPIKeys(
    args: ListAPIKeysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAPIKeysCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAvailableManagedRuleGroupsCommand}
   */
  listAvailableManagedRuleGroups(
    args: ListAvailableManagedRuleGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAvailableManagedRuleGroupsCommandOutput>;
  listAvailableManagedRuleGroups(
    args: ListAvailableManagedRuleGroupsCommandInput,
    cb: (err: any, data?: ListAvailableManagedRuleGroupsCommandOutput) => void
  ): void;
  listAvailableManagedRuleGroups(
    args: ListAvailableManagedRuleGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAvailableManagedRuleGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAvailableManagedRuleGroupVersionsCommand}
   */
  listAvailableManagedRuleGroupVersions(
    args: ListAvailableManagedRuleGroupVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAvailableManagedRuleGroupVersionsCommandOutput>;
  listAvailableManagedRuleGroupVersions(
    args: ListAvailableManagedRuleGroupVersionsCommandInput,
    cb: (err: any, data?: ListAvailableManagedRuleGroupVersionsCommandOutput) => void
  ): void;
  listAvailableManagedRuleGroupVersions(
    args: ListAvailableManagedRuleGroupVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAvailableManagedRuleGroupVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIPSetsCommand}
   */
  listIPSets(args: ListIPSetsCommandInput, options?: __HttpHandlerOptions): Promise<ListIPSetsCommandOutput>;
  listIPSets(args: ListIPSetsCommandInput, cb: (err: any, data?: ListIPSetsCommandOutput) => void): void;
  listIPSets(
    args: ListIPSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIPSetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLoggingConfigurationsCommand}
   */
  listLoggingConfigurations(
    args: ListLoggingConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLoggingConfigurationsCommandOutput>;
  listLoggingConfigurations(
    args: ListLoggingConfigurationsCommandInput,
    cb: (err: any, data?: ListLoggingConfigurationsCommandOutput) => void
  ): void;
  listLoggingConfigurations(
    args: ListLoggingConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLoggingConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListManagedRuleSetsCommand}
   */
  listManagedRuleSets(
    args: ListManagedRuleSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListManagedRuleSetsCommandOutput>;
  listManagedRuleSets(
    args: ListManagedRuleSetsCommandInput,
    cb: (err: any, data?: ListManagedRuleSetsCommandOutput) => void
  ): void;
  listManagedRuleSets(
    args: ListManagedRuleSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListManagedRuleSetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMobileSdkReleasesCommand}
   */
  listMobileSdkReleases(
    args: ListMobileSdkReleasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMobileSdkReleasesCommandOutput>;
  listMobileSdkReleases(
    args: ListMobileSdkReleasesCommandInput,
    cb: (err: any, data?: ListMobileSdkReleasesCommandOutput) => void
  ): void;
  listMobileSdkReleases(
    args: ListMobileSdkReleasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMobileSdkReleasesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRegexPatternSetsCommand}
   */
  listRegexPatternSets(
    args: ListRegexPatternSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRegexPatternSetsCommandOutput>;
  listRegexPatternSets(
    args: ListRegexPatternSetsCommandInput,
    cb: (err: any, data?: ListRegexPatternSetsCommandOutput) => void
  ): void;
  listRegexPatternSets(
    args: ListRegexPatternSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRegexPatternSetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourcesForWebACLCommand}
   */
  listResourcesForWebACL(
    args: ListResourcesForWebACLCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourcesForWebACLCommandOutput>;
  listResourcesForWebACL(
    args: ListResourcesForWebACLCommandInput,
    cb: (err: any, data?: ListResourcesForWebACLCommandOutput) => void
  ): void;
  listResourcesForWebACL(
    args: ListResourcesForWebACLCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourcesForWebACLCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRuleGroupsCommand}
   */
  listRuleGroups(
    args: ListRuleGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRuleGroupsCommandOutput>;
  listRuleGroups(args: ListRuleGroupsCommandInput, cb: (err: any, data?: ListRuleGroupsCommandOutput) => void): void;
  listRuleGroups(
    args: ListRuleGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRuleGroupsCommandOutput) => void
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
   * @see {@link ListWebACLsCommand}
   */
  listWebACLs(args: ListWebACLsCommandInput, options?: __HttpHandlerOptions): Promise<ListWebACLsCommandOutput>;
  listWebACLs(args: ListWebACLsCommandInput, cb: (err: any, data?: ListWebACLsCommandOutput) => void): void;
  listWebACLs(
    args: ListWebACLsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWebACLsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutLoggingConfigurationCommand}
   */
  putLoggingConfiguration(
    args: PutLoggingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutLoggingConfigurationCommandOutput>;
  putLoggingConfiguration(
    args: PutLoggingConfigurationCommandInput,
    cb: (err: any, data?: PutLoggingConfigurationCommandOutput) => void
  ): void;
  putLoggingConfiguration(
    args: PutLoggingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutLoggingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutManagedRuleSetVersionsCommand}
   */
  putManagedRuleSetVersions(
    args: PutManagedRuleSetVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutManagedRuleSetVersionsCommandOutput>;
  putManagedRuleSetVersions(
    args: PutManagedRuleSetVersionsCommandInput,
    cb: (err: any, data?: PutManagedRuleSetVersionsCommandOutput) => void
  ): void;
  putManagedRuleSetVersions(
    args: PutManagedRuleSetVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutManagedRuleSetVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutPermissionPolicyCommand}
   */
  putPermissionPolicy(
    args: PutPermissionPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutPermissionPolicyCommandOutput>;
  putPermissionPolicy(
    args: PutPermissionPolicyCommandInput,
    cb: (err: any, data?: PutPermissionPolicyCommandOutput) => void
  ): void;
  putPermissionPolicy(
    args: PutPermissionPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutPermissionPolicyCommandOutput) => void
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
   * @see {@link UpdateIPSetCommand}
   */
  updateIPSet(args: UpdateIPSetCommandInput, options?: __HttpHandlerOptions): Promise<UpdateIPSetCommandOutput>;
  updateIPSet(args: UpdateIPSetCommandInput, cb: (err: any, data?: UpdateIPSetCommandOutput) => void): void;
  updateIPSet(
    args: UpdateIPSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateIPSetCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateManagedRuleSetVersionExpiryDateCommand}
   */
  updateManagedRuleSetVersionExpiryDate(
    args: UpdateManagedRuleSetVersionExpiryDateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateManagedRuleSetVersionExpiryDateCommandOutput>;
  updateManagedRuleSetVersionExpiryDate(
    args: UpdateManagedRuleSetVersionExpiryDateCommandInput,
    cb: (err: any, data?: UpdateManagedRuleSetVersionExpiryDateCommandOutput) => void
  ): void;
  updateManagedRuleSetVersionExpiryDate(
    args: UpdateManagedRuleSetVersionExpiryDateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateManagedRuleSetVersionExpiryDateCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRegexPatternSetCommand}
   */
  updateRegexPatternSet(
    args: UpdateRegexPatternSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRegexPatternSetCommandOutput>;
  updateRegexPatternSet(
    args: UpdateRegexPatternSetCommandInput,
    cb: (err: any, data?: UpdateRegexPatternSetCommandOutput) => void
  ): void;
  updateRegexPatternSet(
    args: UpdateRegexPatternSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRegexPatternSetCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRuleGroupCommand}
   */
  updateRuleGroup(
    args: UpdateRuleGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRuleGroupCommandOutput>;
  updateRuleGroup(args: UpdateRuleGroupCommandInput, cb: (err: any, data?: UpdateRuleGroupCommandOutput) => void): void;
  updateRuleGroup(
    args: UpdateRuleGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRuleGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWebACLCommand}
   */
  updateWebACL(args: UpdateWebACLCommandInput, options?: __HttpHandlerOptions): Promise<UpdateWebACLCommandOutput>;
  updateWebACL(args: UpdateWebACLCommandInput, cb: (err: any, data?: UpdateWebACLCommandOutput) => void): void;
  updateWebACL(
    args: UpdateWebACLCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWebACLCommandOutput) => void
  ): void;
}

/**
 * @public
 * <fullname>WAF</fullname>
 *          <note>
 *             <p>This is the latest version of the <b>WAF</b> API,
 *             released in November, 2019. The names of the entities that you use to access this API,
 *             like endpoints and namespaces, all have the versioning information added, like "V2" or
 *             "v2", to distinguish from the prior version. We recommend migrating your resources to
 *             this version, because it has a number of significant improvements.</p>
 *             <p>If you used WAF prior to this release, you can't use this WAFV2 API to access any
 *             WAF resources that you created before. You can access your old rules, web ACLs, and
 *             other WAF resources only through the WAF Classic APIs. The WAF Classic APIs
 *             have retained the prior names, endpoints, and namespaces. </p>
 *             <p>For information, including how to migrate your WAF resources to this version,
 *             see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">WAF Developer Guide</a>. </p>
 *          </note>
 *          <p>WAF is a web application firewall that lets you monitor the HTTP and HTTPS
 *          requests that are forwarded to an Amazon CloudFront distribution, Amazon API Gateway REST API, Application Load Balancer, AppSync
 *       GraphQL API, Amazon Cognito user pool, App Runner service, or Amazon Web Services Verified Access instance. WAF also lets you control access to your content,
 *       to protect the Amazon Web Services resource that WAF is monitoring. Based on conditions that
 *          you specify, such as the IP addresses that requests originate from or the values of query
 *          strings, the protected resource responds to requests with either the requested content, an HTTP 403 status code
 *          (Forbidden), or with a custom response. </p>
 *          <p>This API guide is for developers who need detailed information about WAF API actions,
 *          data types, and errors. For detailed information about WAF features and guidance for configuring and using
 *          WAF, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html">WAF Developer
 *          Guide</a>.</p>
 *          <p>You can make calls using the endpoints listed in <a href="https://docs.aws.amazon.com/general/latest/gr/waf.html">WAF endpoints and quotas</a>. </p>
 *          <ul>
 *             <li>
 *                <p>For regional applications, you can use any of the endpoints in the list.
 *                A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, an Amazon Cognito user pool, an App Runner service, or an Amazon Web Services Verified Access instance. </p>
 *             </li>
 *             <li>
 *                <p>For Amazon CloudFront applications, you must use the API endpoint listed for
 *                US East (N. Virginia): us-east-1.</p>
 *             </li>
 *          </ul>
 *          <p>Alternatively, you can use one of the Amazon Web Services SDKs to access an API that's tailored to the
 *          programming language or platform that you're using. For more information, see <a href="http://aws.amazon.com/tools/#SDKs">Amazon Web Services SDKs</a>.</p>
 *          <p>We currently provide two versions of the WAF API: this API and the prior versions,
 *          the classic WAF APIs. This new API provides the same functionality as the older versions,
 *          with the following major improvements:</p>
 *          <ul>
 *             <li>
 *                <p>You use one API for both global and regional applications. Where you need to
 *                distinguish the scope, you specify a <code>Scope</code> parameter and set it to
 *                   <code>CLOUDFRONT</code> or <code>REGIONAL</code>. </p>
 *             </li>
 *             <li>
 *                <p>You can define a web ACL or rule group with a single call, and update it with a
 *                single call. You define all rule specifications in JSON format, and pass them to your
 *                rule group or web ACL calls.</p>
 *             </li>
 *             <li>
 *                <p>The limits WAF places on the use of rules more closely reflects the cost of
 *                running each type of rule. Rule groups include capacity settings, so you know the
 *                maximum cost of a rule group when you use it.</p>
 *             </li>
 *          </ul>
 */
export class WAFV2 extends WAFV2Client implements WAFV2 {}
createAggregatedClient(commands, WAFV2);
