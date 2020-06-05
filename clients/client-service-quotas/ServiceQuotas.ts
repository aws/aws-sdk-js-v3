import { ServiceQuotasClient } from "./ServiceQuotasClient";
import {
  AssociateServiceQuotaTemplateCommand,
  AssociateServiceQuotaTemplateCommandInput,
  AssociateServiceQuotaTemplateCommandOutput
} from "./commands/AssociateServiceQuotaTemplateCommand";
import {
  DeleteServiceQuotaIncreaseRequestFromTemplateCommand,
  DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput,
  DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput
} from "./commands/DeleteServiceQuotaIncreaseRequestFromTemplateCommand";
import {
  DisassociateServiceQuotaTemplateCommand,
  DisassociateServiceQuotaTemplateCommandInput,
  DisassociateServiceQuotaTemplateCommandOutput
} from "./commands/DisassociateServiceQuotaTemplateCommand";
import {
  GetAWSDefaultServiceQuotaCommand,
  GetAWSDefaultServiceQuotaCommandInput,
  GetAWSDefaultServiceQuotaCommandOutput
} from "./commands/GetAWSDefaultServiceQuotaCommand";
import {
  GetAssociationForServiceQuotaTemplateCommand,
  GetAssociationForServiceQuotaTemplateCommandInput,
  GetAssociationForServiceQuotaTemplateCommandOutput
} from "./commands/GetAssociationForServiceQuotaTemplateCommand";
import {
  GetRequestedServiceQuotaChangeCommand,
  GetRequestedServiceQuotaChangeCommandInput,
  GetRequestedServiceQuotaChangeCommandOutput
} from "./commands/GetRequestedServiceQuotaChangeCommand";
import {
  GetServiceQuotaCommand,
  GetServiceQuotaCommandInput,
  GetServiceQuotaCommandOutput
} from "./commands/GetServiceQuotaCommand";
import {
  GetServiceQuotaIncreaseRequestFromTemplateCommand,
  GetServiceQuotaIncreaseRequestFromTemplateCommandInput,
  GetServiceQuotaIncreaseRequestFromTemplateCommandOutput
} from "./commands/GetServiceQuotaIncreaseRequestFromTemplateCommand";
import {
  ListAWSDefaultServiceQuotasCommand,
  ListAWSDefaultServiceQuotasCommandInput,
  ListAWSDefaultServiceQuotasCommandOutput
} from "./commands/ListAWSDefaultServiceQuotasCommand";
import {
  ListRequestedServiceQuotaChangeHistoryByQuotaCommand,
  ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput,
  ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput
} from "./commands/ListRequestedServiceQuotaChangeHistoryByQuotaCommand";
import {
  ListRequestedServiceQuotaChangeHistoryCommand,
  ListRequestedServiceQuotaChangeHistoryCommandInput,
  ListRequestedServiceQuotaChangeHistoryCommandOutput
} from "./commands/ListRequestedServiceQuotaChangeHistoryCommand";
import {
  ListServiceQuotaIncreaseRequestsInTemplateCommand,
  ListServiceQuotaIncreaseRequestsInTemplateCommandInput,
  ListServiceQuotaIncreaseRequestsInTemplateCommandOutput
} from "./commands/ListServiceQuotaIncreaseRequestsInTemplateCommand";
import {
  ListServiceQuotasCommand,
  ListServiceQuotasCommandInput,
  ListServiceQuotasCommandOutput
} from "./commands/ListServiceQuotasCommand";
import {
  ListServicesCommand,
  ListServicesCommandInput,
  ListServicesCommandOutput
} from "./commands/ListServicesCommand";
import {
  PutServiceQuotaIncreaseRequestIntoTemplateCommand,
  PutServiceQuotaIncreaseRequestIntoTemplateCommandInput,
  PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput
} from "./commands/PutServiceQuotaIncreaseRequestIntoTemplateCommand";
import {
  RequestServiceQuotaIncreaseCommand,
  RequestServiceQuotaIncreaseCommandInput,
  RequestServiceQuotaIncreaseCommandOutput
} from "./commands/RequestServiceQuotaIncreaseCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p> Service Quotas is a web service that you can use to manage many of your AWS service
 *       quotas. Quotas, also referred to as limits, are the maximum values for a resource, item, or
 *       operation. This guide provide descriptions of the Service Quotas actions that you can call
 *       from an API. For the Service Quotas user guide, which explains how to use Service Quotas from
 *       the console, see <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/intro.html">What is Service Quotas</a>. </p>
 *
 *          <note>
 *             <p>AWS provides SDKs that consist of libraries and sample code for programming languages
 *         and platforms (Java, Ruby, .NET, iOS, Android, etc...,). The SDKs provide a convenient way
 *         to create programmatic access to Service Quotas and AWS. For information about the AWS SDKs,
 *         including how to download and install them, see the <a href="https://docs.aws.amazon.com/aws.amazon.com/tools">Tools for Amazon Web Services</a> page.</p>
 *          </note>
 */
