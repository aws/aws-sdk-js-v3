// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CopyImageSetCommand,
  CopyImageSetCommandInput,
  CopyImageSetCommandOutput,
} from "./commands/CopyImageSetCommand";
import {
  CreateDatastoreCommand,
  CreateDatastoreCommandInput,
  CreateDatastoreCommandOutput,
} from "./commands/CreateDatastoreCommand";
import {
  DeleteDatastoreCommand,
  DeleteDatastoreCommandInput,
  DeleteDatastoreCommandOutput,
} from "./commands/DeleteDatastoreCommand";
import {
  DeleteImageSetCommand,
  DeleteImageSetCommandInput,
  DeleteImageSetCommandOutput,
} from "./commands/DeleteImageSetCommand";
import {
  GetDatastoreCommand,
  GetDatastoreCommandInput,
  GetDatastoreCommandOutput,
} from "./commands/GetDatastoreCommand";
import {
  GetDICOMImportJobCommand,
  GetDICOMImportJobCommandInput,
  GetDICOMImportJobCommandOutput,
} from "./commands/GetDICOMImportJobCommand";
import {
  GetImageFrameCommand,
  GetImageFrameCommandInput,
  GetImageFrameCommandOutput,
} from "./commands/GetImageFrameCommand";
import { GetImageSetCommand, GetImageSetCommandInput, GetImageSetCommandOutput } from "./commands/GetImageSetCommand";
import {
  GetImageSetMetadataCommand,
  GetImageSetMetadataCommandInput,
  GetImageSetMetadataCommandOutput,
} from "./commands/GetImageSetMetadataCommand";
import {
  ListDatastoresCommand,
  ListDatastoresCommandInput,
  ListDatastoresCommandOutput,
} from "./commands/ListDatastoresCommand";
import {
  ListDICOMImportJobsCommand,
  ListDICOMImportJobsCommandInput,
  ListDICOMImportJobsCommandOutput,
} from "./commands/ListDICOMImportJobsCommand";
import {
  ListImageSetVersionsCommand,
  ListImageSetVersionsCommandInput,
  ListImageSetVersionsCommandOutput,
} from "./commands/ListImageSetVersionsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  SearchImageSetsCommand,
  SearchImageSetsCommandInput,
  SearchImageSetsCommandOutput,
} from "./commands/SearchImageSetsCommand";
import {
  StartDICOMImportJobCommand,
  StartDICOMImportJobCommandInput,
  StartDICOMImportJobCommandOutput,
} from "./commands/StartDICOMImportJobCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateImageSetMetadataCommand,
  UpdateImageSetMetadataCommandInput,
  UpdateImageSetMetadataCommandOutput,
} from "./commands/UpdateImageSetMetadataCommand";
import { MedicalImagingClient, MedicalImagingClientConfig } from "./MedicalImagingClient";

const commands = {
  CopyImageSetCommand,
  CreateDatastoreCommand,
  DeleteDatastoreCommand,
  DeleteImageSetCommand,
  GetDatastoreCommand,
  GetDICOMImportJobCommand,
  GetImageFrameCommand,
  GetImageSetCommand,
  GetImageSetMetadataCommand,
  ListDatastoresCommand,
  ListDICOMImportJobsCommand,
  ListImageSetVersionsCommand,
  ListTagsForResourceCommand,
  SearchImageSetsCommand,
  StartDICOMImportJobCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateImageSetMetadataCommand,
};

