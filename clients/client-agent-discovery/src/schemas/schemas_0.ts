const _DE = "DescriptorEntry";
const _DM = "DescriptorMap";
const _DS = "DescriptorSource";
const _DSU = "DescriptorSourceUrl";
const _I = "Identifier";
const _ISE = "InternalServerException";
const _PL = "ProvenanceLink";
const _PLL = "ProvenanceLinkList";
const _PR = "PublicRecord";
const _PRL = "PublicRecordList";
const _SPR = "SearchPublicRecords";
const _SPRR = "SearchPublicRecordsRequest";
const _SPRRe = "SearchPublicRecordsResponse";
const _TE = "ThrottlingException";
const _TM = "TrustManifest";
const _TML = "TrustManifestList";
const _VE = "ValidationException";
const _aD = "additionalData";
const _c = "client";
const _cA = "createdAt";
const _co = "contributor";
const _d = "data";
const _dN = "displayName";
const _de = "description";
const _des = "descriptors";
const _do = "domain";
const _e = "error";
const _eC = "errorCode";
const _f = "filters";
const _fU = "fromUrl";
const _h = "http";
const _hE = "httpError";
const _i = "identifier";
const _jN = "jsonName";
const _m = "message";
const _mR = "maxResults";
const _nT = "nextToken";
const _p = "provenance";
const _q = "query";
const _r = "relation";
const _rT = "recordType";
const _rV = "recordVersion";
const _re = "records";
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.agentdiscovery";
const _sI = "sourceId";
const _sQ = "searchQuery";
const _se = "server";
const _so = "source";
const _tM = "trustManifests";
const _u = "url";
const _uA = "updatedAt";
const _ur = "uri";
const _v = "version";
const n0 = "com.amazonaws.agentdiscovery";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticStructureSchema,
  StaticUnionSchema,
} from "@smithy/types";

import { AgentDiscoveryServiceException } from "../models/AgentDiscoveryServiceException";
import { InternalServerException, ThrottlingException, ValidationException } from "../models/errors";

/* eslint no-var: 0 */
const _s_registry = new TypeRegistry(_s);
export var AgentDiscoveryServiceException$: StaticErrorSchema = [-3, _s, "AgentDiscoveryServiceException", 0, [], []];
_s_registry.registerError(AgentDiscoveryServiceException$, AgentDiscoveryServiceException);
const n0_registry = new TypeRegistry(n0);
export var InternalServerException$: StaticErrorSchema = [-3, n0, _ISE,
  { [_e]: _se, [_hE]: 500 },
  [_m, _eC],
  [0, 0]
];
n0_registry.registerError(InternalServerException$, InternalServerException);
export var ThrottlingException$: StaticErrorSchema = [-3, n0, _TE,
  { [_e]: _c, [_hE]: 429 },
  [_m, _eC],
  [0, 0]
];
n0_registry.registerError(ThrottlingException$, ThrottlingException);
export var ValidationException$: StaticErrorSchema = [-3, n0, _VE,
  { [_e]: _c, [_hE]: 400 },
  [_m, _eC],
  [0, 0]
];
n0_registry.registerError(ValidationException$, ValidationException);
/**
 * TypeRegistry instances containing modeled errors.
 * @internal
 *
 */
export const errorTypeRegistries = [
  _s_registry,
  n0_registry,
]
export var DescriptorEntry$: StaticStructureSchema = [3, n0, _DE,
  0,
  [_d, _v, _so, _aD],
  [0, 0, () => DescriptorSource$, () => DescriptorMap]
];
export var DescriptorSource$: StaticStructureSchema = [3, n0, _DS,
  0,
  [_fU],
  [() => DescriptorSourceUrl$]
];
export var DescriptorSourceUrl$: StaticStructureSchema = [3, n0, _DSU,
  0,
  [_u],
  [0], 1
];
export var ProvenanceLink$: StaticStructureSchema = [3, n0, _PL,
  0,
  [_r, _sI],
  [0, 0], 2
];
export var PublicRecord$: StaticStructureSchema = [3, n0, _PR,
  0,
  [_i, _dN, _rT, _de, _do, _des, _tM, _rV, _cA, _uA],
  [() => Identifier$, 0, 0, 0, 0, () => DescriptorMap, () => TrustManifestList, 0, 4, 4], 3
];
export var SearchPublicRecordsRequest$: StaticStructureSchema = [3, n0, _SPRR,
  0,
  [_sQ, _f, _mR, _nT],
  [[0, { [_jN]: _q }], 15, 1, 0]
];
export var SearchPublicRecordsResponse$: StaticStructureSchema = [3, n0, _SPRRe,
  0,
  [_re, _nT],
  [() => PublicRecordList, 0], 1
];
export var TrustManifest$: StaticStructureSchema = [3, n0, _TM,
  0,
  [_co, _p],
  [0, () => ProvenanceLinkList], 1
];
var ProvenanceLinkList: StaticListSchema = [1, n0, _PLL,
  0, () => ProvenanceLink$
];
var PublicRecordList: StaticListSchema = [1, n0, _PRL,
  0, () => PublicRecord$
];
var TrustManifestList: StaticListSchema = [1, n0, _TML,
  0, () => TrustManifest$
];
var DescriptorMap: StaticMapSchema = [2, n0, _DM,
  0, 0, () => DescriptorEntry$
];
export var Identifier$: StaticUnionSchema = [4, n0, _I,
  0,
  [_do, _ur],
  [0, 0]
];
export var SearchPublicRecords$: StaticOperationSchema = [9, n0, _SPR,
  { [_h]: ["POST", "/records/search", 200] }, () => SearchPublicRecordsRequest$, () => SearchPublicRecordsResponse$
];
