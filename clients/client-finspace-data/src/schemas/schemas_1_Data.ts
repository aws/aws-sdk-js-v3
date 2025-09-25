// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import {
  _AC,
  _aKI,
  _b,
  _cr,
  _dI,
  _dVI,
  _ex,
  _GEDVAD,
  _GEDVADR,
  _GEDVADRe,
  _h,
  _ke,
  _SAK,
  _sAK,
  _SL,
  _sL,
  _ST,
  _sT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var SecretAccessKey = sim(n0, _SAK, 0, 8);
export var SessionToken = sim(n0, _ST, 0, 8);
export var AwsCredentials = struct(
  n0,
  _AC,
  8,
  [_aKI, _sAK, _sT, _ex],
  [0, [() => SecretAccessKey, 0], [() => SessionToken, 0], 1]
);
export var GetExternalDataViewAccessDetailsRequest = struct(
  n0,
  _GEDVADR,
  0,
  [_dVI, _dI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetExternalDataViewAccessDetailsResponse = struct(
  n0,
  _GEDVADRe,
  0,
  [_cr, _sL],
  [[() => AwsCredentials, 0], () => S3Location]
);
export var S3Location = struct(n0, _SL, 0, [_b, _ke], [0, 0]);
export var GetExternalDataViewAccessDetails = op(
  n0,
  _GEDVAD,
  {
    [_h]: ["POST", "/datasets/{datasetId}/dataviewsv2/{dataViewId}/external-access-details", 200],
  },
  () => GetExternalDataViewAccessDetailsRequest,
  () => GetExternalDataViewAccessDetailsResponse
);
