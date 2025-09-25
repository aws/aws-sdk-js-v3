// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ADSU,
  _AM,
  _AN,
  _An,
  _CDC,
  _CDCR,
  _CDCRr,
  _CDr,
  _CDRr,
  _CDRre,
  _CERR,
  _CERre,
  _CERRr,
  _CRT,
  _CT,
  _CTA,
  _CTB,
  _D,
  _DA,
  _DAML,
  _DAMLI,
  _DARA,
  _DCA,
  _DCF,
  _DCIDC,
  _DCN,
  _DCPL,
  _DCS,
  _DCSL,
  _DD,
  _DDCIDC,
  _DDR,
  _DDRe,
  _DERA,
  _DERD,
  _DEREL,
  _DERIDC,
  _DF,
  _DFa,
  _DIDC,
  _DN,
  _Do,
  _DP,
  _DPL,
  _DSU,
  _DT,
  _DTa,
  _ELn,
  _ERA,
  _ERF,
  _ERIDC,
  _ERPL,
  _ERS,
  _ERSL,
  _ET,
  _F,
  _FA,
  _IDC,
  _IF,
  _LC,
  _LD,
  _LDC,
  _LDCR,
  _LDCRi,
  _LDCS,
  _LDCSR,
  _LDCSRi,
  _LDi,
  _LDR,
  _LDRi,
  _LERis,
  _LERR,
  _LERRi,
  _LERS,
  _LERSR,
  _LERSRi,
  _LVCA,
  _LVN,
  _LVS,
  _M,
  _MKKI,
  _Mo,
  _MPo,
  _MRa,
  _NOD,
  _NOV,
  _NT,
  _ODC,
  _RN,
  _SDSU,
  _St,
  _STA,
  _STB,
  _SU,
  _Ta,
  _VC,
  _VKKI,
  _VN,
  n0,
  TagList,
  VpcConfig,
} from "./schemas_0";
import {
  DocumentClassifierInputDataConfig,
  DocumentClassifierOutputDataConfig,
  DocumentClassifierProperties,
  EntityRecognizerInputDataConfig,
  EntityRecognizerProperties,
} from "./schemas_1_Entity";

/* eslint no-var: 0 */

