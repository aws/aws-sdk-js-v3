// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
import { WorkLinkClient } from "./WorkLinkClient";

/**
 * <p>Amazon WorkLink is a cloud-based service that provides secure access
 *             to internal websites and web apps from iOS and Android phones. In a single step, your users, such as
 *             employees, can access internal websites as efficiently as they access any other public website.
 *             They enter a URL in their web browser, or choose a link to an internal website in an email. Amazon WorkLink
 *             authenticates the user's access and securely renders authorized internal web content in a secure
 *             rendering service in the AWS cloud. Amazon WorkLink doesn't download or store any internal web content on
 *             mobile devices.</p>
 */
export class WorkLink extends WorkLinkClient {
  /**
   * @deprecated
   *
   * <p>Specifies a domain to be associated to Amazon WorkLink.</p>
   */
  public associateDomain(
    args: AssociateDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateDomainCommandOutput>;
  public associateDomain(
    args: AssociateDomainCommandInput,
    cb: (err: any, data?: AssociateDomainCommandOutput) => void
  ): void;
  public associateDomain(
    args: AssociateDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateDomainCommandOutput) => void
  ): void;
  public associateDomain(
    args: AssociateDomainCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateDomainCommandOutput) => void),
    cb?: (err: any, data?: AssociateDomainCommandOutput) => void
  ): Promise<AssociateDomainCommandOutput> | void {
    const command = new AssociateDomainCommand(args);
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
   * @deprecated
   *
   * <p>Associates a website authorization provider with a specified fleet. This is used to authorize users against associated websites in the company network.</p>
   */
  public associateWebsiteAuthorizationProvider(
    args: AssociateWebsiteAuthorizationProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateWebsiteAuthorizationProviderCommandOutput>;
  public associateWebsiteAuthorizationProvider(
    args: AssociateWebsiteAuthorizationProviderCommandInput,
    cb: (err: any, data?: AssociateWebsiteAuthorizationProviderCommandOutput) => void
  ): void;
  public associateWebsiteAuthorizationProvider(
    args: AssociateWebsiteAuthorizationProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateWebsiteAuthorizationProviderCommandOutput) => void
  ): void;
  public associateWebsiteAuthorizationProvider(
    args: AssociateWebsiteAuthorizationProviderCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: AssociateWebsiteAuthorizationProviderCommandOutput) => void),
    cb?: (err: any, data?: AssociateWebsiteAuthorizationProviderCommandOutput) => void
  ): Promise<AssociateWebsiteAuthorizationProviderCommandOutput> | void {
    const command = new AssociateWebsiteAuthorizationProviderCommand(args);
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
   * @deprecated
   *
   * <p>Imports the root certificate of a certificate authority (CA) used to obtain TLS
   *             certificates used by associated websites within the company network.</p>
   */
  public associateWebsiteCertificateAuthority(
    args: AssociateWebsiteCertificateAuthorityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateWebsiteCertificateAuthorityCommandOutput>;
  public associateWebsiteCertificateAuthority(
    args: AssociateWebsiteCertificateAuthorityCommandInput,
    cb: (err: any, data?: AssociateWebsiteCertificateAuthorityCommandOutput) => void
  ): void;
  public associateWebsiteCertificateAuthority(
    args: AssociateWebsiteCertificateAuthorityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateWebsiteCertificateAuthorityCommandOutput) => void
  ): void;
  public associateWebsiteCertificateAuthority(
    args: AssociateWebsiteCertificateAuthorityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateWebsiteCertificateAuthorityCommandOutput) => void),
    cb?: (err: any, data?: AssociateWebsiteCertificateAuthorityCommandOutput) => void
  ): Promise<AssociateWebsiteCertificateAuthorityCommandOutput> | void {
    const command = new AssociateWebsiteCertificateAuthorityCommand(args);
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
   * @deprecated
   *
   * <p>Creates a fleet. A fleet consists of resources and the configuration that delivers
   *             associated websites to authorized users who download and set up the Amazon WorkLink app.</p>
   */
  public createFleet(args: CreateFleetCommandInput, options?: __HttpHandlerOptions): Promise<CreateFleetCommandOutput>;
  public createFleet(args: CreateFleetCommandInput, cb: (err: any, data?: CreateFleetCommandOutput) => void): void;
  public createFleet(
    args: CreateFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFleetCommandOutput) => void
  ): void;
  public createFleet(
    args: CreateFleetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateFleetCommandOutput) => void),
    cb?: (err: any, data?: CreateFleetCommandOutput) => void
  ): Promise<CreateFleetCommandOutput> | void {
    const command = new CreateFleetCommand(args);
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
   * @deprecated
   *
   * <p>Deletes a fleet. Prevents users from accessing previously associated websites. </p>
   */
  public deleteFleet(args: DeleteFleetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFleetCommandOutput>;
  public deleteFleet(args: DeleteFleetCommandInput, cb: (err: any, data?: DeleteFleetCommandOutput) => void): void;
  public deleteFleet(
    args: DeleteFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFleetCommandOutput) => void
  ): void;
  public deleteFleet(
    args: DeleteFleetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteFleetCommandOutput) => void),
    cb?: (err: any, data?: DeleteFleetCommandOutput) => void
  ): Promise<DeleteFleetCommandOutput> | void {
    const command = new DeleteFleetCommand(args);
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
   * @deprecated
   *
   * <p>Describes the configuration for delivering audit streams to the customer account.</p>
   */
  public describeAuditStreamConfiguration(
    args: DescribeAuditStreamConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAuditStreamConfigurationCommandOutput>;
  public describeAuditStreamConfiguration(
    args: DescribeAuditStreamConfigurationCommandInput,
    cb: (err: any, data?: DescribeAuditStreamConfigurationCommandOutput) => void
  ): void;
  public describeAuditStreamConfiguration(
    args: DescribeAuditStreamConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAuditStreamConfigurationCommandOutput) => void
  ): void;
  public describeAuditStreamConfiguration(
    args: DescribeAuditStreamConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAuditStreamConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DescribeAuditStreamConfigurationCommandOutput) => void
  ): Promise<DescribeAuditStreamConfigurationCommandOutput> | void {
    const command = new DescribeAuditStreamConfigurationCommand(args);
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
   * @deprecated
   *
   * <p>Describes the networking configuration to access the internal websites associated with
   *             the specified fleet.</p>
   */
  public describeCompanyNetworkConfiguration(
    args: DescribeCompanyNetworkConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCompanyNetworkConfigurationCommandOutput>;
  public describeCompanyNetworkConfiguration(
    args: DescribeCompanyNetworkConfigurationCommandInput,
    cb: (err: any, data?: DescribeCompanyNetworkConfigurationCommandOutput) => void
  ): void;
  public describeCompanyNetworkConfiguration(
    args: DescribeCompanyNetworkConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCompanyNetworkConfigurationCommandOutput) => void
  ): void;
  public describeCompanyNetworkConfiguration(
    args: DescribeCompanyNetworkConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeCompanyNetworkConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DescribeCompanyNetworkConfigurationCommandOutput) => void
  ): Promise<DescribeCompanyNetworkConfigurationCommandOutput> | void {
    const command = new DescribeCompanyNetworkConfigurationCommand(args);
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
   * @deprecated
   *
   * <p>Provides information about a user's device.</p>
   */
  public describeDevice(
    args: DescribeDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDeviceCommandOutput>;
  public describeDevice(
    args: DescribeDeviceCommandInput,
    cb: (err: any, data?: DescribeDeviceCommandOutput) => void
  ): void;
  public describeDevice(
    args: DescribeDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDeviceCommandOutput) => void
  ): void;
  public describeDevice(
    args: DescribeDeviceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDeviceCommandOutput) => void),
    cb?: (err: any, data?: DescribeDeviceCommandOutput) => void
  ): Promise<DescribeDeviceCommandOutput> | void {
    const command = new DescribeDeviceCommand(args);
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
   * @deprecated
   *
   * <p>Describes the device policy configuration for the specified fleet.</p>
   */
  public describeDevicePolicyConfiguration(
    args: DescribeDevicePolicyConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDevicePolicyConfigurationCommandOutput>;
  public describeDevicePolicyConfiguration(
    args: DescribeDevicePolicyConfigurationCommandInput,
    cb: (err: any, data?: DescribeDevicePolicyConfigurationCommandOutput) => void
  ): void;
  public describeDevicePolicyConfiguration(
    args: DescribeDevicePolicyConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDevicePolicyConfigurationCommandOutput) => void
  ): void;
  public describeDevicePolicyConfiguration(
    args: DescribeDevicePolicyConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDevicePolicyConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DescribeDevicePolicyConfigurationCommandOutput) => void
  ): Promise<DescribeDevicePolicyConfigurationCommandOutput> | void {
    const command = new DescribeDevicePolicyConfigurationCommand(args);
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
   * @deprecated
   *
   * <p>Provides information about the domain.</p>
   */
  public describeDomain(
    args: DescribeDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDomainCommandOutput>;
  public describeDomain(
    args: DescribeDomainCommandInput,
    cb: (err: any, data?: DescribeDomainCommandOutput) => void
  ): void;
  public describeDomain(
    args: DescribeDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDomainCommandOutput) => void
  ): void;
  public describeDomain(
    args: DescribeDomainCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDomainCommandOutput) => void),
    cb?: (err: any, data?: DescribeDomainCommandOutput) => void
  ): Promise<DescribeDomainCommandOutput> | void {
    const command = new DescribeDomainCommand(args);
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
   * @deprecated
   *
   * <p>Provides basic information for the specified fleet, excluding identity provider,
   *             networking, and device configuration details.</p>
   */
  public describeFleetMetadata(
    args: DescribeFleetMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFleetMetadataCommandOutput>;
  public describeFleetMetadata(
    args: DescribeFleetMetadataCommandInput,
    cb: (err: any, data?: DescribeFleetMetadataCommandOutput) => void
  ): void;
  public describeFleetMetadata(
    args: DescribeFleetMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFleetMetadataCommandOutput) => void
  ): void;
  public describeFleetMetadata(
    args: DescribeFleetMetadataCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeFleetMetadataCommandOutput) => void),
    cb?: (err: any, data?: DescribeFleetMetadataCommandOutput) => void
  ): Promise<DescribeFleetMetadataCommandOutput> | void {
    const command = new DescribeFleetMetadataCommand(args);
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
   * @deprecated
   *
   * <p>Describes the identity provider configuration of the specified fleet.</p>
   */
  public describeIdentityProviderConfiguration(
    args: DescribeIdentityProviderConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeIdentityProviderConfigurationCommandOutput>;
  public describeIdentityProviderConfiguration(
    args: DescribeIdentityProviderConfigurationCommandInput,
    cb: (err: any, data?: DescribeIdentityProviderConfigurationCommandOutput) => void
  ): void;
  public describeIdentityProviderConfiguration(
    args: DescribeIdentityProviderConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeIdentityProviderConfigurationCommandOutput) => void
  ): void;
  public describeIdentityProviderConfiguration(
    args: DescribeIdentityProviderConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeIdentityProviderConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DescribeIdentityProviderConfigurationCommandOutput) => void
  ): Promise<DescribeIdentityProviderConfigurationCommandOutput> | void {
    const command = new DescribeIdentityProviderConfigurationCommand(args);
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
   * @deprecated
   *
   * <p>Provides information about the certificate authority.</p>
   */
  public describeWebsiteCertificateAuthority(
    args: DescribeWebsiteCertificateAuthorityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWebsiteCertificateAuthorityCommandOutput>;
  public describeWebsiteCertificateAuthority(
    args: DescribeWebsiteCertificateAuthorityCommandInput,
    cb: (err: any, data?: DescribeWebsiteCertificateAuthorityCommandOutput) => void
  ): void;
  public describeWebsiteCertificateAuthority(
    args: DescribeWebsiteCertificateAuthorityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWebsiteCertificateAuthorityCommandOutput) => void
  ): void;
  public describeWebsiteCertificateAuthority(
    args: DescribeWebsiteCertificateAuthorityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeWebsiteCertificateAuthorityCommandOutput) => void),
    cb?: (err: any, data?: DescribeWebsiteCertificateAuthorityCommandOutput) => void
  ): Promise<DescribeWebsiteCertificateAuthorityCommandOutput> | void {
    const command = new DescribeWebsiteCertificateAuthorityCommand(args);
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
   * @deprecated
   *
   * <p>Disassociates a domain from Amazon WorkLink. End users lose the ability to access the domain with Amazon WorkLink. </p>
   */
  public disassociateDomain(
    args: DisassociateDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateDomainCommandOutput>;
  public disassociateDomain(
    args: DisassociateDomainCommandInput,
    cb: (err: any, data?: DisassociateDomainCommandOutput) => void
  ): void;
  public disassociateDomain(
    args: DisassociateDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateDomainCommandOutput) => void
  ): void;
  public disassociateDomain(
    args: DisassociateDomainCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateDomainCommandOutput) => void),
    cb?: (err: any, data?: DisassociateDomainCommandOutput) => void
  ): Promise<DisassociateDomainCommandOutput> | void {
    const command = new DisassociateDomainCommand(args);
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
   * @deprecated
   *
   * <p>Disassociates a website authorization provider from a specified fleet. After the
   *             disassociation, users can't load any associated websites that require this authorization
   *             provider.</p>
   */
  public disassociateWebsiteAuthorizationProvider(
    args: DisassociateWebsiteAuthorizationProviderCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateWebsiteAuthorizationProviderCommandOutput>;
  public disassociateWebsiteAuthorizationProvider(
    args: DisassociateWebsiteAuthorizationProviderCommandInput,
    cb: (err: any, data?: DisassociateWebsiteAuthorizationProviderCommandOutput) => void
  ): void;
  public disassociateWebsiteAuthorizationProvider(
    args: DisassociateWebsiteAuthorizationProviderCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateWebsiteAuthorizationProviderCommandOutput) => void
  ): void;
  public disassociateWebsiteAuthorizationProvider(
    args: DisassociateWebsiteAuthorizationProviderCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DisassociateWebsiteAuthorizationProviderCommandOutput) => void),
    cb?: (err: any, data?: DisassociateWebsiteAuthorizationProviderCommandOutput) => void
  ): Promise<DisassociateWebsiteAuthorizationProviderCommandOutput> | void {
    const command = new DisassociateWebsiteAuthorizationProviderCommand(args);
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
   * @deprecated
   *
   * <p>Removes a certificate authority (CA).</p>
   */
  public disassociateWebsiteCertificateAuthority(
    args: DisassociateWebsiteCertificateAuthorityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateWebsiteCertificateAuthorityCommandOutput>;
  public disassociateWebsiteCertificateAuthority(
    args: DisassociateWebsiteCertificateAuthorityCommandInput,
    cb: (err: any, data?: DisassociateWebsiteCertificateAuthorityCommandOutput) => void
  ): void;
  public disassociateWebsiteCertificateAuthority(
    args: DisassociateWebsiteCertificateAuthorityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateWebsiteCertificateAuthorityCommandOutput) => void
  ): void;
  public disassociateWebsiteCertificateAuthority(
    args: DisassociateWebsiteCertificateAuthorityCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DisassociateWebsiteCertificateAuthorityCommandOutput) => void),
    cb?: (err: any, data?: DisassociateWebsiteCertificateAuthorityCommandOutput) => void
  ): Promise<DisassociateWebsiteCertificateAuthorityCommandOutput> | void {
    const command = new DisassociateWebsiteCertificateAuthorityCommand(args);
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
   * @deprecated
   *
   * <p>Retrieves a list of devices registered with the specified fleet.</p>
   */
  public listDevices(args: ListDevicesCommandInput, options?: __HttpHandlerOptions): Promise<ListDevicesCommandOutput>;
  public listDevices(args: ListDevicesCommandInput, cb: (err: any, data?: ListDevicesCommandOutput) => void): void;
  public listDevices(
    args: ListDevicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDevicesCommandOutput) => void
  ): void;
  public listDevices(
    args: ListDevicesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDevicesCommandOutput) => void),
    cb?: (err: any, data?: ListDevicesCommandOutput) => void
  ): Promise<ListDevicesCommandOutput> | void {
    const command = new ListDevicesCommand(args);
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
   * @deprecated
   *
   * <p>Retrieves a list of domains associated to a specified fleet.</p>
   */
  public listDomains(args: ListDomainsCommandInput, options?: __HttpHandlerOptions): Promise<ListDomainsCommandOutput>;
  public listDomains(args: ListDomainsCommandInput, cb: (err: any, data?: ListDomainsCommandOutput) => void): void;
  public listDomains(
    args: ListDomainsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDomainsCommandOutput) => void
  ): void;
  public listDomains(
    args: ListDomainsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDomainsCommandOutput) => void),
    cb?: (err: any, data?: ListDomainsCommandOutput) => void
  ): Promise<ListDomainsCommandOutput> | void {
    const command = new ListDomainsCommand(args);
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
   * @deprecated
   *
   * <p>Retrieves a list of fleets for the current account and Region.</p>
   */
  public listFleets(args: ListFleetsCommandInput, options?: __HttpHandlerOptions): Promise<ListFleetsCommandOutput>;
  public listFleets(args: ListFleetsCommandInput, cb: (err: any, data?: ListFleetsCommandOutput) => void): void;
  public listFleets(
    args: ListFleetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFleetsCommandOutput) => void
  ): void;
  public listFleets(
    args: ListFleetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListFleetsCommandOutput) => void),
    cb?: (err: any, data?: ListFleetsCommandOutput) => void
  ): Promise<ListFleetsCommandOutput> | void {
    const command = new ListFleetsCommand(args);
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
   * @deprecated
   *
   * <p>Retrieves a list of tags for the specified resource.</p>
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
   * @deprecated
   *
   * <p>Retrieves a list of website authorization providers associated with a specified fleet.</p>
   */
  public listWebsiteAuthorizationProviders(
    args: ListWebsiteAuthorizationProvidersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWebsiteAuthorizationProvidersCommandOutput>;
  public listWebsiteAuthorizationProviders(
    args: ListWebsiteAuthorizationProvidersCommandInput,
    cb: (err: any, data?: ListWebsiteAuthorizationProvidersCommandOutput) => void
  ): void;
  public listWebsiteAuthorizationProviders(
    args: ListWebsiteAuthorizationProvidersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWebsiteAuthorizationProvidersCommandOutput) => void
  ): void;
  public listWebsiteAuthorizationProviders(
    args: ListWebsiteAuthorizationProvidersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListWebsiteAuthorizationProvidersCommandOutput) => void),
    cb?: (err: any, data?: ListWebsiteAuthorizationProvidersCommandOutput) => void
  ): Promise<ListWebsiteAuthorizationProvidersCommandOutput> | void {
    const command = new ListWebsiteAuthorizationProvidersCommand(args);
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
   * @deprecated
   *
   * <p>Retrieves a list of certificate authorities added for the current account and
   *             Region.</p>
   */
  public listWebsiteCertificateAuthorities(
    args: ListWebsiteCertificateAuthoritiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWebsiteCertificateAuthoritiesCommandOutput>;
  public listWebsiteCertificateAuthorities(
    args: ListWebsiteCertificateAuthoritiesCommandInput,
    cb: (err: any, data?: ListWebsiteCertificateAuthoritiesCommandOutput) => void
  ): void;
  public listWebsiteCertificateAuthorities(
    args: ListWebsiteCertificateAuthoritiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWebsiteCertificateAuthoritiesCommandOutput) => void
  ): void;
  public listWebsiteCertificateAuthorities(
    args: ListWebsiteCertificateAuthoritiesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListWebsiteCertificateAuthoritiesCommandOutput) => void),
    cb?: (err: any, data?: ListWebsiteCertificateAuthoritiesCommandOutput) => void
  ): Promise<ListWebsiteCertificateAuthoritiesCommandOutput> | void {
    const command = new ListWebsiteCertificateAuthoritiesCommand(args);
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
   * @deprecated
   *
   * <p>Moves a domain to ACTIVE status if it was in the INACTIVE status.</p>
   */
  public restoreDomainAccess(
    args: RestoreDomainAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreDomainAccessCommandOutput>;
  public restoreDomainAccess(
    args: RestoreDomainAccessCommandInput,
    cb: (err: any, data?: RestoreDomainAccessCommandOutput) => void
  ): void;
  public restoreDomainAccess(
    args: RestoreDomainAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreDomainAccessCommandOutput) => void
  ): void;
  public restoreDomainAccess(
    args: RestoreDomainAccessCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RestoreDomainAccessCommandOutput) => void),
    cb?: (err: any, data?: RestoreDomainAccessCommandOutput) => void
  ): Promise<RestoreDomainAccessCommandOutput> | void {
    const command = new RestoreDomainAccessCommand(args);
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
   * @deprecated
   *
   * <p>Moves a domain to INACTIVE status if it was in the ACTIVE status.</p>
   */
  public revokeDomainAccess(
    args: RevokeDomainAccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RevokeDomainAccessCommandOutput>;
  public revokeDomainAccess(
    args: RevokeDomainAccessCommandInput,
    cb: (err: any, data?: RevokeDomainAccessCommandOutput) => void
  ): void;
  public revokeDomainAccess(
    args: RevokeDomainAccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RevokeDomainAccessCommandOutput) => void
  ): void;
  public revokeDomainAccess(
    args: RevokeDomainAccessCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RevokeDomainAccessCommandOutput) => void),
    cb?: (err: any, data?: RevokeDomainAccessCommandOutput) => void
  ): Promise<RevokeDomainAccessCommandOutput> | void {
    const command = new RevokeDomainAccessCommand(args);
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
   * @deprecated
   *
   * <p>Signs the user out from all of their devices. The user can sign in again if they have
   *             valid credentials.</p>
   */
  public signOutUser(args: SignOutUserCommandInput, options?: __HttpHandlerOptions): Promise<SignOutUserCommandOutput>;
  public signOutUser(args: SignOutUserCommandInput, cb: (err: any, data?: SignOutUserCommandOutput) => void): void;
  public signOutUser(
    args: SignOutUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SignOutUserCommandOutput) => void
  ): void;
  public signOutUser(
    args: SignOutUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SignOutUserCommandOutput) => void),
    cb?: (err: any, data?: SignOutUserCommandOutput) => void
  ): Promise<SignOutUserCommandOutput> | void {
    const command = new SignOutUserCommand(args);
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
   * @deprecated
   *
   * <p>Adds or overwrites one or more tags for the specified resource, such as a fleet. Each tag consists of a key and an optional value. If a resource already has a tag with the same key, this operation updates its value.</p>
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
   * @deprecated
   *
   * <p>Removes one or more tags from the specified resource.</p>
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

  /**
   * @deprecated
   *
   * <p>Updates the audit stream configuration for the fleet.</p>
   */
  public updateAuditStreamConfiguration(
    args: UpdateAuditStreamConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAuditStreamConfigurationCommandOutput>;
  public updateAuditStreamConfiguration(
    args: UpdateAuditStreamConfigurationCommandInput,
    cb: (err: any, data?: UpdateAuditStreamConfigurationCommandOutput) => void
  ): void;
  public updateAuditStreamConfiguration(
    args: UpdateAuditStreamConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAuditStreamConfigurationCommandOutput) => void
  ): void;
  public updateAuditStreamConfiguration(
    args: UpdateAuditStreamConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAuditStreamConfigurationCommandOutput) => void),
    cb?: (err: any, data?: UpdateAuditStreamConfigurationCommandOutput) => void
  ): Promise<UpdateAuditStreamConfigurationCommandOutput> | void {
    const command = new UpdateAuditStreamConfigurationCommand(args);
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
   * @deprecated
   *
   * <p>Updates the company network configuration for the fleet.</p>
   */
  public updateCompanyNetworkConfiguration(
    args: UpdateCompanyNetworkConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCompanyNetworkConfigurationCommandOutput>;
  public updateCompanyNetworkConfiguration(
    args: UpdateCompanyNetworkConfigurationCommandInput,
    cb: (err: any, data?: UpdateCompanyNetworkConfigurationCommandOutput) => void
  ): void;
  public updateCompanyNetworkConfiguration(
    args: UpdateCompanyNetworkConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCompanyNetworkConfigurationCommandOutput) => void
  ): void;
  public updateCompanyNetworkConfiguration(
    args: UpdateCompanyNetworkConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateCompanyNetworkConfigurationCommandOutput) => void),
    cb?: (err: any, data?: UpdateCompanyNetworkConfigurationCommandOutput) => void
  ): Promise<UpdateCompanyNetworkConfigurationCommandOutput> | void {
    const command = new UpdateCompanyNetworkConfigurationCommand(args);
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
   * @deprecated
   *
   * <p>Updates the device policy configuration for the fleet.</p>
   */
  public updateDevicePolicyConfiguration(
    args: UpdateDevicePolicyConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDevicePolicyConfigurationCommandOutput>;
  public updateDevicePolicyConfiguration(
    args: UpdateDevicePolicyConfigurationCommandInput,
    cb: (err: any, data?: UpdateDevicePolicyConfigurationCommandOutput) => void
  ): void;
  public updateDevicePolicyConfiguration(
    args: UpdateDevicePolicyConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDevicePolicyConfigurationCommandOutput) => void
  ): void;
  public updateDevicePolicyConfiguration(
    args: UpdateDevicePolicyConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDevicePolicyConfigurationCommandOutput) => void),
    cb?: (err: any, data?: UpdateDevicePolicyConfigurationCommandOutput) => void
  ): Promise<UpdateDevicePolicyConfigurationCommandOutput> | void {
    const command = new UpdateDevicePolicyConfigurationCommand(args);
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
   * @deprecated
   *
   * <p>Updates domain metadata, such as DisplayName.</p>
   */
  public updateDomainMetadata(
    args: UpdateDomainMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDomainMetadataCommandOutput>;
  public updateDomainMetadata(
    args: UpdateDomainMetadataCommandInput,
    cb: (err: any, data?: UpdateDomainMetadataCommandOutput) => void
  ): void;
  public updateDomainMetadata(
    args: UpdateDomainMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDomainMetadataCommandOutput) => void
  ): void;
  public updateDomainMetadata(
    args: UpdateDomainMetadataCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDomainMetadataCommandOutput) => void),
    cb?: (err: any, data?: UpdateDomainMetadataCommandOutput) => void
  ): Promise<UpdateDomainMetadataCommandOutput> | void {
    const command = new UpdateDomainMetadataCommand(args);
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
   * @deprecated
   *
   * <p>Updates fleet metadata, such as DisplayName.</p>
   */
  public updateFleetMetadata(
    args: UpdateFleetMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFleetMetadataCommandOutput>;
  public updateFleetMetadata(
    args: UpdateFleetMetadataCommandInput,
    cb: (err: any, data?: UpdateFleetMetadataCommandOutput) => void
  ): void;
  public updateFleetMetadata(
    args: UpdateFleetMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFleetMetadataCommandOutput) => void
  ): void;
  public updateFleetMetadata(
    args: UpdateFleetMetadataCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateFleetMetadataCommandOutput) => void),
    cb?: (err: any, data?: UpdateFleetMetadataCommandOutput) => void
  ): Promise<UpdateFleetMetadataCommandOutput> | void {
    const command = new UpdateFleetMetadataCommand(args);
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
   * @deprecated
   *
   * <p>Updates the identity provider configuration for the fleet.</p>
   */
  public updateIdentityProviderConfiguration(
    args: UpdateIdentityProviderConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateIdentityProviderConfigurationCommandOutput>;
  public updateIdentityProviderConfiguration(
    args: UpdateIdentityProviderConfigurationCommandInput,
    cb: (err: any, data?: UpdateIdentityProviderConfigurationCommandOutput) => void
  ): void;
  public updateIdentityProviderConfiguration(
    args: UpdateIdentityProviderConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateIdentityProviderConfigurationCommandOutput) => void
  ): void;
  public updateIdentityProviderConfiguration(
    args: UpdateIdentityProviderConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateIdentityProviderConfigurationCommandOutput) => void),
    cb?: (err: any, data?: UpdateIdentityProviderConfigurationCommandOutput) => void
  ): Promise<UpdateIdentityProviderConfigurationCommandOutput> | void {
    const command = new UpdateIdentityProviderConfigurationCommand(args);
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
