// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AssociateDomainCommand,
  AssociateDomainCommandInput,
  AssociateDomainCommandOutput,
} from "./commands/AssociateDomainCommand";
import {
  AssociateWebsiteAuthorizationProviderCommand,
  AssociateWebsiteAuthorizationProviderCommandInput,
  AssociateWebsiteAuthorizationProviderCommandOutput,
} from "./commands/AssociateWebsiteAuthorizationProviderCommand";
import {
  AssociateWebsiteCertificateAuthorityCommand,
  AssociateWebsiteCertificateAuthorityCommandInput,
  AssociateWebsiteCertificateAuthorityCommandOutput,
} from "./commands/AssociateWebsiteCertificateAuthorityCommand";
import { CreateFleetCommand, CreateFleetCommandInput, CreateFleetCommandOutput } from "./commands/CreateFleetCommand";
import { DeleteFleetCommand, DeleteFleetCommandInput, DeleteFleetCommandOutput } from "./commands/DeleteFleetCommand";
import {
  DescribeAuditStreamConfigurationCommand,
  DescribeAuditStreamConfigurationCommandInput,
  DescribeAuditStreamConfigurationCommandOutput,
} from "./commands/DescribeAuditStreamConfigurationCommand";
import {
  DescribeCompanyNetworkConfigurationCommand,
  DescribeCompanyNetworkConfigurationCommandInput,
  DescribeCompanyNetworkConfigurationCommandOutput,
} from "./commands/DescribeCompanyNetworkConfigurationCommand";
import {
  DescribeDeviceCommand,
  DescribeDeviceCommandInput,
  DescribeDeviceCommandOutput,
} from "./commands/DescribeDeviceCommand";
import {
  DescribeDevicePolicyConfigurationCommand,
  DescribeDevicePolicyConfigurationCommandInput,
  DescribeDevicePolicyConfigurationCommandOutput,
} from "./commands/DescribeDevicePolicyConfigurationCommand";
import {
  DescribeDomainCommand,
  DescribeDomainCommandInput,
  DescribeDomainCommandOutput,
} from "./commands/DescribeDomainCommand";
import {
  DescribeFleetMetadataCommand,
  DescribeFleetMetadataCommandInput,
  DescribeFleetMetadataCommandOutput,
} from "./commands/DescribeFleetMetadataCommand";
import {
  DescribeIdentityProviderConfigurationCommand,
  DescribeIdentityProviderConfigurationCommandInput,
  DescribeIdentityProviderConfigurationCommandOutput,
} from "./commands/DescribeIdentityProviderConfigurationCommand";
import {
  DescribeWebsiteCertificateAuthorityCommand,
  DescribeWebsiteCertificateAuthorityCommandInput,
  DescribeWebsiteCertificateAuthorityCommandOutput,
} from "./commands/DescribeWebsiteCertificateAuthorityCommand";
import {
  DisassociateDomainCommand,
  DisassociateDomainCommandInput,
  DisassociateDomainCommandOutput,
} from "./commands/DisassociateDomainCommand";
import {
  DisassociateWebsiteAuthorizationProviderCommand,
  DisassociateWebsiteAuthorizationProviderCommandInput,
  DisassociateWebsiteAuthorizationProviderCommandOutput,
} from "./commands/DisassociateWebsiteAuthorizationProviderCommand";
import {
  DisassociateWebsiteCertificateAuthorityCommand,
  DisassociateWebsiteCertificateAuthorityCommandInput,
  DisassociateWebsiteCertificateAuthorityCommandOutput,
} from "./commands/DisassociateWebsiteCertificateAuthorityCommand";
import { ListDevicesCommand, ListDevicesCommandInput, ListDevicesCommandOutput } from "./commands/ListDevicesCommand";
import { ListDomainsCommand, ListDomainsCommandInput, ListDomainsCommandOutput } from "./commands/ListDomainsCommand";
import { ListFleetsCommand, ListFleetsCommandInput, ListFleetsCommandOutput } from "./commands/ListFleetsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListWebsiteAuthorizationProvidersCommand,
  ListWebsiteAuthorizationProvidersCommandInput,
  ListWebsiteAuthorizationProvidersCommandOutput,
} from "./commands/ListWebsiteAuthorizationProvidersCommand";
import {
  ListWebsiteCertificateAuthoritiesCommand,
  ListWebsiteCertificateAuthoritiesCommandInput,
  ListWebsiteCertificateAuthoritiesCommandOutput,
} from "./commands/ListWebsiteCertificateAuthoritiesCommand";
import {
  RestoreDomainAccessCommand,
  RestoreDomainAccessCommandInput,
  RestoreDomainAccessCommandOutput,
} from "./commands/RestoreDomainAccessCommand";
import {
  RevokeDomainAccessCommand,
  RevokeDomainAccessCommandInput,
  RevokeDomainAccessCommandOutput,
} from "./commands/RevokeDomainAccessCommand";
import { SignOutUserCommand, SignOutUserCommandInput, SignOutUserCommandOutput } from "./commands/SignOutUserCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateAuditStreamConfigurationCommand,
  UpdateAuditStreamConfigurationCommandInput,
  UpdateAuditStreamConfigurationCommandOutput,
} from "./commands/UpdateAuditStreamConfigurationCommand";
import {
  UpdateCompanyNetworkConfigurationCommand,
  UpdateCompanyNetworkConfigurationCommandInput,
  UpdateCompanyNetworkConfigurationCommandOutput,
} from "./commands/UpdateCompanyNetworkConfigurationCommand";
import {
  UpdateDevicePolicyConfigurationCommand,
  UpdateDevicePolicyConfigurationCommandInput,
  UpdateDevicePolicyConfigurationCommandOutput,
} from "./commands/UpdateDevicePolicyConfigurationCommand";
import {
  UpdateDomainMetadataCommand,
  UpdateDomainMetadataCommandInput,
  UpdateDomainMetadataCommandOutput,
} from "./commands/UpdateDomainMetadataCommand";
import {
  UpdateFleetMetadataCommand,
  UpdateFleetMetadataCommandInput,
  UpdateFleetMetadataCommandOutput,
} from "./commands/UpdateFleetMetadataCommand";
import {
  UpdateIdentityProviderConfigurationCommand,
  UpdateIdentityProviderConfigurationCommandInput,
  UpdateIdentityProviderConfigurationCommandOutput,
} from "./commands/UpdateIdentityProviderConfigurationCommand";
import { WorkLinkClient, WorkLinkClientConfig } from "./WorkLinkClient";

