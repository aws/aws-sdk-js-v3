// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  MaxNumberOfRetentionConfigurationsExceededException as __MaxNumberOfRetentionConfigurationsExceededException,
  NoSuchRetentionConfigurationException as __NoSuchRetentionConfigurationException,
} from "../models/index";
import {
  _cl,
  _DRCel,
  _DRCesc,
  _DRCRele,
  _DRCRescr,
  _DRCRescri,
  _e,
  _m,
  _MNORCEE,
  _N,
  _NSRCEo,
  _NT,
  _PRCRute,
  _PRCRutet,
  _PRCut,
  _RCe,
  _RCet,
  _RCL,
  _RCN,
  _RCNe,
  _RPID,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteRetentionConfigurationRequest = struct(n0, _DRCRele, 0, [_RCN], [0]);
export var DescribeRetentionConfigurationsRequest = struct(n0, _DRCRescr, 0, [_RCNe, _NT], [64 | 0, 0]);
export var DescribeRetentionConfigurationsResponse = struct(
  n0,
  _DRCRescri,
  0,
  [_RCe, _NT],
  [() => RetentionConfigurationList, 0]
);
export var MaxNumberOfRetentionConfigurationsExceededException = error(
  n0,
  _MNORCEE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __MaxNumberOfRetentionConfigurationsExceededException
);
export var NoSuchRetentionConfigurationException = error(
  n0,
  _NSRCEo,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __NoSuchRetentionConfigurationException
);
export var PutRetentionConfigurationRequest = struct(n0, _PRCRute, 0, [_RPID], [1]);
export var PutRetentionConfigurationResponse = struct(n0, _PRCRutet, 0, [_RCet], [() => RetentionConfiguration]);
export var RetentionConfiguration = struct(n0, _RCet, 0, [_N, _RPID], [0, 1]);
export var RetentionConfigurationList = list(n0, _RCL, 0, () => RetentionConfiguration);
export var RetentionConfigurationNameList = 64 | 0;

export var DeleteRetentionConfiguration = op(
  n0,
  _DRCel,
  0,
  () => DeleteRetentionConfigurationRequest,
  () => Unit
);
export var DescribeRetentionConfigurations = op(
  n0,
  _DRCesc,
  0,
  () => DescribeRetentionConfigurationsRequest,
  () => DescribeRetentionConfigurationsResponse
);
export var PutRetentionConfiguration = op(
  n0,
  _PRCut,
  0,
  () => PutRetentionConfigurationRequest,
  () => PutRetentionConfigurationResponse
);
