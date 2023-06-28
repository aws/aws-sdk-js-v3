// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AddCustomRoutingEndpointsCommand,
  AddCustomRoutingEndpointsCommandInput,
  AddCustomRoutingEndpointsCommandOutput,
} from "./commands/AddCustomRoutingEndpointsCommand";
import {
  AddEndpointsCommand,
  AddEndpointsCommandInput,
  AddEndpointsCommandOutput,
} from "./commands/AddEndpointsCommand";
import {
  AdvertiseByoipCidrCommand,
  AdvertiseByoipCidrCommandInput,
  AdvertiseByoipCidrCommandOutput,
} from "./commands/AdvertiseByoipCidrCommand";
import {
  AllowCustomRoutingTrafficCommand,
  AllowCustomRoutingTrafficCommandInput,
  AllowCustomRoutingTrafficCommandOutput,
} from "./commands/AllowCustomRoutingTrafficCommand";
import {
  CreateAcceleratorCommand,
  CreateAcceleratorCommandInput,
  CreateAcceleratorCommandOutput,
} from "./commands/CreateAcceleratorCommand";
import {
  CreateCustomRoutingAcceleratorCommand,
  CreateCustomRoutingAcceleratorCommandInput,
  CreateCustomRoutingAcceleratorCommandOutput,
} from "./commands/CreateCustomRoutingAcceleratorCommand";
import {
  CreateCustomRoutingEndpointGroupCommand,
  CreateCustomRoutingEndpointGroupCommandInput,
  CreateCustomRoutingEndpointGroupCommandOutput,
} from "./commands/CreateCustomRoutingEndpointGroupCommand";
import {
  CreateCustomRoutingListenerCommand,
  CreateCustomRoutingListenerCommandInput,
  CreateCustomRoutingListenerCommandOutput,
} from "./commands/CreateCustomRoutingListenerCommand";
import {
  CreateEndpointGroupCommand,
  CreateEndpointGroupCommandInput,
  CreateEndpointGroupCommandOutput,
} from "./commands/CreateEndpointGroupCommand";
import {
  CreateListenerCommand,
  CreateListenerCommandInput,
  CreateListenerCommandOutput,
} from "./commands/CreateListenerCommand";
import {
  DeleteAcceleratorCommand,
  DeleteAcceleratorCommandInput,
  DeleteAcceleratorCommandOutput,
} from "./commands/DeleteAcceleratorCommand";
import {
  DeleteCustomRoutingAcceleratorCommand,
  DeleteCustomRoutingAcceleratorCommandInput,
  DeleteCustomRoutingAcceleratorCommandOutput,
} from "./commands/DeleteCustomRoutingAcceleratorCommand";
import {
  DeleteCustomRoutingEndpointGroupCommand,
  DeleteCustomRoutingEndpointGroupCommandInput,
  DeleteCustomRoutingEndpointGroupCommandOutput,
} from "./commands/DeleteCustomRoutingEndpointGroupCommand";
import {
  DeleteCustomRoutingListenerCommand,
  DeleteCustomRoutingListenerCommandInput,
  DeleteCustomRoutingListenerCommandOutput,
} from "./commands/DeleteCustomRoutingListenerCommand";
import {
  DeleteEndpointGroupCommand,
  DeleteEndpointGroupCommandInput,
  DeleteEndpointGroupCommandOutput,
} from "./commands/DeleteEndpointGroupCommand";
import {
  DeleteListenerCommand,
  DeleteListenerCommandInput,
  DeleteListenerCommandOutput,
} from "./commands/DeleteListenerCommand";
import {
  DenyCustomRoutingTrafficCommand,
  DenyCustomRoutingTrafficCommandInput,
  DenyCustomRoutingTrafficCommandOutput,
} from "./commands/DenyCustomRoutingTrafficCommand";
import {
  DeprovisionByoipCidrCommand,
  DeprovisionByoipCidrCommandInput,
  DeprovisionByoipCidrCommandOutput,
} from "./commands/DeprovisionByoipCidrCommand";
import {
  DescribeAcceleratorAttributesCommand,
  DescribeAcceleratorAttributesCommandInput,
  DescribeAcceleratorAttributesCommandOutput,
} from "./commands/DescribeAcceleratorAttributesCommand";
import {
  DescribeAcceleratorCommand,
  DescribeAcceleratorCommandInput,
  DescribeAcceleratorCommandOutput,
} from "./commands/DescribeAcceleratorCommand";
import {
  DescribeCustomRoutingAcceleratorAttributesCommand,
  DescribeCustomRoutingAcceleratorAttributesCommandInput,
  DescribeCustomRoutingAcceleratorAttributesCommandOutput,
} from "./commands/DescribeCustomRoutingAcceleratorAttributesCommand";
import {
  DescribeCustomRoutingAcceleratorCommand,
  DescribeCustomRoutingAcceleratorCommandInput,
  DescribeCustomRoutingAcceleratorCommandOutput,
} from "./commands/DescribeCustomRoutingAcceleratorCommand";
import {
  DescribeCustomRoutingEndpointGroupCommand,
  DescribeCustomRoutingEndpointGroupCommandInput,
  DescribeCustomRoutingEndpointGroupCommandOutput,
} from "./commands/DescribeCustomRoutingEndpointGroupCommand";
import {
  DescribeCustomRoutingListenerCommand,
  DescribeCustomRoutingListenerCommandInput,
  DescribeCustomRoutingListenerCommandOutput,
} from "./commands/DescribeCustomRoutingListenerCommand";
import {
  DescribeEndpointGroupCommand,
  DescribeEndpointGroupCommandInput,
  DescribeEndpointGroupCommandOutput,
} from "./commands/DescribeEndpointGroupCommand";
import {
  DescribeListenerCommand,
  DescribeListenerCommandInput,
  DescribeListenerCommandOutput,
} from "./commands/DescribeListenerCommand";
import {
  ListAcceleratorsCommand,
  ListAcceleratorsCommandInput,
  ListAcceleratorsCommandOutput,
} from "./commands/ListAcceleratorsCommand";
import {
  ListByoipCidrsCommand,
  ListByoipCidrsCommandInput,
  ListByoipCidrsCommandOutput,
} from "./commands/ListByoipCidrsCommand";
import {
  ListCustomRoutingAcceleratorsCommand,
  ListCustomRoutingAcceleratorsCommandInput,
  ListCustomRoutingAcceleratorsCommandOutput,
} from "./commands/ListCustomRoutingAcceleratorsCommand";
import {
  ListCustomRoutingEndpointGroupsCommand,
  ListCustomRoutingEndpointGroupsCommandInput,
  ListCustomRoutingEndpointGroupsCommandOutput,
} from "./commands/ListCustomRoutingEndpointGroupsCommand";
import {
  ListCustomRoutingListenersCommand,
  ListCustomRoutingListenersCommandInput,
  ListCustomRoutingListenersCommandOutput,
} from "./commands/ListCustomRoutingListenersCommand";
import {
  ListCustomRoutingPortMappingsByDestinationCommand,
  ListCustomRoutingPortMappingsByDestinationCommandInput,
  ListCustomRoutingPortMappingsByDestinationCommandOutput,
} from "./commands/ListCustomRoutingPortMappingsByDestinationCommand";
import {
  ListCustomRoutingPortMappingsCommand,
  ListCustomRoutingPortMappingsCommandInput,
  ListCustomRoutingPortMappingsCommandOutput,
} from "./commands/ListCustomRoutingPortMappingsCommand";
import {
  ListEndpointGroupsCommand,
  ListEndpointGroupsCommandInput,
  ListEndpointGroupsCommandOutput,
} from "./commands/ListEndpointGroupsCommand";
import {
  ListListenersCommand,
  ListListenersCommandInput,
  ListListenersCommandOutput,
} from "./commands/ListListenersCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ProvisionByoipCidrCommand,
  ProvisionByoipCidrCommandInput,
  ProvisionByoipCidrCommandOutput,
} from "./commands/ProvisionByoipCidrCommand";
import {
  RemoveCustomRoutingEndpointsCommand,
  RemoveCustomRoutingEndpointsCommandInput,
  RemoveCustomRoutingEndpointsCommandOutput,
} from "./commands/RemoveCustomRoutingEndpointsCommand";
import {
  RemoveEndpointsCommand,
  RemoveEndpointsCommandInput,
  RemoveEndpointsCommandOutput,
} from "./commands/RemoveEndpointsCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateAcceleratorAttributesCommand,
  UpdateAcceleratorAttributesCommandInput,
  UpdateAcceleratorAttributesCommandOutput,
} from "./commands/UpdateAcceleratorAttributesCommand";
import {
  UpdateAcceleratorCommand,
  UpdateAcceleratorCommandInput,
  UpdateAcceleratorCommandOutput,
} from "./commands/UpdateAcceleratorCommand";
import {
  UpdateCustomRoutingAcceleratorAttributesCommand,
  UpdateCustomRoutingAcceleratorAttributesCommandInput,
  UpdateCustomRoutingAcceleratorAttributesCommandOutput,
} from "./commands/UpdateCustomRoutingAcceleratorAttributesCommand";
import {
  UpdateCustomRoutingAcceleratorCommand,
  UpdateCustomRoutingAcceleratorCommandInput,
  UpdateCustomRoutingAcceleratorCommandOutput,
} from "./commands/UpdateCustomRoutingAcceleratorCommand";
import {
  UpdateCustomRoutingListenerCommand,
  UpdateCustomRoutingListenerCommandInput,
  UpdateCustomRoutingListenerCommandOutput,
} from "./commands/UpdateCustomRoutingListenerCommand";
import {
  UpdateEndpointGroupCommand,
  UpdateEndpointGroupCommandInput,
  UpdateEndpointGroupCommandOutput,
} from "./commands/UpdateEndpointGroupCommand";
import {
  UpdateListenerCommand,
  UpdateListenerCommandInput,
  UpdateListenerCommandOutput,
} from "./commands/UpdateListenerCommand";
import {
  WithdrawByoipCidrCommand,
  WithdrawByoipCidrCommandInput,
  WithdrawByoipCidrCommandOutput,
} from "./commands/WithdrawByoipCidrCommand";
import { GlobalAcceleratorClient, GlobalAcceleratorClientConfig } from "./GlobalAcceleratorClient";

