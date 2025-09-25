// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  InvalidInstanceInformationFilterValue as __InvalidInstanceInformationFilterValue,
  InvalidInstancePropertyFilterValue as __InvalidInstancePropertyFilterValue,
} from "../models/index";
import {
  _AIc,
  _AO,
  _aQE,
  _Ar,
  _AS,
  _AVg,
  _c,
  _CNo,
  _DIIe,
  _DIIR,
  _DIIRe,
  _DIPe,
  _DIPRes,
  _DIPResc,
  _DS,
  _e,
  _Fi,
  _FWO,
  _IAAO,
  _IASAC,
  _II,
  _IIF,
  _IIFL,
  _IIFV,
  _IIFVS,
  _IIIFV,
  _IIL,
  _IInst,
  _IIPFV,
  _IISF,
  _IISFL,
  _ILV,
  _IPA,
  _IPF,
  _IPFL,
  _IPFV,
  _IPFVS,
  _IPn,
  _IPns,
  _IPSFLn,
  _IPSFn,
  _IR,
  _IRn,
  _ISn,
  _IT,
  _K,
  _k,
  _KN,
  _LAED,
  _LPDT,
  _LSAED,
  _LT,
  _m,
  _MR,
  _N,
  _NT,
  _Ope,
  _PNl,
  _PSi,
  _PTla,
  _PV,
  _RD,
  _RT,
  _SIo,
  _STo,
  _Va,
  _vS,
  _xN,
  n0,
} from "./schemas_0";
import { IPAddress } from "./schemas_57_Document";

/* eslint no-var: 0 */

export var DescribeInstanceInformationRequest = struct(
  n0,
  _DIIR,
  0,
  [_IIFL, _Fi, _MR, _NT],
  [[() => InstanceInformationFilterList, 0], [() => InstanceInformationStringFilterList, 0], 1, 0]
);
export var DescribeInstanceInformationResult = struct(
  n0,
  _DIIRe,
  0,
  [_IIL, _NT],
  [[() => InstanceInformationList, 0], 0]
);
export var DescribeInstancePropertiesRequest = struct(
  n0,
  _DIPRes,
  0,
  [_IPFL, _FWO, _MR, _NT],
  [[() => InstancePropertyFilterList, 0], [() => InstancePropertyStringFilterList, 0], 1, 0]
);
export var DescribeInstancePropertiesResult = struct(n0, _DIPResc, 0, [_IPn, _NT], [[() => InstanceProperties, 0], 0]);
export var InstanceAggregatedAssociationOverview = struct(n0, _IAAO, 0, [_DS, _IASAC], [0, 128 | 1]);
export var InstanceInformation = struct(
  n0,
  _IInst,
  0,
  [
    _II,
    _PSi,
    _LPDT,
    _AVg,
    _ILV,
    _PTla,
    _PNl,
    _PV,
    _AIc,
    _IR,
    _RD,
    _RT,
    _N,
    _IPA,
    _CNo,
    _AS,
    _LAED,
    _LSAED,
    _AO,
    _SIo,
    _STo,
  ],
  [
    0,
    0,
    4,
    0,
    2,
    0,
    0,
    0,
    0,
    0,
    4,
    0,
    0,
    [() => IPAddress, 0],
    0,
    0,
    4,
    4,
    () => InstanceAggregatedAssociationOverview,
    0,
    0,
  ]
);
export var InstanceInformationFilter = struct(
  n0,
  _IIF,
  0,
  [_k, _vS],
  [0, [() => InstanceInformationFilterValueSet, 0]]
);
export var InstanceInformationStringFilter = struct(
  n0,
  _IISF,
  0,
  [_K, _Va],
  [0, [() => InstanceInformationFilterValueSet, 0]]
);
export var InstanceProperty = struct(
  n0,
  _IPns,
  0,
  [
    _N,
    _II,
    _IT,
    _IRn,
    _KN,
    _ISn,
    _Ar,
    _IPA,
    _LT,
    _PSi,
    _LPDT,
    _AVg,
    _PTla,
    _PNl,
    _PV,
    _AIc,
    _IR,
    _RD,
    _RT,
    _CNo,
    _AS,
    _LAED,
    _LSAED,
    _AO,
    _SIo,
    _STo,
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    [() => IPAddress, 0],
    4,
    0,
    4,
    0,
    0,
    0,
    0,
    0,
    0,
    4,
    0,
    0,
    0,
    4,
    4,
    () => InstanceAggregatedAssociationOverview,
    0,
    0,
  ]
);
export var InstancePropertyFilter = struct(n0, _IPF, 0, [_k, _vS], [0, [() => InstancePropertyFilterValueSet, 0]]);
export var InstancePropertyStringFilter = struct(
  n0,
  _IPSFn,
  0,
  [_K, _Va, _Ope],
  [0, [() => InstancePropertyFilterValueSet, 0], 0]
);
export var InvalidInstanceInformationFilterValue = error(
  n0,
  _IIIFV,
  {
    [_e]: _c,
    [_aQE]: [`InvalidInstanceInformationFilterValue`, 400],
  },
  [_m],
  [0],

  __InvalidInstanceInformationFilterValue
);
export var InvalidInstancePropertyFilterValue = error(
  n0,
  _IIPFV,
  {
    [_e]: _c,
    [_aQE]: [`InvalidInstancePropertyFilterValue`, 400],
  },
  [_m],
  [0],

  __InvalidInstancePropertyFilterValue
);
export var InstanceInformationFilterList = list(n0, _IIFL, 0, [
  () => InstanceInformationFilter,
  {
    [_xN]: _IIF,
  },
]);
export var InstanceInformationFilterValueSet = list(n0, _IIFVS, 0, [
  0,
  {
    [_xN]: _IIFV,
  },
]);
export var InstanceInformationList = list(n0, _IIL, 0, [
  () => InstanceInformation,
  {
    [_xN]: _IInst,
  },
]);
export var InstanceInformationStringFilterList = list(n0, _IISFL, 0, [
  () => InstanceInformationStringFilter,
  {
    [_xN]: _IISF,
  },
]);
export var InstanceProperties = list(n0, _IPn, 0, [
  () => InstanceProperty,
  {
    [_xN]: _IPns,
  },
]);
export var InstancePropertyFilterList = list(n0, _IPFL, 0, [
  () => InstancePropertyFilter,
  {
    [_xN]: _IPF,
  },
]);
export var InstancePropertyFilterValueSet = list(n0, _IPFVS, 0, [
  0,
  {
    [_xN]: _IPFV,
  },
]);
export var InstancePropertyStringFilterList = list(n0, _IPSFLn, 0, [
  () => InstancePropertyStringFilter,
  {
    [_xN]: _IPSFn,
  },
]);
export var InstanceAssociationStatusAggregatedCount = 128 | 1;

export var DescribeInstanceInformation = op(
  n0,
  _DIIe,
  0,
  () => DescribeInstanceInformationRequest,
  () => DescribeInstanceInformationResult
);
export var DescribeInstanceProperties = op(
  n0,
  _DIPe,
  0,
  () => DescribeInstancePropertiesRequest,
  () => DescribeInstancePropertiesResult
);
