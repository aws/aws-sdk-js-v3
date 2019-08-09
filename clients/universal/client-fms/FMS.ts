import { FMSClient } from "./FMSClient";
import { AssociateAdminAccountInput } from "./types/AssociateAdminAccountInput";
import { AssociateAdminAccountOutput } from "./types/AssociateAdminAccountOutput";
import { DeleteNotificationChannelInput } from "./types/DeleteNotificationChannelInput";
import { DeleteNotificationChannelOutput } from "./types/DeleteNotificationChannelOutput";
import { DeletePolicyInput } from "./types/DeletePolicyInput";
import { DeletePolicyOutput } from "./types/DeletePolicyOutput";
import { DisassociateAdminAccountInput } from "./types/DisassociateAdminAccountInput";
import { DisassociateAdminAccountOutput } from "./types/DisassociateAdminAccountOutput";
import { GetAdminAccountInput } from "./types/GetAdminAccountInput";
import { GetAdminAccountOutput } from "./types/GetAdminAccountOutput";
import { GetComplianceDetailInput } from "./types/GetComplianceDetailInput";
import { GetComplianceDetailOutput } from "./types/GetComplianceDetailOutput";
import { GetNotificationChannelInput } from "./types/GetNotificationChannelInput";
import { GetNotificationChannelOutput } from "./types/GetNotificationChannelOutput";
import { GetPolicyInput } from "./types/GetPolicyInput";
import { GetPolicyOutput } from "./types/GetPolicyOutput";
import { GetProtectionStatusInput } from "./types/GetProtectionStatusInput";
import { GetProtectionStatusOutput } from "./types/GetProtectionStatusOutput";
import { InternalErrorException } from "./types/InternalErrorException";
import { InvalidInputException } from "./types/InvalidInputException";
import { InvalidOperationException } from "./types/InvalidOperationException";
import { InvalidTypeException } from "./types/InvalidTypeException";
import { LimitExceededException } from "./types/LimitExceededException";
import { ListComplianceStatusInput } from "./types/ListComplianceStatusInput";
import { ListComplianceStatusOutput } from "./types/ListComplianceStatusOutput";
import { ListMemberAccountsInput } from "./types/ListMemberAccountsInput";
import { ListMemberAccountsOutput } from "./types/ListMemberAccountsOutput";
import { ListPoliciesInput } from "./types/ListPoliciesInput";
import { ListPoliciesOutput } from "./types/ListPoliciesOutput";
import { PutNotificationChannelInput } from "./types/PutNotificationChannelInput";
import { PutNotificationChannelOutput } from "./types/PutNotificationChannelOutput";
import { PutPolicyInput } from "./types/PutPolicyInput";
import { PutPolicyOutput } from "./types/PutPolicyOutput";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { AssociateAdminAccountCommand } from "./commands/AssociateAdminAccountCommand";
import { DeleteNotificationChannelCommand } from "./commands/DeleteNotificationChannelCommand";
import { DeletePolicyCommand } from "./commands/DeletePolicyCommand";
import { DisassociateAdminAccountCommand } from "./commands/DisassociateAdminAccountCommand";
import { GetAdminAccountCommand } from "./commands/GetAdminAccountCommand";
import { GetComplianceDetailCommand } from "./commands/GetComplianceDetailCommand";
import { GetNotificationChannelCommand } from "./commands/GetNotificationChannelCommand";
import { GetPolicyCommand } from "./commands/GetPolicyCommand";
import { GetProtectionStatusCommand } from "./commands/GetProtectionStatusCommand";
import { ListComplianceStatusCommand } from "./commands/ListComplianceStatusCommand";
import { ListMemberAccountsCommand } from "./commands/ListMemberAccountsCommand";
import { ListPoliciesCommand } from "./commands/ListPoliciesCommand";
import { PutNotificationChannelCommand } from "./commands/PutNotificationChannelCommand";
import { PutPolicyCommand } from "./commands/PutPolicyCommand";

