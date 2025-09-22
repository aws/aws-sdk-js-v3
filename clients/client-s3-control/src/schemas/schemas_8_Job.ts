// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  BadRequestException as __BadRequestException,
  InternalServiceException as __InternalServiceException,
  JobStatusException as __JobStatusException,
  NotFoundException as __NotFoundException,
  TooManyRequestsException as __TooManyRequestsException,
} from "../models/index";
import {
  _AI,
  _BRE,
  _c,
  _DJT,
  _DJTR,
  _DJTRe,
  _e,
  _ETIAS,
  _h,
  _hH,
  _hL,
  _hQ,
  _ISE,
  _JI,
  _JPS,
  _JSE,
  _JT,
  _M,
  _NFE,
  _NOTF,
  _NOTS,
  _Pr,
  _pri,
  _RJS,
  _rJS,
  _se,
  _St,
  _SUR,
  _sUR,
  _Ti,
  _TMRE,
  _TNOT,
  _UJP,
  _UJPR,
  _UJPRp,
  _UJS,
  _UJSR,
  _UJSRp,
  _xaai,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BadRequestException = error(
  n0,
  _BRE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __BadRequestException
);
export var DeleteJobTaggingRequest = struct(
  n0,
  _DJTR,
  0,
  [_AI, _JI],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [0, 1],
  ]
);
export var DeleteJobTaggingResult = struct(n0, _DJTRe, 0, [], []);
export var InternalServiceException = error(
  n0,
  _ISE,
  {
    [_e]: _se,
  },
  [_M],
  [0],

  __InternalServiceException
);
export var JobProgressSummary = struct(n0, _JPS, 0, [_TNOT, _NOTS, _NOTF, _Ti], [1, 1, 1, () => JobTimers]);
export var JobStatusException = error(
  n0,
  _JSE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __JobStatusException
);
export var JobTimers = struct(n0, _JT, 0, [_ETIAS], [1]);
export var NotFoundException = error(
  n0,
  _NFE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __NotFoundException
);
export var TooManyRequestsException = error(
  n0,
  _TMRE,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __TooManyRequestsException
);
export var UpdateJobPriorityRequest = struct(
  n0,
  _UJPR,
  0,
  [_AI, _JI, _Pr],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [0, 1],
    [
      1,
      {
        [_hQ]: _pri,
      },
    ],
  ]
);
export var UpdateJobPriorityResult = struct(n0, _UJPRp, 0, [_JI, _Pr], [0, 1]);
export var UpdateJobStatusRequest = struct(
  n0,
  _UJSR,
  0,
  [_AI, _JI, _RJS, _SUR],
  [
    [
      0,
      {
        [_hL]: 1,
        [_hH]: _xaai,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_hQ]: _rJS,
      },
    ],
    [
      0,
      {
        [_hQ]: _sUR,
      },
    ],
  ]
);
export var UpdateJobStatusResult = struct(n0, _UJSRp, 0, [_JI, _St, _SUR], [0, 0, 0]);
export var DeleteJobTagging = op(
  n0,
  _DJT,
  {
    [_h]: ["DELETE", "/v20180820/jobs/{JobId}/tagging", 200],
  },
  () => DeleteJobTaggingRequest,
  () => DeleteJobTaggingResult
);
export var UpdateJobPriority = op(
  n0,
  _UJP,
  {
    [_h]: ["POST", "/v20180820/jobs/{JobId}/priority", 200],
  },
  () => UpdateJobPriorityRequest,
  () => UpdateJobPriorityResult
);
export var UpdateJobStatus = op(
  n0,
  _UJS,
  {
    [_h]: ["POST", "/v20180820/jobs/{JobId}/status", 200],
  },
  () => UpdateJobStatusRequest,
  () => UpdateJobStatusResult
);
