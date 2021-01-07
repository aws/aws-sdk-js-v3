import { ShieldClient } from "./ShieldClient";
import {
  AssociateDRTLogBucketCommand,
  AssociateDRTLogBucketCommandInput,
  AssociateDRTLogBucketCommandOutput,
} from "./commands/AssociateDRTLogBucketCommand";
import {
  AssociateDRTRoleCommand,
  AssociateDRTRoleCommandInput,
  AssociateDRTRoleCommandOutput,
} from "./commands/AssociateDRTRoleCommand";
import {
  AssociateHealthCheckCommand,
  AssociateHealthCheckCommandInput,
  AssociateHealthCheckCommandOutput,
} from "./commands/AssociateHealthCheckCommand";
import {
  AssociateProactiveEngagementDetailsCommand,
  AssociateProactiveEngagementDetailsCommandInput,
  AssociateProactiveEngagementDetailsCommandOutput,
} from "./commands/AssociateProactiveEngagementDetailsCommand";
import {
  CreateProtectionCommand,
  CreateProtectionCommandInput,
  CreateProtectionCommandOutput,
} from "./commands/CreateProtectionCommand";
import {
  CreateProtectionGroupCommand,
  CreateProtectionGroupCommandInput,
  CreateProtectionGroupCommandOutput,
} from "./commands/CreateProtectionGroupCommand";
import {
  CreateSubscriptionCommand,
  CreateSubscriptionCommandInput,
  CreateSubscriptionCommandOutput,
} from "./commands/CreateSubscriptionCommand";
import {
  DeleteProtectionCommand,
  DeleteProtectionCommandInput,
  DeleteProtectionCommandOutput,
} from "./commands/DeleteProtectionCommand";
import {
  DeleteProtectionGroupCommand,
  DeleteProtectionGroupCommandInput,
  DeleteProtectionGroupCommandOutput,
} from "./commands/DeleteProtectionGroupCommand";
import {
  DeleteSubscriptionCommand,
  DeleteSubscriptionCommandInput,
  DeleteSubscriptionCommandOutput,
} from "./commands/DeleteSubscriptionCommand";
import {
  DescribeAttackCommand,
  DescribeAttackCommandInput,
  DescribeAttackCommandOutput,
} from "./commands/DescribeAttackCommand";
import {
  DescribeAttackStatisticsCommand,
  DescribeAttackStatisticsCommandInput,
  DescribeAttackStatisticsCommandOutput,
} from "./commands/DescribeAttackStatisticsCommand";
import {
  DescribeDRTAccessCommand,
  DescribeDRTAccessCommandInput,
  DescribeDRTAccessCommandOutput,
} from "./commands/DescribeDRTAccessCommand";
import {
  DescribeEmergencyContactSettingsCommand,
  DescribeEmergencyContactSettingsCommandInput,
  DescribeEmergencyContactSettingsCommandOutput,
} from "./commands/DescribeEmergencyContactSettingsCommand";
import {
  DescribeProtectionCommand,
  DescribeProtectionCommandInput,
  DescribeProtectionCommandOutput,
} from "./commands/DescribeProtectionCommand";
import {
  DescribeProtectionGroupCommand,
  DescribeProtectionGroupCommandInput,
  DescribeProtectionGroupCommandOutput,
} from "./commands/DescribeProtectionGroupCommand";
import {
  DescribeSubscriptionCommand,
  DescribeSubscriptionCommandInput,
  DescribeSubscriptionCommandOutput,
} from "./commands/DescribeSubscriptionCommand";
import {
  DisableProactiveEngagementCommand,
  DisableProactiveEngagementCommandInput,
  DisableProactiveEngagementCommandOutput,
} from "./commands/DisableProactiveEngagementCommand";
import {
  DisassociateDRTLogBucketCommand,
  DisassociateDRTLogBucketCommandInput,
  DisassociateDRTLogBucketCommandOutput,
} from "./commands/DisassociateDRTLogBucketCommand";
import {
  DisassociateDRTRoleCommand,
  DisassociateDRTRoleCommandInput,
  DisassociateDRTRoleCommandOutput,
} from "./commands/DisassociateDRTRoleCommand";
import {
  DisassociateHealthCheckCommand,
  DisassociateHealthCheckCommandInput,
  DisassociateHealthCheckCommandOutput,
} from "./commands/DisassociateHealthCheckCommand";
import {
  EnableProactiveEngagementCommand,
  EnableProactiveEngagementCommandInput,
  EnableProactiveEngagementCommandOutput,
} from "./commands/EnableProactiveEngagementCommand";
import {
  GetSubscriptionStateCommand,
  GetSubscriptionStateCommandInput,
  GetSubscriptionStateCommandOutput,
} from "./commands/GetSubscriptionStateCommand";
import { ListAttacksCommand, ListAttacksCommandInput, ListAttacksCommandOutput } from "./commands/ListAttacksCommand";
import {
  ListProtectionGroupsCommand,
  ListProtectionGroupsCommandInput,
  ListProtectionGroupsCommandOutput,
} from "./commands/ListProtectionGroupsCommand";
import {
  ListProtectionsCommand,
  ListProtectionsCommandInput,
  ListProtectionsCommandOutput,
} from "./commands/ListProtectionsCommand";
import {
  ListResourcesInProtectionGroupCommand,
  ListResourcesInProtectionGroupCommandInput,
  ListResourcesInProtectionGroupCommandOutput,
} from "./commands/ListResourcesInProtectionGroupCommand";
import {
  UpdateEmergencyContactSettingsCommand,
  UpdateEmergencyContactSettingsCommandInput,
  UpdateEmergencyContactSettingsCommandOutput,
} from "./commands/UpdateEmergencyContactSettingsCommand";
import {
  UpdateProtectionGroupCommand,
  UpdateProtectionGroupCommandInput,
  UpdateProtectionGroupCommandOutput,
} from "./commands/UpdateProtectionGroupCommand";
import {
  UpdateSubscriptionCommand,
  UpdateSubscriptionCommandInput,
  UpdateSubscriptionCommandOutput,
} from "./commands/UpdateSubscriptionCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <fullname>AWS Shield Advanced</fullname>
 *          <p>This is the <i>AWS Shield Advanced API Reference</i>. This guide is for developers who need detailed information about the AWS Shield Advanced API actions,
 *          data types, and errors. For detailed information about AWS WAF and AWS Shield Advanced features and an overview of how to use the AWS WAF and AWS Shield Advanced APIs, see the
 *          <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF and AWS Shield Developer Guide</a>.</p>
 */
