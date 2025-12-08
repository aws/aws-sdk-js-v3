import {
  ClientLimitExceededException,
  ClipFragmentSelectorType,
  ContainerFormat,
  DASHDisplayFragmentNumber,
  DASHDisplayFragmentTimestamp,
  DASHFragmentSelectorType,
  DASHPlaybackMode,
  Format,
  FormatConfigKey,
  FragmentSelectorType,
  GetClipCommand,
  GetDASHStreamingSessionURLCommand,
  GetHLSStreamingSessionURLCommand,
  GetImagesCommand,
  GetMediaForFragmentListCommand,
  HLSDiscontinuityMode,
  HLSDisplayFragmentTimestamp,
  HLSFragmentSelectorType,
  HLSPlaybackMode,
  ImageError,
  ImageSelectorType,
  InvalidArgumentException,
  InvalidCodecPrivateDataException,
  InvalidMediaFrameException,
  KinesisVideoArchivedMedia,
  KinesisVideoArchivedMediaClient,
  KinesisVideoArchivedMediaServiceException,
  ListFragmentsCommand,
  MissingCodecPrivateDataException,
  NoDataRetentionException,
  NotAuthorizedException,
  ResourceNotFoundException,
  UnsupportedStreamMediaTypeException,
  paginateGetImages,
  paginateListFragments,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof KinesisVideoArchivedMediaClient === "function");
assert(typeof KinesisVideoArchivedMedia === "function");
// commands
assert(typeof GetClipCommand === "function");
assert(typeof GetDASHStreamingSessionURLCommand === "function");
assert(typeof GetHLSStreamingSessionURLCommand === "function");
assert(typeof GetImagesCommand === "function");
assert(typeof GetMediaForFragmentListCommand === "function");
assert(typeof ListFragmentsCommand === "function");
// enums
assert(typeof ClipFragmentSelectorType === "object");
assert(typeof ContainerFormat === "object");
assert(typeof DASHDisplayFragmentNumber === "object");
assert(typeof DASHDisplayFragmentTimestamp === "object");
assert(typeof DASHFragmentSelectorType === "object");
assert(typeof DASHPlaybackMode === "object");
assert(typeof Format === "object");
assert(typeof FormatConfigKey === "object");
assert(typeof FragmentSelectorType === "object");
assert(typeof HLSDiscontinuityMode === "object");
assert(typeof HLSDisplayFragmentTimestamp === "object");
assert(typeof HLSFragmentSelectorType === "object");
assert(typeof HLSPlaybackMode === "object");
assert(typeof ImageError === "object");
assert(typeof ImageSelectorType === "object");
// errors
assert(ClientLimitExceededException.prototype instanceof KinesisVideoArchivedMediaServiceException);
assert(InvalidArgumentException.prototype instanceof KinesisVideoArchivedMediaServiceException);
assert(InvalidCodecPrivateDataException.prototype instanceof KinesisVideoArchivedMediaServiceException);
assert(InvalidMediaFrameException.prototype instanceof KinesisVideoArchivedMediaServiceException);
assert(MissingCodecPrivateDataException.prototype instanceof KinesisVideoArchivedMediaServiceException);
assert(NoDataRetentionException.prototype instanceof KinesisVideoArchivedMediaServiceException);
assert(NotAuthorizedException.prototype instanceof KinesisVideoArchivedMediaServiceException);
assert(ResourceNotFoundException.prototype instanceof KinesisVideoArchivedMediaServiceException);
assert(UnsupportedStreamMediaTypeException.prototype instanceof KinesisVideoArchivedMediaServiceException);
assert(KinesisVideoArchivedMediaServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetImages === "function");
assert(typeof paginateListFragments === "function");
console.log(`KinesisVideoArchivedMedia index test passed.`);
