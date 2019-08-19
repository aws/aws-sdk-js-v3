import { ServiceQuotasClient } from "./ServiceQuotasClient";
import { AWSServiceAccessNotEnabledException } from "./types/AWSServiceAccessNotEnabledException";
import { AccessDeniedException } from "./types/AccessDeniedException";
import { AssociateServiceQuotaTemplateInput } from "./types/AssociateServiceQuotaTemplateInput";
import { AssociateServiceQuotaTemplateOutput } from "./types/AssociateServiceQuotaTemplateOutput";
import { DeleteServiceQuotaIncreaseRequestFromTemplateInput } from "./types/DeleteServiceQuotaIncreaseRequestFromTemplateInput";
import { DeleteServiceQuotaIncreaseRequestFromTemplateOutput } from "./types/DeleteServiceQuotaIncreaseRequestFromTemplateOutput";
import { DependencyAccessDeniedException } from "./types/DependencyAccessDeniedException";
import { DisassociateServiceQuotaTemplateInput } from "./types/DisassociateServiceQuotaTemplateInput";
import { DisassociateServiceQuotaTemplateOutput } from "./types/DisassociateServiceQuotaTemplateOutput";
import { GetAWSDefaultServiceQuotaInput } from "./types/GetAWSDefaultServiceQuotaInput";
import { GetAWSDefaultServiceQuotaOutput } from "./types/GetAWSDefaultServiceQuotaOutput";
import { GetAssociationForServiceQuotaTemplateInput } from "./types/GetAssociationForServiceQuotaTemplateInput";
import { GetAssociationForServiceQuotaTemplateOutput } from "./types/GetAssociationForServiceQuotaTemplateOutput";
import { GetRequestedServiceQuotaChangeInput } from "./types/GetRequestedServiceQuotaChangeInput";
import { GetRequestedServiceQuotaChangeOutput } from "./types/GetRequestedServiceQuotaChangeOutput";
import { GetServiceQuotaIncreaseRequestFromTemplateInput } from "./types/GetServiceQuotaIncreaseRequestFromTemplateInput";
import { GetServiceQuotaIncreaseRequestFromTemplateOutput } from "./types/GetServiceQuotaIncreaseRequestFromTemplateOutput";
import { GetServiceQuotaInput } from "./types/GetServiceQuotaInput";
import { GetServiceQuotaOutput } from "./types/GetServiceQuotaOutput";
import { IllegalArgumentException } from "./types/IllegalArgumentException";
import { InvalidPaginationTokenException } from "./types/InvalidPaginationTokenException";
import { InvalidResourceStateException } from "./types/InvalidResourceStateException";
import { ListAWSDefaultServiceQuotasInput } from "./types/ListAWSDefaultServiceQuotasInput";
import { ListAWSDefaultServiceQuotasOutput } from "./types/ListAWSDefaultServiceQuotasOutput";
import { ListRequestedServiceQuotaChangeHistoryByQuotaInput } from "./types/ListRequestedServiceQuotaChangeHistoryByQuotaInput";
import { ListRequestedServiceQuotaChangeHistoryByQuotaOutput } from "./types/ListRequestedServiceQuotaChangeHistoryByQuotaOutput";
import { ListRequestedServiceQuotaChangeHistoryInput } from "./types/ListRequestedServiceQuotaChangeHistoryInput";
import { ListRequestedServiceQuotaChangeHistoryOutput } from "./types/ListRequestedServiceQuotaChangeHistoryOutput";
import { ListServiceQuotaIncreaseRequestsInTemplateInput } from "./types/ListServiceQuotaIncreaseRequestsInTemplateInput";
import { ListServiceQuotaIncreaseRequestsInTemplateOutput } from "./types/ListServiceQuotaIncreaseRequestsInTemplateOutput";
import { ListServiceQuotasInput } from "./types/ListServiceQuotasInput";
import { ListServiceQuotasOutput } from "./types/ListServiceQuotasOutput";
import { ListServicesInput } from "./types/ListServicesInput";
import { ListServicesOutput } from "./types/ListServicesOutput";
import { NoAvailableOrganizationException } from "./types/NoAvailableOrganizationException";
import { NoSuchResourceException } from "./types/NoSuchResourceException";
import { OrganizationNotInAllFeaturesModeException } from "./types/OrganizationNotInAllFeaturesModeException";
import { PutServiceQuotaIncreaseRequestIntoTemplateInput } from "./types/PutServiceQuotaIncreaseRequestIntoTemplateInput";
import { PutServiceQuotaIncreaseRequestIntoTemplateOutput } from "./types/PutServiceQuotaIncreaseRequestIntoTemplateOutput";
import { QuotaExceededException } from "./types/QuotaExceededException";
import { RequestServiceQuotaIncreaseInput } from "./types/RequestServiceQuotaIncreaseInput";
import { RequestServiceQuotaIncreaseOutput } from "./types/RequestServiceQuotaIncreaseOutput";
import { ResourceAlreadyExistsException } from "./types/ResourceAlreadyExistsException";
import { ServiceException } from "./types/ServiceException";
import { ServiceQuotaTemplateNotInUseException } from "./types/ServiceQuotaTemplateNotInUseException";
import { TemplatesNotAvailableInRegionException } from "./types/TemplatesNotAvailableInRegionException";
import { TooManyRequestsException } from "./types/TooManyRequestsException";
import { AssociateServiceQuotaTemplateCommand } from "./commands/AssociateServiceQuotaTemplateCommand";
import { DeleteServiceQuotaIncreaseRequestFromTemplateCommand } from "./commands/DeleteServiceQuotaIncreaseRequestFromTemplateCommand";
import { DisassociateServiceQuotaTemplateCommand } from "./commands/DisassociateServiceQuotaTemplateCommand";
import { GetAWSDefaultServiceQuotaCommand } from "./commands/GetAWSDefaultServiceQuotaCommand";
import { GetAssociationForServiceQuotaTemplateCommand } from "./commands/GetAssociationForServiceQuotaTemplateCommand";
import { GetRequestedServiceQuotaChangeCommand } from "./commands/GetRequestedServiceQuotaChangeCommand";
import { GetServiceQuotaCommand } from "./commands/GetServiceQuotaCommand";
import { GetServiceQuotaIncreaseRequestFromTemplateCommand } from "./commands/GetServiceQuotaIncreaseRequestFromTemplateCommand";
import { ListAWSDefaultServiceQuotasCommand } from "./commands/ListAWSDefaultServiceQuotasCommand";
import { ListRequestedServiceQuotaChangeHistoryByQuotaCommand } from "./commands/ListRequestedServiceQuotaChangeHistoryByQuotaCommand";
import { ListRequestedServiceQuotaChangeHistoryCommand } from "./commands/ListRequestedServiceQuotaChangeHistoryCommand";
import { ListServiceQuotaIncreaseRequestsInTemplateCommand } from "./commands/ListServiceQuotaIncreaseRequestsInTemplateCommand";
import { ListServiceQuotasCommand } from "./commands/ListServiceQuotasCommand";
import { ListServicesCommand } from "./commands/ListServicesCommand";
import { PutServiceQuotaIncreaseRequestIntoTemplateCommand } from "./commands/PutServiceQuotaIncreaseRequestIntoTemplateCommand";
import { RequestServiceQuotaIncreaseCommand } from "./commands/RequestServiceQuotaIncreaseCommand";

