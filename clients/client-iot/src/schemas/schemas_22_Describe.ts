// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  RegistrationCodeValidationException as __RegistrationCodeValidationException,
  ResourceRegistrationFailureException as __ResourceRegistrationFailureException,
} from "../models/index";
import {
  _aAR,
  _aRS,
  _CACD,
  _cAe,
  _cCa,
  _cD,
  _cDe,
  _cI,
  _cl,
  _cMe,
  _cP,
  _CPTV,
  _CPTVR,
  _CPTVRr,
  _cV,
  _DCACe,
  _DCACRes,
  _DCACResc,
  _DPTVe,
  _DPTVRes,
  _DPTVResc,
  _er,
  _gI,
  _h,
  _hE,
  _hQ,
  _iDV,
  _iFB,
  _iFK,
  _lMD,
  _me,
  _nARS,
  _nS,
  _oB,
  _par,
  _rA,
  _rAeso,
  _rAR,
  _RC,
  _RCAC,
  _RCACR,
  _RCACRe,
  _rCe,
  _RCVE,
  _RRFE,
  _RT,
  _RTR,
  _RTRe,
  _sAA,
  _sAD,
  _st,
  _STRT,
  _STRTR,
  _STRTRt,
  _tAem,
  _tag,
  _tB,
  _tI,
  _tNe,
  _UCAC,
  _UCACR,
  _val,
  _vC,
  _vIe,
  n0,
  TagList,
  Unit,
} from "./schemas_0";
import { CertificateValidity } from "./schemas_21_Certificate";

/* eslint no-var: 0 */

export var CACertificateDescription = struct(
  n0,
  _CACD,
  0,
  [_cAe, _cI, _st, _cP, _oB, _cD, _aRS, _lMD, _cV, _gI, _val, _cMe],
  [0, 0, 0, 0, 0, 4, 0, 4, 1, 0, () => CertificateValidity, 0]
);
export var CreateProvisioningTemplateVersionRequest = struct(
  n0,
  _CPTVR,
  0,
  [_tNe, _tB, _sAD],
  [
    [0, 1],
    0,
    [
      2,
      {
        [_hQ]: _sAD,
      },
    ],
  ]
);
export var CreateProvisioningTemplateVersionResponse = struct(n0, _CPTVRr, 0, [_tAem, _tNe, _vIe, _iDV], [0, 0, 1, 2]);
export var DescribeCACertificateRequest = struct(n0, _DCACRes, 0, [_cI], [[0, 1]]);
export var DescribeCACertificateResponse = struct(
  n0,
  _DCACResc,
  0,
  [_cDe, _rCe],
  [() => CACertificateDescription, () => RegistrationConfig]
);
export var DescribeProvisioningTemplateVersionRequest = struct(
  n0,
  _DPTVRes,
  0,
  [_tNe, _vIe],
  [
    [0, 1],
    [1, 1],
  ]
);
export var DescribeProvisioningTemplateVersionResponse = struct(n0, _DPTVResc, 0, [_vIe, _cD, _tB, _iDV], [1, 4, 0, 2]);
export var RegisterCACertificateRequest = struct(
  n0,
  _RCACR,
  0,
  [_cCa, _vC, _sAA, _aAR, _rCe, _tag, _cMe],
  [
    0,
    0,
    [
      2,
      {
        [_hQ]: _sAA,
      },
    ],
    [
      2,
      {
        [_hQ]: _aAR,
      },
    ],
    () => RegistrationConfig,
    () => TagList,
    0,
  ]
);
export var RegisterCACertificateResponse = struct(n0, _RCACRe, 0, [_cAe, _cI], [0, 0]);
export var RegisterThingRequest = struct(n0, _RTR, 0, [_tB, _par], [0, 128 | 0]);
export var RegisterThingResponse = struct(n0, _RTRe, 0, [_cP, _rAeso], [0, 128 | 0]);
export var RegistrationCodeValidationException = error(
  n0,
  _RCVE,
  {
    [_er]: _cl,
    [_hE]: 400,
  },
  [_me],
  [0],

  __RegistrationCodeValidationException
);
export var RegistrationConfig = struct(n0, _RC, 0, [_tB, _rA, _tNe], [0, 0, 0]);
export var ResourceRegistrationFailureException = error(
  n0,
  _RRFE,
  {
    [_er]: _cl,
    [_hE]: 400,
  },
  [_me],
  [0],

  __ResourceRegistrationFailureException
);
export var StartThingRegistrationTaskRequest = struct(n0, _STRTR, 0, [_tB, _iFB, _iFK, _rA], [0, 0, 0, 0]);
export var StartThingRegistrationTaskResponse = struct(n0, _STRTRt, 0, [_tI], [0]);
export var UpdateCACertificateRequest = struct(
  n0,
  _UCACR,
  0,
  [_cI, _nS, _nARS, _rCe, _rAR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nS,
      },
    ],
    [
      0,
      {
        [_hQ]: _nARS,
      },
    ],
    () => RegistrationConfig,
    2,
  ]
);
export var _Parameters = 128 | 0;

export var ResourceArns = 128 | 0;

export var CreateProvisioningTemplateVersion = op(
  n0,
  _CPTV,
  {
    [_h]: ["POST", "/provisioning-templates/{templateName}/versions", 200],
  },
  () => CreateProvisioningTemplateVersionRequest,
  () => CreateProvisioningTemplateVersionResponse
);
export var DescribeCACertificate = op(
  n0,
  _DCACe,
  {
    [_h]: ["GET", "/cacertificate/{certificateId}", 200],
  },
  () => DescribeCACertificateRequest,
  () => DescribeCACertificateResponse
);
export var DescribeProvisioningTemplateVersion = op(
  n0,
  _DPTVe,
  {
    [_h]: ["GET", "/provisioning-templates/{templateName}/versions/{versionId}", 200],
  },
  () => DescribeProvisioningTemplateVersionRequest,
  () => DescribeProvisioningTemplateVersionResponse
);
export var RegisterCACertificate = op(
  n0,
  _RCAC,
  {
    [_h]: ["POST", "/cacertificate", 200],
  },
  () => RegisterCACertificateRequest,
  () => RegisterCACertificateResponse
);
export var RegisterThing = op(
  n0,
  _RT,
  {
    [_h]: ["POST", "/things", 200],
  },
  () => RegisterThingRequest,
  () => RegisterThingResponse
);
export var StartThingRegistrationTask = op(
  n0,
  _STRT,
  {
    [_h]: ["POST", "/thing-registration-tasks", 200],
  },
  () => StartThingRegistrationTaskRequest,
  () => StartThingRegistrationTaskResponse
);
export var UpdateCACertificate = op(
  n0,
  _UCAC,
  {
    [_h]: ["PUT", "/cacertificate/{certificateId}", 200],
  },
  () => UpdateCACertificateRequest,
  () => Unit
);
