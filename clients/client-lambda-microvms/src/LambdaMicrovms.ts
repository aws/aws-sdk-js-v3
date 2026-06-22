// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type CreateMicrovmAuthTokenCommandInput,
  type CreateMicrovmAuthTokenCommandOutput,
  CreateMicrovmAuthTokenCommand,
} from "./commands/CreateMicrovmAuthTokenCommand";
import {
  type CreateMicrovmImageCommandInput,
  type CreateMicrovmImageCommandOutput,
  CreateMicrovmImageCommand,
} from "./commands/CreateMicrovmImageCommand";
import {
  type CreateMicrovmShellAuthTokenCommandInput,
  type CreateMicrovmShellAuthTokenCommandOutput,
  CreateMicrovmShellAuthTokenCommand,
} from "./commands/CreateMicrovmShellAuthTokenCommand";
import {
  type DeleteMicrovmImageCommandInput,
  type DeleteMicrovmImageCommandOutput,
  DeleteMicrovmImageCommand,
} from "./commands/DeleteMicrovmImageCommand";
import {
  type DeleteMicrovmImageVersionCommandInput,
  type DeleteMicrovmImageVersionCommandOutput,
  DeleteMicrovmImageVersionCommand,
} from "./commands/DeleteMicrovmImageVersionCommand";
import {
  type GetMicrovmCommandInput,
  type GetMicrovmCommandOutput,
  GetMicrovmCommand,
} from "./commands/GetMicrovmCommand";
import {
  type GetMicrovmImageBuildCommandInput,
  type GetMicrovmImageBuildCommandOutput,
  GetMicrovmImageBuildCommand,
} from "./commands/GetMicrovmImageBuildCommand";
import {
  type GetMicrovmImageCommandInput,
  type GetMicrovmImageCommandOutput,
  GetMicrovmImageCommand,
} from "./commands/GetMicrovmImageCommand";
import {
  type GetMicrovmImageVersionCommandInput,
  type GetMicrovmImageVersionCommandOutput,
  GetMicrovmImageVersionCommand,
} from "./commands/GetMicrovmImageVersionCommand";
import {
  type ListManagedMicrovmImagesCommandInput,
  type ListManagedMicrovmImagesCommandOutput,
  ListManagedMicrovmImagesCommand,
} from "./commands/ListManagedMicrovmImagesCommand";
import {
  type ListManagedMicrovmImageVersionsCommandInput,
  type ListManagedMicrovmImageVersionsCommandOutput,
  ListManagedMicrovmImageVersionsCommand,
} from "./commands/ListManagedMicrovmImageVersionsCommand";
import {
  type ListMicrovmImageBuildsCommandInput,
  type ListMicrovmImageBuildsCommandOutput,
  ListMicrovmImageBuildsCommand,
} from "./commands/ListMicrovmImageBuildsCommand";
import {
  type ListMicrovmImagesCommandInput,
  type ListMicrovmImagesCommandOutput,
  ListMicrovmImagesCommand,
} from "./commands/ListMicrovmImagesCommand";
import {
  type ListMicrovmImageVersionsCommandInput,
  type ListMicrovmImageVersionsCommandOutput,
  ListMicrovmImageVersionsCommand,
} from "./commands/ListMicrovmImageVersionsCommand";
import {
  type ListMicrovmsCommandInput,
  type ListMicrovmsCommandOutput,
  ListMicrovmsCommand,
} from "./commands/ListMicrovmsCommand";
import { type ListTagsCommandInput, type ListTagsCommandOutput, ListTagsCommand } from "./commands/ListTagsCommand";
import {
  type ResumeMicrovmCommandInput,
  type ResumeMicrovmCommandOutput,
  ResumeMicrovmCommand,
} from "./commands/ResumeMicrovmCommand";
import {
  type RunMicrovmCommandInput,
  type RunMicrovmCommandOutput,
  RunMicrovmCommand,
} from "./commands/RunMicrovmCommand";
import {
  type SuspendMicrovmCommandInput,
  type SuspendMicrovmCommandOutput,
  SuspendMicrovmCommand,
} from "./commands/SuspendMicrovmCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type TerminateMicrovmCommandInput,
  type TerminateMicrovmCommandOutput,
  TerminateMicrovmCommand,
} from "./commands/TerminateMicrovmCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateMicrovmImageCommandInput,
  type UpdateMicrovmImageCommandOutput,
  UpdateMicrovmImageCommand,
} from "./commands/UpdateMicrovmImageCommand";
import {
  type UpdateMicrovmImageVersionCommandInput,
  type UpdateMicrovmImageVersionCommandOutput,
  UpdateMicrovmImageVersionCommand,
} from "./commands/UpdateMicrovmImageVersionCommand";
import { LambdaMicrovmsClient } from "./LambdaMicrovmsClient";
import { paginateListManagedMicrovmImages } from "./pagination/ListManagedMicrovmImagesPaginator";
import { paginateListManagedMicrovmImageVersions } from "./pagination/ListManagedMicrovmImageVersionsPaginator";
import { paginateListMicrovmImageBuilds } from "./pagination/ListMicrovmImageBuildsPaginator";
import { paginateListMicrovmImages } from "./pagination/ListMicrovmImagesPaginator";
import { paginateListMicrovmImageVersions } from "./pagination/ListMicrovmImageVersionsPaginator";
import { paginateListMicrovms } from "./pagination/ListMicrovmsPaginator";

