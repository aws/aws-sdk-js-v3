// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _ADA,
  _ADMS,
  _ADSSC,
  _AV,
  _B,
  _BS,
  _C,
  _CFD,
  _CH,
  _Co,
  _D,
  _DCFD,
  _DF,
  _DFFD,
  _DJFD,
  _DMS,
  _DMSC,
  _DMSCe,
  _DMSCR,
  _DMSCRe,
  _DSSC,
  _FC,
  _FFD,
  _h,
  _HDPL,
  _HL,
  _JFD,
  _M,
  _MS,
  _MSF,
  _N,
  _NS,
  _O,
  _QS,
  _S_,
  _SS,
  _SSC,
  _TPL,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AttributeValue = struct(n0, _AV, 0, [_S_, _N, _B, _SS, _NS, _BS], [0, 0, 0, 64 | 0, 64 | 0, 64 | 0]);
export var AutoDetectionMetricSource = struct(n0, _ADMS, 0, [_SSC], [() => AutoDetectionS3SourceConfig]);
export var AutoDetectionS3SourceConfig = struct(n0, _ADSSC, 0, [_TPL, _HDPL], [64 | 0, 64 | 0]);
export var DetectedCsvFormatDescriptor = struct(
  n0,
  _DCFD,
  0,
  [_FC, _C, _CH, _D, _HL, _QS],
  [
    () => DetectedField,
    () => DetectedField,
    () => DetectedField,
    () => DetectedField,
    () => DetectedField,
    () => DetectedField,
  ]
);
export var DetectedField = struct(n0, _DF, 0, [_V, _Co, _M], [() => AttributeValue, 0, 0]);
export var DetectedFileFormatDescriptor = struct(
  n0,
  _DFFD,
  0,
  [_CFD, _JFD],
  [() => DetectedCsvFormatDescriptor, () => DetectedJsonFormatDescriptor]
);
export var DetectedJsonFormatDescriptor = struct(n0, _DJFD, 0, [_FC, _C], [() => DetectedField, () => DetectedField]);
export var DetectedMetricSetConfig = struct(
  n0,
  _DMSC,
  0,
  [_O, _MSF, _MS],
  [() => DetectedField, () => DetectedField, () => DetectedMetricSource]
);
export var DetectedMetricSource = struct(n0, _DMS, 0, [_SSC], [() => DetectedS3SourceConfig]);
export var DetectedS3SourceConfig = struct(n0, _DSSC, 0, [_FFD], [() => DetectedFileFormatDescriptor]);
export var DetectMetricSetConfigRequest = struct(n0, _DMSCR, 0, [_ADA, _ADMS], [0, () => AutoDetectionMetricSource]);
export var DetectMetricSetConfigResponse = struct(n0, _DMSCRe, 0, [_DMSC], [() => DetectedMetricSetConfig]);
export var BinaryListAttributeValue = 64 | 0;

export var HistoricalDataPathList = 64 | 0;

export var NumberListAttributeValue = 64 | 0;

export var StringListAttributeValue = 64 | 0;

export var TemplatedPathList = 64 | 0;

export var DetectMetricSetConfig = op(
  n0,
  _DMSCe,
  {
    [_h]: ["POST", "/DetectMetricSetConfig", 200],
  },
  () => DetectMetricSetConfigRequest,
  () => DetectMetricSetConfigResponse
);
