// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AARs, _AARss, _AAs, _aIDc, _aIDp, _DAi, _DARi, _DARis, _ht, _wID, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateApplicationsRequest = struct(n0, _AARs, 0, [_wID, _aIDp, _aIDc], [0, 64 | 0, 0]);
export var AssociateApplicationsResponse = struct(n0, _AARss, 0, [], []);
export var DisassociateApplicationsRequest = struct(n0, _DARi, 0, [_wID, _aIDp, _aIDc], [0, 64 | 0, 0]);
export var DisassociateApplicationsResponse = struct(n0, _DARis, 0, [], []);
export var ApplicationIDs = 64 | 0;

export var AssociateApplications = op(
  n0,
  _AAs,
  {
    [_ht]: ["POST", "/AssociateApplications", 200],
  },
  () => AssociateApplicationsRequest,
  () => AssociateApplicationsResponse
);
export var DisassociateApplications = op(
  n0,
  _DAi,
  {
    [_ht]: ["POST", "/DisassociateApplications", 200],
  },
  () => DisassociateApplicationsRequest,
  () => DisassociateApplicationsResponse
);
