// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AWSAI,
  _CAe,
  _CDC,
  _CDCT,
  _CFDl,
  _DD,
  _DDT,
  _Do,
  _DUPD,
  _DUPDe,
  _DUPDR,
  _DUPDRe,
  _DUPDRes,
  _DUPDResc,
  _MLV,
  _SB,
  _St,
  _UPI,
  _Ve,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CustomDomainConfigType = struct(n0, _CDCT, 0, [_CAe], [0]);
export var DeleteUserPoolDomainRequest = struct(n0, _DUPDR, 0, [_Do, _UPI], [0, 0]);
export var DeleteUserPoolDomainResponse = struct(n0, _DUPDRe, 0, [], []);
export var DescribeUserPoolDomainRequest = struct(n0, _DUPDRes, 0, [_Do], [0]);
export var DescribeUserPoolDomainResponse = struct(n0, _DUPDResc, 0, [_DD], [() => DomainDescriptionType]);
export var DomainDescriptionType = struct(
  n0,
  _DDT,
  0,
  [_UPI, _AWSAI, _Do, _SB, _CFDl, _Ve, _St, _CDC, _MLV],
  [0, 0, 0, 0, 0, 0, 0, () => CustomDomainConfigType, 1]
);
export var DeleteUserPoolDomain = op(
  n0,
  _DUPD,
  0,
  () => DeleteUserPoolDomainRequest,
  () => DeleteUserPoolDomainResponse
);
export var DescribeUserPoolDomain = op(
  n0,
  _DUPDe,
  0,
  () => DescribeUserPoolDomainRequest,
  () => DescribeUserPoolDomainResponse
);
