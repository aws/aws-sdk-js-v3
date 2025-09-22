// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ApprovalRuleTemplateContentRequiredException as __ApprovalRuleTemplateContentRequiredException,
  ApprovalRuleTemplateDoesNotExistException as __ApprovalRuleTemplateDoesNotExistException,
  ApprovalRuleTemplateInUseException as __ApprovalRuleTemplateInUseException,
  ApprovalRuleTemplateNameAlreadyExistsException as __ApprovalRuleTemplateNameAlreadyExistsException,
  ApprovalRuleTemplateNameRequiredException as __ApprovalRuleTemplateNameRequiredException,
  InvalidApprovalRuleTemplateContentException as __InvalidApprovalRuleTemplateContentException,
  InvalidApprovalRuleTemplateDescriptionException as __InvalidApprovalRuleTemplateDescriptionException,
  InvalidApprovalRuleTemplateNameException as __InvalidApprovalRuleTemplateNameException,
  MaximumRuleTemplatesAssociatedWithRepositoryException as __MaximumRuleTemplatesAssociatedWithRepositoryException,
  NumberOfRuleTemplatesExceededException as __NumberOfRuleTemplatesExceededException,
} from "../models/index";
import {
  _AARTWR,
  _AARTWRI,
  _aRNs,
  _ART,
  _aRT,
  _aRTC,
  _ARTCRE,
  _aRTD,
  _ARTDNEE,
  _aRTI,
  _ARTIUE,
  _aRTN,
  _ARTNAEE,
  _ARTNRE,
  _BAARTWR,
  _BAARTWRE,
  _BAARTWREL,
  _BAARTWRI,
  _BAARTWRO,
  _BDARTFR,
  _BDARTFRE,
  _BDARTFREL,
  _BDARTFRI,
  _BDARTFRO,
  _c,
  _CART,
  _CARTI,
  _CARTO,
  _cD,
  _DART,
  _DARTFR,
  _DARTFRI,
  _DARTI,
  _DARTO,
  _dRN,
  _e,
  _eC,
  _eM,
  _er,
  _eRCS,
  _GART,
  _GARTI,
  _GARTO,
  _IARTCE,
  _IARTDE,
  _IARTNE,
  _lMD,
  _lMU,
  _LRFART,
  _LRFARTI,
  _LRFARTO,
  _m,
  _mR,
  _MRTAWRE,
  _nARTN,
  _NORTEE,
  _nRC,
  _nT,
  _oARTN,
  _rCS,
  _rN,
  _rNe,
  _UARTC,
  _UARTCI,
  _UARTCO,
  _UARTD,
  _UARTDI,
  _UARTDO,
  _UARTN,
  _UARTNI,
  _UARTNO,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ApprovalRuleTemplate = struct(
  n0,
  _ART,
  0,
  [_aRTI, _aRTN, _aRTD, _aRTC, _rCS, _lMD, _cD, _lMU],
  [0, 0, 0, 0, 0, 4, 4, 0]
);
export var ApprovalRuleTemplateContentRequiredException = error(
  n0,
  _ARTCRE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ApprovalRuleTemplateContentRequiredException
);
export var ApprovalRuleTemplateDoesNotExistException = error(
  n0,
  _ARTDNEE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ApprovalRuleTemplateDoesNotExistException
);
export var ApprovalRuleTemplateInUseException = error(
  n0,
  _ARTIUE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ApprovalRuleTemplateInUseException
);
export var ApprovalRuleTemplateNameAlreadyExistsException = error(
  n0,
  _ARTNAEE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ApprovalRuleTemplateNameAlreadyExistsException
);
export var ApprovalRuleTemplateNameRequiredException = error(
  n0,
  _ARTNRE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ApprovalRuleTemplateNameRequiredException
);
export var AssociateApprovalRuleTemplateWithRepositoryInput = struct(n0, _AARTWRI, 0, [_aRTN, _rN], [0, 0]);
export var BatchAssociateApprovalRuleTemplateWithRepositoriesError = struct(
  n0,
  _BAARTWRE,
  0,
  [_rN, _eC, _eM],
  [0, 0, 0]
);
export var BatchAssociateApprovalRuleTemplateWithRepositoriesInput = struct(
  n0,
  _BAARTWRI,
  0,
  [_aRTN, _rNe],
  [0, 64 | 0]
);
export var BatchAssociateApprovalRuleTemplateWithRepositoriesOutput = struct(
  n0,
  _BAARTWRO,
  0,
  [_aRNs, _er],
  [64 | 0, () => BatchAssociateApprovalRuleTemplateWithRepositoriesErrorsList]
);
export var BatchDisassociateApprovalRuleTemplateFromRepositoriesError = struct(
  n0,
  _BDARTFRE,
  0,
  [_rN, _eC, _eM],
  [0, 0, 0]
);
export var BatchDisassociateApprovalRuleTemplateFromRepositoriesInput = struct(
  n0,
  _BDARTFRI,
  0,
  [_aRTN, _rNe],
  [0, 64 | 0]
);
export var BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput = struct(
  n0,
  _BDARTFRO,
  0,
  [_dRN, _er],
  [64 | 0, () => BatchDisassociateApprovalRuleTemplateFromRepositoriesErrorsList]
);
export var CreateApprovalRuleTemplateInput = struct(n0, _CARTI, 0, [_aRTN, _aRTC, _aRTD], [0, 0, 0]);
export var CreateApprovalRuleTemplateOutput = struct(n0, _CARTO, 0, [_aRT], [() => ApprovalRuleTemplate]);
export var DeleteApprovalRuleTemplateInput = struct(n0, _DARTI, 0, [_aRTN], [0]);
export var DeleteApprovalRuleTemplateOutput = struct(n0, _DARTO, 0, [_aRTI], [0]);
export var DisassociateApprovalRuleTemplateFromRepositoryInput = struct(n0, _DARTFRI, 0, [_aRTN, _rN], [0, 0]);
export var GetApprovalRuleTemplateInput = struct(n0, _GARTI, 0, [_aRTN], [0]);
export var GetApprovalRuleTemplateOutput = struct(n0, _GARTO, 0, [_aRT], [() => ApprovalRuleTemplate]);
export var InvalidApprovalRuleTemplateContentException = error(
  n0,
  _IARTCE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidApprovalRuleTemplateContentException
);
export var InvalidApprovalRuleTemplateDescriptionException = error(
  n0,
  _IARTDE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidApprovalRuleTemplateDescriptionException
);
export var InvalidApprovalRuleTemplateNameException = error(
  n0,
  _IARTNE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidApprovalRuleTemplateNameException
);
export var ListRepositoriesForApprovalRuleTemplateInput = struct(n0, _LRFARTI, 0, [_aRTN, _nT, _mR], [0, 0, 1]);
export var ListRepositoriesForApprovalRuleTemplateOutput = struct(n0, _LRFARTO, 0, [_rNe, _nT], [64 | 0, 0]);
export var MaximumRuleTemplatesAssociatedWithRepositoryException = error(
  n0,
  _MRTAWRE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __MaximumRuleTemplatesAssociatedWithRepositoryException
);
export var NumberOfRuleTemplatesExceededException = error(
  n0,
  _NORTEE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __NumberOfRuleTemplatesExceededException
);
export var UpdateApprovalRuleTemplateContentInput = struct(n0, _UARTCI, 0, [_aRTN, _nRC, _eRCS], [0, 0, 0]);
export var UpdateApprovalRuleTemplateContentOutput = struct(n0, _UARTCO, 0, [_aRT], [() => ApprovalRuleTemplate]);
export var UpdateApprovalRuleTemplateDescriptionInput = struct(n0, _UARTDI, 0, [_aRTN, _aRTD], [0, 0]);
export var UpdateApprovalRuleTemplateDescriptionOutput = struct(n0, _UARTDO, 0, [_aRT], [() => ApprovalRuleTemplate]);
export var UpdateApprovalRuleTemplateNameInput = struct(n0, _UARTNI, 0, [_oARTN, _nARTN], [0, 0]);
export var UpdateApprovalRuleTemplateNameOutput = struct(n0, _UARTNO, 0, [_aRT], [() => ApprovalRuleTemplate]);
export var BatchAssociateApprovalRuleTemplateWithRepositoriesErrorsList = list(
  n0,
  _BAARTWREL,
  0,
  () => BatchAssociateApprovalRuleTemplateWithRepositoriesError
);
export var BatchDisassociateApprovalRuleTemplateFromRepositoriesErrorsList = list(
  n0,
  _BDARTFREL,
  0,
  () => BatchDisassociateApprovalRuleTemplateFromRepositoriesError
);
export var AssociateApprovalRuleTemplateWithRepository = op(
  n0,
  _AARTWR,
  0,
  () => AssociateApprovalRuleTemplateWithRepositoryInput,
  () => Unit
);
export var BatchAssociateApprovalRuleTemplateWithRepositories = op(
  n0,
  _BAARTWR,
  0,
  () => BatchAssociateApprovalRuleTemplateWithRepositoriesInput,
  () => BatchAssociateApprovalRuleTemplateWithRepositoriesOutput
);
export var BatchDisassociateApprovalRuleTemplateFromRepositories = op(
  n0,
  _BDARTFR,
  0,
  () => BatchDisassociateApprovalRuleTemplateFromRepositoriesInput,
  () => BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput
);
export var CreateApprovalRuleTemplate = op(
  n0,
  _CART,
  0,
  () => CreateApprovalRuleTemplateInput,
  () => CreateApprovalRuleTemplateOutput
);
export var DeleteApprovalRuleTemplate = op(
  n0,
  _DART,
  0,
  () => DeleteApprovalRuleTemplateInput,
  () => DeleteApprovalRuleTemplateOutput
);
export var DisassociateApprovalRuleTemplateFromRepository = op(
  n0,
  _DARTFR,
  0,
  () => DisassociateApprovalRuleTemplateFromRepositoryInput,
  () => Unit
);
export var GetApprovalRuleTemplate = op(
  n0,
  _GART,
  0,
  () => GetApprovalRuleTemplateInput,
  () => GetApprovalRuleTemplateOutput
);
export var ListRepositoriesForApprovalRuleTemplate = op(
  n0,
  _LRFART,
  0,
  () => ListRepositoriesForApprovalRuleTemplateInput,
  () => ListRepositoriesForApprovalRuleTemplateOutput
);
export var UpdateApprovalRuleTemplateContent = op(
  n0,
  _UARTC,
  0,
  () => UpdateApprovalRuleTemplateContentInput,
  () => UpdateApprovalRuleTemplateContentOutput
);
export var UpdateApprovalRuleTemplateDescription = op(
  n0,
  _UARTD,
  0,
  () => UpdateApprovalRuleTemplateDescriptionInput,
  () => UpdateApprovalRuleTemplateDescriptionOutput
);
export var UpdateApprovalRuleTemplateName = op(
  n0,
  _UARTN,
  0,
  () => UpdateApprovalRuleTemplateNameInput,
  () => UpdateApprovalRuleTemplateNameOutput
);
