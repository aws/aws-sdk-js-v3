// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ac,
  _AGT,
  _AGTI,
  _AGTO,
  _cA,
  _cB,
  _CDP,
  _CDPI,
  _CDPO,
  _CDPR,
  _CDPRI,
  _CDPRO,
  _CLCS,
  _CLCSI,
  _CLCSO,
  _cont,
  _cT,
  _de,
  _DGTi,
  _DGTIi,
  _DGTOi,
  _dI,
  _dIo,
  _DPI,
  _DPIa,
  _DTSDP,
  _DTSDPI,
  _DTSDPO,
  _eAn,
  _eI,
  _eIn,
  _eR,
  _eT,
  _f,
  _fIo,
  _fN,
  _fO,
  _fo,
  _fRCA,
  _fRCB,
  _GDP,
  _GDPI,
  _GDPO,
  _gGT,
  _gT,
  _GTSDP,
  _GTSDPI,
  _GTSDPO,
  _hQ,
  _ht,
  _i,
  _id,
  _iT,
  _it,
  _iTd,
  _lI,
  _lR,
  _LTSDP,
  _LTSDPI,
  _LTSDPO,
  _mRa,
  _n,
  _nT,
  _oPI,
  _oPIw,
  _PTSDP,
  _PTSDPI,
  _PTSDPO,
  _r,
  _s,
  _sAt,
  _tI,
  _ti,
  _tR,
  _TSDPFI,
  _TSDPFIL,
  _TSDPFO,
  _TSDPFOL,
  n0,
} from "./schemas_0";
import { TimeSeriesDataPointSummaryFormOutputList } from "./schemas_4_TimeSeries";
import { DataProductDescription, DataProductName } from "./schemas_43_Product";
import { FormInputList } from "./schemas_47_Create";
import { FormOutputList } from "./schemas_64_Data";

/* eslint no-var: 0 */

