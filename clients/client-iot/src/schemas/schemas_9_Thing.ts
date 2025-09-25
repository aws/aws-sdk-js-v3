// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aNt,
  _aPt,
  _at,
  _aVt,
  _bGN,
  _cAon,
  _cD,
  _CT,
  _CTR,
  _CTRr,
  _CTT,
  _CTTR,
  _CTTRr,
  _dCI,
  _dDe,
  _dep,
  _DTe,
  _DTRes,
  _DTResc,
  _DTT,
  _DTTe,
  _DTTes,
  _DTTR,
  _DTTRe,
  _DTTRep,
  _DTTRepr,
  _DTTRes,
  _DTTResc,
  _eV,
  _h,
  _hQ,
  _LTi,
  _LTR,
  _LTRi,
  _LTT,
  _LTTR,
  _LTTRi,
  _MC,
  _mCq,
  _mR,
  _nT,
  _PA,
  _PAL,
  _pAr,
  _rTT,
  _sAe,
  _tA,
  _tag,
  _TAh,
  _tAh,
  _TAL,
  _th,
  _tIh,
  _tN,
  _tTA,
  _TTD,
  _tTD,
  _tTh,
  _tTI,
  _TTL,
  _TTM,
  _tTM,
  _tTN,
  _TTP,
  _tTP,
  _uD,
  _uPAV,
  _uPK,
  _UT,
  _UTR,
  _UTRp,
  _UTT,
  _UTTR,
  _UTTRp,
  _ve,
  n0,
  TagList,
} from "./schemas_0";
import { AttributePayload } from "./schemas_44_Thing";

/* eslint no-var: 0 */

export var CreateThingRequest = struct(n0, _CTR, 0, [_tN, _tTN, _aPt, _bGN], [[0, 1], 0, () => AttributePayload, 0]);
export var CreateThingResponse = struct(n0, _CTRr, 0, [_tN, _tA, _tIh], [0, 0, 0]);
export var CreateThingTypeRequest = struct(
  n0,
  _CTTR,
  0,
  [_tTN, _tTP, _tag],
  [[0, 1], () => ThingTypeProperties, () => TagList]
);
export var CreateThingTypeResponse = struct(n0, _CTTRr, 0, [_tTN, _tTA, _tTI], [0, 0, 0]);
export var DeleteThingTypeRequest = struct(n0, _DTTR, 0, [_tTN], [[0, 1]]);
export var DeleteThingTypeResponse = struct(n0, _DTTRe, 0, [], []);
export var DeprecateThingTypeRequest = struct(n0, _DTTRep, 0, [_tTN, _uD], [[0, 1], 2]);
export var DeprecateThingTypeResponse = struct(n0, _DTTRepr, 0, [], []);
export var DescribeThingRequest = struct(n0, _DTRes, 0, [_tN], [[0, 1]]);
export var DescribeThingResponse = struct(
  n0,
  _DTResc,
  0,
  [_dCI, _tN, _tIh, _tA, _tTN, _at, _ve, _bGN],
  [0, 0, 0, 0, 0, 128 | 0, 1, 0]
);
export var DescribeThingTypeRequest = struct(n0, _DTTRes, 0, [_tTN], [[0, 1]]);
export var DescribeThingTypeResponse = struct(
  n0,
  _DTTResc,
  0,
  [_tTN, _tTI, _tTA, _tTP, _tTM],
  [0, 0, 0, () => ThingTypeProperties, () => ThingTypeMetadata]
);
export var ListThingsRequest = struct(
  n0,
  _LTR,
  0,
  [_nT, _mR, _aNt, _aVt, _tTN, _uPAV],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _aNt,
      },
    ],
    [
      0,
      {
        [_hQ]: _aVt,
      },
    ],
    [
      0,
      {
        [_hQ]: _tTN,
      },
    ],
    [
      2,
      {
        [_hQ]: _uPAV,
      },
    ],
  ]
);
export var ListThingsResponse = struct(n0, _LTRi, 0, [_th, _nT], [() => ThingAttributeList, 0]);
export var ListThingTypesRequest = struct(
  n0,
  _LTTR,
  0,
  [_nT, _mR, _tTN],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _tTN,
      },
    ],
  ]
);
export var ListThingTypesResponse = struct(n0, _LTTRi, 0, [_tTh, _nT], [() => ThingTypeList, 0]);
export var Mqtt5Configuration = struct(n0, _MC, 0, [_pAr], [() => PropagatingAttributeList]);
export var PropagatingAttribute = struct(n0, _PA, 0, [_uPK, _tAh, _cAon], [0, 0, 0]);
export var ThingAttribute = struct(n0, _TAh, 0, [_tN, _tTN, _tA, _at, _ve], [0, 0, 0, 128 | 0, 1]);
export var ThingTypeDefinition = struct(
  n0,
  _TTD,
  0,
  [_tTN, _tTA, _tTP, _tTM],
  [0, 0, () => ThingTypeProperties, () => ThingTypeMetadata]
);
export var ThingTypeMetadata = struct(n0, _TTM, 0, [_dep, _dDe, _cD], [2, 4, 4]);
export var ThingTypeProperties = struct(n0, _TTP, 0, [_tTD, _sAe, _mCq], [0, 64 | 0, () => Mqtt5Configuration]);
export var UpdateThingRequest = struct(
  n0,
  _UTR,
  0,
  [_tN, _tTN, _aPt, _eV, _rTT],
  [[0, 1], 0, () => AttributePayload, 1, 2]
);
export var UpdateThingResponse = struct(n0, _UTRp, 0, [], []);
export var UpdateThingTypeRequest = struct(n0, _UTTR, 0, [_tTN, _tTP], [[0, 1], () => ThingTypeProperties]);
export var UpdateThingTypeResponse = struct(n0, _UTTRp, 0, [], []);
export var PropagatingAttributeList = list(n0, _PAL, 0, () => PropagatingAttribute);
export var SearchableAttributes = 64 | 0;

