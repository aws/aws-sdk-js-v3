// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { BackupGatewayClient } from "./BackupGatewayClient";
import {
  AssociateGatewayToServerCommand,
  AssociateGatewayToServerCommandInput,
  AssociateGatewayToServerCommandOutput,
} from "./commands/AssociateGatewayToServerCommand";
import {
  CreateGatewayCommand,
  CreateGatewayCommandInput,
  CreateGatewayCommandOutput,
} from "./commands/CreateGatewayCommand";
import {
  DeleteGatewayCommand,
  DeleteGatewayCommandInput,
  DeleteGatewayCommandOutput,
} from "./commands/DeleteGatewayCommand";
import {
  DeleteHypervisorCommand,
  DeleteHypervisorCommandInput,
  DeleteHypervisorCommandOutput,
} from "./commands/DeleteHypervisorCommand";
import {
  DisassociateGatewayFromServerCommand,
  DisassociateGatewayFromServerCommandInput,
  DisassociateGatewayFromServerCommandOutput,
} from "./commands/DisassociateGatewayFromServerCommand";
import {
  GetBandwidthRateLimitScheduleCommand,
  GetBandwidthRateLimitScheduleCommandInput,
  GetBandwidthRateLimitScheduleCommandOutput,
} from "./commands/GetBandwidthRateLimitScheduleCommand";
import { GetGatewayCommand, GetGatewayCommandInput, GetGatewayCommandOutput } from "./commands/GetGatewayCommand";
import {
  GetHypervisorCommand,
  GetHypervisorCommandInput,
  GetHypervisorCommandOutput,
} from "./commands/GetHypervisorCommand";
import {
  GetHypervisorPropertyMappingsCommand,
  GetHypervisorPropertyMappingsCommandInput,
  GetHypervisorPropertyMappingsCommandOutput,
} from "./commands/GetHypervisorPropertyMappingsCommand";
import {
  GetVirtualMachineCommand,
  GetVirtualMachineCommandInput,
  GetVirtualMachineCommandOutput,
} from "./commands/GetVirtualMachineCommand";
import {
  ImportHypervisorConfigurationCommand,
  ImportHypervisorConfigurationCommandInput,
  ImportHypervisorConfigurationCommandOutput,
} from "./commands/ImportHypervisorConfigurationCommand";
import {
  ListGatewaysCommand,
  ListGatewaysCommandInput,
  ListGatewaysCommandOutput,
} from "./commands/ListGatewaysCommand";
import {
  ListHypervisorsCommand,
  ListHypervisorsCommandInput,
  ListHypervisorsCommandOutput,
} from "./commands/ListHypervisorsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListVirtualMachinesCommand,
  ListVirtualMachinesCommandInput,
  ListVirtualMachinesCommandOutput,
} from "./commands/ListVirtualMachinesCommand";
import {
  PutBandwidthRateLimitScheduleCommand,
  PutBandwidthRateLimitScheduleCommandInput,
  PutBandwidthRateLimitScheduleCommandOutput,
} from "./commands/PutBandwidthRateLimitScheduleCommand";
import {
  PutHypervisorPropertyMappingsCommand,
  PutHypervisorPropertyMappingsCommandInput,
  PutHypervisorPropertyMappingsCommandOutput,
} from "./commands/PutHypervisorPropertyMappingsCommand";
import {
  PutMaintenanceStartTimeCommand,
  PutMaintenanceStartTimeCommandInput,
  PutMaintenanceStartTimeCommandOutput,
} from "./commands/PutMaintenanceStartTimeCommand";
import {
  StartVirtualMachinesMetadataSyncCommand,
  StartVirtualMachinesMetadataSyncCommandInput,
  StartVirtualMachinesMetadataSyncCommandOutput,
} from "./commands/StartVirtualMachinesMetadataSyncCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  TestHypervisorConfigurationCommand,
  TestHypervisorConfigurationCommandInput,
  TestHypervisorConfigurationCommandOutput,
} from "./commands/TestHypervisorConfigurationCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateGatewayInformationCommand,
  UpdateGatewayInformationCommandInput,
  UpdateGatewayInformationCommandOutput,
} from "./commands/UpdateGatewayInformationCommand";
import {
  UpdateGatewaySoftwareNowCommand,
  UpdateGatewaySoftwareNowCommandInput,
  UpdateGatewaySoftwareNowCommandOutput,
} from "./commands/UpdateGatewaySoftwareNowCommand";
import {
  UpdateHypervisorCommand,
  UpdateHypervisorCommandInput,
  UpdateHypervisorCommandOutput,
} from "./commands/UpdateHypervisorCommand";

