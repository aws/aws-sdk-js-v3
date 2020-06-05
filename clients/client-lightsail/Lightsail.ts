import { LightsailClient } from "./LightsailClient";
import {
  AllocateStaticIpCommand,
  AllocateStaticIpCommandInput,
  AllocateStaticIpCommandOutput
} from "./commands/AllocateStaticIpCommand";
import {
  AttachDiskCommand,
  AttachDiskCommandInput,
  AttachDiskCommandOutput
} from "./commands/AttachDiskCommand";
import {
  AttachInstancesToLoadBalancerCommand,
  AttachInstancesToLoadBalancerCommandInput,
  AttachInstancesToLoadBalancerCommandOutput
} from "./commands/AttachInstancesToLoadBalancerCommand";
import {
  AttachLoadBalancerTlsCertificateCommand,
  AttachLoadBalancerTlsCertificateCommandInput,
  AttachLoadBalancerTlsCertificateCommandOutput
} from "./commands/AttachLoadBalancerTlsCertificateCommand";
import {
  AttachStaticIpCommand,
  AttachStaticIpCommandInput,
  AttachStaticIpCommandOutput
} from "./commands/AttachStaticIpCommand";
import {
  CloseInstancePublicPortsCommand,
  CloseInstancePublicPortsCommandInput,
  CloseInstancePublicPortsCommandOutput
} from "./commands/CloseInstancePublicPortsCommand";
import {
  CopySnapshotCommand,
  CopySnapshotCommandInput,
  CopySnapshotCommandOutput
} from "./commands/CopySnapshotCommand";
import {
  CreateCloudFormationStackCommand,
  CreateCloudFormationStackCommandInput,
  CreateCloudFormationStackCommandOutput
} from "./commands/CreateCloudFormationStackCommand";
import {
  CreateDiskCommand,
  CreateDiskCommandInput,
  CreateDiskCommandOutput
} from "./commands/CreateDiskCommand";
import {
  CreateDiskFromSnapshotCommand,
  CreateDiskFromSnapshotCommandInput,
  CreateDiskFromSnapshotCommandOutput
} from "./commands/CreateDiskFromSnapshotCommand";
import {
  CreateDiskSnapshotCommand,
  CreateDiskSnapshotCommandInput,
  CreateDiskSnapshotCommandOutput
} from "./commands/CreateDiskSnapshotCommand";
import {
  CreateDomainCommand,
  CreateDomainCommandInput,
  CreateDomainCommandOutput
} from "./commands/CreateDomainCommand";
import {
  CreateDomainEntryCommand,
  CreateDomainEntryCommandInput,
  CreateDomainEntryCommandOutput
} from "./commands/CreateDomainEntryCommand";
import {
  CreateInstanceSnapshotCommand,
  CreateInstanceSnapshotCommandInput,
  CreateInstanceSnapshotCommandOutput
} from "./commands/CreateInstanceSnapshotCommand";
import {
  CreateInstancesCommand,
  CreateInstancesCommandInput,
  CreateInstancesCommandOutput
} from "./commands/CreateInstancesCommand";
import {
  CreateInstancesFromSnapshotCommand,
  CreateInstancesFromSnapshotCommandInput,
  CreateInstancesFromSnapshotCommandOutput
} from "./commands/CreateInstancesFromSnapshotCommand";
import {
  CreateKeyPairCommand,
  CreateKeyPairCommandInput,
  CreateKeyPairCommandOutput
} from "./commands/CreateKeyPairCommand";
import {
  CreateLoadBalancerCommand,
  CreateLoadBalancerCommandInput,
  CreateLoadBalancerCommandOutput
} from "./commands/CreateLoadBalancerCommand";
import {
  CreateLoadBalancerTlsCertificateCommand,
  CreateLoadBalancerTlsCertificateCommandInput,
  CreateLoadBalancerTlsCertificateCommandOutput
} from "./commands/CreateLoadBalancerTlsCertificateCommand";
import {
  CreateRelationalDatabaseCommand,
  CreateRelationalDatabaseCommandInput,
  CreateRelationalDatabaseCommandOutput
} from "./commands/CreateRelationalDatabaseCommand";
import {
  CreateRelationalDatabaseFromSnapshotCommand,
  CreateRelationalDatabaseFromSnapshotCommandInput,
  CreateRelationalDatabaseFromSnapshotCommandOutput
} from "./commands/CreateRelationalDatabaseFromSnapshotCommand";
import {
  CreateRelationalDatabaseSnapshotCommand,
  CreateRelationalDatabaseSnapshotCommandInput,
  CreateRelationalDatabaseSnapshotCommandOutput
} from "./commands/CreateRelationalDatabaseSnapshotCommand";
import {
  DeleteAutoSnapshotCommand,
  DeleteAutoSnapshotCommandInput,
  DeleteAutoSnapshotCommandOutput
} from "./commands/DeleteAutoSnapshotCommand";
import {
  DeleteDiskCommand,
  DeleteDiskCommandInput,
  DeleteDiskCommandOutput
} from "./commands/DeleteDiskCommand";
import {
  DeleteDiskSnapshotCommand,
  DeleteDiskSnapshotCommandInput,
  DeleteDiskSnapshotCommandOutput
} from "./commands/DeleteDiskSnapshotCommand";
import {
  DeleteDomainCommand,
  DeleteDomainCommandInput,
  DeleteDomainCommandOutput
} from "./commands/DeleteDomainCommand";
import {
  DeleteDomainEntryCommand,
  DeleteDomainEntryCommandInput,
  DeleteDomainEntryCommandOutput
} from "./commands/DeleteDomainEntryCommand";
import {
  DeleteInstanceCommand,
  DeleteInstanceCommandInput,
  DeleteInstanceCommandOutput
} from "./commands/DeleteInstanceCommand";
import {
  DeleteInstanceSnapshotCommand,
  DeleteInstanceSnapshotCommandInput,
  DeleteInstanceSnapshotCommandOutput
} from "./commands/DeleteInstanceSnapshotCommand";
import {
  DeleteKeyPairCommand,
  DeleteKeyPairCommandInput,
  DeleteKeyPairCommandOutput
} from "./commands/DeleteKeyPairCommand";
import {
  DeleteKnownHostKeysCommand,
  DeleteKnownHostKeysCommandInput,
  DeleteKnownHostKeysCommandOutput
} from "./commands/DeleteKnownHostKeysCommand";
import {
  DeleteLoadBalancerCommand,
  DeleteLoadBalancerCommandInput,
  DeleteLoadBalancerCommandOutput
} from "./commands/DeleteLoadBalancerCommand";
import {
  DeleteLoadBalancerTlsCertificateCommand,
  DeleteLoadBalancerTlsCertificateCommandInput,
  DeleteLoadBalancerTlsCertificateCommandOutput
} from "./commands/DeleteLoadBalancerTlsCertificateCommand";
import {
  DeleteRelationalDatabaseCommand,
  DeleteRelationalDatabaseCommandInput,
  DeleteRelationalDatabaseCommandOutput
} from "./commands/DeleteRelationalDatabaseCommand";
import {
  DeleteRelationalDatabaseSnapshotCommand,
  DeleteRelationalDatabaseSnapshotCommandInput,
  DeleteRelationalDatabaseSnapshotCommandOutput
} from "./commands/DeleteRelationalDatabaseSnapshotCommand";
import {
  DetachDiskCommand,
  DetachDiskCommandInput,
  DetachDiskCommandOutput
} from "./commands/DetachDiskCommand";
import {
  DetachInstancesFromLoadBalancerCommand,
  DetachInstancesFromLoadBalancerCommandInput,
  DetachInstancesFromLoadBalancerCommandOutput
} from "./commands/DetachInstancesFromLoadBalancerCommand";
import {
  DetachStaticIpCommand,
  DetachStaticIpCommandInput,
  DetachStaticIpCommandOutput
} from "./commands/DetachStaticIpCommand";
import {
  DisableAddOnCommand,
  DisableAddOnCommandInput,
  DisableAddOnCommandOutput
} from "./commands/DisableAddOnCommand";
import {
  DownloadDefaultKeyPairCommand,
  DownloadDefaultKeyPairCommandInput,
  DownloadDefaultKeyPairCommandOutput
} from "./commands/DownloadDefaultKeyPairCommand";
import {
  EnableAddOnCommand,
  EnableAddOnCommandInput,
  EnableAddOnCommandOutput
} from "./commands/EnableAddOnCommand";
import {
  ExportSnapshotCommand,
  ExportSnapshotCommandInput,
  ExportSnapshotCommandOutput
} from "./commands/ExportSnapshotCommand";
import {
  GetActiveNamesCommand,
  GetActiveNamesCommandInput,
  GetActiveNamesCommandOutput
} from "./commands/GetActiveNamesCommand";
import {
  GetAutoSnapshotsCommand,
  GetAutoSnapshotsCommandInput,
  GetAutoSnapshotsCommandOutput
} from "./commands/GetAutoSnapshotsCommand";
import {
  GetBlueprintsCommand,
  GetBlueprintsCommandInput,
  GetBlueprintsCommandOutput
} from "./commands/GetBlueprintsCommand";
import {
  GetBundlesCommand,
  GetBundlesCommandInput,
  GetBundlesCommandOutput
} from "./commands/GetBundlesCommand";
import {
  GetCloudFormationStackRecordsCommand,
  GetCloudFormationStackRecordsCommandInput,
  GetCloudFormationStackRecordsCommandOutput
} from "./commands/GetCloudFormationStackRecordsCommand";
import {
  GetDiskCommand,
  GetDiskCommandInput,
  GetDiskCommandOutput
} from "./commands/GetDiskCommand";
import {
  GetDiskSnapshotCommand,
  GetDiskSnapshotCommandInput,
  GetDiskSnapshotCommandOutput
} from "./commands/GetDiskSnapshotCommand";
import {
  GetDiskSnapshotsCommand,
  GetDiskSnapshotsCommandInput,
  GetDiskSnapshotsCommandOutput
} from "./commands/GetDiskSnapshotsCommand";
import {
  GetDisksCommand,
  GetDisksCommandInput,
  GetDisksCommandOutput
} from "./commands/GetDisksCommand";
import {
  GetDomainCommand,
  GetDomainCommandInput,
  GetDomainCommandOutput
} from "./commands/GetDomainCommand";
import {
  GetDomainsCommand,
  GetDomainsCommandInput,
  GetDomainsCommandOutput
} from "./commands/GetDomainsCommand";
import {
  GetExportSnapshotRecordsCommand,
  GetExportSnapshotRecordsCommandInput,
  GetExportSnapshotRecordsCommandOutput
} from "./commands/GetExportSnapshotRecordsCommand";
import {
  GetInstanceAccessDetailsCommand,
  GetInstanceAccessDetailsCommandInput,
  GetInstanceAccessDetailsCommandOutput
} from "./commands/GetInstanceAccessDetailsCommand";
import {
  GetInstanceCommand,
  GetInstanceCommandInput,
  GetInstanceCommandOutput
} from "./commands/GetInstanceCommand";
import {
  GetInstanceMetricDataCommand,
  GetInstanceMetricDataCommandInput,
  GetInstanceMetricDataCommandOutput
} from "./commands/GetInstanceMetricDataCommand";
import {
  GetInstancePortStatesCommand,
  GetInstancePortStatesCommandInput,
  GetInstancePortStatesCommandOutput
} from "./commands/GetInstancePortStatesCommand";
import {
  GetInstanceSnapshotCommand,
  GetInstanceSnapshotCommandInput,
  GetInstanceSnapshotCommandOutput
} from "./commands/GetInstanceSnapshotCommand";
import {
  GetInstanceSnapshotsCommand,
  GetInstanceSnapshotsCommandInput,
  GetInstanceSnapshotsCommandOutput
} from "./commands/GetInstanceSnapshotsCommand";
import {
  GetInstanceStateCommand,
  GetInstanceStateCommandInput,
  GetInstanceStateCommandOutput
} from "./commands/GetInstanceStateCommand";
import {
  GetInstancesCommand,
  GetInstancesCommandInput,
  GetInstancesCommandOutput
} from "./commands/GetInstancesCommand";
import {
  GetKeyPairCommand,
  GetKeyPairCommandInput,
  GetKeyPairCommandOutput
} from "./commands/GetKeyPairCommand";
import {
  GetKeyPairsCommand,
  GetKeyPairsCommandInput,
  GetKeyPairsCommandOutput
} from "./commands/GetKeyPairsCommand";
import {
  GetLoadBalancerCommand,
  GetLoadBalancerCommandInput,
  GetLoadBalancerCommandOutput
} from "./commands/GetLoadBalancerCommand";
import {
  GetLoadBalancerMetricDataCommand,
  GetLoadBalancerMetricDataCommandInput,
  GetLoadBalancerMetricDataCommandOutput
} from "./commands/GetLoadBalancerMetricDataCommand";
import {
  GetLoadBalancerTlsCertificatesCommand,
  GetLoadBalancerTlsCertificatesCommandInput,
  GetLoadBalancerTlsCertificatesCommandOutput
} from "./commands/GetLoadBalancerTlsCertificatesCommand";
import {
  GetLoadBalancersCommand,
  GetLoadBalancersCommandInput,
  GetLoadBalancersCommandOutput
} from "./commands/GetLoadBalancersCommand";
import {
  GetOperationCommand,
  GetOperationCommandInput,
  GetOperationCommandOutput
} from "./commands/GetOperationCommand";
import {
  GetOperationsCommand,
  GetOperationsCommandInput,
  GetOperationsCommandOutput
} from "./commands/GetOperationsCommand";
import {
  GetOperationsForResourceCommand,
  GetOperationsForResourceCommandInput,
  GetOperationsForResourceCommandOutput
} from "./commands/GetOperationsForResourceCommand";
import {
  GetRegionsCommand,
  GetRegionsCommandInput,
  GetRegionsCommandOutput
} from "./commands/GetRegionsCommand";
import {
  GetRelationalDatabaseBlueprintsCommand,
  GetRelationalDatabaseBlueprintsCommandInput,
  GetRelationalDatabaseBlueprintsCommandOutput
} from "./commands/GetRelationalDatabaseBlueprintsCommand";
import {
  GetRelationalDatabaseBundlesCommand,
  GetRelationalDatabaseBundlesCommandInput,
  GetRelationalDatabaseBundlesCommandOutput
} from "./commands/GetRelationalDatabaseBundlesCommand";
import {
  GetRelationalDatabaseCommand,
  GetRelationalDatabaseCommandInput,
  GetRelationalDatabaseCommandOutput
} from "./commands/GetRelationalDatabaseCommand";
import {
  GetRelationalDatabaseEventsCommand,
  GetRelationalDatabaseEventsCommandInput,
  GetRelationalDatabaseEventsCommandOutput
} from "./commands/GetRelationalDatabaseEventsCommand";
import {
  GetRelationalDatabaseLogEventsCommand,
  GetRelationalDatabaseLogEventsCommandInput,
  GetRelationalDatabaseLogEventsCommandOutput
} from "./commands/GetRelationalDatabaseLogEventsCommand";
import {
  GetRelationalDatabaseLogStreamsCommand,
  GetRelationalDatabaseLogStreamsCommandInput,
  GetRelationalDatabaseLogStreamsCommandOutput
} from "./commands/GetRelationalDatabaseLogStreamsCommand";
import {
  GetRelationalDatabaseMasterUserPasswordCommand,
  GetRelationalDatabaseMasterUserPasswordCommandInput,
  GetRelationalDatabaseMasterUserPasswordCommandOutput
} from "./commands/GetRelationalDatabaseMasterUserPasswordCommand";
import {
  GetRelationalDatabaseMetricDataCommand,
  GetRelationalDatabaseMetricDataCommandInput,
  GetRelationalDatabaseMetricDataCommandOutput
} from "./commands/GetRelationalDatabaseMetricDataCommand";
import {
  GetRelationalDatabaseParametersCommand,
  GetRelationalDatabaseParametersCommandInput,
  GetRelationalDatabaseParametersCommandOutput
} from "./commands/GetRelationalDatabaseParametersCommand";
import {
  GetRelationalDatabaseSnapshotCommand,
  GetRelationalDatabaseSnapshotCommandInput,
  GetRelationalDatabaseSnapshotCommandOutput
} from "./commands/GetRelationalDatabaseSnapshotCommand";
import {
  GetRelationalDatabaseSnapshotsCommand,
  GetRelationalDatabaseSnapshotsCommandInput,
  GetRelationalDatabaseSnapshotsCommandOutput
} from "./commands/GetRelationalDatabaseSnapshotsCommand";
import {
  GetRelationalDatabasesCommand,
  GetRelationalDatabasesCommandInput,
  GetRelationalDatabasesCommandOutput
} from "./commands/GetRelationalDatabasesCommand";
import {
  GetStaticIpCommand,
  GetStaticIpCommandInput,
  GetStaticIpCommandOutput
} from "./commands/GetStaticIpCommand";
import {
  GetStaticIpsCommand,
  GetStaticIpsCommandInput,
  GetStaticIpsCommandOutput
} from "./commands/GetStaticIpsCommand";
import {
  ImportKeyPairCommand,
  ImportKeyPairCommandInput,
  ImportKeyPairCommandOutput
} from "./commands/ImportKeyPairCommand";
import {
  IsVpcPeeredCommand,
  IsVpcPeeredCommandInput,
  IsVpcPeeredCommandOutput
} from "./commands/IsVpcPeeredCommand";
import {
  OpenInstancePublicPortsCommand,
  OpenInstancePublicPortsCommandInput,
  OpenInstancePublicPortsCommandOutput
} from "./commands/OpenInstancePublicPortsCommand";
import {
  PeerVpcCommand,
  PeerVpcCommandInput,
  PeerVpcCommandOutput
} from "./commands/PeerVpcCommand";
import {
  PutInstancePublicPortsCommand,
  PutInstancePublicPortsCommandInput,
  PutInstancePublicPortsCommandOutput
} from "./commands/PutInstancePublicPortsCommand";
import {
  RebootInstanceCommand,
  RebootInstanceCommandInput,
  RebootInstanceCommandOutput
} from "./commands/RebootInstanceCommand";
import {
  RebootRelationalDatabaseCommand,
  RebootRelationalDatabaseCommandInput,
  RebootRelationalDatabaseCommandOutput
} from "./commands/RebootRelationalDatabaseCommand";
import {
  ReleaseStaticIpCommand,
  ReleaseStaticIpCommandInput,
  ReleaseStaticIpCommandOutput
} from "./commands/ReleaseStaticIpCommand";
import {
  StartInstanceCommand,
  StartInstanceCommandInput,
  StartInstanceCommandOutput
} from "./commands/StartInstanceCommand";
import {
  StartRelationalDatabaseCommand,
  StartRelationalDatabaseCommandInput,
  StartRelationalDatabaseCommandOutput
} from "./commands/StartRelationalDatabaseCommand";
import {
  StopInstanceCommand,
  StopInstanceCommandInput,
  StopInstanceCommandOutput
} from "./commands/StopInstanceCommand";
import {
  StopRelationalDatabaseCommand,
  StopRelationalDatabaseCommandInput,
  StopRelationalDatabaseCommandOutput
} from "./commands/StopRelationalDatabaseCommand";
import {
  TagResourceCommand,
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "./commands/TagResourceCommand";
import {
  UnpeerVpcCommand,
  UnpeerVpcCommandInput,
  UnpeerVpcCommandOutput
} from "./commands/UnpeerVpcCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "./commands/UntagResourceCommand";
import {
  UpdateDomainEntryCommand,
  UpdateDomainEntryCommandInput,
  UpdateDomainEntryCommandOutput
} from "./commands/UpdateDomainEntryCommand";
import {
  UpdateLoadBalancerAttributeCommand,
  UpdateLoadBalancerAttributeCommandInput,
  UpdateLoadBalancerAttributeCommandOutput
} from "./commands/UpdateLoadBalancerAttributeCommand";
import {
  UpdateRelationalDatabaseCommand,
  UpdateRelationalDatabaseCommandInput,
  UpdateRelationalDatabaseCommandOutput
} from "./commands/UpdateRelationalDatabaseCommand";
import {
  UpdateRelationalDatabaseParametersCommand,
  UpdateRelationalDatabaseParametersCommandInput,
  UpdateRelationalDatabaseParametersCommandOutput
} from "./commands/UpdateRelationalDatabaseParametersCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>Amazon Lightsail is the easiest way to get started with AWS for developers who just need
 *       virtual private servers. Lightsail includes everything you need to launch your project
 *       quickly - a virtual machine, a managed database, SSD-based storage, data transfer, DNS
 *       management, and a static IP - for a low, predictable price. You manage those Lightsail
 *       servers through the Lightsail console or by using the API or command-line interface
 *       (CLI).</p>
 *          <p>For more information about Lightsail concepts and tasks, see the <a href="https://lightsail.aws.amazon.com/ls/docs/all">Lightsail Dev Guide</a>.</p>
 *          <p>To use the Lightsail API or the CLI, you will need to use AWS Identity and
 *       Access Management (IAM) to generate access keys. For details about how to set this up, see the
 *         <a href="http://lightsail.aws.amazon.com/ls/docs/how-to/article/lightsail-how-to-set-up-access-keys-to-use-sdk-api-cli">Lightsail Dev Guide</a>.</p>
 */
export class Lightsail extends LightsailClient {
  /**
   * <p>Allocates a static IP address.</p>
   */
  public allocateStaticIp(
    args: AllocateStaticIpCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AllocateStaticIpCommandOutput>;
  public allocateStaticIp(
    args: AllocateStaticIpCommandInput,
    cb: (err: any, data?: AllocateStaticIpCommandOutput) => void
  ): void;
  public allocateStaticIp(
    args: AllocateStaticIpCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AllocateStaticIpCommandOutput) => void
  ): void;
  public allocateStaticIp(
    args: AllocateStaticIpCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: AllocateStaticIpCommandOutput) => void),
    cb?: (err: any, data?: AllocateStaticIpCommandOutput) => void
  ): Promise<AllocateStaticIpCommandOutput> | void {
    const command = new AllocateStaticIpCommand(args);
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
   * <p>Attaches a block storage disk to a running or stopped Lightsail instance and exposes
   *       it to the instance with the specified disk name.</p>
   *          <p>The <code>attach disk</code> operation supports tag-based access control via resource
   *       tags applied to the resource identified by <code>disk name</code>. For more information, see
   *       the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   */
  public attachDisk(
    args: AttachDiskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachDiskCommandOutput>;
  public attachDisk(
    args: AttachDiskCommandInput,
    cb: (err: any, data?: AttachDiskCommandOutput) => void
  ): void;
  public attachDisk(
    args: AttachDiskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachDiskCommandOutput) => void
  ): void;
  public attachDisk(
    args: AttachDiskCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: AttachDiskCommandOutput) => void),
    cb?: (err: any, data?: AttachDiskCommandOutput) => void
  ): Promise<AttachDiskCommandOutput> | void {
    const command = new AttachDiskCommand(args);
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
   * <p>Attaches one or more Lightsail instances to a load balancer.</p>
   *          <p>After some time, the instances are attached to the load balancer and the health check
   *       status is available.</p>
   *          <p>The <code>attach instances to load balancer</code> operation supports tag-based access
   *       control via resource tags applied to the resource identified by <code>load balancer
   *         name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   */
  public attachInstancesToLoadBalancer(
    args: AttachInstancesToLoadBalancerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachInstancesToLoadBalancerCommandOutput>;
  public attachInstancesToLoadBalancer(
    args: AttachInstancesToLoadBalancerCommandInput,
    cb: (err: any, data?: AttachInstancesToLoadBalancerCommandOutput) => void
  ): void;
  public attachInstancesToLoadBalancer(
    args: AttachInstancesToLoadBalancerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachInstancesToLoadBalancerCommandOutput) => void
  ): void;
  public attachInstancesToLoadBalancer(
    args: AttachInstancesToLoadBalancerCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: AttachInstancesToLoadBalancerCommandOutput) => void),
    cb?: (err: any, data?: AttachInstancesToLoadBalancerCommandOutput) => void
  ): Promise<AttachInstancesToLoadBalancerCommandOutput> | void {
    const command = new AttachInstancesToLoadBalancerCommand(args);
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
   * <p>Attaches a Transport Layer Security (TLS) certificate to your load balancer. TLS is
   *       just an updated, more secure version of Secure Socket Layer (SSL).</p>
   *          <p>Once you create and validate your certificate, you can attach it to your load balancer.
   *       You can also use this API to rotate the certificates on your account. Use the <code>attach
   *         load balancer tls certificate</code> operation with the non-attached certificate, and it
   *       will replace the existing one and become the attached certificate.</p>
   *          <p>The <code>attach load balancer tls certificate</code> operation supports tag-based
   *       access control via resource tags applied to the resource identified by <code>load balancer
   *         name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   */
  public attachLoadBalancerTlsCertificate(
    args: AttachLoadBalancerTlsCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachLoadBalancerTlsCertificateCommandOutput>;
  public attachLoadBalancerTlsCertificate(
    args: AttachLoadBalancerTlsCertificateCommandInput,
    cb: (err: any, data?: AttachLoadBalancerTlsCertificateCommandOutput) => void
  ): void;
  public attachLoadBalancerTlsCertificate(
    args: AttachLoadBalancerTlsCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachLoadBalancerTlsCertificateCommandOutput) => void
  ): void;
  public attachLoadBalancerTlsCertificate(
    args: AttachLoadBalancerTlsCertificateCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: AttachLoadBalancerTlsCertificateCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: AttachLoadBalancerTlsCertificateCommandOutput
    ) => void
  ): Promise<AttachLoadBalancerTlsCertificateCommandOutput> | void {
    const command = new AttachLoadBalancerTlsCertificateCommand(args);
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
   * <p>Attaches a static IP address to a specific Amazon Lightsail instance.</p>
   */
  public attachStaticIp(
    args: AttachStaticIpCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachStaticIpCommandOutput>;
  public attachStaticIp(
    args: AttachStaticIpCommandInput,
    cb: (err: any, data?: AttachStaticIpCommandOutput) => void
  ): void;
  public attachStaticIp(
    args: AttachStaticIpCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachStaticIpCommandOutput) => void
  ): void;
  public attachStaticIp(
    args: AttachStaticIpCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: AttachStaticIpCommandOutput) => void),
    cb?: (err: any, data?: AttachStaticIpCommandOutput) => void
  ): Promise<AttachStaticIpCommandOutput> | void {
    const command = new AttachStaticIpCommand(args);
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
   * <p>Closes the public ports on a specific Amazon Lightsail instance.</p>
   *          <p>The <code>close instance public ports</code> operation supports tag-based access
   *       control via resource tags applied to the resource identified by <code>instance name</code>.
   *       For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   */
  public closeInstancePublicPorts(
    args: CloseInstancePublicPortsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CloseInstancePublicPortsCommandOutput>;
  public closeInstancePublicPorts(
    args: CloseInstancePublicPortsCommandInput,
    cb: (err: any, data?: CloseInstancePublicPortsCommandOutput) => void
  ): void;
  public closeInstancePublicPorts(
    args: CloseInstancePublicPortsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CloseInstancePublicPortsCommandOutput) => void
  ): void;
  public closeInstancePublicPorts(
    args: CloseInstancePublicPortsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CloseInstancePublicPortsCommandOutput) => void),
    cb?: (err: any, data?: CloseInstancePublicPortsCommandOutput) => void
  ): Promise<CloseInstancePublicPortsCommandOutput> | void {
    const command = new CloseInstancePublicPortsCommand(args);
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
   * <p>Copies a manual snapshot of an instance or disk as another manual snapshot, or copies an
   *       automatic snapshot of an instance or disk as a manual snapshot. This operation can also be
   *       used to copy a manual or automatic snapshot of an instance or a disk from one AWS Region to
   *       another in Amazon Lightsail.</p>
   *          <p>When copying a <i>manual snapshot</i>, be sure to define the <code>source
   *         region</code>, <code>source snapshot name</code>, and <code>target snapshot name</code>
   *       parameters.</p>
   *          <p>When copying an <i>automatic snapshot</i>, be sure to define the
   *         <code>source region</code>, <code>source resource name</code>, <code>target snapshot
   *         name</code>, and either the <code>restore date</code> or the <code>use latest restorable
   *         auto snapshot</code> parameters.</p>
   */
  public copySnapshot(
    args: CopySnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CopySnapshotCommandOutput>;
  public copySnapshot(
    args: CopySnapshotCommandInput,
    cb: (err: any, data?: CopySnapshotCommandOutput) => void
  ): void;
  public copySnapshot(
    args: CopySnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CopySnapshotCommandOutput) => void
  ): void;
  public copySnapshot(
    args: CopySnapshotCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CopySnapshotCommandOutput) => void),
    cb?: (err: any, data?: CopySnapshotCommandOutput) => void
  ): Promise<CopySnapshotCommandOutput> | void {
    const command = new CopySnapshotCommand(args);
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
   * <p>Creates an AWS CloudFormation stack, which creates a new Amazon EC2 instance from an exported
   *       Amazon Lightsail snapshot. This operation results in a CloudFormation stack record that can be
   *       used to track the AWS CloudFormation stack created. Use the <code>get cloud formation stack
   *         records</code> operation to get a list of the CloudFormation stacks created.</p>
   *          <important>
   *             <p>Wait until after your new Amazon EC2 instance is created before running the <code>create
   *           cloud formation stack</code> operation again with the same export snapshot record.</p>
   *          </important>
   */
  public createCloudFormationStack(
    args: CreateCloudFormationStackCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCloudFormationStackCommandOutput>;
  public createCloudFormationStack(
    args: CreateCloudFormationStackCommandInput,
    cb: (err: any, data?: CreateCloudFormationStackCommandOutput) => void
  ): void;
  public createCloudFormationStack(
    args: CreateCloudFormationStackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCloudFormationStackCommandOutput) => void
  ): void;
  public createCloudFormationStack(
    args: CreateCloudFormationStackCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateCloudFormationStackCommandOutput) => void),
    cb?: (err: any, data?: CreateCloudFormationStackCommandOutput) => void
  ): Promise<CreateCloudFormationStackCommandOutput> | void {
    const command = new CreateCloudFormationStackCommand(args);
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
   * <p>Creates a block storage disk that can be attached to an Amazon Lightsail instance in the
   *       same Availability Zone (e.g., <code>us-east-2a</code>).</p>
   *          <p>The <code>create disk</code> operation supports tag-based access control via request
   *       tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   */
  public createDisk(
    args: CreateDiskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDiskCommandOutput>;
  public createDisk(
    args: CreateDiskCommandInput,
    cb: (err: any, data?: CreateDiskCommandOutput) => void
  ): void;
  public createDisk(
    args: CreateDiskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDiskCommandOutput) => void
  ): void;
  public createDisk(
    args: CreateDiskCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateDiskCommandOutput) => void),
    cb?: (err: any, data?: CreateDiskCommandOutput) => void
  ): Promise<CreateDiskCommandOutput> | void {
    const command = new CreateDiskCommand(args);
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
   * <p>Creates a block storage disk from a manual or automatic snapshot of a disk. The
   *       resulting disk can be attached to an Amazon Lightsail instance in the same Availability Zone
   *       (e.g., <code>us-east-2a</code>).</p>
   *          <p>The <code>create disk from snapshot</code> operation supports tag-based access control
   *       via request tags and resource tags applied to the resource identified by <code>disk snapshot
   *         name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   */
  public createDiskFromSnapshot(
    args: CreateDiskFromSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDiskFromSnapshotCommandOutput>;
  public createDiskFromSnapshot(
    args: CreateDiskFromSnapshotCommandInput,
    cb: (err: any, data?: CreateDiskFromSnapshotCommandOutput) => void
  ): void;
  public createDiskFromSnapshot(
    args: CreateDiskFromSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDiskFromSnapshotCommandOutput) => void
  ): void;
  public createDiskFromSnapshot(
    args: CreateDiskFromSnapshotCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateDiskFromSnapshotCommandOutput) => void),
    cb?: (err: any, data?: CreateDiskFromSnapshotCommandOutput) => void
  ): Promise<CreateDiskFromSnapshotCommandOutput> | void {
    const command = new CreateDiskFromSnapshotCommand(args);
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
   * <p>Creates a snapshot of a block storage disk. You can use snapshots for backups, to make
   *       copies of disks, and to save data before shutting down a Lightsail instance.</p>
   *          <p>You can take a snapshot of an attached disk that is in use; however, snapshots only
   *       capture data that has been written to your disk at the time the snapshot command is issued.
   *       This may exclude any data that has been cached by any applications or the operating system. If
   *       you can pause any file systems on the disk long enough to take a snapshot, your snapshot
   *       should be complete. Nevertheless, if you cannot pause all file writes to the disk, you should
   *       unmount the disk from within the Lightsail instance, issue the create disk snapshot command,
   *       and then remount the disk to ensure a consistent and complete snapshot. You may remount and
   *       use your disk while the snapshot status is pending.</p>
   *          <p>You can also use this operation to create a snapshot of an instance's system volume. You
   *       might want to do this, for example, to recover data from the system volume of a botched
   *       instance or to create a backup of the system volume like you would for a block storage disk.
   *       To create a snapshot of a system volume, just define the <code>instance name</code> parameter
   *       when issuing the snapshot command, and a snapshot of the defined instance's system volume will
   *       be created. After the snapshot is available, you can create a block storage disk from the
   *       snapshot and attach it to a running instance to access the data on the disk.</p>
   *
   *          <p>The <code>create disk snapshot</code> operation supports tag-based access control via
   *       request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   */
  public createDiskSnapshot(
    args: CreateDiskSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDiskSnapshotCommandOutput>;
  public createDiskSnapshot(
    args: CreateDiskSnapshotCommandInput,
    cb: (err: any, data?: CreateDiskSnapshotCommandOutput) => void
  ): void;
  public createDiskSnapshot(
    args: CreateDiskSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDiskSnapshotCommandOutput) => void
  ): void;
  public createDiskSnapshot(
    args: CreateDiskSnapshotCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateDiskSnapshotCommandOutput) => void),
    cb?: (err: any, data?: CreateDiskSnapshotCommandOutput) => void
  ): Promise<CreateDiskSnapshotCommandOutput> | void {
    const command = new CreateDiskSnapshotCommand(args);
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
   * <p>Creates a domain resource for the specified domain (e.g., example.com).</p>
   *          <p>The <code>create domain</code> operation supports tag-based access control via request
   *       tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   */
  public createDomain(
    args: CreateDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDomainCommandOutput>;
  public createDomain(
    args: CreateDomainCommandInput,
    cb: (err: any, data?: CreateDomainCommandOutput) => void
  ): void;
  public createDomain(
    args: CreateDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDomainCommandOutput) => void
  ): void;
  public createDomain(
    args: CreateDomainCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateDomainCommandOutput) => void),
    cb?: (err: any, data?: CreateDomainCommandOutput) => void
  ): Promise<CreateDomainCommandOutput> | void {
    const command = new CreateDomainCommand(args);
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
   * <p>Creates one of the following entry records associated with the domain: Address (A),
   *       canonical name (CNAME), mail exchanger (MX), name server (NS), start of authority (SOA),
   *       service locator (SRV), or text (TXT).</p>
   *          <p>The <code>create domain entry</code> operation supports tag-based access control via
   *       resource tags applied to the resource identified by <code>domain name</code>. For more
   *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   */
  public createDomainEntry(
    args: CreateDomainEntryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDomainEntryCommandOutput>;
  public createDomainEntry(
    args: CreateDomainEntryCommandInput,
    cb: (err: any, data?: CreateDomainEntryCommandOutput) => void
  ): void;
  public createDomainEntry(
    args: CreateDomainEntryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDomainEntryCommandOutput) => void
  ): void;
  public createDomainEntry(
    args: CreateDomainEntryCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateDomainEntryCommandOutput) => void),
    cb?: (err: any, data?: CreateDomainEntryCommandOutput) => void
  ): Promise<CreateDomainEntryCommandOutput> | void {
    const command = new CreateDomainEntryCommand(args);
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
   * <p>Creates one or more Amazon Lightsail instances.</p>
   *          <p>The <code>create instances</code> operation supports tag-based access control via
   *       request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   */
  public createInstances(
    args: CreateInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateInstancesCommandOutput>;
  public createInstances(
    args: CreateInstancesCommandInput,
    cb: (err: any, data?: CreateInstancesCommandOutput) => void
  ): void;
  public createInstances(
    args: CreateInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateInstancesCommandOutput) => void
  ): void;
  public createInstances(
    args: CreateInstancesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateInstancesCommandOutput) => void),
    cb?: (err: any, data?: CreateInstancesCommandOutput) => void
  ): Promise<CreateInstancesCommandOutput> | void {
    const command = new CreateInstancesCommand(args);
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
   * <p>Creates one or more new instances from a manual or automatic snapshot of an
   *       instance.</p>
   *          <p>The <code>create instances from snapshot</code> operation supports tag-based access
   *       control via request tags and resource tags applied to the resource identified by
   *         <code>instance snapshot name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   */
  public createInstancesFromSnapshot(
    args: CreateInstancesFromSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateInstancesFromSnapshotCommandOutput>;
  public createInstancesFromSnapshot(
    args: CreateInstancesFromSnapshotCommandInput,
    cb: (err: any, data?: CreateInstancesFromSnapshotCommandOutput) => void
  ): void;
  public createInstancesFromSnapshot(
    args: CreateInstancesFromSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateInstancesFromSnapshotCommandOutput) => void
  ): void;
  public createInstancesFromSnapshot(
    args: CreateInstancesFromSnapshotCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateInstancesFromSnapshotCommandOutput) => void),
    cb?: (err: any, data?: CreateInstancesFromSnapshotCommandOutput) => void
  ): Promise<CreateInstancesFromSnapshotCommandOutput> | void {
    const command = new CreateInstancesFromSnapshotCommand(args);
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
   * <p>Creates a snapshot of a specific virtual private server, or
   *         <i>instance</i>. You can use a snapshot to create a new instance that is based
   *       on that snapshot.</p>
   *          <p>The <code>create instance snapshot</code> operation supports tag-based access control
   *       via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   */
  public createInstanceSnapshot(
    args: CreateInstanceSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateInstanceSnapshotCommandOutput>;
  public createInstanceSnapshot(
    args: CreateInstanceSnapshotCommandInput,
    cb: (err: any, data?: CreateInstanceSnapshotCommandOutput) => void
  ): void;
  public createInstanceSnapshot(
    args: CreateInstanceSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateInstanceSnapshotCommandOutput) => void
  ): void;
  public createInstanceSnapshot(
    args: CreateInstanceSnapshotCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateInstanceSnapshotCommandOutput) => void),
    cb?: (err: any, data?: CreateInstanceSnapshotCommandOutput) => void
  ): Promise<CreateInstanceSnapshotCommandOutput> | void {
    const command = new CreateInstanceSnapshotCommand(args);
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
   * <p>Creates an SSH key pair.</p>
   *          <p>The <code>create key pair</code> operation supports tag-based access control via
   *       request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   */
  public createKeyPair(
    args: CreateKeyPairCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateKeyPairCommandOutput>;
  public createKeyPair(
    args: CreateKeyPairCommandInput,
    cb: (err: any, data?: CreateKeyPairCommandOutput) => void
  ): void;
  public createKeyPair(
    args: CreateKeyPairCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateKeyPairCommandOutput) => void
  ): void;
  public createKeyPair(
    args: CreateKeyPairCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateKeyPairCommandOutput) => void),
    cb?: (err: any, data?: CreateKeyPairCommandOutput) => void
  ): Promise<CreateKeyPairCommandOutput> | void {
    const command = new CreateKeyPairCommand(args);
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
   * <p>Creates a Lightsail load balancer. To learn more about deciding whether to load
   *       balance your application, see <a href="https://lightsail.aws.amazon.com/ls/docs/how-to/article/configure-lightsail-instances-for-load-balancing">Configure your Lightsail instances for load balancing</a>. You can create up to 5
   *       load balancers per AWS Region in your account.</p>
   *          <p>When you create a load balancer, you can specify a unique name and port settings. To
   *       change additional load balancer settings, use the <code>UpdateLoadBalancerAttribute</code>
   *       operation.</p>
   *          <p>The <code>create load balancer</code> operation supports tag-based access control via
   *       request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   */
  public createLoadBalancer(
    args: CreateLoadBalancerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLoadBalancerCommandOutput>;
  public createLoadBalancer(
    args: CreateLoadBalancerCommandInput,
    cb: (err: any, data?: CreateLoadBalancerCommandOutput) => void
  ): void;
  public createLoadBalancer(
    args: CreateLoadBalancerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLoadBalancerCommandOutput) => void
  ): void;
  public createLoadBalancer(
    args: CreateLoadBalancerCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateLoadBalancerCommandOutput) => void),
    cb?: (err: any, data?: CreateLoadBalancerCommandOutput) => void
  ): Promise<CreateLoadBalancerCommandOutput> | void {
    const command = new CreateLoadBalancerCommand(args);
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
   * <p>Creates a Lightsail load balancer TLS certificate.</p>
   *          <p>TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p>
   *          <p>The <code>create load balancer tls certificate</code> operation supports tag-based
   *       access control via resource tags applied to the resource identified by <code>load balancer
   *         name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   */
  public createLoadBalancerTlsCertificate(
    args: CreateLoadBalancerTlsCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLoadBalancerTlsCertificateCommandOutput>;
  public createLoadBalancerTlsCertificate(
    args: CreateLoadBalancerTlsCertificateCommandInput,
    cb: (err: any, data?: CreateLoadBalancerTlsCertificateCommandOutput) => void
  ): void;
  public createLoadBalancerTlsCertificate(
    args: CreateLoadBalancerTlsCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLoadBalancerTlsCertificateCommandOutput) => void
  ): void;
  public createLoadBalancerTlsCertificate(
    args: CreateLoadBalancerTlsCertificateCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: CreateLoadBalancerTlsCertificateCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: CreateLoadBalancerTlsCertificateCommandOutput
    ) => void
  ): Promise<CreateLoadBalancerTlsCertificateCommandOutput> | void {
    const command = new CreateLoadBalancerTlsCertificateCommand(args);
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
   * <p>Creates a new database in Amazon Lightsail.</p>
   *          <p>The <code>create relational database</code> operation supports tag-based access control
   *       via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   */
  public createRelationalDatabase(
    args: CreateRelationalDatabaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRelationalDatabaseCommandOutput>;
  public createRelationalDatabase(
    args: CreateRelationalDatabaseCommandInput,
    cb: (err: any, data?: CreateRelationalDatabaseCommandOutput) => void
  ): void;
  public createRelationalDatabase(
    args: CreateRelationalDatabaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRelationalDatabaseCommandOutput) => void
  ): void;
  public createRelationalDatabase(
    args: CreateRelationalDatabaseCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateRelationalDatabaseCommandOutput) => void),
    cb?: (err: any, data?: CreateRelationalDatabaseCommandOutput) => void
  ): Promise<CreateRelationalDatabaseCommandOutput> | void {
    const command = new CreateRelationalDatabaseCommand(args);
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
   * <p>Creates a new database from an existing database snapshot in Amazon Lightsail.</p>
   *          <p>You can create a new database from a snapshot in if something goes wrong with your
   *       original database, or to change it to a different plan, such as a high availability or
   *       standard plan.</p>
   *          <p>The <code>create relational database from snapshot</code> operation supports tag-based
   *       access control via request tags and resource tags applied to the resource identified by
   *       relationalDatabaseSnapshotName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   */
  public createRelationalDatabaseFromSnapshot(
    args: CreateRelationalDatabaseFromSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRelationalDatabaseFromSnapshotCommandOutput>;
  public createRelationalDatabaseFromSnapshot(
    args: CreateRelationalDatabaseFromSnapshotCommandInput,
    cb: (
      err: any,
      data?: CreateRelationalDatabaseFromSnapshotCommandOutput
    ) => void
  ): void;
  public createRelationalDatabaseFromSnapshot(
    args: CreateRelationalDatabaseFromSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: CreateRelationalDatabaseFromSnapshotCommandOutput
    ) => void
  ): void;
  public createRelationalDatabaseFromSnapshot(
    args: CreateRelationalDatabaseFromSnapshotCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: CreateRelationalDatabaseFromSnapshotCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: CreateRelationalDatabaseFromSnapshotCommandOutput
    ) => void
  ): Promise<CreateRelationalDatabaseFromSnapshotCommandOutput> | void {
    const command = new CreateRelationalDatabaseFromSnapshotCommand(args);
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
   * <p>Creates a snapshot of your database in Amazon Lightsail. You can use snapshots for
   *       backups, to make copies of a database, and to save data before deleting a database.</p>
   *          <p>The <code>create relational database snapshot</code> operation supports tag-based
   *       access control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   */
  public createRelationalDatabaseSnapshot(
    args: CreateRelationalDatabaseSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRelationalDatabaseSnapshotCommandOutput>;
  public createRelationalDatabaseSnapshot(
    args: CreateRelationalDatabaseSnapshotCommandInput,
    cb: (err: any, data?: CreateRelationalDatabaseSnapshotCommandOutput) => void
  ): void;
  public createRelationalDatabaseSnapshot(
    args: CreateRelationalDatabaseSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRelationalDatabaseSnapshotCommandOutput) => void
  ): void;
  public createRelationalDatabaseSnapshot(
    args: CreateRelationalDatabaseSnapshotCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: CreateRelationalDatabaseSnapshotCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: CreateRelationalDatabaseSnapshotCommandOutput
    ) => void
  ): Promise<CreateRelationalDatabaseSnapshotCommandOutput> | void {
    const command = new CreateRelationalDatabaseSnapshotCommand(args);
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
   * <p>Deletes an automatic snapshot of an instance or disk. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Lightsail Dev Guide</a>.</p>
   */
  public deleteAutoSnapshot(
    args: DeleteAutoSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAutoSnapshotCommandOutput>;
  public deleteAutoSnapshot(
    args: DeleteAutoSnapshotCommandInput,
    cb: (err: any, data?: DeleteAutoSnapshotCommandOutput) => void
  ): void;
  public deleteAutoSnapshot(
    args: DeleteAutoSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAutoSnapshotCommandOutput) => void
  ): void;
  public deleteAutoSnapshot(
    args: DeleteAutoSnapshotCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteAutoSnapshotCommandOutput) => void),
    cb?: (err: any, data?: DeleteAutoSnapshotCommandOutput) => void
  ): Promise<DeleteAutoSnapshotCommandOutput> | void {
    const command = new DeleteAutoSnapshotCommand(args);
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
   * <p>Deletes the specified block storage disk. The disk must be in the
   *         <code>available</code> state (not attached to a Lightsail instance).</p>
   *          <note>
   *             <p>The disk may remain in the <code>deleting</code> state for several minutes.</p>
   *
   *          </note>
   *          <p>The <code>delete disk</code> operation supports tag-based access control via resource
   *       tags applied to the resource identified by <code>disk name</code>. For more information, see
   *       the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   */
  public deleteDisk(
    args: DeleteDiskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDiskCommandOutput>;
  public deleteDisk(
    args: DeleteDiskCommandInput,
    cb: (err: any, data?: DeleteDiskCommandOutput) => void
  ): void;
  public deleteDisk(
    args: DeleteDiskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDiskCommandOutput) => void
  ): void;
  public deleteDisk(
    args: DeleteDiskCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteDiskCommandOutput) => void),
    cb?: (err: any, data?: DeleteDiskCommandOutput) => void
  ): Promise<DeleteDiskCommandOutput> | void {
    const command = new DeleteDiskCommand(args);
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
   * <p>Deletes the specified disk snapshot.</p>
   *          <p>When you make periodic snapshots of a disk, the snapshots are incremental, and only the
   *       blocks on the device that have changed since your last snapshot are saved in the new snapshot.
   *       When you delete a snapshot, only the data not needed for any other snapshot is removed. So
   *       regardless of which prior snapshots have been deleted, all active snapshots will have access
   *       to all the information needed to restore the disk.</p>
   *          <p>The <code>delete disk snapshot</code> operation supports tag-based access control via
   *       resource tags applied to the resource identified by <code>disk snapshot name</code>. For more
   *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   */
  public deleteDiskSnapshot(
    args: DeleteDiskSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDiskSnapshotCommandOutput>;
  public deleteDiskSnapshot(
    args: DeleteDiskSnapshotCommandInput,
    cb: (err: any, data?: DeleteDiskSnapshotCommandOutput) => void
  ): void;
  public deleteDiskSnapshot(
    args: DeleteDiskSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDiskSnapshotCommandOutput) => void
  ): void;
  public deleteDiskSnapshot(
    args: DeleteDiskSnapshotCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteDiskSnapshotCommandOutput) => void),
    cb?: (err: any, data?: DeleteDiskSnapshotCommandOutput) => void
  ): Promise<DeleteDiskSnapshotCommandOutput> | void {
    const command = new DeleteDiskSnapshotCommand(args);
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
   * <p>Deletes the specified domain recordset and all of its domain records.</p>
   *          <p>The <code>delete domain</code> operation supports tag-based access control via resource
   *       tags applied to the resource identified by <code>domain name</code>. For more information, see
   *       the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   */
  public deleteDomain(
    args: DeleteDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDomainCommandOutput>;
  public deleteDomain(
    args: DeleteDomainCommandInput,
    cb: (err: any, data?: DeleteDomainCommandOutput) => void
  ): void;
  public deleteDomain(
    args: DeleteDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDomainCommandOutput) => void
  ): void;
  public deleteDomain(
    args: DeleteDomainCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteDomainCommandOutput) => void),
    cb?: (err: any, data?: DeleteDomainCommandOutput) => void
  ): Promise<DeleteDomainCommandOutput> | void {
    const command = new DeleteDomainCommand(args);
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
   * <p>Deletes a specific domain entry.</p>
   *          <p>The <code>delete domain entry</code> operation supports tag-based access control via
   *       resource tags applied to the resource identified by <code>domain name</code>. For more
   *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   */
  public deleteDomainEntry(
    args: DeleteDomainEntryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDomainEntryCommandOutput>;
  public deleteDomainEntry(
    args: DeleteDomainEntryCommandInput,
    cb: (err: any, data?: DeleteDomainEntryCommandOutput) => void
  ): void;
  public deleteDomainEntry(
    args: DeleteDomainEntryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDomainEntryCommandOutput) => void
  ): void;
  public deleteDomainEntry(
    args: DeleteDomainEntryCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteDomainEntryCommandOutput) => void),
    cb?: (err: any, data?: DeleteDomainEntryCommandOutput) => void
  ): Promise<DeleteDomainEntryCommandOutput> | void {
    const command = new DeleteDomainEntryCommand(args);
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
   * <p>Deletes an Amazon Lightsail instance.</p>
   *          <p>The <code>delete instance</code> operation supports tag-based access control via
   *       resource tags applied to the resource identified by <code>instance name</code>. For more
   *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   */
  public deleteInstance(
    args: DeleteInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInstanceCommandOutput>;
  public deleteInstance(
    args: DeleteInstanceCommandInput,
    cb: (err: any, data?: DeleteInstanceCommandOutput) => void
  ): void;
  public deleteInstance(
    args: DeleteInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInstanceCommandOutput) => void
  ): void;
  public deleteInstance(
    args: DeleteInstanceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteInstanceCommandOutput) => void),
    cb?: (err: any, data?: DeleteInstanceCommandOutput) => void
  ): Promise<DeleteInstanceCommandOutput> | void {
    const command = new DeleteInstanceCommand(args);
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
   * <p>Deletes a specific snapshot of a virtual private server (or
   *         <i>instance</i>).</p>
   *          <p>The <code>delete instance snapshot</code> operation supports tag-based access control
   *       via resource tags applied to the resource identified by <code>instance snapshot name</code>.
   *       For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   */
  public deleteInstanceSnapshot(
    args: DeleteInstanceSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInstanceSnapshotCommandOutput>;
  public deleteInstanceSnapshot(
    args: DeleteInstanceSnapshotCommandInput,
    cb: (err: any, data?: DeleteInstanceSnapshotCommandOutput) => void
  ): void;
  public deleteInstanceSnapshot(
    args: DeleteInstanceSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInstanceSnapshotCommandOutput) => void
  ): void;
  public deleteInstanceSnapshot(
    args: DeleteInstanceSnapshotCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteInstanceSnapshotCommandOutput) => void),
    cb?: (err: any, data?: DeleteInstanceSnapshotCommandOutput) => void
  ): Promise<DeleteInstanceSnapshotCommandOutput> | void {
    const command = new DeleteInstanceSnapshotCommand(args);
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
   * <p>Deletes a specific SSH key pair.</p>
   *          <p>The <code>delete key pair</code> operation supports tag-based access control via
   *       resource tags applied to the resource identified by <code>key pair name</code>. For more
   *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   */
  public deleteKeyPair(
    args: DeleteKeyPairCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteKeyPairCommandOutput>;
  public deleteKeyPair(
    args: DeleteKeyPairCommandInput,
    cb: (err: any, data?: DeleteKeyPairCommandOutput) => void
  ): void;
  public deleteKeyPair(
    args: DeleteKeyPairCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteKeyPairCommandOutput) => void
  ): void;
  public deleteKeyPair(
    args: DeleteKeyPairCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteKeyPairCommandOutput) => void),
    cb?: (err: any, data?: DeleteKeyPairCommandOutput) => void
  ): Promise<DeleteKeyPairCommandOutput> | void {
    const command = new DeleteKeyPairCommand(args);
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
   * <p>Deletes the known host key or certificate used by the Amazon Lightsail browser-based SSH or
   *       RDP clients to authenticate an instance. This operation enables the Lightsail browser-based
   *       SSH or RDP clients to connect to the instance after a host key mismatch.</p>
   *          <important>
   *             <p>Perform this operation only if you were expecting the host key or certificate mismatch
   *         or if you are familiar with the new host key or certificate on the instance. For more
   *         information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-troubleshooting-browser-based-ssh-rdp-client-connection">Troubleshooting connection issues when using the Amazon Lightsail browser-based SSH or RDP
   *           client</a>.</p>
   *          </important>
   */
  public deleteKnownHostKeys(
    args: DeleteKnownHostKeysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteKnownHostKeysCommandOutput>;
  public deleteKnownHostKeys(
    args: DeleteKnownHostKeysCommandInput,
    cb: (err: any, data?: DeleteKnownHostKeysCommandOutput) => void
  ): void;
  public deleteKnownHostKeys(
    args: DeleteKnownHostKeysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteKnownHostKeysCommandOutput) => void
  ): void;
  public deleteKnownHostKeys(
    args: DeleteKnownHostKeysCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteKnownHostKeysCommandOutput) => void),
    cb?: (err: any, data?: DeleteKnownHostKeysCommandOutput) => void
  ): Promise<DeleteKnownHostKeysCommandOutput> | void {
    const command = new DeleteKnownHostKeysCommand(args);
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
   * <p>Deletes a Lightsail load balancer and all its associated SSL/TLS certificates. Once
   *       the load balancer is deleted, you will need to create a new load balancer, create a new
   *       certificate, and verify domain ownership again.</p>
   *          <p>The <code>delete load balancer</code> operation supports tag-based access control via
   *       resource tags applied to the resource identified by <code>load balancer name</code>. For more
   *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   */
  public deleteLoadBalancer(
    args: DeleteLoadBalancerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLoadBalancerCommandOutput>;
  public deleteLoadBalancer(
    args: DeleteLoadBalancerCommandInput,
    cb: (err: any, data?: DeleteLoadBalancerCommandOutput) => void
  ): void;
  public deleteLoadBalancer(
    args: DeleteLoadBalancerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLoadBalancerCommandOutput) => void
  ): void;
  public deleteLoadBalancer(
    args: DeleteLoadBalancerCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteLoadBalancerCommandOutput) => void),
    cb?: (err: any, data?: DeleteLoadBalancerCommandOutput) => void
  ): Promise<DeleteLoadBalancerCommandOutput> | void {
    const command = new DeleteLoadBalancerCommand(args);
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
   * <p>Deletes an SSL/TLS certificate associated with a Lightsail load balancer.</p>
   *          <p>The <code>delete load balancer tls certificate</code> operation supports tag-based
   *       access control via resource tags applied to the resource identified by <code>load balancer
   *         name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   */
  public deleteLoadBalancerTlsCertificate(
    args: DeleteLoadBalancerTlsCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLoadBalancerTlsCertificateCommandOutput>;
  public deleteLoadBalancerTlsCertificate(
    args: DeleteLoadBalancerTlsCertificateCommandInput,
    cb: (err: any, data?: DeleteLoadBalancerTlsCertificateCommandOutput) => void
  ): void;
  public deleteLoadBalancerTlsCertificate(
    args: DeleteLoadBalancerTlsCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLoadBalancerTlsCertificateCommandOutput) => void
  ): void;
  public deleteLoadBalancerTlsCertificate(
    args: DeleteLoadBalancerTlsCertificateCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: DeleteLoadBalancerTlsCertificateCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: DeleteLoadBalancerTlsCertificateCommandOutput
    ) => void
  ): Promise<DeleteLoadBalancerTlsCertificateCommandOutput> | void {
    const command = new DeleteLoadBalancerTlsCertificateCommand(args);
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
   * <p>Deletes a database in Amazon Lightsail.</p>
   *          <p>The <code>delete relational database</code> operation supports tag-based access control
   *       via resource tags applied to the resource identified by relationalDatabaseName. For more
   *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   */
  public deleteRelationalDatabase(
    args: DeleteRelationalDatabaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRelationalDatabaseCommandOutput>;
  public deleteRelationalDatabase(
    args: DeleteRelationalDatabaseCommandInput,
    cb: (err: any, data?: DeleteRelationalDatabaseCommandOutput) => void
  ): void;
  public deleteRelationalDatabase(
    args: DeleteRelationalDatabaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRelationalDatabaseCommandOutput) => void
  ): void;
  public deleteRelationalDatabase(
    args: DeleteRelationalDatabaseCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteRelationalDatabaseCommandOutput) => void),
    cb?: (err: any, data?: DeleteRelationalDatabaseCommandOutput) => void
  ): Promise<DeleteRelationalDatabaseCommandOutput> | void {
    const command = new DeleteRelationalDatabaseCommand(args);
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
   * <p>Deletes a database snapshot in Amazon Lightsail.</p>
   *          <p>The <code>delete relational database snapshot</code> operation supports tag-based
   *       access control via resource tags applied to the resource identified by relationalDatabaseName.
   *       For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   */
  public deleteRelationalDatabaseSnapshot(
    args: DeleteRelationalDatabaseSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRelationalDatabaseSnapshotCommandOutput>;
  public deleteRelationalDatabaseSnapshot(
    args: DeleteRelationalDatabaseSnapshotCommandInput,
    cb: (err: any, data?: DeleteRelationalDatabaseSnapshotCommandOutput) => void
  ): void;
  public deleteRelationalDatabaseSnapshot(
    args: DeleteRelationalDatabaseSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRelationalDatabaseSnapshotCommandOutput) => void
  ): void;
  public deleteRelationalDatabaseSnapshot(
    args: DeleteRelationalDatabaseSnapshotCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: DeleteRelationalDatabaseSnapshotCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: DeleteRelationalDatabaseSnapshotCommandOutput
    ) => void
  ): Promise<DeleteRelationalDatabaseSnapshotCommandOutput> | void {
    const command = new DeleteRelationalDatabaseSnapshotCommand(args);
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
   * <p>Detaches a stopped block storage disk from a Lightsail instance. Make sure to unmount
   *       any file systems on the device within your operating system before stopping the instance and
   *       detaching the disk.</p>
   *          <p>The <code>detach disk</code> operation supports tag-based access control via resource
   *       tags applied to the resource identified by <code>disk name</code>. For more information, see
   *       the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   */
  public detachDisk(
    args: DetachDiskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachDiskCommandOutput>;
  public detachDisk(
    args: DetachDiskCommandInput,
    cb: (err: any, data?: DetachDiskCommandOutput) => void
  ): void;
  public detachDisk(
    args: DetachDiskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachDiskCommandOutput) => void
  ): void;
  public detachDisk(
    args: DetachDiskCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DetachDiskCommandOutput) => void),
    cb?: (err: any, data?: DetachDiskCommandOutput) => void
  ): Promise<DetachDiskCommandOutput> | void {
    const command = new DetachDiskCommand(args);
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
   * <p>Detaches the specified instances from a Lightsail load balancer.</p>
   *          <p>This operation waits until the instances are no longer needed before they are detached
   *       from the load balancer.</p>
   *          <p>The <code>detach instances from load balancer</code> operation supports tag-based
   *       access control via resource tags applied to the resource identified by <code>load balancer
   *         name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   */
  public detachInstancesFromLoadBalancer(
    args: DetachInstancesFromLoadBalancerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachInstancesFromLoadBalancerCommandOutput>;
  public detachInstancesFromLoadBalancer(
    args: DetachInstancesFromLoadBalancerCommandInput,
    cb: (err: any, data?: DetachInstancesFromLoadBalancerCommandOutput) => void
  ): void;
  public detachInstancesFromLoadBalancer(
    args: DetachInstancesFromLoadBalancerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachInstancesFromLoadBalancerCommandOutput) => void
  ): void;
  public detachInstancesFromLoadBalancer(
    args: DetachInstancesFromLoadBalancerCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: DetachInstancesFromLoadBalancerCommandOutput
        ) => void),
    cb?: (err: any, data?: DetachInstancesFromLoadBalancerCommandOutput) => void
  ): Promise<DetachInstancesFromLoadBalancerCommandOutput> | void {
    const command = new DetachInstancesFromLoadBalancerCommand(args);
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
   * <p>Detaches a static IP from the Amazon Lightsail instance to which it is
   *       attached.</p>
   */
  public detachStaticIp(
    args: DetachStaticIpCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachStaticIpCommandOutput>;
  public detachStaticIp(
    args: DetachStaticIpCommandInput,
    cb: (err: any, data?: DetachStaticIpCommandOutput) => void
  ): void;
  public detachStaticIp(
    args: DetachStaticIpCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachStaticIpCommandOutput) => void
  ): void;
  public detachStaticIp(
    args: DetachStaticIpCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DetachStaticIpCommandOutput) => void),
    cb?: (err: any, data?: DetachStaticIpCommandOutput) => void
  ): Promise<DetachStaticIpCommandOutput> | void {
    const command = new DetachStaticIpCommand(args);
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
   * <p>Disables an add-on for an Amazon Lightsail resource. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Lightsail Dev Guide</a>.</p>
   */
  public disableAddOn(
    args: DisableAddOnCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableAddOnCommandOutput>;
  public disableAddOn(
    args: DisableAddOnCommandInput,
    cb: (err: any, data?: DisableAddOnCommandOutput) => void
  ): void;
  public disableAddOn(
    args: DisableAddOnCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableAddOnCommandOutput) => void
  ): void;
  public disableAddOn(
    args: DisableAddOnCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DisableAddOnCommandOutput) => void),
    cb?: (err: any, data?: DisableAddOnCommandOutput) => void
  ): Promise<DisableAddOnCommandOutput> | void {
    const command = new DisableAddOnCommand(args);
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
   * <p>Downloads the default SSH key pair from the user's account.</p>
   */
  public downloadDefaultKeyPair(
    args: DownloadDefaultKeyPairCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DownloadDefaultKeyPairCommandOutput>;
  public downloadDefaultKeyPair(
    args: DownloadDefaultKeyPairCommandInput,
    cb: (err: any, data?: DownloadDefaultKeyPairCommandOutput) => void
  ): void;
  public downloadDefaultKeyPair(
    args: DownloadDefaultKeyPairCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DownloadDefaultKeyPairCommandOutput) => void
  ): void;
  public downloadDefaultKeyPair(
    args: DownloadDefaultKeyPairCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DownloadDefaultKeyPairCommandOutput) => void),
    cb?: (err: any, data?: DownloadDefaultKeyPairCommandOutput) => void
  ): Promise<DownloadDefaultKeyPairCommandOutput> | void {
    const command = new DownloadDefaultKeyPairCommand(args);
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
   * <p>Enables or modifies an add-on for an Amazon Lightsail resource. For more information, see
   *       the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Lightsail Dev Guide</a>.</p>
   */
  public enableAddOn(
    args: EnableAddOnCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableAddOnCommandOutput>;
  public enableAddOn(
    args: EnableAddOnCommandInput,
    cb: (err: any, data?: EnableAddOnCommandOutput) => void
  ): void;
  public enableAddOn(
    args: EnableAddOnCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableAddOnCommandOutput) => void
  ): void;
  public enableAddOn(
    args: EnableAddOnCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: EnableAddOnCommandOutput) => void),
    cb?: (err: any, data?: EnableAddOnCommandOutput) => void
  ): Promise<EnableAddOnCommandOutput> | void {
    const command = new EnableAddOnCommand(args);
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
   * <p>Exports an Amazon Lightsail instance or block storage disk snapshot to Amazon Elastic Compute Cloud (Amazon EC2).
   *       This operation results in an export snapshot record that can be used with the <code>create
   *         cloud formation stack</code> operation to create new Amazon EC2 instances.</p>
   *          <p>Exported instance snapshots appear in Amazon EC2 as Amazon Machine Images (AMIs), and the
   *       instance system disk appears as an Amazon Elastic Block Store (Amazon EBS) volume. Exported disk snapshots appear in
   *       Amazon EC2 as Amazon EBS volumes. Snapshots are exported to the same Amazon Web Services Region in Amazon EC2 as the
   *       source Lightsail snapshot.</p>
   *          <p></p>
   *          <p>The <code>export snapshot</code> operation supports tag-based access control via
   *       resource tags applied to the resource identified by <code>source snapshot name</code>. For
   *       more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   *          <note>
   *             <p>Use the <code>get instance snapshots</code> or <code>get disk snapshots</code>
   *         operations to get a list of snapshots that you can export to Amazon EC2.</p>
   *          </note>
   */
  public exportSnapshot(
    args: ExportSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExportSnapshotCommandOutput>;
  public exportSnapshot(
    args: ExportSnapshotCommandInput,
    cb: (err: any, data?: ExportSnapshotCommandOutput) => void
  ): void;
  public exportSnapshot(
    args: ExportSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportSnapshotCommandOutput) => void
  ): void;
  public exportSnapshot(
    args: ExportSnapshotCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ExportSnapshotCommandOutput) => void),
    cb?: (err: any, data?: ExportSnapshotCommandOutput) => void
  ): Promise<ExportSnapshotCommandOutput> | void {
    const command = new ExportSnapshotCommand(args);
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
   * <p>Returns the names of all active (not deleted) resources.</p>
   */
  public getActiveNames(
    args: GetActiveNamesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetActiveNamesCommandOutput>;
  public getActiveNames(
    args: GetActiveNamesCommandInput,
    cb: (err: any, data?: GetActiveNamesCommandOutput) => void
  ): void;
  public getActiveNames(
    args: GetActiveNamesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetActiveNamesCommandOutput) => void
  ): void;
  public getActiveNames(
    args: GetActiveNamesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetActiveNamesCommandOutput) => void),
    cb?: (err: any, data?: GetActiveNamesCommandOutput) => void
  ): Promise<GetActiveNamesCommandOutput> | void {
    const command = new GetActiveNamesCommand(args);
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
   * <p>Returns the available automatic snapshots for an instance or disk. For more information,
   *       see the <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-configuring-automatic-snapshots">Lightsail Dev Guide</a>.</p>
   */
  public getAutoSnapshots(
    args: GetAutoSnapshotsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAutoSnapshotsCommandOutput>;
  public getAutoSnapshots(
    args: GetAutoSnapshotsCommandInput,
    cb: (err: any, data?: GetAutoSnapshotsCommandOutput) => void
  ): void;
  public getAutoSnapshots(
    args: GetAutoSnapshotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAutoSnapshotsCommandOutput) => void
  ): void;
  public getAutoSnapshots(
    args: GetAutoSnapshotsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetAutoSnapshotsCommandOutput) => void),
    cb?: (err: any, data?: GetAutoSnapshotsCommandOutput) => void
  ): Promise<GetAutoSnapshotsCommandOutput> | void {
    const command = new GetAutoSnapshotsCommand(args);
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
   * <p>Returns the list of available instance images, or <i>blueprints</i>. You
   *       can use a blueprint to create a new instance already running a specific operating system, as
   *       well as a preinstalled app or development stack. The software each instance is running depends
   *       on the blueprint image you choose.</p>
   *          <note>
   *             <p>Use active blueprints when creating new instances. Inactive blueprints are listed to
   *         support customers with existing instances and are not necessarily available to create new
   *         instances. Blueprints are marked inactive when they become outdated due to operating system
   *         updates or new application releases.</p>
   *          </note>
   */
  public getBlueprints(
    args: GetBlueprintsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBlueprintsCommandOutput>;
  public getBlueprints(
    args: GetBlueprintsCommandInput,
    cb: (err: any, data?: GetBlueprintsCommandOutput) => void
  ): void;
  public getBlueprints(
    args: GetBlueprintsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBlueprintsCommandOutput) => void
  ): void;
  public getBlueprints(
    args: GetBlueprintsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetBlueprintsCommandOutput) => void),
    cb?: (err: any, data?: GetBlueprintsCommandOutput) => void
  ): Promise<GetBlueprintsCommandOutput> | void {
    const command = new GetBlueprintsCommand(args);
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
   * <p>Returns the list of bundles that are available for purchase. A bundle describes the
   *       specs for your virtual private server (or <i>instance</i>).</p>
   */
  public getBundles(
    args: GetBundlesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBundlesCommandOutput>;
  public getBundles(
    args: GetBundlesCommandInput,
    cb: (err: any, data?: GetBundlesCommandOutput) => void
  ): void;
  public getBundles(
    args: GetBundlesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBundlesCommandOutput) => void
  ): void;
  public getBundles(
    args: GetBundlesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetBundlesCommandOutput) => void),
    cb?: (err: any, data?: GetBundlesCommandOutput) => void
  ): Promise<GetBundlesCommandOutput> | void {
    const command = new GetBundlesCommand(args);
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
   * <p>Returns the CloudFormation stack record created as a result of the <code>create cloud
   *         formation stack</code> operation.</p>
   *          <p>An AWS CloudFormation stack is used to create a new Amazon EC2 instance from an exported Lightsail
   *       snapshot.</p>
   */
  public getCloudFormationStackRecords(
    args: GetCloudFormationStackRecordsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCloudFormationStackRecordsCommandOutput>;
  public getCloudFormationStackRecords(
    args: GetCloudFormationStackRecordsCommandInput,
    cb: (err: any, data?: GetCloudFormationStackRecordsCommandOutput) => void
  ): void;
  public getCloudFormationStackRecords(
    args: GetCloudFormationStackRecordsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCloudFormationStackRecordsCommandOutput) => void
  ): void;
  public getCloudFormationStackRecords(
    args: GetCloudFormationStackRecordsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetCloudFormationStackRecordsCommandOutput) => void),
    cb?: (err: any, data?: GetCloudFormationStackRecordsCommandOutput) => void
  ): Promise<GetCloudFormationStackRecordsCommandOutput> | void {
    const command = new GetCloudFormationStackRecordsCommand(args);
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
   * <p>Returns information about a specific block storage disk.</p>
   */
  public getDisk(
    args: GetDiskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDiskCommandOutput>;
  public getDisk(
    args: GetDiskCommandInput,
    cb: (err: any, data?: GetDiskCommandOutput) => void
  ): void;
  public getDisk(
    args: GetDiskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDiskCommandOutput) => void
  ): void;
  public getDisk(
    args: GetDiskCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetDiskCommandOutput) => void),
    cb?: (err: any, data?: GetDiskCommandOutput) => void
  ): Promise<GetDiskCommandOutput> | void {
    const command = new GetDiskCommand(args);
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
   * <p>Returns information about all block storage disks in your AWS account and
   *       region.</p>
   *          <p>If you are describing a long list of disks, you can paginate the output to make the
   *       list more manageable. You can use the pageToken and nextPageToken values to retrieve the next
   *       items in the list.</p>
   */
  public getDisks(
    args: GetDisksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDisksCommandOutput>;
  public getDisks(
    args: GetDisksCommandInput,
    cb: (err: any, data?: GetDisksCommandOutput) => void
  ): void;
  public getDisks(
    args: GetDisksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDisksCommandOutput) => void
  ): void;
  public getDisks(
    args: GetDisksCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetDisksCommandOutput) => void),
    cb?: (err: any, data?: GetDisksCommandOutput) => void
  ): Promise<GetDisksCommandOutput> | void {
    const command = new GetDisksCommand(args);
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
   * <p>Returns information about a specific block storage disk snapshot.</p>
   */
  public getDiskSnapshot(
    args: GetDiskSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDiskSnapshotCommandOutput>;
  public getDiskSnapshot(
    args: GetDiskSnapshotCommandInput,
    cb: (err: any, data?: GetDiskSnapshotCommandOutput) => void
  ): void;
  public getDiskSnapshot(
    args: GetDiskSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDiskSnapshotCommandOutput) => void
  ): void;
  public getDiskSnapshot(
    args: GetDiskSnapshotCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetDiskSnapshotCommandOutput) => void),
    cb?: (err: any, data?: GetDiskSnapshotCommandOutput) => void
  ): Promise<GetDiskSnapshotCommandOutput> | void {
    const command = new GetDiskSnapshotCommand(args);
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
   * <p>Returns information about all block storage disk snapshots in your AWS account and
   *       region.</p>
   *          <p>If you are describing a long list of disk snapshots, you can paginate the output to
   *       make the list more manageable. You can use the pageToken and nextPageToken values to retrieve
   *       the next items in the list.</p>
   */
  public getDiskSnapshots(
    args: GetDiskSnapshotsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDiskSnapshotsCommandOutput>;
  public getDiskSnapshots(
    args: GetDiskSnapshotsCommandInput,
    cb: (err: any, data?: GetDiskSnapshotsCommandOutput) => void
  ): void;
  public getDiskSnapshots(
    args: GetDiskSnapshotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDiskSnapshotsCommandOutput) => void
  ): void;
  public getDiskSnapshots(
    args: GetDiskSnapshotsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetDiskSnapshotsCommandOutput) => void),
    cb?: (err: any, data?: GetDiskSnapshotsCommandOutput) => void
  ): Promise<GetDiskSnapshotsCommandOutput> | void {
    const command = new GetDiskSnapshotsCommand(args);
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
   * <p>Returns information about a specific domain recordset.</p>
   */
  public getDomain(
    args: GetDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDomainCommandOutput>;
  public getDomain(
    args: GetDomainCommandInput,
    cb: (err: any, data?: GetDomainCommandOutput) => void
  ): void;
  public getDomain(
    args: GetDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDomainCommandOutput) => void
  ): void;
  public getDomain(
    args: GetDomainCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetDomainCommandOutput) => void),
    cb?: (err: any, data?: GetDomainCommandOutput) => void
  ): Promise<GetDomainCommandOutput> | void {
    const command = new GetDomainCommand(args);
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
   * <p>Returns a list of all domains in the user's account.</p>
   */
  public getDomains(
    args: GetDomainsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDomainsCommandOutput>;
  public getDomains(
    args: GetDomainsCommandInput,
    cb: (err: any, data?: GetDomainsCommandOutput) => void
  ): void;
  public getDomains(
    args: GetDomainsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDomainsCommandOutput) => void
  ): void;
  public getDomains(
    args: GetDomainsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetDomainsCommandOutput) => void),
    cb?: (err: any, data?: GetDomainsCommandOutput) => void
  ): Promise<GetDomainsCommandOutput> | void {
    const command = new GetDomainsCommand(args);
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
   * <p>Returns the export snapshot record created as a result of the <code>export snapshot</code>
   *       operation.</p>
   *          <p>An export snapshot record can be used to create a new Amazon EC2 instance and its related
   *       resources with the <code>create cloud formation stack</code> operation.</p>
   */
  public getExportSnapshotRecords(
    args: GetExportSnapshotRecordsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetExportSnapshotRecordsCommandOutput>;
  public getExportSnapshotRecords(
    args: GetExportSnapshotRecordsCommandInput,
    cb: (err: any, data?: GetExportSnapshotRecordsCommandOutput) => void
  ): void;
  public getExportSnapshotRecords(
    args: GetExportSnapshotRecordsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetExportSnapshotRecordsCommandOutput) => void
  ): void;
  public getExportSnapshotRecords(
    args: GetExportSnapshotRecordsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetExportSnapshotRecordsCommandOutput) => void),
    cb?: (err: any, data?: GetExportSnapshotRecordsCommandOutput) => void
  ): Promise<GetExportSnapshotRecordsCommandOutput> | void {
    const command = new GetExportSnapshotRecordsCommand(args);
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
   * <p>Returns information about a specific Amazon Lightsail instance, which is a virtual
   *       private server.</p>
   */
  public getInstance(
    args: GetInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInstanceCommandOutput>;
  public getInstance(
    args: GetInstanceCommandInput,
    cb: (err: any, data?: GetInstanceCommandOutput) => void
  ): void;
  public getInstance(
    args: GetInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInstanceCommandOutput) => void
  ): void;
  public getInstance(
    args: GetInstanceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetInstanceCommandOutput) => void),
    cb?: (err: any, data?: GetInstanceCommandOutput) => void
  ): Promise<GetInstanceCommandOutput> | void {
    const command = new GetInstanceCommand(args);
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
   * <p>Returns temporary SSH keys you can use to connect to a specific virtual private server,
   *       or <i>instance</i>.</p>
   *          <p>The <code>get instance access details</code> operation supports tag-based access
   *       control via resource tags applied to the resource identified by <code>instance name</code>.
   *       For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   */
  public getInstanceAccessDetails(
    args: GetInstanceAccessDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInstanceAccessDetailsCommandOutput>;
  public getInstanceAccessDetails(
    args: GetInstanceAccessDetailsCommandInput,
    cb: (err: any, data?: GetInstanceAccessDetailsCommandOutput) => void
  ): void;
  public getInstanceAccessDetails(
    args: GetInstanceAccessDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInstanceAccessDetailsCommandOutput) => void
  ): void;
  public getInstanceAccessDetails(
    args: GetInstanceAccessDetailsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetInstanceAccessDetailsCommandOutput) => void),
    cb?: (err: any, data?: GetInstanceAccessDetailsCommandOutput) => void
  ): Promise<GetInstanceAccessDetailsCommandOutput> | void {
    const command = new GetInstanceAccessDetailsCommand(args);
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
   * <p>Returns the data points for the specified Amazon Lightsail instance metric, given an
   *       instance name.</p>
   */
  public getInstanceMetricData(
    args: GetInstanceMetricDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInstanceMetricDataCommandOutput>;
  public getInstanceMetricData(
    args: GetInstanceMetricDataCommandInput,
    cb: (err: any, data?: GetInstanceMetricDataCommandOutput) => void
  ): void;
  public getInstanceMetricData(
    args: GetInstanceMetricDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInstanceMetricDataCommandOutput) => void
  ): void;
  public getInstanceMetricData(
    args: GetInstanceMetricDataCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetInstanceMetricDataCommandOutput) => void),
    cb?: (err: any, data?: GetInstanceMetricDataCommandOutput) => void
  ): Promise<GetInstanceMetricDataCommandOutput> | void {
    const command = new GetInstanceMetricDataCommand(args);
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
   * <p>Returns the port states for a specific virtual private server, or
   *         <i>instance</i>.</p>
   */
  public getInstancePortStates(
    args: GetInstancePortStatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInstancePortStatesCommandOutput>;
  public getInstancePortStates(
    args: GetInstancePortStatesCommandInput,
    cb: (err: any, data?: GetInstancePortStatesCommandOutput) => void
  ): void;
  public getInstancePortStates(
    args: GetInstancePortStatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInstancePortStatesCommandOutput) => void
  ): void;
  public getInstancePortStates(
    args: GetInstancePortStatesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetInstancePortStatesCommandOutput) => void),
    cb?: (err: any, data?: GetInstancePortStatesCommandOutput) => void
  ): Promise<GetInstancePortStatesCommandOutput> | void {
    const command = new GetInstancePortStatesCommand(args);
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
   * <p>Returns information about all Amazon Lightsail virtual private servers, or
   *         <i>instances</i>.</p>
   */
  public getInstances(
    args: GetInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInstancesCommandOutput>;
  public getInstances(
    args: GetInstancesCommandInput,
    cb: (err: any, data?: GetInstancesCommandOutput) => void
  ): void;
  public getInstances(
    args: GetInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInstancesCommandOutput) => void
  ): void;
  public getInstances(
    args: GetInstancesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetInstancesCommandOutput) => void),
    cb?: (err: any, data?: GetInstancesCommandOutput) => void
  ): Promise<GetInstancesCommandOutput> | void {
    const command = new GetInstancesCommand(args);
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
   * <p>Returns information about a specific instance snapshot.</p>
   */
  public getInstanceSnapshot(
    args: GetInstanceSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInstanceSnapshotCommandOutput>;
  public getInstanceSnapshot(
    args: GetInstanceSnapshotCommandInput,
    cb: (err: any, data?: GetInstanceSnapshotCommandOutput) => void
  ): void;
  public getInstanceSnapshot(
    args: GetInstanceSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInstanceSnapshotCommandOutput) => void
  ): void;
  public getInstanceSnapshot(
    args: GetInstanceSnapshotCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetInstanceSnapshotCommandOutput) => void),
    cb?: (err: any, data?: GetInstanceSnapshotCommandOutput) => void
  ): Promise<GetInstanceSnapshotCommandOutput> | void {
    const command = new GetInstanceSnapshotCommand(args);
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
   * <p>Returns all instance snapshots for the user's account.</p>
   */
  public getInstanceSnapshots(
    args: GetInstanceSnapshotsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInstanceSnapshotsCommandOutput>;
  public getInstanceSnapshots(
    args: GetInstanceSnapshotsCommandInput,
    cb: (err: any, data?: GetInstanceSnapshotsCommandOutput) => void
  ): void;
  public getInstanceSnapshots(
    args: GetInstanceSnapshotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInstanceSnapshotsCommandOutput) => void
  ): void;
  public getInstanceSnapshots(
    args: GetInstanceSnapshotsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetInstanceSnapshotsCommandOutput) => void),
    cb?: (err: any, data?: GetInstanceSnapshotsCommandOutput) => void
  ): Promise<GetInstanceSnapshotsCommandOutput> | void {
    const command = new GetInstanceSnapshotsCommand(args);
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
   * <p>Returns the state of a specific instance. Works on one instance at a time.</p>
   */
  public getInstanceState(
    args: GetInstanceStateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInstanceStateCommandOutput>;
  public getInstanceState(
    args: GetInstanceStateCommandInput,
    cb: (err: any, data?: GetInstanceStateCommandOutput) => void
  ): void;
  public getInstanceState(
    args: GetInstanceStateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInstanceStateCommandOutput) => void
  ): void;
  public getInstanceState(
    args: GetInstanceStateCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetInstanceStateCommandOutput) => void),
    cb?: (err: any, data?: GetInstanceStateCommandOutput) => void
  ): Promise<GetInstanceStateCommandOutput> | void {
    const command = new GetInstanceStateCommand(args);
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
   * <p>Returns information about a specific key pair.</p>
   */
  public getKeyPair(
    args: GetKeyPairCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetKeyPairCommandOutput>;
  public getKeyPair(
    args: GetKeyPairCommandInput,
    cb: (err: any, data?: GetKeyPairCommandOutput) => void
  ): void;
  public getKeyPair(
    args: GetKeyPairCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetKeyPairCommandOutput) => void
  ): void;
  public getKeyPair(
    args: GetKeyPairCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetKeyPairCommandOutput) => void),
    cb?: (err: any, data?: GetKeyPairCommandOutput) => void
  ): Promise<GetKeyPairCommandOutput> | void {
    const command = new GetKeyPairCommand(args);
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
   * <p>Returns information about all key pairs in the user's account.</p>
   */
  public getKeyPairs(
    args: GetKeyPairsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetKeyPairsCommandOutput>;
  public getKeyPairs(
    args: GetKeyPairsCommandInput,
    cb: (err: any, data?: GetKeyPairsCommandOutput) => void
  ): void;
  public getKeyPairs(
    args: GetKeyPairsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetKeyPairsCommandOutput) => void
  ): void;
  public getKeyPairs(
    args: GetKeyPairsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetKeyPairsCommandOutput) => void),
    cb?: (err: any, data?: GetKeyPairsCommandOutput) => void
  ): Promise<GetKeyPairsCommandOutput> | void {
    const command = new GetKeyPairsCommand(args);
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
   * <p>Returns information about the specified Lightsail load balancer.</p>
   */
  public getLoadBalancer(
    args: GetLoadBalancerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLoadBalancerCommandOutput>;
  public getLoadBalancer(
    args: GetLoadBalancerCommandInput,
    cb: (err: any, data?: GetLoadBalancerCommandOutput) => void
  ): void;
  public getLoadBalancer(
    args: GetLoadBalancerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLoadBalancerCommandOutput) => void
  ): void;
  public getLoadBalancer(
    args: GetLoadBalancerCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetLoadBalancerCommandOutput) => void),
    cb?: (err: any, data?: GetLoadBalancerCommandOutput) => void
  ): Promise<GetLoadBalancerCommandOutput> | void {
    const command = new GetLoadBalancerCommand(args);
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
   * <p>Returns information about health metrics for your Lightsail load balancer.</p>
   */
  public getLoadBalancerMetricData(
    args: GetLoadBalancerMetricDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLoadBalancerMetricDataCommandOutput>;
  public getLoadBalancerMetricData(
    args: GetLoadBalancerMetricDataCommandInput,
    cb: (err: any, data?: GetLoadBalancerMetricDataCommandOutput) => void
  ): void;
  public getLoadBalancerMetricData(
    args: GetLoadBalancerMetricDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLoadBalancerMetricDataCommandOutput) => void
  ): void;
  public getLoadBalancerMetricData(
    args: GetLoadBalancerMetricDataCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetLoadBalancerMetricDataCommandOutput) => void),
    cb?: (err: any, data?: GetLoadBalancerMetricDataCommandOutput) => void
  ): Promise<GetLoadBalancerMetricDataCommandOutput> | void {
    const command = new GetLoadBalancerMetricDataCommand(args);
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
   * <p>Returns information about all load balancers in an account.</p>
   *          <p>If you are describing a long list of load balancers, you can paginate the output to
   *       make the list more manageable. You can use the pageToken and nextPageToken values to retrieve
   *       the next items in the list.</p>
   */
  public getLoadBalancers(
    args: GetLoadBalancersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLoadBalancersCommandOutput>;
  public getLoadBalancers(
    args: GetLoadBalancersCommandInput,
    cb: (err: any, data?: GetLoadBalancersCommandOutput) => void
  ): void;
  public getLoadBalancers(
    args: GetLoadBalancersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLoadBalancersCommandOutput) => void
  ): void;
  public getLoadBalancers(
    args: GetLoadBalancersCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetLoadBalancersCommandOutput) => void),
    cb?: (err: any, data?: GetLoadBalancersCommandOutput) => void
  ): Promise<GetLoadBalancersCommandOutput> | void {
    const command = new GetLoadBalancersCommand(args);
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
   * <p>Returns information about the TLS certificates that are associated with the specified
   *       Lightsail load balancer.</p>
   *          <p>TLS is just an updated, more secure version of Secure Socket Layer (SSL).</p>
   *          <p>You can have a maximum of 2 certificates associated with a Lightsail load balancer.
   *       One is active and the other is inactive.</p>
   */
  public getLoadBalancerTlsCertificates(
    args: GetLoadBalancerTlsCertificatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLoadBalancerTlsCertificatesCommandOutput>;
  public getLoadBalancerTlsCertificates(
    args: GetLoadBalancerTlsCertificatesCommandInput,
    cb: (err: any, data?: GetLoadBalancerTlsCertificatesCommandOutput) => void
  ): void;
  public getLoadBalancerTlsCertificates(
    args: GetLoadBalancerTlsCertificatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLoadBalancerTlsCertificatesCommandOutput) => void
  ): void;
  public getLoadBalancerTlsCertificates(
    args: GetLoadBalancerTlsCertificatesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: GetLoadBalancerTlsCertificatesCommandOutput
        ) => void),
    cb?: (err: any, data?: GetLoadBalancerTlsCertificatesCommandOutput) => void
  ): Promise<GetLoadBalancerTlsCertificatesCommandOutput> | void {
    const command = new GetLoadBalancerTlsCertificatesCommand(args);
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
   * <p>Returns information about a specific operation. Operations include events such as when
   *       you create an instance, allocate a static IP, attach a static IP, and so on.</p>
   */
  public getOperation(
    args: GetOperationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOperationCommandOutput>;
  public getOperation(
    args: GetOperationCommandInput,
    cb: (err: any, data?: GetOperationCommandOutput) => void
  ): void;
  public getOperation(
    args: GetOperationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOperationCommandOutput) => void
  ): void;
  public getOperation(
    args: GetOperationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetOperationCommandOutput) => void),
    cb?: (err: any, data?: GetOperationCommandOutput) => void
  ): Promise<GetOperationCommandOutput> | void {
    const command = new GetOperationCommand(args);
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
   * <p>Returns information about all operations.</p>
   *          <p>Results are returned from oldest to newest, up to a maximum of 200. Results can be
   *       paged by making each subsequent call to <code>GetOperations</code> use the maximum (last)
   *         <code>statusChangedAt</code> value from the previous request.</p>
   */
  public getOperations(
    args: GetOperationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOperationsCommandOutput>;
  public getOperations(
    args: GetOperationsCommandInput,
    cb: (err: any, data?: GetOperationsCommandOutput) => void
  ): void;
  public getOperations(
    args: GetOperationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOperationsCommandOutput) => void
  ): void;
  public getOperations(
    args: GetOperationsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetOperationsCommandOutput) => void),
    cb?: (err: any, data?: GetOperationsCommandOutput) => void
  ): Promise<GetOperationsCommandOutput> | void {
    const command = new GetOperationsCommand(args);
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
   * <p>Gets operations for a specific resource (e.g., an instance or a static IP).</p>
   */
  public getOperationsForResource(
    args: GetOperationsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOperationsForResourceCommandOutput>;
  public getOperationsForResource(
    args: GetOperationsForResourceCommandInput,
    cb: (err: any, data?: GetOperationsForResourceCommandOutput) => void
  ): void;
  public getOperationsForResource(
    args: GetOperationsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOperationsForResourceCommandOutput) => void
  ): void;
  public getOperationsForResource(
    args: GetOperationsForResourceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetOperationsForResourceCommandOutput) => void),
    cb?: (err: any, data?: GetOperationsForResourceCommandOutput) => void
  ): Promise<GetOperationsForResourceCommandOutput> | void {
    const command = new GetOperationsForResourceCommand(args);
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
   * <p>Returns a list of all valid regions for Amazon Lightsail. Use the <code>include
   *         availability zones</code> parameter to also return the Availability Zones in a
   *       region.</p>
   */
  public getRegions(
    args: GetRegionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRegionsCommandOutput>;
  public getRegions(
    args: GetRegionsCommandInput,
    cb: (err: any, data?: GetRegionsCommandOutput) => void
  ): void;
  public getRegions(
    args: GetRegionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRegionsCommandOutput) => void
  ): void;
  public getRegions(
    args: GetRegionsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetRegionsCommandOutput) => void),
    cb?: (err: any, data?: GetRegionsCommandOutput) => void
  ): Promise<GetRegionsCommandOutput> | void {
    const command = new GetRegionsCommand(args);
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
   * <p>Returns information about a specific database in Amazon Lightsail.</p>
   */
  public getRelationalDatabase(
    args: GetRelationalDatabaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRelationalDatabaseCommandOutput>;
  public getRelationalDatabase(
    args: GetRelationalDatabaseCommandInput,
    cb: (err: any, data?: GetRelationalDatabaseCommandOutput) => void
  ): void;
  public getRelationalDatabase(
    args: GetRelationalDatabaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRelationalDatabaseCommandOutput) => void
  ): void;
  public getRelationalDatabase(
    args: GetRelationalDatabaseCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetRelationalDatabaseCommandOutput) => void),
    cb?: (err: any, data?: GetRelationalDatabaseCommandOutput) => void
  ): Promise<GetRelationalDatabaseCommandOutput> | void {
    const command = new GetRelationalDatabaseCommand(args);
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
   * <p>Returns a list of available database blueprints in Amazon Lightsail. A blueprint
   *       describes the major engine version of a database.</p>
   *          <p>You can use a blueprint ID to create a new database that runs a specific database
   *       engine.</p>
   */
  public getRelationalDatabaseBlueprints(
    args: GetRelationalDatabaseBlueprintsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRelationalDatabaseBlueprintsCommandOutput>;
  public getRelationalDatabaseBlueprints(
    args: GetRelationalDatabaseBlueprintsCommandInput,
    cb: (err: any, data?: GetRelationalDatabaseBlueprintsCommandOutput) => void
  ): void;
  public getRelationalDatabaseBlueprints(
    args: GetRelationalDatabaseBlueprintsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRelationalDatabaseBlueprintsCommandOutput) => void
  ): void;
  public getRelationalDatabaseBlueprints(
    args: GetRelationalDatabaseBlueprintsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: GetRelationalDatabaseBlueprintsCommandOutput
        ) => void),
    cb?: (err: any, data?: GetRelationalDatabaseBlueprintsCommandOutput) => void
  ): Promise<GetRelationalDatabaseBlueprintsCommandOutput> | void {
    const command = new GetRelationalDatabaseBlueprintsCommand(args);
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
   * <p>Returns the list of bundles that are available in Amazon Lightsail. A bundle describes
   *       the performance specifications for a database.</p>
   *          <p>You can use a bundle ID to create a new database with explicit performance
   *       specifications.</p>
   */
  public getRelationalDatabaseBundles(
    args: GetRelationalDatabaseBundlesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRelationalDatabaseBundlesCommandOutput>;
  public getRelationalDatabaseBundles(
    args: GetRelationalDatabaseBundlesCommandInput,
    cb: (err: any, data?: GetRelationalDatabaseBundlesCommandOutput) => void
  ): void;
  public getRelationalDatabaseBundles(
    args: GetRelationalDatabaseBundlesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRelationalDatabaseBundlesCommandOutput) => void
  ): void;
  public getRelationalDatabaseBundles(
    args: GetRelationalDatabaseBundlesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetRelationalDatabaseBundlesCommandOutput) => void),
    cb?: (err: any, data?: GetRelationalDatabaseBundlesCommandOutput) => void
  ): Promise<GetRelationalDatabaseBundlesCommandOutput> | void {
    const command = new GetRelationalDatabaseBundlesCommand(args);
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
   * <p>Returns a list of events for a specific database in Amazon Lightsail.</p>
   */
  public getRelationalDatabaseEvents(
    args: GetRelationalDatabaseEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRelationalDatabaseEventsCommandOutput>;
  public getRelationalDatabaseEvents(
    args: GetRelationalDatabaseEventsCommandInput,
    cb: (err: any, data?: GetRelationalDatabaseEventsCommandOutput) => void
  ): void;
  public getRelationalDatabaseEvents(
    args: GetRelationalDatabaseEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRelationalDatabaseEventsCommandOutput) => void
  ): void;
  public getRelationalDatabaseEvents(
    args: GetRelationalDatabaseEventsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetRelationalDatabaseEventsCommandOutput) => void),
    cb?: (err: any, data?: GetRelationalDatabaseEventsCommandOutput) => void
  ): Promise<GetRelationalDatabaseEventsCommandOutput> | void {
    const command = new GetRelationalDatabaseEventsCommand(args);
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
   * <p>Returns a list of log events for a database in Amazon Lightsail.</p>
   */
  public getRelationalDatabaseLogEvents(
    args: GetRelationalDatabaseLogEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRelationalDatabaseLogEventsCommandOutput>;
  public getRelationalDatabaseLogEvents(
    args: GetRelationalDatabaseLogEventsCommandInput,
    cb: (err: any, data?: GetRelationalDatabaseLogEventsCommandOutput) => void
  ): void;
  public getRelationalDatabaseLogEvents(
    args: GetRelationalDatabaseLogEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRelationalDatabaseLogEventsCommandOutput) => void
  ): void;
  public getRelationalDatabaseLogEvents(
    args: GetRelationalDatabaseLogEventsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: GetRelationalDatabaseLogEventsCommandOutput
        ) => void),
    cb?: (err: any, data?: GetRelationalDatabaseLogEventsCommandOutput) => void
  ): Promise<GetRelationalDatabaseLogEventsCommandOutput> | void {
    const command = new GetRelationalDatabaseLogEventsCommand(args);
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
   * <p>Returns a list of available log streams for a specific database in
   *       Amazon Lightsail.</p>
   */
  public getRelationalDatabaseLogStreams(
    args: GetRelationalDatabaseLogStreamsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRelationalDatabaseLogStreamsCommandOutput>;
  public getRelationalDatabaseLogStreams(
    args: GetRelationalDatabaseLogStreamsCommandInput,
    cb: (err: any, data?: GetRelationalDatabaseLogStreamsCommandOutput) => void
  ): void;
  public getRelationalDatabaseLogStreams(
    args: GetRelationalDatabaseLogStreamsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRelationalDatabaseLogStreamsCommandOutput) => void
  ): void;
  public getRelationalDatabaseLogStreams(
    args: GetRelationalDatabaseLogStreamsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: GetRelationalDatabaseLogStreamsCommandOutput
        ) => void),
    cb?: (err: any, data?: GetRelationalDatabaseLogStreamsCommandOutput) => void
  ): Promise<GetRelationalDatabaseLogStreamsCommandOutput> | void {
    const command = new GetRelationalDatabaseLogStreamsCommand(args);
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
   * <p>Returns the current, previous, or pending versions of the master user password for a
   *       Lightsail database.</p>
   *          <p>The <code>GetRelationalDatabaseMasterUserPassword</code> operation supports tag-based
   *       access control via resource tags applied to the resource identified by
   *       relationalDatabaseName.</p>
   */
  public getRelationalDatabaseMasterUserPassword(
    args: GetRelationalDatabaseMasterUserPasswordCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRelationalDatabaseMasterUserPasswordCommandOutput>;
  public getRelationalDatabaseMasterUserPassword(
    args: GetRelationalDatabaseMasterUserPasswordCommandInput,
    cb: (
      err: any,
      data?: GetRelationalDatabaseMasterUserPasswordCommandOutput
    ) => void
  ): void;
  public getRelationalDatabaseMasterUserPassword(
    args: GetRelationalDatabaseMasterUserPasswordCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: GetRelationalDatabaseMasterUserPasswordCommandOutput
    ) => void
  ): void;
  public getRelationalDatabaseMasterUserPassword(
    args: GetRelationalDatabaseMasterUserPasswordCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: GetRelationalDatabaseMasterUserPasswordCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: GetRelationalDatabaseMasterUserPasswordCommandOutput
    ) => void
  ): Promise<GetRelationalDatabaseMasterUserPasswordCommandOutput> | void {
    const command = new GetRelationalDatabaseMasterUserPasswordCommand(args);
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
   * <p>Returns the data points of the specified metric for a database in
   *       Amazon Lightsail.</p>
   */
  public getRelationalDatabaseMetricData(
    args: GetRelationalDatabaseMetricDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRelationalDatabaseMetricDataCommandOutput>;
  public getRelationalDatabaseMetricData(
    args: GetRelationalDatabaseMetricDataCommandInput,
    cb: (err: any, data?: GetRelationalDatabaseMetricDataCommandOutput) => void
  ): void;
  public getRelationalDatabaseMetricData(
    args: GetRelationalDatabaseMetricDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRelationalDatabaseMetricDataCommandOutput) => void
  ): void;
  public getRelationalDatabaseMetricData(
    args: GetRelationalDatabaseMetricDataCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: GetRelationalDatabaseMetricDataCommandOutput
        ) => void),
    cb?: (err: any, data?: GetRelationalDatabaseMetricDataCommandOutput) => void
  ): Promise<GetRelationalDatabaseMetricDataCommandOutput> | void {
    const command = new GetRelationalDatabaseMetricDataCommand(args);
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
   * <p>Returns all of the runtime parameters offered by the underlying database software, or
   *       engine, for a specific database in Amazon Lightsail.</p>
   *          <p>In addition to the parameter names and values, this operation returns other information
   *       about each parameter. This information includes whether changes require a reboot, whether the
   *       parameter is modifiable, the allowed values, and the data types.</p>
   */
  public getRelationalDatabaseParameters(
    args: GetRelationalDatabaseParametersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRelationalDatabaseParametersCommandOutput>;
  public getRelationalDatabaseParameters(
    args: GetRelationalDatabaseParametersCommandInput,
    cb: (err: any, data?: GetRelationalDatabaseParametersCommandOutput) => void
  ): void;
  public getRelationalDatabaseParameters(
    args: GetRelationalDatabaseParametersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRelationalDatabaseParametersCommandOutput) => void
  ): void;
  public getRelationalDatabaseParameters(
    args: GetRelationalDatabaseParametersCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: GetRelationalDatabaseParametersCommandOutput
        ) => void),
    cb?: (err: any, data?: GetRelationalDatabaseParametersCommandOutput) => void
  ): Promise<GetRelationalDatabaseParametersCommandOutput> | void {
    const command = new GetRelationalDatabaseParametersCommand(args);
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
   * <p>Returns information about all of your databases in Amazon Lightsail.</p>
   */
  public getRelationalDatabases(
    args: GetRelationalDatabasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRelationalDatabasesCommandOutput>;
  public getRelationalDatabases(
    args: GetRelationalDatabasesCommandInput,
    cb: (err: any, data?: GetRelationalDatabasesCommandOutput) => void
  ): void;
  public getRelationalDatabases(
    args: GetRelationalDatabasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRelationalDatabasesCommandOutput) => void
  ): void;
  public getRelationalDatabases(
    args: GetRelationalDatabasesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetRelationalDatabasesCommandOutput) => void),
    cb?: (err: any, data?: GetRelationalDatabasesCommandOutput) => void
  ): Promise<GetRelationalDatabasesCommandOutput> | void {
    const command = new GetRelationalDatabasesCommand(args);
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
   * <p>Returns information about a specific database snapshot in Amazon Lightsail.</p>
   */
  public getRelationalDatabaseSnapshot(
    args: GetRelationalDatabaseSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRelationalDatabaseSnapshotCommandOutput>;
  public getRelationalDatabaseSnapshot(
    args: GetRelationalDatabaseSnapshotCommandInput,
    cb: (err: any, data?: GetRelationalDatabaseSnapshotCommandOutput) => void
  ): void;
  public getRelationalDatabaseSnapshot(
    args: GetRelationalDatabaseSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRelationalDatabaseSnapshotCommandOutput) => void
  ): void;
  public getRelationalDatabaseSnapshot(
    args: GetRelationalDatabaseSnapshotCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetRelationalDatabaseSnapshotCommandOutput) => void),
    cb?: (err: any, data?: GetRelationalDatabaseSnapshotCommandOutput) => void
  ): Promise<GetRelationalDatabaseSnapshotCommandOutput> | void {
    const command = new GetRelationalDatabaseSnapshotCommand(args);
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
   * <p>Returns information about all of your database snapshots in Amazon Lightsail.</p>
   */
  public getRelationalDatabaseSnapshots(
    args: GetRelationalDatabaseSnapshotsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRelationalDatabaseSnapshotsCommandOutput>;
  public getRelationalDatabaseSnapshots(
    args: GetRelationalDatabaseSnapshotsCommandInput,
    cb: (err: any, data?: GetRelationalDatabaseSnapshotsCommandOutput) => void
  ): void;
  public getRelationalDatabaseSnapshots(
    args: GetRelationalDatabaseSnapshotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRelationalDatabaseSnapshotsCommandOutput) => void
  ): void;
  public getRelationalDatabaseSnapshots(
    args: GetRelationalDatabaseSnapshotsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: GetRelationalDatabaseSnapshotsCommandOutput
        ) => void),
    cb?: (err: any, data?: GetRelationalDatabaseSnapshotsCommandOutput) => void
  ): Promise<GetRelationalDatabaseSnapshotsCommandOutput> | void {
    const command = new GetRelationalDatabaseSnapshotsCommand(args);
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
   * <p>Returns information about a specific static IP.</p>
   */
  public getStaticIp(
    args: GetStaticIpCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetStaticIpCommandOutput>;
  public getStaticIp(
    args: GetStaticIpCommandInput,
    cb: (err: any, data?: GetStaticIpCommandOutput) => void
  ): void;
  public getStaticIp(
    args: GetStaticIpCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStaticIpCommandOutput) => void
  ): void;
  public getStaticIp(
    args: GetStaticIpCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetStaticIpCommandOutput) => void),
    cb?: (err: any, data?: GetStaticIpCommandOutput) => void
  ): Promise<GetStaticIpCommandOutput> | void {
    const command = new GetStaticIpCommand(args);
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
   * <p>Returns information about all static IPs in the user's account.</p>
   */
  public getStaticIps(
    args: GetStaticIpsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetStaticIpsCommandOutput>;
  public getStaticIps(
    args: GetStaticIpsCommandInput,
    cb: (err: any, data?: GetStaticIpsCommandOutput) => void
  ): void;
  public getStaticIps(
    args: GetStaticIpsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStaticIpsCommandOutput) => void
  ): void;
  public getStaticIps(
    args: GetStaticIpsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetStaticIpsCommandOutput) => void),
    cb?: (err: any, data?: GetStaticIpsCommandOutput) => void
  ): Promise<GetStaticIpsCommandOutput> | void {
    const command = new GetStaticIpsCommand(args);
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
   * <p>Imports a public SSH key from a specific key pair.</p>
   */
  public importKeyPair(
    args: ImportKeyPairCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportKeyPairCommandOutput>;
  public importKeyPair(
    args: ImportKeyPairCommandInput,
    cb: (err: any, data?: ImportKeyPairCommandOutput) => void
  ): void;
  public importKeyPair(
    args: ImportKeyPairCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportKeyPairCommandOutput) => void
  ): void;
  public importKeyPair(
    args: ImportKeyPairCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ImportKeyPairCommandOutput) => void),
    cb?: (err: any, data?: ImportKeyPairCommandOutput) => void
  ): Promise<ImportKeyPairCommandOutput> | void {
    const command = new ImportKeyPairCommand(args);
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
   * <p>Returns a Boolean value indicating whether your Lightsail VPC is peered.</p>
   */
  public isVpcPeered(
    args: IsVpcPeeredCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<IsVpcPeeredCommandOutput>;
  public isVpcPeered(
    args: IsVpcPeeredCommandInput,
    cb: (err: any, data?: IsVpcPeeredCommandOutput) => void
  ): void;
  public isVpcPeered(
    args: IsVpcPeeredCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: IsVpcPeeredCommandOutput) => void
  ): void;
  public isVpcPeered(
    args: IsVpcPeeredCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: IsVpcPeeredCommandOutput) => void),
    cb?: (err: any, data?: IsVpcPeeredCommandOutput) => void
  ): Promise<IsVpcPeeredCommandOutput> | void {
    const command = new IsVpcPeeredCommand(args);
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
   * <p>Adds public ports to an Amazon Lightsail instance.</p>
   *          <p>The <code>open instance public ports</code> operation supports tag-based access control
   *       via resource tags applied to the resource identified by <code>instance name</code>. For more
   *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   */
  public openInstancePublicPorts(
    args: OpenInstancePublicPortsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<OpenInstancePublicPortsCommandOutput>;
  public openInstancePublicPorts(
    args: OpenInstancePublicPortsCommandInput,
    cb: (err: any, data?: OpenInstancePublicPortsCommandOutput) => void
  ): void;
  public openInstancePublicPorts(
    args: OpenInstancePublicPortsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: OpenInstancePublicPortsCommandOutput) => void
  ): void;
  public openInstancePublicPorts(
    args: OpenInstancePublicPortsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: OpenInstancePublicPortsCommandOutput) => void),
    cb?: (err: any, data?: OpenInstancePublicPortsCommandOutput) => void
  ): Promise<OpenInstancePublicPortsCommandOutput> | void {
    const command = new OpenInstancePublicPortsCommand(args);
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
   * <p>Tries to peer the Lightsail VPC with the user's default VPC.</p>
   */
  public peerVpc(
    args: PeerVpcCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PeerVpcCommandOutput>;
  public peerVpc(
    args: PeerVpcCommandInput,
    cb: (err: any, data?: PeerVpcCommandOutput) => void
  ): void;
  public peerVpc(
    args: PeerVpcCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PeerVpcCommandOutput) => void
  ): void;
  public peerVpc(
    args: PeerVpcCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: PeerVpcCommandOutput) => void),
    cb?: (err: any, data?: PeerVpcCommandOutput) => void
  ): Promise<PeerVpcCommandOutput> | void {
    const command = new PeerVpcCommand(args);
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
   * <p>Sets the specified open ports for an Amazon Lightsail instance, and closes all ports for
   *       every protocol not included in the current request.</p>
   *          <p>The <code>put instance public ports</code> operation supports tag-based access control
   *       via resource tags applied to the resource identified by <code>instance name</code>. For more
   *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   */
  public putInstancePublicPorts(
    args: PutInstancePublicPortsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutInstancePublicPortsCommandOutput>;
  public putInstancePublicPorts(
    args: PutInstancePublicPortsCommandInput,
    cb: (err: any, data?: PutInstancePublicPortsCommandOutput) => void
  ): void;
  public putInstancePublicPorts(
    args: PutInstancePublicPortsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutInstancePublicPortsCommandOutput) => void
  ): void;
  public putInstancePublicPorts(
    args: PutInstancePublicPortsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: PutInstancePublicPortsCommandOutput) => void),
    cb?: (err: any, data?: PutInstancePublicPortsCommandOutput) => void
  ): Promise<PutInstancePublicPortsCommandOutput> | void {
    const command = new PutInstancePublicPortsCommand(args);
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
   * <p>Restarts a specific instance.</p>
   *          <p>The <code>reboot instance</code> operation supports tag-based access control via
   *       resource tags applied to the resource identified by <code>instance name</code>. For more
   *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   */
  public rebootInstance(
    args: RebootInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RebootInstanceCommandOutput>;
  public rebootInstance(
    args: RebootInstanceCommandInput,
    cb: (err: any, data?: RebootInstanceCommandOutput) => void
  ): void;
  public rebootInstance(
    args: RebootInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RebootInstanceCommandOutput) => void
  ): void;
  public rebootInstance(
    args: RebootInstanceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: RebootInstanceCommandOutput) => void),
    cb?: (err: any, data?: RebootInstanceCommandOutput) => void
  ): Promise<RebootInstanceCommandOutput> | void {
    const command = new RebootInstanceCommand(args);
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
   * <p>Restarts a specific database in Amazon Lightsail.</p>
   *          <p>The <code>reboot relational database</code> operation supports tag-based access control
   *       via resource tags applied to the resource identified by relationalDatabaseName. For more
   *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   */
  public rebootRelationalDatabase(
    args: RebootRelationalDatabaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RebootRelationalDatabaseCommandOutput>;
  public rebootRelationalDatabase(
    args: RebootRelationalDatabaseCommandInput,
    cb: (err: any, data?: RebootRelationalDatabaseCommandOutput) => void
  ): void;
  public rebootRelationalDatabase(
    args: RebootRelationalDatabaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RebootRelationalDatabaseCommandOutput) => void
  ): void;
  public rebootRelationalDatabase(
    args: RebootRelationalDatabaseCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: RebootRelationalDatabaseCommandOutput) => void),
    cb?: (err: any, data?: RebootRelationalDatabaseCommandOutput) => void
  ): Promise<RebootRelationalDatabaseCommandOutput> | void {
    const command = new RebootRelationalDatabaseCommand(args);
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
   * <p>Deletes a specific static IP from your account.</p>
   */
  public releaseStaticIp(
    args: ReleaseStaticIpCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ReleaseStaticIpCommandOutput>;
  public releaseStaticIp(
    args: ReleaseStaticIpCommandInput,
    cb: (err: any, data?: ReleaseStaticIpCommandOutput) => void
  ): void;
  public releaseStaticIp(
    args: ReleaseStaticIpCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReleaseStaticIpCommandOutput) => void
  ): void;
  public releaseStaticIp(
    args: ReleaseStaticIpCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ReleaseStaticIpCommandOutput) => void),
    cb?: (err: any, data?: ReleaseStaticIpCommandOutput) => void
  ): Promise<ReleaseStaticIpCommandOutput> | void {
    const command = new ReleaseStaticIpCommand(args);
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
   * <p>Starts a specific Amazon Lightsail instance from a stopped state. To restart an
   *       instance, use the <code>reboot instance</code> operation.</p>
   *          <note>
   *             <p>When you start a stopped instance, Lightsail assigns a new public IP address to the
   *         instance. To use the same IP address after stopping and starting an instance, create a
   *         static IP address and attach it to the instance. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/lightsail-create-static-ip">Lightsail Dev Guide</a>.</p>
   *          </note>
   *          <p>The <code>start instance</code> operation supports tag-based access control via
   *       resource tags applied to the resource identified by <code>instance name</code>. For more
   *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   */
  public startInstance(
    args: StartInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartInstanceCommandOutput>;
  public startInstance(
    args: StartInstanceCommandInput,
    cb: (err: any, data?: StartInstanceCommandOutput) => void
  ): void;
  public startInstance(
    args: StartInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartInstanceCommandOutput) => void
  ): void;
  public startInstance(
    args: StartInstanceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: StartInstanceCommandOutput) => void),
    cb?: (err: any, data?: StartInstanceCommandOutput) => void
  ): Promise<StartInstanceCommandOutput> | void {
    const command = new StartInstanceCommand(args);
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
   * <p>Starts a specific database from a stopped state in Amazon Lightsail. To restart a
   *       database, use the <code>reboot relational database</code> operation.</p>
   *          <p>The <code>start relational database</code> operation supports tag-based access control
   *       via resource tags applied to the resource identified by relationalDatabaseName. For more
   *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   */
  public startRelationalDatabase(
    args: StartRelationalDatabaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartRelationalDatabaseCommandOutput>;
  public startRelationalDatabase(
    args: StartRelationalDatabaseCommandInput,
    cb: (err: any, data?: StartRelationalDatabaseCommandOutput) => void
  ): void;
  public startRelationalDatabase(
    args: StartRelationalDatabaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartRelationalDatabaseCommandOutput) => void
  ): void;
  public startRelationalDatabase(
    args: StartRelationalDatabaseCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: StartRelationalDatabaseCommandOutput) => void),
    cb?: (err: any, data?: StartRelationalDatabaseCommandOutput) => void
  ): Promise<StartRelationalDatabaseCommandOutput> | void {
    const command = new StartRelationalDatabaseCommand(args);
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
   * <p>Stops a specific Amazon Lightsail instance that is currently running.</p>
   *          <note>
   *             <p>When you start a stopped instance, Lightsail assigns a new public IP address to the
   *         instance. To use the same IP address after stopping and starting an instance, create a
   *         static IP address and attach it to the instance. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/lightsail-create-static-ip">Lightsail Dev Guide</a>.</p>
   *          </note>
   *          <p>The <code>stop instance</code> operation supports tag-based access control via resource
   *       tags applied to the resource identified by <code>instance name</code>. For more information,
   *       see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   */
  public stopInstance(
    args: StopInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopInstanceCommandOutput>;
  public stopInstance(
    args: StopInstanceCommandInput,
    cb: (err: any, data?: StopInstanceCommandOutput) => void
  ): void;
  public stopInstance(
    args: StopInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopInstanceCommandOutput) => void
  ): void;
  public stopInstance(
    args: StopInstanceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: StopInstanceCommandOutput) => void),
    cb?: (err: any, data?: StopInstanceCommandOutput) => void
  ): Promise<StopInstanceCommandOutput> | void {
    const command = new StopInstanceCommand(args);
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
   * <p>Stops a specific database that is currently running in Amazon Lightsail.</p>
   *          <p>The <code>stop relational database</code> operation supports tag-based access control
   *       via resource tags applied to the resource identified by relationalDatabaseName. For more
   *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   */
  public stopRelationalDatabase(
    args: StopRelationalDatabaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopRelationalDatabaseCommandOutput>;
  public stopRelationalDatabase(
    args: StopRelationalDatabaseCommandInput,
    cb: (err: any, data?: StopRelationalDatabaseCommandOutput) => void
  ): void;
  public stopRelationalDatabase(
    args: StopRelationalDatabaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopRelationalDatabaseCommandOutput) => void
  ): void;
  public stopRelationalDatabase(
    args: StopRelationalDatabaseCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: StopRelationalDatabaseCommandOutput) => void),
    cb?: (err: any, data?: StopRelationalDatabaseCommandOutput) => void
  ): Promise<StopRelationalDatabaseCommandOutput> | void {
    const command = new StopRelationalDatabaseCommand(args);
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
   * <p>Adds one or more tags to the specified Amazon Lightsail resource. Each resource can have a
   *       maximum of 50 tags. Each tag consists of a key and an optional value. Tag keys must be unique
   *       per resource. For more information about tags, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-tags">Lightsail
   *         Dev Guide</a>.</p>
   *          <p>The <code>tag resource</code> operation supports tag-based access control via request tags
   *       and resource tags applied to the resource identified by <code>resource name</code>. For more
   *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   */
  public tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  public tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
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
   * <p>Attempts to unpeer the Lightsail VPC from the user's default VPC.</p>
   */
  public unpeerVpc(
    args: UnpeerVpcCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UnpeerVpcCommandOutput>;
  public unpeerVpc(
    args: UnpeerVpcCommandInput,
    cb: (err: any, data?: UnpeerVpcCommandOutput) => void
  ): void;
  public unpeerVpc(
    args: UnpeerVpcCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UnpeerVpcCommandOutput) => void
  ): void;
  public unpeerVpc(
    args: UnpeerVpcCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UnpeerVpcCommandOutput) => void),
    cb?: (err: any, data?: UnpeerVpcCommandOutput) => void
  ): Promise<UnpeerVpcCommandOutput> | void {
    const command = new UnpeerVpcCommand(args);
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
   * <p>Deletes the specified set of tag keys and their values from the specified Amazon Lightsail
   *       resource.</p>
   *          <p>The <code>untag resource</code> operation supports tag-based access control via request
   *       tags and resource tags applied to the resource identified by <code>resource name</code>. For
   *       more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
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
   * <p>Updates a domain recordset after it is created.</p>
   *          <p>The <code>update domain entry</code> operation supports tag-based access control via
   *       resource tags applied to the resource identified by <code>domain name</code>. For more
   *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   */
  public updateDomainEntry(
    args: UpdateDomainEntryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDomainEntryCommandOutput>;
  public updateDomainEntry(
    args: UpdateDomainEntryCommandInput,
    cb: (err: any, data?: UpdateDomainEntryCommandOutput) => void
  ): void;
  public updateDomainEntry(
    args: UpdateDomainEntryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDomainEntryCommandOutput) => void
  ): void;
  public updateDomainEntry(
    args: UpdateDomainEntryCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateDomainEntryCommandOutput) => void),
    cb?: (err: any, data?: UpdateDomainEntryCommandOutput) => void
  ): Promise<UpdateDomainEntryCommandOutput> | void {
    const command = new UpdateDomainEntryCommand(args);
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
   * <p>Updates the specified attribute for a load balancer. You can only update one attribute
   *       at a time.</p>
   *          <p>The <code>update load balancer attribute</code> operation supports tag-based access
   *       control via resource tags applied to the resource identified by <code>load balancer
   *         name</code>. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   */
  public updateLoadBalancerAttribute(
    args: UpdateLoadBalancerAttributeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLoadBalancerAttributeCommandOutput>;
  public updateLoadBalancerAttribute(
    args: UpdateLoadBalancerAttributeCommandInput,
    cb: (err: any, data?: UpdateLoadBalancerAttributeCommandOutput) => void
  ): void;
  public updateLoadBalancerAttribute(
    args: UpdateLoadBalancerAttributeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLoadBalancerAttributeCommandOutput) => void
  ): void;
  public updateLoadBalancerAttribute(
    args: UpdateLoadBalancerAttributeCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateLoadBalancerAttributeCommandOutput) => void),
    cb?: (err: any, data?: UpdateLoadBalancerAttributeCommandOutput) => void
  ): Promise<UpdateLoadBalancerAttributeCommandOutput> | void {
    const command = new UpdateLoadBalancerAttributeCommand(args);
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
   * <p>Allows the update of one or more attributes of a database in Amazon Lightsail.</p>
   *          <p>Updates are applied immediately, or in cases where the updates could result in an
   *       outage, are applied during the database's predefined maintenance window.</p>
   *          <p>The <code>update relational database</code> operation supports tag-based access control
   *       via resource tags applied to the resource identified by relationalDatabaseName. For more
   *       information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   */
  public updateRelationalDatabase(
    args: UpdateRelationalDatabaseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRelationalDatabaseCommandOutput>;
  public updateRelationalDatabase(
    args: UpdateRelationalDatabaseCommandInput,
    cb: (err: any, data?: UpdateRelationalDatabaseCommandOutput) => void
  ): void;
  public updateRelationalDatabase(
    args: UpdateRelationalDatabaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRelationalDatabaseCommandOutput) => void
  ): void;
  public updateRelationalDatabase(
    args: UpdateRelationalDatabaseCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateRelationalDatabaseCommandOutput) => void),
    cb?: (err: any, data?: UpdateRelationalDatabaseCommandOutput) => void
  ): Promise<UpdateRelationalDatabaseCommandOutput> | void {
    const command = new UpdateRelationalDatabaseCommand(args);
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
   * <p>Allows the update of one or more parameters of a database in Amazon Lightsail.</p>
   *          <p>Parameter updates don't cause outages; therefore, their application is not subject to
   *       the preferred maintenance window. However, there are two ways in which parameter updates are
   *       applied: <code>dynamic</code> or <code>pending-reboot</code>. Parameters marked with a
   *         <code>dynamic</code> apply type are applied immediately. Parameters marked with a
   *         <code>pending-reboot</code> apply type are applied only after the database is rebooted using
   *       the <code>reboot relational database</code> operation.</p>
   *          <p>The <code>update relational database parameters</code> operation supports tag-based
   *       access control via resource tags applied to the resource identified by relationalDatabaseName.
   *       For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
   */
  public updateRelationalDatabaseParameters(
    args: UpdateRelationalDatabaseParametersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRelationalDatabaseParametersCommandOutput>;
  public updateRelationalDatabaseParameters(
    args: UpdateRelationalDatabaseParametersCommandInput,
    cb: (
      err: any,
      data?: UpdateRelationalDatabaseParametersCommandOutput
    ) => void
  ): void;
  public updateRelationalDatabaseParameters(
    args: UpdateRelationalDatabaseParametersCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: UpdateRelationalDatabaseParametersCommandOutput
    ) => void
  ): void;
  public updateRelationalDatabaseParameters(
    args: UpdateRelationalDatabaseParametersCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: UpdateRelationalDatabaseParametersCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: UpdateRelationalDatabaseParametersCommandOutput
    ) => void
  ): Promise<UpdateRelationalDatabaseParametersCommandOutput> | void {
    const command = new UpdateRelationalDatabaseParametersCommand(args);
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
