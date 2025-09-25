// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aI,
  _aLI,
  _an,
  _aNOOTP,
  _b,
  _bCu,
  _bD,
  _cA,
  _CBFJ,
  _CCJ,
  _CCJR,
  _CCJRr,
  _cDII,
  _CFJ,
  _co,
  _com,
  _cT,
  _d,
  _DCJ,
  _DCJR,
  _DCJRe,
  _dOM,
  _dOW,
  _DS,
  _dS,
  _exc,
  _h,
  _inc,
  _iR,
  _iT,
  _jA,
  _jEA,
  _jI,
  _jIEHEA,
  _jN,
  _jPA,
  _jS,
  _JSB,
  _JSF,
  _JST,
  _jT,
  _ke,
  _lOCFJ,
  _lOJST,
  _lOSBDFJ,
  _lOTCPFJ,
  _lOTVP,
  _LRES,
  _lRES,
  _lRT,
  _mDII,
  _mDIS,
  _MS,
  _mS,
  _n,
  _nOR,
  _S,
  _SBCFJ,
  _SBDFJ,
  _sc,
  _SCFJ,
  _sCim,
  _sF,
  _SJD,
  _sJD,
  _sP,
  _SST,
  _sST,
  _St,
  _st,
  _t,
  _ta,
  _tC,
  _TCFJ,
  _TCPFJ,
  _TST,
  _tST,
  _tV,
  _TVP,
  _UPD,
  _uPD,
  _va,
  _val,
  _WS,
  _wS,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateClassificationJobRequest = struct(
  n0,
  _CCJR,
  0,
  [_aLI, _cT, _cDII, _d, _iR, _jT, _mDII, _mDIS, _n, _sJD, _sP, _sF, _t],
  [
    [
      64 | 0,
      {
        [_jN]: _aLI,
      },
    ],
    [
      0,
      {
        [_jN]: _cT,
        [_iT]: 1,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _cDII,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      2,
      {
        [_jN]: _iR,
      },
    ],
    [
      0,
      {
        [_jN]: _jT,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _mDII,
      },
    ],
    [
      0,
      {
        [_jN]: _mDIS,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      () => S3JobDefinition,
      {
        [_jN]: _sJD,
      },
    ],
    [
      1,
      {
        [_jN]: _sP,
      },
    ],
    [
      () => JobScheduleFrequency,
      {
        [_jN]: _sF,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var CreateClassificationJobResponse = struct(
  n0,
  _CCJRr,
  0,
  [_jA, _jI],
  [
    [
      0,
      {
        [_jN]: _jA,
      },
    ],
    [
      0,
      {
        [_jN]: _jI,
      },
    ],
  ]
);
export var CriteriaBlockForJob = struct(
  n0,
  _CBFJ,
  0,
  [_an],
  [
    [
      () => __listOfCriteriaForJob,
      {
        [_jN]: _an,
      },
    ],
  ]
);
export var CriteriaForJob = struct(
  n0,
  _CFJ,
  0,
  [_sCim, _tC],
  [
    [
      () => SimpleCriterionForJob,
      {
        [_jN]: _sCim,
      },
    ],
    [
      () => TagCriterionForJob,
      {
        [_jN]: _tC,
      },
    ],
  ]
);
export var DailySchedule = struct(n0, _DS, 0, [], []);
export var DescribeClassificationJobRequest = struct(n0, _DCJR, 0, [_jI], [[0, 1]]);
export var DescribeClassificationJobResponse = struct(
  n0,
  _DCJRe,
  0,
  [_aLI, _cT, _cA, _cDII, _d, _iR, _jA, _jI, _jS, _jT, _lRES, _lRT, _mDII, _mDIS, _n, _sJD, _sP, _sF, _st, _t, _uPD],
  [
    [
      64 | 0,
      {
        [_jN]: _aLI,
      },
    ],
    [
      0,
      {
        [_jN]: _cT,
        [_iT]: 1,
      },
    ],
    [
      5,
      {
        [_jN]: _cA,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _cDII,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      2,
      {
        [_jN]: _iR,
      },
    ],
    [
      0,
      {
        [_jN]: _jA,
      },
    ],
    [
      0,
      {
        [_jN]: _jI,
      },
    ],
    [
      0,
      {
        [_jN]: _jS,
      },
    ],
    [
      0,
      {
        [_jN]: _jT,
      },
    ],
    [
      () => LastRunErrorStatus,
      {
        [_jN]: _lRES,
      },
    ],
    [
      5,
      {
        [_jN]: _lRT,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _mDII,
      },
    ],
    [
      0,
      {
        [_jN]: _mDIS,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      () => S3JobDefinition,
      {
        [_jN]: _sJD,
      },
    ],
    [
      1,
      {
        [_jN]: _sP,
      },
    ],
    [
      () => JobScheduleFrequency,
      {
        [_jN]: _sF,
      },
    ],
    [
      () => Statistics,
      {
        [_jN]: _st,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
    [
      () => UserPausedDetails,
      {
        [_jN]: _uPD,
      },
    ],
  ]
);
export var JobScheduleFrequency = struct(
  n0,
  _JSF,
  0,
  [_dS, _mS, _wS],
  [
    [
      () => DailySchedule,
      {
        [_jN]: _dS,
      },
    ],
    [
      () => MonthlySchedule,
      {
        [_jN]: _mS,
      },
    ],
    [
      () => WeeklySchedule,
      {
        [_jN]: _wS,
      },
    ],
  ]
);
export var JobScopeTerm = struct(
  n0,
  _JST,
  0,
  [_sST, _tST],
  [
    [
      () => SimpleScopeTerm,
      {
        [_jN]: _sST,
      },
    ],
    [
      () => TagScopeTerm,
      {
        [_jN]: _tST,
      },
    ],
  ]
);
export var JobScopingBlock = struct(
  n0,
  _JSB,
  0,
  [_an],
  [
    [
      () => __listOfJobScopeTerm,
      {
        [_jN]: _an,
      },
    ],
  ]
);
export var LastRunErrorStatus = struct(
  n0,
  _LRES,
  0,
  [_co],
  [
    [
      0,
      {
        [_jN]: _co,
      },
    ],
  ]
);
export var MonthlySchedule = struct(
  n0,
  _MS,
  0,
  [_dOM],
  [
    [
      1,
      {
        [_jN]: _dOM,
      },
    ],
  ]
);
export var S3BucketCriteriaForJob = struct(
  n0,
  _SBCFJ,
  0,
  [_exc, _inc],
  [
    [
      () => CriteriaBlockForJob,
      {
        [_jN]: _exc,
      },
    ],
    [
      () => CriteriaBlockForJob,
      {
        [_jN]: _inc,
      },
    ],
  ]
);
export var S3BucketDefinitionForJob = struct(
  n0,
  _SBDFJ,
  0,
  [_aI, _b],
  [
    [
      0,
      {
        [_jN]: _aI,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _b,
      },
    ],
  ]
);
export var S3JobDefinition = struct(
  n0,
  _SJD,
  0,
  [_bCu, _bD, _sc],
  [
    [
      () => S3BucketCriteriaForJob,
      {
        [_jN]: _bCu,
      },
    ],
    [
      () => __listOfS3BucketDefinitionForJob,
      {
        [_jN]: _bD,
      },
    ],
    [
      () => Scoping,
      {
        [_jN]: _sc,
      },
    ],
  ]
);
export var Scoping = struct(
  n0,
  _S,
  0,
  [_exc, _inc],
  [
    [
      () => JobScopingBlock,
      {
        [_jN]: _exc,
      },
    ],
    [
      () => JobScopingBlock,
      {
        [_jN]: _inc,
      },
    ],
  ]
);
export var SimpleCriterionForJob = struct(
  n0,
  _SCFJ,
  0,
  [_com, _ke, _val],
  [
    [
      0,
      {
        [_jN]: _com,
      },
    ],
    [
      0,
      {
        [_jN]: _ke,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _val,
      },
    ],
  ]
);
export var SimpleScopeTerm = struct(
  n0,
  _SST,
  0,
  [_com, _ke, _val],
  [
    [
      0,
      {
        [_jN]: _com,
      },
    ],
    [
      0,
      {
        [_jN]: _ke,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _val,
      },
    ],
  ]
);
export var Statistics = struct(
  n0,
  _St,
  0,
  [_aNOOTP, _nOR],
  [
    [
      1,
      {
        [_jN]: _aNOOTP,
      },
    ],
    [
      1,
      {
        [_jN]: _nOR,
      },
    ],
  ]
);
export var TagCriterionForJob = struct(
  n0,
  _TCFJ,
  0,
  [_com, _tV],
  [
    [
      0,
      {
        [_jN]: _com,
      },
    ],
    [
      () => __listOfTagCriterionPairForJob,
      {
        [_jN]: _tV,
      },
    ],
  ]
);
export var TagCriterionPairForJob = struct(
  n0,
  _TCPFJ,
  0,
  [_ke, _va],
  [
    [
      0,
      {
        [_jN]: _ke,
      },
    ],
    [
      0,
      {
        [_jN]: _va,
      },
    ],
  ]
);
export var TagScopeTerm = struct(
  n0,
  _TST,
  0,
  [_com, _ke, _tV, _ta],
  [
    [
      0,
      {
        [_jN]: _com,
      },
    ],
    [
      0,
      {
        [_jN]: _ke,
      },
    ],
    [
      () => __listOfTagValuePair,
      {
        [_jN]: _tV,
      },
    ],
    [
      0,
      {
        [_jN]: _ta,
      },
    ],
  ]
);
export var TagValuePair = struct(
  n0,
  _TVP,
  0,
  [_ke, _va],
  [
    [
      0,
      {
        [_jN]: _ke,
      },
    ],
    [
      0,
      {
        [_jN]: _va,
      },
    ],
  ]
);
export var UserPausedDetails = struct(
  n0,
  _UPD,
  0,
  [_jEA, _jIEHEA, _jPA],
  [
    [
      5,
      {
        [_jN]: _jEA,
      },
    ],
    [
      0,
      {
        [_jN]: _jIEHEA,
      },
    ],
    [
      5,
      {
        [_jN]: _jPA,
      },
    ],
  ]
);
export var WeeklySchedule = struct(
  n0,
  _WS,
  0,
  [_dOW],
  [
    [
      0,
      {
        [_jN]: _dOW,
      },
    ],
  ]
);
export var __listOfCriteriaForJob = list(n0, _lOCFJ, 0, [() => CriteriaForJob, 0]);
export var __listOfJobScopeTerm = list(n0, _lOJST, 0, [() => JobScopeTerm, 0]);
export var __listOfS3BucketDefinitionForJob = list(n0, _lOSBDFJ, 0, [() => S3BucketDefinitionForJob, 0]);
export var __listOfTagCriterionPairForJob = list(n0, _lOTCPFJ, 0, [() => TagCriterionPairForJob, 0]);
export var __listOfTagValuePair = list(n0, _lOTVP, 0, [() => TagValuePair, 0]);
export var CreateClassificationJob = op(
  n0,
  _CCJ,
  {
    [_h]: ["POST", "/jobs", 200],
  },
  () => CreateClassificationJobRequest,
  () => CreateClassificationJobResponse
);
export var DescribeClassificationJob = op(
  n0,
  _DCJ,
  {
    [_h]: ["GET", "/jobs/{jobId}", 200],
  },
  () => DescribeClassificationJobRequest,
  () => DescribeClassificationJobResponse
);
