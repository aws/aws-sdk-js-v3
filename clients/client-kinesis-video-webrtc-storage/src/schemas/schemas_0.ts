const _ADE = "AccessDeniedException";
const _CLEE = "ClientLimitExceededException";
const _IAE = "InvalidArgumentException";
const _JSS = "JoinStorageSession";
const _JSSAV = "JoinStorageSessionAsViewer";
const _JSSAVI = "JoinStorageSessionAsViewerInput";
const _JSSI = "JoinStorageSessionInput";
const _RNFE = "ResourceNotFoundException";
const _c = "client";
const _cA = "channelArn";
const _cI = "clientId";
const _e = "error";
const _h = "http";
const _hE = "httpError";
const _m = "message";
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.kinesisvideowebrtcstorage";
const n0 = "com.amazonaws.kinesisvideowebrtcstorage";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type { StaticErrorSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import {
  AccessDeniedException,
  ClientLimitExceededException,
  InvalidArgumentException,
  ResourceNotFoundException,
} from "../models/errors";
import { KinesisVideoWebRTCStorageServiceException } from "../models/KinesisVideoWebRTCStorageServiceException";

/* eslint no-var: 0 */
export var AccessDeniedException$: StaticErrorSchema = [-3, n0, _ADE,
  { [_e]: _c, [_hE]: 403 },
  [_m],
  [0]
];
TypeRegistry.for(n0).registerError(AccessDeniedException$, AccessDeniedException);
export var ClientLimitExceededException$: StaticErrorSchema = [-3, n0, _CLEE,
  { [_e]: _c, [_hE]: 400 },
  [_m],
  [0]
];
TypeRegistry.for(n0).registerError(ClientLimitExceededException$, ClientLimitExceededException);
export var InvalidArgumentException$: StaticErrorSchema = [-3, n0, _IAE,
  { [_e]: _c, [_hE]: 400 },
  [_m],
  [0]
];
TypeRegistry.for(n0).registerError(InvalidArgumentException$, InvalidArgumentException);
export var JoinStorageSessionAsViewerInput$: StaticStructureSchema = [3, n0, _JSSAVI,
  0,
  [_cA, _cI],
  [0, 0]
];
export var JoinStorageSessionInput$: StaticStructureSchema = [3, n0, _JSSI,
  0,
  [_cA],
  [0]
];
export var ResourceNotFoundException$: StaticErrorSchema = [-3, n0, _RNFE,
  { [_e]: _c, [_hE]: 404 },
  [_m],
  [0]
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException$, ResourceNotFoundException);
var __Unit = "unit" as const;
export var KinesisVideoWebRTCStorageServiceException$: StaticErrorSchema = [-3, _s, "KinesisVideoWebRTCStorageServiceException", 0, [], []];
TypeRegistry.for(_s).registerError(KinesisVideoWebRTCStorageServiceException$, KinesisVideoWebRTCStorageServiceException);
export var JoinStorageSession$: StaticOperationSchema = [9, n0, _JSS,
  { [_h]: ["POST", "/joinStorageSession", 200] }, () => JoinStorageSessionInput$, () => __Unit
];
export var JoinStorageSessionAsViewer$: StaticOperationSchema = [9, n0, _JSSAV,
  { [_h]: ["POST", "/joinStorageSessionAsViewer", 200] }, () => JoinStorageSessionAsViewerInput$, () => __Unit
];
