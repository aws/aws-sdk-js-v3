import { LakeFormationClient } from "./LakeFormationClient";
import { BatchGrantPermissionsCommandInput, BatchGrantPermissionsCommandOutput } from "./commands/BatchGrantPermissionsCommand";
import { BatchRevokePermissionsCommandInput, BatchRevokePermissionsCommandOutput } from "./commands/BatchRevokePermissionsCommand";
import { DeregisterResourceCommandInput, DeregisterResourceCommandOutput } from "./commands/DeregisterResourceCommand";
import { DescribeResourceCommandInput, DescribeResourceCommandOutput } from "./commands/DescribeResourceCommand";
import { GetDataLakeSettingsCommandInput, GetDataLakeSettingsCommandOutput } from "./commands/GetDataLakeSettingsCommand";
import { GetEffectivePermissionsForPathCommandInput, GetEffectivePermissionsForPathCommandOutput } from "./commands/GetEffectivePermissionsForPathCommand";
import { GrantPermissionsCommandInput, GrantPermissionsCommandOutput } from "./commands/GrantPermissionsCommand";
import { ListPermissionsCommandInput, ListPermissionsCommandOutput } from "./commands/ListPermissionsCommand";
import { ListResourcesCommandInput, ListResourcesCommandOutput } from "./commands/ListResourcesCommand";
import { PutDataLakeSettingsCommandInput, PutDataLakeSettingsCommandOutput } from "./commands/PutDataLakeSettingsCommand";
import { RegisterResourceCommandInput, RegisterResourceCommandOutput } from "./commands/RegisterResourceCommand";
import { RevokePermissionsCommandInput, RevokePermissionsCommandOutput } from "./commands/RevokePermissionsCommand";
import { UpdateResourceCommandInput, UpdateResourceCommandOutput } from "./commands/UpdateResourceCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>AWS Lake Formation</fullname>
 *          <p>Defines the public endpoint for the AWS Lake Formation service.</p>
 */
