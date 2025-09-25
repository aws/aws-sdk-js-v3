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
export const _xN = "xmlName";
export const n0 = "com.amazonaws.cloudhsm";

// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import { CloudHSMServiceException as __CloudHSMServiceException } from "../models/CloudHSMServiceException";
import {
  CloudHsmInternalException as __CloudHsmInternalException,
  CloudHsmServiceException as __CloudHsmServiceException,
  InvalidRequestException as __InvalidRequestException,
} from "../models/index";

/* eslint no-var: 0 */

export var CloudHsmInternalException = error(
  n0,
  _CHIE,
  {
    [_e]: _s,
  },
  [_m, _r],
  [0, 2],

  __CloudHsmInternalException
);
export var CloudHsmServiceException = error(
  n0,
  _CHSE,
  {
    [_e]: _c,
  },
  [_m, _r],
  [0, 2],

  __CloudHsmServiceException
);
export var InvalidRequestException = error(
  n0,
  _IRE,
  {
    [_e]: _c,
  },
  [_m, _r],
  [0, 2],

  __InvalidRequestException
);
export var CloudHSMServiceException = error(
  "smithy.ts.sdk.synthetic.com.amazonaws.cloudhsm",
  "CloudHSMServiceException",
  0,
  [],
  [],
  __CloudHSMServiceException
);
