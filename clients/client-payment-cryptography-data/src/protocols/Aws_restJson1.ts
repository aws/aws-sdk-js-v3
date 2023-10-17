// smithy-typescript generated code
import { awsExpectUnion as __expectUnion } from "@aws-sdk/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  map,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { DecryptDataCommandInput, DecryptDataCommandOutput } from "../commands/DecryptDataCommand";
import { EncryptDataCommandInput, EncryptDataCommandOutput } from "../commands/EncryptDataCommand";
import {
  GenerateCardValidationDataCommandInput,
  GenerateCardValidationDataCommandOutput,
} from "../commands/GenerateCardValidationDataCommand";
import { GenerateMacCommandInput, GenerateMacCommandOutput } from "../commands/GenerateMacCommand";
import { GeneratePinDataCommandInput, GeneratePinDataCommandOutput } from "../commands/GeneratePinDataCommand";
import { ReEncryptDataCommandInput, ReEncryptDataCommandOutput } from "../commands/ReEncryptDataCommand";
import { TranslatePinDataCommandInput, TranslatePinDataCommandOutput } from "../commands/TranslatePinDataCommand";
import {
  VerifyAuthRequestCryptogramCommandInput,
  VerifyAuthRequestCryptogramCommandOutput,
} from "../commands/VerifyAuthRequestCryptogramCommand";
import {
  VerifyCardValidationDataCommandInput,
  VerifyCardValidationDataCommandOutput,
} from "../commands/VerifyCardValidationDataCommand";
import { VerifyMacCommandInput, VerifyMacCommandOutput } from "../commands/VerifyMacCommand";
import { VerifyPinDataCommandInput, VerifyPinDataCommandOutput } from "../commands/VerifyPinDataCommand";
import {
  AccessDeniedException,
  AmexCardSecurityCodeVersion1,
  AmexCardSecurityCodeVersion2,
  AsymmetricEncryptionAttributes,
  CardGenerationAttributes,
  CardHolderVerificationValue,
  CardVerificationAttributes,
  CardVerificationValue1,
  CardVerificationValue2,
  CryptogramAuthResponse,
  CryptogramVerificationArpcMethod1,
  CryptogramVerificationArpcMethod2,
  DiscoverDynamicCardVerificationCode,
  DukptAttributes,
  DukptDerivationAttributes,
  DukptEncryptionAttributes,
  DynamicCardVerificationCode,
  DynamicCardVerificationValue,
  EncryptionDecryptionAttributes,
  Ibm3624NaturalPin,
  Ibm3624PinFromOffset,
  Ibm3624PinOffset,
  Ibm3624PinVerification,
  Ibm3624RandomPin,
  InternalServerException,
  MacAlgorithmDukpt,
  MacAlgorithmEmv,
  MacAttributes,
  PinGenerationAttributes,
  PinVerificationAttributes,
  ReEncryptionAttributes,
  ResourceNotFoundException,
  SessionKeyAmex,
  SessionKeyDerivation,
  SessionKeyDerivationValue,
  SessionKeyEmv2000,
  SessionKeyEmvCommon,
  SessionKeyMastercard,
  SessionKeyVisa,
  SymmetricEncryptionAttributes,
  ThrottlingException,
  TranslationIsoFormats,
  TranslationPinDataIsoFormat1,
  TranslationPinDataIsoFormat034,
  ValidationException,
  VerificationFailedException,
  VisaPin,
  VisaPinVerification,
  VisaPinVerificationValue,
} from "../models/models_0";
import { PaymentCryptographyDataServiceException as __BaseException } from "../models/PaymentCryptographyDataServiceException";

/**
 * serializeAws_restJson1DecryptDataCommand
 */
