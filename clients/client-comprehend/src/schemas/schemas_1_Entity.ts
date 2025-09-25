// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _ADSU,
  _AM,
  _AMLI,
  _AN,
  _An,
  _CEM,
  _CM,
  _DARA,
  _DCA,
  _DCAML,
  _DCD,
  _DCIDC,
  _DCODC,
  _DCP,
  _DDCe,
  _DDCRes,
  _DDCResc,
  _DERescr,
  _DERRes,
  _DERResc,
  _DFa,
  _Do,
  _DRC,
  _DT,
  _ELn,
  _EMv,
  _ERA,
  _ERAML,
  _ERAn,
  _ERD,
  _EREL,
  _EREM,
  _ERIDC,
  _ERM,
  _ERMETL,
  _ERMETLI,
  _ERODC,
  _ERP,
  _ET,
  _ETEM,
  _ETn,
  _FA,
  _FS,
  _FSSP,
  _HL,
  _IDC,
  _IF,
  _KKI,
  _LC,
  _LD,
  _M,
  _MFS,
  _MKKI,
  _Mo,
  _MP,
  _MR,
  _NOL,
  _NOTD,
  _NOTDu,
  _NOTM,
  _ODC,
  _Pr,
  _Re,
  _RM,
  _S,
  _SDSU,
  _SMA,
  _St,
  _STu,
  _SU,
  _TET,
  _TST,
  _TSU,
  _Ty,
  _VC,
  _VKKI,
  _VN,
  DocumentReaderConfig,
  n0,
  VpcConfig,
} from "./schemas_0";
import { EntityTypesList } from "./schemas_18_Entity";

/* eslint no-var: 0 */

export var AugmentedManifestsListItem = struct(
  n0,
  _AMLI,
  0,
  [_SU, _S, _AN, _ADSU, _SDSU, _DT],
  [0, 0, 64 | 0, 0, 0, 0]
);
export var ClassifierEvaluationMetrics = struct(
  n0,
  _CEM,
  0,
  [_A, _Pr, _Re, _FS, _MP, _MR, _MFS, _HL],
  [1, 1, 1, 1, 1, 1, 1, 1]
);
export var ClassifierMetadata = struct(
  n0,
  _CM,
  8,
  [_NOL, _NOTD, _NOTDu, _EMv],
  [1, 1, 1, () => ClassifierEvaluationMetrics]
);
export var DescribeDocumentClassifierRequest = struct(n0, _DDCRes, 0, [_DCA], [0]);
export var DescribeDocumentClassifierResponse = struct(
  n0,
  _DDCResc,
  0,
  [_DCP],
  [[() => DocumentClassifierProperties, 0]]
);
export var DescribeEntityRecognizerRequest = struct(n0, _DERRes, 0, [_ERA], [0]);
export var DescribeEntityRecognizerResponse = struct(n0, _DERResc, 0, [_ERP], [[() => EntityRecognizerProperties, 0]]);
export var DocumentClassifierDocuments = struct(n0, _DCD, 0, [_SU, _TSU], [0, 0]);
export var DocumentClassifierInputDataConfig = struct(
  n0,
  _DCIDC,
  0,
  [_DFa, _SU, _TSU, _LD, _AM, _DT, _Do, _DRC],
  [
    0,
    0,
    0,
    0,
    () => DocumentClassifierAugmentedManifestsList,
    0,
    () => DocumentClassifierDocuments,
    () => DocumentReaderConfig,
  ]
);
export var DocumentClassifierOutputDataConfig = struct(n0, _DCODC, 0, [_SU, _KKI, _FSSP], [0, 0, 0]);
export var DocumentClassifierProperties = struct(
  n0,
  _DCP,
  0,
  [_DCA, _LC, _St, _M, _STu, _ET, _TST, _TET, _IDC, _ODC, _CM, _DARA, _VKKI, _VC, _Mo, _MKKI, _VN, _SMA, _FA],
  [
    0,
    0,
    0,
    0,
    4,
    4,
    4,
    4,
    () => DocumentClassifierInputDataConfig,
    () => DocumentClassifierOutputDataConfig,
    [() => ClassifierMetadata, 0],
    0,
    0,
    () => VpcConfig,
    0,
    0,
    0,
    0,
    0,
  ]
);
export var EntityRecognizerAnnotations = struct(n0, _ERAn, 0, [_SU, _TSU], [0, 0]);
export var EntityRecognizerDocuments = struct(n0, _ERD, 0, [_SU, _TSU, _IF], [0, 0, 0]);
export var EntityRecognizerEntityList = struct(n0, _EREL, 0, [_SU], [0]);
export var EntityRecognizerEvaluationMetrics = struct(n0, _EREM, 0, [_Pr, _Re, _FS], [1, 1, 1]);
export var EntityRecognizerInputDataConfig = struct(
  n0,
  _ERIDC,
  0,
  [_DFa, _ETn, _Do, _An, _ELn, _AM],
  [
    0,
    () => EntityTypesList,
    () => EntityRecognizerDocuments,
    () => EntityRecognizerAnnotations,
    () => EntityRecognizerEntityList,
    () => EntityRecognizerAugmentedManifestsList,
  ]
);
export var EntityRecognizerMetadata = struct(
  n0,
  _ERM,
  8,
  [_NOTD, _NOTDu, _EMv, _ETn],
  [1, 1, () => EntityRecognizerEvaluationMetrics, () => EntityRecognizerMetadataEntityTypesList]
);
export var EntityRecognizerMetadataEntityTypesListItem = struct(
  n0,
  _ERMETLI,
  0,
  [_Ty, _EMv, _NOTM],
  [0, () => EntityTypesEvaluationMetrics, 1]
);
export var EntityRecognizerOutputDataConfig = struct(n0, _ERODC, 0, [_FSSP], [0]);
export var EntityRecognizerProperties = struct(
  n0,
  _ERP,
  0,
  [_ERA, _LC, _St, _M, _STu, _ET, _TST, _TET, _IDC, _RM, _DARA, _VKKI, _VC, _MKKI, _VN, _SMA, _FA, _ODC],
  [
    0,
    0,
    0,
    0,
    4,
    4,
    4,
    4,
    () => EntityRecognizerInputDataConfig,
    [() => EntityRecognizerMetadata, 0],
    0,
    0,
    () => VpcConfig,
    0,
    0,
    0,
    0,
    () => EntityRecognizerOutputDataConfig,
  ]
);
export var EntityTypesEvaluationMetrics = struct(n0, _ETEM, 0, [_Pr, _Re, _FS], [1, 1, 1]);
export var DocumentClassifierAugmentedManifestsList = list(n0, _DCAML, 0, () => AugmentedManifestsListItem);
export var EntityRecognizerAugmentedManifestsList = list(n0, _ERAML, 0, () => AugmentedManifestsListItem);
export var EntityRecognizerMetadataEntityTypesList = list(
  n0,
  _ERMETL,
  0,
  () => EntityRecognizerMetadataEntityTypesListItem
);
export var DescribeDocumentClassifier = op(
  n0,
  _DDCe,
  0,
  () => DescribeDocumentClassifierRequest,
  () => DescribeDocumentClassifierResponse
);
export var DescribeEntityRecognizer = op(
  n0,
  _DERescr,
  0,
  () => DescribeEntityRecognizerRequest,
  () => DescribeEntityRecognizerResponse
);
