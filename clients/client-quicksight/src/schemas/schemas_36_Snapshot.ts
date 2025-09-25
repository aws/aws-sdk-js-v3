// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAI,
  _Ar,
  _AU,
  _AUSJR,
  _AUSJRL,
  _BCu,
  _BNu,
  _BP,
  _BR,
  _CT,
  _DDSJRes,
  _DDSJRR,
  _DDSJRRe,
  _DI,
  _EI,
  _EM,
  _ETr,
  _FGi,
  _File,
  _FTo,
  _h,
  _JS,
  _LUT,
  _Resu,
  _RI,
  _SBC,
  _SDCe,
  _SFL,
  _SFn,
  _SFSS,
  _SFSSL,
  _SIh,
  _SJEI,
  _SJI,
  _SJR,
  _SJREI,
  _SJREIL,
  _SJRFG,
  _SJRFGL,
  _SJSR,
  _SJSRL,
  _SRe,
  _SSDC,
  _SSel,
  _SShe,
  _St,
  _SU,
  _VIi,
  n0,
} from "./schemas_0";
import { SensitiveS3Uri } from "./schemas_96_Describe";

/* eslint no-var: 0 */

export var AnonymousUserSnapshotJobResult = struct(n0, _AUSJR, 0, [_FGi], [[() => SnapshotJobResultFileGroupList, 0]]);
export var DescribeDashboardSnapshotJobResultRequest = struct(
  n0,
  _DDSJRR,
  0,
  [_AAI, _DI, _SJI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DescribeDashboardSnapshotJobResultResponse = struct(
  n0,
  _DDSJRRe,
  0,
  [_Ar, _JS, _CT, _LUT, _Resu, _EI, _RI, _St],
  [0, 0, 4, 4, [() => SnapshotJobResult, 0], () => SnapshotJobErrorInfo, 0, [1, 32]]
);
export var S3BucketConfiguration = struct(n0, _SBC, 0, [_BNu, _BP, _BR], [0, 0, 0]);
export var SnapshotFile = struct(n0, _SFn, 0, [_SShe, _FTo], [() => SnapshotFileSheetSelectionList, 0]);
export var SnapshotFileSheetSelection = struct(n0, _SFSS, 0, [_SIh, _SSel, _VIi], [0, 0, 64 | 0]);
export var SnapshotJobErrorInfo = struct(n0, _SJEI, 0, [_EM, _ETr], [0, 0]);
export var SnapshotJobResult = struct(n0, _SJR, 0, [_AU], [[() => AnonymousUserSnapshotJobResultList, 0]]);
export var SnapshotJobResultErrorInfo = struct(n0, _SJREI, 0, [_EM, _ETr], [0, 0]);
export var SnapshotJobResultFileGroup = struct(
  n0,
  _SJRFG,
  0,
  [_File, _SRe],
  [() => SnapshotFileList, [() => SnapshotJobS3ResultList, 0]]
);
export var SnapshotJobS3Result = struct(
  n0,
  _SJSR,
  0,
  [_SDCe, _SU, _EI],
  [() => SnapshotS3DestinationConfiguration, [() => SensitiveS3Uri, 0], () => SnapshotJobResultErrorInfoList]
);
export var SnapshotS3DestinationConfiguration = struct(n0, _SSDC, 0, [_BCu], [() => S3BucketConfiguration]);
export var AnonymousUserSnapshotJobResultList = list(n0, _AUSJRL, 0, [() => AnonymousUserSnapshotJobResult, 0]);
export var SnapshotFileList = list(n0, _SFL, 0, () => SnapshotFile);
export var SnapshotFileSheetSelectionList = list(n0, _SFSSL, 0, () => SnapshotFileSheetSelection);
export var SnapshotFileSheetSelectionVisualIdList = 64 | 0;

export var SnapshotJobResultErrorInfoList = list(n0, _SJREIL, 0, () => SnapshotJobResultErrorInfo);
export var SnapshotJobResultFileGroupList = list(n0, _SJRFGL, 0, [() => SnapshotJobResultFileGroup, 0]);
export var SnapshotJobS3ResultList = list(n0, _SJSRL, 0, [() => SnapshotJobS3Result, 0]);
export var DescribeDashboardSnapshotJobResult = op(
  n0,
  _DDSJRes,
  {
    [_h]: ["GET", "/accounts/{AwsAccountId}/dashboards/{DashboardId}/snapshot-jobs/{SnapshotJobId}/result", 200],
  },
  () => DescribeDashboardSnapshotJobResultRequest,
  () => DescribeDashboardSnapshotJobResultResponse
);
