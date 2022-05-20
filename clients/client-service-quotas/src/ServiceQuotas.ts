// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  AssociateServiceQuotaTemplateCommand,
  AssociateServiceQuotaTemplateCommandInput,
  AssociateServiceQuotaTemplateCommandOutput,
} from "./commands/AssociateServiceQuotaTemplateCommand";
import {
  DeleteServiceQuotaIncreaseRequestFromTemplateCommand,
  DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput,
  DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput,
} from "./commands/DeleteServiceQuotaIncreaseRequestFromTemplateCommand";
import {
  DisassociateServiceQuotaTemplateCommand,
  DisassociateServiceQuotaTemplateCommandInput,
  DisassociateServiceQuotaTemplateCommandOutput,
} from "./commands/DisassociateServiceQuotaTemplateCommand";
import {
  GetAssociationForServiceQuotaTemplateCommand,
  GetAssociationForServiceQuotaTemplateCommandInput,
  GetAssociationForServiceQuotaTemplateCommandOutput,
} from "./commands/GetAssociationForServiceQuotaTemplateCommand";
import {
  GetAWSDefaultServiceQuotaCommand,
  GetAWSDefaultServiceQuotaCommandInput,
  GetAWSDefaultServiceQuotaCommandOutput,
} from "./commands/GetAWSDefaultServiceQuotaCommand";
import {
  GetRequestedServiceQuotaChangeCommand,
  GetRequestedServiceQuotaChangeCommandInput,
  GetRequestedServiceQuotaChangeCommandOutput,
} from "./commands/GetRequestedServiceQuotaChangeCommand";
import {
  GetServiceQuotaCommand,
  GetServiceQuotaCommandInput,
  GetServiceQuotaCommandOutput,
} from "./commands/GetServiceQuotaCommand";
import {
  GetServiceQuotaIncreaseRequestFromTemplateCommand,
  GetServiceQuotaIncreaseRequestFromTemplateCommandInput,
  GetServiceQuotaIncreaseRequestFromTemplateCommandOutput,
} from "./commands/GetServiceQuotaIncreaseRequestFromTemplateCommand";
import {
  ListAWSDefaultServiceQuotasCommand,
  ListAWSDefaultServiceQuotasCommandInput,
  ListAWSDefaultServiceQuotasCommandOutput,
} from "./commands/ListAWSDefaultServiceQuotasCommand";
import {
  ListRequestedServiceQuotaChangeHistoryByQuotaCommand,
  ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput,
  ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput,
} from "./commands/ListRequestedServiceQuotaChangeHistoryByQuotaCommand";
import {
  ListRequestedServiceQuotaChangeHistoryCommand,
  ListRequestedServiceQuotaChangeHistoryCommandInput,
  ListRequestedServiceQuotaChangeHistoryCommandOutput,
} from "./commands/ListRequestedServiceQuotaChangeHistoryCommand";
import {
  ListServiceQuotaIncreaseRequestsInTemplateCommand,
  ListServiceQuotaIncreaseRequestsInTemplateCommandInput,
  ListServiceQuotaIncreaseRequestsInTemplateCommandOutput,
} from "./commands/ListServiceQuotaIncreaseRequestsInTemplateCommand";
import {
  ListServiceQuotasCommand,
  ListServiceQuotasCommandInput,
  ListServiceQuotasCommandOutput,
} from "./commands/ListServiceQuotasCommand";
import {
  ListServicesCommand,
  ListServicesCommandInput,
  ListServicesCommandOutput,
} from "./commands/ListServicesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutServiceQuotaIncreaseRequestIntoTemplateCommand,
  PutServiceQuotaIncreaseRequestIntoTemplateCommandInput,
  PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput,
} from "./commands/PutServiceQuotaIncreaseRequestIntoTemplateCommand";
import {
  RequestServiceQuotaIncreaseCommand,
  RequestServiceQuotaIncreaseCommandInput,
  RequestServiceQuotaIncreaseCommandOutput,
} from "./commands/RequestServiceQuotaIncreaseCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { ServiceQuotasClient } from "./ServiceQuotasClient";

