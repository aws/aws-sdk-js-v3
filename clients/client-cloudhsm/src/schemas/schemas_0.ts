export const _ATTR = "AddTagsToResource";
export const _ATTRR = "AddTagsToResourceRequest";
export const _ATTRRd = "AddTagsToResourceResponse";
export const _AZ = "AvailabilityZone";
export const _AZL = "AZList";
export const _C = "Certificate";
export const _CA = "ClientArn";
export const _CC = "ConfigCred";
export const _CF = "CertificateFingerprint";
export const _CFo = "ConfigFile";
export const _CH = "CreateHapg";
export const _CHIE = "CloudHsmInternalException";
export const _CHR = "CreateHapgRequest";
export const _CHRr = "CreateHapgResponse";
export const _CHRre = "CreateHsmRequest";
export const _CHRrea = "CreateHsmResponse";
export const _CHSE = "CloudHsmServiceException";
export const _CHr = "CreateHsm";
export const _CL = "ClientList";
export const _CLC = "CreateLunaClient";
export const _CLCR = "CreateLunaClientRequest";
export const _CLCRr = "CreateLunaClientResponse";
export const _CT = "ClientToken";
export const _CTo = "ConfigType";
export const _CV = "ClientVersion";
export const _DH = "DeleteHapg";
export const _DHR = "DeleteHapgRequest";
export const _DHRe = "DeleteHapgResponse";
export const _DHRel = "DeleteHsmRequest";
export const _DHRele = "DeleteHsmResponse";
export const _DHRes = "DescribeHapgRequest";
export const _DHResc = "DescribeHapgResponse";
export const _DHRescr = "DescribeHsmRequest";
export const _DHRescri = "DescribeHsmResponse";
export const _DHe = "DeleteHsm";
export const _DHes = "DescribeHapg";
export const _DHesc = "DescribeHsm";
export const _DLC = "DeleteLunaClient";
export const _DLCR = "DeleteLunaClientRequest";
export const _DLCRe = "DeleteLunaClientResponse";
export const _DLCRes = "DescribeLunaClientRequest";
export const _DLCResc = "DescribeLunaClientResponse";
export const _DLCe = "DescribeLunaClient";
export const _EI = "EniIp";
export const _EIn = "EniId";
export const _EIx = "ExternalId";
export const _GC = "GetConfig";
export const _GCR = "GetConfigRequest";
export const _GCRe = "GetConfigResponse";
export const _HA = "HapgArn";
export const _HAs = "HsmArn";
export const _HL = "HapgList";
export const _HLAF = "HsmsLastActionFailed";
export const _HLs = "HsmList";
export const _HPD = "HsmsPendingDeletion";
export const _HPR = "HsmsPendingRegistration";
export const _HS = "HapgSerial";
export const _HSN = "HsmSerialNumber";
export const _HT = "HsmType";
export const _IRA = "IamRoleArn";
export const _IRE = "InvalidRequestException";
export const _K = "Key";
export const _L = "Label";
export const _LAZ = "ListAvailableZones";
export const _LAZR = "ListAvailableZonesRequest";
export const _LAZRi = "ListAvailableZonesResponse";
export const _LH = "ListHapgs";
export const _LHR = "ListHapgsRequest";
export const _LHRi = "ListHapgsResponse";
export const _LHRis = "ListHsmsRequest";
export const _LHRist = "ListHsmsResponse";
export const _LHi = "ListHsms";
export const _LLC = "ListLunaClients";
export const _LLCR = "ListLunaClientsRequest";
export const _LLCRi = "ListLunaClientsResponse";
export const _LMT = "LastModifiedTimestamp";
export const _LTFR = "ListTagsForResource";
export const _LTFRR = "ListTagsForResourceRequest";
export const _LTFRRi = "ListTagsForResourceResponse";
export const _MH = "ModifyHapg";
export const _MHR = "ModifyHapgRequest";
export const _MHRo = "ModifyHapgResponse";
export const _MHRod = "ModifyHsmRequest";
export const _MHRodi = "ModifyHsmResponse";
export const _MHo = "ModifyHsm";
export const _MLC = "ModifyLunaClient";
export const _MLCR = "ModifyLunaClientRequest";
export const _MLCRo = "ModifyLunaClientResponse";
export const _NT = "NextToken";
export const _P = "Partitions";
export const _PSL = "PartitionSerialList";
export const _RA = "ResourceArn";
export const _RTFR = "RemoveTagsFromResource";
export const _RTFRR = "RemoveTagsFromResourceRequest";
export const _RTFRRe = "RemoveTagsFromResourceResponse";
export const _S = "Status";
export const _SCLU = "ServerCertLastUpdated";
export const _SCU = "ServerCertUri";
export const _SD = "StatusDetails";
export const _SED = "SubscriptionEndDate";
export const _SI = "SubnetId";
export const _SIy = "SyslogIp";
export const _SK = "SshKey";
export const _SKLU = "SshKeyLastUpdated";
export const _SN = "SerialNumber";
export const _SPK = "SshPublicKey";
export const _SSD = "SubscriptionStartDate";
export const _ST = "SubscriptionType";
export const _SV = "SoftwareVersion";
export const _St = "State";
export const _T = "Tag";
export const _TKL = "TagKeyList";
export const _TL = "TagList";
export const _V = "Value";
export const _VI = "VpcId";
export const _VN = "VendorName";
export const _c = "client";
export const _e = "error";
export const _m = "message";
export const _r = "retryable";
export const _s = "server";
export const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.cloudhsm";
export const _xN = "xmlName";
export const n0 = "com.amazonaws.cloudhsm";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import { StaticErrorSchema, StaticListSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import { CloudHSMServiceException as __CloudHSMServiceException } from "../models/CloudHSMServiceException";
import {
  CloudHsmInternalException as __CloudHsmInternalException,
  CloudHsmServiceException as __CloudHsmServiceException,
  InvalidRequestException as __InvalidRequestException,
} from "../models/index";

/* eslint no-var: 0 */

export var AddTagsToResourceRequest: StaticStructureSchema = [3, n0, _ATTRR, 0, [_RA, _TL], [0, () => TagList]];
export var AddTagsToResourceResponse: StaticStructureSchema = [3, n0, _ATTRRd, 0, [_S], [0]];
export var CloudHsmInternalException: StaticErrorSchema = [
  -3,
  n0,
  _CHIE,
  {
    [_e]: _s,
  },
  [_m, _r],
  [0, 2],
];
TypeRegistry.for(n0).registerError(CloudHsmInternalException, __CloudHsmInternalException);

export var CloudHsmServiceException: StaticErrorSchema = [
  -3,
  n0,
  _CHSE,
  {
    [_e]: _c,
  },
  [_m, _r],
  [0, 2],
];
TypeRegistry.for(n0).registerError(CloudHsmServiceException, __CloudHsmServiceException);

export var CreateHapgRequest: StaticStructureSchema = [3, n0, _CHR, 0, [_L], [0]];
export var CreateHapgResponse: StaticStructureSchema = [3, n0, _CHRr, 0, [_HA], [0]];
export var CreateHsmRequest: StaticStructureSchema = [
  3,
  n0,
  _CHRre,
  {
    [_xN]: _CHRre,
  },
  [_SI, _SK, _EI, _IRA, _EIx, _ST, _CT, _SIy],
  [
    [
      0,
      {
        [_xN]: _SI,
      },
    ],
    [
      0,
      {
        [_xN]: _SK,
      },
    ],
    [
      0,
      {
        [_xN]: _EI,
      },
    ],
    [
      0,
      {
        [_xN]: _IRA,
      },
    ],
    [
      0,
      {
        [_xN]: _EIx,
      },
    ],
    [
      0,
      {
        [_xN]: _ST,
      },
    ],
    [
      0,
      {
        [_xN]: _CT,
      },
    ],
    [
      0,
      {
        [_xN]: _SIy,
      },
    ],
  ],
];
export var CreateHsmResponse: StaticStructureSchema = [3, n0, _CHRrea, 0, [_HAs], [0]];
export var CreateLunaClientRequest: StaticStructureSchema = [3, n0, _CLCR, 0, [_L, _C], [0, 0]];
export var CreateLunaClientResponse: StaticStructureSchema = [3, n0, _CLCRr, 0, [_CA], [0]];
export var DeleteHapgRequest: StaticStructureSchema = [3, n0, _DHR, 0, [_HA], [0]];
export var DeleteHapgResponse: StaticStructureSchema = [3, n0, _DHRe, 0, [_S], [0]];
export var DeleteHsmRequest: StaticStructureSchema = [
  3,
  n0,
  _DHRel,
  {
    [_xN]: _DHRel,
  },
  [_HAs],
  [
    [
      0,
      {
        [_xN]: _HAs,
      },
    ],
  ],
];
export var DeleteHsmResponse: StaticStructureSchema = [3, n0, _DHRele, 0, [_S], [0]];
export var DeleteLunaClientRequest: StaticStructureSchema = [3, n0, _DLCR, 0, [_CA], [0]];
export var DeleteLunaClientResponse: StaticStructureSchema = [3, n0, _DLCRe, 0, [_S], [0]];
export var DescribeHapgRequest: StaticStructureSchema = [3, n0, _DHRes, 0, [_HA], [0]];
export var DescribeHapgResponse: StaticStructureSchema = [
  3,
  n0,
  _DHResc,
  0,
  [_HA, _HS, _HLAF, _HPD, _HPR, _L, _LMT, _PSL, _St],
  [0, 0, 64 | 0, 64 | 0, 64 | 0, 0, 0, 64 | 0, 0],
];
export var DescribeHsmRequest: StaticStructureSchema = [3, n0, _DHRescr, 0, [_HAs, _HSN], [0, 0]];
export var DescribeHsmResponse: StaticStructureSchema = [
  3,
  n0,
  _DHRescri,
  0,
  [_HAs, _S, _SD, _AZ, _EIn, _EI, _ST, _SSD, _SED, _VI, _SI, _IRA, _SN, _VN, _HT, _SV, _SPK, _SKLU, _SCU, _SCLU, _P],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64 | 0],
];
export var DescribeLunaClientRequest: StaticStructureSchema = [3, n0, _DLCRes, 0, [_CA, _CF], [0, 0]];
export var DescribeLunaClientResponse: StaticStructureSchema = [
  3,
  n0,
  _DLCResc,
  0,
  [_CA, _C, _CF, _LMT, _L],
  [0, 0, 0, 0, 0],
];
export var GetConfigRequest: StaticStructureSchema = [3, n0, _GCR, 0, [_CA, _CV, _HL], [0, 0, 64 | 0]];
export var GetConfigResponse: StaticStructureSchema = [3, n0, _GCRe, 0, [_CTo, _CFo, _CC], [0, 0, 0]];
export var InvalidRequestException: StaticErrorSchema = [
  -3,
  n0,
  _IRE,
  {
    [_e]: _c,
  },
  [_m, _r],
  [0, 2],
];
TypeRegistry.for(n0).registerError(InvalidRequestException, __InvalidRequestException);

