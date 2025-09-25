// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AA, _CSN, _h, _PCSAO, _PCSAOR, _PCSAORu, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var PutConfigurationSetArchivingOptionsRequest = struct(n0, _PCSAOR, 0, [_CSN, _AA], [[0, 1], 0]);
export var PutConfigurationSetArchivingOptionsResponse = struct(n0, _PCSAORu, 0, [], []);
export var PutConfigurationSetArchivingOptions = op(
  n0,
  _PCSAO,
  {
    [_h]: ["PUT", "/v2/email/configuration-sets/{ConfigurationSetName}/archiving-options", 200],
  },
  () => PutConfigurationSetArchivingOptionsRequest,
  () => PutConfigurationSetArchivingOptionsResponse
);
