// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ThrottlingException as __ThrottlingException } from "../models/index";
import { _aQE, _c, _CKSo, _e, _EDS, _EDSA, _hE, _M, _MES, _PEC, _PECR, _PECRu, _TE, n0 } from "./schemas_0";
import { ContextKeySelectors } from "./schemas_7_Event";

/* eslint no-var: 0 */

export var PutEventConfigurationRequest = struct(n0, _PECR, 0, [_EDS, _MES, _CKSo], [0, 0, () => ContextKeySelectors]);
export var PutEventConfigurationResponse = struct(
  n0,
  _PECRu,
  0,
  [_EDSA, _MES, _CKSo],
  [0, 0, () => ContextKeySelectors]
);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
    [_aQE]: [`ThrottlingException`, 429],
  },
  [_M],
  [0],

  __ThrottlingException
);
export var PutEventConfiguration = op(
  n0,
  _PEC,
  2,
  () => PutEventConfigurationRequest,
  () => PutEventConfigurationResponse
);
