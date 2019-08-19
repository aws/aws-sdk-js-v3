import { WorkLinkClient } from "./WorkLinkClient";
import { AssociateDomainInput } from "./types/AssociateDomainInput";
import { AssociateDomainOutput } from "./types/AssociateDomainOutput";
import { AssociateWebsiteAuthorizationProviderInput } from "./types/AssociateWebsiteAuthorizationProviderInput";
import { AssociateWebsiteAuthorizationProviderOutput } from "./types/AssociateWebsiteAuthorizationProviderOutput";
import { AssociateWebsiteCertificateAuthorityInput } from "./types/AssociateWebsiteCertificateAuthorityInput";
import { AssociateWebsiteCertificateAuthorityOutput } from "./types/AssociateWebsiteCertificateAuthorityOutput";
import { CreateFleetInput } from "./types/CreateFleetInput";
import { CreateFleetOutput } from "./types/CreateFleetOutput";
import { DeleteFleetInput } from "./types/DeleteFleetInput";
import { DeleteFleetOutput } from "./types/DeleteFleetOutput";
import { DescribeAuditStreamConfigurationInput } from "./types/DescribeAuditStreamConfigurationInput";
import { DescribeAuditStreamConfigurationOutput } from "./types/DescribeAuditStreamConfigurationOutput";
import { DescribeCompanyNetworkConfigurationInput } from "./types/DescribeCompanyNetworkConfigurationInput";
import { DescribeCompanyNetworkConfigurationOutput } from "./types/DescribeCompanyNetworkConfigurationOutput";
import { DescribeDeviceInput } from "./types/DescribeDeviceInput";
import { DescribeDeviceOutput } from "./types/DescribeDeviceOutput";
import { DescribeDevicePolicyConfigurationInput } from "./types/DescribeDevicePolicyConfigurationInput";
import { DescribeDevicePolicyConfigurationOutput } from "./types/DescribeDevicePolicyConfigurationOutput";
import { DescribeDomainInput } from "./types/DescribeDomainInput";
import { DescribeDomainOutput } from "./types/DescribeDomainOutput";
import { DescribeFleetMetadataInput } from "./types/DescribeFleetMetadataInput";
import { DescribeFleetMetadataOutput } from "./types/DescribeFleetMetadataOutput";
import { DescribeIdentityProviderConfigurationInput } from "./types/DescribeIdentityProviderConfigurationInput";
import { DescribeIdentityProviderConfigurationOutput } from "./types/DescribeIdentityProviderConfigurationOutput";
import { DescribeWebsiteCertificateAuthorityInput } from "./types/DescribeWebsiteCertificateAuthorityInput";
import { DescribeWebsiteCertificateAuthorityOutput } from "./types/DescribeWebsiteCertificateAuthorityOutput";
import { DisassociateDomainInput } from "./types/DisassociateDomainInput";
import { DisassociateDomainOutput } from "./types/DisassociateDomainOutput";
import { DisassociateWebsiteAuthorizationProviderInput } from "./types/DisassociateWebsiteAuthorizationProviderInput";
import { DisassociateWebsiteAuthorizationProviderOutput } from "./types/DisassociateWebsiteAuthorizationProviderOutput";
import { DisassociateWebsiteCertificateAuthorityInput } from "./types/DisassociateWebsiteCertificateAuthorityInput";
import { DisassociateWebsiteCertificateAuthorityOutput } from "./types/DisassociateWebsiteCertificateAuthorityOutput";
import { InternalServerErrorException } from "./types/InternalServerErrorException";
import { InvalidRequestException } from "./types/InvalidRequestException";
import { ListDevicesInput } from "./types/ListDevicesInput";
import { ListDevicesOutput } from "./types/ListDevicesOutput";
import { ListDomainsInput } from "./types/ListDomainsInput";
import { ListDomainsOutput } from "./types/ListDomainsOutput";
import { ListFleetsInput } from "./types/ListFleetsInput";
import { ListFleetsOutput } from "./types/ListFleetsOutput";
import { ListWebsiteAuthorizationProvidersInput } from "./types/ListWebsiteAuthorizationProvidersInput";
import { ListWebsiteAuthorizationProvidersOutput } from "./types/ListWebsiteAuthorizationProvidersOutput";
import { ListWebsiteCertificateAuthoritiesInput } from "./types/ListWebsiteCertificateAuthoritiesInput";
import { ListWebsiteCertificateAuthoritiesOutput } from "./types/ListWebsiteCertificateAuthoritiesOutput";
import { ResourceAlreadyExistsException } from "./types/ResourceAlreadyExistsException";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { RestoreDomainAccessInput } from "./types/RestoreDomainAccessInput";
import { RestoreDomainAccessOutput } from "./types/RestoreDomainAccessOutput";
import { RevokeDomainAccessInput } from "./types/RevokeDomainAccessInput";
import { RevokeDomainAccessOutput } from "./types/RevokeDomainAccessOutput";
import { SignOutUserInput } from "./types/SignOutUserInput";
import { SignOutUserOutput } from "./types/SignOutUserOutput";
import { TooManyRequestsException } from "./types/TooManyRequestsException";
import { UnauthorizedException } from "./types/UnauthorizedException";
import { UpdateAuditStreamConfigurationInput } from "./types/UpdateAuditStreamConfigurationInput";
import { UpdateAuditStreamConfigurationOutput } from "./types/UpdateAuditStreamConfigurationOutput";
import { UpdateCompanyNetworkConfigurationInput } from "./types/UpdateCompanyNetworkConfigurationInput";
import { UpdateCompanyNetworkConfigurationOutput } from "./types/UpdateCompanyNetworkConfigurationOutput";
import { UpdateDevicePolicyConfigurationInput } from "./types/UpdateDevicePolicyConfigurationInput";
import { UpdateDevicePolicyConfigurationOutput } from "./types/UpdateDevicePolicyConfigurationOutput";
import { UpdateDomainMetadataInput } from "./types/UpdateDomainMetadataInput";
import { UpdateDomainMetadataOutput } from "./types/UpdateDomainMetadataOutput";
import { UpdateFleetMetadataInput } from "./types/UpdateFleetMetadataInput";
import { UpdateFleetMetadataOutput } from "./types/UpdateFleetMetadataOutput";
import { UpdateIdentityProviderConfigurationInput } from "./types/UpdateIdentityProviderConfigurationInput";
import { UpdateIdentityProviderConfigurationOutput } from "./types/UpdateIdentityProviderConfigurationOutput";
import { AssociateDomainCommand } from "./commands/AssociateDomainCommand";
import { AssociateWebsiteAuthorizationProviderCommand } from "./commands/AssociateWebsiteAuthorizationProviderCommand";
import { AssociateWebsiteCertificateAuthorityCommand } from "./commands/AssociateWebsiteCertificateAuthorityCommand";
import { CreateFleetCommand } from "./commands/CreateFleetCommand";
import { DeleteFleetCommand } from "./commands/DeleteFleetCommand";
import { DescribeAuditStreamConfigurationCommand } from "./commands/DescribeAuditStreamConfigurationCommand";
import { DescribeCompanyNetworkConfigurationCommand } from "./commands/DescribeCompanyNetworkConfigurationCommand";
import { DescribeDeviceCommand } from "./commands/DescribeDeviceCommand";
import { DescribeDevicePolicyConfigurationCommand } from "./commands/DescribeDevicePolicyConfigurationCommand";
import { DescribeDomainCommand } from "./commands/DescribeDomainCommand";
import { DescribeFleetMetadataCommand } from "./commands/DescribeFleetMetadataCommand";
import { DescribeIdentityProviderConfigurationCommand } from "./commands/DescribeIdentityProviderConfigurationCommand";
import { DescribeWebsiteCertificateAuthorityCommand } from "./commands/DescribeWebsiteCertificateAuthorityCommand";
import { DisassociateDomainCommand } from "./commands/DisassociateDomainCommand";
import { DisassociateWebsiteAuthorizationProviderCommand } from "./commands/DisassociateWebsiteAuthorizationProviderCommand";
import { DisassociateWebsiteCertificateAuthorityCommand } from "./commands/DisassociateWebsiteCertificateAuthorityCommand";
import { ListDevicesCommand } from "./commands/ListDevicesCommand";
import { ListDomainsCommand } from "./commands/ListDomainsCommand";
import { ListFleetsCommand } from "./commands/ListFleetsCommand";
import { ListWebsiteAuthorizationProvidersCommand } from "./commands/ListWebsiteAuthorizationProvidersCommand";
import { ListWebsiteCertificateAuthoritiesCommand } from "./commands/ListWebsiteCertificateAuthoritiesCommand";
import { RestoreDomainAccessCommand } from "./commands/RestoreDomainAccessCommand";
import { RevokeDomainAccessCommand } from "./commands/RevokeDomainAccessCommand";
import { SignOutUserCommand } from "./commands/SignOutUserCommand";
import { UpdateAuditStreamConfigurationCommand } from "./commands/UpdateAuditStreamConfigurationCommand";
import { UpdateCompanyNetworkConfigurationCommand } from "./commands/UpdateCompanyNetworkConfigurationCommand";
import { UpdateDevicePolicyConfigurationCommand } from "./commands/UpdateDevicePolicyConfigurationCommand";
import { UpdateDomainMetadataCommand } from "./commands/UpdateDomainMetadataCommand";
import { UpdateFleetMetadataCommand } from "./commands/UpdateFleetMetadataCommand";
import { UpdateIdentityProviderConfigurationCommand } from "./commands/UpdateIdentityProviderConfigurationCommand";

