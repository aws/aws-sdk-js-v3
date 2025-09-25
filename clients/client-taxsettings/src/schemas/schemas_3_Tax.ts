// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _b, _dFP, _DSL, _dSL, _GTRD, _GTRDR, _GTRDRe, _h, _p, _pSU, _tDAT, _TDM, _tDM, _tDN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DestinationS3Location = struct(n0, _DSL, 0, [_b, _p], [0, 0]);
export var GetTaxRegistrationDocumentRequest = struct(
  n0,
  _GTRDR,
  0,
  [_dSL, _tDM],
  [() => DestinationS3Location, () => TaxDocumentMetadata]
);
export var GetTaxRegistrationDocumentResponse = struct(n0, _GTRDRe, 0, [_dFP, _pSU], [0, 0]);
export var TaxDocumentMetadata = struct(n0, _TDM, 0, [_tDAT, _tDN], [0, 0]);
export var GetTaxRegistrationDocument = op(
  n0,
  _GTRD,
  {
    [_h]: ["POST", "/GetTaxRegistrationDocument", 200],
  },
  () => GetTaxRegistrationDocumentRequest,
  () => GetTaxRegistrationDocumentResponse
);
