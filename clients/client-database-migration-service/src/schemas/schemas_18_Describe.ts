// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _DED,
  _dED,
  _DEPA,
  _DEPAM,
  _DEPAR,
  _DMMA,
  _DMMAM,
  _DMMAR,
  _DMMC,
  _DMMCM,
  _DMMCR,
  _DMMEAS,
  _DMMEASM,
  _DMMEASR,
  _DMMETT,
  _DMMETTM,
  _DMMETTR,
  _DMMI,
  _DMMIM,
  _DMMIR,
  _ED,
  _Er,
  _ESD,
  _F,
  _Ma,
  _Me,
  _MPA,
  _MPI,
  _MR,
  _OURL,
  _R,
  _RIeq,
  _S,
  _SCR,
  _SCRL,
  _SOK,
  FilterList,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DefaultErrorDetails = struct(n0, _DED, 0, [_Me], [0]);
export var DescribeExtensionPackAssociationsMessage = struct(
  n0,
  _DEPAM,
  0,
  [_MPI, _F, _Ma, _MR],
  [0, [() => FilterList, 0], 0, 1]
);
export var DescribeExtensionPackAssociationsResponse = struct(
  n0,
  _DEPAR,
  0,
  [_Ma, _R],
  [0, () => SchemaConversionRequestList]
);
export var DescribeMetadataModelAssessmentsMessage = struct(
  n0,
  _DMMAM,
  0,
  [_MPI, _F, _Ma, _MR],
  [0, [() => FilterList, 0], 0, 1]
);
export var DescribeMetadataModelAssessmentsResponse = struct(
  n0,
  _DMMAR,
  0,
  [_Ma, _R],
  [0, () => SchemaConversionRequestList]
);
export var DescribeMetadataModelConversionsMessage = struct(
  n0,
  _DMMCM,
  0,
  [_MPI, _F, _Ma, _MR],
  [0, [() => FilterList, 0], 0, 1]
);
export var DescribeMetadataModelConversionsResponse = struct(
  n0,
  _DMMCR,
  0,
  [_Ma, _R],
  [0, () => SchemaConversionRequestList]
);
export var DescribeMetadataModelExportsAsScriptMessage = struct(
  n0,
  _DMMEASM,
  0,
  [_MPI, _F, _Ma, _MR],
  [0, [() => FilterList, 0], 0, 1]
);
export var DescribeMetadataModelExportsAsScriptResponse = struct(
  n0,
  _DMMEASR,
  0,
  [_Ma, _R],
  [0, () => SchemaConversionRequestList]
);
export var DescribeMetadataModelExportsToTargetMessage = struct(
  n0,
  _DMMETTM,
  0,
  [_MPI, _F, _Ma, _MR],
  [0, [() => FilterList, 0], 0, 1]
);
export var DescribeMetadataModelExportsToTargetResponse = struct(
  n0,
  _DMMETTR,
  0,
  [_Ma, _R],
  [0, () => SchemaConversionRequestList]
);
export var DescribeMetadataModelImportsMessage = struct(
  n0,
  _DMMIM,
  0,
  [_MPI, _F, _Ma, _MR],
  [0, [() => FilterList, 0], 0, 1]
);
export var DescribeMetadataModelImportsResponse = struct(
  n0,
  _DMMIR,
  0,
  [_Ma, _R],
  [0, () => SchemaConversionRequestList]
);
export var ExportSqlDetails = struct(n0, _ESD, 0, [_SOK, _OURL], [0, 0]);
export var SchemaConversionRequest = struct(
  n0,
  _SCR,
  0,
  [_S, _RIeq, _MPA, _Er, _ESD],
  [0, 0, 0, () => ErrorDetails, () => ExportSqlDetails]
);
export var SchemaConversionRequestList = list(n0, _SCRL, 0, () => SchemaConversionRequest);
export var ErrorDetails = uni(n0, _ED, 0, [_dED], [() => DefaultErrorDetails]);
export var DescribeExtensionPackAssociations = op(
  n0,
  _DEPA,
  0,
  () => DescribeExtensionPackAssociationsMessage,
  () => DescribeExtensionPackAssociationsResponse
);
export var DescribeMetadataModelAssessments = op(
  n0,
  _DMMA,
  0,
  () => DescribeMetadataModelAssessmentsMessage,
  () => DescribeMetadataModelAssessmentsResponse
);
export var DescribeMetadataModelConversions = op(
  n0,
  _DMMC,
  0,
  () => DescribeMetadataModelConversionsMessage,
  () => DescribeMetadataModelConversionsResponse
);
export var DescribeMetadataModelExportsAsScript = op(
  n0,
  _DMMEAS,
  0,
  () => DescribeMetadataModelExportsAsScriptMessage,
  () => DescribeMetadataModelExportsAsScriptResponse
);
export var DescribeMetadataModelExportsToTarget = op(
  n0,
  _DMMETT,
  0,
  () => DescribeMetadataModelExportsToTargetMessage,
  () => DescribeMetadataModelExportsToTargetResponse
);
export var DescribeMetadataModelImports = op(
  n0,
  _DMMI,
  0,
  () => DescribeMetadataModelImportsMessage,
  () => DescribeMetadataModelImportsResponse
);
