// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { CloudHSMClient, CloudHSMClientConfig } from "./CloudHSMClient";
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

const commands = {
  AddTagsToResourceCommand,
  CreateHapgCommand,
  CreateHsmCommand,
  CreateLunaClientCommand,
  DeleteHapgCommand,
  DeleteHsmCommand,
  DeleteLunaClientCommand,
  DescribeHapgCommand,
  DescribeHsmCommand,
  DescribeLunaClientCommand,
  GetConfigCommand,
  ListAvailableZonesCommand,
  ListHapgsCommand,
  ListHsmsCommand,
  ListLunaClientsCommand,
  ListTagsForResourceCommand,
  ModifyHapgCommand,
  ModifyHsmCommand,
  ModifyLunaClientCommand,
  RemoveTagsFromResourceCommand,
};

export interface CloudHSM {
  /**
   * @see {@link AddTagsToResourceCommand}
   */
  addTagsToResource(
    args: AddTagsToResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddTagsToResourceCommandOutput>;
  addTagsToResource(
    args: AddTagsToResourceCommandInput,
    cb: (err: any, data?: AddTagsToResourceCommandOutput) => void
  ): void;
  addTagsToResource(
    args: AddTagsToResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddTagsToResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateHapgCommand}
   */
  createHapg(args: CreateHapgCommandInput, options?: __HttpHandlerOptions): Promise<CreateHapgCommandOutput>;
  createHapg(args: CreateHapgCommandInput, cb: (err: any, data?: CreateHapgCommandOutput) => void): void;
  createHapg(
    args: CreateHapgCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateHapgCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateHsmCommand}
   */
  createHsm(args: CreateHsmCommandInput, options?: __HttpHandlerOptions): Promise<CreateHsmCommandOutput>;
  createHsm(args: CreateHsmCommandInput, cb: (err: any, data?: CreateHsmCommandOutput) => void): void;
  createHsm(
    args: CreateHsmCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateHsmCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLunaClientCommand}
   */
  createLunaClient(
    args: CreateLunaClientCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLunaClientCommandOutput>;
  createLunaClient(
    args: CreateLunaClientCommandInput,
    cb: (err: any, data?: CreateLunaClientCommandOutput) => void
  ): void;
  createLunaClient(
    args: CreateLunaClientCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLunaClientCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteHapgCommand}
   */
  deleteHapg(args: DeleteHapgCommandInput, options?: __HttpHandlerOptions): Promise<DeleteHapgCommandOutput>;
  deleteHapg(args: DeleteHapgCommandInput, cb: (err: any, data?: DeleteHapgCommandOutput) => void): void;
  deleteHapg(
    args: DeleteHapgCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteHapgCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteHsmCommand}
   */
  deleteHsm(args: DeleteHsmCommandInput, options?: __HttpHandlerOptions): Promise<DeleteHsmCommandOutput>;
  deleteHsm(args: DeleteHsmCommandInput, cb: (err: any, data?: DeleteHsmCommandOutput) => void): void;
  deleteHsm(
    args: DeleteHsmCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteHsmCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLunaClientCommand}
   */
  deleteLunaClient(
    args: DeleteLunaClientCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLunaClientCommandOutput>;
  deleteLunaClient(
    args: DeleteLunaClientCommandInput,
    cb: (err: any, data?: DeleteLunaClientCommandOutput) => void
  ): void;
  deleteLunaClient(
    args: DeleteLunaClientCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLunaClientCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeHapgCommand}
   */
  describeHapg(args: DescribeHapgCommandInput, options?: __HttpHandlerOptions): Promise<DescribeHapgCommandOutput>;
  describeHapg(args: DescribeHapgCommandInput, cb: (err: any, data?: DescribeHapgCommandOutput) => void): void;
  describeHapg(
    args: DescribeHapgCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeHapgCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeHsmCommand}
   */
  describeHsm(args: DescribeHsmCommandInput, options?: __HttpHandlerOptions): Promise<DescribeHsmCommandOutput>;
  describeHsm(args: DescribeHsmCommandInput, cb: (err: any, data?: DescribeHsmCommandOutput) => void): void;
  describeHsm(
    args: DescribeHsmCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeHsmCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLunaClientCommand}
   */
  describeLunaClient(
    args: DescribeLunaClientCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLunaClientCommandOutput>;
  describeLunaClient(
    args: DescribeLunaClientCommandInput,
    cb: (err: any, data?: DescribeLunaClientCommandOutput) => void
  ): void;
  describeLunaClient(
    args: DescribeLunaClientCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLunaClientCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConfigCommand}
   */
  getConfig(args: GetConfigCommandInput, options?: __HttpHandlerOptions): Promise<GetConfigCommandOutput>;
  getConfig(args: GetConfigCommandInput, cb: (err: any, data?: GetConfigCommandOutput) => void): void;
  getConfig(
    args: GetConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAvailableZonesCommand}
   */
  listAvailableZones(
    args: ListAvailableZonesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAvailableZonesCommandOutput>;
  listAvailableZones(
    args: ListAvailableZonesCommandInput,
    cb: (err: any, data?: ListAvailableZonesCommandOutput) => void
  ): void;
  listAvailableZones(
    args: ListAvailableZonesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAvailableZonesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListHapgsCommand}
   */
  listHapgs(args: ListHapgsCommandInput, options?: __HttpHandlerOptions): Promise<ListHapgsCommandOutput>;
  listHapgs(args: ListHapgsCommandInput, cb: (err: any, data?: ListHapgsCommandOutput) => void): void;
  listHapgs(
    args: ListHapgsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListHapgsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListHsmsCommand}
   */
  listHsms(args: ListHsmsCommandInput, options?: __HttpHandlerOptions): Promise<ListHsmsCommandOutput>;
  listHsms(args: ListHsmsCommandInput, cb: (err: any, data?: ListHsmsCommandOutput) => void): void;
  listHsms(
    args: ListHsmsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListHsmsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLunaClientsCommand}
   */
  listLunaClients(
    args: ListLunaClientsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLunaClientsCommandOutput>;
  listLunaClients(args: ListLunaClientsCommandInput, cb: (err: any, data?: ListLunaClientsCommandOutput) => void): void;
  listLunaClients(
    args: ListLunaClientsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLunaClientsCommandOutput) => void
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
   * @see {@link ModifyHapgCommand}
   */
  modifyHapg(args: ModifyHapgCommandInput, options?: __HttpHandlerOptions): Promise<ModifyHapgCommandOutput>;
  modifyHapg(args: ModifyHapgCommandInput, cb: (err: any, data?: ModifyHapgCommandOutput) => void): void;
  modifyHapg(
    args: ModifyHapgCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyHapgCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyHsmCommand}
   */
  modifyHsm(args: ModifyHsmCommandInput, options?: __HttpHandlerOptions): Promise<ModifyHsmCommandOutput>;
  modifyHsm(args: ModifyHsmCommandInput, cb: (err: any, data?: ModifyHsmCommandOutput) => void): void;
  modifyHsm(
    args: ModifyHsmCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyHsmCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyLunaClientCommand}
   */
  modifyLunaClient(
    args: ModifyLunaClientCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyLunaClientCommandOutput>;
  modifyLunaClient(
    args: ModifyLunaClientCommandInput,
    cb: (err: any, data?: ModifyLunaClientCommandOutput) => void
  ): void;
  modifyLunaClient(
    args: ModifyLunaClientCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyLunaClientCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveTagsFromResourceCommand}
   */
  removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveTagsFromResourceCommandOutput>;
  removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    cb: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void
  ): void;
  removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void
  ): void;
}

/**
 * @public
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
export class CloudHSM extends CloudHSMClient implements CloudHSM {}
createAggregatedClient(commands, CloudHSM);
