// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ResourceDataSyncAlreadyExistsException as __ResourceDataSyncAlreadyExistsException,
  ResourceDataSyncConflictException as __ResourceDataSyncConflictException,
  ResourceDataSyncCountExceededException as __ResourceDataSyncCountExceededException,
  ResourceDataSyncInvalidConfigurationException as __ResourceDataSyncInvalidConfigurationException,
  ResourceDataSyncNotFoundException as __ResourceDataSyncNotFoundException,
} from "../models/index";
import {
  _AOS,
  _aQE,
  _AWSKMSKARN,
  _BNu,
  _c,
  _CRDS,
  _CRDSR,
  _CRDSRr,
  _DDS,
  _DDST,
  _DRDS,
  _DRDSR,
  _DRDSRe,
  _e,
  _EAODS,
  _IFR,
  _LRDS,
  _LRDSR,
  _LRDSRi,
  _LS,
  _LSSM,
  _LSST,
  _LST,
  _M,
  _MR,
  _NT,
  _OSTr,
  _OUI,
  _OUr,
  _Pre,
  _RDSAEE,
  _RDSAOS,
  _RDSCE,
  _RDSCEE,
  _RDSDDS,
  _RDSI,
  _RDSICE,
  _RDSIe,
  _RDSIL,
  _RDSNFE,
  _RDSOU,
  _RDSOUL,
  _RDSS,
  _RDSSD,
  _RDSSWS,
  _Reg,
  _S,
  _SCT,
  _SDe,
  _SFy,
  _SLMT,
  _SN,
  _SRou,
  _SSy,
  _STo,
  _STy,
  _URDS,
  _URDSR,
  _URDSRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateResourceDataSyncRequest = struct(
  n0,
  _CRDSR,
  0,
  [_SN, _SDe, _STy, _SSy],
  [0, () => ResourceDataSyncS3Destination, 0, () => ResourceDataSyncSource]
);
export var CreateResourceDataSyncResult = struct(n0, _CRDSRr, 0, [], []);
export var DeleteResourceDataSyncRequest = struct(n0, _DRDSR, 0, [_SN, _STy], [0, 0]);
export var DeleteResourceDataSyncResult = struct(n0, _DRDSRe, 0, [], []);
export var ListResourceDataSyncRequest = struct(n0, _LRDSR, 0, [_STy, _NT, _MR], [0, 0, 1]);
export var ListResourceDataSyncResult = struct(n0, _LRDSRi, 0, [_RDSI, _NT], [() => ResourceDataSyncItemList, 0]);
export var ResourceDataSyncAlreadyExistsException = error(
  n0,
  _RDSAEE,
  {
    [_e]: _c,
    [_aQE]: [`ResourceDataSyncAlreadyExists`, 400],
  },
  [_SN],
  [0],

  __ResourceDataSyncAlreadyExistsException
);
export var ResourceDataSyncAwsOrganizationsSource = struct(
  n0,
  _RDSAOS,
  0,
  [_OSTr, _OUr],
  [0, () => ResourceDataSyncOrganizationalUnitList]
);
export var ResourceDataSyncConflictException = error(
  n0,
  _RDSCE,
  {
    [_e]: _c,
    [_aQE]: [`ResourceDataSyncConflictException`, 409],
  },
  [_M],
  [0],

  __ResourceDataSyncConflictException
);
export var ResourceDataSyncCountExceededException = error(
  n0,
  _RDSCEE,
  {
    [_e]: _c,
    [_aQE]: [`ResourceDataSyncCountExceeded`, 400],
  },
  [_M],
  [0],

  __ResourceDataSyncCountExceededException
);
export var ResourceDataSyncDestinationDataSharing = struct(n0, _RDSDDS, 0, [_DDST], [0]);
export var ResourceDataSyncInvalidConfigurationException = error(
  n0,
  _RDSICE,
  {
    [_e]: _c,
    [_aQE]: [`ResourceDataSyncInvalidConfiguration`, 400],
  },
  [_M],
  [0],

  __ResourceDataSyncInvalidConfigurationException
);
export var ResourceDataSyncItem = struct(
  n0,
  _RDSIe,
  0,
  [_SN, _STy, _SSy, _SDe, _LST, _LSST, _SLMT, _LS, _SCT, _LSSM],
  [0, 0, () => ResourceDataSyncSourceWithState, () => ResourceDataSyncS3Destination, 4, 4, 4, 0, 4, 0]
);
export var ResourceDataSyncNotFoundException = error(
  n0,
  _RDSNFE,
  {
    [_e]: _c,
    [_aQE]: [`ResourceDataSyncNotFound`, 404],
  },
  [_SN, _STy, _M],
  [0, 0, 0],

  __ResourceDataSyncNotFoundException
);
export var ResourceDataSyncOrganizationalUnit = struct(n0, _RDSOU, 0, [_OUI], [0]);
export var ResourceDataSyncS3Destination = struct(
  n0,
  _RDSSD,
  0,
  [_BNu, _Pre, _SFy, _Reg, _AWSKMSKARN, _DDS],
  [0, 0, 0, 0, 0, () => ResourceDataSyncDestinationDataSharing]
);
export var ResourceDataSyncSource = struct(
  n0,
  _RDSS,
  0,
  [_STo, _AOS, _SRou, _IFR, _EAODS],
  [0, () => ResourceDataSyncAwsOrganizationsSource, 64 | 0, 2, 2]
);
export var ResourceDataSyncSourceWithState = struct(
  n0,
  _RDSSWS,
  0,
  [_STo, _AOS, _SRou, _IFR, _S, _EAODS],
  [0, () => ResourceDataSyncAwsOrganizationsSource, 64 | 0, 2, 0, 2]
);
export var UpdateResourceDataSyncRequest = struct(
  n0,
  _URDSR,
  0,
  [_SN, _STy, _SSy],
  [0, 0, () => ResourceDataSyncSource]
);
export var UpdateResourceDataSyncResult = struct(n0, _URDSRp, 0, [], []);
export var ResourceDataSyncItemList = list(n0, _RDSIL, 0, () => ResourceDataSyncItem);
export var ResourceDataSyncOrganizationalUnitList = list(n0, _RDSOUL, 0, () => ResourceDataSyncOrganizationalUnit);
export var ResourceDataSyncSourceRegionList = 64 | 0;

export var CreateResourceDataSync = op(
  n0,
  _CRDS,
  0,
  () => CreateResourceDataSyncRequest,
  () => CreateResourceDataSyncResult
);
export var DeleteResourceDataSync = op(
  n0,
  _DRDS,
  0,
  () => DeleteResourceDataSyncRequest,
  () => DeleteResourceDataSyncResult
);
export var ListResourceDataSync = op(
  n0,
  _LRDS,
  0,
  () => ListResourceDataSyncRequest,
  () => ListResourceDataSyncResult
);
export var UpdateResourceDataSync = op(
  n0,
  _URDS,
  0,
  () => UpdateResourceDataSyncRequest,
  () => UpdateResourceDataSyncResult
);
