// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DFSi,
  _DFSIi,
  _DFSOi,
  _FD,
  _FSAARN,
  _FSAIi,
  _FSAS,
  _FSASi,
  _FSASL,
  _GARN,
  _L,
  _LFSA,
  _LFSAI,
  _LFSAO,
  _M,
  _NM,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateFileSystemInput = struct(n0, _DFSIi, 0, [_FSAARN, _FD], [0, 2]);
export var DisassociateFileSystemOutput = struct(n0, _DFSOi, 0, [_FSAARN], [0]);
export var FileSystemAssociationSummary = struct(n0, _FSASi, 0, [_FSAIi, _FSAARN, _FSAS, _GARN], [0, 0, 0, 0]);
export var ListFileSystemAssociationsInput = struct(n0, _LFSAI, 0, [_GARN, _L, _M], [0, 1, 0]);
export var ListFileSystemAssociationsOutput = struct(
  n0,
  _LFSAO,
  0,
  [_M, _NM, _FSASL],
  [0, 0, () => FileSystemAssociationSummaryList]
);
export var FileSystemAssociationSummaryList = list(n0, _FSASL, 0, () => FileSystemAssociationSummary);
export var DisassociateFileSystem = op(
  n0,
  _DFSi,
  0,
  () => DisassociateFileSystemInput,
  () => DisassociateFileSystemOutput
);
export var ListFileSystemAssociations = op(
  n0,
  _LFSA,
  0,
  () => ListFileSystemAssociationsInput,
  () => ListFileSystemAssociationsOutput
);
