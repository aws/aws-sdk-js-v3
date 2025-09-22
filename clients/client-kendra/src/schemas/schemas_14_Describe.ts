// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _CIR,
  _CIre,
  _CIRr,
  _CR,
  _CTli,
  _CTr,
  _De,
  _DFRS,
  _DFRSR,
  _DFRSRe,
  _Du,
  _Ed,
  _FDM,
  _FDMe,
  _FDML,
  _FDWM,
  _FDWMe,
  _FDWML,
  _Fr,
  _FRSIe,
  _FRSN,
  _GAF,
  _I,
  _II,
  _Im,
  _Is,
  _JTTC,
  _JTTCw,
  _KKI,
  _KL,
  _LUT,
  _N,
  _QTu,
  _R,
  _RA,
  _RO,
  _SMA,
  _SSEC,
  _St,
  _Ta,
  _Ti,
  _UCP,
  _UGRC,
  _UGRM,
  _UNAF,
  _URI,
  _URL,
  _UTC,
  _UTCL,
  _UTCs,
  _VIM,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_10_Create";

/* eslint no-var: 0 */

export var KmsKeyId = sim(n0, _KKI, 0, 8);
export var CreateIndexRequest = struct(
  n0,
  _CIR,
  0,
  [_N, _Ed, _RA, _SSEC, _De, _CTli, _Ta, _UTC, _UCP, _UGRC],
  [
    0,
    0,
    0,
    [() => ServerSideEncryptionConfiguration, 0],
    0,
    [0, 4],
    () => TagList,
    () => UserTokenConfigurationList,
    0,
    () => UserGroupResolutionConfiguration,
  ]
);
export var CreateIndexResponse = struct(n0, _CIRr, 0, [_I], [0]);
export var DescribeFeaturedResultsSetRequest = struct(n0, _DFRSR, 0, [_II, _FRSIe], [0, 0]);
export var DescribeFeaturedResultsSetResponse = struct(
  n0,
  _DFRSRe,
  0,
  [_FRSIe, _FRSN, _De, _St, _QTu, _FDWM, _FDM, _LUT, _CTr],
  [0, 0, 0, 0, 64 | 0, () => FeaturedDocumentWithMetadataList, () => FeaturedDocumentMissingList, 1, 1]
);
export var FeaturedDocumentMissing = struct(n0, _FDMe, 0, [_I], [0]);
export var FeaturedDocumentWithMetadata = struct(n0, _FDWMe, 0, [_I, _Ti, _URI], [0, 0, 0]);
export var JsonTokenTypeConfiguration = struct(n0, _JTTC, 0, [_UNAF, _GAF], [0, 0]);
export var JwtTokenTypeConfiguration = struct(
  n0,
  _JTTCw,
  0,
  [_KL, _URL, _SMA, _UNAF, _GAF, _Is, _CR],
  [0, 0, 0, 0, 0, 0, 0]
);
export var Relevance = struct(n0, _R, 0, [_Fr, _Im, _Du, _RO, _VIM], [2, 1, 0, 0, 128 | 1]);
export var ServerSideEncryptionConfiguration = struct(n0, _SSEC, 0, [_KKI], [[() => KmsKeyId, 0]]);
export var UserGroupResolutionConfiguration = struct(n0, _UGRC, 0, [_UGRM], [0]);
export var UserTokenConfiguration = struct(
  n0,
  _UTCs,
  0,
  [_JTTCw, _JTTC],
  [() => JwtTokenTypeConfiguration, () => JsonTokenTypeConfiguration]
);
export var FeaturedDocumentMissingList = list(n0, _FDML, 0, () => FeaturedDocumentMissing);
export var FeaturedDocumentWithMetadataList = list(n0, _FDWML, 0, () => FeaturedDocumentWithMetadata);
export var UserTokenConfigurationList = list(n0, _UTCL, 0, () => UserTokenConfiguration);
export var ValueImportanceMap = 128 | 1;

export var CreateIndex = op(
  n0,
  _CIre,
  0,
  () => CreateIndexRequest,
  () => CreateIndexResponse
);
export var DescribeFeaturedResultsSet = op(
  n0,
  _DFRS,
  0,
  () => DescribeFeaturedResultsSetRequest,
  () => DescribeFeaturedResultsSetResponse
);
