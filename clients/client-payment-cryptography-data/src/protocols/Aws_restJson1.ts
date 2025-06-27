// smithy-typescript generated code
import {
  awsExpectUnion as __expectUnion,
  loadRestJsonErrorCode,
  parseJsonBody as parseBody,
  parseJsonErrorBody as parseErrorBody,
} from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
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
import {
  GenerateMacEmvPinChangeCommandInput,
  GenerateMacEmvPinChangeCommandOutput,
} from "../commands/GenerateMacEmvPinChangeCommand";
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
  AmexAttributes,
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
  CurrentPinAttributes,
  DerivationMethodAttributes,
  DiscoverDynamicCardVerificationCode,
  DukptAttributes,
  DukptDerivationAttributes,
  DukptEncryptionAttributes,
  DynamicCardVerificationCode,
  DynamicCardVerificationValue,
  EcdhDerivationAttributes,
  Emv2000Attributes,
  EmvCommonAttributes,
  EmvEncryptionAttributes,
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
  MasterCardAttributes,
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
  VisaAttributes,
  VisaPin,
  VisaPinVerification,
  VisaPinVerificationValue,
  WrappedKey,
  WrappedKeyMaterial,
} from "../models/models_0";
import { PaymentCryptographyDataServiceException as __BaseException } from "../models/PaymentCryptographyDataServiceException";

/**
 * serializeAws_restJson1DecryptDataCommand
 */
