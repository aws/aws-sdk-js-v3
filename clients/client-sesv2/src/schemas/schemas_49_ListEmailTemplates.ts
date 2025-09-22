// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _CTr, _ETM, _ETML, _h, _hQ, _LET, _LETR, _LETRi, _NT, _PS, _TM, _TN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var EmailTemplateMetadata = struct(n0, _ETM, 0, [_TN, _CTr], [0, 4]);
export var ListEmailTemplatesRequest = struct(
  n0,
  _LETR,
  0,
  [_NT, _PS],
  [
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      1,
      {
        [_hQ]: _PS,
      },
    ],
  ]
);
export var ListEmailTemplatesResponse = struct(n0, _LETRi, 0, [_TM, _NT], [() => EmailTemplateMetadataList, 0]);
export var EmailTemplateMetadataList = list(n0, _ETML, 0, () => EmailTemplateMetadata);
export var ListEmailTemplates = op(
  n0,
  _LET,
  {
    [_h]: ["GET", "/v2/email/templates", 200],
  },
  () => ListEmailTemplatesRequest,
  () => ListEmailTemplatesResponse
);
