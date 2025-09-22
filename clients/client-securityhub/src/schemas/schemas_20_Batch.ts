// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ASFIL,
  _BUF,
  _BUFR,
  _BUFRa,
  _BUFUF,
  _BUFUFL,
  _Con,
  _Cri,
  _ECr,
  _EMr,
  _FIin,
  _FIind,
  _h,
  _I,
  _Lab,
  _No,
  _Norm,
  _PA,
  _PFro,
  _Produ,
  _RF,
  _RFe,
  _RFL,
  _Se,
  _St,
  _SUe,
  _Ty,
  _UDF,
  _UF,
  _VS,
  _W,
  _WU,
  n0,
} from "./schemas_0";
import { NoteUpdate } from "./schemas_28_Automation";
import { AwsSecurityFindingIdentifier } from "./schemas_30_Finding";

/* eslint no-var: 0 */

export var BatchUpdateFindingsRequest = struct(
  n0,
  _BUFR,
  0,
  [_FIin, _No, _Se, _VS, _Con, _Cri, _Ty, _UDF, _W, _RF],
  [
    () => AwsSecurityFindingIdentifierList,
    () => NoteUpdate,
    () => SeverityUpdate,
    0,
    1,
    1,
    64 | 0,
    128 | 0,
    () => WorkflowUpdate,
    () => RelatedFindingList,
  ]
);
export var BatchUpdateFindingsResponse = struct(
  n0,
  _BUFRa,
  0,
  [_PFro, _UF],
  [() => AwsSecurityFindingIdentifierList, () => BatchUpdateFindingsUnprocessedFindingsList]
);
export var BatchUpdateFindingsUnprocessedFinding = struct(
  n0,
  _BUFUF,
  0,
  [_FIind, _ECr, _EMr],
  [() => AwsSecurityFindingIdentifier, 0, 0]
);
export var RelatedFinding = struct(n0, _RFe, 0, [_PA, _I], [0, 0]);
export var SeverityUpdate = struct(n0, _SUe, 0, [_Norm, _Produ, _Lab], [1, 1, 0]);
export var WorkflowUpdate = struct(n0, _WU, 0, [_St], [0]);
export var AwsSecurityFindingIdentifierList = list(n0, _ASFIL, 0, () => AwsSecurityFindingIdentifier);
export var BatchUpdateFindingsUnprocessedFindingsList = list(
  n0,
  _BUFUFL,
  0,
  () => BatchUpdateFindingsUnprocessedFinding
);
export var RelatedFindingList = list(n0, _RFL, 0, () => RelatedFinding);
export var TypeList = 64 | 0;

export var FieldMap = 128 | 0;

export var BatchUpdateFindings = op(
  n0,
  _BUF,
  {
    [_h]: ["PATCH", "/findings/batchupdate", 200],
  },
  () => BatchUpdateFindingsRequest,
  () => BatchUpdateFindingsResponse
);
