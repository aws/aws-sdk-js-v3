// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  IamArnRequiredException as __IamArnRequiredException,
  IamSessionArnAlreadyRegisteredException as __IamSessionArnAlreadyRegisteredException,
  IamUserArnAlreadyRegisteredException as __IamUserArnAlreadyRegisteredException,
  IamUserArnRequiredException as __IamUserArnRequiredException,
  InstanceLimitExceededException as __InstanceLimitExceededException,
  InstanceNameAlreadyRegisteredException as __InstanceNameAlreadyRegisteredException,
  InstanceNameRequiredException as __InstanceNameRequiredException,
  InstanceNotRegisteredException as __InstanceNotRegisteredException,
  InvalidIamSessionArnException as __InvalidIamSessionArnException,
  InvalidIamUserArnException as __InvalidIamUserArnException,
  InvalidInstanceNameException as __InvalidInstanceNameException,
  MultipleIamArnsProvidedException as __MultipleIamArnsProvidedException,
  TagLimitExceededException as __TagLimitExceededException,
} from "../models/index";
import {
  _ATTOPI,
  _ATTOPII,
  _BGOPI,
  _BGOPII,
  _BGOPIO,
  _c,
  _DOPI,
  _DOPII,
  _dTer,
  _er,
  _GOPI,
  _GOPII,
  _GOPIO,
  _iA,
  _IARE,
  _II,
  _IIL,
  _iIn,
  _IINE,
  _iInst,
  _IISAE,
  _IIUAE,
  _ILEE,
  _iN,
  _INARE,
  _iNn,
  _INRE,
  _INREn,
  _iSA,
  _ISAARE,
  _iUA,
  _IUAARE,
  _IUARE,
  _m,
  _MIAPE,
  _ROPI,
  _ROPII,
  _rTe,
  _RTFOPI,
  _RTFOPII,
  _t,
  _TLEE,
  n0,
  Unit,
} from "./schemas_0";
import { TagList } from "./schemas_16_OnPremises";

/* eslint no-var: 0 */

export var AddTagsToOnPremisesInstancesInput = struct(n0, _ATTOPII, 0, [_t, _iN], [() => TagList, 64 | 0]);
export var BatchGetOnPremisesInstancesInput = struct(n0, _BGOPII, 0, [_iN], [64 | 0]);
export var BatchGetOnPremisesInstancesOutput = struct(n0, _BGOPIO, 0, [_iIn], [() => InstanceInfoList]);
export var DeregisterOnPremisesInstanceInput = struct(n0, _DOPII, 0, [_iNn], [0]);
export var GetOnPremisesInstanceInput = struct(n0, _GOPII, 0, [_iNn], [0]);
export var GetOnPremisesInstanceOutput = struct(n0, _GOPIO, 0, [_iInst], [() => InstanceInfo]);
export var IamArnRequiredException = error(
  n0,
  _IARE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __IamArnRequiredException
);
export var IamSessionArnAlreadyRegisteredException = error(
  n0,
  _ISAARE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __IamSessionArnAlreadyRegisteredException
);
export var IamUserArnAlreadyRegisteredException = error(
  n0,
  _IUAARE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __IamUserArnAlreadyRegisteredException
);
export var IamUserArnRequiredException = error(
  n0,
  _IUARE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __IamUserArnRequiredException
);
export var InstanceInfo = struct(
  n0,
  _II,
  0,
  [_iNn, _iSA, _iUA, _iA, _rTe, _dTer, _t],
  [0, 0, 0, 0, 4, 4, () => TagList]
);
export var InstanceLimitExceededException = error(
  n0,
  _ILEE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __InstanceLimitExceededException
);
export var InstanceNameAlreadyRegisteredException = error(
  n0,
  _INARE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __InstanceNameAlreadyRegisteredException
);
export var InstanceNameRequiredException = error(
  n0,
  _INRE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __InstanceNameRequiredException
);
export var InstanceNotRegisteredException = error(
  n0,
  _INREn,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __InstanceNotRegisteredException
);
export var InvalidIamSessionArnException = error(
  n0,
  _IISAE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __InvalidIamSessionArnException
);
export var InvalidIamUserArnException = error(
  n0,
  _IIUAE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __InvalidIamUserArnException
);
export var InvalidInstanceNameException = error(
  n0,
  _IINE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __InvalidInstanceNameException
);
export var MultipleIamArnsProvidedException = error(
  n0,
  _MIAPE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __MultipleIamArnsProvidedException
);
export var RegisterOnPremisesInstanceInput = struct(n0, _ROPII, 0, [_iNn, _iSA, _iUA], [0, 0, 0]);
export var RemoveTagsFromOnPremisesInstancesInput = struct(n0, _RTFOPII, 0, [_t, _iN], [() => TagList, 64 | 0]);
export var TagLimitExceededException = error(
  n0,
  _TLEE,
  {
    [_er]: _c,
  },
  [_m],
  [0],

  __TagLimitExceededException
);
export var InstanceInfoList = list(n0, _IIL, 0, () => InstanceInfo);
export var AddTagsToOnPremisesInstances = op(
  n0,
  _ATTOPI,
  0,
  () => AddTagsToOnPremisesInstancesInput,
  () => Unit
);
export var BatchGetOnPremisesInstances = op(
  n0,
  _BGOPI,
  0,
  () => BatchGetOnPremisesInstancesInput,
  () => BatchGetOnPremisesInstancesOutput
);
export var DeregisterOnPremisesInstance = op(
  n0,
  _DOPI,
  0,
  () => DeregisterOnPremisesInstanceInput,
  () => Unit
);
export var GetOnPremisesInstance = op(
  n0,
  _GOPI,
  0,
  () => GetOnPremisesInstanceInput,
  () => GetOnPremisesInstanceOutput
);
export var RegisterOnPremisesInstance = op(
  n0,
  _ROPI,
  0,
  () => RegisterOnPremisesInstanceInput,
  () => Unit
);
export var RemoveTagsFromOnPremisesInstances = op(
  n0,
  _RTFOPI,
  0,
  () => RemoveTagsFromOnPremisesInstancesInput,
  () => Unit
);
