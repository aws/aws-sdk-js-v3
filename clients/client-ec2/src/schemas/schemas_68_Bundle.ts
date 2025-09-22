// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _AWSAKI,
  _b,
  _BI,
  _bI,
  _BIR,
  _BIRu,
  _BISL,
  _bIT,
  _bITS,
  _BIu,
  _BIun,
  _BT,
  _BTE,
  _BTL,
  _BTu,
  _Bu,
  _CBT,
  _CBTR,
  _CBTRa,
  _Co,
  _co,
  _DBT,
  _DBTR,
  _DBTRe,
  _DR,
  _dR,
  _eQN,
  _er,
  _Fi,
  _Fil,
  _II,
  _iI,
  _IKP,
  _IKPR,
  _IKPRm,
  _it,
  _KFe,
  _kFe,
  _KN,
  _kN,
  _KPI,
  _kPI,
  _Me,
  _me,
  _PKM,
  _pKM,
  _Pre,
  _pre,
  _Pro,
  _pro,
  _S_,
  _SSt,
  _SSUPS,
  _ST,
  _St,
  _sT,
  _st,
  _Sto,
  _sto,
  _T,
  _TS,
  _tS,
  _TSa,
  _UPp,
  _uPp,
  _UPS,
  _uPS,
  _UT,
  _uT,
  _xN,
  FilterList,
  n0,
  TagList,
  TagSpecificationList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var S3StorageUploadPolicySignature = sim(n0, _SSUPS, 0, 8);
export var BundleInstanceRequest = struct(
  n0,
  _BIR,
  0,
  [_II, _Sto, _DR],
  [
    0,
    [() => Storage, 0],
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
  ]
);
export var BundleInstanceResult = struct(
  n0,
  _BIRu,
  0,
  [_BT],
  [
    [
      () => BundleTask,
      {
        [_eQN]: `BundleInstanceTask`,
        [_xN]: _bIT,
      },
    ],
  ]
);
export var BundleTask = struct(
  n0,
  _BT,
  0,
  [_II, _BI, _St, _ST, _UT, _Sto, _Pro, _BTE],
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
        [_eQN]: `BundleId`,
        [_xN]: _bI,
      },
    ],
    [
      0,
      {
        [_eQN]: `State`,
        [_xN]: _st,
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
      4,
      {
        [_eQN]: `UpdateTime`,
        [_xN]: _uT,
      },
    ],
    [
      () => Storage,
      {
        [_eQN]: `Storage`,
        [_xN]: _sto,
      },
    ],
    [
      0,
      {
        [_eQN]: `Progress`,
        [_xN]: _pro,
      },
    ],
    [
      () => BundleTaskError,
      {
        [_eQN]: `Error`,
        [_xN]: _er,
      },
    ],
  ]
);
export var BundleTaskError = struct(
  n0,
  _BTE,
  0,
  [_Co, _Me],
  [
    [
      0,
      {
        [_eQN]: `Code`,
        [_xN]: _co,
      },
    ],
    [
      0,
      {
        [_eQN]: `Message`,
        [_xN]: _me,
      },
    ],
  ]
);
export var CancelBundleTaskRequest = struct(
  n0,
  _CBTR,
  0,
  [_BI, _DR],
  [
    0,
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
  ]
);
export var CancelBundleTaskResult = struct(
  n0,
  _CBTRa,
  0,
  [_BT],
  [
    [
      () => BundleTask,
      {
        [_eQN]: `BundleInstanceTask`,
        [_xN]: _bIT,
      },
    ],
  ]
);
export var DescribeBundleTasksRequest = struct(
  n0,
  _DBTR,
  0,
  [_BIu, _DR, _Fi],
  [
    [
      () => BundleIdStringList,
      {
        [_xN]: _BI,
      },
    ],
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
  ]
);
export var DescribeBundleTasksResult = struct(
  n0,
  _DBTRe,
  0,
  [_BTu],
  [
    [
      () => BundleTaskList,
      {
        [_eQN]: `BundleInstanceTasksSet`,
        [_xN]: _bITS,
      },
    ],
  ]
);
export var ImportKeyPairRequest = struct(
  n0,
  _IKPR,
  0,
  [_TS, _DR, _KN, _PKM],
  [
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
    [
      0,
      {
        [_eQN]: `KeyName`,
        [_xN]: _kN,
      },
    ],
    [
      21,
      {
        [_eQN]: `PublicKeyMaterial`,
        [_xN]: _pKM,
      },
    ],
  ]
);
export var ImportKeyPairResult = struct(
  n0,
  _IKPRm,
  0,
  [_KFe, _KN, _KPI, _T],
  [
    [
      0,
      {
        [_eQN]: `KeyFingerprint`,
        [_xN]: _kFe,
      },
    ],
    [
      0,
      {
        [_eQN]: `KeyName`,
        [_xN]: _kN,
      },
    ],
    [
      0,
      {
        [_eQN]: `KeyPairId`,
        [_xN]: _kPI,
      },
    ],
    [
      () => TagList,
      {
        [_eQN]: `TagSet`,
        [_xN]: _tS,
      },
    ],
  ]
);
export var S3Storage = struct(
  n0,
  _SSt,
  0,
  [_AWSAKI, _Bu, _Pre, _UPp, _UPS],
  [
    0,
    [
      0,
      {
        [_eQN]: `Bucket`,
        [_xN]: _b,
      },
    ],
    [
      0,
      {
        [_eQN]: `Prefix`,
        [_xN]: _pre,
      },
    ],
    [
      21,
      {
        [_eQN]: `UploadPolicy`,
        [_xN]: _uPp,
      },
    ],
    [
      () => S3StorageUploadPolicySignature,
      {
        [_eQN]: `UploadPolicySignature`,
        [_xN]: _uPS,
      },
    ],
  ]
);
export var Storage = struct(
  n0,
  _Sto,
  0,
  [_S_],
  [
    [
      () => S3Storage,
      {
        [_xN]: _S_,
      },
    ],
  ]
);
export var BundleIdStringList = list(n0, _BISL, 0, [
  0,
  {
    [_xN]: _BI,
  },
]);
export var BundleTaskList = list(n0, _BTL, 0, [
  () => BundleTask,
  {
    [_xN]: _it,
  },
]);
export var BundleInstance = op(
  n0,
  _BIun,
  0,
  () => BundleInstanceRequest,
  () => BundleInstanceResult
);
export var CancelBundleTask = op(
  n0,
  _CBT,
  0,
  () => CancelBundleTaskRequest,
  () => CancelBundleTaskResult
);
export var DescribeBundleTasks = op(
  n0,
  _DBT,
  0,
  () => DescribeBundleTasksRequest,
  () => DescribeBundleTasksResult
);
export var ImportKeyPair = op(
  n0,
  _IKP,
  0,
  () => ImportKeyPairRequest,
  () => ImportKeyPairResult
);
