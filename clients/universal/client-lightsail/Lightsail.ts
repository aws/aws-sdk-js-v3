import { LightsailClient } from "./LightsailClient";
import { AccessDeniedException } from "./types/AccessDeniedException";
import { AccountSetupInProgressException } from "./types/AccountSetupInProgressException";
import { AllocateStaticIpInput } from "./types/AllocateStaticIpInput";
import { AllocateStaticIpOutput } from "./types/AllocateStaticIpOutput";
import { AttachDiskInput } from "./types/AttachDiskInput";
import { AttachDiskOutput } from "./types/AttachDiskOutput";
import { AttachInstancesToLoadBalancerInput } from "./types/AttachInstancesToLoadBalancerInput";
import { AttachInstancesToLoadBalancerOutput } from "./types/AttachInstancesToLoadBalancerOutput";
import { AttachLoadBalancerTlsCertificateInput } from "./types/AttachLoadBalancerTlsCertificateInput";
import { AttachLoadBalancerTlsCertificateOutput } from "./types/AttachLoadBalancerTlsCertificateOutput";
import { AttachStaticIpInput } from "./types/AttachStaticIpInput";
import { AttachStaticIpOutput } from "./types/AttachStaticIpOutput";
import { CloseInstancePublicPortsInput } from "./types/CloseInstancePublicPortsInput";
import { CloseInstancePublicPortsOutput } from "./types/CloseInstancePublicPortsOutput";
import { CopySnapshotInput } from "./types/CopySnapshotInput";
import { CopySnapshotOutput } from "./types/CopySnapshotOutput";
import { CreateCloudFormationStackInput } from "./types/CreateCloudFormationStackInput";
import { CreateCloudFormationStackOutput } from "./types/CreateCloudFormationStackOutput";
import { CreateDiskFromSnapshotInput } from "./types/CreateDiskFromSnapshotInput";
import { CreateDiskFromSnapshotOutput } from "./types/CreateDiskFromSnapshotOutput";
import { CreateDiskInput } from "./types/CreateDiskInput";
import { CreateDiskOutput } from "./types/CreateDiskOutput";
import { CreateDiskSnapshotInput } from "./types/CreateDiskSnapshotInput";
import { CreateDiskSnapshotOutput } from "./types/CreateDiskSnapshotOutput";
import { CreateDomainEntryInput } from "./types/CreateDomainEntryInput";
import { CreateDomainEntryOutput } from "./types/CreateDomainEntryOutput";
import { CreateDomainInput } from "./types/CreateDomainInput";
import { CreateDomainOutput } from "./types/CreateDomainOutput";
import { CreateInstanceSnapshotInput } from "./types/CreateInstanceSnapshotInput";
import { CreateInstanceSnapshotOutput } from "./types/CreateInstanceSnapshotOutput";
import { CreateInstancesFromSnapshotInput } from "./types/CreateInstancesFromSnapshotInput";
import { CreateInstancesFromSnapshotOutput } from "./types/CreateInstancesFromSnapshotOutput";
import { CreateInstancesInput } from "./types/CreateInstancesInput";
import { CreateInstancesOutput } from "./types/CreateInstancesOutput";
import { CreateKeyPairInput } from "./types/CreateKeyPairInput";
import { CreateKeyPairOutput } from "./types/CreateKeyPairOutput";
import { CreateLoadBalancerInput } from "./types/CreateLoadBalancerInput";
import { CreateLoadBalancerOutput } from "./types/CreateLoadBalancerOutput";
import { CreateLoadBalancerTlsCertificateInput } from "./types/CreateLoadBalancerTlsCertificateInput";
import { CreateLoadBalancerTlsCertificateOutput } from "./types/CreateLoadBalancerTlsCertificateOutput";
import { CreateRelationalDatabaseFromSnapshotInput } from "./types/CreateRelationalDatabaseFromSnapshotInput";
import { CreateRelationalDatabaseFromSnapshotOutput } from "./types/CreateRelationalDatabaseFromSnapshotOutput";
import { CreateRelationalDatabaseInput } from "./types/CreateRelationalDatabaseInput";
import { CreateRelationalDatabaseOutput } from "./types/CreateRelationalDatabaseOutput";
import { CreateRelationalDatabaseSnapshotInput } from "./types/CreateRelationalDatabaseSnapshotInput";
import { CreateRelationalDatabaseSnapshotOutput } from "./types/CreateRelationalDatabaseSnapshotOutput";
import { DeleteDiskInput } from "./types/DeleteDiskInput";
import { DeleteDiskOutput } from "./types/DeleteDiskOutput";
import { DeleteDiskSnapshotInput } from "./types/DeleteDiskSnapshotInput";
import { DeleteDiskSnapshotOutput } from "./types/DeleteDiskSnapshotOutput";
import { DeleteDomainEntryInput } from "./types/DeleteDomainEntryInput";
import { DeleteDomainEntryOutput } from "./types/DeleteDomainEntryOutput";
import { DeleteDomainInput } from "./types/DeleteDomainInput";
import { DeleteDomainOutput } from "./types/DeleteDomainOutput";
import { DeleteInstanceInput } from "./types/DeleteInstanceInput";
import { DeleteInstanceOutput } from "./types/DeleteInstanceOutput";
import { DeleteInstanceSnapshotInput } from "./types/DeleteInstanceSnapshotInput";
import { DeleteInstanceSnapshotOutput } from "./types/DeleteInstanceSnapshotOutput";
import { DeleteKeyPairInput } from "./types/DeleteKeyPairInput";
import { DeleteKeyPairOutput } from "./types/DeleteKeyPairOutput";
import { DeleteKnownHostKeysInput } from "./types/DeleteKnownHostKeysInput";
import { DeleteKnownHostKeysOutput } from "./types/DeleteKnownHostKeysOutput";
import { DeleteLoadBalancerInput } from "./types/DeleteLoadBalancerInput";
import { DeleteLoadBalancerOutput } from "./types/DeleteLoadBalancerOutput";
import { DeleteLoadBalancerTlsCertificateInput } from "./types/DeleteLoadBalancerTlsCertificateInput";
import { DeleteLoadBalancerTlsCertificateOutput } from "./types/DeleteLoadBalancerTlsCertificateOutput";
import { DeleteRelationalDatabaseInput } from "./types/DeleteRelationalDatabaseInput";
import { DeleteRelationalDatabaseOutput } from "./types/DeleteRelationalDatabaseOutput";
import { DeleteRelationalDatabaseSnapshotInput } from "./types/DeleteRelationalDatabaseSnapshotInput";
import { DeleteRelationalDatabaseSnapshotOutput } from "./types/DeleteRelationalDatabaseSnapshotOutput";
import { DetachDiskInput } from "./types/DetachDiskInput";
import { DetachDiskOutput } from "./types/DetachDiskOutput";
import { DetachInstancesFromLoadBalancerInput } from "./types/DetachInstancesFromLoadBalancerInput";
import { DetachInstancesFromLoadBalancerOutput } from "./types/DetachInstancesFromLoadBalancerOutput";
import { DetachStaticIpInput } from "./types/DetachStaticIpInput";
import { DetachStaticIpOutput } from "./types/DetachStaticIpOutput";
import { DownloadDefaultKeyPairInput } from "./types/DownloadDefaultKeyPairInput";
import { DownloadDefaultKeyPairOutput } from "./types/DownloadDefaultKeyPairOutput";
import { ExportSnapshotInput } from "./types/ExportSnapshotInput";
import { ExportSnapshotOutput } from "./types/ExportSnapshotOutput";
import { GetActiveNamesInput } from "./types/GetActiveNamesInput";
import { GetActiveNamesOutput } from "./types/GetActiveNamesOutput";
import { GetBlueprintsInput } from "./types/GetBlueprintsInput";
import { GetBlueprintsOutput } from "./types/GetBlueprintsOutput";
import { GetBundlesInput } from "./types/GetBundlesInput";
import { GetBundlesOutput } from "./types/GetBundlesOutput";
import { GetCloudFormationStackRecordsInput } from "./types/GetCloudFormationStackRecordsInput";
import { GetCloudFormationStackRecordsOutput } from "./types/GetCloudFormationStackRecordsOutput";
import { GetDiskInput } from "./types/GetDiskInput";
import { GetDiskOutput } from "./types/GetDiskOutput";
import { GetDiskSnapshotInput } from "./types/GetDiskSnapshotInput";
import { GetDiskSnapshotOutput } from "./types/GetDiskSnapshotOutput";
import { GetDiskSnapshotsInput } from "./types/GetDiskSnapshotsInput";
import { GetDiskSnapshotsOutput } from "./types/GetDiskSnapshotsOutput";
import { GetDisksInput } from "./types/GetDisksInput";
import { GetDisksOutput } from "./types/GetDisksOutput";
import { GetDomainInput } from "./types/GetDomainInput";
import { GetDomainOutput } from "./types/GetDomainOutput";
import { GetDomainsInput } from "./types/GetDomainsInput";
import { GetDomainsOutput } from "./types/GetDomainsOutput";
import { GetExportSnapshotRecordsInput } from "./types/GetExportSnapshotRecordsInput";
import { GetExportSnapshotRecordsOutput } from "./types/GetExportSnapshotRecordsOutput";
import { GetInstanceAccessDetailsInput } from "./types/GetInstanceAccessDetailsInput";
import { GetInstanceAccessDetailsOutput } from "./types/GetInstanceAccessDetailsOutput";
import { GetInstanceInput } from "./types/GetInstanceInput";
import { GetInstanceMetricDataInput } from "./types/GetInstanceMetricDataInput";
import { GetInstanceMetricDataOutput } from "./types/GetInstanceMetricDataOutput";
import { GetInstanceOutput } from "./types/GetInstanceOutput";
import { GetInstancePortStatesInput } from "./types/GetInstancePortStatesInput";
import { GetInstancePortStatesOutput } from "./types/GetInstancePortStatesOutput";
import { GetInstanceSnapshotInput } from "./types/GetInstanceSnapshotInput";
import { GetInstanceSnapshotOutput } from "./types/GetInstanceSnapshotOutput";
import { GetInstanceSnapshotsInput } from "./types/GetInstanceSnapshotsInput";
import { GetInstanceSnapshotsOutput } from "./types/GetInstanceSnapshotsOutput";
import { GetInstanceStateInput } from "./types/GetInstanceStateInput";
import { GetInstanceStateOutput } from "./types/GetInstanceStateOutput";
import { GetInstancesInput } from "./types/GetInstancesInput";
import { GetInstancesOutput } from "./types/GetInstancesOutput";
import { GetKeyPairInput } from "./types/GetKeyPairInput";
import { GetKeyPairOutput } from "./types/GetKeyPairOutput";
import { GetKeyPairsInput } from "./types/GetKeyPairsInput";
import { GetKeyPairsOutput } from "./types/GetKeyPairsOutput";
import { GetLoadBalancerInput } from "./types/GetLoadBalancerInput";
import { GetLoadBalancerMetricDataInput } from "./types/GetLoadBalancerMetricDataInput";
import { GetLoadBalancerMetricDataOutput } from "./types/GetLoadBalancerMetricDataOutput";
import { GetLoadBalancerOutput } from "./types/GetLoadBalancerOutput";
import { GetLoadBalancerTlsCertificatesInput } from "./types/GetLoadBalancerTlsCertificatesInput";
import { GetLoadBalancerTlsCertificatesOutput } from "./types/GetLoadBalancerTlsCertificatesOutput";
import { GetLoadBalancersInput } from "./types/GetLoadBalancersInput";
import { GetLoadBalancersOutput } from "./types/GetLoadBalancersOutput";
import { GetOperationInput } from "./types/GetOperationInput";
import { GetOperationOutput } from "./types/GetOperationOutput";
import { GetOperationsForResourceInput } from "./types/GetOperationsForResourceInput";
import { GetOperationsForResourceOutput } from "./types/GetOperationsForResourceOutput";
import { GetOperationsInput } from "./types/GetOperationsInput";
import { GetOperationsOutput } from "./types/GetOperationsOutput";
import { GetRegionsInput } from "./types/GetRegionsInput";
import { GetRegionsOutput } from "./types/GetRegionsOutput";
import { GetRelationalDatabaseBlueprintsInput } from "./types/GetRelationalDatabaseBlueprintsInput";
import { GetRelationalDatabaseBlueprintsOutput } from "./types/GetRelationalDatabaseBlueprintsOutput";
import { GetRelationalDatabaseBundlesInput } from "./types/GetRelationalDatabaseBundlesInput";
import { GetRelationalDatabaseBundlesOutput } from "./types/GetRelationalDatabaseBundlesOutput";
import { GetRelationalDatabaseEventsInput } from "./types/GetRelationalDatabaseEventsInput";
import { GetRelationalDatabaseEventsOutput } from "./types/GetRelationalDatabaseEventsOutput";
import { GetRelationalDatabaseInput } from "./types/GetRelationalDatabaseInput";
import { GetRelationalDatabaseLogEventsInput } from "./types/GetRelationalDatabaseLogEventsInput";
import { GetRelationalDatabaseLogEventsOutput } from "./types/GetRelationalDatabaseLogEventsOutput";
import { GetRelationalDatabaseLogStreamsInput } from "./types/GetRelationalDatabaseLogStreamsInput";
import { GetRelationalDatabaseLogStreamsOutput } from "./types/GetRelationalDatabaseLogStreamsOutput";
import { GetRelationalDatabaseMasterUserPasswordInput } from "./types/GetRelationalDatabaseMasterUserPasswordInput";
import { GetRelationalDatabaseMasterUserPasswordOutput } from "./types/GetRelationalDatabaseMasterUserPasswordOutput";
import { GetRelationalDatabaseMetricDataInput } from "./types/GetRelationalDatabaseMetricDataInput";
import { GetRelationalDatabaseMetricDataOutput } from "./types/GetRelationalDatabaseMetricDataOutput";
import { GetRelationalDatabaseOutput } from "./types/GetRelationalDatabaseOutput";
import { GetRelationalDatabaseParametersInput } from "./types/GetRelationalDatabaseParametersInput";
import { GetRelationalDatabaseParametersOutput } from "./types/GetRelationalDatabaseParametersOutput";
import { GetRelationalDatabaseSnapshotInput } from "./types/GetRelationalDatabaseSnapshotInput";
import { GetRelationalDatabaseSnapshotOutput } from "./types/GetRelationalDatabaseSnapshotOutput";
import { GetRelationalDatabaseSnapshotsInput } from "./types/GetRelationalDatabaseSnapshotsInput";
import { GetRelationalDatabaseSnapshotsOutput } from "./types/GetRelationalDatabaseSnapshotsOutput";
import { GetRelationalDatabasesInput } from "./types/GetRelationalDatabasesInput";
import { GetRelationalDatabasesOutput } from "./types/GetRelationalDatabasesOutput";
import { GetStaticIpInput } from "./types/GetStaticIpInput";
import { GetStaticIpOutput } from "./types/GetStaticIpOutput";
import { GetStaticIpsInput } from "./types/GetStaticIpsInput";
import { GetStaticIpsOutput } from "./types/GetStaticIpsOutput";
import { ImportKeyPairInput } from "./types/ImportKeyPairInput";
import { ImportKeyPairOutput } from "./types/ImportKeyPairOutput";
import { InvalidInputException } from "./types/InvalidInputException";
import { IsVpcPeeredInput } from "./types/IsVpcPeeredInput";
import { IsVpcPeeredOutput } from "./types/IsVpcPeeredOutput";
import { NotFoundException } from "./types/NotFoundException";
import { OpenInstancePublicPortsInput } from "./types/OpenInstancePublicPortsInput";
import { OpenInstancePublicPortsOutput } from "./types/OpenInstancePublicPortsOutput";
import { OperationFailureException } from "./types/OperationFailureException";
import { PeerVpcInput } from "./types/PeerVpcInput";
import { PeerVpcOutput } from "./types/PeerVpcOutput";
import { PutInstancePublicPortsInput } from "./types/PutInstancePublicPortsInput";
import { PutInstancePublicPortsOutput } from "./types/PutInstancePublicPortsOutput";
import { RebootInstanceInput } from "./types/RebootInstanceInput";
import { RebootInstanceOutput } from "./types/RebootInstanceOutput";
import { RebootRelationalDatabaseInput } from "./types/RebootRelationalDatabaseInput";
import { RebootRelationalDatabaseOutput } from "./types/RebootRelationalDatabaseOutput";
import { ReleaseStaticIpInput } from "./types/ReleaseStaticIpInput";
import { ReleaseStaticIpOutput } from "./types/ReleaseStaticIpOutput";
import { ServiceException } from "./types/ServiceException";
import { StartInstanceInput } from "./types/StartInstanceInput";
import { StartInstanceOutput } from "./types/StartInstanceOutput";
import { StartRelationalDatabaseInput } from "./types/StartRelationalDatabaseInput";
import { StartRelationalDatabaseOutput } from "./types/StartRelationalDatabaseOutput";
import { StopInstanceInput } from "./types/StopInstanceInput";
import { StopInstanceOutput } from "./types/StopInstanceOutput";
import { StopRelationalDatabaseInput } from "./types/StopRelationalDatabaseInput";
import { StopRelationalDatabaseOutput } from "./types/StopRelationalDatabaseOutput";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { UnauthenticatedException } from "./types/UnauthenticatedException";
import { UnpeerVpcInput } from "./types/UnpeerVpcInput";
import { UnpeerVpcOutput } from "./types/UnpeerVpcOutput";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { UpdateDomainEntryInput } from "./types/UpdateDomainEntryInput";
import { UpdateDomainEntryOutput } from "./types/UpdateDomainEntryOutput";
import { UpdateLoadBalancerAttributeInput } from "./types/UpdateLoadBalancerAttributeInput";
import { UpdateLoadBalancerAttributeOutput } from "./types/UpdateLoadBalancerAttributeOutput";
import { UpdateRelationalDatabaseInput } from "./types/UpdateRelationalDatabaseInput";
import { UpdateRelationalDatabaseOutput } from "./types/UpdateRelationalDatabaseOutput";
import { UpdateRelationalDatabaseParametersInput } from "./types/UpdateRelationalDatabaseParametersInput";
import { UpdateRelationalDatabaseParametersOutput } from "./types/UpdateRelationalDatabaseParametersOutput";
import { AllocateStaticIpCommand } from "./commands/AllocateStaticIpCommand";
import { AttachDiskCommand } from "./commands/AttachDiskCommand";
import { AttachInstancesToLoadBalancerCommand } from "./commands/AttachInstancesToLoadBalancerCommand";
import { AttachLoadBalancerTlsCertificateCommand } from "./commands/AttachLoadBalancerTlsCertificateCommand";
import { AttachStaticIpCommand } from "./commands/AttachStaticIpCommand";
import { CloseInstancePublicPortsCommand } from "./commands/CloseInstancePublicPortsCommand";
import { CopySnapshotCommand } from "./commands/CopySnapshotCommand";
import { CreateCloudFormationStackCommand } from "./commands/CreateCloudFormationStackCommand";
import { CreateDiskCommand } from "./commands/CreateDiskCommand";
import { CreateDiskFromSnapshotCommand } from "./commands/CreateDiskFromSnapshotCommand";
import { CreateDiskSnapshotCommand } from "./commands/CreateDiskSnapshotCommand";
import { CreateDomainCommand } from "./commands/CreateDomainCommand";
import { CreateDomainEntryCommand } from "./commands/CreateDomainEntryCommand";
import { CreateInstanceSnapshotCommand } from "./commands/CreateInstanceSnapshotCommand";
import { CreateInstancesCommand } from "./commands/CreateInstancesCommand";
import { CreateInstancesFromSnapshotCommand } from "./commands/CreateInstancesFromSnapshotCommand";
import { CreateKeyPairCommand } from "./commands/CreateKeyPairCommand";
import { CreateLoadBalancerCommand } from "./commands/CreateLoadBalancerCommand";
import { CreateLoadBalancerTlsCertificateCommand } from "./commands/CreateLoadBalancerTlsCertificateCommand";
import { CreateRelationalDatabaseCommand } from "./commands/CreateRelationalDatabaseCommand";
import { CreateRelationalDatabaseFromSnapshotCommand } from "./commands/CreateRelationalDatabaseFromSnapshotCommand";
import { CreateRelationalDatabaseSnapshotCommand } from "./commands/CreateRelationalDatabaseSnapshotCommand";
import { DeleteDiskCommand } from "./commands/DeleteDiskCommand";
import { DeleteDiskSnapshotCommand } from "./commands/DeleteDiskSnapshotCommand";
import { DeleteDomainCommand } from "./commands/DeleteDomainCommand";
import { DeleteDomainEntryCommand } from "./commands/DeleteDomainEntryCommand";
import { DeleteInstanceCommand } from "./commands/DeleteInstanceCommand";
import { DeleteInstanceSnapshotCommand } from "./commands/DeleteInstanceSnapshotCommand";
import { DeleteKeyPairCommand } from "./commands/DeleteKeyPairCommand";
import { DeleteKnownHostKeysCommand } from "./commands/DeleteKnownHostKeysCommand";
import { DeleteLoadBalancerCommand } from "./commands/DeleteLoadBalancerCommand";
import { DeleteLoadBalancerTlsCertificateCommand } from "./commands/DeleteLoadBalancerTlsCertificateCommand";
import { DeleteRelationalDatabaseCommand } from "./commands/DeleteRelationalDatabaseCommand";
import { DeleteRelationalDatabaseSnapshotCommand } from "./commands/DeleteRelationalDatabaseSnapshotCommand";
import { DetachDiskCommand } from "./commands/DetachDiskCommand";
import { DetachInstancesFromLoadBalancerCommand } from "./commands/DetachInstancesFromLoadBalancerCommand";
import { DetachStaticIpCommand } from "./commands/DetachStaticIpCommand";
import { DownloadDefaultKeyPairCommand } from "./commands/DownloadDefaultKeyPairCommand";
import { ExportSnapshotCommand } from "./commands/ExportSnapshotCommand";
import { GetActiveNamesCommand } from "./commands/GetActiveNamesCommand";
import { GetBlueprintsCommand } from "./commands/GetBlueprintsCommand";
import { GetBundlesCommand } from "./commands/GetBundlesCommand";
import { GetCloudFormationStackRecordsCommand } from "./commands/GetCloudFormationStackRecordsCommand";
import { GetDiskCommand } from "./commands/GetDiskCommand";
import { GetDiskSnapshotCommand } from "./commands/GetDiskSnapshotCommand";
import { GetDiskSnapshotsCommand } from "./commands/GetDiskSnapshotsCommand";
import { GetDisksCommand } from "./commands/GetDisksCommand";
import { GetDomainCommand } from "./commands/GetDomainCommand";
import { GetDomainsCommand } from "./commands/GetDomainsCommand";
import { GetExportSnapshotRecordsCommand } from "./commands/GetExportSnapshotRecordsCommand";
import { GetInstanceAccessDetailsCommand } from "./commands/GetInstanceAccessDetailsCommand";
import { GetInstanceCommand } from "./commands/GetInstanceCommand";
import { GetInstanceMetricDataCommand } from "./commands/GetInstanceMetricDataCommand";
import { GetInstancePortStatesCommand } from "./commands/GetInstancePortStatesCommand";
import { GetInstanceSnapshotCommand } from "./commands/GetInstanceSnapshotCommand";
import { GetInstanceSnapshotsCommand } from "./commands/GetInstanceSnapshotsCommand";
import { GetInstanceStateCommand } from "./commands/GetInstanceStateCommand";
import { GetInstancesCommand } from "./commands/GetInstancesCommand";
import { GetKeyPairCommand } from "./commands/GetKeyPairCommand";
import { GetKeyPairsCommand } from "./commands/GetKeyPairsCommand";
import { GetLoadBalancerCommand } from "./commands/GetLoadBalancerCommand";
import { GetLoadBalancerMetricDataCommand } from "./commands/GetLoadBalancerMetricDataCommand";
import { GetLoadBalancerTlsCertificatesCommand } from "./commands/GetLoadBalancerTlsCertificatesCommand";
import { GetLoadBalancersCommand } from "./commands/GetLoadBalancersCommand";
import { GetOperationCommand } from "./commands/GetOperationCommand";
import { GetOperationsCommand } from "./commands/GetOperationsCommand";
import { GetOperationsForResourceCommand } from "./commands/GetOperationsForResourceCommand";
import { GetRegionsCommand } from "./commands/GetRegionsCommand";
import { GetRelationalDatabaseBlueprintsCommand } from "./commands/GetRelationalDatabaseBlueprintsCommand";
import { GetRelationalDatabaseBundlesCommand } from "./commands/GetRelationalDatabaseBundlesCommand";
import { GetRelationalDatabaseCommand } from "./commands/GetRelationalDatabaseCommand";
import { GetRelationalDatabaseEventsCommand } from "./commands/GetRelationalDatabaseEventsCommand";
import { GetRelationalDatabaseLogEventsCommand } from "./commands/GetRelationalDatabaseLogEventsCommand";
import { GetRelationalDatabaseLogStreamsCommand } from "./commands/GetRelationalDatabaseLogStreamsCommand";
import { GetRelationalDatabaseMasterUserPasswordCommand } from "./commands/GetRelationalDatabaseMasterUserPasswordCommand";
import { GetRelationalDatabaseMetricDataCommand } from "./commands/GetRelationalDatabaseMetricDataCommand";
import { GetRelationalDatabaseParametersCommand } from "./commands/GetRelationalDatabaseParametersCommand";
import { GetRelationalDatabaseSnapshotCommand } from "./commands/GetRelationalDatabaseSnapshotCommand";
import { GetRelationalDatabaseSnapshotsCommand } from "./commands/GetRelationalDatabaseSnapshotsCommand";
import { GetRelationalDatabasesCommand } from "./commands/GetRelationalDatabasesCommand";
import { GetStaticIpCommand } from "./commands/GetStaticIpCommand";
import { GetStaticIpsCommand } from "./commands/GetStaticIpsCommand";
import { ImportKeyPairCommand } from "./commands/ImportKeyPairCommand";
import { IsVpcPeeredCommand } from "./commands/IsVpcPeeredCommand";
import { OpenInstancePublicPortsCommand } from "./commands/OpenInstancePublicPortsCommand";
import { PeerVpcCommand } from "./commands/PeerVpcCommand";
import { PutInstancePublicPortsCommand } from "./commands/PutInstancePublicPortsCommand";
import { RebootInstanceCommand } from "./commands/RebootInstanceCommand";
import { RebootRelationalDatabaseCommand } from "./commands/RebootRelationalDatabaseCommand";
import { ReleaseStaticIpCommand } from "./commands/ReleaseStaticIpCommand";
import { StartInstanceCommand } from "./commands/StartInstanceCommand";
import { StartRelationalDatabaseCommand } from "./commands/StartRelationalDatabaseCommand";
import { StopInstanceCommand } from "./commands/StopInstanceCommand";
import { StopRelationalDatabaseCommand } from "./commands/StopRelationalDatabaseCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UnpeerVpcCommand } from "./commands/UnpeerVpcCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateDomainEntryCommand } from "./commands/UpdateDomainEntryCommand";
import { UpdateLoadBalancerAttributeCommand } from "./commands/UpdateLoadBalancerAttributeCommand";
import { UpdateRelationalDatabaseCommand } from "./commands/UpdateRelationalDatabaseCommand";
import { UpdateRelationalDatabaseParametersCommand } from "./commands/UpdateRelationalDatabaseParametersCommand";

