// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  InsufficientDeliveryPolicyException as __InsufficientDeliveryPolicyException,
  InvalidDeliveryChannelNameException as __InvalidDeliveryChannelNameException,
  InvalidS3KeyPrefixException as __InvalidS3KeyPrefixException,
  InvalidS3KmsKeyArnException as __InvalidS3KmsKeyArnException,
  InvalidSNSTopicARNException as __InvalidSNSTopicARNException,
  MaxNumberOfDeliveryChannelsExceededException as __MaxNumberOfDeliveryChannelsExceededException,
  NoSuchBucketException as __NoSuchBucketException,
} from "../models/index";
import {
  _cl,
  _CSDP,
  _cSDP,
  _D,
  _DC,
  _DCe,
  _DCL,
  _DCNe,
  _DDCe,
  _DDCRe,
  _DDCRes,
  _dF,
  _e,
  _IDCNE,
  _IDPE,
  _IP,
  _ISKKAE,
  _ISKPE,
  _ISNSTARNE,
  _LFA,
  _m,
  _MEF,
  _MNODCEE,
  _n,
  _NSBE,
  _OCRM,
  _OCRTT,
  _OMRM,
  _PDC,
  _PDCR,
  _RIS,
  _RIu,
  _RTS,
  _sBN,
  _sKKA,
  _sKP,
  _sTARN,
  _TKS,
  _TVS,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ConfigSnapshotDeliveryProperties = struct(n0, _CSDP, 0, [_dF], [0]);
export var DeliveryChannel = struct(
  n0,
  _DC,
  0,
  [_n, _sBN, _sKP, _sKKA, _sTARN, _cSDP],
  [0, 0, 0, 0, 0, () => ConfigSnapshotDeliveryProperties]
);
export var DescribeDeliveryChannelsRequest = struct(n0, _DDCRe, 0, [_DCNe], [64 | 0]);
export var DescribeDeliveryChannelsResponse = struct(n0, _DDCRes, 0, [_DCe], [() => DeliveryChannelList]);
export var InsufficientDeliveryPolicyException = error(
  n0,
  _IDPE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __InsufficientDeliveryPolicyException
);
export var InvalidDeliveryChannelNameException = error(
  n0,
  _IDCNE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __InvalidDeliveryChannelNameException
);
export var InvalidS3KeyPrefixException = error(
  n0,
  _ISKPE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __InvalidS3KeyPrefixException
);
export var InvalidS3KmsKeyArnException = error(
  n0,
  _ISKKAE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __InvalidS3KmsKeyArnException
);
export var InvalidSNSTopicARNException = error(
  n0,
  _ISNSTARNE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __InvalidSNSTopicARNException
);
export var MaxNumberOfDeliveryChannelsExceededException = error(
  n0,
  _MNODCEE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __MaxNumberOfDeliveryChannelsExceededException
);
export var NoSuchBucketException = error(
  n0,
  _NSBE,
  {
    [_e]: _cl,
  },
  [_m],
  [0],

  __NoSuchBucketException
);
export var OrganizationCustomRuleMetadata = struct(
  n0,
  _OCRM,
  0,
  [_D, _LFA, _OCRTT, _IP, _MEF, _RTS, _RIS, _TKS, _TVS],
  [0, 0, 64 | 0, 0, 0, 64 | 0, 0, 0, 0]
);
export var OrganizationManagedRuleMetadata = struct(
  n0,
  _OMRM,
  0,
  [_D, _RIu, _IP, _MEF, _RTS, _RIS, _TKS, _TVS],
  [0, 0, 0, 0, 64 | 0, 0, 0, 0]
);
export var PutDeliveryChannelRequest = struct(n0, _PDCR, 0, [_DC], [() => DeliveryChannel]);
export var DebugLogDeliveryAccounts = 64 | 0;

export var DeliveryChannelList = list(n0, _DCL, 0, () => DeliveryChannel);
export var OrganizationConfigRuleTriggerTypeNoSNs = 64 | 0;

export var OrganizationConfigRuleTriggerTypes = 64 | 0;

export var ResourceTypesScope = 64 | 0;

export var DescribeDeliveryChannels = op(
  n0,
  _DDCe,
  0,
  () => DescribeDeliveryChannelsRequest,
  () => DescribeDeliveryChannelsResponse
);
export var PutDeliveryChannel = op(
  n0,
  _PDC,
  0,
  () => PutDeliveryChannelRequest,
  () => Unit
);