const commands = {
  AssociateDomainCommand,
  AssociateWebsiteAuthorizationProviderCommand,
  AssociateWebsiteCertificateAuthorityCommand,
  CreateFleetCommand,
  DeleteFleetCommand,
  DescribeAuditStreamConfigurationCommand,
  DescribeCompanyNetworkConfigurationCommand,
  DescribeDeviceCommand,
  DescribeDevicePolicyConfigurationCommand,
  DescribeDomainCommand,
  DescribeFleetMetadataCommand,
  DescribeIdentityProviderConfigurationCommand,
  DescribeWebsiteCertificateAuthorityCommand,
  DisassociateDomainCommand,
  DisassociateWebsiteAuthorizationProviderCommand,
  DisassociateWebsiteCertificateAuthorityCommand,
  ListDevicesCommand,
  ListDomainsCommand,
  ListFleetsCommand,
  ListTagsForResourceCommand,
  ListWebsiteAuthorizationProvidersCommand,
  ListWebsiteCertificateAuthoritiesCommand,
  RestoreDomainAccessCommand,
  RevokeDomainAccessCommand,
  SignOutUserCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAuditStreamConfigurationCommand,
  UpdateCompanyNetworkConfigurationCommand,
  UpdateDevicePolicyConfigurationCommand,
  UpdateDomainMetadataCommand,
  UpdateFleetMetadataCommand,
  UpdateIdentityProviderConfigurationCommand,
};

