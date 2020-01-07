import { LicenseManagerClient } from "./LicenseManagerClient";
import { CreateLicenseConfigurationCommandInput, CreateLicenseConfigurationCommandOutput } from "./commands/CreateLicenseConfigurationCommand";
import { DeleteLicenseConfigurationCommandInput, DeleteLicenseConfigurationCommandOutput } from "./commands/DeleteLicenseConfigurationCommand";
import { GetLicenseConfigurationCommandInput, GetLicenseConfigurationCommandOutput } from "./commands/GetLicenseConfigurationCommand";
import { GetServiceSettingsCommandInput, GetServiceSettingsCommandOutput } from "./commands/GetServiceSettingsCommand";
import { ListAssociationsForLicenseConfigurationCommandInput, ListAssociationsForLicenseConfigurationCommandOutput } from "./commands/ListAssociationsForLicenseConfigurationCommand";
import { ListFailuresForLicenseConfigurationOperationsCommandInput, ListFailuresForLicenseConfigurationOperationsCommandOutput } from "./commands/ListFailuresForLicenseConfigurationOperationsCommand";
import { ListLicenseConfigurationsCommandInput, ListLicenseConfigurationsCommandOutput } from "./commands/ListLicenseConfigurationsCommand";
import { ListLicenseSpecificationsForResourceCommandInput, ListLicenseSpecificationsForResourceCommandOutput } from "./commands/ListLicenseSpecificationsForResourceCommand";
import { ListResourceInventoryCommandInput, ListResourceInventoryCommandOutput } from "./commands/ListResourceInventoryCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { ListUsageForLicenseConfigurationCommandInput, ListUsageForLicenseConfigurationCommandOutput } from "./commands/ListUsageForLicenseConfigurationCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateLicenseConfigurationCommandInput, UpdateLicenseConfigurationCommandOutput } from "./commands/UpdateLicenseConfigurationCommand";
import { UpdateLicenseSpecificationsForResourceCommandInput, UpdateLicenseSpecificationsForResourceCommandOutput } from "./commands/UpdateLicenseSpecificationsForResourceCommand";
import { UpdateServiceSettingsCommandInput, UpdateServiceSettingsCommandOutput } from "./commands/UpdateServiceSettingsCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname> AWS License Manager </fullname>
 *          <p>AWS License Manager makes it easier to manage licenses from software vendors across multiple
 *          AWS accounts and on-premises servers.</p>
 */
