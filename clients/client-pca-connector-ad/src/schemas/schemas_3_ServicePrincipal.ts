// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _CA,
  _CAA,
  _CAo,
  _CC,
  _CCR,
  _CCRr,
  _CEPSE,
  _CL,
  _Co,
  _Con,
  _CS,
  _CSPN,
  _CSPNR,
  _CT,
  _CTR,
  _CTr,
  _CTRr,
  _D,
  _DC,
  _DCR,
  _DI,
  _DRA,
  _DSPN,
  _DSPNR,
  _GC,
  _GCR,
  _GCRe,
  _GSPN,
  _GSPNR,
  _GSPNRe,
  _GT,
  _GTR,
  _GTRe,
  _h,
  _hQ,
  _IAT,
  _LC,
  _LCR,
  _LCRi,
  _LSPN,
  _LSPNR,
  _LSPNRi,
  _LT,
  _LTR,
  _LTRi,
  _MR,
  _MRa,
  _MRi,
  _N,
  _NT,
  _OI,
  _PS,
  _R,
  _S,
  _SGI,
  _SPN,
  _SPNe,
  _SPNL,
  _SPNS,
  _SR,
  _T,
  _TA,
  _Te,
  _Tem,
  _TL,
  _TR,
  _TS,
  _UA,
  _VI,
  n0,
  Unit,
} from "./schemas_0";
import { TemplateDefinition } from "./schemas_1_Template";

/* eslint no-var: 0 */

