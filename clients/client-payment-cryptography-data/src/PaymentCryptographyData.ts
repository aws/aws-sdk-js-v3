// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  type DecryptDataCommandInput,
  type DecryptDataCommandOutput,
  DecryptDataCommand,
} from "./commands/DecryptDataCommand";
import {
  type EncryptDataCommandInput,
  type EncryptDataCommandOutput,
  EncryptDataCommand,
} from "./commands/EncryptDataCommand";
import {
  type GenerateAs2805KekValidationCommandInput,
  type GenerateAs2805KekValidationCommandOutput,
  GenerateAs2805KekValidationCommand,
} from "./commands/GenerateAs2805KekValidationCommand";
import {
  type GenerateCardValidationDataCommandInput,
  type GenerateCardValidationDataCommandOutput,
  GenerateCardValidationDataCommand,
} from "./commands/GenerateCardValidationDataCommand";
import {
  type GenerateMacCommandInput,
  type GenerateMacCommandOutput,
  GenerateMacCommand,
} from "./commands/GenerateMacCommand";
import {
  type GenerateMacEmvPinChangeCommandInput,
  type GenerateMacEmvPinChangeCommandOutput,
  GenerateMacEmvPinChangeCommand,
} from "./commands/GenerateMacEmvPinChangeCommand";
import {
  type GeneratePinDataCommandInput,
  type GeneratePinDataCommandOutput,
  GeneratePinDataCommand,
} from "./commands/GeneratePinDataCommand";
import {
  type ReEncryptDataCommandInput,
  type ReEncryptDataCommandOutput,
  ReEncryptDataCommand,
} from "./commands/ReEncryptDataCommand";
import {
  type TranslateKeyMaterialCommandInput,
  type TranslateKeyMaterialCommandOutput,
  TranslateKeyMaterialCommand,
} from "./commands/TranslateKeyMaterialCommand";
import {
  type TranslatePinDataCommandInput,
  type TranslatePinDataCommandOutput,
  TranslatePinDataCommand,
} from "./commands/TranslatePinDataCommand";
import {
  type VerifyAuthRequestCryptogramCommandInput,
  type VerifyAuthRequestCryptogramCommandOutput,
  VerifyAuthRequestCryptogramCommand,
} from "./commands/VerifyAuthRequestCryptogramCommand";
import {
  type VerifyCardValidationDataCommandInput,
  type VerifyCardValidationDataCommandOutput,
  VerifyCardValidationDataCommand,
} from "./commands/VerifyCardValidationDataCommand";
import { type VerifyMacCommandInput, type VerifyMacCommandOutput, VerifyMacCommand } from "./commands/VerifyMacCommand";
import {
  type VerifyPinDataCommandInput,
  type VerifyPinDataCommandOutput,
  VerifyPinDataCommand,
} from "./commands/VerifyPinDataCommand";
import { PaymentCryptographyDataClient } from "./PaymentCryptographyDataClient";

const commands = {
  DecryptDataCommand,
  EncryptDataCommand,
  GenerateAs2805KekValidationCommand,
  GenerateCardValidationDataCommand,
  GenerateMacCommand,
  GenerateMacEmvPinChangeCommand,
  GeneratePinDataCommand,
  ReEncryptDataCommand,
  TranslateKeyMaterialCommand,
  TranslatePinDataCommand,
  VerifyAuthRequestCryptogramCommand,
  VerifyCardValidationDataCommand,
  VerifyMacCommand,
  VerifyPinDataCommand,
};

export interface PaymentCryptographyData {
  /**
   * @see {@link DecryptDataCommand}
   */
  decryptData(
    args: DecryptDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DecryptDataCommandOutput>;
  decryptData(
    args: DecryptDataCommandInput,
    cb: (err: any, data?: DecryptDataCommandOutput) => void
  ): void;
  decryptData(
    args: DecryptDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DecryptDataCommandOutput) => void
  ): void;

  /**
   * @see {@link EncryptDataCommand}
   */
  encryptData(
    args: EncryptDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EncryptDataCommandOutput>;
  encryptData(
    args: EncryptDataCommandInput,
    cb: (err: any, data?: EncryptDataCommandOutput) => void
  ): void;
  encryptData(
    args: EncryptDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EncryptDataCommandOutput) => void
  ): void;

  /**
   * @see {@link GenerateAs2805KekValidationCommand}
   */
  generateAs2805KekValidation(
    args: GenerateAs2805KekValidationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GenerateAs2805KekValidationCommandOutput>;
  generateAs2805KekValidation(
    args: GenerateAs2805KekValidationCommandInput,
    cb: (err: any, data?: GenerateAs2805KekValidationCommandOutput) => void
  ): void;
  generateAs2805KekValidation(
    args: GenerateAs2805KekValidationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GenerateAs2805KekValidationCommandOutput) => void
  ): void;

  /**
   * @see {@link GenerateCardValidationDataCommand}
   */
  generateCardValidationData(
    args: GenerateCardValidationDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GenerateCardValidationDataCommandOutput>;
  generateCardValidationData(
    args: GenerateCardValidationDataCommandInput,
    cb: (err: any, data?: GenerateCardValidationDataCommandOutput) => void
  ): void;
  generateCardValidationData(
    args: GenerateCardValidationDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GenerateCardValidationDataCommandOutput) => void
  ): void;

