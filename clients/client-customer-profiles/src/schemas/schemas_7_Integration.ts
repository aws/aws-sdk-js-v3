// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AI,
  _B,
  _Ba,
  _BNu,
  _BP,
  _CA,
  _CIW,
  _CIWR,
  _CIWRr,
  _COo,
  _CPN,
  _CTon,
  _D,
  _DFe,
  _DN,
  _DPM,
  _DTFN,
  _EDFU,
  _ET,
  _ETNv,
  _FD,
  _FEF,
  _FN,
  _GI,
  _GIR,
  _GIRe,
  _h,
  _hQ,
  _IC,
  _IDR,
  _IH,
  _ih,
  _IL,
  _IPC,
  _It,
  _IU,
  _KA,
  _LAI,
  _LAIR,
  _LAIRi,
  _LII,
  _LIi,
  _LIR,
  _LIRi,
  _LUA,
  _M,
  _Ma,
  _MR,
  _mr,
  _MSP,
  _NT,
  _nt,
  _Ob,
  _OTN,
  _OTNb,
  _PIR,
  _PIRu,
  _PIu,
  _RA,
  _S_,
  _Sa,
  _Sc,
  _SCP,
  _SEc,
  _SET,
  _SFC,
  _SFo,
  _SNe,
  _SNSP,
  _SOc,
  _SSP,
  _SSPa,
  _SST,
  _ST,
  _STP,
  _Ta,
  _Tas,
  _Task,
  _TC,
  _Tim,
  _TP,
  _TPr,
  _TT,
  _TTr,
  _U,
  _WI,
  _WT,
  _Z,
  _ZSP,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AppflowIntegration = struct(n0, _AI, 0, [_FD, _B], [[() => FlowDefinition, 0], () => Batches]);
