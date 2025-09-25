// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CS,
  _CSA,
  _CSF,
  _CSFL,
  _CSI,
  _CSIL,
  _CSN,
  _CSNo,
  _CTr,
  _DCS,
  _DCSe,
  _DCSR,
  _DCSRe,
  _DCSRes,
  _DCSResc,
  _DDSI,
  _DDSIR,
  _DDSIRe,
  _DMFE,
  _DMT,
  _DPE,
  _DSI,
  _DSIe,
  _DSIR,
  _DSIRe,
  _ED,
  _EDL,
  _F,
  _ICC,
  _MLP,
  _MR,
  _MTe,
  _N,
  _NT,
  _O,
  _PCI,
  _Reg,
  _RIe,
  _RSI,
  _RSIR,
  _RSIRe,
  _SDSI,
  _SDSIR,
  _SDSIRe,
  _SI,
  _SIA,
  _SIAC,
  _SIe,
  _SIF,
  _SIFL,
  _SII,
  _SIIL,
  _SIL,
  _USI,
  _USIR,
  _USIRp,
  _Va,
  n0,
} from "./schemas_0";
import { EventDestination } from "./schemas_10_Destination";

/* eslint no-var: 0 */

export var ConfigurationSetFilter = struct(n0, _CSF, 0, [_N, _Va], [0, 64 | 0]);
export var ConfigurationSetInformation = struct(
  n0,
  _CSI,
  0,
  [_CSA, _CSN, _ED, _DMT, _DSI, _DMFE, _CTr, _PCI],
  [0, 0, () => EventDestinationList, 0, 0, 2, 4, 0]
);
export var DeleteConfigurationSetRequest = struct(n0, _DCSR, 0, [_CSN], [0]);
export var DeleteConfigurationSetResult = struct(
  n0,
  _DCSRe,
  0,
  [_CSA, _CSN, _ED, _DMT, _DSI, _DMFE, _CTr],
  [0, 0, () => EventDestinationList, 0, 0, 2, 4]
);
export var DeleteDefaultSenderIdRequest = struct(n0, _DDSIR, 0, [_CSN], [0]);
export var DeleteDefaultSenderIdResult = struct(n0, _DDSIRe, 0, [_CSA, _CSN, _SI], [0, 0, 0]);
export var DescribeConfigurationSetsRequest = struct(
  n0,
  _DCSRes,
  0,
  [_CSNo, _F, _NT, _MR],
  [64 | 0, () => ConfigurationSetFilterList, 0, 1]
);
export var DescribeConfigurationSetsResult = struct(
  n0,
  _DCSResc,
  0,
  [_CS, _NT],
  [() => ConfigurationSetInformationList, 0]
);
export var DescribeSenderIdsRequest = struct(
  n0,
  _DSIR,
  0,
  [_SIe, _F, _NT, _MR, _O],
  [() => SenderIdList, () => SenderIdFilterList, 0, 1, 0]
);
export var DescribeSenderIdsResult = struct(n0, _DSIRe, 0, [_SIe, _NT], [() => SenderIdInformationList, 0]);
export var ReleaseSenderIdRequest = struct(n0, _RSIR, 0, [_SI, _ICC], [0, 0]);
export var ReleaseSenderIdResult = struct(
  n0,
  _RSIRe,
  0,
  [_SIA, _SI, _ICC, _MTe, _MLP, _Reg, _RIe],
  [0, 0, 0, 64 | 0, 0, 2, 0]
);
export var SenderIdAndCountry = struct(n0, _SIAC, 0, [_SI, _ICC], [0, 0]);
export var SenderIdFilter = struct(n0, _SIF, 0, [_N, _Va], [0, 64 | 0]);
export var SenderIdInformation = struct(
  n0,
  _SII,
  0,
  [_SIA, _SI, _ICC, _MTe, _MLP, _DPE, _Reg, _RIe],
  [0, 0, 0, 64 | 0, 0, 2, 2, 0]
);
export var SetDefaultSenderIdRequest = struct(n0, _SDSIR, 0, [_CSN, _SI], [0, 0]);
export var SetDefaultSenderIdResult = struct(n0, _SDSIRe, 0, [_CSA, _CSN, _SI], [0, 0, 0]);
export var UpdateSenderIdRequest = struct(n0, _USIR, 0, [_SI, _ICC, _DPE], [0, 0, 2]);
export var UpdateSenderIdResult = struct(
  n0,
  _USIRp,
  0,
  [_SIA, _SI, _ICC, _MTe, _MLP, _DPE, _Reg, _RIe],
  [0, 0, 0, 64 | 0, 0, 2, 2, 0]
);
export var ConfigurationSetFilterList = list(n0, _CSFL, 0, () => ConfigurationSetFilter);
export var ConfigurationSetInformationList = list(n0, _CSIL, 0, () => ConfigurationSetInformation);
export var ConfigurationSetNameList = 64 | 0;

export var EventDestinationList = list(n0, _EDL, 0, () => EventDestination);
export var MessageTypeList = 64 | 0;

export var SenderIdFilterList = list(n0, _SIFL, 0, () => SenderIdFilter);
export var SenderIdInformationList = list(n0, _SIIL, 0, () => SenderIdInformation);
export var SenderIdList = list(n0, _SIL, 0, () => SenderIdAndCountry);
export var DeleteConfigurationSet = op(
  n0,
  _DCS,
  0,
  () => DeleteConfigurationSetRequest,
  () => DeleteConfigurationSetResult
);
export var DeleteDefaultSenderId = op(
  n0,
  _DDSI,
  0,
  () => DeleteDefaultSenderIdRequest,
  () => DeleteDefaultSenderIdResult
);
export var DescribeConfigurationSets = op(
  n0,
  _DCSe,
  0,
  () => DescribeConfigurationSetsRequest,
  () => DescribeConfigurationSetsResult
);
export var DescribeSenderIds = op(
  n0,
  _DSIe,
  0,
  () => DescribeSenderIdsRequest,
  () => DescribeSenderIdsResult
);
export var ReleaseSenderId = op(
  n0,
  _RSI,
  0,
  () => ReleaseSenderIdRequest,
  () => ReleaseSenderIdResult
);
export var SetDefaultSenderId = op(
  n0,
  _SDSI,
  0,
  () => SetDefaultSenderIdRequest,
  () => SetDefaultSenderIdResult
);
export var UpdateSenderId = op(
  n0,
  _USI,
  0,
  () => UpdateSenderIdRequest,
  () => UpdateSenderIdResult
);
