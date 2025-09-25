// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _AZ, _DDN, _DDNR, _DDNRe, _DN, _DNS, _DNSL, _h, _IT, _NI, _NS, _NTo, _SS, _STt, _SVT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeDomainNodesRequest = struct(n0, _DDNR, 0, [_DN], [[0, 1]]);
export var DescribeDomainNodesResponse = struct(n0, _DDNRe, 0, [_DNSL], [() => DomainNodesStatusList]);
export var DomainNodesStatus = struct(
  n0,
  _DNS,
  0,
  [_NI, _NTo, _AZ, _IT, _NS, _STt, _SVT, _SS],
  [0, 0, 0, 0, 0, 0, 0, 0]
);
export var DomainNodesStatusList = list(n0, _DNSL, 0, () => DomainNodesStatus);
export var DescribeDomainNodes = op(
  n0,
  _DDN,
  {
    [_h]: ["GET", "/2021-01-01/opensearch/domain/{DomainName}/nodes", 200],
  },
  () => DescribeDomainNodesRequest,
  () => DescribeDomainNodesResponse
);
