// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AA,
  _AO,
  _CCS,
  _CCSR,
  _CCSRr,
  _CDIP,
  _CDIPR,
  _CDIPRr,
  _CRD,
  _CSN,
  _DDIP,
  _DDIPR,
  _DDIPRe,
  _DI,
  _DIe,
  _DIL,
  _DIPe,
  _DIPed,
  _DO,
  _DPN,
  _GCS,
  _GCSR,
  _GCSRe,
  _GDI,
  _GDIe,
  _GDIP,
  _GDIPR,
  _GDIPRe,
  _GDIR,
  _GDIRe,
  _GDIRet,
  _GDIRete,
  _h,
  _HP,
  _hQ,
  _Ip,
  _LDIP,
  _LDIPR,
  _LDIPRi,
  _LFS,
  _MDS,
  _NT,
  _PDIIP,
  _PDIIPR,
  _PDIIPRu,
  _PDIPSA,
  _PDIPSAR,
  _PDIPSARu,
  _PN,
  _PS,
  _RME,
  _RO,
  _SEe,
  _SM,
  _SO,
  _SOu,
  _SPN,
  _SR,
  _Ta,
  _TO,
  _TPl,
  _VO,
  _WP,
  _WS,
  n0,
  TagList,
} from "./schemas_0";
import { VdmOptions } from "./schemas_10_ConfigurationSet";

/* eslint no-var: 0 */

export var ArchivingOptions = struct(n0, _AO, 0, [_AA], [0]);
export var CreateConfigurationSetRequest = struct(
  n0,
  _CCSR,
  0,
  [_CSN, _TO, _DO, _RO, _SO, _Ta, _SOu, _VO, _AO],
  [
    0,
    () => TrackingOptions,
    () => DeliveryOptions,
    () => ReputationOptions,
    () => SendingOptions,
    () => TagList,
    () => SuppressionOptions,
    () => VdmOptions,
    () => ArchivingOptions,
  ]
);
export var CreateConfigurationSetResponse = struct(n0, _CCSRr, 0, [], []);
export var CreateDedicatedIpPoolRequest = struct(n0, _CDIPR, 0, [_PN, _Ta, _SM], [0, () => TagList, 0]);
export var CreateDedicatedIpPoolResponse = struct(n0, _CDIPRr, 0, [], []);
export var DedicatedIp = struct(n0, _DI, 0, [_Ip, _WS, _WP, _PN], [0, 0, 1, 0]);
export var DedicatedIpPool = struct(n0, _DIPe, 0, [_PN, _SM], [0, 0]);
export var DeleteDedicatedIpPoolRequest = struct(n0, _DDIPR, 0, [_PN], [[0, 1]]);
export var DeleteDedicatedIpPoolResponse = struct(n0, _DDIPRe, 0, [], []);
export var DeliveryOptions = struct(n0, _DO, 0, [_TPl, _SPN, _MDS], [0, 0, 1]);
export var GetConfigurationSetRequest = struct(n0, _GCSR, 0, [_CSN], [[0, 1]]);
export var GetConfigurationSetResponse = struct(
  n0,
  _GCSRe,
  0,
  [_CSN, _TO, _DO, _RO, _SO, _Ta, _SOu, _VO, _AO],
  [
    0,
    () => TrackingOptions,
    () => DeliveryOptions,
    () => ReputationOptions,
    () => SendingOptions,
    () => TagList,
    () => SuppressionOptions,
    () => VdmOptions,
    () => ArchivingOptions,
  ]
);
export var GetDedicatedIpPoolRequest = struct(n0, _GDIPR, 0, [_PN], [[0, 1]]);
export var GetDedicatedIpPoolResponse = struct(n0, _GDIPRe, 0, [_DIPe], [() => DedicatedIpPool]);
export var GetDedicatedIpRequest = struct(n0, _GDIR, 0, [_Ip], [[0, 1]]);
export var GetDedicatedIpResponse = struct(n0, _GDIRe, 0, [_DI], [() => DedicatedIp]);
export var GetDedicatedIpsRequest = struct(
  n0,
  _GDIRet,
  0,
  [_PN, _NT, _PS],
  [
    [
      0,
      {
        [_hQ]: _PN,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      1,
      {
        [_hQ]: _PS,
      },
    ],
  ]
);
export var GetDedicatedIpsResponse = struct(n0, _GDIRete, 0, [_DIe, _NT], [() => DedicatedIpList, 0]);
export var ListDedicatedIpPoolsRequest = struct(
  n0,
  _LDIPR,
  0,
  [_NT, _PS],
  [
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      1,
      {
        [_hQ]: _PS,
      },
    ],
  ]
);
export var ListDedicatedIpPoolsResponse = struct(n0, _LDIPRi, 0, [_DIPed, _NT], [64 | 0, 0]);
export var PutDedicatedIpInPoolRequest = struct(n0, _PDIIPR, 0, [_Ip, _DPN], [[0, 1], 0]);
export var PutDedicatedIpInPoolResponse = struct(n0, _PDIIPRu, 0, [], []);
export var PutDedicatedIpPoolScalingAttributesRequest = struct(n0, _PDIPSAR, 0, [_PN, _SM], [[0, 1], 0]);
export var PutDedicatedIpPoolScalingAttributesResponse = struct(n0, _PDIPSARu, 0, [], []);
export var ReputationOptions = struct(n0, _RO, 0, [_RME, _LFS], [2, 4]);
export var SendingOptions = struct(n0, _SO, 0, [_SEe], [2]);
export var SuppressionOptions = struct(n0, _SOu, 0, [_SR], [64 | 0]);
export var TrackingOptions = struct(n0, _TO, 0, [_CRD, _HP], [0, 0]);
export var DedicatedIpList = list(n0, _DIL, 0, () => DedicatedIp);
export var ListOfDedicatedIpPools = 64 | 0;

