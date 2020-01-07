import { CloudHSMClient } from "./CloudHSMClient";
import { AddTagsToResourceCommandInput, AddTagsToResourceCommandOutput } from "./commands/AddTagsToResourceCommand";
import { CreateHapgCommandInput, CreateHapgCommandOutput } from "./commands/CreateHapgCommand";
import { CreateHsmCommandInput, CreateHsmCommandOutput } from "./commands/CreateHsmCommand";
import { CreateLunaClientCommandInput, CreateLunaClientCommandOutput } from "./commands/CreateLunaClientCommand";
import { DeleteHapgCommandInput, DeleteHapgCommandOutput } from "./commands/DeleteHapgCommand";
import { DeleteHsmCommandInput, DeleteHsmCommandOutput } from "./commands/DeleteHsmCommand";
import { DeleteLunaClientCommandInput, DeleteLunaClientCommandOutput } from "./commands/DeleteLunaClientCommand";
import { DescribeHapgCommandInput, DescribeHapgCommandOutput } from "./commands/DescribeHapgCommand";
import { DescribeHsmCommandInput, DescribeHsmCommandOutput } from "./commands/DescribeHsmCommand";
import { DescribeLunaClientCommandInput, DescribeLunaClientCommandOutput } from "./commands/DescribeLunaClientCommand";
import { GetConfigCommandInput, GetConfigCommandOutput } from "./commands/GetConfigCommand";
import { ListAvailableZonesCommandInput, ListAvailableZonesCommandOutput } from "./commands/ListAvailableZonesCommand";
import { ListHapgsCommandInput, ListHapgsCommandOutput } from "./commands/ListHapgsCommand";
import { ListHsmsCommandInput, ListHsmsCommandOutput } from "./commands/ListHsmsCommand";
import { ListLunaClientsCommandInput, ListLunaClientsCommandOutput } from "./commands/ListLunaClientsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { ModifyHapgCommandInput, ModifyHapgCommandOutput } from "./commands/ModifyHapgCommand";
import { ModifyHsmCommandInput, ModifyHsmCommandOutput } from "./commands/ModifyHsmCommand";
import { ModifyLunaClientCommandInput, ModifyLunaClientCommandOutput } from "./commands/ModifyLunaClientCommand";
import { RemoveTagsFromResourceCommandInput, RemoveTagsFromResourceCommandOutput } from "./commands/RemoveTagsFromResourceCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>AWS CloudHSM Service</fullname>
 *          <p>This is documentation for <b>AWS CloudHSM Classic</b>. For
 *       more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM
 *       Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS
 *       CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p>
 *          <p>
 *             <b>For information about the current version of AWS
 *       CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the
 *       <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>,
 *       and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API
 *       Reference</a>.</p>
 */