const commands = {
  CreateMicrovmAuthTokenCommand,
  CreateMicrovmImageCommand,
  CreateMicrovmShellAuthTokenCommand,
  DeleteMicrovmImageCommand,
  DeleteMicrovmImageVersionCommand,
  GetMicrovmCommand,
  GetMicrovmImageCommand,
  GetMicrovmImageBuildCommand,
  GetMicrovmImageVersionCommand,
  ListManagedMicrovmImagesCommand,
  ListManagedMicrovmImageVersionsCommand,
  ListMicrovmImageBuildsCommand,
  ListMicrovmImagesCommand,
  ListMicrovmImageVersionsCommand,
  ListMicrovmsCommand,
  ListTagsCommand,
  ResumeMicrovmCommand,
  RunMicrovmCommand,
  SuspendMicrovmCommand,
  TagResourceCommand,
  TerminateMicrovmCommand,
  UntagResourceCommand,
  UpdateMicrovmImageCommand,
  UpdateMicrovmImageVersionCommand,
};
const paginators = {
  paginateListManagedMicrovmImages,
  paginateListManagedMicrovmImageVersions,
  paginateListMicrovmImageBuilds,
  paginateListMicrovmImages,
  paginateListMicrovmImageVersions,
  paginateListMicrovms,
};

