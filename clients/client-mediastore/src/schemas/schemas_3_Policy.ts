// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { PolicyNotFoundException as __PolicyNotFoundException } from "../models/index";
import {
  _c,
  _CN,
  _DCP,
  _DCPI,
  _DCPO,
  _DLP,
  _DLPI,
  _DLPO,
  _DMP,
  _DMPI,
  _DMPO,
  _e,
  _GCP,
  _GCPI,
  _GCPO,
  _GLP,
  _GLPI,
  _GLPO,
  _LP,
  _M,
  _P,
  _PNFE,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteContainerPolicyInput = struct(n0, _DCPI, 0, [_CN], [0]);
export var DeleteContainerPolicyOutput = struct(n0, _DCPO, 0, [], []);
export var DeleteLifecyclePolicyInput = struct(n0, _DLPI, 0, [_CN], [0]);
export var DeleteLifecyclePolicyOutput = struct(n0, _DLPO, 0, [], []);
export var DeleteMetricPolicyInput = struct(n0, _DMPI, 0, [_CN], [0]);
export var DeleteMetricPolicyOutput = struct(n0, _DMPO, 0, [], []);
export var GetContainerPolicyInput = struct(n0, _GCPI, 0, [_CN], [0]);
export var GetContainerPolicyOutput = struct(n0, _GCPO, 0, [_P], [0]);
export var GetLifecyclePolicyInput = struct(n0, _GLPI, 0, [_CN], [0]);
export var GetLifecyclePolicyOutput = struct(n0, _GLPO, 0, [_LP], [0]);
export var PolicyNotFoundException = error(
  n0,
  _PNFE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __PolicyNotFoundException
);
export var DeleteContainerPolicy = op(
  n0,
  _DCP,
  0,
  () => DeleteContainerPolicyInput,
  () => DeleteContainerPolicyOutput
);
export var DeleteLifecyclePolicy = op(
  n0,
  _DLP,
  0,
  () => DeleteLifecyclePolicyInput,
  () => DeleteLifecyclePolicyOutput
);
export var DeleteMetricPolicy = op(
  n0,
  _DMP,
  0,
  () => DeleteMetricPolicyInput,
  () => DeleteMetricPolicyOutput
);
export var GetContainerPolicy = op(
  n0,
  _GCP,
  0,
  () => GetContainerPolicyInput,
  () => GetContainerPolicyOutput
);
export var GetLifecyclePolicy = op(
  n0,
  _GLP,
  0,
  () => GetLifecyclePolicyInput,
  () => GetLifecyclePolicyOutput
);
