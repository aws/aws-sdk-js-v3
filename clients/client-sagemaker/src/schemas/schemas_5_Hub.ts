// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ACc,
  _AEc,
  _AU,
  _AUC,
  _CHCPU,
  _CHCPUR,
  _CHCPURr,
  _CHCR,
  _CHCRR,
  _CHCRRr,
  _CT,
  _CTA,
  _CTB,
  _DCP,
  _DHCe,
  _DHCes,
  _DHCR,
  _DHCRe,
  _DHCRel,
  _DHCRes,
  _DHCRR,
  _DOP,
  _DSV,
  _ESU,
  _FR,
  _HA,
  _HCA,
  _HCD,
  _HCDL,
  _HCDN,
  _HCDu,
  _HCDub,
  _HCDubo,
  _HCI,
  _HCIL,
  _HCM,
  _HCN,
  _HCS,
  _HCSK,
  _HCSu,
  _HCT,
  _HCV,
  _HN,
  _IHC,
  _IHCR,
  _IHCRm,
  _LHC,
  _LHCR,
  _LHCRi,
  _LHCV,
  _LHCVR,
  _LHCVRi,
  _LMT,
  _LP,
  _MR,
  _MSV,
  _MVi,
  _NCa,
  _NT,
  _OCT,
  _PUAC,
  _RMV,
  _SBo,
  _SMPHCA,
  _SO,
  _SSu,
  _T,
  _U,
  _UHC,
  _UHCR,
  _UHCRp,
  _UHCRpd,
  _UHCRR,
  _UHCRRp,
  n0,
  TagList,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AuthorizedUrl = struct(n0, _AU, 0, [_U, _LP], [0, 0]);
