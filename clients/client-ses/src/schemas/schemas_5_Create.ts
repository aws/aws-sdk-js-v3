// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  AlreadyExistsException as __AlreadyExistsException,
  ConfigurationSetAlreadyExistsException as __ConfigurationSetAlreadyExistsException,
  CustomVerificationEmailTemplateAlreadyExistsException as __CustomVerificationEmailTemplateAlreadyExistsException,
  EventDestinationAlreadyExistsException as __EventDestinationAlreadyExistsException,
  InvalidConfigurationSetException as __InvalidConfigurationSetException,
  LimitExceededException as __LimitExceededException,
} from "../models/index";
import {
  _AEE,
  _aQE,
  _c,
  _CCS,
  _CCSED,
  _CCSEDR,
  _CCSEDRr,
  _CCSR,
  _CCSRr,
  _CCVET,
  _CCVETR,
  _CRF,
  _CRFR,
  _CRFRr,
  _CRRSr,
  _CRRSRr,
  _CRRSRre,
  _CS,
  _CSAEE,
  _CSN,
  _CTR,
  _CTre,
  _CTRr,
  _CVETAEE,
  _CVETN,
  _e,
  _ED,
  _EDAEE,
  _EDN,
  _F,
  _FEA,
  _FRURL,
  _hE,
  _ICSE,
  _LEE,
  _m,
  _N,
  _RSN,
  _SRURL,
  _TC,
  _Te,
  _TN,
  _TS,
  n0,
  Unit,
} from "./schemas_0";
import { ReceiptFilter } from "./schemas_8_Receipt";
import { EventDestination } from "./schemas_18_ConfigurationSet";
import { Template } from "./schemas_27_Template";
import { ConfigurationSet } from "./schemas_35_Configuration";

/* eslint no-var: 0 */

export var AlreadyExistsException = error(
  n0,
  _AEE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`AlreadyExists`, 400],
  },
  [_N, _m],
  [0, 0],

  __AlreadyExistsException
);
export var ConfigurationSetAlreadyExistsException = error(
  n0,
  _CSAEE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ConfigurationSetAlreadyExists`, 400],
  },
  [_CSN, _m],
  [0, 0],

  __ConfigurationSetAlreadyExistsException
);
export var CreateConfigurationSetEventDestinationRequest = struct(
  n0,
  _CCSEDR,
  0,
  [_CSN, _ED],
  [0, () => EventDestination]
);
export var CreateConfigurationSetEventDestinationResponse = struct(n0, _CCSEDRr, 0, [], []);
export var CreateConfigurationSetRequest = struct(n0, _CCSR, 0, [_CS], [() => ConfigurationSet]);
export var CreateConfigurationSetResponse = struct(n0, _CCSRr, 0, [], []);
export var CreateCustomVerificationEmailTemplateRequest = struct(
  n0,
  _CCVETR,
  0,
  [_TN, _FEA, _TS, _TC, _SRURL, _FRURL],
  [0, 0, 0, 0, 0, 0]
);
export var CreateReceiptFilterRequest = struct(n0, _CRFR, 0, [_F], [() => ReceiptFilter]);
export var CreateReceiptFilterResponse = struct(n0, _CRFRr, 0, [], []);
export var CreateReceiptRuleSetRequest = struct(n0, _CRRSRr, 0, [_RSN], [0]);
export var CreateReceiptRuleSetResponse = struct(n0, _CRRSRre, 0, [], []);
export var CreateTemplateRequest = struct(n0, _CTR, 0, [_Te], [() => Template]);
export var CreateTemplateResponse = struct(n0, _CTRr, 0, [], []);
export var CustomVerificationEmailTemplateAlreadyExistsException = error(
  n0,
  _CVETAEE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`CustomVerificationEmailTemplateAlreadyExists`, 400],
  },
  [_CVETN, _m],
  [0, 0],

  __CustomVerificationEmailTemplateAlreadyExistsException
);
export var EventDestinationAlreadyExistsException = error(
  n0,
  _EDAEE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`EventDestinationAlreadyExists`, 400],
  },
  [_CSN, _EDN, _m],
  [0, 0, 0],

  __EventDestinationAlreadyExistsException
);
export var InvalidConfigurationSetException = error(
  n0,
  _ICSE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidConfigurationSet`, 400],
  },
  [_m],
  [0],

  __InvalidConfigurationSetException
);
export var LimitExceededException = error(
  n0,
  _LEE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`LimitExceeded`, 400],
  },
  [_m],
  [0],

  __LimitExceededException
);
export var CreateConfigurationSet = op(
  n0,
  _CCS,
  0,
  () => CreateConfigurationSetRequest,
  () => CreateConfigurationSetResponse
);
export var CreateConfigurationSetEventDestination = op(
  n0,
  _CCSED,
  0,
  () => CreateConfigurationSetEventDestinationRequest,
  () => CreateConfigurationSetEventDestinationResponse
);
export var CreateCustomVerificationEmailTemplate = op(
  n0,
  _CCVET,
  0,
  () => CreateCustomVerificationEmailTemplateRequest,
  () => Unit
);
export var CreateReceiptFilter = op(
  n0,
  _CRF,
  0,
  () => CreateReceiptFilterRequest,
  () => CreateReceiptFilterResponse
);
export var CreateReceiptRuleSet = op(
  n0,
  _CRRSr,
  0,
  () => CreateReceiptRuleSetRequest,
  () => CreateReceiptRuleSetResponse
);
export var CreateTemplate = op(
  n0,
  _CTre,
  0,
  () => CreateTemplateRequest,
  () => CreateTemplateResponse
);
