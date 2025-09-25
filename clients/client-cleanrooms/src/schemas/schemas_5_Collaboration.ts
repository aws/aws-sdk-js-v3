// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _a,
  _ab,
  _aI,
  _C,
  _cA,
  _cCAI,
  _CCCR,
  _CCCRI,
  _CCCRO,
  _cCDN,
  _CCR,
  _cCR,
  _CCRS,
  _cCRS,
  _CCRSL,
  _ch,
  _CI,
  _cI,
  _CIL,
  _cIo,
  _CL,
  _cMLMAu,
  _cNol,
  _cRI,
  _CSh,
  _cT,
  _dNi,
  _GCCR,
  _GCCRI,
  _GCCRO,
  _h,
  _hQ,
  _i,
  _iAA,
  _iR,
  _jCo,
  _JCPC,
  _LCCR,
  _LCCRI,
  _LCCRO,
  _LM,
  _LMI,
  _LMi,
  _LMIi,
  _LMO,
  _LMOi,
  _mA,
  _mAe,
  _mAl,
  _MCS,
  _memb,
  _mI,
  _mIo,
  _MIPC,
  _MJCPC,
  _mL,
  _MLMA,
  _MLPC,
  _mMA,
  _MMIPC,
  _MMLPC,
  _MMTPC,
  _MPC,
  _MQCPC,
  _mR,
  _MS,
  _mSe,
  _MSem,
  _mSem,
  _MSL,
  _MSLe,
  _mT,
  _MTPC,
  _nT,
  _PC,
  _pC,
  _QCPC,
  _qCu,
  _sp,
  _sT,
  _st,
  _ty,
  _uT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Change = struct(n0, _C, 0, [_sT, _sp, _ty], [0, () => ChangeSpecification, 64 | 0]);
