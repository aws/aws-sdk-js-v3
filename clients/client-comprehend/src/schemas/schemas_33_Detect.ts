// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _BO,
  _DMI,
  _DS,
  _DSR,
  _DSRe,
  _DTS,
  _DTSR,
  _DTSRe,
  _E,
  _EO,
  _GS,
  _LC,
  _LOM,
  _LOTSE,
  _Me,
  _Mi,
  _MS,
  _Ne,
  _Neu,
  _Pos,
  _Sc,
  _Se,
  _SS,
  _T,
  _TSE,
  _TSM,
  _Ty,
  CustomerInputString,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DetectSentimentRequest = struct(n0, _DSR, 0, [_T, _LC], [[() => CustomerInputString, 0], 0]);
export var DetectSentimentResponse = struct(n0, _DSRe, 8, [_Se, _SS], [0, () => SentimentScore]);
export var DetectTargetedSentimentRequest = struct(n0, _DTSR, 0, [_T, _LC], [[() => CustomerInputString, 0], 0]);
export var DetectTargetedSentimentResponse = struct(n0, _DTSRe, 8, [_E], [() => ListOfTargetedSentimentEntities]);
export var MentionSentiment = struct(n0, _MS, 0, [_Se, _SS], [0, () => SentimentScore]);
export var SentimentScore = struct(n0, _SS, 0, [_Pos, _Ne, _Neu, _Mi], [1, 1, 1, 1]);
export var TargetedSentimentEntity = struct(n0, _TSE, 0, [_DMI, _Me], [64 | 1, () => ListOfMentions]);
export var TargetedSentimentMention = struct(
  n0,
  _TSM,
  0,
  [_Sc, _GS, _T, _Ty, _MS, _BO, _EO],
  [1, 1, 0, 0, () => MentionSentiment, 1, 1]
);
export var ListOfDescriptiveMentionIndices = 64 | 1;

export var ListOfMentions = list(n0, _LOM, 0, () => TargetedSentimentMention);
export var ListOfTargetedSentimentEntities = list(n0, _LOTSE, 0, () => TargetedSentimentEntity);
export var DetectSentiment = op(
  n0,
  _DS,
  0,
  () => DetectSentimentRequest,
  () => DetectSentimentResponse
);
export var DetectTargetedSentiment = op(
  n0,
  _DTS,
  0,
  () => DetectTargetedSentimentRequest,
  () => DetectTargetedSentimentResponse
);
