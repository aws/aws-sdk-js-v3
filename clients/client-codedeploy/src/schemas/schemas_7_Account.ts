// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  GitHubAccountTokenDoesNotExistException as __GitHubAccountTokenDoesNotExistException,
  GitHubAccountTokenNameRequiredException as __GitHubAccountTokenNameRequiredException,
  InvalidGitHubAccountTokenNameException as __InvalidGitHubAccountTokenNameException,
  OperationNotSupportedException as __OperationNotSupportedException,
  ResourceValidationException as __ResourceValidationException,
} from "../models/index";
import {
  _c,
  _DGHAT,
  _DGHATI,
  _DGHATO,
  _er,
  _GHATDNEE,
  _GHATNRE,
  _IGHATNE,
  _m,
  _ONSE,
  _RVE,
  _tN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteGitHubAccountTokenInput = struct(n0, _DGHATI, 0, [_tN], [0]);
export var DeleteGitHubAccountTokenOutput = struct(n0, _DGHATO, 0, [_tN], [0]);
export var GitHubAccountTokenDoesNotExistException = error(
  n0,
  _GHATDNEE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __GitHubAccountTokenDoesNotExistException
);
export var GitHubAccountTokenNameRequiredException = error(
  n0,
  _GHATNRE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __GitHubAccountTokenNameRequiredException
);
export var InvalidGitHubAccountTokenNameException = error(
  n0,
  _IGHATNE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __InvalidGitHubAccountTokenNameException
);
export var OperationNotSupportedException = error(
  n0,
  _ONSE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __OperationNotSupportedException
);
export var ResourceValidationException = error(
  n0,
  _RVE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __ResourceValidationException
);
export var DeleteGitHubAccountToken = op(
  n0,
  _DGHAT,
  0,
  () => DeleteGitHubAccountTokenInput,
  () => DeleteGitHubAccountTokenOutput
);