export interface LambdaMicrovms {
  /**
   * @see {@link CreateMicrovmAuthTokenCommand}
   */
  createMicrovmAuthToken(
    args: CreateMicrovmAuthTokenCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMicrovmAuthTokenCommandOutput>;
  createMicrovmAuthToken(
    args: CreateMicrovmAuthTokenCommandInput,
    cb: (err: any, data?: CreateMicrovmAuthTokenCommandOutput) => void
  ): void;
  createMicrovmAuthToken(
    args: CreateMicrovmAuthTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMicrovmAuthTokenCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMicrovmImageCommand}
   */
  createMicrovmImage(
    args: CreateMicrovmImageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMicrovmImageCommandOutput>;
  createMicrovmImage(
    args: CreateMicrovmImageCommandInput,
    cb: (err: any, data?: CreateMicrovmImageCommandOutput) => void
  ): void;
  createMicrovmImage(
    args: CreateMicrovmImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMicrovmImageCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMicrovmShellAuthTokenCommand}
   */
  createMicrovmShellAuthToken(
    args: CreateMicrovmShellAuthTokenCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMicrovmShellAuthTokenCommandOutput>;
  createMicrovmShellAuthToken(
    args: CreateMicrovmShellAuthTokenCommandInput,
    cb: (err: any, data?: CreateMicrovmShellAuthTokenCommandOutput) => void
  ): void;
  createMicrovmShellAuthToken(
    args: CreateMicrovmShellAuthTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMicrovmShellAuthTokenCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMicrovmImageCommand}
   */
  deleteMicrovmImage(
    args: DeleteMicrovmImageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMicrovmImageCommandOutput>;
  deleteMicrovmImage(
    args: DeleteMicrovmImageCommandInput,
    cb: (err: any, data?: DeleteMicrovmImageCommandOutput) => void
  ): void;
  deleteMicrovmImage(
    args: DeleteMicrovmImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMicrovmImageCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMicrovmImageVersionCommand}
   */
  deleteMicrovmImageVersion(
    args: DeleteMicrovmImageVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMicrovmImageVersionCommandOutput>;
  deleteMicrovmImageVersion(
    args: DeleteMicrovmImageVersionCommandInput,
    cb: (err: any, data?: DeleteMicrovmImageVersionCommandOutput) => void
  ): void;
  deleteMicrovmImageVersion(
    args: DeleteMicrovmImageVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMicrovmImageVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMicrovmCommand}
   */
  getMicrovm(
    args: GetMicrovmCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMicrovmCommandOutput>;
  getMicrovm(
    args: GetMicrovmCommandInput,
    cb: (err: any, data?: GetMicrovmCommandOutput) => void
  ): void;
  getMicrovm(
    args: GetMicrovmCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMicrovmCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMicrovmImageCommand}
   */
  getMicrovmImage(
    args: GetMicrovmImageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMicrovmImageCommandOutput>;
  getMicrovmImage(
    args: GetMicrovmImageCommandInput,
    cb: (err: any, data?: GetMicrovmImageCommandOutput) => void
  ): void;
  getMicrovmImage(
    args: GetMicrovmImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMicrovmImageCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMicrovmImageBuildCommand}
   */
  getMicrovmImageBuild(
    args: GetMicrovmImageBuildCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMicrovmImageBuildCommandOutput>;
  getMicrovmImageBuild(
    args: GetMicrovmImageBuildCommandInput,
    cb: (err: any, data?: GetMicrovmImageBuildCommandOutput) => void
  ): void;
  getMicrovmImageBuild(
    args: GetMicrovmImageBuildCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMicrovmImageBuildCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMicrovmImageVersionCommand}
   */
  getMicrovmImageVersion(
    args: GetMicrovmImageVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMicrovmImageVersionCommandOutput>;
  getMicrovmImageVersion(
    args: GetMicrovmImageVersionCommandInput,
    cb: (err: any, data?: GetMicrovmImageVersionCommandOutput) => void
  ): void;
  getMicrovmImageVersion(
    args: GetMicrovmImageVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMicrovmImageVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link ListManagedMicrovmImagesCommand}
   */
  listManagedMicrovmImages(): Promise<ListManagedMicrovmImagesCommandOutput>;
  listManagedMicrovmImages(
    args: ListManagedMicrovmImagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListManagedMicrovmImagesCommandOutput>;
  listManagedMicrovmImages(
    args: ListManagedMicrovmImagesCommandInput,
    cb: (err: any, data?: ListManagedMicrovmImagesCommandOutput) => void
  ): void;
  listManagedMicrovmImages(
    args: ListManagedMicrovmImagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListManagedMicrovmImagesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListManagedMicrovmImageVersionsCommand}
   */
  listManagedMicrovmImageVersions(
    args: ListManagedMicrovmImageVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListManagedMicrovmImageVersionsCommandOutput>;
  listManagedMicrovmImageVersions(
    args: ListManagedMicrovmImageVersionsCommandInput,
    cb: (err: any, data?: ListManagedMicrovmImageVersionsCommandOutput) => void
  ): void;
  listManagedMicrovmImageVersions(
    args: ListManagedMicrovmImageVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListManagedMicrovmImageVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMicrovmImageBuildsCommand}
   */
  listMicrovmImageBuilds(
    args: ListMicrovmImageBuildsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMicrovmImageBuildsCommandOutput>;
  listMicrovmImageBuilds(
    args: ListMicrovmImageBuildsCommandInput,
    cb: (err: any, data?: ListMicrovmImageBuildsCommandOutput) => void
  ): void;
  listMicrovmImageBuilds(
    args: ListMicrovmImageBuildsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMicrovmImageBuildsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMicrovmImagesCommand}
   */
  listMicrovmImages(): Promise<ListMicrovmImagesCommandOutput>;
  listMicrovmImages(
    args: ListMicrovmImagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMicrovmImagesCommandOutput>;
  listMicrovmImages(
    args: ListMicrovmImagesCommandInput,
    cb: (err: any, data?: ListMicrovmImagesCommandOutput) => void
  ): void;
  listMicrovmImages(
    args: ListMicrovmImagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMicrovmImagesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMicrovmImageVersionsCommand}
   */
  listMicrovmImageVersions(
    args: ListMicrovmImageVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMicrovmImageVersionsCommandOutput>;
  listMicrovmImageVersions(
    args: ListMicrovmImageVersionsCommandInput,
    cb: (err: any, data?: ListMicrovmImageVersionsCommandOutput) => void
  ): void;
  listMicrovmImageVersions(
    args: ListMicrovmImageVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMicrovmImageVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMicrovmsCommand}
   */
  listMicrovms(): Promise<ListMicrovmsCommandOutput>;
  listMicrovms(
    args: ListMicrovmsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMicrovmsCommandOutput>;
  listMicrovms(
    args: ListMicrovmsCommandInput,
    cb: (err: any, data?: ListMicrovmsCommandOutput) => void
  ): void;
  listMicrovms(
    args: ListMicrovmsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMicrovmsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsCommand}
   */
  listTags(
    args: ListTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsCommandOutput>;
  listTags(
    args: ListTagsCommandInput,
    cb: (err: any, data?: ListTagsCommandOutput) => void
  ): void;
  listTags(
    args: ListTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link ResumeMicrovmCommand}
   */
  resumeMicrovm(
    args: ResumeMicrovmCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResumeMicrovmCommandOutput>;
  resumeMicrovm(
    args: ResumeMicrovmCommandInput,
    cb: (err: any, data?: ResumeMicrovmCommandOutput) => void
  ): void;
  resumeMicrovm(
    args: ResumeMicrovmCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResumeMicrovmCommandOutput) => void
  ): void;

  /**
   * @see {@link RunMicrovmCommand}
   */
  runMicrovm(
    args: RunMicrovmCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RunMicrovmCommandOutput>;
  runMicrovm(
    args: RunMicrovmCommandInput,
    cb: (err: any, data?: RunMicrovmCommandOutput) => void
  ): void;
  runMicrovm(
    args: RunMicrovmCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RunMicrovmCommandOutput) => void
  ): void;

  /**
   * @see {@link SuspendMicrovmCommand}
   */
  suspendMicrovm(
    args: SuspendMicrovmCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SuspendMicrovmCommandOutput>;
  suspendMicrovm(
    args: SuspendMicrovmCommandInput,
    cb: (err: any, data?: SuspendMicrovmCommandOutput) => void
  ): void;
  suspendMicrovm(
    args: SuspendMicrovmCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SuspendMicrovmCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TerminateMicrovmCommand}
   */
  terminateMicrovm(
    args: TerminateMicrovmCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TerminateMicrovmCommandOutput>;
  terminateMicrovm(
    args: TerminateMicrovmCommandInput,
    cb: (err: any, data?: TerminateMicrovmCommandOutput) => void
  ): void;
  terminateMicrovm(
    args: TerminateMicrovmCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TerminateMicrovmCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMicrovmImageCommand}
   */
  updateMicrovmImage(
    args: UpdateMicrovmImageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMicrovmImageCommandOutput>;
  updateMicrovmImage(
    args: UpdateMicrovmImageCommandInput,
    cb: (err: any, data?: UpdateMicrovmImageCommandOutput) => void
  ): void;
  updateMicrovmImage(
    args: UpdateMicrovmImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMicrovmImageCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMicrovmImageVersionCommand}
   */
  updateMicrovmImageVersion(
    args: UpdateMicrovmImageVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMicrovmImageVersionCommandOutput>;
  updateMicrovmImageVersion(
    args: UpdateMicrovmImageVersionCommandInput,
    cb: (err: any, data?: UpdateMicrovmImageVersionCommandOutput) => void
  ): void;
  updateMicrovmImageVersion(
    args: UpdateMicrovmImageVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMicrovmImageVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link ListManagedMicrovmImagesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListManagedMicrovmImagesCommandOutput}.
   */
  paginateListManagedMicrovmImages(
    args?: ListManagedMicrovmImagesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListManagedMicrovmImagesCommandOutput>;

  /**
   * @see {@link ListManagedMicrovmImageVersionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListManagedMicrovmImageVersionsCommandOutput}.
   */
  paginateListManagedMicrovmImageVersions(
    args: ListManagedMicrovmImageVersionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListManagedMicrovmImageVersionsCommandOutput>;

  /**
   * @see {@link ListMicrovmImageBuildsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListMicrovmImageBuildsCommandOutput}.
   */
  paginateListMicrovmImageBuilds(
    args: ListMicrovmImageBuildsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListMicrovmImageBuildsCommandOutput>;

  /**
   * @see {@link ListMicrovmImagesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListMicrovmImagesCommandOutput}.
   */
  paginateListMicrovmImages(
    args?: ListMicrovmImagesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListMicrovmImagesCommandOutput>;

  /**
   * @see {@link ListMicrovmImageVersionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListMicrovmImageVersionsCommandOutput}.
   */
  paginateListMicrovmImageVersions(
    args: ListMicrovmImageVersionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListMicrovmImageVersionsCommandOutput>;

  /**
   * @see {@link ListMicrovmsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListMicrovmsCommandOutput}.
   */
  paginateListMicrovms(
    args?: ListMicrovmsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListMicrovmsCommandOutput>;
}

/**
 * <p>Provides APIs to create, manage, and operate AWS Lambda MicroVMs and their associated MicroVM Image environments.</p>
 * @public
 */
export class LambdaMicrovms extends LambdaMicrovmsClient implements LambdaMicrovms {}
createAggregatedClient(commands, LambdaMicrovms, { paginators });
