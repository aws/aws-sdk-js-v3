// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import {
  _AAg,
  _AT,
  _CLFO,
  _CLFOR,
  _CLFORr,
  _CLFOZ,
  _CLFOZR,
  _CLFOZRr,
  _CLFW,
  _CLFWR,
  _CLFWRr,
  _CLSr,
  _CLSRre,
  _CLSRrea,
  _CT,
  _D,
  _DIA,
  _DLFO,
  _DLFOR,
  _DLFORe,
  _DLFOZ,
  _DLFOZR,
  _DLFOZRe,
  _FFA,
  _FPN,
  _FPS,
  _FPs,
  _FUP,
  _FUPS,
  _KK,
  _KKC,
  _KP,
  _LA,
  _LU,
  _MO,
  _NFS,
  _Pa,
  _Pr,
  _SGA,
  _SH,
  _SMB,
  _SP,
  _Su,
  _SVMA,
  _Ta,
  _U,
  _ULFO,
  _ULFOR,
  _ULFORp,
  _ULFOZ,
  _ULFOZR,
  _ULFOZRp,
  _ULFW,
  _ULFWR,
  _ULFWRp,
  _ULSp,
  _ULSRpd,
  _ULSRpda,
  InputTagList,
  n0,
} from "./schemas_0";
import { SmbMountOptions } from "./schemas_3_Location";
import { NfsMountOptions } from "./schemas_5_Location";

/* eslint no-var: 0 */

