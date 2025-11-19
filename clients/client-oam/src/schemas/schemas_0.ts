const _A = "Arn";
const _CE = "ConflictException";
const _CL = "CreateLink";
const _CLI = "CreateLinkInput";
const _CLO = "CreateLinkOutput";
const _CS = "CreateSink";
const _CSI = "CreateSinkInput";
const _CSO = "CreateSinkOutput";
const _DL = "DeleteLink";
const _DLI = "DeleteLinkInput";
const _DLO = "DeleteLinkOutput";
const _DS = "DeleteSink";
const _DSI = "DeleteSinkInput";
const _DSO = "DeleteSinkOutput";
const _F = "Filter";
const _GL = "GetLink";
const _GLI = "GetLinkInput";
const _GLO = "GetLinkOutput";
const _GS = "GetSink";
const _GSI = "GetSinkInput";
const _GSO = "GetSinkOutput";
const _GSP = "GetSinkPolicy";
const _GSPI = "GetSinkPolicyInput";
const _GSPO = "GetSinkPolicyOutput";
const _I = "Id";
const _IPE = "InvalidParameterException";
const _ISF = "InternalServiceFault";
const _IT = "IncludeTags";
const _Id = "Identifier";
const _It = "Items";
const _L = "Label";
const _LA = "LinkArn";
const _LAL = "ListAttachedLinks";
const _LALI = "ListAttachedLinksInput";
const _LALIi = "ListAttachedLinksItem";
const _LALIis = "ListAttachedLinksItems";
const _LALO = "ListAttachedLinksOutput";
const _LC = "LinkConfiguration";
const _LGC = "LogGroupConfiguration";
const _LL = "ListLinks";
const _LLI = "ListLinksInput";
const _LLIi = "ListLinksItem";
const _LLIis = "ListLinksItems";
const _LLO = "ListLinksOutput";
const _LS = "ListSinks";
const _LSI = "ListSinksInput";
const _LSIi = "ListSinksItem";
const _LSIis = "ListSinksItems";
const _LSO = "ListSinksOutput";
const _LT = "LabelTemplate";
const _LTFR = "ListTagsForResource";
const _LTFRI = "ListTagsForResourceInput";
const _LTFRO = "ListTagsForResourceOutput";
const _M = "Message";
const _MC = "MetricConfiguration";
const _MR = "MaxResults";
const _MRPE = "MissingRequiredParameterException";
const _N = "Name";
const _NT = "NextToken";
const _P = "Policy";
const _PSP = "PutSinkPolicy";
const _PSPI = "PutSinkPolicyInput";
const _PSPO = "PutSinkPolicyOutput";
const _RA = "ResourceArn";
const _RNFE = "ResourceNotFoundException";
const _RT = "ResourceTypes";
const _SA = "SinkArn";
const _SI = "SinkIdentifier";
const _SIi = "SinkId";
const _SQEE = "ServiceQuotaExceededException";
const _T = "Tags";
const _TK = "TagKeys";
const _TMTE = "TooManyTagsException";
const _TR = "TagResource";
const _TRI = "TagResourceInput";
const _TRO = "TagResourceOutput";
const _UL = "UpdateLink";
const _ULI = "UpdateLinkInput";
const _ULO = "UpdateLinkOutput";
const _UR = "UntagResource";
const _URI = "UntagResourceInput";
const _URO = "UntagResourceOutput";
const _VE = "ValidationException";
const _aET = "amznErrorType";
const _c = "client";
const _e = "error";
const _h = "http";
const _hE = "httpError";
const _hH = "httpHeader";
const _hQ = "httpQuery";
const _m = "message";
const _s = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.oam";
const _tK = "tagKeys";
const _xaE = "x-amzn-ErrorType";
const n0 = "com.amazonaws.oam";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticStructureSchema,
} from "@smithy/types";

import {
  ConflictException as __ConflictException,
  InternalServiceFault as __InternalServiceFault,
  InvalidParameterException as __InvalidParameterException,
  MissingRequiredParameterException as __MissingRequiredParameterException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
  TooManyTagsException as __TooManyTagsException,
  ValidationException as __ValidationException,
} from "../models/errors";
import { OAMServiceException as __OAMServiceException } from "../models/OAMServiceException";

