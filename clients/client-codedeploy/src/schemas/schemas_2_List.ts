// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  BucketNameFilterRequiredException as __BucketNameFilterRequiredException,
  InvalidBucketNameFilterException as __InvalidBucketNameFilterException,
  InvalidDeployedStateFilterException as __InvalidDeployedStateFilterException,
  InvalidExternalIdException as __InvalidExternalIdException,
  InvalidKeyPrefixFilterException as __InvalidKeyPrefixFilterException,
  InvalidNextTokenException as __InvalidNextTokenException,
  InvalidRegistrationStatusException as __InvalidRegistrationStatusException,
  InvalidSortByException as __InvalidSortByException,
  InvalidSortOrderException as __InvalidSortOrderException,
  InvalidTagFilterException as __InvalidTagFilterException,
  InvalidTimeRangeException as __InvalidTimeRangeException,
} from "../models/index";
import {
  _aN,
  _app,
  _BNFRE,
  _c,
  _cTR,
  _de,
  _dep,
  _dG,
  _dGNe,
  _eI,
  _en,
  _er,
  _IBNFE,
  _IDSFE,
  _IEIE,
  _IKPFE,
  _iN,
  _INTE,
  _iOS,
  _IRSE,
  _ISBE,
  _ISOE,
  _ITFE,
  _ITRE,
  _LA,
  _LAI,
  _LAO,
  _LAR,
  _LARI,
  _LARO,
  _LD,
  _LDG,
  _LDGI,
  _LDGO,
  _LDIi,
  _LDO,
  _LGHATN,
  _LGHATNI,
  _LGHATNO,
  _LOPI,
  _LOPII,
  _LOPIO,
  _LTFR,
  _LTFRI,
  _LTFRO,
  _m,
  _NT,
  _nT,
  _r,
  _RA,
  _rS,
  _sB,
  _sBu,
  _sKP,
  _sO,
  _sta,
  _Ta,
  _tFa,
  _tNL,
  _TR,
  n0,
} from "./schemas_0";
import { RevisionLocationList } from "./schemas_6_Get";
import { TagFilterList } from "./schemas_11_Deployment";
import { TagList } from "./schemas_16_OnPremises";

/* eslint no-var: 0 */

export var BucketNameFilterRequiredException = error(
  n0,
  _BNFRE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __BucketNameFilterRequiredException
);
export var InvalidBucketNameFilterException = error(
  n0,
  _IBNFE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __InvalidBucketNameFilterException
);
export var InvalidDeployedStateFilterException = error(
  n0,
  _IDSFE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __InvalidDeployedStateFilterException
);
export var InvalidExternalIdException = error(
  n0,
  _IEIE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __InvalidExternalIdException
);
export var InvalidKeyPrefixFilterException = error(
  n0,
  _IKPFE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __InvalidKeyPrefixFilterException
);
export var InvalidNextTokenException = error(
  n0,
  _INTE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __InvalidNextTokenException
);
export var InvalidRegistrationStatusException = error(
  n0,
  _IRSE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __InvalidRegistrationStatusException
);
export var InvalidSortByException = error(
  n0,
  _ISBE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __InvalidSortByException
);
export var InvalidSortOrderException = error(
  n0,
  _ISOE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __InvalidSortOrderException
);
export var InvalidTagFilterException = error(
  n0,
  _ITFE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __InvalidTagFilterException
);
export var InvalidTimeRangeException = error(
  n0,
  _ITRE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __InvalidTimeRangeException
);
export var ListApplicationRevisionsInput = struct(
  n0,
  _LARI,
  0,
  [_aN, _sB, _sO, _sBu, _sKP, _de, _nT],
  [0, 0, 0, 0, 0, 0, 0]
);
export var ListApplicationRevisionsOutput = struct(n0, _LARO, 0, [_r, _nT], [() => RevisionLocationList, 0]);
export var ListApplicationsInput = struct(n0, _LAI, 0, [_nT], [0]);
export var ListApplicationsOutput = struct(n0, _LAO, 0, [_app, _nT], [64 | 0, 0]);
export var ListDeploymentGroupsInput = struct(n0, _LDGI, 0, [_aN, _nT], [0, 0]);
export var ListDeploymentGroupsOutput = struct(n0, _LDGO, 0, [_aN, _dG, _nT], [0, 64 | 0, 0]);
export var ListDeploymentsInput = struct(
  n0,
  _LDIi,
  0,
  [_aN, _dGNe, _eI, _iOS, _cTR, _nT],
  [0, 0, 0, 64 | 0, () => TimeRange, 0]
);
export var ListDeploymentsOutput = struct(n0, _LDO, 0, [_dep, _nT], [64 | 0, 0]);
export var ListGitHubAccountTokenNamesInput = struct(n0, _LGHATNI, 0, [_nT], [0]);
export var ListGitHubAccountTokenNamesOutput = struct(n0, _LGHATNO, 0, [_tNL, _nT], [64 | 0, 0]);
export var ListOnPremisesInstancesInput = struct(n0, _LOPII, 0, [_rS, _tFa, _nT], [0, () => TagFilterList, 0]);
export var ListOnPremisesInstancesOutput = struct(n0, _LOPIO, 0, [_iN, _nT], [64 | 0, 0]);
export var ListTagsForResourceInput = struct(n0, _LTFRI, 0, [_RA, _NT], [0, 0]);
export var ListTagsForResourceOutput = struct(n0, _LTFRO, 0, [_Ta, _NT], [() => TagList, 0]);
export var TimeRange = struct(n0, _TR, 0, [_sta, _en], [4, 4]);
export var DeploymentStatusList = 64 | 0;

export var GitHubAccountTokenNameList = 64 | 0;

export var ListApplicationRevisions = op(
  n0,
  _LAR,
  0,
  () => ListApplicationRevisionsInput,
  () => ListApplicationRevisionsOutput
);
export var ListApplications = op(
  n0,
  _LA,
  0,
  () => ListApplicationsInput,
  () => ListApplicationsOutput
);
export var ListDeploymentGroups = op(
  n0,
  _LDG,
  0,
  () => ListDeploymentGroupsInput,
  () => ListDeploymentGroupsOutput
);
export var ListDeployments = op(
  n0,
  _LD,
  0,
  () => ListDeploymentsInput,
  () => ListDeploymentsOutput
);
export var ListGitHubAccountTokenNames = op(
  n0,
  _LGHATN,
  0,
  () => ListGitHubAccountTokenNamesInput,
  () => ListGitHubAccountTokenNamesOutput
);
export var ListOnPremisesInstances = op(
  n0,
  _LOPI,
  0,
  () => ListOnPremisesInstancesInput,
  () => ListOnPremisesInstancesOutput
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceInput,
  () => ListTagsForResourceOutput
);
