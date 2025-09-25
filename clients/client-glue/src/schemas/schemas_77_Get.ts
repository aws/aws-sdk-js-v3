// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Arg,
  _CGE,
  _CGN,
  _CGNA,
  _CGNAo,
  _CSrea,
  _CSRre,
  _CSRrea,
  _DEa,
  _DNa,
  _GDG,
  _GDGR,
  _GDGRe,
  _Id,
  _La,
  _LN,
  _N,
  _NT,
  _Para,
  _PSy,
  _SCca,
  _So,
  _Tar,
  _TPa,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CodeGenEdge = struct(n0, _CGE, 0, [_So, _Tar, _TPa], [0, 0, 0]);
export var CodeGenNode = struct(n0, _CGN, 0, [_Id, _NT, _Arg, _LN], [0, 0, () => CodeGenNodeArgs, 1]);
export var CodeGenNodeArg = struct(n0, _CGNA, 0, [_N, _V, _Para], [0, 0, 2]);
export var CreateScriptRequest = struct(n0, _CSRre, 0, [_DNa, _DEa, _La], [() => DagNodes, () => DagEdges, 0]);
export var CreateScriptResponse = struct(n0, _CSRrea, 0, [_PSy, _SCca], [0, 0]);
export var GetDataflowGraphRequest = struct(n0, _GDGR, 0, [_PSy], [0]);
export var GetDataflowGraphResponse = struct(n0, _GDGRe, 0, [_DNa, _DEa], [() => DagNodes, () => DagEdges]);
export var CodeGenNodeArgs = list(n0, _CGNAo, 0, () => CodeGenNodeArg);
export var DagEdges = list(n0, _DEa, 0, () => CodeGenEdge);
export var DagNodes = list(n0, _DNa, 0, () => CodeGenNode);
export var CreateScript = op(
  n0,
  _CSrea,
  0,
  () => CreateScriptRequest,
  () => CreateScriptResponse
);
export var GetDataflowGraph = op(
  n0,
  _GDG,
  0,
  () => GetDataflowGraphRequest,
  () => GetDataflowGraphResponse
);