/* eslint no-var: 0 */

export var ConflictException: StaticErrorSchema = [
  -3,
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M, _aET],
  [
    0,
    [
      0,
      {
        [_hH]: _xaE,
      },
    ],
  ],
];
TypeRegistry.for(n0).registerError(ConflictException, __ConflictException);

export var CreateLinkInput: StaticStructureSchema = [
  3,
  n0,
  _CLI,
  0,
  [_LT, _RT, _SI, _T, _LC],
  [0, 64 | 0, 0, 128 | 0, () => LinkConfiguration],
];
export var CreateLinkOutput: StaticStructureSchema = [
  3,
  n0,
  _CLO,
  0,
  [_A, _I, _L, _LT, _RT, _SA, _T, _LC],
  [0, 0, 0, 0, 64 | 0, 0, 128 | 0, () => LinkConfiguration],
];
export var CreateSinkInput: StaticStructureSchema = [3, n0, _CSI, 0, [_N, _T], [0, 128 | 0]];
export var CreateSinkOutput: StaticStructureSchema = [3, n0, _CSO, 0, [_A, _I, _N, _T], [0, 0, 0, 128 | 0]];
export var DeleteLinkInput: StaticStructureSchema = [3, n0, _DLI, 0, [_Id], [0]];
export var DeleteLinkOutput: StaticStructureSchema = [3, n0, _DLO, 0, [], []];
export var DeleteSinkInput: StaticStructureSchema = [3, n0, _DSI, 0, [_Id], [0]];
export var DeleteSinkOutput: StaticStructureSchema = [3, n0, _DSO, 0, [], []];
export var GetLinkInput: StaticStructureSchema = [3, n0, _GLI, 0, [_Id, _IT], [0, 2]];
export var GetLinkOutput: StaticStructureSchema = [
  3,
  n0,
  _GLO,
  0,
  [_A, _I, _L, _LT, _RT, _SA, _T, _LC],
  [0, 0, 0, 0, 64 | 0, 0, 128 | 0, () => LinkConfiguration],
];
export var GetSinkInput: StaticStructureSchema = [3, n0, _GSI, 0, [_Id, _IT], [0, 2]];
export var GetSinkOutput: StaticStructureSchema = [3, n0, _GSO, 0, [_A, _I, _N, _T], [0, 0, 0, 128 | 0]];
export var GetSinkPolicyInput: StaticStructureSchema = [3, n0, _GSPI, 0, [_SI], [0]];
export var GetSinkPolicyOutput: StaticStructureSchema = [3, n0, _GSPO, 0, [_SA, _SIi, _P], [0, 0, 0]];
export var InternalServiceFault: StaticErrorSchema = [
  -3,
  n0,
  _ISF,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M, _aET],
  [
    0,
    [
      0,
      {
        [_hH]: _xaE,
      },
    ],
  ],
];
TypeRegistry.for(n0).registerError(InternalServiceFault, __InternalServiceFault);

export var InvalidParameterException: StaticErrorSchema = [
  -3,
  n0,
  _IPE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m, _aET],
  [
    0,
    [
      0,
      {
        [_hH]: _xaE,
      },
    ],
  ],
];
TypeRegistry.for(n0).registerError(InvalidParameterException, __InvalidParameterException);

