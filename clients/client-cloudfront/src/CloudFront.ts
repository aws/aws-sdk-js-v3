// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { CloudFrontClient } from "./CloudFrontClient";
import {
  AssociateAliasCommand,
  AssociateAliasCommandInput,
  AssociateAliasCommandOutput,
} from "./commands/AssociateAliasCommand";
import {
  CopyDistributionCommand,
  CopyDistributionCommandInput,
  CopyDistributionCommandOutput,
} from "./commands/CopyDistributionCommand";
import {
  CreateCachePolicyCommand,
  CreateCachePolicyCommandInput,
  CreateCachePolicyCommandOutput,
} from "./commands/CreateCachePolicyCommand";
import {
  CreateCloudFrontOriginAccessIdentityCommand,
  CreateCloudFrontOriginAccessIdentityCommandInput,
  CreateCloudFrontOriginAccessIdentityCommandOutput,
} from "./commands/CreateCloudFrontOriginAccessIdentityCommand";
import {
  CreateContinuousDeploymentPolicyCommand,
  CreateContinuousDeploymentPolicyCommandInput,
  CreateContinuousDeploymentPolicyCommandOutput,
} from "./commands/CreateContinuousDeploymentPolicyCommand";
import {
  CreateDistributionCommand,
  CreateDistributionCommandInput,
  CreateDistributionCommandOutput,
} from "./commands/CreateDistributionCommand";
import {
  CreateDistributionWithTagsCommand,
  CreateDistributionWithTagsCommandInput,
  CreateDistributionWithTagsCommandOutput,
} from "./commands/CreateDistributionWithTagsCommand";
import {
  CreateFieldLevelEncryptionConfigCommand,
  CreateFieldLevelEncryptionConfigCommandInput,
  CreateFieldLevelEncryptionConfigCommandOutput,
} from "./commands/CreateFieldLevelEncryptionConfigCommand";
import {
  CreateFieldLevelEncryptionProfileCommand,
  CreateFieldLevelEncryptionProfileCommandInput,
  CreateFieldLevelEncryptionProfileCommandOutput,
} from "./commands/CreateFieldLevelEncryptionProfileCommand";
import {
  CreateFunctionCommand,
  CreateFunctionCommandInput,
  CreateFunctionCommandOutput,
} from "./commands/CreateFunctionCommand";
import {
  CreateInvalidationCommand,
  CreateInvalidationCommandInput,
  CreateInvalidationCommandOutput,
} from "./commands/CreateInvalidationCommand";
import {
  CreateKeyGroupCommand,
  CreateKeyGroupCommandInput,
  CreateKeyGroupCommandOutput,
} from "./commands/CreateKeyGroupCommand";
import {
  CreateMonitoringSubscriptionCommand,
  CreateMonitoringSubscriptionCommandInput,
  CreateMonitoringSubscriptionCommandOutput,
} from "./commands/CreateMonitoringSubscriptionCommand";
import {
  CreateOriginAccessControlCommand,
  CreateOriginAccessControlCommandInput,
  CreateOriginAccessControlCommandOutput,
} from "./commands/CreateOriginAccessControlCommand";
import {
  CreateOriginRequestPolicyCommand,
  CreateOriginRequestPolicyCommandInput,
  CreateOriginRequestPolicyCommandOutput,
} from "./commands/CreateOriginRequestPolicyCommand";
import {
  CreatePublicKeyCommand,
  CreatePublicKeyCommandInput,
  CreatePublicKeyCommandOutput,
} from "./commands/CreatePublicKeyCommand";
import {
  CreateRealtimeLogConfigCommand,
  CreateRealtimeLogConfigCommandInput,
  CreateRealtimeLogConfigCommandOutput,
} from "./commands/CreateRealtimeLogConfigCommand";
import {
  CreateResponseHeadersPolicyCommand,
  CreateResponseHeadersPolicyCommandInput,
  CreateResponseHeadersPolicyCommandOutput,
} from "./commands/CreateResponseHeadersPolicyCommand";
import {
  CreateStreamingDistributionCommand,
  CreateStreamingDistributionCommandInput,
  CreateStreamingDistributionCommandOutput,
} from "./commands/CreateStreamingDistributionCommand";
import {
  CreateStreamingDistributionWithTagsCommand,
  CreateStreamingDistributionWithTagsCommandInput,
  CreateStreamingDistributionWithTagsCommandOutput,
} from "./commands/CreateStreamingDistributionWithTagsCommand";
import {
  DeleteCachePolicyCommand,
  DeleteCachePolicyCommandInput,
  DeleteCachePolicyCommandOutput,
} from "./commands/DeleteCachePolicyCommand";
import {
  DeleteCloudFrontOriginAccessIdentityCommand,
  DeleteCloudFrontOriginAccessIdentityCommandInput,
  DeleteCloudFrontOriginAccessIdentityCommandOutput,
} from "./commands/DeleteCloudFrontOriginAccessIdentityCommand";
import {
  DeleteContinuousDeploymentPolicyCommand,
  DeleteContinuousDeploymentPolicyCommandInput,
  DeleteContinuousDeploymentPolicyCommandOutput,
} from "./commands/DeleteContinuousDeploymentPolicyCommand";
import {
  DeleteDistributionCommand,
  DeleteDistributionCommandInput,
  DeleteDistributionCommandOutput,
} from "./commands/DeleteDistributionCommand";
import {
  DeleteFieldLevelEncryptionConfigCommand,
  DeleteFieldLevelEncryptionConfigCommandInput,
  DeleteFieldLevelEncryptionConfigCommandOutput,
} from "./commands/DeleteFieldLevelEncryptionConfigCommand";
import {
  DeleteFieldLevelEncryptionProfileCommand,
  DeleteFieldLevelEncryptionProfileCommandInput,
  DeleteFieldLevelEncryptionProfileCommandOutput,
} from "./commands/DeleteFieldLevelEncryptionProfileCommand";
import {
  DeleteFunctionCommand,
  DeleteFunctionCommandInput,
  DeleteFunctionCommandOutput,
} from "./commands/DeleteFunctionCommand";
import {
  DeleteKeyGroupCommand,
  DeleteKeyGroupCommandInput,
  DeleteKeyGroupCommandOutput,
} from "./commands/DeleteKeyGroupCommand";
import {
  DeleteMonitoringSubscriptionCommand,
  DeleteMonitoringSubscriptionCommandInput,
  DeleteMonitoringSubscriptionCommandOutput,
} from "./commands/DeleteMonitoringSubscriptionCommand";
import {
  DeleteOriginAccessControlCommand,
  DeleteOriginAccessControlCommandInput,
  DeleteOriginAccessControlCommandOutput,
} from "./commands/DeleteOriginAccessControlCommand";
import {
  DeleteOriginRequestPolicyCommand,
  DeleteOriginRequestPolicyCommandInput,
  DeleteOriginRequestPolicyCommandOutput,
} from "./commands/DeleteOriginRequestPolicyCommand";
import {
  DeletePublicKeyCommand,
  DeletePublicKeyCommandInput,
  DeletePublicKeyCommandOutput,
} from "./commands/DeletePublicKeyCommand";
import {
  DeleteRealtimeLogConfigCommand,
  DeleteRealtimeLogConfigCommandInput,
  DeleteRealtimeLogConfigCommandOutput,
} from "./commands/DeleteRealtimeLogConfigCommand";
import {
  DeleteResponseHeadersPolicyCommand,
  DeleteResponseHeadersPolicyCommandInput,
  DeleteResponseHeadersPolicyCommandOutput,
} from "./commands/DeleteResponseHeadersPolicyCommand";
import {
  DeleteStreamingDistributionCommand,
  DeleteStreamingDistributionCommandInput,
  DeleteStreamingDistributionCommandOutput,
} from "./commands/DeleteStreamingDistributionCommand";
import {
  DescribeFunctionCommand,
  DescribeFunctionCommandInput,
  DescribeFunctionCommandOutput,
} from "./commands/DescribeFunctionCommand";
import {
  GetCachePolicyCommand,
  GetCachePolicyCommandInput,
  GetCachePolicyCommandOutput,
} from "./commands/GetCachePolicyCommand";
import {
  GetCachePolicyConfigCommand,
  GetCachePolicyConfigCommandInput,
  GetCachePolicyConfigCommandOutput,
} from "./commands/GetCachePolicyConfigCommand";
import {
  GetCloudFrontOriginAccessIdentityCommand,
  GetCloudFrontOriginAccessIdentityCommandInput,
  GetCloudFrontOriginAccessIdentityCommandOutput,
} from "./commands/GetCloudFrontOriginAccessIdentityCommand";
import {
  GetCloudFrontOriginAccessIdentityConfigCommand,
  GetCloudFrontOriginAccessIdentityConfigCommandInput,
  GetCloudFrontOriginAccessIdentityConfigCommandOutput,
} from "./commands/GetCloudFrontOriginAccessIdentityConfigCommand";
import {
  GetContinuousDeploymentPolicyCommand,
  GetContinuousDeploymentPolicyCommandInput,
  GetContinuousDeploymentPolicyCommandOutput,
} from "./commands/GetContinuousDeploymentPolicyCommand";
import {
  GetContinuousDeploymentPolicyConfigCommand,
  GetContinuousDeploymentPolicyConfigCommandInput,
  GetContinuousDeploymentPolicyConfigCommandOutput,
} from "./commands/GetContinuousDeploymentPolicyConfigCommand";
import {
  GetDistributionCommand,
  GetDistributionCommandInput,
  GetDistributionCommandOutput,
} from "./commands/GetDistributionCommand";
import {
  GetDistributionConfigCommand,
  GetDistributionConfigCommandInput,
  GetDistributionConfigCommandOutput,
} from "./commands/GetDistributionConfigCommand";
import {
  GetFieldLevelEncryptionCommand,
  GetFieldLevelEncryptionCommandInput,
  GetFieldLevelEncryptionCommandOutput,
} from "./commands/GetFieldLevelEncryptionCommand";
import {
  GetFieldLevelEncryptionConfigCommand,
  GetFieldLevelEncryptionConfigCommandInput,
  GetFieldLevelEncryptionConfigCommandOutput,
} from "./commands/GetFieldLevelEncryptionConfigCommand";
import {
  GetFieldLevelEncryptionProfileCommand,
  GetFieldLevelEncryptionProfileCommandInput,
  GetFieldLevelEncryptionProfileCommandOutput,
} from "./commands/GetFieldLevelEncryptionProfileCommand";
import {
  GetFieldLevelEncryptionProfileConfigCommand,
  GetFieldLevelEncryptionProfileConfigCommandInput,
  GetFieldLevelEncryptionProfileConfigCommandOutput,
} from "./commands/GetFieldLevelEncryptionProfileConfigCommand";
import { GetFunctionCommand, GetFunctionCommandInput, GetFunctionCommandOutput } from "./commands/GetFunctionCommand";
import {
  GetInvalidationCommand,
  GetInvalidationCommandInput,
  GetInvalidationCommandOutput,
} from "./commands/GetInvalidationCommand";
import { GetKeyGroupCommand, GetKeyGroupCommandInput, GetKeyGroupCommandOutput } from "./commands/GetKeyGroupCommand";
import {
  GetKeyGroupConfigCommand,
  GetKeyGroupConfigCommandInput,
  GetKeyGroupConfigCommandOutput,
} from "./commands/GetKeyGroupConfigCommand";
import {
  GetMonitoringSubscriptionCommand,
  GetMonitoringSubscriptionCommandInput,
  GetMonitoringSubscriptionCommandOutput,
} from "./commands/GetMonitoringSubscriptionCommand";
import {
  GetOriginAccessControlCommand,
  GetOriginAccessControlCommandInput,
  GetOriginAccessControlCommandOutput,
} from "./commands/GetOriginAccessControlCommand";
import {
  GetOriginAccessControlConfigCommand,
  GetOriginAccessControlConfigCommandInput,
  GetOriginAccessControlConfigCommandOutput,
} from "./commands/GetOriginAccessControlConfigCommand";
import {
  GetOriginRequestPolicyCommand,
  GetOriginRequestPolicyCommandInput,
  GetOriginRequestPolicyCommandOutput,
} from "./commands/GetOriginRequestPolicyCommand";
import {
  GetOriginRequestPolicyConfigCommand,
  GetOriginRequestPolicyConfigCommandInput,
  GetOriginRequestPolicyConfigCommandOutput,
} from "./commands/GetOriginRequestPolicyConfigCommand";
import {
  GetPublicKeyCommand,
  GetPublicKeyCommandInput,
  GetPublicKeyCommandOutput,
} from "./commands/GetPublicKeyCommand";
import {
  GetPublicKeyConfigCommand,
  GetPublicKeyConfigCommandInput,
  GetPublicKeyConfigCommandOutput,
} from "./commands/GetPublicKeyConfigCommand";
import {
  GetRealtimeLogConfigCommand,
  GetRealtimeLogConfigCommandInput,
  GetRealtimeLogConfigCommandOutput,
} from "./commands/GetRealtimeLogConfigCommand";
import {
  GetResponseHeadersPolicyCommand,
  GetResponseHeadersPolicyCommandInput,
  GetResponseHeadersPolicyCommandOutput,
} from "./commands/GetResponseHeadersPolicyCommand";
import {
  GetResponseHeadersPolicyConfigCommand,
  GetResponseHeadersPolicyConfigCommandInput,
  GetResponseHeadersPolicyConfigCommandOutput,
} from "./commands/GetResponseHeadersPolicyConfigCommand";
import {
  GetStreamingDistributionCommand,
  GetStreamingDistributionCommandInput,
  GetStreamingDistributionCommandOutput,
} from "./commands/GetStreamingDistributionCommand";
import {
  GetStreamingDistributionConfigCommand,
  GetStreamingDistributionConfigCommandInput,
  GetStreamingDistributionConfigCommandOutput,
} from "./commands/GetStreamingDistributionConfigCommand";
import {
  ListCachePoliciesCommand,
  ListCachePoliciesCommandInput,
  ListCachePoliciesCommandOutput,
} from "./commands/ListCachePoliciesCommand";
import {
  ListCloudFrontOriginAccessIdentitiesCommand,
  ListCloudFrontOriginAccessIdentitiesCommandInput,
  ListCloudFrontOriginAccessIdentitiesCommandOutput,
} from "./commands/ListCloudFrontOriginAccessIdentitiesCommand";
import {
  ListConflictingAliasesCommand,
  ListConflictingAliasesCommandInput,
  ListConflictingAliasesCommandOutput,
} from "./commands/ListConflictingAliasesCommand";
import {
  ListContinuousDeploymentPoliciesCommand,
  ListContinuousDeploymentPoliciesCommandInput,
  ListContinuousDeploymentPoliciesCommandOutput,
} from "./commands/ListContinuousDeploymentPoliciesCommand";
import {
  ListDistributionsByCachePolicyIdCommand,
  ListDistributionsByCachePolicyIdCommandInput,
  ListDistributionsByCachePolicyIdCommandOutput,
} from "./commands/ListDistributionsByCachePolicyIdCommand";
import {
  ListDistributionsByKeyGroupCommand,
  ListDistributionsByKeyGroupCommandInput,
  ListDistributionsByKeyGroupCommandOutput,
} from "./commands/ListDistributionsByKeyGroupCommand";
import {
  ListDistributionsByOriginRequestPolicyIdCommand,
  ListDistributionsByOriginRequestPolicyIdCommandInput,
  ListDistributionsByOriginRequestPolicyIdCommandOutput,
} from "./commands/ListDistributionsByOriginRequestPolicyIdCommand";
import {
  ListDistributionsByRealtimeLogConfigCommand,
  ListDistributionsByRealtimeLogConfigCommandInput,
  ListDistributionsByRealtimeLogConfigCommandOutput,
} from "./commands/ListDistributionsByRealtimeLogConfigCommand";
import {
  ListDistributionsByResponseHeadersPolicyIdCommand,
  ListDistributionsByResponseHeadersPolicyIdCommandInput,
  ListDistributionsByResponseHeadersPolicyIdCommandOutput,
} from "./commands/ListDistributionsByResponseHeadersPolicyIdCommand";
import {
  ListDistributionsByWebACLIdCommand,
  ListDistributionsByWebACLIdCommandInput,
  ListDistributionsByWebACLIdCommandOutput,
} from "./commands/ListDistributionsByWebACLIdCommand";
import {
  ListDistributionsCommand,
  ListDistributionsCommandInput,
  ListDistributionsCommandOutput,
} from "./commands/ListDistributionsCommand";
import {
  ListFieldLevelEncryptionConfigsCommand,
  ListFieldLevelEncryptionConfigsCommandInput,
  ListFieldLevelEncryptionConfigsCommandOutput,
} from "./commands/ListFieldLevelEncryptionConfigsCommand";
import {
  ListFieldLevelEncryptionProfilesCommand,
  ListFieldLevelEncryptionProfilesCommandInput,
  ListFieldLevelEncryptionProfilesCommandOutput,
} from "./commands/ListFieldLevelEncryptionProfilesCommand";
import {
  ListFunctionsCommand,
  ListFunctionsCommandInput,
  ListFunctionsCommandOutput,
} from "./commands/ListFunctionsCommand";
import {
  ListInvalidationsCommand,
  ListInvalidationsCommandInput,
  ListInvalidationsCommandOutput,
} from "./commands/ListInvalidationsCommand";
import {
  ListKeyGroupsCommand,
  ListKeyGroupsCommandInput,
  ListKeyGroupsCommandOutput,
} from "./commands/ListKeyGroupsCommand";
import {
  ListOriginAccessControlsCommand,
  ListOriginAccessControlsCommandInput,
  ListOriginAccessControlsCommandOutput,
} from "./commands/ListOriginAccessControlsCommand";
import {
  ListOriginRequestPoliciesCommand,
  ListOriginRequestPoliciesCommandInput,
  ListOriginRequestPoliciesCommandOutput,
} from "./commands/ListOriginRequestPoliciesCommand";
import {
  ListPublicKeysCommand,
  ListPublicKeysCommandInput,
  ListPublicKeysCommandOutput,
} from "./commands/ListPublicKeysCommand";
import {
  ListRealtimeLogConfigsCommand,
  ListRealtimeLogConfigsCommandInput,
  ListRealtimeLogConfigsCommandOutput,
} from "./commands/ListRealtimeLogConfigsCommand";
import {
  ListResponseHeadersPoliciesCommand,
  ListResponseHeadersPoliciesCommandInput,
  ListResponseHeadersPoliciesCommandOutput,
} from "./commands/ListResponseHeadersPoliciesCommand";
import {
  ListStreamingDistributionsCommand,
  ListStreamingDistributionsCommandInput,
  ListStreamingDistributionsCommandOutput,
} from "./commands/ListStreamingDistributionsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PublishFunctionCommand,
  PublishFunctionCommandInput,
  PublishFunctionCommandOutput,
} from "./commands/PublishFunctionCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  TestFunctionCommand,
  TestFunctionCommandInput,
  TestFunctionCommandOutput,
} from "./commands/TestFunctionCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateCachePolicyCommand,
  UpdateCachePolicyCommandInput,
  UpdateCachePolicyCommandOutput,
} from "./commands/UpdateCachePolicyCommand";
import {
  UpdateCloudFrontOriginAccessIdentityCommand,
  UpdateCloudFrontOriginAccessIdentityCommandInput,
  UpdateCloudFrontOriginAccessIdentityCommandOutput,
} from "./commands/UpdateCloudFrontOriginAccessIdentityCommand";
import {
  UpdateContinuousDeploymentPolicyCommand,
  UpdateContinuousDeploymentPolicyCommandInput,
  UpdateContinuousDeploymentPolicyCommandOutput,
} from "./commands/UpdateContinuousDeploymentPolicyCommand";
import {
  UpdateDistributionCommand,
  UpdateDistributionCommandInput,
  UpdateDistributionCommandOutput,
} from "./commands/UpdateDistributionCommand";
import {
  UpdateDistributionWithStagingConfigCommand,
  UpdateDistributionWithStagingConfigCommandInput,
  UpdateDistributionWithStagingConfigCommandOutput,
} from "./commands/UpdateDistributionWithStagingConfigCommand";
import {
  UpdateFieldLevelEncryptionConfigCommand,
  UpdateFieldLevelEncryptionConfigCommandInput,
  UpdateFieldLevelEncryptionConfigCommandOutput,
} from "./commands/UpdateFieldLevelEncryptionConfigCommand";
import {
  UpdateFieldLevelEncryptionProfileCommand,
  UpdateFieldLevelEncryptionProfileCommandInput,
  UpdateFieldLevelEncryptionProfileCommandOutput,
} from "./commands/UpdateFieldLevelEncryptionProfileCommand";
import {
  UpdateFunctionCommand,
  UpdateFunctionCommandInput,
  UpdateFunctionCommandOutput,
} from "./commands/UpdateFunctionCommand";
import {
  UpdateKeyGroupCommand,
  UpdateKeyGroupCommandInput,
  UpdateKeyGroupCommandOutput,
} from "./commands/UpdateKeyGroupCommand";
import {
  UpdateOriginAccessControlCommand,
  UpdateOriginAccessControlCommandInput,
  UpdateOriginAccessControlCommandOutput,
} from "./commands/UpdateOriginAccessControlCommand";
import {
  UpdateOriginRequestPolicyCommand,
  UpdateOriginRequestPolicyCommandInput,
  UpdateOriginRequestPolicyCommandOutput,
} from "./commands/UpdateOriginRequestPolicyCommand";
import {
  UpdatePublicKeyCommand,
  UpdatePublicKeyCommandInput,
  UpdatePublicKeyCommandOutput,
} from "./commands/UpdatePublicKeyCommand";
import {
  UpdateRealtimeLogConfigCommand,
  UpdateRealtimeLogConfigCommandInput,
  UpdateRealtimeLogConfigCommandOutput,
} from "./commands/UpdateRealtimeLogConfigCommand";
import {
  UpdateResponseHeadersPolicyCommand,
  UpdateResponseHeadersPolicyCommandInput,
  UpdateResponseHeadersPolicyCommandOutput,
} from "./commands/UpdateResponseHeadersPolicyCommand";
import {
  UpdateStreamingDistributionCommand,
  UpdateStreamingDistributionCommandInput,
  UpdateStreamingDistributionCommandOutput,
} from "./commands/UpdateStreamingDistributionCommand";

