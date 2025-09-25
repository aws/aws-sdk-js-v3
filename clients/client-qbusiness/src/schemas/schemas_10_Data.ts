// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _a,
  _aAF,
  _AC,
  _aC,
  _ACc,
  _aCc,
  _acc,
  _ACcc,
  _aCcc,
  _ACct,
  _ACL,
  _aD,
  _AEC,
  _aEC,
  _aES,
  _AF,
  _AFC,
  _AFt,
  _aIp,
  _attr,
  _aVO,
  _bl,
  _BPD,
  _BPDR,
  _BPDRa,
  _cA,
  _cAo,
  _cAon,
  _cond,
  _conf,
  _cont,
  _cTo,
  _D,
  _d,
  _dAA,
  _DACo,
  _dAF,
  _dAI,
  _DAoc,
  _DAocu,
  _DAT,
  _DAV,
  _DC,
  _dCO,
  _DEC,
  _dEC,
  _dN,
  _Do,
  _do,
  _dSA,
  _dSI,
  _dSSI,
  _DSVC,
  _dVa,
  _e,
  _eT,
  _fC,
  _fD,
  _GDA,
  _GDAR,
  _GDARe,
  _GDS,
  _GDSR,
  _GDSRe,
  _gr,
  _gT,
  _gTOE,
  _HC,
  _ht,
  _i,
  _iAA,
  _iC,
  _iCn,
  _IDEC,
  _IDECn,
  _IEC,
  _iEC,
  _iES,
  _iI,
  _k,
  _lA,
  _lT,
  _lTOE,
  _lV,
  _MEC,
  _mEC,
  _mR,
  _mTe,
  _n,
  _nF,
  _oAF,
  _op,
  _p,
  _pEHC,
  _pEHCo,
  _PG,
  _Pr,
  _pr,
  _Pri,
  _PU,
  _rA,
  _s,
  _s_,
  _sBN,
  _sGI,
  _sIub,
  _sLV,
  _sS,
  _sV,
  _t,
  _tar,
  _ti,
  _uA,
  _UDA,
  _UDAR,
  _UDARp,
  _UDS,
  _UDSR,
  _UDSRp,
  _use,
  _v,
  _vC,
  _VEC,
  _vEC,
  _vES,
  ErrorDetail,
  n0,
} from "./schemas_0";
import { S3 } from "./schemas_2_Data";
import { FailedDocuments } from "./schemas_8_Document";
import { DataAccessorAuthenticationDetail, DataAccessorName } from "./schemas_14_Data";

/* eslint no-var: 0 */

