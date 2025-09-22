// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { PropertyValidationException as __PropertyValidationException } from "../models/index";
import {
  _A,
  _c,
  _CFI,
  _Cons,
  _CT,
  _CTre,
  _CTT,
  _CTTR,
  _CTTRr,
  _D,
  _Def,
  _DFV,
  _DTT,
  _DTTR,
  _DTTRe,
  _DVe,
  _e,
  _Fi,
  _GTT,
  _GTTR,
  _GTTRe,
  _h,
  _hE,
  _hQ,
  _I,
  _IF,
  _IFI,
  _II,
  _ITTF,
  _LMT,
  _LTT,
  _LTTR,
  _LTTRi,
  _M,
  _mR,
  _MRa,
  _N,
  _n,
  _NT,
  _nT,
  _PLr,
  _PP,
  _PVE,
  _PVEP,
  _PVEPL,
  _Rea,
  _RF,
  _RFI,
  _ROF,
  _ROFI,
  _ROTTF,
  _RTTF,
  _SAFI,
  _SSO,
  _St,
  _sta,
  _sV,
  _SVn,
  _T,
  _Ta,
  _TT,
  _TTC,
  _TTD,
  _TTDFV,
  _TTDFVL,
  _TTF,
  _TTFa,
  _TTFI,
  _TTI,
  _TTL,
  _TTM,
  _UTT,
  _UTTR,
  _UTTRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateTaskTemplateRequest = struct(
  n0,
  _CTTR,
  0,
  [_II, _N, _D, _CFI, _SAFI, _Cons, _Def, _St, _Fi, _CT],
  [[0, 1], 0, 0, 0, 0, () => TaskTemplateConstraints, () => TaskTemplateDefaults, 0, () => TaskTemplateFields, [0, 4]]
);
export var CreateTaskTemplateResponse = struct(n0, _CTTRr, 0, [_I, _A], [0, 0]);
export var DeleteTaskTemplateRequest = struct(
  n0,
  _DTTR,
  0,
  [_II, _TTI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteTaskTemplateResponse = struct(n0, _DTTRe, 0, [], []);
export var GetTaskTemplateRequest = struct(
  n0,
  _GTTR,
  0,
  [_II, _TTI, _SVn],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _sV,
      },
    ],
  ]
);
export var GetTaskTemplateResponse = struct(
  n0,
  _GTTRe,
  0,
  [_II, _I, _A, _N, _D, _CFI, _SAFI, _Cons, _Def, _Fi, _St, _LMT, _CTre, _Ta],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    () => TaskTemplateConstraints,
    () => TaskTemplateDefaults,
    () => TaskTemplateFields,
    0,
    4,
    4,
    128 | 0,
  ]
);
export var InvisibleFieldInfo = struct(n0, _IFI, 0, [_I], [() => TaskTemplateFieldIdentifier]);
export var ListTaskTemplatesRequest = struct(
  n0,
  _LTTR,
  0,
  [_II, _NT, _MRa, _St, _N],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _sta,
      },
    ],
    [
      0,
      {
        [_hQ]: _n,
      },
    ],
  ]
);
export var ListTaskTemplatesResponse = struct(n0, _LTTRi, 0, [_TT, _NT], [() => TaskTemplateList, 0]);
export var PropertyValidationException = error(
  n0,
  _PVE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M, _PLr],
  [0, () => PropertyValidationExceptionPropertyList],

  __PropertyValidationException
);
export var PropertyValidationExceptionProperty = struct(n0, _PVEP, 0, [_PP, _Rea, _M], [0, 0, 0]);
export var ReadOnlyFieldInfo = struct(n0, _ROFI, 0, [_I], [() => TaskTemplateFieldIdentifier]);
export var RequiredFieldInfo = struct(n0, _RFI, 0, [_I], [() => TaskTemplateFieldIdentifier]);
export var TaskTemplateConstraints = struct(
  n0,
  _TTC,
  0,
  [_RF, _ROF, _IF],
  [() => RequiredTaskTemplateFields, () => ReadOnlyTaskTemplateFields, () => InvisibleTaskTemplateFields]
);
export var TaskTemplateDefaultFieldValue = struct(n0, _TTDFV, 0, [_I, _DVe], [() => TaskTemplateFieldIdentifier, 0]);
export var TaskTemplateDefaults = struct(n0, _TTD, 0, [_DFV], [() => TaskTemplateDefaultFieldValueList]);
export var TaskTemplateField = struct(
  n0,
  _TTF,
  0,
  [_I, _D, _T, _SSO],
  [() => TaskTemplateFieldIdentifier, 0, 0, 64 | 0]
);
export var TaskTemplateFieldIdentifier = struct(n0, _TTFI, 0, [_N], [0]);
export var TaskTemplateMetadata = struct(n0, _TTM, 0, [_I, _A, _N, _D, _St, _LMT, _CTre], [0, 0, 0, 0, 0, 4, 4]);
export var UpdateTaskTemplateRequest = struct(
  n0,
  _UTTR,
  0,
  [_TTI, _II, _N, _D, _CFI, _SAFI, _Cons, _Def, _St, _Fi],
  [[0, 1], [0, 1], 0, 0, 0, 0, () => TaskTemplateConstraints, () => TaskTemplateDefaults, 0, () => TaskTemplateFields]
);
export var UpdateTaskTemplateResponse = struct(
  n0,
  _UTTRp,
  0,
  [_II, _I, _A, _N, _D, _CFI, _SAFI, _Cons, _Def, _Fi, _St, _LMT, _CTre],
  [0, 0, 0, 0, 0, 0, 0, () => TaskTemplateConstraints, () => TaskTemplateDefaults, () => TaskTemplateFields, 0, 4, 4]
);
export var InvisibleTaskTemplateFields = list(n0, _ITTF, 0, () => InvisibleFieldInfo);
export var PropertyValidationExceptionPropertyList = list(n0, _PVEPL, 0, () => PropertyValidationExceptionProperty);
export var ReadOnlyTaskTemplateFields = list(n0, _ROTTF, 0, () => ReadOnlyFieldInfo);
export var RequiredTaskTemplateFields = list(n0, _RTTF, 0, () => RequiredFieldInfo);
export var SingleSelectOptions = 64 | 0;

