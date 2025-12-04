import {
  AccessDeniedException,
  BadGatewayException,
  ConfirmationState,
  ConflictException,
  ConversationMode,
  DeleteSessionCommand,
  DependencyFailedException,
  DialogActionType,
  GetSessionCommand,
  InputMode,
  IntentState,
  InternalServerException,
  InterpretationSource,
  LexRuntimeV2,
  LexRuntimeV2Client,
  LexRuntimeV2ServiceException,
  MessageContentType,
  PlaybackInterruptionReason,
  PutSessionCommand,
  RecognizeTextCommand,
  RecognizeUtteranceCommand,
  ResourceNotFoundException,
  SentimentType,
  Shape,
  StartConversationCommand,
  StyleType,
  ThrottlingException,
  ValidationException,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof LexRuntimeV2Client === "function")
assert(typeof LexRuntimeV2 === "function")
// commands
assert(typeof DeleteSessionCommand === "function")
assert(typeof GetSessionCommand === "function")
assert(typeof PutSessionCommand === "function")
assert(typeof RecognizeTextCommand === "function")
assert(typeof RecognizeUtteranceCommand === "function")
assert(typeof StartConversationCommand === "function")
// enums
assert(typeof ConfirmationState === "object");
assert(typeof ConversationMode === "object");
assert(typeof DialogActionType === "object");
assert(typeof InputMode === "object");
assert(typeof IntentState === "object");
assert(typeof InterpretationSource === "object");
assert(typeof MessageContentType === "object");
assert(typeof PlaybackInterruptionReason === "object");
assert(typeof SentimentType === "object");
assert(typeof Shape === "object");
assert(typeof StyleType === "object");
// errors
assert(AccessDeniedException.prototype instanceof LexRuntimeV2ServiceException)
assert(BadGatewayException.prototype instanceof LexRuntimeV2ServiceException)
assert(ConflictException.prototype instanceof LexRuntimeV2ServiceException)
assert(DependencyFailedException.prototype instanceof LexRuntimeV2ServiceException)
assert(InternalServerException.prototype instanceof LexRuntimeV2ServiceException)
assert(ResourceNotFoundException.prototype instanceof LexRuntimeV2ServiceException)
assert(ThrottlingException.prototype instanceof LexRuntimeV2ServiceException)
assert(ValidationException.prototype instanceof LexRuntimeV2ServiceException)
assert(LexRuntimeV2ServiceException.prototype instanceof Error)
console.log(`LexRuntimeV2 index test passed.`);
