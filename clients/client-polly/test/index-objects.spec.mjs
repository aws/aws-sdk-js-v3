import {
  DeleteLexiconCommand,
  DescribeVoicesCommand,
  Engine,
  Gender,
  GetLexiconCommand,
  GetSpeechSynthesisTaskCommand,
  LanguageCode,
  ListLexiconsCommand,
  ListSpeechSynthesisTasksCommand,
  OutputFormat,
  Polly,
  PollyClient,
  PollyServiceException,
  PutLexiconCommand,
  SpeechMarkType,
  StartSpeechSynthesisTaskCommand,
  SynthesizeSpeechCommand,
  TaskStatus,
  TextType,
  VoiceId,
  paginateListSpeechSynthesisTasks,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof PollyClient === "function")
assert(typeof Polly === "function")
// commands
assert(typeof DeleteLexiconCommand === "function")
assert(typeof DescribeVoicesCommand === "function")
assert(typeof GetLexiconCommand === "function")
assert(typeof GetSpeechSynthesisTaskCommand === "function")
assert(typeof ListLexiconsCommand === "function")
assert(typeof ListSpeechSynthesisTasksCommand === "function")
assert(typeof PutLexiconCommand === "function")
assert(typeof StartSpeechSynthesisTaskCommand === "function")
assert(typeof SynthesizeSpeechCommand === "function")
// enums
assert(typeof Engine === "object");
assert(typeof Gender === "object");
assert(typeof LanguageCode === "object");
assert(typeof OutputFormat === "object");
assert(typeof SpeechMarkType === "object");
assert(typeof TaskStatus === "object");
assert(typeof TextType === "object");
assert(typeof VoiceId === "object");
// errors
assert(PollyServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListSpeechSynthesisTasks === "function")
console.log(`Polly index test passed.`);
