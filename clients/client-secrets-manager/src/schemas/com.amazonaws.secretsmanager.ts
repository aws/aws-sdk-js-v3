const _BGSV = "BatchGetSecretValue";
const _BGSVR = "BatchGetSecretValueResponse";
const _CD = "CreatedDate";
const _CDT = "CreatedDateType";
const _CRS = "CancelRotateSecret";
const _CRT = "ClientRequestToken";
const _CS = "CreateSecret";
const _CSR = "CreateSecretRequest";
const _CSRr = "CreateSecretResponse";
const _DD = "DeletionDate";
const _DDT = "DeletionDateType";
const _DDTe = "DeletedDateType";
const _DDe = "DeletedDate";
const _DF = "DecryptionFailure";
const _DRP = "DeleteResourcePolicy";
const _DS = "DeleteSecret";
const _DSR = "DeleteSecretResponse";
const _DSRe = "DescribeSecretResponse";
const _DSe = "DescribeSecret";
const _EF = "EncryptionFailure";
const _GRP = "GetRandomPassword";
const _GRPR = "GetRandomPasswordResponse";
const _GRPe = "GetResourcePolicy";
const _GSV = "GetSecretValue";
const _GSVR = "GetSecretValueResponse";
const _INTE = "InvalidNextTokenException";
const _IPE = "InvalidParameterException";
const _IRE = "InvalidRequestException";
const _ISE = "InternalServiceError";
const _LAD = "LastAccessedDate";
const _LADT = "LastAccessedDateType";
const _LCD = "LastChangedDate";
const _LCDT = "LastChangedDateType";
const _LEE = "LimitExceededException";
const _LRD = "LastRotatedDate";
const _LRDT = "LastRotatedDateType";
const _LS = "ListSecrets";
const _LSR = "ListSecretsResponse";
const _LSVI = "ListSecretVersionIds";
const _LSVIR = "ListSecretVersionIdsResponse";
const _MPDE = "MalformedPolicyDocumentException";
const _NRD = "NextRotationDate";
const _NRDT = "NextRotationDateType";
const _PNME = "PreconditionNotMetException";
const _PPE = "PublicPolicyException";
const _PRP = "PutResourcePolicy";
const _PSV = "PutSecretValue";
const _PSVR = "PutSecretValueRequest";
const _REE = "ResourceExistsException";
const _RNFE = "ResourceNotFoundException";
const _RP = "RandomPassword";
const _RPT = "RandomPasswordType";
const _RRFR = "RemoveRegionsFromReplication";
const _RRFRR = "RemoveRegionsFromReplicationResponse";
const _RS = "ReplicationStatus";
const _RSLT = "ReplicationStatusListType";
const _RSR = "RotateSecretRequest";
const _RST = "ReplicationStatusType";
const _RSTR = "ReplicateSecretToRegions";
const _RSTRR = "ReplicateSecretToRegionsResponse";
const _RSe = "RestoreSecret";
const _RSo = "RotateSecret";
const _RT = "RotationToken";
const _RTT = "RotationTokenType";
const _SB = "SecretBinary";
const _SBT = "SecretBinaryType";
const _SL = "SecretList";
const _SLE = "SecretListEntry";
const _SLT = "SecretListType";
const _SRTR = "StopReplicationToReplica";
const _SS = "SecretString";
const _SST = "SecretStringType";
const _SV = "SecretValues";
const _SVE = "SecretValueEntry";
const _SVLE = "SecretVersionsListEntry";
const _SVLT = "SecretVersionsListType";
const _SVT = "SecretValuesType";
const _TR = "TagResource";
const _TT = "TimestampType";
const _UR = "UntagResource";
const _US = "UpdateSecret";
const _USR = "UpdateSecretRequest";
const _USVS = "UpdateSecretVersionStage";
const _V = "Versions";
const _VRP = "ValidateResourcePolicy";
const _c = "client";
const _e = "error";
const _iT = "idempotencyToken";
const _s = "server";

