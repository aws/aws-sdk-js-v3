// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _a,
  _aEI,
  _aI,
  _aMEI,
  _aMI,
  _cDT,
  _cTI,
  _DCe,
  _dT,
  _e,
  _eI,
  _end,
  _FBA,
  _fBA,
  _FBAM,
  _fBAM,
  _FBCT,
  _fBCT,
  _FBE,
  _fBE,
  _fC,
  _fi,
  _h,
  _iA,
  _iAM,
  _iO,
  _iSWC,
  _ISWSC,
  _ISWSCF,
  _ISWSCFo,
  _iTMC,
  _ITMDC,
  _ITMSC,
  _ITMSCF,
  _ITMSCFo,
  _LMTJ,
  _LMTJF,
  _LMTJFi,
  _LMTJR,
  _LMTJRi,
  _lo,
  _mR,
  _mTJI,
  _MTJP,
  _MTJS,
  _mTJS,
  _MTJSe,
  _MTJSet,
  _nTe,
  _p,
  _qP,
  _s,
  _SC,
  _sC,
  _sCk,
  _SCo,
  _sCu,
  _SDC,
  _SSC,
  _st,
  _sTo,
  _t,
  _tCo,
  _uDT,
  _w,
  _wI,
  n0,
} from "./schemas_0";
import { ErrorDetails } from "./schemas_13_List";

/* eslint no-var: 0 */

export var DestinationConfiguration = struct(
  n0,
  _DCe,
  0,
  [_t, _sC, _iTMC],
  [0, () => S3DestinationConfiguration, () => IotTwinMakerDestinationConfiguration]
);
export var FilterByAsset = struct(n0, _FBA, 0, [_aI, _aEI, _iO, _iAM], [0, 0, 2, 2]);
export var FilterByAssetModel = struct(n0, _FBAM, 0, [_aMI, _aMEI, _iO, _iA], [0, 0, 2, 2]);
export var FilterByComponentType = struct(n0, _FBCT, 0, [_cTI], [0]);
export var FilterByEntity = struct(n0, _FBE, 0, [_eI], [0]);
export var IotSiteWiseSourceConfiguration = struct(n0, _ISWSC, 0, [_fi], [() => IotSiteWiseSourceConfigurationFilters]);
export var IotTwinMakerDestinationConfiguration = struct(n0, _ITMDC, 0, [_w], [0]);
export var IotTwinMakerSourceConfiguration = struct(
  n0,
  _ITMSC,
  0,
  [_w, _fi],
  [0, () => IotTwinMakerSourceConfigurationFilters]
);
export var ListMetadataTransferJobsRequest = struct(
  n0,
  _LMTJR,
  0,
  [_sTo, _dT, _fi, _nTe, _mR],
  [0, 0, () => ListMetadataTransferJobsFilters, 0, 1]
);
export var ListMetadataTransferJobsResponse = struct(
  n0,
  _LMTJRi,
  0,
  [_mTJS, _nTe],
  [() => MetadataTransferJobSummaries, 0]
);
export var MetadataTransferJobProgress = struct(n0, _MTJP, 0, [_tCo, _sCu, _sCk, _fC], [1, 1, 1, 1]);
export var MetadataTransferJobStatus = struct(n0, _MTJS, 0, [_st, _e, _qP], [0, () => ErrorDetails, 1]);
export var MetadataTransferJobSummary = struct(
  n0,
  _MTJSe,
  0,
  [_mTJI, _a, _cDT, _uDT, _s, _p],
  [0, 0, 4, 4, () => MetadataTransferJobStatus, () => MetadataTransferJobProgress]
);
export var S3DestinationConfiguration = struct(n0, _SDC, 0, [_lo], [0]);
export var S3SourceConfiguration = struct(n0, _SSC, 0, [_lo], [0]);
export var SourceConfiguration = struct(
  n0,
  _SC,
  0,
  [_t, _sC, _iSWC, _iTMC],
  [0, () => S3SourceConfiguration, () => IotSiteWiseSourceConfiguration, () => IotTwinMakerSourceConfiguration]
);
export var IotSiteWiseSourceConfigurationFilters = list(n0, _ISWSCF, 0, () => IotSiteWiseSourceConfigurationFilter);
export var IotTwinMakerSourceConfigurationFilters = list(n0, _ITMSCF, 0, () => IotTwinMakerSourceConfigurationFilter);
export var ListMetadataTransferJobsFilters = list(n0, _LMTJF, 0, () => ListMetadataTransferJobsFilter);
export var MetadataTransferJobSummaries = list(n0, _MTJSet, 0, () => MetadataTransferJobSummary);
export var SourceConfigurations = list(n0, _SCo, 0, () => SourceConfiguration);
export var IotSiteWiseSourceConfigurationFilter = uni(
  n0,
  _ISWSCFo,
  0,
  [_fBAM, _fBA],
  [() => FilterByAssetModel, () => FilterByAsset]
);
export var IotTwinMakerSourceConfigurationFilter = uni(
  n0,
  _ITMSCFo,
  0,
  [_fBCT, _fBE],
  [() => FilterByComponentType, () => FilterByEntity]
);
export var ListMetadataTransferJobsFilter = uni(n0, _LMTJFi, 0, [_wI, _st], [0, 0]);
export var ListMetadataTransferJobs = op(
  n0,
  _LMTJ,
  {
    [_h]: ["POST", "/metadata-transfer-jobs-list", 200],
    [_end]: ["api."],
  },
  () => ListMetadataTransferJobsRequest,
  () => ListMetadataTransferJobsResponse
);
