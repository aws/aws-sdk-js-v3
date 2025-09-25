// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AP,
  _AVc,
  _CA,
  _CRT,
  _D,
  _DI,
  _DSE,
  _DSEI,
  _DSEO,
  _DSet,
  _DSRD,
  _DSRDe,
  _DSRDI,
  _DSRDIe,
  _DSRDO,
  _DSRDOe,
  _DSRes,
  _DSResc,
  _DSRIe,
  _DSRIes,
  _DSROe,
  _DSROes,
  _DSRr,
  _DTi,
  _EI,
  _EP,
  _EV,
  _HFM,
  _HII,
  _HIP,
  _HS,
  _HSR,
  _HT,
  _K,
  _LCT,
  _LIH,
  _LRI,
  _LSIRD,
  _LSIRDI,
  _LSIRDO,
  _LSRi,
  _LSRIi,
  _LSROi,
  _LUTa,
  _Me,
  _MI,
  _MR,
  _NT,
  _OI,
  _PDr,
  _PDro,
  _PPr,
  _PRI,
  _PRIC,
  _PRICKVP,
  _RP,
  _RSes,
  _RSR,
  _RT,
  _SE,
  _SEt,
  _SI,
  _SIA,
  _SIR,
  _SIRDS,
  _SIRDSt,
  _SIRDSta,
  _SN,
  _SRD,
  _SRDI,
  _SRDIS,
  _SRDS,
  _SRDSF,
  _SRDt,
  _SRDta,
  _SRSt,
  _SRStac,
  _SRt,
  _SRta,
  _SSN,
  _Su,
  _TH,
  _Ti,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeStackEventsInput = struct(n0, _DSEI, 0, [_SN, _NT], [0, 0]);
