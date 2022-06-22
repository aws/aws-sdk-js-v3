// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  DescribeServicesCommand,
  DescribeServicesCommandInput,
  DescribeServicesCommandOutput,
} from "./commands/DescribeServicesCommand";
import {
  GetAttributeValuesCommand,
  GetAttributeValuesCommandInput,
  GetAttributeValuesCommandOutput,
} from "./commands/GetAttributeValuesCommand";
import { GetProductsCommand, GetProductsCommandInput, GetProductsCommandOutput } from "./commands/GetProductsCommand";
import { PricingClient } from "./PricingClient";

/**
 * <p>Amazon Web Services Price List API is a centralized and convenient way to
 *          programmatically query Amazon Web Services for services, products, and pricing information. The Amazon Web Services Price List
 *          uses standardized product attributes such as <code>Location</code>, <code>Storage
 *             Class</code>, and <code>Operating System</code>, and provides prices at the SKU
 *          level. You can use the Amazon Web Services Price List to build cost control and scenario planning tools, reconcile
 *          billing data, forecast future spend for budgeting purposes, and provide cost benefit
 *          analysis that compare your internal workloads with Amazon Web Services.</p>
 *          <p>Use <code>GetServices</code> without a service code to retrieve the service codes for all AWS services, then
 *          <code>GetServices</code> with a service code to retrieve the attribute names for
 *          that service. After you have the service code and attribute names, you can use <code>GetAttributeValues</code>
 *          to see what values are available for an attribute. With the service code and an attribute name and value,
 *          you can use <code>GetProducts</code> to find specific products that you're interested in, such as
 *          an <code>AmazonEC2</code> instance, with a <code>Provisioned IOPS</code>
 *             <code>volumeType</code>.</p>
 *          <p>Service Endpoint</p>
 *          <p>Amazon Web Services Price List service API provides the following two endpoints:</p>
 *          <ul>
 *             <li>
 *                <p>https://api.pricing.us-east-1.amazonaws.com</p>
 *             </li>
 *             <li>
 *                <p>https://api.pricing.ap-south-1.amazonaws.com</p>
 *             </li>
 *          </ul>
 */
export class Pricing extends PricingClient {
  /**
   * <p>Returns the metadata for one service or a list of the metadata for all services. Use
   *          this without a service code to get the service codes for all services.
   *          Use it with a service code, such as <code>AmazonEC2</code>, to get information specific to
   *          that service, such as the attribute
   *          names available for that service. For example, some of the attribute names available for EC2 are
   *          <code>volumeType</code>, <code>maxIopsVolume</code>, <code>operation</code>,
   *          <code>locationType</code>, and <code>instanceCapacity10xlarge</code>.</p>
   */
  public describeServices(
    args: DescribeServicesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeServicesCommandOutput>;
  public describeServices(
    args: DescribeServicesCommandInput,
    cb: (err: any, data?: DescribeServicesCommandOutput) => void
  ): void;
  public describeServices(
    args: DescribeServicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeServicesCommandOutput) => void
  ): void;
  public describeServices(
    args: DescribeServicesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeServicesCommandOutput) => void),
    cb?: (err: any, data?: DescribeServicesCommandOutput) => void
  ): Promise<DescribeServicesCommandOutput> | void {
    const command = new DescribeServicesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of attribute values. Attributes are similar to the details
   *           in a Price List API offer file. For a list of available attributes, see
   *          <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/reading-an-offer.html#pps-defs">Offer File Definitions</a>
   *          in the <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-what-is.html">Billing and Cost Management User Guide</a>.</p>
   */
  public getAttributeValues(
    args: GetAttributeValuesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAttributeValuesCommandOutput>;
  public getAttributeValues(
    args: GetAttributeValuesCommandInput,
    cb: (err: any, data?: GetAttributeValuesCommandOutput) => void
  ): void;
  public getAttributeValues(
    args: GetAttributeValuesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAttributeValuesCommandOutput) => void
  ): void;
  public getAttributeValues(
    args: GetAttributeValuesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAttributeValuesCommandOutput) => void),
    cb?: (err: any, data?: GetAttributeValuesCommandOutput) => void
  ): Promise<GetAttributeValuesCommandOutput> | void {
    const command = new GetAttributeValuesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of all products that match the filter criteria.</p>
   */
  public getProducts(args: GetProductsCommandInput, options?: __HttpHandlerOptions): Promise<GetProductsCommandOutput>;
  public getProducts(args: GetProductsCommandInput, cb: (err: any, data?: GetProductsCommandOutput) => void): void;
  public getProducts(
    args: GetProductsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProductsCommandOutput) => void
  ): void;
  public getProducts(
    args: GetProductsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetProductsCommandOutput) => void),
    cb?: (err: any, data?: GetProductsCommandOutput) => void
  ): Promise<GetProductsCommandOutput> | void {
    const command = new GetProductsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
