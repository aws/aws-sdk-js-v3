// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _AA, _AAF, _AAFR, _AAFRs, _AFA, _AFAL, _AFAp, _DAFA, _DAFAR, _DAFARe, _FN, _MR, _NT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ApplicationFleetAssociation = struct(n0, _AFA, 0, [_FN, _AA], [0, 0]);
export var AssociateApplicationFleetRequest = struct(n0, _AAFR, 0, [_FN, _AA], [0, 0]);
export var AssociateApplicationFleetResult = struct(n0, _AAFRs, 0, [_AFA], [() => ApplicationFleetAssociation]);
export var DescribeApplicationFleetAssociationsRequest = struct(n0, _DAFAR, 0, [_FN, _AA, _MR, _NT], [0, 0, 1, 0]);
export var DescribeApplicationFleetAssociationsResult = struct(
  n0,
  _DAFARe,
  0,
  [_AFAp, _NT],
  [() => ApplicationFleetAssociationList, 0]
);
export var ApplicationFleetAssociationList = list(n0, _AFAL, 0, () => ApplicationFleetAssociation);
export var AssociateApplicationFleet = op(
  n0,
  _AAF,
  0,
  () => AssociateApplicationFleetRequest,
  () => AssociateApplicationFleetResult
);
export var DescribeApplicationFleetAssociations = op(
  n0,
  _DAFA,
  0,
  () => DescribeApplicationFleetAssociationsRequest,
  () => DescribeApplicationFleetAssociationsResult
);