export var DescribeStackEventsOutput = struct(n0, _DSEO, 0, [_SE, _NT], [() => StackEvents, 0]);
export var DescribeStackResourceDriftsInput = struct(n0, _DSRDI, 0, [_SN, _SRDSF, _NT, _MR], [0, 64 | 0, 0, 1]);
export var DescribeStackResourceDriftsOutput = struct(n0, _DSRDO, 0, [_SRD, _NT], [() => StackResourceDrifts, 0]);
export var DescribeStackResourceInput = struct(n0, _DSRIe, 0, [_SN, _LRI], [0, 0]);
export var DescribeStackResourceOutput = struct(n0, _DSROe, 0, [_SRDt], [() => StackResourceDetail]);
export var DescribeStackResourcesInput = struct(n0, _DSRIes, 0, [_SN, _LRI, _PRI], [0, 0, 0]);
export var DescribeStackResourcesOutput = struct(n0, _DSROes, 0, [_SRt], [() => StackResources]);
export var DetectStackResourceDriftInput = struct(n0, _DSRDIe, 0, [_SN, _LRI], [0, 0]);
export var DetectStackResourceDriftOutput = struct(n0, _DSRDOe, 0, [_SRDta], [() => StackResourceDrift]);
export var ListStackInstanceResourceDriftsInput = struct(
  n0,
  _LSIRDI,
  0,
  [_SSN, _NT, _MR, _SIRDS, _SIA, _SIR, _OI, _CA],
  [0, 0, 1, 64 | 0, 0, 0, 0, 0]
);
export var ListStackInstanceResourceDriftsOutput = struct(
  n0,
  _LSIRDO,
  0,
  [_Su, _NT],
  [() => StackInstanceResourceDriftsSummaries, 0]
);
export var ListStackResourcesInput = struct(n0, _LSRIi, 0, [_SN, _NT], [0, 0]);
export var ListStackResourcesOutput = struct(n0, _LSROi, 0, [_SRSt, _NT], [() => StackResourceSummaries, 0]);
export var ModuleInfo = struct(n0, _MI, 0, [_TH, _LIH], [0, 0]);
export var PhysicalResourceIdContextKeyValuePair = struct(n0, _PRICKVP, 0, [_K, _V], [0, 0]);
export var PropertyDifference = struct(n0, _PDr, 0, [_PPr, _EV, _AVc, _DTi], [0, 0, 0, 0]);
export var StackEvent = struct(
  n0,
  _SEt,
  0,
  [_SI, _EI, _SN, _LRI, _PRI, _RT, _Ti, _RSes, _RSR, _RP, _CRT, _HT, _HS, _HSR, _HIP, _HII, _HFM, _DSet],
  [0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
);
export var StackInstanceResourceDriftsSummary = struct(
  n0,
  _SIRDSt,
  0,
  [_SI, _LRI, _PRI, _PRIC, _RT, _PDro, _SRDS, _Ti],
  [0, 0, 0, () => PhysicalResourceIdContext, 0, () => PropertyDifferences, 0, 4]
);
export var StackResource = struct(
  n0,
  _SRta,
  0,
  [_SN, _SI, _LRI, _PRI, _RT, _Ti, _RSes, _RSR, _D, _DI, _MI],
  [0, 0, 0, 0, 0, 4, 0, 0, 0, () => StackResourceDriftInformation, () => ModuleInfo]
);
export var StackResourceDetail = struct(
  n0,
  _SRDt,
  0,
  [_SN, _SI, _LRI, _PRI, _RT, _LUTa, _RSes, _RSR, _D, _Me, _DI, _MI],
  [0, 0, 0, 0, 0, 4, 0, 0, 0, 0, () => StackResourceDriftInformation, () => ModuleInfo]
);
export var StackResourceDrift = struct(
  n0,
  _SRDta,
  0,
  [_SI, _LRI, _PRI, _PRIC, _RT, _EP, _AP, _PDro, _SRDS, _Ti, _MI, _DSRr],
  [0, 0, 0, () => PhysicalResourceIdContext, 0, 0, 0, () => PropertyDifferences, 0, 4, () => ModuleInfo, 0]
);
export var StackResourceDriftInformation = struct(n0, _SRDI, 0, [_SRDS, _LCT], [0, 4]);
export var StackResourceDriftInformationSummary = struct(n0, _SRDIS, 0, [_SRDS, _LCT], [0, 4]);
export var StackResourceSummary = struct(
  n0,
  _SRStac,
  0,
  [_LRI, _PRI, _RT, _LUTa, _RSes, _RSR, _DI, _MI],
  [0, 0, 0, 4, 0, 0, () => StackResourceDriftInformationSummary, () => ModuleInfo]
);
export var PhysicalResourceIdContext = list(n0, _PRIC, 0, () => PhysicalResourceIdContextKeyValuePair);
export var PropertyDifferences = list(n0, _PDro, 0, () => PropertyDifference);
export var StackEvents = list(n0, _SE, 0, () => StackEvent);
export var StackInstanceResourceDriftsSummaries = list(n0, _SIRDSta, 0, () => StackInstanceResourceDriftsSummary);
export var StackResourceDrifts = list(n0, _SRD, 0, () => StackResourceDrift);
export var StackResourceDriftStatusFilters = 64 | 0;

export var StackResources = list(n0, _SRt, 0, () => StackResource);
export var StackResourceSummaries = list(n0, _SRSt, 0, () => StackResourceSummary);
export var DescribeStackEvents = op(
  n0,
  _DSE,
  0,
  () => DescribeStackEventsInput,
  () => DescribeStackEventsOutput
);
export var DescribeStackResource = op(
  n0,
  _DSRes,
  0,
  () => DescribeStackResourceInput,
  () => DescribeStackResourceOutput
);
export var DescribeStackResourceDrifts = op(
  n0,
  _DSRD,
  0,
  () => DescribeStackResourceDriftsInput,
  () => DescribeStackResourceDriftsOutput
);
export var DescribeStackResources = op(
  n0,
  _DSResc,
  0,
  () => DescribeStackResourcesInput,
  () => DescribeStackResourcesOutput
);
export var DetectStackResourceDrift = op(
  n0,
  _DSRDe,
  0,
  () => DetectStackResourceDriftInput,
  () => DetectStackResourceDriftOutput
);
export var ListStackInstanceResourceDrifts = op(
  n0,
  _LSIRD,
  0,
  () => ListStackInstanceResourceDriftsInput,
  () => ListStackInstanceResourceDriftsOutput
);
export var ListStackResources = op(
  n0,
  _LSRi,
  0,
  () => ListStackResourcesInput,
  () => ListStackResourcesOutput
);
