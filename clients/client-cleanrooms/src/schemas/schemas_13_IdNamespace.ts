// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _a,
  _aM,
  _aRT,
  _aRTn,
  _aTn,
  _aUADC,
  _BGS,
  _BGSE,
  _BGSEL,
  _BGSI,
  _BGSO,
  _cA,
  _cAI,
  _cI,
  _CIMT,
  _CIMTI,
  _CIMTO,
  _CINA,
  _cINA,
  _CINAI,
  _CINAO,
  _CINAr,
  _CINAS,
  _cINAS,
  _CINASL,
  _cIo,
  _CLo,
  _co,
  _Col,
  _colu,
  _con,
  _cT,
  _d,
  _er,
  _GCINA,
  _GCINAI,
  _GCINAO,
  _GIMT,
  _GIMTI,
  _GIMTO,
  _GINA,
  _GINAI,
  _GINAO,
  _GS,
  _GSI,
  _GSO,
  _h,
  _hQ,
  _i,
  _IMC,
  _iMC,
  _IMT,
  _iMT,
  _iMTI,
  _IMTIRP,
  _IMTIS,
  _iMTIS,
  _IMTISL,
  _IMTSTP,
  _iMWS,
  _INA,
  _iNA,
  _iNAI,
  _iNAId,
  _INAIRC,
  _INAIRP,
  _INAIRPS,
  _INAS,
  _iNAS,
  _INASL,
  _iNT,
  _iRA,
  _iRC,
  _iRP,
  _kKA,
  _LCINA,
  _LCINAI,
  _LCINAO,
  _LINA,
  _LINAI,
  _LINAO,
  _m,
  _mA,
  _mI,
  _mIe,
  _mR,
  _mRP,
  _n,
  _na,
  _nT,
  _pK,
  _re,
  _S,
  _s,
  _sAM,
  _sc,
  _SLc,
  _SSD,
  _sSD,
  _SSDL,
  _SSR,
  _SSRL,
  _st,
  _STP,
  _sTP,
  _t,
  _ta,
  _UIMT,
  _UIMTI,
  _UIMTO,
  _UINA,
  _UINAI,
  _UINAO,
  _uT,
  n0,
} from "./schemas_0";
import { IdMappingTableInputReferenceConfig } from "./schemas_11_Analysis";

/* eslint no-var: 0 */

