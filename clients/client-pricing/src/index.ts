// smithy-typescript generated code
/* eslint-disable */
/**
 * <p>The Amazon Web Services Price List API is a centralized and convenient way to programmatically
 *          query Amazon Web Services for services, products, and pricing information. The Amazon Web Services Price List uses standardized product attributes such as <code>Location</code>,
 *             <code>Storage Class</code>, and <code>Operating System</code>, and provides prices at
 *          the SKU level. You can use the Amazon Web Services Price List to do the following:</p>
 *          <ul>
 *             <li>
 *                <p>Build cost control and scenario planning tools</p>
 *             </li>
 *             <li>
 *                <p>Reconcile billing data</p>
 *             </li>
 *             <li>
 *                <p>Forecast future spend for budgeting purposes</p>
 *             </li>
 *             <li>
 *                <p>Provide cost benefit analysis that compare your internal workloads with Amazon Web Services</p>
 *             </li>
 *          </ul>
 *          <p>Use <code>GetServices</code> without a service code to retrieve the service codes for
 *          all Amazon Web Services, then <code>GetServices</code> with a service code to
 *          retrieve the attribute names for that service. After you have the service code and
 *          attribute names, you can use <code>GetAttributeValues</code> to see what values are
 *          available for an attribute. With the service code and an attribute name and value, you can
 *          use <code>GetProducts</code> to find specific products that you're interested in, such as
 *          an <code>AmazonEC2</code> instance, with a <code>Provisioned IOPS</code>
 *             <code>volumeType</code>.</p>
 *          <p>You can use the following endpoints for the Amazon Web Services Price List API:</p>
 *          <ul>
 *             <li>
 *                <p>https://api.pricing.us-east-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>https://api.pricing.ap-south-1.amazonaws.com</p>
 *             </li>
 *          </ul>
 *
 * @packageDocumentation
 */
export * from "./PricingClient";
export * from "./Pricing";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export * from "./commands";
export * from "./pagination";
export * from "./models";

export { PricingServiceException } from "./models/PricingServiceException";