export var SmbPassword = sim(n0, _SP, 0, 8);
export var CreateLocationFsxOntapRequest = struct(
  n0,
  _CLFOR,
  0,
  [_Pr, _SGA, _SVMA, _Su, _Ta],
  [[() => FsxProtocol, 0], 64 | 0, 0, 0, () => InputTagList]
);
export var CreateLocationFsxOntapResponse = struct(n0, _CLFORr, 0, [_LA], [0]);
export var CreateLocationFsxOpenZfsRequest = struct(
  n0,
  _CLFOZR,
  0,
  [_FFA, _Pr, _SGA, _Su, _Ta],
  [0, [() => FsxProtocol, 0], 64 | 0, 0, () => InputTagList]
);
export var CreateLocationFsxOpenZfsResponse = struct(n0, _CLFOZRr, 0, [_LA], [0]);
export var CreateLocationFsxWindowsRequest = struct(
  n0,
  _CLFWR,
  0,
  [_Su, _FFA, _SGA, _Ta, _U, _D, _Pa],
  [0, 0, 64 | 0, () => InputTagList, 0, 0, [() => SmbPassword, 0]]
);
export var CreateLocationFsxWindowsResponse = struct(n0, _CLFWRr, 0, [_LA], [0]);
export var CreateLocationSmbRequest = struct(
  n0,
  _CLSRre,
  0,
  [_Su, _SH, _U, _D, _Pa, _AAg, _MO, _Ta, _AT, _DIA, _KP, _KK, _KKC],
  [0, 0, 0, 0, [() => SmbPassword, 0], 64 | 0, () => SmbMountOptions, () => InputTagList, 0, 64 | 0, 0, 21, 21]
);
export var CreateLocationSmbResponse = struct(n0, _CLSRrea, 0, [_LA], [0]);
export var DescribeLocationFsxOntapRequest = struct(n0, _DLFOR, 0, [_LA], [0]);
export var DescribeLocationFsxOntapResponse = struct(
  n0,
  _DLFORe,
  0,
  [_CT, _LA, _LU, _Pr, _SGA, _SVMA, _FFA],
  [4, 0, 0, [() => FsxProtocol, 0], 64 | 0, 0, 0]
);
export var DescribeLocationFsxOpenZfsRequest = struct(n0, _DLFOZR, 0, [_LA], [0]);
export var DescribeLocationFsxOpenZfsResponse = struct(
  n0,
  _DLFOZRe,
  0,
  [_LA, _LU, _SGA, _Pr, _CT],
  [0, 0, 64 | 0, [() => FsxProtocol, 0], 4]
);
export var FsxProtocol = struct(n0, _FPs, 0, [_NFS, _SMB], [() => FsxProtocolNfs, [() => FsxProtocolSmb, 0]]);
export var FsxProtocolNfs = struct(n0, _FPN, 0, [_MO], [() => NfsMountOptions]);
export var FsxProtocolSmb = struct(
  n0,
  _FPS,
  0,
  [_D, _MO, _Pa, _U],
  [0, () => SmbMountOptions, [() => SmbPassword, 0], 0]
);
export var FsxUpdateProtocol = struct(
  n0,
  _FUP,
  0,
  [_NFS, _SMB],
  [() => FsxProtocolNfs, [() => FsxUpdateProtocolSmb, 0]]
);
export var FsxUpdateProtocolSmb = struct(
  n0,
  _FUPS,
  0,
  [_D, _MO, _Pa, _U],
  [0, () => SmbMountOptions, [() => SmbPassword, 0], 0]
);
export var UpdateLocationFsxOntapRequest = struct(n0, _ULFOR, 0, [_LA, _Pr, _Su], [0, [() => FsxUpdateProtocol, 0], 0]);
export var UpdateLocationFsxOntapResponse = struct(n0, _ULFORp, 0, [], []);
export var UpdateLocationFsxOpenZfsRequest = struct(n0, _ULFOZR, 0, [_LA, _Pr, _Su], [0, [() => FsxProtocol, 0], 0]);
export var UpdateLocationFsxOpenZfsResponse = struct(n0, _ULFOZRp, 0, [], []);
export var UpdateLocationFsxWindowsRequest = struct(
  n0,
  _ULFWR,
  0,
  [_LA, _Su, _D, _U, _Pa],
  [0, 0, 0, 0, [() => SmbPassword, 0]]
);
export var UpdateLocationFsxWindowsResponse = struct(n0, _ULFWRp, 0, [], []);
export var UpdateLocationSmbRequest = struct(
  n0,
  _ULSRpd,
  0,
  [_LA, _Su, _SH, _U, _D, _Pa, _AAg, _MO, _AT, _DIA, _KP, _KK, _KKC],
  [0, 0, 0, 0, 0, [() => SmbPassword, 0], 64 | 0, () => SmbMountOptions, 0, 64 | 0, 0, 21, 21]
);
export var UpdateLocationSmbResponse = struct(n0, _ULSRpda, 0, [], []);
export var CreateLocationFsxOntap = op(
  n0,
  _CLFO,
  0,
  () => CreateLocationFsxOntapRequest,
  () => CreateLocationFsxOntapResponse
);
export var CreateLocationFsxOpenZfs = op(
  n0,
  _CLFOZ,
  0,
  () => CreateLocationFsxOpenZfsRequest,
  () => CreateLocationFsxOpenZfsResponse
);
export var CreateLocationFsxWindows = op(
  n0,
  _CLFW,
  0,
  () => CreateLocationFsxWindowsRequest,
  () => CreateLocationFsxWindowsResponse
);
export var CreateLocationSmb = op(
  n0,
  _CLSr,
  0,
  () => CreateLocationSmbRequest,
  () => CreateLocationSmbResponse
);
export var DescribeLocationFsxOntap = op(
  n0,
  _DLFO,
  0,
  () => DescribeLocationFsxOntapRequest,
  () => DescribeLocationFsxOntapResponse
);
export var DescribeLocationFsxOpenZfs = op(
  n0,
  _DLFOZ,
  0,
  () => DescribeLocationFsxOpenZfsRequest,
  () => DescribeLocationFsxOpenZfsResponse
);
export var UpdateLocationFsxOntap = op(
  n0,
  _ULFO,
  0,
  () => UpdateLocationFsxOntapRequest,
  () => UpdateLocationFsxOntapResponse
);
export var UpdateLocationFsxOpenZfs = op(
  n0,
  _ULFOZ,
  0,
  () => UpdateLocationFsxOpenZfsRequest,
  () => UpdateLocationFsxOpenZfsResponse
);
export var UpdateLocationFsxWindows = op(
  n0,
  _ULFW,
  0,
  () => UpdateLocationFsxWindowsRequest,
  () => UpdateLocationFsxWindowsResponse
);
export var UpdateLocationSmb = op(
  n0,
  _ULSp,
  0,
  () => UpdateLocationSmbRequest,
  () => UpdateLocationSmbResponse
);
