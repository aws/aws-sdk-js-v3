// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GHC, _GHCR, _GHCRe, _h, _HTTESIS, _PHC, _PHCR, _PHCRu, _UA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetHubConfigurationRequest = struct(n0, _GHCR, 0, [], []);
export var GetHubConfigurationResponse = struct(n0, _GHCRe, 0, [_HTTESIS, _UA], [1, 4]);
export var PutHubConfigurationRequest = struct(n0, _PHCR, 0, [_HTTESIS], [1]);
export var PutHubConfigurationResponse = struct(n0, _PHCRu, 0, [_HTTESIS], [1]);
export var GetHubConfiguration = op(
  n0,
  _GHC,
  {
    [_h]: ["GET", "/hub-configuration", 200],
  },
  () => GetHubConfigurationRequest,
  () => GetHubConfigurationResponse
);
export var PutHubConfiguration = op(
  n0,
  _PHC,
  {
    [_h]: ["PUT", "/hub-configuration", 201],
  },
  () => PutHubConfigurationRequest,
  () => PutHubConfigurationResponse
);
