import { IoTWirelessClient } from "./IoTWirelessClient";
import {
  AssociateAwsAccountWithPartnerAccountCommand,
  AssociateAwsAccountWithPartnerAccountCommandInput,
  AssociateAwsAccountWithPartnerAccountCommandOutput,
} from "./commands/AssociateAwsAccountWithPartnerAccountCommand";
import {
  AssociateWirelessDeviceWithThingCommand,
  AssociateWirelessDeviceWithThingCommandInput,
  AssociateWirelessDeviceWithThingCommandOutput,
} from "./commands/AssociateWirelessDeviceWithThingCommand";
import {
  AssociateWirelessGatewayWithCertificateCommand,
  AssociateWirelessGatewayWithCertificateCommandInput,
  AssociateWirelessGatewayWithCertificateCommandOutput,
} from "./commands/AssociateWirelessGatewayWithCertificateCommand";
import {
  AssociateWirelessGatewayWithThingCommand,
  AssociateWirelessGatewayWithThingCommandInput,
  AssociateWirelessGatewayWithThingCommandOutput,
} from "./commands/AssociateWirelessGatewayWithThingCommand";
import {
  CreateDestinationCommand,
  CreateDestinationCommandInput,
  CreateDestinationCommandOutput,
} from "./commands/CreateDestinationCommand";
import {
  CreateDeviceProfileCommand,
  CreateDeviceProfileCommandInput,
  CreateDeviceProfileCommandOutput,
} from "./commands/CreateDeviceProfileCommand";
import {
  CreateServiceProfileCommand,
  CreateServiceProfileCommandInput,
  CreateServiceProfileCommandOutput,
} from "./commands/CreateServiceProfileCommand";
import {
  CreateWirelessDeviceCommand,
  CreateWirelessDeviceCommandInput,
  CreateWirelessDeviceCommandOutput,
} from "./commands/CreateWirelessDeviceCommand";
import {
  CreateWirelessGatewayCommand,
  CreateWirelessGatewayCommandInput,
  CreateWirelessGatewayCommandOutput,
} from "./commands/CreateWirelessGatewayCommand";
import {
  CreateWirelessGatewayTaskCommand,
  CreateWirelessGatewayTaskCommandInput,
  CreateWirelessGatewayTaskCommandOutput,
} from "./commands/CreateWirelessGatewayTaskCommand";
import {
  CreateWirelessGatewayTaskDefinitionCommand,
  CreateWirelessGatewayTaskDefinitionCommandInput,
  CreateWirelessGatewayTaskDefinitionCommandOutput,
} from "./commands/CreateWirelessGatewayTaskDefinitionCommand";
import {
  DeleteDestinationCommand,
  DeleteDestinationCommandInput,
  DeleteDestinationCommandOutput,
} from "./commands/DeleteDestinationCommand";
import {
  DeleteDeviceProfileCommand,
  DeleteDeviceProfileCommandInput,
  DeleteDeviceProfileCommandOutput,
} from "./commands/DeleteDeviceProfileCommand";
import {
  DeleteServiceProfileCommand,
  DeleteServiceProfileCommandInput,
  DeleteServiceProfileCommandOutput,
} from "./commands/DeleteServiceProfileCommand";
import {
  DeleteWirelessDeviceCommand,
  DeleteWirelessDeviceCommandInput,
  DeleteWirelessDeviceCommandOutput,
} from "./commands/DeleteWirelessDeviceCommand";
import {
  DeleteWirelessGatewayCommand,
  DeleteWirelessGatewayCommandInput,
  DeleteWirelessGatewayCommandOutput,
} from "./commands/DeleteWirelessGatewayCommand";
import {
  DeleteWirelessGatewayTaskCommand,
  DeleteWirelessGatewayTaskCommandInput,
  DeleteWirelessGatewayTaskCommandOutput,
} from "./commands/DeleteWirelessGatewayTaskCommand";
import {
  DeleteWirelessGatewayTaskDefinitionCommand,
  DeleteWirelessGatewayTaskDefinitionCommandInput,
  DeleteWirelessGatewayTaskDefinitionCommandOutput,
} from "./commands/DeleteWirelessGatewayTaskDefinitionCommand";
import {
  DisassociateAwsAccountFromPartnerAccountCommand,
  DisassociateAwsAccountFromPartnerAccountCommandInput,
  DisassociateAwsAccountFromPartnerAccountCommandOutput,
} from "./commands/DisassociateAwsAccountFromPartnerAccountCommand";
import {
  DisassociateWirelessDeviceFromThingCommand,
  DisassociateWirelessDeviceFromThingCommandInput,
  DisassociateWirelessDeviceFromThingCommandOutput,
} from "./commands/DisassociateWirelessDeviceFromThingCommand";
import {
  DisassociateWirelessGatewayFromCertificateCommand,
  DisassociateWirelessGatewayFromCertificateCommandInput,
  DisassociateWirelessGatewayFromCertificateCommandOutput,
} from "./commands/DisassociateWirelessGatewayFromCertificateCommand";
import {
  DisassociateWirelessGatewayFromThingCommand,
  DisassociateWirelessGatewayFromThingCommandInput,
  DisassociateWirelessGatewayFromThingCommandOutput,
} from "./commands/DisassociateWirelessGatewayFromThingCommand";
import {
  GetDestinationCommand,
  GetDestinationCommandInput,
  GetDestinationCommandOutput,
} from "./commands/GetDestinationCommand";
import {
  GetDeviceProfileCommand,
  GetDeviceProfileCommandInput,
  GetDeviceProfileCommandOutput,
} from "./commands/GetDeviceProfileCommand";
import {
  GetPartnerAccountCommand,
  GetPartnerAccountCommandInput,
  GetPartnerAccountCommandOutput,
} from "./commands/GetPartnerAccountCommand";
import {
  GetServiceEndpointCommand,
  GetServiceEndpointCommandInput,
  GetServiceEndpointCommandOutput,
} from "./commands/GetServiceEndpointCommand";
import {
  GetServiceProfileCommand,
  GetServiceProfileCommandInput,
  GetServiceProfileCommandOutput,
} from "./commands/GetServiceProfileCommand";
import {
  GetWirelessDeviceCommand,
  GetWirelessDeviceCommandInput,
  GetWirelessDeviceCommandOutput,
} from "./commands/GetWirelessDeviceCommand";
import {
  GetWirelessDeviceStatisticsCommand,
  GetWirelessDeviceStatisticsCommandInput,
  GetWirelessDeviceStatisticsCommandOutput,
} from "./commands/GetWirelessDeviceStatisticsCommand";
import {
  GetWirelessGatewayCertificateCommand,
  GetWirelessGatewayCertificateCommandInput,
  GetWirelessGatewayCertificateCommandOutput,
} from "./commands/GetWirelessGatewayCertificateCommand";
import {
  GetWirelessGatewayCommand,
  GetWirelessGatewayCommandInput,
  GetWirelessGatewayCommandOutput,
} from "./commands/GetWirelessGatewayCommand";
import {
  GetWirelessGatewayFirmwareInformationCommand,
  GetWirelessGatewayFirmwareInformationCommandInput,
  GetWirelessGatewayFirmwareInformationCommandOutput,
} from "./commands/GetWirelessGatewayFirmwareInformationCommand";
import {
  GetWirelessGatewayStatisticsCommand,
  GetWirelessGatewayStatisticsCommandInput,
  GetWirelessGatewayStatisticsCommandOutput,
} from "./commands/GetWirelessGatewayStatisticsCommand";
import {
  GetWirelessGatewayTaskCommand,
  GetWirelessGatewayTaskCommandInput,
  GetWirelessGatewayTaskCommandOutput,
} from "./commands/GetWirelessGatewayTaskCommand";
import {
  GetWirelessGatewayTaskDefinitionCommand,
  GetWirelessGatewayTaskDefinitionCommandInput,
  GetWirelessGatewayTaskDefinitionCommandOutput,
} from "./commands/GetWirelessGatewayTaskDefinitionCommand";
import {
  ListDestinationsCommand,
  ListDestinationsCommandInput,
  ListDestinationsCommandOutput,
} from "./commands/ListDestinationsCommand";
import {
  ListDeviceProfilesCommand,
  ListDeviceProfilesCommandInput,
  ListDeviceProfilesCommandOutput,
} from "./commands/ListDeviceProfilesCommand";
import {
  ListPartnerAccountsCommand,
  ListPartnerAccountsCommandInput,
  ListPartnerAccountsCommandOutput,
} from "./commands/ListPartnerAccountsCommand";
import {
  ListServiceProfilesCommand,
  ListServiceProfilesCommandInput,
  ListServiceProfilesCommandOutput,
} from "./commands/ListServiceProfilesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListWirelessDevicesCommand,
  ListWirelessDevicesCommandInput,
  ListWirelessDevicesCommandOutput,
} from "./commands/ListWirelessDevicesCommand";
import {
  ListWirelessGatewayTaskDefinitionsCommand,
  ListWirelessGatewayTaskDefinitionsCommandInput,
  ListWirelessGatewayTaskDefinitionsCommandOutput,
} from "./commands/ListWirelessGatewayTaskDefinitionsCommand";
import {
  ListWirelessGatewaysCommand,
  ListWirelessGatewaysCommandInput,
  ListWirelessGatewaysCommandOutput,
} from "./commands/ListWirelessGatewaysCommand";
import {
  SendDataToWirelessDeviceCommand,
  SendDataToWirelessDeviceCommandInput,
  SendDataToWirelessDeviceCommandOutput,
} from "./commands/SendDataToWirelessDeviceCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  TestWirelessDeviceCommand,
  TestWirelessDeviceCommandInput,
  TestWirelessDeviceCommandOutput,
} from "./commands/TestWirelessDeviceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateDestinationCommand,
  UpdateDestinationCommandInput,
  UpdateDestinationCommandOutput,
} from "./commands/UpdateDestinationCommand";
import {
  UpdatePartnerAccountCommand,
  UpdatePartnerAccountCommandInput,
  UpdatePartnerAccountCommandOutput,
} from "./commands/UpdatePartnerAccountCommand";
import {
  UpdateWirelessDeviceCommand,
  UpdateWirelessDeviceCommandInput,
  UpdateWirelessDeviceCommandOutput,
} from "./commands/UpdateWirelessDeviceCommand";
import {
  UpdateWirelessGatewayCommand,
  UpdateWirelessGatewayCommandInput,
  UpdateWirelessGatewayCommandOutput,
} from "./commands/UpdateWirelessGatewayCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>AWS IoT Wireless API documentation</p>
 */
