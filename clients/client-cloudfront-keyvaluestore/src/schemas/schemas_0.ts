const _ADE = "AccessDeniedException";
const _C = "Created";
const _CE = "ConflictException";
const _D = "Deletes";
const _DK = "DeleteKey";
const _DKR = "DeleteKeyRequest";
const _DKRL = "DeleteKeyRequestsList";
const _DKRLI = "DeleteKeyRequestListItem";
const _DKRe = "DeleteKeyResponse";
const _DKVS = "DescribeKeyValueStore";
const _DKVSR = "DescribeKeyValueStoreRequest";
const _DKVSRe = "DescribeKeyValueStoreResponse";
const _ET = "ETag";
const _FR = "FailureReason";
const _GK = "GetKey";
const _GKR = "GetKeyRequest";
const _GKRe = "GetKeyResponse";
const _I = "Items";
const _IC = "ItemCount";
const _IM = "IfMatch";
const _IM_ = "If-Match";
const _ISE = "InternalServerException";
const _K = "Key";
const _KARN = "KvsARN";
const _LK = "ListKeys";
const _LKR = "ListKeysRequest";
const _LKRL = "ListKeysResponseList";
const _LKRLI = "ListKeysResponseListItem";
const _LKRi = "ListKeysResponse";
const _LM = "LastModified";
const _M = "Message";
const _MR = "MaxResults";
const _NT = "NextToken";
const _P = "Puts";
const _PK = "PutKey";
const _PKR = "PutKeyRequest";
const _PKRL = "PutKeyRequestsList";
const _PKRLI = "PutKeyRequestListItem";
const _PKRu = "PutKeyResponse";
const _RNFE = "ResourceNotFoundException";
const _S = "Status";
const _SQEE = "ServiceQuotaExceededException";
const _TSIB = "TotalSizeInBytes";
const _UK = "UpdateKeys";
const _UKR = "UpdateKeysRequest";
const _UKRp = "UpdateKeysResponse";
const _V = "Value";
const _VE = "ValidationException";
const _c = "client";
const _e = "error";
const _h = "http";
const _hE = "httpError";
const _hH = "httpHeader";
const _hQ = "httpQuery";
const _s = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.cloudfrontkeyvaluestore";
const n0 = "com.amazonaws.cloudfrontkeyvaluestore";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
} from "@smithy/types";

import { CloudFrontKeyValueStoreServiceException } from "../models/CloudFrontKeyValueStoreServiceException";
import {
  AccessDeniedException,
  ConflictException,
  InternalServerException,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ValidationException,
} from "../models/errors";

