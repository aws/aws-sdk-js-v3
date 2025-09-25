// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _A,
  _a,
  _aA,
  _aAI,
  _aAw,
  _ACS,
  _ACs,
  _ACSs,
  _AD,
  _aD,
  _AF,
  _aI,
  _AM,
  _aM,
  _AMI,
  _AN,
  _aN,
  _AR,
  _aR,
  _ARD,
  _aRD,
  _ARM,
  _ARMs,
  _aRs,
  _aS,
  _as,
  _au,
  _AWSA,
  _AWSAc,
  _AWSS,
  _AWSSe,
  _BCDBA,
  _BCDBAE,
  _BCDBAEa,
  _BCDBAR,
  _BCDBARa,
  _CA,
  _CAR,
  _CARR,
  _CARr,
  _CARre,
  _CARRr,
  _cB,
  _CDR,
  _cDR,
  _CDRr,
  _cDRr,
  _com,
  _con,
  _cS,
  _cSI,
  _cSN,
  _cSont,
  _cT,
  _cTr,
  _D,
  _d,
  _DC,
  _De,
  _de,
  _DM,
  _DML,
  _EA,
  _eA,
  _eCr,
  _eM,
  _er,
  _eTv,
  _f,
  _fI,
  _FM,
  _GA,
  _GAR,
  _GARe,
  _GD,
  _GDR,
  _GDRe,
  _h,
  _hQ,
  _i,
  _l,
  _LA,
  _LAM,
  _LAR,
  _LARi,
  _LARis,
  _LARR,
  _LARRi,
  _LN,
  _LNR,
  _LNRi,
  _lU,
  _me,
  _mEC,
  _mR,
  _N,
  _n,
  _No,
  _no,
  _nT,
  _qS,
  _rA,
  _ro,
  _rT,
  _S,
  _s,
  _sc,
  _sEC,
  _sN,
  _so,
  _t,
  _UA,
  _UACSS,
  _UACSSR,
  _UACSSRp,
  _UAR,
  _UARp,
  _UAS,
  _UASR,
  _UASRp,
  _uR,
  CreatedBy,
  n0,
} from "./schemas_0";
import { AssessmentReportsDestination, Role, Roles } from "./schemas_12_Assessment";
import { AssessmentControl } from "./schemas_15_Assessment";
import { ComplianceType } from "./schemas_28_Assessment";
import { Username } from "./schemas_33_Assessment";

/* eslint no-var: 0 */

