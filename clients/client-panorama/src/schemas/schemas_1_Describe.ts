// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _AII,
  _AIITR,
  _CT,
  _D,
  _DAI,
  _DAID,
  _DAIDR,
  _DAIDRe,
  _DAIR,
  _DAIRe,
  _DRCD,
  _DRCDN,
  _DRS,
  _DRT,
  _DS,
  _h,
  _HS,
  _LUT,
  _MOP,
  _MP,
  _N,
  _RCN,
  _RCS,
  _RRA,
  _RRCS,
  _RRCSe,
  _S,
  _SD,
  _T,
  n0,
} from "./schemas_0";
import { ManifestOverridesPayload, ManifestPayload } from "./schemas_8_Application";

/* eslint no-var: 0 */

export var DescribeApplicationInstanceDetailsRequest = struct(n0, _DAIDR, 0, [_AII], [[0, 1]]);
export var DescribeApplicationInstanceDetailsResponse = struct(
  n0,
  _DAIDRe,
  0,
  [_N, _D, _DRCD, _MP, _MOP, _AIITR, _CT, _AII],
  [0, 0, 0, () => ManifestPayload, () => ManifestOverridesPayload, 0, 4, 0]
);
export var DescribeApplicationInstanceRequest = struct(n0, _DAIR, 0, [_AII], [[0, 1]]);
export var DescribeApplicationInstanceResponse = struct(
  n0,
  _DAIRe,
  0,
  [_N, _D, _DRCD, _DRCDN, _AIITR, _RRA, _S, _HS, _SD, _CT, _LUT, _AII, _A, _T, _RCS],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 128 | 0, () => ReportedRuntimeContextStates]
);
export var ReportedRuntimeContextState = struct(n0, _RRCS, 0, [_DS, _RCN, _DRS, _DRT], [0, 0, 0, 4]);
export var ReportedRuntimeContextStates = list(n0, _RRCSe, 0, () => ReportedRuntimeContextState);
export var DescribeApplicationInstance = op(
  n0,
  _DAI,
  {
    [_h]: ["GET", "/application-instances/{ApplicationInstanceId}", 200],
  },
  () => DescribeApplicationInstanceRequest,
  () => DescribeApplicationInstanceResponse
);
export var DescribeApplicationInstanceDetails = op(
  n0,
  _DAID,
  {
    [_h]: ["GET", "/application-instances/{ApplicationInstanceId}/details", 200],
  },
  () => DescribeApplicationInstanceDetailsRequest,
  () => DescribeApplicationInstanceDetailsResponse
);
