// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  type CreateByteMatchSetCommandInput,
  type CreateByteMatchSetCommandOutput,
  CreateByteMatchSetCommand,
} from "./commands/CreateByteMatchSetCommand";
import {
  type CreateGeoMatchSetCommandInput,
  type CreateGeoMatchSetCommandOutput,
  CreateGeoMatchSetCommand,
} from "./commands/CreateGeoMatchSetCommand";
import {
  type CreateIPSetCommandInput,
  type CreateIPSetCommandOutput,
  CreateIPSetCommand,
} from "./commands/CreateIPSetCommand";
import {
  type CreateRateBasedRuleCommandInput,
  type CreateRateBasedRuleCommandOutput,
  CreateRateBasedRuleCommand,
} from "./commands/CreateRateBasedRuleCommand";
import {
  type CreateRegexMatchSetCommandInput,
  type CreateRegexMatchSetCommandOutput,
  CreateRegexMatchSetCommand,
} from "./commands/CreateRegexMatchSetCommand";
import {
  type CreateRegexPatternSetCommandInput,
  type CreateRegexPatternSetCommandOutput,
  CreateRegexPatternSetCommand,
} from "./commands/CreateRegexPatternSetCommand";
import {
  type CreateRuleCommandInput,
  type CreateRuleCommandOutput,
  CreateRuleCommand,
} from "./commands/CreateRuleCommand";
import {
  type CreateRuleGroupCommandInput,
  type CreateRuleGroupCommandOutput,
  CreateRuleGroupCommand,
} from "./commands/CreateRuleGroupCommand";
import {
  type CreateSizeConstraintSetCommandInput,
  type CreateSizeConstraintSetCommandOutput,
  CreateSizeConstraintSetCommand,
} from "./commands/CreateSizeConstraintSetCommand";
import {
  type CreateSqlInjectionMatchSetCommandInput,
  type CreateSqlInjectionMatchSetCommandOutput,
  CreateSqlInjectionMatchSetCommand,
} from "./commands/CreateSqlInjectionMatchSetCommand";
import {
  type CreateWebACLCommandInput,
  type CreateWebACLCommandOutput,
  CreateWebACLCommand,
} from "./commands/CreateWebACLCommand";
import {
  type CreateWebACLMigrationStackCommandInput,
  type CreateWebACLMigrationStackCommandOutput,
  CreateWebACLMigrationStackCommand,
} from "./commands/CreateWebACLMigrationStackCommand";
import {
  type CreateXssMatchSetCommandInput,
  type CreateXssMatchSetCommandOutput,
  CreateXssMatchSetCommand,
} from "./commands/CreateXssMatchSetCommand";
import {
  type DeleteByteMatchSetCommandInput,
  type DeleteByteMatchSetCommandOutput,
  DeleteByteMatchSetCommand,
} from "./commands/DeleteByteMatchSetCommand";
import {
  type DeleteGeoMatchSetCommandInput,
  type DeleteGeoMatchSetCommandOutput,
  DeleteGeoMatchSetCommand,
} from "./commands/DeleteGeoMatchSetCommand";
import {
  type DeleteIPSetCommandInput,
  type DeleteIPSetCommandOutput,
  DeleteIPSetCommand,
} from "./commands/DeleteIPSetCommand";
import {
  type DeleteLoggingConfigurationCommandInput,
  type DeleteLoggingConfigurationCommandOutput,
  DeleteLoggingConfigurationCommand,
} from "./commands/DeleteLoggingConfigurationCommand";
import {
  type DeletePermissionPolicyCommandInput,
  type DeletePermissionPolicyCommandOutput,
  DeletePermissionPolicyCommand,
} from "./commands/DeletePermissionPolicyCommand";
import {
  type DeleteRateBasedRuleCommandInput,
  type DeleteRateBasedRuleCommandOutput,
  DeleteRateBasedRuleCommand,
} from "./commands/DeleteRateBasedRuleCommand";
import {
  type DeleteRegexMatchSetCommandInput,
  type DeleteRegexMatchSetCommandOutput,
  DeleteRegexMatchSetCommand,
} from "./commands/DeleteRegexMatchSetCommand";
import {
  type DeleteRegexPatternSetCommandInput,
  type DeleteRegexPatternSetCommandOutput,
  DeleteRegexPatternSetCommand,
} from "./commands/DeleteRegexPatternSetCommand";
import {
  type DeleteRuleCommandInput,
  type DeleteRuleCommandOutput,
  DeleteRuleCommand,
} from "./commands/DeleteRuleCommand";
import {
  type DeleteRuleGroupCommandInput,
  type DeleteRuleGroupCommandOutput,
  DeleteRuleGroupCommand,
} from "./commands/DeleteRuleGroupCommand";
import {
  type DeleteSizeConstraintSetCommandInput,
  type DeleteSizeConstraintSetCommandOutput,
  DeleteSizeConstraintSetCommand,
} from "./commands/DeleteSizeConstraintSetCommand";
import {
  type DeleteSqlInjectionMatchSetCommandInput,
  type DeleteSqlInjectionMatchSetCommandOutput,
  DeleteSqlInjectionMatchSetCommand,
} from "./commands/DeleteSqlInjectionMatchSetCommand";
import {
  type DeleteWebACLCommandInput,
  type DeleteWebACLCommandOutput,
  DeleteWebACLCommand,
} from "./commands/DeleteWebACLCommand";
import {
  type DeleteXssMatchSetCommandInput,
  type DeleteXssMatchSetCommandOutput,
  DeleteXssMatchSetCommand,
} from "./commands/DeleteXssMatchSetCommand";
import {
  type GetByteMatchSetCommandInput,
  type GetByteMatchSetCommandOutput,
  GetByteMatchSetCommand,
} from "./commands/GetByteMatchSetCommand";
import {
  type GetChangeTokenCommandInput,
  type GetChangeTokenCommandOutput,
  GetChangeTokenCommand,
} from "./commands/GetChangeTokenCommand";
import {
  type GetChangeTokenStatusCommandInput,
  type GetChangeTokenStatusCommandOutput,
  GetChangeTokenStatusCommand,
} from "./commands/GetChangeTokenStatusCommand";
import {
  type GetGeoMatchSetCommandInput,
  type GetGeoMatchSetCommandOutput,
  GetGeoMatchSetCommand,
} from "./commands/GetGeoMatchSetCommand";
import { type GetIPSetCommandInput, type GetIPSetCommandOutput, GetIPSetCommand } from "./commands/GetIPSetCommand";
import {
  type GetLoggingConfigurationCommandInput,
  type GetLoggingConfigurationCommandOutput,
  GetLoggingConfigurationCommand,
} from "./commands/GetLoggingConfigurationCommand";
import {
  type GetPermissionPolicyCommandInput,
  type GetPermissionPolicyCommandOutput,
  GetPermissionPolicyCommand,
} from "./commands/GetPermissionPolicyCommand";
import {
  type GetRateBasedRuleCommandInput,
  type GetRateBasedRuleCommandOutput,
  GetRateBasedRuleCommand,
} from "./commands/GetRateBasedRuleCommand";
import {
  type GetRateBasedRuleManagedKeysCommandInput,
  type GetRateBasedRuleManagedKeysCommandOutput,
  GetRateBasedRuleManagedKeysCommand,
} from "./commands/GetRateBasedRuleManagedKeysCommand";
import {
  type GetRegexMatchSetCommandInput,
  type GetRegexMatchSetCommandOutput,
  GetRegexMatchSetCommand,
} from "./commands/GetRegexMatchSetCommand";
import {
  type GetRegexPatternSetCommandInput,
  type GetRegexPatternSetCommandOutput,
  GetRegexPatternSetCommand,
} from "./commands/GetRegexPatternSetCommand";
import { type GetRuleCommandInput, type GetRuleCommandOutput, GetRuleCommand } from "./commands/GetRuleCommand";
import {
  type GetRuleGroupCommandInput,
  type GetRuleGroupCommandOutput,
  GetRuleGroupCommand,
} from "./commands/GetRuleGroupCommand";
import {
  type GetSampledRequestsCommandInput,
  type GetSampledRequestsCommandOutput,
  GetSampledRequestsCommand,
} from "./commands/GetSampledRequestsCommand";
import {
  type GetSizeConstraintSetCommandInput,
  type GetSizeConstraintSetCommandOutput,
  GetSizeConstraintSetCommand,
} from "./commands/GetSizeConstraintSetCommand";
import {
  type GetSqlInjectionMatchSetCommandInput,
  type GetSqlInjectionMatchSetCommandOutput,
  GetSqlInjectionMatchSetCommand,
} from "./commands/GetSqlInjectionMatchSetCommand";
import { type GetWebACLCommandInput, type GetWebACLCommandOutput, GetWebACLCommand } from "./commands/GetWebACLCommand";
import {
  type GetXssMatchSetCommandInput,
  type GetXssMatchSetCommandOutput,
  GetXssMatchSetCommand,
} from "./commands/GetXssMatchSetCommand";
import {
  type ListActivatedRulesInRuleGroupCommandInput,
  type ListActivatedRulesInRuleGroupCommandOutput,
  ListActivatedRulesInRuleGroupCommand,
} from "./commands/ListActivatedRulesInRuleGroupCommand";
import {
  type ListByteMatchSetsCommandInput,
  type ListByteMatchSetsCommandOutput,
  ListByteMatchSetsCommand,
} from "./commands/ListByteMatchSetsCommand";
import {
  type ListGeoMatchSetsCommandInput,
  type ListGeoMatchSetsCommandOutput,
  ListGeoMatchSetsCommand,
} from "./commands/ListGeoMatchSetsCommand";
import {
  type ListIPSetsCommandInput,
  type ListIPSetsCommandOutput,
  ListIPSetsCommand,
} from "./commands/ListIPSetsCommand";
import {
  type ListLoggingConfigurationsCommandInput,
  type ListLoggingConfigurationsCommandOutput,
  ListLoggingConfigurationsCommand,
} from "./commands/ListLoggingConfigurationsCommand";
import {
  type ListRateBasedRulesCommandInput,
  type ListRateBasedRulesCommandOutput,
  ListRateBasedRulesCommand,
} from "./commands/ListRateBasedRulesCommand";
import {
  type ListRegexMatchSetsCommandInput,
  type ListRegexMatchSetsCommandOutput,
  ListRegexMatchSetsCommand,
} from "./commands/ListRegexMatchSetsCommand";
import {
  type ListRegexPatternSetsCommandInput,
  type ListRegexPatternSetsCommandOutput,
  ListRegexPatternSetsCommand,
} from "./commands/ListRegexPatternSetsCommand";
import {
  type ListRuleGroupsCommandInput,
  type ListRuleGroupsCommandOutput,
  ListRuleGroupsCommand,
} from "./commands/ListRuleGroupsCommand";
import { type ListRulesCommandInput, type ListRulesCommandOutput, ListRulesCommand } from "./commands/ListRulesCommand";
import {
  type ListSizeConstraintSetsCommandInput,
  type ListSizeConstraintSetsCommandOutput,
  ListSizeConstraintSetsCommand,
} from "./commands/ListSizeConstraintSetsCommand";
import {
  type ListSqlInjectionMatchSetsCommandInput,
  type ListSqlInjectionMatchSetsCommandOutput,
  ListSqlInjectionMatchSetsCommand,
} from "./commands/ListSqlInjectionMatchSetsCommand";
import {
  type ListSubscribedRuleGroupsCommandInput,
  type ListSubscribedRuleGroupsCommandOutput,
  ListSubscribedRuleGroupsCommand,
} from "./commands/ListSubscribedRuleGroupsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListWebACLsCommandInput,
  type ListWebACLsCommandOutput,
  ListWebACLsCommand,
} from "./commands/ListWebACLsCommand";
import {
  type ListXssMatchSetsCommandInput,
  type ListXssMatchSetsCommandOutput,
  ListXssMatchSetsCommand,
} from "./commands/ListXssMatchSetsCommand";
import {
  type PutLoggingConfigurationCommandInput,
  type PutLoggingConfigurationCommandOutput,
  PutLoggingConfigurationCommand,
} from "./commands/PutLoggingConfigurationCommand";
import {
  type PutPermissionPolicyCommandInput,
  type PutPermissionPolicyCommandOutput,
  PutPermissionPolicyCommand,
} from "./commands/PutPermissionPolicyCommand";
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
  type UpdateByteMatchSetCommandInput,
  type UpdateByteMatchSetCommandOutput,
  UpdateByteMatchSetCommand,
} from "./commands/UpdateByteMatchSetCommand";
import {
  type UpdateGeoMatchSetCommandInput,
  type UpdateGeoMatchSetCommandOutput,
  UpdateGeoMatchSetCommand,
} from "./commands/UpdateGeoMatchSetCommand";
import {
  type UpdateIPSetCommandInput,
  type UpdateIPSetCommandOutput,
  UpdateIPSetCommand,
} from "./commands/UpdateIPSetCommand";
import {
  type UpdateRateBasedRuleCommandInput,
  type UpdateRateBasedRuleCommandOutput,
  UpdateRateBasedRuleCommand,
} from "./commands/UpdateRateBasedRuleCommand";
import {
  type UpdateRegexMatchSetCommandInput,
  type UpdateRegexMatchSetCommandOutput,
  UpdateRegexMatchSetCommand,
} from "./commands/UpdateRegexMatchSetCommand";
import {
  type UpdateRegexPatternSetCommandInput,
  type UpdateRegexPatternSetCommandOutput,
  UpdateRegexPatternSetCommand,
} from "./commands/UpdateRegexPatternSetCommand";
import {
  type UpdateRuleCommandInput,
  type UpdateRuleCommandOutput,
  UpdateRuleCommand,
} from "./commands/UpdateRuleCommand";
import {
  type UpdateRuleGroupCommandInput,
  type UpdateRuleGroupCommandOutput,
  UpdateRuleGroupCommand,
} from "./commands/UpdateRuleGroupCommand";
import {
  type UpdateSizeConstraintSetCommandInput,
  type UpdateSizeConstraintSetCommandOutput,
  UpdateSizeConstraintSetCommand,
} from "./commands/UpdateSizeConstraintSetCommand";
import {
  type UpdateSqlInjectionMatchSetCommandInput,
  type UpdateSqlInjectionMatchSetCommandOutput,
  UpdateSqlInjectionMatchSetCommand,
} from "./commands/UpdateSqlInjectionMatchSetCommand";
import {
  type UpdateWebACLCommandInput,
  type UpdateWebACLCommandOutput,
  UpdateWebACLCommand,
} from "./commands/UpdateWebACLCommand";
import {
  type UpdateXssMatchSetCommandInput,
  type UpdateXssMatchSetCommandOutput,
  UpdateXssMatchSetCommand,
} from "./commands/UpdateXssMatchSetCommand";
import { WAFClient } from "./WAFClient";