export var AssessmentDescription = sim(n0, _AD, 0, 8);
export var AssessmentName = sim(n0, _AN, 0, 8);
export var AssessmentReportDescription = sim(n0, _ARD, 0, 8);
export var DelegationComment = sim(n0, _DC, 0, 8);
export var EmailAddress = sim(n0, _EA, 0, 8);
export var Assessment = struct(
  n0,
  _A,
  0,
  [_a, _aA, _me, _f, _t],
  [0, [() => AWSAccount, 0], [() => AssessmentMetadata, 0], [() => AssessmentFramework, 0], 128 | 0]
);
export var AssessmentControlSet = struct(
  n0,
  _ACS,
  0,
  [_i, _d, _s, _ro, _con, _de, _sEC, _mEC],
  [0, 0, 0, [() => Roles, 0], [() => AssessmentControls, 0], [() => Delegations, 0], 1, 1]
);
export var AssessmentFramework = struct(
  n0,
  _AF,
  8,
  [_i, _a, _me, _cS],
  [0, 0, [() => FrameworkMetadata, 0], [() => AssessmentControlSets, 0]]
);
export var AssessmentMetadata = struct(
  n0,
  _AM,
  0,
  [_n, _i, _d, _cT, _s, _aRD, _sc, _ro, _de, _cTr, _lU],
  [
    [() => AssessmentName, 0],
    0,
    [() => AssessmentDescription, 0],
    [() => ComplianceType, 0],
    0,
    [() => AssessmentReportsDestination, 0],
    [() => Scope, 0],
    [() => Roles, 0],
    [() => Delegations, 0],
    4,
    4,
  ]
);
export var AssessmentMetadataItem = struct(
  n0,
  _AMI,
  0,
  [_n, _i, _cT, _s, _ro, _de, _cTr, _lU],
  [[() => AssessmentName, 0], 0, [() => ComplianceType, 0], 0, [() => Roles, 0], [() => Delegations, 0], 4, 4]
);
export var AssessmentReport = struct(
  n0,
  _AR,
  0,
  [_i, _n, _d, _aAI, _aI, _aN, _au, _s, _cTr],
  [0, 0, [() => AssessmentReportDescription, 0], 0, 0, [() => AssessmentName, 0], [() => Username, 0], 0, 4]
);
export var AssessmentReportMetadata = struct(
  n0,
  _ARM,
  0,
  [_i, _n, _d, _aI, _aN, _au, _s, _cTr],
  [0, 0, [() => AssessmentReportDescription, 0], 0, [() => AssessmentName, 0], [() => Username, 0], 0, 4]
);
export var AWSAccount = struct(n0, _AWSA, 0, [_i, _eA, _n], [0, [() => EmailAddress, 0], 0]);
export var AWSService = struct(n0, _AWSS, 0, [_sN], [0]);
export var BatchCreateDelegationByAssessmentError = struct(
  n0,
  _BCDBAE,
  0,
  [_cDR, _eCr, _eM],
  [[() => CreateDelegationRequest, 0], 0, 0]
);
export var BatchCreateDelegationByAssessmentRequest = struct(
  n0,
  _BCDBAR,
  0,
  [_cDRr, _aI],
  [
    [() => CreateDelegationRequests, 0],
    [0, 1],
  ]
);
export var BatchCreateDelegationByAssessmentResponse = struct(
  n0,
  _BCDBARa,
  0,
  [_de, _er],
  [
    [() => Delegations, 0],
    [() => BatchCreateDelegationByAssessmentErrors, 0],
  ]
);
export var CreateAssessmentReportRequest = struct(
  n0,
  _CARR,
  0,
  [_n, _d, _aI, _qS],
  [0, [() => AssessmentReportDescription, 0], [0, 1], 0]
);
export var CreateAssessmentReportResponse = struct(n0, _CARRr, 0, [_aR], [[() => AssessmentReport, 0]]);
export var CreateAssessmentRequest = struct(
  n0,
  _CAR,
  0,
  [_n, _d, _aRD, _sc, _ro, _fI, _t],
  [
    [() => AssessmentName, 0],
    [() => AssessmentDescription, 0],
    [() => AssessmentReportsDestination, 0],
    [() => Scope, 0],
    [() => Roles, 0],
    0,
    128 | 0,
  ]
);
export var CreateAssessmentResponse = struct(n0, _CARr, 0, [_as], [[() => Assessment, 0]]);
export var CreateDelegationRequest = struct(
  n0,
  _CDR,
  0,
  [_com, _cSI, _rA, _rT],
  [[() => DelegationComment, 0], 0, 0, 0]
);
export var Delegation = struct(
  n0,
  _D,
  8,
  [_i, _aN, _aI, _s, _rA, _rT, _cTr, _lU, _cSI, _com, _cB],
  [0, [() => AssessmentName, 0], 0, 0, 0, 0, 4, 4, 0, [() => DelegationComment, 0], [() => CreatedBy, 0]]
);
export var DelegationMetadata = struct(
  n0,
  _DM,
  0,
  [_i, _aN, _aI, _s, _rA, _cTr, _cSN],
  [0, [() => AssessmentName, 0], 0, 0, 0, 4, 0]
);
export var FrameworkMetadata = struct(
  n0,
  _FM,
  0,
  [_n, _d, _l, _cT],
  [[() => AssessmentName, 0], 0, 0, [() => ComplianceType, 0]]
);
export var GetAssessmentRequest = struct(n0, _GAR, 0, [_aI], [[0, 1]]);
export var GetAssessmentResponse = struct(n0, _GARe, 0, [_as, _uR], [[() => Assessment, 0], () => Role]);
export var GetDelegationsRequest = struct(
  n0,
  _GDR,
  0,
  [_nT, _mR],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var GetDelegationsResponse = struct(n0, _GDRe, 0, [_de, _nT], [[() => DelegationMetadataList, 0], 0]);
export var ListAssessmentReportsRequest = struct(
  n0,
  _LARR,
  0,
  [_nT, _mR],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListAssessmentReportsResponse = struct(
  n0,
  _LARRi,
  0,
  [_aRs, _nT],
  [[() => AssessmentReportsMetadata, 0], 0]
);
export var ListAssessmentsRequest = struct(
  n0,
  _LAR,
  0,
  [_s, _nT, _mR],
  [
    [
      0,
      {
        [_hQ]: _s,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListAssessmentsResponse = struct(n0, _LARi, 0, [_aM, _nT], [[() => ListAssessmentMetadata, 0], 0]);
export var ListNotificationsRequest = struct(
  n0,
  _LNR,
  0,
  [_nT, _mR],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListNotificationsResponse = struct(n0, _LNRi, 0, [_no, _nT], [[() => Notifications, 0], 0]);
export var Notification = struct(
  n0,
  _N,
  0,
  [_i, _aI, _aN, _cSI, _cSN, _d, _eTv, _so],
  [0, 0, [() => AssessmentName, 0], 0, 0, 0, 4, 0]
);
export var Scope = struct(n0, _S, 8, [_aAw, _aS], [[() => AWSAccounts, 0], () => AWSServices]);
export var UpdateAssessmentControlSetStatusRequest = struct(
  n0,
  _UACSSR,
  0,
  [_aI, _cSI, _s, _com],
  [[0, 1], [0, 1], 0, [() => DelegationComment, 0]]
);
export var UpdateAssessmentControlSetStatusResponse = struct(
  n0,
  _UACSSRp,
  0,
  [_cSont],
  [[() => AssessmentControlSet, 0]]
);
export var UpdateAssessmentRequest = struct(
  n0,
  _UAR,
  0,
  [_aI, _aN, _aD, _sc, _aRD, _ro],
  [
    [0, 1],
    [() => AssessmentName, 0],
    [() => AssessmentDescription, 0],
    [() => Scope, 0],
    [() => AssessmentReportsDestination, 0],
    [() => Roles, 0],
  ]
);
export var UpdateAssessmentResponse = struct(n0, _UARp, 0, [_as], [[() => Assessment, 0]]);
export var UpdateAssessmentStatusRequest = struct(n0, _UASR, 0, [_aI, _s], [[0, 1], 0]);
export var UpdateAssessmentStatusResponse = struct(n0, _UASRp, 0, [_as], [[() => Assessment, 0]]);
export var AssessmentControls = list(n0, _ACs, 0, [() => AssessmentControl, 0]);
export var AssessmentControlSets = list(n0, _ACSs, 0, [() => AssessmentControlSet, 0]);
export var AssessmentReportsMetadata = list(n0, _ARMs, 0, [() => AssessmentReportMetadata, 0]);
export var AWSAccounts = list(n0, _AWSAc, 8, [() => AWSAccount, 0]);
export var AWSServices = list(n0, _AWSSe, 0, () => AWSService);
export var BatchCreateDelegationByAssessmentErrors = list(n0, _BCDBAEa, 8, [
  () => BatchCreateDelegationByAssessmentError,
  0,
]);
export var CreateDelegationRequests = list(n0, _CDRr, 8, [() => CreateDelegationRequest, 0]);
export var DelegationMetadataList = list(n0, _DML, 0, [() => DelegationMetadata, 0]);
export var Delegations = list(n0, _De, 0, [() => Delegation, 0]);
export var ListAssessmentMetadata = list(n0, _LAM, 0, [() => AssessmentMetadataItem, 0]);
export var Notifications = list(n0, _No, 0, [() => Notification, 0]);
export var BatchCreateDelegationByAssessment = op(
  n0,
  _BCDBA,
  {
    [_h]: ["POST", "/assessments/{assessmentId}/delegations", 200],
  },
  () => BatchCreateDelegationByAssessmentRequest,
  () => BatchCreateDelegationByAssessmentResponse
);
export var CreateAssessment = op(
  n0,
  _CA,
  {
    [_h]: ["POST", "/assessments", 200],
  },
  () => CreateAssessmentRequest,
  () => CreateAssessmentResponse
);
export var CreateAssessmentReport = op(
  n0,
  _CARre,
  {
    [_h]: ["POST", "/assessments/{assessmentId}/reports", 200],
  },
  () => CreateAssessmentReportRequest,
  () => CreateAssessmentReportResponse
);
export var GetAssessment = op(
  n0,
  _GA,
  {
    [_h]: ["GET", "/assessments/{assessmentId}", 200],
  },
  () => GetAssessmentRequest,
  () => GetAssessmentResponse
);
export var GetDelegations = op(
  n0,
  _GD,
  {
    [_h]: ["GET", "/delegations", 200],
  },
  () => GetDelegationsRequest,
  () => GetDelegationsResponse
);
export var ListAssessmentReports = op(
  n0,
  _LARis,
  {
    [_h]: ["GET", "/assessmentReports", 200],
  },
  () => ListAssessmentReportsRequest,
  () => ListAssessmentReportsResponse
);
export var ListAssessments = op(
  n0,
  _LA,
  {
    [_h]: ["GET", "/assessments", 200],
  },
  () => ListAssessmentsRequest,
  () => ListAssessmentsResponse
);
export var ListNotifications = op(
  n0,
  _LN,
  {
    [_h]: ["GET", "/notifications", 200],
  },
  () => ListNotificationsRequest,
  () => ListNotificationsResponse
);
export var UpdateAssessment = op(
  n0,
  _UA,
  {
    [_h]: ["PUT", "/assessments/{assessmentId}", 200],
  },
  () => UpdateAssessmentRequest,
  () => UpdateAssessmentResponse
);
export var UpdateAssessmentControlSetStatus = op(
  n0,
  _UACSS,
  {
    [_h]: ["PUT", "/assessments/{assessmentId}/controlSets/{controlSetId}/status", 200],
  },
  () => UpdateAssessmentControlSetStatusRequest,
  () => UpdateAssessmentControlSetStatusResponse
);
export var UpdateAssessmentStatus = op(
  n0,
  _UAS,
  {
    [_h]: ["PUT", "/assessments/{assessmentId}/status", 200],
  },
  () => UpdateAssessmentStatusRequest,
  () => UpdateAssessmentStatusResponse
);
