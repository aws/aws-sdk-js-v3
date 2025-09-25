// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import {
  _AAg,
  _ABSC,
  _ABST,
  _AKc,
  _AT,
  _ATc,
  _BT,
  _CLAB,
  _CLABR,
  _CLABRr,
  _CSC,
  _CSCu,
  _CT,
  _CU,
  _DLAB,
  _DLABR,
  _DLABRe,
  _DLOS,
  _DLOSR,
  _DLOSRe,
  _KKA,
  _LA,
  _LU,
  _MSC,
  _SA,
  _SARA,
  _SC,
  _SCe,
  _SPe,
  _SPer,
  _Su,
  _T,
  _Ta,
  _ULAB,
  _ULABR,
  _ULABRp,
  InputTagList,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AzureBlobSasToken = sim(n0, _ABST, 0, 8);
export var AzureBlobSasConfiguration = struct(n0, _ABSC, 0, [_T], [[() => AzureBlobSasToken, 0]]);
export var CmkSecretConfig = struct(n0, _CSC, 0, [_SA, _KKA], [0, 0]);
export var CreateLocationAzureBlobRequest = struct(
  n0,
  _CLABR,
  0,
  [_CU, _AT, _SC, _BT, _ATc, _Su, _AAg, _Ta, _CSC, _CSCu],
  [
    0,
    0,
    [() => AzureBlobSasConfiguration, 0],
    0,
    0,
    0,
    64 | 0,
    () => InputTagList,
    () => CmkSecretConfig,
    () => CustomSecretConfig,
  ]
);
export var CreateLocationAzureBlobResponse = struct(n0, _CLABRr, 0, [_LA], [0]);
export var CustomSecretConfig = struct(n0, _CSCu, 0, [_SA, _SARA], [0, 0]);
export var DescribeLocationAzureBlobRequest = struct(n0, _DLABR, 0, [_LA], [0]);
export var DescribeLocationAzureBlobResponse = struct(
  n0,
  _DLABRe,
  0,
  [_LA, _LU, _AT, _BT, _ATc, _AAg, _CT, _MSC, _CSC, _CSCu],
  [0, 0, 0, 0, 0, 64 | 0, 4, () => ManagedSecretConfig, () => CmkSecretConfig, () => CustomSecretConfig]
);
export var DescribeLocationObjectStorageRequest = struct(n0, _DLOSR, 0, [_LA], [0]);
export var DescribeLocationObjectStorageResponse = struct(
  n0,
  _DLOSRe,
  0,
  [_LA, _LU, _AKc, _SPe, _SPer, _AAg, _CT, _SCe, _MSC, _CSC, _CSCu],
  [0, 0, 0, 1, 0, 64 | 0, 4, 21, () => ManagedSecretConfig, () => CmkSecretConfig, () => CustomSecretConfig]
);
export var ManagedSecretConfig = struct(n0, _MSC, 0, [_SA], [0]);
export var UpdateLocationAzureBlobRequest = struct(
  n0,
  _ULABR,
  0,
  [_LA, _Su, _AT, _SC, _BT, _ATc, _AAg, _CSC, _CSCu],
  [0, 0, 0, [() => AzureBlobSasConfiguration, 0], 0, 0, 64 | 0, () => CmkSecretConfig, () => CustomSecretConfig]
);
export var UpdateLocationAzureBlobResponse = struct(n0, _ULABRp, 0, [], []);
export var CreateLocationAzureBlob = op(
  n0,
  _CLAB,
  0,
  () => CreateLocationAzureBlobRequest,
  () => CreateLocationAzureBlobResponse
);
export var DescribeLocationAzureBlob = op(
  n0,
  _DLAB,
  0,
  () => DescribeLocationAzureBlobRequest,
  () => DescribeLocationAzureBlobResponse
);
export var DescribeLocationObjectStorage = op(
  n0,
  _DLOS,
  0,
  () => DescribeLocationObjectStorageRequest,
  () => DescribeLocationObjectStorageResponse
);
export var UpdateLocationAzureBlob = op(
  n0,
  _ULAB,
  0,
  () => UpdateLocationAzureBlobRequest,
  () => UpdateLocationAzureBlobResponse
);
