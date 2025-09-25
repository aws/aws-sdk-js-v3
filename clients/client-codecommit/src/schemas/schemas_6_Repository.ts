// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  EncryptionKeyInvalidIdException as __EncryptionKeyInvalidIdException,
  EncryptionKeyInvalidUsageException as __EncryptionKeyInvalidUsageException,
  EncryptionKeyRequiredException as __EncryptionKeyRequiredException,
  InvalidOrderException as __InvalidOrderException,
  InvalidSortByException as __InvalidSortByException,
  OperationNotAllowedException as __OperationNotAllowedException,
  RepositoryLimitExceededException as __RepositoryLimitExceededException,
} from "../models/index";
import {
  _aI,
  _Ar,
  _BGR,
  _BGRE,
  _BGREL,
  _BGRI,
  _BGRO,
  _c,
  _cD,
  _CRI,
  _CRO,
  _CRr,
  _cUH,
  _cUS,
  _dBe,
  _DR,
  _DRI,
  _DRO,
  _e,
  _eC,
  _EKIIE,
  _EKIUE,
  _EKRE,
  _eM,
  _er,
  _GR,
  _GRI,
  _GRO,
  _IOE,
  _ISBE,
  _kKI,
  _lMD,
  _LR,
  _LRI,
  _LRO,
  _m,
  _nT,
  _oKKI,
  _ONAE,
  _or,
  _r,
  _rD,
  _rIe,
  _RLEEe,
  _RM,
  _rM,
  _RML,
  _rN,
  _rNe,
  _rNF,
  _RNIP,
  _RNIPL,
  _sB,
  _tag,
  _UREK,
  _UREKI,
  _UREKO,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchGetRepositoriesError = struct(n0, _BGRE, 0, [_rIe, _rN, _eC, _eM], [0, 0, 0, 0]);
export var BatchGetRepositoriesInput = struct(n0, _BGRI, 0, [_rNe], [64 | 0]);
export var BatchGetRepositoriesOutput = struct(
  n0,
  _BGRO,
  0,
  [_r, _rNF, _er],
  [() => RepositoryMetadataList, 64 | 0, () => BatchGetRepositoriesErrorsList]
);
export var CreateRepositoryInput = struct(n0, _CRI, 0, [_rN, _rD, _tag, _kKI], [0, 0, 128 | 0, 0]);
export var CreateRepositoryOutput = struct(n0, _CRO, 0, [_rM], [() => RepositoryMetadata]);
export var DeleteRepositoryInput = struct(n0, _DRI, 0, [_rN], [0]);
export var DeleteRepositoryOutput = struct(n0, _DRO, 0, [_rIe], [0]);
export var EncryptionKeyInvalidIdException = error(
  n0,
  _EKIIE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __EncryptionKeyInvalidIdException
);
export var EncryptionKeyInvalidUsageException = error(
  n0,
  _EKIUE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __EncryptionKeyInvalidUsageException
);
export var EncryptionKeyRequiredException = error(
  n0,
  _EKRE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __EncryptionKeyRequiredException
);
export var GetRepositoryInput = struct(n0, _GRI, 0, [_rN], [0]);
export var GetRepositoryOutput = struct(n0, _GRO, 0, [_rM], [() => RepositoryMetadata]);
export var InvalidOrderException = error(
  n0,
  _IOE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidOrderException
);
export var InvalidSortByException = error(
  n0,
  _ISBE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidSortByException
);
export var ListRepositoriesInput = struct(n0, _LRI, 0, [_nT, _sB, _or], [0, 0, 0]);
export var ListRepositoriesOutput = struct(n0, _LRO, 0, [_r, _nT], [() => RepositoryNameIdPairList, 0]);
export var OperationNotAllowedException = error(
  n0,
  _ONAE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __OperationNotAllowedException
);
export var RepositoryLimitExceededException = error(
  n0,
  _RLEEe,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __RepositoryLimitExceededException
);
export var RepositoryMetadata = struct(
  n0,
  _RM,
  0,
  [_aI, _rIe, _rN, _rD, _dBe, _lMD, _cD, _cUH, _cUS, _Ar, _kKI],
  [0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0]
);
export var RepositoryNameIdPair = struct(n0, _RNIP, 0, [_rN, _rIe], [0, 0]);
export var UpdateRepositoryEncryptionKeyInput = struct(n0, _UREKI, 0, [_rN, _kKI], [0, 0]);
export var UpdateRepositoryEncryptionKeyOutput = struct(n0, _UREKO, 0, [_rIe, _kKI, _oKKI], [0, 0, 0]);
export var BatchGetRepositoriesErrorsList = list(n0, _BGREL, 0, () => BatchGetRepositoriesError);
export var RepositoryMetadataList = list(n0, _RML, 0, () => RepositoryMetadata);
export var RepositoryNameIdPairList = list(n0, _RNIPL, 0, () => RepositoryNameIdPair);
export var RepositoryNotFoundList = 64 | 0;

export var BatchGetRepositories = op(
  n0,
  _BGR,
  0,
  () => BatchGetRepositoriesInput,
  () => BatchGetRepositoriesOutput
);
export var CreateRepository = op(
  n0,
  _CRr,
  0,
  () => CreateRepositoryInput,
  () => CreateRepositoryOutput
);
export var DeleteRepository = op(
  n0,
  _DR,
  0,
  () => DeleteRepositoryInput,
  () => DeleteRepositoryOutput
);
export var GetRepository = op(
  n0,
  _GR,
  0,
  () => GetRepositoryInput,
  () => GetRepositoryOutput
);
export var ListRepositories = op(
  n0,
  _LR,
  0,
  () => ListRepositoriesInput,
  () => ListRepositoriesOutput
);
export var UpdateRepositoryEncryptionKey = op(
  n0,
  _UREK,
  0,
  () => UpdateRepositoryEncryptionKeyInput,
  () => UpdateRepositoryEncryptionKeyOutput
);
