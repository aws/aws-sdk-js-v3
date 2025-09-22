// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ConflictException as __ConflictException,
  MissingRequiredParameterException as __MissingRequiredParameterException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
} from "../models/index";
import {
  _A,
  _aET,
  _c,
  _CE,
  _CL,
  _CLI,
  _CLO,
  _CS,
  _CSI,
  _CSO,
  _DL,
  _DLI,
  _DLO,
  _DS,
  _DSI,
  _DSO,
  _e,
  _F,
  _GL,
  _GLI,
  _GLO,
  _GS,
  _GSI,
  _GSO,
  _GSP,
  _GSPI,
  _GSPO,
  _h,
  _hE,
  _hH,
  _I,
  _Id,
  _IT,
  _It,
  _L,
  _LA,
  _LAL,
  _LALI,
  _LALIi,
  _LALIis,
  _LALO,
  _LC,
  _LGC,
  _LT,
  _M,
  _m,
  _MC,
  _MR,
  _MRPE,
  _N,
  _NT,
  _P,
  _PSP,
  _PSPI,
  _PSPO,
  _RT,
  _SA,
  _SI,
  _SIi,
  _SQEE,
  _T,
  _UL,
  _ULI,
  _ULO,
  _xaE,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ConflictException = error(
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

  __ConflictException
);
export var CreateLinkInput = struct(
  n0,
  _CLI,
  0,
  [_LT, _RT, _SI, _T, _LC],
  [0, 64 | 0, 0, 128 | 0, () => LinkConfiguration]
);
export var CreateLinkOutput = struct(
  n0,
  _CLO,
  0,
  [_A, _I, _L, _LT, _RT, _SA, _T, _LC],
  [0, 0, 0, 0, 64 | 0, 0, 128 | 0, () => LinkConfiguration]
);
export var CreateSinkInput = struct(n0, _CSI, 0, [_N, _T], [0, 128 | 0]);
export var CreateSinkOutput = struct(n0, _CSO, 0, [_A, _I, _N, _T], [0, 0, 0, 128 | 0]);
export var DeleteLinkInput = struct(n0, _DLI, 0, [_Id], [0]);
export var DeleteLinkOutput = struct(n0, _DLO, 0, [], []);
export var DeleteSinkInput = struct(n0, _DSI, 0, [_Id], [0]);
export var DeleteSinkOutput = struct(n0, _DSO, 0, [], []);
export var GetLinkInput = struct(n0, _GLI, 0, [_Id, _IT], [0, 2]);
export var GetLinkOutput = struct(
  n0,
  _GLO,
  0,
  [_A, _I, _L, _LT, _RT, _SA, _T, _LC],
  [0, 0, 0, 0, 64 | 0, 0, 128 | 0, () => LinkConfiguration]
);
export var GetSinkInput = struct(n0, _GSI, 0, [_Id, _IT], [0, 2]);
export var GetSinkOutput = struct(n0, _GSO, 0, [_A, _I, _N, _T], [0, 0, 0, 128 | 0]);
export var GetSinkPolicyInput = struct(n0, _GSPI, 0, [_SI], [0]);
export var GetSinkPolicyOutput = struct(n0, _GSPO, 0, [_SA, _SIi, _P], [0, 0, 0]);
export var LinkConfiguration = struct(
  n0,
  _LC,
  0,
  [_LGC, _MC],
  [() => LogGroupConfiguration, () => MetricConfiguration]
);
export var ListAttachedLinksInput = struct(n0, _LALI, 0, [_MR, _NT, _SI], [1, 0, 0]);
export var ListAttachedLinksItem = struct(n0, _LALIi, 0, [_L, _LA, _RT], [0, 0, 64 | 0]);
export var ListAttachedLinksOutput = struct(n0, _LALO, 0, [_It, _NT], [() => ListAttachedLinksItems, 0]);
export var LogGroupConfiguration = struct(n0, _LGC, 0, [_F], [0]);
export var MetricConfiguration = struct(n0, _MC, 0, [_F], [0]);
export var MissingRequiredParameterException = error(
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

  __MissingRequiredParameterException
);
export var PutSinkPolicyInput = struct(n0, _PSPI, 0, [_SI, _P], [0, 0]);
export var PutSinkPolicyOutput = struct(n0, _PSPO, 0, [_SA, _SIi, _P], [0, 0, 0]);
export var ServiceQuotaExceededException = error(
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

  __ServiceQuotaExceededException
);
export var UpdateLinkInput = struct(n0, _ULI, 0, [_Id, _RT, _LC, _IT], [0, 64 | 0, () => LinkConfiguration, 2]);
export var UpdateLinkOutput = struct(
  n0,
  _ULO,
  0,
  [_A, _I, _L, _LT, _RT, _SA, _T, _LC],
  [0, 0, 0, 0, 64 | 0, 0, 128 | 0, () => LinkConfiguration]
);
export var Unit = "unit" as const;

export var ListAttachedLinksItems = list(n0, _LALIis, 0, () => ListAttachedLinksItem);
export var ResourceTypesInput = 64 | 0;

export var CreateLink = op(
  n0,
  _CL,
  {
    [_h]: ["POST", "/CreateLink", 200],
  },
  () => CreateLinkInput,
  () => CreateLinkOutput
);
export var CreateSink = op(
  n0,
  _CS,
  {
    [_h]: ["POST", "/CreateSink", 200],
  },
  () => CreateSinkInput,
  () => CreateSinkOutput
);
export var DeleteLink = op(
  n0,
  _DL,
  {
    [_h]: ["POST", "/DeleteLink", 200],
  },
  () => DeleteLinkInput,
  () => DeleteLinkOutput
);
export var DeleteSink = op(
  n0,
  _DS,
  {
    [_h]: ["POST", "/DeleteSink", 200],
  },
  () => DeleteSinkInput,
  () => DeleteSinkOutput
);
export var GetLink = op(
  n0,
  _GL,
  {
    [_h]: ["POST", "/GetLink", 200],
  },
  () => GetLinkInput,
  () => GetLinkOutput
);
export var GetSink = op(
  n0,
  _GS,
  {
    [_h]: ["POST", "/GetSink", 200],
  },
  () => GetSinkInput,
  () => GetSinkOutput
);
export var GetSinkPolicy = op(
  n0,
  _GSP,
  {
    [_h]: ["POST", "/GetSinkPolicy", 200],
  },
  () => GetSinkPolicyInput,
  () => GetSinkPolicyOutput
);
export var ListAttachedLinks = op(
  n0,
  _LAL,
  {
    [_h]: ["POST", "/ListAttachedLinks", 200],
  },
  () => ListAttachedLinksInput,
  () => ListAttachedLinksOutput
);
export var PutSinkPolicy = op(
  n0,
  _PSP,
  {
    [_h]: ["POST", "/PutSinkPolicy", 200],
  },
  () => PutSinkPolicyInput,
  () => PutSinkPolicyOutput
);
export var UpdateLink = op(
  n0,
  _UL,
  {
    [_h]: ["POST", "/UpdateLink", 200],
  },
  () => UpdateLinkInput,
  () => UpdateLinkOutput
);