export class ServiceQuotas extends ServiceQuotasClient {
  /**
   * <p>Associates the Service Quotas template with your organization so that when new accounts
   *       are created in your organization, the template submits increase requests for the specified
   *       service quotas. Use the Service Quotas template to request an increase for any adjustable
   *       quota value. After you define the Service Quotas template, use this operation to associate, or
   *       enable, the template. </p>
   */
  public associateServiceQuotaTemplate(
    args: AssociateServiceQuotaTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateServiceQuotaTemplateCommandOutput>;
  public associateServiceQuotaTemplate(
    args: AssociateServiceQuotaTemplateCommandInput,
    cb: (err: any, data?: AssociateServiceQuotaTemplateCommandOutput) => void
  ): void;
  public associateServiceQuotaTemplate(
    args: AssociateServiceQuotaTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateServiceQuotaTemplateCommandOutput) => void
  ): void;
  public associateServiceQuotaTemplate(
    args: AssociateServiceQuotaTemplateCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: AssociateServiceQuotaTemplateCommandOutput) => void),
    cb?: (err: any, data?: AssociateServiceQuotaTemplateCommandOutput) => void
  ): Promise<AssociateServiceQuotaTemplateCommandOutput> | void {
    const command = new AssociateServiceQuotaTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes a service quota increase request from the Service Quotas template. </p>
   */
  public deleteServiceQuotaIncreaseRequestFromTemplate(
    args: DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput>;
  public deleteServiceQuotaIncreaseRequestFromTemplate(
    args: DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput,
    cb: (
      err: any,
      data?: DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput
    ) => void
  ): void;
  public deleteServiceQuotaIncreaseRequestFromTemplate(
    args: DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput
    ) => void
  ): void;
  public deleteServiceQuotaIncreaseRequestFromTemplate(
    args: DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput
    ) => void
  ): Promise<
    DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput
  > | void {
    const command = new DeleteServiceQuotaIncreaseRequestFromTemplateCommand(
      args
    );
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disables the Service Quotas template. Once the template is disabled, it does not request
   *       quota increases for new accounts in your organization. Disabling the quota template does not
   *       apply the quota increase requests from the template. </p>
   *
   *          <p>
   *             <b>Related operations</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>To enable the quota template, call <a>AssociateServiceQuotaTemplate</a>.
   *         </p>
   *             </li>
   *             <li>
   *                <p>To delete a specific service quota from the template, use <a>DeleteServiceQuotaIncreaseRequestFromTemplate</a>.</p>
   *             </li>
   *          </ul>
   */
  public disassociateServiceQuotaTemplate(
    args: DisassociateServiceQuotaTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateServiceQuotaTemplateCommandOutput>;
  public disassociateServiceQuotaTemplate(
    args: DisassociateServiceQuotaTemplateCommandInput,
    cb: (err: any, data?: DisassociateServiceQuotaTemplateCommandOutput) => void
  ): void;
  public disassociateServiceQuotaTemplate(
    args: DisassociateServiceQuotaTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateServiceQuotaTemplateCommandOutput) => void
  ): void;
  public disassociateServiceQuotaTemplate(
    args: DisassociateServiceQuotaTemplateCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: DisassociateServiceQuotaTemplateCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: DisassociateServiceQuotaTemplateCommandOutput
    ) => void
  ): Promise<DisassociateServiceQuotaTemplateCommandOutput> | void {
    const command = new DisassociateServiceQuotaTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the <code>ServiceQuotaTemplateAssociationStatus</code> value from the service.
   *       Use this action to determine if the Service Quota template is associated, or enabled. </p>
   */
  public getAssociationForServiceQuotaTemplate(
    args: GetAssociationForServiceQuotaTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAssociationForServiceQuotaTemplateCommandOutput>;
  public getAssociationForServiceQuotaTemplate(
    args: GetAssociationForServiceQuotaTemplateCommandInput,
    cb: (
      err: any,
      data?: GetAssociationForServiceQuotaTemplateCommandOutput
    ) => void
  ): void;
  public getAssociationForServiceQuotaTemplate(
    args: GetAssociationForServiceQuotaTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: GetAssociationForServiceQuotaTemplateCommandOutput
    ) => void
  ): void;
  public getAssociationForServiceQuotaTemplate(
    args: GetAssociationForServiceQuotaTemplateCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: GetAssociationForServiceQuotaTemplateCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: GetAssociationForServiceQuotaTemplateCommandOutput
    ) => void
  ): Promise<GetAssociationForServiceQuotaTemplateCommandOutput> | void {
    const command = new GetAssociationForServiceQuotaTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the default service quotas values. The Value returned for each quota is the AWS
   *       default value, even if the quotas have been increased.. </p>
   */
  public getAWSDefaultServiceQuota(
    args: GetAWSDefaultServiceQuotaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAWSDefaultServiceQuotaCommandOutput>;
  public getAWSDefaultServiceQuota(
    args: GetAWSDefaultServiceQuotaCommandInput,
    cb: (err: any, data?: GetAWSDefaultServiceQuotaCommandOutput) => void
  ): void;
  public getAWSDefaultServiceQuota(
    args: GetAWSDefaultServiceQuotaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAWSDefaultServiceQuotaCommandOutput) => void
  ): void;
  public getAWSDefaultServiceQuota(
    args: GetAWSDefaultServiceQuotaCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetAWSDefaultServiceQuotaCommandOutput) => void),
    cb?: (err: any, data?: GetAWSDefaultServiceQuotaCommandOutput) => void
  ): Promise<GetAWSDefaultServiceQuotaCommandOutput> | void {
    const command = new GetAWSDefaultServiceQuotaCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the details for a particular increase request. </p>
   */
  public getRequestedServiceQuotaChange(
    args: GetRequestedServiceQuotaChangeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRequestedServiceQuotaChangeCommandOutput>;
  public getRequestedServiceQuotaChange(
    args: GetRequestedServiceQuotaChangeCommandInput,
    cb: (err: any, data?: GetRequestedServiceQuotaChangeCommandOutput) => void
  ): void;
  public getRequestedServiceQuotaChange(
    args: GetRequestedServiceQuotaChangeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRequestedServiceQuotaChangeCommandOutput) => void
  ): void;
  public getRequestedServiceQuotaChange(
    args: GetRequestedServiceQuotaChangeCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: GetRequestedServiceQuotaChangeCommandOutput
        ) => void),
    cb?: (err: any, data?: GetRequestedServiceQuotaChangeCommandOutput) => void
  ): Promise<GetRequestedServiceQuotaChangeCommandOutput> | void {
    const command = new GetRequestedServiceQuotaChangeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the details for the specified service quota. This operation provides a different
   *       Value than the <code>GetAWSDefaultServiceQuota</code> operation. This operation returns the
   *       applied value for each quota. <code>GetAWSDefaultServiceQuota</code> returns the default AWS
   *       value for each quota. </p>
   */
  public getServiceQuota(
    args: GetServiceQuotaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServiceQuotaCommandOutput>;
  public getServiceQuota(
    args: GetServiceQuotaCommandInput,
    cb: (err: any, data?: GetServiceQuotaCommandOutput) => void
  ): void;
  public getServiceQuota(
    args: GetServiceQuotaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServiceQuotaCommandOutput) => void
  ): void;
  public getServiceQuota(
    args: GetServiceQuotaCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetServiceQuotaCommandOutput) => void),
    cb?: (err: any, data?: GetServiceQuotaCommandOutput) => void
  ): Promise<GetServiceQuotaCommandOutput> | void {
    const command = new GetServiceQuotaCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the details of the service quota increase request in your template.</p>
   */
  public getServiceQuotaIncreaseRequestFromTemplate(
    args: GetServiceQuotaIncreaseRequestFromTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServiceQuotaIncreaseRequestFromTemplateCommandOutput>;
  public getServiceQuotaIncreaseRequestFromTemplate(
    args: GetServiceQuotaIncreaseRequestFromTemplateCommandInput,
    cb: (
      err: any,
      data?: GetServiceQuotaIncreaseRequestFromTemplateCommandOutput
    ) => void
  ): void;
  public getServiceQuotaIncreaseRequestFromTemplate(
    args: GetServiceQuotaIncreaseRequestFromTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: GetServiceQuotaIncreaseRequestFromTemplateCommandOutput
    ) => void
  ): void;
  public getServiceQuotaIncreaseRequestFromTemplate(
    args: GetServiceQuotaIncreaseRequestFromTemplateCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: GetServiceQuotaIncreaseRequestFromTemplateCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: GetServiceQuotaIncreaseRequestFromTemplateCommandOutput
    ) => void
  ): Promise<GetServiceQuotaIncreaseRequestFromTemplateCommandOutput> | void {
    const command = new GetServiceQuotaIncreaseRequestFromTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all default service quotas for the specified AWS service or all AWS services.
   *       ListAWSDefaultServiceQuotas is similar to <a>ListServiceQuotas</a> except for the
   *       Value object. The Value object returned by <code>ListAWSDefaultServiceQuotas</code> is the
   *       default value assigned by AWS. This request returns a list of all service quotas for the
   *       specified service. The listing of each you'll see the default values are the values that AWS
   *       provides for the quotas. </p>
   *          <note>
   *             <p>Always check the <code>NextToken</code> response parameter when calling any of the
   *           <code>List*</code> operations. These operations can return an unexpected list of results,
   *         even when there are more results available. When this happens, the <code>NextToken</code>
   *         response parameter contains a value to pass the next call to the same API to request the
   *         next part of the list.</p>
   *          </note>
   */
  public listAWSDefaultServiceQuotas(
    args: ListAWSDefaultServiceQuotasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAWSDefaultServiceQuotasCommandOutput>;
  public listAWSDefaultServiceQuotas(
    args: ListAWSDefaultServiceQuotasCommandInput,
    cb: (err: any, data?: ListAWSDefaultServiceQuotasCommandOutput) => void
  ): void;
  public listAWSDefaultServiceQuotas(
    args: ListAWSDefaultServiceQuotasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAWSDefaultServiceQuotasCommandOutput) => void
  ): void;
  public listAWSDefaultServiceQuotas(
    args: ListAWSDefaultServiceQuotasCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListAWSDefaultServiceQuotasCommandOutput) => void),
    cb?: (err: any, data?: ListAWSDefaultServiceQuotasCommandOutput) => void
  ): Promise<ListAWSDefaultServiceQuotasCommandOutput> | void {
    const command = new ListAWSDefaultServiceQuotasCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Requests a list of the changes to quotas for a service.</p>
   */
  public listRequestedServiceQuotaChangeHistory(
    args: ListRequestedServiceQuotaChangeHistoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRequestedServiceQuotaChangeHistoryCommandOutput>;
  public listRequestedServiceQuotaChangeHistory(
    args: ListRequestedServiceQuotaChangeHistoryCommandInput,
    cb: (
      err: any,
      data?: ListRequestedServiceQuotaChangeHistoryCommandOutput
    ) => void
  ): void;
  public listRequestedServiceQuotaChangeHistory(
    args: ListRequestedServiceQuotaChangeHistoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: ListRequestedServiceQuotaChangeHistoryCommandOutput
    ) => void
  ): void;
  public listRequestedServiceQuotaChangeHistory(
    args: ListRequestedServiceQuotaChangeHistoryCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: ListRequestedServiceQuotaChangeHistoryCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: ListRequestedServiceQuotaChangeHistoryCommandOutput
    ) => void
  ): Promise<ListRequestedServiceQuotaChangeHistoryCommandOutput> | void {
    const command = new ListRequestedServiceQuotaChangeHistoryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Requests a list of the changes to specific service quotas. This command provides
   *       additional granularity over the <code>ListRequestedServiceQuotaChangeHistory</code> command.
   *       Once a quota change request has reached <code>CASE_CLOSED, APPROVED,</code> or
   *         <code>DENIED</code>, the history has been kept for 90 days.</p>
   */
  public listRequestedServiceQuotaChangeHistoryByQuota(
    args: ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput>;
  public listRequestedServiceQuotaChangeHistoryByQuota(
    args: ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput,
    cb: (
      err: any,
      data?: ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput
    ) => void
  ): void;
  public listRequestedServiceQuotaChangeHistoryByQuota(
    args: ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput
    ) => void
  ): void;
  public listRequestedServiceQuotaChangeHistoryByQuota(
    args: ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput
    ) => void
  ): Promise<
    ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput
  > | void {
    const command = new ListRequestedServiceQuotaChangeHistoryByQuotaCommand(
      args
    );
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of the quota increase requests in the template. </p>
   */
  public listServiceQuotaIncreaseRequestsInTemplate(
    args: ListServiceQuotaIncreaseRequestsInTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServiceQuotaIncreaseRequestsInTemplateCommandOutput>;
  public listServiceQuotaIncreaseRequestsInTemplate(
    args: ListServiceQuotaIncreaseRequestsInTemplateCommandInput,
    cb: (
      err: any,
      data?: ListServiceQuotaIncreaseRequestsInTemplateCommandOutput
    ) => void
  ): void;
  public listServiceQuotaIncreaseRequestsInTemplate(
    args: ListServiceQuotaIncreaseRequestsInTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: ListServiceQuotaIncreaseRequestsInTemplateCommandOutput
    ) => void
  ): void;
  public listServiceQuotaIncreaseRequestsInTemplate(
    args: ListServiceQuotaIncreaseRequestsInTemplateCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: ListServiceQuotaIncreaseRequestsInTemplateCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: ListServiceQuotaIncreaseRequestsInTemplateCommandOutput
    ) => void
  ): Promise<ListServiceQuotaIncreaseRequestsInTemplateCommandOutput> | void {
    const command = new ListServiceQuotaIncreaseRequestsInTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all service quotas for the specified AWS service. This request returns a list of the
   *       service quotas for the specified service. you'll see the default values are the values that
   *       AWS provides for the quotas. </p>
   *          <note>
   *             <p>Always check the <code>NextToken</code> response parameter when calling any of the
   *           <code>List*</code> operations. These operations can return an unexpected list of results,
   *         even when there are more results available. When this happens, the <code>NextToken</code>
   *         response parameter contains a value to pass the next call to the same API to request the
   *         next part of the list.</p>
   *          </note>
   */
  public listServiceQuotas(
    args: ListServiceQuotasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServiceQuotasCommandOutput>;
  public listServiceQuotas(
    args: ListServiceQuotasCommandInput,
    cb: (err: any, data?: ListServiceQuotasCommandOutput) => void
  ): void;
  public listServiceQuotas(
    args: ListServiceQuotasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServiceQuotasCommandOutput) => void
  ): void;
  public listServiceQuotas(
    args: ListServiceQuotasCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListServiceQuotasCommandOutput) => void),
    cb?: (err: any, data?: ListServiceQuotasCommandOutput) => void
  ): Promise<ListServiceQuotasCommandOutput> | void {
    const command = new ListServiceQuotasCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the AWS services available in Service Quotas. Not all AWS services are available in
   *       Service Quotas. To list the see the list of the service quotas for a specific service, use
   *         <a>ListServiceQuotas</a>.</p>
   */
  public listServices(
    args: ListServicesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServicesCommandOutput>;
  public listServices(
    args: ListServicesCommandInput,
    cb: (err: any, data?: ListServicesCommandOutput) => void
  ): void;
  public listServices(
    args: ListServicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServicesCommandOutput) => void
  ): void;
  public listServices(
    args: ListServicesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListServicesCommandOutput) => void),
    cb?: (err: any, data?: ListServicesCommandOutput) => void
  ): Promise<ListServicesCommandOutput> | void {
    const command = new ListServicesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Defines and adds a quota to the service quota template. To add a quota to the template,
   *       you must provide the <code>ServiceCode</code>, <code>QuotaCode</code>, <code>AwsRegion</code>,
   *       and <code>DesiredValue</code>. Once you add a quota to the template, use <a>ListServiceQuotaIncreaseRequestsInTemplate</a> to see the list of quotas in the
   *       template.</p>
   */
  public putServiceQuotaIncreaseRequestIntoTemplate(
    args: PutServiceQuotaIncreaseRequestIntoTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput>;
  public putServiceQuotaIncreaseRequestIntoTemplate(
    args: PutServiceQuotaIncreaseRequestIntoTemplateCommandInput,
    cb: (
      err: any,
      data?: PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput
    ) => void
  ): void;
  public putServiceQuotaIncreaseRequestIntoTemplate(
    args: PutServiceQuotaIncreaseRequestIntoTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput
    ) => void
  ): void;
  public putServiceQuotaIncreaseRequestIntoTemplate(
    args: PutServiceQuotaIncreaseRequestIntoTemplateCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput
    ) => void
  ): Promise<PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput> | void {
    const command = new PutServiceQuotaIncreaseRequestIntoTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the details of a service quota increase request. The response to this command
   *       provides the details in the <a>RequestedServiceQuotaChange</a> object. </p>
   */
  public requestServiceQuotaIncrease(
    args: RequestServiceQuotaIncreaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RequestServiceQuotaIncreaseCommandOutput>;
  public requestServiceQuotaIncrease(
    args: RequestServiceQuotaIncreaseCommandInput,
    cb: (err: any, data?: RequestServiceQuotaIncreaseCommandOutput) => void
  ): void;
  public requestServiceQuotaIncrease(
    args: RequestServiceQuotaIncreaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RequestServiceQuotaIncreaseCommandOutput) => void
  ): void;
  public requestServiceQuotaIncrease(
    args: RequestServiceQuotaIncreaseCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: RequestServiceQuotaIncreaseCommandOutput) => void),
    cb?: (err: any, data?: RequestServiceQuotaIncreaseCommandOutput) => void
  ): Promise<RequestServiceQuotaIncreaseCommandOutput> | void {
    const command = new RequestServiceQuotaIncreaseCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
