export const _A = "Arn";
export const _CE = "ConflictException";
export const _CL = "CreateLink";
export const _CLI = "CreateLinkInput";
export const _CLO = "CreateLinkOutput";
export const _CS = "CreateSink";
export const _CSI = "CreateSinkInput";
export const _CSO = "CreateSinkOutput";
export const _DL = "DeleteLink";
export const _DLI = "DeleteLinkInput";
export const _DLO = "DeleteLinkOutput";
export const _DS = "DeleteSink";
export const _DSI = "DeleteSinkInput";
export const _DSO = "DeleteSinkOutput";
export const _F = "Filter";
export const _GL = "GetLink";
export const _GLI = "GetLinkInput";
export const _GLO = "GetLinkOutput";
export const _GS = "GetSink";
export const _GSI = "GetSinkInput";
export const _GSO = "GetSinkOutput";
export const _GSP = "GetSinkPolicy";
export const _GSPI = "GetSinkPolicyInput";
export const _GSPO = "GetSinkPolicyOutput";
export const _I = "Id";
export const _IPE = "InvalidParameterException";
export const _ISF = "InternalServiceFault";
export const _IT = "IncludeTags";
export const _Id = "Identifier";
export const _It = "Items";
export const _L = "Label";
export const _LA = "LinkArn";
export const _LAL = "ListAttachedLinks";
export const _LALI = "ListAttachedLinksInput";
export const _LALIi = "ListAttachedLinksItem";
export const _LALIis = "ListAttachedLinksItems";
export const _LALO = "ListAttachedLinksOutput";
export const _LC = "LinkConfiguration";
export const _LGC = "LogGroupConfiguration";
export const _LL = "ListLinks";
export const _LLI = "ListLinksInput";
export const _LLIi = "ListLinksItem";
export const _LLIis = "ListLinksItems";
export const _LLO = "ListLinksOutput";
export const _LS = "ListSinks";
export const _LSI = "ListSinksInput";
export const _LSIi = "ListSinksItem";
export const _LSIis = "ListSinksItems";
export const _LSO = "ListSinksOutput";
export const _LT = "LabelTemplate";
export const _LTFR = "ListTagsForResource";
export const _LTFRI = "ListTagsForResourceInput";
export const _LTFRO = "ListTagsForResourceOutput";
export const _M = "Message";
export const _MC = "MetricConfiguration";
export const _MR = "MaxResults";
export const _MRPE = "MissingRequiredParameterException";
export const _N = "Name";
export const _NT = "NextToken";
export const _P = "Policy";
export const _PSP = "PutSinkPolicy";
export const _PSPI = "PutSinkPolicyInput";
export const _PSPO = "PutSinkPolicyOutput";
export const _RA = "ResourceArn";
export const _RNFE = "ResourceNotFoundException";
export const _RT = "ResourceTypes";
export const _SA = "SinkArn";
export const _SI = "SinkIdentifier";
export const _SIi = "SinkId";
export const _SQEE = "ServiceQuotaExceededException";
export const _T = "Tags";
export const _TK = "TagKeys";
export const _TMTE = "TooManyTagsException";
export const _TR = "TagResource";
export const _TRI = "TagResourceInput";
export const _TRO = "TagResourceOutput";
export const _UL = "UpdateLink";
export const _ULI = "UpdateLinkInput";
export const _ULO = "UpdateLinkOutput";
export const _UR = "UntagResource";
export const _URI = "UntagResourceInput";
export const _URO = "UntagResourceOutput";
export const _VE = "ValidationException";
export const _aET = "amznErrorType";
export const _c = "client";
export const _e = "error";
export const _h = "http";
export const _hE = "httpError";
export const _hH = "httpHeader";
export const _hQ = "httpQuery";
export const _m = "message";
export const _s = "server";
export const _tK = "tagKeys";
export const _xaE = "x-amzn-ErrorType";
export const n0 = "com.amazonaws.oam";

// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import { ResourceNotFoundException as __ResourceNotFoundException } from "../models/index";
import { OAMServiceException as __OAMServiceException } from "../models/OAMServiceException";

/* eslint no-var: 0 */

export var ResourceNotFoundException = error(
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

  __ResourceNotFoundException
);
export var OAMServiceException = error(
  "smithy.ts.sdk.synthetic.com.amazonaws.oam",
  "OAMServiceException",
  0,
  [],
  [],
  __OAMServiceException
);
