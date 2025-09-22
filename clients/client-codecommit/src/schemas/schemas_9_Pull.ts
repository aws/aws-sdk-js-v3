// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import {
  CommitIdRequiredException as __CommitIdRequiredException,
  InvalidCommitIdException as __InvalidCommitIdException,
  PathDoesNotExistException as __PathDoesNotExistException,
  RepositoryNotAssociatedWithPullRequestException as __RepositoryNotAssociatedWithPullRequestException,
} from "../models/index";
import { _c, _CIREo, _e, _ICIEn, _m, _PDNEE, _RNAWPRE, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CommitIdRequiredException = error(
  n0,
  _CIREo,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __CommitIdRequiredException
);
export var InvalidCommitIdException = error(
  n0,
  _ICIEn,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidCommitIdException
);
export var PathDoesNotExistException = error(
  n0,
  _PDNEE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __PathDoesNotExistException
);
export var RepositoryNotAssociatedWithPullRequestException = error(
  n0,
  _RNAWPRE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __RepositoryNotAssociatedWithPullRequestException
);
