// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { CustomCnameAssociationFault as __CustomCnameAssociationFault } from "../models/index";
import {
  _aQE,
  _c,
  _CCAF,
  _CCDA,
  _CCDAM,
  _CCDAR,
  _CDCA,
  _CDCET,
  _CDN,
  _CIl,
  _DCDA,
  _DCDAM,
  _e,
  _hE,
  _m,
  _MCDA,
  _MCDAM,
  _MCDAR,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateCustomDomainAssociationMessage = struct(n0, _CCDAM, 0, [_CDN, _CDCA, _CIl], [0, 0, 0]);
export var CreateCustomDomainAssociationResult = struct(n0, _CCDAR, 0, [_CDN, _CDCA, _CIl, _CDCET], [0, 0, 0, 0]);
export var CustomCnameAssociationFault = error(
  n0,
  _CCAF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`CustomCnameAssociationFault`, 400],
  },
  [_m],
  [0],

  __CustomCnameAssociationFault
);
export var DeleteCustomDomainAssociationMessage = struct(n0, _DCDAM, 0, [_CIl, _CDN], [0, 0]);
export var ModifyCustomDomainAssociationMessage = struct(n0, _MCDAM, 0, [_CDN, _CDCA, _CIl], [0, 0, 0]);
export var ModifyCustomDomainAssociationResult = struct(n0, _MCDAR, 0, [_CDN, _CDCA, _CIl, _CDCET], [0, 0, 0, 0]);
export var CreateCustomDomainAssociation = op(
  n0,
  _CCDA,
  0,
  () => CreateCustomDomainAssociationMessage,
  () => CreateCustomDomainAssociationResult
);
export var DeleteCustomDomainAssociation = op(
  n0,
  _DCDA,
  0,
  () => DeleteCustomDomainAssociationMessage,
  () => Unit
);
export var ModifyCustomDomainAssociation = op(
  n0,
  _MCDA,
  0,
  () => ModifyCustomDomainAssociationMessage,
  () => ModifyCustomDomainAssociationResult
);
