// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  CannotUpdateEntityWhileInUse as __CannotUpdateEntityWhileInUse,
  EntityAlreadyExists as __EntityAlreadyExists,
  EntityLimitExceeded as __EntityLimitExceeded,
  EntitySizeLimitExceeded as __EntitySizeLimitExceeded,
} from "../models/index";
import {
  _AIL,
  _AILI,
  _c,
  _CAIL,
  _CAILR,
  _CAILRr,
  _CCG,
  _CCGR,
  _CCGRr,
  _CG,
  _CKVS,
  _CKVSR,
  _CKVSRr,
  _Co,
  _CUEWIU,
  _CVO,
  _CVOR,
  _CVORr,
  _E,
  _e,
  _EAE,
  _ELE,
  _ESLE,
  _ET,
  _h,
  _hE,
  _hH,
  _hP,
  _IC,
  _Id,
  _IE,
  _IM,
  _IM_,
  _IS,
  _KVS,
  _L,
  _M,
  _N,
  _SARN,
  _STo,
  _Ta,
  _UCG,
  _UCGR,
  _UCGRp,
  _UVO,
  _UVOR,
  _UVORp,
  _VO,
  _VOEC,
  _xN,
  n0,
  Tags,
} from "./schemas_0";
import { AnycastIpList } from "./schemas_8_AnycastIp";
import { KeyValueStore } from "./schemas_35_KeyValue";
import { ConnectionGroup } from "./schemas_36_Group";
import { VpcOrigin, VpcOriginEndpointConfig } from "./schemas_57_Origin";

/* eslint no-var: 0 */

export var CannotUpdateEntityWhileInUse = error(
  n0,
  _CUEWIU,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __CannotUpdateEntityWhileInUse
);
export var CreateAnycastIpListRequest = struct(n0, _CAILR, 0, [_N, _IC, _Ta], [0, 1, [() => Tags, 0]]);
export var CreateAnycastIpListResult = struct(
  n0,
  _CAILRr,
  0,
  [_AIL, _ET],
  [
    [() => AnycastIpList, 16],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var CreateConnectionGroupRequest = struct(
  n0,
  _CCGR,
  0,
  [_N, _IE, _Ta, _AILI, _E],
  [0, 2, [() => Tags, 0], 0, 2]
);
export var CreateConnectionGroupResult = struct(
  n0,
  _CCGRr,
  0,
  [_CG, _ET],
  [
    [() => ConnectionGroup, 16],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var CreateKeyValueStoreRequest = struct(n0, _CKVSR, 0, [_N, _Co, _IS], [0, 0, () => ImportSource]);
export var CreateKeyValueStoreResult = struct(
  n0,
  _CKVSRr,
  0,
  [_KVS, _ET, _L],
  [
    [() => KeyValueStore, 16],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
    [
      0,
      {
        [_hH]: _L,
      },
    ],
  ]
);
export var CreateVpcOriginRequest = struct(
  n0,
  _CVOR,
  0,
  [_VOEC, _Ta],
  [
    [() => VpcOriginEndpointConfig, 0],
    [() => Tags, 0],
  ]
);
export var CreateVpcOriginResult = struct(
  n0,
  _CVORr,
  0,
  [_VO, _L, _ET],
  [
    [() => VpcOrigin, 16],
    [
      0,
      {
        [_hH]: _L,
      },
    ],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var EntityAlreadyExists = error(
  n0,
  _EAE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __EntityAlreadyExists
);
export var EntityLimitExceeded = error(
  n0,
  _ELE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __EntityLimitExceeded
);
export var EntitySizeLimitExceeded = error(
  n0,
  _ESLE,
  {
    [_e]: _c,
    [_hE]: 413,
  },
  [_M],
  [0],

  __EntitySizeLimitExceeded
);
export var ImportSource = struct(n0, _IS, 0, [_STo, _SARN], [0, 0]);
export var UpdateConnectionGroupRequest = struct(
  n0,
  _UCGR,
  0,
  [_Id, _IE, _IM, _AILI, _E],
  [
    [0, 1],
    2,
    [
      0,
      {
        [_hH]: _IM_,
      },
    ],
    0,
    2,
  ]
);
export var UpdateConnectionGroupResult = struct(
  n0,
  _UCGRp,
  0,
  [_CG, _ET],
  [
    [() => ConnectionGroup, 16],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var UpdateVpcOriginRequest = struct(
  n0,
  _UVOR,
  0,
  [_VOEC, _Id, _IM],
  [
    [
      () => VpcOriginEndpointConfig,
      {
        [_xN]: _VOEC,
        [_hP]: 1,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_hH]: _IM_,
      },
    ],
  ]
);
export var UpdateVpcOriginResult = struct(
  n0,
  _UVORp,
  0,
  [_VO, _ET],
  [
    [() => VpcOrigin, 16],
    [
      0,
      {
        [_hH]: _ET,
      },
    ],
  ]
);
export var CreateAnycastIpList = op(
  n0,
  _CAIL,
  {
    [_h]: ["POST", "/2020-05-31/anycast-ip-list", 202],
  },
  () => CreateAnycastIpListRequest,
  () => CreateAnycastIpListResult
);
export var CreateConnectionGroup = op(
  n0,
  _CCG,
  {
    [_h]: ["POST", "/2020-05-31/connection-group", 201],
  },
  () => CreateConnectionGroupRequest,
  () => CreateConnectionGroupResult
);
export var CreateKeyValueStore = op(
  n0,
  _CKVS,
  {
    [_h]: ["POST", "/2020-05-31/key-value-store", 201],
  },
  () => CreateKeyValueStoreRequest,
  () => CreateKeyValueStoreResult
);
export var CreateVpcOrigin = op(
  n0,
  _CVO,
  {
    [_h]: ["POST", "/2020-05-31/vpc-origin", 202],
  },
  () => CreateVpcOriginRequest,
  () => CreateVpcOriginResult
);
export var UpdateConnectionGroup = op(
  n0,
  _UCG,
  {
    [_h]: ["PUT", "/2020-05-31/connection-group/{Id}", 200],
  },
  () => UpdateConnectionGroupRequest,
  () => UpdateConnectionGroupResult
);
export var UpdateVpcOrigin = op(
  n0,
  _UVO,
  {
    [_h]: ["PUT", "/2020-05-31/vpc-origin/{Id}", 202],
  },
  () => UpdateVpcOriginRequest,
  () => UpdateVpcOriginResult
);
