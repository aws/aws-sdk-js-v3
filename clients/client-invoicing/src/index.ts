// smithy-typescript generated code
/* eslint-disable */
/**
 * <p> <b>Amazon Web Services Invoice Configuration</b> </p> <p>You can use Amazon Web Services Invoice Configuration APIs to programmatically create, update, delete, get, and list invoice units. You can also programmatically fetch the information of the invoice receiver. For example, business legal name, address, and invoicing contacts. </p> <p>You can use Amazon Web Services Invoice Configuration to receive separate Amazon Web Services invoices based your organizational needs. By using Amazon Web Services Invoice Configuration, you can configure invoice units that are groups of Amazon Web Services accounts that represent your business entities, and receive separate invoices for each business entity. You can also assign a unique member or payer account as the invoice receiver for each invoice unit. As you create new accounts within your Organizations using Amazon Web Services Invoice Configuration APIs, you can automate the creation of new invoice units and subsequently automate the addition of new accounts to your invoice units.</p> <p>Service endpoint</p> <p>You can use the following endpoints for Amazon Web Services Invoice Configuration:</p> <ul> <li> <p> <code>https://invoicing.us-east-1.api.aws</code> </p> </li> </ul>
 *
 * @packageDocumentation
 */
export * from "./InvoicingClient";
export * from "./Invoicing";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export type { RuntimeExtension } from "./runtimeExtensions";
export type { InvoicingExtensionConfiguration } from "./extensionConfiguration";
export * from "./commands";
export * from "./pagination";
export * from "./models";

export { InvoicingServiceException } from "./models/InvoicingServiceException";