// smithy-typescript generated code
import { error as __error, list as __list, op as __op, struct as __struct, TypeRegistry } from "@smithy/core/schema";

import {
  DecryptionFailure as __DecryptionFailure,
  EncryptionFailure as __EncryptionFailure,
  InternalServiceError as __InternalServiceError,
  InvalidNextTokenException as __InvalidNextTokenException,
  InvalidParameterException as __InvalidParameterException,
  InvalidRequestException as __InvalidRequestException,
  LimitExceededException as __LimitExceededException,
  MalformedPolicyDocumentException as __MalformedPolicyDocumentException,
  PreconditionNotMetException as __PreconditionNotMetException,
  PublicPolicyException as __PublicPolicyException,
  ResourceExistsException as __ResourceExistsException,
  ResourceNotFoundException as __ResourceNotFoundException,
} from "../models/index";
import { Unit } from "./smithy.api";

/* eslint no-var: 0 */

export const com_amazonaws_secretsmanagerRegistry = TypeRegistry.for("com.amazonaws.secretsmanager");
com_amazonaws_secretsmanagerRegistry.startCapture();
export var APIErrorType: undefined;

export var BatchGetSecretValueRequest: undefined;

export var BatchGetSecretValueResponse = __struct(
  _BGSVR,
  {
    // output
  },
  {
    [_SV]: [
      () => SecretValuesType,
      {
        // documentation
      },
    ],
  }
);
export var CancelRotateSecretRequest: undefined;

export var CancelRotateSecretResponse: undefined;

export var CreateSecretRequest = __struct(
  _CSR,
  {
    // input
  },
  {
    [_CRT]: [
      ,
      {
        // documentation
        [_iT]: 1,
      },
    ],
    [_SB]: [
      () => "blob",
      {
        // documentation
      },
    ],
    [_SS]: [
      ,
      {
        // documentation
      },
    ],
  }
);
export var CreateSecretResponse = __struct(
  _CSRr,
  {
    // output
  },
  {
    [_RS]: [
      () => ReplicationStatusListType,
      {
        // documentation
      },
    ],
  }
);
export var DecryptionFailure = __error(
  _DF,
  {
    // documentation
    [_e]: _c,
  },
  {},

  __DecryptionFailure
);
export var DeleteResourcePolicyRequest: undefined;

export var DeleteResourcePolicyResponse: undefined;

export var DeleteSecretRequest: undefined;

export var DeleteSecretResponse = __struct(
  _DSR,
  {
    // output
  },
  {
    [_DD]: [
      () => "time",
      {
        // documentation
      },
    ],
  }
);
export var DescribeSecretRequest: undefined;

export var DescribeSecretResponse = __struct(
  _DSRe,
  {
    // output
  },
  {
    [_LRD]: [
      () => "time",
      {
        // documentation
      },
    ],
    [_LCD]: [
      () => "time",
      {
        // documentation
      },
    ],
    [_LAD]: [
      () => "time",
      {
        // documentation
      },
    ],
    [_DDe]: [
      () => "time",
      {
        // documentation
      },
    ],
    [_NRD]: [
      () => "time",
      {
        // documentation
      },
    ],
    [_CD]: [
      () => "time",
      {
        // documentation
      },
    ],
    [_RS]: [
      () => ReplicationStatusListType,
      {
        // documentation
      },
    ],
  }
);
export var EncryptionFailure = __error(
  _EF,
  {
    // documentation
    [_e]: _c,
  },
  {},

  __EncryptionFailure
);
export var Filter: undefined;

export var GetRandomPasswordRequest: undefined;

export var GetRandomPasswordResponse = __struct(
  _GRPR,
  {
    // output
  },
  {
    [_RP]: [
      ,
      {
        // documentation
      },
    ],
  }
);
export var GetResourcePolicyRequest: undefined;