export var BatchGetSchemaError = struct(n0, _BGSE, 0, [_n, _co, _m], [0, 0, 0]);
export var BatchGetSchemaInput = struct(n0, _BGSI, 0, [_cIo, _na], [[0, 1], 64 | 0]);
export var BatchGetSchemaOutput = struct(n0, _BGSO, 0, [_sc, _er], [() => SchemaList, () => BatchGetSchemaErrorList]);
export var CollaborationIdNamespaceAssociation = struct(
  n0,
  _CINA,
  0,
  [_i, _a, _cI, _cA, _n, _d, _cAI, _cT, _uT, _iRC, _iRP, _iMC],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    4,
    4,
    () => IdNamespaceAssociationInputReferenceConfig,
    () => IdNamespaceAssociationInputReferenceProperties,
    () => IdMappingConfig,
  ]
);
export var CollaborationIdNamespaceAssociationSummary = struct(
  n0,
  _CINAS,
  0,
  [_a, _cT, _i, _uT, _cA, _cI, _cAI, _iRC, _n, _d, _iRP],
  [
    0,
    4,
    0,
    4,
    0,
    0,
    0,
    () => IdNamespaceAssociationInputReferenceConfig,
    0,
    0,
    () => IdNamespaceAssociationInputReferencePropertiesSummary,
  ]
);
export var Column = struct(n0, _Col, 0, [_n, _t], [0, 0]);
export var CreateIdMappingTableInput = struct(
  n0,
  _CIMTI,
  0,
  [_mIe, _n, _d, _iRC, _ta, _kKA],
  [[0, 1], 0, 0, () => IdMappingTableInputReferenceConfig, 128 | 0, 0]
);
export var CreateIdMappingTableOutput = struct(n0, _CIMTO, 0, [_iMT], [() => IdMappingTable]);
export var CreateIdNamespaceAssociationInput = struct(
  n0,
  _CINAI,
  0,
  [_mIe, _iRC, _ta, _n, _d, _iMC],
  [[0, 1], () => IdNamespaceAssociationInputReferenceConfig, 128 | 0, 0, 0, () => IdMappingConfig]
);
export var CreateIdNamespaceAssociationOutput = struct(n0, _CINAO, 0, [_iNA], [() => IdNamespaceAssociation]);
export var GetCollaborationIdNamespaceAssociationInput = struct(
  n0,
  _GCINAI,
  0,
  [_cIo, _iNAI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetCollaborationIdNamespaceAssociationOutput = struct(
  n0,
  _GCINAO,
  0,
  [_cINA],
  [() => CollaborationIdNamespaceAssociation]
);
export var GetIdMappingTableInput = struct(
  n0,
  _GIMTI,
  0,
  [_iMTI, _mIe],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetIdMappingTableOutput = struct(n0, _GIMTO, 0, [_iMT], [() => IdMappingTable]);
export var GetIdNamespaceAssociationInput = struct(
  n0,
  _GINAI,
  0,
  [_iNAI, _mIe],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetIdNamespaceAssociationOutput = struct(n0, _GINAO, 0, [_iNA], [() => IdNamespaceAssociation]);
export var GetSchemaInput = struct(
  n0,
  _GSI,
  0,
  [_cIo, _n],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetSchemaOutput = struct(n0, _GSO, 0, [_s], [() => Schema]);
export var IdMappingConfig = struct(n0, _IMC, 0, [_aUADC], [2]);
export var IdMappingTable = struct(
  n0,
  _IMT,
  0,
  [_i, _a, _iRC, _mI, _mA, _cI, _cA, _d, _n, _cT, _uT, _iRP, _kKA],
  [
    0,
    0,
    () => IdMappingTableInputReferenceConfig,
    0,
    0,
    0,
    0,
    0,
    0,
    4,
    4,
    () => IdMappingTableInputReferenceProperties,
    0,
  ]
);
export var IdMappingTableInputReferenceProperties = struct(
  n0,
  _IMTIRP,
  0,
  [_iMTIS],
  [() => IdMappingTableInputSourceList]
);
export var IdMappingTableInputSource = struct(n0, _IMTIS, 0, [_iNAId, _t], [0, 0]);
export var IdMappingTableSchemaTypeProperties = struct(n0, _IMTSTP, 0, [_iMTIS], [() => IdMappingTableInputSourceList]);
export var IdNamespaceAssociation = struct(
  n0,
  _INA,
  0,
  [_i, _a, _mI, _mA, _cI, _cA, _n, _d, _cT, _uT, _iRC, _iRP, _iMC],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    4,
    4,
    () => IdNamespaceAssociationInputReferenceConfig,
    () => IdNamespaceAssociationInputReferenceProperties,
    () => IdMappingConfig,
  ]
);
export var IdNamespaceAssociationInputReferenceConfig = struct(n0, _INAIRC, 0, [_iRA, _mRP], [0, 2]);
export var IdNamespaceAssociationInputReferenceProperties = struct(n0, _INAIRP, 0, [_iNT, _iMWS], [0, 64 | 15]);
export var IdNamespaceAssociationInputReferencePropertiesSummary = struct(n0, _INAIRPS, 0, [_iNT], [0]);
export var IdNamespaceAssociationSummary = struct(
  n0,
  _INAS,
  0,
  [_mI, _mA, _cA, _cI, _cT, _uT, _i, _a, _iRC, _n, _d, _iRP],
  [
    0,
    0,
    0,
    0,
    4,
    4,
    0,
    0,
    () => IdNamespaceAssociationInputReferenceConfig,
    0,
    0,
    () => IdNamespaceAssociationInputReferencePropertiesSummary,
  ]
);
export var ListCollaborationIdNamespaceAssociationsInput = struct(
  n0,
  _LCINAI,
  0,
  [_cIo, _nT, _mR],
  [
    [0, 1],
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
export var ListCollaborationIdNamespaceAssociationsOutput = struct(
  n0,
  _LCINAO,
  0,
  [_nT, _cINAS],
  [0, () => CollaborationIdNamespaceAssociationSummaryList]
);
export var ListIdNamespaceAssociationsInput = struct(
  n0,
  _LINAI,
  0,
  [_mIe, _nT, _mR],
  [
    [0, 1],
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
export var ListIdNamespaceAssociationsOutput = struct(
  n0,
  _LINAO,
  0,
  [_nT, _iNAS],
  [0, () => IdNamespaceAssociationSummaryList]
);
export var Schema = struct(
  n0,
  _S,
  0,
  [_colu, _pK, _aRT, _aM, _sAM, _cAI, _n, _cI, _cA, _d, _cT, _uT, _t, _sSD, _sTP],
  [
    () => ColumnList,
    () => ColumnList,
    64 | 0,
    0,
    64 | 0,
    0,
    0,
    0,
    0,
    0,
    4,
    4,
    0,
    () => SchemaStatusDetailList,
    () => SchemaTypeProperties,
  ]
);
export var SchemaStatusDetail = struct(
  n0,
  _SSD,
  0,
  [_st, _re, _aRTn, _con, _aTn],
  [0, () => SchemaStatusReasonList, 0, 64 | 0, 0]
);
export var SchemaStatusReason = struct(n0, _SSR, 0, [_co, _m], [0, 0]);
export var UpdateIdMappingTableInput = struct(n0, _UIMTI, 0, [_iMTI, _mIe, _d, _kKA], [[0, 1], [0, 1], 0, 0]);
export var UpdateIdMappingTableOutput = struct(n0, _UIMTO, 0, [_iMT], [() => IdMappingTable]);
export var UpdateIdNamespaceAssociationInput = struct(
  n0,
  _UINAI,
  0,
  [_iNAI, _mIe, _n, _d, _iMC],
  [[0, 1], [0, 1], 0, 0, () => IdMappingConfig]
);
export var UpdateIdNamespaceAssociationOutput = struct(n0, _UINAO, 0, [_iNA], [() => IdNamespaceAssociation]);
export var BatchGetSchemaErrorList = list(n0, _BGSEL, 0, () => BatchGetSchemaError);
export var CollaborationIdNamespaceAssociationSummaryList = list(
  n0,
  _CINASL,
  0,
  () => CollaborationIdNamespaceAssociationSummary
);
export var ColumnList = list(n0, _CLo, 0, () => Column);
export var IdMappingTableInputSourceList = list(n0, _IMTISL, 0, () => IdMappingTableInputSource);
export var IdMappingWorkflowsSupported = 64 | 15;

export var IdNamespaceAssociationSummaryList = list(n0, _INASL, 0, () => IdNamespaceAssociationSummary);
export var SchemaConfigurationList = 64 | 0;

export var SchemaList = list(n0, _SLc, 0, () => Schema);
export var SchemaStatusDetailList = list(n0, _SSDL, 0, () => SchemaStatusDetail);
export var SchemaStatusReasonList = list(n0, _SSRL, 0, () => SchemaStatusReason);
export var TableAliasList = 64 | 0;

export var SchemaTypeProperties = uni(n0, _STP, 0, [_iMT], [() => IdMappingTableSchemaTypeProperties]);
export var BatchGetSchema = op(
  n0,
  _BGS,
  {
    [_h]: ["POST", "/collaborations/{collaborationIdentifier}/batch-schema", 200],
  },
  () => BatchGetSchemaInput,
  () => BatchGetSchemaOutput
);
export var CreateIdMappingTable = op(
  n0,
  _CIMT,
  {
    [_h]: ["POST", "/memberships/{membershipIdentifier}/idmappingtables", 200],
  },
  () => CreateIdMappingTableInput,
  () => CreateIdMappingTableOutput
);
export var CreateIdNamespaceAssociation = op(
  n0,
  _CINAr,
  {
    [_h]: ["POST", "/memberships/{membershipIdentifier}/idnamespaceassociations", 200],
  },
  () => CreateIdNamespaceAssociationInput,
  () => CreateIdNamespaceAssociationOutput
);
export var GetCollaborationIdNamespaceAssociation = op(
  n0,
  _GCINA,
  {
    [_h]: [
      "GET",
      "/collaborations/{collaborationIdentifier}/idnamespaceassociations/{idNamespaceAssociationIdentifier}",
      200,
    ],
  },
  () => GetCollaborationIdNamespaceAssociationInput,
  () => GetCollaborationIdNamespaceAssociationOutput
);
export var GetIdMappingTable = op(
  n0,
  _GIMT,
  {
    [_h]: ["GET", "/memberships/{membershipIdentifier}/idmappingtables/{idMappingTableIdentifier}", 200],
  },
  () => GetIdMappingTableInput,
  () => GetIdMappingTableOutput
);
export var GetIdNamespaceAssociation = op(
  n0,
  _GINA,
  {
    [_h]: [
      "GET",
      "/memberships/{membershipIdentifier}/idnamespaceassociations/{idNamespaceAssociationIdentifier}",
      200,
    ],
  },
  () => GetIdNamespaceAssociationInput,
  () => GetIdNamespaceAssociationOutput
);
export var GetSchema = op(
  n0,
  _GS,
  {
    [_h]: ["GET", "/collaborations/{collaborationIdentifier}/schemas/{name}", 200],
  },
  () => GetSchemaInput,
  () => GetSchemaOutput
);
export var ListCollaborationIdNamespaceAssociations = op(
  n0,
  _LCINA,
  {
    [_h]: ["GET", "/collaborations/{collaborationIdentifier}/idnamespaceassociations", 200],
  },
  () => ListCollaborationIdNamespaceAssociationsInput,
  () => ListCollaborationIdNamespaceAssociationsOutput
);
export var ListIdNamespaceAssociations = op(
  n0,
  _LINA,
  {
    [_h]: ["GET", "/memberships/{membershipIdentifier}/idnamespaceassociations", 200],
  },
  () => ListIdNamespaceAssociationsInput,
  () => ListIdNamespaceAssociationsOutput
);
export var UpdateIdMappingTable = op(
  n0,
  _UIMT,
  {
    [_h]: ["PATCH", "/memberships/{membershipIdentifier}/idmappingtables/{idMappingTableIdentifier}", 200],
  },
  () => UpdateIdMappingTableInput,
  () => UpdateIdMappingTableOutput
);
export var UpdateIdNamespaceAssociation = op(
  n0,
  _UINA,
  {
    [_h]: [
      "PATCH",
      "/memberships/{membershipIdentifier}/idnamespaceassociations/{idNamespaceAssociationIdentifier}",
      200,
    ],
  },
  () => UpdateIdNamespaceAssociationInput,
  () => UpdateIdNamespaceAssociationOutput
);
