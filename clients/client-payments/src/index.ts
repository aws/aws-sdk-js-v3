// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>Amazon Web Services Payments manages how money moves between you and Amazon Web Services. It holds the payment instruments you use to pay Amazon Web Services and to receive money from Amazon Web Services, such as cards and bank accounts. It collects payment for your Amazon Web Services invoices, applies your payments and credit memos to them, and returns refunds.</p> <p>A payment instrument is a channel that moves money between you and Amazon Web Services, and its payment method is the kind of instrument, such as a card or a bank account. A financial record is an invoice or credit memo. It shows how much of its amount is outstanding, processing, settled, and canceled as Amazon Web Services applies payments and credits.</p> <p>With the Amazon Web Services Payments API, you can read your financial records and account balances, and read your payment instruments and their status.</p> <p>The Amazon Web Services Payments API provides the following endpoint:</p> <p> <code>https://payments.us-east-1.api.aws</code> </p>
 *
 * @packageDocumentation
 */
export * from "./PaymentsClient";
export * from "./Payments";
export type { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { PaymentsExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export { Command as $Command } from "@smithy/core/client";
export * from "./pagination";
export * from "./schemas/schemas_0";

export * from "./models/enums";
export * from "./models/errors";
export * from "./models/models_0";

export { PaymentsServiceException } from "./models/PaymentsServiceException";
