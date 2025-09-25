// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ResourceNotReadyException as __ResourceNotReadyException } from "../models/index";
import {
  _AZ,
  _c,
  _CNIr,
  _CNOr,
  _CNr,
  _CRT,
  _DM,
  _DMI,
  _DMO,
  _DN,
  _DNI,
  _DNO,
  _e,
  _h,
  _hE,
  _hQ,
  _IT,
  _LPC,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _M,
  _MI,
  _mI,
  _NC,
  _NI,
  _NIo,
  _RA,
  _RNRE,
  _SDB,
  _Ta,
  _TK,
  _tK,
  _TR,
  _TRR,
  _TRRa,
  _UR,
  _URR,
  _URRn,
  n0,
} from "./schemas_0";
import { NodeLogPublishingConfiguration } from "./schemas_7_Create";

/* eslint no-var: 0 */

export var CreateNodeInput = struct(
  n0,
  _CNIr,
  0,
  [_CRT, _NI, _MI, _NC, _Ta],
  [[0, 4], [0, 1], 0, () => NodeConfiguration, 128 | 0]
);
export var CreateNodeOutput = struct(n0, _CNOr, 0, [_NIo], [0]);
export var DeleteMemberInput = struct(
  n0,
  _DMI,
  0,
  [_NI, _MI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteMemberOutput = struct(n0, _DMO, 0, [], []);
export var DeleteNodeInput = struct(
  n0,
  _DNI,
  0,
  [_NI, _MI, _NIo],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _mI,
      },
    ],
    [0, 1],
  ]
);
export var DeleteNodeOutput = struct(n0, _DNO, 0, [], []);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RA], [[0, 1]]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_Ta], [128 | 0]);
export var NodeConfiguration = struct(
  n0,
  _NC,
  0,
  [_IT, _AZ, _LPC, _SDB],
  [0, 0, () => NodeLogPublishingConfiguration, 0]
);
export var ResourceNotReadyException = error(
  n0,
  _RNRE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __ResourceNotReadyException
);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RA, _Ta], [[0, 1], 128 | 0]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_RA, _TK],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _tK,
      },
    ],
  ]
);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var TagKeyList = 64 | 0;

export var CreateNode = op(
  n0,
  _CNr,
  {
    [_h]: ["POST", "/networks/{NetworkId}/nodes", 200],
  },
  () => CreateNodeInput,
  () => CreateNodeOutput
);
export var DeleteMember = op(
  n0,
  _DM,
  {
    [_h]: ["DELETE", "/networks/{NetworkId}/members/{MemberId}", 200],
  },
  () => DeleteMemberInput,
  () => DeleteMemberOutput
);
export var DeleteNode = op(
  n0,
  _DN,
  {
    [_h]: ["DELETE", "/networks/{NetworkId}/nodes/{NodeId}", 200],
  },
  () => DeleteNodeInput,
  () => DeleteNodeOutput
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
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/tags/{ResourceArn}", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/tags/{ResourceArn}", 200],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
