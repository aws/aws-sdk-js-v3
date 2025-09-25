// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aMHI,
  _aMI,
  _aMPI,
  _DAMIRe,
  _DAMIRRes,
  _DAMIRResc,
  _end,
  _HM,
  _hM,
  _HMi,
  _ht,
  _iAMHI,
  _iAMI,
  _iAMPI,
  _PM,
  _pM,
  _PMr,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeAssetModelInterfaceRelationshipRequest = struct(
  n0,
  _DAMIRRes,
  0,
  [_aMI, _iAMI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeAssetModelInterfaceRelationshipResponse = struct(
  n0,
  _DAMIRResc,
  0,
  [_aMI, _iAMI, _pM, _hM],
  [0, 0, () => PropertyMappings, () => HierarchyMappings]
);
export var HierarchyMapping = struct(n0, _HM, 0, [_aMHI, _iAMHI], [0, 0]);
export var PropertyMapping = struct(n0, _PM, 0, [_aMPI, _iAMPI], [0, 0]);
export var HierarchyMappings = list(n0, _HMi, 0, () => HierarchyMapping);
export var PropertyMappings = list(n0, _PMr, 0, () => PropertyMapping);
export var DescribeAssetModelInterfaceRelationship = op(
  n0,
  _DAMIRe,
  {
    [_ht]: [
      "GET",
      "/asset-models/{assetModelId}/interface/{interfaceAssetModelId}/asset-model-interface-relationship",
      200,
    ],
    [_end]: ["api."],
  },
  () => DescribeAssetModelInterfaceRelationshipRequest,
  () => DescribeAssetModelInterfaceRelationshipResponse
);
