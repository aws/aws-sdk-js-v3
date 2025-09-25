// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  CloudTrailInvalidClientTokenIdException as __CloudTrailInvalidClientTokenIdException,
  CloudWatchLogsDeliveryUnavailableException as __CloudWatchLogsDeliveryUnavailableException,
  EventDataStoreAlreadyExistsException as __EventDataStoreAlreadyExistsException,
  InsufficientEncryptionPolicyException as __InsufficientEncryptionPolicyException,
  InsufficientS3BucketPolicyException as __InsufficientS3BucketPolicyException,
  InsufficientSnsTopicPolicyException as __InsufficientSnsTopicPolicyException,
  InvalidCloudWatchLogsLogGroupArnException as __InvalidCloudWatchLogsLogGroupArnException,
  InvalidCloudWatchLogsRoleArnException as __InvalidCloudWatchLogsRoleArnException,
  InvalidInsightSelectorsException as __InvalidInsightSelectorsException,
  InvalidKmsKeyIdException as __InvalidKmsKeyIdException,
  InvalidQueryStatementException as __InvalidQueryStatementException,
  InvalidS3BucketNameException as __InvalidS3BucketNameException,
  InvalidS3PrefixException as __InvalidS3PrefixException,
  InvalidSnsTopicNameException as __InvalidSnsTopicNameException,
  KmsException as __KmsException,
  KmsKeyDisabledException as __KmsKeyDisabledException,
  KmsKeyNotFoundException as __KmsKeyNotFoundException,
  MaximumNumberOfTrailsExceededException as __MaximumNumberOfTrailsExceededException,
  S3BucketDoesNotExistException as __S3BucketDoesNotExistException,
  TrailAlreadyExistsException as __TrailAlreadyExistsException,
  TrailNotProvidedException as __TrailNotProvidedException,
} from "../models/index";
import {
  _AESd,
  _aQE,
  _BM,
  _c,
  _CD,
  _CDR,
  _CDRr,
  _CEDS,
  _CEDSR,
  _CEDSRr,
  _CT,
  _CTICTIE,
  _CTR,
  _CTre,
  _CTRr,
  _CWLDUE,
  _CWLLGA,
  _CWLRA,
  _DA,
  _DI,
  _e,
  _EDS,
  _EDSA,
  _EDSAEE,
  _ELFV,
  _FRA,
  _FSe,
  _hE,
  _ICWLLGAE,
  _ICWLRAE,
  _IEPE,
  _IGSE,
  _IISEn,
  _IKKIE,
  _IMRT,
  _IOT,
  _IQSE,
  _ISBNE,
  _ISBPE,
  _ISPE,
  _ISTNE,
  _ISTPE,
  _KE,
  _KKDE,
  _KKI,
  _KKNFE,
  _LFVE,
  _M,
  _MNOTEE,
  _MRE,
  _N,
  _OE,
  _QP,
  _QSuer,
  _RP,
  _RS,
  _RW,
  _RWL,
  _SBDNEE,
  _SBN,
  _SI,
  _SKP,
  _St,
  _STARN,
  _STN,
  _T,
  _TAEE,
  _TARN,
  _TL,
  _TNPE,
  _TPE,
  _UD,
  _UDR,
  _UDRp,
  _UEDS,
  _UEDSR,
  _UEDSRp,
  _UT,
  _VP,
  _W,
  n0,
} from "./schemas_0";
import { TagsList } from "./schemas_4_Create";
import { AdvancedEventSelectors } from "./schemas_13_Event";
import { RefreshSchedule, WidgetList } from "./schemas_21_Event";

/* eslint no-var: 0 */

