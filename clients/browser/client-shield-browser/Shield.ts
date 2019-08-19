import { ShieldClient } from "./ShieldClient";
import { AccessDeniedException } from "./types/AccessDeniedException";
import { AccessDeniedForDependencyException } from "./types/AccessDeniedForDependencyException";
import { AssociateDRTLogBucketInput } from "./types/AssociateDRTLogBucketInput";
import { AssociateDRTLogBucketOutput } from "./types/AssociateDRTLogBucketOutput";
import { AssociateDRTRoleInput } from "./types/AssociateDRTRoleInput";
import { AssociateDRTRoleOutput } from "./types/AssociateDRTRoleOutput";
import { CreateProtectionInput } from "./types/CreateProtectionInput";
import { CreateProtectionOutput } from "./types/CreateProtectionOutput";
import { CreateSubscriptionInput } from "./types/CreateSubscriptionInput";
import { CreateSubscriptionOutput } from "./types/CreateSubscriptionOutput";
import { DeleteProtectionInput } from "./types/DeleteProtectionInput";
import { DeleteProtectionOutput } from "./types/DeleteProtectionOutput";
import { DeleteSubscriptionInput } from "./types/DeleteSubscriptionInput";
import { DeleteSubscriptionOutput } from "./types/DeleteSubscriptionOutput";
import { DescribeAttackInput } from "./types/DescribeAttackInput";
import { DescribeAttackOutput } from "./types/DescribeAttackOutput";
import { DescribeDRTAccessInput } from "./types/DescribeDRTAccessInput";
import { DescribeDRTAccessOutput } from "./types/DescribeDRTAccessOutput";
import { DescribeEmergencyContactSettingsInput } from "./types/DescribeEmergencyContactSettingsInput";
import { DescribeEmergencyContactSettingsOutput } from "./types/DescribeEmergencyContactSettingsOutput";
import { DescribeProtectionInput } from "./types/DescribeProtectionInput";
import { DescribeProtectionOutput } from "./types/DescribeProtectionOutput";
import { DescribeSubscriptionInput } from "./types/DescribeSubscriptionInput";
import { DescribeSubscriptionOutput } from "./types/DescribeSubscriptionOutput";
import { DisassociateDRTLogBucketInput } from "./types/DisassociateDRTLogBucketInput";
import { DisassociateDRTLogBucketOutput } from "./types/DisassociateDRTLogBucketOutput";
import { DisassociateDRTRoleInput } from "./types/DisassociateDRTRoleInput";
import { DisassociateDRTRoleOutput } from "./types/DisassociateDRTRoleOutput";
import { GetSubscriptionStateInput } from "./types/GetSubscriptionStateInput";
import { GetSubscriptionStateOutput } from "./types/GetSubscriptionStateOutput";
import { InternalErrorException } from "./types/InternalErrorException";
import { InvalidOperationException } from "./types/InvalidOperationException";
import { InvalidPaginationTokenException } from "./types/InvalidPaginationTokenException";
import { InvalidParameterException } from "./types/InvalidParameterException";
import { InvalidResourceException } from "./types/InvalidResourceException";
import { LimitsExceededException } from "./types/LimitsExceededException";
import { ListAttacksInput } from "./types/ListAttacksInput";
import { ListAttacksOutput } from "./types/ListAttacksOutput";
import { ListProtectionsInput } from "./types/ListProtectionsInput";
import { ListProtectionsOutput } from "./types/ListProtectionsOutput";
import { LockedSubscriptionException } from "./types/LockedSubscriptionException";
import { NoAssociatedRoleException } from "./types/NoAssociatedRoleException";
import { OptimisticLockException } from "./types/OptimisticLockException";
import { ResourceAlreadyExistsException } from "./types/ResourceAlreadyExistsException";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { UpdateEmergencyContactSettingsInput } from "./types/UpdateEmergencyContactSettingsInput";
import { UpdateEmergencyContactSettingsOutput } from "./types/UpdateEmergencyContactSettingsOutput";
import { UpdateSubscriptionInput } from "./types/UpdateSubscriptionInput";
import { UpdateSubscriptionOutput } from "./types/UpdateSubscriptionOutput";
import { AssociateDRTLogBucketCommand } from "./commands/AssociateDRTLogBucketCommand";
import { AssociateDRTRoleCommand } from "./commands/AssociateDRTRoleCommand";
import { CreateProtectionCommand } from "./commands/CreateProtectionCommand";
import { CreateSubscriptionCommand } from "./commands/CreateSubscriptionCommand";
import { DeleteProtectionCommand } from "./commands/DeleteProtectionCommand";
import { DeleteSubscriptionCommand } from "./commands/DeleteSubscriptionCommand";
import { DescribeAttackCommand } from "./commands/DescribeAttackCommand";
import { DescribeDRTAccessCommand } from "./commands/DescribeDRTAccessCommand";
import { DescribeEmergencyContactSettingsCommand } from "./commands/DescribeEmergencyContactSettingsCommand";
import { DescribeProtectionCommand } from "./commands/DescribeProtectionCommand";
import { DescribeSubscriptionCommand } from "./commands/DescribeSubscriptionCommand";
import { DisassociateDRTLogBucketCommand } from "./commands/DisassociateDRTLogBucketCommand";
import { DisassociateDRTRoleCommand } from "./commands/DisassociateDRTRoleCommand";
import { GetSubscriptionStateCommand } from "./commands/GetSubscriptionStateCommand";
import { ListAttacksCommand } from "./commands/ListAttacksCommand";
import { ListProtectionsCommand } from "./commands/ListProtectionsCommand";
import { UpdateEmergencyContactSettingsCommand } from "./commands/UpdateEmergencyContactSettingsCommand";
import { UpdateSubscriptionCommand } from "./commands/UpdateSubscriptionCommand";