export var TaskTemplateDefaultFieldValueList = list(n0, _TTDFVL, 0, () => TaskTemplateDefaultFieldValue);
export var TaskTemplateFields = list(n0, _TTFa, 0, () => TaskTemplateField);
export var TaskTemplateList = list(n0, _TTL, 0, () => TaskTemplateMetadata);
export var CreateTaskTemplate = op(
  n0,
  _CTT,
  {
    [_h]: ["PUT", "/instance/{InstanceId}/task/template", 200],
  },
  () => CreateTaskTemplateRequest,
  () => CreateTaskTemplateResponse
);
export var DeleteTaskTemplate = op(
  n0,
  _DTT,
  {
    [_h]: ["DELETE", "/instance/{InstanceId}/task/template/{TaskTemplateId}", 200],
  },
  () => DeleteTaskTemplateRequest,
  () => DeleteTaskTemplateResponse
);
export var GetTaskTemplate = op(
  n0,
  _GTT,
  {
    [_h]: ["GET", "/instance/{InstanceId}/task/template/{TaskTemplateId}", 200],
  },
  () => GetTaskTemplateRequest,
  () => GetTaskTemplateResponse
);
export var ListTaskTemplates = op(
  n0,
  _LTT,
  {
    [_h]: ["GET", "/instance/{InstanceId}/task/template", 200],
  },
  () => ListTaskTemplatesRequest,
  () => ListTaskTemplatesResponse
);
export var UpdateTaskTemplate = op(
  n0,
  _UTT,
  {
    [_h]: ["POST", "/instance/{InstanceId}/task/template/{TaskTemplateId}", 200],
  },
  () => UpdateTaskTemplateRequest,
  () => UpdateTaskTemplateResponse
);
