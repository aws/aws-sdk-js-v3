// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _ASI,
  _ASIL,
  _ASIl,
  _ASS,
  _GSMAASC,
  _GSMAASCR,
  _GSMAASCRe,
  _h,
  _PSMAASC,
  _PSMAASCR,
  _PSMAASCRu,
  _SMAASC,
  _SMAI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AlexaSkillId = sim(n0, _ASI, 0, 8);
export var GetSipMediaApplicationAlexaSkillConfigurationRequest = struct(n0, _GSMAASCR, 0, [_SMAI], [[0, 1]]);
export var GetSipMediaApplicationAlexaSkillConfigurationResponse = struct(
  n0,
  _GSMAASCRe,
  0,
  [_SMAASC],
  [[() => SipMediaApplicationAlexaSkillConfiguration, 0]]
);
export var PutSipMediaApplicationAlexaSkillConfigurationRequest = struct(
  n0,
  _PSMAASCR,
  0,
  [_SMAI, _SMAASC],
  [
    [0, 1],
    [() => SipMediaApplicationAlexaSkillConfiguration, 0],
  ]
);
export var PutSipMediaApplicationAlexaSkillConfigurationResponse = struct(
  n0,
  _PSMAASCRu,
  0,
  [_SMAASC],
  [[() => SipMediaApplicationAlexaSkillConfiguration, 0]]
);
export var SipMediaApplicationAlexaSkillConfiguration = struct(
  n0,
  _SMAASC,
  0,
  [_ASS, _ASIl],
  [0, [() => AlexaSkillIdList, 0]]
);
export var AlexaSkillIdList = list(n0, _ASIL, 0, [() => AlexaSkillId, 0]);
export var GetSipMediaApplicationAlexaSkillConfiguration = op(
  n0,
  _GSMAASC,
  {
    [_h]: ["GET", "/sip-media-applications/{SipMediaApplicationId}/alexa-skill-configuration", 200],
  },
  () => GetSipMediaApplicationAlexaSkillConfigurationRequest,
  () => GetSipMediaApplicationAlexaSkillConfigurationResponse
);
export var PutSipMediaApplicationAlexaSkillConfiguration = op(
  n0,
  _PSMAASC,
  {
    [_h]: ["PUT", "/sip-media-applications/{SipMediaApplicationId}/alexa-skill-configuration", 200],
  },
  () => PutSipMediaApplicationAlexaSkillConfigurationRequest,
  () => PutSipMediaApplicationAlexaSkillConfigurationResponse
);
