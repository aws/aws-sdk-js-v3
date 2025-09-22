// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ASss,
  _BUSCA,
  _BUSCAR,
  _BUSCARa,
  _ECr,
  _ERr,
  _h,
  _SAta,
  _SCAU,
  _SCAUt,
  _SCIec,
  _UAU,
  _UR,
  _USCAU,
  _USCAUn,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchUpdateStandardsControlAssociationsRequest = struct(
  n0,
  _BUSCAR,
  0,
  [_SCAU],
  [() => StandardsControlAssociationUpdates]
);
export var BatchUpdateStandardsControlAssociationsResponse = struct(
  n0,
  _BUSCARa,
  0,
  [_UAU],
  [() => UnprocessedStandardsControlAssociationUpdates]
);
export var StandardsControlAssociationUpdate = struct(n0, _SCAUt, 0, [_SAta, _SCIec, _ASss, _UR], [0, 0, 0, 0]);
export var UnprocessedStandardsControlAssociationUpdate = struct(
  n0,
  _USCAU,
  0,
  [_SCAUt, _ECr, _ERr],
  [() => StandardsControlAssociationUpdate, 0, 0]
);
export var StandardsControlAssociationUpdates = list(n0, _SCAU, 0, () => StandardsControlAssociationUpdate);
export var UnprocessedStandardsControlAssociationUpdates = list(
  n0,
  _USCAUn,
  0,
  () => UnprocessedStandardsControlAssociationUpdate
);
export var BatchUpdateStandardsControlAssociations = op(
  n0,
  _BUSCA,
  {
    [_h]: ["PATCH", "/associations", 200],
  },
  () => BatchUpdateStandardsControlAssociationsRequest,
  () => BatchUpdateStandardsControlAssociationsResponse
);