export class IoTWireless extends IoTWirelessClient {
  /**
   * <p>Associates a partner account with your AWS account.</p>
   */
  public associateAwsAccountWithPartnerAccount(
    args: AssociateAwsAccountWithPartnerAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateAwsAccountWithPartnerAccountCommandOutput>;
  public associateAwsAccountWithPartnerAccount(
    args: AssociateAwsAccountWithPartnerAccountCommandInput,
    cb: (err: any, data?: AssociateAwsAccountWithPartnerAccountCommandOutput) => void
  ): void;
  public associateAwsAccountWithPartnerAccount(
    args: AssociateAwsAccountWithPartnerAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateAwsAccountWithPartnerAccountCommandOutput) => void
  ): void;
  public associateAwsAccountWithPartnerAccount(
    args: AssociateAwsAccountWithPartnerAccountCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: AssociateAwsAccountWithPartnerAccountCommandOutput) => void),
    cb?: (err: any, data?: AssociateAwsAccountWithPartnerAccountCommandOutput) => void
  ): Promise<AssociateAwsAccountWithPartnerAccountCommandOutput> | void {
    const command = new AssociateAwsAccountWithPartnerAccountCommand(args);
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
   * <p>Associates a wireless device with a thing.</p>
   */
  public associateWirelessDeviceWithThing(
    args: AssociateWirelessDeviceWithThingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateWirelessDeviceWithThingCommandOutput>;
  public associateWirelessDeviceWithThing(
    args: AssociateWirelessDeviceWithThingCommandInput,
    cb: (err: any, data?: AssociateWirelessDeviceWithThingCommandOutput) => void
  ): void;
  public associateWirelessDeviceWithThing(
    args: AssociateWirelessDeviceWithThingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateWirelessDeviceWithThingCommandOutput) => void
  ): void;
  public associateWirelessDeviceWithThing(
    args: AssociateWirelessDeviceWithThingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateWirelessDeviceWithThingCommandOutput) => void),
    cb?: (err: any, data?: AssociateWirelessDeviceWithThingCommandOutput) => void
  ): Promise<AssociateWirelessDeviceWithThingCommandOutput> | void {
    const command = new AssociateWirelessDeviceWithThingCommand(args);
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
   * <p>Associates a wireless gateway with a certificate.</p>
   */
  public associateWirelessGatewayWithCertificate(
    args: AssociateWirelessGatewayWithCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateWirelessGatewayWithCertificateCommandOutput>;
  public associateWirelessGatewayWithCertificate(
    args: AssociateWirelessGatewayWithCertificateCommandInput,
    cb: (err: any, data?: AssociateWirelessGatewayWithCertificateCommandOutput) => void
  ): void;
  public associateWirelessGatewayWithCertificate(
    args: AssociateWirelessGatewayWithCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateWirelessGatewayWithCertificateCommandOutput) => void
  ): void;
  public associateWirelessGatewayWithCertificate(
    args: AssociateWirelessGatewayWithCertificateCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: AssociateWirelessGatewayWithCertificateCommandOutput) => void),
    cb?: (err: any, data?: AssociateWirelessGatewayWithCertificateCommandOutput) => void
  ): Promise<AssociateWirelessGatewayWithCertificateCommandOutput> | void {
    const command = new AssociateWirelessGatewayWithCertificateCommand(args);
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
   * <p>Associates a wireless gateway with a thing.</p>
   */
  public associateWirelessGatewayWithThing(
    args: AssociateWirelessGatewayWithThingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateWirelessGatewayWithThingCommandOutput>;
  public associateWirelessGatewayWithThing(
    args: AssociateWirelessGatewayWithThingCommandInput,
    cb: (err: any, data?: AssociateWirelessGatewayWithThingCommandOutput) => void
  ): void;
  public associateWirelessGatewayWithThing(
    args: AssociateWirelessGatewayWithThingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateWirelessGatewayWithThingCommandOutput) => void
  ): void;
  public associateWirelessGatewayWithThing(
    args: AssociateWirelessGatewayWithThingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateWirelessGatewayWithThingCommandOutput) => void),
    cb?: (err: any, data?: AssociateWirelessGatewayWithThingCommandOutput) => void
  ): Promise<AssociateWirelessGatewayWithThingCommandOutput> | void {
    const command = new AssociateWirelessGatewayWithThingCommand(args);
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
   * <p>Creates a new destination that maps a device message to an AWS IoT rule.</p>
   */
  public createDestination(
    args: CreateDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDestinationCommandOutput>;
  public createDestination(
    args: CreateDestinationCommandInput,
    cb: (err: any, data?: CreateDestinationCommandOutput) => void
  ): void;
  public createDestination(
    args: CreateDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDestinationCommandOutput) => void
  ): void;
  public createDestination(
    args: CreateDestinationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDestinationCommandOutput) => void),
    cb?: (err: any, data?: CreateDestinationCommandOutput) => void
  ): Promise<CreateDestinationCommandOutput> | void {
    const command = new CreateDestinationCommand(args);
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
   * <p>Creates a new device profile.</p>
   */
  public createDeviceProfile(
    args: CreateDeviceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDeviceProfileCommandOutput>;
  public createDeviceProfile(
    args: CreateDeviceProfileCommandInput,
    cb: (err: any, data?: CreateDeviceProfileCommandOutput) => void
  ): void;
  public createDeviceProfile(
    args: CreateDeviceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDeviceProfileCommandOutput) => void
  ): void;
  public createDeviceProfile(
    args: CreateDeviceProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDeviceProfileCommandOutput) => void),
    cb?: (err: any, data?: CreateDeviceProfileCommandOutput) => void
  ): Promise<CreateDeviceProfileCommandOutput> | void {
    const command = new CreateDeviceProfileCommand(args);
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
   * <p>Creates a new service profile.</p>
   */
  public createServiceProfile(
    args: CreateServiceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateServiceProfileCommandOutput>;
  public createServiceProfile(
    args: CreateServiceProfileCommandInput,
    cb: (err: any, data?: CreateServiceProfileCommandOutput) => void
  ): void;
  public createServiceProfile(
    args: CreateServiceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateServiceProfileCommandOutput) => void
  ): void;
  public createServiceProfile(
    args: CreateServiceProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateServiceProfileCommandOutput) => void),
    cb?: (err: any, data?: CreateServiceProfileCommandOutput) => void
  ): Promise<CreateServiceProfileCommandOutput> | void {
    const command = new CreateServiceProfileCommand(args);
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
   * <p>Provisions a wireless device.</p>
   */
  public createWirelessDevice(
    args: CreateWirelessDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWirelessDeviceCommandOutput>;
  public createWirelessDevice(
    args: CreateWirelessDeviceCommandInput,
    cb: (err: any, data?: CreateWirelessDeviceCommandOutput) => void
  ): void;
  public createWirelessDevice(
    args: CreateWirelessDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWirelessDeviceCommandOutput) => void
  ): void;
  public createWirelessDevice(
    args: CreateWirelessDeviceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateWirelessDeviceCommandOutput) => void),
    cb?: (err: any, data?: CreateWirelessDeviceCommandOutput) => void
  ): Promise<CreateWirelessDeviceCommandOutput> | void {
    const command = new CreateWirelessDeviceCommand(args);
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
   * <p>Provisions a wireless gateway.</p>
   */
  public createWirelessGateway(
    args: CreateWirelessGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWirelessGatewayCommandOutput>;
  public createWirelessGateway(
    args: CreateWirelessGatewayCommandInput,
    cb: (err: any, data?: CreateWirelessGatewayCommandOutput) => void
  ): void;
  public createWirelessGateway(
    args: CreateWirelessGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWirelessGatewayCommandOutput) => void
  ): void;
  public createWirelessGateway(
    args: CreateWirelessGatewayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateWirelessGatewayCommandOutput) => void),
    cb?: (err: any, data?: CreateWirelessGatewayCommandOutput) => void
  ): Promise<CreateWirelessGatewayCommandOutput> | void {
    const command = new CreateWirelessGatewayCommand(args);
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
   * <p>Creates a task for a wireless gateway.</p>
   */
  public createWirelessGatewayTask(
    args: CreateWirelessGatewayTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWirelessGatewayTaskCommandOutput>;
  public createWirelessGatewayTask(
    args: CreateWirelessGatewayTaskCommandInput,
    cb: (err: any, data?: CreateWirelessGatewayTaskCommandOutput) => void
  ): void;
  public createWirelessGatewayTask(
    args: CreateWirelessGatewayTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWirelessGatewayTaskCommandOutput) => void
  ): void;
  public createWirelessGatewayTask(
    args: CreateWirelessGatewayTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateWirelessGatewayTaskCommandOutput) => void),
    cb?: (err: any, data?: CreateWirelessGatewayTaskCommandOutput) => void
  ): Promise<CreateWirelessGatewayTaskCommandOutput> | void {
    const command = new CreateWirelessGatewayTaskCommand(args);
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
   * <p>Creates a gateway task definition.</p>
   */
  public createWirelessGatewayTaskDefinition(
    args: CreateWirelessGatewayTaskDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWirelessGatewayTaskDefinitionCommandOutput>;
  public createWirelessGatewayTaskDefinition(
    args: CreateWirelessGatewayTaskDefinitionCommandInput,
    cb: (err: any, data?: CreateWirelessGatewayTaskDefinitionCommandOutput) => void
  ): void;
  public createWirelessGatewayTaskDefinition(
    args: CreateWirelessGatewayTaskDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWirelessGatewayTaskDefinitionCommandOutput) => void
  ): void;
  public createWirelessGatewayTaskDefinition(
    args: CreateWirelessGatewayTaskDefinitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateWirelessGatewayTaskDefinitionCommandOutput) => void),
    cb?: (err: any, data?: CreateWirelessGatewayTaskDefinitionCommandOutput) => void
  ): Promise<CreateWirelessGatewayTaskDefinitionCommandOutput> | void {
    const command = new CreateWirelessGatewayTaskDefinitionCommand(args);
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
   * <p>Deletes a destination.</p>
   */
  public deleteDestination(
    args: DeleteDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDestinationCommandOutput>;
  public deleteDestination(
    args: DeleteDestinationCommandInput,
    cb: (err: any, data?: DeleteDestinationCommandOutput) => void
  ): void;
  public deleteDestination(
    args: DeleteDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDestinationCommandOutput) => void
  ): void;
  public deleteDestination(
    args: DeleteDestinationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDestinationCommandOutput) => void),
    cb?: (err: any, data?: DeleteDestinationCommandOutput) => void
  ): Promise<DeleteDestinationCommandOutput> | void {
    const command = new DeleteDestinationCommand(args);
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
   * <p>Deletes a device profile.</p>
   */
  public deleteDeviceProfile(
    args: DeleteDeviceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDeviceProfileCommandOutput>;
  public deleteDeviceProfile(
    args: DeleteDeviceProfileCommandInput,
    cb: (err: any, data?: DeleteDeviceProfileCommandOutput) => void
  ): void;
  public deleteDeviceProfile(
    args: DeleteDeviceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDeviceProfileCommandOutput) => void
  ): void;
  public deleteDeviceProfile(
    args: DeleteDeviceProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDeviceProfileCommandOutput) => void),
    cb?: (err: any, data?: DeleteDeviceProfileCommandOutput) => void
  ): Promise<DeleteDeviceProfileCommandOutput> | void {
    const command = new DeleteDeviceProfileCommand(args);
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
   * <p>Deletes a service profile.</p>
   */
  public deleteServiceProfile(
    args: DeleteServiceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteServiceProfileCommandOutput>;
  public deleteServiceProfile(
    args: DeleteServiceProfileCommandInput,
    cb: (err: any, data?: DeleteServiceProfileCommandOutput) => void
  ): void;
  public deleteServiceProfile(
    args: DeleteServiceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteServiceProfileCommandOutput) => void
  ): void;
  public deleteServiceProfile(
    args: DeleteServiceProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteServiceProfileCommandOutput) => void),
    cb?: (err: any, data?: DeleteServiceProfileCommandOutput) => void
  ): Promise<DeleteServiceProfileCommandOutput> | void {
    const command = new DeleteServiceProfileCommand(args);
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
   * <p>Deletes a wireless device.</p>
   */
  public deleteWirelessDevice(
    args: DeleteWirelessDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWirelessDeviceCommandOutput>;
  public deleteWirelessDevice(
    args: DeleteWirelessDeviceCommandInput,
    cb: (err: any, data?: DeleteWirelessDeviceCommandOutput) => void
  ): void;
  public deleteWirelessDevice(
    args: DeleteWirelessDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWirelessDeviceCommandOutput) => void
  ): void;
  public deleteWirelessDevice(
    args: DeleteWirelessDeviceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteWirelessDeviceCommandOutput) => void),
    cb?: (err: any, data?: DeleteWirelessDeviceCommandOutput) => void
  ): Promise<DeleteWirelessDeviceCommandOutput> | void {
    const command = new DeleteWirelessDeviceCommand(args);
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
   * <p>Deletes a wireless gateway.</p>
   */
  public deleteWirelessGateway(
    args: DeleteWirelessGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWirelessGatewayCommandOutput>;
  public deleteWirelessGateway(
    args: DeleteWirelessGatewayCommandInput,
    cb: (err: any, data?: DeleteWirelessGatewayCommandOutput) => void
  ): void;
  public deleteWirelessGateway(
    args: DeleteWirelessGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWirelessGatewayCommandOutput) => void
  ): void;
  public deleteWirelessGateway(
    args: DeleteWirelessGatewayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteWirelessGatewayCommandOutput) => void),
    cb?: (err: any, data?: DeleteWirelessGatewayCommandOutput) => void
  ): Promise<DeleteWirelessGatewayCommandOutput> | void {
    const command = new DeleteWirelessGatewayCommand(args);
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
   * <p>Deletes a wireless gateway task.</p>
   */
  public deleteWirelessGatewayTask(
    args: DeleteWirelessGatewayTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWirelessGatewayTaskCommandOutput>;
  public deleteWirelessGatewayTask(
    args: DeleteWirelessGatewayTaskCommandInput,
    cb: (err: any, data?: DeleteWirelessGatewayTaskCommandOutput) => void
  ): void;
  public deleteWirelessGatewayTask(
    args: DeleteWirelessGatewayTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWirelessGatewayTaskCommandOutput) => void
  ): void;
  public deleteWirelessGatewayTask(
    args: DeleteWirelessGatewayTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteWirelessGatewayTaskCommandOutput) => void),
    cb?: (err: any, data?: DeleteWirelessGatewayTaskCommandOutput) => void
  ): Promise<DeleteWirelessGatewayTaskCommandOutput> | void {
    const command = new DeleteWirelessGatewayTaskCommand(args);
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
   * <p>Deletes a wireless gateway task definition. Deleting this task definition does not affect tasks that are currently in progress.</p>
   */
  public deleteWirelessGatewayTaskDefinition(
    args: DeleteWirelessGatewayTaskDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWirelessGatewayTaskDefinitionCommandOutput>;
  public deleteWirelessGatewayTaskDefinition(
    args: DeleteWirelessGatewayTaskDefinitionCommandInput,
    cb: (err: any, data?: DeleteWirelessGatewayTaskDefinitionCommandOutput) => void
  ): void;
  public deleteWirelessGatewayTaskDefinition(
    args: DeleteWirelessGatewayTaskDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWirelessGatewayTaskDefinitionCommandOutput) => void
  ): void;
  public deleteWirelessGatewayTaskDefinition(
    args: DeleteWirelessGatewayTaskDefinitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteWirelessGatewayTaskDefinitionCommandOutput) => void),
    cb?: (err: any, data?: DeleteWirelessGatewayTaskDefinitionCommandOutput) => void
  ): Promise<DeleteWirelessGatewayTaskDefinitionCommandOutput> | void {
    const command = new DeleteWirelessGatewayTaskDefinitionCommand(args);
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
   * <p>Disassociates your AWS account from a partner account. If <code>PartnerAccountId</code> and <code>PartnerType</code> are <code>null</code>, disassociates your AWS account from all partner accounts.</p>
   */
  public disassociateAwsAccountFromPartnerAccount(
    args: DisassociateAwsAccountFromPartnerAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateAwsAccountFromPartnerAccountCommandOutput>;
  public disassociateAwsAccountFromPartnerAccount(
    args: DisassociateAwsAccountFromPartnerAccountCommandInput,
    cb: (err: any, data?: DisassociateAwsAccountFromPartnerAccountCommandOutput) => void
  ): void;
  public disassociateAwsAccountFromPartnerAccount(
    args: DisassociateAwsAccountFromPartnerAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateAwsAccountFromPartnerAccountCommandOutput) => void
  ): void;
  public disassociateAwsAccountFromPartnerAccount(
    args: DisassociateAwsAccountFromPartnerAccountCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DisassociateAwsAccountFromPartnerAccountCommandOutput) => void),
    cb?: (err: any, data?: DisassociateAwsAccountFromPartnerAccountCommandOutput) => void
  ): Promise<DisassociateAwsAccountFromPartnerAccountCommandOutput> | void {
    const command = new DisassociateAwsAccountFromPartnerAccountCommand(args);
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
   * <p>Disassociates a wireless device from its currently associated thing.</p>
   */
  public disassociateWirelessDeviceFromThing(
    args: DisassociateWirelessDeviceFromThingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateWirelessDeviceFromThingCommandOutput>;
  public disassociateWirelessDeviceFromThing(
    args: DisassociateWirelessDeviceFromThingCommandInput,
    cb: (err: any, data?: DisassociateWirelessDeviceFromThingCommandOutput) => void
  ): void;
  public disassociateWirelessDeviceFromThing(
    args: DisassociateWirelessDeviceFromThingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateWirelessDeviceFromThingCommandOutput) => void
  ): void;
  public disassociateWirelessDeviceFromThing(
    args: DisassociateWirelessDeviceFromThingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateWirelessDeviceFromThingCommandOutput) => void),
    cb?: (err: any, data?: DisassociateWirelessDeviceFromThingCommandOutput) => void
  ): Promise<DisassociateWirelessDeviceFromThingCommandOutput> | void {
    const command = new DisassociateWirelessDeviceFromThingCommand(args);
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
   * <p>Disassociates a wireless gateway from its currently associated certificate.</p>
   */
  public disassociateWirelessGatewayFromCertificate(
    args: DisassociateWirelessGatewayFromCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateWirelessGatewayFromCertificateCommandOutput>;
  public disassociateWirelessGatewayFromCertificate(
    args: DisassociateWirelessGatewayFromCertificateCommandInput,
    cb: (err: any, data?: DisassociateWirelessGatewayFromCertificateCommandOutput) => void
  ): void;
  public disassociateWirelessGatewayFromCertificate(
    args: DisassociateWirelessGatewayFromCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateWirelessGatewayFromCertificateCommandOutput) => void
  ): void;
  public disassociateWirelessGatewayFromCertificate(
    args: DisassociateWirelessGatewayFromCertificateCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DisassociateWirelessGatewayFromCertificateCommandOutput) => void),
    cb?: (err: any, data?: DisassociateWirelessGatewayFromCertificateCommandOutput) => void
  ): Promise<DisassociateWirelessGatewayFromCertificateCommandOutput> | void {
    const command = new DisassociateWirelessGatewayFromCertificateCommand(args);
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
   * <p>Disassociates a wireless gateway from its currently associated thing.</p>
   */
  public disassociateWirelessGatewayFromThing(
    args: DisassociateWirelessGatewayFromThingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateWirelessGatewayFromThingCommandOutput>;
  public disassociateWirelessGatewayFromThing(
    args: DisassociateWirelessGatewayFromThingCommandInput,
    cb: (err: any, data?: DisassociateWirelessGatewayFromThingCommandOutput) => void
  ): void;
  public disassociateWirelessGatewayFromThing(
    args: DisassociateWirelessGatewayFromThingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateWirelessGatewayFromThingCommandOutput) => void
  ): void;
  public disassociateWirelessGatewayFromThing(
    args: DisassociateWirelessGatewayFromThingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateWirelessGatewayFromThingCommandOutput) => void),
    cb?: (err: any, data?: DisassociateWirelessGatewayFromThingCommandOutput) => void
  ): Promise<DisassociateWirelessGatewayFromThingCommandOutput> | void {
    const command = new DisassociateWirelessGatewayFromThingCommand(args);
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
   * <p>Gets information about a destination.</p>
   */
  public getDestination(
    args: GetDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDestinationCommandOutput>;
  public getDestination(
    args: GetDestinationCommandInput,
    cb: (err: any, data?: GetDestinationCommandOutput) => void
  ): void;
  public getDestination(
    args: GetDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDestinationCommandOutput) => void
  ): void;
  public getDestination(
    args: GetDestinationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDestinationCommandOutput) => void),
    cb?: (err: any, data?: GetDestinationCommandOutput) => void
  ): Promise<GetDestinationCommandOutput> | void {
    const command = new GetDestinationCommand(args);
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
   * <p>Gets information about a device profile.</p>
   */
  public getDeviceProfile(
    args: GetDeviceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeviceProfileCommandOutput>;
  public getDeviceProfile(
    args: GetDeviceProfileCommandInput,
    cb: (err: any, data?: GetDeviceProfileCommandOutput) => void
  ): void;
  public getDeviceProfile(
    args: GetDeviceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeviceProfileCommandOutput) => void
  ): void;
  public getDeviceProfile(
    args: GetDeviceProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDeviceProfileCommandOutput) => void),
    cb?: (err: any, data?: GetDeviceProfileCommandOutput) => void
  ): Promise<GetDeviceProfileCommandOutput> | void {
    const command = new GetDeviceProfileCommand(args);
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
   * <p>Gets information about a partner account. If <code>PartnerAccountId</code> and <code>PartnerType</code> are <code>null</code>, returns all partner accounts.</p>
   */
  public getPartnerAccount(
    args: GetPartnerAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPartnerAccountCommandOutput>;
  public getPartnerAccount(
    args: GetPartnerAccountCommandInput,
    cb: (err: any, data?: GetPartnerAccountCommandOutput) => void
  ): void;
  public getPartnerAccount(
    args: GetPartnerAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPartnerAccountCommandOutput) => void
  ): void;
  public getPartnerAccount(
    args: GetPartnerAccountCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPartnerAccountCommandOutput) => void),
    cb?: (err: any, data?: GetPartnerAccountCommandOutput) => void
  ): Promise<GetPartnerAccountCommandOutput> | void {
    const command = new GetPartnerAccountCommand(args);
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
   * <p>Gets the account-specific endpoint for Configuration and Update Server (CUPS) protocol or LoRaWAN Network Server (LNS) connections.</p>
   */
  public getServiceEndpoint(
    args: GetServiceEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServiceEndpointCommandOutput>;
  public getServiceEndpoint(
    args: GetServiceEndpointCommandInput,
    cb: (err: any, data?: GetServiceEndpointCommandOutput) => void
  ): void;
  public getServiceEndpoint(
    args: GetServiceEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServiceEndpointCommandOutput) => void
  ): void;
  public getServiceEndpoint(
    args: GetServiceEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetServiceEndpointCommandOutput) => void),
    cb?: (err: any, data?: GetServiceEndpointCommandOutput) => void
  ): Promise<GetServiceEndpointCommandOutput> | void {
    const command = new GetServiceEndpointCommand(args);
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
   * <p>Gets information about a service profile.</p>
   */
  public getServiceProfile(
    args: GetServiceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServiceProfileCommandOutput>;
  public getServiceProfile(
    args: GetServiceProfileCommandInput,
    cb: (err: any, data?: GetServiceProfileCommandOutput) => void
  ): void;
  public getServiceProfile(
    args: GetServiceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServiceProfileCommandOutput) => void
  ): void;
  public getServiceProfile(
    args: GetServiceProfileCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetServiceProfileCommandOutput) => void),
    cb?: (err: any, data?: GetServiceProfileCommandOutput) => void
  ): Promise<GetServiceProfileCommandOutput> | void {
    const command = new GetServiceProfileCommand(args);
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
   * <p>Gets information about a wireless device.</p>
   */
  public getWirelessDevice(
    args: GetWirelessDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWirelessDeviceCommandOutput>;
  public getWirelessDevice(
    args: GetWirelessDeviceCommandInput,
    cb: (err: any, data?: GetWirelessDeviceCommandOutput) => void
  ): void;
  public getWirelessDevice(
    args: GetWirelessDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWirelessDeviceCommandOutput) => void
  ): void;
  public getWirelessDevice(
    args: GetWirelessDeviceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetWirelessDeviceCommandOutput) => void),
    cb?: (err: any, data?: GetWirelessDeviceCommandOutput) => void
  ): Promise<GetWirelessDeviceCommandOutput> | void {
    const command = new GetWirelessDeviceCommand(args);
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
   * <p>Gets operating information about a wireless device.</p>
   */
  public getWirelessDeviceStatistics(
    args: GetWirelessDeviceStatisticsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWirelessDeviceStatisticsCommandOutput>;
  public getWirelessDeviceStatistics(
    args: GetWirelessDeviceStatisticsCommandInput,
    cb: (err: any, data?: GetWirelessDeviceStatisticsCommandOutput) => void
  ): void;
  public getWirelessDeviceStatistics(
    args: GetWirelessDeviceStatisticsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWirelessDeviceStatisticsCommandOutput) => void
  ): void;
  public getWirelessDeviceStatistics(
    args: GetWirelessDeviceStatisticsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetWirelessDeviceStatisticsCommandOutput) => void),
    cb?: (err: any, data?: GetWirelessDeviceStatisticsCommandOutput) => void
  ): Promise<GetWirelessDeviceStatisticsCommandOutput> | void {
    const command = new GetWirelessDeviceStatisticsCommand(args);
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
   * <p>Gets information about a wireless gateway.</p>
   */
  public getWirelessGateway(
    args: GetWirelessGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWirelessGatewayCommandOutput>;
  public getWirelessGateway(
    args: GetWirelessGatewayCommandInput,
    cb: (err: any, data?: GetWirelessGatewayCommandOutput) => void
  ): void;
  public getWirelessGateway(
    args: GetWirelessGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWirelessGatewayCommandOutput) => void
  ): void;
  public getWirelessGateway(
    args: GetWirelessGatewayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetWirelessGatewayCommandOutput) => void),
    cb?: (err: any, data?: GetWirelessGatewayCommandOutput) => void
  ): Promise<GetWirelessGatewayCommandOutput> | void {
    const command = new GetWirelessGatewayCommand(args);
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
   * <p>Gets the ID of the certificate that is currently associated with a wireless gateway.</p>
   */
  public getWirelessGatewayCertificate(
    args: GetWirelessGatewayCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWirelessGatewayCertificateCommandOutput>;
  public getWirelessGatewayCertificate(
    args: GetWirelessGatewayCertificateCommandInput,
    cb: (err: any, data?: GetWirelessGatewayCertificateCommandOutput) => void
  ): void;
  public getWirelessGatewayCertificate(
    args: GetWirelessGatewayCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWirelessGatewayCertificateCommandOutput) => void
  ): void;
  public getWirelessGatewayCertificate(
    args: GetWirelessGatewayCertificateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetWirelessGatewayCertificateCommandOutput) => void),
    cb?: (err: any, data?: GetWirelessGatewayCertificateCommandOutput) => void
  ): Promise<GetWirelessGatewayCertificateCommandOutput> | void {
    const command = new GetWirelessGatewayCertificateCommand(args);
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
   * <p>Gets the firmware version and other information about a wireless gateway.</p>
   */
  public getWirelessGatewayFirmwareInformation(
    args: GetWirelessGatewayFirmwareInformationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWirelessGatewayFirmwareInformationCommandOutput>;
  public getWirelessGatewayFirmwareInformation(
    args: GetWirelessGatewayFirmwareInformationCommandInput,
    cb: (err: any, data?: GetWirelessGatewayFirmwareInformationCommandOutput) => void
  ): void;
  public getWirelessGatewayFirmwareInformation(
    args: GetWirelessGatewayFirmwareInformationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWirelessGatewayFirmwareInformationCommandOutput) => void
  ): void;
  public getWirelessGatewayFirmwareInformation(
    args: GetWirelessGatewayFirmwareInformationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetWirelessGatewayFirmwareInformationCommandOutput) => void),
    cb?: (err: any, data?: GetWirelessGatewayFirmwareInformationCommandOutput) => void
  ): Promise<GetWirelessGatewayFirmwareInformationCommandOutput> | void {
    const command = new GetWirelessGatewayFirmwareInformationCommand(args);
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
   * <p>Gets operating information about a wireless gateway.</p>
   */
  public getWirelessGatewayStatistics(
    args: GetWirelessGatewayStatisticsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWirelessGatewayStatisticsCommandOutput>;
  public getWirelessGatewayStatistics(
    args: GetWirelessGatewayStatisticsCommandInput,
    cb: (err: any, data?: GetWirelessGatewayStatisticsCommandOutput) => void
  ): void;
  public getWirelessGatewayStatistics(
    args: GetWirelessGatewayStatisticsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWirelessGatewayStatisticsCommandOutput) => void
  ): void;
  public getWirelessGatewayStatistics(
    args: GetWirelessGatewayStatisticsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetWirelessGatewayStatisticsCommandOutput) => void),
    cb?: (err: any, data?: GetWirelessGatewayStatisticsCommandOutput) => void
  ): Promise<GetWirelessGatewayStatisticsCommandOutput> | void {
    const command = new GetWirelessGatewayStatisticsCommand(args);
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
   * <p>Gets information about a wireless gateway task.</p>
   */
  public getWirelessGatewayTask(
    args: GetWirelessGatewayTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWirelessGatewayTaskCommandOutput>;
  public getWirelessGatewayTask(
    args: GetWirelessGatewayTaskCommandInput,
    cb: (err: any, data?: GetWirelessGatewayTaskCommandOutput) => void
  ): void;
  public getWirelessGatewayTask(
    args: GetWirelessGatewayTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWirelessGatewayTaskCommandOutput) => void
  ): void;
  public getWirelessGatewayTask(
    args: GetWirelessGatewayTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetWirelessGatewayTaskCommandOutput) => void),
    cb?: (err: any, data?: GetWirelessGatewayTaskCommandOutput) => void
  ): Promise<GetWirelessGatewayTaskCommandOutput> | void {
    const command = new GetWirelessGatewayTaskCommand(args);
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
   * <p>Gets information about a wireless gateway task definition.</p>
   */
  public getWirelessGatewayTaskDefinition(
    args: GetWirelessGatewayTaskDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWirelessGatewayTaskDefinitionCommandOutput>;
  public getWirelessGatewayTaskDefinition(
    args: GetWirelessGatewayTaskDefinitionCommandInput,
    cb: (err: any, data?: GetWirelessGatewayTaskDefinitionCommandOutput) => void
  ): void;
  public getWirelessGatewayTaskDefinition(
    args: GetWirelessGatewayTaskDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWirelessGatewayTaskDefinitionCommandOutput) => void
  ): void;
  public getWirelessGatewayTaskDefinition(
    args: GetWirelessGatewayTaskDefinitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetWirelessGatewayTaskDefinitionCommandOutput) => void),
    cb?: (err: any, data?: GetWirelessGatewayTaskDefinitionCommandOutput) => void
  ): Promise<GetWirelessGatewayTaskDefinitionCommandOutput> | void {
    const command = new GetWirelessGatewayTaskDefinitionCommand(args);
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
   * <p>Lists the destinations registered to your AWS account.</p>
   */
  public listDestinations(
    args: ListDestinationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDestinationsCommandOutput>;
  public listDestinations(
    args: ListDestinationsCommandInput,
    cb: (err: any, data?: ListDestinationsCommandOutput) => void
  ): void;
  public listDestinations(
    args: ListDestinationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDestinationsCommandOutput) => void
  ): void;
  public listDestinations(
    args: ListDestinationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDestinationsCommandOutput) => void),
    cb?: (err: any, data?: ListDestinationsCommandOutput) => void
  ): Promise<ListDestinationsCommandOutput> | void {
    const command = new ListDestinationsCommand(args);
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
   * <p>Lists the device profiles registered to your AWS account.</p>
   */
  public listDeviceProfiles(
    args: ListDeviceProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDeviceProfilesCommandOutput>;
  public listDeviceProfiles(
    args: ListDeviceProfilesCommandInput,
    cb: (err: any, data?: ListDeviceProfilesCommandOutput) => void
  ): void;
  public listDeviceProfiles(
    args: ListDeviceProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDeviceProfilesCommandOutput) => void
  ): void;
  public listDeviceProfiles(
    args: ListDeviceProfilesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDeviceProfilesCommandOutput) => void),
    cb?: (err: any, data?: ListDeviceProfilesCommandOutput) => void
  ): Promise<ListDeviceProfilesCommandOutput> | void {
    const command = new ListDeviceProfilesCommand(args);
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
   * <p>Lists the partner accounts associated with your AWS account.</p>
   */
  public listPartnerAccounts(
    args: ListPartnerAccountsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPartnerAccountsCommandOutput>;
  public listPartnerAccounts(
    args: ListPartnerAccountsCommandInput,
    cb: (err: any, data?: ListPartnerAccountsCommandOutput) => void
  ): void;
  public listPartnerAccounts(
    args: ListPartnerAccountsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPartnerAccountsCommandOutput) => void
  ): void;
  public listPartnerAccounts(
    args: ListPartnerAccountsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPartnerAccountsCommandOutput) => void),
    cb?: (err: any, data?: ListPartnerAccountsCommandOutput) => void
  ): Promise<ListPartnerAccountsCommandOutput> | void {
    const command = new ListPartnerAccountsCommand(args);
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
   * <p>Lists the service profiles registered to your AWS account.</p>
   */
  public listServiceProfiles(
    args: ListServiceProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServiceProfilesCommandOutput>;
  public listServiceProfiles(
    args: ListServiceProfilesCommandInput,
    cb: (err: any, data?: ListServiceProfilesCommandOutput) => void
  ): void;
  public listServiceProfiles(
    args: ListServiceProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServiceProfilesCommandOutput) => void
  ): void;
  public listServiceProfiles(
    args: ListServiceProfilesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListServiceProfilesCommandOutput) => void),
    cb?: (err: any, data?: ListServiceProfilesCommandOutput) => void
  ): Promise<ListServiceProfilesCommandOutput> | void {
    const command = new ListServiceProfilesCommand(args);
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
   * <p>Lists the tags (metadata) you have assigned to the resource.</p>
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
   * <p>Lists the wireless devices registered to your AWS account.</p>
   */
  public listWirelessDevices(
    args: ListWirelessDevicesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWirelessDevicesCommandOutput>;
  public listWirelessDevices(
    args: ListWirelessDevicesCommandInput,
    cb: (err: any, data?: ListWirelessDevicesCommandOutput) => void
  ): void;
  public listWirelessDevices(
    args: ListWirelessDevicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWirelessDevicesCommandOutput) => void
  ): void;
  public listWirelessDevices(
    args: ListWirelessDevicesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListWirelessDevicesCommandOutput) => void),
    cb?: (err: any, data?: ListWirelessDevicesCommandOutput) => void
  ): Promise<ListWirelessDevicesCommandOutput> | void {
    const command = new ListWirelessDevicesCommand(args);
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
   * <p>Lists the wireless gateways registered to your AWS account.</p>
   */
  public listWirelessGateways(
    args: ListWirelessGatewaysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWirelessGatewaysCommandOutput>;
  public listWirelessGateways(
    args: ListWirelessGatewaysCommandInput,
    cb: (err: any, data?: ListWirelessGatewaysCommandOutput) => void
  ): void;
  public listWirelessGateways(
    args: ListWirelessGatewaysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWirelessGatewaysCommandOutput) => void
  ): void;
  public listWirelessGateways(
    args: ListWirelessGatewaysCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListWirelessGatewaysCommandOutput) => void),
    cb?: (err: any, data?: ListWirelessGatewaysCommandOutput) => void
  ): Promise<ListWirelessGatewaysCommandOutput> | void {
    const command = new ListWirelessGatewaysCommand(args);
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
   * <p>List the wireless gateway tasks definitions registered to your AWS account.</p>
   */
  public listWirelessGatewayTaskDefinitions(
    args: ListWirelessGatewayTaskDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWirelessGatewayTaskDefinitionsCommandOutput>;
  public listWirelessGatewayTaskDefinitions(
    args: ListWirelessGatewayTaskDefinitionsCommandInput,
    cb: (err: any, data?: ListWirelessGatewayTaskDefinitionsCommandOutput) => void
  ): void;
  public listWirelessGatewayTaskDefinitions(
    args: ListWirelessGatewayTaskDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWirelessGatewayTaskDefinitionsCommandOutput) => void
  ): void;
  public listWirelessGatewayTaskDefinitions(
    args: ListWirelessGatewayTaskDefinitionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListWirelessGatewayTaskDefinitionsCommandOutput) => void),
    cb?: (err: any, data?: ListWirelessGatewayTaskDefinitionsCommandOutput) => void
  ): Promise<ListWirelessGatewayTaskDefinitionsCommandOutput> | void {
    const command = new ListWirelessGatewayTaskDefinitionsCommand(args);
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
   * <p>Sends a decrypted application data frame to a device.</p>
   */
  public sendDataToWirelessDevice(
    args: SendDataToWirelessDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendDataToWirelessDeviceCommandOutput>;
  public sendDataToWirelessDevice(
    args: SendDataToWirelessDeviceCommandInput,
    cb: (err: any, data?: SendDataToWirelessDeviceCommandOutput) => void
  ): void;
  public sendDataToWirelessDevice(
    args: SendDataToWirelessDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendDataToWirelessDeviceCommandOutput) => void
  ): void;
  public sendDataToWirelessDevice(
    args: SendDataToWirelessDeviceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SendDataToWirelessDeviceCommandOutput) => void),
    cb?: (err: any, data?: SendDataToWirelessDeviceCommandOutput) => void
  ): Promise<SendDataToWirelessDeviceCommandOutput> | void {
    const command = new SendDataToWirelessDeviceCommand(args);
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
   * <p>Adds a tag to a resource.</p>
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
   * <p>Simulates a provisioned device by sending an uplink data payload of <code>Hello</code>.</p>
   */
  public testWirelessDevice(
    args: TestWirelessDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TestWirelessDeviceCommandOutput>;
  public testWirelessDevice(
    args: TestWirelessDeviceCommandInput,
    cb: (err: any, data?: TestWirelessDeviceCommandOutput) => void
  ): void;
  public testWirelessDevice(
    args: TestWirelessDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestWirelessDeviceCommandOutput) => void
  ): void;
  public testWirelessDevice(
    args: TestWirelessDeviceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TestWirelessDeviceCommandOutput) => void),
    cb?: (err: any, data?: TestWirelessDeviceCommandOutput) => void
  ): Promise<TestWirelessDeviceCommandOutput> | void {
    const command = new TestWirelessDeviceCommand(args);
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
   * <p>Removes one or more tags from a resource.</p>
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
   * <p>Updates properties of a destination.</p>
   */
  public updateDestination(
    args: UpdateDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDestinationCommandOutput>;
  public updateDestination(
    args: UpdateDestinationCommandInput,
    cb: (err: any, data?: UpdateDestinationCommandOutput) => void
  ): void;
  public updateDestination(
    args: UpdateDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDestinationCommandOutput) => void
  ): void;
  public updateDestination(
    args: UpdateDestinationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDestinationCommandOutput) => void),
    cb?: (err: any, data?: UpdateDestinationCommandOutput) => void
  ): Promise<UpdateDestinationCommandOutput> | void {
    const command = new UpdateDestinationCommand(args);
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
   * <p>Updates properties of a partner account.</p>
   */
  public updatePartnerAccount(
    args: UpdatePartnerAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePartnerAccountCommandOutput>;
  public updatePartnerAccount(
    args: UpdatePartnerAccountCommandInput,
    cb: (err: any, data?: UpdatePartnerAccountCommandOutput) => void
  ): void;
  public updatePartnerAccount(
    args: UpdatePartnerAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePartnerAccountCommandOutput) => void
  ): void;
  public updatePartnerAccount(
    args: UpdatePartnerAccountCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdatePartnerAccountCommandOutput) => void),
    cb?: (err: any, data?: UpdatePartnerAccountCommandOutput) => void
  ): Promise<UpdatePartnerAccountCommandOutput> | void {
    const command = new UpdatePartnerAccountCommand(args);
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
   * <p>Updates properties of a wireless device.</p>
   */
  public updateWirelessDevice(
    args: UpdateWirelessDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWirelessDeviceCommandOutput>;
  public updateWirelessDevice(
    args: UpdateWirelessDeviceCommandInput,
    cb: (err: any, data?: UpdateWirelessDeviceCommandOutput) => void
  ): void;
  public updateWirelessDevice(
    args: UpdateWirelessDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWirelessDeviceCommandOutput) => void
  ): void;
  public updateWirelessDevice(
    args: UpdateWirelessDeviceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateWirelessDeviceCommandOutput) => void),
    cb?: (err: any, data?: UpdateWirelessDeviceCommandOutput) => void
  ): Promise<UpdateWirelessDeviceCommandOutput> | void {
    const command = new UpdateWirelessDeviceCommand(args);
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
   * <p>Updates properties of a wireless gateway.</p>
   */
  public updateWirelessGateway(
    args: UpdateWirelessGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWirelessGatewayCommandOutput>;
  public updateWirelessGateway(
    args: UpdateWirelessGatewayCommandInput,
    cb: (err: any, data?: UpdateWirelessGatewayCommandOutput) => void
  ): void;
  public updateWirelessGateway(
    args: UpdateWirelessGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWirelessGatewayCommandOutput) => void
  ): void;
  public updateWirelessGateway(
    args: UpdateWirelessGatewayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateWirelessGatewayCommandOutput) => void),
    cb?: (err: any, data?: UpdateWirelessGatewayCommandOutput) => void
  ): Promise<UpdateWirelessGatewayCommandOutput> | void {
    const command = new UpdateWirelessGatewayCommand(args);
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