export var LinkConfiguration: StaticStructureSchema = [
  3,
  n0,
  _LC,
  0,
  [_LGC, _MC],
  [() => LogGroupConfiguration, () => MetricConfiguration],
];
export var ListAttachedLinksInput: StaticStructureSchema = [3, n0, _LALI, 0, [_MR, _NT, _SI], [1, 0, 0]];
export var ListAttachedLinksItem: StaticStructureSchema = [3, n0, _LALIi, 0, [_L, _LA, _RT], [0, 0, 64 | 0]];
export var ListAttachedLinksOutput: StaticStructureSchema = [
  3,
  n0,
  _LALO,
  0,
  [_It, _NT],
  [() => ListAttachedLinksItems, 0],
];
export var ListLinksInput: StaticStructureSchema = [3, n0, _LLI, 0, [_MR, _NT], [1, 0]];
export var ListLinksItem: StaticStructureSchema = [3, n0, _LLIi, 0, [_A, _I, _L, _RT, _SA], [0, 0, 0, 64 | 0, 0]];
export var ListLinksOutput: StaticStructureSchema = [3, n0, _LLO, 0, [_It, _NT], [() => ListLinksItems, 0]];
export var ListSinksInput: StaticStructureSchema = [3, n0, _LSI, 0, [_MR, _NT], [1, 0]];
export var ListSinksItem: StaticStructureSchema = [3, n0, _LSIi, 0, [_A, _I, _N], [0, 0, 0]];
export var ListSinksOutput: StaticStructureSchema = [3, n0, _LSO, 0, [_It, _NT], [() => ListSinksItems, 0]];
export var ListTagsForResourceInput: StaticStructureSchema = [3, n0, _LTFRI, 0, [_RA], [[0, 1]]];
export var ListTagsForResourceOutput: StaticStructureSchema = [3, n0, _LTFRO, 0, [_T], [128 | 0]];
export var LogGroupConfiguration: StaticStructureSchema = [3, n0, _LGC, 0, [_F], [0]];
export var MetricConfiguration: StaticStructureSchema = [3, n0, _MC, 0, [_F], [0]];
export var MissingRequiredParameterException: StaticErrorSchema = [
  -3,
  n0,
  _MRPE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m, _aET],
  [
    0,
    [
      0,
      {
        [_hH]: _xaE,
      },
    ],
  ],
];
TypeRegistry.for(n0).registerError(MissingRequiredParameterException, __MissingRequiredParameterException);

export var PutSinkPolicyInput: StaticStructureSchema = [3, n0, _PSPI, 0, [_SI, _P], [0, 0]];
export var PutSinkPolicyOutput: StaticStructureSchema = [3, n0, _PSPO, 0, [_SA, _SIi, _P], [0, 0, 0]];
export var ResourceNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M, _aET],
  [
    0,
    [
      0,
      {
        [_hH]: _xaE,
      },
    ],
  ],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);

export var ServiceQuotaExceededException: StaticErrorSchema = [
  -3,
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_M, _aET],
  [
    0,
    [
      0,
      {
        [_hH]: _xaE,
      },
    ],
  ],
];
TypeRegistry.for(n0).registerError(ServiceQuotaExceededException, __ServiceQuotaExceededException);

export var TagResourceInput: StaticStructureSchema = [3, n0, _TRI, 0, [_RA, _T], [[0, 1], 128 | 0]];
export var TagResourceOutput: StaticStructureSchema = [3, n0, _TRO, 0, [], []];
export var TooManyTagsException: StaticErrorSchema = [
  -3,
  n0,
  _TMTE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(TooManyTagsException, __TooManyTagsException);

export var UntagResourceInput: StaticStructureSchema = [
  3,
  n0,
  _URI,
  0,
  [_RA, _TK],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _tK,
      },
    ],
  ],
];
export var UntagResourceOutput: StaticStructureSchema = [3, n0, _URO, 0, [], []];
export var UpdateLinkInput: StaticStructureSchema = [
  3,
  n0,
  _ULI,
  0,
  [_Id, _RT, _LC, _IT],
  [0, 64 | 0, () => LinkConfiguration, 2],
];
export var UpdateLinkOutput: StaticStructureSchema = [
  3,
  n0,
  _ULO,
  0,
  [_A, _I, _L, _LT, _RT, _SA, _T, _LC],
  [0, 0, 0, 0, 64 | 0, 0, 128 | 0, () => LinkConfiguration],
];
export var ValidationException: StaticErrorSchema = [
  -3,
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ValidationException, __ValidationException);

export var __Unit = "unit" as const;

