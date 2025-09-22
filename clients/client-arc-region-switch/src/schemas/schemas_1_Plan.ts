// smithy-typescript generated code
import { list, map, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _A,
  _a,
  _AA,
  _aA,
  _AAM,
  _aAN,
  _ac,
  _AL,
  _aR,
  _ARCC,
  _aRCC,
  _ARCS,
  _ARCSr,
  _as,
  _aT,
  _aV,
  _b,
  _cA,
  _CALC,
  _cALC,
  _cAR,
  _cMA,
  _co,
  _con,
  _CP,
  _CPR,
  _CPRr,
  _d,
  _dCA,
  _EAC,
  _eAC,
  _EACIC,
  _eACIC,
  _EBC,
  _eBC,
  _eBT,
  _EC,
  _eC,
  _ECIC,
  _eCIC,
  _ECk,
  _eIx,
  _ERSC,
  _eRSC,
  _ERSU,
  _eRx,
  _eSv,
  _EU,
  _EUc,
  _GAC,
  _gAC,
  _GAU,
  _gCI,
  _GP,
  _GPES,
  _GPESR,
  _GPESRe,
  _GPIR,
  _GPIRR,
  _GPIRRe,
  _GPR,
  _GPRe,
  _hN,
  _hZI,
  _k,
  _KRT,
  _kRT,
  _KSA,
  _KSAu,
  _KSR,
  _L,
  _l,
  _lET,
  _lEV,
  _LL,
  _LU,
  _mDMBE,
  _mR,
  _mSP,
  _MW,
  _n,
  _na,
  _nT,
  _o,
  _P,
  _p,
  _pA,
  _pC,
  _PEBC,
  _pR,
  _PW,
  _r,
  _rA,
  _rAe,
  _RARC,
  _rARC,
  _rCA,
  _reg,
  _RHCC,
  _rHCC,
  _rI,
  _rIM,
  _rN,
  _RRRS,
  _RRRSL,
  _rS,
  _rSI,
  _RSPC,
  _rSPC,
  _RSR,
  _rTOM,
  _rTR,
  _RW,
  _S,
  _s,
  _sA,
  _se,
  _SL,
  _sN,
  _sR,
  _St,
  _st,
  _Ste,
  _T,
  _t,
  _ta,
  _TC,
  _TCL,
  _TL,
  _tM,
  _tP,
  _tR,
  _u,
  _uA,
  _UP,
  _UPR,
  _UPRp,
  _v,
  _W,
  _w,
  _wa,
  _wD,
  _WL,
  _wM,
  _wo,
  _wS,
  _wTA,
  _wTR,
  _wUT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ArcRoutingControlConfiguration = struct(
  n0,
  _ARCC,
  0,
  [_tM, _cAR, _eIx, _rARC],
  [1, 0, 0, () => RegionAndRoutingControls]
);
export var ArcRoutingControlState = struct(n0, _ARCS, 0, [_rCA, _s], [0, 0]);
export var Asg = struct(n0, _A, 0, [_cAR, _eIx, _a], [0, 0, 0]);
export var AssociatedAlarm = struct(n0, _AA, 0, [_cAR, _eIx, _rI, _aT], [0, 0, 0, 0]);
export var CreatePlanRequest = struct(
  n0,
  _CPR,
  0,
  [_d, _w, _eRx, _rTOM, _aA, _t, _n, _r, _rA, _pR, _ta],
  [0, () => WorkflowList, 0, 1, () => AssociatedAlarmMap, () => TriggerList, 0, 64 | 0, 0, 0, 128 | 0]
);
export var CreatePlanResponse = struct(n0, _CPRr, 0, [_p], [() => Plan]);
export var CustomActionLambdaConfiguration = struct(
  n0,
  _CALC,
  0,
  [_tM, _l, _rIM, _rTR, _u],
  [1, () => LambdaList, 1, 0, () => LambdaUngraceful]
);
export var Ec2AsgCapacityIncreaseConfiguration = struct(
  n0,
  _EACIC,
  0,
  [_tM, _as, _u, _tP, _cMA],
  [1, () => AsgList, () => Ec2Ungraceful, 1, 0]
);
export var Ec2Ungraceful = struct(n0, _EU, 0, [_mSP], [1]);
export var EcsCapacityIncreaseConfiguration = struct(
  n0,
  _ECIC,
  0,
  [_tM, _se, _u, _tP, _cMA],
  [1, () => ServiceList, () => EcsUngraceful, 1, 0]
);
export var EcsUngraceful = struct(n0, _EUc, 0, [_mSP], [1]);
export var EksCluster = struct(n0, _EC, 0, [_cAR, _eIx, _cA], [0, 0, 0]);
export var EksResourceScalingConfiguration = struct(
  n0,
  _ERSC,
  0,
  [_tM, _kRT, _sR, _eC, _u, _tP, _cMA],
  [
    1,
    () => KubernetesResourceType,
    () => KubernetesScalingApps,
    () => EksClusters,
    () => EksResourceScalingUngraceful,
    1,
    0,
  ]
);
export var EksResourceScalingUngraceful = struct(n0, _ERSU, 0, [_mSP], [1]);
export var ExecutionApprovalConfiguration = struct(n0, _EAC, 0, [_tM, _aR], [1, 0]);
export var GetPlanEvaluationStatusRequest = struct(n0, _GPESR, 0, [_pA, _mR, _nT], [0, 1, 0]);
export var GetPlanEvaluationStatusResponse = struct(
  n0,
  _GPESRe,
  0,
  [_pA, _lET, _lEV, _reg, _eSv, _wa, _nT],
  [0, 4, 0, 0, 0, () => PlanWarnings, 0]
);
export var GetPlanInRegionRequest = struct(n0, _GPIRR, 0, [_a], [0]);
export var GetPlanInRegionResponse = struct(n0, _GPIRRe, 0, [_p], [() => Plan]);
export var GetPlanRequest = struct(n0, _GPR, 0, [_a], [0]);
export var GetPlanResponse = struct(n0, _GPRe, 0, [_p], [() => Plan]);
export var GlobalAuroraConfiguration = struct(
  n0,
  _GAC,
  0,
  [_tM, _cAR, _eIx, _b, _u, _gCI, _dCA],
  [1, 0, 0, 0, () => GlobalAuroraUngraceful, 0, 64 | 0]
);
export var GlobalAuroraUngraceful = struct(n0, _GAU, 0, [_u], [0]);
export var KubernetesResourceType = struct(n0, _KRT, 0, [_aV, _k], [0, 0]);
export var KubernetesScalingResource = struct(n0, _KSR, 0, [_na, _n, _hN], [0, 0, 0]);
export var Lambdas = struct(n0, _L, 0, [_cAR, _eIx, _a], [0, 0, 0]);
export var LambdaUngraceful = struct(n0, _LU, 0, [_b], [0]);
export var MinimalWorkflow = struct(n0, _MW, 0, [_ac, _n], [0, 0]);
export var ParallelExecutionBlockConfiguration = struct(n0, _PEBC, 0, [_st], [() => Steps]);
export var Plan = struct(
  n0,
  _P,
  0,
  [_a, _d, _w, _eRx, _rTOM, _aA, _t, _n, _r, _rA, _pR, _o, _v, _uA],
  [0, 0, () => WorkflowList, 0, 1, () => AssociatedAlarmMap, () => TriggerList, 0, 64 | 0, 0, 0, 0, 0, 4]
);
export var RegionSwitchPlanConfiguration = struct(n0, _RSPC, 0, [_cAR, _eIx, _a], [0, 0, 0]);
export var ResourceWarning = struct(
  n0,
  _RW,
  0,
  [_wo, _v, _sN, _rAe, _wS, _wUT, _wM],
  [() => MinimalWorkflow, 0, 0, 0, 0, 4, 0]
);
export var Route53HealthCheckConfiguration = struct(
  n0,
  _RHCC,
  0,
  [_tM, _cAR, _eIx, _hZI, _rN, _rS],
  [1, 0, 0, 0, 0, () => Route53ResourceRecordSetList]
);
export var Route53ResourceRecordSet = struct(n0, _RRRS, 0, [_rSI, _reg], [0, 0]);
export var Service = struct(n0, _S, 0, [_cAR, _eIx, _cA, _sA], [0, 0, 0, 0]);
export var Step = struct(n0, _St, 0, [_n, _d, _eBC, _eBT], [0, 0, () => ExecutionBlockConfiguration, 0]);
export var Trigger = struct(n0, _T, 0, [_d, _tR, _ac, _co, _mDMBE], [0, 0, 0, () => TriggerConditionList, 1]);
export var TriggerCondition = struct(n0, _TC, 0, [_aAN, _con], [0, 0]);
export var UpdatePlanRequest = struct(
  n0,
  _UPR,
  0,
  [_a, _d, _w, _eRx, _rTOM, _aA, _t],
  [0, 0, () => WorkflowList, 0, 1, () => AssociatedAlarmMap, () => TriggerList]
);
export var UpdatePlanResponse = struct(n0, _UPRp, 0, [_p], [() => Plan]);
export var Workflow = struct(n0, _W, 0, [_st, _wTA, _wTR, _wD], [() => Steps, 0, 0, 0]);
export var ArcRoutingControlStates = list(n0, _ARCSr, 0, () => ArcRoutingControlState);
export var AsgList = list(n0, _AL, 0, () => Asg);
export var AuroraClusterArns = 64 | 0;

export var EksClusters = list(n0, _ECk, 0, () => EksCluster);
export var KubernetesScalingApps = list(n0, _KSA, 0, () => KubernetesScalingApplication);
export var LambdaList = list(n0, _LL, 0, () => Lambdas);
export var PlanWarnings = list(n0, _PW, 0, () => ResourceWarning);
export var RegionList = 64 | 0;

export var Route53ResourceRecordSetList = list(n0, _RRRSL, 0, () => Route53ResourceRecordSet);
export var ServiceList = list(n0, _SL, 0, () => Service);
export var Steps = list(n0, _Ste, 0, () => Step);
export var TriggerConditionList = list(n0, _TCL, 0, () => TriggerCondition);
export var TriggerList = list(n0, _TL, 0, () => Trigger);
export var WorkflowList = list(n0, _WL, 0, () => Workflow);
export var AssociatedAlarmMap = map(n0, _AAM, 0, 0, () => AssociatedAlarm);
export var KubernetesScalingApplication = map(n0, _KSAu, 0, 0, () => RegionalScalingResource);
export var RegionalScalingResource = map(n0, _RSR, 0, 0, () => KubernetesScalingResource);
export var RegionAndRoutingControls = map(n0, _RARC, 0, 0, () => ArcRoutingControlStates);
export var ExecutionBlockConfiguration = uni(
  n0,
  _EBC,
  0,
  [_cALC, _eACIC, _eAC, _aRCC, _gAC, _pC, _rSPC, _eCIC, _eRSC, _rHCC],
  [
    () => CustomActionLambdaConfiguration,
    () => Ec2AsgCapacityIncreaseConfiguration,
    () => ExecutionApprovalConfiguration,
    () => ArcRoutingControlConfiguration,
    () => GlobalAuroraConfiguration,
    () => ParallelExecutionBlockConfiguration,
    () => RegionSwitchPlanConfiguration,
    () => EcsCapacityIncreaseConfiguration,
    () => EksResourceScalingConfiguration,
    () => Route53HealthCheckConfiguration,
  ]
);
export var CreatePlan = op(
  n0,
  _CP,
  0,
  () => CreatePlanRequest,
  () => CreatePlanResponse
);
export var GetPlan = op(
  n0,
  _GP,
  0,
  () => GetPlanRequest,
  () => GetPlanResponse
);
export var GetPlanEvaluationStatus = op(
  n0,
  _GPES,
  0,
  () => GetPlanEvaluationStatusRequest,
  () => GetPlanEvaluationStatusResponse
);
export var GetPlanInRegion = op(
  n0,
  _GPIR,
  0,
  () => GetPlanInRegionRequest,
  () => GetPlanInRegionResponse
);
export var UpdatePlan = op(
  n0,
  _UP,
  0,
  () => UpdatePlanRequest,
  () => UpdatePlanResponse
);
