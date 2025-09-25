// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ConflictException as __ConflictException } from "../models/index";
import {
  _aDSSITB,
  _AMR,
  _AMRI,
  _AMRO,
  _aZ,
  _aZI,
  _bSC,
  _c,
  _cAVCI,
  _cC,
  _CCAVC,
  _CCAVCI,
  _CCAVCO,
  _cCC,
  _cCCPN,
  _CCEI,
  _CCEII,
  _CCEIO,
  _cCTSTOCI,
  _CCVC,
  _CCVCI,
  _CCVCO,
  _cDN,
  _CE,
  _cEII,
  _cN,
  _CON,
  _CONI,
  _CONO,
  _COPC,
  _COPCI,
  _COPCO,
  _cSC,
  _cT,
  _cVCI,
  _d,
  _DCAVC,
  _DCAVCI,
  _DCAVCO,
  _DCEI,
  _DCEII,
  _DCEIO,
  _dCO,
  _DCVC,
  _DCVCI,
  _DCVCO,
  _dDP,
  _dN,
  _dNSSIGB,
  _dS,
  _dSSITB,
  _dST,
  _e,
  _gV,
  _h,
  _hE,
  _iLBE,
  _iMEVC,
  _iSDE,
  _lM,
  _m,
  _mPOCUIGB,
  _mRT,
  _mSIGB,
  _mW,
  _oNI,
  _oPCI,
  _pCTBA,
  _pCTBR,
  _pNI,
  _rI,
  _rT,
  _s,
  _sA,
  _sC,
  _sh,
  _sLPNT,
  _sLPT,
  _sLPTc,
  _sPD,
  _sPK,
  _sR,
  _sST,
  _sV,
  _t,
  _tCD,
  _tZ,
  _UCEI,
  _UCEII,
  _UCEIO,
  _UON,
  _UONI,
  _UONO,
  _zEA,
  n0,
} from "./schemas_0";
import { CustomerContacts, MaintenanceWindow } from "./schemas_10_Cloud";
import { DataCollectionOptions } from "./schemas_11_Cloud";

/* eslint no-var: 0 */

