// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { CloudHSMClient } from "./CloudHSMClient";
import {
  AddTagsToResourceCommand,
  AddTagsToResourceCommandInput,
  AddTagsToResourceCommandOutput,
} from "./commands/AddTagsToResourceCommand";
import { CreateHapgCommand, CreateHapgCommandInput, CreateHapgCommandOutput } from "./commands/CreateHapgCommand";
import { CreateHsmCommand, CreateHsmCommandInput, CreateHsmCommandOutput } from "./commands/CreateHsmCommand";
import {
  CreateLunaClientCommand,
  CreateLunaClientCommandInput,
  CreateLunaClientCommandOutput,
} from "./commands/CreateLunaClientCommand";
import { DeleteHapgCommand, DeleteHapgCommandInput, DeleteHapgCommandOutput } from "./commands/DeleteHapgCommand";
import { DeleteHsmCommand, DeleteHsmCommandInput, DeleteHsmCommandOutput } from "./commands/DeleteHsmCommand";
import {
  DeleteLunaClientCommand,
  DeleteLunaClientCommandInput,
  DeleteLunaClientCommandOutput,
} from "./commands/DeleteLunaClientCommand";
import {
  DescribeHapgCommand,
  DescribeHapgCommandInput,
  DescribeHapgCommandOutput,
} from "./commands/DescribeHapgCommand";
import { DescribeHsmCommand, DescribeHsmCommandInput, DescribeHsmCommandOutput } from "./commands/DescribeHsmCommand";
import {
  DescribeLunaClientCommand,
  DescribeLunaClientCommandInput,
  DescribeLunaClientCommandOutput,
} from "./commands/DescribeLunaClientCommand";
import { GetConfigCommand, GetConfigCommandInput, GetConfigCommandOutput } from "./commands/GetConfigCommand";
import {
  ListAvailableZonesCommand,
  ListAvailableZonesCommandInput,
  ListAvailableZonesCommandOutput,
} from "./commands/ListAvailableZonesCommand";
import { ListHapgsCommand, ListHapgsCommandInput, ListHapgsCommandOutput } from "./commands/ListHapgsCommand";
import { ListHsmsCommand, ListHsmsCommandInput, ListHsmsCommandOutput } from "./commands/ListHsmsCommand";
import {
  ListLunaClientsCommand,
  ListLunaClientsCommandInput,
  ListLunaClientsCommandOutput,
} from "./commands/ListLunaClientsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ModifyHapgCommand, ModifyHapgCommandInput, ModifyHapgCommandOutput } from "./commands/ModifyHapgCommand";
import { ModifyHsmCommand, ModifyHsmCommandInput, ModifyHsmCommandOutput } from "./commands/ModifyHsmCommand";
import {
  ModifyLunaClientCommand,
  ModifyLunaClientCommandInput,
  ModifyLunaClientCommandOutput,
} from "./commands/ModifyLunaClientCommand";
import {
  RemoveTagsFromResourceCommand,
  RemoveTagsFromResourceCommandInput,
  RemoveTagsFromResourceCommandOutput,
} from "./commands/RemoveTagsFromResourceCommand";

/**
 * <fullname>AWS CloudHSM Service</fullname>
 *          <p>This is documentation for <b>AWS CloudHSM Classic</b>. For
 *       more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM
 *       Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS
 *       CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p>
 *          <p>
 *             <b>For information about the current version of AWS
 *       CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the
 *       <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>,
 *       and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API
 *       Reference</a>.</p>
 */
