// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import { type GetClipCommandInput, type GetClipCommandOutput, GetClipCommand } from "./commands/GetClipCommand";
import {
  type GetDASHStreamingSessionURLCommandInput,
  type GetDASHStreamingSessionURLCommandOutput,
  GetDASHStreamingSessionURLCommand,
} from "./commands/GetDASHStreamingSessionURLCommand";
import {
  type GetHLSStreamingSessionURLCommandInput,
  type GetHLSStreamingSessionURLCommandOutput,
  GetHLSStreamingSessionURLCommand,
} from "./commands/GetHLSStreamingSessionURLCommand";
import { type GetImagesCommandInput, type GetImagesCommandOutput, GetImagesCommand } from "./commands/GetImagesCommand";
import {
  type GetMediaForFragmentListCommandInput,
  type GetMediaForFragmentListCommandOutput,
  GetMediaForFragmentListCommand,
} from "./commands/GetMediaForFragmentListCommand";
import {
  type ListFragmentsCommandInput,
  type ListFragmentsCommandOutput,
  ListFragmentsCommand,
} from "./commands/ListFragmentsCommand";
import { KinesisVideoArchivedMediaClient } from "./KinesisVideoArchivedMediaClient";
import { paginateGetImages } from "./pagination/GetImagesPaginator";
import { paginateListFragments } from "./pagination/ListFragmentsPaginator";

const commands = {
  GetClipCommand,
  GetDASHStreamingSessionURLCommand,
  GetHLSStreamingSessionURLCommand,
  GetImagesCommand,
  GetMediaForFragmentListCommand,
  ListFragmentsCommand,
};
const paginators = {
  paginateGetImages,
  paginateListFragments,
};

export interface KinesisVideoArchivedMedia {
  /**
   * @see {@link GetClipCommand}
   */
  getClip(
    args: GetClipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetClipCommandOutput>;
  getClip(
    args: GetClipCommandInput,
    cb: (err: any, data?: GetClipCommandOutput) => void
  ): void;
  getClip(
    args: GetClipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetClipCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDASHStreamingSessionURLCommand}
   */
  getDASHStreamingSessionURL(): Promise<GetDASHStreamingSessionURLCommandOutput>;
  getDASHStreamingSessionURL(
    args: GetDASHStreamingSessionURLCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDASHStreamingSessionURLCommandOutput>;
  getDASHStreamingSessionURL(
    args: GetDASHStreamingSessionURLCommandInput,
    cb: (err: any, data?: GetDASHStreamingSessionURLCommandOutput) => void
  ): void;
  getDASHStreamingSessionURL(
    args: GetDASHStreamingSessionURLCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDASHStreamingSessionURLCommandOutput) => void
  ): void;

  /**
   * @see {@link GetHLSStreamingSessionURLCommand}
   */
  getHLSStreamingSessionURL(): Promise<GetHLSStreamingSessionURLCommandOutput>;
  getHLSStreamingSessionURL(
    args: GetHLSStreamingSessionURLCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetHLSStreamingSessionURLCommandOutput>;
  getHLSStreamingSessionURL(
    args: GetHLSStreamingSessionURLCommandInput,
    cb: (err: any, data?: GetHLSStreamingSessionURLCommandOutput) => void
  ): void;
  getHLSStreamingSessionURL(
    args: GetHLSStreamingSessionURLCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetHLSStreamingSessionURLCommandOutput) => void
  ): void;

  /**
   * @see {@link GetImagesCommand}
   */
  getImages(
    args: GetImagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetImagesCommandOutput>;
  getImages(
    args: GetImagesCommandInput,
    cb: (err: any, data?: GetImagesCommandOutput) => void
  ): void;
  getImages(
    args: GetImagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetImagesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMediaForFragmentListCommand}
   */
  getMediaForFragmentList(
    args: GetMediaForFragmentListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMediaForFragmentListCommandOutput>;
  getMediaForFragmentList(
    args: GetMediaForFragmentListCommandInput,
    cb: (err: any, data?: GetMediaForFragmentListCommandOutput) => void
  ): void;
  getMediaForFragmentList(
    args: GetMediaForFragmentListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMediaForFragmentListCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFragmentsCommand}
   */
  listFragments(): Promise<ListFragmentsCommandOutput>;
  listFragments(
    args: ListFragmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFragmentsCommandOutput>;
  listFragments(
    args: ListFragmentsCommandInput,
    cb: (err: any, data?: ListFragmentsCommandOutput) => void
  ): void;
  listFragments(
    args: ListFragmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFragmentsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetImagesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetImagesCommandOutput}.
   */
  paginateGetImages(
    args: GetImagesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetImagesCommandOutput>;

  /**
   * @see {@link ListFragmentsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListFragmentsCommandOutput}.
   */
  paginateListFragments(
    args?: ListFragmentsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListFragmentsCommandOutput>;
}

/**
 * <p></p>
 * @public
 */
export class KinesisVideoArchivedMedia extends KinesisVideoArchivedMediaClient implements KinesisVideoArchivedMedia {}
createAggregatedClient(commands, KinesisVideoArchivedMedia, { paginators });
