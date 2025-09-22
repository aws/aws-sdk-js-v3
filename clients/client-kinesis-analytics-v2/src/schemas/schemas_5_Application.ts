// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AACWLO,
  _AACWLOR,
  _AACWLORd,
  _AARN,
  _AAVC,
  _AAVCR,
  _AAVCRd,
  _AN,
  _AVI,
  _CAVI,
  _CT,
  _CWLO,
  _CWLOD,
  _CWLOI,
  _DACWLO,
  _DACWLOR,
  _DACWLORe,
  _DAVC,
  _DAVCR,
  _DAVCRe,
  _F,
  _OI,
  _SARto,
  _SARtop,
  _SAt,
  _VC,
  _VCD,
  _VCI,
  n0,
} from "./schemas_0";
import {
  CloudWatchLoggingOption,
  CloudWatchLoggingOptionDescriptions,
  VpcConfiguration,
  VpcConfigurationDescription,
} from "./schemas_6_Application";

/* eslint no-var: 0 */

export var AddApplicationCloudWatchLoggingOptionRequest = struct(
  n0,
  _AACWLOR,
  0,
  [_AN, _CAVI, _CWLO, _CT],
  [0, 1, () => CloudWatchLoggingOption, 0]
);
export var AddApplicationCloudWatchLoggingOptionResponse = struct(
  n0,
  _AACWLORd,
  0,
  [_AARN, _AVI, _CWLOD, _OI],
  [0, 1, () => CloudWatchLoggingOptionDescriptions, 0]
);
export var AddApplicationVpcConfigurationRequest = struct(
  n0,
  _AAVCR,
  0,
  [_AN, _CAVI, _VC, _CT],
  [0, 1, () => VpcConfiguration, 0]
);
export var AddApplicationVpcConfigurationResponse = struct(
  n0,
  _AAVCRd,
  0,
  [_AARN, _AVI, _VCD, _OI],
  [0, 1, () => VpcConfigurationDescription, 0]
);
export var DeleteApplicationCloudWatchLoggingOptionRequest = struct(
  n0,
  _DACWLOR,
  0,
  [_AN, _CAVI, _CWLOI, _CT],
  [0, 1, 0, 0]
);
export var DeleteApplicationCloudWatchLoggingOptionResponse = struct(
  n0,
  _DACWLORe,
  0,
  [_AARN, _AVI, _CWLOD, _OI],
  [0, 1, () => CloudWatchLoggingOptionDescriptions, 0]
);
export var DeleteApplicationVpcConfigurationRequest = struct(n0, _DAVCR, 0, [_AN, _CAVI, _VCI, _CT], [0, 1, 0, 0]);
export var DeleteApplicationVpcConfigurationResponse = struct(n0, _DAVCRe, 0, [_AARN, _AVI, _OI], [0, 1, 0]);
export var StopApplicationRequest = struct(n0, _SARto, 0, [_AN, _F], [0, 2]);
export var StopApplicationResponse = struct(n0, _SARtop, 0, [_OI], [0]);
export var AddApplicationCloudWatchLoggingOption = op(
  n0,
  _AACWLO,
  0,
  () => AddApplicationCloudWatchLoggingOptionRequest,
  () => AddApplicationCloudWatchLoggingOptionResponse
);
export var AddApplicationVpcConfiguration = op(
  n0,
  _AAVC,
  0,
  () => AddApplicationVpcConfigurationRequest,
  () => AddApplicationVpcConfigurationResponse
);
export var DeleteApplicationCloudWatchLoggingOption = op(
  n0,
  _DACWLO,
  0,
  () => DeleteApplicationCloudWatchLoggingOptionRequest,
  () => DeleteApplicationCloudWatchLoggingOptionResponse
);
export var DeleteApplicationVpcConfiguration = op(
  n0,
  _DAVC,
  0,
  () => DeleteApplicationVpcConfigurationRequest,
  () => DeleteApplicationVpcConfigurationResponse
);
export var StopApplication = op(
  n0,
  _SAt,
  0,
  () => StopApplicationRequest,
  () => StopApplicationResponse
);
