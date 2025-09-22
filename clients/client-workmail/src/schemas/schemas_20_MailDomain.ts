// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  InvalidCustomSesConfigurationException as __InvalidCustomSesConfigurationException,
  MailDomainInUseException as __MailDomainInUseException,
} from "../models/index";
import { _c, _DMDe, _DMDR, _DMDRe, _DN, _e, _ICSCE, _M, _MDIUE, _OI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeregisterMailDomainRequest = struct(n0, _DMDR, 0, [_OI, _DN], [0, 0]);
export var DeregisterMailDomainResponse = struct(n0, _DMDRe, 0, [], []);
export var InvalidCustomSesConfigurationException = error(
  n0,
  _ICSCE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __InvalidCustomSesConfigurationException
);
export var MailDomainInUseException = error(
  n0,
  _MDIUE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __MailDomainInUseException
);
export var DeregisterMailDomain = op(
  n0,
  _DMDe,
  2,
  () => DeregisterMailDomainRequest,
  () => DeregisterMailDomainResponse
);
