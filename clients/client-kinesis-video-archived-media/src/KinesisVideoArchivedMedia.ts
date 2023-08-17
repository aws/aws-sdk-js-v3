// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { GetClipCommand, GetClipCommandInput, GetClipCommandOutput } from "./commands/GetClipCommand";
import {
  GetDASHStreamingSessionURLCommand,
  GetDASHStreamingSessionURLCommandInput,
  GetDASHStreamingSessionURLCommandOutput,
} from "./commands/GetDASHStreamingSessionURLCommand";
import {
  GetHLSStreamingSessionURLCommand,
  GetHLSStreamingSessionURLCommandInput,
  GetHLSStreamingSessionURLCommandOutput,
} from "./commands/GetHLSStreamingSessionURLCommand";
import { GetImagesCommand, GetImagesCommandInput, GetImagesCommandOutput } from "./commands/GetImagesCommand";
import {
  GetMediaForFragmentListCommand,
  GetMediaForFragmentListCommandInput,
  GetMediaForFragmentListCommandOutput,
} from "./commands/GetMediaForFragmentListCommand";
import {
  ListFragmentsCommand,
  ListFragmentsCommandInput,
  ListFragmentsCommandOutput,
} from "./commands/ListFragmentsCommand";
import {
  KinesisVideoArchivedMediaClient,
  KinesisVideoArchivedMediaClientConfig,
} from "./KinesisVideoArchivedMediaClient";

const commands = {
  GetClipCommand,
  GetDASHStreamingSessionURLCommand,
  GetHLSStreamingSessionURLCommand,
  GetImagesCommand,
  GetMediaForFragmentListCommand,
  ListFragmentsCommand,
};

export interface KinesisVideoArchivedMedia {
  /**
   * @see {@link GetClipCommand}
   */
  getClip(args: GetClipCommandInput, options?: __HttpHandlerOptions): Promise<GetClipCommandOutput>;
  getClip(args: GetClipCommandInput, cb: (err: any, data?: GetClipCommandOutput) => void): void;
  getClip(
    args: GetClipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetClipCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDASHStreamingSessionURLCommand}
   */
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
  getImages(args: GetImagesCommandInput, options?: __HttpHandlerOptions): Promise<GetImagesCommandOutput>;
  getImages(args: GetImagesCommandInput, cb: (err: any, data?: GetImagesCommandOutput) => void): void;
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
  listFragments(args: ListFragmentsCommandInput, options?: __HttpHandlerOptions): Promise<ListFragmentsCommandOutput>;
  listFragments(args: ListFragmentsCommandInput, cb: (err: any, data?: ListFragmentsCommandOutput) => void): void;
  listFragments(
    args: ListFragmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFragmentsCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p></p>
 */
export class KinesisVideoArchivedMedia extends KinesisVideoArchivedMediaClient implements KinesisVideoArchivedMedia {}
createAggregatedClient(commands, KinesisVideoArchivedMedia);
