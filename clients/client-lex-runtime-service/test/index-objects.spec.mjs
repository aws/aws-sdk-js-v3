import {
  ConfirmationStatus,
  ContentType,
  DeleteSessionCommand,
  DialogActionType,
  DialogState,
  FulfillmentState,
  GetSessionCommand,
  LexRuntimeService,
  LexRuntimeServiceClient,
  LexRuntimeServiceServiceException,
  MessageFormatType,
  PostContentCommand,
  PostTextCommand,
  PutSessionCommand,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof LexRuntimeServiceClient === "function");
assert(typeof LexRuntimeService === "function");
// commands
assert(typeof DeleteSessionCommand === "function");
assert(typeof GetSessionCommand === "function");
assert(typeof PostContentCommand === "function");
assert(typeof PostTextCommand === "function");
assert(typeof PutSessionCommand === "function");
// enums
assert(typeof ConfirmationStatus === "object");
assert(typeof ContentType === "object");
assert(typeof DialogActionType === "object");
assert(typeof DialogState === "object");
assert(typeof FulfillmentState === "object");
assert(typeof MessageFormatType === "object");
// errors
assert(LexRuntimeServiceServiceException.prototype instanceof Error);
console.log(`LexRuntimeService index test passed.`);
