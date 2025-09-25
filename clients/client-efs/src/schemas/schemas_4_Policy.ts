// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { PolicyNotFound as __PolicyNotFound } from "../models/index";
import { _c, _DFSPe, _DFSPRe, _e, _EC, _FSI, _h, _hE, _M, _PNF, n0 } from "./schemas_0";
import { FileSystemPolicyDescription } from "./schemas_13_Policy";

/* eslint no-var: 0 */

export var DescribeFileSystemPolicyRequest = struct(n0, _DFSPRe, 0, [_FSI], [[0, 1]]);
export var PolicyNotFound = error(
  n0,
  _PNF,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_EC, _M],
  [0, 0],

  __PolicyNotFound
);
export var DescribeFileSystemPolicy = op(
  n0,
  _DFSPe,
  {
    [_h]: ["GET", "/2015-02-01/file-systems/{FileSystemId}/policy", 200],
  },
  () => DescribeFileSystemPolicyRequest,
  () => FileSystemPolicyDescription
);
