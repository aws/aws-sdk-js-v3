// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, MetricsRecorder as __MetricsRecorder } from "@smithy/types";

import { CloudHSMClient } from "./CloudHSMClient";
import {
  type AddTagsToResourceCommandInput,
  type AddTagsToResourceCommandOutput,
  AddTagsToResourceCommand,
} from "./commands/AddTagsToResourceCommand";
import {
  type CreateHapgCommandInput,
  type CreateHapgCommandOutput,
  CreateHapgCommand,
} from "./commands/CreateHapgCommand";
import { type CreateHsmCommandInput, type CreateHsmCommandOutput, CreateHsmCommand } from "./commands/CreateHsmCommand";
import {
  type CreateLunaClientCommandInput,
  type CreateLunaClientCommandOutput,
  CreateLunaClientCommand,
} from "./commands/CreateLunaClientCommand";
import {
  type DeleteHapgCommandInput,
  type DeleteHapgCommandOutput,
  DeleteHapgCommand,
} from "./commands/DeleteHapgCommand";
import { type DeleteHsmCommandInput, type DeleteHsmCommandOutput, DeleteHsmCommand } from "./commands/DeleteHsmCommand";
import {
  type DeleteLunaClientCommandInput,
  type DeleteLunaClientCommandOutput,
  DeleteLunaClientCommand,
} from "./commands/DeleteLunaClientCommand";
import {
  type DescribeHapgCommandInput,
  type DescribeHapgCommandOutput,
  DescribeHapgCommand,
} from "./commands/DescribeHapgCommand";
import {
  type DescribeHsmCommandInput,
  type DescribeHsmCommandOutput,
  DescribeHsmCommand,
} from "./commands/DescribeHsmCommand";
import {
  type DescribeLunaClientCommandInput,
  type DescribeLunaClientCommandOutput,
  DescribeLunaClientCommand,
} from "./commands/DescribeLunaClientCommand";
import { type GetConfigCommandInput, type GetConfigCommandOutput, GetConfigCommand } from "./commands/GetConfigCommand";
import {
  type ListAvailableZonesCommandInput,
  type ListAvailableZonesCommandOutput,
  ListAvailableZonesCommand,
} from "./commands/ListAvailableZonesCommand";
import { type ListHapgsCommandInput, type ListHapgsCommandOutput, ListHapgsCommand } from "./commands/ListHapgsCommand";
import { type ListHsmsCommandInput, type ListHsmsCommandOutput, ListHsmsCommand } from "./commands/ListHsmsCommand";
import {
  type ListLunaClientsCommandInput,
  type ListLunaClientsCommandOutput,
  ListLunaClientsCommand,
} from "./commands/ListLunaClientsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ModifyHapgCommandInput,
  type ModifyHapgCommandOutput,
  ModifyHapgCommand,
} from "./commands/ModifyHapgCommand";
import { type ModifyHsmCommandInput, type ModifyHsmCommandOutput, ModifyHsmCommand } from "./commands/ModifyHsmCommand";
import {
  type ModifyLunaClientCommandInput,
  type ModifyLunaClientCommandOutput,
  ModifyLunaClientCommand,
} from "./commands/ModifyLunaClientCommand";
import {
  type RemoveTagsFromResourceCommandInput,
  type RemoveTagsFromResourceCommandOutput,
  RemoveTagsFromResourceCommand,
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

/**
 * @public
 */
export interface CloudHSMRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface CloudHSM {
  /**
   * @see {@link AddTagsToResourceCommand}
   */
  addTagsToResource(
    args: AddTagsToResourceCommandInput,
    options?: CloudHSMRequestOptions
  ): Promise<AddTagsToResourceCommandOutput>;
  addTagsToResource(
    args: AddTagsToResourceCommandInput,
    cb: (err: any, data?: AddTagsToResourceCommandOutput) => void
  ): void;
  addTagsToResource(
    args: AddTagsToResourceCommandInput,
    options: CloudHSMRequestOptions,
    cb: (err: any, data?: AddTagsToResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateHapgCommand}
   */
  createHapg(
    args: CreateHapgCommandInput,
    options?: CloudHSMRequestOptions
  ): Promise<CreateHapgCommandOutput>;
  createHapg(
    args: CreateHapgCommandInput,
    cb: (err: any, data?: CreateHapgCommandOutput) => void
  ): void;
  createHapg(
    args: CreateHapgCommandInput,
    options: CloudHSMRequestOptions,
    cb: (err: any, data?: CreateHapgCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateHsmCommand}
   */
  createHsm(
    args: CreateHsmCommandInput,
    options?: CloudHSMRequestOptions
  ): Promise<CreateHsmCommandOutput>;
  createHsm(
    args: CreateHsmCommandInput,
    cb: (err: any, data?: CreateHsmCommandOutput) => void
  ): void;
  createHsm(
    args: CreateHsmCommandInput,
    options: CloudHSMRequestOptions,
    cb: (err: any, data?: CreateHsmCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLunaClientCommand}
   */
  createLunaClient(
    args: CreateLunaClientCommandInput,
    options?: CloudHSMRequestOptions
  ): Promise<CreateLunaClientCommandOutput>;
  createLunaClient(
    args: CreateLunaClientCommandInput,
    cb: (err: any, data?: CreateLunaClientCommandOutput) => void
  ): void;
  createLunaClient(
    args: CreateLunaClientCommandInput,
    options: CloudHSMRequestOptions,
    cb: (err: any, data?: CreateLunaClientCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteHapgCommand}
   */
  deleteHapg(
    args: DeleteHapgCommandInput,
    options?: CloudHSMRequestOptions
  ): Promise<DeleteHapgCommandOutput>;
  deleteHapg(
    args: DeleteHapgCommandInput,
    cb: (err: any, data?: DeleteHapgCommandOutput) => void
  ): void;
  deleteHapg(
    args: DeleteHapgCommandInput,
    options: CloudHSMRequestOptions,
    cb: (err: any, data?: DeleteHapgCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteHsmCommand}
   */
  deleteHsm(
    args: DeleteHsmCommandInput,
    options?: CloudHSMRequestOptions
  ): Promise<DeleteHsmCommandOutput>;
  deleteHsm(
    args: DeleteHsmCommandInput,
    cb: (err: any, data?: DeleteHsmCommandOutput) => void
  ): void;
  deleteHsm(
    args: DeleteHsmCommandInput,
    options: CloudHSMRequestOptions,
    cb: (err: any, data?: DeleteHsmCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLunaClientCommand}
   */
  deleteLunaClient(
    args: DeleteLunaClientCommandInput,
    options?: CloudHSMRequestOptions
  ): Promise<DeleteLunaClientCommandOutput>;
  deleteLunaClient(
    args: DeleteLunaClientCommandInput,
    cb: (err: any, data?: DeleteLunaClientCommandOutput) => void
  ): void;
  deleteLunaClient(
    args: DeleteLunaClientCommandInput,
    options: CloudHSMRequestOptions,
    cb: (err: any, data?: DeleteLunaClientCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeHapgCommand}
   */
  describeHapg(
    args: DescribeHapgCommandInput,
    options?: CloudHSMRequestOptions
  ): Promise<DescribeHapgCommandOutput>;
  describeHapg(
    args: DescribeHapgCommandInput,
    cb: (err: any, data?: DescribeHapgCommandOutput) => void
  ): void;
  describeHapg(
    args: DescribeHapgCommandInput,
    options: CloudHSMRequestOptions,
    cb: (err: any, data?: DescribeHapgCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeHsmCommand}
   */
  describeHsm(): Promise<DescribeHsmCommandOutput>;
  describeHsm(
    args: DescribeHsmCommandInput,
    options?: CloudHSMRequestOptions
  ): Promise<DescribeHsmCommandOutput>;
  describeHsm(
    args: DescribeHsmCommandInput,
    cb: (err: any, data?: DescribeHsmCommandOutput) => void
  ): void;
  describeHsm(
    args: DescribeHsmCommandInput,
    options: CloudHSMRequestOptions,
    cb: (err: any, data?: DescribeHsmCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLunaClientCommand}
   */
  describeLunaClient(): Promise<DescribeLunaClientCommandOutput>;
  describeLunaClient(
    args: DescribeLunaClientCommandInput,
    options?: CloudHSMRequestOptions
  ): Promise<DescribeLunaClientCommandOutput>;
  describeLunaClient(
    args: DescribeLunaClientCommandInput,
    cb: (err: any, data?: DescribeLunaClientCommandOutput) => void
  ): void;
  describeLunaClient(
    args: DescribeLunaClientCommandInput,
    options: CloudHSMRequestOptions,
    cb: (err: any, data?: DescribeLunaClientCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConfigCommand}
   */
  getConfig(
    args: GetConfigCommandInput,
    options?: CloudHSMRequestOptions
  ): Promise<GetConfigCommandOutput>;
  getConfig(
    args: GetConfigCommandInput,
    cb: (err: any, data?: GetConfigCommandOutput) => void
  ): void;
  getConfig(
    args: GetConfigCommandInput,
    options: CloudHSMRequestOptions,
    cb: (err: any, data?: GetConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAvailableZonesCommand}
   */
  listAvailableZones(): Promise<ListAvailableZonesCommandOutput>;
  listAvailableZones(
    args: ListAvailableZonesCommandInput,
    options?: CloudHSMRequestOptions
  ): Promise<ListAvailableZonesCommandOutput>;
  listAvailableZones(
    args: ListAvailableZonesCommandInput,
    cb: (err: any, data?: ListAvailableZonesCommandOutput) => void
  ): void;
  listAvailableZones(
    args: ListAvailableZonesCommandInput,
    options: CloudHSMRequestOptions,
    cb: (err: any, data?: ListAvailableZonesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListHapgsCommand}
   */
  listHapgs(): Promise<ListHapgsCommandOutput>;
  listHapgs(
    args: ListHapgsCommandInput,
    options?: CloudHSMRequestOptions
  ): Promise<ListHapgsCommandOutput>;
  listHapgs(
    args: ListHapgsCommandInput,
    cb: (err: any, data?: ListHapgsCommandOutput) => void
  ): void;
  listHapgs(
    args: ListHapgsCommandInput,
    options: CloudHSMRequestOptions,
    cb: (err: any, data?: ListHapgsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListHsmsCommand}
   */
  listHsms(): Promise<ListHsmsCommandOutput>;
  listHsms(
    args: ListHsmsCommandInput,
    options?: CloudHSMRequestOptions
  ): Promise<ListHsmsCommandOutput>;
  listHsms(
    args: ListHsmsCommandInput,
    cb: (err: any, data?: ListHsmsCommandOutput) => void
  ): void;
  listHsms(
    args: ListHsmsCommandInput,
    options: CloudHSMRequestOptions,
    cb: (err: any, data?: ListHsmsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLunaClientsCommand}
   */
  listLunaClients(): Promise<ListLunaClientsCommandOutput>;
  listLunaClients(
    args: ListLunaClientsCommandInput,
    options?: CloudHSMRequestOptions
  ): Promise<ListLunaClientsCommandOutput>;
  listLunaClients(
    args: ListLunaClientsCommandInput,
    cb: (err: any, data?: ListLunaClientsCommandOutput) => void
  ): void;
  listLunaClients(
    args: ListLunaClientsCommandInput,
    options: CloudHSMRequestOptions,
    cb: (err: any, data?: ListLunaClientsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: CloudHSMRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: CloudHSMRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyHapgCommand}
   */
  modifyHapg(
    args: ModifyHapgCommandInput,
    options?: CloudHSMRequestOptions
  ): Promise<ModifyHapgCommandOutput>;
  modifyHapg(
    args: ModifyHapgCommandInput,
    cb: (err: any, data?: ModifyHapgCommandOutput) => void
  ): void;
  modifyHapg(
    args: ModifyHapgCommandInput,
    options: CloudHSMRequestOptions,
    cb: (err: any, data?: ModifyHapgCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyHsmCommand}
   */
  modifyHsm(
    args: ModifyHsmCommandInput,
    options?: CloudHSMRequestOptions
  ): Promise<ModifyHsmCommandOutput>;
  modifyHsm(
    args: ModifyHsmCommandInput,
    cb: (err: any, data?: ModifyHsmCommandOutput) => void
  ): void;
  modifyHsm(
    args: ModifyHsmCommandInput,
    options: CloudHSMRequestOptions,
    cb: (err: any, data?: ModifyHsmCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyLunaClientCommand}
   */
  modifyLunaClient(
    args: ModifyLunaClientCommandInput,
    options?: CloudHSMRequestOptions
  ): Promise<ModifyLunaClientCommandOutput>;
  modifyLunaClient(
    args: ModifyLunaClientCommandInput,
    cb: (err: any, data?: ModifyLunaClientCommandOutput) => void
  ): void;
  modifyLunaClient(
    args: ModifyLunaClientCommandInput,
    options: CloudHSMRequestOptions,
    cb: (err: any, data?: ModifyLunaClientCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveTagsFromResourceCommand}
   */
  removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    options?: CloudHSMRequestOptions
  ): Promise<RemoveTagsFromResourceCommandOutput>;
  removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    cb: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void
  ): void;
  removeTagsFromResource(
    args: RemoveTagsFromResourceCommandInput,
    options: CloudHSMRequestOptions,
    cb: (err: any, data?: RemoveTagsFromResourceCommandOutput) => void
  ): void;
}

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
 * @public
 */
export class CloudHSM extends CloudHSMClient implements CloudHSM {}
createAggregatedClient(commands, CloudHSM);
