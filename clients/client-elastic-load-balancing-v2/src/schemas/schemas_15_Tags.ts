// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  DeleteAssociationSameAccountException as __DeleteAssociationSameAccountException,
  ResourceNotFoundException as __ResourceNotFoundException,
  TrustStoreAssociationNotFoundException as __TrustStoreAssociationNotFoundException,
} from "../models/index";
import {
  _aQE,
  _c,
  _DASAE,
  _DSTSA,
  _DSTSAI,
  _DSTSAO,
  _e,
  _GRP,
  _GRPI,
  _GRPO,
  _hE,
  _M,
  _Pol,
  _RAe,
  _RNFE,
  _TSA,
  _TSANFE,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAssociationSameAccountException = error(
  n0,
  _DASAE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`DeleteAssociationSameAccount`, 400],
  },
  [_M],
  [0],

  __DeleteAssociationSameAccountException
);
export var DeleteSharedTrustStoreAssociationInput = struct(n0, _DSTSAI, 0, [_TSA, _RAe], [0, 0]);
export var DeleteSharedTrustStoreAssociationOutput = struct(n0, _DSTSAO, 0, [], []);
export var GetResourcePolicyInput = struct(n0, _GRPI, 0, [_RAe], [0]);
export var GetResourcePolicyOutput = struct(n0, _GRPO, 0, [_Pol], [0]);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ResourceNotFound`, 400],
  },
  [_M],
  [0],

  __ResourceNotFoundException
);
export var TrustStoreAssociationNotFoundException = error(
  n0,
  _TSANFE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`AssociationNotFound`, 400],
  },
  [_M],
  [0],

  __TrustStoreAssociationNotFoundException
);
export var DeleteSharedTrustStoreAssociation = op(
  n0,
  _DSTSA,
  0,
  () => DeleteSharedTrustStoreAssociationInput,
  () => DeleteSharedTrustStoreAssociationOutput
);
export var GetResourcePolicy = op(
  n0,
  _GRP,
  0,
  () => GetResourcePolicyInput,
  () => GetResourcePolicyOutput
);
