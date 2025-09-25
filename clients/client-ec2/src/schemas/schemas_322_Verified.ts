// smithy-typescript generated code
import { struct } from "@smithy/core/schema";

import {
  _CTre,
  _cTre,
  _De,
  _de,
  _DT,
  _dT,
  _eQN,
  _LUTa,
  _lUTa,
  _ow,
  _Own,
  _SS,
  _sSs,
  _T,
  _tS,
  _VAG,
  _VAGA,
  _vAGA,
  _VAGI,
  _vAGI,
  _VAII,
  _vAII,
  _xN,
  n0,
  TagList,
  VerifiedAccessSseSpecificationResponse,
} from "./schemas_0";

/* eslint no-var: 0 */

export var VerifiedAccessGroup = struct(
  n0,
  _VAG,
  0,
  [_VAGI, _VAII, _De, _Own, _VAGA, _CTre, _LUTa, _DT, _T, _SS],
  [
    [
      0,
      {
        [_eQN]: `VerifiedAccessGroupId`,
        [_xN]: _vAGI,
      },
    ],
    [
      0,
      {
        [_eQN]: `VerifiedAccessInstanceId`,
        [_xN]: _vAII,
      },
    ],
    [
      0,
      {
        [_eQN]: `Description`,
        [_xN]: _de,
      },
    ],
    [
      0,
      {
        [_eQN]: `Owner`,
        [_xN]: _ow,
      },
    ],
    [
      0,
      {
        [_eQN]: `VerifiedAccessGroupArn`,
        [_xN]: _vAGA,
      },
    ],
    [
      0,
      {
        [_eQN]: `CreationTime`,
        [_xN]: _cTre,
      },
    ],
    [
      0,
      {
        [_eQN]: `LastUpdatedTime`,
        [_xN]: _lUTa,
      },
    ],
    [
      0,
      {
        [_eQN]: `DeletionTime`,
        [_xN]: _dT,
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
      () => VerifiedAccessSseSpecificationResponse,
      {
        [_eQN]: `SseSpecification`,
        [_xN]: _sSs,
      },
    ],
  ]
);
