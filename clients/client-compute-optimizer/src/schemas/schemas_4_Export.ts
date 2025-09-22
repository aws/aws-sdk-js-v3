// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _aIc,
  _b,
  _EASGR,
  _EASGRR,
  _EASGRRx,
  _EEBSVR,
  _EEBSVRR,
  _EEBSVRRx,
  _EECIR,
  _EECIRR,
  _EECIRRx,
  _EECSSR,
  _EECSSRR,
  _EECSSRRx,
  _EIR,
  _EIRR,
  _EIRRx,
  _ELFR,
  _ELFRR,
  _ELFRRx,
  _ELR,
  _ELRR,
  _ELRRx,
  _ERDSDR,
  _ERDSDRR,
  _ERDSDRRx,
  _fF,
  _fi,
  _fTE,
  _iMA,
  _jIo,
  _k,
  _kP,
  _mK,
  _rP,
  _SD,
  _sD,
  _SDC,
  _sDC,
  n0,
} from "./schemas_0";
import { EBSFilters } from "./schemas_3_Recommendations";
import { ECSServiceRecommendationFilters } from "./schemas_5_Recommendations";
import { IdleRecommendationFilters } from "./schemas_7_Recommendations";
import { LicenseRecommendationFilters } from "./schemas_9_Recommendations";
import { LambdaFunctionRecommendationFilters } from "./schemas_12_Recommendations";
import { Filters, RDSDBRecommendationFilters, RecommendationPreferences } from "./schemas_13_Recommendations";

/* eslint no-var: 0 */

export var ExportAutoScalingGroupRecommendationsRequest = struct(
  n0,
  _EASGRR,
  0,
  [_aIc, _fi, _fTE, _sDC, _fF, _iMA, _rP],
  [64 | 0, () => Filters, 64 | 0, () => S3DestinationConfig, 0, 2, () => RecommendationPreferences]
);
export var ExportAutoScalingGroupRecommendationsResponse = struct(
  n0,
  _EASGRRx,
  0,
  [_jIo, _sD],
  [0, () => S3Destination]
);
export var ExportEBSVolumeRecommendationsRequest = struct(
  n0,
  _EEBSVRR,
  0,
  [_aIc, _fi, _fTE, _sDC, _fF, _iMA],
  [64 | 0, () => EBSFilters, 64 | 0, () => S3DestinationConfig, 0, 2]
);
export var ExportEBSVolumeRecommendationsResponse = struct(n0, _EEBSVRRx, 0, [_jIo, _sD], [0, () => S3Destination]);
export var ExportEC2InstanceRecommendationsRequest = struct(
  n0,
  _EECIRR,
  0,
  [_aIc, _fi, _fTE, _sDC, _fF, _iMA, _rP],
  [64 | 0, () => Filters, 64 | 0, () => S3DestinationConfig, 0, 2, () => RecommendationPreferences]
);
export var ExportEC2InstanceRecommendationsResponse = struct(n0, _EECIRRx, 0, [_jIo, _sD], [0, () => S3Destination]);
export var ExportECSServiceRecommendationsRequest = struct(
  n0,
  _EECSSRR,
  0,
  [_aIc, _fi, _fTE, _sDC, _fF, _iMA],
  [64 | 0, () => ECSServiceRecommendationFilters, 64 | 0, () => S3DestinationConfig, 0, 2]
);
export var ExportECSServiceRecommendationsResponse = struct(n0, _EECSSRRx, 0, [_jIo, _sD], [0, () => S3Destination]);
export var ExportIdleRecommendationsRequest = struct(
  n0,
  _EIRR,
  0,
  [_aIc, _fi, _fTE, _sDC, _fF, _iMA],
  [64 | 0, () => IdleRecommendationFilters, 64 | 0, () => S3DestinationConfig, 0, 2]
);
export var ExportIdleRecommendationsResponse = struct(n0, _EIRRx, 0, [_jIo, _sD], [0, () => S3Destination]);
export var ExportLambdaFunctionRecommendationsRequest = struct(
  n0,
  _ELFRR,
  0,
  [_aIc, _fi, _fTE, _sDC, _fF, _iMA],
  [64 | 0, () => LambdaFunctionRecommendationFilters, 64 | 0, () => S3DestinationConfig, 0, 2]
);
export var ExportLambdaFunctionRecommendationsResponse = struct(n0, _ELFRRx, 0, [_jIo, _sD], [0, () => S3Destination]);
export var ExportLicenseRecommendationsRequest = struct(
  n0,
  _ELRR,
  0,
  [_aIc, _fi, _fTE, _sDC, _fF, _iMA],
  [64 | 0, () => LicenseRecommendationFilters, 64 | 0, () => S3DestinationConfig, 0, 2]
);
export var ExportLicenseRecommendationsResponse = struct(n0, _ELRRx, 0, [_jIo, _sD], [0, () => S3Destination]);
export var ExportRDSDatabaseRecommendationsRequest = struct(
  n0,
  _ERDSDRR,
  0,
  [_aIc, _fi, _fTE, _sDC, _fF, _iMA, _rP],
  [64 | 0, () => RDSDBRecommendationFilters, 64 | 0, () => S3DestinationConfig, 0, 2, () => RecommendationPreferences]
);
export var ExportRDSDatabaseRecommendationsResponse = struct(n0, _ERDSDRRx, 0, [_jIo, _sD], [0, () => S3Destination]);
export var S3Destination = struct(n0, _SD, 0, [_b, _k, _mK], [0, 0, 0]);
export var S3DestinationConfig = struct(n0, _SDC, 0, [_b, _kP], [0, 0]);
export var ExportableAutoScalingGroupFields = 64 | 0;