export var ThingAttributeList = list(n0, _TAL, 0, () => ThingAttribute);
export var ThingTypeList = list(n0, _TTL, 0, () => ThingTypeDefinition);
export var CreateThing = op(
  n0,
  _CT,
  {
    [_h]: ["POST", "/things/{thingName}", 200],
  },
  () => CreateThingRequest,
  () => CreateThingResponse
);
export var CreateThingType = op(
  n0,
  _CTT,
  {
    [_h]: ["POST", "/thing-types/{thingTypeName}", 200],
  },
  () => CreateThingTypeRequest,
  () => CreateThingTypeResponse
);
export var DeleteThingType = op(
  n0,
  _DTT,
  {
    [_h]: ["DELETE", "/thing-types/{thingTypeName}", 200],
  },
  () => DeleteThingTypeRequest,
  () => DeleteThingTypeResponse
);
export var DeprecateThingType = op(
  n0,
  _DTTe,
  {
    [_h]: ["POST", "/thing-types/{thingTypeName}/deprecate", 200],
  },
  () => DeprecateThingTypeRequest,
  () => DeprecateThingTypeResponse
);
export var DescribeThing = op(
  n0,
  _DTe,
  {
    [_h]: ["GET", "/things/{thingName}", 200],
  },
  () => DescribeThingRequest,
  () => DescribeThingResponse
);
export var DescribeThingType = op(
  n0,
  _DTTes,
  {
    [_h]: ["GET", "/thing-types/{thingTypeName}", 200],
  },
  () => DescribeThingTypeRequest,
  () => DescribeThingTypeResponse
);
export var ListThings = op(
  n0,
  _LTi,
  {
    [_h]: ["GET", "/things", 200],
  },
  () => ListThingsRequest,
  () => ListThingsResponse
);
export var ListThingTypes = op(
  n0,
  _LTT,
  {
    [_h]: ["GET", "/thing-types", 200],
  },
  () => ListThingTypesRequest,
  () => ListThingTypesResponse
);
export var UpdateThing = op(
  n0,
  _UT,
  {
    [_h]: ["PATCH", "/things/{thingName}", 200],
  },
  () => UpdateThingRequest,
  () => UpdateThingResponse
);
export var UpdateThingType = op(
  n0,
  _UTT,
  {
    [_h]: ["PATCH", "/thing-types/{thingTypeName}", 200],
  },
  () => UpdateThingTypeRequest,
  () => UpdateThingTypeResponse
);