export class ServiceQuotas extends ServiceQuotasClient {
  /**
   * <p>Associates the Service Quotas template with your organization so that when new accounts are created in your organization, the template submits increase requests for the specified service quotas. Use the Service Quotas template to request an increase for any adjustable quota value. After you define the Service Quotas template, use this operation to associate, or enable, the template. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {DependencyAccessDeniedException} <p>You can't perform this action because a dependency does not have access.</p>
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {ServiceException} <p>Something went wrong. </p>
   *   - {TooManyRequestsException} <p>Due to throttling, the request was denied. Slow down the rate of request calls, or request an increase for this quota. </p>
   *   - {AWSServiceAccessNotEnabledException} <p>The action you attempted is not allowed unless Service Access with Service Quotas is enabled in your organization. To enable, call <a>AssociateServiceQuotaTemplate</a>.</p>
   *   - {OrganizationNotInAllFeaturesModeException} <p>The organization that your account belongs to, is not in All Features mode. To enable all features mode, see <a href="https://docs.aws.amazon.com/organizations/latest/APIReference/API_EnableAllFeatures.html">EnableAllFeatures</a>.</p>
   *   - {TemplatesNotAvailableInRegionException} <p>The Service Quotas template is not available in the Region where you are making the request. Please make the request in us-east-1. </p>
   *   - {NoAvailableOrganizationException} <p>The account making this call is not a member of an organization.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public associateServiceQuotaTemplate(
    args: AssociateServiceQuotaTemplateInput
  ): Promise<AssociateServiceQuotaTemplateOutput>;
  public associateServiceQuotaTemplate(
    args: AssociateServiceQuotaTemplateInput,
    cb: (err: any, data?: AssociateServiceQuotaTemplateOutput) => void
  ): void;
  public associateServiceQuotaTemplate(
    args: AssociateServiceQuotaTemplateInput,
    cb?: (err: any, data?: AssociateServiceQuotaTemplateOutput) => void
  ): Promise<AssociateServiceQuotaTemplateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AssociateServiceQuotaTemplateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes a service quota increase request from the Service Quotas template. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {ServiceException} <p>Something went wrong. </p>
   *   - {DependencyAccessDeniedException} <p>You can't perform this action because a dependency does not have access.</p>
   *   - {TooManyRequestsException} <p>Due to throttling, the request was denied. Slow down the rate of request calls, or request an increase for this quota. </p>
   *   - {NoSuchResourceException} <p>The specified resource does not exist.</p>
   *   - {IllegalArgumentException} <p>Invalid input was provided. </p>
   *   - {AWSServiceAccessNotEnabledException} <p>The action you attempted is not allowed unless Service Access with Service Quotas is enabled in your organization. To enable, call <a>AssociateServiceQuotaTemplate</a>.</p>
   *   - {TemplatesNotAvailableInRegionException} <p>The Service Quotas template is not available in the Region where you are making the request. Please make the request in us-east-1. </p>
   *   - {NoAvailableOrganizationException} <p>The account making this call is not a member of an organization.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteServiceQuotaIncreaseRequestFromTemplate(
    args: DeleteServiceQuotaIncreaseRequestFromTemplateInput
  ): Promise<DeleteServiceQuotaIncreaseRequestFromTemplateOutput>;
  public deleteServiceQuotaIncreaseRequestFromTemplate(
    args: DeleteServiceQuotaIncreaseRequestFromTemplateInput,
    cb: (
      err: any,
      data?: DeleteServiceQuotaIncreaseRequestFromTemplateOutput
    ) => void
  ): void;
  public deleteServiceQuotaIncreaseRequestFromTemplate(
    args: DeleteServiceQuotaIncreaseRequestFromTemplateInput,
    cb?: (
      err: any,
      data?: DeleteServiceQuotaIncreaseRequestFromTemplateOutput
    ) => void
  ): Promise<DeleteServiceQuotaIncreaseRequestFromTemplateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteServiceQuotaIncreaseRequestFromTemplateCommand(
      args
    );
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disables the Service Quotas template. Once the template is disabled, it does not request quota increases for new accounts in your organization. Disabling the quota template does not apply the quota increase requests from the template. </p> <p> <b>Related operations</b> </p> <ul> <li> <p>To enable the quota template, call <a>AssociateServiceQuotaTemplate</a>. </p> </li> <li> <p>To delete a specific service quota from the template, use <a>DeleteServiceQuotaIncreaseRequestFromTemplate</a>.</p> </li> </ul>
   *
   * This operation may fail with one of the following errors:
   *   - {DependencyAccessDeniedException} <p>You can't perform this action because a dependency does not have access.</p>
   *   - {ServiceQuotaTemplateNotInUseException} <p>The quota request template is not associated with your organization. </p> <p>To use the template, call <a>AssociateServiceQuotaTemplate</a>. </p>
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {ServiceException} <p>Something went wrong. </p>
   *   - {TooManyRequestsException} <p>Due to throttling, the request was denied. Slow down the rate of request calls, or request an increase for this quota. </p>
   *   - {AWSServiceAccessNotEnabledException} <p>The action you attempted is not allowed unless Service Access with Service Quotas is enabled in your organization. To enable, call <a>AssociateServiceQuotaTemplate</a>.</p>
   *   - {TemplatesNotAvailableInRegionException} <p>The Service Quotas template is not available in the Region where you are making the request. Please make the request in us-east-1. </p>
   *   - {NoAvailableOrganizationException} <p>The account making this call is not a member of an organization.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disassociateServiceQuotaTemplate(
    args: DisassociateServiceQuotaTemplateInput
  ): Promise<DisassociateServiceQuotaTemplateOutput>;
  public disassociateServiceQuotaTemplate(
    args: DisassociateServiceQuotaTemplateInput,
    cb: (err: any, data?: DisassociateServiceQuotaTemplateOutput) => void
  ): void;
  public disassociateServiceQuotaTemplate(
    args: DisassociateServiceQuotaTemplateInput,
    cb?: (err: any, data?: DisassociateServiceQuotaTemplateOutput) => void
  ): Promise<DisassociateServiceQuotaTemplateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisassociateServiceQuotaTemplateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the default service quotas values. The Value returned for each quota is the AWS default value, even if the quotas have been increased.. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {NoSuchResourceException} <p>The specified resource does not exist.</p>
   *   - {IllegalArgumentException} <p>Invalid input was provided. </p>
   *   - {ServiceException} <p>Something went wrong. </p>
   *   - {TooManyRequestsException} <p>Due to throttling, the request was denied. Slow down the rate of request calls, or request an increase for this quota. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getAWSDefaultServiceQuota(
    args: GetAWSDefaultServiceQuotaInput
  ): Promise<GetAWSDefaultServiceQuotaOutput>;
  public getAWSDefaultServiceQuota(
    args: GetAWSDefaultServiceQuotaInput,
    cb: (err: any, data?: GetAWSDefaultServiceQuotaOutput) => void
  ): void;
  public getAWSDefaultServiceQuota(
    args: GetAWSDefaultServiceQuotaInput,
    cb?: (err: any, data?: GetAWSDefaultServiceQuotaOutput) => void
  ): Promise<GetAWSDefaultServiceQuotaOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetAWSDefaultServiceQuotaCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the <code>ServiceQuotaTemplateAssociationStatus</code> value from the service. Use this action to determine if the Service Quota template is associated, or enabled. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {DependencyAccessDeniedException} <p>You can't perform this action because a dependency does not have access.</p>
   *   - {ServiceQuotaTemplateNotInUseException} <p>The quota request template is not associated with your organization. </p> <p>To use the template, call <a>AssociateServiceQuotaTemplate</a>. </p>
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {ServiceException} <p>Something went wrong. </p>
   *   - {TooManyRequestsException} <p>Due to throttling, the request was denied. Slow down the rate of request calls, or request an increase for this quota. </p>
   *   - {AWSServiceAccessNotEnabledException} <p>The action you attempted is not allowed unless Service Access with Service Quotas is enabled in your organization. To enable, call <a>AssociateServiceQuotaTemplate</a>.</p>
   *   - {TemplatesNotAvailableInRegionException} <p>The Service Quotas template is not available in the Region where you are making the request. Please make the request in us-east-1. </p>
   *   - {NoAvailableOrganizationException} <p>The account making this call is not a member of an organization.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getAssociationForServiceQuotaTemplate(
    args: GetAssociationForServiceQuotaTemplateInput
  ): Promise<GetAssociationForServiceQuotaTemplateOutput>;
  public getAssociationForServiceQuotaTemplate(
    args: GetAssociationForServiceQuotaTemplateInput,
    cb: (err: any, data?: GetAssociationForServiceQuotaTemplateOutput) => void
  ): void;
  public getAssociationForServiceQuotaTemplate(
    args: GetAssociationForServiceQuotaTemplateInput,
    cb?: (err: any, data?: GetAssociationForServiceQuotaTemplateOutput) => void
  ): Promise<GetAssociationForServiceQuotaTemplateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetAssociationForServiceQuotaTemplateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the details for a particular increase request. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {NoSuchResourceException} <p>The specified resource does not exist.</p>
   *   - {IllegalArgumentException} <p>Invalid input was provided. </p>
   *   - {ServiceException} <p>Something went wrong. </p>
   *   - {TooManyRequestsException} <p>Due to throttling, the request was denied. Slow down the rate of request calls, or request an increase for this quota. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getRequestedServiceQuotaChange(
    args: GetRequestedServiceQuotaChangeInput
  ): Promise<GetRequestedServiceQuotaChangeOutput>;
  public getRequestedServiceQuotaChange(
    args: GetRequestedServiceQuotaChangeInput,
    cb: (err: any, data?: GetRequestedServiceQuotaChangeOutput) => void
  ): void;
  public getRequestedServiceQuotaChange(
    args: GetRequestedServiceQuotaChangeInput,
    cb?: (err: any, data?: GetRequestedServiceQuotaChangeOutput) => void
  ): Promise<GetRequestedServiceQuotaChangeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetRequestedServiceQuotaChangeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the details for the specified service quota. This operation provides a different Value than the <code>GetAWSDefaultServiceQuota</code> operation. This operation returns the applied value for each quota. <code>GetAWSDefaultServiceQuota</code> returns the default AWS value for each quota. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {NoSuchResourceException} <p>The specified resource does not exist.</p>
   *   - {IllegalArgumentException} <p>Invalid input was provided. </p>
   *   - {ServiceException} <p>Something went wrong. </p>
   *   - {TooManyRequestsException} <p>Due to throttling, the request was denied. Slow down the rate of request calls, or request an increase for this quota. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getServiceQuota(
    args: GetServiceQuotaInput
  ): Promise<GetServiceQuotaOutput>;
  public getServiceQuota(
    args: GetServiceQuotaInput,
    cb: (err: any, data?: GetServiceQuotaOutput) => void
  ): void;
  public getServiceQuota(
    args: GetServiceQuotaInput,
    cb?: (err: any, data?: GetServiceQuotaOutput) => void
  ): Promise<GetServiceQuotaOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetServiceQuotaCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the details of the service quota increase request in your template.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {DependencyAccessDeniedException} <p>You can't perform this action because a dependency does not have access.</p>
   *   - {ServiceException} <p>Something went wrong. </p>
   *   - {TooManyRequestsException} <p>Due to throttling, the request was denied. Slow down the rate of request calls, or request an increase for this quota. </p>
   *   - {NoSuchResourceException} <p>The specified resource does not exist.</p>
   *   - {IllegalArgumentException} <p>Invalid input was provided. </p>
   *   - {AWSServiceAccessNotEnabledException} <p>The action you attempted is not allowed unless Service Access with Service Quotas is enabled in your organization. To enable, call <a>AssociateServiceQuotaTemplate</a>.</p>
   *   - {TemplatesNotAvailableInRegionException} <p>The Service Quotas template is not available in the Region where you are making the request. Please make the request in us-east-1. </p>
   *   - {NoAvailableOrganizationException} <p>The account making this call is not a member of an organization.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getServiceQuotaIncreaseRequestFromTemplate(
    args: GetServiceQuotaIncreaseRequestFromTemplateInput
  ): Promise<GetServiceQuotaIncreaseRequestFromTemplateOutput>;
  public getServiceQuotaIncreaseRequestFromTemplate(
    args: GetServiceQuotaIncreaseRequestFromTemplateInput,
    cb: (
      err: any,
      data?: GetServiceQuotaIncreaseRequestFromTemplateOutput
    ) => void
  ): void;
  public getServiceQuotaIncreaseRequestFromTemplate(
    args: GetServiceQuotaIncreaseRequestFromTemplateInput,
    cb?: (
      err: any,
      data?: GetServiceQuotaIncreaseRequestFromTemplateOutput
    ) => void
  ): Promise<GetServiceQuotaIncreaseRequestFromTemplateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetServiceQuotaIncreaseRequestFromTemplateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all default service quotas for the specified AWS service or all AWS services. ListAWSDefaultServiceQuotas is similar to <a>ListServiceQuotas</a> except for the Value object. The Value object returned by <code>ListAWSDefaultServiceQuotas</code> is the default value assigned by AWS. This request returns a list of all service quotas for the specified service. The listing of each you'll see the default values are the values that AWS provides for the quotas. </p> <note> <p>Always check the <code>NextToken</code> response parameter when calling any of the <code>List*</code> operations. These operations can return an unexpected list of results, even when there are more results available. When this happens, the <code>NextToken</code> response parameter contains a value to pass the next call to the same API to request the next part of the list.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {NoSuchResourceException} <p>The specified resource does not exist.</p>
   *   - {IllegalArgumentException} <p>Invalid input was provided. </p>
   *   - {InvalidPaginationTokenException} <p>Invalid input was provided.</p>
   *   - {ServiceException} <p>Something went wrong. </p>
   *   - {TooManyRequestsException} <p>Due to throttling, the request was denied. Slow down the rate of request calls, or request an increase for this quota. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listAWSDefaultServiceQuotas(
    args: ListAWSDefaultServiceQuotasInput
  ): Promise<ListAWSDefaultServiceQuotasOutput>;
  public listAWSDefaultServiceQuotas(
    args: ListAWSDefaultServiceQuotasInput,
    cb: (err: any, data?: ListAWSDefaultServiceQuotasOutput) => void
  ): void;
  public listAWSDefaultServiceQuotas(
    args: ListAWSDefaultServiceQuotasInput,
    cb?: (err: any, data?: ListAWSDefaultServiceQuotasOutput) => void
  ): Promise<ListAWSDefaultServiceQuotasOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListAWSDefaultServiceQuotasCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Requests a list of the changes to quotas for a service.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {NoSuchResourceException} <p>The specified resource does not exist.</p>
   *   - {IllegalArgumentException} <p>Invalid input was provided. </p>
   *   - {InvalidPaginationTokenException} <p>Invalid input was provided.</p>
   *   - {ServiceException} <p>Something went wrong. </p>
   *   - {TooManyRequestsException} <p>Due to throttling, the request was denied. Slow down the rate of request calls, or request an increase for this quota. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listRequestedServiceQuotaChangeHistory(
    args: ListRequestedServiceQuotaChangeHistoryInput
  ): Promise<ListRequestedServiceQuotaChangeHistoryOutput>;
  public listRequestedServiceQuotaChangeHistory(
    args: ListRequestedServiceQuotaChangeHistoryInput,
    cb: (err: any, data?: ListRequestedServiceQuotaChangeHistoryOutput) => void
  ): void;
  public listRequestedServiceQuotaChangeHistory(
    args: ListRequestedServiceQuotaChangeHistoryInput,
    cb?: (err: any, data?: ListRequestedServiceQuotaChangeHistoryOutput) => void
  ): Promise<ListRequestedServiceQuotaChangeHistoryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListRequestedServiceQuotaChangeHistoryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Requests a list of the changes to specific service quotas. This command provides additional granularity over the <code>ListRequestedServiceQuotaChangeHistory</code> command. Once a quota change request has reached <code>CASE_CLOSED, APPROVED,</code> or <code>DENIED</code>, the history has been kept for 90 days.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {NoSuchResourceException} <p>The specified resource does not exist.</p>
   *   - {IllegalArgumentException} <p>Invalid input was provided. </p>
   *   - {InvalidPaginationTokenException} <p>Invalid input was provided.</p>
   *   - {ServiceException} <p>Something went wrong. </p>
   *   - {TooManyRequestsException} <p>Due to throttling, the request was denied. Slow down the rate of request calls, or request an increase for this quota. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listRequestedServiceQuotaChangeHistoryByQuota(
    args: ListRequestedServiceQuotaChangeHistoryByQuotaInput
  ): Promise<ListRequestedServiceQuotaChangeHistoryByQuotaOutput>;
  public listRequestedServiceQuotaChangeHistoryByQuota(
    args: ListRequestedServiceQuotaChangeHistoryByQuotaInput,
    cb: (
      err: any,
      data?: ListRequestedServiceQuotaChangeHistoryByQuotaOutput
    ) => void
  ): void;
  public listRequestedServiceQuotaChangeHistoryByQuota(
    args: ListRequestedServiceQuotaChangeHistoryByQuotaInput,
    cb?: (
      err: any,
      data?: ListRequestedServiceQuotaChangeHistoryByQuotaOutput
    ) => void
  ): Promise<ListRequestedServiceQuotaChangeHistoryByQuotaOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListRequestedServiceQuotaChangeHistoryByQuotaCommand(
      args
    );
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of the quota increase requests in the template. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {DependencyAccessDeniedException} <p>You can't perform this action because a dependency does not have access.</p>
   *   - {ServiceException} <p>Something went wrong. </p>
   *   - {TooManyRequestsException} <p>Due to throttling, the request was denied. Slow down the rate of request calls, or request an increase for this quota. </p>
   *   - {IllegalArgumentException} <p>Invalid input was provided. </p>
   *   - {AWSServiceAccessNotEnabledException} <p>The action you attempted is not allowed unless Service Access with Service Quotas is enabled in your organization. To enable, call <a>AssociateServiceQuotaTemplate</a>.</p>
   *   - {TemplatesNotAvailableInRegionException} <p>The Service Quotas template is not available in the Region where you are making the request. Please make the request in us-east-1. </p>
   *   - {NoAvailableOrganizationException} <p>The account making this call is not a member of an organization.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listServiceQuotaIncreaseRequestsInTemplate(
    args: ListServiceQuotaIncreaseRequestsInTemplateInput
  ): Promise<ListServiceQuotaIncreaseRequestsInTemplateOutput>;
  public listServiceQuotaIncreaseRequestsInTemplate(
    args: ListServiceQuotaIncreaseRequestsInTemplateInput,
    cb: (
      err: any,
      data?: ListServiceQuotaIncreaseRequestsInTemplateOutput
    ) => void
  ): void;
  public listServiceQuotaIncreaseRequestsInTemplate(
    args: ListServiceQuotaIncreaseRequestsInTemplateInput,
    cb?: (
      err: any,
      data?: ListServiceQuotaIncreaseRequestsInTemplateOutput
    ) => void
  ): Promise<ListServiceQuotaIncreaseRequestsInTemplateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListServiceQuotaIncreaseRequestsInTemplateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all service quotas for the specified AWS service. This request returns a list of the service quotas for the specified service. you'll see the default values are the values that AWS provides for the quotas. </p> <note> <p>Always check the <code>NextToken</code> response parameter when calling any of the <code>List*</code> operations. These operations can return an unexpected list of results, even when there are more results available. When this happens, the <code>NextToken</code> response parameter contains a value to pass the next call to the same API to request the next part of the list.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {NoSuchResourceException} <p>The specified resource does not exist.</p>
   *   - {IllegalArgumentException} <p>Invalid input was provided. </p>
   *   - {InvalidPaginationTokenException} <p>Invalid input was provided.</p>
   *   - {ServiceException} <p>Something went wrong. </p>
   *   - {TooManyRequestsException} <p>Due to throttling, the request was denied. Slow down the rate of request calls, or request an increase for this quota. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listServiceQuotas(
    args: ListServiceQuotasInput
  ): Promise<ListServiceQuotasOutput>;
  public listServiceQuotas(
    args: ListServiceQuotasInput,
    cb: (err: any, data?: ListServiceQuotasOutput) => void
  ): void;
  public listServiceQuotas(
    args: ListServiceQuotasInput,
    cb?: (err: any, data?: ListServiceQuotasOutput) => void
  ): Promise<ListServiceQuotasOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListServiceQuotasCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the AWS services available in Service Quotas. Not all AWS services are available in Service Quotas. To list the see the list of the service quotas for a specific service, use <a>ListServiceQuotas</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {IllegalArgumentException} <p>Invalid input was provided. </p>
   *   - {InvalidPaginationTokenException} <p>Invalid input was provided.</p>
   *   - {ServiceException} <p>Something went wrong. </p>
   *   - {TooManyRequestsException} <p>Due to throttling, the request was denied. Slow down the rate of request calls, or request an increase for this quota. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listServices(args: ListServicesInput): Promise<ListServicesOutput>;
  public listServices(
    args: ListServicesInput,
    cb: (err: any, data?: ListServicesOutput) => void
  ): void;
  public listServices(
    args: ListServicesInput,
    cb?: (err: any, data?: ListServicesOutput) => void
  ): Promise<ListServicesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListServicesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Defines and adds a quota to the service quota template. To add a quota to the template, you must provide the <code>ServiceCode</code>, <code>QuotaCode</code>, <code>AwsRegion</code>, and <code>DesiredValue</code>. Once you add a quota to the template, use <a>ListServiceQuotaIncreaseRequestsInTemplate</a> to see the list of quotas in the template.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {DependencyAccessDeniedException} <p>You can't perform this action because a dependency does not have access.</p>
   *   - {ServiceException} <p>Something went wrong. </p>
   *   - {TooManyRequestsException} <p>Due to throttling, the request was denied. Slow down the rate of request calls, or request an increase for this quota. </p>
   *   - {IllegalArgumentException} <p>Invalid input was provided. </p>
   *   - {QuotaExceededException} <p>You have exceeded your service quota. To perform the requested action, remove some of the relevant resources, or use Service Quotas to request a service quota increase.</p>
   *   - {NoSuchResourceException} <p>The specified resource does not exist.</p>
   *   - {AWSServiceAccessNotEnabledException} <p>The action you attempted is not allowed unless Service Access with Service Quotas is enabled in your organization. To enable, call <a>AssociateServiceQuotaTemplate</a>.</p>
   *   - {TemplatesNotAvailableInRegionException} <p>The Service Quotas template is not available in the Region where you are making the request. Please make the request in us-east-1. </p>
   *   - {NoAvailableOrganizationException} <p>The account making this call is not a member of an organization.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putServiceQuotaIncreaseRequestIntoTemplate(
    args: PutServiceQuotaIncreaseRequestIntoTemplateInput
  ): Promise<PutServiceQuotaIncreaseRequestIntoTemplateOutput>;
  public putServiceQuotaIncreaseRequestIntoTemplate(
    args: PutServiceQuotaIncreaseRequestIntoTemplateInput,
    cb: (
      err: any,
      data?: PutServiceQuotaIncreaseRequestIntoTemplateOutput
    ) => void
  ): void;
  public putServiceQuotaIncreaseRequestIntoTemplate(
    args: PutServiceQuotaIncreaseRequestIntoTemplateInput,
    cb?: (
      err: any,
      data?: PutServiceQuotaIncreaseRequestIntoTemplateOutput
    ) => void
  ): Promise<PutServiceQuotaIncreaseRequestIntoTemplateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutServiceQuotaIncreaseRequestIntoTemplateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the details of a service quota increase request. The response to this command provides the details in the <a>RequestedServiceQuotaChange</a> object. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {DependencyAccessDeniedException} <p>You can't perform this action because a dependency does not have access.</p>
   *   - {QuotaExceededException} <p>You have exceeded your service quota. To perform the requested action, remove some of the relevant resources, or use Service Quotas to request a service quota increase.</p>
   *   - {ResourceAlreadyExistsException} <p>The specified resource already exists.</p>
   *   - {AccessDeniedException} <p>You do not have sufficient access to perform this action.</p>
   *   - {NoSuchResourceException} <p>The specified resource does not exist.</p>
   *   - {IllegalArgumentException} <p>Invalid input was provided. </p>
   *   - {InvalidResourceStateException} <p>Invalid input was provided for the . </p>
   *   - {ServiceException} <p>Something went wrong. </p>
   *   - {TooManyRequestsException} <p>Due to throttling, the request was denied. Slow down the rate of request calls, or request an increase for this quota. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public requestServiceQuotaIncrease(
    args: RequestServiceQuotaIncreaseInput
  ): Promise<RequestServiceQuotaIncreaseOutput>;
  public requestServiceQuotaIncrease(
    args: RequestServiceQuotaIncreaseInput,
    cb: (err: any, data?: RequestServiceQuotaIncreaseOutput) => void
  ): void;
  public requestServiceQuotaIncrease(
    args: RequestServiceQuotaIncreaseInput,
    cb?: (err: any, data?: RequestServiceQuotaIncreaseOutput) => void
  ): Promise<RequestServiceQuotaIncreaseOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RequestServiceQuotaIncreaseCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
