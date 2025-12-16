import {
  AccessDeniedException,
  AccessDeniedException$,
  ActiveContext$,
  ActiveContextTimeToLive$,
  AudioInputEvent$,
  AudioResponseEvent$,
  BadGatewayException,
  BadGatewayException$,
  Button$,
  ConfidenceScore$,
  ConfigurationEvent$,
  ConfirmationState,
  ConflictException,
  ConflictException$,
  ConversationMode,
  DTMFInputEvent$,
  DeleteSession$,
  DeleteSessionCommand,
  DeleteSessionRequest$,
  DeleteSessionResponse$,
  DependencyFailedException,
  DependencyFailedException$,
  DialogAction$,
  DialogActionType,
  DisconnectionEvent$,
  ElicitSubSlot$,
  GetSession$,
  GetSessionCommand,
  GetSessionRequest$,
  GetSessionResponse$,
  HeartbeatEvent$,
  ImageResponseCard$,
  InputMode,
  Intent$,
  IntentResultEvent$,
  IntentState,
  InternalServerException,
  InternalServerException$,
  Interpretation$,
  InterpretationSource,
  LexRuntimeV2,
  LexRuntimeV2Client,
  LexRuntimeV2ServiceException,
  Message$,
  MessageContentType,
  PlaybackCompletionEvent$,
  PlaybackInterruptionEvent$,
  PlaybackInterruptionReason,
  PutSession$,
  PutSessionCommand,
  PutSessionRequest$,
  PutSessionResponse$,
  RecognizeText$,
  RecognizeTextCommand,
  RecognizeTextRequest$,
  RecognizeTextResponse$,
  RecognizeUtterance$,
  RecognizeUtteranceCommand,
  RecognizeUtteranceRequest$,
  RecognizeUtteranceResponse$,
  RecognizedBotMember$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RuntimeHintDetails$,
  RuntimeHintValue$,
  RuntimeHints$,
  SentimentResponse$,
  SentimentScore$,
  SentimentType,
  SessionState$,
  Shape,
  Slot$,
  StartConversation$,
  StartConversationCommand,
  StartConversationRequest$,
  StartConversationRequestEventStream$,
  StartConversationResponse$,
  StartConversationResponseEventStream$,
  StyleType,
  TextInputEvent$,
  TextResponseEvent$,
  ThrottlingException,
  ThrottlingException$,
  TranscriptEvent$,
  ValidationException,
  ValidationException$,
  Value$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof LexRuntimeV2Client === "function");
assert(typeof LexRuntimeV2 === "function");
// commands
assert(typeof DeleteSessionCommand === "function");
assert(typeof DeleteSession$ === "object");
assert(typeof GetSessionCommand === "function");
assert(typeof GetSession$ === "object");
assert(typeof PutSessionCommand === "function");
assert(typeof PutSession$ === "object");
assert(typeof RecognizeTextCommand === "function");
assert(typeof RecognizeText$ === "object");
assert(typeof RecognizeUtteranceCommand === "function");
assert(typeof RecognizeUtterance$ === "object");
assert(typeof StartConversationCommand === "function");
assert(typeof StartConversation$ === "object");
// structural schemas
assert(typeof ActiveContext$ === "object");
assert(typeof ActiveContextTimeToLive$ === "object");
assert(typeof AudioInputEvent$ === "object");
assert(typeof AudioResponseEvent$ === "object");
assert(typeof Button$ === "object");
assert(typeof ConfidenceScore$ === "object");
assert(typeof ConfigurationEvent$ === "object");
assert(typeof DeleteSessionRequest$ === "object");
assert(typeof DeleteSessionResponse$ === "object");
assert(typeof DialogAction$ === "object");
assert(typeof DisconnectionEvent$ === "object");
assert(typeof DTMFInputEvent$ === "object");
assert(typeof ElicitSubSlot$ === "object");
assert(typeof GetSessionRequest$ === "object");
assert(typeof GetSessionResponse$ === "object");
assert(typeof HeartbeatEvent$ === "object");
assert(typeof ImageResponseCard$ === "object");
assert(typeof Intent$ === "object");
assert(typeof IntentResultEvent$ === "object");
assert(typeof Interpretation$ === "object");
assert(typeof Message$ === "object");
assert(typeof PlaybackCompletionEvent$ === "object");
assert(typeof PlaybackInterruptionEvent$ === "object");
assert(typeof PutSessionRequest$ === "object");
assert(typeof PutSessionResponse$ === "object");
assert(typeof RecognizedBotMember$ === "object");
assert(typeof RecognizeTextRequest$ === "object");
assert(typeof RecognizeTextResponse$ === "object");
assert(typeof RecognizeUtteranceRequest$ === "object");
assert(typeof RecognizeUtteranceResponse$ === "object");
assert(typeof RuntimeHintDetails$ === "object");
assert(typeof RuntimeHints$ === "object");
assert(typeof RuntimeHintValue$ === "object");
assert(typeof SentimentResponse$ === "object");
assert(typeof SentimentScore$ === "object");
assert(typeof SessionState$ === "object");
assert(typeof Slot$ === "object");
assert(typeof StartConversationRequest$ === "object");
assert(typeof StartConversationRequestEventStream$ === "object");
assert(typeof StartConversationResponse$ === "object");
assert(typeof StartConversationResponseEventStream$ === "object");
assert(typeof TextInputEvent$ === "object");
assert(typeof TextResponseEvent$ === "object");
assert(typeof TranscriptEvent$ === "object");
assert(typeof Value$ === "object");
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
assert(AccessDeniedException.prototype instanceof LexRuntimeV2ServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(BadGatewayException.prototype instanceof LexRuntimeV2ServiceException);
assert(typeof BadGatewayException$ === "object");
assert(ConflictException.prototype instanceof LexRuntimeV2ServiceException);
assert(typeof ConflictException$ === "object");
assert(DependencyFailedException.prototype instanceof LexRuntimeV2ServiceException);
assert(typeof DependencyFailedException$ === "object");
assert(InternalServerException.prototype instanceof LexRuntimeV2ServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof LexRuntimeV2ServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ThrottlingException.prototype instanceof LexRuntimeV2ServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof LexRuntimeV2ServiceException);
assert(typeof ValidationException$ === "object");
assert(LexRuntimeV2ServiceException.prototype instanceof Error);
console.log(`LexRuntimeV2 index test passed.`);
