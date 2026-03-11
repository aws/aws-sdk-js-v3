const _CE = "ConflictException";
const _ES = "ExportSummary";
const _ESx = "ExportSummaries";
const _GE = "GetExport";
const _GER = "GetExportRequest";
const _GERe = "GetExportResponse";
const _INTE = "InvalidNextTokenException";
const _IPCE = "InvalidParameterCombinationException";
const _IPVE = "InvalidParameterValueException";
const _LE = "ListExports";
const _LER = "ListExportsRequest";
const _LERi = "ListExportsResponse";
const _NELE = "NumberExportsLimitExceeded";
const _NSDE = "NoSuchDomainException";
const _NSEE = "NoSuchExportException";
const _SDE = "StartDomainExport";
const _SDER = "StartDomainExportRequest";
const _SDERt = "StartDomainExportResponse";
const _c = "client";
const _cT = "clientToken";
const _dN = "domainName";
const _e = "error";
const _eA = "exportArn";
const _eDCT = "exportDataCutoffTime";
const _eM = "exportManifest";
const _eS = "exportStatus";
const _eSx = "exportSummaries";
const _fC = "failureCode";
const _fM = "failureMessage";
const _h = "http";
const _hE = "httpError";
const _iC = "itemsCount";
const _m = "message";
const _mR = "maxResults";
const _nT = "nextToken";
const _rA = "requestedAt";
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.simpledbv2";
const _sB = "s3Bucket";
const _sBO = "s3BucketOwner";
const _sKP = "s3KeyPrefix";
const _sSA = "s3SseAlgorithm";
const _sSKKI = "s3SseKmsKeyId";
const n0 = "com.amazonaws.simpledbv2";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type { StaticErrorSchema, StaticListSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import {
  ConflictException,
  InvalidNextTokenException,
  InvalidParameterCombinationException,
  InvalidParameterValueException,
  NoSuchDomainException,
  NoSuchExportException,
  NumberExportsLimitExceeded,
} from "../models/errors";
import { SimpleDBv2ServiceException } from "../models/SimpleDBv2ServiceException";

/* eslint no-var: 0 */
const _s_registry = TypeRegistry.for(_s);
export var SimpleDBv2ServiceException$: StaticErrorSchema = [-3, _s, "SimpleDBv2ServiceException", 0, [], []];
_s_registry.registerError(SimpleDBv2ServiceException$, SimpleDBv2ServiceException);
const n0_registry = TypeRegistry.for(n0);
export var ConflictException$: StaticErrorSchema = [-3, n0, _CE,
  { [_e]: _c, [_hE]: 400 },
  [_m],
  [0], 1
];
n0_registry.registerError(ConflictException$, ConflictException);
export var InvalidNextTokenException$: StaticErrorSchema = [-3, n0, _INTE,
  { [_e]: _c, [_hE]: 400 },
  [_m],
  [0], 1
];
n0_registry.registerError(InvalidNextTokenException$, InvalidNextTokenException);
export var InvalidParameterCombinationException$: StaticErrorSchema = [-3, n0, _IPCE,
  { [_e]: _c, [_hE]: 400 },
  [_m],
  [0], 1
];
n0_registry.registerError(InvalidParameterCombinationException$, InvalidParameterCombinationException);
export var InvalidParameterValueException$: StaticErrorSchema = [-3, n0, _IPVE,
  { [_e]: _c, [_hE]: 400 },
  [_m],
  [0], 1
];
n0_registry.registerError(InvalidParameterValueException$, InvalidParameterValueException);
export var NoSuchDomainException$: StaticErrorSchema = [-3, n0, _NSDE,
  { [_e]: _c, [_hE]: 400 },
  [_m],
  [0], 1
];
n0_registry.registerError(NoSuchDomainException$, NoSuchDomainException);
export var NoSuchExportException$: StaticErrorSchema = [-3, n0, _NSEE,
  { [_e]: _c, [_hE]: 400 },
  [_m],
  [0], 1
];
n0_registry.registerError(NoSuchExportException$, NoSuchExportException);
export var NumberExportsLimitExceeded$: StaticErrorSchema = [-3, n0, _NELE,
  { [_e]: _c, [_hE]: 409 },
  [_m],
  [0], 1
];
n0_registry.registerError(NumberExportsLimitExceeded$, NumberExportsLimitExceeded);
/**
 * TypeRegistry instances containing modeled errors.
 * @internal
 *
 */
export const errorTypeRegistries = [
  _s_registry,
  n0_registry,
]
export var ExportSummary$: StaticStructureSchema = [3, n0, _ES,
  0,
  [_eA, _eS, _rA, _dN],
  [0, 0, 4, 0], 4
];
export var GetExportRequest$: StaticStructureSchema = [3, n0, _GER,
  0,
  [_eA],
  [0], 1
];
export var GetExportResponse$: StaticStructureSchema = [3, n0, _GERe,
  0,
  [_eA, _cT, _eS, _dN, _rA, _sB, _sKP, _sSA, _sSKKI, _sBO, _fC, _fM, _eM, _iC, _eDCT],
  [0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4], 6
];
export var ListExportsRequest$: StaticStructureSchema = [3, n0, _LER,
  0,
  [_dN, _mR, _nT],
  [0, 1, 0]
];
export var ListExportsResponse$: StaticStructureSchema = [3, n0, _LERi,
  0,
  [_eSx, _nT],
  [() => ExportSummaries, 0], 1
];
export var StartDomainExportRequest$: StaticStructureSchema = [3, n0, _SDER,
  0,
  [_dN, _sB, _cT, _sKP, _sSA, _sSKKI, _sBO],
  [0, 0, [0, 4], 0, 0, 0, 0], 2
];
export var StartDomainExportResponse$: StaticStructureSchema = [3, n0, _SDERt,
  0,
  [_cT, _eA, _rA],
  [0, 0, 4], 3
];
var ExportSummaries: StaticListSchema = [1, n0, _ESx,
  0, () => ExportSummary$
];
export var GetExport$: StaticOperationSchema = [9, n0, _GE,
  { [_h]: ["POST", "/v2/GetExport", 200] }, () => GetExportRequest$, () => GetExportResponse$
];
export var ListExports$: StaticOperationSchema = [9, n0, _LE,
  { [_h]: ["POST", "/v2/ListExports", 200] }, () => ListExportsRequest$, () => ListExportsResponse$
];
export var StartDomainExport$: StaticOperationSchema = [9, n0, _SDE,
  { [_h]: ["POST", "/v2/StartDomainExport", 200] }, () => StartDomainExportRequest$, () => StartDomainExportResponse$
];
