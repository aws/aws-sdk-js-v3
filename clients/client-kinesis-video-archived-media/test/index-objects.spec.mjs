import {
  ClientLimitExceededException,
  ClientLimitExceededException$,
  ClipFragmentSelector$,
  ClipFragmentSelectorType,
  ClipTimestampRange$,
  ContainerFormat,
  DASHDisplayFragmentNumber,
  DASHDisplayFragmentTimestamp,
  DASHFragmentSelector$,
  DASHFragmentSelectorType,
  DASHPlaybackMode,
  DASHTimestampRange$,
  Format,
  FormatConfigKey,
  Fragment$,
  FragmentSelector$,
  FragmentSelectorType,
  GetClip$,
  GetClipCommand,
  GetClipInput$,
  GetClipOutput$,
  GetDASHStreamingSessionURL$,
  GetDASHStreamingSessionURLCommand,
  GetDASHStreamingSessionURLInput$,
  GetDASHStreamingSessionURLOutput$,
  GetHLSStreamingSessionURL$,
  GetHLSStreamingSessionURLCommand,
  GetHLSStreamingSessionURLInput$,
  GetHLSStreamingSessionURLOutput$,
  GetImages$,
  GetImagesCommand,
  GetImagesInput$,
  GetImagesOutput$,
  GetMediaForFragmentList$,
  GetMediaForFragmentListCommand,
  GetMediaForFragmentListInput$,
  GetMediaForFragmentListOutput$,
  HLSDiscontinuityMode,
  HLSDisplayFragmentTimestamp,
  HLSFragmentSelector$,
  HLSFragmentSelectorType,
  HLSPlaybackMode,
  HLSTimestampRange$,
  Image$,
  ImageError,
  ImageSelectorType,
  InvalidArgumentException,
  InvalidArgumentException$,
  InvalidCodecPrivateDataException,
  InvalidCodecPrivateDataException$,
  InvalidMediaFrameException,
  InvalidMediaFrameException$,
  KinesisVideoArchivedMedia,
  KinesisVideoArchivedMediaClient,
  KinesisVideoArchivedMediaServiceException,
  ListFragments$,
  ListFragmentsCommand,
  ListFragmentsInput$,
  ListFragmentsOutput$,
  MissingCodecPrivateDataException,
  MissingCodecPrivateDataException$,
  NoDataRetentionException,
  NoDataRetentionException$,
  NotAuthorizedException,
  NotAuthorizedException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  TimestampRange$,
  UnsupportedStreamMediaTypeException,
  UnsupportedStreamMediaTypeException$,
  paginateGetImages,
  paginateListFragments,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof KinesisVideoArchivedMediaClient === "function");
assert(typeof KinesisVideoArchivedMedia === "function");
// commands
assert(typeof GetClipCommand === "function");
assert(typeof GetClip$ === "object");
assert(typeof GetDASHStreamingSessionURLCommand === "function");
assert(typeof GetDASHStreamingSessionURL$ === "object");
assert(typeof GetHLSStreamingSessionURLCommand === "function");
assert(typeof GetHLSStreamingSessionURL$ === "object");
assert(typeof GetImagesCommand === "function");
assert(typeof GetImages$ === "object");
assert(typeof GetMediaForFragmentListCommand === "function");
assert(typeof GetMediaForFragmentList$ === "object");
assert(typeof ListFragmentsCommand === "function");
assert(typeof ListFragments$ === "object");
// structural schemas
assert(typeof ClipFragmentSelector$ === "object");
assert(typeof ClipTimestampRange$ === "object");
assert(typeof DASHFragmentSelector$ === "object");
assert(typeof DASHTimestampRange$ === "object");
assert(typeof Fragment$ === "object");
assert(typeof FragmentSelector$ === "object");
assert(typeof GetClipInput$ === "object");
assert(typeof GetClipOutput$ === "object");
assert(typeof GetDASHStreamingSessionURLInput$ === "object");
assert(typeof GetDASHStreamingSessionURLOutput$ === "object");
assert(typeof GetHLSStreamingSessionURLInput$ === "object");
assert(typeof GetHLSStreamingSessionURLOutput$ === "object");
assert(typeof GetImagesInput$ === "object");
assert(typeof GetImagesOutput$ === "object");
assert(typeof GetMediaForFragmentListInput$ === "object");
assert(typeof GetMediaForFragmentListOutput$ === "object");
assert(typeof HLSFragmentSelector$ === "object");
assert(typeof HLSTimestampRange$ === "object");
assert(typeof Image$ === "object");
assert(typeof ListFragmentsInput$ === "object");
assert(typeof ListFragmentsOutput$ === "object");
assert(typeof TimestampRange$ === "object");
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
assert(typeof ClientLimitExceededException$ === "object");
assert(InvalidArgumentException.prototype instanceof KinesisVideoArchivedMediaServiceException);
assert(typeof InvalidArgumentException$ === "object");
assert(InvalidCodecPrivateDataException.prototype instanceof KinesisVideoArchivedMediaServiceException);
assert(typeof InvalidCodecPrivateDataException$ === "object");
assert(InvalidMediaFrameException.prototype instanceof KinesisVideoArchivedMediaServiceException);
assert(typeof InvalidMediaFrameException$ === "object");
assert(MissingCodecPrivateDataException.prototype instanceof KinesisVideoArchivedMediaServiceException);
assert(typeof MissingCodecPrivateDataException$ === "object");
assert(NoDataRetentionException.prototype instanceof KinesisVideoArchivedMediaServiceException);
assert(typeof NoDataRetentionException$ === "object");
assert(NotAuthorizedException.prototype instanceof KinesisVideoArchivedMediaServiceException);
assert(typeof NotAuthorizedException$ === "object");
assert(ResourceNotFoundException.prototype instanceof KinesisVideoArchivedMediaServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(UnsupportedStreamMediaTypeException.prototype instanceof KinesisVideoArchivedMediaServiceException);
assert(typeof UnsupportedStreamMediaTypeException$ === "object");
assert(KinesisVideoArchivedMediaServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetImages === "function");
assert(typeof paginateListFragments === "function");
console.log(`KinesisVideoArchivedMedia index test passed.`);
