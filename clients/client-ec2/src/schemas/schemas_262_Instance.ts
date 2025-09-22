// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _DR,
  _eQN,
  _HE,
  _hE,
  _HPI,
  _hPI,
  _HPRHL,
  _hPRHL,
  _HT,
  _hT,
  _II,
  _iI,
  _iMO,
  _IMOn,
  _IMORnst,
  _IMT,
  _iMT,
  _MIMOo,
  _MIMORod,
  _MIMORodi,
  _St,
  _st,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var InstanceMetadataOptionsResponse = struct(
  n0,
  _IMORnst,
  0,
  [_St, _HT, _HPRHL, _HE, _HPI, _IMT],
  [
    [
      0,
      {
        [_eQN]: `State`,
        [_xN]: _st,
      },
    ],
    [
      0,
      {
        [_eQN]: `HttpTokens`,
        [_xN]: _hT,
      },
    ],
    [
      1,
      {
        [_eQN]: `HttpPutResponseHopLimit`,
        [_xN]: _hPRHL,
      },
    ],
    [
      0,
      {
        [_eQN]: `HttpEndpoint`,
        [_xN]: _hE,
      },
    ],
    [
      0,
      {
        [_eQN]: `HttpProtocolIpv6`,
        [_xN]: _hPI,
      },
    ],
    [
      0,
      {
        [_eQN]: `InstanceMetadataTags`,
        [_xN]: _iMT,
      },
    ],
  ]
);
export var ModifyInstanceMetadataOptionsRequest = struct(
  n0,
  _MIMORod,
  0,
  [_II, _HT, _HPRHL, _HE, _DR, _HPI, _IMT],
  [0, 0, 1, 0, 2, 0, 0]
);
export var ModifyInstanceMetadataOptionsResult = struct(
  n0,
  _MIMORodi,
  0,
  [_II, _IMOn],
  [
    [
      0,
      {
        [_eQN]: `InstanceId`,
        [_xN]: _iI,
      },
    ],
    [
      () => InstanceMetadataOptionsResponse,
      {
        [_eQN]: `InstanceMetadataOptions`,
        [_xN]: _iMO,
      },
    ],
  ]
);
export var ModifyInstanceMetadataOptions = op(
  n0,
  _MIMOo,
  0,
  () => ModifyInstanceMetadataOptionsRequest,
  () => ModifyInstanceMetadataOptionsResult
);
