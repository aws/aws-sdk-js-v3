// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _ap,
  _ar,
  _aV,
  _CRA,
  _CRAR,
  _CRARr,
  _CRAV,
  _CRAVR,
  _CRAVRr,
  _cRI,
  _CSA,
  _CSAR,
  _CSARr,
  _CSAV,
  _CSAVR,
  _CSAVRr,
  _DRAe,
  _DRARes,
  _DRAResc,
  _DSAe,
  _DSARes,
  _DSAResc,
  _E,
  _en,
  _et,
  _h,
  _iD,
  _lUA,
  _n,
  _RE,
  _rE,
  _rI,
  _RSS,
  _rSS,
  _S,
  _sB,
  _SC,
  _SCo,
  _sE,
  _sKe,
  _So,
  _so,
  _SSS,
  _sSS,
  _t,
  _u,
  _URA,
  _URAR,
  _URARp,
  _USA,
  _USAR,
  _USARp,
  _v,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateRobotApplicationRequest = struct(
  n0,
  _CRAR,
  0,
  [_n, _so, _rSS, _t, _en],
  [0, () => SourceConfigs, () => RobotSoftwareSuite, 128 | 0, () => Environment]
);
export var CreateRobotApplicationResponse = struct(
  n0,
  _CRARr,
  0,
  [_a, _n, _v, _so, _rSS, _lUA, _rI, _t, _en],
  [0, 0, 0, () => Sources, () => RobotSoftwareSuite, 4, 0, 128 | 0, () => Environment]
);
export var CreateRobotApplicationVersionRequest = struct(n0, _CRAVR, 0, [_ap, _cRI, _sE, _iD], [0, 0, 64 | 0, 0]);
export var CreateRobotApplicationVersionResponse = struct(
  n0,
  _CRAVRr,
  0,
  [_a, _n, _v, _so, _rSS, _lUA, _rI, _en],
  [0, 0, 0, () => Sources, () => RobotSoftwareSuite, 4, 0, () => Environment]
);
export var CreateSimulationApplicationRequest = struct(
  n0,
  _CSAR,
  0,
  [_n, _so, _sSS, _rSS, _rE, _t, _en],
  [
    0,
    () => SourceConfigs,
    () => SimulationSoftwareSuite,
    () => RobotSoftwareSuite,
    () => RenderingEngine,
    128 | 0,
    () => Environment,
  ]
);
export var CreateSimulationApplicationResponse = struct(
  n0,
  _CSARr,
  0,
  [_a, _n, _v, _so, _sSS, _rSS, _rE, _lUA, _rI, _t, _en],
  [
    0,
    0,
    0,
    () => Sources,
    () => SimulationSoftwareSuite,
    () => RobotSoftwareSuite,
    () => RenderingEngine,
    4,
    0,
    128 | 0,
    () => Environment,
  ]
);
export var CreateSimulationApplicationVersionRequest = struct(n0, _CSAVR, 0, [_ap, _cRI, _sE, _iD], [0, 0, 64 | 0, 0]);
export var CreateSimulationApplicationVersionResponse = struct(
  n0,
  _CSAVRr,
  0,
  [_a, _n, _v, _so, _sSS, _rSS, _rE, _lUA, _rI, _en],
  [
    0,
    0,
    0,
    () => Sources,
    () => SimulationSoftwareSuite,
    () => RobotSoftwareSuite,
    () => RenderingEngine,
    4,
    0,
    () => Environment,
  ]
);
export var DescribeRobotApplicationRequest = struct(n0, _DRARes, 0, [_ap, _aV], [0, 0]);
export var DescribeRobotApplicationResponse = struct(
  n0,
  _DRAResc,
  0,
  [_a, _n, _v, _so, _rSS, _rI, _lUA, _t, _en, _iD],
  [0, 0, 0, () => Sources, () => RobotSoftwareSuite, 0, 4, 128 | 0, () => Environment, 0]
);
export var DescribeSimulationApplicationRequest = struct(n0, _DSARes, 0, [_ap, _aV], [0, 0]);
export var DescribeSimulationApplicationResponse = struct(
  n0,
  _DSAResc,
  0,
  [_a, _n, _v, _so, _sSS, _rSS, _rE, _rI, _lUA, _t, _en, _iD],
  [
    0,
    0,
    0,
    () => Sources,
    () => SimulationSoftwareSuite,
    () => RobotSoftwareSuite,
    () => RenderingEngine,
    0,
    4,
    128 | 0,
    () => Environment,
    0,
  ]
);
export var Environment = struct(n0, _E, 0, [_u], [0]);
export var RenderingEngine = struct(n0, _RE, 0, [_n, _v], [0, 0]);
export var RobotSoftwareSuite = struct(n0, _RSS, 0, [_n, _v], [0, 0]);
export var SimulationSoftwareSuite = struct(n0, _SSS, 0, [_n, _v], [0, 0]);
export var Source = struct(n0, _S, 0, [_sB, _sKe, _et, _ar], [0, 0, 0, 0]);
export var SourceConfig = struct(n0, _SC, 0, [_sB, _sKe, _ar], [0, 0, 0]);
export var UpdateRobotApplicationRequest = struct(
  n0,
  _URAR,
  0,
  [_ap, _so, _rSS, _cRI, _en],
  [0, () => SourceConfigs, () => RobotSoftwareSuite, 0, () => Environment]
);
export var UpdateRobotApplicationResponse = struct(
  n0,
  _URARp,
  0,
  [_a, _n, _v, _so, _rSS, _lUA, _rI, _en],
  [0, 0, 0, () => Sources, () => RobotSoftwareSuite, 4, 0, () => Environment]
);
export var UpdateSimulationApplicationRequest = struct(
  n0,
  _USAR,
  0,
  [_ap, _so, _sSS, _rSS, _rE, _cRI, _en],
  [
    0,
    () => SourceConfigs,
    () => SimulationSoftwareSuite,
    () => RobotSoftwareSuite,
    () => RenderingEngine,
    0,
    () => Environment,
  ]
);
export var UpdateSimulationApplicationResponse = struct(
  n0,
  _USARp,
  0,
  [_a, _n, _v, _so, _sSS, _rSS, _rE, _lUA, _rI, _en],
  [
    0,
    0,
    0,
    () => Sources,
    () => SimulationSoftwareSuite,
    () => RobotSoftwareSuite,
    () => RenderingEngine,
    4,
    0,
    () => Environment,
  ]
);
export var S3Etags = 64 | 0;

