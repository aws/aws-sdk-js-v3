// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _A,
  _AN,
  _AOI,
  _BMC,
  _BMCI,
  _BN,
  _CI,
  _CII,
  _CMC,
  _CMCI,
  _CRC,
  _CRCI,
  _CT,
  _CTr,
  _D,
  _DCL,
  _DIS,
  _DPU,
  _DSC,
  _DTo,
  _E,
  _ED,
  _EED,
  _EEDO,
  _EM,
  _EOJED,
  _EOJL,
  _EOJOB,
  _EOJS,
  _ER,
  _ERA,
  _ES,
  _ESI,
  _ET,
  _ETr,
  _F,
  _FL,
  _GB,
  _GEOJ,
  _GEOJI,
  _GEOJO,
  _GMC,
  _GMCI,
  _GRDC,
  _GRDCI,
  _GRDCO,
  _GVEJ,
  _GVEJI,
  _GVEJO,
  _h,
  _hQ,
  _IAN,
  _IC,
  _ICI,
  _ICO,
  _ISB,
  _IV,
  _JC,
  _JCI,
  _KKI,
  _LCSC,
  _LCSCI,
  _LEOJ,
  _LEOJI,
  _LEOJO,
  _LEOJOC,
  _LRDC,
  _LRDCI,
  _LRDCO,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _LVEJ,
  _LVEJI,
  _LVEJO,
  _LVEJOC,
  _M,
  _Ma,
  _Mi,
  _MMC,
  _MR,
  _N,
  _NT,
  _O,
  _OB,
  _OBu,
  _ODT,
  _OLI,
  _Op,
  _OR,
  _ORRI,
  _ORSI,
  _OT,
  _OTu,
  _PEOJA,
  _PF,
  _PI,
  _Pr,
  _RA,
  _RC,
  _RCI,
  _RDCA,
  _RDCM,
  _RDCN,
  _RDCQ,
  _RDCQI,
  _RDCQO,
  _RDCS,
  _RGC,
  _S,
  _SB,
  _SC,
  _SCI,
  _SD,
  _SE,
  _SEOJ,
  _SEOJI,
  _SEOJO,
  _SF,
  _SO,
  _ST,
  _St,
  _SVEJ,
  _SVEJI,
  _SVEJO,
  _T,
  _Ta,
  _TAN,
  _TB,
  _TR,
  _TRF,
  _TRFO,
  _TRR,
  _TRRa,
  _TSC,
  _TSCI,
  _U,
  _UD,
  _V,
  _VEJC,
  _VEJDSCI,
  _VEJED,
  _VEJEED,
  _VEJIC,
  _VEJL,
  _VEJS,
  _XAN,
  _YAN,
  _ZSC,
  _ZSCI,
  _ZSP,
  _ZSPKKI,
  n0,
} from "./schemas_0";
import { AreaOfInterest, NextToken, PropertyFilters, TimeRangeFilterInput } from "./schemas_1_Job";
import { VectorEnrichmentJobS3Data } from "./schemas_5_Job";

/* eslint no-var: 0 */

