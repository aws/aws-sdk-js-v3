// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AFSA, _AFSAR, _AFSARs, _Ali, _CRT, _DFSAi, _DFSARi, _DFSARis, _FSI, Aliases, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateFileSystemAliasesRequest = struct(n0, _AFSAR, 0, [_CRT, _FSI, _Ali], [[0, 4], 0, 64 | 0]);
export var AssociateFileSystemAliasesResponse = struct(n0, _AFSARs, 0, [_Ali], [() => Aliases]);
export var DisassociateFileSystemAliasesRequest = struct(n0, _DFSARi, 0, [_CRT, _FSI, _Ali], [[0, 4], 0, 64 | 0]);
export var DisassociateFileSystemAliasesResponse = struct(n0, _DFSARis, 0, [_Ali], [() => Aliases]);
export var AlternateDNSNames = 64 | 0;

export var AssociateFileSystemAliases = op(
  n0,
  _AFSA,
  0,
  () => AssociateFileSystemAliasesRequest,
  () => AssociateFileSystemAliasesResponse
);
export var DisassociateFileSystemAliases = op(
  n0,
  _DFSAi,
  0,
  () => DisassociateFileSystemAliasesRequest,
  () => DisassociateFileSystemAliasesResponse
);