export declare class CloudHSM extends CloudHSMClient {
    /**
     * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For
     *       more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM
     *       Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS
     *       CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p>
     *          <p>
     *             <b>For information about the current version of AWS
     *       CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the
     *       <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>,
     *       and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API
     *       Reference</a>.</p>
     *          <p>Adds or overwrites one or more tags for the specified AWS CloudHSM resource.</p>
     *          <p>Each tag consists of a key and a value. Tag keys must be unique to each
     *       resource.</p>
     */
    addTagsToResource(args: AddTagsToResourceCommandInput, options?: __HttpHandlerOptions): Promise<AddTagsToResourceCommandOutput>;
    addTagsToResource(args: AddTagsToResourceCommandInput, cb: (err: any, data?: AddTagsToResourceCommandOutput) => void): void;
    addTagsToResource(args: AddTagsToResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddTagsToResourceCommandOutput) => void): void;
    /**
     * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For
     *       more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM
     *       Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS
     *       CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p>
     *          <p>
     *             <b>For information about the current version of AWS
     *       CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the
     *       <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>,
     *       and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API
     *       Reference</a>.</p>
     *          <p>Creates a high-availability partition group. A high-availability partition group is a
     *       group of partitions that spans multiple physical HSMs.</p>
     */
    createHapg(args: CreateHapgCommandInput, options?: __HttpHandlerOptions): Promise<CreateHapgCommandOutput>;
    createHapg(args: CreateHapgCommandInput, cb: (err: any, data?: CreateHapgCommandOutput) => void): void;
    createHapg(args: CreateHapgCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateHapgCommandOutput) => void): void;
    /**
     * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For
     *       more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM
     *       Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS
     *       CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p>
     *          <p>
     *             <b>For information about the current version of AWS
     *       CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the
     *       <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>,
     *       and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API
     *       Reference</a>.</p>
     *          <p>Creates an uninitialized HSM instance.</p>
     *          <p>There is an upfront fee charged for each HSM instance that you create with the
     *         <code>CreateHsm</code> operation. If you accidentally provision an HSM and want to request a
     *       refund, delete the instance using the <a>DeleteHsm</a> operation, go to the <a href="https://console.aws.amazon.com/support/home">AWS Support Center</a>, create a new case, and select
     *         <b>Account and Billing Support</b>.</p>
     *          <important>
     *             <p>It can take up to 20 minutes to create and provision an HSM. You can monitor the
     *         status of the HSM with the <a>DescribeHsm</a> operation. The HSM is ready to be
     *         initialized when the status changes to <code>RUNNING</code>.</p>
     *          </important>
     */
    createHsm(args: CreateHsmCommandInput, options?: __HttpHandlerOptions): Promise<CreateHsmCommandOutput>;
    createHsm(args: CreateHsmCommandInput, cb: (err: any, data?: CreateHsmCommandOutput) => void): void;
    createHsm(args: CreateHsmCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateHsmCommandOutput) => void): void;
    /**
     * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For
     *       more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM
     *       Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS
     *       CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p>
     *          <p>
     *             <b>For information about the current version of AWS
     *       CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the
     *       <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>,
     *       and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API
     *       Reference</a>.</p>
     *          <p>Creates an HSM client.</p>
     */
    createLunaClient(args: CreateLunaClientCommandInput, options?: __HttpHandlerOptions): Promise<CreateLunaClientCommandOutput>;
    createLunaClient(args: CreateLunaClientCommandInput, cb: (err: any, data?: CreateLunaClientCommandOutput) => void): void;
    createLunaClient(args: CreateLunaClientCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateLunaClientCommandOutput) => void): void;
    /**
     * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For
     *       more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM
     *       Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS
     *       CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p>
     *          <p>
     *             <b>For information about the current version of AWS
     *       CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the
     *       <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>,
     *       and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API
     *       Reference</a>.</p>
     *          <p>Deletes a high-availability partition group.</p>
     */
    deleteHapg(args: DeleteHapgCommandInput, options?: __HttpHandlerOptions): Promise<DeleteHapgCommandOutput>;
    deleteHapg(args: DeleteHapgCommandInput, cb: (err: any, data?: DeleteHapgCommandOutput) => void): void;
    deleteHapg(args: DeleteHapgCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteHapgCommandOutput) => void): void;
    /**
     * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For
     *       more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM
     *       Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS
     *       CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p>
     *          <p>
     *             <b>For information about the current version of AWS
     *       CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the
     *       <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>,
     *       and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API
     *       Reference</a>.</p>
     *          <p>Deletes an HSM. After completion, this operation cannot be undone and your key material
     *       cannot be recovered.</p>
     */
    deleteHsm(args: DeleteHsmCommandInput, options?: __HttpHandlerOptions): Promise<DeleteHsmCommandOutput>;
    deleteHsm(args: DeleteHsmCommandInput, cb: (err: any, data?: DeleteHsmCommandOutput) => void): void;
    deleteHsm(args: DeleteHsmCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteHsmCommandOutput) => void): void;
    /**
     * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For
     *       more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM
     *       Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS
     *       CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p>
     *          <p>
     *             <b>For information about the current version of AWS
     *       CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the
     *       <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>,
     *       and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API
     *       Reference</a>.</p>
     *          <p>Deletes a client.</p>
     */
    deleteLunaClient(args: DeleteLunaClientCommandInput, options?: __HttpHandlerOptions): Promise<DeleteLunaClientCommandOutput>;
    deleteLunaClient(args: DeleteLunaClientCommandInput, cb: (err: any, data?: DeleteLunaClientCommandOutput) => void): void;
    deleteLunaClient(args: DeleteLunaClientCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteLunaClientCommandOutput) => void): void;
    /**
     * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For
     *       more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM
     *       Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS
     *       CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p>
     *          <p>
     *             <b>For information about the current version of AWS
     *       CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the
     *       <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>,
     *       and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API
     *       Reference</a>.</p>
     *          <p>Retrieves information about a high-availability partition group.</p>
     */
    describeHapg(args: DescribeHapgCommandInput, options?: __HttpHandlerOptions): Promise<DescribeHapgCommandOutput>;
    describeHapg(args: DescribeHapgCommandInput, cb: (err: any, data?: DescribeHapgCommandOutput) => void): void;
    describeHapg(args: DescribeHapgCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeHapgCommandOutput) => void): void;
    /**
     * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For
     *       more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM
     *       Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS
     *       CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p>
     *          <p>
     *             <b>For information about the current version of AWS
     *       CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the
     *       <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>,
     *       and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API
     *       Reference</a>.</p>
     *          <p>Retrieves information about an HSM. You can identify the HSM by its ARN or its serial
     *       number.</p>
     */
    describeHsm(args: DescribeHsmCommandInput, options?: __HttpHandlerOptions): Promise<DescribeHsmCommandOutput>;
    describeHsm(args: DescribeHsmCommandInput, cb: (err: any, data?: DescribeHsmCommandOutput) => void): void;
    describeHsm(args: DescribeHsmCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeHsmCommandOutput) => void): void;
    /**
     * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For
     *       more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM
     *       Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS
     *       CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p>
     *          <p>
     *             <b>For information about the current version of AWS
     *       CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the
     *       <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>,
     *       and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API
     *       Reference</a>.</p>
     *          <p>Retrieves information about an HSM client.</p>
     */
    describeLunaClient(args: DescribeLunaClientCommandInput, options?: __HttpHandlerOptions): Promise<DescribeLunaClientCommandOutput>;
    describeLunaClient(args: DescribeLunaClientCommandInput, cb: (err: any, data?: DescribeLunaClientCommandOutput) => void): void;
    describeLunaClient(args: DescribeLunaClientCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeLunaClientCommandOutput) => void): void;
    /**
     * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For
     *       more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM
     *       Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS
     *       CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p>
     *          <p>
     *             <b>For information about the current version of AWS
     *       CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the
     *       <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>,
     *       and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API
     *       Reference</a>.</p>
     *          <p>Gets the configuration files necessary to connect to all high availability partition
     *       groups the client is associated with.</p>
     */
    getConfig(args: GetConfigCommandInput, options?: __HttpHandlerOptions): Promise<GetConfigCommandOutput>;
    getConfig(args: GetConfigCommandInput, cb: (err: any, data?: GetConfigCommandOutput) => void): void;
    getConfig(args: GetConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetConfigCommandOutput) => void): void;
    /**
     * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For
     *       more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM
     *       Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS
     *       CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p>
     *          <p>
     *             <b>For information about the current version of AWS
     *       CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the
     *       <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>,
     *       and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API
     *       Reference</a>.</p>
     *          <p>Lists the Availability Zones that have available AWS CloudHSM capacity.</p>
     */
    listAvailableZones(args: ListAvailableZonesCommandInput, options?: __HttpHandlerOptions): Promise<ListAvailableZonesCommandOutput>;
    listAvailableZones(args: ListAvailableZonesCommandInput, cb: (err: any, data?: ListAvailableZonesCommandOutput) => void): void;
    listAvailableZones(args: ListAvailableZonesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAvailableZonesCommandOutput) => void): void;
    /**
     * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For
     *       more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM
     *       Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS
     *       CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p>
     *          <p>
     *             <b>For information about the current version of AWS
     *       CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the
     *       <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>,
     *       and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API
     *       Reference</a>.</p>
     *          <p>Lists the high-availability partition groups for the account.</p>
     *          <p>This operation supports pagination with the use of the <code>NextToken</code> member.
     *       If more results are available, the <code>NextToken</code> member of the response contains a
     *       token that you pass in the next call to <code>ListHapgs</code> to retrieve the next set of
     *       items.</p>
     */
    listHapgs(args: ListHapgsCommandInput, options?: __HttpHandlerOptions): Promise<ListHapgsCommandOutput>;
    listHapgs(args: ListHapgsCommandInput, cb: (err: any, data?: ListHapgsCommandOutput) => void): void;
    listHapgs(args: ListHapgsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListHapgsCommandOutput) => void): void;
    /**
     * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For
     *       more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM
     *       Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS
     *       CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p>
     *          <p>
     *             <b>For information about the current version of AWS
     *       CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the
     *       <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>,
     *       and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API
     *       Reference</a>.</p>
     *          <p>Retrieves the identifiers of all of the HSMs provisioned for the current
     *       customer.</p>
     *          <p>This operation supports pagination with the use of the <code>NextToken</code> member.
     *       If more results are available, the <code>NextToken</code> member of the response contains a
     *       token that you pass in the next call to <code>ListHsms</code> to retrieve the next set of
     *       items.</p>
     */
    listHsms(args: ListHsmsCommandInput, options?: __HttpHandlerOptions): Promise<ListHsmsCommandOutput>;
    listHsms(args: ListHsmsCommandInput, cb: (err: any, data?: ListHsmsCommandOutput) => void): void;
    listHsms(args: ListHsmsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListHsmsCommandOutput) => void): void;
    /**
     * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For
     *       more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM
     *       Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS
     *       CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p>
     *          <p>
     *             <b>For information about the current version of AWS
     *       CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the
     *       <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>,
     *       and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API
     *       Reference</a>.</p>
     *          <p>Lists all of the clients.</p>
     *          <p>This operation supports pagination with the use of the <code>NextToken</code> member.
     *       If more results are available, the <code>NextToken</code> member of the response contains a
     *       token that you pass in the next call to <code>ListLunaClients</code> to retrieve the next set
     *       of items.</p>
     */
    listLunaClients(args: ListLunaClientsCommandInput, options?: __HttpHandlerOptions): Promise<ListLunaClientsCommandOutput>;
    listLunaClients(args: ListLunaClientsCommandInput, cb: (err: any, data?: ListLunaClientsCommandOutput) => void): void;
    listLunaClients(args: ListLunaClientsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListLunaClientsCommandOutput) => void): void;
    /**
     * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For
     *       more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM
     *       Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS
     *       CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p>
     *          <p>
     *             <b>For information about the current version of AWS
     *       CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the
     *       <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>,
     *       and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API
     *       Reference</a>.</p>
     *          <p>Returns a list of all tags for the specified AWS CloudHSM resource.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For
     *       more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM
     *       Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS
     *       CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p>
     *          <p>
     *             <b>For information about the current version of AWS
     *       CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the
     *       <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>,
     *       and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API
     *       Reference</a>.</p>
     *          <p>Modifies an existing high-availability partition group.</p>
     */
    modifyHapg(args: ModifyHapgCommandInput, options?: __HttpHandlerOptions): Promise<ModifyHapgCommandOutput>;
    modifyHapg(args: ModifyHapgCommandInput, cb: (err: any, data?: ModifyHapgCommandOutput) => void): void;
    modifyHapg(args: ModifyHapgCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyHapgCommandOutput) => void): void;
    /**
     * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For
     *       more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM
     *       Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS
     *       CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p>
     *          <p>
     *             <b>For information about the current version of AWS
     *       CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the
     *       <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>,
     *       and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API
     *       Reference</a>.</p>
     *          <p>Modifies an HSM.</p>
     *          <important>
     *             <p>This operation can result in the HSM being offline for up to 15 minutes while the AWS
     *         CloudHSM service is reconfigured. If you are modifying a production HSM, you should ensure
     *         that your AWS CloudHSM service is configured for high availability, and consider executing this
     *         operation during a maintenance window.</p>
     *          </important>
     */
    modifyHsm(args: ModifyHsmCommandInput, options?: __HttpHandlerOptions): Promise<ModifyHsmCommandOutput>;
    modifyHsm(args: ModifyHsmCommandInput, cb: (err: any, data?: ModifyHsmCommandOutput) => void): void;
    modifyHsm(args: ModifyHsmCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyHsmCommandOutput) => void): void;
    /**
     * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For
     *       more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM
     *       Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS
     *       CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p>
     *          <p>
     *             <b>For information about the current version of AWS
     *       CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the
     *       <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>,
     *       and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API
     *       Reference</a>.</p>
     *          <p>Modifies the certificate used by the client.</p>
     *          <p>This action can potentially start a workflow to install the new certificate on the
     *       client's HSMs.</p>
     */
    modifyLunaClient(args: ModifyLunaClientCommandInput, options?: __HttpHandlerOptions): Promise<ModifyLunaClientCommandOutput>;
    modifyLunaClient(args: ModifyLunaClientCommandInput, cb: (err: any, data?: ModifyLunaClientCommandOutput) => void): void;
    modifyLunaClient(args: ModifyLunaClientCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyLunaClientCommandOutput) => void): void;
    /**
     * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For
     *       more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM
     *       Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS
     *       CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p>
     *          <p>
     *             <b>For information about the current version of AWS
     *       CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the
     *       <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>,
     *       and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API
     *       Reference</a>.</p>
     *          <p>Removes one or more tags from the specified AWS CloudHSM resource.</p>
     *          <p>To remove a tag, specify only the tag key to remove (not the value). To overwrite the
     *       value for an existing tag, use <a>AddTagsToResource</a>.</p>
     */
    removeTagsFromResource(args: RemoveTagsFromResourceCommandInput, options?: __HttpHandlerOptions): Promise<RemoveTagsFromResourceCommandOutput>;
    removeTagsFromResource(args: RemoveTagsFromResourceCommandInput, cb: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void): void;
    removeTagsFromResource(args: RemoveTagsFromResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void): void;
}