export var CreateDatasetRequest = struct(
  n0,
  _CDRr,
  0,
  [_FA, _DN, _DTa, _D, _IDC, _CRT, _Ta],
  [0, 0, 0, 0, () => DatasetInputDataConfig, [0, 4], () => TagList]
);
export var CreateDatasetResponse = struct(n0, _CDRre, 0, [_DA], [0]);
export var CreateDocumentClassifierRequest = struct(
  n0,
  _CDCR,
  0,
  [_DCN, _VN, _DARA, _Ta, _IDC, _ODC, _CRT, _LC, _VKKI, _VC, _Mo, _MKKI, _MPo],
  [
    0,
    0,
    0,
    () => TagList,
    () => DocumentClassifierInputDataConfig,
    () => DocumentClassifierOutputDataConfig,
    [0, 4],
    0,
    0,
    () => VpcConfig,
    0,
    0,
    0,
  ]
);
export var CreateDocumentClassifierResponse = struct(n0, _CDCRr, 0, [_DCA], [0]);
export var CreateEntityRecognizerRequest = struct(
  n0,
  _CERR,
  0,
  [_RN, _VN, _DARA, _Ta, _IDC, _CRT, _LC, _VKKI, _VC, _MKKI, _MPo],
  [0, 0, 0, () => TagList, () => EntityRecognizerInputDataConfig, [0, 4], 0, 0, () => VpcConfig, 0, 0]
);
export var CreateEntityRecognizerResponse = struct(n0, _CERRr, 0, [_ERA], [0]);
export var DatasetAugmentedManifestsListItem = struct(
  n0,
  _DAMLI,
  0,
  [_AN, _SU, _ADSU, _SDSU, _DT],
  [64 | 0, 0, 0, 0, 0]
);
export var DatasetDocumentClassifierInputDataConfig = struct(n0, _DDCIDC, 0, [_SU, _LD], [0, 0]);
export var DatasetEntityRecognizerAnnotations = struct(n0, _DERA, 0, [_SU], [0]);
export var DatasetEntityRecognizerDocuments = struct(n0, _DERD, 0, [_SU, _IF], [0, 0]);
export var DatasetEntityRecognizerEntityList = struct(n0, _DEREL, 0, [_SU], [0]);
export var DatasetEntityRecognizerInputDataConfig = struct(
  n0,
  _DERIDC,
  0,
  [_An, _Do, _ELn],
  [
    () => DatasetEntityRecognizerAnnotations,
    () => DatasetEntityRecognizerDocuments,
    () => DatasetEntityRecognizerEntityList,
  ]
);
export var DatasetFilter = struct(n0, _DF, 0, [_St, _DTa, _CTA, _CTB], [0, 0, 4, 4]);
export var DatasetInputDataConfig = struct(
  n0,
  _DIDC,
  0,
  [_AM, _DFa, _DCIDC, _ERIDC],
  [
    () => DatasetAugmentedManifestsList,
    0,
    () => DatasetDocumentClassifierInputDataConfig,
    () => DatasetEntityRecognizerInputDataConfig,
  ]
);
export var DatasetProperties = struct(
  n0,
  _DP,
  0,
  [_DA, _DN, _DTa, _DSU, _D, _St, _M, _NOD, _CT, _ET],
  [0, 0, 0, 0, 0, 0, 0, 1, 4, 4]
);
export var DescribeDatasetRequest = struct(n0, _DDR, 0, [_DA], [0]);
export var DescribeDatasetResponse = struct(n0, _DDRe, 0, [_DP], [() => DatasetProperties]);
export var DocumentClassifierFilter = struct(n0, _DCF, 0, [_St, _DCN, _STB, _STA], [0, 0, 4, 4]);
export var DocumentClassifierSummary = struct(n0, _DCS, 0, [_DCN, _NOV, _LVCA, _LVN, _LVS], [0, 1, 4, 0, 0]);
export var EntityRecognizerFilter = struct(n0, _ERF, 0, [_St, _RN, _STB, _STA], [0, 0, 4, 4]);
export var EntityRecognizerSummary = struct(n0, _ERS, 0, [_RN, _NOV, _LVCA, _LVN, _LVS], [0, 1, 4, 0, 0]);
export var ListDatasetsRequest = struct(n0, _LDR, 0, [_FA, _F, _NT, _MRa], [0, () => DatasetFilter, 0, 1]);
export var ListDatasetsResponse = struct(n0, _LDRi, 0, [_DPL, _NT], [() => DatasetPropertiesList, 0]);
export var ListDocumentClassifiersRequest = struct(
  n0,
  _LDCR,
  0,
  [_F, _NT, _MRa],
  [() => DocumentClassifierFilter, 0, 1]
);
export var ListDocumentClassifiersResponse = struct(
  n0,
  _LDCRi,
  0,
  [_DCPL, _NT],
  [[() => DocumentClassifierPropertiesList, 0], 0]
);
export var ListDocumentClassifierSummariesRequest = struct(n0, _LDCSR, 0, [_NT, _MRa], [0, 1]);
export var ListDocumentClassifierSummariesResponse = struct(
  n0,
  _LDCSRi,
  0,
  [_DCSL, _NT],
  [() => DocumentClassifierSummariesList, 0]
);
export var ListEntityRecognizersRequest = struct(n0, _LERR, 0, [_F, _NT, _MRa], [() => EntityRecognizerFilter, 0, 1]);
export var ListEntityRecognizersResponse = struct(
  n0,
  _LERRi,
  0,
  [_ERPL, _NT],
  [[() => EntityRecognizerPropertiesList, 0], 0]
);
export var ListEntityRecognizerSummariesRequest = struct(n0, _LERSR, 0, [_NT, _MRa], [0, 1]);
export var ListEntityRecognizerSummariesResponse = struct(
  n0,
  _LERSRi,
  0,
  [_ERSL, _NT],
  [() => EntityRecognizerSummariesList, 0]
);
export var DatasetAugmentedManifestsList = list(n0, _DAML, 0, () => DatasetAugmentedManifestsListItem);
export var DatasetPropertiesList = list(n0, _DPL, 0, () => DatasetProperties);
export var DocumentClassifierPropertiesList = list(n0, _DCPL, 0, [() => DocumentClassifierProperties, 0]);
export var DocumentClassifierSummariesList = list(n0, _DCSL, 0, () => DocumentClassifierSummary);
export var EntityRecognizerPropertiesList = list(n0, _ERPL, 0, [() => EntityRecognizerProperties, 0]);
export var EntityRecognizerSummariesList = list(n0, _ERSL, 0, () => EntityRecognizerSummary);
export var CreateDataset = op(
  n0,
  _CDr,
  0,
  () => CreateDatasetRequest,
  () => CreateDatasetResponse
);
export var CreateDocumentClassifier = op(
  n0,
  _CDC,
  0,
  () => CreateDocumentClassifierRequest,
  () => CreateDocumentClassifierResponse
);
export var CreateEntityRecognizer = op(
  n0,
  _CERre,
  0,
  () => CreateEntityRecognizerRequest,
  () => CreateEntityRecognizerResponse
);
export var DescribeDataset = op(
  n0,
  _DD,
  0,
  () => DescribeDatasetRequest,
  () => DescribeDatasetResponse
);
export var ListDatasets = op(
  n0,
  _LDi,
  0,
  () => ListDatasetsRequest,
  () => ListDatasetsResponse
);
export var ListDocumentClassifiers = op(
  n0,
  _LDC,
  0,
  () => ListDocumentClassifiersRequest,
  () => ListDocumentClassifiersResponse
);
export var ListDocumentClassifierSummaries = op(
  n0,
  _LDCS,
  0,
  () => ListDocumentClassifierSummariesRequest,
  () => ListDocumentClassifierSummariesResponse
);
export var ListEntityRecognizers = op(
  n0,
  _LERis,
  0,
  () => ListEntityRecognizersRequest,
  () => ListEntityRecognizersResponse
);
export var ListEntityRecognizerSummaries = op(
  n0,
  _LERS,
  0,
  () => ListEntityRecognizerSummariesRequest,
  () => ListEntityRecognizerSummariesResponse
);
