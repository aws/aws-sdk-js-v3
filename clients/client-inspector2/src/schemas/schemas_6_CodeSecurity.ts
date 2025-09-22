// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ACR,
  _aCR,
  _ACRL,
  _as,
  _BACSSC,
  _BACSSCR,
  _BACSSCRa,
  _BDCSSC,
  _BDCSSCR,
  _BDCSSCRa,
  _cAr,
  _CCSSC,
  _CCSSCR,
  _CCSSCRr,
  _CISC,
  _cISC,
  _cISSE,
  _conf,
  _confi,
  _CSSC,
  _CSSCAS,
  _CSSCASo,
  _CSSCS,
  _CSSCSo,
  _DCR,
  _dCR,
  _DCRL,
  _DCSSC,
  _DCSSCR,
  _DCSSCRe,
  _fA,
  _FAR,
  _FARL,
  _fE,
  _fr,
  _GCSSC,
  _GCSSCR,
  _GCSSCRe,
  _hQ,
  _ht,
  _LCSSC,
  _LCSSCA,
  _LCSSCAR,
  _LCSSCARi,
  _LCSSCR,
  _LCSSCRi,
  _le,
  _lUA,
  _mR,
  _na,
  _nT,
  _oAI,
  _PSC,
  _pSC,
  _pSF,
  _pSS,
  _r,
  _rSC,
  _sA,
  _SAR,
  _SARL,
  _sCA,
  _sCta,
  _sE,
  _sMt,
  _SSc,
  _sSc,
  _ta,
  _UCSSC,
  _UCSSCR,
  _UCSSCRp,
  n0,
} from "./schemas_0";
import { CodeSecurityResource } from "./schemas_24_CodeSecurityScan";

/* eslint no-var: 0 */

export var AssociateConfigurationRequest = struct(n0, _ACR, 0, [_sCA, _r], [0, () => CodeSecurityResource]);
export var BatchAssociateCodeSecurityScanConfigurationRequest = struct(
  n0,
  _BACSSCR,
  0,
  [_aCR],
  [() => AssociateConfigurationRequestList]
);
export var BatchAssociateCodeSecurityScanConfigurationResponse = struct(
  n0,
  _BACSSCRa,
  0,
  [_fA, _sA],
  [() => FailedAssociationResultList, () => SuccessfulAssociationResultList]
);
export var BatchDisassociateCodeSecurityScanConfigurationRequest = struct(
  n0,
  _BDCSSCR,
  0,
  [_dCR],
  [() => DisassociateConfigurationRequestList]
);
export var BatchDisassociateCodeSecurityScanConfigurationResponse = struct(
  n0,
  _BDCSSCRa,
  0,
  [_fA, _sA],
  [() => FailedAssociationResultList, () => SuccessfulAssociationResultList]
);
export var CodeSecurityScanConfiguration = struct(
  n0,
  _CSSC,
  0,
  [_pSC, _cISC, _rSC],
  [() => PeriodicScanConfiguration, () => ContinuousIntegrationScanConfiguration, 64 | 0]
);
export var CodeSecurityScanConfigurationAssociationSummary = struct(n0, _CSSCAS, 0, [_r], [() => CodeSecurityResource]);
export var CodeSecurityScanConfigurationSummary = struct(
  n0,
  _CSSCS,
  0,
  [_sCA, _na, _oAI, _pSF, _fE, _cISSE, _rSC, _sSc, _ta],
  [0, 0, 0, 0, 0, 64 | 0, 64 | 0, () => ScopeSettings, 128 | 0]
);
export var ContinuousIntegrationScanConfiguration = struct(n0, _CISC, 0, [_sE], [64 | 0]);
export var CreateCodeSecurityScanConfigurationRequest = struct(
  n0,
  _CCSSCR,
  0,
  [_na, _le, _conf, _sSc, _ta],
  [0, 0, () => CodeSecurityScanConfiguration, () => ScopeSettings, 128 | 0]
);
export var CreateCodeSecurityScanConfigurationResponse = struct(n0, _CCSSCRr, 0, [_sCA], [0]);
export var DeleteCodeSecurityScanConfigurationRequest = struct(n0, _DCSSCR, 0, [_sCA], [0]);
export var DeleteCodeSecurityScanConfigurationResponse = struct(n0, _DCSSCRe, 0, [_sCA], [0]);
export var DisassociateConfigurationRequest = struct(n0, _DCR, 0, [_sCA, _r], [0, () => CodeSecurityResource]);
export var FailedAssociationResult = struct(
  n0,
  _FAR,
  0,
  [_sCA, _r, _sCta, _sMt],
  [0, () => CodeSecurityResource, 0, 0]
);
export var GetCodeSecurityScanConfigurationRequest = struct(n0, _GCSSCR, 0, [_sCA], [0]);
export var GetCodeSecurityScanConfigurationResponse = struct(
  n0,
  _GCSSCRe,
  0,
  [_sCA, _na, _conf, _le, _sSc, _cAr, _lUA, _ta],
  [0, 0, () => CodeSecurityScanConfiguration, 0, () => ScopeSettings, 4, 4, 128 | 0]
);
export var ListCodeSecurityScanConfigurationAssociationsRequest = struct(
  n0,
  _LCSSCAR,
  0,
  [_sCA, _nT, _mR],
  [
    0,
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
  ]
);
export var ListCodeSecurityScanConfigurationAssociationsResponse = struct(
  n0,
  _LCSSCARi,
  0,
  [_as, _nT],
  [() => CodeSecurityScanConfigurationAssociationSummaries, 0]
);
export var ListCodeSecurityScanConfigurationsRequest = struct(
  n0,
  _LCSSCR,
  0,
  [_nT, _mR],
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
  ]
);
export var ListCodeSecurityScanConfigurationsResponse = struct(
  n0,
  _LCSSCRi,
  0,
  [_confi, _nT],
  [() => CodeSecurityScanConfigurationSummaries, 0]
);
export var PeriodicScanConfiguration = struct(n0, _PSC, 0, [_fr, _fE], [0, 0]);
export var ScopeSettings = struct(n0, _SSc, 0, [_pSS], [0]);
export var SuccessfulAssociationResult = struct(n0, _SAR, 0, [_sCA, _r], [0, () => CodeSecurityResource]);
export var UpdateCodeSecurityScanConfigurationRequest = struct(
  n0,
  _UCSSCR,
  0,
  [_sCA, _conf],
  [0, () => CodeSecurityScanConfiguration]
);
export var UpdateCodeSecurityScanConfigurationResponse = struct(n0, _UCSSCRp, 0, [_sCA], [0]);
export var AssociateConfigurationRequestList = list(n0, _ACRL, 0, () => AssociateConfigurationRequest);
export var CodeSecurityScanConfigurationAssociationSummaries = list(
  n0,
  _CSSCASo,
  0,
  () => CodeSecurityScanConfigurationAssociationSummary
);
export var CodeSecurityScanConfigurationSummaries = list(n0, _CSSCSo, 0, () => CodeSecurityScanConfigurationSummary);
export var ContinuousIntegrationScanSupportedEvents = 64 | 0;