export var ExportableECSServiceFields = 64 | 0;

export var ExportableIdleFields = 64 | 0;

export var ExportableInstanceFields = 64 | 0;

export var ExportableLambdaFunctionFields = 64 | 0;

export var ExportableLicenseFields = 64 | 0;

export var ExportableRDSDBFields = 64 | 0;

export var ExportableVolumeFields = 64 | 0;

export var ExportAutoScalingGroupRecommendations = op(
  n0,
  _EASGR,
  0,
  () => ExportAutoScalingGroupRecommendationsRequest,
  () => ExportAutoScalingGroupRecommendationsResponse
);
export var ExportEBSVolumeRecommendations = op(
  n0,
  _EEBSVR,
  0,
  () => ExportEBSVolumeRecommendationsRequest,
  () => ExportEBSVolumeRecommendationsResponse
);
export var ExportEC2InstanceRecommendations = op(
  n0,
  _EECIR,
  0,
  () => ExportEC2InstanceRecommendationsRequest,
  () => ExportEC2InstanceRecommendationsResponse
);
export var ExportECSServiceRecommendations = op(
  n0,
  _EECSSR,
  0,
  () => ExportECSServiceRecommendationsRequest,
  () => ExportECSServiceRecommendationsResponse
);
export var ExportIdleRecommendations = op(
  n0,
  _EIR,
  0,
  () => ExportIdleRecommendationsRequest,
  () => ExportIdleRecommendationsResponse
);
export var ExportLambdaFunctionRecommendations = op(
  n0,
  _ELFR,
  0,
  () => ExportLambdaFunctionRecommendationsRequest,
  () => ExportLambdaFunctionRecommendationsResponse
);
export var ExportLicenseRecommendations = op(
  n0,
  _ELR,
  0,
  () => ExportLicenseRecommendationsRequest,
  () => ExportLicenseRecommendationsResponse
);
export var ExportRDSDatabaseRecommendations = op(
  n0,
  _ERDSDR,
  0,
  () => ExportRDSDatabaseRecommendationsRequest,
  () => ExportRDSDatabaseRecommendationsResponse
);