export var CloudTrailInvalidClientTokenIdException = error(
  n0,
  _CTICTIE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`CloudTrailInvalidClientTokenId`, 400],
  },
  [_M],
  [0],

  __CloudTrailInvalidClientTokenIdException
);
export var CloudWatchLogsDeliveryUnavailableException = error(
  n0,
  _CWLDUE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`CloudWatchLogsDeliveryUnavailable`, 400],
  },
  [_M],
  [0],

  __CloudWatchLogsDeliveryUnavailableException
);
export var CreateDashboardRequest = struct(
  n0,
  _CDR,
  0,
  [_N, _RS, _TL, _TPE, _W],
  [0, () => RefreshSchedule, () => TagsList, 2, () => RequestWidgetList]
);
export var CreateDashboardResponse = struct(
  n0,
  _CDRr,
  0,
  [_DA, _N, _T, _W, _TL, _RS, _TPE],
  [0, 0, 0, () => WidgetList, () => TagsList, () => RefreshSchedule, 2]
);
export var CreateEventDataStoreRequest = struct(
  n0,
  _CEDSR,
  0,
  [_N, _AESd, _MRE, _OE, _RP, _TPE, _TL, _KKI, _SI, _BM],
  [0, () => AdvancedEventSelectors, 2, 2, 1, 2, () => TagsList, 0, 2, 0]
);
export var CreateEventDataStoreResponse = struct(
  n0,
  _CEDSRr,
  0,
  [_EDSA, _N, _St, _AESd, _MRE, _OE, _RP, _TPE, _TL, _CT, _UT, _KKI, _BM],
  [0, 0, 0, () => AdvancedEventSelectors, 2, 2, 1, 2, () => TagsList, 4, 4, 0, 0]
);
export var CreateTrailRequest = struct(
  n0,
  _CTR,
  0,
  [_N, _SBN, _SKP, _STN, _IGSE, _IMRT, _ELFV, _CWLLGA, _CWLRA, _KKI, _IOT, _TL],
  [0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 2, () => TagsList]
);
export var CreateTrailResponse = struct(
  n0,
  _CTRr,
  0,
  [_N, _SBN, _SKP, _STN, _STARN, _IGSE, _IMRT, _TARN, _LFVE, _CWLLGA, _CWLRA, _KKI, _IOT],
  [0, 0, 0, 0, 0, 2, 2, 0, 2, 0, 0, 0, 2]
);
export var EventDataStoreAlreadyExistsException = error(
  n0,
  _EDSAEE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`EventDataStoreAlreadyExists`, 400],
  },
  [_M],
  [0],

  __EventDataStoreAlreadyExistsException
);
export var InsufficientEncryptionPolicyException = error(
  n0,
  _IEPE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InsufficientEncryptionPolicy`, 400],
  },
  [_M],
  [0],

  __InsufficientEncryptionPolicyException
);
export var InsufficientS3BucketPolicyException = error(
  n0,
  _ISBPE,
  {
    [_e]: _c,
    [_hE]: 403,
    [_aQE]: [`InsufficientS3BucketPolicy`, 403],
  },
  [_M],
  [0],

  __InsufficientS3BucketPolicyException
);
export var InsufficientSnsTopicPolicyException = error(
  n0,
  _ISTPE,
  {
    [_e]: _c,
    [_hE]: 403,
    [_aQE]: [`InsufficientSnsTopicPolicy`, 403],
  },
  [_M],
  [0],

  __InsufficientSnsTopicPolicyException
);
export var InvalidCloudWatchLogsLogGroupArnException = error(
  n0,
  _ICWLLGAE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidCloudWatchLogsLogGroupArn`, 400],
  },
  [_M],
  [0],

  __InvalidCloudWatchLogsLogGroupArnException
);
export var InvalidCloudWatchLogsRoleArnException = error(
  n0,
  _ICWLRAE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidCloudWatchLogsRoleArn`, 400],
  },
  [_M],
  [0],

  __InvalidCloudWatchLogsRoleArnException
);
export var InvalidInsightSelectorsException = error(
  n0,
  _IISEn,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidInsightSelectors`, 400],
  },
  [_M],
  [0],

  __InvalidInsightSelectorsException
);
export var InvalidKmsKeyIdException = error(
  n0,
  _IKKIE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidKmsKeyId`, 400],
  },
  [_M],
  [0],

  __InvalidKmsKeyIdException
);
export var InvalidQueryStatementException = error(
  n0,
  _IQSE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidQueryStatement`, 400],
  },
  [_M],
  [0],

  __InvalidQueryStatementException
);
export var InvalidS3BucketNameException = error(
  n0,
  _ISBNE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidS3BucketName`, 400],
  },
  [_M],
  [0],

  __InvalidS3BucketNameException
);
export var InvalidS3PrefixException = error(
  n0,
  _ISPE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidS3Prefix`, 400],
  },
  [_M],
  [0],

  __InvalidS3PrefixException
);
export var InvalidSnsTopicNameException = error(
  n0,
  _ISTNE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidSnsTopicName`, 400],
  },
  [_M],
  [0],

  __InvalidSnsTopicNameException
);
export var KmsException = error(
  n0,
  _KE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`KmsException`, 400],
  },
  [_M],
  [0],

  __KmsException
);
export var KmsKeyDisabledException = error(
  n0,
  _KKDE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`KmsKeyDisabled`, 400],
  },
  [_M],
  [0],

  __KmsKeyDisabledException
);
export var KmsKeyNotFoundException = error(
  n0,
  _KKNFE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`KmsKeyNotFound`, 400],
  },
  [_M],
  [0],

  __KmsKeyNotFoundException
);
export var MaximumNumberOfTrailsExceededException = error(
  n0,
  _MNOTEE,
  {
    [_e]: _c,
    [_hE]: 403,
    [_aQE]: [`MaximumNumberOfTrailsExceeded`, 403],
  },
  [_M],
  [0],

  __MaximumNumberOfTrailsExceededException
);
export var RequestWidget = struct(n0, _RW, 0, [_QSuer, _QP, _VP], [0, 64 | 0, 128 | 0]);
export var S3BucketDoesNotExistException = error(
  n0,
  _SBDNEE,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`S3BucketDoesNotExist`, 404],
  },
  [_M],
  [0],

  __S3BucketDoesNotExistException
);
export var TrailAlreadyExistsException = error(
  n0,
  _TAEE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`TrailAlreadyExists`, 400],
  },
  [_M],
  [0],

  __TrailAlreadyExistsException
);
export var TrailNotProvidedException = error(
  n0,
  _TNPE,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`TrailNotProvided`, 404],
  },
  [_M],
  [0],

  __TrailNotProvidedException
);
export var UpdateDashboardRequest = struct(
  n0,
  _UDR,
  0,
  [_DI, _W, _RS, _TPE],
  [0, () => RequestWidgetList, () => RefreshSchedule, 2]
);
export var UpdateDashboardResponse = struct(
  n0,
  _UDRp,
  0,
  [_DA, _N, _T, _W, _RS, _TPE, _CT, _UT],
  [0, 0, 0, () => WidgetList, () => RefreshSchedule, 2, 4, 4]
);
export var UpdateEventDataStoreRequest = struct(
  n0,
  _UEDSR,
  0,
  [_EDS, _N, _AESd, _MRE, _OE, _RP, _TPE, _KKI, _BM],
  [0, 0, () => AdvancedEventSelectors, 2, 2, 1, 2, 0, 0]
);
export var UpdateEventDataStoreResponse = struct(
  n0,
  _UEDSRp,
  0,
  [_EDSA, _N, _St, _AESd, _MRE, _OE, _RP, _TPE, _CT, _UT, _KKI, _BM, _FSe, _FRA],
  [0, 0, 0, () => AdvancedEventSelectors, 2, 2, 1, 2, 4, 4, 0, 0, 0, 0]
);
export var RequestWidgetList = list(n0, _RWL, 0, () => RequestWidget);
export var CreateDashboard = op(
  n0,
  _CD,
  2,
  () => CreateDashboardRequest,
  () => CreateDashboardResponse
);
export var CreateEventDataStore = op(
  n0,
  _CEDS,
  0,
  () => CreateEventDataStoreRequest,
  () => CreateEventDataStoreResponse
);
export var CreateTrail = op(
  n0,
  _CTre,
  2,
  () => CreateTrailRequest,
  () => CreateTrailResponse
);
export var UpdateDashboard = op(
  n0,
  _UD,
  2,
  () => UpdateDashboardRequest,
  () => UpdateDashboardResponse
);
export var UpdateEventDataStore = op(
  n0,
  _UEDS,
  2,
  () => UpdateEventDataStoreRequest,
  () => UpdateEventDataStoreResponse
);