/**
 * <fullname>Amazon CloudFront</fullname>
 *          <p>This is the <i>Amazon CloudFront API Reference</i>. This guide is for developers
 * 			who need detailed information about CloudFront API actions, data types, and errors. For
 * 			detailed information about CloudFront features, see the
 * 			<i>Amazon CloudFront Developer Guide</i>.</p>
 */
export class CloudFront extends CloudFrontClient {
  /**
   * <p>Associates an alias (also known as a CNAME or an alternate domain name) with a CloudFront
   * 			distribution.</p>
   *          <p>With this operation you can move an alias that's already in use on a CloudFront distribution
   * 			to a different distribution in one step. This prevents the downtime that could occur if
   * 			you first remove the alias from one distribution and then separately add the alias to
   * 			another distribution.</p>
   *          <p>To use this operation to associate an alias with a distribution, you provide the alias
   * 			and the ID of the target distribution for the alias. For more information, including how
   * 			to set up the target distribution, prerequisites that you must complete, and other
   * 			restrictions, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/CNAMEs.html#alternate-domain-names-move">Moving an alternate domain name to a different
   * 				distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  public associateAlias(
    args: AssociateAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateAliasCommandOutput>;
  public associateAlias(
    args: AssociateAliasCommandInput,
    cb: (err: any, data?: AssociateAliasCommandOutput) => void
  ): void;
  public associateAlias(
    args: AssociateAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateAliasCommandOutput) => void
  ): void;
  public associateAlias(
    args: AssociateAliasCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateAliasCommandOutput) => void),
    cb?: (err: any, data?: AssociateAliasCommandOutput) => void
  ): Promise<AssociateAliasCommandOutput> | void {
    const command = new AssociateAliasCommand(args);
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
   * <p>Creates a staging distribution using the configuration of the provided primary
   * 			distribution. A staging distribution is a copy of an existing distribution (called the
   * 			primary distribution) that you can use in a continuous deployment workflow.</p>
   *          <p>After you create a staging distribution, you can use <code>UpdateDistribution</code>
   * 			to modify the staging distribution's configuration. Then you can use
   * 				<code>CreateContinuousDeploymentPolicy</code> to incrementally move traffic to the
   * 			staging distribution.</p>
   */
  public copyDistribution(
    args: CopyDistributionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CopyDistributionCommandOutput>;
  public copyDistribution(
    args: CopyDistributionCommandInput,
    cb: (err: any, data?: CopyDistributionCommandOutput) => void
  ): void;
  public copyDistribution(
    args: CopyDistributionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CopyDistributionCommandOutput) => void
  ): void;
  public copyDistribution(
    args: CopyDistributionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CopyDistributionCommandOutput) => void),
    cb?: (err: any, data?: CopyDistributionCommandOutput) => void
  ): Promise<CopyDistributionCommandOutput> | void {
    const command = new CopyDistributionCommand(args);
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
   * <p>Creates a cache policy.</p>
   *          <p>After you create a cache policy, you can attach it to one or more cache behaviors.
   * 			When it's attached to a cache behavior, the cache policy determines the
   * 			following:</p>
   *          <ul>
   *             <li>
   *                <p>The values that CloudFront includes in the <i>cache key</i>. These
   * 					values can include HTTP headers, cookies, and URL query strings. CloudFront uses the
   * 					cache key to find an object in its cache that it can return to the
   * 					viewer.</p>
   *             </li>
   *             <li>
   *                <p>The default, minimum, and maximum time to live (TTL) values that you want
   * 					objects to stay in the CloudFront cache.</p>
   *             </li>
   *          </ul>
   *          <p>The headers, cookies, and query strings that are included in the cache key are
   * 			automatically included in requests that CloudFront sends to the origin. CloudFront sends a request
   * 			when it can't find an object in its cache that matches the request's cache key. If you
   * 			want to send values to the origin but <i>not</i> include them in the cache
   * 			key, use <code>OriginRequestPolicy</code>.</p>
   *          <p>For more information about cache policies, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html">Controlling the cache key</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  public createCachePolicy(
    args: CreateCachePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCachePolicyCommandOutput>;
  public createCachePolicy(
    args: CreateCachePolicyCommandInput,
    cb: (err: any, data?: CreateCachePolicyCommandOutput) => void
  ): void;
  public createCachePolicy(
    args: CreateCachePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCachePolicyCommandOutput) => void
  ): void;
  public createCachePolicy(
    args: CreateCachePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateCachePolicyCommandOutput) => void),
    cb?: (err: any, data?: CreateCachePolicyCommandOutput) => void
  ): Promise<CreateCachePolicyCommandOutput> | void {
    const command = new CreateCachePolicyCommand(args);
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
   * <p>Creates a new origin access identity. If you're using Amazon S3 for your origin, you can
   * 			use an origin access identity to require users to access your content using a CloudFront URL
   * 			instead of the Amazon S3 URL. For more information about how to use origin access identities,
   * 			see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private
   * 				Content through CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  public createCloudFrontOriginAccessIdentity(
    args: CreateCloudFrontOriginAccessIdentityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCloudFrontOriginAccessIdentityCommandOutput>;
  public createCloudFrontOriginAccessIdentity(
    args: CreateCloudFrontOriginAccessIdentityCommandInput,
    cb: (err: any, data?: CreateCloudFrontOriginAccessIdentityCommandOutput) => void
  ): void;
  public createCloudFrontOriginAccessIdentity(
    args: CreateCloudFrontOriginAccessIdentityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCloudFrontOriginAccessIdentityCommandOutput) => void
  ): void;
  public createCloudFrontOriginAccessIdentity(
    args: CreateCloudFrontOriginAccessIdentityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateCloudFrontOriginAccessIdentityCommandOutput) => void),
    cb?: (err: any, data?: CreateCloudFrontOriginAccessIdentityCommandOutput) => void
  ): Promise<CreateCloudFrontOriginAccessIdentityCommandOutput> | void {
    const command = new CreateCloudFrontOriginAccessIdentityCommand(args);
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
   * <p>Creates a continuous deployment policy that distributes traffic for a custom domain
   * 			name to two different CloudFront distributions.</p>
   *          <p>To use a continuous deployment policy, first use <code>CopyDistribution</code> to
   * 			create a staging distribution, then use <code>UpdateDistribution</code> to modify the
   * 			staging distribution's configuration.</p>
   *          <p>After you create and update a staging distribution, you can use a continuous
   * 			deployment policy to incrementally move traffic to the staging distribution. This
   * 			workflow enables you to test changes to a distribution's configuration before moving all
   * 			of your domain's production traffic to the new configuration.</p>
   */
  public createContinuousDeploymentPolicy(
    args: CreateContinuousDeploymentPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateContinuousDeploymentPolicyCommandOutput>;
  public createContinuousDeploymentPolicy(
    args: CreateContinuousDeploymentPolicyCommandInput,
    cb: (err: any, data?: CreateContinuousDeploymentPolicyCommandOutput) => void
  ): void;
  public createContinuousDeploymentPolicy(
    args: CreateContinuousDeploymentPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateContinuousDeploymentPolicyCommandOutput) => void
  ): void;
  public createContinuousDeploymentPolicy(
    args: CreateContinuousDeploymentPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateContinuousDeploymentPolicyCommandOutput) => void),
    cb?: (err: any, data?: CreateContinuousDeploymentPolicyCommandOutput) => void
  ): Promise<CreateContinuousDeploymentPolicyCommandOutput> | void {
    const command = new CreateContinuousDeploymentPolicyCommand(args);
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
   * <p>Creates a CloudFront distribution.</p>
   */
  public createDistribution(
    args: CreateDistributionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDistributionCommandOutput>;
  public createDistribution(
    args: CreateDistributionCommandInput,
    cb: (err: any, data?: CreateDistributionCommandOutput) => void
  ): void;
  public createDistribution(
    args: CreateDistributionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDistributionCommandOutput) => void
  ): void;
  public createDistribution(
    args: CreateDistributionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDistributionCommandOutput) => void),
    cb?: (err: any, data?: CreateDistributionCommandOutput) => void
  ): Promise<CreateDistributionCommandOutput> | void {
    const command = new CreateDistributionCommand(args);
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
   * <p>Create a new distribution with tags.</p>
   */
  public createDistributionWithTags(
    args: CreateDistributionWithTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDistributionWithTagsCommandOutput>;
  public createDistributionWithTags(
    args: CreateDistributionWithTagsCommandInput,
    cb: (err: any, data?: CreateDistributionWithTagsCommandOutput) => void
  ): void;
  public createDistributionWithTags(
    args: CreateDistributionWithTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDistributionWithTagsCommandOutput) => void
  ): void;
  public createDistributionWithTags(
    args: CreateDistributionWithTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDistributionWithTagsCommandOutput) => void),
    cb?: (err: any, data?: CreateDistributionWithTagsCommandOutput) => void
  ): Promise<CreateDistributionWithTagsCommandOutput> | void {
    const command = new CreateDistributionWithTagsCommand(args);
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
   * <p>Create a new field-level encryption configuration.</p>
   */
  public createFieldLevelEncryptionConfig(
    args: CreateFieldLevelEncryptionConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFieldLevelEncryptionConfigCommandOutput>;
  public createFieldLevelEncryptionConfig(
    args: CreateFieldLevelEncryptionConfigCommandInput,
    cb: (err: any, data?: CreateFieldLevelEncryptionConfigCommandOutput) => void
  ): void;
  public createFieldLevelEncryptionConfig(
    args: CreateFieldLevelEncryptionConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFieldLevelEncryptionConfigCommandOutput) => void
  ): void;
  public createFieldLevelEncryptionConfig(
    args: CreateFieldLevelEncryptionConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateFieldLevelEncryptionConfigCommandOutput) => void),
    cb?: (err: any, data?: CreateFieldLevelEncryptionConfigCommandOutput) => void
  ): Promise<CreateFieldLevelEncryptionConfigCommandOutput> | void {
    const command = new CreateFieldLevelEncryptionConfigCommand(args);
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
   * <p>Create a field-level encryption profile.</p>
   */
  public createFieldLevelEncryptionProfile(
    args: CreateFieldLevelEncryptionProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFieldLevelEncryptionProfileCommandOutput>;
  public createFieldLevelEncryptionProfile(
    args: CreateFieldLevelEncryptionProfileCommandInput,
    cb: (err: any, data?: CreateFieldLevelEncryptionProfileCommandOutput) => void
  ): void;
  public createFieldLevelEncryptionProfile(
    args: CreateFieldLevelEncryptionProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFieldLevelEncryptionProfileCommandOutput) => void
  ): void;
  public createFieldLevelEncryptionProfile(
    args: CreateFieldLevelEncryptionProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateFieldLevelEncryptionProfileCommandOutput) => void),
    cb?: (err: any, data?: CreateFieldLevelEncryptionProfileCommandOutput) => void
  ): Promise<CreateFieldLevelEncryptionProfileCommandOutput> | void {
    const command = new CreateFieldLevelEncryptionProfileCommand(args);
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
   * <p>Creates a CloudFront function.</p>
   *          <p>To create a function, you provide the function code and some configuration information
   * 			about the function. The response contains an Amazon Resource Name (ARN) that uniquely
   * 			identifies the function.</p>
   *          <p>When you create a function, it's in the <code>DEVELOPMENT</code> stage. In this stage,
   * 			you can test the function with <code>TestFunction</code>, and update it with
   * 				<code>UpdateFunction</code>.</p>
   *          <p>When you're ready to use your function with a CloudFront distribution, use
   * 				<code>PublishFunction</code> to copy the function from the <code>DEVELOPMENT</code>
   * 			stage to <code>LIVE</code>. When it's live, you can attach the function to a
   * 			distribution's cache behavior, using the function's ARN.</p>
   */
  public createFunction(
    args: CreateFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFunctionCommandOutput>;
  public createFunction(
    args: CreateFunctionCommandInput,
    cb: (err: any, data?: CreateFunctionCommandOutput) => void
  ): void;
  public createFunction(
    args: CreateFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFunctionCommandOutput) => void
  ): void;
  public createFunction(
    args: CreateFunctionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateFunctionCommandOutput) => void),
    cb?: (err: any, data?: CreateFunctionCommandOutput) => void
  ): Promise<CreateFunctionCommandOutput> | void {
    const command = new CreateFunctionCommand(args);
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
   * <p>Create a new invalidation.</p>
   */
  public createInvalidation(
    args: CreateInvalidationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateInvalidationCommandOutput>;
  public createInvalidation(
    args: CreateInvalidationCommandInput,
    cb: (err: any, data?: CreateInvalidationCommandOutput) => void
  ): void;
  public createInvalidation(
    args: CreateInvalidationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateInvalidationCommandOutput) => void
  ): void;
  public createInvalidation(
    args: CreateInvalidationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateInvalidationCommandOutput) => void),
    cb?: (err: any, data?: CreateInvalidationCommandOutput) => void
  ): Promise<CreateInvalidationCommandOutput> | void {
    const command = new CreateInvalidationCommand(args);
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
   * <p>Creates a key group that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">CloudFront signed URLs and signed cookies</a>.</p>
   *          <p>To create a key group, you must specify at least one public key for the key group.
   * 			After you create a key group, you can reference it from one or more cache behaviors.
   * 			When you reference a key group in a cache behavior, CloudFront requires signed URLs or signed
   * 			cookies for all requests that match the cache behavior. The URLs or cookies must be
   * 			signed with a private key whose corresponding public key is in the key group. The signed
   * 			URL or cookie contains information about which public key CloudFront should use to verify the
   * 			signature. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving private content</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  public createKeyGroup(
    args: CreateKeyGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateKeyGroupCommandOutput>;
  public createKeyGroup(
    args: CreateKeyGroupCommandInput,
    cb: (err: any, data?: CreateKeyGroupCommandOutput) => void
  ): void;
  public createKeyGroup(
    args: CreateKeyGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateKeyGroupCommandOutput) => void
  ): void;
  public createKeyGroup(
    args: CreateKeyGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateKeyGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateKeyGroupCommandOutput) => void
  ): Promise<CreateKeyGroupCommandOutput> | void {
    const command = new CreateKeyGroupCommand(args);
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
   * <p>Enables additional CloudWatch metrics for the specified CloudFront distribution. The
   * 			additional metrics incur an additional cost.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/viewing-cloudfront-metrics.html#monitoring-console.distributions-additional">Viewing additional CloudFront distribution metrics</a> in
   * 			the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  public createMonitoringSubscription(
    args: CreateMonitoringSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMonitoringSubscriptionCommandOutput>;
  public createMonitoringSubscription(
    args: CreateMonitoringSubscriptionCommandInput,
    cb: (err: any, data?: CreateMonitoringSubscriptionCommandOutput) => void
  ): void;
  public createMonitoringSubscription(
    args: CreateMonitoringSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMonitoringSubscriptionCommandOutput) => void
  ): void;
  public createMonitoringSubscription(
    args: CreateMonitoringSubscriptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateMonitoringSubscriptionCommandOutput) => void),
    cb?: (err: any, data?: CreateMonitoringSubscriptionCommandOutput) => void
  ): Promise<CreateMonitoringSubscriptionCommandOutput> | void {
    const command = new CreateMonitoringSubscriptionCommand(args);
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
   * <p>Creates a new origin access control in CloudFront. After you create an origin access
   * 			control, you can add it to an origin in a CloudFront distribution so that CloudFront sends
   * 			authenticated (signed) requests to the origin.</p>
   *          <p>For an Amazon S3 origin, this makes it possible to block public access to the Amazon S3 bucket
   * 			so that viewers (users) can access the content in the bucket only through CloudFront.</p>
   *          <p>For more information about using a CloudFront origin access control, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html">Restricting access to an Amazon S3 origin</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  public createOriginAccessControl(
    args: CreateOriginAccessControlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateOriginAccessControlCommandOutput>;
  public createOriginAccessControl(
    args: CreateOriginAccessControlCommandInput,
    cb: (err: any, data?: CreateOriginAccessControlCommandOutput) => void
  ): void;
  public createOriginAccessControl(
    args: CreateOriginAccessControlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateOriginAccessControlCommandOutput) => void
  ): void;
  public createOriginAccessControl(
    args: CreateOriginAccessControlCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateOriginAccessControlCommandOutput) => void),
    cb?: (err: any, data?: CreateOriginAccessControlCommandOutput) => void
  ): Promise<CreateOriginAccessControlCommandOutput> | void {
    const command = new CreateOriginAccessControlCommand(args);
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
   * <p>Creates an origin request policy.</p>
   *          <p>After you create an origin request policy, you can attach it to one or more cache
   * 			behaviors. When it's attached to a cache behavior, the origin request policy determines
   * 			the values that CloudFront includes in requests that it sends to the origin. Each request that
   * 			CloudFront sends to the origin includes the following:</p>
   *          <ul>
   *             <li>
   *                <p>The request body and the URL path (without the domain name) from the viewer
   * 					request.</p>
   *             </li>
   *             <li>
   *                <p>The headers that CloudFront automatically includes in every origin request,
   * 					including <code>Host</code>, <code>User-Agent</code>, and
   * 						<code>X-Amz-Cf-Id</code>.</p>
   *             </li>
   *             <li>
   *                <p>All HTTP headers, cookies, and URL query strings that are specified in the
   * 					cache policy or the origin request policy. These can include items from the
   * 					viewer request and, in the case of headers, additional ones that are added by
   * 					CloudFront.</p>
   *             </li>
   *          </ul>
   *          <p>CloudFront sends a request when it can't find a valid object in its cache that matches the
   * 			request. If you want to send values to the origin and also include them in the cache
   * 			key, use <code>CachePolicy</code>.</p>
   *          <p>For more information about origin request policies, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html">Controlling origin requests</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  public createOriginRequestPolicy(
    args: CreateOriginRequestPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateOriginRequestPolicyCommandOutput>;
  public createOriginRequestPolicy(
    args: CreateOriginRequestPolicyCommandInput,
    cb: (err: any, data?: CreateOriginRequestPolicyCommandOutput) => void
  ): void;
  public createOriginRequestPolicy(
    args: CreateOriginRequestPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateOriginRequestPolicyCommandOutput) => void
  ): void;
  public createOriginRequestPolicy(
    args: CreateOriginRequestPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateOriginRequestPolicyCommandOutput) => void),
    cb?: (err: any, data?: CreateOriginRequestPolicyCommandOutput) => void
  ): Promise<CreateOriginRequestPolicyCommandOutput> | void {
    const command = new CreateOriginRequestPolicyCommand(args);
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
   * <p>Uploads a public key to CloudFront that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.</p>
   */
  public createPublicKey(
    args: CreatePublicKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePublicKeyCommandOutput>;
  public createPublicKey(
    args: CreatePublicKeyCommandInput,
    cb: (err: any, data?: CreatePublicKeyCommandOutput) => void
  ): void;
  public createPublicKey(
    args: CreatePublicKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePublicKeyCommandOutput) => void
  ): void;
  public createPublicKey(
    args: CreatePublicKeyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreatePublicKeyCommandOutput) => void),
    cb?: (err: any, data?: CreatePublicKeyCommandOutput) => void
  ): Promise<CreatePublicKeyCommandOutput> | void {
    const command = new CreatePublicKeyCommand(args);
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
   * <p>Creates a real-time log configuration.</p>
   *          <p>After you create a real-time log configuration, you can attach it to one or more cache
   * 			behaviors to send real-time log data to the specified Amazon Kinesis data stream.</p>
   *          <p>For more information about real-time log configurations, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html">Real-time logs</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  public createRealtimeLogConfig(
    args: CreateRealtimeLogConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRealtimeLogConfigCommandOutput>;
  public createRealtimeLogConfig(
    args: CreateRealtimeLogConfigCommandInput,
    cb: (err: any, data?: CreateRealtimeLogConfigCommandOutput) => void
  ): void;
  public createRealtimeLogConfig(
    args: CreateRealtimeLogConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRealtimeLogConfigCommandOutput) => void
  ): void;
  public createRealtimeLogConfig(
    args: CreateRealtimeLogConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateRealtimeLogConfigCommandOutput) => void),
    cb?: (err: any, data?: CreateRealtimeLogConfigCommandOutput) => void
  ): Promise<CreateRealtimeLogConfigCommandOutput> | void {
    const command = new CreateRealtimeLogConfigCommand(args);
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
   * <p>Creates a response headers policy.</p>
   *          <p>A response headers policy contains information about a set of HTTP headers. To create a
   * 			response headers policy, you provide some metadata about the policy and a set of
   * 			configurations that specify the headers.</p>
   *          <p>After you create a response headers policy, you can use its ID to attach it to one or more
   * 			cache behaviors in a CloudFront distribution. When it's attached to a cache behavior, the
   * 			response headers policy affects the HTTP headers that CloudFront includes in HTTP responses to
   * 			requests that match the cache behavior. CloudFront adds or removes response headers according
   * 			to the configuration of the response headers policy.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/modifying-response-headers.html">Adding or removing HTTP headers in CloudFront responses</a> in the
   * 			<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  public createResponseHeadersPolicy(
    args: CreateResponseHeadersPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateResponseHeadersPolicyCommandOutput>;
  public createResponseHeadersPolicy(
    args: CreateResponseHeadersPolicyCommandInput,
    cb: (err: any, data?: CreateResponseHeadersPolicyCommandOutput) => void
  ): void;
  public createResponseHeadersPolicy(
    args: CreateResponseHeadersPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateResponseHeadersPolicyCommandOutput) => void
  ): void;
  public createResponseHeadersPolicy(
    args: CreateResponseHeadersPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateResponseHeadersPolicyCommandOutput) => void),
    cb?: (err: any, data?: CreateResponseHeadersPolicyCommandOutput) => void
  ): Promise<CreateResponseHeadersPolicyCommandOutput> | void {
    const command = new CreateResponseHeadersPolicyCommand(args);
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
   * <p>This API is deprecated. Amazon CloudFront is deprecating real-time messaging protocol (RTMP)
   * 			distributions on December 31, 2020. For more information, <a href="http://forums.aws.amazon.com/ann.jspa?annID=7356">read the announcement</a> on the Amazon CloudFront discussion
   * 			forum.</p>
   */
  public createStreamingDistribution(
    args: CreateStreamingDistributionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateStreamingDistributionCommandOutput>;
  public createStreamingDistribution(
    args: CreateStreamingDistributionCommandInput,
    cb: (err: any, data?: CreateStreamingDistributionCommandOutput) => void
  ): void;
  public createStreamingDistribution(
    args: CreateStreamingDistributionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStreamingDistributionCommandOutput) => void
  ): void;
  public createStreamingDistribution(
    args: CreateStreamingDistributionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateStreamingDistributionCommandOutput) => void),
    cb?: (err: any, data?: CreateStreamingDistributionCommandOutput) => void
  ): Promise<CreateStreamingDistributionCommandOutput> | void {
    const command = new CreateStreamingDistributionCommand(args);
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
   * <p>This API is deprecated. Amazon CloudFront is deprecating real-time messaging protocol (RTMP)
   * 			distributions on December 31, 2020. For more information, <a href="http://forums.aws.amazon.com/ann.jspa?annID=7356">read the announcement</a> on the Amazon CloudFront discussion
   * 			forum.</p>
   */
  public createStreamingDistributionWithTags(
    args: CreateStreamingDistributionWithTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateStreamingDistributionWithTagsCommandOutput>;
  public createStreamingDistributionWithTags(
    args: CreateStreamingDistributionWithTagsCommandInput,
    cb: (err: any, data?: CreateStreamingDistributionWithTagsCommandOutput) => void
  ): void;
  public createStreamingDistributionWithTags(
    args: CreateStreamingDistributionWithTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStreamingDistributionWithTagsCommandOutput) => void
  ): void;
  public createStreamingDistributionWithTags(
    args: CreateStreamingDistributionWithTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateStreamingDistributionWithTagsCommandOutput) => void),
    cb?: (err: any, data?: CreateStreamingDistributionWithTagsCommandOutput) => void
  ): Promise<CreateStreamingDistributionWithTagsCommandOutput> | void {
    const command = new CreateStreamingDistributionWithTagsCommand(args);
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
   * <p>Deletes a cache policy.</p>
   *          <p>You cannot delete a cache policy if it's attached to a cache behavior. First update
   * 			your distributions to remove the cache policy from all cache behaviors, then delete the
   * 			cache policy.</p>
   *          <p>To delete a cache policy, you must provide the policy's identifier and version. To get
   * 			these values, you can use <code>ListCachePolicies</code> or
   * 			<code>GetCachePolicy</code>.</p>
   */
  public deleteCachePolicy(
    args: DeleteCachePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCachePolicyCommandOutput>;
  public deleteCachePolicy(
    args: DeleteCachePolicyCommandInput,
    cb: (err: any, data?: DeleteCachePolicyCommandOutput) => void
  ): void;
  public deleteCachePolicy(
    args: DeleteCachePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCachePolicyCommandOutput) => void
  ): void;
  public deleteCachePolicy(
    args: DeleteCachePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteCachePolicyCommandOutput) => void),
    cb?: (err: any, data?: DeleteCachePolicyCommandOutput) => void
  ): Promise<DeleteCachePolicyCommandOutput> | void {
    const command = new DeleteCachePolicyCommand(args);
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
   * <p>Delete an origin access identity.</p>
   */
  public deleteCloudFrontOriginAccessIdentity(
    args: DeleteCloudFrontOriginAccessIdentityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCloudFrontOriginAccessIdentityCommandOutput>;
  public deleteCloudFrontOriginAccessIdentity(
    args: DeleteCloudFrontOriginAccessIdentityCommandInput,
    cb: (err: any, data?: DeleteCloudFrontOriginAccessIdentityCommandOutput) => void
  ): void;
  public deleteCloudFrontOriginAccessIdentity(
    args: DeleteCloudFrontOriginAccessIdentityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCloudFrontOriginAccessIdentityCommandOutput) => void
  ): void;
  public deleteCloudFrontOriginAccessIdentity(
    args: DeleteCloudFrontOriginAccessIdentityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteCloudFrontOriginAccessIdentityCommandOutput) => void),
    cb?: (err: any, data?: DeleteCloudFrontOriginAccessIdentityCommandOutput) => void
  ): Promise<DeleteCloudFrontOriginAccessIdentityCommandOutput> | void {
    const command = new DeleteCloudFrontOriginAccessIdentityCommand(args);
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
   * <p>Deletes a continuous deployment policy.</p>
   *          <p>You cannot delete a continuous deployment policy that's attached to a primary
   * 			distribution. First update your distribution to remove the continuous deployment policy,
   * 			then you can delete the policy.</p>
   */
  public deleteContinuousDeploymentPolicy(
    args: DeleteContinuousDeploymentPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteContinuousDeploymentPolicyCommandOutput>;
  public deleteContinuousDeploymentPolicy(
    args: DeleteContinuousDeploymentPolicyCommandInput,
    cb: (err: any, data?: DeleteContinuousDeploymentPolicyCommandOutput) => void
  ): void;
  public deleteContinuousDeploymentPolicy(
    args: DeleteContinuousDeploymentPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteContinuousDeploymentPolicyCommandOutput) => void
  ): void;
  public deleteContinuousDeploymentPolicy(
    args: DeleteContinuousDeploymentPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteContinuousDeploymentPolicyCommandOutput) => void),
    cb?: (err: any, data?: DeleteContinuousDeploymentPolicyCommandOutput) => void
  ): Promise<DeleteContinuousDeploymentPolicyCommandOutput> | void {
    const command = new DeleteContinuousDeploymentPolicyCommand(args);
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
   * <p>Delete a distribution.</p>
   */
  public deleteDistribution(
    args: DeleteDistributionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDistributionCommandOutput>;
  public deleteDistribution(
    args: DeleteDistributionCommandInput,
    cb: (err: any, data?: DeleteDistributionCommandOutput) => void
  ): void;
  public deleteDistribution(
    args: DeleteDistributionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDistributionCommandOutput) => void
  ): void;
  public deleteDistribution(
    args: DeleteDistributionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDistributionCommandOutput) => void),
    cb?: (err: any, data?: DeleteDistributionCommandOutput) => void
  ): Promise<DeleteDistributionCommandOutput> | void {
    const command = new DeleteDistributionCommand(args);
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
   * <p>Remove a field-level encryption configuration.</p>
   */
  public deleteFieldLevelEncryptionConfig(
    args: DeleteFieldLevelEncryptionConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFieldLevelEncryptionConfigCommandOutput>;
  public deleteFieldLevelEncryptionConfig(
    args: DeleteFieldLevelEncryptionConfigCommandInput,
    cb: (err: any, data?: DeleteFieldLevelEncryptionConfigCommandOutput) => void
  ): void;
  public deleteFieldLevelEncryptionConfig(
    args: DeleteFieldLevelEncryptionConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFieldLevelEncryptionConfigCommandOutput) => void
  ): void;
  public deleteFieldLevelEncryptionConfig(
    args: DeleteFieldLevelEncryptionConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteFieldLevelEncryptionConfigCommandOutput) => void),
    cb?: (err: any, data?: DeleteFieldLevelEncryptionConfigCommandOutput) => void
  ): Promise<DeleteFieldLevelEncryptionConfigCommandOutput> | void {
    const command = new DeleteFieldLevelEncryptionConfigCommand(args);
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
   * <p>Remove a field-level encryption profile.</p>
   */
  public deleteFieldLevelEncryptionProfile(
    args: DeleteFieldLevelEncryptionProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFieldLevelEncryptionProfileCommandOutput>;
  public deleteFieldLevelEncryptionProfile(
    args: DeleteFieldLevelEncryptionProfileCommandInput,
    cb: (err: any, data?: DeleteFieldLevelEncryptionProfileCommandOutput) => void
  ): void;
  public deleteFieldLevelEncryptionProfile(
    args: DeleteFieldLevelEncryptionProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFieldLevelEncryptionProfileCommandOutput) => void
  ): void;
  public deleteFieldLevelEncryptionProfile(
    args: DeleteFieldLevelEncryptionProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteFieldLevelEncryptionProfileCommandOutput) => void),
    cb?: (err: any, data?: DeleteFieldLevelEncryptionProfileCommandOutput) => void
  ): Promise<DeleteFieldLevelEncryptionProfileCommandOutput> | void {
    const command = new DeleteFieldLevelEncryptionProfileCommand(args);
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
   * <p>Deletes a CloudFront function.</p>
   *          <p>You cannot delete a function if it's associated with a cache behavior. First, update
   * 			your distributions to remove the function association from all cache behaviors, then
   * 			delete the function.</p>
   *          <p>To delete a function, you must provide the function's name and version
   * 				(<code>ETag</code> value). To get these values, you can use
   * 				<code>ListFunctions</code> and <code>DescribeFunction</code>.</p>
   */
  public deleteFunction(
    args: DeleteFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFunctionCommandOutput>;
  public deleteFunction(
    args: DeleteFunctionCommandInput,
    cb: (err: any, data?: DeleteFunctionCommandOutput) => void
  ): void;
  public deleteFunction(
    args: DeleteFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFunctionCommandOutput) => void
  ): void;
  public deleteFunction(
    args: DeleteFunctionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteFunctionCommandOutput) => void),
    cb?: (err: any, data?: DeleteFunctionCommandOutput) => void
  ): Promise<DeleteFunctionCommandOutput> | void {
    const command = new DeleteFunctionCommand(args);
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
   * <p>Deletes a key group.</p>
   *          <p>You cannot delete a key group that is referenced in a cache behavior. First update
   * 			your distributions to remove the key group from all cache behaviors, then delete the key
   * 			group.</p>
   *          <p>To delete a key group, you must provide the key group's identifier and version. To get
   * 			these values, use <code>ListKeyGroups</code> followed by <code>GetKeyGroup</code> or
   * 				<code>GetKeyGroupConfig</code>.</p>
   */
  public deleteKeyGroup(
    args: DeleteKeyGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteKeyGroupCommandOutput>;
  public deleteKeyGroup(
    args: DeleteKeyGroupCommandInput,
    cb: (err: any, data?: DeleteKeyGroupCommandOutput) => void
  ): void;
  public deleteKeyGroup(
    args: DeleteKeyGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteKeyGroupCommandOutput) => void
  ): void;
  public deleteKeyGroup(
    args: DeleteKeyGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteKeyGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteKeyGroupCommandOutput) => void
  ): Promise<DeleteKeyGroupCommandOutput> | void {
    const command = new DeleteKeyGroupCommand(args);
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
   * <p>Disables additional CloudWatch metrics for the specified CloudFront
   * 			distribution.</p>
   */
  public deleteMonitoringSubscription(
    args: DeleteMonitoringSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMonitoringSubscriptionCommandOutput>;
  public deleteMonitoringSubscription(
    args: DeleteMonitoringSubscriptionCommandInput,
    cb: (err: any, data?: DeleteMonitoringSubscriptionCommandOutput) => void
  ): void;
  public deleteMonitoringSubscription(
    args: DeleteMonitoringSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMonitoringSubscriptionCommandOutput) => void
  ): void;
  public deleteMonitoringSubscription(
    args: DeleteMonitoringSubscriptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteMonitoringSubscriptionCommandOutput) => void),
    cb?: (err: any, data?: DeleteMonitoringSubscriptionCommandOutput) => void
  ): Promise<DeleteMonitoringSubscriptionCommandOutput> | void {
    const command = new DeleteMonitoringSubscriptionCommand(args);
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
   * <p>Deletes a CloudFront origin access control.</p>
   *          <p>You cannot delete an origin access control if it's in use. First, update all
   * 			distributions to remove the origin access control from all origins, then delete the
   * 			origin access control.</p>
   */
  public deleteOriginAccessControl(
    args: DeleteOriginAccessControlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteOriginAccessControlCommandOutput>;
  public deleteOriginAccessControl(
    args: DeleteOriginAccessControlCommandInput,
    cb: (err: any, data?: DeleteOriginAccessControlCommandOutput) => void
  ): void;
  public deleteOriginAccessControl(
    args: DeleteOriginAccessControlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteOriginAccessControlCommandOutput) => void
  ): void;
  public deleteOriginAccessControl(
    args: DeleteOriginAccessControlCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteOriginAccessControlCommandOutput) => void),
    cb?: (err: any, data?: DeleteOriginAccessControlCommandOutput) => void
  ): Promise<DeleteOriginAccessControlCommandOutput> | void {
    const command = new DeleteOriginAccessControlCommand(args);
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
   * <p>Deletes an origin request policy.</p>
   *          <p>You cannot delete an origin request policy if it's attached to any cache behaviors.
   * 			First update your distributions to remove the origin request policy from all cache
   * 			behaviors, then delete the origin request policy.</p>
   *          <p>To delete an origin request policy, you must provide the policy's identifier and
   * 			version. To get the identifier, you can use <code>ListOriginRequestPolicies</code> or
   * 				<code>GetOriginRequestPolicy</code>.</p>
   */
  public deleteOriginRequestPolicy(
    args: DeleteOriginRequestPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteOriginRequestPolicyCommandOutput>;
  public deleteOriginRequestPolicy(
    args: DeleteOriginRequestPolicyCommandInput,
    cb: (err: any, data?: DeleteOriginRequestPolicyCommandOutput) => void
  ): void;
  public deleteOriginRequestPolicy(
    args: DeleteOriginRequestPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteOriginRequestPolicyCommandOutput) => void
  ): void;
  public deleteOriginRequestPolicy(
    args: DeleteOriginRequestPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteOriginRequestPolicyCommandOutput) => void),
    cb?: (err: any, data?: DeleteOriginRequestPolicyCommandOutput) => void
  ): Promise<DeleteOriginRequestPolicyCommandOutput> | void {
    const command = new DeleteOriginRequestPolicyCommand(args);
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
   * <p>Remove a public key you previously added to CloudFront.</p>
   */
  public deletePublicKey(
    args: DeletePublicKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePublicKeyCommandOutput>;
  public deletePublicKey(
    args: DeletePublicKeyCommandInput,
    cb: (err: any, data?: DeletePublicKeyCommandOutput) => void
  ): void;
  public deletePublicKey(
    args: DeletePublicKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePublicKeyCommandOutput) => void
  ): void;
  public deletePublicKey(
    args: DeletePublicKeyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeletePublicKeyCommandOutput) => void),
    cb?: (err: any, data?: DeletePublicKeyCommandOutput) => void
  ): Promise<DeletePublicKeyCommandOutput> | void {
    const command = new DeletePublicKeyCommand(args);
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
   * <p>Deletes a real-time log configuration.</p>
   *          <p>You cannot delete a real-time log configuration if it's attached to a cache behavior.
   * 			First update your distributions to remove the real-time log configuration from all cache
   * 			behaviors, then delete the real-time log configuration.</p>
   *          <p>To delete a real-time log configuration, you can provide the configuration's name or
   * 			its Amazon Resource Name (ARN). You must provide at least one. If you provide both, CloudFront
   * 			uses the name to identify the real-time log configuration to delete.</p>
   */
  public deleteRealtimeLogConfig(
    args: DeleteRealtimeLogConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRealtimeLogConfigCommandOutput>;
  public deleteRealtimeLogConfig(
    args: DeleteRealtimeLogConfigCommandInput,
    cb: (err: any, data?: DeleteRealtimeLogConfigCommandOutput) => void
  ): void;
  public deleteRealtimeLogConfig(
    args: DeleteRealtimeLogConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRealtimeLogConfigCommandOutput) => void
  ): void;
  public deleteRealtimeLogConfig(
    args: DeleteRealtimeLogConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRealtimeLogConfigCommandOutput) => void),
    cb?: (err: any, data?: DeleteRealtimeLogConfigCommandOutput) => void
  ): Promise<DeleteRealtimeLogConfigCommandOutput> | void {
    const command = new DeleteRealtimeLogConfigCommand(args);
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
   * <p>Deletes a response headers policy.</p>
   *          <p>You cannot delete a response headers policy if it's attached to a cache behavior.
   * 			First update your distributions to remove the response headers policy from all cache
   * 			behaviors, then delete the response headers policy.</p>
   *          <p>To delete a response headers policy, you must provide the policy's identifier and
   * 			version. To get these values, you can use <code>ListResponseHeadersPolicies</code> or
   * 				<code>GetResponseHeadersPolicy</code>.</p>
   */
  public deleteResponseHeadersPolicy(
    args: DeleteResponseHeadersPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResponseHeadersPolicyCommandOutput>;
  public deleteResponseHeadersPolicy(
    args: DeleteResponseHeadersPolicyCommandInput,
    cb: (err: any, data?: DeleteResponseHeadersPolicyCommandOutput) => void
  ): void;
  public deleteResponseHeadersPolicy(
    args: DeleteResponseHeadersPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResponseHeadersPolicyCommandOutput) => void
  ): void;
  public deleteResponseHeadersPolicy(
    args: DeleteResponseHeadersPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteResponseHeadersPolicyCommandOutput) => void),
    cb?: (err: any, data?: DeleteResponseHeadersPolicyCommandOutput) => void
  ): Promise<DeleteResponseHeadersPolicyCommandOutput> | void {
    const command = new DeleteResponseHeadersPolicyCommand(args);
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
   * <p>Delete a streaming distribution. To delete an RTMP distribution using the CloudFront API,
   * 			perform the following steps.</p>
   *          <p>
   *             <b>To delete an RTMP distribution using the CloudFront
   * 			API</b>:</p>
   *          <ol>
   *             <li>
   *                <p>Disable the RTMP distribution.</p>
   *             </li>
   *             <li>
   *                <p>Submit a <code>GET Streaming Distribution Config</code> request to get the
   * 					current configuration and the <code>Etag</code> header for the distribution.
   * 				</p>
   *             </li>
   *             <li>
   *                <p>Update the XML document that was returned in the response to your <code>GET
   * 						Streaming Distribution Config</code> request to change the value of
   * 						<code>Enabled</code> to <code>false</code>.</p>
   *             </li>
   *             <li>
   *                <p>Submit a <code>PUT Streaming Distribution Config</code> request to update the
   * 					configuration for your distribution. In the request body, include the XML
   * 					document that you updated in Step 3. Then set the value of the HTTP
   * 						<code>If-Match</code> header to the value of the <code>ETag</code> header
   * 					that CloudFront returned when you submitted the <code>GET Streaming Distribution
   * 						Config</code> request in Step 2.</p>
   *             </li>
   *             <li>
   *                <p>Review the response to the <code>PUT Streaming Distribution Config</code>
   * 					request to confirm that the distribution was successfully disabled.</p>
   *             </li>
   *             <li>
   *                <p>Submit a <code>GET Streaming Distribution Config</code> request to confirm
   * 					that your changes have propagated. When propagation is complete, the value of
   * 						<code>Status</code> is <code>Deployed</code>.</p>
   *             </li>
   *             <li>
   *                <p>Submit a <code>DELETE Streaming Distribution</code> request. Set the value of
   * 					the HTTP <code>If-Match</code> header to the value of the <code>ETag</code>
   * 					header that CloudFront returned when you submitted the <code>GET Streaming
   * 						Distribution Config</code> request in Step 2.</p>
   *             </li>
   *             <li>
   *                <p>Review the response to your <code>DELETE Streaming Distribution</code> request
   * 					to confirm that the distribution was successfully deleted.</p>
   *             </li>
   *          </ol>
   *          <p>For information about deleting a distribution using the CloudFront console, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/HowToDeleteDistribution.html">Deleting a
   * 				Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  public deleteStreamingDistribution(
    args: DeleteStreamingDistributionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteStreamingDistributionCommandOutput>;
  public deleteStreamingDistribution(
    args: DeleteStreamingDistributionCommandInput,
    cb: (err: any, data?: DeleteStreamingDistributionCommandOutput) => void
  ): void;
  public deleteStreamingDistribution(
    args: DeleteStreamingDistributionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStreamingDistributionCommandOutput) => void
  ): void;
  public deleteStreamingDistribution(
    args: DeleteStreamingDistributionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteStreamingDistributionCommandOutput) => void),
    cb?: (err: any, data?: DeleteStreamingDistributionCommandOutput) => void
  ): Promise<DeleteStreamingDistributionCommandOutput> | void {
    const command = new DeleteStreamingDistributionCommand(args);
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
   * <p>Gets configuration information and metadata about a CloudFront function, but not the
   * 			function's code. To get a function's code, use <code>GetFunction</code>.</p>
   *          <p>To get configuration information and metadata about a function, you must provide the
   * 			function's name and stage. To get these values, you can use
   * 			<code>ListFunctions</code>.</p>
   */
  public describeFunction(
    args: DescribeFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFunctionCommandOutput>;
  public describeFunction(
    args: DescribeFunctionCommandInput,
    cb: (err: any, data?: DescribeFunctionCommandOutput) => void
  ): void;
  public describeFunction(
    args: DescribeFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFunctionCommandOutput) => void
  ): void;
  public describeFunction(
    args: DescribeFunctionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeFunctionCommandOutput) => void),
    cb?: (err: any, data?: DescribeFunctionCommandOutput) => void
  ): Promise<DescribeFunctionCommandOutput> | void {
    const command = new DescribeFunctionCommand(args);
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
   * <p>Gets a cache policy, including the following metadata:</p>
   *          <ul>
   *             <li>
   *                <p>The policy's identifier.</p>
   *             </li>
   *             <li>
   *                <p>The date and time when the policy was last modified.</p>
   *             </li>
   *          </ul>
   *          <p>To get a cache policy, you must provide the policy's identifier. If the cache policy
   * 			is attached to a distribution's cache behavior, you can get the policy's identifier
   * 			using <code>ListDistributions</code> or <code>GetDistribution</code>. If the cache
   * 			policy is not attached to a cache behavior, you can get the identifier using
   * 				<code>ListCachePolicies</code>.</p>
   */
  public getCachePolicy(
    args: GetCachePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCachePolicyCommandOutput>;
  public getCachePolicy(
    args: GetCachePolicyCommandInput,
    cb: (err: any, data?: GetCachePolicyCommandOutput) => void
  ): void;
  public getCachePolicy(
    args: GetCachePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCachePolicyCommandOutput) => void
  ): void;
  public getCachePolicy(
    args: GetCachePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCachePolicyCommandOutput) => void),
    cb?: (err: any, data?: GetCachePolicyCommandOutput) => void
  ): Promise<GetCachePolicyCommandOutput> | void {
    const command = new GetCachePolicyCommand(args);
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
   * <p>Gets a cache policy configuration.</p>
   *          <p>To get a cache policy configuration, you must provide the policy's identifier. If the
   * 			cache policy is attached to a distribution's cache behavior, you can get the policy's
   * 			identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the
   * 			cache policy is not attached to a cache behavior, you can get the identifier using
   * 				<code>ListCachePolicies</code>.</p>
   */
  public getCachePolicyConfig(
    args: GetCachePolicyConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCachePolicyConfigCommandOutput>;
  public getCachePolicyConfig(
    args: GetCachePolicyConfigCommandInput,
    cb: (err: any, data?: GetCachePolicyConfigCommandOutput) => void
  ): void;
  public getCachePolicyConfig(
    args: GetCachePolicyConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCachePolicyConfigCommandOutput) => void
  ): void;
  public getCachePolicyConfig(
    args: GetCachePolicyConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCachePolicyConfigCommandOutput) => void),
    cb?: (err: any, data?: GetCachePolicyConfigCommandOutput) => void
  ): Promise<GetCachePolicyConfigCommandOutput> | void {
    const command = new GetCachePolicyConfigCommand(args);
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
   * <p>Get the information about an origin access identity.</p>
   */
  public getCloudFrontOriginAccessIdentity(
    args: GetCloudFrontOriginAccessIdentityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCloudFrontOriginAccessIdentityCommandOutput>;
  public getCloudFrontOriginAccessIdentity(
    args: GetCloudFrontOriginAccessIdentityCommandInput,
    cb: (err: any, data?: GetCloudFrontOriginAccessIdentityCommandOutput) => void
  ): void;
  public getCloudFrontOriginAccessIdentity(
    args: GetCloudFrontOriginAccessIdentityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCloudFrontOriginAccessIdentityCommandOutput) => void
  ): void;
  public getCloudFrontOriginAccessIdentity(
    args: GetCloudFrontOriginAccessIdentityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetCloudFrontOriginAccessIdentityCommandOutput) => void),
    cb?: (err: any, data?: GetCloudFrontOriginAccessIdentityCommandOutput) => void
  ): Promise<GetCloudFrontOriginAccessIdentityCommandOutput> | void {
    const command = new GetCloudFrontOriginAccessIdentityCommand(args);
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
   * <p>Get the configuration information about an origin access identity.</p>
   */
  public getCloudFrontOriginAccessIdentityConfig(
    args: GetCloudFrontOriginAccessIdentityConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCloudFrontOriginAccessIdentityConfigCommandOutput>;
  public getCloudFrontOriginAccessIdentityConfig(
    args: GetCloudFrontOriginAccessIdentityConfigCommandInput,
    cb: (err: any, data?: GetCloudFrontOriginAccessIdentityConfigCommandOutput) => void
  ): void;
  public getCloudFrontOriginAccessIdentityConfig(
    args: GetCloudFrontOriginAccessIdentityConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCloudFrontOriginAccessIdentityConfigCommandOutput) => void
  ): void;
  public getCloudFrontOriginAccessIdentityConfig(
    args: GetCloudFrontOriginAccessIdentityConfigCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetCloudFrontOriginAccessIdentityConfigCommandOutput) => void),
    cb?: (err: any, data?: GetCloudFrontOriginAccessIdentityConfigCommandOutput) => void
  ): Promise<GetCloudFrontOriginAccessIdentityConfigCommandOutput> | void {
    const command = new GetCloudFrontOriginAccessIdentityConfigCommand(args);
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
   * <p>Gets a continuous deployment policy, including metadata (the policy's identifier and
   * 			the date and time when the policy was last modified).</p>
   */
  public getContinuousDeploymentPolicy(
    args: GetContinuousDeploymentPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetContinuousDeploymentPolicyCommandOutput>;
  public getContinuousDeploymentPolicy(
    args: GetContinuousDeploymentPolicyCommandInput,
    cb: (err: any, data?: GetContinuousDeploymentPolicyCommandOutput) => void
  ): void;
  public getContinuousDeploymentPolicy(
    args: GetContinuousDeploymentPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetContinuousDeploymentPolicyCommandOutput) => void
  ): void;
  public getContinuousDeploymentPolicy(
    args: GetContinuousDeploymentPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetContinuousDeploymentPolicyCommandOutput) => void),
    cb?: (err: any, data?: GetContinuousDeploymentPolicyCommandOutput) => void
  ): Promise<GetContinuousDeploymentPolicyCommandOutput> | void {
    const command = new GetContinuousDeploymentPolicyCommand(args);
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
   * <p>Gets configuration information about a continuous deployment policy.</p>
   */
  public getContinuousDeploymentPolicyConfig(
    args: GetContinuousDeploymentPolicyConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetContinuousDeploymentPolicyConfigCommandOutput>;
  public getContinuousDeploymentPolicyConfig(
    args: GetContinuousDeploymentPolicyConfigCommandInput,
    cb: (err: any, data?: GetContinuousDeploymentPolicyConfigCommandOutput) => void
  ): void;
  public getContinuousDeploymentPolicyConfig(
    args: GetContinuousDeploymentPolicyConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetContinuousDeploymentPolicyConfigCommandOutput) => void
  ): void;
  public getContinuousDeploymentPolicyConfig(
    args: GetContinuousDeploymentPolicyConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetContinuousDeploymentPolicyConfigCommandOutput) => void),
    cb?: (err: any, data?: GetContinuousDeploymentPolicyConfigCommandOutput) => void
  ): Promise<GetContinuousDeploymentPolicyConfigCommandOutput> | void {
    const command = new GetContinuousDeploymentPolicyConfigCommand(args);
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
   * <p>Get the information about a distribution.</p>
   */
  public getDistribution(
    args: GetDistributionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDistributionCommandOutput>;
  public getDistribution(
    args: GetDistributionCommandInput,
    cb: (err: any, data?: GetDistributionCommandOutput) => void
  ): void;
  public getDistribution(
    args: GetDistributionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDistributionCommandOutput) => void
  ): void;
  public getDistribution(
    args: GetDistributionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDistributionCommandOutput) => void),
    cb?: (err: any, data?: GetDistributionCommandOutput) => void
  ): Promise<GetDistributionCommandOutput> | void {
    const command = new GetDistributionCommand(args);
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
   * <p>Get the configuration information about a distribution.</p>
   */
  public getDistributionConfig(
    args: GetDistributionConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDistributionConfigCommandOutput>;
  public getDistributionConfig(
    args: GetDistributionConfigCommandInput,
    cb: (err: any, data?: GetDistributionConfigCommandOutput) => void
  ): void;
  public getDistributionConfig(
    args: GetDistributionConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDistributionConfigCommandOutput) => void
  ): void;
  public getDistributionConfig(
    args: GetDistributionConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDistributionConfigCommandOutput) => void),
    cb?: (err: any, data?: GetDistributionConfigCommandOutput) => void
  ): Promise<GetDistributionConfigCommandOutput> | void {
    const command = new GetDistributionConfigCommand(args);
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
   * <p>Get the field-level encryption configuration information.</p>
   */
  public getFieldLevelEncryption(
    args: GetFieldLevelEncryptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFieldLevelEncryptionCommandOutput>;
  public getFieldLevelEncryption(
    args: GetFieldLevelEncryptionCommandInput,
    cb: (err: any, data?: GetFieldLevelEncryptionCommandOutput) => void
  ): void;
  public getFieldLevelEncryption(
    args: GetFieldLevelEncryptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFieldLevelEncryptionCommandOutput) => void
  ): void;
  public getFieldLevelEncryption(
    args: GetFieldLevelEncryptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetFieldLevelEncryptionCommandOutput) => void),
    cb?: (err: any, data?: GetFieldLevelEncryptionCommandOutput) => void
  ): Promise<GetFieldLevelEncryptionCommandOutput> | void {
    const command = new GetFieldLevelEncryptionCommand(args);
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
   * <p>Get the field-level encryption configuration information.</p>
   */
  public getFieldLevelEncryptionConfig(
    args: GetFieldLevelEncryptionConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFieldLevelEncryptionConfigCommandOutput>;
  public getFieldLevelEncryptionConfig(
    args: GetFieldLevelEncryptionConfigCommandInput,
    cb: (err: any, data?: GetFieldLevelEncryptionConfigCommandOutput) => void
  ): void;
  public getFieldLevelEncryptionConfig(
    args: GetFieldLevelEncryptionConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFieldLevelEncryptionConfigCommandOutput) => void
  ): void;
  public getFieldLevelEncryptionConfig(
    args: GetFieldLevelEncryptionConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetFieldLevelEncryptionConfigCommandOutput) => void),
    cb?: (err: any, data?: GetFieldLevelEncryptionConfigCommandOutput) => void
  ): Promise<GetFieldLevelEncryptionConfigCommandOutput> | void {
    const command = new GetFieldLevelEncryptionConfigCommand(args);
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
   * <p>Get the field-level encryption profile information.</p>
   */
  public getFieldLevelEncryptionProfile(
    args: GetFieldLevelEncryptionProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFieldLevelEncryptionProfileCommandOutput>;
  public getFieldLevelEncryptionProfile(
    args: GetFieldLevelEncryptionProfileCommandInput,
    cb: (err: any, data?: GetFieldLevelEncryptionProfileCommandOutput) => void
  ): void;
  public getFieldLevelEncryptionProfile(
    args: GetFieldLevelEncryptionProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFieldLevelEncryptionProfileCommandOutput) => void
  ): void;
  public getFieldLevelEncryptionProfile(
    args: GetFieldLevelEncryptionProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetFieldLevelEncryptionProfileCommandOutput) => void),
    cb?: (err: any, data?: GetFieldLevelEncryptionProfileCommandOutput) => void
  ): Promise<GetFieldLevelEncryptionProfileCommandOutput> | void {
    const command = new GetFieldLevelEncryptionProfileCommand(args);
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
   * <p>Get the field-level encryption profile configuration information.</p>
   */
  public getFieldLevelEncryptionProfileConfig(
    args: GetFieldLevelEncryptionProfileConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFieldLevelEncryptionProfileConfigCommandOutput>;
  public getFieldLevelEncryptionProfileConfig(
    args: GetFieldLevelEncryptionProfileConfigCommandInput,
    cb: (err: any, data?: GetFieldLevelEncryptionProfileConfigCommandOutput) => void
  ): void;
  public getFieldLevelEncryptionProfileConfig(
    args: GetFieldLevelEncryptionProfileConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFieldLevelEncryptionProfileConfigCommandOutput) => void
  ): void;
  public getFieldLevelEncryptionProfileConfig(
    args: GetFieldLevelEncryptionProfileConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetFieldLevelEncryptionProfileConfigCommandOutput) => void),
    cb?: (err: any, data?: GetFieldLevelEncryptionProfileConfigCommandOutput) => void
  ): Promise<GetFieldLevelEncryptionProfileConfigCommandOutput> | void {
    const command = new GetFieldLevelEncryptionProfileConfigCommand(args);
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
   * <p>Gets the code of a CloudFront function. To get configuration information and metadata about
   * 			a function, use <code>DescribeFunction</code>.</p>
   *          <p>To get a function's code, you must provide the function's name and stage. To get these
   * 			values, you can use <code>ListFunctions</code>.</p>
   */
  public getFunction(args: GetFunctionCommandInput, options?: __HttpHandlerOptions): Promise<GetFunctionCommandOutput>;
  public getFunction(args: GetFunctionCommandInput, cb: (err: any, data?: GetFunctionCommandOutput) => void): void;
  public getFunction(
    args: GetFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFunctionCommandOutput) => void
  ): void;
  public getFunction(
    args: GetFunctionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetFunctionCommandOutput) => void),
    cb?: (err: any, data?: GetFunctionCommandOutput) => void
  ): Promise<GetFunctionCommandOutput> | void {
    const command = new GetFunctionCommand(args);
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
   * <p>Get the information about an invalidation.</p>
   */
  public getInvalidation(
    args: GetInvalidationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInvalidationCommandOutput>;
  public getInvalidation(
    args: GetInvalidationCommandInput,
    cb: (err: any, data?: GetInvalidationCommandOutput) => void
  ): void;
  public getInvalidation(
    args: GetInvalidationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInvalidationCommandOutput) => void
  ): void;
  public getInvalidation(
    args: GetInvalidationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetInvalidationCommandOutput) => void),
    cb?: (err: any, data?: GetInvalidationCommandOutput) => void
  ): Promise<GetInvalidationCommandOutput> | void {
    const command = new GetInvalidationCommand(args);
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
   * <p>Gets a key group, including the date and time when the key group was last
   * 			modified.</p>
   *          <p>To get a key group, you must provide the key group's identifier. If the key group is
   * 			referenced in a distribution's cache behavior, you can get the key group's identifier
   * 			using <code>ListDistributions</code> or <code>GetDistribution</code>. If the key group
   * 			is not referenced in a cache behavior, you can get the identifier using
   * 				<code>ListKeyGroups</code>.</p>
   */
  public getKeyGroup(args: GetKeyGroupCommandInput, options?: __HttpHandlerOptions): Promise<GetKeyGroupCommandOutput>;
  public getKeyGroup(args: GetKeyGroupCommandInput, cb: (err: any, data?: GetKeyGroupCommandOutput) => void): void;
  public getKeyGroup(
    args: GetKeyGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetKeyGroupCommandOutput) => void
  ): void;
  public getKeyGroup(
    args: GetKeyGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetKeyGroupCommandOutput) => void),
    cb?: (err: any, data?: GetKeyGroupCommandOutput) => void
  ): Promise<GetKeyGroupCommandOutput> | void {
    const command = new GetKeyGroupCommand(args);
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
   * <p>Gets a key group configuration.</p>
   *          <p>To get a key group configuration, you must provide the key group's identifier. If the
   * 			key group is referenced in a distribution's cache behavior, you can get the key group's
   * 			identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the
   * 			key group is not referenced in a cache behavior, you can get the identifier using
   * 				<code>ListKeyGroups</code>.</p>
   */
  public getKeyGroupConfig(
    args: GetKeyGroupConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetKeyGroupConfigCommandOutput>;
  public getKeyGroupConfig(
    args: GetKeyGroupConfigCommandInput,
    cb: (err: any, data?: GetKeyGroupConfigCommandOutput) => void
  ): void;
  public getKeyGroupConfig(
    args: GetKeyGroupConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetKeyGroupConfigCommandOutput) => void
  ): void;
  public getKeyGroupConfig(
    args: GetKeyGroupConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetKeyGroupConfigCommandOutput) => void),
    cb?: (err: any, data?: GetKeyGroupConfigCommandOutput) => void
  ): Promise<GetKeyGroupConfigCommandOutput> | void {
    const command = new GetKeyGroupConfigCommand(args);
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
   * <p>Gets information about whether additional CloudWatch metrics are enabled for the
   * 			specified CloudFront distribution.</p>
   */
  public getMonitoringSubscription(
    args: GetMonitoringSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMonitoringSubscriptionCommandOutput>;
  public getMonitoringSubscription(
    args: GetMonitoringSubscriptionCommandInput,
    cb: (err: any, data?: GetMonitoringSubscriptionCommandOutput) => void
  ): void;
  public getMonitoringSubscription(
    args: GetMonitoringSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMonitoringSubscriptionCommandOutput) => void
  ): void;
  public getMonitoringSubscription(
    args: GetMonitoringSubscriptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMonitoringSubscriptionCommandOutput) => void),
    cb?: (err: any, data?: GetMonitoringSubscriptionCommandOutput) => void
  ): Promise<GetMonitoringSubscriptionCommandOutput> | void {
    const command = new GetMonitoringSubscriptionCommand(args);
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
   * <p>Gets a CloudFront origin access control, including its unique identifier.</p>
   */
  public getOriginAccessControl(
    args: GetOriginAccessControlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOriginAccessControlCommandOutput>;
  public getOriginAccessControl(
    args: GetOriginAccessControlCommandInput,
    cb: (err: any, data?: GetOriginAccessControlCommandOutput) => void
  ): void;
  public getOriginAccessControl(
    args: GetOriginAccessControlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOriginAccessControlCommandOutput) => void
  ): void;
  public getOriginAccessControl(
    args: GetOriginAccessControlCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetOriginAccessControlCommandOutput) => void),
    cb?: (err: any, data?: GetOriginAccessControlCommandOutput) => void
  ): Promise<GetOriginAccessControlCommandOutput> | void {
    const command = new GetOriginAccessControlCommand(args);
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
   * <p>Gets a CloudFront origin access control configuration.</p>
   */
  public getOriginAccessControlConfig(
    args: GetOriginAccessControlConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOriginAccessControlConfigCommandOutput>;
  public getOriginAccessControlConfig(
    args: GetOriginAccessControlConfigCommandInput,
    cb: (err: any, data?: GetOriginAccessControlConfigCommandOutput) => void
  ): void;
  public getOriginAccessControlConfig(
    args: GetOriginAccessControlConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOriginAccessControlConfigCommandOutput) => void
  ): void;
  public getOriginAccessControlConfig(
    args: GetOriginAccessControlConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetOriginAccessControlConfigCommandOutput) => void),
    cb?: (err: any, data?: GetOriginAccessControlConfigCommandOutput) => void
  ): Promise<GetOriginAccessControlConfigCommandOutput> | void {
    const command = new GetOriginAccessControlConfigCommand(args);
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
   * <p>Gets an origin request policy, including the following metadata:</p>
   *          <ul>
   *             <li>
   *                <p>The policy's identifier.</p>
   *             </li>
   *             <li>
   *                <p>The date and time when the policy was last modified.</p>
   *             </li>
   *          </ul>
   *          <p>To get an origin request policy, you must provide the policy's identifier. If the
   * 			origin request policy is attached to a distribution's cache behavior, you can get the
   * 			policy's identifier using <code>ListDistributions</code> or
   * 			<code>GetDistribution</code>. If the origin request policy is not attached to a cache
   * 			behavior, you can get the identifier using
   * 			<code>ListOriginRequestPolicies</code>.</p>
   */
  public getOriginRequestPolicy(
    args: GetOriginRequestPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOriginRequestPolicyCommandOutput>;
  public getOriginRequestPolicy(
    args: GetOriginRequestPolicyCommandInput,
    cb: (err: any, data?: GetOriginRequestPolicyCommandOutput) => void
  ): void;
  public getOriginRequestPolicy(
    args: GetOriginRequestPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOriginRequestPolicyCommandOutput) => void
  ): void;
  public getOriginRequestPolicy(
    args: GetOriginRequestPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetOriginRequestPolicyCommandOutput) => void),
    cb?: (err: any, data?: GetOriginRequestPolicyCommandOutput) => void
  ): Promise<GetOriginRequestPolicyCommandOutput> | void {
    const command = new GetOriginRequestPolicyCommand(args);
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
   * <p>Gets an origin request policy configuration.</p>
   *          <p>To get an origin request policy configuration, you must provide the policy's
   * 			identifier. If the origin request policy is attached to a distribution's cache behavior,
   * 			you can get the policy's identifier using <code>ListDistributions</code> or
   * 				<code>GetDistribution</code>. If the origin request policy is not attached to a
   * 			cache behavior, you can get the identifier using
   * 			<code>ListOriginRequestPolicies</code>.</p>
   */
  public getOriginRequestPolicyConfig(
    args: GetOriginRequestPolicyConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOriginRequestPolicyConfigCommandOutput>;
  public getOriginRequestPolicyConfig(
    args: GetOriginRequestPolicyConfigCommandInput,
    cb: (err: any, data?: GetOriginRequestPolicyConfigCommandOutput) => void
  ): void;
  public getOriginRequestPolicyConfig(
    args: GetOriginRequestPolicyConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOriginRequestPolicyConfigCommandOutput) => void
  ): void;
  public getOriginRequestPolicyConfig(
    args: GetOriginRequestPolicyConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetOriginRequestPolicyConfigCommandOutput) => void),
    cb?: (err: any, data?: GetOriginRequestPolicyConfigCommandOutput) => void
  ): Promise<GetOriginRequestPolicyConfigCommandOutput> | void {
    const command = new GetOriginRequestPolicyConfigCommand(args);
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
   * <p>Gets a public key.</p>
   */
  public getPublicKey(
    args: GetPublicKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPublicKeyCommandOutput>;
  public getPublicKey(args: GetPublicKeyCommandInput, cb: (err: any, data?: GetPublicKeyCommandOutput) => void): void;
  public getPublicKey(
    args: GetPublicKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPublicKeyCommandOutput) => void
  ): void;
  public getPublicKey(
    args: GetPublicKeyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPublicKeyCommandOutput) => void),
    cb?: (err: any, data?: GetPublicKeyCommandOutput) => void
  ): Promise<GetPublicKeyCommandOutput> | void {
    const command = new GetPublicKeyCommand(args);
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
   * <p>Gets a public key configuration.</p>
   */
  public getPublicKeyConfig(
    args: GetPublicKeyConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPublicKeyConfigCommandOutput>;
  public getPublicKeyConfig(
    args: GetPublicKeyConfigCommandInput,
    cb: (err: any, data?: GetPublicKeyConfigCommandOutput) => void
  ): void;
  public getPublicKeyConfig(
    args: GetPublicKeyConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPublicKeyConfigCommandOutput) => void
  ): void;
  public getPublicKeyConfig(
    args: GetPublicKeyConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPublicKeyConfigCommandOutput) => void),
    cb?: (err: any, data?: GetPublicKeyConfigCommandOutput) => void
  ): Promise<GetPublicKeyConfigCommandOutput> | void {
    const command = new GetPublicKeyConfigCommand(args);
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
   * <p>Gets a real-time log configuration.</p>
   *          <p>To get a real-time log configuration, you can provide the configuration's name or its
   * 			Amazon Resource Name (ARN). You must provide at least one. If you provide both, CloudFront
   * 			uses the name to identify the real-time log configuration to get.</p>
   */
  public getRealtimeLogConfig(
    args: GetRealtimeLogConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRealtimeLogConfigCommandOutput>;
  public getRealtimeLogConfig(
    args: GetRealtimeLogConfigCommandInput,
    cb: (err: any, data?: GetRealtimeLogConfigCommandOutput) => void
  ): void;
  public getRealtimeLogConfig(
    args: GetRealtimeLogConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRealtimeLogConfigCommandOutput) => void
  ): void;
  public getRealtimeLogConfig(
    args: GetRealtimeLogConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRealtimeLogConfigCommandOutput) => void),
    cb?: (err: any, data?: GetRealtimeLogConfigCommandOutput) => void
  ): Promise<GetRealtimeLogConfigCommandOutput> | void {
    const command = new GetRealtimeLogConfigCommand(args);
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
   * <p>Gets a response headers policy, including metadata (the policy's identifier and the
   * 			date and time when the policy was last modified).</p>
   *          <p>To get a response headers policy, you must provide the policy's identifier. If the
   * 			response headers policy is attached to a distribution's cache behavior, you can get the
   * 			policy's identifier using <code>ListDistributions</code> or
   * 			<code>GetDistribution</code>. If the response headers policy is not attached to a cache
   * 			behavior, you can get the identifier using
   * 			<code>ListResponseHeadersPolicies</code>.</p>
   */
  public getResponseHeadersPolicy(
    args: GetResponseHeadersPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResponseHeadersPolicyCommandOutput>;
  public getResponseHeadersPolicy(
    args: GetResponseHeadersPolicyCommandInput,
    cb: (err: any, data?: GetResponseHeadersPolicyCommandOutput) => void
  ): void;
  public getResponseHeadersPolicy(
    args: GetResponseHeadersPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResponseHeadersPolicyCommandOutput) => void
  ): void;
  public getResponseHeadersPolicy(
    args: GetResponseHeadersPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetResponseHeadersPolicyCommandOutput) => void),
    cb?: (err: any, data?: GetResponseHeadersPolicyCommandOutput) => void
  ): Promise<GetResponseHeadersPolicyCommandOutput> | void {
    const command = new GetResponseHeadersPolicyCommand(args);
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
   * <p>Gets a response headers policy configuration.</p>
   *          <p>To get a response headers policy configuration, you must provide the policy's
   * 			identifier. If the response headers policy is attached to a distribution's cache
   * 			behavior, you can get the policy's identifier using <code>ListDistributions</code> or
   * 				<code>GetDistribution</code>. If the response headers policy is not attached to a
   * 			cache behavior, you can get the identifier using
   * 				<code>ListResponseHeadersPolicies</code>.</p>
   */
  public getResponseHeadersPolicyConfig(
    args: GetResponseHeadersPolicyConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResponseHeadersPolicyConfigCommandOutput>;
  public getResponseHeadersPolicyConfig(
    args: GetResponseHeadersPolicyConfigCommandInput,
    cb: (err: any, data?: GetResponseHeadersPolicyConfigCommandOutput) => void
  ): void;
  public getResponseHeadersPolicyConfig(
    args: GetResponseHeadersPolicyConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResponseHeadersPolicyConfigCommandOutput) => void
  ): void;
  public getResponseHeadersPolicyConfig(
    args: GetResponseHeadersPolicyConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetResponseHeadersPolicyConfigCommandOutput) => void),
    cb?: (err: any, data?: GetResponseHeadersPolicyConfigCommandOutput) => void
  ): Promise<GetResponseHeadersPolicyConfigCommandOutput> | void {
    const command = new GetResponseHeadersPolicyConfigCommand(args);
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
   * <p>Gets information about a specified RTMP distribution, including the distribution
   * 			configuration.</p>
   */
  public getStreamingDistribution(
    args: GetStreamingDistributionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetStreamingDistributionCommandOutput>;
  public getStreamingDistribution(
    args: GetStreamingDistributionCommandInput,
    cb: (err: any, data?: GetStreamingDistributionCommandOutput) => void
  ): void;
  public getStreamingDistribution(
    args: GetStreamingDistributionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStreamingDistributionCommandOutput) => void
  ): void;
  public getStreamingDistribution(
    args: GetStreamingDistributionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetStreamingDistributionCommandOutput) => void),
    cb?: (err: any, data?: GetStreamingDistributionCommandOutput) => void
  ): Promise<GetStreamingDistributionCommandOutput> | void {
    const command = new GetStreamingDistributionCommand(args);
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
   * <p>Get the configuration information about a streaming distribution.</p>
   */
  public getStreamingDistributionConfig(
    args: GetStreamingDistributionConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetStreamingDistributionConfigCommandOutput>;
  public getStreamingDistributionConfig(
    args: GetStreamingDistributionConfigCommandInput,
    cb: (err: any, data?: GetStreamingDistributionConfigCommandOutput) => void
  ): void;
  public getStreamingDistributionConfig(
    args: GetStreamingDistributionConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStreamingDistributionConfigCommandOutput) => void
  ): void;
  public getStreamingDistributionConfig(
    args: GetStreamingDistributionConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetStreamingDistributionConfigCommandOutput) => void),
    cb?: (err: any, data?: GetStreamingDistributionConfigCommandOutput) => void
  ): Promise<GetStreamingDistributionConfigCommandOutput> | void {
    const command = new GetStreamingDistributionConfigCommand(args);
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
   * <p>Gets a list of cache policies.</p>
   *          <p>You can optionally apply a filter to return only the managed policies created by
   * 			Amazon Web Services, or only the custom policies created in your Amazon Web Services account.</p>
   *          <p>You can optionally specify the maximum number of items to receive in the response. If
   * 			the total number of items in the list exceeds the maximum that you specify, or the
   * 			default maximum, the response is paginated. To get the next page of items, send a
   * 			subsequent request that specifies the <code>NextMarker</code> value from the current
   * 			response as the <code>Marker</code> value in the subsequent request.</p>
   */
  public listCachePolicies(
    args: ListCachePoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCachePoliciesCommandOutput>;
  public listCachePolicies(
    args: ListCachePoliciesCommandInput,
    cb: (err: any, data?: ListCachePoliciesCommandOutput) => void
  ): void;
  public listCachePolicies(
    args: ListCachePoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCachePoliciesCommandOutput) => void
  ): void;
  public listCachePolicies(
    args: ListCachePoliciesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListCachePoliciesCommandOutput) => void),
    cb?: (err: any, data?: ListCachePoliciesCommandOutput) => void
  ): Promise<ListCachePoliciesCommandOutput> | void {
    const command = new ListCachePoliciesCommand(args);
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
   * <p>Lists origin access identities.</p>
   */
  public listCloudFrontOriginAccessIdentities(
    args: ListCloudFrontOriginAccessIdentitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCloudFrontOriginAccessIdentitiesCommandOutput>;
  public listCloudFrontOriginAccessIdentities(
    args: ListCloudFrontOriginAccessIdentitiesCommandInput,
    cb: (err: any, data?: ListCloudFrontOriginAccessIdentitiesCommandOutput) => void
  ): void;
  public listCloudFrontOriginAccessIdentities(
    args: ListCloudFrontOriginAccessIdentitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCloudFrontOriginAccessIdentitiesCommandOutput) => void
  ): void;
  public listCloudFrontOriginAccessIdentities(
    args: ListCloudFrontOriginAccessIdentitiesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListCloudFrontOriginAccessIdentitiesCommandOutput) => void),
    cb?: (err: any, data?: ListCloudFrontOriginAccessIdentitiesCommandOutput) => void
  ): Promise<ListCloudFrontOriginAccessIdentitiesCommandOutput> | void {
    const command = new ListCloudFrontOriginAccessIdentitiesCommand(args);
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
   * <p>Gets a list of aliases (also called CNAMEs or alternate domain names) that conflict or
   * 			overlap with the provided alias, and the associated CloudFront distributions and Amazon Web Services
   * 			accounts for each conflicting alias. In the returned list, the distribution and account
   * 			IDs are partially hidden, which allows you to identify the distributions and accounts
   * 			that you own, but helps to protect the information of ones that you don't own.</p>
   *          <p>Use this operation to find aliases that are in use in CloudFront that conflict or overlap
   * 			with the provided alias. For example, if you provide <code>www.example.com</code> as
   * 			input, the returned list can include <code>www.example.com</code> and the overlapping
   * 			wildcard alternate domain name (<code>*.example.com</code>), if they exist. If you
   * 			provide <code>*.example.com</code> as input, the returned list can include
   * 				<code>*.example.com</code> and any alternate domain names covered by that wildcard
   * 			(for example, <code>www.example.com</code>, <code>test.example.com</code>,
   * 				<code>dev.example.com</code>, and so on), if they exist.</p>
   *          <p>To list conflicting aliases, you provide the alias to search and the ID of a
   * 			distribution in your account that has an attached SSL/TLS certificate that includes the
   * 			provided alias. For more information, including how to set up the distribution and
   * 			certificate, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/CNAMEs.html#alternate-domain-names-move">Moving an alternate domain name to a different
   * 				distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   *          <p>You can optionally specify the maximum number of items to receive in the response. If
   * 			the total number of items in the list exceeds the maximum that you specify, or the
   * 			default maximum, the response is paginated. To get the next page of items, send a
   * 			subsequent request that specifies the <code>NextMarker</code> value from the current
   * 			response as the <code>Marker</code> value in the subsequent request.</p>
   */
  public listConflictingAliases(
    args: ListConflictingAliasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConflictingAliasesCommandOutput>;
  public listConflictingAliases(
    args: ListConflictingAliasesCommandInput,
    cb: (err: any, data?: ListConflictingAliasesCommandOutput) => void
  ): void;
  public listConflictingAliases(
    args: ListConflictingAliasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConflictingAliasesCommandOutput) => void
  ): void;
  public listConflictingAliases(
    args: ListConflictingAliasesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListConflictingAliasesCommandOutput) => void),
    cb?: (err: any, data?: ListConflictingAliasesCommandOutput) => void
  ): Promise<ListConflictingAliasesCommandOutput> | void {
    const command = new ListConflictingAliasesCommand(args);
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
   * <p>Gets a list of the continuous deployment policies in your Amazon Web Services account.</p>
   *          <p>You can optionally specify the maximum number of items to receive in the response. If
   * 			the total number of items in the list exceeds the maximum that you specify, or the
   * 			default maximum, the response is paginated. To get the next page of items, send a
   * 			subsequent request that specifies the <code>NextMarker</code> value from the current
   * 			response as the <code>Marker</code> value in the subsequent request.</p>
   */
  public listContinuousDeploymentPolicies(
    args: ListContinuousDeploymentPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListContinuousDeploymentPoliciesCommandOutput>;
  public listContinuousDeploymentPolicies(
    args: ListContinuousDeploymentPoliciesCommandInput,
    cb: (err: any, data?: ListContinuousDeploymentPoliciesCommandOutput) => void
  ): void;
  public listContinuousDeploymentPolicies(
    args: ListContinuousDeploymentPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListContinuousDeploymentPoliciesCommandOutput) => void
  ): void;
  public listContinuousDeploymentPolicies(
    args: ListContinuousDeploymentPoliciesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListContinuousDeploymentPoliciesCommandOutput) => void),
    cb?: (err: any, data?: ListContinuousDeploymentPoliciesCommandOutput) => void
  ): Promise<ListContinuousDeploymentPoliciesCommandOutput> | void {
    const command = new ListContinuousDeploymentPoliciesCommand(args);
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
   * <p>List CloudFront distributions.</p>
   */
  public listDistributions(
    args: ListDistributionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDistributionsCommandOutput>;
  public listDistributions(
    args: ListDistributionsCommandInput,
    cb: (err: any, data?: ListDistributionsCommandOutput) => void
  ): void;
  public listDistributions(
    args: ListDistributionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDistributionsCommandOutput) => void
  ): void;
  public listDistributions(
    args: ListDistributionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDistributionsCommandOutput) => void),
    cb?: (err: any, data?: ListDistributionsCommandOutput) => void
  ): Promise<ListDistributionsCommandOutput> | void {
    const command = new ListDistributionsCommand(args);
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
   * <p>Gets a list of distribution IDs for distributions that have a cache behavior that's
   * 			associated with the specified cache policy.</p>
   *          <p>You can optionally specify the maximum number of items to receive in the response. If
   * 			the total number of items in the list exceeds the maximum that you specify, or the
   * 			default maximum, the response is paginated. To get the next page of items, send a
   * 			subsequent request that specifies the <code>NextMarker</code> value from the current
   * 			response as the <code>Marker</code> value in the subsequent request.</p>
   */
  public listDistributionsByCachePolicyId(
    args: ListDistributionsByCachePolicyIdCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDistributionsByCachePolicyIdCommandOutput>;
  public listDistributionsByCachePolicyId(
    args: ListDistributionsByCachePolicyIdCommandInput,
    cb: (err: any, data?: ListDistributionsByCachePolicyIdCommandOutput) => void
  ): void;
  public listDistributionsByCachePolicyId(
    args: ListDistributionsByCachePolicyIdCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDistributionsByCachePolicyIdCommandOutput) => void
  ): void;
  public listDistributionsByCachePolicyId(
    args: ListDistributionsByCachePolicyIdCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDistributionsByCachePolicyIdCommandOutput) => void),
    cb?: (err: any, data?: ListDistributionsByCachePolicyIdCommandOutput) => void
  ): Promise<ListDistributionsByCachePolicyIdCommandOutput> | void {
    const command = new ListDistributionsByCachePolicyIdCommand(args);
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
   * <p>Gets a list of distribution IDs for distributions that have a cache behavior that
   * 			references the specified key group.</p>
   *          <p>You can optionally specify the maximum number of items to receive in the response. If
   * 			the total number of items in the list exceeds the maximum that you specify, or the
   * 			default maximum, the response is paginated. To get the next page of items, send a
   * 			subsequent request that specifies the <code>NextMarker</code> value from the current
   * 			response as the <code>Marker</code> value in the subsequent request.</p>
   */
  public listDistributionsByKeyGroup(
    args: ListDistributionsByKeyGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDistributionsByKeyGroupCommandOutput>;
  public listDistributionsByKeyGroup(
    args: ListDistributionsByKeyGroupCommandInput,
    cb: (err: any, data?: ListDistributionsByKeyGroupCommandOutput) => void
  ): void;
  public listDistributionsByKeyGroup(
    args: ListDistributionsByKeyGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDistributionsByKeyGroupCommandOutput) => void
  ): void;
  public listDistributionsByKeyGroup(
    args: ListDistributionsByKeyGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDistributionsByKeyGroupCommandOutput) => void),
    cb?: (err: any, data?: ListDistributionsByKeyGroupCommandOutput) => void
  ): Promise<ListDistributionsByKeyGroupCommandOutput> | void {
    const command = new ListDistributionsByKeyGroupCommand(args);
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
   * <p>Gets a list of distribution IDs for distributions that have a cache behavior that's
   * 			associated with the specified origin request policy.</p>
   *          <p>You can optionally specify the maximum number of items to receive in the response. If
   * 			the total number of items in the list exceeds the maximum that you specify, or the
   * 			default maximum, the response is paginated. To get the next page of items, send a
   * 			subsequent request that specifies the <code>NextMarker</code> value from the current
   * 			response as the <code>Marker</code> value in the subsequent request.</p>
   */
  public listDistributionsByOriginRequestPolicyId(
    args: ListDistributionsByOriginRequestPolicyIdCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDistributionsByOriginRequestPolicyIdCommandOutput>;
  public listDistributionsByOriginRequestPolicyId(
    args: ListDistributionsByOriginRequestPolicyIdCommandInput,
    cb: (err: any, data?: ListDistributionsByOriginRequestPolicyIdCommandOutput) => void
  ): void;
  public listDistributionsByOriginRequestPolicyId(
    args: ListDistributionsByOriginRequestPolicyIdCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDistributionsByOriginRequestPolicyIdCommandOutput) => void
  ): void;
  public listDistributionsByOriginRequestPolicyId(
    args: ListDistributionsByOriginRequestPolicyIdCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListDistributionsByOriginRequestPolicyIdCommandOutput) => void),
    cb?: (err: any, data?: ListDistributionsByOriginRequestPolicyIdCommandOutput) => void
  ): Promise<ListDistributionsByOriginRequestPolicyIdCommandOutput> | void {
    const command = new ListDistributionsByOriginRequestPolicyIdCommand(args);
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
   * <p>Gets a list of distributions that have a cache behavior that's associated with the
   * 			specified real-time log configuration.</p>
   *          <p>You can specify the real-time log configuration by its name or its Amazon Resource
   * 			Name (ARN). You must provide at least one. If you provide both, CloudFront uses the name to
   * 			identify the real-time log configuration to list distributions for.</p>
   *          <p>You can optionally specify the maximum number of items to receive in the response. If
   * 			the total number of items in the list exceeds the maximum that you specify, or the
   * 			default maximum, the response is paginated. To get the next page of items, send a
   * 			subsequent request that specifies the <code>NextMarker</code> value from the current
   * 			response as the <code>Marker</code> value in the subsequent request.</p>
   */
  public listDistributionsByRealtimeLogConfig(
    args: ListDistributionsByRealtimeLogConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDistributionsByRealtimeLogConfigCommandOutput>;
  public listDistributionsByRealtimeLogConfig(
    args: ListDistributionsByRealtimeLogConfigCommandInput,
    cb: (err: any, data?: ListDistributionsByRealtimeLogConfigCommandOutput) => void
  ): void;
  public listDistributionsByRealtimeLogConfig(
    args: ListDistributionsByRealtimeLogConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDistributionsByRealtimeLogConfigCommandOutput) => void
  ): void;
  public listDistributionsByRealtimeLogConfig(
    args: ListDistributionsByRealtimeLogConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDistributionsByRealtimeLogConfigCommandOutput) => void),
    cb?: (err: any, data?: ListDistributionsByRealtimeLogConfigCommandOutput) => void
  ): Promise<ListDistributionsByRealtimeLogConfigCommandOutput> | void {
    const command = new ListDistributionsByRealtimeLogConfigCommand(args);
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
   * <p>Gets a list of distribution IDs for distributions that have a cache behavior that's
   * 			associated with the specified response headers policy.</p>
   *          <p>You can optionally specify the maximum number of items to receive in the response. If
   * 			the total number of items in the list exceeds the maximum that you specify, or the
   * 			default maximum, the response is paginated. To get the next page of items, send a
   * 			subsequent request that specifies the <code>NextMarker</code> value from the current
   * 			response as the <code>Marker</code> value in the subsequent request.</p>
   */
  public listDistributionsByResponseHeadersPolicyId(
    args: ListDistributionsByResponseHeadersPolicyIdCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDistributionsByResponseHeadersPolicyIdCommandOutput>;
  public listDistributionsByResponseHeadersPolicyId(
    args: ListDistributionsByResponseHeadersPolicyIdCommandInput,
    cb: (err: any, data?: ListDistributionsByResponseHeadersPolicyIdCommandOutput) => void
  ): void;
  public listDistributionsByResponseHeadersPolicyId(
    args: ListDistributionsByResponseHeadersPolicyIdCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDistributionsByResponseHeadersPolicyIdCommandOutput) => void
  ): void;
  public listDistributionsByResponseHeadersPolicyId(
    args: ListDistributionsByResponseHeadersPolicyIdCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListDistributionsByResponseHeadersPolicyIdCommandOutput) => void),
    cb?: (err: any, data?: ListDistributionsByResponseHeadersPolicyIdCommandOutput) => void
  ): Promise<ListDistributionsByResponseHeadersPolicyIdCommandOutput> | void {
    const command = new ListDistributionsByResponseHeadersPolicyIdCommand(args);
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
   * <p>List the distributions that are associated with a specified WAF web ACL.</p>
   */
  public listDistributionsByWebACLId(
    args: ListDistributionsByWebACLIdCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDistributionsByWebACLIdCommandOutput>;
  public listDistributionsByWebACLId(
    args: ListDistributionsByWebACLIdCommandInput,
    cb: (err: any, data?: ListDistributionsByWebACLIdCommandOutput) => void
  ): void;
  public listDistributionsByWebACLId(
    args: ListDistributionsByWebACLIdCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDistributionsByWebACLIdCommandOutput) => void
  ): void;
  public listDistributionsByWebACLId(
    args: ListDistributionsByWebACLIdCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDistributionsByWebACLIdCommandOutput) => void),
    cb?: (err: any, data?: ListDistributionsByWebACLIdCommandOutput) => void
  ): Promise<ListDistributionsByWebACLIdCommandOutput> | void {
    const command = new ListDistributionsByWebACLIdCommand(args);
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
   * <p>List all field-level encryption configurations that have been created in CloudFront for this
   * 			account.</p>
   */
  public listFieldLevelEncryptionConfigs(
    args: ListFieldLevelEncryptionConfigsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFieldLevelEncryptionConfigsCommandOutput>;
  public listFieldLevelEncryptionConfigs(
    args: ListFieldLevelEncryptionConfigsCommandInput,
    cb: (err: any, data?: ListFieldLevelEncryptionConfigsCommandOutput) => void
  ): void;
  public listFieldLevelEncryptionConfigs(
    args: ListFieldLevelEncryptionConfigsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFieldLevelEncryptionConfigsCommandOutput) => void
  ): void;
  public listFieldLevelEncryptionConfigs(
    args: ListFieldLevelEncryptionConfigsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListFieldLevelEncryptionConfigsCommandOutput) => void),
    cb?: (err: any, data?: ListFieldLevelEncryptionConfigsCommandOutput) => void
  ): Promise<ListFieldLevelEncryptionConfigsCommandOutput> | void {
    const command = new ListFieldLevelEncryptionConfigsCommand(args);
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
   * <p>Request a list of field-level encryption profiles that have been created in CloudFront for
   * 			this account.</p>
   */
  public listFieldLevelEncryptionProfiles(
    args: ListFieldLevelEncryptionProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFieldLevelEncryptionProfilesCommandOutput>;
  public listFieldLevelEncryptionProfiles(
    args: ListFieldLevelEncryptionProfilesCommandInput,
    cb: (err: any, data?: ListFieldLevelEncryptionProfilesCommandOutput) => void
  ): void;
  public listFieldLevelEncryptionProfiles(
    args: ListFieldLevelEncryptionProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFieldLevelEncryptionProfilesCommandOutput) => void
  ): void;
  public listFieldLevelEncryptionProfiles(
    args: ListFieldLevelEncryptionProfilesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListFieldLevelEncryptionProfilesCommandOutput) => void),
    cb?: (err: any, data?: ListFieldLevelEncryptionProfilesCommandOutput) => void
  ): Promise<ListFieldLevelEncryptionProfilesCommandOutput> | void {
    const command = new ListFieldLevelEncryptionProfilesCommand(args);
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
   * <p>Gets a list of all CloudFront functions in your Amazon Web Services account.</p>
   *          <p>You can optionally apply a filter to return only the functions that are in the
   * 			specified stage, either <code>DEVELOPMENT</code> or <code>LIVE</code>.</p>
   *          <p>You can optionally specify the maximum number of items to receive in the response. If
   * 			the total number of items in the list exceeds the maximum that you specify, or the
   * 			default maximum, the response is paginated. To get the next page of items, send a
   * 			subsequent request that specifies the <code>NextMarker</code> value from the current
   * 			response as the <code>Marker</code> value in the subsequent request.</p>
   */
  public listFunctions(
    args: ListFunctionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFunctionsCommandOutput>;
  public listFunctions(
    args: ListFunctionsCommandInput,
    cb: (err: any, data?: ListFunctionsCommandOutput) => void
  ): void;
  public listFunctions(
    args: ListFunctionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFunctionsCommandOutput) => void
  ): void;
  public listFunctions(
    args: ListFunctionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListFunctionsCommandOutput) => void),
    cb?: (err: any, data?: ListFunctionsCommandOutput) => void
  ): Promise<ListFunctionsCommandOutput> | void {
    const command = new ListFunctionsCommand(args);
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
   * <p>Lists invalidation batches.</p>
   */
  public listInvalidations(
    args: ListInvalidationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInvalidationsCommandOutput>;
  public listInvalidations(
    args: ListInvalidationsCommandInput,
    cb: (err: any, data?: ListInvalidationsCommandOutput) => void
  ): void;
  public listInvalidations(
    args: ListInvalidationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInvalidationsCommandOutput) => void
  ): void;
  public listInvalidations(
    args: ListInvalidationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListInvalidationsCommandOutput) => void),
    cb?: (err: any, data?: ListInvalidationsCommandOutput) => void
  ): Promise<ListInvalidationsCommandOutput> | void {
    const command = new ListInvalidationsCommand(args);
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
   * <p>Gets a list of key groups.</p>
   *          <p>You can optionally specify the maximum number of items to receive in the response. If
   * 			the total number of items in the list exceeds the maximum that you specify, or the
   * 			default maximum, the response is paginated. To get the next page of items, send a
   * 			subsequent request that specifies the <code>NextMarker</code> value from the current
   * 			response as the <code>Marker</code> value in the subsequent request.</p>
   */
  public listKeyGroups(
    args: ListKeyGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListKeyGroupsCommandOutput>;
  public listKeyGroups(
    args: ListKeyGroupsCommandInput,
    cb: (err: any, data?: ListKeyGroupsCommandOutput) => void
  ): void;
  public listKeyGroups(
    args: ListKeyGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListKeyGroupsCommandOutput) => void
  ): void;
  public listKeyGroups(
    args: ListKeyGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListKeyGroupsCommandOutput) => void),
    cb?: (err: any, data?: ListKeyGroupsCommandOutput) => void
  ): Promise<ListKeyGroupsCommandOutput> | void {
    const command = new ListKeyGroupsCommand(args);
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
   * <p>Gets the list of CloudFront origin access controls in this Amazon Web Services account.</p>
   *          <p>You can optionally specify the maximum number of items to receive in the response. If
   * 			the total number of items in the list exceeds the maximum that you specify, or the
   * 			default maximum, the response is paginated. To get the next page of items, send another
   * 			request that specifies the <code>NextMarker</code> value from the current response as
   * 			the <code>Marker</code> value in the next request.</p>
   */
  public listOriginAccessControls(
    args: ListOriginAccessControlsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOriginAccessControlsCommandOutput>;
  public listOriginAccessControls(
    args: ListOriginAccessControlsCommandInput,
    cb: (err: any, data?: ListOriginAccessControlsCommandOutput) => void
  ): void;
  public listOriginAccessControls(
    args: ListOriginAccessControlsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOriginAccessControlsCommandOutput) => void
  ): void;
  public listOriginAccessControls(
    args: ListOriginAccessControlsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListOriginAccessControlsCommandOutput) => void),
    cb?: (err: any, data?: ListOriginAccessControlsCommandOutput) => void
  ): Promise<ListOriginAccessControlsCommandOutput> | void {
    const command = new ListOriginAccessControlsCommand(args);
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
   * <p>Gets a list of origin request policies.</p>
   *          <p>You can optionally apply a filter to return only the managed policies created by
   * 			Amazon Web Services, or only the custom policies created in your Amazon Web Services account.</p>
   *          <p>You can optionally specify the maximum number of items to receive in the response. If
   * 			the total number of items in the list exceeds the maximum that you specify, or the
   * 			default maximum, the response is paginated. To get the next page of items, send a
   * 			subsequent request that specifies the <code>NextMarker</code> value from the current
   * 			response as the <code>Marker</code> value in the subsequent request.</p>
   */
  public listOriginRequestPolicies(
    args: ListOriginRequestPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOriginRequestPoliciesCommandOutput>;
  public listOriginRequestPolicies(
    args: ListOriginRequestPoliciesCommandInput,
    cb: (err: any, data?: ListOriginRequestPoliciesCommandOutput) => void
  ): void;
  public listOriginRequestPolicies(
    args: ListOriginRequestPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOriginRequestPoliciesCommandOutput) => void
  ): void;
  public listOriginRequestPolicies(
    args: ListOriginRequestPoliciesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListOriginRequestPoliciesCommandOutput) => void),
    cb?: (err: any, data?: ListOriginRequestPoliciesCommandOutput) => void
  ): Promise<ListOriginRequestPoliciesCommandOutput> | void {
    const command = new ListOriginRequestPoliciesCommand(args);
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
   * <p>List all public keys that have been added to CloudFront for this account.</p>
   */
  public listPublicKeys(
    args: ListPublicKeysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPublicKeysCommandOutput>;
  public listPublicKeys(
    args: ListPublicKeysCommandInput,
    cb: (err: any, data?: ListPublicKeysCommandOutput) => void
  ): void;
  public listPublicKeys(
    args: ListPublicKeysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPublicKeysCommandOutput) => void
  ): void;
  public listPublicKeys(
    args: ListPublicKeysCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPublicKeysCommandOutput) => void),
    cb?: (err: any, data?: ListPublicKeysCommandOutput) => void
  ): Promise<ListPublicKeysCommandOutput> | void {
    const command = new ListPublicKeysCommand(args);
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
   * <p>Gets a list of real-time log configurations.</p>
   *          <p>You can optionally specify the maximum number of items to receive in the response. If
   * 			the total number of items in the list exceeds the maximum that you specify, or the
   * 			default maximum, the response is paginated. To get the next page of items, send a
   * 			subsequent request that specifies the <code>NextMarker</code> value from the current
   * 			response as the <code>Marker</code> value in the subsequent request.</p>
   */
  public listRealtimeLogConfigs(
    args: ListRealtimeLogConfigsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRealtimeLogConfigsCommandOutput>;
  public listRealtimeLogConfigs(
    args: ListRealtimeLogConfigsCommandInput,
    cb: (err: any, data?: ListRealtimeLogConfigsCommandOutput) => void
  ): void;
  public listRealtimeLogConfigs(
    args: ListRealtimeLogConfigsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRealtimeLogConfigsCommandOutput) => void
  ): void;
  public listRealtimeLogConfigs(
    args: ListRealtimeLogConfigsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRealtimeLogConfigsCommandOutput) => void),
    cb?: (err: any, data?: ListRealtimeLogConfigsCommandOutput) => void
  ): Promise<ListRealtimeLogConfigsCommandOutput> | void {
    const command = new ListRealtimeLogConfigsCommand(args);
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
   * <p>Gets a list of response headers policies.</p>
   *          <p>You can optionally apply a filter to get only the managed policies created by Amazon Web Services,
   * 			or only the custom policies created in your Amazon Web Services account.</p>
   *          <p>You can optionally specify the maximum number of items to receive in the response. If
   * 			the total number of items in the list exceeds the maximum that you specify, or the
   * 			default maximum, the response is paginated. To get the next page of items, send a
   * 			subsequent request that specifies the <code>NextMarker</code> value from the current
   * 			response as the <code>Marker</code> value in the subsequent request.</p>
   */
  public listResponseHeadersPolicies(
    args: ListResponseHeadersPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResponseHeadersPoliciesCommandOutput>;
  public listResponseHeadersPolicies(
    args: ListResponseHeadersPoliciesCommandInput,
    cb: (err: any, data?: ListResponseHeadersPoliciesCommandOutput) => void
  ): void;
  public listResponseHeadersPolicies(
    args: ListResponseHeadersPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResponseHeadersPoliciesCommandOutput) => void
  ): void;
  public listResponseHeadersPolicies(
    args: ListResponseHeadersPoliciesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListResponseHeadersPoliciesCommandOutput) => void),
    cb?: (err: any, data?: ListResponseHeadersPoliciesCommandOutput) => void
  ): Promise<ListResponseHeadersPoliciesCommandOutput> | void {
    const command = new ListResponseHeadersPoliciesCommand(args);
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
   * <p>List streaming distributions.</p>
   */
  public listStreamingDistributions(
    args: ListStreamingDistributionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStreamingDistributionsCommandOutput>;
  public listStreamingDistributions(
    args: ListStreamingDistributionsCommandInput,
    cb: (err: any, data?: ListStreamingDistributionsCommandOutput) => void
  ): void;
  public listStreamingDistributions(
    args: ListStreamingDistributionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStreamingDistributionsCommandOutput) => void
  ): void;
  public listStreamingDistributions(
    args: ListStreamingDistributionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListStreamingDistributionsCommandOutput) => void),
    cb?: (err: any, data?: ListStreamingDistributionsCommandOutput) => void
  ): Promise<ListStreamingDistributionsCommandOutput> | void {
    const command = new ListStreamingDistributionsCommand(args);
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
   * <p>List tags for a CloudFront resource.</p>
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
   * <p>Publishes a CloudFront function by copying the function code from the
   * 				<code>DEVELOPMENT</code> stage to <code>LIVE</code>. This automatically updates all
   * 			cache behaviors that are using this function to use the newly published copy in the
   * 				<code>LIVE</code> stage.</p>
   *          <p>When a function is published to the <code>LIVE</code> stage, you can attach the
   * 			function to a distribution's cache behavior, using the function's Amazon Resource Name
   * 			(ARN).</p>
   *          <p>To publish a function, you must provide the function's name and version
   * 				(<code>ETag</code> value). To get these values, you can use
   * 				<code>ListFunctions</code> and <code>DescribeFunction</code>.</p>
   */
  public publishFunction(
    args: PublishFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PublishFunctionCommandOutput>;
  public publishFunction(
    args: PublishFunctionCommandInput,
    cb: (err: any, data?: PublishFunctionCommandOutput) => void
  ): void;
  public publishFunction(
    args: PublishFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PublishFunctionCommandOutput) => void
  ): void;
  public publishFunction(
    args: PublishFunctionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PublishFunctionCommandOutput) => void),
    cb?: (err: any, data?: PublishFunctionCommandOutput) => void
  ): Promise<PublishFunctionCommandOutput> | void {
    const command = new PublishFunctionCommand(args);
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
   * <p>Add tags to a CloudFront resource.</p>
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
   * <p>Tests a CloudFront function.</p>
   *          <p>To test a function, you provide an <i>event object</i> that represents
   * 			an HTTP request or response that your CloudFront distribution could receive in production.
   * 			CloudFront runs the function, passing it the event object that you provided, and returns the
   * 			function's result (the modified event object) in the response. The response also
   * 			contains function logs and error messages, if any exist. For more information about
   * 			testing functions, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/managing-functions.html#test-function">Testing functions</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   *          <p>To test a function, you provide the function's name and version (<code>ETag</code>
   * 			value) along with the event object. To get the function's name and version, you can use
   * 				<code>ListFunctions</code> and <code>DescribeFunction</code>.</p>
   */
  public testFunction(
    args: TestFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TestFunctionCommandOutput>;
  public testFunction(args: TestFunctionCommandInput, cb: (err: any, data?: TestFunctionCommandOutput) => void): void;
  public testFunction(
    args: TestFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestFunctionCommandOutput) => void
  ): void;
  public testFunction(
    args: TestFunctionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TestFunctionCommandOutput) => void),
    cb?: (err: any, data?: TestFunctionCommandOutput) => void
  ): Promise<TestFunctionCommandOutput> | void {
    const command = new TestFunctionCommand(args);
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
   * <p>Remove tags from a CloudFront resource.</p>
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
   * <p>Updates a cache policy configuration.</p>
   *          <p>When you update a cache policy configuration, all the fields are updated with the
   * 			values provided in the request. You cannot update some fields independent of others. To
   * 			update a cache policy configuration:</p>
   *          <ol>
   *             <li>
   *                <p>Use <code>GetCachePolicyConfig</code> to get the current configuration.</p>
   *             </li>
   *             <li>
   *                <p>Locally modify the fields in the cache policy configuration that you want to
   * 					update.</p>
   *             </li>
   *             <li>
   *                <p>Call <code>UpdateCachePolicy</code> by providing the entire cache policy
   * 					configuration, including the fields that you modified and those that you
   * 					didn't.</p>
   *             </li>
   *          </ol>
   */
  public updateCachePolicy(
    args: UpdateCachePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCachePolicyCommandOutput>;
  public updateCachePolicy(
    args: UpdateCachePolicyCommandInput,
    cb: (err: any, data?: UpdateCachePolicyCommandOutput) => void
  ): void;
  public updateCachePolicy(
    args: UpdateCachePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCachePolicyCommandOutput) => void
  ): void;
  public updateCachePolicy(
    args: UpdateCachePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateCachePolicyCommandOutput) => void),
    cb?: (err: any, data?: UpdateCachePolicyCommandOutput) => void
  ): Promise<UpdateCachePolicyCommandOutput> | void {
    const command = new UpdateCachePolicyCommand(args);
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
   * <p>Update an origin access identity.</p>
   */
  public updateCloudFrontOriginAccessIdentity(
    args: UpdateCloudFrontOriginAccessIdentityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCloudFrontOriginAccessIdentityCommandOutput>;
  public updateCloudFrontOriginAccessIdentity(
    args: UpdateCloudFrontOriginAccessIdentityCommandInput,
    cb: (err: any, data?: UpdateCloudFrontOriginAccessIdentityCommandOutput) => void
  ): void;
  public updateCloudFrontOriginAccessIdentity(
    args: UpdateCloudFrontOriginAccessIdentityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCloudFrontOriginAccessIdentityCommandOutput) => void
  ): void;
  public updateCloudFrontOriginAccessIdentity(
    args: UpdateCloudFrontOriginAccessIdentityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateCloudFrontOriginAccessIdentityCommandOutput) => void),
    cb?: (err: any, data?: UpdateCloudFrontOriginAccessIdentityCommandOutput) => void
  ): Promise<UpdateCloudFrontOriginAccessIdentityCommandOutput> | void {
    const command = new UpdateCloudFrontOriginAccessIdentityCommand(args);
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
   * <p>Updates a continuous deployment policy. You can update a continuous deployment policy
   * 			to enable or disable it, to change the percentage of traffic that it sends to the
   * 			staging distribution, or to change the staging distribution that it sends traffic
   * 			to.</p>
   *          <p>When you update a continuous deployment policy configuration, all the fields are
   * 			updated with the values that are provided in the request. You cannot update some fields
   * 			independent of others. To update a continuous deployment policy configuration:</p>
   *          <ol>
   *             <li>
   *                <p>Use <code>GetContinuousDeploymentPolicyConfig</code> to get the current
   * 					configuration.</p>
   *             </li>
   *             <li>
   *                <p>Locally modify the fields in the continuous deployment policy configuration
   * 					that you want to update.</p>
   *             </li>
   *             <li>
   *                <p>Use <code>UpdateContinuousDeploymentPolicy</code>, providing the entire
   * 					continuous deployment policy configuration, including the fields that you
   * 					modified and those that you didn't.</p>
   *             </li>
   *          </ol>
   */
  public updateContinuousDeploymentPolicy(
    args: UpdateContinuousDeploymentPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateContinuousDeploymentPolicyCommandOutput>;
  public updateContinuousDeploymentPolicy(
    args: UpdateContinuousDeploymentPolicyCommandInput,
    cb: (err: any, data?: UpdateContinuousDeploymentPolicyCommandOutput) => void
  ): void;
  public updateContinuousDeploymentPolicy(
    args: UpdateContinuousDeploymentPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateContinuousDeploymentPolicyCommandOutput) => void
  ): void;
  public updateContinuousDeploymentPolicy(
    args: UpdateContinuousDeploymentPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateContinuousDeploymentPolicyCommandOutput) => void),
    cb?: (err: any, data?: UpdateContinuousDeploymentPolicyCommandOutput) => void
  ): Promise<UpdateContinuousDeploymentPolicyCommandOutput> | void {
    const command = new UpdateContinuousDeploymentPolicyCommand(args);
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
   * <p>Updates the configuration for a CloudFront distribution.</p>
   *          <p>The update process includes getting the current distribution configuration, updating
   * 			it to make your changes, and then submitting an <code>UpdateDistribution</code> request
   * 			to make the updates.</p>
   *          <p>
   *             <b>To update a web distribution using the CloudFront
   * 			API</b>
   *          </p>
   *          <ol>
   *             <li>
   *                <p>Use <code>GetDistributionConfig</code> to get the current configuration,
   * 					including the version identifier (<code>ETag</code>).</p>
   *             </li>
   *             <li>
   *                <p>Update the distribution configuration that was returned in the response. Note
   * 					the following important requirements and restrictions:</p>
   *                <ul>
   *                   <li>
   *                      <p>You must rename the <code>ETag</code> field to <code>IfMatch</code>,
   * 							leaving the value unchanged. (Set the value of <code>IfMatch</code> to
   * 							the value of <code>ETag</code>, then remove the <code>ETag</code>
   * 							field.)</p>
   *                   </li>
   *                   <li>
   *                      <p>You can't change the value of <code>CallerReference</code>.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Submit an <code>UpdateDistribution</code> request, providing the distribution
   * 					configuration. The new configuration replaces the existing configuration. The
   * 					values that you specify in an <code>UpdateDistribution</code> request are not
   * 					merged into your existing configuration. Make sure to include all fields: the
   * 					ones that you modified and also the ones that you didn't.</p>
   *             </li>
   *          </ol>
   */
  public updateDistribution(
    args: UpdateDistributionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDistributionCommandOutput>;
  public updateDistribution(
    args: UpdateDistributionCommandInput,
    cb: (err: any, data?: UpdateDistributionCommandOutput) => void
  ): void;
  public updateDistribution(
    args: UpdateDistributionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDistributionCommandOutput) => void
  ): void;
  public updateDistribution(
    args: UpdateDistributionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDistributionCommandOutput) => void),
    cb?: (err: any, data?: UpdateDistributionCommandOutput) => void
  ): Promise<UpdateDistributionCommandOutput> | void {
    const command = new UpdateDistributionCommand(args);
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
   * <p>Copies the staging distribution's configuration to its corresponding primary
   * 			distribution. The primary distribution retains its <code>Aliases</code> (also known as
   * 			alternate domain names or CNAMEs) and <code>ContinuousDeploymentPolicyId</code> value,
   * 			but otherwise its configuration is overwritten to match the staging distribution.</p>
   *          <p>You can use this operation in a continuous deployment workflow after you have tested
   * 			configuration changes on the staging distribution. After using a continuous deployment
   * 			policy to move a portion of your domain name's traffic to the staging distribution and
   * 			verifying that it works as intended, you can use this operation to copy the staging
   * 			distribution's configuration to the primary distribution. This action will disable the
   * 			continuous deployment policy and move your domain's traffic back to the primary distribution.</p>
   */
  public updateDistributionWithStagingConfig(
    args: UpdateDistributionWithStagingConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDistributionWithStagingConfigCommandOutput>;
  public updateDistributionWithStagingConfig(
    args: UpdateDistributionWithStagingConfigCommandInput,
    cb: (err: any, data?: UpdateDistributionWithStagingConfigCommandOutput) => void
  ): void;
  public updateDistributionWithStagingConfig(
    args: UpdateDistributionWithStagingConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDistributionWithStagingConfigCommandOutput) => void
  ): void;
  public updateDistributionWithStagingConfig(
    args: UpdateDistributionWithStagingConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDistributionWithStagingConfigCommandOutput) => void),
    cb?: (err: any, data?: UpdateDistributionWithStagingConfigCommandOutput) => void
  ): Promise<UpdateDistributionWithStagingConfigCommandOutput> | void {
    const command = new UpdateDistributionWithStagingConfigCommand(args);
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
   * <p>Update a field-level encryption configuration.</p>
   */
  public updateFieldLevelEncryptionConfig(
    args: UpdateFieldLevelEncryptionConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFieldLevelEncryptionConfigCommandOutput>;
  public updateFieldLevelEncryptionConfig(
    args: UpdateFieldLevelEncryptionConfigCommandInput,
    cb: (err: any, data?: UpdateFieldLevelEncryptionConfigCommandOutput) => void
  ): void;
  public updateFieldLevelEncryptionConfig(
    args: UpdateFieldLevelEncryptionConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFieldLevelEncryptionConfigCommandOutput) => void
  ): void;
  public updateFieldLevelEncryptionConfig(
    args: UpdateFieldLevelEncryptionConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateFieldLevelEncryptionConfigCommandOutput) => void),
    cb?: (err: any, data?: UpdateFieldLevelEncryptionConfigCommandOutput) => void
  ): Promise<UpdateFieldLevelEncryptionConfigCommandOutput> | void {
    const command = new UpdateFieldLevelEncryptionConfigCommand(args);
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
   * <p>Update a field-level encryption profile.</p>
   */
  public updateFieldLevelEncryptionProfile(
    args: UpdateFieldLevelEncryptionProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFieldLevelEncryptionProfileCommandOutput>;
  public updateFieldLevelEncryptionProfile(
    args: UpdateFieldLevelEncryptionProfileCommandInput,
    cb: (err: any, data?: UpdateFieldLevelEncryptionProfileCommandOutput) => void
  ): void;
  public updateFieldLevelEncryptionProfile(
    args: UpdateFieldLevelEncryptionProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFieldLevelEncryptionProfileCommandOutput) => void
  ): void;
  public updateFieldLevelEncryptionProfile(
    args: UpdateFieldLevelEncryptionProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateFieldLevelEncryptionProfileCommandOutput) => void),
    cb?: (err: any, data?: UpdateFieldLevelEncryptionProfileCommandOutput) => void
  ): Promise<UpdateFieldLevelEncryptionProfileCommandOutput> | void {
    const command = new UpdateFieldLevelEncryptionProfileCommand(args);
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
   * <p>Updates a CloudFront function.</p>
   *          <p>You can update a function's code or the comment that describes the function. You
   * 			cannot update a function's name.</p>
   *          <p>To update a function, you provide the function's name and version (<code>ETag</code>
   * 			value) along with the updated function code. To get the name and version, you can use
   * 				<code>ListFunctions</code> and <code>DescribeFunction</code>.</p>
   */
  public updateFunction(
    args: UpdateFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFunctionCommandOutput>;
  public updateFunction(
    args: UpdateFunctionCommandInput,
    cb: (err: any, data?: UpdateFunctionCommandOutput) => void
  ): void;
  public updateFunction(
    args: UpdateFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFunctionCommandOutput) => void
  ): void;
  public updateFunction(
    args: UpdateFunctionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateFunctionCommandOutput) => void),
    cb?: (err: any, data?: UpdateFunctionCommandOutput) => void
  ): Promise<UpdateFunctionCommandOutput> | void {
    const command = new UpdateFunctionCommand(args);
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
   * <p>Updates a key group.</p>
   *          <p>When you update a key group, all the fields are updated with the values provided in
   * 			the request. You cannot update some fields independent of others. To update a key
   * 			group:</p>
   *          <ol>
   *             <li>
   *                <p>Get the current key group with <code>GetKeyGroup</code> or
   * 						<code>GetKeyGroupConfig</code>.</p>
   *             </li>
   *             <li>
   *                <p>Locally modify the fields in the key group that you want to update. For
   * 					example, add or remove public key IDs.</p>
   *             </li>
   *             <li>
   *                <p>Call <code>UpdateKeyGroup</code> with the entire key group object, including
   * 					the fields that you modified and those that you didn't.</p>
   *             </li>
   *          </ol>
   */
  public updateKeyGroup(
    args: UpdateKeyGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateKeyGroupCommandOutput>;
  public updateKeyGroup(
    args: UpdateKeyGroupCommandInput,
    cb: (err: any, data?: UpdateKeyGroupCommandOutput) => void
  ): void;
  public updateKeyGroup(
    args: UpdateKeyGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateKeyGroupCommandOutput) => void
  ): void;
  public updateKeyGroup(
    args: UpdateKeyGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateKeyGroupCommandOutput) => void),
    cb?: (err: any, data?: UpdateKeyGroupCommandOutput) => void
  ): Promise<UpdateKeyGroupCommandOutput> | void {
    const command = new UpdateKeyGroupCommand(args);
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
   * <p>Updates a CloudFront origin access control.</p>
   */
  public updateOriginAccessControl(
    args: UpdateOriginAccessControlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateOriginAccessControlCommandOutput>;
  public updateOriginAccessControl(
    args: UpdateOriginAccessControlCommandInput,
    cb: (err: any, data?: UpdateOriginAccessControlCommandOutput) => void
  ): void;
  public updateOriginAccessControl(
    args: UpdateOriginAccessControlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateOriginAccessControlCommandOutput) => void
  ): void;
  public updateOriginAccessControl(
    args: UpdateOriginAccessControlCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateOriginAccessControlCommandOutput) => void),
    cb?: (err: any, data?: UpdateOriginAccessControlCommandOutput) => void
  ): Promise<UpdateOriginAccessControlCommandOutput> | void {
    const command = new UpdateOriginAccessControlCommand(args);
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
   * <p>Updates an origin request policy configuration.</p>
   *          <p>When you update an origin request policy configuration, all the fields are updated
   * 			with the values provided in the request. You cannot update some fields independent of
   * 			others. To update an origin request policy configuration:</p>
   *          <ol>
   *             <li>
   *                <p>Use <code>GetOriginRequestPolicyConfig</code> to get the current
   * 					configuration.</p>
   *             </li>
   *             <li>
   *                <p>Locally modify the fields in the origin request policy configuration that you
   * 					want to update.</p>
   *             </li>
   *             <li>
   *                <p>Call <code>UpdateOriginRequestPolicy</code> by providing the entire origin
   * 					request policy configuration, including the fields that you modified and those
   * 					that you didn't.</p>
   *             </li>
   *          </ol>
   */
  public updateOriginRequestPolicy(
    args: UpdateOriginRequestPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateOriginRequestPolicyCommandOutput>;
  public updateOriginRequestPolicy(
    args: UpdateOriginRequestPolicyCommandInput,
    cb: (err: any, data?: UpdateOriginRequestPolicyCommandOutput) => void
  ): void;
  public updateOriginRequestPolicy(
    args: UpdateOriginRequestPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateOriginRequestPolicyCommandOutput) => void
  ): void;
  public updateOriginRequestPolicy(
    args: UpdateOriginRequestPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateOriginRequestPolicyCommandOutput) => void),
    cb?: (err: any, data?: UpdateOriginRequestPolicyCommandOutput) => void
  ): Promise<UpdateOriginRequestPolicyCommandOutput> | void {
    const command = new UpdateOriginRequestPolicyCommand(args);
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
   * <p>Update public key information. Note that the only value you can change is the
   * 			comment.</p>
   */
  public updatePublicKey(
    args: UpdatePublicKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePublicKeyCommandOutput>;
  public updatePublicKey(
    args: UpdatePublicKeyCommandInput,
    cb: (err: any, data?: UpdatePublicKeyCommandOutput) => void
  ): void;
  public updatePublicKey(
    args: UpdatePublicKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePublicKeyCommandOutput) => void
  ): void;
  public updatePublicKey(
    args: UpdatePublicKeyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdatePublicKeyCommandOutput) => void),
    cb?: (err: any, data?: UpdatePublicKeyCommandOutput) => void
  ): Promise<UpdatePublicKeyCommandOutput> | void {
    const command = new UpdatePublicKeyCommand(args);
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
   * <p>Updates a real-time log configuration.</p>
   *          <p>When you update a real-time log configuration, all the parameters are updated with the
   * 			values provided in the request. You cannot update some parameters independent of others.
   * 			To update a real-time log configuration:</p>
   *          <ol>
   *             <li>
   *                <p>Call <code>GetRealtimeLogConfig</code> to get the current real-time log
   * 					configuration.</p>
   *             </li>
   *             <li>
   *                <p>Locally modify the parameters in the real-time log configuration that you want
   * 					to update.</p>
   *             </li>
   *             <li>
   *                <p>Call this API (<code>UpdateRealtimeLogConfig</code>) by providing the entire
   * 					real-time log configuration, including the parameters that you modified and
   * 					those that you didn't.</p>
   *             </li>
   *          </ol>
   *          <p>You cannot update a real-time log configuration's <code>Name</code> or
   * 				<code>ARN</code>.</p>
   */
  public updateRealtimeLogConfig(
    args: UpdateRealtimeLogConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRealtimeLogConfigCommandOutput>;
  public updateRealtimeLogConfig(
    args: UpdateRealtimeLogConfigCommandInput,
    cb: (err: any, data?: UpdateRealtimeLogConfigCommandOutput) => void
  ): void;
  public updateRealtimeLogConfig(
    args: UpdateRealtimeLogConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRealtimeLogConfigCommandOutput) => void
  ): void;
  public updateRealtimeLogConfig(
    args: UpdateRealtimeLogConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateRealtimeLogConfigCommandOutput) => void),
    cb?: (err: any, data?: UpdateRealtimeLogConfigCommandOutput) => void
  ): Promise<UpdateRealtimeLogConfigCommandOutput> | void {
    const command = new UpdateRealtimeLogConfigCommand(args);
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
   * <p>Updates a response headers policy.</p>
   *          <p>When you update a response headers policy, the entire policy is replaced. You cannot
   * 			update some policy fields independent of others. To update a response headers policy
   * 			configuration:</p>
   *          <ol>
   *             <li>
   *                <p>Use <code>GetResponseHeadersPolicyConfig</code> to get the current policy's
   * 					configuration.</p>
   *             </li>
   *             <li>
   *                <p>Modify the fields in the response headers policy configuration that you want
   * 					to update.</p>
   *             </li>
   *             <li>
   *                <p>Call <code>UpdateResponseHeadersPolicy</code>, providing the entire response
   * 					headers policy configuration, including the fields that you modified and those
   * 					that you didn't.</p>
   *             </li>
   *          </ol>
   */
  public updateResponseHeadersPolicy(
    args: UpdateResponseHeadersPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateResponseHeadersPolicyCommandOutput>;
  public updateResponseHeadersPolicy(
    args: UpdateResponseHeadersPolicyCommandInput,
    cb: (err: any, data?: UpdateResponseHeadersPolicyCommandOutput) => void
  ): void;
  public updateResponseHeadersPolicy(
    args: UpdateResponseHeadersPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateResponseHeadersPolicyCommandOutput) => void
  ): void;
  public updateResponseHeadersPolicy(
    args: UpdateResponseHeadersPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateResponseHeadersPolicyCommandOutput) => void),
    cb?: (err: any, data?: UpdateResponseHeadersPolicyCommandOutput) => void
  ): Promise<UpdateResponseHeadersPolicyCommandOutput> | void {
    const command = new UpdateResponseHeadersPolicyCommand(args);
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
   * <p>Update a streaming distribution.</p>
   */
  public updateStreamingDistribution(
    args: UpdateStreamingDistributionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateStreamingDistributionCommandOutput>;
  public updateStreamingDistribution(
    args: UpdateStreamingDistributionCommandInput,
    cb: (err: any, data?: UpdateStreamingDistributionCommandOutput) => void
  ): void;
  public updateStreamingDistribution(
    args: UpdateStreamingDistributionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateStreamingDistributionCommandOutput) => void
  ): void;
  public updateStreamingDistribution(
    args: UpdateStreamingDistributionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateStreamingDistributionCommandOutput) => void),
    cb?: (err: any, data?: UpdateStreamingDistributionCommandOutput) => void
  ): Promise<UpdateStreamingDistributionCommandOutput> | void {
    const command = new UpdateStreamingDistributionCommand(args);
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
