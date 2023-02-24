// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { AcceptGrantCommand, AcceptGrantCommandInput, AcceptGrantCommandOutput } from "./commands/AcceptGrantCommand";
import {
  CheckInLicenseCommand,
  CheckInLicenseCommandInput,
  CheckInLicenseCommandOutput,
} from "./commands/CheckInLicenseCommand";
import {
  CheckoutBorrowLicenseCommand,
  CheckoutBorrowLicenseCommandInput,
  CheckoutBorrowLicenseCommandOutput,
} from "./commands/CheckoutBorrowLicenseCommand";
import {
  CheckoutLicenseCommand,
  CheckoutLicenseCommandInput,
  CheckoutLicenseCommandOutput,
} from "./commands/CheckoutLicenseCommand";
import { CreateGrantCommand, CreateGrantCommandInput, CreateGrantCommandOutput } from "./commands/CreateGrantCommand";
import {
  CreateGrantVersionCommand,
  CreateGrantVersionCommandInput,
  CreateGrantVersionCommandOutput,
} from "./commands/CreateGrantVersionCommand";
import {
  CreateLicenseCommand,
  CreateLicenseCommandInput,
  CreateLicenseCommandOutput,
} from "./commands/CreateLicenseCommand";
import {
  CreateLicenseConfigurationCommand,
  CreateLicenseConfigurationCommandInput,
  CreateLicenseConfigurationCommandOutput,
} from "./commands/CreateLicenseConfigurationCommand";
import {
  CreateLicenseConversionTaskForResourceCommand,
  CreateLicenseConversionTaskForResourceCommandInput,
  CreateLicenseConversionTaskForResourceCommandOutput,
} from "./commands/CreateLicenseConversionTaskForResourceCommand";
import {
  CreateLicenseManagerReportGeneratorCommand,
  CreateLicenseManagerReportGeneratorCommandInput,
  CreateLicenseManagerReportGeneratorCommandOutput,
} from "./commands/CreateLicenseManagerReportGeneratorCommand";
import {
  CreateLicenseVersionCommand,
  CreateLicenseVersionCommandInput,
  CreateLicenseVersionCommandOutput,
} from "./commands/CreateLicenseVersionCommand";
import { CreateTokenCommand, CreateTokenCommandInput, CreateTokenCommandOutput } from "./commands/CreateTokenCommand";
import { DeleteGrantCommand, DeleteGrantCommandInput, DeleteGrantCommandOutput } from "./commands/DeleteGrantCommand";
import {
  DeleteLicenseCommand,
  DeleteLicenseCommandInput,
  DeleteLicenseCommandOutput,
} from "./commands/DeleteLicenseCommand";
import {
  DeleteLicenseConfigurationCommand,
  DeleteLicenseConfigurationCommandInput,
  DeleteLicenseConfigurationCommandOutput,
} from "./commands/DeleteLicenseConfigurationCommand";
import {
  DeleteLicenseManagerReportGeneratorCommand,
  DeleteLicenseManagerReportGeneratorCommandInput,
  DeleteLicenseManagerReportGeneratorCommandOutput,
} from "./commands/DeleteLicenseManagerReportGeneratorCommand";
import { DeleteTokenCommand, DeleteTokenCommandInput, DeleteTokenCommandOutput } from "./commands/DeleteTokenCommand";
import {
  ExtendLicenseConsumptionCommand,
  ExtendLicenseConsumptionCommandInput,
  ExtendLicenseConsumptionCommandOutput,
} from "./commands/ExtendLicenseConsumptionCommand";
import {
  GetAccessTokenCommand,
  GetAccessTokenCommandInput,
  GetAccessTokenCommandOutput,
} from "./commands/GetAccessTokenCommand";
import { GetGrantCommand, GetGrantCommandInput, GetGrantCommandOutput } from "./commands/GetGrantCommand";
import { GetLicenseCommand, GetLicenseCommandInput, GetLicenseCommandOutput } from "./commands/GetLicenseCommand";
import {
  GetLicenseConfigurationCommand,
  GetLicenseConfigurationCommandInput,
  GetLicenseConfigurationCommandOutput,
} from "./commands/GetLicenseConfigurationCommand";
import {
  GetLicenseConversionTaskCommand,
  GetLicenseConversionTaskCommandInput,
  GetLicenseConversionTaskCommandOutput,
} from "./commands/GetLicenseConversionTaskCommand";
import {
  GetLicenseManagerReportGeneratorCommand,
  GetLicenseManagerReportGeneratorCommandInput,
  GetLicenseManagerReportGeneratorCommandOutput,
} from "./commands/GetLicenseManagerReportGeneratorCommand";
import {
  GetLicenseUsageCommand,
  GetLicenseUsageCommandInput,
  GetLicenseUsageCommandOutput,
} from "./commands/GetLicenseUsageCommand";
import {
  GetServiceSettingsCommand,
  GetServiceSettingsCommandInput,
  GetServiceSettingsCommandOutput,
} from "./commands/GetServiceSettingsCommand";
import {
  ListAssociationsForLicenseConfigurationCommand,
  ListAssociationsForLicenseConfigurationCommandInput,
  ListAssociationsForLicenseConfigurationCommandOutput,
} from "./commands/ListAssociationsForLicenseConfigurationCommand";
import {
  ListDistributedGrantsCommand,
  ListDistributedGrantsCommandInput,
  ListDistributedGrantsCommandOutput,
} from "./commands/ListDistributedGrantsCommand";
import {
  ListFailuresForLicenseConfigurationOperationsCommand,
  ListFailuresForLicenseConfigurationOperationsCommandInput,
  ListFailuresForLicenseConfigurationOperationsCommandOutput,
} from "./commands/ListFailuresForLicenseConfigurationOperationsCommand";
import {
  ListLicenseConfigurationsCommand,
  ListLicenseConfigurationsCommandInput,
  ListLicenseConfigurationsCommandOutput,
} from "./commands/ListLicenseConfigurationsCommand";
import {
  ListLicenseConversionTasksCommand,
  ListLicenseConversionTasksCommandInput,
  ListLicenseConversionTasksCommandOutput,
} from "./commands/ListLicenseConversionTasksCommand";
import {
  ListLicenseManagerReportGeneratorsCommand,
  ListLicenseManagerReportGeneratorsCommandInput,
  ListLicenseManagerReportGeneratorsCommandOutput,
} from "./commands/ListLicenseManagerReportGeneratorsCommand";
import {
  ListLicensesCommand,
  ListLicensesCommandInput,
  ListLicensesCommandOutput,
} from "./commands/ListLicensesCommand";
import {
  ListLicenseSpecificationsForResourceCommand,
  ListLicenseSpecificationsForResourceCommandInput,
  ListLicenseSpecificationsForResourceCommandOutput,
} from "./commands/ListLicenseSpecificationsForResourceCommand";
import {
  ListLicenseVersionsCommand,
  ListLicenseVersionsCommandInput,
  ListLicenseVersionsCommandOutput,
} from "./commands/ListLicenseVersionsCommand";
import {
  ListReceivedGrantsCommand,
  ListReceivedGrantsCommandInput,
  ListReceivedGrantsCommandOutput,
} from "./commands/ListReceivedGrantsCommand";
import {
  ListReceivedGrantsForOrganizationCommand,
  ListReceivedGrantsForOrganizationCommandInput,
  ListReceivedGrantsForOrganizationCommandOutput,
} from "./commands/ListReceivedGrantsForOrganizationCommand";
import {
  ListReceivedLicensesCommand,
  ListReceivedLicensesCommandInput,
  ListReceivedLicensesCommandOutput,
} from "./commands/ListReceivedLicensesCommand";
import {
  ListReceivedLicensesForOrganizationCommand,
  ListReceivedLicensesForOrganizationCommandInput,
  ListReceivedLicensesForOrganizationCommandOutput,
} from "./commands/ListReceivedLicensesForOrganizationCommand";
import {
  ListResourceInventoryCommand,
  ListResourceInventoryCommandInput,
  ListResourceInventoryCommandOutput,
} from "./commands/ListResourceInventoryCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListTokensCommand, ListTokensCommandInput, ListTokensCommandOutput } from "./commands/ListTokensCommand";
import {
  ListUsageForLicenseConfigurationCommand,
  ListUsageForLicenseConfigurationCommandInput,
  ListUsageForLicenseConfigurationCommandOutput,
} from "./commands/ListUsageForLicenseConfigurationCommand";
import { RejectGrantCommand, RejectGrantCommandInput, RejectGrantCommandOutput } from "./commands/RejectGrantCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateLicenseConfigurationCommand,
  UpdateLicenseConfigurationCommandInput,
  UpdateLicenseConfigurationCommandOutput,
} from "./commands/UpdateLicenseConfigurationCommand";
import {
  UpdateLicenseManagerReportGeneratorCommand,
  UpdateLicenseManagerReportGeneratorCommandInput,
  UpdateLicenseManagerReportGeneratorCommandOutput,
} from "./commands/UpdateLicenseManagerReportGeneratorCommand";
import {
  UpdateLicenseSpecificationsForResourceCommand,
  UpdateLicenseSpecificationsForResourceCommandInput,
  UpdateLicenseSpecificationsForResourceCommandOutput,
} from "./commands/UpdateLicenseSpecificationsForResourceCommand";
import {
  UpdateServiceSettingsCommand,
  UpdateServiceSettingsCommandInput,
  UpdateServiceSettingsCommandOutput,
} from "./commands/UpdateServiceSettingsCommand";
import { LicenseManagerClient } from "./LicenseManagerClient";

