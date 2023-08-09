// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>This is the <i>Amazon Web Services Private Certificate Authority API Reference</i>. It provides descriptions,
 * 			syntax, and usage examples for each of the actions and data types involved in creating
 * 			and managing a private certificate authority (CA) for your organization.</p>
 *          <p>The documentation for each action shows the API request parameters and the JSON
 * 			response. Alternatively, you can use one of the Amazon Web Services SDKs to access an API that is
 * 			tailored to the programming language or platform that you prefer. For more information,
 * 			see <a href="https://aws.amazon.com/tools/#SDKs">Amazon Web Services SDKs</a>.</p>
 *          <p>Each Amazon Web Services Private CA API operation has a quota that determines the number of times the
 * 			operation can be called per second. Amazon Web Services Private CA throttles API requests at different rates
 * 			depending on the operation. Throttling means that Amazon Web Services Private CA rejects an otherwise valid
 * 			request because the request exceeds the operation's quota for the number of requests per
 * 			second. When a request is throttled, Amazon Web Services Private CA returns a <a href="https://docs.aws.amazon.com/privateca/latest/APIReference/CommonErrors.html">ThrottlingException</a> error. Amazon Web Services Private CA does not guarantee a minimum request
 * 			rate for APIs. </p>
 *          <p>To see an up-to-date list of your Amazon Web Services Private CA quotas, or to request a quota increase,
 * 			log into your Amazon Web Services account and visit the <a href="https://console.aws.amazon.com/servicequotas/">Service Quotas</a>
 * 			console.</p>
 *
 * @packageDocumentation
 */
export * from "./ACMPCAClient";
export * from "./ACMPCA";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export * from "./commands";
export * from "./pagination";
export * from "./waiters";
export * from "./models";

export { ACMPCAServiceException } from "./models/ACMPCAServiceException";