export var CreateConfigurationSet = op(
  n0,
  _CCS,
  {
    [_h]: ["POST", "/v2/email/configuration-sets", 200],
  },
  () => CreateConfigurationSetRequest,
  () => CreateConfigurationSetResponse
);
export var CreateDedicatedIpPool = op(
  n0,
  _CDIP,
  {
    [_h]: ["POST", "/v2/email/dedicated-ip-pools", 200],
  },
  () => CreateDedicatedIpPoolRequest,
  () => CreateDedicatedIpPoolResponse
);
export var DeleteDedicatedIpPool = op(
  n0,
  _DDIP,
  {
    [_h]: ["DELETE", "/v2/email/dedicated-ip-pools/{PoolName}", 200],
  },
  () => DeleteDedicatedIpPoolRequest,
  () => DeleteDedicatedIpPoolResponse
);
export var GetConfigurationSet = op(
  n0,
  _GCS,
  {
    [_h]: ["GET", "/v2/email/configuration-sets/{ConfigurationSetName}", 200],
  },
  () => GetConfigurationSetRequest,
  () => GetConfigurationSetResponse
);
export var GetDedicatedIp = op(
  n0,
  _GDI,
  {
    [_h]: ["GET", "/v2/email/dedicated-ips/{Ip}", 200],
  },
  () => GetDedicatedIpRequest,
  () => GetDedicatedIpResponse
);
export var GetDedicatedIpPool = op(
  n0,
  _GDIP,
  {
    [_h]: ["GET", "/v2/email/dedicated-ip-pools/{PoolName}", 200],
  },
  () => GetDedicatedIpPoolRequest,
  () => GetDedicatedIpPoolResponse
);
export var GetDedicatedIps = op(
  n0,
  _GDIe,
  {
    [_h]: ["GET", "/v2/email/dedicated-ips", 200],
  },
  () => GetDedicatedIpsRequest,
  () => GetDedicatedIpsResponse
);
export var ListDedicatedIpPools = op(
  n0,
  _LDIP,
  {
    [_h]: ["GET", "/v2/email/dedicated-ip-pools", 200],
  },
  () => ListDedicatedIpPoolsRequest,
  () => ListDedicatedIpPoolsResponse
);
export var PutDedicatedIpInPool = op(
  n0,
  _PDIIP,
  {
    [_h]: ["PUT", "/v2/email/dedicated-ips/{Ip}/pool", 200],
  },
  () => PutDedicatedIpInPoolRequest,
  () => PutDedicatedIpInPoolResponse
);
export var PutDedicatedIpPoolScalingAttributes = op(
  n0,
  _PDIPSA,
  {
    [_h]: ["PUT", "/v2/email/dedicated-ip-pools/{PoolName}/scaling", 200],
  },
  () => PutDedicatedIpPoolScalingAttributesRequest,
  () => PutDedicatedIpPoolScalingAttributesResponse
);