export var AcceptMarketplaceRegistrationInput = struct(n0, _AMRI, 0, [_mRT], [0]);
export var AcceptMarketplaceRegistrationOutput = struct(n0, _AMRO, 0, [], []);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m, _rI, _rT],
  [0, 0, 0],

  __ConflictException
);
export var CreateCloudAutonomousVmClusterInput = struct(
  n0,
  _CCAVCI,
  0,
  [_cEII, _oNI, _dN, _cT, _aDSSITB, _cCCPN, _dS, _d, _iMEVC, _lM, _mW, _mPOCUIGB, _sLPNT, _sLPT, _t, _tZ, _tCD],
  [0, 0, 0, [0, 4], 1, 1, 64 | 0, 0, 2, 0, () => MaintenanceWindow, 1, 1, 1, 128 | 0, 0, 1]
);
export var CreateCloudAutonomousVmClusterOutput = struct(n0, _CCAVCO, 0, [_dN, _s, _sR, _cAVCI], [0, 0, 0, 0]);
export var CreateCloudExadataInfrastructureInput = struct(
  n0,
  _CCEII,
  0,
  [_dN, _sh, _aZ, _aZI, _t, _cC, _cCTSTOCI, _mW, _sC, _cT, _dST, _sST],
  [0, 0, 0, 0, 128 | 0, 1, [() => CustomerContacts, 0], () => MaintenanceWindow, 1, [0, 4], 0, 0]
);
export var CreateCloudExadataInfrastructureOutput = struct(n0, _CCEIO, 0, [_dN, _s, _sR, _cEII], [0, 0, 0, 0]);
export var CreateCloudVmClusterInput = struct(
  n0,
  _CCVCI,
  0,
  [
    _cEII,
    _cCC,
    _dN,
    _gV,
    _h,
    _sPK,
    _oNI,
    _cN,
    _dCO,
    _dSSITB,
    _dNSSIGB,
    _dS,
    _t,
    _iLBE,
    _iSDE,
    _lM,
    _mSIGB,
    _sV,
    _tZ,
    _cT,
    _sLPTc,
  ],
  [0, 1, 0, 0, 0, 64 | 0, 0, 0, () => DataCollectionOptions, 1, 1, 64 | 0, 128 | 0, 2, 2, 0, 1, 0, 0, [0, 4], 1]
);
export var CreateCloudVmClusterOutput = struct(n0, _CCVCO, 0, [_dN, _s, _sR, _cVCI], [0, 0, 0, 0]);
export var CreateOdbNetworkInput = struct(
  n0,
  _CONI,
  0,
  [_dN, _aZ, _aZI, _cSC, _bSC, _cDN, _dDP, _cT, _sA, _zEA, _sPD, _t],
  [0, 0, 0, 0, 0, 0, 0, [0, 4], 0, 0, 0, 128 | 0]
);
export var CreateOdbNetworkOutput = struct(n0, _CONO, 0, [_dN, _s, _sR, _oNI], [0, 0, 0, 0]);
export var CreateOdbPeeringConnectionInput = struct(
  n0,
  _COPCI,
  0,
  [_oNI, _pNI, _dN, _cT, _t],
  [0, 0, 0, [0, 4], 128 | 0]
);
export var CreateOdbPeeringConnectionOutput = struct(n0, _COPCO, 0, [_dN, _s, _sR, _oPCI], [0, 0, 0, 0]);
export var DeleteCloudAutonomousVmClusterInput = struct(n0, _DCAVCI, 0, [_cAVCI], [[0, 1]]);
export var DeleteCloudAutonomousVmClusterOutput = struct(n0, _DCAVCO, 0, [], []);
export var DeleteCloudExadataInfrastructureInput = struct(n0, _DCEII, 0, [_cEII], [[0, 1]]);
export var DeleteCloudExadataInfrastructureOutput = struct(n0, _DCEIO, 0, [], []);
export var DeleteCloudVmClusterInput = struct(n0, _DCVCI, 0, [_cVCI], [[0, 1]]);
export var DeleteCloudVmClusterOutput = struct(n0, _DCVCO, 0, [], []);
export var UpdateCloudExadataInfrastructureInput = struct(
  n0,
  _UCEII,
  0,
  [_cEII, _mW],
  [[0, 1], () => MaintenanceWindow]
);
export var UpdateCloudExadataInfrastructureOutput = struct(n0, _UCEIO, 0, [_dN, _s, _sR, _cEII], [0, 0, 0, 0]);
export var UpdateOdbNetworkInput = struct(
  n0,
  _UONI,
  0,
  [_oNI, _dN, _pCTBA, _pCTBR, _sA, _zEA, _sPD],
  [[0, 1], 0, 64 | 0, 64 | 0, 0, 0, 0]
);
export var UpdateOdbNetworkOutput = struct(n0, _UONO, 0, [_dN, _s, _sR, _oNI], [0, 0, 0, 0]);
export var AcceptMarketplaceRegistration = op(
  n0,
  _AMR,
  2,
  () => AcceptMarketplaceRegistrationInput,
  () => AcceptMarketplaceRegistrationOutput
);
export var CreateCloudAutonomousVmCluster = op(
  n0,
  _CCAVC,
  2,
  () => CreateCloudAutonomousVmClusterInput,
  () => CreateCloudAutonomousVmClusterOutput
);
export var CreateCloudExadataInfrastructure = op(
  n0,
  _CCEI,
  2,
  () => CreateCloudExadataInfrastructureInput,
  () => CreateCloudExadataInfrastructureOutput
);
export var CreateCloudVmCluster = op(
  n0,
  _CCVC,
  2,
  () => CreateCloudVmClusterInput,
  () => CreateCloudVmClusterOutput
);
export var CreateOdbNetwork = op(
  n0,
  _CON,
  2,
  () => CreateOdbNetworkInput,
  () => CreateOdbNetworkOutput
);
export var CreateOdbPeeringConnection = op(
  n0,
  _COPC,
  2,
  () => CreateOdbPeeringConnectionInput,
  () => CreateOdbPeeringConnectionOutput
);
export var DeleteCloudAutonomousVmCluster = op(
  n0,
  _DCAVC,
  2,
  () => DeleteCloudAutonomousVmClusterInput,
  () => DeleteCloudAutonomousVmClusterOutput
);
export var DeleteCloudExadataInfrastructure = op(
  n0,
  _DCEI,
  2,
  () => DeleteCloudExadataInfrastructureInput,
  () => DeleteCloudExadataInfrastructureOutput
);
export var DeleteCloudVmCluster = op(
  n0,
  _DCVC,
  2,
  () => DeleteCloudVmClusterInput,
  () => DeleteCloudVmClusterOutput
);
export var UpdateCloudExadataInfrastructure = op(
  n0,
  _UCEI,
  0,
  () => UpdateCloudExadataInfrastructureInput,
  () => UpdateCloudExadataInfrastructureOutput
);
export var UpdateOdbNetwork = op(
  n0,
  _UON,
  0,
  () => UpdateOdbNetworkInput,
  () => UpdateOdbNetworkOutput
);
