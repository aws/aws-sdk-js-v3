// smithy-typescript generated code
import { op, sim, struct, struct as uni } from "@smithy/core/schema";

import { _CIo, _CSli, _D, _h, _JC, _JCUC, _PK, _Prov, _PUC, _SNES, _UCV, _UCVR, _UCVRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var SensitiveNonEmptyString = sim(n0, _SNES, 0, 8);
export var JiraCloudUpdateConfiguration = struct(n0, _JCUC, 0, [_PK], [0]);
export var UpdateConnectorV2Request = struct(
  n0,
  _UCVR,
  0,
  [_CIo, _CSli, _D, _Prov],
  [[0, 1], [() => SensitiveNonEmptyString, 0], 0, () => ProviderUpdateConfiguration]
);
export var UpdateConnectorV2Response = struct(n0, _UCVRp, 0, [], []);
export var ProviderUpdateConfiguration = uni(n0, _PUC, 0, [_JC], [() => JiraCloudUpdateConfiguration]);
export var UpdateConnectorV2 = op(
  n0,
  _UCV,
  {
    [_h]: ["PATCH", "/connectorsv2/{ConnectorId+}", 200],
  },
  () => UpdateConnectorV2Request,
  () => UpdateConnectorV2Response
);
