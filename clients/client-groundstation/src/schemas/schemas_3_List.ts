// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CDo,
  _cE,
  _cI,
  _CLo,
  _cLo,
  _cS,
  _eI,
  _El,
  _eM,
  _EMD,
  _epo,
  _eT,
  _GS,
  _gS,
  _GSR,
  _gSr,
  _GSRe,
  _h,
  _hQ,
  _LCi,
  _LCRis,
  _LCRist,
  _LS,
  _LSR,
  _LSRi,
  _mE,
  _mPA,
  _mR,
  _n,
  _nSID,
  _nT,
  _pPET,
  _pPST,
  _r,
  _RC,
  _RCR,
  _sa,
  _sAa,
  _sI,
  _SL,
  _sL,
  _SLI,
  _so,
  _sT,
  _t,
  _un,
  _va,
  _vET,
  _vST,
  n0,
} from "./schemas_0";
import { ContactIdResponse } from "./schemas_12_Contact";

/* eslint no-var: 0 */

export var ContactData = struct(
  n0,
  _CDo,
  0,
  [_cI, _mPA, _sAa, _sT, _eT, _pPST, _pPET, _gS, _cS, _eM, _mE, _r, _t, _vST, _vET],
  [0, 0, 0, 4, 4, 4, 4, 0, 0, 0, () => Elevation, 0, 128 | 0, 4, 4]
);
export var Elevation = struct(n0, _El, 0, [_va, _un], [1, 0]);
export var EphemerisMetaData = struct(n0, _EMD, 0, [_so, _eI, _epo, _n], [0, 0, 4, 0]);
export var GetSatelliteRequest = struct(n0, _GSR, 0, [_sI], [[0, 1]]);
export var GetSatelliteResponse = struct(
  n0,
  _GSRe,
  0,
  [_sI, _sAa, _nSID, _gSr, _cE],
  [0, 0, 1, 64 | 0, () => EphemerisMetaData]
);
export var ListContactsRequest = struct(
  n0,
  _LCRis,
  0,
  [_mR, _nT, _sL, _sT, _eT, _gS, _sAa, _mPA],
  [1, 0, 64 | 0, 4, 4, 0, 0, 0]
);
export var ListContactsResponse = struct(n0, _LCRist, 0, [_nT, _cLo], [0, () => ContactList]);
export var ListSatellitesRequest = struct(
  n0,
  _LSR,
  0,
  [_mR, _nT],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListSatellitesResponse = struct(n0, _LSRi, 0, [_nT, _sa], [0, () => SatelliteList]);
export var ReserveContactRequest = struct(n0, _RCR, 0, [_mPA, _sAa, _sT, _eT, _gS, _t], [0, 0, 4, 4, 0, 128 | 0]);
export var SatelliteListItem = struct(
  n0,
  _SLI,
  0,
  [_sI, _sAa, _nSID, _gSr, _cE],
  [0, 0, 1, 64 | 0, () => EphemerisMetaData]
);
export var ContactList = list(n0, _CLo, 0, () => ContactData);
export var GroundStationIdList = 64 | 0;

export var SatelliteList = list(n0, _SL, 0, () => SatelliteListItem);
export var StatusList = 64 | 0;

export var GetSatellite = op(
  n0,
  _GS,
  {
    [_h]: ["GET", "/satellite/{satelliteId}", 200],
  },
  () => GetSatelliteRequest,
  () => GetSatelliteResponse
);
export var ListContacts = op(
  n0,
  _LCi,
  {
    [_h]: ["POST", "/contacts", 200],
  },
  () => ListContactsRequest,
  () => ListContactsResponse
);
export var ListSatellites = op(
  n0,
  _LS,
  {
    [_h]: ["GET", "/satellite", 200],
  },
  () => ListSatellitesRequest,
  () => ListSatellitesResponse
);
export var ReserveContact = op(
  n0,
  _RC,
  {
    [_h]: ["POST", "/contact", 200],
  },
  () => ReserveContactRequest,
  () => ContactIdResponse
);
