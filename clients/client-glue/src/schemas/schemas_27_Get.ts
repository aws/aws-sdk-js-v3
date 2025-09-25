// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _APOM,
  _CE,
  _CEa,
  _DDB,
  _DN,
  _GM,
  _GMR,
  _GMRe,
  _GPetl,
  _GPRetl,
  _GPRetla,
  _Jd,
  _L,
  _La,
  _Ma,
  _ME,
  _MLa,
  _PSy,
  _S_,
  _SCca,
  _Si,
  _So,
  _SPou,
  _ST,
  _STo,
  _TN,
  _TPar,
  _TT,
  _TTa,
  n0,
} from "./schemas_0";
import { CodeGenNodeArgs } from "./schemas_77_Get";

/* eslint no-var: 0 */

export var CatalogEntry = struct(n0, _CE, 0, [_DN, _TN], [0, 0]);
export var GetMappingRequest = struct(
  n0,
  _GMR,
  0,
  [_So, _Si, _L],
  [() => CatalogEntry, () => CatalogEntries, () => Location]
);
export var GetMappingResponse = struct(n0, _GMRe, 0, [_Ma], [() => MappingList]);
export var GetPlanRequest = struct(
  n0,
  _GPRetl,
  0,
  [_Ma, _So, _Si, _L, _La, _APOM],
  [() => MappingList, () => CatalogEntry, () => CatalogEntries, () => Location, 0, 128 | 0]
);
export var GetPlanResponse = struct(n0, _GPRetla, 0, [_PSy, _SCca], [0, 0]);
export var Location = struct(
  n0,
  _L,
  0,
  [_Jd, _S_, _DDB],
  [() => CodeGenNodeArgs, () => CodeGenNodeArgs, () => CodeGenNodeArgs]
);
export var MappingEntry = struct(n0, _ME, 0, [_STo, _SPou, _ST, _TT, _TPar, _TTa], [0, 0, 0, 0, 0, 0]);
export var CatalogEntries = list(n0, _CEa, 0, () => CatalogEntry);
export var MappingList = list(n0, _MLa, 0, () => MappingEntry);
export var AdditionalPlanOptionsMap = 128 | 0;

export var GetMapping = op(
  n0,
  _GM,
  0,
  () => GetMappingRequest,
  () => GetMappingResponse
);
export var GetPlan = op(
  n0,
  _GPetl,
  0,
  () => GetPlanRequest,
  () => GetPlanResponse
);
