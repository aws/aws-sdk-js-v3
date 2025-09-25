// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _AIp,
  _aIp,
  _BS,
  _bSa,
  _CDMVOT,
  _CDMVOTR,
  _CDMVOTRr,
  _CMSIPMT,
  _CMSIPMTR,
  _CMSIPMTRr,
  _CT,
  _DMMT,
  _DMMTR,
  _DMMTRe,
  _DR,
  _DReb,
  _dReb,
  _dTR,
  _DTRr,
  _eQN,
  _Fi,
  _Fil,
  _FPi,
  _fPi,
  _II,
  _iI,
  _it,
  _KS,
  _kSe,
  _MC,
  _MMT,
  _mMT,
  _MMTa,
  _MMTI,
  _mMTI,
  _MMTIa,
  _MMTIL,
  _MMTL,
  _mMTS,
  _MR,
  _MSIPC,
  _mSIPC,
  _MSIPCa,
  _MSIPCR,
  _MSIPS,
  _NP,
  _nP,
  _NTe,
  _nTe,
  _SMC,
  _ST,
  _sT,
  _Sta,
  _sta,
  _T,
  _TS,
  _tS,
  _TSa,
  _TSas,
  _tSas,
  _TTa,
  _tTa,
  _xN,
  FilterList,
  n0,
  TagList,
  TagSpecificationList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var SensitiveMacCredentials = sim(n0, _SMC, 0, 8);
export var CreateDelegateMacVolumeOwnershipTaskRequest = struct(
  n0,
  _CDMVOTR,
  0,
  [_CT, _DR, _II, _MC, _TS],
  [
    [0, 4],
    2,
    0,
    [() => SensitiveMacCredentials, 0],
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
  ]
);
export var CreateDelegateMacVolumeOwnershipTaskResult = struct(
  n0,
  _CDMVOTRr,
  0,
  [_MMT],
  [
    [
      () => MacModificationTask,
      {
        [_eQN]: `MacModificationTask`,
        [_xN]: _mMT,
      },
    ],
  ]
);
export var CreateMacSystemIntegrityProtectionModificationTaskRequest = struct(
  n0,
  _CMSIPMTR,
  0,
  [_CT, _DR, _II, _MC, _MSIPC, _MSIPS, _TS],
  [
    [0, 4],
    2,
    0,
    [() => SensitiveMacCredentials, 0],
    () => MacSystemIntegrityProtectionConfigurationRequest,
    0,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
  ]
);
export var CreateMacSystemIntegrityProtectionModificationTaskResult = struct(
  n0,
  _CMSIPMTRr,
  0,
  [_MMT],
  [
    [
      () => MacModificationTask,
      {
        [_eQN]: `MacModificationTask`,
        [_xN]: _mMT,
      },
    ],
  ]
);
export var DescribeMacModificationTasksRequest = struct(
  n0,
  _DMMTR,
  0,
  [_DR, _Fi, _MMTI, _MR, _NTe],
  [
    2,
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    [
      () => MacModificationTaskIdList,
      {
        [_xN]: _MMTIa,
      },
    ],
    1,
    0,
  ]
);
export var DescribeMacModificationTasksResult = struct(
  n0,
  _DMMTRe,
  0,
  [_MMTa, _NTe],
  [
    [
      () => MacModificationTaskList,
      {
        [_eQN]: `MacModificationTaskSet`,
        [_xN]: _mMTS,
      },
    ],
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
  ]
);
export var MacModificationTask = struct(
  n0,
  _MMT,
  0,
  [_II, _MMTIa, _MSIPCa, _ST, _T, _TSas, _TTa],
  [
    [
      0,
      {
        [_eQN]: `InstanceId`,
        [_xN]: _iI,
      },
    ],
    [
      0,
      {
        [_eQN]: `MacModificationTaskId`,
        [_xN]: _mMTI,
      },
    ],
    [
      () => MacSystemIntegrityProtectionConfiguration,
      {
        [_eQN]: `MacSystemIntegrityProtectionConfig`,
        [_xN]: _mSIPC,
      },
    ],
    [
      4,
      {
        [_eQN]: `StartTime`,
        [_xN]: _sT,
      },
    ],
    [
      () => TagList,
      {
        [_eQN]: `TagSet`,
        [_xN]: _tS,
      },
    ],
    [
      0,
      {
        [_eQN]: `TaskState`,
        [_xN]: _tSas,
      },
    ],
    [
      0,
      {
        [_eQN]: `TaskType`,
        [_xN]: _tTa,
      },
    ],
  ]
);
export var MacSystemIntegrityProtectionConfiguration = struct(
  n0,
  _MSIPC,
  0,
  [_AIp, _BS, _DReb, _DTRr, _FPi, _KS, _NP, _Sta],
  [
    [
      0,
      {
        [_eQN]: `AppleInternal`,
        [_xN]: _aIp,
      },
    ],
    [
      0,
      {
        [_eQN]: `BaseSystem`,
        [_xN]: _bSa,
      },
    ],
    [
      0,
      {
        [_eQN]: `DebuggingRestrictions`,
        [_xN]: _dReb,
      },
    ],
    [
      0,
      {
        [_eQN]: `DTraceRestrictions`,
        [_xN]: _dTR,
      },
    ],
    [
      0,
      {
        [_eQN]: `FilesystemProtections`,
        [_xN]: _fPi,
      },
    ],
    [
      0,
      {
        [_eQN]: `KextSigning`,
        [_xN]: _kSe,
      },
    ],
    [
      0,
      {
        [_eQN]: `NvramProtections`,
        [_xN]: _nP,
      },
    ],
    [
      0,
      {
        [_eQN]: `Status`,
        [_xN]: _sta,
      },
    ],
  ]
);
export var MacSystemIntegrityProtectionConfigurationRequest = struct(
  n0,
  _MSIPCR,
  0,
  [_AIp, _BS, _DReb, _DTRr, _FPi, _KS, _NP],
  [0, 0, 0, 0, 0, 0, 0]
);
export var MacModificationTaskIdList = list(n0, _MMTIL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var MacModificationTaskList = list(n0, _MMTL, 0, [
  () => MacModificationTask,
  {
    [_xN]: _it,
  },
]);
export var CreateDelegateMacVolumeOwnershipTask = op(
  n0,
  _CDMVOT,
  0,
  () => CreateDelegateMacVolumeOwnershipTaskRequest,
  () => CreateDelegateMacVolumeOwnershipTaskResult
);
export var CreateMacSystemIntegrityProtectionModificationTask = op(
  n0,
  _CMSIPMT,
  0,
  () => CreateMacSystemIntegrityProtectionModificationTaskRequest,
  () => CreateMacSystemIntegrityProtectionModificationTaskResult
);
export var DescribeMacModificationTasks = op(
  n0,
  _DMMT,
  0,
  () => DescribeMacModificationTasksRequest,
  () => DescribeMacModificationTasksResult
);