export var SourceConfigs = list(n0, _SCo, 0, () => SourceConfig);
export var Sources = list(n0, _So, 0, () => Source);
export var CreateRobotApplication = op(
  n0,
  _CRA,
  {
    [_h]: ["POST", "/createRobotApplication", 200],
  },
  () => CreateRobotApplicationRequest,
  () => CreateRobotApplicationResponse
);
export var CreateRobotApplicationVersion = op(
  n0,
  _CRAV,
  {
    [_h]: ["POST", "/createRobotApplicationVersion", 200],
  },
  () => CreateRobotApplicationVersionRequest,
  () => CreateRobotApplicationVersionResponse
);
export var CreateSimulationApplication = op(
  n0,
  _CSA,
  {
    [_h]: ["POST", "/createSimulationApplication", 200],
  },
  () => CreateSimulationApplicationRequest,
  () => CreateSimulationApplicationResponse
);
export var CreateSimulationApplicationVersion = op(
  n0,
  _CSAV,
  {
    [_h]: ["POST", "/createSimulationApplicationVersion", 200],
  },
  () => CreateSimulationApplicationVersionRequest,
  () => CreateSimulationApplicationVersionResponse
);
export var DescribeRobotApplication = op(
  n0,
  _DRAe,
  {
    [_h]: ["POST", "/describeRobotApplication", 200],
  },
  () => DescribeRobotApplicationRequest,
  () => DescribeRobotApplicationResponse
);
export var DescribeSimulationApplication = op(
  n0,
  _DSAe,
  {
    [_h]: ["POST", "/describeSimulationApplication", 200],
  },
  () => DescribeSimulationApplicationRequest,
  () => DescribeSimulationApplicationResponse
);
export var UpdateRobotApplication = op(
  n0,
  _URA,
  {
    [_h]: ["POST", "/updateRobotApplication", 200],
  },
  () => UpdateRobotApplicationRequest,
  () => UpdateRobotApplicationResponse
);
export var UpdateSimulationApplication = op(
  n0,
  _USA,
  {
    [_h]: ["POST", "/updateSimulationApplication", 200],
  },
  () => UpdateSimulationApplicationRequest,
  () => UpdateSimulationApplicationResponse
);
