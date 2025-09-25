// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ac,
  _ADAU,
  _ADAUE,
  _aI,
  _BUADA,
  _BUADAR,
  _BUADARa,
  _eC,
  _er,
  _h,
  _jN,
  _lOADAU,
  _lOADAUE,
  _s,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AutomatedDiscoveryAccountUpdate = struct(
  n0,
  _ADAU,
  0,
  [_aI, _s],
  [
    [
      0,
      {
        [_jN]: _aI,
      },
    ],
    [
      0,
      {
        [_jN]: _s,
      },
    ],
  ]
);
export var AutomatedDiscoveryAccountUpdateError = struct(
  n0,
  _ADAUE,
  0,
  [_aI, _eC],
  [
    [
      0,
      {
        [_jN]: _aI,
      },
    ],
    [
      0,
      {
        [_jN]: _eC,
      },
    ],
  ]
);
export var BatchUpdateAutomatedDiscoveryAccountsRequest = struct(
  n0,
  _BUADAR,
  0,
  [_ac],
  [
    [
      () => __listOfAutomatedDiscoveryAccountUpdate,
      {
        [_jN]: _ac,
      },
    ],
  ]
);
export var BatchUpdateAutomatedDiscoveryAccountsResponse = struct(
  n0,
  _BUADARa,
  0,
  [_er],
  [
    [
      () => __listOfAutomatedDiscoveryAccountUpdateError,
      {
        [_jN]: _er,
      },
    ],
  ]
);
export var __listOfAutomatedDiscoveryAccountUpdate = list(n0, _lOADAU, 0, [() => AutomatedDiscoveryAccountUpdate, 0]);
export var __listOfAutomatedDiscoveryAccountUpdateError = list(n0, _lOADAUE, 0, [
  () => AutomatedDiscoveryAccountUpdateError,
  0,
]);
export var BatchUpdateAutomatedDiscoveryAccounts = op(
  n0,
  _BUADA,
  {
    [_h]: ["PATCH", "/automated-discovery/accounts", 200],
  },
  () => BatchUpdateAutomatedDiscoveryAccountsRequest,
  () => BatchUpdateAutomatedDiscoveryAccountsResponse
);