export class Lightsail extends LightsailClient {
  /**
   * <p>Allocates a static IP address.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public allocateStaticIp(
    args: AllocateStaticIpInput
  ): Promise<AllocateStaticIpOutput>;
  public allocateStaticIp(
    args: AllocateStaticIpInput,
    cb: (err: any, data?: AllocateStaticIpOutput) => void
  ): void;
  public allocateStaticIp(
    args: AllocateStaticIpInput,
    cb?: (err: any, data?: AllocateStaticIpOutput) => void
  ): Promise<AllocateStaticIpOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AllocateStaticIpCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Attaches a block storage disk to a running or stopped Lightsail instance and exposes it to the instance with the specified disk name.</p> <p>The <code>attach disk</code> operation supports tag-based access control via resource tags applied to the resource identified by diskName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public attachDisk(args: AttachDiskInput): Promise<AttachDiskOutput>;
  public attachDisk(
    args: AttachDiskInput,
    cb: (err: any, data?: AttachDiskOutput) => void
  ): void;
  public attachDisk(
    args: AttachDiskInput,
    cb?: (err: any, data?: AttachDiskOutput) => void
  ): Promise<AttachDiskOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AttachDiskCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Attaches one or more Lightsail instances to a load balancer.</p> <p>After some time, the instances are attached to the load balancer and the health check status is available.</p> <p>The <code>attach instances to load balancer</code> operation supports tag-based access control via resource tags applied to the resource identified by loadBalancerName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public attachInstancesToLoadBalancer(
    args: AttachInstancesToLoadBalancerInput
  ): Promise<AttachInstancesToLoadBalancerOutput>;
  public attachInstancesToLoadBalancer(
    args: AttachInstancesToLoadBalancerInput,
    cb: (err: any, data?: AttachInstancesToLoadBalancerOutput) => void
  ): void;
  public attachInstancesToLoadBalancer(
    args: AttachInstancesToLoadBalancerInput,
    cb?: (err: any, data?: AttachInstancesToLoadBalancerOutput) => void
  ): Promise<AttachInstancesToLoadBalancerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AttachInstancesToLoadBalancerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Attaches a Transport Layer Security (TLS) certificate to your load balancer. TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p> <p>Once you create and validate your certificate, you can attach it to your load balancer. You can also use this API to rotate the certificates on your account. Use the <code>AttachLoadBalancerTlsCertificate</code> operation with the non-attached certificate, and it will replace the existing one and become the attached certificate.</p> <p>The <code>attach load balancer tls certificate</code> operation supports tag-based access control via resource tags applied to the resource identified by loadBalancerName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public attachLoadBalancerTlsCertificate(
    args: AttachLoadBalancerTlsCertificateInput
  ): Promise<AttachLoadBalancerTlsCertificateOutput>;
  public attachLoadBalancerTlsCertificate(
    args: AttachLoadBalancerTlsCertificateInput,
    cb: (err: any, data?: AttachLoadBalancerTlsCertificateOutput) => void
  ): void;
  public attachLoadBalancerTlsCertificate(
    args: AttachLoadBalancerTlsCertificateInput,
    cb?: (err: any, data?: AttachLoadBalancerTlsCertificateOutput) => void
  ): Promise<AttachLoadBalancerTlsCertificateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AttachLoadBalancerTlsCertificateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Attaches a static IP address to a specific Amazon Lightsail instance.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public attachStaticIp(
    args: AttachStaticIpInput
  ): Promise<AttachStaticIpOutput>;
  public attachStaticIp(
    args: AttachStaticIpInput,
    cb: (err: any, data?: AttachStaticIpOutput) => void
  ): void;
  public attachStaticIp(
    args: AttachStaticIpInput,
    cb?: (err: any, data?: AttachStaticIpOutput) => void
  ): Promise<AttachStaticIpOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AttachStaticIpCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Closes the public ports on a specific Amazon Lightsail instance.</p> <p>The <code>close instance public ports</code> operation supports tag-based access control via resource tags applied to the resource identified by instanceName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public closeInstancePublicPorts(
    args: CloseInstancePublicPortsInput
  ): Promise<CloseInstancePublicPortsOutput>;
  public closeInstancePublicPorts(
    args: CloseInstancePublicPortsInput,
    cb: (err: any, data?: CloseInstancePublicPortsOutput) => void
  ): void;
  public closeInstancePublicPorts(
    args: CloseInstancePublicPortsInput,
    cb?: (err: any, data?: CloseInstancePublicPortsOutput) => void
  ): Promise<CloseInstancePublicPortsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CloseInstancePublicPortsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Copies an instance or disk snapshot from one AWS Region to another in Amazon Lightsail.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public copySnapshot(args: CopySnapshotInput): Promise<CopySnapshotOutput>;
  public copySnapshot(
    args: CopySnapshotInput,
    cb: (err: any, data?: CopySnapshotOutput) => void
  ): void;
  public copySnapshot(
    args: CopySnapshotInput,
    cb?: (err: any, data?: CopySnapshotOutput) => void
  ): Promise<CopySnapshotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CopySnapshotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an AWS CloudFormation stack, which creates a new Amazon EC2 instance from an exported Amazon Lightsail snapshot. This operation results in a CloudFormation stack record that can be used to track the AWS CloudFormation stack created. Use the <code>get cloud formation stack records</code> operation to get a list of the CloudFormation stacks created.</p> <important> <p>Wait until after your new Amazon EC2 instance is created before running the <code>create cloud formation stack</code> operation again with the same export snapshot record.</p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createCloudFormationStack(
    args: CreateCloudFormationStackInput
  ): Promise<CreateCloudFormationStackOutput>;
  public createCloudFormationStack(
    args: CreateCloudFormationStackInput,
    cb: (err: any, data?: CreateCloudFormationStackOutput) => void
  ): void;
  public createCloudFormationStack(
    args: CreateCloudFormationStackInput,
    cb?: (err: any, data?: CreateCloudFormationStackOutput) => void
  ): Promise<CreateCloudFormationStackOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateCloudFormationStackCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a block storage disk that can be attached to a Lightsail instance in the same Availability Zone (e.g., <code>us-east-2a</code>). The disk is created in the regional endpoint that you send the HTTP request to. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/overview/article/understanding-regions-and-availability-zones-in-amazon-lightsail">Regions and Availability Zones in Lightsail</a>.</p> <p>The <code>create disk</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDisk(args: CreateDiskInput): Promise<CreateDiskOutput>;
  public createDisk(
    args: CreateDiskInput,
    cb: (err: any, data?: CreateDiskOutput) => void
  ): void;
  public createDisk(
    args: CreateDiskInput,
    cb?: (err: any, data?: CreateDiskOutput) => void
  ): Promise<CreateDiskOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDiskCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a block storage disk from a disk snapshot that can be attached to a Lightsail instance in the same Availability Zone (e.g., <code>us-east-2a</code>). The disk is created in the regional endpoint that you send the HTTP request to. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/overview/article/understanding-regions-and-availability-zones-in-amazon-lightsail">Regions and Availability Zones in Lightsail</a>.</p> <p>The <code>create disk from snapshot</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by diskSnapshotName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDiskFromSnapshot(
    args: CreateDiskFromSnapshotInput
  ): Promise<CreateDiskFromSnapshotOutput>;
  public createDiskFromSnapshot(
    args: CreateDiskFromSnapshotInput,
    cb: (err: any, data?: CreateDiskFromSnapshotOutput) => void
  ): void;
  public createDiskFromSnapshot(
    args: CreateDiskFromSnapshotInput,
    cb?: (err: any, data?: CreateDiskFromSnapshotOutput) => void
  ): Promise<CreateDiskFromSnapshotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDiskFromSnapshotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a snapshot of a block storage disk. You can use snapshots for backups, to make copies of disks, and to save data before shutting down a Lightsail instance.</p> <p>You can take a snapshot of an attached disk that is in use; however, snapshots only capture data that has been written to your disk at the time the snapshot command is issued. This may exclude any data that has been cached by any applications or the operating system. If you can pause any file systems on the disk long enough to take a snapshot, your snapshot should be complete. Nevertheless, if you cannot pause all file writes to the disk, you should unmount the disk from within the Lightsail instance, issue the create disk snapshot command, and then remount the disk to ensure a consistent and complete snapshot. You may remount and use your disk while the snapshot status is pending.</p> <p>You can also use this operation to create a snapshot of an instance's system volume. You might want to do this, for example, to recover data from the system volume of a botched instance or to create a backup of the system volume like you would for a block storage disk. To create a snapshot of a system volume, just define the <code>instance name</code> parameter when issuing the snapshot command, and a snapshot of the defined instance's system volume will be created. After the snapshot is available, you can create a block storage disk from the snapshot and attach it to a running instance to access the data on the disk.</p> <p>The <code>create disk snapshot</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDiskSnapshot(
    args: CreateDiskSnapshotInput
  ): Promise<CreateDiskSnapshotOutput>;
  public createDiskSnapshot(
    args: CreateDiskSnapshotInput,
    cb: (err: any, data?: CreateDiskSnapshotOutput) => void
  ): void;
  public createDiskSnapshot(
    args: CreateDiskSnapshotInput,
    cb?: (err: any, data?: CreateDiskSnapshotOutput) => void
  ): Promise<CreateDiskSnapshotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDiskSnapshotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a domain resource for the specified domain (e.g., example.com).</p> <p>The <code>create domain</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDomain(args: CreateDomainInput): Promise<CreateDomainOutput>;
  public createDomain(
    args: CreateDomainInput,
    cb: (err: any, data?: CreateDomainOutput) => void
  ): void;
  public createDomain(
    args: CreateDomainInput,
    cb?: (err: any, data?: CreateDomainOutput) => void
  ): Promise<CreateDomainOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDomainCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates one of the following entry records associated with the domain: Address (A), canonical name (CNAME), mail exchanger (MX), name server (NS), start of authority (SOA), service locator (SRV), or text (TXT).</p> <p>The <code>create domain entry</code> operation supports tag-based access control via resource tags applied to the resource identified by domainName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDomainEntry(
    args: CreateDomainEntryInput
  ): Promise<CreateDomainEntryOutput>;
  public createDomainEntry(
    args: CreateDomainEntryInput,
    cb: (err: any, data?: CreateDomainEntryOutput) => void
  ): void;
  public createDomainEntry(
    args: CreateDomainEntryInput,
    cb?: (err: any, data?: CreateDomainEntryOutput) => void
  ): Promise<CreateDomainEntryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDomainEntryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a snapshot of a specific virtual private server, or <i>instance</i>. You can use a snapshot to create a new instance that is based on that snapshot.</p> <p>The <code>create instance snapshot</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createInstanceSnapshot(
    args: CreateInstanceSnapshotInput
  ): Promise<CreateInstanceSnapshotOutput>;
  public createInstanceSnapshot(
    args: CreateInstanceSnapshotInput,
    cb: (err: any, data?: CreateInstanceSnapshotOutput) => void
  ): void;
  public createInstanceSnapshot(
    args: CreateInstanceSnapshotInput,
    cb?: (err: any, data?: CreateInstanceSnapshotOutput) => void
  ): Promise<CreateInstanceSnapshotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateInstanceSnapshotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates one or more Amazon Lightsail virtual private servers, or <i>instances</i>. Create instances using active blueprints. Inactive blueprints are listed to support customers with existing instances but are not necessarily available for launch of new instances. Blueprints are marked inactive when they become outdated due to operating system updates or new application releases. Use the get blueprints operation to return a list of available blueprints.</p> <p>The <code>create instances</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createInstances(
    args: CreateInstancesInput
  ): Promise<CreateInstancesOutput>;
  public createInstances(
    args: CreateInstancesInput,
    cb: (err: any, data?: CreateInstancesOutput) => void
  ): void;
  public createInstances(
    args: CreateInstancesInput,
    cb?: (err: any, data?: CreateInstancesOutput) => void
  ): Promise<CreateInstancesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateInstancesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Uses a specific snapshot as a blueprint for creating one or more new instances that are based on that identical configuration.</p> <p>The <code>create instances from snapshot</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by instanceSnapshotName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createInstancesFromSnapshot(
    args: CreateInstancesFromSnapshotInput
  ): Promise<CreateInstancesFromSnapshotOutput>;
  public createInstancesFromSnapshot(
    args: CreateInstancesFromSnapshotInput,
    cb: (err: any, data?: CreateInstancesFromSnapshotOutput) => void
  ): void;
  public createInstancesFromSnapshot(
    args: CreateInstancesFromSnapshotInput,
    cb?: (err: any, data?: CreateInstancesFromSnapshotOutput) => void
  ): Promise<CreateInstancesFromSnapshotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateInstancesFromSnapshotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an SSH key pair.</p> <p>The <code>create key pair</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createKeyPair(args: CreateKeyPairInput): Promise<CreateKeyPairOutput>;
  public createKeyPair(
    args: CreateKeyPairInput,
    cb: (err: any, data?: CreateKeyPairOutput) => void
  ): void;
  public createKeyPair(
    args: CreateKeyPairInput,
    cb?: (err: any, data?: CreateKeyPairOutput) => void
  ): Promise<CreateKeyPairOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateKeyPairCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a Lightsail load balancer. To learn more about deciding whether to load balance your application, see <a href="https://lightsail.aws.amazon.com/ls/docs/how-to/article/configure-lightsail-instances-for-load-balancing">Configure your Lightsail instances for load balancing</a>. You can create up to 5 load balancers per AWS Region in your account.</p> <p>When you create a load balancer, you can specify a unique name and port settings. To change additional load balancer settings, use the <code>UpdateLoadBalancerAttribute</code> operation.</p> <p>The <code>create load balancer</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createLoadBalancer(
    args: CreateLoadBalancerInput
  ): Promise<CreateLoadBalancerOutput>;
  public createLoadBalancer(
    args: CreateLoadBalancerInput,
    cb: (err: any, data?: CreateLoadBalancerOutput) => void
  ): void;
  public createLoadBalancer(
    args: CreateLoadBalancerInput,
    cb?: (err: any, data?: CreateLoadBalancerOutput) => void
  ): Promise<CreateLoadBalancerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateLoadBalancerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a Lightsail load balancer TLS certificate.</p> <p>TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p> <p>The <code>create load balancer tls certificate</code> operation supports tag-based access control via resource tags applied to the resource identified by loadBalancerName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createLoadBalancerTlsCertificate(
    args: CreateLoadBalancerTlsCertificateInput
  ): Promise<CreateLoadBalancerTlsCertificateOutput>;
  public createLoadBalancerTlsCertificate(
    args: CreateLoadBalancerTlsCertificateInput,
    cb: (err: any, data?: CreateLoadBalancerTlsCertificateOutput) => void
  ): void;
  public createLoadBalancerTlsCertificate(
    args: CreateLoadBalancerTlsCertificateInput,
    cb?: (err: any, data?: CreateLoadBalancerTlsCertificateOutput) => void
  ): Promise<CreateLoadBalancerTlsCertificateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateLoadBalancerTlsCertificateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new database in Amazon Lightsail.</p> <p>The <code>create relational database</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createRelationalDatabase(
    args: CreateRelationalDatabaseInput
  ): Promise<CreateRelationalDatabaseOutput>;
  public createRelationalDatabase(
    args: CreateRelationalDatabaseInput,
    cb: (err: any, data?: CreateRelationalDatabaseOutput) => void
  ): void;
  public createRelationalDatabase(
    args: CreateRelationalDatabaseInput,
    cb?: (err: any, data?: CreateRelationalDatabaseOutput) => void
  ): Promise<CreateRelationalDatabaseOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateRelationalDatabaseCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new database from an existing database snapshot in Amazon Lightsail.</p> <p>You can create a new database from a snapshot in if something goes wrong with your original database, or to change it to a different plan, such as a high availability or standard plan.</p> <p>The <code>create relational database from snapshot</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by relationalDatabaseSnapshotName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createRelationalDatabaseFromSnapshot(
    args: CreateRelationalDatabaseFromSnapshotInput
  ): Promise<CreateRelationalDatabaseFromSnapshotOutput>;
  public createRelationalDatabaseFromSnapshot(
    args: CreateRelationalDatabaseFromSnapshotInput,
    cb: (err: any, data?: CreateRelationalDatabaseFromSnapshotOutput) => void
  ): void;
  public createRelationalDatabaseFromSnapshot(
    args: CreateRelationalDatabaseFromSnapshotInput,
    cb?: (err: any, data?: CreateRelationalDatabaseFromSnapshotOutput) => void
  ): Promise<CreateRelationalDatabaseFromSnapshotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateRelationalDatabaseFromSnapshotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a snapshot of your database in Amazon Lightsail. You can use snapshots for backups, to make copies of a database, and to save data before deleting a database.</p> <p>The <code>create relational database snapshot</code> operation supports tag-based access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createRelationalDatabaseSnapshot(
    args: CreateRelationalDatabaseSnapshotInput
  ): Promise<CreateRelationalDatabaseSnapshotOutput>;
  public createRelationalDatabaseSnapshot(
    args: CreateRelationalDatabaseSnapshotInput,
    cb: (err: any, data?: CreateRelationalDatabaseSnapshotOutput) => void
  ): void;
  public createRelationalDatabaseSnapshot(
    args: CreateRelationalDatabaseSnapshotInput,
    cb?: (err: any, data?: CreateRelationalDatabaseSnapshotOutput) => void
  ): Promise<CreateRelationalDatabaseSnapshotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateRelationalDatabaseSnapshotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified block storage disk. The disk must be in the <code>available</code> state (not attached to a Lightsail instance).</p> <note> <p>The disk may remain in the <code>deleting</code> state for several minutes.</p> </note> <p>The <code>delete disk</code> operation supports tag-based access control via resource tags applied to the resource identified by diskName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDisk(args: DeleteDiskInput): Promise<DeleteDiskOutput>;
  public deleteDisk(
    args: DeleteDiskInput,
    cb: (err: any, data?: DeleteDiskOutput) => void
  ): void;
  public deleteDisk(
    args: DeleteDiskInput,
    cb?: (err: any, data?: DeleteDiskOutput) => void
  ): Promise<DeleteDiskOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDiskCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified disk snapshot.</p> <p>When you make periodic snapshots of a disk, the snapshots are incremental, and only the blocks on the device that have changed since your last snapshot are saved in the new snapshot. When you delete a snapshot, only the data not needed for any other snapshot is removed. So regardless of which prior snapshots have been deleted, all active snapshots will have access to all the information needed to restore the disk.</p> <p>The <code>delete disk snapshot</code> operation supports tag-based access control via resource tags applied to the resource identified by diskSnapshotName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDiskSnapshot(
    args: DeleteDiskSnapshotInput
  ): Promise<DeleteDiskSnapshotOutput>;
  public deleteDiskSnapshot(
    args: DeleteDiskSnapshotInput,
    cb: (err: any, data?: DeleteDiskSnapshotOutput) => void
  ): void;
  public deleteDiskSnapshot(
    args: DeleteDiskSnapshotInput,
    cb?: (err: any, data?: DeleteDiskSnapshotOutput) => void
  ): Promise<DeleteDiskSnapshotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDiskSnapshotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified domain recordset and all of its domain records.</p> <p>The <code>delete domain</code> operation supports tag-based access control via resource tags applied to the resource identified by domainName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDomain(args: DeleteDomainInput): Promise<DeleteDomainOutput>;
  public deleteDomain(
    args: DeleteDomainInput,
    cb: (err: any, data?: DeleteDomainOutput) => void
  ): void;
  public deleteDomain(
    args: DeleteDomainInput,
    cb?: (err: any, data?: DeleteDomainOutput) => void
  ): Promise<DeleteDomainOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDomainCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a specific domain entry.</p> <p>The <code>delete domain entry</code> operation supports tag-based access control via resource tags applied to the resource identified by domainName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDomainEntry(
    args: DeleteDomainEntryInput
  ): Promise<DeleteDomainEntryOutput>;
  public deleteDomainEntry(
    args: DeleteDomainEntryInput,
    cb: (err: any, data?: DeleteDomainEntryOutput) => void
  ): void;
  public deleteDomainEntry(
    args: DeleteDomainEntryInput,
    cb?: (err: any, data?: DeleteDomainEntryOutput) => void
  ): Promise<DeleteDomainEntryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDomainEntryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a specific Amazon Lightsail virtual private server, or <i>instance</i>.</p> <p>The <code>delete instance</code> operation supports tag-based access control via resource tags applied to the resource identified by instanceName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteInstance(
    args: DeleteInstanceInput
  ): Promise<DeleteInstanceOutput>;
  public deleteInstance(
    args: DeleteInstanceInput,
    cb: (err: any, data?: DeleteInstanceOutput) => void
  ): void;
  public deleteInstance(
    args: DeleteInstanceInput,
    cb?: (err: any, data?: DeleteInstanceOutput) => void
  ): Promise<DeleteInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a specific snapshot of a virtual private server (or <i>instance</i>).</p> <p>The <code>delete instance snapshot</code> operation supports tag-based access control via resource tags applied to the resource identified by instanceSnapshotName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteInstanceSnapshot(
    args: DeleteInstanceSnapshotInput
  ): Promise<DeleteInstanceSnapshotOutput>;
  public deleteInstanceSnapshot(
    args: DeleteInstanceSnapshotInput,
    cb: (err: any, data?: DeleteInstanceSnapshotOutput) => void
  ): void;
  public deleteInstanceSnapshot(
    args: DeleteInstanceSnapshotInput,
    cb?: (err: any, data?: DeleteInstanceSnapshotOutput) => void
  ): Promise<DeleteInstanceSnapshotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteInstanceSnapshotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a specific SSH key pair.</p> <p>The <code>delete key pair</code> operation supports tag-based access control via resource tags applied to the resource identified by keyPairName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteKeyPair(args: DeleteKeyPairInput): Promise<DeleteKeyPairOutput>;
  public deleteKeyPair(
    args: DeleteKeyPairInput,
    cb: (err: any, data?: DeleteKeyPairOutput) => void
  ): void;
  public deleteKeyPair(
    args: DeleteKeyPairInput,
    cb?: (err: any, data?: DeleteKeyPairOutput) => void
  ): Promise<DeleteKeyPairOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteKeyPairCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the known host key or certificate used by the Amazon Lightsail browser-based SSH or RDP clients to authenticate an instance. This operation enables the Lightsail browser-based SSH or RDP clients to connect to the instance after a host key mismatch.</p> <important> <p>Perform this operation only if you were expecting the host key or certificate mismatch or if you are familiar with the new host key or certificate on the instance. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-troubleshooting-browser-based-ssh-rdp-client-connection">Troubleshooting connection issues when using the Amazon Lightsail browser-based SSH or RDP client</a>.</p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteKnownHostKeys(
    args: DeleteKnownHostKeysInput
  ): Promise<DeleteKnownHostKeysOutput>;
  public deleteKnownHostKeys(
    args: DeleteKnownHostKeysInput,
    cb: (err: any, data?: DeleteKnownHostKeysOutput) => void
  ): void;
  public deleteKnownHostKeys(
    args: DeleteKnownHostKeysInput,
    cb?: (err: any, data?: DeleteKnownHostKeysOutput) => void
  ): Promise<DeleteKnownHostKeysOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteKnownHostKeysCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a Lightsail load balancer and all its associated SSL/TLS certificates. Once the load balancer is deleted, you will need to create a new load balancer, create a new certificate, and verify domain ownership again.</p> <p>The <code>delete load balancer</code> operation supports tag-based access control via resource tags applied to the resource identified by loadBalancerName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteLoadBalancer(
    args: DeleteLoadBalancerInput
  ): Promise<DeleteLoadBalancerOutput>;
  public deleteLoadBalancer(
    args: DeleteLoadBalancerInput,
    cb: (err: any, data?: DeleteLoadBalancerOutput) => void
  ): void;
  public deleteLoadBalancer(
    args: DeleteLoadBalancerInput,
    cb?: (err: any, data?: DeleteLoadBalancerOutput) => void
  ): Promise<DeleteLoadBalancerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteLoadBalancerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an SSL/TLS certificate associated with a Lightsail load balancer.</p> <p>The <code>delete load balancer tls certificate</code> operation supports tag-based access control via resource tags applied to the resource identified by loadBalancerName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteLoadBalancerTlsCertificate(
    args: DeleteLoadBalancerTlsCertificateInput
  ): Promise<DeleteLoadBalancerTlsCertificateOutput>;
  public deleteLoadBalancerTlsCertificate(
    args: DeleteLoadBalancerTlsCertificateInput,
    cb: (err: any, data?: DeleteLoadBalancerTlsCertificateOutput) => void
  ): void;
  public deleteLoadBalancerTlsCertificate(
    args: DeleteLoadBalancerTlsCertificateInput,
    cb?: (err: any, data?: DeleteLoadBalancerTlsCertificateOutput) => void
  ): Promise<DeleteLoadBalancerTlsCertificateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteLoadBalancerTlsCertificateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a database in Amazon Lightsail.</p> <p>The <code>delete relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteRelationalDatabase(
    args: DeleteRelationalDatabaseInput
  ): Promise<DeleteRelationalDatabaseOutput>;
  public deleteRelationalDatabase(
    args: DeleteRelationalDatabaseInput,
    cb: (err: any, data?: DeleteRelationalDatabaseOutput) => void
  ): void;
  public deleteRelationalDatabase(
    args: DeleteRelationalDatabaseInput,
    cb?: (err: any, data?: DeleteRelationalDatabaseOutput) => void
  ): Promise<DeleteRelationalDatabaseOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteRelationalDatabaseCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a database snapshot in Amazon Lightsail.</p> <p>The <code>delete relational database snapshot</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteRelationalDatabaseSnapshot(
    args: DeleteRelationalDatabaseSnapshotInput
  ): Promise<DeleteRelationalDatabaseSnapshotOutput>;
  public deleteRelationalDatabaseSnapshot(
    args: DeleteRelationalDatabaseSnapshotInput,
    cb: (err: any, data?: DeleteRelationalDatabaseSnapshotOutput) => void
  ): void;
  public deleteRelationalDatabaseSnapshot(
    args: DeleteRelationalDatabaseSnapshotInput,
    cb?: (err: any, data?: DeleteRelationalDatabaseSnapshotOutput) => void
  ): Promise<DeleteRelationalDatabaseSnapshotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteRelationalDatabaseSnapshotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Detaches a stopped block storage disk from a Lightsail instance. Make sure to unmount any file systems on the device within your operating system before stopping the instance and detaching the disk.</p> <p>The <code>detach disk</code> operation supports tag-based access control via resource tags applied to the resource identified by diskName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public detachDisk(args: DetachDiskInput): Promise<DetachDiskOutput>;
  public detachDisk(
    args: DetachDiskInput,
    cb: (err: any, data?: DetachDiskOutput) => void
  ): void;
  public detachDisk(
    args: DetachDiskInput,
    cb?: (err: any, data?: DetachDiskOutput) => void
  ): Promise<DetachDiskOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DetachDiskCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Detaches the specified instances from a Lightsail load balancer.</p> <p>This operation waits until the instances are no longer needed before they are detached from the load balancer.</p> <p>The <code>detach instances from load balancer</code> operation supports tag-based access control via resource tags applied to the resource identified by loadBalancerName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public detachInstancesFromLoadBalancer(
    args: DetachInstancesFromLoadBalancerInput
  ): Promise<DetachInstancesFromLoadBalancerOutput>;
  public detachInstancesFromLoadBalancer(
    args: DetachInstancesFromLoadBalancerInput,
    cb: (err: any, data?: DetachInstancesFromLoadBalancerOutput) => void
  ): void;
  public detachInstancesFromLoadBalancer(
    args: DetachInstancesFromLoadBalancerInput,
    cb?: (err: any, data?: DetachInstancesFromLoadBalancerOutput) => void
  ): Promise<DetachInstancesFromLoadBalancerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DetachInstancesFromLoadBalancerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Detaches a static IP from the Amazon Lightsail instance to which it is attached.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public detachStaticIp(
    args: DetachStaticIpInput
  ): Promise<DetachStaticIpOutput>;
  public detachStaticIp(
    args: DetachStaticIpInput,
    cb: (err: any, data?: DetachStaticIpOutput) => void
  ): void;
  public detachStaticIp(
    args: DetachStaticIpInput,
    cb?: (err: any, data?: DetachStaticIpOutput) => void
  ): Promise<DetachStaticIpOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DetachStaticIpCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Downloads the default SSH key pair from the user's account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public downloadDefaultKeyPair(
    args: DownloadDefaultKeyPairInput
  ): Promise<DownloadDefaultKeyPairOutput>;
  public downloadDefaultKeyPair(
    args: DownloadDefaultKeyPairInput,
    cb: (err: any, data?: DownloadDefaultKeyPairOutput) => void
  ): void;
  public downloadDefaultKeyPair(
    args: DownloadDefaultKeyPairInput,
    cb?: (err: any, data?: DownloadDefaultKeyPairOutput) => void
  ): Promise<DownloadDefaultKeyPairOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DownloadDefaultKeyPairCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Exports an Amazon Lightsail instance or block storage disk snapshot to Amazon Elastic Compute Cloud (Amazon EC2). This operation results in an export snapshot record that can be used with the <code>create cloud formation stack</code> operation to create new Amazon EC2 instances.</p> <p>Exported instance snapshots appear in Amazon EC2 as Amazon Machine Images (AMIs), and the instance system disk appears as an Amazon Elastic Block Store (Amazon EBS) volume. Exported disk snapshots appear in Amazon EC2 as Amazon EBS volumes. Snapshots are exported to the same Amazon Web Services Region in Amazon EC2 as the source Lightsail snapshot.</p> <p/> <p>The <code>export snapshot</code> operation supports tag-based access control via resource tags applied to the resource identified by sourceSnapshotName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p> <note> <p>Use the <code>get instance snapshots</code> or <code>get disk snapshots</code> operations to get a list of snapshots that you can export to Amazon EC2.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public exportSnapshot(
    args: ExportSnapshotInput
  ): Promise<ExportSnapshotOutput>;
  public exportSnapshot(
    args: ExportSnapshotInput,
    cb: (err: any, data?: ExportSnapshotOutput) => void
  ): void;
  public exportSnapshot(
    args: ExportSnapshotInput,
    cb?: (err: any, data?: ExportSnapshotOutput) => void
  ): Promise<ExportSnapshotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ExportSnapshotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the names of all active (not deleted) resources.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getActiveNames(
    args: GetActiveNamesInput
  ): Promise<GetActiveNamesOutput>;
  public getActiveNames(
    args: GetActiveNamesInput,
    cb: (err: any, data?: GetActiveNamesOutput) => void
  ): void;
  public getActiveNames(
    args: GetActiveNamesInput,
    cb?: (err: any, data?: GetActiveNamesOutput) => void
  ): Promise<GetActiveNamesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetActiveNamesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the list of available instance images, or <i>blueprints</i>. You can use a blueprint to create a new virtual private server already running a specific operating system, as well as a preinstalled app or development stack. The software each instance is running depends on the blueprint image you choose.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getBlueprints(args: GetBlueprintsInput): Promise<GetBlueprintsOutput>;
  public getBlueprints(
    args: GetBlueprintsInput,
    cb: (err: any, data?: GetBlueprintsOutput) => void
  ): void;
  public getBlueprints(
    args: GetBlueprintsInput,
    cb?: (err: any, data?: GetBlueprintsOutput) => void
  ): Promise<GetBlueprintsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetBlueprintsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the list of bundles that are available for purchase. A bundle describes the specs for your virtual private server (or <i>instance</i>).</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getBundles(args: GetBundlesInput): Promise<GetBundlesOutput>;
  public getBundles(
    args: GetBundlesInput,
    cb: (err: any, data?: GetBundlesOutput) => void
  ): void;
  public getBundles(
    args: GetBundlesInput,
    cb?: (err: any, data?: GetBundlesOutput) => void
  ): Promise<GetBundlesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetBundlesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the CloudFormation stack record created as a result of the <code>create cloud formation stack</code> operation.</p> <p>An AWS CloudFormation stack is used to create a new Amazon EC2 instance from an exported Lightsail snapshot.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getCloudFormationStackRecords(
    args: GetCloudFormationStackRecordsInput
  ): Promise<GetCloudFormationStackRecordsOutput>;
  public getCloudFormationStackRecords(
    args: GetCloudFormationStackRecordsInput,
    cb: (err: any, data?: GetCloudFormationStackRecordsOutput) => void
  ): void;
  public getCloudFormationStackRecords(
    args: GetCloudFormationStackRecordsInput,
    cb?: (err: any, data?: GetCloudFormationStackRecordsOutput) => void
  ): Promise<GetCloudFormationStackRecordsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetCloudFormationStackRecordsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about a specific block storage disk.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDisk(args: GetDiskInput): Promise<GetDiskOutput>;
  public getDisk(
    args: GetDiskInput,
    cb: (err: any, data?: GetDiskOutput) => void
  ): void;
  public getDisk(
    args: GetDiskInput,
    cb?: (err: any, data?: GetDiskOutput) => void
  ): Promise<GetDiskOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDiskCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about a specific block storage disk snapshot.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDiskSnapshot(
    args: GetDiskSnapshotInput
  ): Promise<GetDiskSnapshotOutput>;
  public getDiskSnapshot(
    args: GetDiskSnapshotInput,
    cb: (err: any, data?: GetDiskSnapshotOutput) => void
  ): void;
  public getDiskSnapshot(
    args: GetDiskSnapshotInput,
    cb?: (err: any, data?: GetDiskSnapshotOutput) => void
  ): Promise<GetDiskSnapshotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDiskSnapshotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about all block storage disk snapshots in your AWS account and region.</p> <p>If you are describing a long list of disk snapshots, you can paginate the output to make the list more manageable. You can use the pageToken and nextPageToken values to retrieve the next items in the list.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDiskSnapshots(
    args: GetDiskSnapshotsInput
  ): Promise<GetDiskSnapshotsOutput>;
  public getDiskSnapshots(
    args: GetDiskSnapshotsInput,
    cb: (err: any, data?: GetDiskSnapshotsOutput) => void
  ): void;
  public getDiskSnapshots(
    args: GetDiskSnapshotsInput,
    cb?: (err: any, data?: GetDiskSnapshotsOutput) => void
  ): Promise<GetDiskSnapshotsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDiskSnapshotsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about all block storage disks in your AWS account and region.</p> <p>If you are describing a long list of disks, you can paginate the output to make the list more manageable. You can use the pageToken and nextPageToken values to retrieve the next items in the list.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDisks(args: GetDisksInput): Promise<GetDisksOutput>;
  public getDisks(
    args: GetDisksInput,
    cb: (err: any, data?: GetDisksOutput) => void
  ): void;
  public getDisks(
    args: GetDisksInput,
    cb?: (err: any, data?: GetDisksOutput) => void
  ): Promise<GetDisksOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDisksCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about a specific domain recordset.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDomain(args: GetDomainInput): Promise<GetDomainOutput>;
  public getDomain(
    args: GetDomainInput,
    cb: (err: any, data?: GetDomainOutput) => void
  ): void;
  public getDomain(
    args: GetDomainInput,
    cb?: (err: any, data?: GetDomainOutput) => void
  ): Promise<GetDomainOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDomainCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of all domains in the user's account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDomains(args: GetDomainsInput): Promise<GetDomainsOutput>;
  public getDomains(
    args: GetDomainsInput,
    cb: (err: any, data?: GetDomainsOutput) => void
  ): void;
  public getDomains(
    args: GetDomainsInput,
    cb?: (err: any, data?: GetDomainsOutput) => void
  ): Promise<GetDomainsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDomainsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the export snapshot record created as a result of the <code>export snapshot</code> operation.</p> <p>An export snapshot record can be used to create a new Amazon EC2 instance and its related resources with the <code>create cloud formation stack</code> operation.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getExportSnapshotRecords(
    args: GetExportSnapshotRecordsInput
  ): Promise<GetExportSnapshotRecordsOutput>;
  public getExportSnapshotRecords(
    args: GetExportSnapshotRecordsInput,
    cb: (err: any, data?: GetExportSnapshotRecordsOutput) => void
  ): void;
  public getExportSnapshotRecords(
    args: GetExportSnapshotRecordsInput,
    cb?: (err: any, data?: GetExportSnapshotRecordsOutput) => void
  ): Promise<GetExportSnapshotRecordsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetExportSnapshotRecordsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about a specific Amazon Lightsail instance, which is a virtual private server.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getInstance(args: GetInstanceInput): Promise<GetInstanceOutput>;
  public getInstance(
    args: GetInstanceInput,
    cb: (err: any, data?: GetInstanceOutput) => void
  ): void;
  public getInstance(
    args: GetInstanceInput,
    cb?: (err: any, data?: GetInstanceOutput) => void
  ): Promise<GetInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns temporary SSH keys you can use to connect to a specific virtual private server, or <i>instance</i>.</p> <p>The <code>get instance access details</code> operation supports tag-based access control via resource tags applied to the resource identified by instanceName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getInstanceAccessDetails(
    args: GetInstanceAccessDetailsInput
  ): Promise<GetInstanceAccessDetailsOutput>;
  public getInstanceAccessDetails(
    args: GetInstanceAccessDetailsInput,
    cb: (err: any, data?: GetInstanceAccessDetailsOutput) => void
  ): void;
  public getInstanceAccessDetails(
    args: GetInstanceAccessDetailsInput,
    cb?: (err: any, data?: GetInstanceAccessDetailsOutput) => void
  ): Promise<GetInstanceAccessDetailsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetInstanceAccessDetailsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the data points for the specified Amazon Lightsail instance metric, given an instance name.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getInstanceMetricData(
    args: GetInstanceMetricDataInput
  ): Promise<GetInstanceMetricDataOutput>;
  public getInstanceMetricData(
    args: GetInstanceMetricDataInput,
    cb: (err: any, data?: GetInstanceMetricDataOutput) => void
  ): void;
  public getInstanceMetricData(
    args: GetInstanceMetricDataInput,
    cb?: (err: any, data?: GetInstanceMetricDataOutput) => void
  ): Promise<GetInstanceMetricDataOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetInstanceMetricDataCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the port states for a specific virtual private server, or <i>instance</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getInstancePortStates(
    args: GetInstancePortStatesInput
  ): Promise<GetInstancePortStatesOutput>;
  public getInstancePortStates(
    args: GetInstancePortStatesInput,
    cb: (err: any, data?: GetInstancePortStatesOutput) => void
  ): void;
  public getInstancePortStates(
    args: GetInstancePortStatesInput,
    cb?: (err: any, data?: GetInstancePortStatesOutput) => void
  ): Promise<GetInstancePortStatesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetInstancePortStatesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about a specific instance snapshot.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getInstanceSnapshot(
    args: GetInstanceSnapshotInput
  ): Promise<GetInstanceSnapshotOutput>;
  public getInstanceSnapshot(
    args: GetInstanceSnapshotInput,
    cb: (err: any, data?: GetInstanceSnapshotOutput) => void
  ): void;
  public getInstanceSnapshot(
    args: GetInstanceSnapshotInput,
    cb?: (err: any, data?: GetInstanceSnapshotOutput) => void
  ): Promise<GetInstanceSnapshotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetInstanceSnapshotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns all instance snapshots for the user's account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getInstanceSnapshots(
    args: GetInstanceSnapshotsInput
  ): Promise<GetInstanceSnapshotsOutput>;
  public getInstanceSnapshots(
    args: GetInstanceSnapshotsInput,
    cb: (err: any, data?: GetInstanceSnapshotsOutput) => void
  ): void;
  public getInstanceSnapshots(
    args: GetInstanceSnapshotsInput,
    cb?: (err: any, data?: GetInstanceSnapshotsOutput) => void
  ): Promise<GetInstanceSnapshotsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetInstanceSnapshotsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the state of a specific instance. Works on one instance at a time.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getInstanceState(
    args: GetInstanceStateInput
  ): Promise<GetInstanceStateOutput>;
  public getInstanceState(
    args: GetInstanceStateInput,
    cb: (err: any, data?: GetInstanceStateOutput) => void
  ): void;
  public getInstanceState(
    args: GetInstanceStateInput,
    cb?: (err: any, data?: GetInstanceStateOutput) => void
  ): Promise<GetInstanceStateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetInstanceStateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about all Amazon Lightsail virtual private servers, or <i>instances</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getInstances(args: GetInstancesInput): Promise<GetInstancesOutput>;
  public getInstances(
    args: GetInstancesInput,
    cb: (err: any, data?: GetInstancesOutput) => void
  ): void;
  public getInstances(
    args: GetInstancesInput,
    cb?: (err: any, data?: GetInstancesOutput) => void
  ): Promise<GetInstancesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetInstancesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about a specific key pair.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getKeyPair(args: GetKeyPairInput): Promise<GetKeyPairOutput>;
  public getKeyPair(
    args: GetKeyPairInput,
    cb: (err: any, data?: GetKeyPairOutput) => void
  ): void;
  public getKeyPair(
    args: GetKeyPairInput,
    cb?: (err: any, data?: GetKeyPairOutput) => void
  ): Promise<GetKeyPairOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetKeyPairCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about all key pairs in the user's account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getKeyPairs(args: GetKeyPairsInput): Promise<GetKeyPairsOutput>;
  public getKeyPairs(
    args: GetKeyPairsInput,
    cb: (err: any, data?: GetKeyPairsOutput) => void
  ): void;
  public getKeyPairs(
    args: GetKeyPairsInput,
    cb?: (err: any, data?: GetKeyPairsOutput) => void
  ): Promise<GetKeyPairsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetKeyPairsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about the specified Lightsail load balancer.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getLoadBalancer(
    args: GetLoadBalancerInput
  ): Promise<GetLoadBalancerOutput>;
  public getLoadBalancer(
    args: GetLoadBalancerInput,
    cb: (err: any, data?: GetLoadBalancerOutput) => void
  ): void;
  public getLoadBalancer(
    args: GetLoadBalancerInput,
    cb?: (err: any, data?: GetLoadBalancerOutput) => void
  ): Promise<GetLoadBalancerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetLoadBalancerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about health metrics for your Lightsail load balancer.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getLoadBalancerMetricData(
    args: GetLoadBalancerMetricDataInput
  ): Promise<GetLoadBalancerMetricDataOutput>;
  public getLoadBalancerMetricData(
    args: GetLoadBalancerMetricDataInput,
    cb: (err: any, data?: GetLoadBalancerMetricDataOutput) => void
  ): void;
  public getLoadBalancerMetricData(
    args: GetLoadBalancerMetricDataInput,
    cb?: (err: any, data?: GetLoadBalancerMetricDataOutput) => void
  ): Promise<GetLoadBalancerMetricDataOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetLoadBalancerMetricDataCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about the TLS certificates that are associated with the specified Lightsail load balancer.</p> <p>TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p> <p>You can have a maximum of 2 certificates associated with a Lightsail load balancer. One is active and the other is inactive.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getLoadBalancerTlsCertificates(
    args: GetLoadBalancerTlsCertificatesInput
  ): Promise<GetLoadBalancerTlsCertificatesOutput>;
  public getLoadBalancerTlsCertificates(
    args: GetLoadBalancerTlsCertificatesInput,
    cb: (err: any, data?: GetLoadBalancerTlsCertificatesOutput) => void
  ): void;
  public getLoadBalancerTlsCertificates(
    args: GetLoadBalancerTlsCertificatesInput,
    cb?: (err: any, data?: GetLoadBalancerTlsCertificatesOutput) => void
  ): Promise<GetLoadBalancerTlsCertificatesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetLoadBalancerTlsCertificatesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about all load balancers in an account.</p> <p>If you are describing a long list of load balancers, you can paginate the output to make the list more manageable. You can use the pageToken and nextPageToken values to retrieve the next items in the list.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getLoadBalancers(
    args: GetLoadBalancersInput
  ): Promise<GetLoadBalancersOutput>;
  public getLoadBalancers(
    args: GetLoadBalancersInput,
    cb: (err: any, data?: GetLoadBalancersOutput) => void
  ): void;
  public getLoadBalancers(
    args: GetLoadBalancersInput,
    cb?: (err: any, data?: GetLoadBalancersOutput) => void
  ): Promise<GetLoadBalancersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetLoadBalancersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about a specific operation. Operations include events such as when you create an instance, allocate a static IP, attach a static IP, and so on.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getOperation(args: GetOperationInput): Promise<GetOperationOutput>;
  public getOperation(
    args: GetOperationInput,
    cb: (err: any, data?: GetOperationOutput) => void
  ): void;
  public getOperation(
    args: GetOperationInput,
    cb?: (err: any, data?: GetOperationOutput) => void
  ): Promise<GetOperationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetOperationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about all operations.</p> <p>Results are returned from oldest to newest, up to a maximum of 200. Results can be paged by making each subsequent call to <code>GetOperations</code> use the maximum (last) <code>statusChangedAt</code> value from the previous request.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getOperations(args: GetOperationsInput): Promise<GetOperationsOutput>;
  public getOperations(
    args: GetOperationsInput,
    cb: (err: any, data?: GetOperationsOutput) => void
  ): void;
  public getOperations(
    args: GetOperationsInput,
    cb?: (err: any, data?: GetOperationsOutput) => void
  ): Promise<GetOperationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetOperationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets operations for a specific resource (e.g., an instance or a static IP).</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getOperationsForResource(
    args: GetOperationsForResourceInput
  ): Promise<GetOperationsForResourceOutput>;
  public getOperationsForResource(
    args: GetOperationsForResourceInput,
    cb: (err: any, data?: GetOperationsForResourceOutput) => void
  ): void;
  public getOperationsForResource(
    args: GetOperationsForResourceInput,
    cb?: (err: any, data?: GetOperationsForResourceOutput) => void
  ): Promise<GetOperationsForResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetOperationsForResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of all valid regions for Amazon Lightsail. Use the <code>include availability zones</code> parameter to also return the Availability Zones in a region.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getRegions(args: GetRegionsInput): Promise<GetRegionsOutput>;
  public getRegions(
    args: GetRegionsInput,
    cb: (err: any, data?: GetRegionsOutput) => void
  ): void;
  public getRegions(
    args: GetRegionsInput,
    cb?: (err: any, data?: GetRegionsOutput) => void
  ): Promise<GetRegionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetRegionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about a specific database in Amazon Lightsail.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getRelationalDatabase(
    args: GetRelationalDatabaseInput
  ): Promise<GetRelationalDatabaseOutput>;
  public getRelationalDatabase(
    args: GetRelationalDatabaseInput,
    cb: (err: any, data?: GetRelationalDatabaseOutput) => void
  ): void;
  public getRelationalDatabase(
    args: GetRelationalDatabaseInput,
    cb?: (err: any, data?: GetRelationalDatabaseOutput) => void
  ): Promise<GetRelationalDatabaseOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetRelationalDatabaseCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of available database blueprints in Amazon Lightsail. A blueprint describes the major engine version of a database.</p> <p>You can use a blueprint ID to create a new database that runs a specific database engine.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getRelationalDatabaseBlueprints(
    args: GetRelationalDatabaseBlueprintsInput
  ): Promise<GetRelationalDatabaseBlueprintsOutput>;
  public getRelationalDatabaseBlueprints(
    args: GetRelationalDatabaseBlueprintsInput,
    cb: (err: any, data?: GetRelationalDatabaseBlueprintsOutput) => void
  ): void;
  public getRelationalDatabaseBlueprints(
    args: GetRelationalDatabaseBlueprintsInput,
    cb?: (err: any, data?: GetRelationalDatabaseBlueprintsOutput) => void
  ): Promise<GetRelationalDatabaseBlueprintsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetRelationalDatabaseBlueprintsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the list of bundles that are available in Amazon Lightsail. A bundle describes the performance specifications for a database.</p> <p>You can use a bundle ID to create a new database with explicit performance specifications.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getRelationalDatabaseBundles(
    args: GetRelationalDatabaseBundlesInput
  ): Promise<GetRelationalDatabaseBundlesOutput>;
  public getRelationalDatabaseBundles(
    args: GetRelationalDatabaseBundlesInput,
    cb: (err: any, data?: GetRelationalDatabaseBundlesOutput) => void
  ): void;
  public getRelationalDatabaseBundles(
    args: GetRelationalDatabaseBundlesInput,
    cb?: (err: any, data?: GetRelationalDatabaseBundlesOutput) => void
  ): Promise<GetRelationalDatabaseBundlesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetRelationalDatabaseBundlesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of events for a specific database in Amazon Lightsail.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getRelationalDatabaseEvents(
    args: GetRelationalDatabaseEventsInput
  ): Promise<GetRelationalDatabaseEventsOutput>;
  public getRelationalDatabaseEvents(
    args: GetRelationalDatabaseEventsInput,
    cb: (err: any, data?: GetRelationalDatabaseEventsOutput) => void
  ): void;
  public getRelationalDatabaseEvents(
    args: GetRelationalDatabaseEventsInput,
    cb?: (err: any, data?: GetRelationalDatabaseEventsOutput) => void
  ): Promise<GetRelationalDatabaseEventsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetRelationalDatabaseEventsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of log events for a database in Amazon Lightsail.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getRelationalDatabaseLogEvents(
    args: GetRelationalDatabaseLogEventsInput
  ): Promise<GetRelationalDatabaseLogEventsOutput>;
  public getRelationalDatabaseLogEvents(
    args: GetRelationalDatabaseLogEventsInput,
    cb: (err: any, data?: GetRelationalDatabaseLogEventsOutput) => void
  ): void;
  public getRelationalDatabaseLogEvents(
    args: GetRelationalDatabaseLogEventsInput,
    cb?: (err: any, data?: GetRelationalDatabaseLogEventsOutput) => void
  ): Promise<GetRelationalDatabaseLogEventsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetRelationalDatabaseLogEventsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of available log streams for a specific database in Amazon Lightsail.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getRelationalDatabaseLogStreams(
    args: GetRelationalDatabaseLogStreamsInput
  ): Promise<GetRelationalDatabaseLogStreamsOutput>;
  public getRelationalDatabaseLogStreams(
    args: GetRelationalDatabaseLogStreamsInput,
    cb: (err: any, data?: GetRelationalDatabaseLogStreamsOutput) => void
  ): void;
  public getRelationalDatabaseLogStreams(
    args: GetRelationalDatabaseLogStreamsInput,
    cb?: (err: any, data?: GetRelationalDatabaseLogStreamsOutput) => void
  ): Promise<GetRelationalDatabaseLogStreamsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetRelationalDatabaseLogStreamsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the current, previous, or pending versions of the master user password for a Lightsail database.</p> <p>The <code>asdf</code> operation GetRelationalDatabaseMasterUserPassword supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getRelationalDatabaseMasterUserPassword(
    args: GetRelationalDatabaseMasterUserPasswordInput
  ): Promise<GetRelationalDatabaseMasterUserPasswordOutput>;
  public getRelationalDatabaseMasterUserPassword(
    args: GetRelationalDatabaseMasterUserPasswordInput,
    cb: (err: any, data?: GetRelationalDatabaseMasterUserPasswordOutput) => void
  ): void;
  public getRelationalDatabaseMasterUserPassword(
    args: GetRelationalDatabaseMasterUserPasswordInput,
    cb?: (
      err: any,
      data?: GetRelationalDatabaseMasterUserPasswordOutput
    ) => void
  ): Promise<GetRelationalDatabaseMasterUserPasswordOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetRelationalDatabaseMasterUserPasswordCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the data points of the specified metric for a database in Amazon Lightsail.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getRelationalDatabaseMetricData(
    args: GetRelationalDatabaseMetricDataInput
  ): Promise<GetRelationalDatabaseMetricDataOutput>;
  public getRelationalDatabaseMetricData(
    args: GetRelationalDatabaseMetricDataInput,
    cb: (err: any, data?: GetRelationalDatabaseMetricDataOutput) => void
  ): void;
  public getRelationalDatabaseMetricData(
    args: GetRelationalDatabaseMetricDataInput,
    cb?: (err: any, data?: GetRelationalDatabaseMetricDataOutput) => void
  ): Promise<GetRelationalDatabaseMetricDataOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetRelationalDatabaseMetricDataCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns all of the runtime parameters offered by the underlying database software, or engine, for a specific database in Amazon Lightsail.</p> <p>In addition to the parameter names and values, this operation returns other information about each parameter. This information includes whether changes require a reboot, whether the parameter is modifiable, the allowed values, and the data types.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getRelationalDatabaseParameters(
    args: GetRelationalDatabaseParametersInput
  ): Promise<GetRelationalDatabaseParametersOutput>;
  public getRelationalDatabaseParameters(
    args: GetRelationalDatabaseParametersInput,
    cb: (err: any, data?: GetRelationalDatabaseParametersOutput) => void
  ): void;
  public getRelationalDatabaseParameters(
    args: GetRelationalDatabaseParametersInput,
    cb?: (err: any, data?: GetRelationalDatabaseParametersOutput) => void
  ): Promise<GetRelationalDatabaseParametersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetRelationalDatabaseParametersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about a specific database snapshot in Amazon Lightsail.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getRelationalDatabaseSnapshot(
    args: GetRelationalDatabaseSnapshotInput
  ): Promise<GetRelationalDatabaseSnapshotOutput>;
  public getRelationalDatabaseSnapshot(
    args: GetRelationalDatabaseSnapshotInput,
    cb: (err: any, data?: GetRelationalDatabaseSnapshotOutput) => void
  ): void;
  public getRelationalDatabaseSnapshot(
    args: GetRelationalDatabaseSnapshotInput,
    cb?: (err: any, data?: GetRelationalDatabaseSnapshotOutput) => void
  ): Promise<GetRelationalDatabaseSnapshotOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetRelationalDatabaseSnapshotCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about all of your database snapshots in Amazon Lightsail.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getRelationalDatabaseSnapshots(
    args: GetRelationalDatabaseSnapshotsInput
  ): Promise<GetRelationalDatabaseSnapshotsOutput>;
  public getRelationalDatabaseSnapshots(
    args: GetRelationalDatabaseSnapshotsInput,
    cb: (err: any, data?: GetRelationalDatabaseSnapshotsOutput) => void
  ): void;
  public getRelationalDatabaseSnapshots(
    args: GetRelationalDatabaseSnapshotsInput,
    cb?: (err: any, data?: GetRelationalDatabaseSnapshotsOutput) => void
  ): Promise<GetRelationalDatabaseSnapshotsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetRelationalDatabaseSnapshotsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about all of your databases in Amazon Lightsail.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getRelationalDatabases(
    args: GetRelationalDatabasesInput
  ): Promise<GetRelationalDatabasesOutput>;
  public getRelationalDatabases(
    args: GetRelationalDatabasesInput,
    cb: (err: any, data?: GetRelationalDatabasesOutput) => void
  ): void;
  public getRelationalDatabases(
    args: GetRelationalDatabasesInput,
    cb?: (err: any, data?: GetRelationalDatabasesOutput) => void
  ): Promise<GetRelationalDatabasesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetRelationalDatabasesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about a specific static IP.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getStaticIp(args: GetStaticIpInput): Promise<GetStaticIpOutput>;
  public getStaticIp(
    args: GetStaticIpInput,
    cb: (err: any, data?: GetStaticIpOutput) => void
  ): void;
  public getStaticIp(
    args: GetStaticIpInput,
    cb?: (err: any, data?: GetStaticIpOutput) => void
  ): Promise<GetStaticIpOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetStaticIpCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about all static IPs in the user's account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getStaticIps(args: GetStaticIpsInput): Promise<GetStaticIpsOutput>;
  public getStaticIps(
    args: GetStaticIpsInput,
    cb: (err: any, data?: GetStaticIpsOutput) => void
  ): void;
  public getStaticIps(
    args: GetStaticIpsInput,
    cb?: (err: any, data?: GetStaticIpsOutput) => void
  ): Promise<GetStaticIpsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetStaticIpsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Imports a public SSH key from a specific key pair.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public importKeyPair(args: ImportKeyPairInput): Promise<ImportKeyPairOutput>;
  public importKeyPair(
    args: ImportKeyPairInput,
    cb: (err: any, data?: ImportKeyPairOutput) => void
  ): void;
  public importKeyPair(
    args: ImportKeyPairInput,
    cb?: (err: any, data?: ImportKeyPairOutput) => void
  ): Promise<ImportKeyPairOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ImportKeyPairCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a Boolean value indicating whether your Lightsail VPC is peered.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public isVpcPeered(args: IsVpcPeeredInput): Promise<IsVpcPeeredOutput>;
  public isVpcPeered(
    args: IsVpcPeeredInput,
    cb: (err: any, data?: IsVpcPeeredOutput) => void
  ): void;
  public isVpcPeered(
    args: IsVpcPeeredInput,
    cb?: (err: any, data?: IsVpcPeeredOutput) => void
  ): Promise<IsVpcPeeredOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new IsVpcPeeredCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds public ports to an Amazon Lightsail instance.</p> <p>The <code>open instance public ports</code> operation supports tag-based access control via resource tags applied to the resource identified by instanceName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public openInstancePublicPorts(
    args: OpenInstancePublicPortsInput
  ): Promise<OpenInstancePublicPortsOutput>;
  public openInstancePublicPorts(
    args: OpenInstancePublicPortsInput,
    cb: (err: any, data?: OpenInstancePublicPortsOutput) => void
  ): void;
  public openInstancePublicPorts(
    args: OpenInstancePublicPortsInput,
    cb?: (err: any, data?: OpenInstancePublicPortsOutput) => void
  ): Promise<OpenInstancePublicPortsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new OpenInstancePublicPortsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Tries to peer the Lightsail VPC with the user's default VPC.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public peerVpc(args: PeerVpcInput): Promise<PeerVpcOutput>;
  public peerVpc(
    args: PeerVpcInput,
    cb: (err: any, data?: PeerVpcOutput) => void
  ): void;
  public peerVpc(
    args: PeerVpcInput,
    cb?: (err: any, data?: PeerVpcOutput) => void
  ): Promise<PeerVpcOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PeerVpcCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sets the specified open ports for an Amazon Lightsail instance, and closes all ports for every protocol not included in the current request.</p> <p>The <code>put instance public ports</code> operation supports tag-based access control via resource tags applied to the resource identified by instanceName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putInstancePublicPorts(
    args: PutInstancePublicPortsInput
  ): Promise<PutInstancePublicPortsOutput>;
  public putInstancePublicPorts(
    args: PutInstancePublicPortsInput,
    cb: (err: any, data?: PutInstancePublicPortsOutput) => void
  ): void;
  public putInstancePublicPorts(
    args: PutInstancePublicPortsInput,
    cb?: (err: any, data?: PutInstancePublicPortsOutput) => void
  ): Promise<PutInstancePublicPortsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutInstancePublicPortsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Restarts a specific instance.</p> <p>The <code>reboot instance</code> operation supports tag-based access control via resource tags applied to the resource identified by instanceName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public rebootInstance(
    args: RebootInstanceInput
  ): Promise<RebootInstanceOutput>;
  public rebootInstance(
    args: RebootInstanceInput,
    cb: (err: any, data?: RebootInstanceOutput) => void
  ): void;
  public rebootInstance(
    args: RebootInstanceInput,
    cb?: (err: any, data?: RebootInstanceOutput) => void
  ): Promise<RebootInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RebootInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Restarts a specific database in Amazon Lightsail.</p> <p>The <code>reboot relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public rebootRelationalDatabase(
    args: RebootRelationalDatabaseInput
  ): Promise<RebootRelationalDatabaseOutput>;
  public rebootRelationalDatabase(
    args: RebootRelationalDatabaseInput,
    cb: (err: any, data?: RebootRelationalDatabaseOutput) => void
  ): void;
  public rebootRelationalDatabase(
    args: RebootRelationalDatabaseInput,
    cb?: (err: any, data?: RebootRelationalDatabaseOutput) => void
  ): Promise<RebootRelationalDatabaseOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RebootRelationalDatabaseCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a specific static IP from your account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public releaseStaticIp(
    args: ReleaseStaticIpInput
  ): Promise<ReleaseStaticIpOutput>;
  public releaseStaticIp(
    args: ReleaseStaticIpInput,
    cb: (err: any, data?: ReleaseStaticIpOutput) => void
  ): void;
  public releaseStaticIp(
    args: ReleaseStaticIpInput,
    cb?: (err: any, data?: ReleaseStaticIpOutput) => void
  ): Promise<ReleaseStaticIpOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ReleaseStaticIpCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Starts a specific Amazon Lightsail instance from a stopped state. To restart an instance, use the <code>reboot instance</code> operation.</p> <note> <p>When you start a stopped instance, Lightsail assigns a new public IP address to the instance. To use the same IP address after stopping and starting an instance, create a static IP address and attach it to the instance. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/lightsail-create-static-ip">Lightsail Dev Guide</a>.</p> </note> <p>The <code>start instance</code> operation supports tag-based access control via resource tags applied to the resource identified by instanceName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startInstance(args: StartInstanceInput): Promise<StartInstanceOutput>;
  public startInstance(
    args: StartInstanceInput,
    cb: (err: any, data?: StartInstanceOutput) => void
  ): void;
  public startInstance(
    args: StartInstanceInput,
    cb?: (err: any, data?: StartInstanceOutput) => void
  ): Promise<StartInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Starts a specific database from a stopped state in Amazon Lightsail. To restart a database, use the <code>reboot relational database</code> operation.</p> <p>The <code>start relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startRelationalDatabase(
    args: StartRelationalDatabaseInput
  ): Promise<StartRelationalDatabaseOutput>;
  public startRelationalDatabase(
    args: StartRelationalDatabaseInput,
    cb: (err: any, data?: StartRelationalDatabaseOutput) => void
  ): void;
  public startRelationalDatabase(
    args: StartRelationalDatabaseInput,
    cb?: (err: any, data?: StartRelationalDatabaseOutput) => void
  ): Promise<StartRelationalDatabaseOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartRelationalDatabaseCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Stops a specific Amazon Lightsail instance that is currently running.</p> <note> <p>When you start a stopped instance, Lightsail assigns a new public IP address to the instance. To use the same IP address after stopping and starting an instance, create a static IP address and attach it to the instance. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/lightsail-create-static-ip">Lightsail Dev Guide</a>.</p> </note> <p>The <code>stop instance</code> operation supports tag-based access control via resource tags applied to the resource identified by instanceName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public stopInstance(args: StopInstanceInput): Promise<StopInstanceOutput>;
  public stopInstance(
    args: StopInstanceInput,
    cb: (err: any, data?: StopInstanceOutput) => void
  ): void;
  public stopInstance(
    args: StopInstanceInput,
    cb?: (err: any, data?: StopInstanceOutput) => void
  ): Promise<StopInstanceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StopInstanceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Stops a specific database that is currently running in Amazon Lightsail.</p> <p>The <code>stop relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public stopRelationalDatabase(
    args: StopRelationalDatabaseInput
  ): Promise<StopRelationalDatabaseOutput>;
  public stopRelationalDatabase(
    args: StopRelationalDatabaseInput,
    cb: (err: any, data?: StopRelationalDatabaseOutput) => void
  ): void;
  public stopRelationalDatabase(
    args: StopRelationalDatabaseInput,
    cb?: (err: any, data?: StopRelationalDatabaseOutput) => void
  ): Promise<StopRelationalDatabaseOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StopRelationalDatabaseCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds one or more tags to the specified Amazon Lightsail resource. Each resource can have a maximum of 50 tags. Each tag consists of a key and an optional value. Tag keys must be unique per resource. For more information about tags, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-tags">Lightsail Dev Guide</a>.</p> <p>The <code>tag resource</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by resourceName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public tagResource(args: TagResourceInput): Promise<TagResourceOutput>;
  public tagResource(
    args: TagResourceInput,
    cb: (err: any, data?: TagResourceOutput) => void
  ): void;
  public tagResource(
    args: TagResourceInput,
    cb?: (err: any, data?: TagResourceOutput) => void
  ): Promise<TagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Attempts to unpeer the Lightsail VPC from the user's default VPC.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public unpeerVpc(args: UnpeerVpcInput): Promise<UnpeerVpcOutput>;
  public unpeerVpc(
    args: UnpeerVpcInput,
    cb: (err: any, data?: UnpeerVpcOutput) => void
  ): void;
  public unpeerVpc(
    args: UnpeerVpcInput,
    cb?: (err: any, data?: UnpeerVpcOutput) => void
  ): Promise<UnpeerVpcOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UnpeerVpcCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified set of tag keys and their values from the specified Amazon Lightsail resource.</p> <p>The <code>untag resource</code> operation supports tag-based access control via request tags and resource tags applied to the resource identified by resourceName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public untagResource(args: UntagResourceInput): Promise<UntagResourceOutput>;
  public untagResource(
    args: UntagResourceInput,
    cb: (err: any, data?: UntagResourceOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceInput,
    cb?: (err: any, data?: UntagResourceOutput) => void
  ): Promise<UntagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UntagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a domain recordset after it is created.</p> <p>The <code>update domain entry</code> operation supports tag-based access control via resource tags applied to the resource identified by domainName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateDomainEntry(
    args: UpdateDomainEntryInput
  ): Promise<UpdateDomainEntryOutput>;
  public updateDomainEntry(
    args: UpdateDomainEntryInput,
    cb: (err: any, data?: UpdateDomainEntryOutput) => void
  ): void;
  public updateDomainEntry(
    args: UpdateDomainEntryInput,
    cb?: (err: any, data?: UpdateDomainEntryOutput) => void
  ): Promise<UpdateDomainEntryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateDomainEntryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the specified attribute for a load balancer. You can only update one attribute at a time.</p> <p>The <code>update load balancer attribute</code> operation supports tag-based access control via resource tags applied to the resource identified by loadBalancerName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateLoadBalancerAttribute(
    args: UpdateLoadBalancerAttributeInput
  ): Promise<UpdateLoadBalancerAttributeOutput>;
  public updateLoadBalancerAttribute(
    args: UpdateLoadBalancerAttributeInput,
    cb: (err: any, data?: UpdateLoadBalancerAttributeOutput) => void
  ): void;
  public updateLoadBalancerAttribute(
    args: UpdateLoadBalancerAttributeInput,
    cb?: (err: any, data?: UpdateLoadBalancerAttributeOutput) => void
  ): Promise<UpdateLoadBalancerAttributeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateLoadBalancerAttributeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Allows the update of one or more attributes of a database in Amazon Lightsail.</p> <p>Updates are applied immediately, or in cases where the updates could result in an outage, are applied during the database's predefined maintenance window.</p> <p>The <code>update relational database</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateRelationalDatabase(
    args: UpdateRelationalDatabaseInput
  ): Promise<UpdateRelationalDatabaseOutput>;
  public updateRelationalDatabase(
    args: UpdateRelationalDatabaseInput,
    cb: (err: any, data?: UpdateRelationalDatabaseOutput) => void
  ): void;
  public updateRelationalDatabase(
    args: UpdateRelationalDatabaseInput,
    cb?: (err: any, data?: UpdateRelationalDatabaseOutput) => void
  ): Promise<UpdateRelationalDatabaseOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateRelationalDatabaseCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Allows the update of one or more parameters of a database in Amazon Lightsail.</p> <p>Parameter updates don't cause outages; therefore, their application is not subject to the preferred maintenance window. However, there are two ways in which paramater updates are applied: <code>dynamic</code> or <code>pending-reboot</code>. Parameters marked with a <code>dynamic</code> apply type are applied immediately. Parameters marked with a <code>pending-reboot</code> apply type are applied only after the database is rebooted using the <code>reboot relational database</code> operation.</p> <p>The <code>update relational database parameters</code> operation supports tag-based access control via resource tags applied to the resource identified by relationalDatabaseName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ServiceException} <p>A general service exception.</p>
   *   - {InvalidInputException} <p>Lightsail throws this exception when user input does not conform to the validation rules of an input field.</p> <note> <p>Domain-related APIs are only available in the N. Virginia (us-east-1) Region. Please set your AWS Region configuration to us-east-1 to create, view, or edit these resources.</p> </note>
   *   - {NotFoundException} <p>Lightsail throws this exception when it cannot find a resource.</p>
   *   - {OperationFailureException} <p>Lightsail throws this exception when an operation fails to execute.</p>
   *   - {AccessDeniedException} <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.</p>
   *   - {AccountSetupInProgressException} <p>Lightsail throws this exception when an account is still in the setup in progress state.</p>
   *   - {UnauthenticatedException} <p>Lightsail throws this exception when the user has not been authenticated.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateRelationalDatabaseParameters(
    args: UpdateRelationalDatabaseParametersInput
  ): Promise<UpdateRelationalDatabaseParametersOutput>;
  public updateRelationalDatabaseParameters(
    args: UpdateRelationalDatabaseParametersInput,
    cb: (err: any, data?: UpdateRelationalDatabaseParametersOutput) => void
  ): void;
  public updateRelationalDatabaseParameters(
    args: UpdateRelationalDatabaseParametersInput,
    cb?: (err: any, data?: UpdateRelationalDatabaseParametersOutput) => void
  ): Promise<UpdateRelationalDatabaseParametersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateRelationalDatabaseParametersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
