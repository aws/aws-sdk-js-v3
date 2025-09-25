// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { DeleteConflictException as __DeleteConflictException } from "../models/index";
import {
  _cI,
  _cl,
  _cPN,
  _DCE,
  _DCe,
  _DCP,
  _DCPR,
  _DCPRe,
  _DCR,
  _DPel,
  _DPRel,
  _DPT,
  _DPTR,
  _DPTRe,
  _DPTV,
  _DPTVR,
  _DPTVRe,
  _DPVe,
  _DPVRel,
  _DRA,
  _DRAR,
  _DRARe,
  _DS,
  _DSR,
  _DSRe,
  _er,
  _fD,
  _h,
  _hE,
  _hQ,
  _me,
  _pNo,
  _pVI,
  _rAo,
  _sIt,
  _tNe,
  _vIe,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteCertificateProviderRequest = struct(n0, _DCPR, 0, [_cPN], [[0, 1]]);
export var DeleteCertificateProviderResponse = struct(n0, _DCPRe, 0, [], []);
export var DeleteCertificateRequest = struct(
  n0,
  _DCR,
  0,
  [_cI, _fD],
  [
    [0, 1],
    [
      2,
      {
        [_hQ]: _fD,
      },
    ],
  ]
);
export var DeleteConflictException = error(
  n0,
  _DCE,
  {
    [_er]: _cl,
    [_hE]: 409,
  },
  [_me],
  [0],

  __DeleteConflictException
);
export var DeletePolicyRequest = struct(n0, _DPRel, 0, [_pNo], [[0, 1]]);
export var DeletePolicyVersionRequest = struct(
  n0,
  _DPVRel,
  0,
  [_pNo, _pVI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteProvisioningTemplateRequest = struct(n0, _DPTR, 0, [_tNe], [[0, 1]]);
export var DeleteProvisioningTemplateResponse = struct(n0, _DPTRe, 0, [], []);
export var DeleteProvisioningTemplateVersionRequest = struct(
  n0,
  _DPTVR,
  0,
  [_tNe, _vIe],
  [
    [0, 1],
    [1, 1],
  ]
);
export var DeleteProvisioningTemplateVersionResponse = struct(n0, _DPTVRe, 0, [], []);
export var DeleteRoleAliasRequest = struct(n0, _DRAR, 0, [_rAo], [[0, 1]]);
export var DeleteRoleAliasResponse = struct(n0, _DRARe, 0, [], []);
export var DeleteStreamRequest = struct(n0, _DSR, 0, [_sIt], [[0, 1]]);
export var DeleteStreamResponse = struct(n0, _DSRe, 0, [], []);
export var DeleteCertificate = op(
  n0,
  _DCe,
  {
    [_h]: ["DELETE", "/certificates/{certificateId}", 200],
  },
  () => DeleteCertificateRequest,
  () => Unit
);
export var DeleteCertificateProvider = op(
  n0,
  _DCP,
  {
    [_h]: ["DELETE", "/certificate-providers/{certificateProviderName}", 200],
  },
  () => DeleteCertificateProviderRequest,
  () => DeleteCertificateProviderResponse
);
export var DeletePolicy = op(
  n0,
  _DPel,
  {
    [_h]: ["DELETE", "/policies/{policyName}", 200],
  },
  () => DeletePolicyRequest,
  () => Unit
);
export var DeletePolicyVersion = op(
  n0,
  _DPVe,
  {
    [_h]: ["DELETE", "/policies/{policyName}/version/{policyVersionId}", 200],
  },
  () => DeletePolicyVersionRequest,
  () => Unit
);
export var DeleteProvisioningTemplate = op(
  n0,
  _DPT,
  {
    [_h]: ["DELETE", "/provisioning-templates/{templateName}", 200],
  },
  () => DeleteProvisioningTemplateRequest,
  () => DeleteProvisioningTemplateResponse
);
export var DeleteProvisioningTemplateVersion = op(
  n0,
  _DPTV,
  {
    [_h]: ["DELETE", "/provisioning-templates/{templateName}/versions/{versionId}", 200],
  },
  () => DeleteProvisioningTemplateVersionRequest,
  () => DeleteProvisioningTemplateVersionResponse
);
export var DeleteRoleAlias = op(
  n0,
  _DRA,
  {
    [_h]: ["DELETE", "/role-aliases/{roleAlias}", 200],
  },
  () => DeleteRoleAliasRequest,
  () => DeleteRoleAliasResponse
);
export var DeleteStream = op(
  n0,
  _DS,
  {
    [_h]: ["DELETE", "/streams/{streamId}", 200],
  },
  () => DeleteStreamRequest,
  () => DeleteStreamResponse
);