export var ChangeInput = struct(n0, _CI, 0, [_sT, _sp], [0, () => ChangeSpecification]);
export var CollaborationChangeRequest = struct(
  n0,
  _CCR,
  0,
  [_i, _cI, _cT, _uT, _st, _iAA, _ch],
  [0, 0, 4, 4, 0, 2, () => ChangeList]
);
export var CollaborationChangeRequestSummary = struct(
  n0,
  _CCRS,
  0,
  [_i, _cI, _cT, _uT, _st, _iAA, _ch],
  [0, 0, 4, 4, 0, 2, () => ChangeList]
);
export var CreateCollaborationChangeRequestInput = struct(n0, _CCCRI, 0, [_cIo, _ch], [[0, 1], () => ChangeInputList]);
export var CreateCollaborationChangeRequestOutput = struct(n0, _CCCRO, 0, [_cCR], [() => CollaborationChangeRequest]);
export var GetCollaborationChangeRequestInput = struct(
  n0,
  _GCCRI,
  0,
  [_cIo, _cRI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetCollaborationChangeRequestOutput = struct(n0, _GCCRO, 0, [_cCR], [() => CollaborationChangeRequest]);
export var JobComputePaymentConfig = struct(n0, _JCPC, 0, [_iR], [2]);
export var ListCollaborationChangeRequestsInput = struct(
  n0,
  _LCCRI,
  0,
  [_cIo, _st, _nT, _mR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _st,
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
export var ListCollaborationChangeRequestsOutput = struct(
  n0,
  _LCCRO,
  0,
  [_cCRS, _nT],
  [() => CollaborationChangeRequestSummaryList, 0]
);
export var ListMembershipsInput = struct(
  n0,
  _LMI,
  0,
  [_nT, _mR, _st],
  [
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
    [
      0,
      {
        [_hQ]: _st,
      },
    ],
  ]
);
export var ListMembershipsOutput = struct(n0, _LMO, 0, [_nT, _mSe], [0, () => MembershipSummaryList]);
export var ListMembersInput = struct(
  n0,
  _LMIi,
  0,
  [_cIo, _nT, _mR],
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
export var ListMembersOutput = struct(n0, _LMOi, 0, [_nT, _mSem], [0, () => MemberSummaryList]);
export var MemberChangeSpecification = struct(n0, _MCS, 0, [_aI, _mAe, _dNi], [0, 64 | 0, 0]);
export var MembershipJobComputePaymentConfig = struct(n0, _MJCPC, 0, [_iR], [2]);
export var MembershipMLPaymentConfig = struct(
  n0,
  _MMLPC,
  0,
  [_mT, _mIo],
  [() => MembershipModelTrainingPaymentConfig, () => MembershipModelInferencePaymentConfig]
);
export var MembershipModelInferencePaymentConfig = struct(n0, _MMIPC, 0, [_iR], [2]);
export var MembershipModelTrainingPaymentConfig = struct(n0, _MMTPC, 0, [_iR], [2]);
export var MembershipPaymentConfiguration = struct(
  n0,
  _MPC,
  0,
  [_qCu, _mL, _jCo],
  [() => MembershipQueryComputePaymentConfig, () => MembershipMLPaymentConfig, () => MembershipJobComputePaymentConfig]
);
export var MembershipQueryComputePaymentConfig = struct(n0, _MQCPC, 0, [_iR], [2]);
export var MembershipSummary = struct(
  n0,
  _MS,
  0,
  [_i, _a, _cA, _cI, _cCAI, _cCDN, _cNol, _cT, _uT, _st, _mAe, _mMA, _pC],
  [0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 64 | 0, () => MLMemberAbilities, () => MembershipPaymentConfiguration]
);
export var MemberSummary = struct(
  n0,
  _MSem,
  0,
  [_aI, _st, _dNi, _ab, _mAl, _cT, _uT, _mI, _mA, _pC],
  [0, 0, 0, 64 | 0, () => MLMemberAbilities, 4, 4, 0, 0, () => PaymentConfiguration]
);
export var MLMemberAbilities = struct(n0, _MLMA, 0, [_cMLMAu], [64 | 0]);
export var MLPaymentConfig = struct(
  n0,
  _MLPC,
  0,
  [_mT, _mIo],
  [() => ModelTrainingPaymentConfig, () => ModelInferencePaymentConfig]
);
export var ModelInferencePaymentConfig = struct(n0, _MIPC, 0, [_iR], [2]);
export var ModelTrainingPaymentConfig = struct(n0, _MTPC, 0, [_iR], [2]);
export var PaymentConfiguration = struct(
  n0,
  _PC,
  0,
  [_qCu, _mL, _jCo],
  [() => QueryComputePaymentConfig, () => MLPaymentConfig, () => JobComputePaymentConfig]
);
export var QueryComputePaymentConfig = struct(n0, _QCPC, 0, [_iR], [2]);
export var ChangeInputList = list(n0, _CIL, 0, () => ChangeInput);
export var ChangeList = list(n0, _CL, 0, () => Change);
export var ChangeTypeList = 64 | 0;

export var CollaborationChangeRequestSummaryList = list(n0, _CCRSL, 0, () => CollaborationChangeRequestSummary);
export var CustomMLMemberAbilities = 64 | 0;

export var MemberAbilities = 64 | 0;

export var MembershipSummaryList = list(n0, _MSL, 0, () => MembershipSummary);
export var MemberSummaryList = list(n0, _MSLe, 0, () => MemberSummary);
export var ChangeSpecification = uni(n0, _CSh, 0, [_memb], [() => MemberChangeSpecification]);
export var CreateCollaborationChangeRequest = op(
  n0,
  _CCCR,
  {
    [_h]: ["POST", "/collaborations/{collaborationIdentifier}/changeRequests", 200],
  },
  () => CreateCollaborationChangeRequestInput,
  () => CreateCollaborationChangeRequestOutput
);
export var GetCollaborationChangeRequest = op(
  n0,
  _GCCR,
  {
    [_h]: ["GET", "/collaborations/{collaborationIdentifier}/changeRequests/{changeRequestIdentifier}", 200],
  },
  () => GetCollaborationChangeRequestInput,
  () => GetCollaborationChangeRequestOutput
);
export var ListCollaborationChangeRequests = op(
  n0,
  _LCCR,
  {
    [_h]: ["GET", "/collaborations/{collaborationIdentifier}/changeRequests", 200],
  },
  () => ListCollaborationChangeRequestsInput,
  () => ListCollaborationChangeRequestsOutput
);
export var ListMembers = op(
  n0,
  _LM,
  {
    [_h]: ["GET", "/collaborations/{collaborationIdentifier}/members", 200],
  },
  () => ListMembersInput,
  () => ListMembersOutput
);
export var ListMemberships = op(
  n0,
  _LMi,
  {
    [_h]: ["GET", "/memberships", 200],
  },
  () => ListMembershipsInput,
  () => ListMembershipsOutput
);
