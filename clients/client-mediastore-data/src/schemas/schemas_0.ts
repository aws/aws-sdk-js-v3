const _B = "Body";
const _CC = "CacheControl";
const _CC_ = "Cache-Control";
const _CL = "ContentLength";
const _CL_ = "Content-Length";
const _CNFE = "ContainerNotFoundException";
const _CR = "ContentRange";
const _CR_ = "Content-Range";
const _CSHA = "ContentSHA256";
const _CT = "ContentType";
const _CT_ = "Content-Type";
const _DO = "DeleteObject";
const _DOR = "DeleteObjectRequest";
const _DORe = "DeleteObjectResponse";
const _DORes = "DescribeObjectRequest";
const _DOResc = "DescribeObjectResponse";
const _DOe = "DescribeObject";
const _ET = "ETag";
const _GO = "GetObject";
const _GOR = "GetObjectRequest";
const _GORe = "GetObjectResponse";
const _I = "Item";
const _IL = "ItemList";
const _ISE = "InternalServerError";
const _It = "Items";
const _LI = "ListItems";
const _LIR = "ListItemsRequest";
const _LIRi = "ListItemsResponse";
const _LM = "LastModified";
const _LM_ = "Last-Modified";
const _M = "Message";
const _MR = "MaxResults";
const _N = "Name";
const _NT = "NextToken";
const _ONFE = "ObjectNotFoundException";
const _P = "Path";
const _PB = "PayloadBlob";
const _PO = "PutObject";
const _POR = "PutObjectRequest";
const _PORu = "PutObjectResponse";
const _R = "Range";
const _RRNSE = "RequestedRangeNotSatisfiableException";
const _SC = "StatusCode";
const _SCt = "StorageClass";
const _T = "Type";
const _UA = "UploadAvailability";
const _c = "client";
const _e = "error";
const _h = "http";
const _hE = "httpError";
const _hH = "httpHeader";
const _hQ = "httpQuery";
const _s = "streaming";
const _se = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.mediastoredata";
const _xasc = "x-amz-storage-class";
const _xaua = "x-amz-upload-availability";
const n0 = "com.amazonaws.mediastoredata";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
} from "@smithy/types";

import {
  ContainerNotFoundException as __ContainerNotFoundException,
  InternalServerError as __InternalServerError,
  ObjectNotFoundException as __ObjectNotFoundException,
  RequestedRangeNotSatisfiableException as __RequestedRangeNotSatisfiableException,
} from "../models/errors";
import { MediaStoreDataServiceException as __MediaStoreDataServiceException } from "../models/MediaStoreDataServiceException";

