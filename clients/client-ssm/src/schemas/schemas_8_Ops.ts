// smithy-typescript generated code
import { error, list, map, op, struct } from "@smithy/core/schema";

import {
  OpsMetadataAlreadyExistsException as __OpsMetadataAlreadyExistsException,
  OpsMetadataInvalidArgumentException as __OpsMetadataInvalidArgumentException,
  OpsMetadataKeyLimitExceededException as __OpsMetadataKeyLimitExceededException,
  OpsMetadataLimitExceededException as __OpsMetadataLimitExceededException,
  OpsMetadataNotFoundException as __OpsMetadataNotFoundException,
  OpsMetadataTooManyUpdatesException as __OpsMetadataTooManyUpdatesException,
} from "../models/index";
import {
  _aQE,
  _c,
  _CDr,
  _COM,
  _COMR,
  _COMRr,
  _DOM,
  _DOMR,
  _DOMRe,
  _e,
  _Fi,
  _GOM,
  _GOMR,
  _GOMRe,
  _K,
  _KTD,
  _LMD,
  _LMU,
  _LOM,
  _LOMR,
  _LOMRi,
  _m,
  _Me,
  _MM,
  _MR,
  _MTU,
  _MV,
  _NT,
  _OM,
  _OMA,
  _OMAEE,
  _OMF,
  _OMFL,
  _OMIAE,
  _OMKLEE,
  _OML,
  _OMLEE,
  _OMNFE,
  _OMTMUE,
  _RI,
  _T,
  _UOM,
  _UOMR,
  _UOMRp,
  _V,
  _Va,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateOpsMetadataRequest = struct(n0, _COMR, 0, [_RI, _Me, _T], [0, () => MetadataMap, () => TagList]);
export var CreateOpsMetadataResult = struct(n0, _COMRr, 0, [_OMA], [0]);
export var DeleteOpsMetadataRequest = struct(n0, _DOMR, 0, [_OMA], [0]);
export var DeleteOpsMetadataResult = struct(n0, _DOMRe, 0, [], []);
export var GetOpsMetadataRequest = struct(n0, _GOMR, 0, [_OMA, _MR, _NT], [0, 1, 0]);
export var GetOpsMetadataResult = struct(n0, _GOMRe, 0, [_RI, _Me, _NT], [0, () => MetadataMap, 0]);
export var ListOpsMetadataRequest = struct(n0, _LOMR, 0, [_Fi, _MR, _NT], [() => OpsMetadataFilterList, 1, 0]);
export var ListOpsMetadataResult = struct(n0, _LOMRi, 0, [_OML, _NT], [() => OpsMetadataList, 0]);
export var MetadataValue = struct(n0, _MV, 0, [_V], [0]);
export var OpsMetadata = struct(n0, _OM, 0, [_RI, _OMA, _LMD, _LMU, _CDr], [0, 0, 4, 0, 4]);
export var OpsMetadataAlreadyExistsException = error(
  n0,
  _OMAEE,
  {
    [_e]: _c,
    [_aQE]: [`OpsMetadataAlreadyExistsException`, 400],
  },
  [_m],
  [0],

  __OpsMetadataAlreadyExistsException
);
export var OpsMetadataFilter = struct(n0, _OMF, 0, [_K, _Va], [0, 64 | 0]);
export var OpsMetadataInvalidArgumentException = error(
  n0,
  _OMIAE,
  {
    [_e]: _c,
    [_aQE]: [`OpsMetadataInvalidArgumentException`, 400],
  },
  [_m],
  [0],

  __OpsMetadataInvalidArgumentException
);
export var OpsMetadataKeyLimitExceededException = error(
  n0,
  _OMKLEE,
  {
    [_e]: _c,
    [_aQE]: [`OpsMetadataKeyLimitExceededException`, 429],
  },
  [_m],
  [0],

  __OpsMetadataKeyLimitExceededException
);
export var OpsMetadataLimitExceededException = error(
  n0,
  _OMLEE,
  {
    [_e]: _c,
    [_aQE]: [`OpsMetadataLimitExceededException`, 429],
  },
  [_m],
  [0],

  __OpsMetadataLimitExceededException
);
export var OpsMetadataNotFoundException = error(
  n0,
  _OMNFE,
  {
    [_e]: _c,
    [_aQE]: [`OpsMetadataNotFoundException`, 404],
  },
  [_m],
  [0],

  __OpsMetadataNotFoundException
);
export var OpsMetadataTooManyUpdatesException = error(
  n0,
  _OMTMUE,
  {
    [_e]: _c,
    [_aQE]: [`OpsMetadataTooManyUpdatesException`, 429],
  },
  [_m],
  [0],

  __OpsMetadataTooManyUpdatesException
);
export var UpdateOpsMetadataRequest = struct(n0, _UOMR, 0, [_OMA, _MTU, _KTD], [0, () => MetadataMap, 64 | 0]);
export var UpdateOpsMetadataResult = struct(n0, _UOMRp, 0, [_OMA], [0]);
export var MetadataKeysToDeleteList = 64 | 0;

export var OpsMetadataFilterList = list(n0, _OMFL, 0, () => OpsMetadataFilter);
export var OpsMetadataFilterValueList = 64 | 0;

export var OpsMetadataList = list(n0, _OML, 0, () => OpsMetadata);
export var MetadataMap = map(n0, _MM, 0, 0, () => MetadataValue);
export var CreateOpsMetadata = op(
  n0,
  _COM,
  0,
  () => CreateOpsMetadataRequest,
  () => CreateOpsMetadataResult
);
export var DeleteOpsMetadata = op(
  n0,
  _DOM,
  0,
  () => DeleteOpsMetadataRequest,
  () => DeleteOpsMetadataResult
);
export var GetOpsMetadata = op(
  n0,
  _GOM,
  0,
  () => GetOpsMetadataRequest,
  () => GetOpsMetadataResult
);
export var ListOpsMetadata = op(
  n0,
  _LOM,
  0,
  () => ListOpsMetadataRequest,
  () => ListOpsMetadataResult
);
export var UpdateOpsMetadata = op(
  n0,
  _UOM,
  0,
  () => UpdateOpsMetadataRequest,
  () => UpdateOpsMetadataResult
);
