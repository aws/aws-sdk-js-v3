// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import {
  BadRequestException as __BadRequestException,
  ConflictException as __ConflictException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
} from "../models/index";
import {
  _A,
  _BRE,
  _C,
  _c,
  _CA,
  _CAA,
  _CAh,
  _CAr,
  _CC,
  _CCR,
  _CCr,
  _CCRr,
  _CCRre,
  _CCRrea,
  _CE,
  _Ch,
  _CM,
  _CML,
  _CMS,
  _Co,
  _CT,
  _DC,
  _DCe,
  _DCR,
  _DCRe,
  _E,
  _e,
  _GC,
  _GCM,
  _GCMR,
  _GCMRe,
  _GCP,
  _GCPR,
  _GCPRe,
  _GCR,
  _GCRe,
  _h,
  _hE,
  _hQ,
  _LCM,
  _LCMR,
  _LCMRi,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _M,
  _MDM,
  _MR,
  _NT,
  _OIC,
  _P,
  _QC,
  _RA,
  _RI,
  _RNFE,
  _RT,
  _S,
  _SC,
  _SQEE,
  _SR,
  _SS,
  _T,
  _Ta,
  _TK,
  _tK,
  _TR,
  _TRR,
  _UA,
  _UR,
  _URR,
  n0,
} from "./schemas_0";
import { MobileDeviceManagement, OpenIdConfiguration } from "./schemas_1_Connector";
import { Unit } from "./schemas_3_Challenge";

/* eslint no-var: 0 */

export var SensitiveString = sim(n0, _SS, 0, 8);
export var BadRequestException = error(
  n0,
  _BRE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __BadRequestException
);
export var Challenge = struct(n0, _C, 0, [_A, _CA, _CAr, _UA, _P], [0, 0, 4, 4, [() => SensitiveString, 0]]);
export var ChallengeMetadata = struct(n0, _CM, 0, [_A, _CA, _CAr, _UA], [0, 0, 4, 4]);
export var ChallengeMetadataSummary = struct(n0, _CMS, 0, [_A, _CA, _CAr, _UA], [0, 0, 4, 4]);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M, _RI, _RT],
  [0, 0, 0],

  __ConflictException
);
export var Connector = struct(
  n0,
  _Co,
  0,
  [_A, _CAA, _T, _MDM, _OIC, _S, _SR, _E, _CAr, _UA],
  [0, 0, 0, () => MobileDeviceManagement, () => OpenIdConfiguration, 0, 0, 0, 4, 4]
);
export var CreateChallengeRequest = struct(n0, _CCR, 0, [_CA, _CT, _Ta], [0, [0, 4], 128 | 0]);
export var CreateChallengeResponse = struct(n0, _CCRr, 0, [_C], [[() => Challenge, 0]]);
export var CreateConnectorRequest = struct(
  n0,
  _CCRre,
  0,
  [_CAA, _MDM, _CT, _Ta],
  [0, () => MobileDeviceManagement, [0, 4], 128 | 0]
);
export var CreateConnectorResponse = struct(n0, _CCRrea, 0, [_CA], [0]);
export var DeleteChallengeRequest = struct(n0, _DCR, 0, [_CAh], [[0, 1]]);
export var DeleteConnectorRequest = struct(n0, _DCRe, 0, [_CA], [[0, 1]]);
export var GetChallengeMetadataRequest = struct(n0, _GCMR, 0, [_CAh], [[0, 1]]);
export var GetChallengeMetadataResponse = struct(n0, _GCMRe, 0, [_CM], [() => ChallengeMetadata]);
export var GetChallengePasswordRequest = struct(n0, _GCPR, 0, [_CAh], [[0, 1]]);
export var GetChallengePasswordResponse = struct(n0, _GCPRe, 0, [_P], [[() => SensitiveString, 0]]);
export var GetConnectorRequest = struct(n0, _GCR, 0, [_CA], [[0, 1]]);
export var GetConnectorResponse = struct(n0, _GCRe, 0, [_Co], [() => Connector]);
export var ListChallengeMetadataRequest = struct(
  n0,
  _LCMR,
  0,
  [_MR, _NT, _CA],
  [
    [
      1,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      0,
      {
        [_hQ]: _CA,
      },
    ],
  ]
);
export var ListChallengeMetadataResponse = struct(n0, _LCMRi, 0, [_Ch, _NT], [() => ChallengeMetadataList, 0]);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RA], [[0, 1]]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_Ta], [128 | 0]);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M, _RI, _RT],
  [0, 0, 0],

  __ResourceNotFoundException
);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_M, _RT, _SC, _QC],
  [0, 0, 0, 0],

  __ServiceQuotaExceededException
);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RA, _Ta], [[0, 1], 128 | 0]);
export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_RA, _TK],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _tK,
      },
    ],
  ]
);
export var ChallengeMetadataList = list(n0, _CML, 0, () => ChallengeMetadataSummary);
export var TagKeyList = 64 | 0;

export var Tags = 128 | 0;

export var CreateChallenge = op(
  n0,
  _CC,
  {
    [_h]: ["POST", "/challenges", 202],
  },
  () => CreateChallengeRequest,
  () => CreateChallengeResponse
);
export var CreateConnector = op(
  n0,
  _CCr,
  {
    [_h]: ["POST", "/connectors", 202],
  },
  () => CreateConnectorRequest,
  () => CreateConnectorResponse
);
export var DeleteChallenge = op(
  n0,
  _DC,
  {
    [_h]: ["DELETE", "/challenges/{ChallengeArn}", 202],
  },
  () => DeleteChallengeRequest,
  () => Unit
);
export var DeleteConnector = op(
  n0,
  _DCe,
  {
    [_h]: ["DELETE", "/connectors/{ConnectorArn}", 202],
  },
  () => DeleteConnectorRequest,
  () => Unit
);
export var GetChallengeMetadata = op(
  n0,
  _GCM,
  {
    [_h]: ["GET", "/challengeMetadata/{ChallengeArn}", 200],
  },
  () => GetChallengeMetadataRequest,
  () => GetChallengeMetadataResponse
);
export var GetChallengePassword = op(
  n0,
  _GCP,
  {
    [_h]: ["GET", "/challengePasswords/{ChallengeArn}", 200],
  },
  () => GetChallengePasswordRequest,
  () => GetChallengePasswordResponse
);
export var GetConnector = op(
  n0,
  _GC,
  {
    [_h]: ["GET", "/connectors/{ConnectorArn}", 200],
  },
  () => GetConnectorRequest,
  () => GetConnectorResponse
);
export var ListChallengeMetadata = op(
  n0,
  _LCM,
  {
    [_h]: ["GET", "/challengeMetadata", 200],
  },
  () => ListChallengeMetadataRequest,
  () => ListChallengeMetadataResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{ResourceArn}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/tags/{ResourceArn}", 204],
  },
  () => TagResourceRequest,
  () => Unit
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/tags/{ResourceArn}", 204],
  },
  () => UntagResourceRequest,
  () => Unit
);
