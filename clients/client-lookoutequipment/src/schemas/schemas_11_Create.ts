// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ServiceQuotaExceededException as __ServiceQuotaExceededException } from "../models/index";
import {
  _c,
  _CD,
  _CDR,
  _CDRr,
  _CL,
  _CLG,
  _CLGR,
  _CLGRr,
  _CLR,
  _CLRr,
  _CT,
  _DA,
  _DN,
  _DS,
  _E,
  _e,
  _ET,
  _FC,
  _FCa,
  _hE,
  _ID,
  _IDR,
  _IDRm,
  _IDS,
  _JI,
  _LGA,
  _LGN,
  _LI,
  _M,
  _N,
  _PRI,
  _PRP,
  _PRPR,
  _PRPRu,
  _R,
  _RAe,
  _RP,
  _S,
  _SDA,
  _SQEE,
  _SSKKI,
  _ST,
  _T,
  _TR,
  _TRR,
  _TRRa,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_10_Create";
import { SynthesizedJsonInlineDataSchema } from "./schemas_22_Describe";

/* eslint no-var: 0 */

export var CreateDatasetRequest = struct(
  n0,
  _CDR,
  0,
  [_DN, _DS, _SSKKI, _CT, _T],
  [0, [() => DatasetSchema, 0], 0, [0, 4], () => TagList]
);
export var CreateDatasetResponse = struct(n0, _CDRr, 0, [_DN, _DA, _S], [0, 0, 0]);
export var CreateLabelGroupRequest = struct(n0, _CLGR, 0, [_LGN, _FC, _CT, _T], [0, 64 | 0, [0, 4], () => TagList]);
export var CreateLabelGroupResponse = struct(n0, _CLGRr, 0, [_LGN, _LGA], [0, 0]);
export var CreateLabelRequest = struct(
  n0,
  _CLR,
  0,
  [_LGN, _ST, _ET, _R, _FCa, _N, _E, _CT],
  [0, 4, 4, 0, 0, 0, 0, [0, 4]]
);
export var CreateLabelResponse = struct(n0, _CLRr, 0, [_LI], [0]);
export var DatasetSchema = struct(n0, _DS, 0, [_IDS], [[() => SynthesizedJsonInlineDataSchema, 0]]);
export var ImportDatasetRequest = struct(n0, _IDR, 0, [_SDA, _DN, _CT, _SSKKI, _T], [0, 0, [0, 4], 0, () => TagList]);
export var ImportDatasetResponse = struct(n0, _IDRm, 0, [_DN, _DA, _S, _JI], [0, 0, 0, 0]);
export var PutResourcePolicyRequest = struct(n0, _PRPR, 0, [_RAe, _RP, _PRI, _CT], [0, 0, 0, [0, 4]]);
export var PutResourcePolicyResponse = struct(n0, _PRPRu, 0, [_RAe, _PRI], [0, 0]);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_M],
  [0],

  __ServiceQuotaExceededException
);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RAe, _T], [0, () => TagList]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var CreateDataset = op(
  n0,
  _CD,
  0,
  () => CreateDatasetRequest,
  () => CreateDatasetResponse
);
export var CreateLabel = op(
  n0,
  _CL,
  0,
  () => CreateLabelRequest,
  () => CreateLabelResponse
);
export var CreateLabelGroup = op(
  n0,
  _CLG,
  0,
  () => CreateLabelGroupRequest,
  () => CreateLabelGroupResponse
);
export var ImportDataset = op(
  n0,
  _ID,
  0,
  () => ImportDatasetRequest,
  () => ImportDatasetResponse
);
export var PutResourcePolicy = op(
  n0,
  _PRP,
  0,
  () => PutResourcePolicyRequest,
  () => PutResourcePolicyResponse
);
export var TagResource = op(
  n0,
  _TR,
  0,
  () => TagResourceRequest,
  () => TagResourceResponse
);