export interface MedicalImaging {
  /**
   * @see {@link CopyImageSetCommand}
   */
  copyImageSet(args: CopyImageSetCommandInput, options?: __HttpHandlerOptions): Promise<CopyImageSetCommandOutput>;
  copyImageSet(args: CopyImageSetCommandInput, cb: (err: any, data?: CopyImageSetCommandOutput) => void): void;
  copyImageSet(
    args: CopyImageSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CopyImageSetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDatastoreCommand}
   */
  createDatastore(
    args: CreateDatastoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDatastoreCommandOutput>;
  createDatastore(args: CreateDatastoreCommandInput, cb: (err: any, data?: CreateDatastoreCommandOutput) => void): void;
  createDatastore(
    args: CreateDatastoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDatastoreCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDatastoreCommand}
   */
  deleteDatastore(
    args: DeleteDatastoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDatastoreCommandOutput>;
  deleteDatastore(args: DeleteDatastoreCommandInput, cb: (err: any, data?: DeleteDatastoreCommandOutput) => void): void;
  deleteDatastore(
    args: DeleteDatastoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDatastoreCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteImageSetCommand}
   */
  deleteImageSet(
    args: DeleteImageSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteImageSetCommandOutput>;
  deleteImageSet(args: DeleteImageSetCommandInput, cb: (err: any, data?: DeleteImageSetCommandOutput) => void): void;
  deleteImageSet(
    args: DeleteImageSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteImageSetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDatastoreCommand}
   */
  getDatastore(args: GetDatastoreCommandInput, options?: __HttpHandlerOptions): Promise<GetDatastoreCommandOutput>;
  getDatastore(args: GetDatastoreCommandInput, cb: (err: any, data?: GetDatastoreCommandOutput) => void): void;
  getDatastore(
    args: GetDatastoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDatastoreCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDICOMImportJobCommand}
   */
  getDICOMImportJob(
    args: GetDICOMImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDICOMImportJobCommandOutput>;
  getDICOMImportJob(
    args: GetDICOMImportJobCommandInput,
    cb: (err: any, data?: GetDICOMImportJobCommandOutput) => void
  ): void;
  getDICOMImportJob(
    args: GetDICOMImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDICOMImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetImageFrameCommand}
   */
  getImageFrame(args: GetImageFrameCommandInput, options?: __HttpHandlerOptions): Promise<GetImageFrameCommandOutput>;
  getImageFrame(args: GetImageFrameCommandInput, cb: (err: any, data?: GetImageFrameCommandOutput) => void): void;
  getImageFrame(
    args: GetImageFrameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetImageFrameCommandOutput) => void
  ): void;

  /**
   * @see {@link GetImageSetCommand}
   */
  getImageSet(args: GetImageSetCommandInput, options?: __HttpHandlerOptions): Promise<GetImageSetCommandOutput>;
  getImageSet(args: GetImageSetCommandInput, cb: (err: any, data?: GetImageSetCommandOutput) => void): void;
  getImageSet(
    args: GetImageSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetImageSetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetImageSetMetadataCommand}
   */
  getImageSetMetadata(
    args: GetImageSetMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetImageSetMetadataCommandOutput>;
  getImageSetMetadata(
    args: GetImageSetMetadataCommandInput,
    cb: (err: any, data?: GetImageSetMetadataCommandOutput) => void
  ): void;
  getImageSetMetadata(
    args: GetImageSetMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetImageSetMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDatastoresCommand}
   */
  listDatastores(): Promise<ListDatastoresCommandOutput>;
  listDatastores(
    args: ListDatastoresCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDatastoresCommandOutput>;
  listDatastores(args: ListDatastoresCommandInput, cb: (err: any, data?: ListDatastoresCommandOutput) => void): void;
  listDatastores(
    args: ListDatastoresCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDatastoresCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDICOMImportJobsCommand}
   */
  listDICOMImportJobs(
    args: ListDICOMImportJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDICOMImportJobsCommandOutput>;
  listDICOMImportJobs(
    args: ListDICOMImportJobsCommandInput,
    cb: (err: any, data?: ListDICOMImportJobsCommandOutput) => void
  ): void;
  listDICOMImportJobs(
    args: ListDICOMImportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDICOMImportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListImageSetVersionsCommand}
   */
  listImageSetVersions(
    args: ListImageSetVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListImageSetVersionsCommandOutput>;
  listImageSetVersions(
    args: ListImageSetVersionsCommandInput,
    cb: (err: any, data?: ListImageSetVersionsCommandOutput) => void
  ): void;
  listImageSetVersions(
    args: ListImageSetVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListImageSetVersionsCommandOutput) => void
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
   * @see {@link SearchImageSetsCommand}
   */
  searchImageSets(
    args: SearchImageSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchImageSetsCommandOutput>;
  searchImageSets(args: SearchImageSetsCommandInput, cb: (err: any, data?: SearchImageSetsCommandOutput) => void): void;
  searchImageSets(
    args: SearchImageSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchImageSetsCommandOutput) => void
  ): void;

  /**
   * @see {@link StartDICOMImportJobCommand}
   */
  startDICOMImportJob(
    args: StartDICOMImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDICOMImportJobCommandOutput>;
  startDICOMImportJob(
    args: StartDICOMImportJobCommandInput,
    cb: (err: any, data?: StartDICOMImportJobCommandOutput) => void
  ): void;
  startDICOMImportJob(
    args: StartDICOMImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDICOMImportJobCommandOutput) => void
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
   * @see {@link UpdateImageSetMetadataCommand}
   */
  updateImageSetMetadata(
    args: UpdateImageSetMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateImageSetMetadataCommandOutput>;
  updateImageSetMetadata(
    args: UpdateImageSetMetadataCommandInput,
    cb: (err: any, data?: UpdateImageSetMetadataCommandOutput) => void
  ): void;
  updateImageSetMetadata(
    args: UpdateImageSetMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateImageSetMetadataCommandOutput) => void
  ): void;
}

/**
 * <p>This is the <i>AWS HealthImaging API Reference</i>. For an introduction to the service, see <a href="https://docs.aws.amazon.com/healthimaging/latest/devguide/what-is.html">What is AWS HealthImaging?</a> in the <i>AWS HealthImaging Developer Guide</i>.</p>
 * @public
 */
export class MedicalImaging extends MedicalImagingClient implements MedicalImaging {}
createAggregatedClient(commands, MedicalImaging);