export class CloudHSM extends CloudHSMClient {
  /**
   * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For
   *       more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM
   *       Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS
   *       CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p>
   *          <p>
   *             <b>For information about the current version of AWS
   *       CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the
   *       <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>,
   *       and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API
   *       Reference</a>.</p>
   *          <p>Adds or overwrites one or more tags for the specified AWS CloudHSM resource.</p>
   *          <p>Each tag consists of a key and a value. Tag keys must be unique to each
   *       resource.</p>
   */
  public addTagsToResource(
    args: AddTagsToResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddTagsToResourceCommandOutput>;
  public addTagsToResource(
    args: AddTagsToResourceCommandInput,
    cb: (err: any, data?: AddTagsToResourceCommandOutput) => void
  ): void;
  public addTagsToResource(
    args: AddTagsToResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddTagsToResourceCommandOutput) => void
  ): void;
  public addTagsToResource(
    args: AddTagsToResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddTagsToResourceCommandOutput) => void),
    cb?: (err: any, data?: AddTagsToResourceCommandOutput) => void
  ): Promise<AddTagsToResourceCommandOutput> | void {
    const command = new AddTagsToResourceCommand(args);
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
   * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For
   *       more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM
   *       Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS
   *       CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p>
   *          <p>
   *             <b>For information about the current version of AWS
   *       CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the
   *       <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>,
   *       and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API
   *       Reference</a>.</p>
   *          <p>Creates a high-availability partition group. A high-availability partition group is a
   *       group of partitions that spans multiple physical HSMs.</p>
   */
  public createHapg(args: CreateHapgCommandInput, options?: __HttpHandlerOptions): Promise<CreateHapgCommandOutput>;
  public createHapg(args: CreateHapgCommandInput, cb: (err: any, data?: CreateHapgCommandOutput) => void): void;
  public createHapg(
    args: CreateHapgCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateHapgCommandOutput) => void
  ): void;
  public createHapg(
    args: CreateHapgCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateHapgCommandOutput) => void),
    cb?: (err: any, data?: CreateHapgCommandOutput) => void
  ): Promise<CreateHapgCommandOutput> | void {
    const command = new CreateHapgCommand(args);
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
   * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For
   *       more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM
   *       Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS
   *       CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p>
   *          <p>
   *             <b>For information about the current version of AWS
   *       CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the
   *       <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>,
   *       and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API
   *       Reference</a>.</p>
   *          <p>Creates an uninitialized HSM instance.</p>
   *          <p>There is an upfront fee charged for each HSM instance that you create with the
   *         <code>CreateHsm</code> operation. If you accidentally provision an HSM and want to request a
   *       refund, delete the instance using the <a>DeleteHsm</a> operation, go to the <a href="https://console.aws.amazon.com/support/home">AWS Support Center</a>, create a new case, and select
   *         <b>Account and Billing Support</b>.</p>
   *          <important>
   *             <p>It can take up to 20 minutes to create and provision an HSM. You can monitor the
   *         status of the HSM with the <a>DescribeHsm</a> operation. The HSM is ready to be
   *         initialized when the status changes to <code>RUNNING</code>.</p>
   *          </important>
   */
  public createHsm(args: CreateHsmCommandInput, options?: __HttpHandlerOptions): Promise<CreateHsmCommandOutput>;
  public createHsm(args: CreateHsmCommandInput, cb: (err: any, data?: CreateHsmCommandOutput) => void): void;
  public createHsm(
    args: CreateHsmCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateHsmCommandOutput) => void
  ): void;
  public createHsm(
    args: CreateHsmCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateHsmCommandOutput) => void),
    cb?: (err: any, data?: CreateHsmCommandOutput) => void
  ): Promise<CreateHsmCommandOutput> | void {
    const command = new CreateHsmCommand(args);
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
   * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For
   *       more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM
   *       Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS
   *       CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p>
   *          <p>
   *             <b>For information about the current version of AWS
   *       CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the
   *       <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>,
   *       and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API
   *       Reference</a>.</p>
   *          <p>Creates an HSM client.</p>
   */
  public createLunaClient(
    args: CreateLunaClientCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLunaClientCommandOutput>;
  public createLunaClient(
    args: CreateLunaClientCommandInput,
    cb: (err: any, data?: CreateLunaClientCommandOutput) => void
  ): void;
  public createLunaClient(
    args: CreateLunaClientCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLunaClientCommandOutput) => void
  ): void;
  public createLunaClient(
    args: CreateLunaClientCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateLunaClientCommandOutput) => void),
    cb?: (err: any, data?: CreateLunaClientCommandOutput) => void
  ): Promise<CreateLunaClientCommandOutput> | void {
    const command = new CreateLunaClientCommand(args);
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
   * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For
   *       more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM
   *       Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS
   *       CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p>
   *          <p>
   *             <b>For information about the current version of AWS
   *       CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the
   *       <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>,
   *       and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API
   *       Reference</a>.</p>
   *          <p>Deletes a high-availability partition group.</p>
   */
  public deleteHapg(args: DeleteHapgCommandInput, options?: __HttpHandlerOptions): Promise<DeleteHapgCommandOutput>;
  public deleteHapg(args: DeleteHapgCommandInput, cb: (err: any, data?: DeleteHapgCommandOutput) => void): void;
  public deleteHapg(
    args: DeleteHapgCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteHapgCommandOutput) => void
  ): void;
  public deleteHapg(
    args: DeleteHapgCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteHapgCommandOutput) => void),
    cb?: (err: any, data?: DeleteHapgCommandOutput) => void
  ): Promise<DeleteHapgCommandOutput> | void {
    const command = new DeleteHapgCommand(args);
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
   * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For
   *       more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM
   *       Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS
   *       CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p>
   *          <p>
   *             <b>For information about the current version of AWS
   *       CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the
   *       <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>,
   *       and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API
   *       Reference</a>.</p>
   *          <p>Deletes an HSM. After completion, this operation cannot be undone and your key material
   *       cannot be recovered.</p>
   */
  public deleteHsm(args: DeleteHsmCommandInput, options?: __HttpHandlerOptions): Promise<DeleteHsmCommandOutput>;
  public deleteHsm(args: DeleteHsmCommandInput, cb: (err: any, data?: DeleteHsmCommandOutput) => void): void;
  public deleteHsm(
    args: DeleteHsmCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteHsmCommandOutput) => void
  ): void;
  public deleteHsm(
    args: DeleteHsmCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteHsmCommandOutput) => void),
    cb?: (err: any, data?: DeleteHsmCommandOutput) => void
  ): Promise<DeleteHsmCommandOutput> | void {
    const command = new DeleteHsmCommand(args);
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
   * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For
   *       more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM
   *       Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS
   *       CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p>
   *          <p>
   *             <b>For information about the current version of AWS
   *       CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the
   *       <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>,
   *       and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API
   *       Reference</a>.</p>
   *          <p>Deletes a client.</p>
   */
  public deleteLunaClient(
    args: DeleteLunaClientCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLunaClientCommandOutput>;
  public deleteLunaClient(
    args: DeleteLunaClientCommandInput,
    cb: (err: any, data?: DeleteLunaClientCommandOutput) => void
  ): void;
  public deleteLunaClient(
    args: DeleteLunaClientCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLunaClientCommandOutput) => void
  ): void;
  public deleteLunaClient(
    args: DeleteLunaClientCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteLunaClientCommandOutput) => void),
    cb?: (err: any, data?: DeleteLunaClientCommandOutput) => void
  ): Promise<DeleteLunaClientCommandOutput> | void {
    const command = new DeleteLunaClientCommand(args);
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
   * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For
   *       more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM
   *       Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS
   *       CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p>
   *          <p>
   *             <b>For information about the current version of AWS
   *       CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the
   *       <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>,
   *       and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API
   *       Reference</a>.</p>
   *          <p>Retrieves information about a high-availability partition group.</p>
   */
  public describeHapg(
    args: DescribeHapgCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeHapgCommandOutput>;
  public describeHapg(args: DescribeHapgCommandInput, cb: (err: any, data?: DescribeHapgCommandOutput) => void): void;
  public describeHapg(
    args: DescribeHapgCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeHapgCommandOutput) => void
  ): void;
  public describeHapg(
    args: DescribeHapgCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeHapgCommandOutput) => void),
    cb?: (err: any, data?: DescribeHapgCommandOutput) => void
  ): Promise<DescribeHapgCommandOutput> | void {
    const command = new DescribeHapgCommand(args);
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
   * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For
   *       more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM
   *       Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS
   *       CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p>
   *          <p>
   *             <b>For information about the current version of AWS
   *       CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the
   *       <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>,
   *       and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API
   *       Reference</a>.</p>
   *          <p>Retrieves information about an HSM. You can identify the HSM by its ARN or its serial
   *       number.</p>
   */
  public describeHsm(args: DescribeHsmCommandInput, options?: __HttpHandlerOptions): Promise<DescribeHsmCommandOutput>;
  public describeHsm(args: DescribeHsmCommandInput, cb: (err: any, data?: DescribeHsmCommandOutput) => void): void;
  public describeHsm(
    args: DescribeHsmCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeHsmCommandOutput) => void
  ): void;
  public describeHsm(
    args: DescribeHsmCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeHsmCommandOutput) => void),
    cb?: (err: any, data?: DescribeHsmCommandOutput) => void
  ): Promise<DescribeHsmCommandOutput> | void {
    const command = new DescribeHsmCommand(args);
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
   * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For
   *       more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM
   *       Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS
   *       CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p>
   *          <p>
   *             <b>For information about the current version of AWS
   *       CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the
   *       <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>,
   *       and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API
   *       Reference</a>.</p>
   *          <p>Retrieves information about an HSM client.</p>
   */
  public describeLunaClient(
    args: DescribeLunaClientCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLunaClientCommandOutput>;
  public describeLunaClient(
    args: DescribeLunaClientCommandInput,
    cb: (err: any, data?: DescribeLunaClientCommandOutput) => void
  ): void;
  public describeLunaClient(
    args: DescribeLunaClientCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLunaClientCommandOutput) => void
  ): void;
  public describeLunaClient(
    args: DescribeLunaClientCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeLunaClientCommandOutput) => void),
    cb?: (err: any, data?: DescribeLunaClientCommandOutput) => void
  ): Promise<DescribeLunaClientCommandOutput> | void {
    const command = new DescribeLunaClientCommand(args);
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
   * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For
   *       more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM
   *       Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS
   *       CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p>
   *          <p>
   *             <b>For information about the current version of AWS
   *       CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the
   *       <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>,
   *       and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API
   *       Reference</a>.</p>
   *          <p>Gets the configuration files necessary to connect to all high availability partition
   *       groups the client is associated with.</p>
   */
  public getConfig(args: GetConfigCommandInput, options?: __HttpHandlerOptions): Promise<GetConfigCommandOutput>;
  public getConfig(args: GetConfigCommandInput, cb: (err: any, data?: GetConfigCommandOutput) => void): void;
  public getConfig(
    args: GetConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConfigCommandOutput) => void
  ): void;
  public getConfig(
    args: GetConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetConfigCommandOutput) => void),
    cb?: (err: any, data?: GetConfigCommandOutput) => void
  ): Promise<GetConfigCommandOutput> | void {
    const command = new GetConfigCommand(args);
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
   * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For
   *       more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM
   *       Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS
   *       CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p>
   *          <p>
   *             <b>For information about the current version of AWS
   *       CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the
   *       <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>,
   *       and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API
   *       Reference</a>.</p>
   *          <p>Lists the Availability Zones that have available AWS CloudHSM capacity.</p>
   */
  public listAvailableZones(
    args: ListAvailableZonesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAvailableZonesCommandOutput>;
  public listAvailableZones(
    args: ListAvailableZonesCommandInput,
    cb: (err: any, data?: ListAvailableZonesCommandOutput) => void
  ): void;
  public listAvailableZones(
    args: ListAvailableZonesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAvailableZonesCommandOutput) => void
  ): void;
  public listAvailableZones(
    args: ListAvailableZonesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAvailableZonesCommandOutput) => void),
    cb?: (err: any, data?: ListAvailableZonesCommandOutput) => void
  ): Promise<ListAvailableZonesCommandOutput> | void {
    const command = new ListAvailableZonesCommand(args);
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
   * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For
   *       more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM
   *       Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS
   *       CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p>
   *          <p>
   *             <b>For information about the current version of AWS
   *       CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the
   *       <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>,
   *       and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API
   *       Reference</a>.</p>
   *          <p>Lists the high-availability partition groups for the account.</p>
   *          <p>This operation supports pagination with the use of the <code>NextToken</code> member.
   *       If more results are available, the <code>NextToken</code> member of the response contains a
   *       token that you pass in the next call to <code>ListHapgs</code> to retrieve the next set of
   *       items.</p>
   */
  public listHapgs(args: ListHapgsCommandInput, options?: __HttpHandlerOptions): Promise<ListHapgsCommandOutput>;
  public listHapgs(args: ListHapgsCommandInput, cb: (err: any, data?: ListHapgsCommandOutput) => void): void;
  public listHapgs(
    args: ListHapgsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListHapgsCommandOutput) => void
  ): void;
  public listHapgs(
    args: ListHapgsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListHapgsCommandOutput) => void),
    cb?: (err: any, data?: ListHapgsCommandOutput) => void
  ): Promise<ListHapgsCommandOutput> | void {
    const command = new ListHapgsCommand(args);
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
   * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For
   *       more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM
   *       Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS
   *       CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p>
   *          <p>
   *             <b>For information about the current version of AWS
   *       CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the
   *       <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>,
   *       and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API
   *       Reference</a>.</p>
   *          <p>Retrieves the identifiers of all of the HSMs provisioned for the current
   *       customer.</p>
   *          <p>This operation supports pagination with the use of the <code>NextToken</code> member.
   *       If more results are available, the <code>NextToken</code> member of the response contains a
   *       token that you pass in the next call to <code>ListHsms</code> to retrieve the next set of
   *       items.</p>
   */
  public listHsms(args: ListHsmsCommandInput, options?: __HttpHandlerOptions): Promise<ListHsmsCommandOutput>;
  public listHsms(args: ListHsmsCommandInput, cb: (err: any, data?: ListHsmsCommandOutput) => void): void;
  public listHsms(
    args: ListHsmsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListHsmsCommandOutput) => void
  ): void;
  public listHsms(
    args: ListHsmsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListHsmsCommandOutput) => void),
    cb?: (err: any, data?: ListHsmsCommandOutput) => void
  ): Promise<ListHsmsCommandOutput> | void {
    const command = new ListHsmsCommand(args);
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
   * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For
   *       more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM
   *       Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS
   *       CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p>
   *          <p>
   *             <b>For information about the current version of AWS
   *       CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the
   *       <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>,
   *       and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API
   *       Reference</a>.</p>
   *          <p>Lists all of the clients.</p>
   *          <p>This operation supports pagination with the use of the <code>NextToken</code> member.
   *       If more results are available, the <code>NextToken</code> member of the response contains a
   *       token that you pass in the next call to <code>ListLunaClients</code> to retrieve the next set
   *       of items.</p>
   */
  public listLunaClients(
    args: ListLunaClientsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLunaClientsCommandOutput>;
  public listLunaClients(
    args: ListLunaClientsCommandInput,
    cb: (err: any, data?: ListLunaClientsCommandOutput) => void
  ): void;
  public listLunaClients(
    args: ListLunaClientsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLunaClientsCommandOutput) => void
  ): void;
  public listLunaClients(
    args: ListLunaClientsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListLunaClientsCommandOutput) => void),
    cb?: (err: any, data?: ListLunaClientsCommandOutput) => void
  ): Promise<ListLunaClientsCommandOutput> | void {
    const command = new ListLunaClientsCommand(args);
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
   * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For
   *       more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM
   *       Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS
   *       CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p>
   *          <p>
   *             <b>For information about the current version of AWS
   *       CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the
   *       <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>,
   *       and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API
   *       Reference</a>.</p>
   *          <p>Returns a list of all tags for the specified AWS CloudHSM resource.</p>
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
   * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For
   *       more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM
   *       Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS
   *       CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p>
   *          <p>
   *             <b>For information about the current version of AWS
   *       CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the
   *       <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>,
   *       and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API
   *       Reference</a>.</p>
   *          <p>Modifies an existing high-availability partition group.</p>
   */
  public modifyHapg(args: ModifyHapgCommandInput, options?: __HttpHandlerOptions): Promise<ModifyHapgCommandOutput>;
  public modifyHapg(args: ModifyHapgCommandInput, cb: (err: any, data?: ModifyHapgCommandOutput) => void): void;
  public modifyHapg(
    args: ModifyHapgCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyHapgCommandOutput) => void
  ): void;
  public modifyHapg(
    args: ModifyHapgCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyHapgCommandOutput) => void),
    cb?: (err: any, data?: ModifyHapgCommandOutput) => void
  ): Promise<ModifyHapgCommandOutput> | void {
    const command = new ModifyHapgCommand(args);
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
   * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For
   *       more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM
   *       Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS
   *       CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p>
   *          <p>
   *             <b>For information about the current version of AWS
   *       CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the
   *       <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>,
   *       and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API
   *       Reference</a>.</p>
   *          <p>Modifies an HSM.</p>
   *          <important>
   *             <p>This operation can result in the HSM being offline for up to 15 minutes while the AWS
   *         CloudHSM service is reconfigured. If you are modifying a production HSM, you should ensure
   *         that your AWS CloudHSM service is configured for high availability, and consider executing this
   *         operation during a maintenance window.</p>
   *          </important>
   */
  public modifyHsm(args: ModifyHsmCommandInput, options?: __HttpHandlerOptions): Promise<ModifyHsmCommandOutput>;
  public modifyHsm(args: ModifyHsmCommandInput, cb: (err: any, data?: ModifyHsmCommandOutput) => void): void;
  public modifyHsm(
    args: ModifyHsmCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyHsmCommandOutput) => void
  ): void;
  public modifyHsm(
    args: ModifyHsmCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyHsmCommandOutput) => void),
    cb?: (err: any, data?: ModifyHsmCommandOutput) => void
  ): Promise<ModifyHsmCommandOutput> | void {
    const command = new ModifyHsmCommand(args);
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
   * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For
   *       more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM
   *       Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS
   *       CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p>
   *          <p>
   *             <b>For information about the current version of AWS
   *       CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the
   *       <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>,
   *       and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API
   *       Reference</a>.</p>
   *          <p>Modifies the certificate used by the client.</p>
   *          <p>This action can potentially start a workflow to install the new certificate on the
   *       client's HSMs.</p>
   */
  public modifyLunaClient(
    args: ModifyLunaClientCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyLunaClientCommandOutput>;
  public modifyLunaClient(
    args: ModifyLunaClientCommandInput,
    cb: (err: any, data?: ModifyLunaClientCommandOutput) => void
  ): void;
  public modifyLunaClient(
    args: ModifyLunaClientCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyLunaClientCommandOutput) => void
  ): void;
  public modifyLunaClient(
    args: ModifyLunaClientCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyLunaClientCommandOutput) => void),
    cb?: (err: any, data?: ModifyLunaClientCommandOutput) => void
  ): Promise<ModifyLunaClientCommandOutput> | void {
    const command = new ModifyLunaClientCommand(args);
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
   * <p>This is documentation for <b>AWS CloudHSM Classic</b>. For
   *       more information, see <a href="http://aws.amazon.com/cloudhsm/faqs-classic/">AWS CloudHSM
   *       Classic FAQs</a>, the <a href="https://docs.aws.amazon.com/cloudhsm/classic/userguide/">AWS
   *       CloudHSM Classic User Guide</a>, and the <a href="https://docs.aws.amazon.com/cloudhsm/classic/APIReference/">AWS CloudHSM Classic API Reference</a>.</p>
   *          <p>
   *             <b>For information about the current version of AWS
   *       CloudHSM</b>, see <a href="http://aws.amazon.com/cloudhsm/">AWS CloudHSM</a>, the
   *       <a href="https://docs.aws.amazon.com/cloudhsm/latest/userguide/">AWS CloudHSM User Guide</a>,
   *       and the <a href="https://docs.aws.amazon.com/cloudhsm/latest/APIReference/">AWS CloudHSM API
   *       Reference</a>.</p>
   *          <p>Removes one or more tags from the specified AWS CloudHSM resource.</p>
   *          <p>To remove a tag, specify only the tag key to remove (not the value). To overwrite the
   *       value for an existing tag, use <a>AddTagsToResource</a>.</p>
   */
  public removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveTagsFromResourceCommandOutput>;
  public removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    cb: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void
  ): void;
  public removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void
  ): void;
  public removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveTagsFromResourceCommandOutput) => void),
    cb?: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void
  ): Promise<RemoveTagsFromResourceCommandOutput> | void {
    const command = new RemoveTagsFromResourceCommand(args);
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
