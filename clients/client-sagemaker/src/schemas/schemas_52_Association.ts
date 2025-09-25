// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAd,
  _AAR,
  _AARd,
  _Ar,
  _ASs,
  _ASss,
  _ATs,
  _CAre,
  _CB,
  _CBr,
  _CT,
  _DA,
  _DAeletes,
  _DARelete,
  _DAReletes,
  _Di,
  _DN,
  _DT,
  _Ed,
  _Edg,
  _Fil,
  _IEn,
  _LAists,
  _LARists,
  _LARistss,
  _LTi,
  _LTin,
  _MAodi,
  _MB,
  _MDa,
  _MR,
  _NT,
  _Pr,
  _QF,
  _QL,
  _QLR,
  _QLRu,
  _SA,
  _SAt,
  _SBo,
  _SNo,
  _SO,
  _ST,
  _Ty,
  _Typ,
  _Ve,
  _Ver,
  n0,
  UserContext,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AddAssociationRequest = struct(n0, _AAR, 0, [_SA, _DA, _ATs], [0, 0, 0]);
export var AddAssociationResponse = struct(n0, _AARd, 0, [_SA, _DA], [0, 0]);
export var AssociationSummary = struct(
  n0,
  _ASs,
  0,
  [_SA, _DA, _ST, _DT, _ATs, _SNo, _DN, _CT, _CB],
  [0, 0, 0, 0, 0, 0, 0, 4, () => UserContext]
);
export var DeleteAssociationRequest = struct(n0, _DARelete, 0, [_SA, _DA], [0, 0]);
export var DeleteAssociationResponse = struct(n0, _DAReletes, 0, [_SA, _DA], [0, 0]);
export var Edge = struct(n0, _Ed, 0, [_SA, _DA, _ATs], [0, 0, 0]);
export var ListAssociationsRequest = struct(
  n0,
  _LARists,
  0,
  [_SA, _DA, _ST, _DT, _ATs, _CAre, _CBr, _SBo, _SO, _NT, _MR],
  [0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 1]
);
export var ListAssociationsResponse = struct(n0, _LARistss, 0, [_ASss, _NT], [() => AssociationSummaries, 0]);
export var QueryFilters = struct(
  n0,
  _QF,
  0,
  [_Typ, _LTi, _CBr, _CAre, _MB, _MAodi, _Pr],
  [64 | 0, 64 | 0, 4, 4, 4, 4, 128 | 0]
);
export var QueryLineageRequest = struct(
  n0,
  _QLR,
  0,
  [_SAt, _Di, _IEn, _Fil, _MDa, _MR, _NT],
  [64 | 0, 0, 2, () => QueryFilters, 1, 1, 0]
);
export var QueryLineageResponse = struct(n0, _QLRu, 0, [_Ve, _Edg, _NT], [() => Vertices, () => Edges, 0]);
export var Vertex = struct(n0, _Ver, 0, [_Ar, _Ty, _LTin], [0, 0, 0]);
export var AssociationSummaries = list(n0, _ASss, 0, () => AssociationSummary);
export var Edges = list(n0, _Edg, 0, () => Edge);
export var QueryLineageStartArns = 64 | 0;

export var QueryLineageTypes = 64 | 0;

export var QueryTypes = 64 | 0;

export var Vertices = list(n0, _Ve, 0, () => Vertex);
export var QueryProperties = 128 | 0;

export var AddAssociation = op(
  n0,
  _AAd,
  0,
  () => AddAssociationRequest,
  () => AddAssociationResponse
);
export var DeleteAssociation = op(
  n0,
  _DAeletes,
  0,
  () => DeleteAssociationRequest,
  () => DeleteAssociationResponse
);
export var ListAssociations = op(
  n0,
  _LAists,
  0,
  () => ListAssociationsRequest,
  () => ListAssociationsResponse
);
export var QueryLineage = op(
  n0,
  _QL,
  0,
  () => QueryLineageRequest,
  () => QueryLineageResponse
);
