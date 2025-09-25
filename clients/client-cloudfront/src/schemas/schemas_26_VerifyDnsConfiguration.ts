// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _DCL, _DCn, _Dom, _h, _Ide, _Re, _S, _VDC, _VDCR, _VDCRe, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DnsConfiguration = struct(n0, _DCn, 0, [_Dom, _S, _Re], [0, 0, 0]);
export var VerifyDnsConfigurationRequest = struct(n0, _VDCR, 0, [_Dom, _Ide], [0, 0]);
export var VerifyDnsConfigurationResult = struct(n0, _VDCRe, 0, [_DCL], [[() => DnsConfigurationList, 0]]);
export var DnsConfigurationList = list(n0, _DCL, 0, [
  () => DnsConfiguration,
  {
    [_xN]: _DCn,
  },
]);
export var VerifyDnsConfiguration = op(
  n0,
  _VDC,
  {
    [_h]: ["POST", "/2020-05-31/verify-dns-configuration", 200],
  },
  () => VerifyDnsConfigurationRequest,
  () => VerifyDnsConfigurationResult
);
