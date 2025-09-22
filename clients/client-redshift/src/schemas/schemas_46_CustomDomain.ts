// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { CustomDomainAssociationNotFoundFault as __CustomDomainAssociationNotFoundFault } from "../models/index";
import {
  _A,
  _AL,
  _aQE,
  _As,
  _c,
  _CAe,
  _CAer,
  _CAL,
  _CDAM,
  _CDANFF,
  _CDCA,
  _CDCED,
  _CDN,
  _CIl,
  _DCDAe,
  _DCDAMe,
  _e,
  _hE,
  _M,
  _m,
  _MR,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Association = struct(n0, _A, 0, [_CDCA, _CDCED, _CAe], [0, 4, [() => CertificateAssociationList, 0]]);
export var CertificateAssociation = struct(n0, _CAer, 0, [_CDN, _CIl], [0, 0]);
export var CustomDomainAssociationNotFoundFault = error(
  n0,
  _CDANFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`CustomDomainAssociationNotFoundFault`, 404],
  },
  [_m],
  [0],

  __CustomDomainAssociationNotFoundFault
);
export var CustomDomainAssociationsMessage = struct(n0, _CDAM, 0, [_M, _As], [0, [() => AssociationList, 0]]);
export var DescribeCustomDomainAssociationsMessage = struct(n0, _DCDAMe, 0, [_CDN, _CDCA, _MR, _M], [0, 0, 1, 0]);
export var AssociationList = list(n0, _AL, 0, [
  () => Association,
  {
    [_xN]: _A,
  },
]);
export var CertificateAssociationList = list(n0, _CAL, 0, [
  () => CertificateAssociation,
  {
    [_xN]: _CAer,
  },
]);
export var DescribeCustomDomainAssociations = op(
  n0,
  _DCDAe,
  0,
  () => DescribeCustomDomainAssociationsMessage,
  () => CustomDomainAssociationsMessage
);
