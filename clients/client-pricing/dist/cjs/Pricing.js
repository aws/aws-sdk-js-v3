"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PricingClient_1 = require("./PricingClient");
const DescribeServicesCommand_1 = require("./commands/DescribeServicesCommand");
const GetAttributeValuesCommand_1 = require("./commands/GetAttributeValuesCommand");
const GetProductsCommand_1 = require("./commands/GetProductsCommand");
/**
 * <p>AWS Price List Service API (AWS Price List Service) is a centralized and convenient way to
 *          programmatically query Amazon Web Services for services, products, and pricing information. The AWS Price List Service
 *          uses standardized product attributes such as <code>Location</code>, <code>Storage
 *             Class</code>, and <code>Operating System</code>, and provides prices at the SKU
 *          level. You can use the AWS Price List Service to build cost control and scenario planning tools, reconcile
 *          billing data, forecast future spend for budgeting purposes, and provide cost benefit
 *          analysis that compare your internal workloads with AWS.</p>
 *          <p>Use <code>GetServices</code> without a service code to retrieve the service codes for all AWS services, then
 *          <code>GetServices</code> with a service code to retreive the attribute names for
 *          that service. After you have the service code and attribute names, you can use <code>GetAttributeValues</code>
 *          to see what values are available for an attribute. With the service code and an attribute name and value,
 *          you can use <code>GetProducts</code> to find specific products that you're interested in, such as
 *          an <code>AmazonEC2</code> instance, with a <code>Provisioned IOPS</code>
 *             <code>volumeType</code>.</p>
 *          <p>Service Endpoint</p>
 *          <p>AWS Price List Service API provides the following two endpoints:</p>
 *          <ul>
 *             <li>
 *                <p>https://api.pricing.us-east-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>https://api.pricing.ap-south-1.amazonaws.com</p>
 *             </li>
 *          </ul>
 */
class Pricing extends PricingClient_1.PricingClient {
    describeServices(args, optionsOrCb, cb) {
        const command = new DescribeServicesCommand_1.DescribeServicesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getAttributeValues(args, optionsOrCb, cb) {
        const command = new GetAttributeValuesCommand_1.GetAttributeValuesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getProducts(args, optionsOrCb, cb) {
        const command = new GetProductsCommand_1.GetProductsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
}
exports.Pricing = Pricing;
//# sourceMappingURL=Pricing.js.map