// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AIs,
  _AISC,
  _AISCR,
  _AISCRs,
  _ASK,
  _ASKR,
  _ASKRs,
  _BNu,
  _BP,
  _CT,
  _cT,
  _CTr,
  _DISC,
  _DISCi,
  _DISCR,
  _DISCRe,
  _DISCRi,
  _DSK,
  _DSKR,
  _ECn,
  _ETnc,
  _FAir,
  _h,
  _hQ,
  _II,
  _ISC,
  _ISCn,
  _iT,
  _K,
  _KFC,
  _KI,
  _KSC,
  _KVSC,
  _LISC,
  _LISCR,
  _LISCRi,
  _LSK,
  _LSKR,
  _LSKRi,
  _mR,
  _MRa,
  _NT,
  _nT,
  _Pre,
  _RPH,
  _RT,
  _rT,
  _SAt,
  _SCon,
  _SCt,
  _SCto,
  _SK,
  _SKe,
  _SKL,
  _STto,
  _UISC,
  _UISCR,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateInstanceStorageConfigRequest = struct(
  n0,
  _AISCR,
  0,
  [_II, _RT, _SCt, _CT],
  [[0, 1], 0, () => InstanceStorageConfig, [0, 4]]
);
export var AssociateInstanceStorageConfigResponse = struct(n0, _AISCRs, 0, [_AIs], [0]);
export var AssociateSecurityKeyRequest = struct(n0, _ASKR, 0, [_II, _K, _CT], [[0, 1], 0, [0, 4]]);
export var AssociateSecurityKeyResponse = struct(n0, _ASKRs, 0, [_AIs], [0]);
export var DescribeInstanceStorageConfigRequest = struct(
  n0,
  _DISCR,
  0,
  [_II, _AIs, _RT],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _rT,
      },
    ],
  ]
);
export var DescribeInstanceStorageConfigResponse = struct(n0, _DISCRe, 0, [_SCt], [() => InstanceStorageConfig]);
export var DisassociateInstanceStorageConfigRequest = struct(
  n0,
  _DISCRi,
  0,
  [_II, _AIs, _RT, _CT],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _rT,
      },
    ],
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _cT,
      },
    ],
  ]
);
export var DisassociateSecurityKeyRequest = struct(
  n0,
  _DSKR,
  0,
  [_II, _AIs, _CT],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _cT,
      },
    ],
  ]
);
export var EncryptionConfig = struct(n0, _ECn, 0, [_ETnc, _KI], [0, 0]);
export var InstanceStorageConfig = struct(
  n0,
  _ISC,
  0,
  [_AIs, _STto, _SCon, _KVSC, _KSC, _KFC],
  [0, 0, () => S3Config, () => KinesisVideoStreamConfig, () => KinesisStreamConfig, () => KinesisFirehoseConfig]
);
export var KinesisFirehoseConfig = struct(n0, _KFC, 0, [_FAir], [0]);
export var KinesisStreamConfig = struct(n0, _KSC, 0, [_SAt], [0]);
export var KinesisVideoStreamConfig = struct(n0, _KVSC, 0, [_Pre, _RPH, _ECn], [0, 1, () => EncryptionConfig]);
export var ListInstanceStorageConfigsRequest = struct(
  n0,
  _LISCR,
  0,
  [_II, _RT, _NT, _MRa],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _rT,
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
export var ListInstanceStorageConfigsResponse = struct(n0, _LISCRi, 0, [_SCto, _NT], [() => InstanceStorageConfigs, 0]);
export var ListSecurityKeysRequest = struct(
  n0,
  _LSKR,
  0,
  [_II, _NT, _MRa],
  [
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
export var ListSecurityKeysResponse = struct(n0, _LSKRi, 0, [_SK, _NT], [() => SecurityKeysList, 0]);
export var S3Config = struct(n0, _SCon, 0, [_BNu, _BP, _ECn], [0, 0, () => EncryptionConfig]);
export var SecurityKey = struct(n0, _SKe, 0, [_AIs, _K, _CTr], [0, 0, 4]);
export var UpdateInstanceStorageConfigRequest = struct(
  n0,
  _UISCR,
  0,
  [_II, _AIs, _RT, _SCt, _CT],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _rT,
      },
    ],
    () => InstanceStorageConfig,
    [0, 4],
  ]
);
export var InstanceStorageConfigs = list(n0, _ISCn, 0, () => InstanceStorageConfig);
export var SecurityKeysList = list(n0, _SKL, 0, () => SecurityKey);
export var AssociateInstanceStorageConfig = op(
  n0,
  _AISC,
  {
    [_h]: ["PUT", "/instance/{InstanceId}/storage-config", 200],
  },
  () => AssociateInstanceStorageConfigRequest,
  () => AssociateInstanceStorageConfigResponse
);
export var AssociateSecurityKey = op(
  n0,
  _ASK,
  {
    [_h]: ["PUT", "/instance/{InstanceId}/security-key", 200],
  },
  () => AssociateSecurityKeyRequest,
  () => AssociateSecurityKeyResponse
);
export var DescribeInstanceStorageConfig = op(
  n0,
  _DISC,
  {
    [_h]: ["GET", "/instance/{InstanceId}/storage-config/{AssociationId}", 200],
  },
  () => DescribeInstanceStorageConfigRequest,
  () => DescribeInstanceStorageConfigResponse
);
export var DisassociateInstanceStorageConfig = op(
  n0,
  _DISCi,
  {
    [_h]: ["DELETE", "/instance/{InstanceId}/storage-config/{AssociationId}", 200],
  },
  () => DisassociateInstanceStorageConfigRequest,
  () => Unit
);
export var DisassociateSecurityKey = op(
  n0,
  _DSK,
  {
    [_h]: ["DELETE", "/instance/{InstanceId}/security-key/{AssociationId}", 200],
  },
  () => DisassociateSecurityKeyRequest,
  () => Unit
);
export var ListInstanceStorageConfigs = op(
  n0,
  _LISC,
  {
    [_h]: ["GET", "/instance/{InstanceId}/storage-configs", 200],
  },
  () => ListInstanceStorageConfigsRequest,
  () => ListInstanceStorageConfigsResponse
);
export var ListSecurityKeys = op(
  n0,
  _LSK,
  {
    [_h]: ["GET", "/instance/{InstanceId}/security-keys", 200],
  },
  () => ListSecurityKeysRequest,
  () => ListSecurityKeysResponse
);
export var UpdateInstanceStorageConfig = op(
  n0,
  _UISC,
  {
    [_h]: ["POST", "/instance/{InstanceId}/storage-config/{AssociationId}", 200],
  },
  () => UpdateInstanceStorageConfigRequest,
  () => Unit
);
