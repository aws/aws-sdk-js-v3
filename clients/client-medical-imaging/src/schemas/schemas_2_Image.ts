// smithy-typescript generated code
import { list, op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  _CA,
  _cA,
  _cAo,
  _CDIS,
  _CDISP,
  _CIS,
  _CISI,
  _cISI,
  _CISR,
  _CISRo,
  _CSISI,
  _CSISP,
  _cT,
  _dA,
  _dAe,
  _dARA,
  _dI,
  _DICOMA,
  _DICOMAN,
  _DICOMC,
  _DICOMIJP,
  _DICOMIJS,
  _DICOMIJSm,
  _DICOMNOSRI,
  _DICOMNOSRS,
  _DICOMPBD,
  _DICOMPI,
  _DICOMPN,
  _DICOMPS,
  _DICOMSBP,
  _DICOMSD,
  _DICOMSDAT,
  _DICOMSDt,
  _DICOMSI,
  _DICOMSIUID,
  _DICOMSIUIDt,
  _DICOMSM,
  _DICOMSN,
  _DICOMST,
  _DICOMT,
  _DICOMU,
  _dIS,
  _dISP,
  _dN,
  _DP,
  _dP,
  _DS,
  _dS,
  _DSa,
  _dSa,
  _eA,
  _en,
  _f,
  _fi,
  _fo,
  _GD,
  _GDICOMIJ,
  _GDICOMIJR,
  _GDICOMIJRe,
  _GDR,
  _GDRe,
  _GIS,
  _GISR,
  _GISRe,
  _h,
  _hQ,
  _iOAI,
  _iP,
  _iSA,
  _iSI,
  _ISMS,
  _iSMS,
  _ISMSm,
  _ISP,
  _ISPL,
  _iSPL,
  _iSS,
  _iSU,
  _ISWS,
  _iSWS,
  _jI,
  _jN,
  _jP,
  _jS,
  _jSo,
  _kKA,
  _lAA,
  _LD,
  _LDICOMIJ,
  _LDICOMIJR,
  _LDICOMIJRi,
  _LDR,
  _LDRi,
  _LISV,
  _LISVR,
  _LISVRi,
  _lV,
  _lVI,
  _m,
  _MC,
  _mR,
  _MU,
  _nT,
  _O,
  _o,
  _op,
  _oSU,
  _pTP,
  _rA,
  _rTVI,
  _S,
  _sA,
  _SBAV,
  _SBAVe,
  _SC,
  _sC,
  _SDICOMIJ,
  _SDICOMIJR,
  _SDICOMIJRt,
  _SF,
  _sF,
  _SFe,
  _SIS,
  _sIS,
  _sISI,
  _sISP,
  _SISR,
  _SISRe,
  _sO,
  _so,
  _uA,
  _uAp,
  _UISM,
  _UISMR,
  _UISMRp,
  _uISMU,
  _v,
  _va,
  _vI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CopiableAttributes = sim(n0, _CA, 0, 8);
export var DICOMAccessionNumber = sim(n0, _DICOMAN, 0, 8);
export var DICOMAttribute = sim(n0, _DICOMA, 21, 8);
export var DICOMPatientBirthDate = sim(n0, _DICOMPBD, 0, 8);
export var DICOMPatientId = sim(n0, _DICOMPI, 0, 8);
export var DICOMPatientName = sim(n0, _DICOMPN, 0, 8);
export var DICOMPatientSex = sim(n0, _DICOMPS, 0, 8);
export var DICOMSeriesBodyPart = sim(n0, _DICOMSBP, 0, 8);
export var DICOMSeriesInstanceUID = sim(n0, _DICOMSIUID, 0, 8);
export var DICOMSeriesModality = sim(n0, _DICOMSM, 0, 8);
export var DICOMSeriesNumber = sim(n0, _DICOMSN, 1, 8);
export var DICOMStudyDate = sim(n0, _DICOMSD, 0, 8);
export var DICOMStudyDescription = sim(n0, _DICOMSDt, 0, 8);
export var DICOMStudyId = sim(n0, _DICOMSI, 0, 8);
export var DICOMStudyInstanceUID = sim(n0, _DICOMSIUIDt, 0, 8);
export var DICOMStudyTime = sim(n0, _DICOMST, 0, 8);
export var CopyDestinationImageSet = struct(n0, _CDIS, 0, [_iSI, _lVI], [0, 0]);
export var CopyDestinationImageSetProperties = struct(
  n0,
  _CDISP,
  0,
  [_iSI, _lVI, _iSS, _iSWS, _cA, _uA, _iSA],
  [0, 0, 0, 0, 4, 4, 0]
);
export var CopyImageSetInformation = struct(
  n0,
  _CISI,
  0,
  [_sIS, _dIS],
  [[() => CopySourceImageSetInformation, 0], () => CopyDestinationImageSet]
);
export var CopyImageSetRequest = struct(
  n0,
  _CISR,
  0,
  [_dI, _sISI, _cISI, _f, _pTP],
  [
    [0, 1],
    [0, 1],
    [() => CopyImageSetInformation, 16],
    [
      2,
      {
        [_hQ]: _f,
      },
    ],
    [
      2,
      {
        [_hQ]: _pTP,
      },
    ],
  ]
);
export var CopyImageSetResponse = struct(
  n0,
  _CISRo,
  0,
  [_dI, _sISP, _dISP],
  [0, () => CopySourceImageSetProperties, () => CopyDestinationImageSetProperties]
);
export var CopySourceImageSetInformation = struct(n0, _CSISI, 0, [_lVI, _DICOMC], [0, [() => MetadataCopies, 0]]);
export var CopySourceImageSetProperties = struct(
  n0,
  _CSISP,
  0,
  [_iSI, _lVI, _iSS, _iSWS, _cA, _uA, _iSA],
  [0, 0, 0, 0, 4, 4, 0]
);
export var DatastoreProperties = struct(
  n0,
  _DP,
  0,
  [_dI, _dN, _dS, _kKA, _lAA, _dA, _cA, _uA],
  [0, 0, 0, 0, 0, 0, 4, 4]
);
export var DatastoreSummary = struct(n0, _DS, 0, [_dI, _dN, _dS, _dA, _cA, _uA], [0, 0, 0, 0, 4, 4]);
export var DICOMImportJobProperties = struct(
  n0,
  _DICOMIJP,
  0,
  [_jI, _jN, _jS, _dI, _dARA, _eA, _sA, _iSU, _oSU, _m],
  [0, 0, 0, 0, 0, 4, 4, 0, 0, 0]
);
export var DICOMImportJobSummary = struct(
  n0,
  _DICOMIJS,
  0,
  [_jI, _jN, _jS, _dI, _dARA, _eA, _sA, _m],
  [0, 0, 0, 0, 0, 4, 4, 0]
);
export var DICOMStudyDateAndTime = struct(
  n0,
  _DICOMSDAT,
  0,
  [_DICOMSD, _DICOMST],
  [
    [() => DICOMStudyDate, 0],
    [() => DICOMStudyTime, 0],
  ]
);
export var DICOMTags = struct(
  n0,
  _DICOMT,
  0,
  [
    _DICOMPI,
    _DICOMPN,
    _DICOMPBD,
    _DICOMPS,
    _DICOMSIUIDt,
    _DICOMSI,
    _DICOMSDt,
    _DICOMNOSRS,
    _DICOMNOSRI,
    _DICOMAN,
    _DICOMSIUID,
    _DICOMSM,
    _DICOMSBP,
    _DICOMSN,
    _DICOMSD,
    _DICOMST,
  ],
  [
    [() => DICOMPatientId, 0],
    [() => DICOMPatientName, 0],
    [() => DICOMPatientBirthDate, 0],
    [() => DICOMPatientSex, 0],
    [() => DICOMStudyInstanceUID, 0],
    [() => DICOMStudyId, 0],
    [() => DICOMStudyDescription, 0],
    1,
    1,
    [() => DICOMAccessionNumber, 0],
    [() => DICOMSeriesInstanceUID, 0],
    [() => DICOMSeriesModality, 0],
    [() => DICOMSeriesBodyPart, 0],
    [() => DICOMSeriesNumber, 0],
    [() => DICOMStudyDate, 0],
    [() => DICOMStudyTime, 0],
  ]
);
export var DICOMUpdates = struct(
  n0,
  _DICOMU,
  0,
  [_rA, _uAp],
  [
    [() => DICOMAttribute, 0],
    [() => DICOMAttribute, 0],
  ]
);
export var GetDatastoreRequest = struct(n0, _GDR, 0, [_dI], [[0, 1]]);
export var GetDatastoreResponse = struct(n0, _GDRe, 0, [_dP], [() => DatastoreProperties]);
export var GetDICOMImportJobRequest = struct(
  n0,
  _GDICOMIJR,
  0,
  [_dI, _jI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetDICOMImportJobResponse = struct(n0, _GDICOMIJRe, 0, [_jP], [() => DICOMImportJobProperties]);
export var GetImageSetRequest = struct(
  n0,
  _GISR,
  0,
  [_dI, _iSI, _vI],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _v,
      },
    ],
  ]
);
export var GetImageSetResponse = struct(
  n0,
  _GISRe,
  0,
  [_dI, _iSI, _vI, _iSS, _iSWS, _cA, _uA, _dAe, _m, _iSA, _o, _iP],
  [0, 0, 0, 0, 0, 4, 4, 4, 0, 0, () => Overrides, 2]
);
export var ImageSetProperties = struct(
  n0,
  _ISP,
  0,
  [_iSI, _vI, _iSS, _ISWS, _cA, _uA, _dAe, _m, _o, _iP],
  [0, 0, 0, 0, 4, 4, 4, 0, () => Overrides, 2]
);
export var ImageSetsMetadataSummary = struct(
  n0,
  _ISMS,
  0,
  [_iSI, _v, _cA, _uA, _DICOMT, _iP],
  [0, 1, 4, 4, [() => DICOMTags, 0], 2]
);
export var ListDatastoresRequest = struct(
  n0,
  _LDR,
  0,
  [_dS, _nT, _mR],
  [
    [
      0,
      {
        [_hQ]: _dS,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListDatastoresResponse = struct(n0, _LDRi, 0, [_dSa, _nT], [() => DatastoreSummaries, 0]);
export var ListDICOMImportJobsRequest = struct(
  n0,
  _LDICOMIJR,
  0,
  [_dI, _jS, _nT, _mR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _jS,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListDICOMImportJobsResponse = struct(n0, _LDICOMIJRi, 0, [_jSo, _nT], [() => DICOMImportJobSummaries, 0]);
export var ListImageSetVersionsRequest = struct(
  n0,
  _LISVR,
  0,
  [_dI, _iSI, _nT, _mR],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListImageSetVersionsResponse = struct(n0, _LISVRi, 0, [_iSPL, _nT], [() => ImageSetPropertiesList, 0]);
export var MetadataCopies = struct(n0, _MC, 0, [_cAo], [[() => CopiableAttributes, 0]]);
export var Overrides = struct(n0, _O, 0, [_fo], [2]);
export var SearchCriteria = struct(n0, _SC, 8, [_fi, _so], [[() => SearchFilters, 0], () => Sort]);
export var SearchFilter = struct(n0, _SF, 0, [_va, _op], [[() => SearchByAttributeValues, 0], 0]);
export var SearchImageSetsRequest = struct(
  n0,
  _SISR,
  0,
  [_dI, _sC, _mR, _nT],
  [
    [0, 1],
    [() => SearchCriteria, 16],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var SearchImageSetsResponse = struct(
  n0,
  _SISRe,
  0,
  [_iSMS, _so, _nT],
  [[() => ImageSetsMetadataSummaries, 0], () => Sort, 0]
);
export var Sort = struct(n0, _S, 0, [_sO, _sF], [0, 0]);
export var StartDICOMImportJobRequest = struct(
  n0,
  _SDICOMIJR,
  0,
  [_jN, _dARA, _cT, _dI, _iSU, _oSU, _iOAI],
  [0, 0, [0, 4], [0, 1], 0, 0, 0]
);
export var StartDICOMImportJobResponse = struct(n0, _SDICOMIJRt, 0, [_dI, _jI, _jS, _sA], [0, 0, 0, 4]);
export var UpdateImageSetMetadataRequest = struct(
  n0,
  _UISMR,
  0,
  [_dI, _iSI, _lVI, _f, _uISMU],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _lV,
      },
    ],
    [
      2,
      {
        [_hQ]: _f,
      },
    ],
    [() => MetadataUpdates, 16],
  ]
);
export var UpdateImageSetMetadataResponse = struct(
  n0,
  _UISMRp,
  0,
  [_dI, _iSI, _lVI, _iSS, _iSWS, _cA, _uA, _m],
  [0, 0, 0, 0, 0, 4, 4, 0]
);
export var DatastoreSummaries = list(n0, _DSa, 0, () => DatastoreSummary);
export var DICOMImportJobSummaries = list(n0, _DICOMIJSm, 0, () => DICOMImportJobSummary);
export var ImageSetPropertiesList = list(n0, _ISPL, 0, () => ImageSetProperties);
export var ImageSetsMetadataSummaries = list(n0, _ISMSm, 0, [() => ImageSetsMetadataSummary, 0]);
export var SearchByAttributeValues = list(n0, _SBAV, 0, [() => SearchByAttributeValue, 0]);
export var SearchFilters = list(n0, _SFe, 0, [() => SearchFilter, 0]);
export var MetadataUpdates = uni(n0, _MU, 0, [_DICOMU, _rTVI], [[() => DICOMUpdates, 0], 0]);
export var SearchByAttributeValue = uni(
  n0,
  _SBAVe,
  0,
  [_DICOMPI, _DICOMAN, _DICOMSI, _DICOMSIUIDt, _DICOMSIUID, _cA, _uA, _DICOMSDAT, _iP],
  [
    [() => DICOMPatientId, 0],
    [() => DICOMAccessionNumber, 0],
    [() => DICOMStudyId, 0],
    [() => DICOMStudyInstanceUID, 0],
    [() => DICOMSeriesInstanceUID, 0],
    4,
    4,
    [() => DICOMStudyDateAndTime, 0],
    2,
  ]
);
export var CopyImageSet = op(
  n0,
  _CIS,
  {
    [_h]: ["POST", "/datastore/{datastoreId}/imageSet/{sourceImageSetId}/copyImageSet", 200],
    [_en]: ["runtime-"],
  },
  () => CopyImageSetRequest,
  () => CopyImageSetResponse
);
export var GetDatastore = op(
  n0,
  _GD,
  {
    [_h]: ["GET", "/datastore/{datastoreId}", 200],
  },
  () => GetDatastoreRequest,
  () => GetDatastoreResponse
);
export var GetDICOMImportJob = op(
  n0,
  _GDICOMIJ,
  {
    [_h]: ["GET", "/getDICOMImportJob/datastore/{datastoreId}/job/{jobId}", 200],
  },
  () => GetDICOMImportJobRequest,
  () => GetDICOMImportJobResponse
);
export var GetImageSet = op(
  n0,
  _GIS,
  {
    [_h]: ["POST", "/datastore/{datastoreId}/imageSet/{imageSetId}/getImageSet", 200],
    [_en]: ["runtime-"],
  },
  () => GetImageSetRequest,
  () => GetImageSetResponse
);
export var ListDatastores = op(
  n0,
  _LD,
  {
    [_h]: ["GET", "/datastore", 200],
  },
  () => ListDatastoresRequest,
  () => ListDatastoresResponse
);
export var ListDICOMImportJobs = op(
  n0,
  _LDICOMIJ,
  {
    [_h]: ["GET", "/listDICOMImportJobs/datastore/{datastoreId}", 200],
  },
  () => ListDICOMImportJobsRequest,
  () => ListDICOMImportJobsResponse
);
export var ListImageSetVersions = op(
  n0,
  _LISV,
  {
    [_h]: ["POST", "/datastore/{datastoreId}/imageSet/{imageSetId}/listImageSetVersions", 200],
    [_en]: ["runtime-"],
  },
  () => ListImageSetVersionsRequest,
  () => ListImageSetVersionsResponse
);
export var SearchImageSets = op(
  n0,
  _SIS,
  {
    [_h]: ["POST", "/datastore/{datastoreId}/searchImageSets", 200],
    [_en]: ["runtime-"],
  },
  () => SearchImageSetsRequest,
  () => SearchImageSetsResponse
);
export var StartDICOMImportJob = op(
  n0,
  _SDICOMIJ,
  {
    [_h]: ["POST", "/startDICOMImportJob/datastore/{datastoreId}", 200],
  },
  () => StartDICOMImportJobRequest,
  () => StartDICOMImportJobResponse
);
export var UpdateImageSetMetadata = op(
  n0,
  _UISM,
  {
    [_h]: ["POST", "/datastore/{datastoreId}/imageSet/{imageSetId}/updateImageSetMetadata", 200],
    [_en]: ["runtime-"],
  },
  () => UpdateImageSetMetadataRequest,
  () => UpdateImageSetMetadataResponse
);
