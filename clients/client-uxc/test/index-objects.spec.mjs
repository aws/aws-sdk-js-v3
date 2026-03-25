import {
  AccessDeniedException,
  AccessDeniedException$,
  AccountColor,
  GetAccountCustomizations$,
  GetAccountCustomizationsCommand,
  GetAccountCustomizationsInput$,
  GetAccountCustomizationsOutput$,
  InternalServerException,
  InternalServerException$,
  ListServices$,
  ListServicesCommand,
  ListServicesInput$,
  ListServicesOutput$,
  paginateListServices,
  ThrottlingException,
  ThrottlingException$,
  UpdateAccountCustomizations$,
  UpdateAccountCustomizationsCommand,
  UpdateAccountCustomizationsInput$,
  UpdateAccountCustomizationsOutput$,
  Uxc,
  UxcClient,
  UxcServiceException,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof UxcClient === "function");
assert(typeof Uxc === "function");
// commands
assert(typeof GetAccountCustomizationsCommand === "function");
assert(typeof GetAccountCustomizations$ === "object");
assert(typeof ListServicesCommand === "function");
assert(typeof ListServices$ === "object");
assert(typeof UpdateAccountCustomizationsCommand === "function");
assert(typeof UpdateAccountCustomizations$ === "object");
// structural schemas
assert(typeof GetAccountCustomizationsInput$ === "object");
assert(typeof GetAccountCustomizationsOutput$ === "object");
assert(typeof ListServicesInput$ === "object");
assert(typeof ListServicesOutput$ === "object");
assert(typeof UpdateAccountCustomizationsInput$ === "object");
assert(typeof UpdateAccountCustomizationsOutput$ === "object");
assert(typeof ValidationExceptionField$ === "object");
// enums
assert(typeof AccountColor === "object");
// errors
assert(AccessDeniedException.prototype instanceof UxcServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(InternalServerException.prototype instanceof UxcServiceException);
assert(typeof InternalServerException$ === "object");
assert(ThrottlingException.prototype instanceof UxcServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof UxcServiceException);
assert(typeof ValidationException$ === "object");
assert(UxcServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListServices === "function");
console.log(`Uxc index test passed.`);
