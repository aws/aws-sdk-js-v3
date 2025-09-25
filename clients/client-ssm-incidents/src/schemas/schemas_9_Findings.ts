// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _BGIF,
  _BGIFE,
  _BGIFEL,
  _BGIFI,
  _BGIFO,
  _CDD,
  _cDD,
  _CFSU,
  _cFSU,
  _co,
  _cTr,
  _d,
  _dGA,
  _dI,
  _er,
  _eT,
  _f,
  _FD,
  _Fi,
  _fI,
  _fIi,
  _FLi,
  _h,
  _id,
  _iRA,
  _lMT,
  _m,
  _sA,
  _sT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchGetIncidentFindingsError = struct(n0, _BGIFE, 0, [_fI, _co, _m], [0, 0, 0]);
export var BatchGetIncidentFindingsInput = struct(n0, _BGIFI, 0, [_iRA, _fIi], [0, 64 | 0]);
export var BatchGetIncidentFindingsOutput = struct(
  n0,
  _BGIFO,
  0,
  [_f, _er],
  [() => FindingList, () => BatchGetIncidentFindingsErrorList]
);
export var CloudFormationStackUpdate = struct(n0, _CFSU, 0, [_sT, _eT, _sA], [4, 4, 0]);
export var CodeDeployDeployment = struct(n0, _CDD, 0, [_sT, _eT, _dGA, _dI], [4, 4, 0, 0]);
export var Finding = struct(n0, _Fi, 0, [_id, _cTr, _lMT, _d], [0, 4, 4, () => FindingDetails]);
export var BatchGetIncidentFindingsErrorList = list(n0, _BGIFEL, 0, () => BatchGetIncidentFindingsError);
export var FindingIdList = 64 | 0;

export var FindingList = list(n0, _FLi, 0, () => Finding);
export var FindingDetails = uni(
  n0,
  _FD,
  0,
  [_cDD, _cFSU],
  [() => CodeDeployDeployment, () => CloudFormationStackUpdate]
);
export var BatchGetIncidentFindings = op(
  n0,
  _BGIF,
  {
    [_h]: ["POST", "/batchGetIncidentFindings", 200],
  },
  () => BatchGetIncidentFindingsInput,
  () => BatchGetIncidentFindingsOutput
);
