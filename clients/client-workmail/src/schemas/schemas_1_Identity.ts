// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AA,
  _AM,
  _DICA,
  _DICAR,
  _DICARe,
  _DIPCe,
  _DIPCRes,
  _DIPCResc,
  _IA,
  _ICC,
  _LID,
  _OI,
  _PATC,
  _PIPC,
  _PIPCR,
  _PIPCRu,
  _Sta,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteIdentityCenterApplicationRequest = struct(n0, _DICAR, 0, [_AA], [0]);
export var DeleteIdentityCenterApplicationResponse = struct(n0, _DICARe, 0, [], []);
export var DescribeIdentityProviderConfigurationRequest = struct(n0, _DIPCRes, 0, [_OI], [0]);
export var DescribeIdentityProviderConfigurationResponse = struct(
  n0,
  _DIPCResc,
  0,
  [_AM, _ICC, _PATC],
  [0, () => IdentityCenterConfiguration, () => PersonalAccessTokenConfiguration]
);
export var IdentityCenterConfiguration = struct(n0, _ICC, 0, [_IA, _AA], [0, 0]);
export var PersonalAccessTokenConfiguration = struct(n0, _PATC, 0, [_Sta, _LID], [0, 1]);
export var PutIdentityProviderConfigurationRequest = struct(
  n0,
  _PIPCR,
  0,
  [_OI, _AM, _ICC, _PATC],
  [0, 0, () => IdentityCenterConfiguration, () => PersonalAccessTokenConfiguration]
);
export var PutIdentityProviderConfigurationResponse = struct(n0, _PIPCRu, 0, [], []);
export var DeleteIdentityCenterApplication = op(
  n0,
  _DICA,
  2,
  () => DeleteIdentityCenterApplicationRequest,
  () => DeleteIdentityCenterApplicationResponse
);
export var DescribeIdentityProviderConfiguration = op(
  n0,
  _DIPCe,
  2,
  () => DescribeIdentityProviderConfigurationRequest,
  () => DescribeIdentityProviderConfigurationResponse
);
export var PutIdentityProviderConfiguration = op(
  n0,
  _PIPC,
  2,
  () => PutIdentityProviderConfigurationRequest,
  () => PutIdentityProviderConfigurationResponse
);