/**
 * <p>License Manager makes it easier to manage licenses from software vendors across multiple
 *          Amazon Web Services accounts and on-premises servers.</p>
 */
export class LicenseManager extends LicenseManagerClient {
  /**
   * <p>Accepts the specified grant.</p>
   */
  public acceptGrant(args: AcceptGrantCommandInput, options?: __HttpHandlerOptions): Promise<AcceptGrantCommandOutput>;
  public acceptGrant(args: AcceptGrantCommandInput, cb: (err: any, data?: AcceptGrantCommandOutput) => void): void;
  public acceptGrant(
    args: AcceptGrantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptGrantCommandOutput) => void
  ): void;
  public acceptGrant(
    args: AcceptGrantCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AcceptGrantCommandOutput) => void),
    cb?: (err: any, data?: AcceptGrantCommandOutput) => void
  ): Promise<AcceptGrantCommandOutput> | void {
    const command = new AcceptGrantCommand(args);
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
   * <p>Checks in the specified license. Check in a license when it is no longer in use.</p>
   */
  public checkInLicense(
    args: CheckInLicenseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CheckInLicenseCommandOutput>;
  public checkInLicense(
    args: CheckInLicenseCommandInput,
    cb: (err: any, data?: CheckInLicenseCommandOutput) => void
  ): void;
  public checkInLicense(
    args: CheckInLicenseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CheckInLicenseCommandOutput) => void
  ): void;
  public checkInLicense(
    args: CheckInLicenseCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CheckInLicenseCommandOutput) => void),
    cb?: (err: any, data?: CheckInLicenseCommandOutput) => void
  ): Promise<CheckInLicenseCommandOutput> | void {
    const command = new CheckInLicenseCommand(args);
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
   * <p>Checks out the specified license for offline use.</p>
   */
  public checkoutBorrowLicense(
    args: CheckoutBorrowLicenseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CheckoutBorrowLicenseCommandOutput>;
  public checkoutBorrowLicense(
    args: CheckoutBorrowLicenseCommandInput,
    cb: (err: any, data?: CheckoutBorrowLicenseCommandOutput) => void
  ): void;
  public checkoutBorrowLicense(
    args: CheckoutBorrowLicenseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CheckoutBorrowLicenseCommandOutput) => void
  ): void;
  public checkoutBorrowLicense(
    args: CheckoutBorrowLicenseCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CheckoutBorrowLicenseCommandOutput) => void),
    cb?: (err: any, data?: CheckoutBorrowLicenseCommandOutput) => void
  ): Promise<CheckoutBorrowLicenseCommandOutput> | void {
    const command = new CheckoutBorrowLicenseCommand(args);
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
   * <p>Checks out the specified license.</p>
   *          <note>
   *             <p>If the account that created the license is the same that is performing the check out, you must
   *             specify the account as the beneficiary.</p>
   *          </note>
   */
  public checkoutLicense(
    args: CheckoutLicenseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CheckoutLicenseCommandOutput>;
  public checkoutLicense(
    args: CheckoutLicenseCommandInput,
    cb: (err: any, data?: CheckoutLicenseCommandOutput) => void
  ): void;
  public checkoutLicense(
    args: CheckoutLicenseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CheckoutLicenseCommandOutput) => void
  ): void;
  public checkoutLicense(
    args: CheckoutLicenseCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CheckoutLicenseCommandOutput) => void),
    cb?: (err: any, data?: CheckoutLicenseCommandOutput) => void
  ): Promise<CheckoutLicenseCommandOutput> | void {
    const command = new CheckoutLicenseCommand(args);
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
   * <p>Creates a grant for the specified license. A grant shares the use of license entitlements with specific Amazon Web Services accounts.</p>
   */
  public createGrant(args: CreateGrantCommandInput, options?: __HttpHandlerOptions): Promise<CreateGrantCommandOutput>;
  public createGrant(args: CreateGrantCommandInput, cb: (err: any, data?: CreateGrantCommandOutput) => void): void;
  public createGrant(
    args: CreateGrantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGrantCommandOutput) => void
  ): void;
  public createGrant(
    args: CreateGrantCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateGrantCommandOutput) => void),
    cb?: (err: any, data?: CreateGrantCommandOutput) => void
  ): Promise<CreateGrantCommandOutput> | void {
    const command = new CreateGrantCommand(args);
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
   * <p>Creates a new version of the specified grant.</p>
   */
  public createGrantVersion(
    args: CreateGrantVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateGrantVersionCommandOutput>;
  public createGrantVersion(
    args: CreateGrantVersionCommandInput,
    cb: (err: any, data?: CreateGrantVersionCommandOutput) => void
  ): void;
  public createGrantVersion(
    args: CreateGrantVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGrantVersionCommandOutput) => void
  ): void;
  public createGrantVersion(
    args: CreateGrantVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateGrantVersionCommandOutput) => void),
    cb?: (err: any, data?: CreateGrantVersionCommandOutput) => void
  ): Promise<CreateGrantVersionCommandOutput> | void {
    const command = new CreateGrantVersionCommand(args);
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
   * <p>Creates a license.</p>
   */
  public createLicense(
    args: CreateLicenseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLicenseCommandOutput>;
  public createLicense(
    args: CreateLicenseCommandInput,
    cb: (err: any, data?: CreateLicenseCommandOutput) => void
  ): void;
  public createLicense(
    args: CreateLicenseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLicenseCommandOutput) => void
  ): void;
  public createLicense(
    args: CreateLicenseCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateLicenseCommandOutput) => void),
    cb?: (err: any, data?: CreateLicenseCommandOutput) => void
  ): Promise<CreateLicenseCommandOutput> | void {
    const command = new CreateLicenseCommand(args);
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
   * <p>Creates a license configuration.</p>
   *          <p>A license configuration is an abstraction of a customer license agreement that can be
   *          consumed and enforced by License Manager. Components include specifications for the license
   *          type (licensing by instance, socket, CPU, or vCPU), allowed tenancy (shared tenancy,
   *          Dedicated Instance, Dedicated Host, or all of these), license affinity  to host (how long a
   *          license must be associated with a host), and the number of licenses purchased and used.</p>
   */
  public createLicenseConfiguration(
    args: CreateLicenseConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLicenseConfigurationCommandOutput>;
  public createLicenseConfiguration(
    args: CreateLicenseConfigurationCommandInput,
    cb: (err: any, data?: CreateLicenseConfigurationCommandOutput) => void
  ): void;
  public createLicenseConfiguration(
    args: CreateLicenseConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLicenseConfigurationCommandOutput) => void
  ): void;
  public createLicenseConfiguration(
    args: CreateLicenseConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateLicenseConfigurationCommandOutput) => void),
    cb?: (err: any, data?: CreateLicenseConfigurationCommandOutput) => void
  ): Promise<CreateLicenseConfigurationCommandOutput> | void {
    const command = new CreateLicenseConfigurationCommand(args);
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
   * <p>Creates a new license conversion task.</p>
   */
  public createLicenseConversionTaskForResource(
    args: CreateLicenseConversionTaskForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLicenseConversionTaskForResourceCommandOutput>;
  public createLicenseConversionTaskForResource(
    args: CreateLicenseConversionTaskForResourceCommandInput,
    cb: (err: any, data?: CreateLicenseConversionTaskForResourceCommandOutput) => void
  ): void;
  public createLicenseConversionTaskForResource(
    args: CreateLicenseConversionTaskForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLicenseConversionTaskForResourceCommandOutput) => void
  ): void;
  public createLicenseConversionTaskForResource(
    args: CreateLicenseConversionTaskForResourceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateLicenseConversionTaskForResourceCommandOutput) => void),
    cb?: (err: any, data?: CreateLicenseConversionTaskForResourceCommandOutput) => void
  ): Promise<CreateLicenseConversionTaskForResourceCommandOutput> | void {
    const command = new CreateLicenseConversionTaskForResourceCommand(args);
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
   * <p>Creates a report generator.</p>
   */
  public createLicenseManagerReportGenerator(
    args: CreateLicenseManagerReportGeneratorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLicenseManagerReportGeneratorCommandOutput>;
  public createLicenseManagerReportGenerator(
    args: CreateLicenseManagerReportGeneratorCommandInput,
    cb: (err: any, data?: CreateLicenseManagerReportGeneratorCommandOutput) => void
  ): void;
  public createLicenseManagerReportGenerator(
    args: CreateLicenseManagerReportGeneratorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLicenseManagerReportGeneratorCommandOutput) => void
  ): void;
  public createLicenseManagerReportGenerator(
    args: CreateLicenseManagerReportGeneratorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateLicenseManagerReportGeneratorCommandOutput) => void),
    cb?: (err: any, data?: CreateLicenseManagerReportGeneratorCommandOutput) => void
  ): Promise<CreateLicenseManagerReportGeneratorCommandOutput> | void {
    const command = new CreateLicenseManagerReportGeneratorCommand(args);
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
   * <p>Creates a new version of the specified license.</p>
   */
  public createLicenseVersion(
    args: CreateLicenseVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLicenseVersionCommandOutput>;
  public createLicenseVersion(
    args: CreateLicenseVersionCommandInput,
    cb: (err: any, data?: CreateLicenseVersionCommandOutput) => void
  ): void;
  public createLicenseVersion(
    args: CreateLicenseVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLicenseVersionCommandOutput) => void
  ): void;
  public createLicenseVersion(
    args: CreateLicenseVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateLicenseVersionCommandOutput) => void),
    cb?: (err: any, data?: CreateLicenseVersionCommandOutput) => void
  ): Promise<CreateLicenseVersionCommandOutput> | void {
    const command = new CreateLicenseVersionCommand(args);
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
   * <p>Creates a long-lived token.</p>
   *          <p>A refresh token is a JWT token used to get an access token. With an access token,
   *           you can call AssumeRoleWithWebIdentity to get role credentials that you can use to
   *           call License Manager to manage the specified license.</p>
   */
  public createToken(args: CreateTokenCommandInput, options?: __HttpHandlerOptions): Promise<CreateTokenCommandOutput>;
  public createToken(args: CreateTokenCommandInput, cb: (err: any, data?: CreateTokenCommandOutput) => void): void;
  public createToken(
    args: CreateTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTokenCommandOutput) => void
  ): void;
  public createToken(
    args: CreateTokenCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateTokenCommandOutput) => void),
    cb?: (err: any, data?: CreateTokenCommandOutput) => void
  ): Promise<CreateTokenCommandOutput> | void {
    const command = new CreateTokenCommand(args);
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
   * <p>Deletes the specified grant.</p>
   */
  public deleteGrant(args: DeleteGrantCommandInput, options?: __HttpHandlerOptions): Promise<DeleteGrantCommandOutput>;
  public deleteGrant(args: DeleteGrantCommandInput, cb: (err: any, data?: DeleteGrantCommandOutput) => void): void;
  public deleteGrant(
    args: DeleteGrantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGrantCommandOutput) => void
  ): void;
  public deleteGrant(
    args: DeleteGrantCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteGrantCommandOutput) => void),
    cb?: (err: any, data?: DeleteGrantCommandOutput) => void
  ): Promise<DeleteGrantCommandOutput> | void {
    const command = new DeleteGrantCommand(args);
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
   * <p>Deletes the specified license.</p>
   */
  public deleteLicense(
    args: DeleteLicenseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLicenseCommandOutput>;
  public deleteLicense(
    args: DeleteLicenseCommandInput,
    cb: (err: any, data?: DeleteLicenseCommandOutput) => void
  ): void;
  public deleteLicense(
    args: DeleteLicenseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLicenseCommandOutput) => void
  ): void;
  public deleteLicense(
    args: DeleteLicenseCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteLicenseCommandOutput) => void),
    cb?: (err: any, data?: DeleteLicenseCommandOutput) => void
  ): Promise<DeleteLicenseCommandOutput> | void {
    const command = new DeleteLicenseCommand(args);
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
   * <p>Deletes the specified license configuration.</p>
   *          <p>You cannot delete a license configuration that is in use.</p>
   */
  public deleteLicenseConfiguration(
    args: DeleteLicenseConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLicenseConfigurationCommandOutput>;
  public deleteLicenseConfiguration(
    args: DeleteLicenseConfigurationCommandInput,
    cb: (err: any, data?: DeleteLicenseConfigurationCommandOutput) => void
  ): void;
  public deleteLicenseConfiguration(
    args: DeleteLicenseConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLicenseConfigurationCommandOutput) => void
  ): void;
  public deleteLicenseConfiguration(
    args: DeleteLicenseConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteLicenseConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DeleteLicenseConfigurationCommandOutput) => void
  ): Promise<DeleteLicenseConfigurationCommandOutput> | void {
    const command = new DeleteLicenseConfigurationCommand(args);
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
   * <p>Deletes the specified report generator.</p>
   *          <p>This action deletes the report generator, which stops it from generating future reports.
   *          The action cannot be reversed. It has no effect on the previous reports from this generator.</p>
   */
  public deleteLicenseManagerReportGenerator(
    args: DeleteLicenseManagerReportGeneratorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLicenseManagerReportGeneratorCommandOutput>;
  public deleteLicenseManagerReportGenerator(
    args: DeleteLicenseManagerReportGeneratorCommandInput,
    cb: (err: any, data?: DeleteLicenseManagerReportGeneratorCommandOutput) => void
  ): void;
  public deleteLicenseManagerReportGenerator(
    args: DeleteLicenseManagerReportGeneratorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLicenseManagerReportGeneratorCommandOutput) => void
  ): void;
  public deleteLicenseManagerReportGenerator(
    args: DeleteLicenseManagerReportGeneratorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteLicenseManagerReportGeneratorCommandOutput) => void),
    cb?: (err: any, data?: DeleteLicenseManagerReportGeneratorCommandOutput) => void
  ): Promise<DeleteLicenseManagerReportGeneratorCommandOutput> | void {
    const command = new DeleteLicenseManagerReportGeneratorCommand(args);
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
   * <p>Deletes the specified token. Must be called in the license home Region.</p>
   */
  public deleteToken(args: DeleteTokenCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTokenCommandOutput>;
  public deleteToken(args: DeleteTokenCommandInput, cb: (err: any, data?: DeleteTokenCommandOutput) => void): void;
  public deleteToken(
    args: DeleteTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTokenCommandOutput) => void
  ): void;
  public deleteToken(
    args: DeleteTokenCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteTokenCommandOutput) => void),
    cb?: (err: any, data?: DeleteTokenCommandOutput) => void
  ): Promise<DeleteTokenCommandOutput> | void {
    const command = new DeleteTokenCommand(args);
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
   * <p>Extends the expiration date for license consumption.</p>
   */
  public extendLicenseConsumption(
    args: ExtendLicenseConsumptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExtendLicenseConsumptionCommandOutput>;
  public extendLicenseConsumption(
    args: ExtendLicenseConsumptionCommandInput,
    cb: (err: any, data?: ExtendLicenseConsumptionCommandOutput) => void
  ): void;
  public extendLicenseConsumption(
    args: ExtendLicenseConsumptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExtendLicenseConsumptionCommandOutput) => void
  ): void;
  public extendLicenseConsumption(
    args: ExtendLicenseConsumptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ExtendLicenseConsumptionCommandOutput) => void),
    cb?: (err: any, data?: ExtendLicenseConsumptionCommandOutput) => void
  ): Promise<ExtendLicenseConsumptionCommandOutput> | void {
    const command = new ExtendLicenseConsumptionCommand(args);
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
   * <p>Gets a temporary access token to use with AssumeRoleWithWebIdentity. Access tokens
   *           are valid for one hour.</p>
   */
  public getAccessToken(
    args: GetAccessTokenCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccessTokenCommandOutput>;
  public getAccessToken(
    args: GetAccessTokenCommandInput,
    cb: (err: any, data?: GetAccessTokenCommandOutput) => void
  ): void;
  public getAccessToken(
    args: GetAccessTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccessTokenCommandOutput) => void
  ): void;
  public getAccessToken(
    args: GetAccessTokenCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAccessTokenCommandOutput) => void),
    cb?: (err: any, data?: GetAccessTokenCommandOutput) => void
  ): Promise<GetAccessTokenCommandOutput> | void {
    const command = new GetAccessTokenCommand(args);
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
   * <p>Gets detailed information about the specified grant.</p>
   */
  public getGrant(args: GetGrantCommandInput, options?: __HttpHandlerOptions): Promise<GetGrantCommandOutput>;
  public getGrant(args: GetGrantCommandInput, cb: (err: any, data?: GetGrantCommandOutput) => void): void;
  public getGrant(
    args: GetGrantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGrantCommandOutput) => void
  ): void;
  public getGrant(
    args: GetGrantCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetGrantCommandOutput) => void),
    cb?: (err: any, data?: GetGrantCommandOutput) => void
  ): Promise<GetGrantCommandOutput> | void {
    const command = new GetGrantCommand(args);
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
   * <p>Gets detailed information about the specified license.</p>
   */
  public getLicense(args: GetLicenseCommandInput, options?: __HttpHandlerOptions): Promise<GetLicenseCommandOutput>;
  public getLicense(args: GetLicenseCommandInput, cb: (err: any, data?: GetLicenseCommandOutput) => void): void;
  public getLicense(
    args: GetLicenseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLicenseCommandOutput) => void
  ): void;
  public getLicense(
    args: GetLicenseCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetLicenseCommandOutput) => void),
    cb?: (err: any, data?: GetLicenseCommandOutput) => void
  ): Promise<GetLicenseCommandOutput> | void {
    const command = new GetLicenseCommand(args);
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
   * <p>Gets detailed information about the specified license configuration.</p>
   */
  public getLicenseConfiguration(
    args: GetLicenseConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLicenseConfigurationCommandOutput>;
  public getLicenseConfiguration(
    args: GetLicenseConfigurationCommandInput,
    cb: (err: any, data?: GetLicenseConfigurationCommandOutput) => void
  ): void;
  public getLicenseConfiguration(
    args: GetLicenseConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLicenseConfigurationCommandOutput) => void
  ): void;
  public getLicenseConfiguration(
    args: GetLicenseConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetLicenseConfigurationCommandOutput) => void),
    cb?: (err: any, data?: GetLicenseConfigurationCommandOutput) => void
  ): Promise<GetLicenseConfigurationCommandOutput> | void {
    const command = new GetLicenseConfigurationCommand(args);
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
   * <p>Gets information about the specified license type conversion task.</p>
   */
  public getLicenseConversionTask(
    args: GetLicenseConversionTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLicenseConversionTaskCommandOutput>;
  public getLicenseConversionTask(
    args: GetLicenseConversionTaskCommandInput,
    cb: (err: any, data?: GetLicenseConversionTaskCommandOutput) => void
  ): void;
  public getLicenseConversionTask(
    args: GetLicenseConversionTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLicenseConversionTaskCommandOutput) => void
  ): void;
  public getLicenseConversionTask(
    args: GetLicenseConversionTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetLicenseConversionTaskCommandOutput) => void),
    cb?: (err: any, data?: GetLicenseConversionTaskCommandOutput) => void
  ): Promise<GetLicenseConversionTaskCommandOutput> | void {
    const command = new GetLicenseConversionTaskCommand(args);
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
   * <p>Gets information about the specified report generator.</p>
   */
  public getLicenseManagerReportGenerator(
    args: GetLicenseManagerReportGeneratorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLicenseManagerReportGeneratorCommandOutput>;
  public getLicenseManagerReportGenerator(
    args: GetLicenseManagerReportGeneratorCommandInput,
    cb: (err: any, data?: GetLicenseManagerReportGeneratorCommandOutput) => void
  ): void;
  public getLicenseManagerReportGenerator(
    args: GetLicenseManagerReportGeneratorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLicenseManagerReportGeneratorCommandOutput) => void
  ): void;
  public getLicenseManagerReportGenerator(
    args: GetLicenseManagerReportGeneratorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetLicenseManagerReportGeneratorCommandOutput) => void),
    cb?: (err: any, data?: GetLicenseManagerReportGeneratorCommandOutput) => void
  ): Promise<GetLicenseManagerReportGeneratorCommandOutput> | void {
    const command = new GetLicenseManagerReportGeneratorCommand(args);
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
   * <p>Gets detailed information about the usage of the specified license.</p>
   */
  public getLicenseUsage(
    args: GetLicenseUsageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLicenseUsageCommandOutput>;
  public getLicenseUsage(
    args: GetLicenseUsageCommandInput,
    cb: (err: any, data?: GetLicenseUsageCommandOutput) => void
  ): void;
  public getLicenseUsage(
    args: GetLicenseUsageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLicenseUsageCommandOutput) => void
  ): void;
  public getLicenseUsage(
    args: GetLicenseUsageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetLicenseUsageCommandOutput) => void),
    cb?: (err: any, data?: GetLicenseUsageCommandOutput) => void
  ): Promise<GetLicenseUsageCommandOutput> | void {
    const command = new GetLicenseUsageCommand(args);
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
   * <p>Gets the License Manager settings for the current Region.</p>
   */
  public getServiceSettings(
    args: GetServiceSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServiceSettingsCommandOutput>;
  public getServiceSettings(
    args: GetServiceSettingsCommandInput,
    cb: (err: any, data?: GetServiceSettingsCommandOutput) => void
  ): void;
  public getServiceSettings(
    args: GetServiceSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServiceSettingsCommandOutput) => void
  ): void;
  public getServiceSettings(
    args: GetServiceSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetServiceSettingsCommandOutput) => void),
    cb?: (err: any, data?: GetServiceSettingsCommandOutput) => void
  ): Promise<GetServiceSettingsCommandOutput> | void {
    const command = new GetServiceSettingsCommand(args);
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
   * <p>Lists the resource associations for the specified license configuration.</p>
   *          <p>Resource associations need not consume licenses from a license configuration.
   *          For example, an AMI or a stopped instance might not consume a license (depending on
   *          the license rules).</p>
   */
  public listAssociationsForLicenseConfiguration(
    args: ListAssociationsForLicenseConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssociationsForLicenseConfigurationCommandOutput>;
  public listAssociationsForLicenseConfiguration(
    args: ListAssociationsForLicenseConfigurationCommandInput,
    cb: (err: any, data?: ListAssociationsForLicenseConfigurationCommandOutput) => void
  ): void;
  public listAssociationsForLicenseConfiguration(
    args: ListAssociationsForLicenseConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssociationsForLicenseConfigurationCommandOutput) => void
  ): void;
  public listAssociationsForLicenseConfiguration(
    args: ListAssociationsForLicenseConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListAssociationsForLicenseConfigurationCommandOutput) => void),
    cb?: (err: any, data?: ListAssociationsForLicenseConfigurationCommandOutput) => void
  ): Promise<ListAssociationsForLicenseConfigurationCommandOutput> | void {
    const command = new ListAssociationsForLicenseConfigurationCommand(args);
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
   * <p>Lists the grants distributed for the specified license.</p>
   */
  public listDistributedGrants(
    args: ListDistributedGrantsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDistributedGrantsCommandOutput>;
  public listDistributedGrants(
    args: ListDistributedGrantsCommandInput,
    cb: (err: any, data?: ListDistributedGrantsCommandOutput) => void
  ): void;
  public listDistributedGrants(
    args: ListDistributedGrantsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDistributedGrantsCommandOutput) => void
  ): void;
  public listDistributedGrants(
    args: ListDistributedGrantsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDistributedGrantsCommandOutput) => void),
    cb?: (err: any, data?: ListDistributedGrantsCommandOutput) => void
  ): Promise<ListDistributedGrantsCommandOutput> | void {
    const command = new ListDistributedGrantsCommand(args);
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
   * <p>Lists the license configuration operations that failed.</p>
   */
  public listFailuresForLicenseConfigurationOperations(
    args: ListFailuresForLicenseConfigurationOperationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFailuresForLicenseConfigurationOperationsCommandOutput>;
  public listFailuresForLicenseConfigurationOperations(
    args: ListFailuresForLicenseConfigurationOperationsCommandInput,
    cb: (err: any, data?: ListFailuresForLicenseConfigurationOperationsCommandOutput) => void
  ): void;
  public listFailuresForLicenseConfigurationOperations(
    args: ListFailuresForLicenseConfigurationOperationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFailuresForLicenseConfigurationOperationsCommandOutput) => void
  ): void;
  public listFailuresForLicenseConfigurationOperations(
    args: ListFailuresForLicenseConfigurationOperationsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListFailuresForLicenseConfigurationOperationsCommandOutput) => void),
    cb?: (err: any, data?: ListFailuresForLicenseConfigurationOperationsCommandOutput) => void
  ): Promise<ListFailuresForLicenseConfigurationOperationsCommandOutput> | void {
    const command = new ListFailuresForLicenseConfigurationOperationsCommand(args);
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
   * <p>Lists the license configurations for your account.</p>
   */
  public listLicenseConfigurations(
    args: ListLicenseConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLicenseConfigurationsCommandOutput>;
  public listLicenseConfigurations(
    args: ListLicenseConfigurationsCommandInput,
    cb: (err: any, data?: ListLicenseConfigurationsCommandOutput) => void
  ): void;
  public listLicenseConfigurations(
    args: ListLicenseConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLicenseConfigurationsCommandOutput) => void
  ): void;
  public listLicenseConfigurations(
    args: ListLicenseConfigurationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListLicenseConfigurationsCommandOutput) => void),
    cb?: (err: any, data?: ListLicenseConfigurationsCommandOutput) => void
  ): Promise<ListLicenseConfigurationsCommandOutput> | void {
    const command = new ListLicenseConfigurationsCommand(args);
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
   * <p>Lists the license type conversion tasks for your account.</p>
   */
  public listLicenseConversionTasks(
    args: ListLicenseConversionTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLicenseConversionTasksCommandOutput>;
  public listLicenseConversionTasks(
    args: ListLicenseConversionTasksCommandInput,
    cb: (err: any, data?: ListLicenseConversionTasksCommandOutput) => void
  ): void;
  public listLicenseConversionTasks(
    args: ListLicenseConversionTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLicenseConversionTasksCommandOutput) => void
  ): void;
  public listLicenseConversionTasks(
    args: ListLicenseConversionTasksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListLicenseConversionTasksCommandOutput) => void),
    cb?: (err: any, data?: ListLicenseConversionTasksCommandOutput) => void
  ): Promise<ListLicenseConversionTasksCommandOutput> | void {
    const command = new ListLicenseConversionTasksCommand(args);
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
   * <p>Lists the report generators for your account.</p>
   */
  public listLicenseManagerReportGenerators(
    args: ListLicenseManagerReportGeneratorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLicenseManagerReportGeneratorsCommandOutput>;
  public listLicenseManagerReportGenerators(
    args: ListLicenseManagerReportGeneratorsCommandInput,
    cb: (err: any, data?: ListLicenseManagerReportGeneratorsCommandOutput) => void
  ): void;
  public listLicenseManagerReportGenerators(
    args: ListLicenseManagerReportGeneratorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLicenseManagerReportGeneratorsCommandOutput) => void
  ): void;
  public listLicenseManagerReportGenerators(
    args: ListLicenseManagerReportGeneratorsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListLicenseManagerReportGeneratorsCommandOutput) => void),
    cb?: (err: any, data?: ListLicenseManagerReportGeneratorsCommandOutput) => void
  ): Promise<ListLicenseManagerReportGeneratorsCommandOutput> | void {
    const command = new ListLicenseManagerReportGeneratorsCommand(args);
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
   * <p>Lists the licenses for your account.</p>
   */
  public listLicenses(
    args: ListLicensesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLicensesCommandOutput>;
  public listLicenses(args: ListLicensesCommandInput, cb: (err: any, data?: ListLicensesCommandOutput) => void): void;
  public listLicenses(
    args: ListLicensesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLicensesCommandOutput) => void
  ): void;
  public listLicenses(
    args: ListLicensesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListLicensesCommandOutput) => void),
    cb?: (err: any, data?: ListLicensesCommandOutput) => void
  ): Promise<ListLicensesCommandOutput> | void {
    const command = new ListLicensesCommand(args);
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
   * <p>Describes the license configurations for the specified resource.</p>
   */
  public listLicenseSpecificationsForResource(
    args: ListLicenseSpecificationsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLicenseSpecificationsForResourceCommandOutput>;
  public listLicenseSpecificationsForResource(
    args: ListLicenseSpecificationsForResourceCommandInput,
    cb: (err: any, data?: ListLicenseSpecificationsForResourceCommandOutput) => void
  ): void;
  public listLicenseSpecificationsForResource(
    args: ListLicenseSpecificationsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLicenseSpecificationsForResourceCommandOutput) => void
  ): void;
  public listLicenseSpecificationsForResource(
    args: ListLicenseSpecificationsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListLicenseSpecificationsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListLicenseSpecificationsForResourceCommandOutput) => void
  ): Promise<ListLicenseSpecificationsForResourceCommandOutput> | void {
    const command = new ListLicenseSpecificationsForResourceCommand(args);
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
   * <p>Lists all versions of the specified license.</p>
   */
  public listLicenseVersions(
    args: ListLicenseVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLicenseVersionsCommandOutput>;
  public listLicenseVersions(
    args: ListLicenseVersionsCommandInput,
    cb: (err: any, data?: ListLicenseVersionsCommandOutput) => void
  ): void;
  public listLicenseVersions(
    args: ListLicenseVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLicenseVersionsCommandOutput) => void
  ): void;
  public listLicenseVersions(
    args: ListLicenseVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListLicenseVersionsCommandOutput) => void),
    cb?: (err: any, data?: ListLicenseVersionsCommandOutput) => void
  ): Promise<ListLicenseVersionsCommandOutput> | void {
    const command = new ListLicenseVersionsCommand(args);
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
   * <p>Lists grants that are received but not accepted.</p>
   */
  public listReceivedGrants(
    args: ListReceivedGrantsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReceivedGrantsCommandOutput>;
  public listReceivedGrants(
    args: ListReceivedGrantsCommandInput,
    cb: (err: any, data?: ListReceivedGrantsCommandOutput) => void
  ): void;
  public listReceivedGrants(
    args: ListReceivedGrantsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReceivedGrantsCommandOutput) => void
  ): void;
  public listReceivedGrants(
    args: ListReceivedGrantsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListReceivedGrantsCommandOutput) => void),
    cb?: (err: any, data?: ListReceivedGrantsCommandOutput) => void
  ): Promise<ListReceivedGrantsCommandOutput> | void {
    const command = new ListReceivedGrantsCommand(args);
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
   * <p>Lists the grants received for all accounts in the organization.</p>
   */
  public listReceivedGrantsForOrganization(
    args: ListReceivedGrantsForOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReceivedGrantsForOrganizationCommandOutput>;
  public listReceivedGrantsForOrganization(
    args: ListReceivedGrantsForOrganizationCommandInput,
    cb: (err: any, data?: ListReceivedGrantsForOrganizationCommandOutput) => void
  ): void;
  public listReceivedGrantsForOrganization(
    args: ListReceivedGrantsForOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReceivedGrantsForOrganizationCommandOutput) => void
  ): void;
  public listReceivedGrantsForOrganization(
    args: ListReceivedGrantsForOrganizationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListReceivedGrantsForOrganizationCommandOutput) => void),
    cb?: (err: any, data?: ListReceivedGrantsForOrganizationCommandOutput) => void
  ): Promise<ListReceivedGrantsForOrganizationCommandOutput> | void {
    const command = new ListReceivedGrantsForOrganizationCommand(args);
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
   * <p>Lists received licenses.</p>
   */
  public listReceivedLicenses(
    args: ListReceivedLicensesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReceivedLicensesCommandOutput>;
  public listReceivedLicenses(
    args: ListReceivedLicensesCommandInput,
    cb: (err: any, data?: ListReceivedLicensesCommandOutput) => void
  ): void;
  public listReceivedLicenses(
    args: ListReceivedLicensesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReceivedLicensesCommandOutput) => void
  ): void;
  public listReceivedLicenses(
    args: ListReceivedLicensesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListReceivedLicensesCommandOutput) => void),
    cb?: (err: any, data?: ListReceivedLicensesCommandOutput) => void
  ): Promise<ListReceivedLicensesCommandOutput> | void {
    const command = new ListReceivedLicensesCommand(args);
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
   * <p>Lists the licenses received for all accounts in the organization.</p>
   */
  public listReceivedLicensesForOrganization(
    args: ListReceivedLicensesForOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReceivedLicensesForOrganizationCommandOutput>;
  public listReceivedLicensesForOrganization(
    args: ListReceivedLicensesForOrganizationCommandInput,
    cb: (err: any, data?: ListReceivedLicensesForOrganizationCommandOutput) => void
  ): void;
  public listReceivedLicensesForOrganization(
    args: ListReceivedLicensesForOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReceivedLicensesForOrganizationCommandOutput) => void
  ): void;
  public listReceivedLicensesForOrganization(
    args: ListReceivedLicensesForOrganizationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListReceivedLicensesForOrganizationCommandOutput) => void),
    cb?: (err: any, data?: ListReceivedLicensesForOrganizationCommandOutput) => void
  ): Promise<ListReceivedLicensesForOrganizationCommandOutput> | void {
    const command = new ListReceivedLicensesForOrganizationCommand(args);
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
   * <p>Lists resources managed using Systems Manager inventory.</p>
   */
  public listResourceInventory(
    args: ListResourceInventoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourceInventoryCommandOutput>;
  public listResourceInventory(
    args: ListResourceInventoryCommandInput,
    cb: (err: any, data?: ListResourceInventoryCommandOutput) => void
  ): void;
  public listResourceInventory(
    args: ListResourceInventoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourceInventoryCommandOutput) => void
  ): void;
  public listResourceInventory(
    args: ListResourceInventoryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListResourceInventoryCommandOutput) => void),
    cb?: (err: any, data?: ListResourceInventoryCommandOutput) => void
  ): Promise<ListResourceInventoryCommandOutput> | void {
    const command = new ListResourceInventoryCommand(args);
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
   * <p>Lists the tags for the specified license configuration.</p>
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
   * <p>Lists your tokens.</p>
   */
  public listTokens(args: ListTokensCommandInput, options?: __HttpHandlerOptions): Promise<ListTokensCommandOutput>;
  public listTokens(args: ListTokensCommandInput, cb: (err: any, data?: ListTokensCommandOutput) => void): void;
  public listTokens(
    args: ListTokensCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTokensCommandOutput) => void
  ): void;
  public listTokens(
    args: ListTokensCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTokensCommandOutput) => void),
    cb?: (err: any, data?: ListTokensCommandOutput) => void
  ): Promise<ListTokensCommandOutput> | void {
    const command = new ListTokensCommand(args);
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
   * <p>Lists all license usage records for a license configuration, displaying license
   *          consumption details by resource at a selected point in time. Use this action to audit the
   *          current license consumption for any license inventory and configuration.</p>
   */
  public listUsageForLicenseConfiguration(
    args: ListUsageForLicenseConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListUsageForLicenseConfigurationCommandOutput>;
  public listUsageForLicenseConfiguration(
    args: ListUsageForLicenseConfigurationCommandInput,
    cb: (err: any, data?: ListUsageForLicenseConfigurationCommandOutput) => void
  ): void;
  public listUsageForLicenseConfiguration(
    args: ListUsageForLicenseConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUsageForLicenseConfigurationCommandOutput) => void
  ): void;
  public listUsageForLicenseConfiguration(
    args: ListUsageForLicenseConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListUsageForLicenseConfigurationCommandOutput) => void),
    cb?: (err: any, data?: ListUsageForLicenseConfigurationCommandOutput) => void
  ): Promise<ListUsageForLicenseConfigurationCommandOutput> | void {
    const command = new ListUsageForLicenseConfigurationCommand(args);
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
   * <p>Rejects the specified grant.</p>
   */
  public rejectGrant(args: RejectGrantCommandInput, options?: __HttpHandlerOptions): Promise<RejectGrantCommandOutput>;
  public rejectGrant(args: RejectGrantCommandInput, cb: (err: any, data?: RejectGrantCommandOutput) => void): void;
  public rejectGrant(
    args: RejectGrantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RejectGrantCommandOutput) => void
  ): void;
  public rejectGrant(
    args: RejectGrantCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RejectGrantCommandOutput) => void),
    cb?: (err: any, data?: RejectGrantCommandOutput) => void
  ): Promise<RejectGrantCommandOutput> | void {
    const command = new RejectGrantCommand(args);
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
   * <p>Adds the specified tags to the specified license configuration.</p>
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
   * <p>Removes the specified tags from the specified license configuration.</p>
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
   * <p>Modifies the attributes of an existing license configuration.</p>
   */
  public updateLicenseConfiguration(
    args: UpdateLicenseConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLicenseConfigurationCommandOutput>;
  public updateLicenseConfiguration(
    args: UpdateLicenseConfigurationCommandInput,
    cb: (err: any, data?: UpdateLicenseConfigurationCommandOutput) => void
  ): void;
  public updateLicenseConfiguration(
    args: UpdateLicenseConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLicenseConfigurationCommandOutput) => void
  ): void;
  public updateLicenseConfiguration(
    args: UpdateLicenseConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateLicenseConfigurationCommandOutput) => void),
    cb?: (err: any, data?: UpdateLicenseConfigurationCommandOutput) => void
  ): Promise<UpdateLicenseConfigurationCommandOutput> | void {
    const command = new UpdateLicenseConfigurationCommand(args);
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
   * <p>Updates a report generator.</p>
   *          <p>After you make changes to a report generator, it starts generating new reports within 60 minutes of being updated.</p>
   */
  public updateLicenseManagerReportGenerator(
    args: UpdateLicenseManagerReportGeneratorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLicenseManagerReportGeneratorCommandOutput>;
  public updateLicenseManagerReportGenerator(
    args: UpdateLicenseManagerReportGeneratorCommandInput,
    cb: (err: any, data?: UpdateLicenseManagerReportGeneratorCommandOutput) => void
  ): void;
  public updateLicenseManagerReportGenerator(
    args: UpdateLicenseManagerReportGeneratorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLicenseManagerReportGeneratorCommandOutput) => void
  ): void;
  public updateLicenseManagerReportGenerator(
    args: UpdateLicenseManagerReportGeneratorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateLicenseManagerReportGeneratorCommandOutput) => void),
    cb?: (err: any, data?: UpdateLicenseManagerReportGeneratorCommandOutput) => void
  ): Promise<UpdateLicenseManagerReportGeneratorCommandOutput> | void {
    const command = new UpdateLicenseManagerReportGeneratorCommand(args);
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
   * <p>Adds or removes the specified license configurations for the specified Amazon Web Services resource.</p>
   *          <p>You can update the license specifications of AMIs, instances, and hosts.
   *          You cannot update the license specifications for launch templates and CloudFormation templates,
   *          as they send license configurations to the operation that creates the resource.</p>
   */
  public updateLicenseSpecificationsForResource(
    args: UpdateLicenseSpecificationsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLicenseSpecificationsForResourceCommandOutput>;
  public updateLicenseSpecificationsForResource(
    args: UpdateLicenseSpecificationsForResourceCommandInput,
    cb: (err: any, data?: UpdateLicenseSpecificationsForResourceCommandOutput) => void
  ): void;
  public updateLicenseSpecificationsForResource(
    args: UpdateLicenseSpecificationsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLicenseSpecificationsForResourceCommandOutput) => void
  ): void;
  public updateLicenseSpecificationsForResource(
    args: UpdateLicenseSpecificationsForResourceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateLicenseSpecificationsForResourceCommandOutput) => void),
    cb?: (err: any, data?: UpdateLicenseSpecificationsForResourceCommandOutput) => void
  ): Promise<UpdateLicenseSpecificationsForResourceCommandOutput> | void {
    const command = new UpdateLicenseSpecificationsForResourceCommand(args);
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
   * <p>Updates License Manager settings for the current Region.</p>
   */
  public updateServiceSettings(
    args: UpdateServiceSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateServiceSettingsCommandOutput>;
  public updateServiceSettings(
    args: UpdateServiceSettingsCommandInput,
    cb: (err: any, data?: UpdateServiceSettingsCommandOutput) => void
  ): void;
  public updateServiceSettings(
    args: UpdateServiceSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateServiceSettingsCommandOutput) => void
  ): void;
  public updateServiceSettings(
    args: UpdateServiceSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateServiceSettingsCommandOutput) => void),
    cb?: (err: any, data?: UpdateServiceSettingsCommandOutput) => void
  ): Promise<UpdateServiceSettingsCommandOutput> | void {
    const command = new UpdateServiceSettingsCommand(args);
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