export var OAMServiceException: StaticErrorSchema = [-3, _sm, "OAMServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(OAMServiceException, __OAMServiceException);

export var ListAttachedLinksItems: StaticListSchema = [1, n0, _LALIis, 0, () => ListAttachedLinksItem];
export var ListLinksItems: StaticListSchema = [1, n0, _LLIis, 0, () => ListLinksItem];
export var ListSinksItems: StaticListSchema = [1, n0, _LSIis, 0, () => ListSinksItem];
export var ResourceTypesInput = 64 | 0;

export var ResourceTypesOutput = 64 | 0;

export var TagKeys = 64 | 0;

export var TagMapInput = 128 | 0;

export var TagMapOutput = 128 | 0;

export var CreateLink: StaticOperationSchema = [
  9,
  n0,
  _CL,
  {
    [_h]: ["POST", "/CreateLink", 200],
  },
  () => CreateLinkInput,
  () => CreateLinkOutput,
];
export var CreateSink: StaticOperationSchema = [
  9,
  n0,
  _CS,
  {
    [_h]: ["POST", "/CreateSink", 200],
  },
  () => CreateSinkInput,
  () => CreateSinkOutput,
];
export var DeleteLink: StaticOperationSchema = [
  9,
  n0,
  _DL,
  {
    [_h]: ["POST", "/DeleteLink", 200],
  },
  () => DeleteLinkInput,
  () => DeleteLinkOutput,
];
export var DeleteSink: StaticOperationSchema = [
  9,
  n0,
  _DS,
  {
    [_h]: ["POST", "/DeleteSink", 200],
  },
  () => DeleteSinkInput,
  () => DeleteSinkOutput,
];
export var GetLink: StaticOperationSchema = [
  9,
  n0,
  _GL,
  {
    [_h]: ["POST", "/GetLink", 200],
  },
  () => GetLinkInput,
  () => GetLinkOutput,
];
export var GetSink: StaticOperationSchema = [
  9,
  n0,
  _GS,
  {
    [_h]: ["POST", "/GetSink", 200],
  },
  () => GetSinkInput,
  () => GetSinkOutput,
];
export var GetSinkPolicy: StaticOperationSchema = [
  9,
  n0,
  _GSP,
  {
    [_h]: ["POST", "/GetSinkPolicy", 200],
  },
  () => GetSinkPolicyInput,
  () => GetSinkPolicyOutput,
];
export var ListAttachedLinks: StaticOperationSchema = [
  9,
  n0,
  _LAL,
  {
    [_h]: ["POST", "/ListAttachedLinks", 200],
  },
  () => ListAttachedLinksInput,
  () => ListAttachedLinksOutput,
];
export var ListLinks: StaticOperationSchema = [
  9,
  n0,
  _LL,
  {
    [_h]: ["POST", "/ListLinks", 200],
  },
  () => ListLinksInput,
  () => ListLinksOutput,
];
export var ListSinks: StaticOperationSchema = [
  9,
  n0,
  _LS,
  {
    [_h]: ["POST", "/ListSinks", 200],
  },
  () => ListSinksInput,
  () => ListSinksOutput,
];
export var ListTagsForResource: StaticOperationSchema = [
  9,
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{ResourceArn}", 200],
  },
  () => ListTagsForResourceInput,
  () => ListTagsForResourceOutput,
];
export var PutSinkPolicy: StaticOperationSchema = [
  9,
  n0,
  _PSP,
  {
    [_h]: ["POST", "/PutSinkPolicy", 200],
  },
  () => PutSinkPolicyInput,
  () => PutSinkPolicyOutput,
];
export var TagResource: StaticOperationSchema = [
  9,
  n0,
  _TR,
  {
    [_h]: ["PUT", "/tags/{ResourceArn}", 200],
  },
  () => TagResourceInput,
  () => TagResourceOutput,
];
export var UntagResource: StaticOperationSchema = [
  9,
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/tags/{ResourceArn}", 200],
  },
  () => UntagResourceInput,
  () => UntagResourceOutput,
];
export var UpdateLink: StaticOperationSchema = [
  9,
  n0,
  _UL,
  {
    [_h]: ["POST", "/UpdateLink", 200],
  },
  () => UpdateLinkInput,
  () => UpdateLinkOutput,
];