export const se_DecryptDataCommand = async (
  input: DecryptDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/keys/{KeyIdentifier}/decrypt");
  b.p("KeyIdentifier", () => input.KeyIdentifier!, "{KeyIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      CipherText: [],
      DecryptionAttributes: (_) => _json(_),
      WrappedKey: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1EncryptDataCommand
 */
export const se_EncryptDataCommand = async (
  input: EncryptDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/keys/{KeyIdentifier}/encrypt");
  b.p("KeyIdentifier", () => input.KeyIdentifier!, "{KeyIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      EncryptionAttributes: (_) => _json(_),
      PlainText: [],
      WrappedKey: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GenerateCardValidationDataCommand
 */
export const se_GenerateCardValidationDataCommand = async (
  input: GenerateCardValidationDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/cardvalidationdata/generate");
  let body: any;
  body = JSON.stringify(
    take(input, {
      GenerationAttributes: (_) => _json(_),
      KeyIdentifier: [],
      PrimaryAccountNumber: [],
      ValidationDataLength: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GenerateMacCommand
 */
export const se_GenerateMacCommand = async (
  input: GenerateMacCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/mac/generate");
  let body: any;
  body = JSON.stringify(
    take(input, {
      GenerationAttributes: (_) => _json(_),
      KeyIdentifier: [],
      MacLength: [],
      MessageData: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GenerateMacEmvPinChangeCommand
 */
export const se_GenerateMacEmvPinChangeCommand = async (
  input: GenerateMacEmvPinChangeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/macemvpinchange/generate");
  let body: any;
  body = JSON.stringify(
    take(input, {
      DerivationMethodAttributes: (_) => _json(_),
      MessageData: [],
      NewEncryptedPinBlock: [],
      NewPinPekIdentifier: [],
      PinBlockFormat: [],
      SecureMessagingConfidentialityKeyIdentifier: [],
      SecureMessagingIntegrityKeyIdentifier: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GeneratePinDataCommand
 */
export const se_GeneratePinDataCommand = async (
  input: GeneratePinDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/pindata/generate");
  let body: any;
  body = JSON.stringify(
    take(input, {
      EncryptionKeyIdentifier: [],
      EncryptionWrappedKey: (_) => _json(_),
      GenerationAttributes: (_) => _json(_),
      GenerationKeyIdentifier: [],
      PinBlockFormat: [],
      PinDataLength: [],
      PrimaryAccountNumber: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ReEncryptDataCommand
 */
export const se_ReEncryptDataCommand = async (
  input: ReEncryptDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/keys/{IncomingKeyIdentifier}/reencrypt");
  b.p("IncomingKeyIdentifier", () => input.IncomingKeyIdentifier!, "{IncomingKeyIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      CipherText: [],
      IncomingEncryptionAttributes: (_) => _json(_),
      IncomingWrappedKey: (_) => _json(_),
      OutgoingEncryptionAttributes: (_) => _json(_),
      OutgoingKeyIdentifier: [],
      OutgoingWrappedKey: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TranslatePinDataCommand
 */
export const se_TranslatePinDataCommand = async (
  input: TranslatePinDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/pindata/translate");
  let body: any;
  body = JSON.stringify(
    take(input, {
      EncryptedPinBlock: [],
      IncomingDukptAttributes: (_) => _json(_),
      IncomingKeyIdentifier: [],
      IncomingTranslationAttributes: (_) => _json(_),
      IncomingWrappedKey: (_) => _json(_),
      OutgoingDukptAttributes: (_) => _json(_),
      OutgoingKeyIdentifier: [],
      OutgoingTranslationAttributes: (_) => _json(_),
      OutgoingWrappedKey: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1VerifyAuthRequestCryptogramCommand
 */
export const se_VerifyAuthRequestCryptogramCommand = async (
  input: VerifyAuthRequestCryptogramCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/cryptogram/verify");
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
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1VerifyCardValidationDataCommand
 */
export const se_VerifyCardValidationDataCommand = async (
  input: VerifyCardValidationDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/cardvalidationdata/verify");
  let body: any;
  body = JSON.stringify(
    take(input, {
      KeyIdentifier: [],
      PrimaryAccountNumber: [],
      ValidationData: [],
      VerificationAttributes: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1VerifyMacCommand
 */
export const se_VerifyMacCommand = async (
  input: VerifyMacCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/mac/verify");
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
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1VerifyPinDataCommand
 */
export const se_VerifyPinDataCommand = async (
  input: VerifyPinDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/pindata/verify");
  let body: any;
  body = JSON.stringify(
    take(input, {
      DukptAttributes: (_) => _json(_),
      EncryptedPinBlock: [],
      EncryptionKeyIdentifier: [],
      EncryptionWrappedKey: (_) => _json(_),
      PinBlockFormat: [],
      PinDataLength: [],
      PrimaryAccountNumber: [],
      VerificationAttributes: (_) => _json(_),
      VerificationKeyIdentifier: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1DecryptDataCommand
 */
export const de_DecryptDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DecryptDataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1EncryptDataCommand
 */
export const de_EncryptDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EncryptDataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GenerateCardValidationDataCommand
 */
export const de_GenerateCardValidationDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateCardValidationDataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GenerateMacCommand
 */
export const de_GenerateMacCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateMacCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GenerateMacEmvPinChangeCommand
 */
export const de_GenerateMacEmvPinChangeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateMacEmvPinChangeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    EncryptedPinBlock: __expectString,
    Mac: __expectString,
    NewPinPekArn: __expectString,
    NewPinPekKeyCheckValue: __expectString,
    SecureMessagingConfidentialityKeyArn: __expectString,
    SecureMessagingConfidentialityKeyCheckValue: __expectString,
    SecureMessagingIntegrityKeyArn: __expectString,
    SecureMessagingIntegrityKeyCheckValue: __expectString,
    VisaAmexDerivationOutputs: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GeneratePinDataCommand
 */
export const de_GeneratePinDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GeneratePinDataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1ReEncryptDataCommand
 */
export const de_ReEncryptDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReEncryptDataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1TranslatePinDataCommand
 */
export const de_TranslatePinDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TranslatePinDataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1VerifyAuthRequestCryptogramCommand
 */
export const de_VerifyAuthRequestCryptogramCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifyAuthRequestCryptogramCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1VerifyCardValidationDataCommand
 */
export const de_VerifyCardValidationDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifyCardValidationDataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1VerifyMacCommand
 */
export const de_VerifyMacCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifyMacCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1VerifyPinDataCommand
 */
export const de_VerifyPinDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<VerifyPinDataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
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
      }) as never;
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

// se_AmexAttributes omitted.

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

// se_CurrentPinAttributes omitted.

// se_DerivationMethodAttributes omitted.

// se_DiscoverDynamicCardVerificationCode omitted.

// se_DukptAttributes omitted.

// se_DukptDerivationAttributes omitted.

// se_DukptEncryptionAttributes omitted.

// se_DynamicCardVerificationCode omitted.

// se_DynamicCardVerificationValue omitted.

// se_EcdhDerivationAttributes omitted.

// se_Emv2000Attributes omitted.

// se_EmvCommonAttributes omitted.

// se_EmvEncryptionAttributes omitted.

// se_EncryptionDecryptionAttributes omitted.

// se_Ibm3624NaturalPin omitted.

// se_Ibm3624PinFromOffset omitted.

// se_Ibm3624PinOffset omitted.

// se_Ibm3624PinVerification omitted.

// se_Ibm3624RandomPin omitted.

// se_MacAlgorithmDukpt omitted.

// se_MacAlgorithmEmv omitted.

// se_MacAttributes omitted.

// se_MasterCardAttributes omitted.

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

// se_VisaAttributes omitted.

// se_VisaPin omitted.

// se_VisaPinVerification omitted.

// se_VisaPinVerificationValue omitted.

// se_WrappedKey omitted.

// se_WrappedKeyMaterial omitted.

// de_PinData omitted.

// de_ValidationExceptionField omitted.

// de_ValidationExceptionFieldList omitted.

// de_VisaAmexDerivationOutputs omitted.

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