const commands = {
  CreateByteMatchSetCommand,
  CreateGeoMatchSetCommand,
  CreateIPSetCommand,
  CreateRateBasedRuleCommand,
  CreateRegexMatchSetCommand,
  CreateRegexPatternSetCommand,
  CreateRuleCommand,
  CreateRuleGroupCommand,
  CreateSizeConstraintSetCommand,
  CreateSqlInjectionMatchSetCommand,
  CreateWebACLCommand,
  CreateWebACLMigrationStackCommand,
  CreateXssMatchSetCommand,
  DeleteByteMatchSetCommand,
  DeleteGeoMatchSetCommand,
  DeleteIPSetCommand,
  DeleteLoggingConfigurationCommand,
  DeletePermissionPolicyCommand,
  DeleteRateBasedRuleCommand,
  DeleteRegexMatchSetCommand,
  DeleteRegexPatternSetCommand,
  DeleteRuleCommand,
  DeleteRuleGroupCommand,
  DeleteSizeConstraintSetCommand,
  DeleteSqlInjectionMatchSetCommand,
  DeleteWebACLCommand,
  DeleteXssMatchSetCommand,
  GetByteMatchSetCommand,
  GetChangeTokenCommand,
  GetChangeTokenStatusCommand,
  GetGeoMatchSetCommand,
  GetIPSetCommand,
  GetLoggingConfigurationCommand,
  GetPermissionPolicyCommand,
  GetRateBasedRuleCommand,
  GetRateBasedRuleManagedKeysCommand,
  GetRegexMatchSetCommand,
  GetRegexPatternSetCommand,
  GetRuleCommand,
  GetRuleGroupCommand,
  GetSampledRequestsCommand,
  GetSizeConstraintSetCommand,
  GetSqlInjectionMatchSetCommand,
  GetWebACLCommand,
  GetXssMatchSetCommand,
  ListActivatedRulesInRuleGroupCommand,
  ListByteMatchSetsCommand,
  ListGeoMatchSetsCommand,
  ListIPSetsCommand,
  ListLoggingConfigurationsCommand,
  ListRateBasedRulesCommand,
  ListRegexMatchSetsCommand,
  ListRegexPatternSetsCommand,
  ListRuleGroupsCommand,
  ListRulesCommand,
  ListSizeConstraintSetsCommand,
  ListSqlInjectionMatchSetsCommand,
  ListSubscribedRuleGroupsCommand,
  ListTagsForResourceCommand,
  ListWebACLsCommand,
  ListXssMatchSetsCommand,
  PutLoggingConfigurationCommand,
  PutPermissionPolicyCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateByteMatchSetCommand,
  UpdateGeoMatchSetCommand,
  UpdateIPSetCommand,
  UpdateRateBasedRuleCommand,
  UpdateRegexMatchSetCommand,
  UpdateRegexPatternSetCommand,
  UpdateRuleCommand,
  UpdateRuleGroupCommand,
  UpdateSizeConstraintSetCommand,
  UpdateSqlInjectionMatchSetCommand,
  UpdateWebACLCommand,
  UpdateXssMatchSetCommand,
};

