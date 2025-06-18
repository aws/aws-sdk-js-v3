// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { AIOpsClient, AIOpsClientConfig } from "./AIOpsClient";
import {
  CreateInvestigationGroupCommand,
  CreateInvestigationGroupCommandInput,
  CreateInvestigationGroupCommandOutput,
} from "./commands/CreateInvestigationGroupCommand";
import {
  DeleteInvestigationGroupCommand,
  DeleteInvestigationGroupCommandInput,
  DeleteInvestigationGroupCommandOutput,
} from "./commands/DeleteInvestigationGroupCommand";
import {
  DeleteInvestigationGroupPolicyCommand,
  DeleteInvestigationGroupPolicyCommandInput,
  DeleteInvestigationGroupPolicyCommandOutput,
} from "./commands/DeleteInvestigationGroupPolicyCommand";
import {
  GetInvestigationGroupCommand,
  GetInvestigationGroupCommandInput,
  GetInvestigationGroupCommandOutput,
} from "./commands/GetInvestigationGroupCommand";
import {
  GetInvestigationGroupPolicyCommand,
  GetInvestigationGroupPolicyCommandInput,
  GetInvestigationGroupPolicyCommandOutput,
} from "./commands/GetInvestigationGroupPolicyCommand";
import {
  ListInvestigationGroupsCommand,
  ListInvestigationGroupsCommandInput,
  ListInvestigationGroupsCommandOutput,
} from "./commands/ListInvestigationGroupsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutInvestigationGroupPolicyCommand,
  PutInvestigationGroupPolicyCommandInput,
  PutInvestigationGroupPolicyCommandOutput,
} from "./commands/PutInvestigationGroupPolicyCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateInvestigationGroupCommand,
  UpdateInvestigationGroupCommandInput,
  UpdateInvestigationGroupCommandOutput,
} from "./commands/UpdateInvestigationGroupCommand";

const commands = {
  CreateInvestigationGroupCommand,
  DeleteInvestigationGroupCommand,
  DeleteInvestigationGroupPolicyCommand,
  GetInvestigationGroupCommand,
  GetInvestigationGroupPolicyCommand,
  ListInvestigationGroupsCommand,
  ListTagsForResourceCommand,
  PutInvestigationGroupPolicyCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateInvestigationGroupCommand,
};

export interface AIOps {
  /**
   * @see {@link CreateInvestigationGroupCommand}
   */
  createInvestigationGroup(
    args: CreateInvestigationGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateInvestigationGroupCommandOutput>;
  createInvestigationGroup(
    args: CreateInvestigationGroupCommandInput,
    cb: (err: any, data?: CreateInvestigationGroupCommandOutput) => void
  ): void;
  createInvestigationGroup(
    args: CreateInvestigationGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateInvestigationGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteInvestigationGroupCommand}
   */
  deleteInvestigationGroup(
    args: DeleteInvestigationGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInvestigationGroupCommandOutput>;
  deleteInvestigationGroup(
    args: DeleteInvestigationGroupCommandInput,
    cb: (err: any, data?: DeleteInvestigationGroupCommandOutput) => void
  ): void;
  deleteInvestigationGroup(
    args: DeleteInvestigationGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInvestigationGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteInvestigationGroupPolicyCommand}
   */
  deleteInvestigationGroupPolicy(
    args: DeleteInvestigationGroupPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInvestigationGroupPolicyCommandOutput>;
  deleteInvestigationGroupPolicy(
    args: DeleteInvestigationGroupPolicyCommandInput,
    cb: (err: any, data?: DeleteInvestigationGroupPolicyCommandOutput) => void
  ): void;
  deleteInvestigationGroupPolicy(
    args: DeleteInvestigationGroupPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInvestigationGroupPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInvestigationGroupCommand}
   */
  getInvestigationGroup(
    args: GetInvestigationGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInvestigationGroupCommandOutput>;
  getInvestigationGroup(
    args: GetInvestigationGroupCommandInput,
    cb: (err: any, data?: GetInvestigationGroupCommandOutput) => void
  ): void;
  getInvestigationGroup(
    args: GetInvestigationGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInvestigationGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInvestigationGroupPolicyCommand}
   */
  getInvestigationGroupPolicy(
    args: GetInvestigationGroupPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInvestigationGroupPolicyCommandOutput>;
  getInvestigationGroupPolicy(
    args: GetInvestigationGroupPolicyCommandInput,
    cb: (err: any, data?: GetInvestigationGroupPolicyCommandOutput) => void
  ): void;
  getInvestigationGroupPolicy(
    args: GetInvestigationGroupPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInvestigationGroupPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInvestigationGroupsCommand}
   */
  listInvestigationGroups(): Promise<ListInvestigationGroupsCommandOutput>;
  listInvestigationGroups(
    args: ListInvestigationGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInvestigationGroupsCommandOutput>;
  listInvestigationGroups(
    args: ListInvestigationGroupsCommandInput,
    cb: (err: any, data?: ListInvestigationGroupsCommandOutput) => void
  ): void;
  listInvestigationGroups(
    args: ListInvestigationGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInvestigationGroupsCommandOutput) => void
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
   * @see {@link PutInvestigationGroupPolicyCommand}
   */
  putInvestigationGroupPolicy(
    args: PutInvestigationGroupPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutInvestigationGroupPolicyCommandOutput>;
  putInvestigationGroupPolicy(
    args: PutInvestigationGroupPolicyCommandInput,
    cb: (err: any, data?: PutInvestigationGroupPolicyCommandOutput) => void
  ): void;
  putInvestigationGroupPolicy(
    args: PutInvestigationGroupPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutInvestigationGroupPolicyCommandOutput) => void
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
   * @see {@link UpdateInvestigationGroupCommand}
   */
  updateInvestigationGroup(
    args: UpdateInvestigationGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateInvestigationGroupCommandOutput>;
  updateInvestigationGroup(
    args: UpdateInvestigationGroupCommandInput,
    cb: (err: any, data?: UpdateInvestigationGroupCommandOutput) => void
  ): void;
  updateInvestigationGroup(
    args: UpdateInvestigationGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateInvestigationGroupCommandOutput) => void
  ): void;
}

/**
 * <p>The Amazon Q Developer operational investigations feature is a generative AI-powered assistant that can help you respond to incidents in your system. It uses generative AI to scan your system's telemetry and quickly surface suggestions that might be related to your issue. These suggestions include metrics, logs, deployment events, and root-cause hypotheses. </p> <p>You can use API actions to create, manage, and delete investigation groups and investigation group policies. To start and manage investigations, you must use the CloudWatch console.</p>
 * @public
 */
export class AIOps extends AIOpsClient implements AIOps {}
createAggregatedClient(commands, AIOps);