const commands = {
  AddCustomRoutingEndpointsCommand,
  AddEndpointsCommand,
  AdvertiseByoipCidrCommand,
  AllowCustomRoutingTrafficCommand,
  CreateAcceleratorCommand,
  CreateCustomRoutingAcceleratorCommand,
  CreateCustomRoutingEndpointGroupCommand,
  CreateCustomRoutingListenerCommand,
  CreateEndpointGroupCommand,
  CreateListenerCommand,
  DeleteAcceleratorCommand,
  DeleteCustomRoutingAcceleratorCommand,
  DeleteCustomRoutingEndpointGroupCommand,
  DeleteCustomRoutingListenerCommand,
  DeleteEndpointGroupCommand,
  DeleteListenerCommand,
  DenyCustomRoutingTrafficCommand,
  DeprovisionByoipCidrCommand,
  DescribeAcceleratorCommand,
  DescribeAcceleratorAttributesCommand,
  DescribeCustomRoutingAcceleratorCommand,
  DescribeCustomRoutingAcceleratorAttributesCommand,
  DescribeCustomRoutingEndpointGroupCommand,
  DescribeCustomRoutingListenerCommand,
  DescribeEndpointGroupCommand,
  DescribeListenerCommand,
  ListAcceleratorsCommand,
  ListByoipCidrsCommand,
  ListCustomRoutingAcceleratorsCommand,
  ListCustomRoutingEndpointGroupsCommand,
  ListCustomRoutingListenersCommand,
  ListCustomRoutingPortMappingsCommand,
  ListCustomRoutingPortMappingsByDestinationCommand,
  ListEndpointGroupsCommand,
  ListListenersCommand,
  ListTagsForResourceCommand,
  ProvisionByoipCidrCommand,
  RemoveCustomRoutingEndpointsCommand,
  RemoveEndpointsCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAcceleratorCommand,
  UpdateAcceleratorAttributesCommand,
  UpdateCustomRoutingAcceleratorCommand,
  UpdateCustomRoutingAcceleratorAttributesCommand,
  UpdateCustomRoutingListenerCommand,
  UpdateEndpointGroupCommand,
  UpdateListenerCommand,
  WithdrawByoipCidrCommand,
};

