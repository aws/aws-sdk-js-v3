export const _ADE = "AccessDeniedException";
export const _CLEE = "ClientLimitExceededException";
export const _IAE = "InvalidArgumentException";
export const _JSS = "JoinStorageSession";
export const _JSSAV = "JoinStorageSessionAsViewer";
export const _JSSAVI = "JoinStorageSessionAsViewerInput";
export const _JSSI = "JoinStorageSessionInput";
export const _RNFE = "ResourceNotFoundException";
export const _c = "client";
export const _cA = "channelArn";
export const _cI = "clientId";
export const _e = "error";
export const _h = "http";
export const _hE = "httpError";
export const _m = "message";
export const n0 = "com.amazonaws.kinesisvideowebrtcstorage";

// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import { KinesisVideoWebRTCStorageServiceException as __KinesisVideoWebRTCStorageServiceException } from "../models/KinesisVideoWebRTCStorageServiceException";

/* eslint no-var: 0 */

export var Unit = "unit" as const;

export var KinesisVideoWebRTCStorageServiceException = error(
  "smithy.ts.sdk.synthetic.com.amazonaws.kinesisvideowebrtcstorage",
  "KinesisVideoWebRTCStorageServiceException",
  0,
  [],
  [],
  __KinesisVideoWebRTCStorageServiceException
);
