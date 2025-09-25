// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { FolderDoesNotExistException as __FolderDoesNotExistException } from "../models/index";
import {
  _aP,
  _bI,
  _c,
  _cI,
  _cS,
  _e,
  _F,
  _f,
  _FDNEEo,
  _FL,
  _FLo,
  _fMi,
  _Fo,
  _fPo,
  _GFe,
  _GFIe,
  _GFOe,
  _m,
  _rN,
  _rP,
  _sF,
  _SL,
  _sL,
  _SLL,
  _SM,
  _sM,
  _SML,
  _tI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var File = struct(n0, _F, 0, [_bI, _aP, _rP, _fMi], [0, 0, 0, 0]);
export var Folder = struct(n0, _Fo, 0, [_tI, _aP, _rP], [0, 0, 0]);
export var FolderDoesNotExistException = error(
  n0,
  _FDNEEo,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __FolderDoesNotExistException
);
export var GetFolderInput = struct(n0, _GFIe, 0, [_rN, _cS, _fPo], [0, 0, 0]);
export var GetFolderOutput = struct(
  n0,
  _GFOe,
  0,
  [_cI, _fPo, _tI, _sF, _f, _sL, _sM],
  [0, 0, 0, () => FolderList, () => FileList, () => SymbolicLinkList, () => SubModuleList]
);
export var SubModule = struct(n0, _SM, 0, [_cI, _aP, _rP], [0, 0, 0]);
export var SymbolicLink = struct(n0, _SL, 0, [_bI, _aP, _rP, _fMi], [0, 0, 0, 0]);
export var FileList = list(n0, _FL, 0, () => File);
export var FolderList = list(n0, _FLo, 0, () => Folder);
export var SubModuleList = list(n0, _SML, 0, () => SubModule);
export var SymbolicLinkList = list(n0, _SLL, 0, () => SymbolicLink);
export var GetFolder = op(
  n0,
  _GFe,
  0,
  () => GetFolderInput,
  () => GetFolderOutput
);
