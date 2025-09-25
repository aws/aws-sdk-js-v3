// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CIA,
  _CIAR,
  _CIARr,
  _CUC,
  _CUCR,
  _CUCRr,
  _DIA,
  _DIAR,
  _DUC,
  _DUCR,
  _h,
  _hQ,
  _iA,
  _IAA,
  _IAI,
  _IAnt,
  _IAS,
  _IASL,
  _II,
  _ITn,
  _iTn,
  _LIAi,
  _LIARis,
  _LIARist,
  _LUC,
  _LUCR,
  _LUCRi,
  _mR,
  _MRa,
  _NT,
  _nT,
  _SAN,
  _SAU,
  _STo,
  _Ta,
  _UCA,
  _UCI,
  _UCs,
  _UCSL,
  _UCT,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateIntegrationAssociationRequest = struct(
  n0,
  _CIAR,
  0,
  [_II, _ITn, _IAnt, _SAU, _SAN, _STo, _Ta],
  [[0, 1], 0, 0, 0, 0, 0, 128 | 0]
);
export var CreateIntegrationAssociationResponse = struct(n0, _CIARr, 0, [_IAI, _IAA], [0, 0]);
export var CreateUseCaseRequest = struct(n0, _CUCR, 0, [_II, _IAI, _UCT, _Ta], [[0, 1], [0, 1], 0, 128 | 0]);
export var CreateUseCaseResponse = struct(n0, _CUCRr, 0, [_UCI, _UCA], [0, 0]);
export var DeleteIntegrationAssociationRequest = struct(
  n0,
  _DIAR,
  0,
  [_II, _IAI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteUseCaseRequest = struct(
  n0,
  _DUCR,
  0,
  [_II, _IAI, _UCI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var IntegrationAssociationSummary = struct(
  n0,
  _IAS,
  0,
  [_IAI, _IAA, _II, _ITn, _IAnt, _SAU, _SAN, _STo],
  [0, 0, 0, 0, 0, 0, 0, 0]
);
export var ListIntegrationAssociationsRequest = struct(
  n0,
  _LIARis,
  0,
  [_II, _ITn, _NT, _MRa, _IAnt],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _iTn,
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
    [
      0,
      {
        [_hQ]: _iA,
      },
    ],
  ]
);
export var ListIntegrationAssociationsResponse = struct(
  n0,
  _LIARist,
  0,
  [_IASL, _NT],
  [() => IntegrationAssociationSummaryList, 0]
);
export var ListUseCasesRequest = struct(
  n0,
  _LUCR,
  0,
  [_II, _IAI, _NT, _MRa],
  [
    [0, 1],
    [0, 1],
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
export var ListUseCasesResponse = struct(n0, _LUCRi, 0, [_UCSL, _NT], [() => UseCaseSummaryList, 0]);
export var UseCase = struct(n0, _UCs, 0, [_UCI, _UCA, _UCT], [0, 0, 0]);
export var IntegrationAssociationSummaryList = list(n0, _IASL, 0, () => IntegrationAssociationSummary);
export var UseCaseSummaryList = list(n0, _UCSL, 0, () => UseCase);
export var CreateIntegrationAssociation = op(
  n0,
  _CIA,
  {
    [_h]: ["PUT", "/instance/{InstanceId}/integration-associations", 200],
  },
  () => CreateIntegrationAssociationRequest,
  () => CreateIntegrationAssociationResponse
);
export var CreateUseCase = op(
  n0,
  _CUC,
  {
    [_h]: ["PUT", "/instance/{InstanceId}/integration-associations/{IntegrationAssociationId}/use-cases", 200],
  },
  () => CreateUseCaseRequest,
  () => CreateUseCaseResponse
);
export var DeleteIntegrationAssociation = op(
  n0,
  _DIA,
  {
    [_h]: ["DELETE", "/instance/{InstanceId}/integration-associations/{IntegrationAssociationId}", 200],
  },
  () => DeleteIntegrationAssociationRequest,
  () => Unit
);
export var DeleteUseCase = op(
  n0,
  _DUC,
  {
    [_h]: [
      "DELETE",
      "/instance/{InstanceId}/integration-associations/{IntegrationAssociationId}/use-cases/{UseCaseId}",
      200,
    ],
  },
  () => DeleteUseCaseRequest,
  () => Unit
);
export var ListIntegrationAssociations = op(
  n0,
  _LIAi,
  {
    [_h]: ["GET", "/instance/{InstanceId}/integration-associations", 200],
  },
  () => ListIntegrationAssociationsRequest,
  () => ListIntegrationAssociationsResponse
);
export var ListUseCases = op(
  n0,
  _LUC,
  {
    [_h]: ["GET", "/instance/{InstanceId}/integration-associations/{IntegrationAssociationId}/use-cases", 200],
  },
  () => ListUseCasesRequest,
  () => ListUseCasesResponse
);