export var AssociateGovernedTermsInput = struct(n0, _AGTI, 0, [_dI, _eI, _eT, _gGT], [[0, 1], [0, 1], [0, 1], 64 | 0]);
export var AssociateGovernedTermsOutput = struct(n0, _AGTO, 0, [], []);
export var CreateDataProductInput = struct(
  n0,
  _CDPI,
  0,
  [_dI, _n, _oPIw, _de, _gT, _fIo, _it, _cT],
  [
    [0, 1],
    [() => DataProductName, 0],
    0,
    [() => DataProductDescription, 0],
    64 | 0,
    [() => FormInputList, 0],
    () => DataProductItems,
    [0, 4],
  ]
);
export var CreateDataProductOutput = struct(
  n0,
  _CDPO,
  0,
  [_dIo, _id, _r, _oPI, _n, _s, _de, _gT, _it, _fO, _cA, _cB, _fRCA, _fRCB],
  [
    0,
    0,
    0,
    0,
    [() => DataProductName, 0],
    0,
    [() => DataProductDescription, 0],
    64 | 0,
    () => DataProductItems,
    [() => FormOutputList, 0],
    4,
    0,
    4,
    0,
  ]
);
export var CreateDataProductRevisionInput = struct(
  n0,
  _CDPRI,
  0,
  [_dI, _i, _n, _de, _gT, _it, _fIo, _cT],
  [
    [0, 1],
    [0, 1],
    [() => DataProductName, 0],
    [() => DataProductDescription, 0],
    64 | 0,
    () => DataProductItems,
    [() => FormInputList, 0],
    [0, 4],
  ]
);
export var CreateDataProductRevisionOutput = struct(
  n0,
  _CDPRO,
  0,
  [_dIo, _id, _r, _oPI, _n, _s, _de, _gT, _it, _fO, _cA, _cB, _fRCA, _fRCB],
  [
    0,
    0,
    0,
    0,
    [() => DataProductName, 0],
    0,
    [() => DataProductDescription, 0],
    64 | 0,
    () => DataProductItems,
    [() => FormOutputList, 0],
    4,
    0,
    4,
    0,
  ]
);
export var CreateListingChangeSetInput = struct(
  n0,
  _CLCSI,
  0,
  [_dI, _eI, _eT, _eR, _ac, _cT],
  [[0, 1], 0, 0, 0, 0, [0, 4]]
);
export var CreateListingChangeSetOutput = struct(n0, _CLCSO, 0, [_lI, _lR, _s], [0, 0, 0]);
export var DataProductItem = struct(n0, _DPI, 0, [_iT, _i, _r, _gT], [0, 0, 0, 64 | 0]);
export var DeleteTimeSeriesDataPointsInput = struct(
  n0,
  _DTSDPI,
  0,
  [_dI, _eI, _eT, _fN, _cT],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _fN,
      },
    ],
    [
      0,
      {
        [_iTd]: 1,
        [_hQ]: _cT,
      },
    ],
  ]
);
export var DeleteTimeSeriesDataPointsOutput = struct(n0, _DTSDPO, 0, [], []);
export var DisassociateGovernedTermsInput = struct(
  n0,
  _DGTIi,
  0,
  [_dI, _eI, _eT, _gGT],
  [[0, 1], [0, 1], [0, 1], 64 | 0]
);
export var DisassociateGovernedTermsOutput = struct(n0, _DGTOi, 0, [], []);
export var GetDataProductInput = struct(
  n0,
  _GDPI,
  0,
  [_dI, _i, _r],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _r,
      },
    ],
  ]
);
export var GetDataProductOutput = struct(
  n0,
  _GDPO,
  0,
  [_dIo, _id, _r, _oPI, _n, _s, _de, _gT, _it, _fO, _cA, _cB, _fRCA, _fRCB],
  [
    0,
    0,
    0,
    0,
    [() => DataProductName, 0],
    0,
    [() => DataProductDescription, 0],
    64 | 0,
    () => DataProductItems,
    [() => FormOutputList, 0],
    4,
    0,
    4,
    0,
  ]
);
export var GetTimeSeriesDataPointInput = struct(
  n0,
  _GTSDPI,
  0,
  [_dI, _eI, _eT, _i, _fN],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _fN,
      },
    ],
  ]
);
export var GetTimeSeriesDataPointOutput = struct(
  n0,
  _GTSDPO,
  0,
  [_dIo, _eIn, _eT, _fN, _fo],
  [0, 0, 0, 0, () => TimeSeriesDataPointFormOutput]
);
export var ListTimeSeriesDataPointsInput = struct(
  n0,
  _LTSDPI,
  0,
  [_dI, _eI, _eT, _fN, _sAt, _eAn, _nT, _mRa],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _fN,
      },
    ],
    [
      4,
      {
        [_hQ]: _sAt,
      },
    ],
    [
      4,
      {
        [_hQ]: _eAn,
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
        [_hQ]: _mRa,
      },
    ],
  ]
);
export var ListTimeSeriesDataPointsOutput = struct(
  n0,
  _LTSDPO,
  0,
  [_it, _nT],
  [() => TimeSeriesDataPointSummaryFormOutputList, 0]
);
export var PostTimeSeriesDataPointsInput = struct(
  n0,
  _PTSDPI,
  0,
  [_dI, _eI, _eT, _f, _cT],
  [[0, 1], [0, 1], [0, 1], () => TimeSeriesDataPointFormInputList, [0, 4]]
);
export var PostTimeSeriesDataPointsOutput = struct(
  n0,
  _PTSDPO,
  0,
  [_dIo, _eIn, _eT, _f],
  [0, 0, 0, () => TimeSeriesDataPointFormOutputList]
);
export var TimeSeriesDataPointFormInput = struct(n0, _TSDPFI, 0, [_fN, _tI, _tR, _ti, _cont], [0, 0, 0, 4, 0]);
export var TimeSeriesDataPointFormOutput = struct(n0, _TSDPFO, 0, [_fN, _tI, _tR, _ti, _cont, _id], [0, 0, 0, 4, 0, 0]);
export var DataProductItems = list(n0, _DPIa, 0, () => DataProductItem);
export var ItemGlossaryTerms = 64 | 0;