export interface GlobalAccelerator {
  /**
   * @see {@link AddCustomRoutingEndpointsCommand}
   */
  addCustomRoutingEndpoints(
    args: AddCustomRoutingEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddCustomRoutingEndpointsCommandOutput>;
  addCustomRoutingEndpoints(
    args: AddCustomRoutingEndpointsCommandInput,
    cb: (err: any, data?: AddCustomRoutingEndpointsCommandOutput) => void
  ): void;
  addCustomRoutingEndpoints(
    args: AddCustomRoutingEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddCustomRoutingEndpointsCommandOutput) => void
  ): void;

  /**
   * @see {@link AddEndpointsCommand}
   */
  addEndpoints(args: AddEndpointsCommandInput, options?: __HttpHandlerOptions): Promise<AddEndpointsCommandOutput>;
  addEndpoints(args: AddEndpointsCommandInput, cb: (err: any, data?: AddEndpointsCommandOutput) => void): void;
  addEndpoints(
    args: AddEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddEndpointsCommandOutput) => void
  ): void;

  /**
   * @see {@link AdvertiseByoipCidrCommand}
   */
  advertiseByoipCidr(
    args: AdvertiseByoipCidrCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AdvertiseByoipCidrCommandOutput>;
  advertiseByoipCidr(
    args: AdvertiseByoipCidrCommandInput,
    cb: (err: any, data?: AdvertiseByoipCidrCommandOutput) => void
  ): void;
  advertiseByoipCidr(
    args: AdvertiseByoipCidrCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdvertiseByoipCidrCommandOutput) => void
  ): void;

  /**
   * @see {@link AllowCustomRoutingTrafficCommand}
   */
  allowCustomRoutingTraffic(
    args: AllowCustomRoutingTrafficCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AllowCustomRoutingTrafficCommandOutput>;
  allowCustomRoutingTraffic(
    args: AllowCustomRoutingTrafficCommandInput,
    cb: (err: any, data?: AllowCustomRoutingTrafficCommandOutput) => void
  ): void;
  allowCustomRoutingTraffic(
    args: AllowCustomRoutingTrafficCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AllowCustomRoutingTrafficCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAcceleratorCommand}
   */
  createAccelerator(
    args: CreateAcceleratorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAcceleratorCommandOutput>;
  createAccelerator(
    args: CreateAcceleratorCommandInput,
    cb: (err: any, data?: CreateAcceleratorCommandOutput) => void
  ): void;
  createAccelerator(
    args: CreateAcceleratorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAcceleratorCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCustomRoutingAcceleratorCommand}
   */
  createCustomRoutingAccelerator(
    args: CreateCustomRoutingAcceleratorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCustomRoutingAcceleratorCommandOutput>;
  createCustomRoutingAccelerator(
    args: CreateCustomRoutingAcceleratorCommandInput,
    cb: (err: any, data?: CreateCustomRoutingAcceleratorCommandOutput) => void
  ): void;
  createCustomRoutingAccelerator(
    args: CreateCustomRoutingAcceleratorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCustomRoutingAcceleratorCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCustomRoutingEndpointGroupCommand}
   */
  createCustomRoutingEndpointGroup(
    args: CreateCustomRoutingEndpointGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCustomRoutingEndpointGroupCommandOutput>;
  createCustomRoutingEndpointGroup(
    args: CreateCustomRoutingEndpointGroupCommandInput,
    cb: (err: any, data?: CreateCustomRoutingEndpointGroupCommandOutput) => void
  ): void;
  createCustomRoutingEndpointGroup(
    args: CreateCustomRoutingEndpointGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCustomRoutingEndpointGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCustomRoutingListenerCommand}
   */
  createCustomRoutingListener(
    args: CreateCustomRoutingListenerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCustomRoutingListenerCommandOutput>;
  createCustomRoutingListener(
    args: CreateCustomRoutingListenerCommandInput,
    cb: (err: any, data?: CreateCustomRoutingListenerCommandOutput) => void
  ): void;
  createCustomRoutingListener(
    args: CreateCustomRoutingListenerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCustomRoutingListenerCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEndpointGroupCommand}
   */
  createEndpointGroup(
    args: CreateEndpointGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEndpointGroupCommandOutput>;
  createEndpointGroup(
    args: CreateEndpointGroupCommandInput,
    cb: (err: any, data?: CreateEndpointGroupCommandOutput) => void
  ): void;
  createEndpointGroup(
    args: CreateEndpointGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEndpointGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateListenerCommand}
   */
  createListener(
    args: CreateListenerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateListenerCommandOutput>;
  createListener(args: CreateListenerCommandInput, cb: (err: any, data?: CreateListenerCommandOutput) => void): void;
  createListener(
    args: CreateListenerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateListenerCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAcceleratorCommand}
   */
  deleteAccelerator(
    args: DeleteAcceleratorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAcceleratorCommandOutput>;
  deleteAccelerator(
    args: DeleteAcceleratorCommandInput,
    cb: (err: any, data?: DeleteAcceleratorCommandOutput) => void
  ): void;
  deleteAccelerator(
    args: DeleteAcceleratorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAcceleratorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCustomRoutingAcceleratorCommand}
   */
  deleteCustomRoutingAccelerator(
    args: DeleteCustomRoutingAcceleratorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCustomRoutingAcceleratorCommandOutput>;
  deleteCustomRoutingAccelerator(
    args: DeleteCustomRoutingAcceleratorCommandInput,
    cb: (err: any, data?: DeleteCustomRoutingAcceleratorCommandOutput) => void
  ): void;
  deleteCustomRoutingAccelerator(
    args: DeleteCustomRoutingAcceleratorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCustomRoutingAcceleratorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCustomRoutingEndpointGroupCommand}
   */
  deleteCustomRoutingEndpointGroup(
    args: DeleteCustomRoutingEndpointGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCustomRoutingEndpointGroupCommandOutput>;
  deleteCustomRoutingEndpointGroup(
    args: DeleteCustomRoutingEndpointGroupCommandInput,
    cb: (err: any, data?: DeleteCustomRoutingEndpointGroupCommandOutput) => void
  ): void;
  deleteCustomRoutingEndpointGroup(
    args: DeleteCustomRoutingEndpointGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCustomRoutingEndpointGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCustomRoutingListenerCommand}
   */
  deleteCustomRoutingListener(
    args: DeleteCustomRoutingListenerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCustomRoutingListenerCommandOutput>;
  deleteCustomRoutingListener(
    args: DeleteCustomRoutingListenerCommandInput,
    cb: (err: any, data?: DeleteCustomRoutingListenerCommandOutput) => void
  ): void;
  deleteCustomRoutingListener(
    args: DeleteCustomRoutingListenerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCustomRoutingListenerCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEndpointGroupCommand}
   */
  deleteEndpointGroup(
    args: DeleteEndpointGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEndpointGroupCommandOutput>;
  deleteEndpointGroup(
    args: DeleteEndpointGroupCommandInput,
    cb: (err: any, data?: DeleteEndpointGroupCommandOutput) => void
  ): void;
  deleteEndpointGroup(
    args: DeleteEndpointGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEndpointGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteListenerCommand}
   */
  deleteListener(
    args: DeleteListenerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteListenerCommandOutput>;
  deleteListener(args: DeleteListenerCommandInput, cb: (err: any, data?: DeleteListenerCommandOutput) => void): void;
  deleteListener(
    args: DeleteListenerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteListenerCommandOutput) => void
  ): void;

  /**
   * @see {@link DenyCustomRoutingTrafficCommand}
   */
  denyCustomRoutingTraffic(
    args: DenyCustomRoutingTrafficCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DenyCustomRoutingTrafficCommandOutput>;
  denyCustomRoutingTraffic(
    args: DenyCustomRoutingTrafficCommandInput,
    cb: (err: any, data?: DenyCustomRoutingTrafficCommandOutput) => void
  ): void;
  denyCustomRoutingTraffic(
    args: DenyCustomRoutingTrafficCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DenyCustomRoutingTrafficCommandOutput) => void
  ): void;

  /**
   * @see {@link DeprovisionByoipCidrCommand}
   */
  deprovisionByoipCidr(
    args: DeprovisionByoipCidrCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeprovisionByoipCidrCommandOutput>;
  deprovisionByoipCidr(
    args: DeprovisionByoipCidrCommandInput,
    cb: (err: any, data?: DeprovisionByoipCidrCommandOutput) => void
  ): void;
  deprovisionByoipCidr(
    args: DeprovisionByoipCidrCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeprovisionByoipCidrCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAcceleratorCommand}
   */
  describeAccelerator(
    args: DescribeAcceleratorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAcceleratorCommandOutput>;
  describeAccelerator(
    args: DescribeAcceleratorCommandInput,
    cb: (err: any, data?: DescribeAcceleratorCommandOutput) => void
  ): void;
  describeAccelerator(
    args: DescribeAcceleratorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAcceleratorCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAcceleratorAttributesCommand}
   */
  describeAcceleratorAttributes(
    args: DescribeAcceleratorAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAcceleratorAttributesCommandOutput>;
  describeAcceleratorAttributes(
    args: DescribeAcceleratorAttributesCommandInput,
    cb: (err: any, data?: DescribeAcceleratorAttributesCommandOutput) => void
  ): void;
  describeAcceleratorAttributes(
    args: DescribeAcceleratorAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAcceleratorAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCustomRoutingAcceleratorCommand}
   */
  describeCustomRoutingAccelerator(
    args: DescribeCustomRoutingAcceleratorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCustomRoutingAcceleratorCommandOutput>;
  describeCustomRoutingAccelerator(
    args: DescribeCustomRoutingAcceleratorCommandInput,
    cb: (err: any, data?: DescribeCustomRoutingAcceleratorCommandOutput) => void
  ): void;
  describeCustomRoutingAccelerator(
    args: DescribeCustomRoutingAcceleratorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCustomRoutingAcceleratorCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCustomRoutingAcceleratorAttributesCommand}
   */
  describeCustomRoutingAcceleratorAttributes(
    args: DescribeCustomRoutingAcceleratorAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCustomRoutingAcceleratorAttributesCommandOutput>;
  describeCustomRoutingAcceleratorAttributes(
    args: DescribeCustomRoutingAcceleratorAttributesCommandInput,
    cb: (err: any, data?: DescribeCustomRoutingAcceleratorAttributesCommandOutput) => void
  ): void;
  describeCustomRoutingAcceleratorAttributes(
    args: DescribeCustomRoutingAcceleratorAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCustomRoutingAcceleratorAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCustomRoutingEndpointGroupCommand}
   */
  describeCustomRoutingEndpointGroup(
    args: DescribeCustomRoutingEndpointGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCustomRoutingEndpointGroupCommandOutput>;
  describeCustomRoutingEndpointGroup(
    args: DescribeCustomRoutingEndpointGroupCommandInput,
    cb: (err: any, data?: DescribeCustomRoutingEndpointGroupCommandOutput) => void
  ): void;
  describeCustomRoutingEndpointGroup(
    args: DescribeCustomRoutingEndpointGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCustomRoutingEndpointGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCustomRoutingListenerCommand}
   */
  describeCustomRoutingListener(
    args: DescribeCustomRoutingListenerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCustomRoutingListenerCommandOutput>;
  describeCustomRoutingListener(
    args: DescribeCustomRoutingListenerCommandInput,
    cb: (err: any, data?: DescribeCustomRoutingListenerCommandOutput) => void
  ): void;
  describeCustomRoutingListener(
    args: DescribeCustomRoutingListenerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCustomRoutingListenerCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEndpointGroupCommand}
   */
  describeEndpointGroup(
    args: DescribeEndpointGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEndpointGroupCommandOutput>;
  describeEndpointGroup(
    args: DescribeEndpointGroupCommandInput,
    cb: (err: any, data?: DescribeEndpointGroupCommandOutput) => void
  ): void;
  describeEndpointGroup(
    args: DescribeEndpointGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEndpointGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeListenerCommand}
   */
  describeListener(
    args: DescribeListenerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeListenerCommandOutput>;
  describeListener(
    args: DescribeListenerCommandInput,
    cb: (err: any, data?: DescribeListenerCommandOutput) => void
  ): void;
  describeListener(
    args: DescribeListenerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeListenerCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAcceleratorsCommand}
   */
  listAccelerators(
    args: ListAcceleratorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAcceleratorsCommandOutput>;
  listAccelerators(
    args: ListAcceleratorsCommandInput,
    cb: (err: any, data?: ListAcceleratorsCommandOutput) => void
  ): void;
  listAccelerators(
    args: ListAcceleratorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAcceleratorsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListByoipCidrsCommand}
   */
  listByoipCidrs(
    args: ListByoipCidrsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListByoipCidrsCommandOutput>;
  listByoipCidrs(args: ListByoipCidrsCommandInput, cb: (err: any, data?: ListByoipCidrsCommandOutput) => void): void;
  listByoipCidrs(
    args: ListByoipCidrsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListByoipCidrsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCustomRoutingAcceleratorsCommand}
   */
  listCustomRoutingAccelerators(
    args: ListCustomRoutingAcceleratorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCustomRoutingAcceleratorsCommandOutput>;
  listCustomRoutingAccelerators(
    args: ListCustomRoutingAcceleratorsCommandInput,
    cb: (err: any, data?: ListCustomRoutingAcceleratorsCommandOutput) => void
  ): void;
  listCustomRoutingAccelerators(
    args: ListCustomRoutingAcceleratorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCustomRoutingAcceleratorsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCustomRoutingEndpointGroupsCommand}
   */
  listCustomRoutingEndpointGroups(
    args: ListCustomRoutingEndpointGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCustomRoutingEndpointGroupsCommandOutput>;
  listCustomRoutingEndpointGroups(
    args: ListCustomRoutingEndpointGroupsCommandInput,
    cb: (err: any, data?: ListCustomRoutingEndpointGroupsCommandOutput) => void
  ): void;
  listCustomRoutingEndpointGroups(
    args: ListCustomRoutingEndpointGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCustomRoutingEndpointGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCustomRoutingListenersCommand}
   */
  listCustomRoutingListeners(
    args: ListCustomRoutingListenersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCustomRoutingListenersCommandOutput>;
  listCustomRoutingListeners(
    args: ListCustomRoutingListenersCommandInput,
    cb: (err: any, data?: ListCustomRoutingListenersCommandOutput) => void
  ): void;
  listCustomRoutingListeners(
    args: ListCustomRoutingListenersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCustomRoutingListenersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCustomRoutingPortMappingsCommand}
   */
  listCustomRoutingPortMappings(
    args: ListCustomRoutingPortMappingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCustomRoutingPortMappingsCommandOutput>;
  listCustomRoutingPortMappings(
    args: ListCustomRoutingPortMappingsCommandInput,
    cb: (err: any, data?: ListCustomRoutingPortMappingsCommandOutput) => void
  ): void;
  listCustomRoutingPortMappings(
    args: ListCustomRoutingPortMappingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCustomRoutingPortMappingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCustomRoutingPortMappingsByDestinationCommand}
   */
  listCustomRoutingPortMappingsByDestination(
    args: ListCustomRoutingPortMappingsByDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCustomRoutingPortMappingsByDestinationCommandOutput>;
  listCustomRoutingPortMappingsByDestination(
    args: ListCustomRoutingPortMappingsByDestinationCommandInput,
    cb: (err: any, data?: ListCustomRoutingPortMappingsByDestinationCommandOutput) => void
  ): void;
  listCustomRoutingPortMappingsByDestination(
    args: ListCustomRoutingPortMappingsByDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCustomRoutingPortMappingsByDestinationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEndpointGroupsCommand}
   */
  listEndpointGroups(
    args: ListEndpointGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEndpointGroupsCommandOutput>;
  listEndpointGroups(
    args: ListEndpointGroupsCommandInput,
    cb: (err: any, data?: ListEndpointGroupsCommandOutput) => void
  ): void;
  listEndpointGroups(
    args: ListEndpointGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEndpointGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListListenersCommand}
   */
  listListeners(args: ListListenersCommandInput, options?: __HttpHandlerOptions): Promise<ListListenersCommandOutput>;
  listListeners(args: ListListenersCommandInput, cb: (err: any, data?: ListListenersCommandOutput) => void): void;
  listListeners(
    args: ListListenersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListListenersCommandOutput) => void
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
   * @see {@link ProvisionByoipCidrCommand}
   */
  provisionByoipCidr(
    args: ProvisionByoipCidrCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ProvisionByoipCidrCommandOutput>;
  provisionByoipCidr(
    args: ProvisionByoipCidrCommandInput,
    cb: (err: any, data?: ProvisionByoipCidrCommandOutput) => void
  ): void;
  provisionByoipCidr(
    args: ProvisionByoipCidrCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ProvisionByoipCidrCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveCustomRoutingEndpointsCommand}
   */
  removeCustomRoutingEndpoints(
    args: RemoveCustomRoutingEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveCustomRoutingEndpointsCommandOutput>;
  removeCustomRoutingEndpoints(
    args: RemoveCustomRoutingEndpointsCommandInput,
    cb: (err: any, data?: RemoveCustomRoutingEndpointsCommandOutput) => void
  ): void;
  removeCustomRoutingEndpoints(
    args: RemoveCustomRoutingEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveCustomRoutingEndpointsCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveEndpointsCommand}
   */
  removeEndpoints(
    args: RemoveEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveEndpointsCommandOutput>;
  removeEndpoints(args: RemoveEndpointsCommandInput, cb: (err: any, data?: RemoveEndpointsCommandOutput) => void): void;
  removeEndpoints(
    args: RemoveEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveEndpointsCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAcceleratorCommand}
   */
  updateAccelerator(
    args: UpdateAcceleratorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAcceleratorCommandOutput>;
  updateAccelerator(
    args: UpdateAcceleratorCommandInput,
    cb: (err: any, data?: UpdateAcceleratorCommandOutput) => void
  ): void;
  updateAccelerator(
    args: UpdateAcceleratorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAcceleratorCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAcceleratorAttributesCommand}
   */
  updateAcceleratorAttributes(
    args: UpdateAcceleratorAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAcceleratorAttributesCommandOutput>;
  updateAcceleratorAttributes(
    args: UpdateAcceleratorAttributesCommandInput,
    cb: (err: any, data?: UpdateAcceleratorAttributesCommandOutput) => void
  ): void;
  updateAcceleratorAttributes(
    args: UpdateAcceleratorAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAcceleratorAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCustomRoutingAcceleratorCommand}
   */
  updateCustomRoutingAccelerator(
    args: UpdateCustomRoutingAcceleratorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCustomRoutingAcceleratorCommandOutput>;
  updateCustomRoutingAccelerator(
    args: UpdateCustomRoutingAcceleratorCommandInput,
    cb: (err: any, data?: UpdateCustomRoutingAcceleratorCommandOutput) => void
  ): void;
  updateCustomRoutingAccelerator(
    args: UpdateCustomRoutingAcceleratorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCustomRoutingAcceleratorCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCustomRoutingAcceleratorAttributesCommand}
   */
  updateCustomRoutingAcceleratorAttributes(
    args: UpdateCustomRoutingAcceleratorAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCustomRoutingAcceleratorAttributesCommandOutput>;
  updateCustomRoutingAcceleratorAttributes(
    args: UpdateCustomRoutingAcceleratorAttributesCommandInput,
    cb: (err: any, data?: UpdateCustomRoutingAcceleratorAttributesCommandOutput) => void
  ): void;
  updateCustomRoutingAcceleratorAttributes(
    args: UpdateCustomRoutingAcceleratorAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCustomRoutingAcceleratorAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCustomRoutingListenerCommand}
   */
  updateCustomRoutingListener(
    args: UpdateCustomRoutingListenerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCustomRoutingListenerCommandOutput>;
  updateCustomRoutingListener(
    args: UpdateCustomRoutingListenerCommandInput,
    cb: (err: any, data?: UpdateCustomRoutingListenerCommandOutput) => void
  ): void;
  updateCustomRoutingListener(
    args: UpdateCustomRoutingListenerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCustomRoutingListenerCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEndpointGroupCommand}
   */
  updateEndpointGroup(
    args: UpdateEndpointGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEndpointGroupCommandOutput>;
  updateEndpointGroup(
    args: UpdateEndpointGroupCommandInput,
    cb: (err: any, data?: UpdateEndpointGroupCommandOutput) => void
  ): void;
  updateEndpointGroup(
    args: UpdateEndpointGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEndpointGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateListenerCommand}
   */
  updateListener(
    args: UpdateListenerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateListenerCommandOutput>;
  updateListener(args: UpdateListenerCommandInput, cb: (err: any, data?: UpdateListenerCommandOutput) => void): void;
  updateListener(
    args: UpdateListenerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateListenerCommandOutput) => void
  ): void;

  /**
   * @see {@link WithdrawByoipCidrCommand}
   */
  withdrawByoipCidr(
    args: WithdrawByoipCidrCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<WithdrawByoipCidrCommandOutput>;
  withdrawByoipCidr(
    args: WithdrawByoipCidrCommandInput,
    cb: (err: any, data?: WithdrawByoipCidrCommandOutput) => void
  ): void;
  withdrawByoipCidr(
    args: WithdrawByoipCidrCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: WithdrawByoipCidrCommandOutput) => void
  ): void;
}

/**
 * @public
 * <fullname>Global Accelerator</fullname>
 * 	        <p>This is the <i>Global Accelerator API Reference</i>. This guide is for developers who need detailed information about
 * 		    Global Accelerator API actions, data types, and errors. For more information about Global Accelerator features, see the
 * 	    	<a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/what-is-global-accelerator.html">Global Accelerator Developer Guide</a>.</p>
 * 	        <p>Global Accelerator is a service in which you create <i>accelerators</i> to improve the performance
 * 			of your applications for local and global users. Depending on the type of accelerator you choose, you can
 * 			gain additional benefits. </p>
 * 		       <ul>
 *             <li>
 *                <p>By using a standard accelerator, you can improve availability of your internet applications
 * 			    that are used by a global audience. With a standard accelerator, Global Accelerator directs traffic to optimal endpoints over the Amazon Web Services
 * 				global network. </p>
 *             </li>
 *             <li>
 *                <p>For other scenarios, you might choose a custom routing accelerator. With a custom routing accelerator, you
 * 				can use application logic to directly map one or more users to a specific endpoint among many endpoints.</p>
 *             </li>
 *          </ul>
 * 		       <important>
 * 		          <p>Global Accelerator is a global service that supports endpoints in multiple Amazon Web Services Regions but you must specify the
 * 		    	US West (Oregon) Region to create, update, or otherwise work with accelerators.  That is, for example, specify <code>--region us-west-2</code>
 * 		    	on AWS CLI commands.</p>
 * 		       </important>
 *
 *
 * 		       <p>By default, Global Accelerator provides you with static IP addresses that you associate with your accelerator. The static IP addresses
 * 			are anycast from the Amazon Web Services edge network. For IPv4, Global Accelerator provides two static IPv4 addresses. For dual-stack,
 * 			Global Accelerator provides a total of four addresses: two static IPv4 addresses and two static IPv6 addresses.
 * 			With a standard accelerator for IPv4, instead of using the addresses that Global Accelerator provides, you can configure
 * 			these entry points to be IPv4 addresses from your own IP address ranges that you bring toGlobal Accelerator (BYOIP). </p>
 *
 *
 * 	        <p>For a standard accelerator,
 * 	        they distribute incoming application traffic across multiple endpoint resources in multiple Amazon Web Services Regions , which increases
 * 			the availability of your applications. Endpoints for standard accelerators can be Network Load Balancers, Application Load Balancers,
 * 	    	Amazon EC2 instances, or Elastic IP addresses that are located in one Amazon Web Services Region or multiple Amazon Web Services Regions. For custom routing
 * 	        accelerators, you map traffic that arrives to the static IP addresses to specific Amazon EC2 servers in endpoints that
 * 			are virtual private cloud (VPC) subnets.</p>
 *
 * 		       <important>
 *             <p>The static IP addresses remain assigned to your accelerator for as long as it exists, even if you
 * 				disable the accelerator and it no longer accepts or routes traffic. However, when you
 * 					<i>delete</i> an accelerator, you lose the static IP addresses that
 * 				are assigned to it, so you can no longer route traffic by using them. You can use
 * 				IAM policies like tag-based permissions with Global Accelerator to limit the users who have
 * 				permissions to delete an accelerator. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/access-control-manage-access-tag-policies.html">Tag-based policies</a>.</p>
 *          </important>
 * 	        <p>For standard accelerators, Global Accelerator uses the Amazon Web Services global network to route traffic to the optimal regional endpoint based
 * 			on health, client location, and policies that you configure. The service reacts instantly to
 * 			changes in health or configuration to ensure that internet traffic from clients is always
 * 			directed to healthy endpoints.</p>
 * 		       <p>For more information about understanding and using Global Accelerator, see the
 * 			<a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/what-is-global-accelerator.html">Global Accelerator Developer Guide</a>.</p>
 */
export class GlobalAccelerator extends GlobalAcceleratorClient implements GlobalAccelerator {}
createAggregatedClient(commands, GlobalAccelerator);