export class WorkLink extends WorkLinkClient {
  /**
   * <p>Specifies a domain to be associated to Amazon WorkLink.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>You are not authorized to perform this action.</p>
   *   - {InternalServerErrorException} <p>The service is temporarily unavailable.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceNotFoundException} <p>The requested resource was not found.</p>
   *   - {ResourceAlreadyExistsException} <p>The resource already exists.</p>
   *   - {TooManyRequestsException} <p>The number of requests exceeds the limit.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public associateDomain(
    args: AssociateDomainInput
  ): Promise<AssociateDomainOutput>;
  public associateDomain(
    args: AssociateDomainInput,
    cb: (err: any, data?: AssociateDomainOutput) => void
  ): void;
  public associateDomain(
    args: AssociateDomainInput,
    cb?: (err: any, data?: AssociateDomainOutput) => void
  ): Promise<AssociateDomainOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AssociateDomainCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Associates a website authorization provider with a specified fleet. This is used to authorize users against associated websites in the company network.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>You are not authorized to perform this action.</p>
   *   - {InternalServerErrorException} <p>The service is temporarily unavailable.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceNotFoundException} <p>The requested resource was not found.</p>
   *   - {ResourceAlreadyExistsException} <p>The resource already exists.</p>
   *   - {TooManyRequestsException} <p>The number of requests exceeds the limit.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public associateWebsiteAuthorizationProvider(
    args: AssociateWebsiteAuthorizationProviderInput
  ): Promise<AssociateWebsiteAuthorizationProviderOutput>;
  public associateWebsiteAuthorizationProvider(
    args: AssociateWebsiteAuthorizationProviderInput,
    cb: (err: any, data?: AssociateWebsiteAuthorizationProviderOutput) => void
  ): void;
  public associateWebsiteAuthorizationProvider(
    args: AssociateWebsiteAuthorizationProviderInput,
    cb?: (err: any, data?: AssociateWebsiteAuthorizationProviderOutput) => void
  ): Promise<AssociateWebsiteAuthorizationProviderOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AssociateWebsiteAuthorizationProviderCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Imports the root certificate of a certificate authority (CA) used to obtain TLS certificates used by associated websites within the company network.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>You are not authorized to perform this action.</p>
   *   - {InternalServerErrorException} <p>The service is temporarily unavailable.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceNotFoundException} <p>The requested resource was not found.</p>
   *   - {ResourceAlreadyExistsException} <p>The resource already exists.</p>
   *   - {TooManyRequestsException} <p>The number of requests exceeds the limit.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public associateWebsiteCertificateAuthority(
    args: AssociateWebsiteCertificateAuthorityInput
  ): Promise<AssociateWebsiteCertificateAuthorityOutput>;
  public associateWebsiteCertificateAuthority(
    args: AssociateWebsiteCertificateAuthorityInput,
    cb: (err: any, data?: AssociateWebsiteCertificateAuthorityOutput) => void
  ): void;
  public associateWebsiteCertificateAuthority(
    args: AssociateWebsiteCertificateAuthorityInput,
    cb?: (err: any, data?: AssociateWebsiteCertificateAuthorityOutput) => void
  ): Promise<AssociateWebsiteCertificateAuthorityOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AssociateWebsiteCertificateAuthorityCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a fleet. A fleet consists of resources and the configuration that delivers associated websites to authorized users who download and set up the Amazon WorkLink app.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>You are not authorized to perform this action.</p>
   *   - {InternalServerErrorException} <p>The service is temporarily unavailable.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceNotFoundException} <p>The requested resource was not found.</p>
   *   - {ResourceAlreadyExistsException} <p>The resource already exists.</p>
   *   - {TooManyRequestsException} <p>The number of requests exceeds the limit.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createFleet(args: CreateFleetInput): Promise<CreateFleetOutput>;
  public createFleet(
    args: CreateFleetInput,
    cb: (err: any, data?: CreateFleetOutput) => void
  ): void;
  public createFleet(
    args: CreateFleetInput,
    cb?: (err: any, data?: CreateFleetOutput) => void
  ): Promise<CreateFleetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateFleetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a fleet. Prevents users from accessing previously associated websites. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>You are not authorized to perform this action.</p>
   *   - {InternalServerErrorException} <p>The service is temporarily unavailable.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceNotFoundException} <p>The requested resource was not found.</p>
   *   - {TooManyRequestsException} <p>The number of requests exceeds the limit.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteFleet(args: DeleteFleetInput): Promise<DeleteFleetOutput>;
  public deleteFleet(
    args: DeleteFleetInput,
    cb: (err: any, data?: DeleteFleetOutput) => void
  ): void;
  public deleteFleet(
    args: DeleteFleetInput,
    cb?: (err: any, data?: DeleteFleetOutput) => void
  ): Promise<DeleteFleetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteFleetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the configuration for delivering audit streams to the customer account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>You are not authorized to perform this action.</p>
   *   - {InternalServerErrorException} <p>The service is temporarily unavailable.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceNotFoundException} <p>The requested resource was not found.</p>
   *   - {TooManyRequestsException} <p>The number of requests exceeds the limit.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeAuditStreamConfiguration(
    args: DescribeAuditStreamConfigurationInput
  ): Promise<DescribeAuditStreamConfigurationOutput>;
  public describeAuditStreamConfiguration(
    args: DescribeAuditStreamConfigurationInput,
    cb: (err: any, data?: DescribeAuditStreamConfigurationOutput) => void
  ): void;
  public describeAuditStreamConfiguration(
    args: DescribeAuditStreamConfigurationInput,
    cb?: (err: any, data?: DescribeAuditStreamConfigurationOutput) => void
  ): Promise<DescribeAuditStreamConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeAuditStreamConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the networking configuration to access the internal websites associated with the specified fleet.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>You are not authorized to perform this action.</p>
   *   - {InternalServerErrorException} <p>The service is temporarily unavailable.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceNotFoundException} <p>The requested resource was not found.</p>
   *   - {TooManyRequestsException} <p>The number of requests exceeds the limit.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeCompanyNetworkConfiguration(
    args: DescribeCompanyNetworkConfigurationInput
  ): Promise<DescribeCompanyNetworkConfigurationOutput>;
  public describeCompanyNetworkConfiguration(
    args: DescribeCompanyNetworkConfigurationInput,
    cb: (err: any, data?: DescribeCompanyNetworkConfigurationOutput) => void
  ): void;
  public describeCompanyNetworkConfiguration(
    args: DescribeCompanyNetworkConfigurationInput,
    cb?: (err: any, data?: DescribeCompanyNetworkConfigurationOutput) => void
  ): Promise<DescribeCompanyNetworkConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeCompanyNetworkConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Provides information about a user's device.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>You are not authorized to perform this action.</p>
   *   - {InternalServerErrorException} <p>The service is temporarily unavailable.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceNotFoundException} <p>The requested resource was not found.</p>
   *   - {TooManyRequestsException} <p>The number of requests exceeds the limit.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDevice(
    args: DescribeDeviceInput
  ): Promise<DescribeDeviceOutput>;
  public describeDevice(
    args: DescribeDeviceInput,
    cb: (err: any, data?: DescribeDeviceOutput) => void
  ): void;
  public describeDevice(
    args: DescribeDeviceInput,
    cb?: (err: any, data?: DescribeDeviceOutput) => void
  ): Promise<DescribeDeviceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDeviceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the device policy configuration for the specified fleet.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>You are not authorized to perform this action.</p>
   *   - {InternalServerErrorException} <p>The service is temporarily unavailable.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceNotFoundException} <p>The requested resource was not found.</p>
   *   - {TooManyRequestsException} <p>The number of requests exceeds the limit.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDevicePolicyConfiguration(
    args: DescribeDevicePolicyConfigurationInput
  ): Promise<DescribeDevicePolicyConfigurationOutput>;
  public describeDevicePolicyConfiguration(
    args: DescribeDevicePolicyConfigurationInput,
    cb: (err: any, data?: DescribeDevicePolicyConfigurationOutput) => void
  ): void;
  public describeDevicePolicyConfiguration(
    args: DescribeDevicePolicyConfigurationInput,
    cb?: (err: any, data?: DescribeDevicePolicyConfigurationOutput) => void
  ): Promise<DescribeDevicePolicyConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDevicePolicyConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Provides information about the domain.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>You are not authorized to perform this action.</p>
   *   - {InternalServerErrorException} <p>The service is temporarily unavailable.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceNotFoundException} <p>The requested resource was not found.</p>
   *   - {TooManyRequestsException} <p>The number of requests exceeds the limit.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDomain(
    args: DescribeDomainInput
  ): Promise<DescribeDomainOutput>;
  public describeDomain(
    args: DescribeDomainInput,
    cb: (err: any, data?: DescribeDomainOutput) => void
  ): void;
  public describeDomain(
    args: DescribeDomainInput,
    cb?: (err: any, data?: DescribeDomainOutput) => void
  ): Promise<DescribeDomainOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDomainCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Provides basic information for the specified fleet, excluding identity provider, networking, and device configuration details.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>You are not authorized to perform this action.</p>
   *   - {InternalServerErrorException} <p>The service is temporarily unavailable.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceNotFoundException} <p>The requested resource was not found.</p>
   *   - {TooManyRequestsException} <p>The number of requests exceeds the limit.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeFleetMetadata(
    args: DescribeFleetMetadataInput
  ): Promise<DescribeFleetMetadataOutput>;
  public describeFleetMetadata(
    args: DescribeFleetMetadataInput,
    cb: (err: any, data?: DescribeFleetMetadataOutput) => void
  ): void;
  public describeFleetMetadata(
    args: DescribeFleetMetadataInput,
    cb?: (err: any, data?: DescribeFleetMetadataOutput) => void
  ): Promise<DescribeFleetMetadataOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeFleetMetadataCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the identity provider configuration of the specified fleet.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>You are not authorized to perform this action.</p>
   *   - {InternalServerErrorException} <p>The service is temporarily unavailable.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceNotFoundException} <p>The requested resource was not found.</p>
   *   - {TooManyRequestsException} <p>The number of requests exceeds the limit.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeIdentityProviderConfiguration(
    args: DescribeIdentityProviderConfigurationInput
  ): Promise<DescribeIdentityProviderConfigurationOutput>;
  public describeIdentityProviderConfiguration(
    args: DescribeIdentityProviderConfigurationInput,
    cb: (err: any, data?: DescribeIdentityProviderConfigurationOutput) => void
  ): void;
  public describeIdentityProviderConfiguration(
    args: DescribeIdentityProviderConfigurationInput,
    cb?: (err: any, data?: DescribeIdentityProviderConfigurationOutput) => void
  ): Promise<DescribeIdentityProviderConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeIdentityProviderConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Provides information about the certificate authority.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>You are not authorized to perform this action.</p>
   *   - {InternalServerErrorException} <p>The service is temporarily unavailable.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceNotFoundException} <p>The requested resource was not found.</p>
   *   - {TooManyRequestsException} <p>The number of requests exceeds the limit.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeWebsiteCertificateAuthority(
    args: DescribeWebsiteCertificateAuthorityInput
  ): Promise<DescribeWebsiteCertificateAuthorityOutput>;
  public describeWebsiteCertificateAuthority(
    args: DescribeWebsiteCertificateAuthorityInput,
    cb: (err: any, data?: DescribeWebsiteCertificateAuthorityOutput) => void
  ): void;
  public describeWebsiteCertificateAuthority(
    args: DescribeWebsiteCertificateAuthorityInput,
    cb?: (err: any, data?: DescribeWebsiteCertificateAuthorityOutput) => void
  ): Promise<DescribeWebsiteCertificateAuthorityOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeWebsiteCertificateAuthorityCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disassociates a domain from Amazon WorkLink. End users lose the ability to access the domain with Amazon WorkLink. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>You are not authorized to perform this action.</p>
   *   - {InternalServerErrorException} <p>The service is temporarily unavailable.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceNotFoundException} <p>The requested resource was not found.</p>
   *   - {TooManyRequestsException} <p>The number of requests exceeds the limit.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disassociateDomain(
    args: DisassociateDomainInput
  ): Promise<DisassociateDomainOutput>;
  public disassociateDomain(
    args: DisassociateDomainInput,
    cb: (err: any, data?: DisassociateDomainOutput) => void
  ): void;
  public disassociateDomain(
    args: DisassociateDomainInput,
    cb?: (err: any, data?: DisassociateDomainOutput) => void
  ): Promise<DisassociateDomainOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisassociateDomainCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disassociates a website authorization provider from a specified fleet. After the disassociation, users can't load any associated websites that require this authorization provider.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>You are not authorized to perform this action.</p>
   *   - {InternalServerErrorException} <p>The service is temporarily unavailable.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceNotFoundException} <p>The requested resource was not found.</p>
   *   - {ResourceAlreadyExistsException} <p>The resource already exists.</p>
   *   - {TooManyRequestsException} <p>The number of requests exceeds the limit.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disassociateWebsiteAuthorizationProvider(
    args: DisassociateWebsiteAuthorizationProviderInput
  ): Promise<DisassociateWebsiteAuthorizationProviderOutput>;
  public disassociateWebsiteAuthorizationProvider(
    args: DisassociateWebsiteAuthorizationProviderInput,
    cb: (
      err: any,
      data?: DisassociateWebsiteAuthorizationProviderOutput
    ) => void
  ): void;
  public disassociateWebsiteAuthorizationProvider(
    args: DisassociateWebsiteAuthorizationProviderInput,
    cb?: (
      err: any,
      data?: DisassociateWebsiteAuthorizationProviderOutput
    ) => void
  ): Promise<DisassociateWebsiteAuthorizationProviderOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisassociateWebsiteAuthorizationProviderCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes a certificate authority (CA).</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>You are not authorized to perform this action.</p>
   *   - {InternalServerErrorException} <p>The service is temporarily unavailable.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceNotFoundException} <p>The requested resource was not found.</p>
   *   - {TooManyRequestsException} <p>The number of requests exceeds the limit.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disassociateWebsiteCertificateAuthority(
    args: DisassociateWebsiteCertificateAuthorityInput
  ): Promise<DisassociateWebsiteCertificateAuthorityOutput>;
  public disassociateWebsiteCertificateAuthority(
    args: DisassociateWebsiteCertificateAuthorityInput,
    cb: (err: any, data?: DisassociateWebsiteCertificateAuthorityOutput) => void
  ): void;
  public disassociateWebsiteCertificateAuthority(
    args: DisassociateWebsiteCertificateAuthorityInput,
    cb?: (
      err: any,
      data?: DisassociateWebsiteCertificateAuthorityOutput
    ) => void
  ): Promise<DisassociateWebsiteCertificateAuthorityOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisassociateWebsiteCertificateAuthorityCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a list of devices registered with the specified fleet.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>You are not authorized to perform this action.</p>
   *   - {InternalServerErrorException} <p>The service is temporarily unavailable.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceNotFoundException} <p>The requested resource was not found.</p>
   *   - {TooManyRequestsException} <p>The number of requests exceeds the limit.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listDevices(args: ListDevicesInput): Promise<ListDevicesOutput>;
  public listDevices(
    args: ListDevicesInput,
    cb: (err: any, data?: ListDevicesOutput) => void
  ): void;
  public listDevices(
    args: ListDevicesInput,
    cb?: (err: any, data?: ListDevicesOutput) => void
  ): Promise<ListDevicesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListDevicesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a list of domains associated to a specified fleet.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>You are not authorized to perform this action.</p>
   *   - {InternalServerErrorException} <p>The service is temporarily unavailable.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {TooManyRequestsException} <p>The number of requests exceeds the limit.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listDomains(args: ListDomainsInput): Promise<ListDomainsOutput>;
  public listDomains(
    args: ListDomainsInput,
    cb: (err: any, data?: ListDomainsOutput) => void
  ): void;
  public listDomains(
    args: ListDomainsInput,
    cb?: (err: any, data?: ListDomainsOutput) => void
  ): Promise<ListDomainsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListDomainsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a list of fleets for the current account and Region.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>You are not authorized to perform this action.</p>
   *   - {InternalServerErrorException} <p>The service is temporarily unavailable.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {TooManyRequestsException} <p>The number of requests exceeds the limit.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listFleets(args: ListFleetsInput): Promise<ListFleetsOutput>;
  public listFleets(
    args: ListFleetsInput,
    cb: (err: any, data?: ListFleetsOutput) => void
  ): void;
  public listFleets(
    args: ListFleetsInput,
    cb?: (err: any, data?: ListFleetsOutput) => void
  ): Promise<ListFleetsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListFleetsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a list of website authorization providers associated with a specified fleet.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>You are not authorized to perform this action.</p>
   *   - {InternalServerErrorException} <p>The service is temporarily unavailable.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceNotFoundException} <p>The requested resource was not found.</p>
   *   - {TooManyRequestsException} <p>The number of requests exceeds the limit.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listWebsiteAuthorizationProviders(
    args: ListWebsiteAuthorizationProvidersInput
  ): Promise<ListWebsiteAuthorizationProvidersOutput>;
  public listWebsiteAuthorizationProviders(
    args: ListWebsiteAuthorizationProvidersInput,
    cb: (err: any, data?: ListWebsiteAuthorizationProvidersOutput) => void
  ): void;
  public listWebsiteAuthorizationProviders(
    args: ListWebsiteAuthorizationProvidersInput,
    cb?: (err: any, data?: ListWebsiteAuthorizationProvidersOutput) => void
  ): Promise<ListWebsiteAuthorizationProvidersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListWebsiteAuthorizationProvidersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a list of certificate authorities added for the current account and Region.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>You are not authorized to perform this action.</p>
   *   - {InternalServerErrorException} <p>The service is temporarily unavailable.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {TooManyRequestsException} <p>The number of requests exceeds the limit.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listWebsiteCertificateAuthorities(
    args: ListWebsiteCertificateAuthoritiesInput
  ): Promise<ListWebsiteCertificateAuthoritiesOutput>;
  public listWebsiteCertificateAuthorities(
    args: ListWebsiteCertificateAuthoritiesInput,
    cb: (err: any, data?: ListWebsiteCertificateAuthoritiesOutput) => void
  ): void;
  public listWebsiteCertificateAuthorities(
    args: ListWebsiteCertificateAuthoritiesInput,
    cb?: (err: any, data?: ListWebsiteCertificateAuthoritiesOutput) => void
  ): Promise<ListWebsiteCertificateAuthoritiesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListWebsiteCertificateAuthoritiesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Moves a domain to ACTIVE status if it was in the INACTIVE status.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>You are not authorized to perform this action.</p>
   *   - {InternalServerErrorException} <p>The service is temporarily unavailable.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceNotFoundException} <p>The requested resource was not found.</p>
   *   - {TooManyRequestsException} <p>The number of requests exceeds the limit.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public restoreDomainAccess(
    args: RestoreDomainAccessInput
  ): Promise<RestoreDomainAccessOutput>;
  public restoreDomainAccess(
    args: RestoreDomainAccessInput,
    cb: (err: any, data?: RestoreDomainAccessOutput) => void
  ): void;
  public restoreDomainAccess(
    args: RestoreDomainAccessInput,
    cb?: (err: any, data?: RestoreDomainAccessOutput) => void
  ): Promise<RestoreDomainAccessOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RestoreDomainAccessCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Moves a domain to INACTIVE status if it was in the ACTIVE status.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>You are not authorized to perform this action.</p>
   *   - {InternalServerErrorException} <p>The service is temporarily unavailable.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceNotFoundException} <p>The requested resource was not found.</p>
   *   - {TooManyRequestsException} <p>The number of requests exceeds the limit.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public revokeDomainAccess(
    args: RevokeDomainAccessInput
  ): Promise<RevokeDomainAccessOutput>;
  public revokeDomainAccess(
    args: RevokeDomainAccessInput,
    cb: (err: any, data?: RevokeDomainAccessOutput) => void
  ): void;
  public revokeDomainAccess(
    args: RevokeDomainAccessInput,
    cb?: (err: any, data?: RevokeDomainAccessOutput) => void
  ): Promise<RevokeDomainAccessOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RevokeDomainAccessCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Signs the user out from all of their devices. The user can sign in again if they have valid credentials.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>You are not authorized to perform this action.</p>
   *   - {InternalServerErrorException} <p>The service is temporarily unavailable.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceNotFoundException} <p>The requested resource was not found.</p>
   *   - {TooManyRequestsException} <p>The number of requests exceeds the limit.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public signOutUser(args: SignOutUserInput): Promise<SignOutUserOutput>;
  public signOutUser(
    args: SignOutUserInput,
    cb: (err: any, data?: SignOutUserOutput) => void
  ): void;
  public signOutUser(
    args: SignOutUserInput,
    cb?: (err: any, data?: SignOutUserOutput) => void
  ): Promise<SignOutUserOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SignOutUserCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the audit stream configuration for the fleet.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>You are not authorized to perform this action.</p>
   *   - {InternalServerErrorException} <p>The service is temporarily unavailable.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceNotFoundException} <p>The requested resource was not found.</p>
   *   - {TooManyRequestsException} <p>The number of requests exceeds the limit.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateAuditStreamConfiguration(
    args: UpdateAuditStreamConfigurationInput
  ): Promise<UpdateAuditStreamConfigurationOutput>;
  public updateAuditStreamConfiguration(
    args: UpdateAuditStreamConfigurationInput,
    cb: (err: any, data?: UpdateAuditStreamConfigurationOutput) => void
  ): void;
  public updateAuditStreamConfiguration(
    args: UpdateAuditStreamConfigurationInput,
    cb?: (err: any, data?: UpdateAuditStreamConfigurationOutput) => void
  ): Promise<UpdateAuditStreamConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateAuditStreamConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the company network configuration for the fleet.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>You are not authorized to perform this action.</p>
   *   - {InternalServerErrorException} <p>The service is temporarily unavailable.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceNotFoundException} <p>The requested resource was not found.</p>
   *   - {TooManyRequestsException} <p>The number of requests exceeds the limit.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateCompanyNetworkConfiguration(
    args: UpdateCompanyNetworkConfigurationInput
  ): Promise<UpdateCompanyNetworkConfigurationOutput>;
  public updateCompanyNetworkConfiguration(
    args: UpdateCompanyNetworkConfigurationInput,
    cb: (err: any, data?: UpdateCompanyNetworkConfigurationOutput) => void
  ): void;
  public updateCompanyNetworkConfiguration(
    args: UpdateCompanyNetworkConfigurationInput,
    cb?: (err: any, data?: UpdateCompanyNetworkConfigurationOutput) => void
  ): Promise<UpdateCompanyNetworkConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateCompanyNetworkConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the device policy configuration for the fleet.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>You are not authorized to perform this action.</p>
   *   - {InternalServerErrorException} <p>The service is temporarily unavailable.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceNotFoundException} <p>The requested resource was not found.</p>
   *   - {TooManyRequestsException} <p>The number of requests exceeds the limit.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateDevicePolicyConfiguration(
    args: UpdateDevicePolicyConfigurationInput
  ): Promise<UpdateDevicePolicyConfigurationOutput>;
  public updateDevicePolicyConfiguration(
    args: UpdateDevicePolicyConfigurationInput,
    cb: (err: any, data?: UpdateDevicePolicyConfigurationOutput) => void
  ): void;
  public updateDevicePolicyConfiguration(
    args: UpdateDevicePolicyConfigurationInput,
    cb?: (err: any, data?: UpdateDevicePolicyConfigurationOutput) => void
  ): Promise<UpdateDevicePolicyConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateDevicePolicyConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates domain metadata, such as DisplayName.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>You are not authorized to perform this action.</p>
   *   - {InternalServerErrorException} <p>The service is temporarily unavailable.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceNotFoundException} <p>The requested resource was not found.</p>
   *   - {TooManyRequestsException} <p>The number of requests exceeds the limit.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateDomainMetadata(
    args: UpdateDomainMetadataInput
  ): Promise<UpdateDomainMetadataOutput>;
  public updateDomainMetadata(
    args: UpdateDomainMetadataInput,
    cb: (err: any, data?: UpdateDomainMetadataOutput) => void
  ): void;
  public updateDomainMetadata(
    args: UpdateDomainMetadataInput,
    cb?: (err: any, data?: UpdateDomainMetadataOutput) => void
  ): Promise<UpdateDomainMetadataOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateDomainMetadataCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates fleet metadata, such as DisplayName.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>You are not authorized to perform this action.</p>
   *   - {InternalServerErrorException} <p>The service is temporarily unavailable.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceNotFoundException} <p>The requested resource was not found.</p>
   *   - {TooManyRequestsException} <p>The number of requests exceeds the limit.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateFleetMetadata(
    args: UpdateFleetMetadataInput
  ): Promise<UpdateFleetMetadataOutput>;
  public updateFleetMetadata(
    args: UpdateFleetMetadataInput,
    cb: (err: any, data?: UpdateFleetMetadataOutput) => void
  ): void;
  public updateFleetMetadata(
    args: UpdateFleetMetadataInput,
    cb?: (err: any, data?: UpdateFleetMetadataOutput) => void
  ): Promise<UpdateFleetMetadataOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateFleetMetadataCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the identity provider configuration for the fleet.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>You are not authorized to perform this action.</p>
   *   - {InternalServerErrorException} <p>The service is temporarily unavailable.</p>
   *   - {InvalidRequestException} <p>The request is not valid.</p>
   *   - {ResourceNotFoundException} <p>The requested resource was not found.</p>
   *   - {TooManyRequestsException} <p>The number of requests exceeds the limit.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateIdentityProviderConfiguration(
    args: UpdateIdentityProviderConfigurationInput
  ): Promise<UpdateIdentityProviderConfigurationOutput>;
  public updateIdentityProviderConfiguration(
    args: UpdateIdentityProviderConfigurationInput,
    cb: (err: any, data?: UpdateIdentityProviderConfigurationOutput) => void
  ): void;
  public updateIdentityProviderConfiguration(
    args: UpdateIdentityProviderConfigurationInput,
    cb?: (err: any, data?: UpdateIdentityProviderConfigurationOutput) => void
  ): Promise<UpdateIdentityProviderConfigurationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateIdentityProviderConfigurationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
