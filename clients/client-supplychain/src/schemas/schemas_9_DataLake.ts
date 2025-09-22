// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DDLD, _DDLDR, _DDLDRe, _DDLN, _DDLNR, _DDLNRe, _h, _iI, _n, _na, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDataLakeDatasetRequest = struct(
  n0,
  _DDLDR,
  0,
  [_iI, _na, _n],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteDataLakeDatasetResponse = struct(n0, _DDLDRe, 0, [_iI, _na, _n], [0, 0, 0]);
export var DeleteDataLakeNamespaceRequest = struct(
  n0,
  _DDLNR,
  0,
  [_iI, _n],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteDataLakeNamespaceResponse = struct(n0, _DDLNRe, 0, [_iI, _n], [0, 0]);
export var DeleteDataLakeDataset = op(
  n0,
  _DDLD,
  {
    [_h]: ["DELETE", "/api/datalake/instance/{instanceId}/namespaces/{namespace}/datasets/{name}", 200],
  },
  () => DeleteDataLakeDatasetRequest,
  () => DeleteDataLakeDatasetResponse
);
export var DeleteDataLakeNamespace = op(
  n0,
  _DDLN,
  {
    [_h]: ["DELETE", "/api/datalake/instance/{instanceId}/namespaces/{name}", 200],
  },
  () => DeleteDataLakeNamespaceRequest,
  () => DeleteDataLakeNamespaceResponse
);