export var BandMathConfigInput = struct(n0, _BMCI, 0, [_PI, _CI], [64 | 0, () => CustomIndicesInput]);
export var CloudMaskingConfigInput = struct(n0, _CMCI, 0, [], []);
export var CloudRemovalConfigInput = struct(n0, _CRCI, 0, [_AN, _IV, _TB], [0, 0, 64 | 0]);
export var CustomIndicesInput = struct(n0, _CII, 0, [_O], [() => OperationsListInput]);
export var EarthObservationJobErrorDetails = struct(n0, _EOJED, 0, [_T, _M], [0, 0]);
export var ExportErrorDetails = struct(
  n0,
  _EED,
  0,
  [_ER, _ESI],
  [() => ExportErrorDetailsOutput, () => ExportErrorDetailsOutput]
);
export var ExportErrorDetailsOutput = struct(n0, _EEDO, 0, [_T, _M], [0, 0]);
export var Filter = struct(n0, _F, 0, [_N, _T, _Mi, _Ma], [0, 0, 1, 1]);
export var GeoMosaicConfigInput = struct(n0, _GMCI, 0, [_AN, _TB], [0, 64 | 0]);
export var GetEarthObservationJobInput = struct(n0, _GEOJI, 0, [_A], [[0, 1]]);
export var GetEarthObservationJobOutput = struct(
  n0,
  _GEOJO,
  0,
  [_A, _N, _CTr, _DIS, _S, _KKI, _IC, _JC, _OB, _ERA, _ED, _ES, _EED, _Ta],
  [
    0,
    0,
    5,
    1,
    0,
    0,
    [() => InputConfigOutput, 0],
    () => JobConfigInput,
    () => EarthObservationJobOutputBands,
    0,
    () => EarthObservationJobErrorDetails,
    0,
    () => ExportErrorDetails,
    128 | 0,
  ]
);
export var GetRasterDataCollectionInput = struct(n0, _GRDCI, 0, [_A], [[0, 1]]);
export var GetRasterDataCollectionOutput = struct(
  n0,
  _GRDCO,
  0,
  [_N, _A, _T, _D, _DPU, _SF, _ISB, _Ta],
  [0, 0, 0, 0, 0, () => FilterList, 64 | 0, 128 | 0]
);
export var GetVectorEnrichmentJobInput = struct(n0, _GVEJI, 0, [_A], [[0, 1]]);
export var GetVectorEnrichmentJobOutput = struct(
  n0,
  _GVEJO,
  0,
  [_A, _T, _N, _CTr, _DIS, _S, _KKI, _IC, _JC, _ERA, _ED, _ES, _EED, _Ta],
  [
    0,
    0,
    0,
    5,
    1,
    0,
    0,
    () => VectorEnrichmentJobInputConfig,
    () => VectorEnrichmentJobConfig,
    0,
    () => VectorEnrichmentJobErrorDetails,
    0,
    () => VectorEnrichmentJobExportErrorDetails,
    128 | 0,
  ]
);
export var InputConfigInput = struct(n0, _ICI, 0, [_PEOJA, _RDCQ], [0, [() => RasterDataCollectionQueryInput, 0]]);
export var InputConfigOutput = struct(n0, _ICO, 0, [_PEOJA, _RDCQ], [0, [() => RasterDataCollectionQueryOutput, 0]]);
export var LandCoverSegmentationConfigInput = struct(n0, _LCSCI, 0, [], []);
export var ListEarthObservationJobInput = struct(
  n0,
  _LEOJI,
  0,
  [_SE, _SO, _SB, _NT, _MR],
  [0, 0, 0, [() => NextToken, 0], 1]
);
export var ListEarthObservationJobOutput = struct(
  n0,
  _LEOJO,
  0,
  [_EOJS, _NT],
  [() => EarthObservationJobList, [() => NextToken, 0]]
);
export var ListEarthObservationJobOutputConfig = struct(
  n0,
  _LEOJOC,
  0,
  [_A, _N, _CTr, _DIS, _S, _OT, _Ta],
  [0, 0, 5, 1, 0, 0, 128 | 0]
);
export var ListRasterDataCollectionsInput = struct(
  n0,
  _LRDCI,
  0,
  [_NT, _MR],
  [
    [
      () => NextToken,
      {
        [_hQ]: _NT,
      },
    ],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
  ]
);
export var ListRasterDataCollectionsOutput = struct(
  n0,
  _LRDCO,
  0,
  [_RDCS, _NT],
  [() => DataCollectionsList, [() => NextToken, 0]]
);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RA], [[0, 1]]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_Ta], [128 | 0]);
export var ListVectorEnrichmentJobInput = struct(
  n0,
  _LVEJI,
  0,
  [_SE, _SO, _SB, _NT, _MR],
  [0, 0, 0, [() => NextToken, 0], 1]
);
export var ListVectorEnrichmentJobOutput = struct(
  n0,
  _LVEJO,
  0,
  [_VEJS, _NT],
  [() => VectorEnrichmentJobList, [() => NextToken, 0]]
);
export var ListVectorEnrichmentJobOutputConfig = struct(
  n0,
  _LVEJOC,
  0,
  [_A, _N, _T, _CTr, _DIS, _S, _Ta],
  [0, 0, 0, 5, 1, 0, 128 | 0]
);
export var MapMatchingConfig = struct(n0, _MMC, 0, [_IAN, _YAN, _XAN, _TAN], [0, 0, 0, 0]);
export var Operation = struct(n0, _Op, 0, [_N, _E, _OTu], [0, 0, 0]);
export var OutputBand = struct(n0, _OBu, 0, [_BN, _ODT], [0, 0]);
export var OutputResolutionResamplingInput = struct(n0, _ORRI, 0, [_UD], [() => UserDefined]);
export var OutputResolutionStackInput = struct(n0, _ORSI, 0, [_Pr, _UD], [0, () => UserDefined]);
export var RasterDataCollectionMetadata = struct(
  n0,
  _RDCM,
  0,
  [_N, _A, _T, _D, _DPU, _SF, _Ta],
  [0, 0, 0, 0, 0, () => FilterList, 128 | 0]
);
export var RasterDataCollectionQueryInput = struct(
  n0,
  _RDCQI,
  0,
  [_RDCA, _TRF, _AOI, _PF],
  [0, [() => TimeRangeFilterInput, 0], [() => AreaOfInterest, 0], () => PropertyFilters]
);
export var RasterDataCollectionQueryOutput = struct(
  n0,
  _RDCQO,
  0,
  [_RDCA, _RDCN, _TRF, _AOI, _PF],
  [0, 0, [() => TimeRangeFilterOutput, 0], [() => AreaOfInterest, 0], () => PropertyFilters]
);
export var ResamplingConfigInput = struct(
  n0,
  _RCI,
  0,
  [_OR, _AN, _TB],
  [() => OutputResolutionResamplingInput, 0, 64 | 0]
);
export var ReverseGeocodingConfig = struct(n0, _RGC, 0, [_YAN, _XAN], [0, 0]);
export var StackConfigInput = struct(n0, _SCI, 0, [_OR, _TB], [() => OutputResolutionStackInput, 64 | 0]);
export var StartEarthObservationJobInput = struct(
  n0,
  _SEOJI,
  0,
  [_N, _CT, _KKI, _IC, _JC, _ERA, _Ta],
  [0, [0, 4], 0, [() => InputConfigInput, 0], () => JobConfigInput, 0, 128 | 0]
);
export var StartEarthObservationJobOutput = struct(
  n0,
  _SEOJO,
  0,
  [_N, _A, _CTr, _DIS, _S, _KKI, _IC, _JC, _ERA, _Ta],
  [0, 0, 5, 1, 0, 0, [() => InputConfigOutput, 0], () => JobConfigInput, 0, 128 | 0]
);
export var StartVectorEnrichmentJobInput = struct(
  n0,
  _SVEJI,
  0,
  [_N, _CT, _KKI, _IC, _JC, _ERA, _Ta],
  [0, [0, 4], 0, () => VectorEnrichmentJobInputConfig, () => VectorEnrichmentJobConfig, 0, 128 | 0]
);
export var StartVectorEnrichmentJobOutput = struct(
  n0,
  _SVEJO,
  0,
  [_N, _A, _T, _CTr, _DIS, _S, _KKI, _IC, _JC, _ERA, _Ta],
  [0, 0, 0, 5, 1, 0, 0, () => VectorEnrichmentJobInputConfig, () => VectorEnrichmentJobConfig, 0, 128 | 0]
);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RA, _Ta], [[0, 1], 128 | 0]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var TemporalStatisticsConfigInput = struct(n0, _TSCI, 0, [_GB, _St, _TB], [0, 64 | 0, 64 | 0]);
export var TimeRangeFilterOutput = struct(n0, _TRFO, 8, [_ST, _ET], [5, 5]);
export var UserDefined = struct(n0, _UD, 0, [_V, _U], [1, 0]);
export var VectorEnrichmentJobErrorDetails = struct(n0, _VEJED, 0, [_ETr, _EM], [0, 0]);
export var VectorEnrichmentJobExportErrorDetails = struct(n0, _VEJEED, 0, [_T, _M], [0, 0]);
export var VectorEnrichmentJobInputConfig = struct(
  n0,
  _VEJIC,
  0,
  [_DTo, _DSC],
  [0, () => VectorEnrichmentJobDataSourceConfigInput]
);
export var ZonalStatisticsConfigInput = struct(n0, _ZSCI, 0, [_ZSP, _St, _TB, _ZSPKKI], [0, 64 | 0, 64 | 0, 0]);
export var DataCollectionsList = list(n0, _DCL, 0, () => RasterDataCollectionMetadata);
export var EarthObservationJobList = list(n0, _EOJL, 0, () => ListEarthObservationJobOutputConfig);
export var EarthObservationJobOutputBands = list(n0, _EOJOB, 0, () => OutputBand);
export var FilterList = list(n0, _FL, 0, () => Filter);
export var ImageSourceBandList = 64 | 0;