/**
 * <p>With Service Quotas, you can view and manage your quotas easily as your AWS workloads
 *       grow. Quotas, also referred to as limits, are the maximum number of resources that you can
 *       create in your AWS account. For more information, see the <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/">Service Quotas User Guide</a>.</p>
 */
export class ServiceQuotas extends ServiceQuotasClient {
  /**
   * <p>Associates your quota request template with your organization. When a new account is
   *       created in your organization, the quota increase requests in the template are automatically
   *       applied to the account. You can add a quota increase request for any adjustable quota to your
   *       template.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateServiceQuotaTemplateCommandOutput) => void),
    cb?: (err: any, data?: AssociateServiceQuotaTemplateCommandOutput) => void
  ): Promise<AssociateServiceQuotaTemplateCommandOutput> | void {
    const command = new AssociateServiceQuotaTemplateCommand(args);
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
   * <p>Deletes the quota increase request for the specified quota from your quota request
   *       template.</p>
   */
  public deleteServiceQuotaIncreaseRequestFromTemplate(
    args: DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput>;
  public deleteServiceQuotaIncreaseRequestFromTemplate(
    args: DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput,
    cb: (err: any, data?: DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput) => void
  ): void;
  public deleteServiceQuotaIncreaseRequestFromTemplate(
    args: DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput) => void
  ): void;
  public deleteServiceQuotaIncreaseRequestFromTemplate(
    args: DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput) => void),
    cb?: (err: any, data?: DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput) => void
  ): Promise<DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput> | void {
    const command = new DeleteServiceQuotaIncreaseRequestFromTemplateCommand(args);
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
   * <p>Disables your quota request template. After a template is disabled, the quota increase
   *       requests in the template are not applied to new accounts in your organization. Disabling a
   *       quota request template does not apply its quota increase requests.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateServiceQuotaTemplateCommandOutput) => void),
    cb?: (err: any, data?: DisassociateServiceQuotaTemplateCommandOutput) => void
  ): Promise<DisassociateServiceQuotaTemplateCommandOutput> | void {
    const command = new DisassociateServiceQuotaTemplateCommand(args);
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
   * <p>Retrieves the status of the association for the quota request template.</p>
   */
  public getAssociationForServiceQuotaTemplate(
    args: GetAssociationForServiceQuotaTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAssociationForServiceQuotaTemplateCommandOutput>;
  public getAssociationForServiceQuotaTemplate(
    args: GetAssociationForServiceQuotaTemplateCommandInput,
    cb: (err: any, data?: GetAssociationForServiceQuotaTemplateCommandOutput) => void
  ): void;
  public getAssociationForServiceQuotaTemplate(
    args: GetAssociationForServiceQuotaTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAssociationForServiceQuotaTemplateCommandOutput) => void
  ): void;
  public getAssociationForServiceQuotaTemplate(
    args: GetAssociationForServiceQuotaTemplateCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetAssociationForServiceQuotaTemplateCommandOutput) => void),
    cb?: (err: any, data?: GetAssociationForServiceQuotaTemplateCommandOutput) => void
  ): Promise<GetAssociationForServiceQuotaTemplateCommandOutput> | void {
    const command = new GetAssociationForServiceQuotaTemplateCommand(args);
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
   * <p>Retrieves the default value for the specified quota. The default value does not reflect
   *       any quota increases.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAWSDefaultServiceQuotaCommandOutput) => void),
    cb?: (err: any, data?: GetAWSDefaultServiceQuotaCommandOutput) => void
  ): Promise<GetAWSDefaultServiceQuotaCommandOutput> | void {
    const command = new GetAWSDefaultServiceQuotaCommand(args);
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
   * <p>Retrieves information about the specified quota increase request.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRequestedServiceQuotaChangeCommandOutput) => void),
    cb?: (err: any, data?: GetRequestedServiceQuotaChangeCommandOutput) => void
  ): Promise<GetRequestedServiceQuotaChangeCommandOutput> | void {
    const command = new GetRequestedServiceQuotaChangeCommand(args);
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
   * <p>Retrieves the applied quota value for the specified quota. For some quotas, only the
   *       default values are available. If the applied quota value is not available for a quota, the
   *       quota is not retrieved.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetServiceQuotaCommandOutput) => void),
    cb?: (err: any, data?: GetServiceQuotaCommandOutput) => void
  ): Promise<GetServiceQuotaCommandOutput> | void {
    const command = new GetServiceQuotaCommand(args);
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
   * <p>Retrieves information about the specified quota increase request in your quota request
   *       template.</p>
   */
  public getServiceQuotaIncreaseRequestFromTemplate(
    args: GetServiceQuotaIncreaseRequestFromTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServiceQuotaIncreaseRequestFromTemplateCommandOutput>;
  public getServiceQuotaIncreaseRequestFromTemplate(
    args: GetServiceQuotaIncreaseRequestFromTemplateCommandInput,
    cb: (err: any, data?: GetServiceQuotaIncreaseRequestFromTemplateCommandOutput) => void
  ): void;
  public getServiceQuotaIncreaseRequestFromTemplate(
    args: GetServiceQuotaIncreaseRequestFromTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServiceQuotaIncreaseRequestFromTemplateCommandOutput) => void
  ): void;
  public getServiceQuotaIncreaseRequestFromTemplate(
    args: GetServiceQuotaIncreaseRequestFromTemplateCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetServiceQuotaIncreaseRequestFromTemplateCommandOutput) => void),
    cb?: (err: any, data?: GetServiceQuotaIncreaseRequestFromTemplateCommandOutput) => void
  ): Promise<GetServiceQuotaIncreaseRequestFromTemplateCommandOutput> | void {
    const command = new GetServiceQuotaIncreaseRequestFromTemplateCommand(args);
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
   * <p>Lists the default values for the quotas for the specified AWS service. A default value
   *       does not reflect any quota increases.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAWSDefaultServiceQuotasCommandOutput) => void),
    cb?: (err: any, data?: ListAWSDefaultServiceQuotasCommandOutput) => void
  ): Promise<ListAWSDefaultServiceQuotasCommandOutput> | void {
    const command = new ListAWSDefaultServiceQuotasCommand(args);
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
   * <p>Retrieves the quota increase requests for the specified service.</p>
   */
  public listRequestedServiceQuotaChangeHistory(
    args: ListRequestedServiceQuotaChangeHistoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRequestedServiceQuotaChangeHistoryCommandOutput>;
  public listRequestedServiceQuotaChangeHistory(
    args: ListRequestedServiceQuotaChangeHistoryCommandInput,
    cb: (err: any, data?: ListRequestedServiceQuotaChangeHistoryCommandOutput) => void
  ): void;
  public listRequestedServiceQuotaChangeHistory(
    args: ListRequestedServiceQuotaChangeHistoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRequestedServiceQuotaChangeHistoryCommandOutput) => void
  ): void;
  public listRequestedServiceQuotaChangeHistory(
    args: ListRequestedServiceQuotaChangeHistoryCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListRequestedServiceQuotaChangeHistoryCommandOutput) => void),
    cb?: (err: any, data?: ListRequestedServiceQuotaChangeHistoryCommandOutput) => void
  ): Promise<ListRequestedServiceQuotaChangeHistoryCommandOutput> | void {
    const command = new ListRequestedServiceQuotaChangeHistoryCommand(args);
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
   * <p>Retrieves the quota increase requests for the specified quota.</p>
   */
  public listRequestedServiceQuotaChangeHistoryByQuota(
    args: ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput>;
  public listRequestedServiceQuotaChangeHistoryByQuota(
    args: ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput,
    cb: (err: any, data?: ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput) => void
  ): void;
  public listRequestedServiceQuotaChangeHistoryByQuota(
    args: ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput) => void
  ): void;
  public listRequestedServiceQuotaChangeHistoryByQuota(
    args: ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput) => void),
    cb?: (err: any, data?: ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput) => void
  ): Promise<ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput> | void {
    const command = new ListRequestedServiceQuotaChangeHistoryByQuotaCommand(args);
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
   * <p>Lists the quota increase requests in the specified quota request template.</p>
   */
  public listServiceQuotaIncreaseRequestsInTemplate(
    args: ListServiceQuotaIncreaseRequestsInTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServiceQuotaIncreaseRequestsInTemplateCommandOutput>;
  public listServiceQuotaIncreaseRequestsInTemplate(
    args: ListServiceQuotaIncreaseRequestsInTemplateCommandInput,
    cb: (err: any, data?: ListServiceQuotaIncreaseRequestsInTemplateCommandOutput) => void
  ): void;
  public listServiceQuotaIncreaseRequestsInTemplate(
    args: ListServiceQuotaIncreaseRequestsInTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServiceQuotaIncreaseRequestsInTemplateCommandOutput) => void
  ): void;
  public listServiceQuotaIncreaseRequestsInTemplate(
    args: ListServiceQuotaIncreaseRequestsInTemplateCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListServiceQuotaIncreaseRequestsInTemplateCommandOutput) => void),
    cb?: (err: any, data?: ListServiceQuotaIncreaseRequestsInTemplateCommandOutput) => void
  ): Promise<ListServiceQuotaIncreaseRequestsInTemplateCommandOutput> | void {
    const command = new ListServiceQuotaIncreaseRequestsInTemplateCommand(args);
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
   * <p>Lists the applied quota values for the specified AWS service. For some quotas, only the
   *       default values are available. If the applied quota value is not available for a quota, the
   *       quota is not retrieved.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListServiceQuotasCommandOutput) => void),
    cb?: (err: any, data?: ListServiceQuotasCommandOutput) => void
  ): Promise<ListServiceQuotasCommandOutput> | void {
    const command = new ListServiceQuotasCommand(args);
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
   * <p>Lists the names and codes for the services integrated with Service Quotas.</p>
   */
  public listServices(
    args: ListServicesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServicesCommandOutput>;
  public listServices(args: ListServicesCommandInput, cb: (err: any, data?: ListServicesCommandOutput) => void): void;
  public listServices(
    args: ListServicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServicesCommandOutput) => void
  ): void;
  public listServices(
    args: ListServicesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListServicesCommandOutput) => void),
    cb?: (err: any, data?: ListServicesCommandOutput) => void
  ): Promise<ListServicesCommandOutput> | void {
    const command = new ListServicesCommand(args);
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
   * <p>Returns a list of the tags assigned to the specified applied quota.</p>
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
   * <p>Adds a quota increase request to your quota request template.</p>
   */
  public putServiceQuotaIncreaseRequestIntoTemplate(
    args: PutServiceQuotaIncreaseRequestIntoTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput>;
  public putServiceQuotaIncreaseRequestIntoTemplate(
    args: PutServiceQuotaIncreaseRequestIntoTemplateCommandInput,
    cb: (err: any, data?: PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput) => void
  ): void;
  public putServiceQuotaIncreaseRequestIntoTemplate(
    args: PutServiceQuotaIncreaseRequestIntoTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput) => void
  ): void;
  public putServiceQuotaIncreaseRequestIntoTemplate(
    args: PutServiceQuotaIncreaseRequestIntoTemplateCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput) => void),
    cb?: (err: any, data?: PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput) => void
  ): Promise<PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput> | void {
    const command = new PutServiceQuotaIncreaseRequestIntoTemplateCommand(args);
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
   * <p>Submits a quota increase request for the specified quota.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RequestServiceQuotaIncreaseCommandOutput) => void),
    cb?: (err: any, data?: RequestServiceQuotaIncreaseCommandOutput) => void
  ): Promise<RequestServiceQuotaIncreaseCommandOutput> | void {
    const command = new RequestServiceQuotaIncreaseCommand(args);
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
   * <p>Adds tags to the specified applied quota. You can include one or more tags to add to the
   *       quota.</p>
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
   * <p>Removes tags from the specified applied quota. You can specify one or more tags to
   *       remove.</p>
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
}