export var DisassociateConfigurationRequestList = list(n0, _DCRL, 0, () => DisassociateConfigurationRequest);
export var FailedAssociationResultList = list(n0, _FARL, 0, () => FailedAssociationResult);
export var SuccessfulAssociationResultList = list(n0, _SARL, 0, () => SuccessfulAssociationResult);
export var BatchAssociateCodeSecurityScanConfiguration = op(
  n0,
  _BACSSC,
  {
    [_ht]: ["POST", "/codesecurity/scan-configuration/batch/associate", 200],
  },
  () => BatchAssociateCodeSecurityScanConfigurationRequest,
  () => BatchAssociateCodeSecurityScanConfigurationResponse
);
export var BatchDisassociateCodeSecurityScanConfiguration = op(
  n0,
  _BDCSSC,
  {
    [_ht]: ["POST", "/codesecurity/scan-configuration/batch/disassociate", 200],
  },
  () => BatchDisassociateCodeSecurityScanConfigurationRequest,
  () => BatchDisassociateCodeSecurityScanConfigurationResponse
);
export var CreateCodeSecurityScanConfiguration = op(
  n0,
  _CCSSC,
  {
    [_ht]: ["POST", "/codesecurity/scan-configuration/create", 200],
  },
  () => CreateCodeSecurityScanConfigurationRequest,
  () => CreateCodeSecurityScanConfigurationResponse
);
export var DeleteCodeSecurityScanConfiguration = op(
  n0,
  _DCSSC,
  {
    [_ht]: ["POST", "/codesecurity/scan-configuration/delete", 200],
  },
  () => DeleteCodeSecurityScanConfigurationRequest,
  () => DeleteCodeSecurityScanConfigurationResponse
);
export var GetCodeSecurityScanConfiguration = op(
  n0,
  _GCSSC,
  {
    [_ht]: ["POST", "/codesecurity/scan-configuration/get", 200],
  },
  () => GetCodeSecurityScanConfigurationRequest,
  () => GetCodeSecurityScanConfigurationResponse
);
export var ListCodeSecurityScanConfigurationAssociations = op(
  n0,
  _LCSSCA,
  {
    [_ht]: ["POST", "/codesecurity/scan-configuration/associations/list", 200],
  },
  () => ListCodeSecurityScanConfigurationAssociationsRequest,
  () => ListCodeSecurityScanConfigurationAssociationsResponse
);
export var ListCodeSecurityScanConfigurations = op(
  n0,
  _LCSSC,
  {
    [_ht]: ["POST", "/codesecurity/scan-configuration/list", 200],
  },
  () => ListCodeSecurityScanConfigurationsRequest,
  () => ListCodeSecurityScanConfigurationsResponse
);
export var UpdateCodeSecurityScanConfiguration = op(
  n0,
  _UCSSC,
  {
    [_ht]: ["POST", "/codesecurity/scan-configuration/update", 200],
  },
  () => UpdateCodeSecurityScanConfigurationRequest,
  () => UpdateCodeSecurityScanConfigurationResponse
);