export interface WorkLink {
  /**
   * @see {@link AssociateDomainCommand}
   */
  associateDomain(
    args: AssociateDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateDomainCommandOutput>;
  associateDomain(args: AssociateDomainCommandInput, cb: (err: any, data?: AssociateDomainCommandOutput) => void): void;
  associateDomain(
    args: AssociateDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateWebsiteAuthorizationProviderCommand}
   */
  associateWebsiteAuthorizationProvider(
    args: AssociateWebsiteAuthorizationProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateWebsiteAuthorizationProviderCommandOutput>;
  associateWebsiteAuthorizationProvider(
    args: AssociateWebsiteAuthorizationProviderCommandInput,
    cb: (err: any, data?: AssociateWebsiteAuthorizationProviderCommandOutput) => void
  ): void;
  associateWebsiteAuthorizationProvider(
    args: AssociateWebsiteAuthorizationProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateWebsiteAuthorizationProviderCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateWebsiteCertificateAuthorityCommand}
   */
  associateWebsiteCertificateAuthority(
    args: AssociateWebsiteCertificateAuthorityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateWebsiteCertificateAuthorityCommandOutput>;
  associateWebsiteCertificateAuthority(
    args: AssociateWebsiteCertificateAuthorityCommandInput,
    cb: (err: any, data?: AssociateWebsiteCertificateAuthorityCommandOutput) => void
  ): void;
  associateWebsiteCertificateAuthority(
    args: AssociateWebsiteCertificateAuthorityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateWebsiteCertificateAuthorityCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFleetCommand}
   */
  createFleet(args: CreateFleetCommandInput, options?: __HttpHandlerOptions): Promise<CreateFleetCommandOutput>;
  createFleet(args: CreateFleetCommandInput, cb: (err: any, data?: CreateFleetCommandOutput) => void): void;
  createFleet(
    args: CreateFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFleetCommand}
   */
  deleteFleet(args: DeleteFleetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFleetCommandOutput>;
  deleteFleet(args: DeleteFleetCommandInput, cb: (err: any, data?: DeleteFleetCommandOutput) => void): void;
  deleteFleet(
    args: DeleteFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAuditStreamConfigurationCommand}
   */
  describeAuditStreamConfiguration(
    args: DescribeAuditStreamConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAuditStreamConfigurationCommandOutput>;
  describeAuditStreamConfiguration(
    args: DescribeAuditStreamConfigurationCommandInput,
    cb: (err: any, data?: DescribeAuditStreamConfigurationCommandOutput) => void
  ): void;
  describeAuditStreamConfiguration(
    args: DescribeAuditStreamConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAuditStreamConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCompanyNetworkConfigurationCommand}
   */
  describeCompanyNetworkConfiguration(
    args: DescribeCompanyNetworkConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCompanyNetworkConfigurationCommandOutput>;
  describeCompanyNetworkConfiguration(
    args: DescribeCompanyNetworkConfigurationCommandInput,
    cb: (err: any, data?: DescribeCompanyNetworkConfigurationCommandOutput) => void
  ): void;
  describeCompanyNetworkConfiguration(
    args: DescribeCompanyNetworkConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCompanyNetworkConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDeviceCommand}
   */
  describeDevice(
    args: DescribeDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDeviceCommandOutput>;
  describeDevice(args: DescribeDeviceCommandInput, cb: (err: any, data?: DescribeDeviceCommandOutput) => void): void;
  describeDevice(
    args: DescribeDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDevicePolicyConfigurationCommand}
   */
  describeDevicePolicyConfiguration(
    args: DescribeDevicePolicyConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDevicePolicyConfigurationCommandOutput>;
  describeDevicePolicyConfiguration(
    args: DescribeDevicePolicyConfigurationCommandInput,
    cb: (err: any, data?: DescribeDevicePolicyConfigurationCommandOutput) => void
  ): void;
  describeDevicePolicyConfiguration(
    args: DescribeDevicePolicyConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDevicePolicyConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDomainCommand}
   */
  describeDomain(
    args: DescribeDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDomainCommandOutput>;
  describeDomain(args: DescribeDomainCommandInput, cb: (err: any, data?: DescribeDomainCommandOutput) => void): void;
  describeDomain(
    args: DescribeDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFleetMetadataCommand}
   */
  describeFleetMetadata(
    args: DescribeFleetMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFleetMetadataCommandOutput>;
  describeFleetMetadata(
    args: DescribeFleetMetadataCommandInput,
    cb: (err: any, data?: DescribeFleetMetadataCommandOutput) => void
  ): void;
  describeFleetMetadata(
    args: DescribeFleetMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFleetMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeIdentityProviderConfigurationCommand}
   */
  describeIdentityProviderConfiguration(
    args: DescribeIdentityProviderConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeIdentityProviderConfigurationCommandOutput>;
  describeIdentityProviderConfiguration(
    args: DescribeIdentityProviderConfigurationCommandInput,
    cb: (err: any, data?: DescribeIdentityProviderConfigurationCommandOutput) => void
  ): void;
  describeIdentityProviderConfiguration(
    args: DescribeIdentityProviderConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeIdentityProviderConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeWebsiteCertificateAuthorityCommand}
   */
  describeWebsiteCertificateAuthority(
    args: DescribeWebsiteCertificateAuthorityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWebsiteCertificateAuthorityCommandOutput>;
  describeWebsiteCertificateAuthority(
    args: DescribeWebsiteCertificateAuthorityCommandInput,
    cb: (err: any, data?: DescribeWebsiteCertificateAuthorityCommandOutput) => void
  ): void;
  describeWebsiteCertificateAuthority(
    args: DescribeWebsiteCertificateAuthorityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWebsiteCertificateAuthorityCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateDomainCommand}
   */
  disassociateDomain(
    args: DisassociateDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateDomainCommandOutput>;
  disassociateDomain(
    args: DisassociateDomainCommandInput,
    cb: (err: any, data?: DisassociateDomainCommandOutput) => void
  ): void;
  disassociateDomain(
    args: DisassociateDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateWebsiteAuthorizationProviderCommand}
   */
  disassociateWebsiteAuthorizationProvider(
    args: DisassociateWebsiteAuthorizationProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateWebsiteAuthorizationProviderCommandOutput>;
  disassociateWebsiteAuthorizationProvider(
    args: DisassociateWebsiteAuthorizationProviderCommandInput,
    cb: (err: any, data?: DisassociateWebsiteAuthorizationProviderCommandOutput) => void
  ): void;
  disassociateWebsiteAuthorizationProvider(
    args: DisassociateWebsiteAuthorizationProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateWebsiteAuthorizationProviderCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateWebsiteCertificateAuthorityCommand}
   */
  disassociateWebsiteCertificateAuthority(
    args: DisassociateWebsiteCertificateAuthorityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateWebsiteCertificateAuthorityCommandOutput>;
  disassociateWebsiteCertificateAuthority(
    args: DisassociateWebsiteCertificateAuthorityCommandInput,
    cb: (err: any, data?: DisassociateWebsiteCertificateAuthorityCommandOutput) => void
  ): void;
  disassociateWebsiteCertificateAuthority(
    args: DisassociateWebsiteCertificateAuthorityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateWebsiteCertificateAuthorityCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDevicesCommand}
   */
  listDevices(args: ListDevicesCommandInput, options?: __HttpHandlerOptions): Promise<ListDevicesCommandOutput>;
  listDevices(args: ListDevicesCommandInput, cb: (err: any, data?: ListDevicesCommandOutput) => void): void;
  listDevices(
    args: ListDevicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDevicesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDomainsCommand}
   */
  listDomains(args: ListDomainsCommandInput, options?: __HttpHandlerOptions): Promise<ListDomainsCommandOutput>;
  listDomains(args: ListDomainsCommandInput, cb: (err: any, data?: ListDomainsCommandOutput) => void): void;
  listDomains(
    args: ListDomainsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDomainsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFleetsCommand}
   */
  listFleets(args: ListFleetsCommandInput, options?: __HttpHandlerOptions): Promise<ListFleetsCommandOutput>;
  listFleets(args: ListFleetsCommandInput, cb: (err: any, data?: ListFleetsCommandOutput) => void): void;
  listFleets(
    args: ListFleetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFleetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWebsiteAuthorizationProvidersCommand}
   */
  listWebsiteAuthorizationProviders(
    args: ListWebsiteAuthorizationProvidersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWebsiteAuthorizationProvidersCommandOutput>;
  listWebsiteAuthorizationProviders(
    args: ListWebsiteAuthorizationProvidersCommandInput,
    cb: (err: any, data?: ListWebsiteAuthorizationProvidersCommandOutput) => void
  ): void;
  listWebsiteAuthorizationProviders(
    args: ListWebsiteAuthorizationProvidersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWebsiteAuthorizationProvidersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWebsiteCertificateAuthoritiesCommand}
   */
  listWebsiteCertificateAuthorities(
    args: ListWebsiteCertificateAuthoritiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWebsiteCertificateAuthoritiesCommandOutput>;
  listWebsiteCertificateAuthorities(
    args: ListWebsiteCertificateAuthoritiesCommandInput,
    cb: (err: any, data?: ListWebsiteCertificateAuthoritiesCommandOutput) => void
  ): void;
  listWebsiteCertificateAuthorities(
    args: ListWebsiteCertificateAuthoritiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWebsiteCertificateAuthoritiesCommandOutput) => void
  ): void;

  /**
   * @see {@link RestoreDomainAccessCommand}
   */
  restoreDomainAccess(
    args: RestoreDomainAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreDomainAccessCommandOutput>;
  restoreDomainAccess(
    args: RestoreDomainAccessCommandInput,
    cb: (err: any, data?: RestoreDomainAccessCommandOutput) => void
  ): void;
  restoreDomainAccess(
    args: RestoreDomainAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreDomainAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link RevokeDomainAccessCommand}
   */
  revokeDomainAccess(
    args: RevokeDomainAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RevokeDomainAccessCommandOutput>;
  revokeDomainAccess(
    args: RevokeDomainAccessCommandInput,
    cb: (err: any, data?: RevokeDomainAccessCommandOutput) => void
  ): void;
  revokeDomainAccess(
    args: RevokeDomainAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RevokeDomainAccessCommandOutput) => void
  ): void;

  /**
   * @see {@link SignOutUserCommand}
   */
  signOutUser(args: SignOutUserCommandInput, options?: __HttpHandlerOptions): Promise<SignOutUserCommandOutput>;
  signOutUser(args: SignOutUserCommandInput, cb: (err: any, data?: SignOutUserCommandOutput) => void): void;
  signOutUser(
    args: SignOutUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SignOutUserCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAuditStreamConfigurationCommand}
   */
  updateAuditStreamConfiguration(
    args: UpdateAuditStreamConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAuditStreamConfigurationCommandOutput>;
  updateAuditStreamConfiguration(
    args: UpdateAuditStreamConfigurationCommandInput,
    cb: (err: any, data?: UpdateAuditStreamConfigurationCommandOutput) => void
  ): void;
  updateAuditStreamConfiguration(
    args: UpdateAuditStreamConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAuditStreamConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCompanyNetworkConfigurationCommand}
   */
  updateCompanyNetworkConfiguration(
    args: UpdateCompanyNetworkConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCompanyNetworkConfigurationCommandOutput>;
  updateCompanyNetworkConfiguration(
    args: UpdateCompanyNetworkConfigurationCommandInput,
    cb: (err: any, data?: UpdateCompanyNetworkConfigurationCommandOutput) => void
  ): void;
  updateCompanyNetworkConfiguration(
    args: UpdateCompanyNetworkConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCompanyNetworkConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDevicePolicyConfigurationCommand}
   */
  updateDevicePolicyConfiguration(
    args: UpdateDevicePolicyConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDevicePolicyConfigurationCommandOutput>;
  updateDevicePolicyConfiguration(
    args: UpdateDevicePolicyConfigurationCommandInput,
    cb: (err: any, data?: UpdateDevicePolicyConfigurationCommandOutput) => void
  ): void;
  updateDevicePolicyConfiguration(
    args: UpdateDevicePolicyConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDevicePolicyConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDomainMetadataCommand}
   */
  updateDomainMetadata(
    args: UpdateDomainMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDomainMetadataCommandOutput>;
  updateDomainMetadata(
    args: UpdateDomainMetadataCommandInput,
    cb: (err: any, data?: UpdateDomainMetadataCommandOutput) => void
  ): void;
  updateDomainMetadata(
    args: UpdateDomainMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDomainMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFleetMetadataCommand}
   */
  updateFleetMetadata(
    args: UpdateFleetMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFleetMetadataCommandOutput>;
  updateFleetMetadata(
    args: UpdateFleetMetadataCommandInput,
    cb: (err: any, data?: UpdateFleetMetadataCommandOutput) => void
  ): void;
  updateFleetMetadata(
    args: UpdateFleetMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFleetMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateIdentityProviderConfigurationCommand}
   */
  updateIdentityProviderConfiguration(
    args: UpdateIdentityProviderConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateIdentityProviderConfigurationCommandOutput>;
  updateIdentityProviderConfiguration(
    args: UpdateIdentityProviderConfigurationCommandInput,
    cb: (err: any, data?: UpdateIdentityProviderConfigurationCommandOutput) => void
  ): void;
  updateIdentityProviderConfiguration(
    args: UpdateIdentityProviderConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateIdentityProviderConfigurationCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Amazon WorkLink is a cloud-based service that provides secure access
 *             to internal websites and web apps from iOS and Android phones. In a single step, your users, such as
 *             employees, can access internal websites as efficiently as they access any other public website.
 *             They enter a URL in their web browser, or choose a link to an internal website in an email. Amazon WorkLink
 *             authenticates the user's access and securely renders authorized internal web content in a secure
 *             rendering service in the AWS cloud. Amazon WorkLink doesn't download or store any internal web content on
 *             mobile devices.</p>
 */
export class WorkLink extends WorkLinkClient implements WorkLink {}
createAggregatedClient(commands, WorkLink);