export declare class LicenseManager extends LicenseManagerClient {
    /**
     * <p>Creates a license configuration.</p>
     *          <p>A license configuration is an abstraction of a customer license agreement that can be
     *          consumed and enforced by License Manager. Components include specifications for the license
     *          type (licensing by instance, socket, CPU, or vCPU), allowed tenancy (shared tenancy,
     *          Dedicated Instance, Dedicated Host, or all of these), host affinity (how long a VM
     *          must be associated with a host), and the number of licenses purchased and used.</p>
     */
    createLicenseConfiguration(args: CreateLicenseConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<CreateLicenseConfigurationCommandOutput>;
    createLicenseConfiguration(args: CreateLicenseConfigurationCommandInput, cb: (err: any, data?: CreateLicenseConfigurationCommandOutput) => void): void;
    createLicenseConfiguration(args: CreateLicenseConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateLicenseConfigurationCommandOutput) => void): void;
    /**
     * <p>Deletes the specified license configuration.</p>
     *          <p>You cannot delete a license configuration that is in use.</p>
     */
    deleteLicenseConfiguration(args: DeleteLicenseConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<DeleteLicenseConfigurationCommandOutput>;
    deleteLicenseConfiguration(args: DeleteLicenseConfigurationCommandInput, cb: (err: any, data?: DeleteLicenseConfigurationCommandOutput) => void): void;
    deleteLicenseConfiguration(args: DeleteLicenseConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteLicenseConfigurationCommandOutput) => void): void;
    /**
     * <p>Gets detailed information about the specified license configuration.</p>
     */
    getLicenseConfiguration(args: GetLicenseConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<GetLicenseConfigurationCommandOutput>;
    getLicenseConfiguration(args: GetLicenseConfigurationCommandInput, cb: (err: any, data?: GetLicenseConfigurationCommandOutput) => void): void;
    getLicenseConfiguration(args: GetLicenseConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetLicenseConfigurationCommandOutput) => void): void;
    /**
     * <p>Gets the License Manager settings for the current Region.</p>
     */
    getServiceSettings(args: GetServiceSettingsCommandInput, options?: __HttpHandlerOptions): Promise<GetServiceSettingsCommandOutput>;
    getServiceSettings(args: GetServiceSettingsCommandInput, cb: (err: any, data?: GetServiceSettingsCommandOutput) => void): void;
    getServiceSettings(args: GetServiceSettingsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetServiceSettingsCommandOutput) => void): void;
    /**
     * <p>Lists the resource associations for the specified license configuration.</p>
     *          <p>Resource associations need not consume licenses from a license configuration.
     *          For example, an AMI or a stopped instance might not consume a license (depending on
     *          the license rules).</p>
     */
    listAssociationsForLicenseConfiguration(args: ListAssociationsForLicenseConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<ListAssociationsForLicenseConfigurationCommandOutput>;
    listAssociationsForLicenseConfiguration(args: ListAssociationsForLicenseConfigurationCommandInput, cb: (err: any, data?: ListAssociationsForLicenseConfigurationCommandOutput) => void): void;
    listAssociationsForLicenseConfiguration(args: ListAssociationsForLicenseConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAssociationsForLicenseConfigurationCommandOutput) => void): void;
    /**
     * <p>Lists the license configuration operations that failed.</p>
     */
    listFailuresForLicenseConfigurationOperations(args: ListFailuresForLicenseConfigurationOperationsCommandInput, options?: __HttpHandlerOptions): Promise<ListFailuresForLicenseConfigurationOperationsCommandOutput>;
    listFailuresForLicenseConfigurationOperations(args: ListFailuresForLicenseConfigurationOperationsCommandInput, cb: (err: any, data?: ListFailuresForLicenseConfigurationOperationsCommandOutput) => void): void;
    listFailuresForLicenseConfigurationOperations(args: ListFailuresForLicenseConfigurationOperationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListFailuresForLicenseConfigurationOperationsCommandOutput) => void): void;
    /**
     * <p>Lists the license configurations for your account.</p>
     */
    listLicenseConfigurations(args: ListLicenseConfigurationsCommandInput, options?: __HttpHandlerOptions): Promise<ListLicenseConfigurationsCommandOutput>;
    listLicenseConfigurations(args: ListLicenseConfigurationsCommandInput, cb: (err: any, data?: ListLicenseConfigurationsCommandOutput) => void): void;
    listLicenseConfigurations(args: ListLicenseConfigurationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListLicenseConfigurationsCommandOutput) => void): void;
    /**
     * <p>Describes the license configurations for the specified resource.</p>
     */
    listLicenseSpecificationsForResource(args: ListLicenseSpecificationsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListLicenseSpecificationsForResourceCommandOutput>;
    listLicenseSpecificationsForResource(args: ListLicenseSpecificationsForResourceCommandInput, cb: (err: any, data?: ListLicenseSpecificationsForResourceCommandOutput) => void): void;
    listLicenseSpecificationsForResource(args: ListLicenseSpecificationsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListLicenseSpecificationsForResourceCommandOutput) => void): void;
    /**
     * <p>Lists resources managed using Systems Manager inventory.</p>
     */
    listResourceInventory(args: ListResourceInventoryCommandInput, options?: __HttpHandlerOptions): Promise<ListResourceInventoryCommandOutput>;
    listResourceInventory(args: ListResourceInventoryCommandInput, cb: (err: any, data?: ListResourceInventoryCommandOutput) => void): void;
    listResourceInventory(args: ListResourceInventoryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListResourceInventoryCommandOutput) => void): void;
    /**
     * <p>Lists the tags for the specified license configuration.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Lists all license usage records for a license configuration, displaying license
     *          consumption details by resource at a selected point in time. Use this action to audit the
     *          current license consumption for any license inventory and configuration.</p>
     */
    listUsageForLicenseConfiguration(args: ListUsageForLicenseConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<ListUsageForLicenseConfigurationCommandOutput>;
    listUsageForLicenseConfiguration(args: ListUsageForLicenseConfigurationCommandInput, cb: (err: any, data?: ListUsageForLicenseConfigurationCommandOutput) => void): void;
    listUsageForLicenseConfiguration(args: ListUsageForLicenseConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListUsageForLicenseConfigurationCommandOutput) => void): void;
    /**
     * <p>Adds the specified tags to the specified license configuration.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes the specified tags from the specified license configuration.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Modifies the attributes of an existing license configuration.</p>
     *          <p>A license configuration is an abstraction of a customer license agreement that can be
     *          consumed and enforced by License Manager. Components include specifications for the license
     *          type (licensing by instance, socket, CPU, or vCPU), allowed tenancy (shared tenancy,
     *          Dedicated Instance, Dedicated Host, or all of these), host affinity (how long a VM
     *          must be associated with a host), and the number of licenses purchased and used.</p>
     */
    updateLicenseConfiguration(args: UpdateLicenseConfigurationCommandInput, options?: __HttpHandlerOptions): Promise<UpdateLicenseConfigurationCommandOutput>;
    updateLicenseConfiguration(args: UpdateLicenseConfigurationCommandInput, cb: (err: any, data?: UpdateLicenseConfigurationCommandOutput) => void): void;
    updateLicenseConfiguration(args: UpdateLicenseConfigurationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateLicenseConfigurationCommandOutput) => void): void;
    /**
     * <p>Adds or removes the specified license configurations for the specified AWS resource.</p>
     *          <p>You can update the license specifications of AMIs, instances, and hosts.
     *          You cannot update the license specifications for launch templates and AWS CloudFormation templates,
     *          as they send license configurations to the operation that creates the resource.</p>
     */
    updateLicenseSpecificationsForResource(args: UpdateLicenseSpecificationsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<UpdateLicenseSpecificationsForResourceCommandOutput>;
    updateLicenseSpecificationsForResource(args: UpdateLicenseSpecificationsForResourceCommandInput, cb: (err: any, data?: UpdateLicenseSpecificationsForResourceCommandOutput) => void): void;
    updateLicenseSpecificationsForResource(args: UpdateLicenseSpecificationsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateLicenseSpecificationsForResourceCommandOutput) => void): void;
    /**
     * <p>Updates License Manager settings for the current Region.</p>
     */
    updateServiceSettings(args: UpdateServiceSettingsCommandInput, options?: __HttpHandlerOptions): Promise<UpdateServiceSettingsCommandOutput>;
    updateServiceSettings(args: UpdateServiceSettingsCommandInput, cb: (err: any, data?: UpdateServiceSettingsCommandOutput) => void): void;
    updateServiceSettings(args: UpdateServiceSettingsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateServiceSettingsCommandOutput) => void): void;
}
