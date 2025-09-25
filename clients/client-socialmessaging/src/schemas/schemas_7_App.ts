// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _dAL,
  _dAT,
  _DWAMT,
  _DWAMTI,
  _DWAMTO,
  _GWAMT,
  _GWAMTI,
  _GWAMTO,
  _hQ,
  _ht,
  _i,
  _LWAMT,
  _LWAMTI,
  _LWAMTO,
  _mR,
  _mTI,
  _nT,
  _t,
  _tC,
  _tCe,
  _tem,
  _tL,
  _tN,
  _tQS,
  _TS,
  _tS,
  _TSL,
  _UWAMT,
  _UWAMTI,
  _UWAMTO,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteWhatsAppMessageTemplateInput = struct(
  n0,
  _DWAMTI,
  0,
  [_mTI, _dAL, _i, _tN],
  [
    [
      0,
      {
        [_hQ]: _mTI,
      },
    ],
    [
      2,
      {
        [_hQ]: _dAT,
      },
    ],
    [
      0,
      {
        [_hQ]: _i,
      },
    ],
    [
      0,
      {
        [_hQ]: _tN,
      },
    ],
  ]
);
export var DeleteWhatsAppMessageTemplateOutput = struct(n0, _DWAMTO, 0, [], []);
export var GetWhatsAppMessageTemplateInput = struct(
  n0,
  _GWAMTI,
  0,
  [_mTI, _i],
  [
    [
      0,
      {
        [_hQ]: _mTI,
      },
    ],
    [
      0,
      {
        [_hQ]: _i,
      },
    ],
  ]
);
export var GetWhatsAppMessageTemplateOutput = struct(n0, _GWAMTO, 0, [_t], [0]);
export var ListWhatsAppMessageTemplatesInput = struct(
  n0,
  _LWAMTI,
  0,
  [_i, _nT, _mR],
  [
    [
      0,
      {
        [_hQ]: _i,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListWhatsAppMessageTemplatesOutput = struct(n0, _LWAMTO, 0, [_tem, _nT], [() => TemplateSummaryList, 0]);
export var TemplateSummary = struct(n0, _TS, 0, [_tN, _mTI, _tS, _tQS, _tL, _tC], [0, 0, 0, 0, 0, 0]);
export var UpdateWhatsAppMessageTemplateInput = struct(n0, _UWAMTI, 0, [_i, _mTI, _tC, _tCe], [0, 0, 0, 21]);
export var UpdateWhatsAppMessageTemplateOutput = struct(n0, _UWAMTO, 0, [], []);
export var TemplateSummaryList = list(n0, _TSL, 0, () => TemplateSummary);
export var DeleteWhatsAppMessageTemplate = op(
  n0,
  _DWAMT,
  {
    [_ht]: ["DELETE", "/v1/whatsapp/template", 200],
  },
  () => DeleteWhatsAppMessageTemplateInput,
  () => DeleteWhatsAppMessageTemplateOutput
);
export var GetWhatsAppMessageTemplate = op(
  n0,
  _GWAMT,
  {
    [_ht]: ["GET", "/v1/whatsapp/template", 200],
  },
  () => GetWhatsAppMessageTemplateInput,
  () => GetWhatsAppMessageTemplateOutput
);
export var ListWhatsAppMessageTemplates = op(
  n0,
  _LWAMT,
  {
    [_ht]: ["GET", "/v1/whatsapp/template/list", 200],
  },
  () => ListWhatsAppMessageTemplatesInput,
  () => ListWhatsAppMessageTemplatesOutput
);
export var UpdateWhatsAppMessageTemplate = op(
  n0,
  _UWAMT,
  {
    [_ht]: ["POST", "/v1/whatsapp/template", 200],
  },
  () => UpdateWhatsAppMessageTemplateInput,
  () => UpdateWhatsAppMessageTemplateOutput
);