/**
 * <fullname>Backup gateway</fullname>
 *          <p>Backup gateway connects Backup to your hypervisor, so you can
 *       create, store, and restore backups of your virtual machines (VMs) anywhere, whether
 *       on-premises or in the VMware Cloud (VMC) on Amazon Web Services.</p>
 *          <p>Add on-premises resources by connecting to a hypervisor through a gateway. Backup will automatically discover the resources in your hypervisor.</p>
 *          <p>Use Backup to assign virtual or on-premises resources to a backup plan, or run
 *       on-demand backups. Once you have backed up your resources, you can view them and restore them
 *       like any resource supported by Backup.</p>
 *          <p>To download the Amazon Web Services software to get started, navigate to the Backup console, choose <b>Gateways</b>, then choose <b>Create gateway</b>.</p>
 */
export class BackupGateway extends BackupGatewayClient {
  /**
   * <p>Associates a backup gateway with your server. After you complete the association process,
   *       you can back up and restore your VMs through the gateway.</p>
   */
  public associateGatewayToServer(
    args: AssociateGatewayToServerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateGatewayToServerCommandOutput>;
  public associateGatewayToServer(
    args: AssociateGatewayToServerCommandInput,
    cb: (err: any, data?: AssociateGatewayToServerCommandOutput) => void
  ): void;
  public associateGatewayToServer(
    args: AssociateGatewayToServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateGatewayToServerCommandOutput) => void
  ): void;
  public associateGatewayToServer(
    args: AssociateGatewayToServerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateGatewayToServerCommandOutput) => void),
    cb?: (err: any, data?: AssociateGatewayToServerCommandOutput) => void
  ): Promise<AssociateGatewayToServerCommandOutput> | void {
    const command = new AssociateGatewayToServerCommand(args);
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
   * <p>Creates a backup gateway. After you create a gateway, you can associate it with a server
   *       using the <code>AssociateGatewayToServer</code> operation.</p>
   */
  public createGateway(
    args: CreateGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateGatewayCommandOutput>;
  public createGateway(
    args: CreateGatewayCommandInput,
    cb: (err: any, data?: CreateGatewayCommandOutput) => void
  ): void;
  public createGateway(
    args: CreateGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGatewayCommandOutput) => void
  ): void;
  public createGateway(
    args: CreateGatewayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateGatewayCommandOutput) => void),
    cb?: (err: any, data?: CreateGatewayCommandOutput) => void
  ): Promise<CreateGatewayCommandOutput> | void {
    const command = new CreateGatewayCommand(args);
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
   * <p>Deletes a backup gateway.</p>
   */
  public deleteGateway(
    args: DeleteGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteGatewayCommandOutput>;
  public deleteGateway(
    args: DeleteGatewayCommandInput,
    cb: (err: any, data?: DeleteGatewayCommandOutput) => void
  ): void;
  public deleteGateway(
    args: DeleteGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGatewayCommandOutput) => void
  ): void;
  public deleteGateway(
    args: DeleteGatewayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteGatewayCommandOutput) => void),
    cb?: (err: any, data?: DeleteGatewayCommandOutput) => void
  ): Promise<DeleteGatewayCommandOutput> | void {
    const command = new DeleteGatewayCommand(args);
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
   * <p>Deletes a hypervisor.</p>
   */
  public deleteHypervisor(
    args: DeleteHypervisorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteHypervisorCommandOutput>;
  public deleteHypervisor(
    args: DeleteHypervisorCommandInput,
    cb: (err: any, data?: DeleteHypervisorCommandOutput) => void
  ): void;
  public deleteHypervisor(
    args: DeleteHypervisorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteHypervisorCommandOutput) => void
  ): void;
  public deleteHypervisor(
    args: DeleteHypervisorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteHypervisorCommandOutput) => void),
    cb?: (err: any, data?: DeleteHypervisorCommandOutput) => void
  ): Promise<DeleteHypervisorCommandOutput> | void {
    const command = new DeleteHypervisorCommand(args);
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
   * <p>Disassociates a backup gateway from the specified server. After the disassociation process
   *       finishes, the gateway can no longer access the virtual machines on the server.</p>
   */
  public disassociateGatewayFromServer(
    args: DisassociateGatewayFromServerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateGatewayFromServerCommandOutput>;
  public disassociateGatewayFromServer(
    args: DisassociateGatewayFromServerCommandInput,
    cb: (err: any, data?: DisassociateGatewayFromServerCommandOutput) => void
  ): void;
  public disassociateGatewayFromServer(
    args: DisassociateGatewayFromServerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateGatewayFromServerCommandOutput) => void
  ): void;
  public disassociateGatewayFromServer(
    args: DisassociateGatewayFromServerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateGatewayFromServerCommandOutput) => void),
    cb?: (err: any, data?: DisassociateGatewayFromServerCommandOutput) => void
  ): Promise<DisassociateGatewayFromServerCommandOutput> | void {
    const command = new DisassociateGatewayFromServerCommand(args);
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
   * <p>Retrieves the bandwidth rate limit schedule for a specified gateway.
   *       By default, gateways do not have bandwidth rate limit schedules, which means
   *       no bandwidth rate limiting is in effect. Use this to get a gateway's
   *       bandwidth rate limit schedule.</p>
   */
  public getBandwidthRateLimitSchedule(
    args: GetBandwidthRateLimitScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBandwidthRateLimitScheduleCommandOutput>;
  public getBandwidthRateLimitSchedule(
    args: GetBandwidthRateLimitScheduleCommandInput,
    cb: (err: any, data?: GetBandwidthRateLimitScheduleCommandOutput) => void
  ): void;
  public getBandwidthRateLimitSchedule(
    args: GetBandwidthRateLimitScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBandwidthRateLimitScheduleCommandOutput) => void
  ): void;
  public getBandwidthRateLimitSchedule(
    args: GetBandwidthRateLimitScheduleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetBandwidthRateLimitScheduleCommandOutput) => void),
    cb?: (err: any, data?: GetBandwidthRateLimitScheduleCommandOutput) => void
  ): Promise<GetBandwidthRateLimitScheduleCommandOutput> | void {
    const command = new GetBandwidthRateLimitScheduleCommand(args);
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
   * <p>By providing the ARN (Amazon Resource Name), this
   *       API returns the gateway.</p>
   */
  public getGateway(args: GetGatewayCommandInput, options?: __HttpHandlerOptions): Promise<GetGatewayCommandOutput>;
  public getGateway(args: GetGatewayCommandInput, cb: (err: any, data?: GetGatewayCommandOutput) => void): void;
  public getGateway(
    args: GetGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGatewayCommandOutput) => void
  ): void;
  public getGateway(
    args: GetGatewayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetGatewayCommandOutput) => void),
    cb?: (err: any, data?: GetGatewayCommandOutput) => void
  ): Promise<GetGatewayCommandOutput> | void {
    const command = new GetGatewayCommand(args);
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
   * <p>This action requests information about the specified hypervisor to which the gateway will connect.
   *       A hypervisor is hardware, software, or firmware that creates and manages virtual machines,
   *       and allocates resources to them.</p>
   */
  public getHypervisor(
    args: GetHypervisorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetHypervisorCommandOutput>;
  public getHypervisor(
    args: GetHypervisorCommandInput,
    cb: (err: any, data?: GetHypervisorCommandOutput) => void
  ): void;
  public getHypervisor(
    args: GetHypervisorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetHypervisorCommandOutput) => void
  ): void;
  public getHypervisor(
    args: GetHypervisorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetHypervisorCommandOutput) => void),
    cb?: (err: any, data?: GetHypervisorCommandOutput) => void
  ): Promise<GetHypervisorCommandOutput> | void {
    const command = new GetHypervisorCommand(args);
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
   * <p>This action retrieves the property mappings for the specified hypervisor.
   *       A hypervisor property mapping displays the relationship of entity properties
   *       available from the on-premises hypervisor to the properties available in Amazon Web Services.</p>
   */
  public getHypervisorPropertyMappings(
    args: GetHypervisorPropertyMappingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetHypervisorPropertyMappingsCommandOutput>;
  public getHypervisorPropertyMappings(
    args: GetHypervisorPropertyMappingsCommandInput,
    cb: (err: any, data?: GetHypervisorPropertyMappingsCommandOutput) => void
  ): void;
  public getHypervisorPropertyMappings(
    args: GetHypervisorPropertyMappingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetHypervisorPropertyMappingsCommandOutput) => void
  ): void;
  public getHypervisorPropertyMappings(
    args: GetHypervisorPropertyMappingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetHypervisorPropertyMappingsCommandOutput) => void),
    cb?: (err: any, data?: GetHypervisorPropertyMappingsCommandOutput) => void
  ): Promise<GetHypervisorPropertyMappingsCommandOutput> | void {
    const command = new GetHypervisorPropertyMappingsCommand(args);
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
   * <p>By providing the ARN (Amazon Resource Name), this API returns the virtual machine.</p>
   */
  public getVirtualMachine(
    args: GetVirtualMachineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVirtualMachineCommandOutput>;
  public getVirtualMachine(
    args: GetVirtualMachineCommandInput,
    cb: (err: any, data?: GetVirtualMachineCommandOutput) => void
  ): void;
  public getVirtualMachine(
    args: GetVirtualMachineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVirtualMachineCommandOutput) => void
  ): void;
  public getVirtualMachine(
    args: GetVirtualMachineCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetVirtualMachineCommandOutput) => void),
    cb?: (err: any, data?: GetVirtualMachineCommandOutput) => void
  ): Promise<GetVirtualMachineCommandOutput> | void {
    const command = new GetVirtualMachineCommand(args);
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
   * <p>Connect to a hypervisor by importing its configuration.</p>
   */
  public importHypervisorConfiguration(
    args: ImportHypervisorConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportHypervisorConfigurationCommandOutput>;
  public importHypervisorConfiguration(
    args: ImportHypervisorConfigurationCommandInput,
    cb: (err: any, data?: ImportHypervisorConfigurationCommandOutput) => void
  ): void;
  public importHypervisorConfiguration(
    args: ImportHypervisorConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportHypervisorConfigurationCommandOutput) => void
  ): void;
  public importHypervisorConfiguration(
    args: ImportHypervisorConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ImportHypervisorConfigurationCommandOutput) => void),
    cb?: (err: any, data?: ImportHypervisorConfigurationCommandOutput) => void
  ): Promise<ImportHypervisorConfigurationCommandOutput> | void {
    const command = new ImportHypervisorConfigurationCommand(args);
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
   * <p>Lists backup gateways owned by an Amazon Web Services account in an Amazon Web Services Region. The returned list is ordered by gateway Amazon Resource Name (ARN).</p>
   */
  public listGateways(
    args: ListGatewaysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGatewaysCommandOutput>;
  public listGateways(args: ListGatewaysCommandInput, cb: (err: any, data?: ListGatewaysCommandOutput) => void): void;
  public listGateways(
    args: ListGatewaysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGatewaysCommandOutput) => void
  ): void;
  public listGateways(
    args: ListGatewaysCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListGatewaysCommandOutput) => void),
    cb?: (err: any, data?: ListGatewaysCommandOutput) => void
  ): Promise<ListGatewaysCommandOutput> | void {
    const command = new ListGatewaysCommand(args);
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
   * <p>Lists your hypervisors.</p>
   */
  public listHypervisors(
    args: ListHypervisorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListHypervisorsCommandOutput>;
  public listHypervisors(
    args: ListHypervisorsCommandInput,
    cb: (err: any, data?: ListHypervisorsCommandOutput) => void
  ): void;
  public listHypervisors(
    args: ListHypervisorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListHypervisorsCommandOutput) => void
  ): void;
  public listHypervisors(
    args: ListHypervisorsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListHypervisorsCommandOutput) => void),
    cb?: (err: any, data?: ListHypervisorsCommandOutput) => void
  ): Promise<ListHypervisorsCommandOutput> | void {
    const command = new ListHypervisorsCommand(args);
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
   * <p>Lists the tags applied to the resource identified by its Amazon Resource Name
   *       (ARN).</p>
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
   * <p>Lists your virtual machines.</p>
   */
  public listVirtualMachines(
    args: ListVirtualMachinesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVirtualMachinesCommandOutput>;
  public listVirtualMachines(
    args: ListVirtualMachinesCommandInput,
    cb: (err: any, data?: ListVirtualMachinesCommandOutput) => void
  ): void;
  public listVirtualMachines(
    args: ListVirtualMachinesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVirtualMachinesCommandOutput) => void
  ): void;
  public listVirtualMachines(
    args: ListVirtualMachinesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListVirtualMachinesCommandOutput) => void),
    cb?: (err: any, data?: ListVirtualMachinesCommandOutput) => void
  ): Promise<ListVirtualMachinesCommandOutput> | void {
    const command = new ListVirtualMachinesCommand(args);
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
   * <p>This action sets the bandwidth rate limit schedule for a specified gateway.
   *       By default, gateways do not have a bandwidth rate limit schedule, which means
   *       no bandwidth rate limiting is in effect. Use this to initiate a
   *       gateway's bandwidth rate limit schedule.</p>
   */
  public putBandwidthRateLimitSchedule(
    args: PutBandwidthRateLimitScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutBandwidthRateLimitScheduleCommandOutput>;
  public putBandwidthRateLimitSchedule(
    args: PutBandwidthRateLimitScheduleCommandInput,
    cb: (err: any, data?: PutBandwidthRateLimitScheduleCommandOutput) => void
  ): void;
  public putBandwidthRateLimitSchedule(
    args: PutBandwidthRateLimitScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutBandwidthRateLimitScheduleCommandOutput) => void
  ): void;
  public putBandwidthRateLimitSchedule(
    args: PutBandwidthRateLimitScheduleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutBandwidthRateLimitScheduleCommandOutput) => void),
    cb?: (err: any, data?: PutBandwidthRateLimitScheduleCommandOutput) => void
  ): Promise<PutBandwidthRateLimitScheduleCommandOutput> | void {
    const command = new PutBandwidthRateLimitScheduleCommand(args);
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
   * <p>This action sets the property mappings for the specified hypervisor.
   *       A hypervisor property mapping displays the relationship of entity properties
   *       available from the on-premises hypervisor to the properties available in Amazon Web Services.</p>
   */
  public putHypervisorPropertyMappings(
    args: PutHypervisorPropertyMappingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutHypervisorPropertyMappingsCommandOutput>;
  public putHypervisorPropertyMappings(
    args: PutHypervisorPropertyMappingsCommandInput,
    cb: (err: any, data?: PutHypervisorPropertyMappingsCommandOutput) => void
  ): void;
  public putHypervisorPropertyMappings(
    args: PutHypervisorPropertyMappingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutHypervisorPropertyMappingsCommandOutput) => void
  ): void;
  public putHypervisorPropertyMappings(
    args: PutHypervisorPropertyMappingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutHypervisorPropertyMappingsCommandOutput) => void),
    cb?: (err: any, data?: PutHypervisorPropertyMappingsCommandOutput) => void
  ): Promise<PutHypervisorPropertyMappingsCommandOutput> | void {
    const command = new PutHypervisorPropertyMappingsCommand(args);
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
   * <p>Set the maintenance start time for a gateway.</p>
   */
  public putMaintenanceStartTime(
    args: PutMaintenanceStartTimeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutMaintenanceStartTimeCommandOutput>;
  public putMaintenanceStartTime(
    args: PutMaintenanceStartTimeCommandInput,
    cb: (err: any, data?: PutMaintenanceStartTimeCommandOutput) => void
  ): void;
  public putMaintenanceStartTime(
    args: PutMaintenanceStartTimeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutMaintenanceStartTimeCommandOutput) => void
  ): void;
  public putMaintenanceStartTime(
    args: PutMaintenanceStartTimeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutMaintenanceStartTimeCommandOutput) => void),
    cb?: (err: any, data?: PutMaintenanceStartTimeCommandOutput) => void
  ): Promise<PutMaintenanceStartTimeCommandOutput> | void {
    const command = new PutMaintenanceStartTimeCommand(args);
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
   * <p>This action sends a request to sync metadata across the specified virtual machines.</p>
   */
  public startVirtualMachinesMetadataSync(
    args: StartVirtualMachinesMetadataSyncCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartVirtualMachinesMetadataSyncCommandOutput>;
  public startVirtualMachinesMetadataSync(
    args: StartVirtualMachinesMetadataSyncCommandInput,
    cb: (err: any, data?: StartVirtualMachinesMetadataSyncCommandOutput) => void
  ): void;
  public startVirtualMachinesMetadataSync(
    args: StartVirtualMachinesMetadataSyncCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartVirtualMachinesMetadataSyncCommandOutput) => void
  ): void;
  public startVirtualMachinesMetadataSync(
    args: StartVirtualMachinesMetadataSyncCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartVirtualMachinesMetadataSyncCommandOutput) => void),
    cb?: (err: any, data?: StartVirtualMachinesMetadataSyncCommandOutput) => void
  ): Promise<StartVirtualMachinesMetadataSyncCommandOutput> | void {
    const command = new StartVirtualMachinesMetadataSyncCommand(args);
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
   * <p>Tag the resource.</p>
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
   * <p>Tests your hypervisor configuration to validate that backup gateway can connect with the
   *       hypervisor and its resources.</p>
   */
  public testHypervisorConfiguration(
    args: TestHypervisorConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TestHypervisorConfigurationCommandOutput>;
  public testHypervisorConfiguration(
    args: TestHypervisorConfigurationCommandInput,
    cb: (err: any, data?: TestHypervisorConfigurationCommandOutput) => void
  ): void;
  public testHypervisorConfiguration(
    args: TestHypervisorConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestHypervisorConfigurationCommandOutput) => void
  ): void;
  public testHypervisorConfiguration(
    args: TestHypervisorConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TestHypervisorConfigurationCommandOutput) => void),
    cb?: (err: any, data?: TestHypervisorConfigurationCommandOutput) => void
  ): Promise<TestHypervisorConfigurationCommandOutput> | void {
    const command = new TestHypervisorConfigurationCommand(args);
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
   * <p>Removes tags from the resource.</p>
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
   * <p>Updates a gateway's name. Specify which gateway to update using the Amazon Resource Name
   *       (ARN) of the gateway in your request.</p>
   */
  public updateGatewayInformation(
    args: UpdateGatewayInformationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGatewayInformationCommandOutput>;
  public updateGatewayInformation(
    args: UpdateGatewayInformationCommandInput,
    cb: (err: any, data?: UpdateGatewayInformationCommandOutput) => void
  ): void;
  public updateGatewayInformation(
    args: UpdateGatewayInformationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGatewayInformationCommandOutput) => void
  ): void;
  public updateGatewayInformation(
    args: UpdateGatewayInformationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateGatewayInformationCommandOutput) => void),
    cb?: (err: any, data?: UpdateGatewayInformationCommandOutput) => void
  ): Promise<UpdateGatewayInformationCommandOutput> | void {
    const command = new UpdateGatewayInformationCommand(args);
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
   * <p>Updates the gateway virtual machine (VM) software.
   *       The request immediately triggers the software update.</p>
   *          <note>
   *             <p>When you make this request, you get a <code>200 OK</code>
   *         success response immediately. However, it might take some
   *         time for the update to complete.</p>
   *          </note>
   */
  public updateGatewaySoftwareNow(
    args: UpdateGatewaySoftwareNowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGatewaySoftwareNowCommandOutput>;
  public updateGatewaySoftwareNow(
    args: UpdateGatewaySoftwareNowCommandInput,
    cb: (err: any, data?: UpdateGatewaySoftwareNowCommandOutput) => void
  ): void;
  public updateGatewaySoftwareNow(
    args: UpdateGatewaySoftwareNowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGatewaySoftwareNowCommandOutput) => void
  ): void;
  public updateGatewaySoftwareNow(
    args: UpdateGatewaySoftwareNowCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateGatewaySoftwareNowCommandOutput) => void),
    cb?: (err: any, data?: UpdateGatewaySoftwareNowCommandOutput) => void
  ): Promise<UpdateGatewaySoftwareNowCommandOutput> | void {
    const command = new UpdateGatewaySoftwareNowCommand(args);
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
   * <p>Updates a hypervisor metadata, including its host, username, and password. Specify which
   *       hypervisor to update using the Amazon Resource Name (ARN) of the hypervisor in your
   *       request.</p>
   */
  public updateHypervisor(
    args: UpdateHypervisorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateHypervisorCommandOutput>;
  public updateHypervisor(
    args: UpdateHypervisorCommandInput,
    cb: (err: any, data?: UpdateHypervisorCommandOutput) => void
  ): void;
  public updateHypervisor(
    args: UpdateHypervisorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateHypervisorCommandOutput) => void
  ): void;
  public updateHypervisor(
    args: UpdateHypervisorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateHypervisorCommandOutput) => void),
    cb?: (err: any, data?: UpdateHypervisorCommandOutput) => void
  ): Promise<UpdateHypervisorCommandOutput> | void {
    const command = new UpdateHypervisorCommand(args);
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