export class Shield extends ShieldClient {
  /**
   * <p>Authorizes the DDoS Response team (DRT) to access the specified Amazon S3 bucket containing your AWS WAF logs. You can associate up to 10 Amazon S3 buckets with your subscription.</p> <p>To use the services of the DRT and make an <code>AssociateDRTLogBucket</code> request, you must be subscribed to the <a href="https://aws.amazon.com/premiumsupport/business-support/">Business Support plan</a> or the <a href="https://aws.amazon.com/premiumsupport/enterprise-support/">Enterprise Support plan</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalErrorException} <p>Exception that indicates that a problem occurred with the service infrastructure. You can retry the request.</p>
   *   - {InvalidOperationException} <p>Exception that indicates that the operation would not cause any change to occur.</p>
   *   - {NoAssociatedRoleException} <p>The ARN of the role that you specifed does not exist.</p>
   *   - {LimitsExceededException} <p>Exception that indicates that the operation would exceed a limit.</p> <p> <code>Type</code> is the type of limit that would be exceeded.</p> <p> <code>Limit</code> is the threshold that would be exceeded.</p>
   *   - {InvalidParameterException} <p>Exception that indicates that the parameters passed to the API are invalid. </p>
   *   - {AccessDeniedForDependencyException} <p>In order to grant the necessary access to the DDoS Response Team, the user submitting <code>AssociateDRTRole</code> must have the <code>iam:PassRole</code> permission. This error indicates the user did not have the appropriate permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_passrole.html">Granting a User Permissions to Pass a Role to an AWS Service</a>. </p>
   *   - {OptimisticLockException} <p>Exception that indicates that the protection state has been modified by another client. You can retry the request.</p>
   *   - {ResourceNotFoundException} <p>Exception indicating the specified resource does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public associateDRTLogBucket(
    args: AssociateDRTLogBucketInput
  ): Promise<AssociateDRTLogBucketOutput>;
  public associateDRTLogBucket(
    args: AssociateDRTLogBucketInput,
    cb: (err: any, data?: AssociateDRTLogBucketOutput) => void
  ): void;
  public associateDRTLogBucket(
    args: AssociateDRTLogBucketInput,
    cb?: (err: any, data?: AssociateDRTLogBucketOutput) => void
  ): Promise<AssociateDRTLogBucketOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AssociateDRTLogBucketCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Authorizes the DDoS Response team (DRT), using the specified role, to access your AWS account to assist with DDoS attack mitigation during potential attacks. This enables the DRT to inspect your AWS WAF configuration and create or update AWS WAF rules and web ACLs.</p> <p>You can associate only one <code>RoleArn</code> with your subscription. If you submit an <code>AssociateDRTRole</code> request for an account that already has an associated role, the new <code>RoleArn</code> will replace the existing <code>RoleArn</code>. </p> <p>Prior to making the <code>AssociateDRTRole</code> request, you must attach the <a href="https://console.aws.amazon.com/iam/home?#/policies/arn:aws:iam::aws:policy/service-role/AWSShieldDRTAccessPolicy">AWSShieldDRTAccessPolicy</a> managed policy to the role you will specify in the request. For more information see <a href=" https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_manage-attach-detach.html">Attaching and Detaching IAM Policies</a>. The role must also trust the service principal <code> drt.shield.amazonaws.com</code>. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html">IAM JSON Policy Elements: Principal</a>.</p> <p>The DRT will have access only to your AWS WAF and Shield resources. By submitting this request, you authorize the DRT to inspect your AWS WAF and Shield configuration and create and update AWS WAF rules and web ACLs on your behalf. The DRT takes these actions only if explicitly authorized by you.</p> <p>You must have the <code>iam:PassRole</code> permission to make an <code>AssociateDRTRole</code> request. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_passrole.html">Granting a User Permissions to Pass a Role to an AWS Service</a>. </p> <p>To use the services of the DRT and make an <code>AssociateDRTRole</code> request, you must be subscribed to the <a href="https://aws.amazon.com/premiumsupport/business-support/">Business Support plan</a> or the <a href="https://aws.amazon.com/premiumsupport/enterprise-support/">Enterprise Support plan</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalErrorException} <p>Exception that indicates that a problem occurred with the service infrastructure. You can retry the request.</p>
   *   - {InvalidOperationException} <p>Exception that indicates that the operation would not cause any change to occur.</p>
   *   - {InvalidParameterException} <p>Exception that indicates that the parameters passed to the API are invalid. </p>
   *   - {AccessDeniedForDependencyException} <p>In order to grant the necessary access to the DDoS Response Team, the user submitting <code>AssociateDRTRole</code> must have the <code>iam:PassRole</code> permission. This error indicates the user did not have the appropriate permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_passrole.html">Granting a User Permissions to Pass a Role to an AWS Service</a>. </p>
   *   - {OptimisticLockException} <p>Exception that indicates that the protection state has been modified by another client. You can retry the request.</p>
   *   - {ResourceNotFoundException} <p>Exception indicating the specified resource does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public associateDRTRole(
    args: AssociateDRTRoleInput
  ): Promise<AssociateDRTRoleOutput>;
  public associateDRTRole(
    args: AssociateDRTRoleInput,
    cb: (err: any, data?: AssociateDRTRoleOutput) => void
  ): void;
  public associateDRTRole(
    args: AssociateDRTRoleInput,
    cb?: (err: any, data?: AssociateDRTRoleOutput) => void
  ): Promise<AssociateDRTRoleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AssociateDRTRoleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Enables AWS Shield Advanced for a specific AWS resource. The resource can be an Amazon CloudFront distribution, Elastic Load Balancing load balancer, AWS Global Accelerator accelerator, Elastic IP Address, or an Amazon Route 53 hosted zone.</p> <p>You can add protection to only a single resource with each CreateProtection request. If you want to add protection to multiple resources at once, use the <a href="https://console.aws.amazon.com/waf/">AWS WAF console</a>. For more information see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/getting-started-ddos.html">Getting Started with AWS Shield Advanced</a> and <a href="https://docs.aws.amazon.com/waf/latest/developerguide/configure-new-protection.html">Add AWS Shield Advanced Protection to more AWS Resources</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalErrorException} <p>Exception that indicates that a problem occurred with the service infrastructure. You can retry the request.</p>
   *   - {InvalidResourceException} <p>Exception that indicates that the resource is invalid. You might not have access to the resource, or the resource might not exist.</p>
   *   - {InvalidOperationException} <p>Exception that indicates that the operation would not cause any change to occur.</p>
   *   - {LimitsExceededException} <p>Exception that indicates that the operation would exceed a limit.</p> <p> <code>Type</code> is the type of limit that would be exceeded.</p> <p> <code>Limit</code> is the threshold that would be exceeded.</p>
   *   - {ResourceAlreadyExistsException} <p>Exception indicating the specified resource already exists.</p>
   *   - {OptimisticLockException} <p>Exception that indicates that the protection state has been modified by another client. You can retry the request.</p>
   *   - {ResourceNotFoundException} <p>Exception indicating the specified resource does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createProtection(
    args: CreateProtectionInput
  ): Promise<CreateProtectionOutput>;
  public createProtection(
    args: CreateProtectionInput,
    cb: (err: any, data?: CreateProtectionOutput) => void
  ): void;
  public createProtection(
    args: CreateProtectionInput,
    cb?: (err: any, data?: CreateProtectionOutput) => void
  ): Promise<CreateProtectionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateProtectionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Activates AWS Shield Advanced for an account.</p> <p>As part of this request you can specify <code>EmergencySettings</code> that automaticaly grant the DDoS response team (DRT) needed permissions to assist you during a suspected DDoS attack. For more information see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/authorize-DRT.html">Authorize the DDoS Response Team to Create Rules and Web ACLs on Your Behalf</a>.</p> <p>To use the services of the DRT, you must be subscribed to the <a href="https://aws.amazon.com/premiumsupport/business-support/">Business Support plan</a> or the <a href="https://aws.amazon.com/premiumsupport/enterprise-support/">Enterprise Support plan</a>.</p> <p>When you initally create a subscription, your subscription is set to be automatically renewed at the end of the existing subscription period. You can change this by submitting an <code>UpdateSubscription</code> request. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalErrorException} <p>Exception that indicates that a problem occurred with the service infrastructure. You can retry the request.</p>
   *   - {ResourceAlreadyExistsException} <p>Exception indicating the specified resource already exists.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createSubscription(
    args: CreateSubscriptionInput
  ): Promise<CreateSubscriptionOutput>;
  public createSubscription(
    args: CreateSubscriptionInput,
    cb: (err: any, data?: CreateSubscriptionOutput) => void
  ): void;
  public createSubscription(
    args: CreateSubscriptionInput,
    cb?: (err: any, data?: CreateSubscriptionOutput) => void
  ): Promise<CreateSubscriptionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateSubscriptionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an AWS Shield Advanced <a>Protection</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalErrorException} <p>Exception that indicates that a problem occurred with the service infrastructure. You can retry the request.</p>
   *   - {ResourceNotFoundException} <p>Exception indicating the specified resource does not exist.</p>
   *   - {OptimisticLockException} <p>Exception that indicates that the protection state has been modified by another client. You can retry the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteProtection(
    args: DeleteProtectionInput
  ): Promise<DeleteProtectionOutput>;
  public deleteProtection(
    args: DeleteProtectionInput,
    cb: (err: any, data?: DeleteProtectionOutput) => void
  ): void;
  public deleteProtection(
    args: DeleteProtectionInput,
    cb?: (err: any, data?: DeleteProtectionOutput) => void
  ): Promise<DeleteProtectionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteProtectionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes AWS Shield Advanced from an account. AWS Shield Advanced requires a 1-year subscription commitment. You cannot delete a subscription prior to the completion of that commitment. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalErrorException} <p>Exception that indicates that a problem occurred with the service infrastructure. You can retry the request.</p>
   *   - {LockedSubscriptionException} <p>You are trying to update a subscription that has not yet completed the 1-year commitment. You can change the <code>AutoRenew</code> parameter during the last 30 days of your subscription. This exception indicates that you are attempting to change <code>AutoRenew</code> prior to that period.</p>
   *   - {ResourceNotFoundException} <p>Exception indicating the specified resource does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteSubscription(
    args: DeleteSubscriptionInput
  ): Promise<DeleteSubscriptionOutput>;
  public deleteSubscription(
    args: DeleteSubscriptionInput,
    cb: (err: any, data?: DeleteSubscriptionOutput) => void
  ): void;
  public deleteSubscription(
    args: DeleteSubscriptionInput,
    cb?: (err: any, data?: DeleteSubscriptionOutput) => void
  ): Promise<DeleteSubscriptionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteSubscriptionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the details of a DDoS attack. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalErrorException} <p>Exception that indicates that a problem occurred with the service infrastructure. You can retry the request.</p>
   *   - {AccessDeniedException} <p>Exception that indicates the specified <code>AttackId</code> does not exist, or the requester does not have the appropriate permissions to access the <code>AttackId</code>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeAttack(
    args: DescribeAttackInput
  ): Promise<DescribeAttackOutput>;
  public describeAttack(
    args: DescribeAttackInput,
    cb: (err: any, data?: DescribeAttackOutput) => void
  ): void;
  public describeAttack(
    args: DescribeAttackInput,
    cb?: (err: any, data?: DescribeAttackOutput) => void
  ): Promise<DescribeAttackOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeAttackCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the current role and list of Amazon S3 log buckets used by the DDoS Response team (DRT) to access your AWS account while assisting with attack mitigation.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalErrorException} <p>Exception that indicates that a problem occurred with the service infrastructure. You can retry the request.</p>
   *   - {ResourceNotFoundException} <p>Exception indicating the specified resource does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDRTAccess(
    args: DescribeDRTAccessInput
  ): Promise<DescribeDRTAccessOutput>;
  public describeDRTAccess(
    args: DescribeDRTAccessInput,
    cb: (err: any, data?: DescribeDRTAccessOutput) => void
  ): void;
  public describeDRTAccess(
    args: DescribeDRTAccessInput,
    cb?: (err: any, data?: DescribeDRTAccessOutput) => void
  ): Promise<DescribeDRTAccessOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDRTAccessCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the email addresses that the DRT can use to contact you during a suspected attack.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalErrorException} <p>Exception that indicates that a problem occurred with the service infrastructure. You can retry the request.</p>
   *   - {ResourceNotFoundException} <p>Exception indicating the specified resource does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeEmergencyContactSettings(
    args: DescribeEmergencyContactSettingsInput
  ): Promise<DescribeEmergencyContactSettingsOutput>;
  public describeEmergencyContactSettings(
    args: DescribeEmergencyContactSettingsInput,
    cb: (err: any, data?: DescribeEmergencyContactSettingsOutput) => void
  ): void;
  public describeEmergencyContactSettings(
    args: DescribeEmergencyContactSettingsInput,
    cb?: (err: any, data?: DescribeEmergencyContactSettingsOutput) => void
  ): Promise<DescribeEmergencyContactSettingsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeEmergencyContactSettingsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the details of a <a>Protection</a> object.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalErrorException} <p>Exception that indicates that a problem occurred with the service infrastructure. You can retry the request.</p>
   *   - {InvalidParameterException} <p>Exception that indicates that the parameters passed to the API are invalid. </p>
   *   - {ResourceNotFoundException} <p>Exception indicating the specified resource does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeProtection(
    args: DescribeProtectionInput
  ): Promise<DescribeProtectionOutput>;
  public describeProtection(
    args: DescribeProtectionInput,
    cb: (err: any, data?: DescribeProtectionOutput) => void
  ): void;
  public describeProtection(
    args: DescribeProtectionInput,
    cb?: (err: any, data?: DescribeProtectionOutput) => void
  ): Promise<DescribeProtectionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeProtectionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Provides details about the AWS Shield Advanced subscription for an account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalErrorException} <p>Exception that indicates that a problem occurred with the service infrastructure. You can retry the request.</p>
   *   - {ResourceNotFoundException} <p>Exception indicating the specified resource does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeSubscription(
    args: DescribeSubscriptionInput
  ): Promise<DescribeSubscriptionOutput>;
  public describeSubscription(
    args: DescribeSubscriptionInput,
    cb: (err: any, data?: DescribeSubscriptionOutput) => void
  ): void;
  public describeSubscription(
    args: DescribeSubscriptionInput,
    cb?: (err: any, data?: DescribeSubscriptionOutput) => void
  ): Promise<DescribeSubscriptionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeSubscriptionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes the DDoS Response team's (DRT) access to the specified Amazon S3 bucket containing your AWS WAF logs.</p> <p>To make a <code>DisassociateDRTLogBucket</code> request, you must be subscribed to the <a href="https://aws.amazon.com/premiumsupport/business-support/">Business Support plan</a> or the <a href="https://aws.amazon.com/premiumsupport/enterprise-support/">Enterprise Support plan</a>. However, if you are not subscribed to one of these support plans, but had been previously and had granted the DRT access to your account, you can submit a <code>DisassociateDRTLogBucket</code> request to remove this access.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalErrorException} <p>Exception that indicates that a problem occurred with the service infrastructure. You can retry the request.</p>
   *   - {InvalidOperationException} <p>Exception that indicates that the operation would not cause any change to occur.</p>
   *   - {NoAssociatedRoleException} <p>The ARN of the role that you specifed does not exist.</p>
   *   - {AccessDeniedForDependencyException} <p>In order to grant the necessary access to the DDoS Response Team, the user submitting <code>AssociateDRTRole</code> must have the <code>iam:PassRole</code> permission. This error indicates the user did not have the appropriate permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_passrole.html">Granting a User Permissions to Pass a Role to an AWS Service</a>. </p>
   *   - {OptimisticLockException} <p>Exception that indicates that the protection state has been modified by another client. You can retry the request.</p>
   *   - {ResourceNotFoundException} <p>Exception indicating the specified resource does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disassociateDRTLogBucket(
    args: DisassociateDRTLogBucketInput
  ): Promise<DisassociateDRTLogBucketOutput>;
  public disassociateDRTLogBucket(
    args: DisassociateDRTLogBucketInput,
    cb: (err: any, data?: DisassociateDRTLogBucketOutput) => void
  ): void;
  public disassociateDRTLogBucket(
    args: DisassociateDRTLogBucketInput,
    cb?: (err: any, data?: DisassociateDRTLogBucketOutput) => void
  ): Promise<DisassociateDRTLogBucketOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisassociateDRTLogBucketCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes the DDoS Response team's (DRT) access to your AWS account.</p> <p>To make a <code>DisassociateDRTRole</code> request, you must be subscribed to the <a href="https://aws.amazon.com/premiumsupport/business-support/">Business Support plan</a> or the <a href="https://aws.amazon.com/premiumsupport/enterprise-support/">Enterprise Support plan</a>. However, if you are not subscribed to one of these support plans, but had been previously and had granted the DRT access to your account, you can submit a <code>DisassociateDRTRole</code> request to remove this access.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalErrorException} <p>Exception that indicates that a problem occurred with the service infrastructure. You can retry the request.</p>
   *   - {InvalidOperationException} <p>Exception that indicates that the operation would not cause any change to occur.</p>
   *   - {OptimisticLockException} <p>Exception that indicates that the protection state has been modified by another client. You can retry the request.</p>
   *   - {ResourceNotFoundException} <p>Exception indicating the specified resource does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disassociateDRTRole(
    args: DisassociateDRTRoleInput
  ): Promise<DisassociateDRTRoleOutput>;
  public disassociateDRTRole(
    args: DisassociateDRTRoleInput,
    cb: (err: any, data?: DisassociateDRTRoleOutput) => void
  ): void;
  public disassociateDRTRole(
    args: DisassociateDRTRoleInput,
    cb?: (err: any, data?: DisassociateDRTRoleOutput) => void
  ): Promise<DisassociateDRTRoleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisassociateDRTRoleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the <code>SubscriptionState</code>, either <code>Active</code> or <code>Inactive</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalErrorException} <p>Exception that indicates that a problem occurred with the service infrastructure. You can retry the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getSubscriptionState(
    args: GetSubscriptionStateInput
  ): Promise<GetSubscriptionStateOutput>;
  public getSubscriptionState(
    args: GetSubscriptionStateInput,
    cb: (err: any, data?: GetSubscriptionStateOutput) => void
  ): void;
  public getSubscriptionState(
    args: GetSubscriptionStateInput,
    cb?: (err: any, data?: GetSubscriptionStateOutput) => void
  ): Promise<GetSubscriptionStateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetSubscriptionStateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns all ongoing DDoS attacks or all DDoS attacks during a specified time period.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalErrorException} <p>Exception that indicates that a problem occurred with the service infrastructure. You can retry the request.</p>
   *   - {InvalidParameterException} <p>Exception that indicates that the parameters passed to the API are invalid. </p>
   *   - {InvalidOperationException} <p>Exception that indicates that the operation would not cause any change to occur.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listAttacks(args: ListAttacksInput): Promise<ListAttacksOutput>;
  public listAttacks(
    args: ListAttacksInput,
    cb: (err: any, data?: ListAttacksOutput) => void
  ): void;
  public listAttacks(
    args: ListAttacksInput,
    cb?: (err: any, data?: ListAttacksOutput) => void
  ): Promise<ListAttacksOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListAttacksCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all <a>Protection</a> objects for the account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalErrorException} <p>Exception that indicates that a problem occurred with the service infrastructure. You can retry the request.</p>
   *   - {ResourceNotFoundException} <p>Exception indicating the specified resource does not exist.</p>
   *   - {InvalidPaginationTokenException} <p>Exception that indicates that the NextToken specified in the request is invalid. Submit the request using the NextToken value that was returned in the response.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listProtections(
    args: ListProtectionsInput
  ): Promise<ListProtectionsOutput>;
  public listProtections(
    args: ListProtectionsInput,
    cb: (err: any, data?: ListProtectionsOutput) => void
  ): void;
  public listProtections(
    args: ListProtectionsInput,
    cb?: (err: any, data?: ListProtectionsOutput) => void
  ): Promise<ListProtectionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListProtectionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the details of the list of email addresses that the DRT can use to contact you during a suspected attack.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalErrorException} <p>Exception that indicates that a problem occurred with the service infrastructure. You can retry the request.</p>
   *   - {InvalidParameterException} <p>Exception that indicates that the parameters passed to the API are invalid. </p>
   *   - {OptimisticLockException} <p>Exception that indicates that the protection state has been modified by another client. You can retry the request.</p>
   *   - {ResourceNotFoundException} <p>Exception indicating the specified resource does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateEmergencyContactSettings(
    args: UpdateEmergencyContactSettingsInput
  ): Promise<UpdateEmergencyContactSettingsOutput>;
  public updateEmergencyContactSettings(
    args: UpdateEmergencyContactSettingsInput,
    cb: (err: any, data?: UpdateEmergencyContactSettingsOutput) => void
  ): void;
  public updateEmergencyContactSettings(
    args: UpdateEmergencyContactSettingsInput,
    cb?: (err: any, data?: UpdateEmergencyContactSettingsOutput) => void
  ): Promise<UpdateEmergencyContactSettingsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateEmergencyContactSettingsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the details of an existing subscription. Only enter values for parameters you want to change. Empty parameters are not updated.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalErrorException} <p>Exception that indicates that a problem occurred with the service infrastructure. You can retry the request.</p>
   *   - {LockedSubscriptionException} <p>You are trying to update a subscription that has not yet completed the 1-year commitment. You can change the <code>AutoRenew</code> parameter during the last 30 days of your subscription. This exception indicates that you are attempting to change <code>AutoRenew</code> prior to that period.</p>
   *   - {ResourceNotFoundException} <p>Exception indicating the specified resource does not exist.</p>
   *   - {InvalidParameterException} <p>Exception that indicates that the parameters passed to the API are invalid. </p>
   *   - {OptimisticLockException} <p>Exception that indicates that the protection state has been modified by another client. You can retry the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateSubscription(
    args: UpdateSubscriptionInput
  ): Promise<UpdateSubscriptionOutput>;
  public updateSubscription(
    args: UpdateSubscriptionInput,
    cb: (err: any, data?: UpdateSubscriptionOutput) => void
  ): void;
  public updateSubscription(
    args: UpdateSubscriptionInput,
    cb?: (err: any, data?: UpdateSubscriptionOutput) => void
  ): Promise<UpdateSubscriptionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateSubscriptionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