export class Shield extends ShieldClient {
  /**
   * <p>Authorizes the DDoS Response Team (DRT) to access the specified Amazon S3 bucket containing your AWS WAF logs. You can associate up to 10 Amazon S3 buckets with your subscription.</p>
   * 	        <p>To use the services of the DRT and make an <code>AssociateDRTLogBucket</code> request, you must be subscribed to the <a href="https://aws.amazon.com/premiumsupport/business-support/">Business Support plan</a> or the <a href="https://aws.amazon.com/premiumsupport/enterprise-support/">Enterprise Support plan</a>.</p>
   */
  public associateDRTLogBucket(
    args: AssociateDRTLogBucketCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateDRTLogBucketCommandOutput>;
  public associateDRTLogBucket(
    args: AssociateDRTLogBucketCommandInput,
    cb: (err: any, data?: AssociateDRTLogBucketCommandOutput) => void
  ): void;
  public associateDRTLogBucket(
    args: AssociateDRTLogBucketCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateDRTLogBucketCommandOutput) => void
  ): void;
  public associateDRTLogBucket(
    args: AssociateDRTLogBucketCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateDRTLogBucketCommandOutput) => void),
    cb?: (err: any, data?: AssociateDRTLogBucketCommandOutput) => void
  ): Promise<AssociateDRTLogBucketCommandOutput> | void {
    const command = new AssociateDRTLogBucketCommand(args);
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
   * <p>Authorizes the DDoS Response Team (DRT), using the specified role, to access your AWS account to assist with DDoS attack mitigation during potential attacks. This enables the DRT to inspect your AWS WAF configuration and create or update AWS WAF rules and web ACLs.</p>
   *          <p>You can associate only one <code>RoleArn</code> with your subscription. If you submit an <code>AssociateDRTRole</code> request for an account that already has an associated role, the new <code>RoleArn</code> will replace the existing <code>RoleArn</code>. </p>
   *          <p>Prior to making the <code>AssociateDRTRole</code> request, you must attach the <a href="https://console.aws.amazon.com/iam/home?#/policies/arn:aws:iam::aws:policy/service-role/AWSShieldDRTAccessPolicy">AWSShieldDRTAccessPolicy</a> managed policy to the role you will specify in the request. For more information see <a href=" https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_manage-attach-detach.html">Attaching and Detaching IAM Policies</a>. The role must also trust the service principal <code> drt.shield.amazonaws.com</code>. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html">IAM JSON Policy Elements: Principal</a>.</p>
   *
   *          <p>The DRT will have access only to your AWS WAF and Shield resources. By submitting this request, you authorize the DRT to inspect your AWS WAF and Shield configuration and create and update AWS WAF rules and web ACLs on your behalf. The DRT takes these actions only if explicitly authorized by you.</p>
   *          <p>You must have the <code>iam:PassRole</code> permission to make an <code>AssociateDRTRole</code> request. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_passrole.html">Granting a User Permissions to Pass a Role to an AWS Service</a>. </p>
   *          <p>To use the services of the DRT and make an <code>AssociateDRTRole</code> request, you must be subscribed to the <a href="https://aws.amazon.com/premiumsupport/business-support/">Business Support plan</a> or the <a href="https://aws.amazon.com/premiumsupport/enterprise-support/">Enterprise Support plan</a>.</p>
   */
  public associateDRTRole(
    args: AssociateDRTRoleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateDRTRoleCommandOutput>;
  public associateDRTRole(
    args: AssociateDRTRoleCommandInput,
    cb: (err: any, data?: AssociateDRTRoleCommandOutput) => void
  ): void;
  public associateDRTRole(
    args: AssociateDRTRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateDRTRoleCommandOutput) => void
  ): void;
  public associateDRTRole(
    args: AssociateDRTRoleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateDRTRoleCommandOutput) => void),
    cb?: (err: any, data?: AssociateDRTRoleCommandOutput) => void
  ): Promise<AssociateDRTRoleCommandOutput> | void {
    const command = new AssociateDRTRoleCommand(args);
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
   * <p>Adds health-based detection to the Shield Advanced protection for a resource. Shield Advanced health-based detection uses the health of your AWS resource to improve responsiveness and accuracy in attack detection and mitigation.  </p>
   *          <p>You define the health check in Route 53 and then associate it with your Shield Advanced protection. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/ddos-overview.html#ddos-advanced-health-check-option">Shield Advanced Health-Based Detection</a> in the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF and AWS Shield Developer Guide</a>. </p>
   */
  public associateHealthCheck(
    args: AssociateHealthCheckCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateHealthCheckCommandOutput>;
  public associateHealthCheck(
    args: AssociateHealthCheckCommandInput,
    cb: (err: any, data?: AssociateHealthCheckCommandOutput) => void
  ): void;
  public associateHealthCheck(
    args: AssociateHealthCheckCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateHealthCheckCommandOutput) => void
  ): void;
  public associateHealthCheck(
    args: AssociateHealthCheckCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateHealthCheckCommandOutput) => void),
    cb?: (err: any, data?: AssociateHealthCheckCommandOutput) => void
  ): Promise<AssociateHealthCheckCommandOutput> | void {
    const command = new AssociateHealthCheckCommand(args);
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
   * <p>Initializes proactive engagement and sets the list of contacts for the DDoS Response Team (DRT) to use. You must provide at least one phone number in the emergency contact list. </p>
   *          <p>After you have initialized proactive engagement using this call, to disable or enable proactive engagement, use the calls <code>DisableProactiveEngagement</code> and <code>EnableProactiveEngagement</code>.  </p>
   *          <note>
   *             <p>This call defines the list of email addresses and phone numbers that the DDoS Response Team (DRT) can use to contact you for escalations to the DRT and to initiate proactive customer support.</p>
   *             <p>The contacts that you provide in the request replace any contacts that were already defined. If you already have contacts defined and want to use them, retrieve the list using <code>DescribeEmergencyContactSettings</code> and then provide it to this call.  </p>
   *          </note>
   */
  public associateProactiveEngagementDetails(
    args: AssociateProactiveEngagementDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateProactiveEngagementDetailsCommandOutput>;
  public associateProactiveEngagementDetails(
    args: AssociateProactiveEngagementDetailsCommandInput,
    cb: (err: any, data?: AssociateProactiveEngagementDetailsCommandOutput) => void
  ): void;
  public associateProactiveEngagementDetails(
    args: AssociateProactiveEngagementDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateProactiveEngagementDetailsCommandOutput) => void
  ): void;
  public associateProactiveEngagementDetails(
    args: AssociateProactiveEngagementDetailsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateProactiveEngagementDetailsCommandOutput) => void),
    cb?: (err: any, data?: AssociateProactiveEngagementDetailsCommandOutput) => void
  ): Promise<AssociateProactiveEngagementDetailsCommandOutput> | void {
    const command = new AssociateProactiveEngagementDetailsCommand(args);
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
   * <p>Enables AWS Shield Advanced for a specific AWS resource. The resource can be an Amazon
   *          CloudFront distribution, Elastic Load Balancing load balancer, AWS Global Accelerator accelerator, Elastic IP Address, or an Amazon Route 53 hosted zone.</p>
   *          <p>You can add protection to only a single resource with each CreateProtection request. If you want to add protection to multiple resources at once, use the <a href="https://console.aws.amazon.com/waf/">AWS WAF console</a>. For more information see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/getting-started-ddos.html">Getting Started with AWS Shield Advanced</a> and <a href="https://docs.aws.amazon.com/waf/latest/developerguide/configure-new-protection.html">Add AWS Shield Advanced Protection to more AWS Resources</a>.</p>
   */
  public createProtection(
    args: CreateProtectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProtectionCommandOutput>;
  public createProtection(
    args: CreateProtectionCommandInput,
    cb: (err: any, data?: CreateProtectionCommandOutput) => void
  ): void;
  public createProtection(
    args: CreateProtectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProtectionCommandOutput) => void
  ): void;
  public createProtection(
    args: CreateProtectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateProtectionCommandOutput) => void),
    cb?: (err: any, data?: CreateProtectionCommandOutput) => void
  ): Promise<CreateProtectionCommandOutput> | void {
    const command = new CreateProtectionCommand(args);
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
   * <p>Creates a grouping of protected resources so they can be handled as a collective. This resource grouping improves the accuracy of detection and reduces false positives. </p>
   */
  public createProtectionGroup(
    args: CreateProtectionGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProtectionGroupCommandOutput>;
  public createProtectionGroup(
    args: CreateProtectionGroupCommandInput,
    cb: (err: any, data?: CreateProtectionGroupCommandOutput) => void
  ): void;
  public createProtectionGroup(
    args: CreateProtectionGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProtectionGroupCommandOutput) => void
  ): void;
  public createProtectionGroup(
    args: CreateProtectionGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateProtectionGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateProtectionGroupCommandOutput) => void
  ): Promise<CreateProtectionGroupCommandOutput> | void {
    const command = new CreateProtectionGroupCommand(args);
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
   * <p>Activates AWS Shield Advanced for an account.</p>
   *
   *          <p>When you initally create a subscription, your subscription is set to be automatically renewed at the end of the existing subscription period.  You can change this by submitting an <code>UpdateSubscription</code> request. </p>
   */
  public createSubscription(
    args: CreateSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSubscriptionCommandOutput>;
  public createSubscription(
    args: CreateSubscriptionCommandInput,
    cb: (err: any, data?: CreateSubscriptionCommandOutput) => void
  ): void;
  public createSubscription(
    args: CreateSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSubscriptionCommandOutput) => void
  ): void;
  public createSubscription(
    args: CreateSubscriptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSubscriptionCommandOutput) => void),
    cb?: (err: any, data?: CreateSubscriptionCommandOutput) => void
  ): Promise<CreateSubscriptionCommandOutput> | void {
    const command = new CreateSubscriptionCommand(args);
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
   * <p>Deletes an AWS Shield Advanced <a>Protection</a>.</p>
   */
  public deleteProtection(
    args: DeleteProtectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProtectionCommandOutput>;
  public deleteProtection(
    args: DeleteProtectionCommandInput,
    cb: (err: any, data?: DeleteProtectionCommandOutput) => void
  ): void;
  public deleteProtection(
    args: DeleteProtectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProtectionCommandOutput) => void
  ): void;
  public deleteProtection(
    args: DeleteProtectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteProtectionCommandOutput) => void),
    cb?: (err: any, data?: DeleteProtectionCommandOutput) => void
  ): Promise<DeleteProtectionCommandOutput> | void {
    const command = new DeleteProtectionCommand(args);
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
   * <p>Removes the specified protection group.</p>
   */
  public deleteProtectionGroup(
    args: DeleteProtectionGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProtectionGroupCommandOutput>;
  public deleteProtectionGroup(
    args: DeleteProtectionGroupCommandInput,
    cb: (err: any, data?: DeleteProtectionGroupCommandOutput) => void
  ): void;
  public deleteProtectionGroup(
    args: DeleteProtectionGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProtectionGroupCommandOutput) => void
  ): void;
  public deleteProtectionGroup(
    args: DeleteProtectionGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteProtectionGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteProtectionGroupCommandOutput) => void
  ): Promise<DeleteProtectionGroupCommandOutput> | void {
    const command = new DeleteProtectionGroupCommand(args);
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
   * @deprecated
   *
   * <p>Removes AWS Shield Advanced from an account. AWS Shield Advanced requires a 1-year subscription commitment. You cannot delete a subscription prior to the completion of that commitment. </p>
   */
  public deleteSubscription(
    args: DeleteSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSubscriptionCommandOutput>;
  public deleteSubscription(
    args: DeleteSubscriptionCommandInput,
    cb: (err: any, data?: DeleteSubscriptionCommandOutput) => void
  ): void;
  public deleteSubscription(
    args: DeleteSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSubscriptionCommandOutput) => void
  ): void;
  public deleteSubscription(
    args: DeleteSubscriptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSubscriptionCommandOutput) => void),
    cb?: (err: any, data?: DeleteSubscriptionCommandOutput) => void
  ): Promise<DeleteSubscriptionCommandOutput> | void {
    const command = new DeleteSubscriptionCommand(args);
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
   * <p>Describes the details of a DDoS attack. </p>
   */
  public describeAttack(
    args: DescribeAttackCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAttackCommandOutput>;
  public describeAttack(
    args: DescribeAttackCommandInput,
    cb: (err: any, data?: DescribeAttackCommandOutput) => void
  ): void;
  public describeAttack(
    args: DescribeAttackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAttackCommandOutput) => void
  ): void;
  public describeAttack(
    args: DescribeAttackCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAttackCommandOutput) => void),
    cb?: (err: any, data?: DescribeAttackCommandOutput) => void
  ): Promise<DescribeAttackCommandOutput> | void {
    const command = new DescribeAttackCommand(args);
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
   * <p>Provides information about the number and type of attacks AWS Shield has detected in the last year for all resources that belong to your account, regardless of whether you've defined Shield protections for them. This operation is available to Shield customers as well as to Shield Advanced customers.</p>
   *          <p>The operation returns data for the time range of midnight UTC, one year ago, to midnight UTC, today. For example, if the current time is <code>2020-10-26 15:39:32 PDT</code>, equal to <code>2020-10-26 22:39:32 UTC</code>, then the time range for the attack data returned is from <code>2019-10-26 00:00:00 UTC</code> to <code>2020-10-26 00:00:00 UTC</code>. </p>
   *          <p>The time range indicates the period covered by the attack statistics data items.</p>
   */
  public describeAttackStatistics(
    args: DescribeAttackStatisticsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAttackStatisticsCommandOutput>;
  public describeAttackStatistics(
    args: DescribeAttackStatisticsCommandInput,
    cb: (err: any, data?: DescribeAttackStatisticsCommandOutput) => void
  ): void;
  public describeAttackStatistics(
    args: DescribeAttackStatisticsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAttackStatisticsCommandOutput) => void
  ): void;
  public describeAttackStatistics(
    args: DescribeAttackStatisticsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAttackStatisticsCommandOutput) => void),
    cb?: (err: any, data?: DescribeAttackStatisticsCommandOutput) => void
  ): Promise<DescribeAttackStatisticsCommandOutput> | void {
    const command = new DescribeAttackStatisticsCommand(args);
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
   * <p>Returns the current role and list of Amazon S3 log buckets used by the DDoS Response Team (DRT) to access your AWS account while assisting with attack mitigation.</p>
   */
  public describeDRTAccess(
    args: DescribeDRTAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDRTAccessCommandOutput>;
  public describeDRTAccess(
    args: DescribeDRTAccessCommandInput,
    cb: (err: any, data?: DescribeDRTAccessCommandOutput) => void
  ): void;
  public describeDRTAccess(
    args: DescribeDRTAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDRTAccessCommandOutput) => void
  ): void;
  public describeDRTAccess(
    args: DescribeDRTAccessCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDRTAccessCommandOutput) => void),
    cb?: (err: any, data?: DescribeDRTAccessCommandOutput) => void
  ): Promise<DescribeDRTAccessCommandOutput> | void {
    const command = new DescribeDRTAccessCommand(args);
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
   * <p>A list of email addresses and phone numbers that the DDoS Response Team (DRT) can use to contact you if you have proactive engagement enabled, for escalations to the DRT and to initiate proactive customer support.</p>
   */
  public describeEmergencyContactSettings(
    args: DescribeEmergencyContactSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEmergencyContactSettingsCommandOutput>;
  public describeEmergencyContactSettings(
    args: DescribeEmergencyContactSettingsCommandInput,
    cb: (err: any, data?: DescribeEmergencyContactSettingsCommandOutput) => void
  ): void;
  public describeEmergencyContactSettings(
    args: DescribeEmergencyContactSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEmergencyContactSettingsCommandOutput) => void
  ): void;
  public describeEmergencyContactSettings(
    args: DescribeEmergencyContactSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeEmergencyContactSettingsCommandOutput) => void),
    cb?: (err: any, data?: DescribeEmergencyContactSettingsCommandOutput) => void
  ): Promise<DescribeEmergencyContactSettingsCommandOutput> | void {
    const command = new DescribeEmergencyContactSettingsCommand(args);
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
   * <p>Lists the details of a <a>Protection</a> object.</p>
   */
  public describeProtection(
    args: DescribeProtectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeProtectionCommandOutput>;
  public describeProtection(
    args: DescribeProtectionCommandInput,
    cb: (err: any, data?: DescribeProtectionCommandOutput) => void
  ): void;
  public describeProtection(
    args: DescribeProtectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeProtectionCommandOutput) => void
  ): void;
  public describeProtection(
    args: DescribeProtectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeProtectionCommandOutput) => void),
    cb?: (err: any, data?: DescribeProtectionCommandOutput) => void
  ): Promise<DescribeProtectionCommandOutput> | void {
    const command = new DescribeProtectionCommand(args);
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
   * <p>Returns the specification for the specified protection group.</p>
   */
  public describeProtectionGroup(
    args: DescribeProtectionGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeProtectionGroupCommandOutput>;
  public describeProtectionGroup(
    args: DescribeProtectionGroupCommandInput,
    cb: (err: any, data?: DescribeProtectionGroupCommandOutput) => void
  ): void;
  public describeProtectionGroup(
    args: DescribeProtectionGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeProtectionGroupCommandOutput) => void
  ): void;
  public describeProtectionGroup(
    args: DescribeProtectionGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeProtectionGroupCommandOutput) => void),
    cb?: (err: any, data?: DescribeProtectionGroupCommandOutput) => void
  ): Promise<DescribeProtectionGroupCommandOutput> | void {
    const command = new DescribeProtectionGroupCommand(args);
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
   * <p>Provides details about the AWS Shield Advanced subscription for an account.</p>
   */
  public describeSubscription(
    args: DescribeSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSubscriptionCommandOutput>;
  public describeSubscription(
    args: DescribeSubscriptionCommandInput,
    cb: (err: any, data?: DescribeSubscriptionCommandOutput) => void
  ): void;
  public describeSubscription(
    args: DescribeSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSubscriptionCommandOutput) => void
  ): void;
  public describeSubscription(
    args: DescribeSubscriptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSubscriptionCommandOutput) => void),
    cb?: (err: any, data?: DescribeSubscriptionCommandOutput) => void
  ): Promise<DescribeSubscriptionCommandOutput> | void {
    const command = new DescribeSubscriptionCommand(args);
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
   * <p>Removes authorization from the DDoS Response Team (DRT) to notify contacts about escalations to the DRT and to initiate proactive customer support.</p>
   */
  public disableProactiveEngagement(
    args: DisableProactiveEngagementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableProactiveEngagementCommandOutput>;
  public disableProactiveEngagement(
    args: DisableProactiveEngagementCommandInput,
    cb: (err: any, data?: DisableProactiveEngagementCommandOutput) => void
  ): void;
  public disableProactiveEngagement(
    args: DisableProactiveEngagementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableProactiveEngagementCommandOutput) => void
  ): void;
  public disableProactiveEngagement(
    args: DisableProactiveEngagementCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisableProactiveEngagementCommandOutput) => void),
    cb?: (err: any, data?: DisableProactiveEngagementCommandOutput) => void
  ): Promise<DisableProactiveEngagementCommandOutput> | void {
    const command = new DisableProactiveEngagementCommand(args);
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
   * <p>Removes the DDoS Response Team's (DRT) access to the specified Amazon S3 bucket containing your AWS WAF logs.</p>
   * 	        <p>To make a <code>DisassociateDRTLogBucket</code> request, you must be subscribed to the <a href="https://aws.amazon.com/premiumsupport/business-support/">Business Support plan</a> or the <a href="https://aws.amazon.com/premiumsupport/enterprise-support/">Enterprise Support plan</a>. However, if you are not subscribed to one of these support plans, but had been previously and had granted the DRT access to your account, you can submit a <code>DisassociateDRTLogBucket</code> request to remove this access.</p>
   */
  public disassociateDRTLogBucket(
    args: DisassociateDRTLogBucketCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateDRTLogBucketCommandOutput>;
  public disassociateDRTLogBucket(
    args: DisassociateDRTLogBucketCommandInput,
    cb: (err: any, data?: DisassociateDRTLogBucketCommandOutput) => void
  ): void;
  public disassociateDRTLogBucket(
    args: DisassociateDRTLogBucketCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateDRTLogBucketCommandOutput) => void
  ): void;
  public disassociateDRTLogBucket(
    args: DisassociateDRTLogBucketCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateDRTLogBucketCommandOutput) => void),
    cb?: (err: any, data?: DisassociateDRTLogBucketCommandOutput) => void
  ): Promise<DisassociateDRTLogBucketCommandOutput> | void {
    const command = new DisassociateDRTLogBucketCommand(args);
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
   * <p>Removes the DDoS Response Team's (DRT) access to your AWS account.</p>
   * 	        <p>To make a <code>DisassociateDRTRole</code> request, you must be subscribed to the <a href="https://aws.amazon.com/premiumsupport/business-support/">Business Support plan</a> or the <a href="https://aws.amazon.com/premiumsupport/enterprise-support/">Enterprise Support plan</a>. However, if you are not subscribed to one of these support plans, but had been previously and had granted the DRT access to your account, you can submit a <code>DisassociateDRTRole</code> request to remove this access.</p>
   */
  public disassociateDRTRole(
    args: DisassociateDRTRoleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateDRTRoleCommandOutput>;
  public disassociateDRTRole(
    args: DisassociateDRTRoleCommandInput,
    cb: (err: any, data?: DisassociateDRTRoleCommandOutput) => void
  ): void;
  public disassociateDRTRole(
    args: DisassociateDRTRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateDRTRoleCommandOutput) => void
  ): void;
  public disassociateDRTRole(
    args: DisassociateDRTRoleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateDRTRoleCommandOutput) => void),
    cb?: (err: any, data?: DisassociateDRTRoleCommandOutput) => void
  ): Promise<DisassociateDRTRoleCommandOutput> | void {
    const command = new DisassociateDRTRoleCommand(args);
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
   * <p>Removes health-based detection from the Shield Advanced protection for a resource. Shield Advanced health-based detection uses the health of your AWS resource to improve responsiveness and accuracy in attack detection and mitigation. </p>
   *          <p>You define the health check in Route 53 and then associate or disassociate it with your Shield Advanced protection. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/ddos-overview.html#ddos-advanced-health-check-option">Shield Advanced Health-Based Detection</a> in the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF and AWS Shield Developer Guide</a>. </p>
   */
  public disassociateHealthCheck(
    args: DisassociateHealthCheckCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateHealthCheckCommandOutput>;
  public disassociateHealthCheck(
    args: DisassociateHealthCheckCommandInput,
    cb: (err: any, data?: DisassociateHealthCheckCommandOutput) => void
  ): void;
  public disassociateHealthCheck(
    args: DisassociateHealthCheckCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateHealthCheckCommandOutput) => void
  ): void;
  public disassociateHealthCheck(
    args: DisassociateHealthCheckCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateHealthCheckCommandOutput) => void),
    cb?: (err: any, data?: DisassociateHealthCheckCommandOutput) => void
  ): Promise<DisassociateHealthCheckCommandOutput> | void {
    const command = new DisassociateHealthCheckCommand(args);
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
   * <p>Authorizes the DDoS Response Team (DRT) to use email and phone to notify contacts about escalations to the DRT and to initiate proactive customer support.</p>
   */
  public enableProactiveEngagement(
    args: EnableProactiveEngagementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableProactiveEngagementCommandOutput>;
  public enableProactiveEngagement(
    args: EnableProactiveEngagementCommandInput,
    cb: (err: any, data?: EnableProactiveEngagementCommandOutput) => void
  ): void;
  public enableProactiveEngagement(
    args: EnableProactiveEngagementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableProactiveEngagementCommandOutput) => void
  ): void;
  public enableProactiveEngagement(
    args: EnableProactiveEngagementCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: EnableProactiveEngagementCommandOutput) => void),
    cb?: (err: any, data?: EnableProactiveEngagementCommandOutput) => void
  ): Promise<EnableProactiveEngagementCommandOutput> | void {
    const command = new EnableProactiveEngagementCommand(args);
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
   * <p>Returns the <code>SubscriptionState</code>, either <code>Active</code> or <code>Inactive</code>.</p>
   */
  public getSubscriptionState(
    args: GetSubscriptionStateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSubscriptionStateCommandOutput>;
  public getSubscriptionState(
    args: GetSubscriptionStateCommandInput,
    cb: (err: any, data?: GetSubscriptionStateCommandOutput) => void
  ): void;
  public getSubscriptionState(
    args: GetSubscriptionStateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSubscriptionStateCommandOutput) => void
  ): void;
  public getSubscriptionState(
    args: GetSubscriptionStateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSubscriptionStateCommandOutput) => void),
    cb?: (err: any, data?: GetSubscriptionStateCommandOutput) => void
  ): Promise<GetSubscriptionStateCommandOutput> | void {
    const command = new GetSubscriptionStateCommand(args);
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
   * <p>Returns all ongoing DDoS attacks or all DDoS attacks during a specified time
   *          period.</p>
   */
  public listAttacks(args: ListAttacksCommandInput, options?: __HttpHandlerOptions): Promise<ListAttacksCommandOutput>;
  public listAttacks(args: ListAttacksCommandInput, cb: (err: any, data?: ListAttacksCommandOutput) => void): void;
  public listAttacks(
    args: ListAttacksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAttacksCommandOutput) => void
  ): void;
  public listAttacks(
    args: ListAttacksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAttacksCommandOutput) => void),
    cb?: (err: any, data?: ListAttacksCommandOutput) => void
  ): Promise<ListAttacksCommandOutput> | void {
    const command = new ListAttacksCommand(args);
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
   * <p>Retrieves the <a>ProtectionGroup</a> objects for the account.</p>
   */
  public listProtectionGroups(
    args: ListProtectionGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProtectionGroupsCommandOutput>;
  public listProtectionGroups(
    args: ListProtectionGroupsCommandInput,
    cb: (err: any, data?: ListProtectionGroupsCommandOutput) => void
  ): void;
  public listProtectionGroups(
    args: ListProtectionGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProtectionGroupsCommandOutput) => void
  ): void;
  public listProtectionGroups(
    args: ListProtectionGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListProtectionGroupsCommandOutput) => void),
    cb?: (err: any, data?: ListProtectionGroupsCommandOutput) => void
  ): Promise<ListProtectionGroupsCommandOutput> | void {
    const command = new ListProtectionGroupsCommand(args);
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
   * <p>Lists all <a>Protection</a> objects for the account.</p>
   */
  public listProtections(
    args: ListProtectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProtectionsCommandOutput>;
  public listProtections(
    args: ListProtectionsCommandInput,
    cb: (err: any, data?: ListProtectionsCommandOutput) => void
  ): void;
  public listProtections(
    args: ListProtectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProtectionsCommandOutput) => void
  ): void;
  public listProtections(
    args: ListProtectionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListProtectionsCommandOutput) => void),
    cb?: (err: any, data?: ListProtectionsCommandOutput) => void
  ): Promise<ListProtectionsCommandOutput> | void {
    const command = new ListProtectionsCommand(args);
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
   * <p>Retrieves the resources that are included in the protection group. </p>
   */
  public listResourcesInProtectionGroup(
    args: ListResourcesInProtectionGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourcesInProtectionGroupCommandOutput>;
  public listResourcesInProtectionGroup(
    args: ListResourcesInProtectionGroupCommandInput,
    cb: (err: any, data?: ListResourcesInProtectionGroupCommandOutput) => void
  ): void;
  public listResourcesInProtectionGroup(
    args: ListResourcesInProtectionGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourcesInProtectionGroupCommandOutput) => void
  ): void;
  public listResourcesInProtectionGroup(
    args: ListResourcesInProtectionGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListResourcesInProtectionGroupCommandOutput) => void),
    cb?: (err: any, data?: ListResourcesInProtectionGroupCommandOutput) => void
  ): Promise<ListResourcesInProtectionGroupCommandOutput> | void {
    const command = new ListResourcesInProtectionGroupCommand(args);
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
   * <p>Updates the details of the list of email addresses and phone numbers that the DDoS Response Team (DRT) can use to contact you if you have proactive engagement enabled, for escalations to the DRT and to initiate proactive customer support.</p>
   */
  public updateEmergencyContactSettings(
    args: UpdateEmergencyContactSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEmergencyContactSettingsCommandOutput>;
  public updateEmergencyContactSettings(
    args: UpdateEmergencyContactSettingsCommandInput,
    cb: (err: any, data?: UpdateEmergencyContactSettingsCommandOutput) => void
  ): void;
  public updateEmergencyContactSettings(
    args: UpdateEmergencyContactSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEmergencyContactSettingsCommandOutput) => void
  ): void;
  public updateEmergencyContactSettings(
    args: UpdateEmergencyContactSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateEmergencyContactSettingsCommandOutput) => void),
    cb?: (err: any, data?: UpdateEmergencyContactSettingsCommandOutput) => void
  ): Promise<UpdateEmergencyContactSettingsCommandOutput> | void {
    const command = new UpdateEmergencyContactSettingsCommand(args);
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
   * <p>Updates an existing protection group. A protection group is a grouping of protected resources so they can be handled as a collective. This resource grouping improves the accuracy of detection and reduces false positives. </p>
   */
  public updateProtectionGroup(
    args: UpdateProtectionGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProtectionGroupCommandOutput>;
  public updateProtectionGroup(
    args: UpdateProtectionGroupCommandInput,
    cb: (err: any, data?: UpdateProtectionGroupCommandOutput) => void
  ): void;
  public updateProtectionGroup(
    args: UpdateProtectionGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProtectionGroupCommandOutput) => void
  ): void;
  public updateProtectionGroup(
    args: UpdateProtectionGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateProtectionGroupCommandOutput) => void),
    cb?: (err: any, data?: UpdateProtectionGroupCommandOutput) => void
  ): Promise<UpdateProtectionGroupCommandOutput> | void {
    const command = new UpdateProtectionGroupCommand(args);
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
   * <p>Updates the details of an existing subscription. Only enter values for parameters you want to change. Empty parameters are not updated.</p>
   */
  public updateSubscription(
    args: UpdateSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSubscriptionCommandOutput>;
  public updateSubscription(
    args: UpdateSubscriptionCommandInput,
    cb: (err: any, data?: UpdateSubscriptionCommandOutput) => void
  ): void;
  public updateSubscription(
    args: UpdateSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSubscriptionCommandOutput) => void
  ): void;
  public updateSubscription(
    args: UpdateSubscriptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSubscriptionCommandOutput) => void),
    cb?: (err: any, data?: UpdateSubscriptionCommandOutput) => void
  ): Promise<UpdateSubscriptionCommandOutput> | void {
    const command = new UpdateSubscriptionCommand(args);
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