export var CreateHubContentPresignedUrlsRequest = struct(
  n0,
  _CHCPUR,
  0,
  [_HN, _HCT, _HCN, _HCV, _ACc, _MR, _NT],
  [0, 0, 0, 0, () => PresignedUrlAccessConfig, 1, 0]
);
export var CreateHubContentPresignedUrlsResponse = struct(
  n0,
  _CHCPURr,
  0,
  [_AUC, _NT],
  [() => AuthorizedUrlConfigs, 0]
);
export var CreateHubContentReferenceRequest = struct(
  n0,
  _CHCRR,
  0,
  [_HN, _SMPHCA, _HCN, _MVi, _T],
  [0, 0, 0, 0, () => TagList]
);
export var CreateHubContentReferenceResponse = struct(n0, _CHCRRr, 0, [_HA, _HCA], [0, 0]);
export var DeleteHubContentReferenceRequest = struct(n0, _DHCRR, 0, [_HN, _HCT, _HCN], [0, 0, 0]);
export var DeleteHubContentRequest = struct(n0, _DHCR, 0, [_HN, _HCT, _HCN, _HCV], [0, 0, 0, 0]);
export var DescribeHubContentRequest = struct(n0, _DHCRe, 0, [_HN, _HCT, _HCN, _HCV], [0, 0, 0, 0]);
export var DescribeHubContentResponse = struct(
  n0,
  _DHCRes,
  0,
  [
    _HCN,
    _HCA,
    _HCV,
    _HCT,
    _DSV,
    _HN,
    _HA,
    _HCDN,
    _HCD,
    _HCM,
    _HCDu,
    _SMPHCA,
    _RMV,
    _SSu,
    _HCSK,
    _HCDub,
    _HCS,
    _FR,
    _CT,
    _LMT,
  ],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64 | 0, () => HubContentDependencyList, 0, 0, 4, 4]
);
export var HubContentDependency = struct(n0, _HCDubo, 0, [_DOP, _DCP], [0, 0]);
export var HubContentInfo = struct(
  n0,
  _HCI,
  0,
  [_HCN, _HCA, _SMPHCA, _HCV, _HCT, _DSV, _HCDN, _HCD, _SSu, _HCSK, _HCS, _CT, _OCT],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 64 | 0, 0, 4, 4]
);
export var ImportHubContentRequest = struct(
  n0,
  _IHCR,
  0,
  [_HCN, _HCV, _HCT, _DSV, _HN, _HCDN, _HCD, _HCM, _HCDu, _SSu, _HCSK, _T],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64 | 0, () => TagList]
);
export var ImportHubContentResponse = struct(n0, _IHCRm, 0, [_HA, _HCA], [0, 0]);
export var ListHubContentsRequest = struct(
  n0,
  _LHCR,
  0,
  [_HN, _HCT, _NCa, _MSV, _CTB, _CTA, _SBo, _SO, _MR, _NT],
  [0, 0, 0, 0, 4, 4, 0, 0, 1, 0]
);
export var ListHubContentsResponse = struct(n0, _LHCRi, 0, [_HCSu, _NT], [() => HubContentInfoList, 0]);
export var ListHubContentVersionsRequest = struct(
  n0,
  _LHCVR,
  0,
  [_HN, _HCT, _HCN, _MVi, _MSV, _CTB, _CTA, _SBo, _SO, _MR, _NT],
  [0, 0, 0, 0, 0, 4, 4, 0, 0, 1, 0]
);
export var ListHubContentVersionsResponse = struct(n0, _LHCVRi, 0, [_HCSu, _NT], [() => HubContentInfoList, 0]);
export var PresignedUrlAccessConfig = struct(n0, _PUAC, 0, [_AEc, _ESU], [2, 0]);
export var UpdateHubContentReferenceRequest = struct(n0, _UHCRR, 0, [_HN, _HCN, _HCT, _MVi], [0, 0, 0, 0]);
export var UpdateHubContentReferenceResponse = struct(n0, _UHCRRp, 0, [_HA, _HCA], [0, 0]);
export var UpdateHubContentRequest = struct(
  n0,
  _UHCR,
  0,
  [_HN, _HCN, _HCT, _HCV, _HCDN, _HCD, _HCM, _HCSK, _SSu],
  [0, 0, 0, 0, 0, 0, 0, 64 | 0, 0]
);
export var UpdateHubContentResponse = struct(n0, _UHCRp, 0, [_HA, _HCA], [0, 0]);
export var AuthorizedUrlConfigs = list(n0, _AUC, 0, () => AuthorizedUrl);
export var HubContentDependencyList = list(n0, _HCDL, 0, () => HubContentDependency);
export var HubContentInfoList = list(n0, _HCIL, 0, () => HubContentInfo);
export var HubContentSearchKeywordList = 64 | 0;

export var CreateHubContentPresignedUrls = op(
  n0,
  _CHCPU,
  0,
  () => CreateHubContentPresignedUrlsRequest,
  () => CreateHubContentPresignedUrlsResponse
);
export var CreateHubContentReference = op(
  n0,
  _CHCR,
  0,
  () => CreateHubContentReferenceRequest,
  () => CreateHubContentReferenceResponse
);
export var DeleteHubContent = op(
  n0,
  _DHCe,
  0,
  () => DeleteHubContentRequest,
  () => Unit
);
export var DeleteHubContentReference = op(
  n0,
  _DHCRel,
  0,
  () => DeleteHubContentReferenceRequest,
  () => Unit
);
export var DescribeHubContent = op(
  n0,
  _DHCes,
  0,
  () => DescribeHubContentRequest,
  () => DescribeHubContentResponse
);
export var ImportHubContent = op(
  n0,
  _IHC,
  0,
  () => ImportHubContentRequest,
  () => ImportHubContentResponse
);
export var ListHubContents = op(
  n0,
  _LHC,
  0,
  () => ListHubContentsRequest,
  () => ListHubContentsResponse
);
export var ListHubContentVersions = op(
  n0,
  _LHCV,
  0,
  () => ListHubContentVersionsRequest,
  () => ListHubContentVersionsResponse
);
export var UpdateHubContent = op(
  n0,
  _UHC,
  0,
  () => UpdateHubContentRequest,
  () => UpdateHubContentResponse
);
export var UpdateHubContentReference = op(
  n0,
  _UHCRpd,
  0,
  () => UpdateHubContentReferenceRequest,
  () => UpdateHubContentReferenceResponse
);