export interface WAF {
  /**
   * @see {@link CreateByteMatchSetCommand}
   */
  createByteMatchSet(
    args: CreateByteMatchSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateByteMatchSetCommandOutput>;
  createByteMatchSet(
    args: CreateByteMatchSetCommandInput,
    cb: (err: any, data?: CreateByteMatchSetCommandOutput) => void
  ): void;
  createByteMatchSet(
    args: CreateByteMatchSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateByteMatchSetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGeoMatchSetCommand}
   */
  createGeoMatchSet(
    args: CreateGeoMatchSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateGeoMatchSetCommandOutput>;
  createGeoMatchSet(
    args: CreateGeoMatchSetCommandInput,
    cb: (err: any, data?: CreateGeoMatchSetCommandOutput) => void
  ): void;
  createGeoMatchSet(
    args: CreateGeoMatchSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGeoMatchSetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateIPSetCommand}
   */
  createIPSet(
    args: CreateIPSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateIPSetCommandOutput>;
  createIPSet(
    args: CreateIPSetCommandInput,
    cb: (err: any, data?: CreateIPSetCommandOutput) => void
  ): void;
  createIPSet(
    args: CreateIPSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIPSetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRateBasedRuleCommand}
   */
  createRateBasedRule(
    args: CreateRateBasedRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRateBasedRuleCommandOutput>;
  createRateBasedRule(
    args: CreateRateBasedRuleCommandInput,
    cb: (err: any, data?: CreateRateBasedRuleCommandOutput) => void
  ): void;
  createRateBasedRule(
    args: CreateRateBasedRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRateBasedRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRegexMatchSetCommand}
   */
  createRegexMatchSet(
    args: CreateRegexMatchSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRegexMatchSetCommandOutput>;
  createRegexMatchSet(
    args: CreateRegexMatchSetCommandInput,
    cb: (err: any, data?: CreateRegexMatchSetCommandOutput) => void
  ): void;
  createRegexMatchSet(
    args: CreateRegexMatchSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRegexMatchSetCommandOutput) => void
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
   * @see {@link CreateRuleCommand}
   */
  createRule(
    args: CreateRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRuleCommandOutput>;
  createRule(
    args: CreateRuleCommandInput,
    cb: (err: any, data?: CreateRuleCommandOutput) => void
  ): void;
  createRule(
    args: CreateRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRuleGroupCommand}
   */
  createRuleGroup(
    args: CreateRuleGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRuleGroupCommandOutput>;
  createRuleGroup(
    args: CreateRuleGroupCommandInput,
    cb: (err: any, data?: CreateRuleGroupCommandOutput) => void
  ): void;
  createRuleGroup(
    args: CreateRuleGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRuleGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSizeConstraintSetCommand}
   */
  createSizeConstraintSet(
    args: CreateSizeConstraintSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSizeConstraintSetCommandOutput>;
  createSizeConstraintSet(
    args: CreateSizeConstraintSetCommandInput,
    cb: (err: any, data?: CreateSizeConstraintSetCommandOutput) => void
  ): void;
  createSizeConstraintSet(
    args: CreateSizeConstraintSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSizeConstraintSetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSqlInjectionMatchSetCommand}
   */
  createSqlInjectionMatchSet(
    args: CreateSqlInjectionMatchSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSqlInjectionMatchSetCommandOutput>;
  createSqlInjectionMatchSet(
    args: CreateSqlInjectionMatchSetCommandInput,
    cb: (err: any, data?: CreateSqlInjectionMatchSetCommandOutput) => void
  ): void;
  createSqlInjectionMatchSet(
    args: CreateSqlInjectionMatchSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSqlInjectionMatchSetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWebACLCommand}
   */
  createWebACL(
    args: CreateWebACLCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWebACLCommandOutput>;
  createWebACL(
    args: CreateWebACLCommandInput,
    cb: (err: any, data?: CreateWebACLCommandOutput) => void
  ): void;
  createWebACL(
    args: CreateWebACLCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWebACLCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWebACLMigrationStackCommand}
   */
  createWebACLMigrationStack(
    args: CreateWebACLMigrationStackCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWebACLMigrationStackCommandOutput>;
  createWebACLMigrationStack(
    args: CreateWebACLMigrationStackCommandInput,
    cb: (err: any, data?: CreateWebACLMigrationStackCommandOutput) => void
  ): void;
  createWebACLMigrationStack(
    args: CreateWebACLMigrationStackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWebACLMigrationStackCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateXssMatchSetCommand}
   */
  createXssMatchSet(
    args: CreateXssMatchSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateXssMatchSetCommandOutput>;
  createXssMatchSet(
    args: CreateXssMatchSetCommandInput,
    cb: (err: any, data?: CreateXssMatchSetCommandOutput) => void
  ): void;
  createXssMatchSet(
    args: CreateXssMatchSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateXssMatchSetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteByteMatchSetCommand}
   */
  deleteByteMatchSet(
    args: DeleteByteMatchSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteByteMatchSetCommandOutput>;
  deleteByteMatchSet(
    args: DeleteByteMatchSetCommandInput,
    cb: (err: any, data?: DeleteByteMatchSetCommandOutput) => void
  ): void;
  deleteByteMatchSet(
    args: DeleteByteMatchSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteByteMatchSetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGeoMatchSetCommand}
   */
  deleteGeoMatchSet(
    args: DeleteGeoMatchSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteGeoMatchSetCommandOutput>;
  deleteGeoMatchSet(
    args: DeleteGeoMatchSetCommandInput,
    cb: (err: any, data?: DeleteGeoMatchSetCommandOutput) => void
  ): void;
  deleteGeoMatchSet(
    args: DeleteGeoMatchSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGeoMatchSetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIPSetCommand}
   */
  deleteIPSet(
    args: DeleteIPSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIPSetCommandOutput>;
  deleteIPSet(
    args: DeleteIPSetCommandInput,
    cb: (err: any, data?: DeleteIPSetCommandOutput) => void
  ): void;
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
   * @see {@link DeleteRateBasedRuleCommand}
   */
  deleteRateBasedRule(
    args: DeleteRateBasedRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRateBasedRuleCommandOutput>;
  deleteRateBasedRule(
    args: DeleteRateBasedRuleCommandInput,
    cb: (err: any, data?: DeleteRateBasedRuleCommandOutput) => void
  ): void;
  deleteRateBasedRule(
    args: DeleteRateBasedRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRateBasedRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRegexMatchSetCommand}
   */
  deleteRegexMatchSet(
    args: DeleteRegexMatchSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRegexMatchSetCommandOutput>;
  deleteRegexMatchSet(
    args: DeleteRegexMatchSetCommandInput,
    cb: (err: any, data?: DeleteRegexMatchSetCommandOutput) => void
  ): void;
  deleteRegexMatchSet(
    args: DeleteRegexMatchSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRegexMatchSetCommandOutput) => void
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
   * @see {@link DeleteRuleCommand}
   */
  deleteRule(
    args: DeleteRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRuleCommandOutput>;
  deleteRule(
    args: DeleteRuleCommandInput,
    cb: (err: any, data?: DeleteRuleCommandOutput) => void
  ): void;
  deleteRule(
    args: DeleteRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRuleGroupCommand}
   */
  deleteRuleGroup(
    args: DeleteRuleGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRuleGroupCommandOutput>;
  deleteRuleGroup(
    args: DeleteRuleGroupCommandInput,
    cb: (err: any, data?: DeleteRuleGroupCommandOutput) => void
  ): void;
  deleteRuleGroup(
    args: DeleteRuleGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRuleGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSizeConstraintSetCommand}
   */
  deleteSizeConstraintSet(
    args: DeleteSizeConstraintSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSizeConstraintSetCommandOutput>;
  deleteSizeConstraintSet(
    args: DeleteSizeConstraintSetCommandInput,
    cb: (err: any, data?: DeleteSizeConstraintSetCommandOutput) => void
  ): void;
  deleteSizeConstraintSet(
    args: DeleteSizeConstraintSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSizeConstraintSetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSqlInjectionMatchSetCommand}
   */
  deleteSqlInjectionMatchSet(
    args: DeleteSqlInjectionMatchSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSqlInjectionMatchSetCommandOutput>;
  deleteSqlInjectionMatchSet(
    args: DeleteSqlInjectionMatchSetCommandInput,
    cb: (err: any, data?: DeleteSqlInjectionMatchSetCommandOutput) => void
  ): void;
  deleteSqlInjectionMatchSet(
    args: DeleteSqlInjectionMatchSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSqlInjectionMatchSetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWebACLCommand}
   */
  deleteWebACL(
    args: DeleteWebACLCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWebACLCommandOutput>;
  deleteWebACL(
    args: DeleteWebACLCommandInput,
    cb: (err: any, data?: DeleteWebACLCommandOutput) => void
  ): void;
  deleteWebACL(
    args: DeleteWebACLCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWebACLCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteXssMatchSetCommand}
   */
  deleteXssMatchSet(
    args: DeleteXssMatchSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteXssMatchSetCommandOutput>;
  deleteXssMatchSet(
    args: DeleteXssMatchSetCommandInput,
    cb: (err: any, data?: DeleteXssMatchSetCommandOutput) => void
  ): void;
  deleteXssMatchSet(
    args: DeleteXssMatchSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteXssMatchSetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetByteMatchSetCommand}
   */
  getByteMatchSet(
    args: GetByteMatchSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetByteMatchSetCommandOutput>;
  getByteMatchSet(
    args: GetByteMatchSetCommandInput,
    cb: (err: any, data?: GetByteMatchSetCommandOutput) => void
  ): void;
  getByteMatchSet(
    args: GetByteMatchSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetByteMatchSetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetChangeTokenCommand}
   */
  getChangeToken(): Promise<GetChangeTokenCommandOutput>;
  getChangeToken(
    args: GetChangeTokenCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetChangeTokenCommandOutput>;
  getChangeToken(
    args: GetChangeTokenCommandInput,
    cb: (err: any, data?: GetChangeTokenCommandOutput) => void
  ): void;
  getChangeToken(
    args: GetChangeTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetChangeTokenCommandOutput) => void
  ): void;

  /**
   * @see {@link GetChangeTokenStatusCommand}
   */
  getChangeTokenStatus(
    args: GetChangeTokenStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetChangeTokenStatusCommandOutput>;
  getChangeTokenStatus(
    args: GetChangeTokenStatusCommandInput,
    cb: (err: any, data?: GetChangeTokenStatusCommandOutput) => void
  ): void;
  getChangeTokenStatus(
    args: GetChangeTokenStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetChangeTokenStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGeoMatchSetCommand}
   */
  getGeoMatchSet(
    args: GetGeoMatchSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGeoMatchSetCommandOutput>;
  getGeoMatchSet(
    args: GetGeoMatchSetCommandInput,
    cb: (err: any, data?: GetGeoMatchSetCommandOutput) => void
  ): void;
  getGeoMatchSet(
    args: GetGeoMatchSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGeoMatchSetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIPSetCommand}
   */
  getIPSet(
    args: GetIPSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIPSetCommandOutput>;
  getIPSet(
    args: GetIPSetCommandInput,
    cb: (err: any, data?: GetIPSetCommandOutput) => void
  ): void;
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
   * @see {@link GetRateBasedRuleCommand}
   */
  getRateBasedRule(
    args: GetRateBasedRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRateBasedRuleCommandOutput>;
  getRateBasedRule(
    args: GetRateBasedRuleCommandInput,
    cb: (err: any, data?: GetRateBasedRuleCommandOutput) => void
  ): void;
  getRateBasedRule(
    args: GetRateBasedRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRateBasedRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRateBasedRuleManagedKeysCommand}
   */
  getRateBasedRuleManagedKeys(
    args: GetRateBasedRuleManagedKeysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRateBasedRuleManagedKeysCommandOutput>;
  getRateBasedRuleManagedKeys(
    args: GetRateBasedRuleManagedKeysCommandInput,
    cb: (err: any, data?: GetRateBasedRuleManagedKeysCommandOutput) => void
  ): void;
  getRateBasedRuleManagedKeys(
    args: GetRateBasedRuleManagedKeysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRateBasedRuleManagedKeysCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRegexMatchSetCommand}
   */
  getRegexMatchSet(
    args: GetRegexMatchSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRegexMatchSetCommandOutput>;
  getRegexMatchSet(
    args: GetRegexMatchSetCommandInput,
    cb: (err: any, data?: GetRegexMatchSetCommandOutput) => void
  ): void;
  getRegexMatchSet(
    args: GetRegexMatchSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRegexMatchSetCommandOutput) => void
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
   * @see {@link GetRuleCommand}
   */
  getRule(
    args: GetRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRuleCommandOutput>;
  getRule(
    args: GetRuleCommandInput,
    cb: (err: any, data?: GetRuleCommandOutput) => void
  ): void;
  getRule(
    args: GetRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRuleGroupCommand}
   */
  getRuleGroup(
    args: GetRuleGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRuleGroupCommandOutput>;
  getRuleGroup(
    args: GetRuleGroupCommandInput,
    cb: (err: any, data?: GetRuleGroupCommandOutput) => void
  ): void;
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
   * @see {@link GetSizeConstraintSetCommand}
   */
  getSizeConstraintSet(
    args: GetSizeConstraintSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSizeConstraintSetCommandOutput>;
  getSizeConstraintSet(
    args: GetSizeConstraintSetCommandInput,
    cb: (err: any, data?: GetSizeConstraintSetCommandOutput) => void
  ): void;
  getSizeConstraintSet(
    args: GetSizeConstraintSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSizeConstraintSetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSqlInjectionMatchSetCommand}
   */
  getSqlInjectionMatchSet(
    args: GetSqlInjectionMatchSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSqlInjectionMatchSetCommandOutput>;
  getSqlInjectionMatchSet(
    args: GetSqlInjectionMatchSetCommandInput,
    cb: (err: any, data?: GetSqlInjectionMatchSetCommandOutput) => void
  ): void;
  getSqlInjectionMatchSet(
    args: GetSqlInjectionMatchSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSqlInjectionMatchSetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWebACLCommand}
   */
  getWebACL(
    args: GetWebACLCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWebACLCommandOutput>;
  getWebACL(
    args: GetWebACLCommandInput,
    cb: (err: any, data?: GetWebACLCommandOutput) => void
  ): void;
  getWebACL(
    args: GetWebACLCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWebACLCommandOutput) => void
  ): void;

  /**
   * @see {@link GetXssMatchSetCommand}
   */
  getXssMatchSet(
    args: GetXssMatchSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetXssMatchSetCommandOutput>;
  getXssMatchSet(
    args: GetXssMatchSetCommandInput,
    cb: (err: any, data?: GetXssMatchSetCommandOutput) => void
  ): void;
  getXssMatchSet(
    args: GetXssMatchSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetXssMatchSetCommandOutput) => void
  ): void;

  /**
   * @see {@link ListActivatedRulesInRuleGroupCommand}
   */
  listActivatedRulesInRuleGroup(): Promise<ListActivatedRulesInRuleGroupCommandOutput>;
  listActivatedRulesInRuleGroup(
    args: ListActivatedRulesInRuleGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListActivatedRulesInRuleGroupCommandOutput>;
  listActivatedRulesInRuleGroup(
    args: ListActivatedRulesInRuleGroupCommandInput,
    cb: (err: any, data?: ListActivatedRulesInRuleGroupCommandOutput) => void
  ): void;
  listActivatedRulesInRuleGroup(
    args: ListActivatedRulesInRuleGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListActivatedRulesInRuleGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ListByteMatchSetsCommand}
   */
  listByteMatchSets(): Promise<ListByteMatchSetsCommandOutput>;
  listByteMatchSets(
    args: ListByteMatchSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListByteMatchSetsCommandOutput>;
  listByteMatchSets(
    args: ListByteMatchSetsCommandInput,
    cb: (err: any, data?: ListByteMatchSetsCommandOutput) => void
  ): void;
  listByteMatchSets(
    args: ListByteMatchSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListByteMatchSetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGeoMatchSetsCommand}
   */
  listGeoMatchSets(): Promise<ListGeoMatchSetsCommandOutput>;
  listGeoMatchSets(
    args: ListGeoMatchSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGeoMatchSetsCommandOutput>;
  listGeoMatchSets(
    args: ListGeoMatchSetsCommandInput,
    cb: (err: any, data?: ListGeoMatchSetsCommandOutput) => void
  ): void;
  listGeoMatchSets(
    args: ListGeoMatchSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGeoMatchSetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIPSetsCommand}
   */
  listIPSets(): Promise<ListIPSetsCommandOutput>;
  listIPSets(
    args: ListIPSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIPSetsCommandOutput>;
  listIPSets(
    args: ListIPSetsCommandInput,
    cb: (err: any, data?: ListIPSetsCommandOutput) => void
  ): void;
  listIPSets(
    args: ListIPSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIPSetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLoggingConfigurationsCommand}
   */
  listLoggingConfigurations(): Promise<ListLoggingConfigurationsCommandOutput>;
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
   * @see {@link ListRateBasedRulesCommand}
   */
  listRateBasedRules(): Promise<ListRateBasedRulesCommandOutput>;
  listRateBasedRules(
    args: ListRateBasedRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRateBasedRulesCommandOutput>;
  listRateBasedRules(
    args: ListRateBasedRulesCommandInput,
    cb: (err: any, data?: ListRateBasedRulesCommandOutput) => void
  ): void;
  listRateBasedRules(
    args: ListRateBasedRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRateBasedRulesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRegexMatchSetsCommand}
   */
  listRegexMatchSets(): Promise<ListRegexMatchSetsCommandOutput>;
  listRegexMatchSets(
    args: ListRegexMatchSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRegexMatchSetsCommandOutput>;
  listRegexMatchSets(
    args: ListRegexMatchSetsCommandInput,
    cb: (err: any, data?: ListRegexMatchSetsCommandOutput) => void
  ): void;
  listRegexMatchSets(
    args: ListRegexMatchSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRegexMatchSetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRegexPatternSetsCommand}
   */
  listRegexPatternSets(): Promise<ListRegexPatternSetsCommandOutput>;
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
   * @see {@link ListRuleGroupsCommand}
   */
  listRuleGroups(): Promise<ListRuleGroupsCommandOutput>;
  listRuleGroups(
    args: ListRuleGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRuleGroupsCommandOutput>;
  listRuleGroups(
    args: ListRuleGroupsCommandInput,
    cb: (err: any, data?: ListRuleGroupsCommandOutput) => void
  ): void;
  listRuleGroups(
    args: ListRuleGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRuleGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRulesCommand}
   */
  listRules(): Promise<ListRulesCommandOutput>;
  listRules(
    args: ListRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRulesCommandOutput>;
  listRules(
    args: ListRulesCommandInput,
    cb: (err: any, data?: ListRulesCommandOutput) => void
  ): void;
  listRules(
    args: ListRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRulesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSizeConstraintSetsCommand}
   */
  listSizeConstraintSets(): Promise<ListSizeConstraintSetsCommandOutput>;
  listSizeConstraintSets(
    args: ListSizeConstraintSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSizeConstraintSetsCommandOutput>;
  listSizeConstraintSets(
    args: ListSizeConstraintSetsCommandInput,
    cb: (err: any, data?: ListSizeConstraintSetsCommandOutput) => void
  ): void;
  listSizeConstraintSets(
    args: ListSizeConstraintSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSizeConstraintSetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSqlInjectionMatchSetsCommand}
   */
  listSqlInjectionMatchSets(): Promise<ListSqlInjectionMatchSetsCommandOutput>;
  listSqlInjectionMatchSets(
    args: ListSqlInjectionMatchSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSqlInjectionMatchSetsCommandOutput>;
  listSqlInjectionMatchSets(
    args: ListSqlInjectionMatchSetsCommandInput,
    cb: (err: any, data?: ListSqlInjectionMatchSetsCommandOutput) => void
  ): void;
  listSqlInjectionMatchSets(
    args: ListSqlInjectionMatchSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSqlInjectionMatchSetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSubscribedRuleGroupsCommand}
   */
  listSubscribedRuleGroups(): Promise<ListSubscribedRuleGroupsCommandOutput>;
  listSubscribedRuleGroups(
    args: ListSubscribedRuleGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSubscribedRuleGroupsCommandOutput>;
  listSubscribedRuleGroups(
    args: ListSubscribedRuleGroupsCommandInput,
    cb: (err: any, data?: ListSubscribedRuleGroupsCommandOutput) => void
  ): void;
  listSubscribedRuleGroups(
    args: ListSubscribedRuleGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSubscribedRuleGroupsCommandOutput) => void
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
  listWebACLs(): Promise<ListWebACLsCommandOutput>;
  listWebACLs(
    args: ListWebACLsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWebACLsCommandOutput>;
  listWebACLs(
    args: ListWebACLsCommandInput,
    cb: (err: any, data?: ListWebACLsCommandOutput) => void
  ): void;
  listWebACLs(
    args: ListWebACLsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWebACLsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListXssMatchSetsCommand}
   */
  listXssMatchSets(): Promise<ListXssMatchSetsCommandOutput>;
  listXssMatchSets(
    args: ListXssMatchSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListXssMatchSetsCommandOutput>;
  listXssMatchSets(
    args: ListXssMatchSetsCommandInput,
    cb: (err: any, data?: ListXssMatchSetsCommandOutput) => void
  ): void;
  listXssMatchSets(
    args: ListXssMatchSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListXssMatchSetsCommandOutput) => void
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
   * @see {@link UpdateByteMatchSetCommand}
   */
  updateByteMatchSet(
    args: UpdateByteMatchSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateByteMatchSetCommandOutput>;
  updateByteMatchSet(
    args: UpdateByteMatchSetCommandInput,
    cb: (err: any, data?: UpdateByteMatchSetCommandOutput) => void
  ): void;
  updateByteMatchSet(
    args: UpdateByteMatchSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateByteMatchSetCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGeoMatchSetCommand}
   */
  updateGeoMatchSet(
    args: UpdateGeoMatchSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGeoMatchSetCommandOutput>;
  updateGeoMatchSet(
    args: UpdateGeoMatchSetCommandInput,
    cb: (err: any, data?: UpdateGeoMatchSetCommandOutput) => void
  ): void;
  updateGeoMatchSet(
    args: UpdateGeoMatchSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGeoMatchSetCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateIPSetCommand}
   */
  updateIPSet(
    args: UpdateIPSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateIPSetCommandOutput>;
  updateIPSet(
    args: UpdateIPSetCommandInput,
    cb: (err: any, data?: UpdateIPSetCommandOutput) => void
  ): void;
  updateIPSet(
    args: UpdateIPSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateIPSetCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRateBasedRuleCommand}
   */
  updateRateBasedRule(
    args: UpdateRateBasedRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRateBasedRuleCommandOutput>;
  updateRateBasedRule(
    args: UpdateRateBasedRuleCommandInput,
    cb: (err: any, data?: UpdateRateBasedRuleCommandOutput) => void
  ): void;
  updateRateBasedRule(
    args: UpdateRateBasedRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRateBasedRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRegexMatchSetCommand}
   */
  updateRegexMatchSet(
    args: UpdateRegexMatchSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRegexMatchSetCommandOutput>;
  updateRegexMatchSet(
    args: UpdateRegexMatchSetCommandInput,
    cb: (err: any, data?: UpdateRegexMatchSetCommandOutput) => void
  ): void;
  updateRegexMatchSet(
    args: UpdateRegexMatchSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRegexMatchSetCommandOutput) => void
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
   * @see {@link UpdateRuleCommand}
   */
  updateRule(
    args: UpdateRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRuleCommandOutput>;
  updateRule(
    args: UpdateRuleCommandInput,
    cb: (err: any, data?: UpdateRuleCommandOutput) => void
  ): void;
  updateRule(
    args: UpdateRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRuleGroupCommand}
   */
  updateRuleGroup(
    args: UpdateRuleGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRuleGroupCommandOutput>;
  updateRuleGroup(
    args: UpdateRuleGroupCommandInput,
    cb: (err: any, data?: UpdateRuleGroupCommandOutput) => void
  ): void;
  updateRuleGroup(
    args: UpdateRuleGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRuleGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSizeConstraintSetCommand}
   */
  updateSizeConstraintSet(
    args: UpdateSizeConstraintSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSizeConstraintSetCommandOutput>;
  updateSizeConstraintSet(
    args: UpdateSizeConstraintSetCommandInput,
    cb: (err: any, data?: UpdateSizeConstraintSetCommandOutput) => void
  ): void;
  updateSizeConstraintSet(
    args: UpdateSizeConstraintSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSizeConstraintSetCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSqlInjectionMatchSetCommand}
   */
  updateSqlInjectionMatchSet(
    args: UpdateSqlInjectionMatchSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSqlInjectionMatchSetCommandOutput>;
  updateSqlInjectionMatchSet(
    args: UpdateSqlInjectionMatchSetCommandInput,
    cb: (err: any, data?: UpdateSqlInjectionMatchSetCommandOutput) => void
  ): void;
  updateSqlInjectionMatchSet(
    args: UpdateSqlInjectionMatchSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSqlInjectionMatchSetCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWebACLCommand}
   */
  updateWebACL(
    args: UpdateWebACLCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWebACLCommandOutput>;
  updateWebACL(
    args: UpdateWebACLCommandInput,
    cb: (err: any, data?: UpdateWebACLCommandOutput) => void
  ): void;
  updateWebACL(
    args: UpdateWebACLCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWebACLCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateXssMatchSetCommand}
   */
  updateXssMatchSet(
    args: UpdateXssMatchSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateXssMatchSetCommandOutput>;
  updateXssMatchSet(
    args: UpdateXssMatchSetCommandInput,
    cb: (err: any, data?: UpdateXssMatchSetCommandOutput) => void
  ): void;
  updateXssMatchSet(
    args: UpdateXssMatchSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateXssMatchSetCommandOutput) => void
  ): void;
}

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 * 	        <p>This is the <i>AWS WAF Classic API Reference</i> for using AWS WAF Classic with Amazon CloudFront. The AWS WAF Classic actions and data types listed in the reference are available for protecting Amazon CloudFront distributions. You can use these actions and data types via the endpoint <i>waf.amazonaws.com</i>. This guide is for developers who need detailed information about the AWS WAF Classic API actions,
 * 	      data types, and errors. For detailed information about AWS WAF Classic features and an overview of how to use the AWS WAF Classic API, see the
 * 	      <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p>
 * @public
 */
export class WAF extends WAFClient implements WAF {}
createAggregatedClient(commands, WAF);