export declare class LakeFormation extends LakeFormationClient {
    /**
     * <p>Batch operation to grant permissions to the principal.</p>
     */
    batchGrantPermissions(args: BatchGrantPermissionsCommandInput, options?: __HttpHandlerOptions): Promise<BatchGrantPermissionsCommandOutput>;
    batchGrantPermissions(args: BatchGrantPermissionsCommandInput, cb: (err: any, data?: BatchGrantPermissionsCommandOutput) => void): void;
    batchGrantPermissions(args: BatchGrantPermissionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchGrantPermissionsCommandOutput) => void): void;
    /**
     * <p>Batch operation to revoke permissions from the principal.</p>
     */
    batchRevokePermissions(args: BatchRevokePermissionsCommandInput, options?: __HttpHandlerOptions): Promise<BatchRevokePermissionsCommandOutput>;
    batchRevokePermissions(args: BatchRevokePermissionsCommandInput, cb: (err: any, data?: BatchRevokePermissionsCommandOutput) => void): void;
    batchRevokePermissions(args: BatchRevokePermissionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchRevokePermissionsCommandOutput) => void): void;
    /**
     * <p>Deregisters the resource as managed by the Data Catalog.</p>
     *
     *          <p>When you deregister a path, Lake Formation removes the path from the inline policy attached to your service-linked role.</p>
     */
    deregisterResource(args: DeregisterResourceCommandInput, options?: __HttpHandlerOptions): Promise<DeregisterResourceCommandOutput>;
    deregisterResource(args: DeregisterResourceCommandInput, cb: (err: any, data?: DeregisterResourceCommandOutput) => void): void;
    deregisterResource(args: DeregisterResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeregisterResourceCommandOutput) => void): void;
    /**
     * <p>Retrieves the current data access role for the given resource registered in AWS Lake Formation.</p>
     */
    describeResource(args: DescribeResourceCommandInput, options?: __HttpHandlerOptions): Promise<DescribeResourceCommandOutput>;
    describeResource(args: DescribeResourceCommandInput, cb: (err: any, data?: DescribeResourceCommandOutput) => void): void;
    describeResource(args: DescribeResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeResourceCommandOutput) => void): void;
    /**
     * <p>The AWS Lake Formation principal.</p>
     */
    getDataLakeSettings(args: GetDataLakeSettingsCommandInput, options?: __HttpHandlerOptions): Promise<GetDataLakeSettingsCommandOutput>;
    getDataLakeSettings(args: GetDataLakeSettingsCommandInput, cb: (err: any, data?: GetDataLakeSettingsCommandOutput) => void): void;
    getDataLakeSettings(args: GetDataLakeSettingsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDataLakeSettingsCommandOutput) => void): void;
    /**
     * <p>Returns the permissions for a specified table or database resource located at a path in Amazon S3.</p>
     */
    getEffectivePermissionsForPath(args: GetEffectivePermissionsForPathCommandInput, options?: __HttpHandlerOptions): Promise<GetEffectivePermissionsForPathCommandOutput>;
    getEffectivePermissionsForPath(args: GetEffectivePermissionsForPathCommandInput, cb: (err: any, data?: GetEffectivePermissionsForPathCommandOutput) => void): void;
    getEffectivePermissionsForPath(args: GetEffectivePermissionsForPathCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetEffectivePermissionsForPathCommandOutput) => void): void;
    /**
     * <p>Grants permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3.</p>
     * 	        <p>For information about permissions, see <a href="https://docs-aws.amazon.com/michigan/latest/dg/security-data-access.html">Security and Access Control to Metadata and Data</a>.</p>
     */
    grantPermissions(args: GrantPermissionsCommandInput, options?: __HttpHandlerOptions): Promise<GrantPermissionsCommandOutput>;
    grantPermissions(args: GrantPermissionsCommandInput, cb: (err: any, data?: GrantPermissionsCommandOutput) => void): void;
    grantPermissions(args: GrantPermissionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GrantPermissionsCommandOutput) => void): void;
    /**
     * <p>Returns a list of the principal permissions on the resource, filtered by the permissions of the caller. For example, if you are granted an ALTER permission, you are able to see only the principal permissions for ALTER.</p>
     * 	        <p>This operation returns only those permissions that have been explicitly granted.</p>
     * 	        <p>For information about permissions, see <a href="https://docs-aws.amazon.com/michigan/latest/dg/security-data-access.html">Security and Access Control to Metadata and Data</a>.</p>
     */
    listPermissions(args: ListPermissionsCommandInput, options?: __HttpHandlerOptions): Promise<ListPermissionsCommandOutput>;
    listPermissions(args: ListPermissionsCommandInput, cb: (err: any, data?: ListPermissionsCommandOutput) => void): void;
    listPermissions(args: ListPermissionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPermissionsCommandOutput) => void): void;
    /**
     * <p>Lists the resources registered to be managed by the Data Catalog.</p>
     */
    listResources(args: ListResourcesCommandInput, options?: __HttpHandlerOptions): Promise<ListResourcesCommandOutput>;
    listResources(args: ListResourcesCommandInput, cb: (err: any, data?: ListResourcesCommandOutput) => void): void;
    listResources(args: ListResourcesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListResourcesCommandOutput) => void): void;
    /**
     * <p>The AWS Lake Formation principal.</p>
     */
    putDataLakeSettings(args: PutDataLakeSettingsCommandInput, options?: __HttpHandlerOptions): Promise<PutDataLakeSettingsCommandOutput>;
    putDataLakeSettings(args: PutDataLakeSettingsCommandInput, cb: (err: any, data?: PutDataLakeSettingsCommandOutput) => void): void;
    putDataLakeSettings(args: PutDataLakeSettingsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutDataLakeSettingsCommandOutput) => void): void;
    /**
     * <p>Registers the resource as managed by the Data Catalog.</p>
     *
     * 	        <p>To add or update data, Lake Formation needs read/write access to the chosen Amazon S3 path. Choose a role that you know has permission to do this, or choose the AWSServiceRoleForLakeFormationDataAccess service-linked role. When you register the first Amazon S3 path, the service-linked role and a new inline policy are created on your behalf. Lake Formation adds the first path to the inline policy and attaches it to the service-linked role. When you register subsequent paths, Lake Formation adds the path to the existing policy.</p>
     */
    registerResource(args: RegisterResourceCommandInput, options?: __HttpHandlerOptions): Promise<RegisterResourceCommandOutput>;
    registerResource(args: RegisterResourceCommandInput, cb: (err: any, data?: RegisterResourceCommandOutput) => void): void;
    registerResource(args: RegisterResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RegisterResourceCommandOutput) => void): void;
    /**
     * <p>Revokes permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3.</p>
     */
    revokePermissions(args: RevokePermissionsCommandInput, options?: __HttpHandlerOptions): Promise<RevokePermissionsCommandOutput>;
    revokePermissions(args: RevokePermissionsCommandInput, cb: (err: any, data?: RevokePermissionsCommandOutput) => void): void;
    revokePermissions(args: RevokePermissionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RevokePermissionsCommandOutput) => void): void;
    /**
     * <p>Updates the data access role used for vending access to the given (registered) resource in AWS Lake Formation. </p>
     */
    updateResource(args: UpdateResourceCommandInput, options?: __HttpHandlerOptions): Promise<UpdateResourceCommandOutput>;
    updateResource(args: UpdateResourceCommandInput, cb: (err: any, data?: UpdateResourceCommandOutput) => void): void;
    updateResource(args: UpdateResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateResourceCommandOutput) => void): void;
}
