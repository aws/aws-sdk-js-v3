// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { DataEncryptionException as __DataEncryptionException } from "../models/index";
import {
  _A,
  _AS,
  _c,
  _CA,
  _CCA,
  _CCAo,
  _CCC,
  _CCCR,
  _CCCRr,
  _CCI,
  _CCR,
  _CCr,
  _CCRr,
  _CI,
  _Co,
  _CTI,
  _CTIo,
  _DA,
  _DAe,
  _DEE,
  _DEes,
  _DER,
  _DERe,
  _DIM,
  _DN,
  _DP,
  _DPR,
  _DPRe,
  _DT,
  _e,
  _EA,
  _EI,
  _GC,
  _GCC,
  _GCCR,
  _GCCRe,
  _GCR,
  _GCRe,
  _hE,
  _IE,
  _II,
  _IT,
  _M,
  _Na,
  _P,
  _PA,
  _PC,
  _PI,
  _PS,
  _RIIM,
  _RIot,
  _RTea,
  _SA,
  _SAC,
  _SACR,
  _SACRe,
  _SE,
  _Se,
  _SER,
  _SERt,
  _SL,
  _ST,
  _St,
  _Sta,
  _STe,
  _STt,
  _Su,
  _T,
  _Ta,
  _Tar,
  _Targ,
  _TLa,
  _UC,
  _UCC,
  _UCCR,
  _UCCRp,
  _UCR,
  _UCRp,
  n0,
} from "./schemas_0";
import { TagsList } from "./schemas_13_Resource";

/* eslint no-var: 0 */

export var ChannelTargetInfo = struct(n0, _CTI, 0, [_CCI, _RIIM], [0, 1]);
export var ContactChannelAddress = struct(n0, _CCAo, 0, [_SA], [0]);
export var ContactTargetInfo = struct(n0, _CTIo, 0, [_CI, _IE], [0, 2]);
export var CreateContactChannelRequest = struct(
  n0,
  _CCCR,
  0,
  [_CI, _Na, _T, _DA, _DAe, _IT],
  [0, 0, 0, () => ContactChannelAddress, 2, [0, 4]]
);
export var CreateContactChannelResult = struct(n0, _CCCRr, 0, [_CCA], [0]);
export var CreateContactRequest = struct(
  n0,
  _CCR,
  0,
  [_A, _DN, _T, _P, _Ta, _IT],
  [0, 0, 0, () => Plan, () => TagsList, [0, 4]]
);
export var CreateContactResult = struct(n0, _CCRr, 0, [_CA], [0]);
export var DataEncryptionException = error(
  n0,
  _DEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __DataEncryptionException
);
export var DescribeEngagementRequest = struct(n0, _DER, 0, [_EI], [0]);
export var DescribeEngagementResult = struct(
  n0,
  _DERe,
  0,
  [_CA, _EA, _Se, _Su, _Co, _PS, _PC, _II, _ST, _STt],
  [0, 0, 0, 0, 0, 0, 0, 0, 4, 4]
);
export var DescribePageRequest = struct(n0, _DPR, 0, [_PI], [0]);
export var DescribePageResult = struct(
  n0,
  _DPRe,
  0,
  [_PA, _EA, _CA, _Se, _Su, _Co, _PS, _PC, _II, _STe, _RTea, _DT],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4]
);
export var GetContactChannelRequest = struct(n0, _GCCR, 0, [_CCI], [0]);
export var GetContactChannelResult = struct(
  n0,
  _GCCRe,
  0,
  [_CA, _CCA, _Na, _T, _DA, _AS],
  [0, 0, 0, 0, () => ContactChannelAddress, 0]
);
export var GetContactRequest = struct(n0, _GCR, 0, [_CI], [0]);
export var GetContactResult = struct(n0, _GCRe, 0, [_CA, _A, _DN, _T, _P], [0, 0, 0, 0, () => Plan]);
export var Plan = struct(n0, _P, 0, [_St, _RIot], [() => StagesList, 64 | 0]);
export var SendActivationCodeRequest = struct(n0, _SACR, 0, [_CCI], [0]);
export var SendActivationCodeResult = struct(n0, _SACRe, 0, [], []);
export var Stage = struct(n0, _Sta, 0, [_DIM, _Tar], [1, () => TargetsList]);
export var StartEngagementRequest = struct(
  n0,
  _SER,
  0,
  [_CI, _Se, _Su, _Co, _PS, _PC, _II, _IT],
  [0, 0, 0, 0, 0, 0, 0, [0, 4]]
);
export var StartEngagementResult = struct(n0, _SERt, 0, [_EA], [0]);
export var Target = struct(n0, _Targ, 0, [_CTI, _CTIo], [() => ChannelTargetInfo, () => ContactTargetInfo]);
export var UpdateContactChannelRequest = struct(n0, _UCCR, 0, [_CCI, _Na, _DA], [0, 0, () => ContactChannelAddress]);
export var UpdateContactChannelResult = struct(n0, _UCCRp, 0, [], []);
export var UpdateContactRequest = struct(n0, _UCR, 0, [_CI, _DN, _P], [0, 0, () => Plan]);
export var UpdateContactResult = struct(n0, _UCRp, 0, [], []);
export var StagesList = list(n0, _SL, 0, () => Stage);
export var TargetsList = list(n0, _TLa, 0, () => Target);
export var CreateContact = op(
  n0,
  _CCr,
  0,
  () => CreateContactRequest,
  () => CreateContactResult
);
export var CreateContactChannel = op(
  n0,
  _CCC,
  0,
  () => CreateContactChannelRequest,
  () => CreateContactChannelResult
);
export var DescribeEngagement = op(
  n0,
  _DEes,
  0,
  () => DescribeEngagementRequest,
  () => DescribeEngagementResult
);
export var DescribePage = op(
  n0,
  _DP,
  0,
  () => DescribePageRequest,
  () => DescribePageResult
);
export var GetContact = op(
  n0,
  _GC,
  0,
  () => GetContactRequest,
  () => GetContactResult
);
export var GetContactChannel = op(
  n0,
  _GCC,
  0,
  () => GetContactChannelRequest,
  () => GetContactChannelResult
);
export var SendActivationCode = op(
  n0,
  _SAC,
  0,
  () => SendActivationCodeRequest,
  () => SendActivationCodeResult
);
export var StartEngagement = op(
  n0,
  _SE,
  0,
  () => StartEngagementRequest,
  () => StartEngagementResult
);
export var UpdateContact = op(
  n0,
  _UC,
  0,
  () => UpdateContactRequest,
  () => UpdateContactResult
);
export var UpdateContactChannel = op(
  n0,
  _UCC,
  0,
  () => UpdateContactChannelRequest,
  () => UpdateContactChannelResult
);
