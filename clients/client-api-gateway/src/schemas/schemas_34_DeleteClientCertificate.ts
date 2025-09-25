// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cCI, _DCC, _DCCR, _ht, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteClientCertificateRequest = struct(n0, _DCCR, 0, [_cCI], [[0, 1]]);
export var DeleteClientCertificate = op(
  n0,
  _DCC,
  {
    [_ht]: ["DELETE", "/clientcertificates/{clientCertificateId}", 202],
  },
  () => DeleteClientCertificateRequest,
  () => Unit
);