export var TimeSeriesDataPointFormInputList = list(n0, _TSDPFIL, 0, () => TimeSeriesDataPointFormInput);
export var TimeSeriesDataPointFormOutputList = list(n0, _TSDPFOL, 0, () => TimeSeriesDataPointFormOutput);
export var AssociateGovernedTerms = op(
  n0,
  _AGT,
  {
    [_ht]: [
      "PATCH",
      "/v2/domains/{domainIdentifier}/entities/{entityType}/{entityIdentifier}/associate-governed-terms",
      200,
    ],
  },
  () => AssociateGovernedTermsInput,
  () => AssociateGovernedTermsOutput
);
export var CreateDataProduct = op(
  n0,
  _CDP,
  {
    [_ht]: ["POST", "/v2/domains/{domainIdentifier}/data-products", 201],
  },
  () => CreateDataProductInput,
  () => CreateDataProductOutput
);
export var CreateDataProductRevision = op(
  n0,
  _CDPR,
  {
    [_ht]: ["POST", "/v2/domains/{domainIdentifier}/data-products/{identifier}/revisions", 201],
  },
  () => CreateDataProductRevisionInput,
  () => CreateDataProductRevisionOutput
);
export var CreateListingChangeSet = op(
  n0,
  _CLCS,
  {
    [_ht]: ["POST", "/v2/domains/{domainIdentifier}/listings/change-set", 200],
  },
  () => CreateListingChangeSetInput,
  () => CreateListingChangeSetOutput
);
export var DeleteTimeSeriesDataPoints = op(
  n0,
  _DTSDP,
  {
    [_ht]: [
      "DELETE",
      "/v2/domains/{domainIdentifier}/entities/{entityType}/{entityIdentifier}/time-series-data-points",
      204,
    ],
  },
  () => DeleteTimeSeriesDataPointsInput,
  () => DeleteTimeSeriesDataPointsOutput
);
export var DisassociateGovernedTerms = op(
  n0,
  _DGTi,
  {
    [_ht]: [
      "PATCH",
      "/v2/domains/{domainIdentifier}/entities/{entityType}/{entityIdentifier}/disassociate-governed-terms",
      200,
    ],
  },
  () => DisassociateGovernedTermsInput,
  () => DisassociateGovernedTermsOutput
);
export var GetDataProduct = op(
  n0,
  _GDP,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/data-products/{identifier}", 200],
  },
  () => GetDataProductInput,
  () => GetDataProductOutput
);
export var GetTimeSeriesDataPoint = op(
  n0,
  _GTSDP,
  {
    [_ht]: [
      "GET",
      "/v2/domains/{domainIdentifier}/entities/{entityType}/{entityIdentifier}/time-series-data-points/{identifier}",
      200,
    ],
  },
  () => GetTimeSeriesDataPointInput,
  () => GetTimeSeriesDataPointOutput
);
export var ListTimeSeriesDataPoints = op(
  n0,
  _LTSDP,
  {
    [_ht]: [
      "GET",
      "/v2/domains/{domainIdentifier}/entities/{entityType}/{entityIdentifier}/time-series-data-points",
      200,
    ],
  },
  () => ListTimeSeriesDataPointsInput,
  () => ListTimeSeriesDataPointsOutput
);
export var PostTimeSeriesDataPoints = op(
  n0,
  _PTSDP,
  {
    [_ht]: [
      "POST",
      "/v2/domains/{domainIdentifier}/entities/{entityType}/{entityIdentifier}/time-series-data-points",
      201,
    ],
  },
  () => PostTimeSeriesDataPointsInput,
  () => PostTimeSeriesDataPointsOutput
);
