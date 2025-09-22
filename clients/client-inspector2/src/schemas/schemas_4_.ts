// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _act,
  _AD,
  _aD,
  _bS,
  _CD,
  _cDi,
  _Cv,
  _Cvs,
  _cvs,
  _Cvss,
  _cvss,
  _cvss_,
  _cw,
  _dA,
  _dD,
  _de,
  _dP,
  _E,
  _EO,
  _eO,
  _ep,
  _fCi,
  _fS,
  _ht,
  _id,
  _lS,
  _nT,
  _rU,
  _rV,
  _sco,
  _so,
  _sU,
  _SV,
  _sV,
  _SVFC,
  _SVR,
  _SVRe,
  _t,
  _tt,
  _V,
  _vCA,
  _vIul,
  _vSe,
  _Vu,
  _vu,
  _vUA,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AtigData = struct(n0, _AD, 0, [_fS, _lS, _t, _tt], [4, 4, 64 | 0, 64 | 0]);
export var CisaData = struct(n0, _CD, 0, [_dA, _dD, _act], [4, 4, 0]);
export var Cvss2 = struct(n0, _Cv, 0, [_bS, _sV], [1, 0]);
export var Cvss3 = struct(n0, _Cvs, 0, [_bS, _sV], [1, 0]);
export var Cvss4 = struct(n0, _Cvss, 0, [_bS, _sV], [1, 0]);
export var Epss = struct(n0, _E, 0, [_sco], [1]);
export var ExploitObserved = struct(n0, _EO, 0, [_lS, _fS], [4, 4]);
export var SearchVulnerabilitiesFilterCriteria = struct(n0, _SVFC, 0, [_vIul], [64 | 0]);
export var SearchVulnerabilitiesRequest = struct(
  n0,
  _SVR,
  0,
  [_fCi, _nT],
  [() => SearchVulnerabilitiesFilterCriteria, 0]
);
export var SearchVulnerabilitiesResponse = struct(n0, _SVRe, 0, [_vu, _nT], [() => Vulnerabilities, 0]);
export var Vulnerability = struct(
  n0,
  _V,
  0,
  [_id, _cw, _cDi, _so, _de, _aD, _vSe, _cvs, _cvss, _rV, _cvss_, _vCA, _vUA, _sU, _rU, _eO, _dP, _ep],
  [
    0,
    64 | 0,
    () => CisaData,
    0,
    0,
    () => AtigData,
    0,
    () => Cvss4,
    () => Cvss3,
    64 | 0,
    () => Cvss2,
    4,
    4,
    0,
    64 | 0,
    () => ExploitObserved,
    64 | 0,
    () => Epss,
  ]
);
export var Cwes = 64 | 0;

export var DetectionPlatforms = 64 | 0;

export var RelatedVulnerabilities = 64 | 0;

export var Targets = 64 | 0;

export var Ttps = 64 | 0;

export var Vulnerabilities = list(n0, _Vu, 0, () => Vulnerability);
export var VulnerabilityReferenceUrls = 64 | 0;

export var VulnIdList = 64 | 0;

export var SearchVulnerabilities = op(
  n0,
  _SV,
  {
    [_ht]: ["POST", "/vulnerabilities/search", 200],
  },
  () => SearchVulnerabilitiesRequest,
  () => SearchVulnerabilitiesResponse
);
