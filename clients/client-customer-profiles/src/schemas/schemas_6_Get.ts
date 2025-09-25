// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _AM,
  _AMM,
  _ATS,
  _CA,
  _CAo,
  _CD,
  _CDR,
  _CDRr,
  _CR,
  _DE,
  _DED,
  _DEK,
  _DLQU,
  _DN,
  _DNi,
  _DOTW,
  _DSo,
  _EA,
  _EC,
  _En,
  _GD,
  _GDR,
  _GDRe,
  _h,
  _hQ,
  _It,
  _JI,
  _jN,
  _JSo,
  _LUA,
  _LUJ,
  _LUJR,
  _LUJRi,
  _MARLFM,
  _MARLFMa,
  _Mat,
  _MPC,
  _MR,
  _mr,
  _MRa,
  _MRat,
  _MRatc,
  _MRatch,
  _NT,
  _nt,
  _OC,
  _PCr,
  _PN,
  _RBM,
  _RBMR,
  _RBMRu,
  _Ru,
  _SBN,
  _SE,
  _SEC,
  _SKN,
  _SR,
  _Sta,
  _Stat,
  _Ta,
  _Ti,
  _TSo,
  _UD,
  _UDR,
  _UDRp,
  _UJI,
  _UJL,
  n0,
} from "./schemas_0";
import { AutoMerging, ConflictResolution } from "./schemas_10_Get";

/* eslint no-var: 0 */

export var AttributeTypesSelector = struct(n0, _ATS, 0, [_AMM, _A, _PN, _EA], [0, 64 | 0, 64 | 0, 64 | 0]);
export var CreateDomainRequest = struct(
  n0,
  _CDR,
  0,
  [_DN, _DED, _DEK, _DLQU, _Mat, _RBM, _Ta],
  [[0, 1], 1, 0, 0, () => MatchingRequest, () => RuleBasedMatchingRequest, 128 | 0]
);
export var CreateDomainResponse = struct(
  n0,
  _CDRr,
  0,
  [_DN, _DED, _DEK, _DLQU, _Mat, _RBM, _CA, _LUA, _Ta],
  [0, 1, 0, 0, () => MatchingResponse, () => RuleBasedMatchingResponse, 4, 4, 128 | 0]
);
export var DomainStats = struct(n0, _DSo, 0, [_PCr, _MPC, _OC, _TSo], [1, 1, 1, 1]);
export var ExportingConfig = struct(n0, _EC, 0, [_SE], [() => S3ExportingConfig]);
export var GetDomainRequest = struct(n0, _GDR, 0, [_DN], [[0, 1]]);
export var GetDomainResponse = struct(
  n0,
  _GDRe,
  0,
  [_DN, _DED, _DEK, _DLQU, _Stat, _Mat, _RBM, _CA, _LUA, _Ta],
  [0, 1, 0, 0, () => DomainStats, () => MatchingResponse, () => RuleBasedMatchingResponse, 4, 4, 128 | 0]
);
export var JobSchedule = struct(n0, _JSo, 0, [_DOTW, _Ti], [0, 0]);
export var ListUploadJobsRequest = struct(
  n0,
  _LUJR,
  0,
  [_DN, _MR, _NT],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
  ]
);
export var ListUploadJobsResponse = struct(
  n0,
  _LUJRi,
  0,
  [_NT, _It],
  [
    [
      0,
      {
        [_jN]: _NT,
      },
    ],
    [
      () => UploadJobsList,
      {
        [_jN]: _It,
      },
    ],
  ]
);
export var MatchingRequest = struct(
  n0,
  _MRa,
  0,
  [_En, _JSo, _AM, _EC],
  [2, () => JobSchedule, () => AutoMerging, () => ExportingConfig]
);
export var MatchingResponse = struct(
  n0,
  _MRat,
  0,
  [_En, _JSo, _AM, _EC],
  [2, () => JobSchedule, () => AutoMerging, () => ExportingConfig]
);
export var MatchingRule = struct(n0, _MRatc, 0, [_Ru], [64 | 0]);
export var RuleBasedMatchingRequest = struct(
  n0,
  _RBMR,
  0,
  [_En, _MRatch, _MARLFM, _MARLFMa, _ATS, _CR, _EC],
  [2, () => MatchingRules, 1, 1, () => AttributeTypesSelector, () => ConflictResolution, () => ExportingConfig]
);
export var RuleBasedMatchingResponse = struct(
  n0,
  _RBMRu,
  0,
  [_En, _MRatch, _Sta, _MARLFM, _MARLFMa, _ATS, _CR, _EC],
  [2, () => MatchingRules, 0, 1, 1, () => AttributeTypesSelector, () => ConflictResolution, () => ExportingConfig]
);
export var S3ExportingConfig = struct(n0, _SEC, 0, [_SBN, _SKN], [0, 0]);
export var UpdateDomainRequest = struct(
  n0,
  _UDR,
  0,
  [_DN, _DED, _DEK, _DLQU, _Mat, _RBM, _Ta],
  [[0, 1], 1, 0, 0, () => MatchingRequest, () => RuleBasedMatchingRequest, 128 | 0]
);
export var UpdateDomainResponse = struct(
  n0,
  _UDRp,
  0,
  [_DN, _DED, _DEK, _DLQU, _Mat, _RBM, _CA, _LUA, _Ta],
  [0, 1, 0, 0, () => MatchingResponse, () => RuleBasedMatchingResponse, 4, 4, 128 | 0]
);
export var UploadJobItem = struct(
  n0,
  _UJI,
  0,
  [_JI, _DNi, _Sta, _SR, _CA, _CAo, _DE],
  [
    [
      0,
      {
        [_jN]: _JI,
      },
    ],
    [
      0,
      {
        [_jN]: _DNi,
      },
    ],
    [
      0,
      {
        [_jN]: _Sta,
      },
    ],
    [
      0,
      {
        [_jN]: _SR,
      },
    ],
    [
      4,
      {
        [_jN]: _CA,
      },
    ],
    [
      4,
      {
        [_jN]: _CAo,
      },
    ],
    [
      1,
      {
        [_jN]: _DE,
      },
    ],
  ]
);
export var AddressList = 64 | 0;

export var EmailList = 64 | 0;

export var MatchingRuleAttributeList = 64 | 0;

export var MatchingRules = list(n0, _MRatch, 0, () => MatchingRule);
export var PhoneNumberList = 64 | 0;

export var UploadJobsList = list(n0, _UJL, 0, [() => UploadJobItem, 0]);
export var CreateDomain = op(
  n0,
  _CD,
  {
    [_h]: ["POST", "/domains/{DomainName}", 200],
  },
  () => CreateDomainRequest,
  () => CreateDomainResponse
);
export var GetDomain = op(
  n0,
  _GD,
  {
    [_h]: ["GET", "/domains/{DomainName}", 200],
  },
  () => GetDomainRequest,
  () => GetDomainResponse
);
export var ListUploadJobs = op(
  n0,
  _LUJ,
  {
    [_h]: ["GET", "/domains/{DomainName}/upload-jobs", 200],
  },
  () => ListUploadJobsRequest,
  () => ListUploadJobsResponse
);
export var UpdateDomain = op(
  n0,
  _UD,
  {
    [_h]: ["PUT", "/domains/{DomainName}", 200],
  },
  () => UpdateDomainRequest,
  () => UpdateDomainResponse
);