export class FMS extends FMSClient {
  /**
   * <p>Sets the AWS Firewall Manager administrator account. AWS Firewall Manager must be associated with the master account your AWS organization or associated with a member account that has the appropriate permissions. If the account ID that you submit is not an AWS Organizations master account, AWS Firewall Manager will set the appropriate permissions for the given member account.</p> <p>The account that you associate with AWS Firewall Manager is called the AWS Firewall Manager administrator account. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidOperationException} <p>The operation failed because there was nothing to do. For example, you might have submitted an <code>AssociateAdminAccount</code> request, but the account ID that you submitted was already set as the AWS Firewall Manager administrator.</p>
   *   - {InvalidInputException} <p>The parameters of the request were invalid.</p>
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {InternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public associateAdminAccount(
    args: AssociateAdminAccountInput
  ): Promise<AssociateAdminAccountOutput>;
  public associateAdminAccount(
    args: AssociateAdminAccountInput,
    cb: (err: any, data?: AssociateAdminAccountOutput) => void
  ): void;
  public associateAdminAccount(
    args: AssociateAdminAccountInput,
    cb?: (err: any, data?: AssociateAdminAccountOutput) => void
  ): Promise<AssociateAdminAccountOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AssociateAdminAccountCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an AWS Firewall Manager association with the IAM role and the Amazon Simple Notification Service (SNS) topic that is used to record AWS Firewall Manager SNS logs.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {InvalidOperationException} <p>The operation failed because there was nothing to do. For example, you might have submitted an <code>AssociateAdminAccount</code> request, but the account ID that you submitted was already set as the AWS Firewall Manager administrator.</p>
   *   - {InternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteNotificationChannel(
    args: DeleteNotificationChannelInput
  ): Promise<DeleteNotificationChannelOutput>;
  public deleteNotificationChannel(
    args: DeleteNotificationChannelInput,
    cb: (err: any, data?: DeleteNotificationChannelOutput) => void
  ): void;
  public deleteNotificationChannel(
    args: DeleteNotificationChannelInput,
    cb?: (err: any, data?: DeleteNotificationChannelOutput) => void
  ): Promise<DeleteNotificationChannelOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteNotificationChannelCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Permanently deletes an AWS Firewall Manager policy. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {InvalidOperationException} <p>The operation failed because there was nothing to do. For example, you might have submitted an <code>AssociateAdminAccount</code> request, but the account ID that you submitted was already set as the AWS Firewall Manager administrator.</p>
   *   - {InternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deletePolicy(args: DeletePolicyInput): Promise<DeletePolicyOutput>;
  public deletePolicy(
    args: DeletePolicyInput,
    cb: (err: any, data?: DeletePolicyOutput) => void
  ): void;
  public deletePolicy(
    args: DeletePolicyInput,
    cb?: (err: any, data?: DeletePolicyOutput) => void
  ): Promise<DeletePolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeletePolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disassociates the account that has been set as the AWS Firewall Manager administrator account. To set a different account as the administrator account, you must submit an <code>AssociateAdminAccount</code> request .</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidOperationException} <p>The operation failed because there was nothing to do. For example, you might have submitted an <code>AssociateAdminAccount</code> request, but the account ID that you submitted was already set as the AWS Firewall Manager administrator.</p>
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {InternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disassociateAdminAccount(
    args: DisassociateAdminAccountInput
  ): Promise<DisassociateAdminAccountOutput>;
  public disassociateAdminAccount(
    args: DisassociateAdminAccountInput,
    cb: (err: any, data?: DisassociateAdminAccountOutput) => void
  ): void;
  public disassociateAdminAccount(
    args: DisassociateAdminAccountInput,
    cb?: (err: any, data?: DisassociateAdminAccountOutput) => void
  ): Promise<DisassociateAdminAccountOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisassociateAdminAccountCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the AWS Organizations master account that is associated with AWS Firewall Manager as the AWS Firewall Manager administrator.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidOperationException} <p>The operation failed because there was nothing to do. For example, you might have submitted an <code>AssociateAdminAccount</code> request, but the account ID that you submitted was already set as the AWS Firewall Manager administrator.</p>
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {InternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getAdminAccount(
    args: GetAdminAccountInput
  ): Promise<GetAdminAccountOutput>;
  public getAdminAccount(
    args: GetAdminAccountInput,
    cb: (err: any, data?: GetAdminAccountOutput) => void
  ): void;
  public getAdminAccount(
    args: GetAdminAccountInput,
    cb?: (err: any, data?: GetAdminAccountOutput) => void
  ): Promise<GetAdminAccountOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetAdminAccountCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns detailed compliance information about the specified member account. Details include resources that are in and out of compliance with the specified policy. Resources are considered non-compliant if the specified policy has not been applied to them.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {InternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getComplianceDetail(
    args: GetComplianceDetailInput
  ): Promise<GetComplianceDetailOutput>;
  public getComplianceDetail(
    args: GetComplianceDetailInput,
    cb: (err: any, data?: GetComplianceDetailOutput) => void
  ): void;
  public getComplianceDetail(
    args: GetComplianceDetailInput,
    cb?: (err: any, data?: GetComplianceDetailOutput) => void
  ): Promise<GetComplianceDetailOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetComplianceDetailCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about the Amazon Simple Notification Service (SNS) topic that is used to record AWS Firewall Manager SNS logs.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {InvalidOperationException} <p>The operation failed because there was nothing to do. For example, you might have submitted an <code>AssociateAdminAccount</code> request, but the account ID that you submitted was already set as the AWS Firewall Manager administrator.</p>
   *   - {InternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getNotificationChannel(
    args: GetNotificationChannelInput
  ): Promise<GetNotificationChannelOutput>;
  public getNotificationChannel(
    args: GetNotificationChannelInput,
    cb: (err: any, data?: GetNotificationChannelOutput) => void
  ): void;
  public getNotificationChannel(
    args: GetNotificationChannelInput,
    cb?: (err: any, data?: GetNotificationChannelOutput) => void
  ): Promise<GetNotificationChannelOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetNotificationChannelCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about the specified AWS Firewall Manager policy.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {InvalidOperationException} <p>The operation failed because there was nothing to do. For example, you might have submitted an <code>AssociateAdminAccount</code> request, but the account ID that you submitted was already set as the AWS Firewall Manager administrator.</p>
   *   - {InternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {InvalidTypeException} <p>The value of the <code>Type</code> parameter is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getPolicy(args: GetPolicyInput): Promise<GetPolicyOutput>;
  public getPolicy(
    args: GetPolicyInput,
    cb: (err: any, data?: GetPolicyOutput) => void
  ): void;
  public getPolicy(
    args: GetPolicyInput,
    cb?: (err: any, data?: GetPolicyOutput) => void
  ): Promise<GetPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>If you created a Shield Advanced policy, returns policy-level attack summary information in the event of a potential DDoS attack.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The parameters of the request were invalid.</p>
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {InternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getProtectionStatus(
    args: GetProtectionStatusInput
  ): Promise<GetProtectionStatusOutput>;
  public getProtectionStatus(
    args: GetProtectionStatusInput,
    cb: (err: any, data?: GetProtectionStatusOutput) => void
  ): void;
  public getProtectionStatus(
    args: GetProtectionStatusInput,
    cb?: (err: any, data?: GetProtectionStatusOutput) => void
  ): Promise<GetProtectionStatusOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetProtectionStatusCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns an array of <code>PolicyComplianceStatus</code> objects in the response. Use <code>PolicyComplianceStatus</code> to get a summary of which member accounts are protected by the specified policy. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {InternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listComplianceStatus(
    args: ListComplianceStatusInput
  ): Promise<ListComplianceStatusOutput>;
  public listComplianceStatus(
    args: ListComplianceStatusInput,
    cb: (err: any, data?: ListComplianceStatusOutput) => void
  ): void;
  public listComplianceStatus(
    args: ListComplianceStatusInput,
    cb?: (err: any, data?: ListComplianceStatusOutput) => void
  ): Promise<ListComplianceStatusOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListComplianceStatusCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a <code>MemberAccounts</code> object that lists the member accounts in the administrator's AWS organization.</p> <p>The <code>ListMemberAccounts</code> must be submitted by the account that is set as the AWS Firewall Manager administrator.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {InternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listMemberAccounts(
    args: ListMemberAccountsInput
  ): Promise<ListMemberAccountsOutput>;
  public listMemberAccounts(
    args: ListMemberAccountsInput,
    cb: (err: any, data?: ListMemberAccountsOutput) => void
  ): void;
  public listMemberAccounts(
    args: ListMemberAccountsInput,
    cb?: (err: any, data?: ListMemberAccountsOutput) => void
  ): Promise<ListMemberAccountsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListMemberAccountsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns an array of <code>PolicySummary</code> objects in the response.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {InvalidOperationException} <p>The operation failed because there was nothing to do. For example, you might have submitted an <code>AssociateAdminAccount</code> request, but the account ID that you submitted was already set as the AWS Firewall Manager administrator.</p>
   *   - {LimitExceededException} <p>The operation exceeds a resource limit, for example, the maximum number of <code>policy</code> objects that you can create for an AWS account. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-limits.html">Firewall Manager Limits</a> in the <i>AWS WAF Developer Guide</i>.</p>
   *   - {InternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listPolicies(args: ListPoliciesInput): Promise<ListPoliciesOutput>;
  public listPolicies(
    args: ListPoliciesInput,
    cb: (err: any, data?: ListPoliciesOutput) => void
  ): void;
  public listPolicies(
    args: ListPoliciesInput,
    cb?: (err: any, data?: ListPoliciesOutput) => void
  ): Promise<ListPoliciesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListPoliciesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Designates the IAM role and Amazon Simple Notification Service (SNS) topic that AWS Firewall Manager uses to record SNS logs.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {InvalidOperationException} <p>The operation failed because there was nothing to do. For example, you might have submitted an <code>AssociateAdminAccount</code> request, but the account ID that you submitted was already set as the AWS Firewall Manager administrator.</p>
   *   - {InternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putNotificationChannel(
    args: PutNotificationChannelInput
  ): Promise<PutNotificationChannelOutput>;
  public putNotificationChannel(
    args: PutNotificationChannelInput,
    cb: (err: any, data?: PutNotificationChannelOutput) => void
  ): void;
  public putNotificationChannel(
    args: PutNotificationChannelInput,
    cb?: (err: any, data?: PutNotificationChannelOutput) => void
  ): Promise<PutNotificationChannelOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutNotificationChannelCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an AWS Firewall Manager policy.</p> <p>Firewall Manager provides two types of policies: A Shield Advanced policy, which applies Shield Advanced protection to specified accounts and resources, or a WAF policy, which contains a rule group and defines which resources are to be protected by that rule group. A policy is specific to either WAF or Shield Advanced. If you want to enforce both WAF rules and Shield Advanced protection across accounts, you can create multiple policies. You can create one or more policies for WAF rules, and one or more policies for Shield Advanced.</p> <p>You must be subscribed to Shield Advanced to create a Shield Advanced policy. For more information on subscribing to Shield Advanced, see <a href="https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_CreateSubscription.html">CreateSubscription</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ResourceNotFoundException} <p>The specified resource was not found.</p>
   *   - {InvalidOperationException} <p>The operation failed because there was nothing to do. For example, you might have submitted an <code>AssociateAdminAccount</code> request, but the account ID that you submitted was already set as the AWS Firewall Manager administrator.</p>
   *   - {InvalidInputException} <p>The parameters of the request were invalid.</p>
   *   - {LimitExceededException} <p>The operation exceeds a resource limit, for example, the maximum number of <code>policy</code> objects that you can create for an AWS account. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-limits.html">Firewall Manager Limits</a> in the <i>AWS WAF Developer Guide</i>.</p>
   *   - {InternalErrorException} <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
   *   - {InvalidTypeException} <p>The value of the <code>Type</code> parameter is invalid.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putPolicy(args: PutPolicyInput): Promise<PutPolicyOutput>;
  public putPolicy(
    args: PutPolicyInput,
    cb: (err: any, data?: PutPolicyOutput) => void
  ): void;
  public putPolicy(
    args: PutPolicyInput,
    cb?: (err: any, data?: PutPolicyOutput) => void
  ): Promise<PutPolicyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutPolicyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