/* eslint no-var: 0 */
var Value: StaticSimpleSchema = [0, n0, _V, 8, 0];
export var AccessDeniedException$: StaticErrorSchema = [-3, n0, _ADE,
  { [_e]: _c, [_hE]: 403 },
  [_M],
  [0]
];
TypeRegistry.for(n0).registerError(AccessDeniedException$, AccessDeniedException);
export var ConflictException$: StaticErrorSchema = [-3, n0, _CE,
  { [_e]: _c, [_hE]: 409 },
  [_M],
  [0]
];
TypeRegistry.for(n0).registerError(ConflictException$, ConflictException);
export var DeleteKeyRequest$: StaticStructureSchema = [3, n0, _DKR,
  0,
  [_KARN, _K, _IM],
  [[0, 1], [0, 1], [0, { [_hH]: _IM_ }]]
];
export var DeleteKeyRequestListItem$: StaticStructureSchema = [3, n0, _DKRLI,
  0,
  [_K],
  [0]
];
export var DeleteKeyResponse$: StaticStructureSchema = [3, n0, _DKRe,
  0,
  [_IC, _TSIB, _ET],
  [1, 1, [0, { [_hH]: _ET }]]
];
export var DescribeKeyValueStoreRequest$: StaticStructureSchema = [3, n0, _DKVSR,
  0,
  [_KARN],
  [[0, 1]]
];
export var DescribeKeyValueStoreResponse$: StaticStructureSchema = [3, n0, _DKVSRe,
  0,
  [_IC, _TSIB, _KARN, _C, _ET, _LM, _S, _FR],
  [1, 1, 0, 4, [0, { [_hH]: _ET }], 4, 0, 0]
];
export var GetKeyRequest$: StaticStructureSchema = [3, n0, _GKR,
  0,
  [_KARN, _K],
  [[0, 1], [0, 1]]
];
export var GetKeyResponse$: StaticStructureSchema = [3, n0, _GKRe,
  0,
  [_K, _V, _IC, _TSIB],
  [0, [() => Value, 0], 1, 1]
];
export var InternalServerException$: StaticErrorSchema = [-3, n0, _ISE,
  { [_e]: _s, [_hE]: 500 },
  [_M],
  [0]
];
TypeRegistry.for(n0).registerError(InternalServerException$, InternalServerException);
export var ListKeysRequest$: StaticStructureSchema = [3, n0, _LKR,
  0,
  [_KARN, _NT, _MR],
  [[0, 1], [0, { [_hQ]: _NT }], [1, { [_hQ]: _MR }]]
];
export var ListKeysResponse$: StaticStructureSchema = [3, n0, _LKRi,
  0,
  [_NT, _I],
  [0, [() => ListKeysResponseList, 0]]
];
export var ListKeysResponseListItem$: StaticStructureSchema = [3, n0, _LKRLI,
  0,
  [_K, _V],
  [0, [() => Value, 0]]
];
export var PutKeyRequest$: StaticStructureSchema = [3, n0, _PKR,
  0,
  [_K, _V, _KARN, _IM],
  [[0, 1], [() => Value, 0], [0, 1], [0, { [_hH]: _IM_ }]]
];
export var PutKeyRequestListItem$: StaticStructureSchema = [3, n0, _PKRLI,
  0,
  [_K, _V],
  [0, [() => Value, 0]]
];
export var PutKeyResponse$: StaticStructureSchema = [3, n0, _PKRu,
  0,
  [_IC, _TSIB, _ET],
  [1, 1, [0, { [_hH]: _ET }]]
];
export var ResourceNotFoundException$: StaticErrorSchema = [-3, n0, _RNFE,
  { [_e]: _c, [_hE]: 404 },
  [_M],
  [0]
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var ServiceQuotaExceededException$: StaticErrorSchema = [-3, n0, _SQEE,
  { [_e]: _c, [_hE]: 402 },
  [_M],
  [0]
];
TypeRegistry.for(n0).registerError(ServiceQuotaExceededException$, ServiceQuotaExceededException);
export var UpdateKeysRequest$: StaticStructureSchema = [3, n0, _UKR,
  0,
  [_KARN, _IM, _P, _D],
  [[0, 1], [0, { [_hH]: _IM_ }], [() => PutKeyRequestsList, 0], () => DeleteKeyRequestsList]
];
export var UpdateKeysResponse$: StaticStructureSchema = [3, n0, _UKRp,
  0,
  [_IC, _TSIB, _ET],
  [1, 1, [0, { [_hH]: _ET }]]
];
export var ValidationException$: StaticErrorSchema = [-3, n0, _VE,
  { [_e]: _c, [_hE]: 400 },
  [_M],
  [0]
];
TypeRegistry.for(n0).registerError(ValidationException$, ValidationException);
export var CloudFrontKeyValueStoreServiceException$: StaticErrorSchema = [-3, _sm, "CloudFrontKeyValueStoreServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(CloudFrontKeyValueStoreServiceException$, CloudFrontKeyValueStoreServiceException);
var DeleteKeyRequestsList: StaticListSchema = [1, n0, _DKRL,
  0, () => DeleteKeyRequestListItem$
];
var ListKeysResponseList: StaticListSchema = [1, n0, _LKRL,
  0, [() => ListKeysResponseListItem$,
    0]
];
var PutKeyRequestsList: StaticListSchema = [1, n0, _PKRL,
  0, [() => PutKeyRequestListItem$,
    0]
];
export var DeleteKey$: StaticOperationSchema = [9, n0, _DK,
  { [_h]: ["DELETE", "/key-value-stores/{KvsARN}/keys/{Key}", 200] }, () => DeleteKeyRequest$, () => DeleteKeyResponse$
];
export var DescribeKeyValueStore$: StaticOperationSchema = [9, n0, _DKVS,
  { [_h]: ["GET", "/key-value-stores/{KvsARN}", 200] }, () => DescribeKeyValueStoreRequest$, () => DescribeKeyValueStoreResponse$
];
export var GetKey$: StaticOperationSchema = [9, n0, _GK,
  { [_h]: ["GET", "/key-value-stores/{KvsARN}/keys/{Key}", 200] }, () => GetKeyRequest$, () => GetKeyResponse$
];
export var ListKeys$: StaticOperationSchema = [9, n0, _LK,
  { [_h]: ["GET", "/key-value-stores/{KvsARN}/keys", 200] }, () => ListKeysRequest$, () => ListKeysResponse$
];
export var PutKey$: StaticOperationSchema = [9, n0, _PK,
  { [_h]: ["PUT", "/key-value-stores/{KvsARN}/keys/{Key}", 200] }, () => PutKeyRequest$, () => PutKeyResponse$
];
export var UpdateKeys$: StaticOperationSchema = [9, n0, _UK,
  { [_h]: ["POST", "/key-value-stores/{KvsARN}/keys", 200] }, () => UpdateKeysRequest$, () => UpdateKeysResponse$
];