export var GetResourcePolicyResponse: undefined;

export var GetSecretValueRequest: undefined;

export var GetSecretValueResponse = __struct(
  _GSVR,
  {
    // output
  },
  {
    [_SB]: [
      () => "blob",
      {
        // documentation
      },
    ],
    [_SS]: [
      ,
      {
        // documentation
      },
    ],
    [_CD]: [
      () => "time",
      {
        // documentation
      },
    ],
  }
);
export var InternalServiceError = __error(
  _ISE,
  {
    // documentation
    [_e]: _s,
  },
  {},

  __InternalServiceError
);
export var InvalidNextTokenException = __error(
  _INTE,
  {
    // documentation
    [_e]: _c,
  },
  {},

  __InvalidNextTokenException
);
export var InvalidParameterException = __error(
  _IPE,
  {
    // documentation
    [_e]: _c,
  },
  {},

  __InvalidParameterException
);
export var InvalidRequestException = __error(
  _IRE,
  {
    // documentation
    [_e]: _c,
  },
  {},

  __InvalidRequestException
);
export var LimitExceededException = __error(
  _LEE,
  {
    // documentation
    [_e]: _c,
  },
  {},

  __LimitExceededException
);
export var ListSecretsRequest: undefined;

export var ListSecretsResponse = __struct(
  _LSR,
  {
    // output
  },
  {
    [_SL]: [
      () => SecretListType,
      {
        // documentation
      },
    ],
  }
);
export var ListSecretVersionIdsRequest: undefined;

export var ListSecretVersionIdsResponse = __struct(
  _LSVIR,
  {
    // output
  },
  {
    [_V]: [
      () => SecretVersionsListType,
      {
        // documentation
      },
    ],
  }
);
export var MalformedPolicyDocumentException = __error(
  _MPDE,
  {
    // documentation
    [_e]: _c,
  },
  {},

  __MalformedPolicyDocumentException
);
export var PreconditionNotMetException = __error(
  _PNME,
  {
    // documentation
    [_e]: _c,
  },
  {},

  __PreconditionNotMetException
);
export var PublicPolicyException = __error(
  _PPE,
  {
    // documentation
    [_e]: _c,
  },
  {},

  __PublicPolicyException
);
export var PutResourcePolicyRequest: undefined;

export var PutResourcePolicyResponse: undefined;

export var PutSecretValueRequest = __struct(
  _PSVR,
  {
    // input
  },
  {
    [_CRT]: [
      ,
      {
        // documentation
        [_iT]: 1,
      },
    ],
    [_SB]: [
      () => "blob",
      {
        // documentation
      },
    ],
    [_SS]: [
      ,
      {
        // documentation
      },
    ],
    [_RT]: [
      ,
      {
        // documentation
      },
    ],
  }
);
export var PutSecretValueResponse: undefined;

export var RemoveRegionsFromReplicationRequest: undefined;

export var RemoveRegionsFromReplicationResponse = __struct(
  _RRFRR,
  {
    // output
  },
  {
    [_RS]: [
      () => ReplicationStatusListType,
      {
        // documentation
      },
    ],
  }
);
export var ReplicaRegionType: undefined;

export var ReplicateSecretToRegionsRequest: undefined;

export var ReplicateSecretToRegionsResponse = __struct(
  _RSTRR,
  {
    // output
  },
  {
    [_RS]: [
      () => ReplicationStatusListType,
      {
        // documentation
      },
    ],
  }
);
export var ReplicationStatusType = __struct(
  _RST,
  {
    // documentation
  },
  {
    [_LAD]: [
      () => "time",
      {
        // documentation
      },
    ],
  }
);
export var ResourceExistsException = __error(
  _REE,
  {
    // documentation
    [_e]: _c,
  },
  {},

  __ResourceExistsException
);
export var ResourceNotFoundException = __error(
  _RNFE,
  {
    // documentation
    [_e]: _c,
  },
  {},

  __ResourceNotFoundException
);
export var RestoreSecretRequest: undefined;

