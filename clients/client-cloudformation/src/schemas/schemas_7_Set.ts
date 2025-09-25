// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  ChangeSetNotFoundException as __ChangeSetNotFoundException,
  InvalidChangeSetStatusException as __InvalidChangeSetStatusException,
} from "../models/index";
import {
  _aQE,
  _c,
  _CSN,
  _CSNFE,
  _DCS,
  _DCSI,
  _DCSO,
  _e,
  _GT,
  _GTIe,
  _GTO,
  _hE,
  _ICSSE,
  _M,
  _SA,
  _SN,
  _TB,
  _TS,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ChangeSetNotFoundException = error(
  n0,
  _CSNFE,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`ChangeSetNotFound`, 404],
  },
  [_M],
  [0],

  __ChangeSetNotFoundException
);
export var DeleteChangeSetInput = struct(n0, _DCSI, 0, [_CSN, _SN], [0, 0]);
export var DeleteChangeSetOutput = struct(n0, _DCSO, 0, [], []);
export var GetTemplateInput = struct(n0, _GTIe, 0, [_SN, _CSN, _TS], [0, 0, 0]);
export var GetTemplateOutput = struct(n0, _GTO, 0, [_TB, _SA], [0, 64 | 0]);
export var InvalidChangeSetStatusException = error(
  n0,
  _ICSSE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidChangeSetStatus`, 400],
  },
  [_M],
  [0],

  __InvalidChangeSetStatusException
);
export var StageList = 64 | 0;

export var DeleteChangeSet = op(
  n0,
  _DCS,
  0,
  () => DeleteChangeSetInput,
  () => DeleteChangeSetOutput
);
export var GetTemplate = op(
  n0,
  _GT,
  0,
  () => GetTemplateInput,
  () => GetTemplateOutput
);