export var ListAvailableZonesRequest: StaticStructureSchema = [3, n0, _LAZR, 0, [], []];
export var ListAvailableZonesResponse: StaticStructureSchema = [3, n0, _LAZRi, 0, [_AZL], [64 | 0]];
export var ListHapgsRequest: StaticStructureSchema = [3, n0, _LHR, 0, [_NT], [0]];
export var ListHapgsResponse: StaticStructureSchema = [3, n0, _LHRi, 0, [_HL, _NT], [64 | 0, 0]];
export var ListHsmsRequest: StaticStructureSchema = [3, n0, _LHRis, 0, [_NT], [0]];
export var ListHsmsResponse: StaticStructureSchema = [3, n0, _LHRist, 0, [_HLs, _NT], [64 | 0, 0]];
export var ListLunaClientsRequest: StaticStructureSchema = [3, n0, _LLCR, 0, [_NT], [0]];
export var ListLunaClientsResponse: StaticStructureSchema = [3, n0, _LLCRi, 0, [_CL, _NT], [64 | 0, 0]];
export var ListTagsForResourceRequest: StaticStructureSchema = [3, n0, _LTFRR, 0, [_RA], [0]];
export var ListTagsForResourceResponse: StaticStructureSchema = [3, n0, _LTFRRi, 0, [_TL], [() => TagList]];
export var ModifyHapgRequest: StaticStructureSchema = [3, n0, _MHR, 0, [_HA, _L, _PSL], [0, 0, 64 | 0]];
export var ModifyHapgResponse: StaticStructureSchema = [3, n0, _MHRo, 0, [_HA], [0]];
export var ModifyHsmRequest: StaticStructureSchema = [
  3,
  n0,
  _MHRod,
  {
    [_xN]: _MHRod,
  },
  [_HAs, _SI, _EI, _IRA, _EIx, _SIy],
  [
    [
      0,
      {
        [_xN]: _HAs,
      },
    ],
    [
      0,
      {
        [_xN]: _SI,
      },
    ],
    [
      0,
      {
        [_xN]: _EI,
      },
    ],
    [
      0,
      {
        [_xN]: _IRA,
      },
    ],
    [
      0,
      {
        [_xN]: _EIx,
      },
    ],
    [
      0,
      {
        [_xN]: _SIy,
      },
    ],
  ],
];
export var ModifyHsmResponse: StaticStructureSchema = [3, n0, _MHRodi, 0, [_HAs], [0]];
export var ModifyLunaClientRequest: StaticStructureSchema = [3, n0, _MLCR, 0, [_CA, _C], [0, 0]];
export var ModifyLunaClientResponse: StaticStructureSchema = [3, n0, _MLCRo, 0, [_CA], [0]];
export var RemoveTagsFromResourceRequest: StaticStructureSchema = [3, n0, _RTFRR, 0, [_RA, _TKL], [0, 64 | 0]];
export var RemoveTagsFromResourceResponse: StaticStructureSchema = [3, n0, _RTFRRe, 0, [_S], [0]];
export var Tag: StaticStructureSchema = [3, n0, _T, 0, [_K, _V], [0, 0]];
export var __Unit = "unit" as const;

