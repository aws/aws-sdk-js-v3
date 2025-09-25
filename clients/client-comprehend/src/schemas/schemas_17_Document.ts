// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DARA,
  _DCA,
  _DCJF,
  _DCJP,
  _DCJPL,
  _DDCJ,
  _DDCJR,
  _DDCJRe,
  _ET,
  _F,
  _FA,
  _IDC,
  _JA,
  _JI,
  _JN,
  _JS,
  _LDCJ,
  _LDCJR,
  _LDCJRi,
  _M,
  _MRa,
  _NT,
  _ODC,
  _STA,
  _STB,
  _STDC,
  _STDCR,
  _STDCRt,
  _STu,
  _VC,
  _VKKI,
  InputDataConfig,
  n0,
  OutputDataConfig,
  VpcConfig,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeDocumentClassificationJobRequest = struct(n0, _DDCJR, 0, [_JI], [0]);
export var DescribeDocumentClassificationJobResponse = struct(
  n0,
  _DDCJRe,
  0,
  [_DCJP],
  [() => DocumentClassificationJobProperties]
);
export var DocumentClassificationJobFilter = struct(n0, _DCJF, 0, [_JN, _JS, _STB, _STA], [0, 0, 4, 4]);
export var DocumentClassificationJobProperties = struct(
  n0,
  _DCJP,
  0,
  [_JI, _JA, _JN, _JS, _M, _STu, _ET, _DCA, _IDC, _ODC, _DARA, _VKKI, _VC, _FA],
  [0, 0, 0, 0, 0, 4, 4, 0, () => InputDataConfig, () => OutputDataConfig, 0, 0, () => VpcConfig, 0]
);
export var ListDocumentClassificationJobsRequest = struct(
  n0,
  _LDCJR,
  0,
  [_F, _NT, _MRa],
  [() => DocumentClassificationJobFilter, 0, 1]
);
export var ListDocumentClassificationJobsResponse = struct(
  n0,
  _LDCJRi,
  0,
  [_DCJPL, _NT],
  [() => DocumentClassificationJobPropertiesList, 0]
);
export var StopTrainingDocumentClassifierRequest = struct(n0, _STDCR, 0, [_DCA], [0]);
export var StopTrainingDocumentClassifierResponse = struct(n0, _STDCRt, 0, [], []);
export var DocumentClassificationJobPropertiesList = list(n0, _DCJPL, 0, () => DocumentClassificationJobProperties);
export var DescribeDocumentClassificationJob = op(
  n0,
  _DDCJ,
  0,
  () => DescribeDocumentClassificationJobRequest,
  () => DescribeDocumentClassificationJobResponse
);
export var ListDocumentClassificationJobs = op(
  n0,
  _LDCJ,
  0,
  () => ListDocumentClassificationJobsRequest,
  () => ListDocumentClassificationJobsResponse
);
export var StopTrainingDocumentClassifier = op(
  n0,
  _STDC,
  0,
  () => StopTrainingDocumentClassifierRequest,
  () => StopTrainingDocumentClassifierResponse
);
