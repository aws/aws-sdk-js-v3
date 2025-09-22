// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  CommitIdDoesNotExistException as __CommitIdDoesNotExistException,
  CommitIdsLimitExceededException as __CommitIdsLimitExceededException,
  CommitIdsListRequiredException as __CommitIdsListRequiredException,
  CommitMessageLengthExceededException as __CommitMessageLengthExceededException,
  DirectoryNameConflictsWithFileNameException as __DirectoryNameConflictsWithFileNameException,
  FileContentAndSourceFileSpecifiedException as __FileContentAndSourceFileSpecifiedException,
  FileContentRequiredException as __FileContentRequiredException,
  FileContentSizeLimitExceededException as __FileContentSizeLimitExceededException,
  FileEntryRequiredException as __FileEntryRequiredException,
  FileModeRequiredException as __FileModeRequiredException,
  FileNameConflictsWithDirectoryNameException as __FileNameConflictsWithDirectoryNameException,
  FilePathConflictsWithSubmodulePathException as __FilePathConflictsWithSubmodulePathException,
  FolderContentSizeLimitExceededException as __FolderContentSizeLimitExceededException,
  InvalidConflictResolutionException as __InvalidConflictResolutionException,
  InvalidDeletionParameterException as __InvalidDeletionParameterException,
  InvalidEmailException as __InvalidEmailException,
  InvalidFileModeException as __InvalidFileModeException,
  InvalidParentCommitIdException as __InvalidParentCommitIdException,
  InvalidReplacementContentException as __InvalidReplacementContentException,
  InvalidReplacementTypeException as __InvalidReplacementTypeException,
  MaximumConflictResolutionEntriesExceededException as __MaximumConflictResolutionEntriesExceededException,
  MaximumFileEntriesExceededException as __MaximumFileEntriesExceededException,
  MultipleConflictResolutionEntriesException as __MultipleConflictResolutionEntriesException,
  NameLengthExceededException as __NameLengthExceededException,
  NoChangeException as __NoChangeException,
  ParentCommitDoesNotExistException as __ParentCommitDoesNotExistException,
  ParentCommitIdOutdatedException as __ParentCommitIdOutdatedException,
  ParentCommitIdRequiredException as __ParentCommitIdRequiredException,
  PutFileEntryConflictException as __PutFileEntryConflictException,
  ReplacementContentRequiredException as __ReplacementContentRequiredException,
  ReplacementTypeRequiredException as __ReplacementTypeRequiredException,
  RestrictedSourceFileException as __RestrictedSourceFileException,
  SameFileContentException as __SameFileContentException,
  SamePathRequestException as __SamePathRequestException,
  SourceFileOrContentRequiredException as __SourceFileOrContentRequiredException,
} from "../models/index";
import {
  _a,
  _aD,
  _aN,
  _aP,
  _BGC,
  _BGCE,
  _BGCEL,
  _BGCI,
  _BGCO,
  _bI,
  _bN,
  _c,
  _CC,
  _CCI,
  _CCO,
  _cI,
  _CIDNEE,
  _CILEE,
  _CILRE,
  _cIo,
  _CMLEE,
  _cMo,
  _Co,
  _COL,
  _com,
  _commi,
  _commit,
  _con,
  _CR,
  _da,
  _DF,
  _dF,
  _DFE,
  _DFEe,
  _DFI,
  _DFO,
  _DNCWFNE,
  _e,
  _eC,
  _eM,
  _em,
  _er,
  _fA,
  _fC,
  _FCASFSE,
  _FCRE,
  _FCSLEE,
  _FCSLEEo,
  _fD,
  _FERE,
  _FM,
  _fMi,
  _FMil,
  _FMRE,
  _FNCWDNE,
  _fP,
  _FPCWSPE,
  _fU,
  _GCe,
  _GCIe,
  _GCOe,
  _ICRE,
  _IDPE,
  _IEE,
  _IFME,
  _iMs,
  _IPCIE,
  _IRCE,
  _IRTE,
  _kEF,
  _m,
  _MCREE,
  _MCREEE,
  _MFEEE,
  _n,
  _NCE,
  _NLEE,
  _pa,
  _PCDNEE,
  _pCI,
  _PCIOE,
  _PCIRE,
  _PF,
  _pF,
  _PFE,
  _PFECE,
  _PFEu,
  _PFI,
  _PFO,
  _RCE,
  _rCe,
  _RCEe,
  _RCRE,
  _rN,
  _RSFE,
  _rT,
  _RTRE,
  _SFCE,
  _sFM,
  _SFME,
  _SFMEe,
  _sFo,
  _SFOCRE,
  _SFS,
  _SPRE,
  _tI,
  _UI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchGetCommitsError = struct(n0, _BGCE, 0, [_cI, _eC, _eM], [0, 0, 0]);
export var BatchGetCommitsInput = struct(n0, _BGCI, 0, [_cIo, _rN], [64 | 0, 0]);
export var BatchGetCommitsOutput = struct(
  n0,
  _BGCO,
  0,
  [_com, _er],
  [() => CommitObjectsList, () => BatchGetCommitsErrorsList]
);
export var Commit = struct(
  n0,
  _Co,
  0,
  [_cI, _tI, _pa, _m, _a, _commi, _aD],
  [0, 0, 64 | 0, 0, () => UserInfo, () => UserInfo, 0]
);
export var CommitIdDoesNotExistException = error(
  n0,
  _CIDNEE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __CommitIdDoesNotExistException
);
export var CommitIdsLimitExceededException = error(
  n0,
  _CILEE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __CommitIdsLimitExceededException
);
export var CommitIdsListRequiredException = error(
  n0,
  _CILRE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __CommitIdsListRequiredException
);
export var CommitMessageLengthExceededException = error(
  n0,
  _CMLEE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __CommitMessageLengthExceededException
);
export var ConflictResolution = struct(
  n0,
  _CR,
  0,
  [_rCe, _dF, _sFM],
  [() => ReplaceContentEntries, () => DeleteFileEntries, () => SetFileModeEntries]
);
export var CreateCommitInput = struct(
  n0,
  _CCI,
  0,
  [_rN, _bN, _pCI, _aN, _em, _cMo, _kEF, _pF, _dF, _sFM],
  [0, 0, 0, 0, 0, 0, 2, () => PutFileEntries, () => DeleteFileEntries, () => SetFileModeEntries]
);
export var CreateCommitOutput = struct(
  n0,
  _CCO,
  0,
  [_cI, _tI, _fA, _fU, _fD],
  [0, 0, () => FilesMetadata, () => FilesMetadata, () => FilesMetadata]
);
export var DeleteFileEntry = struct(n0, _DFE, 0, [_fP], [0]);
export var DeleteFileInput = struct(n0, _DFI, 0, [_rN, _bN, _fP, _pCI, _kEF, _cMo, _n, _em], [0, 0, 0, 0, 2, 0, 0, 0]);
export var DeleteFileOutput = struct(n0, _DFO, 0, [_cI, _bI, _tI, _fP], [0, 0, 0, 0]);
export var DirectoryNameConflictsWithFileNameException = error(
  n0,
  _DNCWFNE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __DirectoryNameConflictsWithFileNameException
);
export var FileContentAndSourceFileSpecifiedException = error(
  n0,
  _FCASFSE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __FileContentAndSourceFileSpecifiedException
);
export var FileContentRequiredException = error(
  n0,
  _FCRE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __FileContentRequiredException
);
export var FileContentSizeLimitExceededException = error(
  n0,
  _FCSLEE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __FileContentSizeLimitExceededException
);
export var FileEntryRequiredException = error(
  n0,
  _FERE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __FileEntryRequiredException
);
export var FileMetadata = struct(n0, _FM, 0, [_aP, _bI, _fMi], [0, 0, 0]);
export var FileModeRequiredException = error(
  n0,
  _FMRE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __FileModeRequiredException
);
export var FileNameConflictsWithDirectoryNameException = error(
  n0,
  _FNCWDNE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __FileNameConflictsWithDirectoryNameException
);
export var FilePathConflictsWithSubmodulePathException = error(
  n0,
  _FPCWSPE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __FilePathConflictsWithSubmodulePathException
);
export var FolderContentSizeLimitExceededException = error(
  n0,
  _FCSLEEo,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __FolderContentSizeLimitExceededException
);
export var GetCommitInput = struct(n0, _GCIe, 0, [_rN, _cI], [0, 0]);
export var GetCommitOutput = struct(n0, _GCOe, 0, [_commit], [() => Commit]);
export var InvalidConflictResolutionException = error(
  n0,
  _ICRE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidConflictResolutionException
);
export var InvalidDeletionParameterException = error(
  n0,
  _IDPE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidDeletionParameterException
);
export var InvalidEmailException = error(
  n0,
  _IEE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidEmailException
);
export var InvalidFileModeException = error(
  n0,
  _IFME,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidFileModeException
);
export var InvalidParentCommitIdException = error(
  n0,
  _IPCIE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidParentCommitIdException
);
export var InvalidReplacementContentException = error(
  n0,
  _IRCE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidReplacementContentException
);
export var InvalidReplacementTypeException = error(
  n0,
  _IRTE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidReplacementTypeException
);
export var MaximumConflictResolutionEntriesExceededException = error(
  n0,
  _MCREEE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __MaximumConflictResolutionEntriesExceededException
);
export var MaximumFileEntriesExceededException = error(
  n0,
  _MFEEE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __MaximumFileEntriesExceededException
);
export var MultipleConflictResolutionEntriesException = error(
  n0,
  _MCREE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __MultipleConflictResolutionEntriesException
);
export var NameLengthExceededException = error(
  n0,
  _NLEE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __NameLengthExceededException
);
export var NoChangeException = error(
  n0,
  _NCE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __NoChangeException
);
export var ParentCommitDoesNotExistException = error(
  n0,
  _PCDNEE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ParentCommitDoesNotExistException
);
export var ParentCommitIdOutdatedException = error(
  n0,
  _PCIOE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ParentCommitIdOutdatedException
);
export var ParentCommitIdRequiredException = error(
  n0,
  _PCIRE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ParentCommitIdRequiredException
);
export var PutFileEntry = struct(n0, _PFE, 0, [_fP, _fMi, _fC, _sFo], [0, 0, 21, () => SourceFileSpecifier]);
export var PutFileEntryConflictException = error(
  n0,
  _PFECE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __PutFileEntryConflictException
);
export var PutFileInput = struct(
  n0,
  _PFI,
  0,
  [_rN, _bN, _fC, _fP, _fMi, _pCI, _cMo, _n, _em],
  [0, 0, 21, 0, 0, 0, 0, 0, 0]
);
export var PutFileOutput = struct(n0, _PFO, 0, [_cI, _bI, _tI], [0, 0, 0]);
export var ReplaceContentEntry = struct(n0, _RCE, 0, [_fP, _rT, _con, _fMi], [0, 0, 21, 0]);
export var ReplacementContentRequiredException = error(
  n0,
  _RCRE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ReplacementContentRequiredException
);
export var ReplacementTypeRequiredException = error(
  n0,
  _RTRE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ReplacementTypeRequiredException
);
export var RestrictedSourceFileException = error(
  n0,
  _RSFE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __RestrictedSourceFileException
);
export var SameFileContentException = error(
  n0,
  _SFCE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __SameFileContentException
);
export var SamePathRequestException = error(
  n0,
  _SPRE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __SamePathRequestException
);
export var SetFileModeEntry = struct(n0, _SFME, 0, [_fP, _fMi], [0, 0]);
export var SourceFileOrContentRequiredException = error(
  n0,
  _SFOCRE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __SourceFileOrContentRequiredException
);
export var SourceFileSpecifier = struct(n0, _SFS, 0, [_fP, _iMs], [0, 2]);
export var UserInfo = struct(n0, _UI, 0, [_n, _em, _da], [0, 0, 0]);
export var BatchGetCommitsErrorsList = list(n0, _BGCEL, 0, () => BatchGetCommitsError);
export var CommitIdsInputList = 64 | 0;

export var CommitObjectsList = list(n0, _COL, 0, () => Commit);
export var DeleteFileEntries = list(n0, _DFEe, 0, () => DeleteFileEntry);
export var FilesMetadata = list(n0, _FMil, 0, () => FileMetadata);
export var ParentList = 64 | 0;

export var PutFileEntries = list(n0, _PFEu, 0, () => PutFileEntry);
export var ReplaceContentEntries = list(n0, _RCEe, 0, () => ReplaceContentEntry);
export var SetFileModeEntries = list(n0, _SFMEe, 0, () => SetFileModeEntry);
export var BatchGetCommits = op(
  n0,
  _BGC,
  0,
  () => BatchGetCommitsInput,
  () => BatchGetCommitsOutput
);
export var CreateCommit = op(
  n0,
  _CC,
  0,
  () => CreateCommitInput,
  () => CreateCommitOutput
);
export var DeleteFile = op(
  n0,
  _DF,
  0,
  () => DeleteFileInput,
  () => DeleteFileOutput
);
export var GetCommit = op(
  n0,
  _GCe,
  0,
  () => GetCommitInput,
  () => GetCommitOutput
);
export var PutFile = op(
  n0,
  _PF,
  0,
  () => PutFileInput,
  () => PutFileOutput
);