export var CloudHSMServiceException: StaticErrorSchema = [-3, _sm, "CloudHSMServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(CloudHSMServiceException, __CloudHSMServiceException);

export var AZList = 64 | 0;

export var ClientList = 64 | 0;

export var HapgList = 64 | 0;

export var HsmList = 64 | 0;

export var PartitionList = 64 | 0;

export var PartitionSerialList = 64 | 0;

export var TagKeyList = 64 | 0;

export var TagList: StaticListSchema = [1, n0, _TL, 0, () => Tag];
export var AddTagsToResource: StaticOperationSchema = [
  9,
  n0,
  _ATTR,
  0,
  () => AddTagsToResourceRequest,
  () => AddTagsToResourceResponse,
];
export var CreateHapg: StaticOperationSchema = [9, n0, _CH, 0, () => CreateHapgRequest, () => CreateHapgResponse];
export var CreateHsm: StaticOperationSchema = [9, n0, _CHr, 0, () => CreateHsmRequest, () => CreateHsmResponse];
export var CreateLunaClient: StaticOperationSchema = [
  9,
  n0,
  _CLC,
  0,
  () => CreateLunaClientRequest,
  () => CreateLunaClientResponse,
];
export var DeleteHapg: StaticOperationSchema = [9, n0, _DH, 0, () => DeleteHapgRequest, () => DeleteHapgResponse];
export var DeleteHsm: StaticOperationSchema = [9, n0, _DHe, 0, () => DeleteHsmRequest, () => DeleteHsmResponse];
export var DeleteLunaClient: StaticOperationSchema = [
  9,
  n0,
  _DLC,
  0,
  () => DeleteLunaClientRequest,
  () => DeleteLunaClientResponse,
];
export var DescribeHapg: StaticOperationSchema = [
  9,
  n0,
  _DHes,
  0,
  () => DescribeHapgRequest,
  () => DescribeHapgResponse,
];
export var DescribeHsm: StaticOperationSchema = [9, n0, _DHesc, 0, () => DescribeHsmRequest, () => DescribeHsmResponse];
export var DescribeLunaClient: StaticOperationSchema = [
  9,
  n0,
  _DLCe,
  0,
  () => DescribeLunaClientRequest,
  () => DescribeLunaClientResponse,
];
export var GetConfig: StaticOperationSchema = [9, n0, _GC, 0, () => GetConfigRequest, () => GetConfigResponse];
export var ListAvailableZones: StaticOperationSchema = [
  9,
  n0,
  _LAZ,
  0,
  () => ListAvailableZonesRequest,
  () => ListAvailableZonesResponse,
];
export var ListHapgs: StaticOperationSchema = [9, n0, _LH, 0, () => ListHapgsRequest, () => ListHapgsResponse];
export var ListHsms: StaticOperationSchema = [9, n0, _LHi, 0, () => ListHsmsRequest, () => ListHsmsResponse];
export var ListLunaClients: StaticOperationSchema = [
  9,
  n0,
  _LLC,
  0,
  () => ListLunaClientsRequest,
  () => ListLunaClientsResponse,
];
export var ListTagsForResource: StaticOperationSchema = [
  9,
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse,
];
export var ModifyHapg: StaticOperationSchema = [9, n0, _MH, 0, () => ModifyHapgRequest, () => ModifyHapgResponse];
export var ModifyHsm: StaticOperationSchema = [9, n0, _MHo, 0, () => ModifyHsmRequest, () => ModifyHsmResponse];
export var ModifyLunaClient: StaticOperationSchema = [
  9,
  n0,
  _MLC,
  0,
  () => ModifyLunaClientRequest,
  () => ModifyLunaClientResponse,
];
export var RemoveTagsFromResource: StaticOperationSchema = [
  9,
  n0,
  _RTFR,
  0,
  () => RemoveTagsFromResourceRequest,
  () => RemoveTagsFromResourceResponse,
];