export var Connector = struct(
  n0,
  _Co,
  0,
  [_A, _CAA, _CEPSE, _DI, _VI, _S, _SR, _CA, _UA],
  [0, 0, 0, 0, () => VpcInformation, 0, 0, 4, 4]
);
export var ConnectorSummary = struct(
  n0,
  _CS,
  0,
  [_A, _CAA, _CEPSE, _DI, _VI, _S, _SR, _CA, _UA],
  [0, 0, 0, 0, () => VpcInformation, 0, 0, 4, 4]
);
export var CreateConnectorRequest = struct(
  n0,
  _CCR,
  0,
  [_DI, _CAA, _VI, _CT, _T],
  [0, 0, () => VpcInformation, [0, 4], 128 | 0]
);
export var CreateConnectorResponse = struct(n0, _CCRr, 0, [_CAo], [0]);
export var CreateServicePrincipalNameRequest = struct(
  n0,
  _CSPNR,
  0,
  [_DRA, _CAo, _CT],
  [
    [0, 1],
    [0, 1],
    [0, 4],
  ]
);
export var CreateTemplateRequest = struct(
  n0,
  _CTR,
  0,
  [_CAo, _N, _D, _CT, _T],
  [0, 0, () => TemplateDefinition, [0, 4], 128 | 0]
);
export var CreateTemplateResponse = struct(n0, _CTRr, 0, [_TA], [0]);
export var DeleteConnectorRequest = struct(n0, _DCR, 0, [_CAo], [[0, 1]]);
export var DeleteServicePrincipalNameRequest = struct(
  n0,
  _DSPNR,
  0,
  [_DRA, _CAo],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetConnectorRequest = struct(n0, _GCR, 0, [_CAo], [[0, 1]]);
export var GetConnectorResponse = struct(n0, _GCRe, 0, [_Co], [() => Connector]);
export var GetServicePrincipalNameRequest = struct(
  n0,
  _GSPNR,
  0,
  [_DRA, _CAo],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetServicePrincipalNameResponse = struct(n0, _GSPNRe, 0, [_SPN], [() => ServicePrincipalName]);
export var GetTemplateRequest = struct(n0, _GTR, 0, [_TA], [[0, 1]]);
export var GetTemplateResponse = struct(n0, _GTRe, 0, [_Te], [() => Template]);
export var ListConnectorsRequest = struct(
  n0,
  _LCR,
  0,
  [_MR, _NT],
  [
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
  ]
);
export var ListConnectorsResponse = struct(n0, _LCRi, 0, [_Con, _NT], [() => ConnectorList, 0]);
export var ListServicePrincipalNamesRequest = struct(
  n0,
  _LSPNR,
  0,
  [_MR, _NT, _DRA],
  [
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [0, 1],
  ]
);
export var ListServicePrincipalNamesResponse = struct(
  n0,
  _LSPNRi,
  0,
  [_SPNe, _NT],
  [() => ServicePrincipalNameList, 0]
);
export var ListTemplatesRequest = struct(
  n0,
  _LTR,
  0,
  [_MR, _NT, _CAo],
  [
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      0,
      {
        [_hQ]: _CAo,
      },
    ],
  ]
);
export var ListTemplatesResponse = struct(n0, _LTRi, 0, [_Tem, _NT], [() => TemplateList, 0]);
export var ServicePrincipalName = struct(n0, _SPN, 0, [_DRA, _CAo, _S, _SR, _CA, _UA], [0, 0, 0, 0, 4, 4]);
export var ServicePrincipalNameSummary = struct(n0, _SPNS, 0, [_DRA, _CAo, _S, _SR, _CA, _UA], [0, 0, 0, 0, 4, 4]);
export var Template = struct(
  n0,
  _Te,
  0,
  [_A, _CAo, _D, _N, _OI, _PS, _S, _R, _CA, _UA],
  [0, 0, () => TemplateDefinition, 0, 0, 1, 0, () => TemplateRevision, 4, 4]
);
export var TemplateRevision = struct(n0, _TR, 0, [_MRa, _MRi], [1, 1]);
export var TemplateSummary = struct(
  n0,
  _TS,
  0,
  [_A, _CAo, _D, _N, _OI, _PS, _S, _R, _CA, _UA],
  [0, 0, () => TemplateDefinition, 0, 0, 1, 0, () => TemplateRevision, 4, 4]
);
export var VpcInformation = struct(n0, _VI, 0, [_IAT, _SGI], [0, 64 | 0]);
export var ConnectorList = list(n0, _CL, 0, () => ConnectorSummary);
export var SecurityGroupIdList = 64 | 0;

export var ServicePrincipalNameList = list(n0, _SPNL, 0, () => ServicePrincipalNameSummary);
export var TemplateList = list(n0, _TL, 0, () => TemplateSummary);
export var CreateConnector = op(
  n0,
  _CC,
  {
    [_h]: ["POST", "/connectors", 202],
  },
  () => CreateConnectorRequest,
  () => CreateConnectorResponse
);
export var CreateServicePrincipalName = op(
  n0,
  _CSPN,
  {
    [_h]: ["POST", "/directoryRegistrations/{DirectoryRegistrationArn}/servicePrincipalNames/{ConnectorArn}", 202],
  },
  () => CreateServicePrincipalNameRequest,
  () => Unit
);
export var CreateTemplate = op(
  n0,
  _CTr,
  {
    [_h]: ["POST", "/templates", 200],
  },
  () => CreateTemplateRequest,
  () => CreateTemplateResponse
);
export var DeleteConnector = op(
  n0,
  _DC,
  {
    [_h]: ["DELETE", "/connectors/{ConnectorArn}", 202],
  },
  () => DeleteConnectorRequest,
  () => Unit
);
export var DeleteServicePrincipalName = op(
  n0,
  _DSPN,
  {
    [_h]: ["DELETE", "/directoryRegistrations/{DirectoryRegistrationArn}/servicePrincipalNames/{ConnectorArn}", 202],
  },
  () => DeleteServicePrincipalNameRequest,
  () => Unit
);
export var GetConnector = op(
  n0,
  _GC,
  {
    [_h]: ["GET", "/connectors/{ConnectorArn}", 200],
  },
  () => GetConnectorRequest,
  () => GetConnectorResponse
);
export var GetServicePrincipalName = op(
  n0,
  _GSPN,
  {
    [_h]: ["GET", "/directoryRegistrations/{DirectoryRegistrationArn}/servicePrincipalNames/{ConnectorArn}", 200],
  },
  () => GetServicePrincipalNameRequest,
  () => GetServicePrincipalNameResponse
);
export var GetTemplate = op(
  n0,
  _GT,
  {
    [_h]: ["GET", "/templates/{TemplateArn}", 200],
  },
  () => GetTemplateRequest,
  () => GetTemplateResponse
);
export var ListConnectors = op(
  n0,
  _LC,
  {
    [_h]: ["GET", "/connectors", 200],
  },
  () => ListConnectorsRequest,
  () => ListConnectorsResponse
);
export var ListServicePrincipalNames = op(
  n0,
  _LSPN,
  {
    [_h]: ["GET", "/directoryRegistrations/{DirectoryRegistrationArn}/servicePrincipalNames", 200],
  },
  () => ListServicePrincipalNamesRequest,
  () => ListServicePrincipalNamesResponse
);
export var ListTemplates = op(
  n0,
  _LT,
  {
    [_h]: ["GET", "/templates", 200],
  },
  () => ListTemplatesRequest,
  () => ListTemplatesResponse
);
