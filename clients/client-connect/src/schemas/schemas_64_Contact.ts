// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ad,
  _Attr,
  _BPC,
  _BPCR,
  _BPCRa,
  _Cam,
  _CDR,
  _CDRL,
  _CEu,
  _CI,
  _CIa,
  _CT,
  _En,
  _FR,
  _FRC,
  _FRL,
  _FRM,
  _h,
  _II,
  _QI,
  _RIeq,
  _SE,
  _SRL,
  _SRu,
  _T,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchPutContactRequest = struct(
  n0,
  _BPCR,
  0,
  [_CT, _II, _CDRL],
  [[0, 4], [0, 1], () => ContactDataRequestList]
);
export var BatchPutContactResponse = struct(
  n0,
  _BPCRa,
  0,
  [_SRL, _FRL],
  [() => SuccessfulRequestList, () => FailedRequestList]
);
export var Campaign = struct(n0, _Cam, 0, [_CIa], [0]);
export var ContactDataRequest = struct(
  n0,
  _CDR,
  0,
  [_SE, _CEu, _RIeq, _QI, _Attr, _Cam],
  [() => Endpoint, () => Endpoint, 0, 0, 128 | 0, () => Campaign]
);
export var Endpoint = struct(n0, _En, 0, [_T, _Ad], [0, 0]);
export var FailedRequest = struct(n0, _FR, 0, [_RIeq, _FRC, _FRM], [0, 0, 0]);
export var SuccessfulRequest = struct(n0, _SRu, 0, [_RIeq, _CI], [0, 0]);
export var ContactDataRequestList = list(n0, _CDRL, 0, () => ContactDataRequest);
export var FailedRequestList = list(n0, _FRL, 0, () => FailedRequest);
export var SuccessfulRequestList = list(n0, _SRL, 0, () => SuccessfulRequest);
export var BatchPutContact = op(
  n0,
  _BPC,
  {
    [_h]: ["PUT", "/contact/batch/{InstanceId}", 200],
  },
  () => BatchPutContactRequest,
  () => BatchPutContactResponse
);
