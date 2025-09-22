// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CSA,
  _CSAR,
  _CSARr,
  _dOM,
  _dOW,
  _DSA,
  _DSAe,
  _DSAR,
  _DSARe,
  _DSARes,
  _DSAResc,
  _fr,
  _h,
  _hQ,
  _LSA,
  _LSAR,
  _LSARi,
  _mR,
  _nT,
  _sAAc,
  _sAc,
  _SAM,
  _SAML,
  _sAN,
  _tag,
  _tCN,
  _USA,
  _USAR,
  _USARp,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateScheduledAuditRequest = struct(
  n0,
  _CSAR,
  0,
  [_fr, _dOM, _dOW, _tCN, _sAN, _tag],
  [0, 0, 0, 64 | 0, [0, 1], () => TagList]
);
export var CreateScheduledAuditResponse = struct(n0, _CSARr, 0, [_sAAc], [0]);
export var DeleteScheduledAuditRequest = struct(n0, _DSAR, 0, [_sAN], [[0, 1]]);
export var DeleteScheduledAuditResponse = struct(n0, _DSARe, 0, [], []);
export var DescribeScheduledAuditRequest = struct(n0, _DSARes, 0, [_sAN], [[0, 1]]);
export var DescribeScheduledAuditResponse = struct(
  n0,
  _DSAResc,
  0,
  [_fr, _dOM, _dOW, _tCN, _sAN, _sAAc],
  [0, 0, 0, 64 | 0, 0, 0]
);
export var ListScheduledAuditsRequest = struct(
  n0,
  _LSAR,
  0,
  [_nT, _mR],
  [
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
  ]
);
export var ListScheduledAuditsResponse = struct(n0, _LSARi, 0, [_sAc, _nT], [() => ScheduledAuditMetadataList, 0]);
export var ScheduledAuditMetadata = struct(n0, _SAM, 0, [_sAN, _sAAc, _fr, _dOM, _dOW], [0, 0, 0, 0, 0]);
export var UpdateScheduledAuditRequest = struct(n0, _USAR, 0, [_fr, _dOM, _dOW, _tCN, _sAN], [0, 0, 0, 64 | 0, [0, 1]]);
export var UpdateScheduledAuditResponse = struct(n0, _USARp, 0, [_sAAc], [0]);
export var ScheduledAuditMetadataList = list(n0, _SAML, 0, () => ScheduledAuditMetadata);
export var CreateScheduledAudit = op(
  n0,
  _CSA,
  {
    [_h]: ["POST", "/audit/scheduledaudits/{scheduledAuditName}", 200],
  },
  () => CreateScheduledAuditRequest,
  () => CreateScheduledAuditResponse
);
export var DeleteScheduledAudit = op(
  n0,
  _DSA,
  {
    [_h]: ["DELETE", "/audit/scheduledaudits/{scheduledAuditName}", 200],
  },
  () => DeleteScheduledAuditRequest,
  () => DeleteScheduledAuditResponse
);
export var DescribeScheduledAudit = op(
  n0,
  _DSAe,
  {
    [_h]: ["GET", "/audit/scheduledaudits/{scheduledAuditName}", 200],
  },
  () => DescribeScheduledAuditRequest,
  () => DescribeScheduledAuditResponse
);
export var ListScheduledAudits = op(
  n0,
  _LSA,
  {
    [_h]: ["GET", "/audit/scheduledaudits", 200],
  },
  () => ListScheduledAuditsRequest,
  () => ListScheduledAuditsResponse
);
export var UpdateScheduledAudit = op(
  n0,
  _USA,
  {
    [_h]: ["PATCH", "/audit/scheduledaudits/{scheduledAuditName}", 200],
  },
  () => UpdateScheduledAuditRequest,
  () => UpdateScheduledAuditResponse
);