export var RestoreSecretResponse: undefined;

export var RotateSecretRequest = __struct(
  _RSR,
  {
    // input
  },
  {
    [_CRT]: [
      ,
      {
        // documentation
        [_iT]: 1,
      },
    ],
  }
);
export var RotateSecretResponse: undefined;

export var RotationRulesType: undefined;

export var SecretListEntry = __struct(
  _SLE,
  {
    // documentation
  },
  {
    [_LRD]: [
      () => "time",
      {
        // documentation
      },
    ],
    [_LCD]: [
      () => "time",
      {
        // documentation
      },
    ],
    [_LAD]: [
      () => "time",
      {
        // documentation
      },
    ],
    [_DDe]: [
      () => "time",
      {
        // documentation
      },
    ],
    [_NRD]: [
      () => "time",
      {
        // documentation
      },
    ],
    [_CD]: [
      () => "time",
      {
        // documentation
      },
    ],
  }
);
export var SecretValueEntry = __struct(
  _SVE,
  {
    // documentation
  },
  {
    [_SB]: [
      () => "blob",
      {
        // documentation
      },
    ],
    [_SS]: [
      ,
      {
        // documentation
      },
    ],
    [_CD]: [
      () => "time",
      {
        // documentation
      },
    ],
  }
);
export var SecretVersionsListEntry = __struct(
  _SVLE,
  {
    // documentation
  },
  {
    [_LAD]: [
      () => "time",
      {
        // documentation
      },
    ],
    [_CD]: [
      () => "time",
      {
        // documentation
      },
    ],
  }
);
export var StopReplicationToReplicaRequest: undefined;

export var StopReplicationToReplicaResponse: undefined;

export var Tag: undefined;

export var TagResourceRequest: undefined;

export var UntagResourceRequest: undefined;

export var UpdateSecretRequest = __struct(
  _USR,
  {
    // input
  },
  {
    [_CRT]: [
      ,
      {
        // documentation
        [_iT]: 1,
      },
    ],
    [_SB]: [
      () => "blob",
      {
        // documentation
      },
    ],
    [_SS]: [
      ,
      {
        // documentation
      },
    ],
  }
);
export var UpdateSecretResponse: undefined;

export var UpdateSecretVersionStageRequest: undefined;

export var UpdateSecretVersionStageResponse: undefined;

export var ValidateResourcePolicyRequest: undefined;

export var ValidateResourcePolicyResponse: undefined;

export var ValidationErrorsEntry: undefined;

export var AddReplicaRegionListType: undefined;

export var APIErrorListType: undefined;

export var FiltersListType: undefined;

export var FilterValuesStringList: undefined;

export var KmsKeyIdListType: undefined;

export var RemoveReplicaRegionListType: undefined;

export var ReplicationStatusListType = __list(_RSLT, {}, () => ReplicationStatusType);
export var SecretIdListType: undefined;

export var SecretListType = __list(_SLT, {}, () => SecretListEntry);
export var SecretValuesType = __list(_SVT, {}, () => SecretValueEntry);
export var SecretVersionsListType = __list(_SVLT, {}, () => SecretVersionsListEntry);
export var SecretVersionStagesType: undefined;

export var TagKeyListType: undefined;

export var TagListType: undefined;

export var ValidationErrorsType: undefined;

export var SecretVersionsToStagesMapType: undefined;

