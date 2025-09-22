// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  CertificateNotFoundException as __CertificateNotFoundException,
  DuplicateAccessPointNameException as __DuplicateAccessPointNameException,
  DuplicateListenerException as __DuplicateListenerException,
  InvalidSchemeException as __InvalidSchemeException,
  ListenerNotFoundException as __ListenerNotFoundException,
  OperationNotPermittedException as __OperationNotPermittedException,
  TooManyAccessPointsException as __TooManyAccessPointsException,
  UnsupportedProtocolException as __UnsupportedProtocolException,
} from "../models/index";
import {
  _aQE,
  _AZ,
  _c,
  _CAPI,
  _CAPO,
  _CLB,
  _CLBL,
  _CLBLI,
  _CLBLO,
  _CNFE,
  _DAPNE,
  _DLBL,
  _DLBLI,
  _DLBLO,
  _DLE,
  _DNSN,
  _e,
  _hE,
  _IP,
  _IPn,
  _ISE,
  _L,
  _LBN,
  _LBP,
  _LBPo,
  _Lis,
  _LNFE,
  _M,
  _ONPE,
  _P,
  _S,
  _Sc,
  _SG,
  _SLBLSSLC,
  _SLBLSSLCI,
  _SLBLSSLCO,
  _SSLCI,
  _T,
  _TMAPE,
  _UPE,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_6_Tags";

/* eslint no-var: 0 */

export var CertificateNotFoundException = error(
  n0,
  _CNFE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`CertificateNotFound`, 400],
  },
  [_M],
  [0],

  __CertificateNotFoundException
);
export var CreateAccessPointInput = struct(
  n0,
  _CAPI,
  0,
  [_LBN, _L, _AZ, _S, _SG, _Sc, _T],
  [0, () => Listeners, 64 | 0, 64 | 0, 64 | 0, 0, () => TagList]
);
export var CreateAccessPointOutput = struct(n0, _CAPO, 0, [_DNSN], [0]);
export var CreateLoadBalancerListenerInput = struct(n0, _CLBLI, 0, [_LBN, _L], [0, () => Listeners]);
export var CreateLoadBalancerListenerOutput = struct(n0, _CLBLO, 0, [], []);
export var DeleteLoadBalancerListenerInput = struct(n0, _DLBLI, 0, [_LBN, _LBP], [0, 64 | 1]);
export var DeleteLoadBalancerListenerOutput = struct(n0, _DLBLO, 0, [], []);
export var DuplicateAccessPointNameException = error(
  n0,
  _DAPNE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`DuplicateLoadBalancerName`, 400],
  },
  [_M],
  [0],

  __DuplicateAccessPointNameException
);
export var DuplicateListenerException = error(
  n0,
  _DLE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`DuplicateListener`, 400],
  },
  [_M],
  [0],

  __DuplicateListenerException
);
export var InvalidSchemeException = error(
  n0,
  _ISE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidScheme`, 400],
  },
  [_M],
  [0],

  __InvalidSchemeException
);
export var Listener = struct(n0, _Lis, 0, [_P, _LBPo, _IPn, _IP, _SSLCI], [0, 1, 0, 1, 0]);
export var ListenerNotFoundException = error(
  n0,
  _LNFE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ListenerNotFound`, 400],
  },
  [_M],
  [0],

  __ListenerNotFoundException
);
export var OperationNotPermittedException = error(
  n0,
  _ONPE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`OperationNotPermitted`, 400],
  },
  [_M],
  [0],

  __OperationNotPermittedException
);
export var SetLoadBalancerListenerSSLCertificateInput = struct(n0, _SLBLSSLCI, 0, [_LBN, _LBPo, _SSLCI], [0, 1, 0]);
export var SetLoadBalancerListenerSSLCertificateOutput = struct(n0, _SLBLSSLCO, 0, [], []);
export var TooManyAccessPointsException = error(
  n0,
  _TMAPE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`TooManyLoadBalancers`, 400],
  },
  [_M],
  [0],

  __TooManyAccessPointsException
);
export var UnsupportedProtocolException = error(
  n0,
  _UPE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`UnsupportedProtocol`, 400],
  },
  [_M],
  [0],

  __UnsupportedProtocolException
);
export var Listeners = list(n0, _L, 0, () => Listener);
export var Ports = 64 | 1;

export var CreateLoadBalancer = op(
  n0,
  _CLB,
  0,
  () => CreateAccessPointInput,
  () => CreateAccessPointOutput
);
export var CreateLoadBalancerListeners = op(
  n0,
  _CLBL,
  0,
  () => CreateLoadBalancerListenerInput,
  () => CreateLoadBalancerListenerOutput
);
export var DeleteLoadBalancerListeners = op(
  n0,
  _DLBL,
  0,
  () => DeleteLoadBalancerListenerInput,
  () => DeleteLoadBalancerListenerOutput
);
export var SetLoadBalancerListenerSSLCertificate = op(
  n0,
  _SLBLSSLC,
  0,
  () => SetLoadBalancerListenerSSLCertificateInput,
  () => SetLoadBalancerListenerSSLCertificateOutput
);
