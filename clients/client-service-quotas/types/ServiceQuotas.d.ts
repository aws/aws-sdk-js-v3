import { ServiceQuotasClient } from "./ServiceQuotasClient";
import { AssociateServiceQuotaTemplateCommandInput, AssociateServiceQuotaTemplateCommandOutput } from "./commands/AssociateServiceQuotaTemplateCommand";
import { DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput, DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput } from "./commands/DeleteServiceQuotaIncreaseRequestFromTemplateCommand";
import { DisassociateServiceQuotaTemplateCommandInput, DisassociateServiceQuotaTemplateCommandOutput } from "./commands/DisassociateServiceQuotaTemplateCommand";
import { GetAWSDefaultServiceQuotaCommandInput, GetAWSDefaultServiceQuotaCommandOutput } from "./commands/GetAWSDefaultServiceQuotaCommand";
import { GetAssociationForServiceQuotaTemplateCommandInput, GetAssociationForServiceQuotaTemplateCommandOutput } from "./commands/GetAssociationForServiceQuotaTemplateCommand";
import { GetRequestedServiceQuotaChangeCommandInput, GetRequestedServiceQuotaChangeCommandOutput } from "./commands/GetRequestedServiceQuotaChangeCommand";
import { GetServiceQuotaCommandInput, GetServiceQuotaCommandOutput } from "./commands/GetServiceQuotaCommand";
import { GetServiceQuotaIncreaseRequestFromTemplateCommandInput, GetServiceQuotaIncreaseRequestFromTemplateCommandOutput } from "./commands/GetServiceQuotaIncreaseRequestFromTemplateCommand";
import { ListAWSDefaultServiceQuotasCommandInput, ListAWSDefaultServiceQuotasCommandOutput } from "./commands/ListAWSDefaultServiceQuotasCommand";
import { ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput, ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput } from "./commands/ListRequestedServiceQuotaChangeHistoryByQuotaCommand";
import { ListRequestedServiceQuotaChangeHistoryCommandInput, ListRequestedServiceQuotaChangeHistoryCommandOutput } from "./commands/ListRequestedServiceQuotaChangeHistoryCommand";
import { ListServiceQuotaIncreaseRequestsInTemplateCommandInput, ListServiceQuotaIncreaseRequestsInTemplateCommandOutput } from "./commands/ListServiceQuotaIncreaseRequestsInTemplateCommand";
import { ListServiceQuotasCommandInput, ListServiceQuotasCommandOutput } from "./commands/ListServiceQuotasCommand";
import { ListServicesCommandInput, ListServicesCommandOutput } from "./commands/ListServicesCommand";
import { PutServiceQuotaIncreaseRequestIntoTemplateCommandInput, PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput } from "./commands/PutServiceQuotaIncreaseRequestIntoTemplateCommand";
import { RequestServiceQuotaIncreaseCommandInput, RequestServiceQuotaIncreaseCommandOutput } from "./commands/RequestServiceQuotaIncreaseCommand";
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
export declare class ServiceQuotas extends ServiceQuotasClient {
    /**
     * <p>Associates the Service Quotas template with your organization so that when new accounts
     *       are created in your organization, the template submits increase requests for the specified
     *       service quotas. Use the Service Quotas template to request an increase for any adjustable
     *       quota value. After you define the Service Quotas template, use this operation to associate, or
     *       enable, the template. </p>
     */
    associateServiceQuotaTemplate(args: AssociateServiceQuotaTemplateCommandInput, options?: __HttpHandlerOptions): Promise<AssociateServiceQuotaTemplateCommandOutput>;
    associateServiceQuotaTemplate(args: AssociateServiceQuotaTemplateCommandInput, cb: (err: any, data?: AssociateServiceQuotaTemplateCommandOutput) => void): void;
    associateServiceQuotaTemplate(args: AssociateServiceQuotaTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateServiceQuotaTemplateCommandOutput) => void): void;
    /**
     * <p>Removes a service quota increase request from the Service Quotas template. </p>
     */
    deleteServiceQuotaIncreaseRequestFromTemplate(args: DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput, options?: __HttpHandlerOptions): Promise<DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput>;
    deleteServiceQuotaIncreaseRequestFromTemplate(args: DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput, cb: (err: any, data?: DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput) => void): void;
    deleteServiceQuotaIncreaseRequestFromTemplate(args: DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput) => void): void;
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
    disassociateServiceQuotaTemplate(args: DisassociateServiceQuotaTemplateCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateServiceQuotaTemplateCommandOutput>;
    disassociateServiceQuotaTemplate(args: DisassociateServiceQuotaTemplateCommandInput, cb: (err: any, data?: DisassociateServiceQuotaTemplateCommandOutput) => void): void;
    disassociateServiceQuotaTemplate(args: DisassociateServiceQuotaTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateServiceQuotaTemplateCommandOutput) => void): void;
    /**
     * <p>Retrieves the default service quotas values. The Value returned for each quota is the AWS
     *       default value, even if the quotas have been increased.. </p>
     */
    getAWSDefaultServiceQuota(args: GetAWSDefaultServiceQuotaCommandInput, options?: __HttpHandlerOptions): Promise<GetAWSDefaultServiceQuotaCommandOutput>;
    getAWSDefaultServiceQuota(args: GetAWSDefaultServiceQuotaCommandInput, cb: (err: any, data?: GetAWSDefaultServiceQuotaCommandOutput) => void): void;
    getAWSDefaultServiceQuota(args: GetAWSDefaultServiceQuotaCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAWSDefaultServiceQuotaCommandOutput) => void): void;
    /**
     * <p>Retrieves the <code>ServiceQuotaTemplateAssociationStatus</code> value from the service.
     *       Use this action to determine if the Service Quota template is associated, or enabled. </p>
     */
    getAssociationForServiceQuotaTemplate(args: GetAssociationForServiceQuotaTemplateCommandInput, options?: __HttpHandlerOptions): Promise<GetAssociationForServiceQuotaTemplateCommandOutput>;
    getAssociationForServiceQuotaTemplate(args: GetAssociationForServiceQuotaTemplateCommandInput, cb: (err: any, data?: GetAssociationForServiceQuotaTemplateCommandOutput) => void): void;
    getAssociationForServiceQuotaTemplate(args: GetAssociationForServiceQuotaTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAssociationForServiceQuotaTemplateCommandOutput) => void): void;
    /**
     * <p>Retrieves the details for a particular increase request. </p>
     */
    getRequestedServiceQuotaChange(args: GetRequestedServiceQuotaChangeCommandInput, options?: __HttpHandlerOptions): Promise<GetRequestedServiceQuotaChangeCommandOutput>;
    getRequestedServiceQuotaChange(args: GetRequestedServiceQuotaChangeCommandInput, cb: (err: any, data?: GetRequestedServiceQuotaChangeCommandOutput) => void): void;
    getRequestedServiceQuotaChange(args: GetRequestedServiceQuotaChangeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRequestedServiceQuotaChangeCommandOutput) => void): void;
    /**
     * <p>Returns the details for the specified service quota. This operation provides a different
     *       Value than the <code>GetAWSDefaultServiceQuota</code> operation. This operation returns the
     *       applied value for each quota. <code>GetAWSDefaultServiceQuota</code> returns the default AWS
     *       value for each quota. </p>
     */
    getServiceQuota(args: GetServiceQuotaCommandInput, options?: __HttpHandlerOptions): Promise<GetServiceQuotaCommandOutput>;
    getServiceQuota(args: GetServiceQuotaCommandInput, cb: (err: any, data?: GetServiceQuotaCommandOutput) => void): void;
    getServiceQuota(args: GetServiceQuotaCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetServiceQuotaCommandOutput) => void): void;
    /**
     * <p>Returns the details of the service quota increase request in your template.</p>
     */
    getServiceQuotaIncreaseRequestFromTemplate(args: GetServiceQuotaIncreaseRequestFromTemplateCommandInput, options?: __HttpHandlerOptions): Promise<GetServiceQuotaIncreaseRequestFromTemplateCommandOutput>;
    getServiceQuotaIncreaseRequestFromTemplate(args: GetServiceQuotaIncreaseRequestFromTemplateCommandInput, cb: (err: any, data?: GetServiceQuotaIncreaseRequestFromTemplateCommandOutput) => void): void;
    getServiceQuotaIncreaseRequestFromTemplate(args: GetServiceQuotaIncreaseRequestFromTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetServiceQuotaIncreaseRequestFromTemplateCommandOutput) => void): void;
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
    listAWSDefaultServiceQuotas(args: ListAWSDefaultServiceQuotasCommandInput, options?: __HttpHandlerOptions): Promise<ListAWSDefaultServiceQuotasCommandOutput>;
    listAWSDefaultServiceQuotas(args: ListAWSDefaultServiceQuotasCommandInput, cb: (err: any, data?: ListAWSDefaultServiceQuotasCommandOutput) => void): void;
    listAWSDefaultServiceQuotas(args: ListAWSDefaultServiceQuotasCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAWSDefaultServiceQuotasCommandOutput) => void): void;
    /**
     * <p>Requests a list of the changes to quotas for a service.</p>
     */
    listRequestedServiceQuotaChangeHistory(args: ListRequestedServiceQuotaChangeHistoryCommandInput, options?: __HttpHandlerOptions): Promise<ListRequestedServiceQuotaChangeHistoryCommandOutput>;
    listRequestedServiceQuotaChangeHistory(args: ListRequestedServiceQuotaChangeHistoryCommandInput, cb: (err: any, data?: ListRequestedServiceQuotaChangeHistoryCommandOutput) => void): void;
    listRequestedServiceQuotaChangeHistory(args: ListRequestedServiceQuotaChangeHistoryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListRequestedServiceQuotaChangeHistoryCommandOutput) => void): void;
    /**
     * <p>Requests a list of the changes to specific service quotas. This command provides
     *       additional granularity over the <code>ListRequestedServiceQuotaChangeHistory</code> command.
     *       Once a quota change request has reached <code>CASE_CLOSED, APPROVED,</code> or
     *         <code>DENIED</code>, the history has been kept for 90 days.</p>
     */
    listRequestedServiceQuotaChangeHistoryByQuota(args: ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput, options?: __HttpHandlerOptions): Promise<ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput>;
    listRequestedServiceQuotaChangeHistoryByQuota(args: ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput, cb: (err: any, data?: ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput) => void): void;
    listRequestedServiceQuotaChangeHistoryByQuota(args: ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput) => void): void;
    /**
     * <p>Returns a list of the quota increase requests in the template. </p>
     */
    listServiceQuotaIncreaseRequestsInTemplate(args: ListServiceQuotaIncreaseRequestsInTemplateCommandInput, options?: __HttpHandlerOptions): Promise<ListServiceQuotaIncreaseRequestsInTemplateCommandOutput>;
    listServiceQuotaIncreaseRequestsInTemplate(args: ListServiceQuotaIncreaseRequestsInTemplateCommandInput, cb: (err: any, data?: ListServiceQuotaIncreaseRequestsInTemplateCommandOutput) => void): void;
    listServiceQuotaIncreaseRequestsInTemplate(args: ListServiceQuotaIncreaseRequestsInTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListServiceQuotaIncreaseRequestsInTemplateCommandOutput) => void): void;
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
    listServiceQuotas(args: ListServiceQuotasCommandInput, options?: __HttpHandlerOptions): Promise<ListServiceQuotasCommandOutput>;
    listServiceQuotas(args: ListServiceQuotasCommandInput, cb: (err: any, data?: ListServiceQuotasCommandOutput) => void): void;
    listServiceQuotas(args: ListServiceQuotasCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListServiceQuotasCommandOutput) => void): void;
    /**
     * <p>Lists the AWS services available in Service Quotas. Not all AWS services are available in
     *       Service Quotas. To list the see the list of the service quotas for a specific service, use
     *         <a>ListServiceQuotas</a>.</p>
     */
    listServices(args: ListServicesCommandInput, options?: __HttpHandlerOptions): Promise<ListServicesCommandOutput>;
    listServices(args: ListServicesCommandInput, cb: (err: any, data?: ListServicesCommandOutput) => void): void;
    listServices(args: ListServicesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListServicesCommandOutput) => void): void;
    /**
     * <p>Defines and adds a quota to the service quota template. To add a quota to the template,
     *       you must provide the <code>ServiceCode</code>, <code>QuotaCode</code>, <code>AwsRegion</code>,
     *       and <code>DesiredValue</code>. Once you add a quota to the template, use <a>ListServiceQuotaIncreaseRequestsInTemplate</a> to see the list of quotas in the
     *       template.</p>
     */
    putServiceQuotaIncreaseRequestIntoTemplate(args: PutServiceQuotaIncreaseRequestIntoTemplateCommandInput, options?: __HttpHandlerOptions): Promise<PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput>;
    putServiceQuotaIncreaseRequestIntoTemplate(args: PutServiceQuotaIncreaseRequestIntoTemplateCommandInput, cb: (err: any, data?: PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput) => void): void;
    putServiceQuotaIncreaseRequestIntoTemplate(args: PutServiceQuotaIncreaseRequestIntoTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput) => void): void;
    /**
     * <p>Retrieves the details of a service quota increase request. The response to this command
     *       provides the details in the <a>RequestedServiceQuotaChange</a> object. </p>
     */
    requestServiceQuotaIncrease(args: RequestServiceQuotaIncreaseCommandInput, options?: __HttpHandlerOptions): Promise<RequestServiceQuotaIncreaseCommandOutput>;
    requestServiceQuotaIncrease(args: RequestServiceQuotaIncreaseCommandInput, cb: (err: any, data?: RequestServiceQuotaIncreaseCommandOutput) => void): void;
    requestServiceQuotaIncrease(args: RequestServiceQuotaIncreaseCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RequestServiceQuotaIncreaseCommandOutput) => void): void;
}
