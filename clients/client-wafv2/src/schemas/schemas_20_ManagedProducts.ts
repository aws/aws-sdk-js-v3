// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DAMP,
  _DAMPR,
  _DAMPRe,
  _DMPBV,
  _DMPBVR,
  _DMPBVRe,
  _IAMRS,
  _IVS,
  _MPa,
  _MPD,
  _MPDa,
  _MRSN,
  _PD,
  _PI,
  _PL,
  _PT,
  _Sc,
  _STA,
  _VN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeAllManagedProductsRequest = struct(n0, _DAMPR, 0, [_Sc], [0]);
export var DescribeAllManagedProductsResponse = struct(n0, _DAMPRe, 0, [_MPa], [() => ManagedProductDescriptors]);
export var DescribeManagedProductsByVendorRequest = struct(n0, _DMPBVR, 0, [_VN, _Sc], [0, 0]);
export var DescribeManagedProductsByVendorResponse = struct(n0, _DMPBVRe, 0, [_MPa], [() => ManagedProductDescriptors]);
export var ManagedProductDescriptor = struct(
  n0,
  _MPD,
  0,
  [_VN, _MRSN, _PI, _PL, _PT, _PD, _STA, _IVS, _IAMRS],
  [0, 0, 0, 0, 0, 0, 0, 2, 2]
);
export var ManagedProductDescriptors = list(n0, _MPDa, 0, () => ManagedProductDescriptor);
export var DescribeAllManagedProducts = op(
  n0,
  _DAMP,
  0,
  () => DescribeAllManagedProductsRequest,
  () => DescribeAllManagedProductsResponse
);
export var DescribeManagedProductsByVendor = op(
  n0,
  _DMPBV,
  0,
  () => DescribeManagedProductsByVendorRequest,
  () => DescribeManagedProductsByVendorResponse
);
