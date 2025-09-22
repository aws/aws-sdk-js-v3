// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AECIR,
  _AECIRR,
  _AECIRRs,
  _ARA,
  _aRA,
  _ARL,
  _ARs,
  _aRS,
  _ARsso,
  _CAe,
  _CSBN,
  _cSBN,
  _CSOK,
  _cSOK,
  _DECIR,
  _DECIRR,
  _DECIRRi,
  _DR,
  _EKKI,
  _eKKI,
  _eQN,
  _GAECIR,
  _GAECIRR,
  _GAECIRRe,
  _it,
  _R,
  _r,
  _RAo,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssociatedRole = struct(
  n0,
  _ARs,
  0,
  [_ARA, _CSBN, _CSOK, _EKKI],
  [
    [
      0,
      {
        [_eQN]: `AssociatedRoleArn`,
        [_xN]: _aRA,
      },
    ],
    [
      0,
      {
        [_eQN]: `CertificateS3BucketName`,
        [_xN]: _cSBN,
      },
    ],
    [
      0,
      {
        [_eQN]: `CertificateS3ObjectKey`,
        [_xN]: _cSOK,
      },
    ],
    [
      0,
      {
        [_eQN]: `EncryptionKmsKeyId`,
        [_xN]: _eKKI,
      },
    ],
  ]
);
export var AssociateEnclaveCertificateIamRoleRequest = struct(n0, _AECIRR, 0, [_CAe, _RAo, _DR], [0, 0, 2]);
export var AssociateEnclaveCertificateIamRoleResult = struct(
  n0,
  _AECIRRs,
  0,
  [_CSBN, _CSOK, _EKKI],
  [
    [
      0,
      {
        [_eQN]: `CertificateS3BucketName`,
        [_xN]: _cSBN,
      },
    ],
    [
      0,
      {
        [_eQN]: `CertificateS3ObjectKey`,
        [_xN]: _cSOK,
      },
    ],
    [
      0,
      {
        [_eQN]: `EncryptionKmsKeyId`,
        [_xN]: _eKKI,
      },
    ],
  ]
);
export var DisassociateEnclaveCertificateIamRoleRequest = struct(n0, _DECIRR, 0, [_CAe, _RAo, _DR], [0, 0, 2]);
export var DisassociateEnclaveCertificateIamRoleResult = struct(
  n0,
  _DECIRRi,
  0,
  [_R],
  [
    [
      2,
      {
        [_eQN]: `Return`,
        [_xN]: _r,
      },
    ],
  ]
);
export var GetAssociatedEnclaveCertificateIamRolesRequest = struct(n0, _GAECIRR, 0, [_CAe, _DR], [0, 2]);
export var GetAssociatedEnclaveCertificateIamRolesResult = struct(
  n0,
  _GAECIRRe,
  0,
  [_ARsso],
  [
    [
      () => AssociatedRolesList,
      {
        [_eQN]: `AssociatedRoleSet`,
        [_xN]: _aRS,
      },
    ],
  ]
);
export var AssociatedRolesList = list(n0, _ARL, 0, [
  () => AssociatedRole,
  {
    [_xN]: _it,
  },
]);
export var AssociateEnclaveCertificateIamRole = op(
  n0,
  _AECIR,
  0,
  () => AssociateEnclaveCertificateIamRoleRequest,
  () => AssociateEnclaveCertificateIamRoleResult
);
export var DisassociateEnclaveCertificateIamRole = op(
  n0,
  _DECIR,
  0,
  () => DisassociateEnclaveCertificateIamRoleRequest,
  () => DisassociateEnclaveCertificateIamRoleResult
);
export var GetAssociatedEnclaveCertificateIamRoles = op(
  n0,
  _GAECIR,
  0,
  () => GetAssociatedEnclaveCertificateIamRolesRequest,
  () => GetAssociatedEnclaveCertificateIamRolesResult
);