/* eslint no-var: 0 */
export var PayloadBlob: StaticSimpleSchema = [0, n0, _PB, { [_s]: 1 }, 42];
export var ContainerNotFoundException: StaticErrorSchema = [-3, n0, _CNFE, { [_e]: _c, [_hE]: 404 }, [_M], [0]];
TypeRegistry.for(n0).registerError(ContainerNotFoundException, __ContainerNotFoundException);
export var DeleteObjectRequest: StaticStructureSchema = [3, n0, _DOR, 0, [_P], [[0, 1]]];
export var DeleteObjectResponse: StaticStructureSchema = [3, n0, _DORe, 0, [], []];
export var DescribeObjectRequest: StaticStructureSchema = [3, n0, _DORes, 0, [_P], [[0, 1]]];
export var DescribeObjectResponse: StaticStructureSchema = [
  3,
  n0,
  _DOResc,
  0,
  [_ET, _CT, _CL, _CC, _LM],
  [
    [0, { [_hH]: _ET }],
    [0, { [_hH]: _CT_ }],
    [1, { [_hH]: _CL_ }],
    [0, { [_hH]: _CC_ }],
    [4, { [_hH]: _LM_ }],
  ],
];
export var GetObjectRequest: StaticStructureSchema = [
  3,
  n0,
  _GOR,
  0,
  [_P, _R],
  [
    [0, 1],
    [0, { [_hH]: _R }],
  ],
];
export var GetObjectResponse: StaticStructureSchema = [
  3,
  n0,
  _GORe,
  0,
  [_B, _CC, _CR, _CL, _CT, _ET, _LM, _SC],
  [
    [() => PayloadBlob, 16],
    [0, { [_hH]: _CC_ }],
    [0, { [_hH]: _CR_ }],
    [1, { [_hH]: _CL_ }],
    [0, { [_hH]: _CT_ }],
    [0, { [_hH]: _ET }],
    [4, { [_hH]: _LM_ }],
    [1, 32],
  ],
];
export var InternalServerError: StaticErrorSchema = [-3, n0, _ISE, { [_e]: _se }, [_M], [0]];
TypeRegistry.for(n0).registerError(InternalServerError, __InternalServerError);
export var Item: StaticStructureSchema = [3, n0, _I, 0, [_N, _T, _ET, _LM, _CT, _CL], [0, 0, 0, 4, 0, 1]];
export var ListItemsRequest: StaticStructureSchema = [
  3,
  n0,
  _LIR,
  0,
  [_P, _MR, _NT],
  [
    [0, { [_hQ]: _P }],
    [1, { [_hQ]: _MR }],
    [0, { [_hQ]: _NT }],
  ],
];
export var ListItemsResponse: StaticStructureSchema = [3, n0, _LIRi, 0, [_It, _NT], [() => ItemList, 0]];
export var ObjectNotFoundException: StaticErrorSchema = [-3, n0, _ONFE, { [_e]: _c, [_hE]: 404 }, [_M], [0]];
TypeRegistry.for(n0).registerError(ObjectNotFoundException, __ObjectNotFoundException);
export var PutObjectRequest: StaticStructureSchema = [
  3,
  n0,
  _POR,
  0,
  [_B, _P, _CT, _CC, _SCt, _UA],
  [
    [() => PayloadBlob, 16],
    [0, 1],
    [0, { [_hH]: _CT_ }],
    [0, { [_hH]: _CC_ }],
    [0, { [_hH]: _xasc }],
    [0, { [_hH]: _xaua }],
  ],
];
export var PutObjectResponse: StaticStructureSchema = [3, n0, _PORu, 0, [_CSHA, _ET, _SCt], [0, 0, 0]];
export var RequestedRangeNotSatisfiableException: StaticErrorSchema = [
  -3,
  n0,
  _RRNSE,
  { [_e]: _c, [_hE]: 416 },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(RequestedRangeNotSatisfiableException, __RequestedRangeNotSatisfiableException);
export var MediaStoreDataServiceException: StaticErrorSchema = [-3, _sm, "MediaStoreDataServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(MediaStoreDataServiceException, __MediaStoreDataServiceException);
export var ItemList: StaticListSchema = [1, n0, _IL, 0, () => Item];
export var DeleteObject: StaticOperationSchema = [
  9,
  n0,
  _DO,
  { [_h]: ["DELETE", "/{Path+}", 200] },
  () => DeleteObjectRequest,
  () => DeleteObjectResponse,
];
export var DescribeObject: StaticOperationSchema = [
  9,
  n0,
  _DOe,
  { [_h]: ["HEAD", "/{Path+}", 200] },
  () => DescribeObjectRequest,
  () => DescribeObjectResponse,
];
export var GetObject: StaticOperationSchema = [
  9,
  n0,
  _GO,
  { [_h]: ["GET", "/{Path+}", 200] },
  () => GetObjectRequest,
  () => GetObjectResponse,
];
export var ListItems: StaticOperationSchema = [
  9,
  n0,
  _LI,
  { [_h]: ["GET", "/", 200] },
  () => ListItemsRequest,
  () => ListItemsResponse,
];
export var PutObject: StaticOperationSchema = [
  9,
  n0,
  _PO,
  { [_h]: ["PUT", "/{Path+}", 200] },
  () => PutObjectRequest,
  () => PutObjectResponse,
];
