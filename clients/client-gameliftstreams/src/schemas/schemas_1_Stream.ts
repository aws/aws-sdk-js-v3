// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _AAp,
  _AAs,
  _AC,
  _AEV,
  _AIp,
  _ALA,
  _ALOU,
  _ALP,
  _AOC,
  _ASG,
  _ASGL,
  _ASGLI,
  _ASGLO,
  _ASU,
  _CA,
  _CAI,
  _CAO,
  _CAr,
  _CSG,
  _CSGI,
  _CSGO,
  _CT,
  _CTS,
  _D,
  _DA,
  _DAI,
  _EFM,
  _EFS,
  _EP,
  _GA,
  _GAI,
  _GAO,
  _GSG,
  _GSGI,
  _GSGO,
  _GSS,
  _GSSI,
  _GSSO,
  _h,
  _hQ,
  _I,
  _IC,
  _Id,
  _It,
  _L,
  _LC,
  _LCo,
  _LFLU,
  _LN,
  _Lo,
  _LS,
  _LSo,
  _LSS,
  _LSSBA,
  _LSSBAI,
  _LSSBAO,
  _LSSI,
  _LSSO,
  _LUA,
  _MR,
  _NT,
  _ODC,
  _OU,
  _P,
  _RC,
  _RE,
  _RS,
  _RSe,
  _S,
  _SC,
  _SGI,
  _SLS,
  _SR,
  _SRi,
  _SRt,
  _SSI,
  _SSS,
  _SSSI,
  _SSSL,
  _SSSO,
  _SSSt,
  _T,
  _UA,
  _UAI,
  _UAO,
  _UI,
  _USG,
  _USGI,
  _USGO,
  _WSPU,
  n0,
} from "./schemas_0";
import { DefaultApplication, RuntimeEnvironment } from "./schemas_5_Stream";
import { SignalRequest, SignalResponse } from "./schemas_9_StreamSession";

/* eslint no-var: 0 */