export var AccessConfiguration = struct(n0, _AC, 0, [_aC, _mR], [() => AccessControls, 0]);
export var AccessControl = struct(n0, _ACc, 0, [_p, _mR], [() => Principals, 0]);
export var ActionConfiguration = struct(n0, _ACct, 0, [_a, _fC], [0, () => ActionFilterConfiguration]);
export var ActionFilterConfiguration = struct(n0, _AFC, 0, [_dAF], [() => AttributeFilter]);
export var AttributeFilter = struct(
  n0,
  _AF,
  0,
  [_aAF, _oAF, _nF, _eT, _cAo, _cAon, _gT, _gTOE, _lT, _lTOE],
  [
    () => AttributeFilters,
    () => AttributeFilters,
    () => AttributeFilter,
    () => DocumentAttribute,
    () => DocumentAttribute,
    () => DocumentAttribute,
    () => DocumentAttribute,
    () => DocumentAttribute,
    () => DocumentAttribute,
    () => DocumentAttribute,
  ]
);
export var AudioExtractionConfiguration = struct(n0, _AEC, 0, [_aES], [0]);
export var BatchPutDocumentRequest = struct(
  n0,
  _BPDR,
  0,
  [_aIp, _iI, _do, _rA, _dSSI],
  [[0, 1], [0, 1], () => Documents, 0, 0]
);
export var BatchPutDocumentResponse = struct(n0, _BPDRa, 0, [_fD], [() => FailedDocuments]);
export var DataSourceVpcConfiguration = struct(n0, _DSVC, 0, [_sIub, _sGI], [64 | 0, 64 | 0]);
export var Document = struct(
  n0,
  _D,
  0,
  [_i, _attr, _cont, _cTo, _ti, _aCcc, _dEC, _mEC],
  [
    0,
    () => DocumentAttributes,
    () => DocumentContent,
    0,
    0,
    () => AccessConfiguration,
    () => DocumentEnrichmentConfiguration,
    () => MediaExtractionConfiguration,
  ]
);
export var DocumentAttribute = struct(n0, _DAoc, 0, [_n, _v], [0, () => DocumentAttributeValue]);
export var DocumentAttributeCondition = struct(n0, _DACo, 0, [_k, _op, _v], [0, 0, () => DocumentAttributeValue]);
export var DocumentAttributeTarget = struct(n0, _DAT, 0, [_k, _v, _aVO], [0, () => DocumentAttributeValue, 0]);
export var DocumentEnrichmentConfiguration = struct(
  n0,
  _DEC,
  0,
  [_iC, _pEHC, _pEHCo],
  [() => InlineDocumentEnrichmentConfigurations, () => HookConfiguration, () => HookConfiguration]
);
export var GetDataAccessorRequest = struct(
  n0,
  _GDAR,
  0,
  [_aIp, _dAI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetDataAccessorResponse = struct(
  n0,
  _GDARe,
  0,
  [_dN, _dAI, _dAA, _aIp, _iAA, _pr, _aCc, _aD, _cA, _uA],
  [
    [() => DataAccessorName, 0],
    0,
    0,
    0,
    0,
    0,
    () => ActionConfigurationList,
    () => DataAccessorAuthenticationDetail,
    4,
    4,
  ]
);
export var GetDataSourceRequest = struct(
  n0,
  _GDSR,
  0,
  [_aIp, _iI, _dSI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetDataSourceResponse = struct(
  n0,
  _GDSRe,
  0,
  [_aIp, _iI, _dSI, _dSA, _dN, _t, _conf, _vC, _cA, _uA, _d, _s, _sS, _rA, _e, _dEC, _mEC],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    15,
    () => DataSourceVpcConfiguration,
    4,
    4,
    0,
    0,
    0,
    0,
    () => ErrorDetail,
    () => DocumentEnrichmentConfiguration,
    () => MediaExtractionConfiguration,
  ]
);
export var HookConfiguration = struct(n0, _HC, 0, [_iCn, _lA, _sBN, _rA], [() => DocumentAttributeCondition, 0, 0, 0]);
export var ImageExtractionConfiguration = struct(n0, _IEC, 0, [_iES], [0]);
export var InlineDocumentEnrichmentConfiguration = struct(
  n0,
  _IDEC,
  0,
  [_cond, _tar, _dCO],
  [() => DocumentAttributeCondition, () => DocumentAttributeTarget, 0]
);
export var MediaExtractionConfiguration = struct(
  n0,
  _MEC,
  0,
  [_iEC, _aEC, _vEC],
  [() => ImageExtractionConfiguration, () => AudioExtractionConfiguration, () => VideoExtractionConfiguration]
);
export var PrincipalGroup = struct(n0, _PG, 0, [_n, _acc, _mTe], [0, 0, 0]);
export var PrincipalUser = struct(n0, _PU, 0, [_i, _acc, _mTe], [0, 0, 0]);
export var UpdateDataAccessorRequest = struct(
  n0,
  _UDAR,
  0,
  [_aIp, _dAI, _aCc, _aD, _dN],
  [[0, 1], [0, 1], () => ActionConfigurationList, () => DataAccessorAuthenticationDetail, [() => DataAccessorName, 0]]
);
export var UpdateDataAccessorResponse = struct(n0, _UDARp, 0, [], []);
export var UpdateDataSourceRequest = struct(
  n0,
  _UDSR,
  0,
  [_aIp, _iI, _dSI, _dN, _conf, _vC, _d, _sS, _rA, _dEC, _mEC],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    0,
    15,
    () => DataSourceVpcConfiguration,
    0,
    0,
    0,
    () => DocumentEnrichmentConfiguration,
    () => MediaExtractionConfiguration,
  ]
);
export var UpdateDataSourceResponse = struct(n0, _UDSRp, 0, [], []);
export var VideoExtractionConfiguration = struct(n0, _VEC, 0, [_vES], [0]);
export var AccessControls = list(n0, _ACcc, 0, () => AccessControl);
export var ActionConfigurationList = list(n0, _ACL, 0, () => ActionConfiguration);
export var AttributeFilters = list(n0, _AFt, 0, () => AttributeFilter);
export var DocumentAttributes = list(n0, _DAocu, 0, () => DocumentAttribute);
export var DocumentAttributeStringListValue = 64 | 0;

export var Documents = list(n0, _Do, 0, () => Document);
export var InlineDocumentEnrichmentConfigurations = list(n0, _IDECn, 0, () => InlineDocumentEnrichmentConfiguration);
export var Principals = list(n0, _Pr, 0, () => Principal);
export var SecurityGroupIds = 64 | 0;

export var SubnetIds = 64 | 0;

export var DocumentAttributeValue = uni(n0, _DAV, 0, [_sV, _sLV, _lV, _dVa], [0, 64 | 0, 1, 4]);
export var DocumentContent = uni(n0, _DC, 0, [_bl, _s_], [21, () => S3]);
export var Principal = uni(n0, _Pri, 0, [_use, _gr], [() => PrincipalUser, () => PrincipalGroup]);
export var BatchPutDocument = op(
  n0,
  _BPD,
  {
    [_ht]: ["POST", "/applications/{applicationId}/indices/{indexId}/documents", 200],
  },
  () => BatchPutDocumentRequest,
  () => BatchPutDocumentResponse
);
export var GetDataAccessor = op(
  n0,
  _GDA,
  {
    [_ht]: ["GET", "/applications/{applicationId}/dataaccessors/{dataAccessorId}", 200],
  },
  () => GetDataAccessorRequest,
  () => GetDataAccessorResponse
);
export var GetDataSource = op(
  n0,
  _GDS,
  {
    [_ht]: ["GET", "/applications/{applicationId}/indices/{indexId}/datasources/{dataSourceId}", 200],
  },
  () => GetDataSourceRequest,
  () => GetDataSourceResponse
);
export var UpdateDataAccessor = op(
  n0,
  _UDA,
  {
    [_ht]: ["PUT", "/applications/{applicationId}/dataaccessors/{dataAccessorId}", 200],
  },
  () => UpdateDataAccessorRequest,
  () => UpdateDataAccessorResponse
);
export var UpdateDataSource = op(
  n0,
  _UDS,
  {
    [_ht]: ["PUT", "/applications/{applicationId}/indices/{indexId}/datasources/{dataSourceId}", 200],
  },
  () => UpdateDataSourceRequest,
  () => UpdateDataSourceResponse
);