  /**
   * @see {@link GenerateMacCommand}
   */
  generateMac(
    args: GenerateMacCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GenerateMacCommandOutput>;
  generateMac(
    args: GenerateMacCommandInput,
    cb: (err: any, data?: GenerateMacCommandOutput) => void
  ): void;
  generateMac(
    args: GenerateMacCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GenerateMacCommandOutput) => void
  ): void;

  /**
   * @see {@link GenerateMacEmvPinChangeCommand}
   */
  generateMacEmvPinChange(
    args: GenerateMacEmvPinChangeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GenerateMacEmvPinChangeCommandOutput>;
  generateMacEmvPinChange(
    args: GenerateMacEmvPinChangeCommandInput,
    cb: (err: any, data?: GenerateMacEmvPinChangeCommandOutput) => void
  ): void;
  generateMacEmvPinChange(
    args: GenerateMacEmvPinChangeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GenerateMacEmvPinChangeCommandOutput) => void
  ): void;

  /**
   * @see {@link GeneratePinDataCommand}
   */
  generatePinData(
    args: GeneratePinDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GeneratePinDataCommandOutput>;
  generatePinData(
    args: GeneratePinDataCommandInput,
    cb: (err: any, data?: GeneratePinDataCommandOutput) => void
  ): void;
  generatePinData(
    args: GeneratePinDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GeneratePinDataCommandOutput) => void
  ): void;

  /**
   * @see {@link ReEncryptDataCommand}
   */
  reEncryptData(
    args: ReEncryptDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ReEncryptDataCommandOutput>;
  reEncryptData(
    args: ReEncryptDataCommandInput,
    cb: (err: any, data?: ReEncryptDataCommandOutput) => void
  ): void;
  reEncryptData(
    args: ReEncryptDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReEncryptDataCommandOutput) => void
  ): void;

  /**
   * @see {@link TranslateKeyMaterialCommand}
   */
  translateKeyMaterial(
    args: TranslateKeyMaterialCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TranslateKeyMaterialCommandOutput>;
  translateKeyMaterial(
    args: TranslateKeyMaterialCommandInput,
    cb: (err: any, data?: TranslateKeyMaterialCommandOutput) => void
  ): void;
  translateKeyMaterial(
    args: TranslateKeyMaterialCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TranslateKeyMaterialCommandOutput) => void
  ): void;

  /**
   * @see {@link TranslatePinDataCommand}
   */
  translatePinData(
    args: TranslatePinDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TranslatePinDataCommandOutput>;
  translatePinData(
    args: TranslatePinDataCommandInput,
    cb: (err: any, data?: TranslatePinDataCommandOutput) => void
  ): void;
  translatePinData(
    args: TranslatePinDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TranslatePinDataCommandOutput) => void
  ): void;

  /**
   * @see {@link VerifyAuthRequestCryptogramCommand}
   */
  verifyAuthRequestCryptogram(
    args: VerifyAuthRequestCryptogramCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<VerifyAuthRequestCryptogramCommandOutput>;
  verifyAuthRequestCryptogram(
    args: VerifyAuthRequestCryptogramCommandInput,
    cb: (err: any, data?: VerifyAuthRequestCryptogramCommandOutput) => void
  ): void;
  verifyAuthRequestCryptogram(
    args: VerifyAuthRequestCryptogramCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: VerifyAuthRequestCryptogramCommandOutput) => void
  ): void;

  /**
   * @see {@link VerifyCardValidationDataCommand}
   */
  verifyCardValidationData(
    args: VerifyCardValidationDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<VerifyCardValidationDataCommandOutput>;
  verifyCardValidationData(
    args: VerifyCardValidationDataCommandInput,
    cb: (err: any, data?: VerifyCardValidationDataCommandOutput) => void
  ): void;
  verifyCardValidationData(
    args: VerifyCardValidationDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: VerifyCardValidationDataCommandOutput) => void
  ): void;

  /**
   * @see {@link VerifyMacCommand}
   */
  verifyMac(
    args: VerifyMacCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<VerifyMacCommandOutput>;
  verifyMac(
    args: VerifyMacCommandInput,
    cb: (err: any, data?: VerifyMacCommandOutput) => void
  ): void;
  verifyMac(
    args: VerifyMacCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: VerifyMacCommandOutput) => void
  ): void;

  /**
   * @see {@link VerifyPinDataCommand}
   */
  verifyPinData(
    args: VerifyPinDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<VerifyPinDataCommandOutput>;
  verifyPinData(
    args: VerifyPinDataCommandInput,
    cb: (err: any, data?: VerifyPinDataCommandOutput) => void
  ): void;
  verifyPinData(
    args: VerifyPinDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: VerifyPinDataCommandOutput) => void
  ): void;
}

/**
 * <p>You use the Amazon Web Services Payment Cryptography Data Plane to manage how encryption keys are used for payment-related transaction processing and associated cryptographic operations. You can encrypt, decrypt, generate, verify, and translate payment-related cryptographic operations in Amazon Web Services Payment Cryptography. For more information, see <a href="https://docs.aws.amazon.com/payment-cryptography/latest/userguide/data-operations.html">Data operations</a> in the <i>Amazon Web Services Payment Cryptography User Guide</i>.</p> <p>To manage your encryption keys, you use the <a href="https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/Welcome.html">Amazon Web Services Payment Cryptography Control Plane</a>. You can create, import, export, share, manage, and delete keys. You can also manage Identity and Access Management (IAM) policies for keys. </p>
 * @public
 */
export class PaymentCryptographyData extends PaymentCryptographyDataClient implements PaymentCryptographyData {}
createAggregatedClient(commands, PaymentCryptographyData);