export var AddStreamGroupLocationsInput = struct(n0, _ASGLI, 0, [_I, _LC], [[0, 1], () => LocationConfigurations]);
export var AddStreamGroupLocationsOutput = struct(n0, _ASGLO, 0, [_I, _L], [0, () => LocationStates]);
export var CreateApplicationInput = struct(
  n0,
  _CAI,
  0,
  [_D, _RE, _EP, _ASU, _ALP, _ALOU, _T, _CT],
  [0, () => RuntimeEnvironment, 0, 0, 64 | 0, 0, 128 | 0, [0, 4]]
);
export var CreateApplicationOutput = struct(
  n0,
  _CAO,
  0,
  [_A, _D, _RE, _EP, _ALP, _ALOU, _ASU, _Id, _S, _SRt, _RS, _CA, _LUA, _ASG],
  [0, 0, () => RuntimeEnvironment, 0, 64 | 0, 0, 0, 0, 0, 0, () => ReplicationStatuses, 4, 4, 64 | 0]
);
export var CreateStreamGroupInput = struct(
  n0,
  _CSGI,
  0,
  [_D, _SC, _DAI, _LC, _T, _CT],
  [0, 0, 0, () => LocationConfigurations, 128 | 0, [0, 4]]
);
export var CreateStreamGroupOutput = struct(
  n0,
  _CSGO,
  0,
  [_A, _D, _DA, _LS, _SC, _Id, _S, _SRt, _LUA, _CA, _AAs],
  [0, 0, () => DefaultApplication, () => LocationStates, 0, 0, 0, 0, 4, 4, 64 | 0]
);
export var ExportFilesMetadata = struct(n0, _EFM, 0, [_S, _SRt, _OU], [0, 0, 0]);
export var GetApplicationInput = struct(n0, _GAI, 0, [_I], [[0, 1]]);
export var GetApplicationOutput = struct(
  n0,
  _GAO,
  0,
  [_A, _D, _RE, _EP, _ALP, _ALOU, _ASU, _Id, _S, _SRt, _RS, _CA, _LUA, _ASG],
  [0, 0, () => RuntimeEnvironment, 0, 64 | 0, 0, 0, 0, 0, 0, () => ReplicationStatuses, 4, 4, 64 | 0]
);
export var GetStreamGroupInput = struct(n0, _GSGI, 0, [_I], [[0, 1]]);
export var GetStreamGroupOutput = struct(
  n0,
  _GSGO,
  0,
  [_A, _D, _DA, _LS, _SC, _Id, _S, _SRt, _LUA, _CA, _AAs],
  [0, 0, () => DefaultApplication, () => LocationStates, 0, 0, 0, 0, 4, 4, 64 | 0]
);
export var GetStreamSessionInput = struct(
  n0,
  _GSSI,
  0,
  [_I, _SSI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetStreamSessionOutput = struct(
  n0,
  _GSSO,
  0,
  [_A, _D, _SGI, _UI, _S, _SRt, _P, _Lo, _SR, _SRi, _CTS, _SLS, _ALA, _AEV, _LFLU, _WSPU, _LUA, _CA, _AAp, _EFM],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    [() => SignalRequest, 0],
    [() => SignalResponse, 0],
    1,
    1,
    64 | 0,
    128 | 0,
    0,
    0,
    4,
    4,
    0,
    () => ExportFilesMetadata,
  ]
);
export var ListStreamSessionsByAccountInput = struct(
  n0,
  _LSSBAI,
  0,
  [_S, _EFS, _NT, _MR],
  [
    [
      0,
      {
        [_hQ]: _S,
      },
    ],
    [
      0,
      {
        [_hQ]: _EFS,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
  ]
);
export var ListStreamSessionsByAccountOutput = struct(n0, _LSSBAO, 0, [_It, _NT], [() => StreamSessionSummaryList, 0]);
export var ListStreamSessionsInput = struct(
  n0,
  _LSSI,
  0,
  [_S, _EFS, _NT, _MR, _I],
  [
    [
      0,
      {
        [_hQ]: _S,
      },
    ],
    [
      0,
      {
        [_hQ]: _EFS,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
    [0, 1],
  ]
);
export var ListStreamSessionsOutput = struct(n0, _LSSO, 0, [_It, _NT], [() => StreamSessionSummaryList, 0]);
export var LocationConfiguration = struct(n0, _LCo, 0, [_LN, _AOC, _ODC], [0, 1, 1]);
export var LocationState = struct(n0, _LSo, 0, [_LN, _S, _AOC, _ODC, _RC, _AC, _IC], [0, 0, 1, 1, 1, 1, 1]);
export var ReplicationStatus = struct(n0, _RSe, 0, [_Lo, _S], [0, 0]);
export var StartStreamSessionInput = struct(
  n0,
  _SSSI,
  0,
  [_CT, _D, _I, _P, _SR, _AIp, _UI, _L, _CTS, _SLS, _ALA, _AEV],
  [[0, 4], 0, [0, 1], 0, [() => SignalRequest, 0], 0, 0, 64 | 0, 1, 1, 64 | 0, 128 | 0]
);
export var StartStreamSessionOutput = struct(
  n0,
  _SSSO,
  0,
  [_A, _D, _SGI, _UI, _S, _SRt, _P, _Lo, _SR, _SRi, _CTS, _SLS, _ALA, _AEV, _LFLU, _WSPU, _LUA, _CA, _AAp, _EFM],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    [() => SignalRequest, 0],
    [() => SignalResponse, 0],
    1,
    1,
    64 | 0,
    128 | 0,
    0,
    0,
    4,
    4,
    0,
    () => ExportFilesMetadata,
  ]
);
export var StreamSessionSummary = struct(
  n0,
  _SSS,
  0,
  [_A, _UI, _S, _P, _LUA, _CA, _AAp, _EFM, _Lo],
  [0, 0, 0, 0, 4, 4, 0, () => ExportFilesMetadata, 0]
);
export var UpdateApplicationInput = struct(n0, _UAI, 0, [_I, _D, _ALP, _ALOU], [[0, 1], 0, 64 | 0, 0]);
export var UpdateApplicationOutput = struct(
  n0,
  _UAO,
  0,
  [_A, _D, _RE, _EP, _ALP, _ALOU, _ASU, _Id, _S, _SRt, _RS, _CA, _LUA, _ASG],
  [0, 0, () => RuntimeEnvironment, 0, 64 | 0, 0, 0, 0, 0, 0, () => ReplicationStatuses, 4, 4, 64 | 0]
);
export var UpdateStreamGroupInput = struct(
  n0,
  _USGI,
  0,
  [_I, _LC, _D, _DAI],
  [[0, 1], () => LocationConfigurations, 0, 0]
);
export var UpdateStreamGroupOutput = struct(
  n0,
  _USGO,
  0,
  [_A, _D, _DA, _LS, _SC, _Id, _S, _SRt, _LUA, _CA, _AAs],
  [0, 0, () => DefaultApplication, () => LocationStates, 0, 0, 0, 0, 4, 4, 64 | 0]
);
export var FilePaths = 64 | 0;

export var GameLaunchArgList = 64 | 0;

export var LocationConfigurations = list(n0, _LC, 0, () => LocationConfiguration);
export var LocationList = 64 | 0;

export var LocationStates = list(n0, _LS, 0, () => LocationState);
export var ReplicationStatuses = list(n0, _RS, 0, () => ReplicationStatus);
export var StreamSessionSummaryList = list(n0, _SSSL, 0, () => StreamSessionSummary);
export var EnvironmentVariables = 128 | 0;

export var AddStreamGroupLocations = op(
  n0,
  _ASGL,
  {
    [_h]: ["POST", "/streamgroups/{Identifier}/locations", 200],
  },
  () => AddStreamGroupLocationsInput,
  () => AddStreamGroupLocationsOutput
);
export var CreateApplication = op(
  n0,
  _CAr,
  {
    [_h]: ["POST", "/applications", 201],
  },
  () => CreateApplicationInput,
  () => CreateApplicationOutput
);
export var CreateStreamGroup = op(
  n0,
  _CSG,
  {
    [_h]: ["POST", "/streamgroups", 201],
  },
  () => CreateStreamGroupInput,
  () => CreateStreamGroupOutput
);
export var GetApplication = op(
  n0,
  _GA,
  {
    [_h]: ["GET", "/applications/{Identifier}", 200],
  },
  () => GetApplicationInput,
  () => GetApplicationOutput
);
export var GetStreamGroup = op(
  n0,
  _GSG,
  {
    [_h]: ["GET", "/streamgroups/{Identifier}", 200],
  },
  () => GetStreamGroupInput,
  () => GetStreamGroupOutput
);
export var GetStreamSession = op(
  n0,
  _GSS,
  {
    [_h]: ["GET", "/streamgroups/{Identifier}/streamsessions/{StreamSessionIdentifier}", 200],
  },
  () => GetStreamSessionInput,
  () => GetStreamSessionOutput
);
export var ListStreamSessions = op(
  n0,
  _LSS,
  {
    [_h]: ["GET", "/streamgroups/{Identifier}/streamsessions", 200],
  },
  () => ListStreamSessionsInput,
  () => ListStreamSessionsOutput
);
export var ListStreamSessionsByAccount = op(
  n0,
  _LSSBA,
  {
    [_h]: ["GET", "/streamsessions", 200],
  },
  () => ListStreamSessionsByAccountInput,
  () => ListStreamSessionsByAccountOutput
);
export var StartStreamSession = op(
  n0,
  _SSSt,
  {
    [_h]: ["POST", "/streamgroups/{Identifier}/streamsessions", 201],
  },
  () => StartStreamSessionInput,
  () => StartStreamSessionOutput
);
export var UpdateApplication = op(
  n0,
  _UA,
  {
    [_h]: ["PATCH", "/applications/{Identifier}", 200],
  },
  () => UpdateApplicationInput,
  () => UpdateApplicationOutput
);
export var UpdateStreamGroup = op(
  n0,
  _USG,
  {
    [_h]: ["PATCH", "/streamgroups/{Identifier}", 200],
  },
  () => UpdateStreamGroupInput,
  () => UpdateStreamGroupOutput
);
