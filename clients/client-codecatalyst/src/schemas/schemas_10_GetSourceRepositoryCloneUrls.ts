// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GSRCU, _GSRCUR, _GSRCURe, _h, _ht, _pN, _sN, _sRN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetSourceRepositoryCloneUrlsRequest = struct(
  n0,
  _GSRCUR,
  0,
  [_sN, _pN, _sRN],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetSourceRepositoryCloneUrlsResponse = struct(n0, _GSRCURe, 0, [_h], [0]);
export var GetSourceRepositoryCloneUrls = op(
  n0,
  _GSRCU,
  {
    [_ht]: [
      "GET",
      "/v1/spaces/{spaceName}/projects/{projectName}/sourceRepositories/{sourceRepositoryName}/cloneUrls",
      200,
    ],
  },
  () => GetSourceRepositoryCloneUrlsRequest,
  () => GetSourceRepositoryCloneUrlsResponse
);
