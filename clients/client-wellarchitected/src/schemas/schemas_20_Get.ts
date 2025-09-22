// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _D,
  _GRT,
  _GRTI,
  _GRTO,
  _h,
  _L,
  _LAe,
  _LAen,
  _LTA,
  _LTD,
  _N,
  _O,
  _PAr,
  _QCu,
  _RTe,
  _SIA,
  _SIh,
  _SII,
  _SRT,
  _TA,
  _Ta,
  _TN,
  _UA,
  _URT,
  _URTI,
  _URTO,
  _US,
  _USI,
  _USII,
  _USIO,
  _WI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetReviewTemplateInput = struct(n0, _GRTI, 0, [_TA], [[0, 1]]);
export var GetReviewTemplateOutput = struct(n0, _GRTO, 0, [_RTe], [() => ReviewTemplate]);
export var ReviewTemplate = struct(
  n0,
  _RTe,
  0,
  [_D, _L, _N, _QCu, _O, _UA, _TA, _TN, _Ta, _US, _SII],
  [0, 64 | 0, 0, 128 | 1, 0, 4, 0, 0, 128 | 0, 0, 0]
);
export var ShareInvitation = struct(n0, _SIh, 0, [_SII, _SRT, _WI, _LAen, _LAe, _PAr, _TA], [0, 0, 0, 0, 0, 0, 0]);
export var UpdateReviewTemplateInput = struct(
  n0,
  _URTI,
  0,
  [_TA, _TN, _D, _N, _LTA, _LTD],
  [[0, 1], 0, 0, 0, 64 | 0, 64 | 0]
);
export var UpdateReviewTemplateOutput = struct(n0, _URTO, 0, [_RTe], [() => ReviewTemplate]);
export var UpdateShareInvitationInput = struct(n0, _USII, 0, [_SII, _SIA], [[0, 1], 0]);
export var UpdateShareInvitationOutput = struct(n0, _USIO, 0, [_SIh], [() => ShareInvitation]);
export var ReviewTemplateLensAliases = 64 | 0;

export var GetReviewTemplate = op(
  n0,
  _GRT,
  {
    [_h]: ["GET", "/reviewTemplates/{TemplateArn}", 200],
  },
  () => GetReviewTemplateInput,
  () => GetReviewTemplateOutput
);
export var UpdateReviewTemplate = op(
  n0,
  _URT,
  {
    [_h]: ["PATCH", "/reviewTemplates/{TemplateArn}", 200],
  },
  () => UpdateReviewTemplateInput,
  () => UpdateReviewTemplateOutput
);
export var UpdateShareInvitation = op(
  n0,
  _USI,
  {
    [_h]: ["PATCH", "/shareInvitations/{ShareInvitationId}", 200],
  },
  () => UpdateShareInvitationInput,
  () => UpdateShareInvitationOutput
);
