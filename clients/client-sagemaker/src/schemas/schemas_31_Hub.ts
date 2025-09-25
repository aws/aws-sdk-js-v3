// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CHr,
  _CHRr,
  _CHRre,
  _CT,
  _CTA,
  _CTB,
  _DHes,
  _DHRe,
  _DHRes,
  _FR,
  _HA,
  _HD,
  _HDN,
  _HI,
  _HIL,
  _HN,
  _HS,
  _HSK,
  _HSSC,
  _HSu,
  _LHi,
  _LHR,
  _LHRi,
  _LMT,
  _LMTA,
  _LMTB,
  _MR,
  _NCa,
  _NT,
  _SBo,
  _SO,
  _SOP,
  _SSC,
  _T,
  _UH,
  _UHR,
  _UHRp,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateHubRequest = struct(
  n0,
  _CHRr,
  0,
  [_HN, _HD, _HDN, _HSK, _SSC, _T],
  [0, 0, 0, 64 | 0, () => HubS3StorageConfig, () => TagList]
);
export var CreateHubResponse = struct(n0, _CHRre, 0, [_HA], [0]);
export var DescribeHubRequest = struct(n0, _DHRe, 0, [_HN], [0]);
export var DescribeHubResponse = struct(
  n0,
  _DHRes,
  0,
  [_HN, _HA, _HDN, _HD, _HSK, _SSC, _HS, _FR, _CT, _LMT],
  [0, 0, 0, 0, 64 | 0, () => HubS3StorageConfig, 0, 0, 4, 4]
);
export var HubInfo = struct(n0, _HI, 0, [_HN, _HA, _HDN, _HD, _HSK, _HS, _CT, _LMT], [0, 0, 0, 0, 64 | 0, 0, 4, 4]);
export var HubS3StorageConfig = struct(n0, _HSSC, 0, [_SOP], [0]);
export var ListHubsRequest = struct(
  n0,
  _LHR,
  0,
  [_NCa, _CTB, _CTA, _LMTB, _LMTA, _SBo, _SO, _MR, _NT],
  [0, 4, 4, 4, 4, 0, 0, 1, 0]
);
export var ListHubsResponse = struct(n0, _LHRi, 0, [_HSu, _NT], [() => HubInfoList, 0]);
export var UpdateHubRequest = struct(n0, _UHR, 0, [_HN, _HD, _HDN, _HSK], [0, 0, 0, 64 | 0]);
export var UpdateHubResponse = struct(n0, _UHRp, 0, [_HA], [0]);
export var HubInfoList = list(n0, _HIL, 0, () => HubInfo);
export var HubSearchKeywordList = 64 | 0;

export var CreateHub = op(
  n0,
  _CHr,
  0,
  () => CreateHubRequest,
  () => CreateHubResponse
);
export var DescribeHub = op(
  n0,
  _DHes,
  0,
  () => DescribeHubRequest,
  () => DescribeHubResponse
);
export var ListHubs = op(
  n0,
  _LHi,
  0,
  () => ListHubsRequest,
  () => ListHubsResponse
);
export var UpdateHub = op(
  n0,
  _UH,
  0,
  () => UpdateHubRequest,
  () => UpdateHubResponse
);