export var OperationsListInput = list(n0, _OLI, 0, () => Operation);
export var TemporalStatisticsListInput = 64 | 0;

export var VectorEnrichmentJobList = list(n0, _VEJL, 0, () => ListVectorEnrichmentJobOutputConfig);
export var ZonalStatisticsListInput = 64 | 0;

export var Tags = 128 | 0;

export var JobConfigInput = uni(
  n0,
  _JCI,
  0,
  [_BMC, _RC, _TSC, _CRC, _ZSC, _GMC, _SC, _CMC, _LCSC],
  [
    () => BandMathConfigInput,
    () => ResamplingConfigInput,
    () => TemporalStatisticsConfigInput,
    () => CloudRemovalConfigInput,
    () => ZonalStatisticsConfigInput,
    () => GeoMosaicConfigInput,
    () => StackConfigInput,
    () => CloudMaskingConfigInput,
    () => LandCoverSegmentationConfigInput,
  ]
);
export var VectorEnrichmentJobConfig = uni(
  n0,
  _VEJC,
  0,
  [_RGC, _MMC],
  [() => ReverseGeocodingConfig, () => MapMatchingConfig]
);
export var VectorEnrichmentJobDataSourceConfigInput = uni(n0, _VEJDSCI, 0, [_SD], [() => VectorEnrichmentJobS3Data]);
export var GetEarthObservationJob = op(
  n0,
  _GEOJ,
  {
    [_h]: ["GET", "/earth-observation-jobs/{Arn}", 200],
  },
  () => GetEarthObservationJobInput,
  () => GetEarthObservationJobOutput
);
export var GetRasterDataCollection = op(
  n0,
  _GRDC,
  {
    [_h]: ["GET", "/raster-data-collection/{Arn}", 200],
  },
  () => GetRasterDataCollectionInput,
  () => GetRasterDataCollectionOutput
);
export var GetVectorEnrichmentJob = op(
  n0,
  _GVEJ,
  {
    [_h]: ["GET", "/vector-enrichment-jobs/{Arn}", 200],
  },
  () => GetVectorEnrichmentJobInput,
  () => GetVectorEnrichmentJobOutput
);
export var ListEarthObservationJobs = op(
  n0,
  _LEOJ,
  {
    [_h]: ["POST", "/list-earth-observation-jobs", 200],
  },
  () => ListEarthObservationJobInput,
  () => ListEarthObservationJobOutput
);
export var ListRasterDataCollections = op(
  n0,
  _LRDC,
  {
    [_h]: ["GET", "/raster-data-collections", 200],
  },
  () => ListRasterDataCollectionsInput,
  () => ListRasterDataCollectionsOutput
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{ResourceArn}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var ListVectorEnrichmentJobs = op(
  n0,
  _LVEJ,
  {
    [_h]: ["POST", "/list-vector-enrichment-jobs", 200],
  },
  () => ListVectorEnrichmentJobInput,
  () => ListVectorEnrichmentJobOutput
);
export var StartEarthObservationJob = op(
  n0,
  _SEOJ,
  {
    [_h]: ["POST", "/earth-observation-jobs", 200],
  },
  () => StartEarthObservationJobInput,
  () => StartEarthObservationJobOutput
);
export var StartVectorEnrichmentJob = op(
  n0,
  _SVEJ,
  {
    [_h]: ["POST", "/vector-enrichment-jobs", 200],
  },
  () => StartVectorEnrichmentJobInput,
  () => StartVectorEnrichmentJobOutput
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["PUT", "/tags/{ResourceArn}", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