export const se_DecryptDataCommand = async (
  input: DecryptDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/keys/{KeyIdentifier}/decrypt";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "KeyIdentifier",
    () => input.KeyIdentifier!,
    "{KeyIdentifier}",
    false
  );
  let body: any;
  body = JSON.stringify(
    take(input, {
      CipherText: [],
      DecryptionAttributes: (_) => _json(_),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1EncryptDataCommand
 */
export const se_EncryptDataCommand = async (
  input: EncryptDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/keys/{KeyIdentifier}/encrypt";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "KeyIdentifier",
    () => input.KeyIdentifier!,
    "{KeyIdentifier}",
    false
  );
  let body: any;
  body = JSON.stringify(
    take(input, {
      EncryptionAttributes: (_) => _json(_),
      PlainText: [],
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GenerateCardValidationDataCommand
 */
export const se_GenerateCardValidationDataCommand = async (
  input: GenerateCardValidationDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/cardvalidationdata/generate";
  let body: any;
  body = JSON.stringify(
    take(input, {
      GenerationAttributes: (_) => _json(_),
      KeyIdentifier: [],
      PrimaryAccountNumber: [],
      ValidationDataLength: [],
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GenerateMacCommand
 */
export const se_GenerateMacCommand = async (
  input: GenerateMacCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/mac/generate";
  let body: any;
  body = JSON.stringify(
    take(input, {
      GenerationAttributes: (_) => _json(_),
      KeyIdentifier: [],
      MacLength: [],
      MessageData: [],
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GeneratePinDataCommand
 */
export const se_GeneratePinDataCommand = async (
  input: GeneratePinDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/pindata/generate";
  let body: any;
  body = JSON.stringify(
    take(input, {
      EncryptionKeyIdentifier: [],
      GenerationAttributes: (_) => _json(_),
      GenerationKeyIdentifier: [],
      PinBlockFormat: [],
      PinDataLength: [],
      PrimaryAccountNumber: [],
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ReEncryptDataCommand
 */
export const se_ReEncryptDataCommand = async (
  input: ReEncryptDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/keys/{IncomingKeyIdentifier}/reencrypt";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "IncomingKeyIdentifier",
    () => input.IncomingKeyIdentifier!,
    "{IncomingKeyIdentifier}",
    false
  );
  let body: any;
  body = JSON.stringify(
    take(input, {
      CipherText: [],
      IncomingEncryptionAttributes: (_) => _json(_),
      OutgoingEncryptionAttributes: (_) => _json(_),
      OutgoingKeyIdentifier: [],
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1TranslatePinDataCommand
 */
export const se_TranslatePinDataCommand = async (
  input: TranslatePinDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/pindata/translate";
  let body: any;
  body = JSON.stringify(
    take(input, {
      EncryptedPinBlock: [],
      IncomingDukptAttributes: (_) => _json(_),
      IncomingKeyIdentifier: [],
      IncomingTranslationAttributes: (_) => _json(_),
      OutgoingDukptAttributes: (_) => _json(_),
      OutgoingKeyIdentifier: [],
      OutgoingTranslationAttributes: (_) => _json(_),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1VerifyAuthRequestCryptogramCommand
 */
export const se_VerifyAuthRequestCryptogramCommand = async (
  input: VerifyAuthRequestCryptogramCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/cryptogram/verify";
  let body: any;
  body = JSON.stringify(
    take(input, {
      AuthRequestCryptogram: [],
      AuthResponseAttributes: (_) => _json(_),
      KeyIdentifier: [],
      MajorKeyDerivationMode: [],
      SessionKeyDerivationAttributes: (_) => _json(_),
      TransactionData: [],
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1VerifyCardValidationDataCommand
 */
export const se_VerifyCardValidationDataCommand = async (
  input: VerifyCardValidationDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/cardvalidationdata/verify";
  let body: any;
  body = JSON.stringify(
    take(input, {
      KeyIdentifier: [],
      PrimaryAccountNumber: [],
      ValidationData: [],
      VerificationAttributes: (_) => _json(_),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1VerifyMacCommand
 */
export const se_VerifyMacCommand = async (
  input: VerifyMacCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/mac/verify";
  let body: any;
  body = JSON.stringify(
    take(input, {
      KeyIdentifier: [],
      Mac: [],
      MacLength: [],
      MessageData: [],
      VerificationAttributes: (_) => _json(_),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1VerifyPinDataCommand
 */
export const se_VerifyPinDataCommand = async (
  input: VerifyPinDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/pindata/verify";
  let body: any;
  body = JSON.stringify(
    take(input, {
      DukptAttributes: (_) => _json(_),
      EncryptedPinBlock: [],
      EncryptionKeyIdentifier: [],
      PinBlockFormat: [],
      PinDataLength: [],
      PrimaryAccountNumber: [],
      VerificationAttributes: (_) => _json(_),
      VerificationKeyIdentifier: [],
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * deserializeAws_restJson1DecryptDataCommand
 */
export const de_DecryptDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DecryptDataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DecryptDataCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    KeyArn: __expectString,
    KeyCheckValue: __expectString,
    PlainText: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DecryptDataCommandError
 */
const de_DecryptDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DecryptDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.paymentcryptographydata#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.paymentcryptographydata#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.paymentcryptographydata#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.paymentcryptographydata#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.paymentcryptographydata#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1EncryptDataCommand
 */
export const de_EncryptDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EncryptDataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_EncryptDataCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CipherText: __expectString,
    KeyArn: __expectString,
    KeyCheckValue: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1EncryptDataCommandError
 */
const de_EncryptDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EncryptDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.paymentcryptographydata#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.paymentcryptographydata#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.paymentcryptographydata#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.paymentcryptographydata#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.paymentcryptographydata#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GenerateCardValidationDataCommand
 */
export const de_GenerateCardValidationDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateCardValidationDataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GenerateCardValidationDataCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    KeyArn: __expectString,
    KeyCheckValue: __expectString,
    ValidationData: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GenerateCardValidationDataCommandError
 */
const de_GenerateCardValidationDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateCardValidationDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.paymentcryptographydata#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.paymentcryptographydata#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.paymentcryptographydata#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.paymentcryptographydata#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.paymentcryptographydata#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GenerateMacCommand
 */
export const de_GenerateMacCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateMacCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GenerateMacCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    KeyArn: __expectString,
    KeyCheckValue: __expectString,
    Mac: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GenerateMacCommandError
 */
const de_GenerateMacCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateMacCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.paymentcryptographydata#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.paymentcryptographydata#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.paymentcryptographydata#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.paymentcryptographydata#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.paymentcryptographydata#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GeneratePinDataCommand
 */
export const de_GeneratePinDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GeneratePinDataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GeneratePinDataCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    EncryptedPinBlock: __expectString,
    EncryptionKeyArn: __expectString,
    EncryptionKeyCheckValue: __expectString,
    GenerationKeyArn: __expectString,
    GenerationKeyCheckValue: __expectString,
    PinData: (_) => _json(__expectUnion(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GeneratePinDataCommandError
 */
const de_GeneratePinDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GeneratePinDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.paymentcryptographydata#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.paymentcryptographydata#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.paymentcryptographydata#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.paymentcryptographydata#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.paymentcryptographydata#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ReEncryptDataCommand
 */
export const de_ReEncryptDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReEncryptDataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ReEncryptDataCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CipherText: __expectString,
    KeyArn: __expectString,
    KeyCheckValue: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ReEncryptDataCommandError
 */
const de_ReEncryptDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReEncryptDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.paymentcryptographydata#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.paymentcryptographydata#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.paymentcryptographydata#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.paymentcryptographydata#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.paymentcryptographydata#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1TranslatePinDataCommand
 */
export const de_TranslatePinDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TranslatePinDataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_TranslatePinDataCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    KeyArn: __expectString,
    KeyCheckValue: __expectString,
    PinBlock: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1TranslatePinDataCommandError
 */
const de_TranslatePinDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TranslatePinDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.paymentcryptographydata#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.paymentcryptographydata#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.paymentcryptographydata#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.paymentcryptographydata#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.paymentcryptographydata#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1VerifyAuthRequestCryptogramCommand
 */
export const de_VerifyAuthRequestCryptogramCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifyAuthRequestCryptogramCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_VerifyAuthRequestCryptogramCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AuthResponseValue: __expectString,
    KeyArn: __expectString,
    KeyCheckValue: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1VerifyAuthRequestCryptogramCommandError
 */
const de_VerifyAuthRequestCryptogramCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifyAuthRequestCryptogramCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.paymentcryptographydata#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.paymentcryptographydata#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.paymentcryptographydata#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.paymentcryptographydata#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.paymentcryptographydata#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "VerificationFailedException":
    case "com.amazonaws.paymentcryptographydata#VerificationFailedException":
      throw await de_VerificationFailedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1VerifyCardValidationDataCommand
 */
export const de_VerifyCardValidationDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifyCardValidationDataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_VerifyCardValidationDataCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    KeyArn: __expectString,
    KeyCheckValue: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1VerifyCardValidationDataCommandError
 */
const de_VerifyCardValidationDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifyCardValidationDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.paymentcryptographydata#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.paymentcryptographydata#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.paymentcryptographydata#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.paymentcryptographydata#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.paymentcryptographydata#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "VerificationFailedException":
    case "com.amazonaws.paymentcryptographydata#VerificationFailedException":
      throw await de_VerificationFailedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1VerifyMacCommand
 */
export const de_VerifyMacCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifyMacCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_VerifyMacCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    KeyArn: __expectString,
    KeyCheckValue: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1VerifyMacCommandError
 */
const de_VerifyMacCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifyMacCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.paymentcryptographydata#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.paymentcryptographydata#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.paymentcryptographydata#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.paymentcryptographydata#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.paymentcryptographydata#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "VerificationFailedException":
    case "com.amazonaws.paymentcryptographydata#VerificationFailedException":
      throw await de_VerificationFailedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1VerifyPinDataCommand
 */
export const de_VerifyPinDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifyPinDataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_VerifyPinDataCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    EncryptionKeyArn: __expectString,
    EncryptionKeyCheckValue: __expectString,
    VerificationKeyArn: __expectString,
    VerificationKeyCheckValue: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1VerifyPinDataCommandError
 */
const de_VerifyPinDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifyPinDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.paymentcryptographydata#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.paymentcryptographydata#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.paymentcryptographydata#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.paymentcryptographydata#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.paymentcryptographydata#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "VerificationFailedException":
    case "com.amazonaws.paymentcryptographydata#VerificationFailedException":
      throw await de_VerificationFailedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    ResourceId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    fieldList: _json,
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1VerificationFailedExceptionRes
 */
const de_VerificationFailedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<VerificationFailedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
    Reason: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new VerificationFailedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_AmexCardSecurityCodeVersion1 omitted.

// se_AmexCardSecurityCodeVersion2 omitted.

// se_AsymmetricEncryptionAttributes omitted.

// se_CardGenerationAttributes omitted.

// se_CardHolderVerificationValue omitted.

// se_CardVerificationAttributes omitted.

// se_CardVerificationValue1 omitted.

// se_CardVerificationValue2 omitted.

// se_CryptogramAuthResponse omitted.

// se_CryptogramVerificationArpcMethod1 omitted.

// se_CryptogramVerificationArpcMethod2 omitted.

// se_DiscoverDynamicCardVerificationCode omitted.

// se_DukptAttributes omitted.

// se_DukptDerivationAttributes omitted.

// se_DukptEncryptionAttributes omitted.

// se_DynamicCardVerificationCode omitted.

// se_DynamicCardVerificationValue omitted.

// se_EncryptionDecryptionAttributes omitted.

// se_Ibm3624NaturalPin omitted.

// se_Ibm3624PinFromOffset omitted.

// se_Ibm3624PinOffset omitted.

// se_Ibm3624PinVerification omitted.

// se_Ibm3624RandomPin omitted.

// se_MacAlgorithmDukpt omitted.

// se_MacAlgorithmEmv omitted.

// se_MacAttributes omitted.

// se_PinGenerationAttributes omitted.

// se_PinVerificationAttributes omitted.

// se_ReEncryptionAttributes omitted.

// se_SessionKeyAmex omitted.

// se_SessionKeyDerivation omitted.

// se_SessionKeyDerivationValue omitted.

// se_SessionKeyEmv2000 omitted.

// se_SessionKeyEmvCommon omitted.

// se_SessionKeyMastercard omitted.

// se_SessionKeyVisa omitted.

// se_SymmetricEncryptionAttributes omitted.

// se_TranslationIsoFormats omitted.

// se_TranslationPinDataIsoFormat034 omitted.

// se_TranslationPinDataIsoFormat1 omitted.

// se_VisaPin omitted.

// se_VisaPinVerification omitted.

// se_VisaPinVerificationValue omitted.

// de_PinData omitted.

// de_ValidationExceptionField omitted.

// de_ValidationExceptionFieldList omitted.

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }
};