export var BatchGetSecretValue = __op(
  _BGSV,
  {
    // examples
    // documentation
    // paginated
  },
  () => BatchGetSecretValueRequest,
  () => BatchGetSecretValueResponse
);
export var CancelRotateSecret = __op(
  _CRS,
  {
    // examples
    // documentation
  },
  () => CancelRotateSecretRequest,
  () => CancelRotateSecretResponse
);
export var CreateSecret = __op(
  _CS,
  {
    // examples
    // documentation
  },
  () => CreateSecretRequest,
  () => CreateSecretResponse
);
export var DeleteResourcePolicy = __op(
  _DRP,
  {
    // examples
    // documentation
  },
  () => DeleteResourcePolicyRequest,
  () => DeleteResourcePolicyResponse
);
export var DeleteSecret = __op(
  _DS,
  {
    // documentation
  },
  () => DeleteSecretRequest,
  () => DeleteSecretResponse
);
export var DescribeSecret = __op(
  _DSe,
  {
    // documentation
    // smokeTests
  },
  () => DescribeSecretRequest,
  () => DescribeSecretResponse
);
export var GetRandomPassword = __op(
  _GRP,
  {
    // examples
    // documentation
  },
  () => GetRandomPasswordRequest,
  () => GetRandomPasswordResponse
);
export var GetResourcePolicy = __op(
  _GRPe,
  {
    // examples
    // documentation
  },
  () => GetResourcePolicyRequest,
  () => GetResourcePolicyResponse
);
export var GetSecretValue = __op(
  _GSV,
  {
    // examples
    // documentation
  },
  () => GetSecretValueRequest,
  () => GetSecretValueResponse
);
export var ListSecrets = __op(
  _LS,
  {
    // examples
    // smokeTests
    // documentation
    // paginated
  },
  () => ListSecretsRequest,
  () => ListSecretsResponse
);
export var ListSecretVersionIds = __op(
  _LSVI,
  {
    // examples
    // documentation
    // paginated
  },
  () => ListSecretVersionIdsRequest,
  () => ListSecretVersionIdsResponse
);
export var PutResourcePolicy = __op(
  _PRP,
  {
    // examples
    // documentation
  },
  () => PutResourcePolicyRequest,
  () => PutResourcePolicyResponse
);
export var PutSecretValue = __op(
  _PSV,
  {
    // examples
    // documentation
  },
  () => PutSecretValueRequest,
  () => PutSecretValueResponse
);
export var RemoveRegionsFromReplication = __op(
  _RRFR,
  {
    // documentation
  },
  () => RemoveRegionsFromReplicationRequest,
  () => RemoveRegionsFromReplicationResponse
);
export var ReplicateSecretToRegions = __op(
  _RSTR,
  {
    // examples
    // documentation
  },
  () => ReplicateSecretToRegionsRequest,
  () => ReplicateSecretToRegionsResponse
);
export var RestoreSecret = __op(
  _RSe,
  {
    // examples
    // documentation
  },
  () => RestoreSecretRequest,
  () => RestoreSecretResponse
);
export var RotateSecret = __op(
  _RSo,
  {
    // examples
    // documentation
  },
  () => RotateSecretRequest,
  () => RotateSecretResponse
);
export var StopReplicationToReplica = __op(
  _SRTR,
  {
    // documentation
  },
  () => StopReplicationToReplicaRequest,
  () => StopReplicationToReplicaResponse
);
export var TagResource = __op(
  _TR,
  {
    // examples
    // documentation
  },
  () => TagResourceRequest,
  () => Unit
);
export var UntagResource = __op(
  _UR,
  {
    // examples
    // documentation
  },
  () => UntagResourceRequest,
  () => Unit
);
export var UpdateSecret = __op(
  _US,
  {
    // examples
    // documentation
  },
  () => UpdateSecretRequest,
  () => UpdateSecretResponse
);
export var UpdateSecretVersionStage = __op(
  _USVS,
  {
    // examples
    // documentation
  },
  () => UpdateSecretVersionStageRequest,
  () => UpdateSecretVersionStageResponse
);
export var ValidateResourcePolicy = __op(
  _VRP,
  {
    // examples
    // documentation
  },
  () => ValidateResourcePolicyRequest,
  () => ValidateResourcePolicyResponse
);
com_amazonaws_secretsmanagerRegistry.stopCapture();
