// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _cT,
  _GFPC,
  _GFPCR,
  _GFPCRe,
  _h,
  _iT,
  _jN,
  _pCF,
  _PFPC,
  _PFPCR,
  _PFPCRu,
  _pPF,
  _SHC,
  _sHC,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetFindingsPublicationConfigurationRequest = struct(n0, _GFPCR, 0, [], []);
export var GetFindingsPublicationConfigurationResponse = struct(
  n0,
  _GFPCRe,
  0,
  [_sHC],
  [
    [
      () => SecurityHubConfiguration,
      {
        [_jN]: _sHC,
      },
    ],
  ]
);
export var PutFindingsPublicationConfigurationRequest = struct(
  n0,
  _PFPCR,
  0,
  [_cT, _sHC],
  [
    [
      0,
      {
        [_jN]: _cT,
        [_iT]: 1,
      },
    ],
    [
      () => SecurityHubConfiguration,
      {
        [_jN]: _sHC,
      },
    ],
  ]
);
export var PutFindingsPublicationConfigurationResponse = struct(n0, _PFPCRu, 0, [], []);
export var SecurityHubConfiguration = struct(
  n0,
  _SHC,
  0,
  [_pCF, _pPF],
  [
    [
      2,
      {
        [_jN]: _pCF,
      },
    ],
    [
      2,
      {
        [_jN]: _pPF,
      },
    ],
  ]
);
export var GetFindingsPublicationConfiguration = op(
  n0,
  _GFPC,
  {
    [_h]: ["GET", "/findings-publication-configuration", 200],
  },
  () => GetFindingsPublicationConfigurationRequest,
  () => GetFindingsPublicationConfigurationResponse
);
export var PutFindingsPublicationConfiguration = op(
  n0,
  _PFPC,
  {
    [_h]: ["PUT", "/findings-publication-configuration", 200],
  },
  () => PutFindingsPublicationConfigurationRequest,
  () => PutFindingsPublicationConfigurationResponse
);