export var Batch = struct(n0, _Ba, 0, [_ST, _ET], [4, 4]);
export var ConnectorOperator = struct(n0, _COo, 0, [_Ma, _S_, _Sa, _SNe, _Z], [0, 0, 0, 0, 0]);
export var CreateIntegrationWorkflowRequest = struct(
  n0,
  _CIWR,
  0,
  [_DN, _WT, _IC, _OTN, _RA, _Ta],
  [[0, 1], 0, [() => IntegrationConfig, 0], 0, 0, 128 | 0]
);
export var CreateIntegrationWorkflowResponse = struct(n0, _CIWRr, 0, [_WI, _M], [0, 0]);
export var FlowDefinition = struct(
  n0,
  _FD,
  8,
  [_D, _FN, _KA, _SFC, _Tas, _TC],
  [0, 0, 0, () => SourceFlowConfig, () => Tasks, () => TriggerConfig]
);
export var GetIntegrationRequest = struct(n0, _GIR, 0, [_DN, _U], [[0, 1], 0]);
export var GetIntegrationResponse = struct(
  n0,
  _GIRe,
  0,
  [_DN, _U, _OTN, _CA, _LUA, _Ta, _OTNb, _WI, _IU, _RA, _ETNv],
  [0, 0, 0, 4, 4, 128 | 0, 128 | 0, 0, 2, 0, 64 | 0]
);
export var IncrementalPullConfig = struct(n0, _IPC, 0, [_DTFN], [0]);
export var IntegrationConfig = struct(n0, _IC, 0, [_AI], [[() => AppflowIntegration, 0]]);
export var ListAccountIntegrationsRequest = struct(
  n0,
  _LAIR,
  0,
  [_U, _NT, _MR, _IH],
  [
    0,
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [
      2,
      {
        [_hQ]: _ih,
      },
    ],
  ]
);
export var ListAccountIntegrationsResponse = struct(n0, _LAIRi, 0, [_It, _NT], [() => IntegrationList, 0]);
export var ListIntegrationItem = struct(
  n0,
  _LII,
  0,
  [_DN, _U, _OTN, _CA, _LUA, _Ta, _OTNb, _WI, _IU, _RA, _ETNv],
  [0, 0, 0, 4, 4, 128 | 0, 128 | 0, 0, 2, 0, 64 | 0]
);
export var ListIntegrationsRequest = struct(
  n0,
  _LIR,
  0,
  [_DN, _NT, _MR, _IH],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [
      2,
      {
        [_hQ]: _ih,
      },
    ],
  ]
);
export var ListIntegrationsResponse = struct(n0, _LIRi, 0, [_It, _NT], [() => IntegrationList, 0]);
export var MarketoSourceProperties = struct(n0, _MSP, 0, [_Ob], [0]);
export var PutIntegrationRequest = struct(
  n0,
  _PIR,
  0,
  [_DN, _U, _OTN, _Ta, _FD, _OTNb, _RA, _ETNv],
  [[0, 1], 0, 0, 128 | 0, [() => FlowDefinition, 0], 128 | 0, 0, 64 | 0]
);
export var PutIntegrationResponse = struct(
  n0,
  _PIRu,
  0,
  [_DN, _U, _OTN, _CA, _LUA, _Ta, _OTNb, _WI, _IU, _RA, _ETNv],
  [0, 0, 0, 4, 4, 128 | 0, 128 | 0, 0, 2, 0, 64 | 0]
);
export var S3SourceProperties = struct(n0, _SSP, 0, [_BNu, _BP], [0, 0]);
export var SalesforceSourceProperties = struct(n0, _SSPa, 0, [_Ob, _EDFU, _IDR], [0, 2, 2]);
export var ScheduledTriggerProperties = struct(
  n0,
  _STP,
  0,
  [_SEc, _DPM, _SST, _SET, _Tim, _SOc, _FEF],
  [0, 0, 4, 4, 0, 1, 4]
);
export var ServiceNowSourceProperties = struct(n0, _SNSP, 0, [_Ob], [0]);
export var SourceConnectorProperties = struct(
  n0,
  _SCP,
  0,
  [_Ma, _S_, _Sa, _SNe, _Z],
  [
    () => MarketoSourceProperties,
    () => S3SourceProperties,
    () => SalesforceSourceProperties,
    () => ServiceNowSourceProperties,
    () => ZendeskSourceProperties,
  ]
);
export var SourceFlowConfig = struct(
  n0,
  _SFC,
  0,
  [_CPN, _CTon, _IPC, _SCP],
  [0, 0, () => IncrementalPullConfig, () => SourceConnectorProperties]
);
export var Task = struct(n0, _Task, 0, [_COo, _DFe, _SFo, _TP, _TT], [() => ConnectorOperator, 0, 64 | 0, 128 | 0, 0]);
export var TriggerConfig = struct(n0, _TC, 0, [_TTr, _TPr], [0, () => TriggerProperties]);
export var TriggerProperties = struct(n0, _TPr, 0, [_Sc], [() => ScheduledTriggerProperties]);
export var ZendeskSourceProperties = struct(n0, _ZSP, 0, [_Ob], [0]);
export var Batches = list(n0, _B, 0, () => Batch);
export var EventTriggerNames = 64 | 0;

export var IntegrationList = list(n0, _IL, 0, () => ListIntegrationItem);
export var SourceFields = 64 | 0;

export var Tasks = list(n0, _Tas, 0, () => Task);
export var ObjectTypeNames = 128 | 0;

export var TaskPropertiesMap = 128 | 0;

export var CreateIntegrationWorkflow = op(
  n0,
  _CIW,
  {
    [_h]: ["POST", "/domains/{DomainName}/workflows/integrations", 200],
  },
  () => CreateIntegrationWorkflowRequest,
  () => CreateIntegrationWorkflowResponse
);
export var GetIntegration = op(
  n0,
  _GI,
  {
    [_h]: ["POST", "/domains/{DomainName}/integrations", 200],
  },
  () => GetIntegrationRequest,
  () => GetIntegrationResponse
);
export var ListAccountIntegrations = op(
  n0,
  _LAI,
  {
    [_h]: ["POST", "/integrations", 200],
  },
  () => ListAccountIntegrationsRequest,
  () => ListAccountIntegrationsResponse
);
export var ListIntegrations = op(
  n0,
  _LIi,
  {
    [_h]: ["GET", "/domains/{DomainName}/integrations", 200],
  },
  () => ListIntegrationsRequest,
  () => ListIntegrationsResponse
);
export var PutIntegration = op(
  n0,
  _PIu,
  {
    [_h]: ["PUT", "/domains/{DomainName}/integrations", 200],
  },
  () => PutIntegrationRequest,
  () => PutIntegrationResponse
);
