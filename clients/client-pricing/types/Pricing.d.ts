import { PricingClient } from "./PricingClient";
import { DescribeServicesCommandInput, DescribeServicesCommandOutput } from "./commands/DescribeServicesCommand";
import { GetAttributeValuesCommandInput, GetAttributeValuesCommandOutput } from "./commands/GetAttributeValuesCommand";
import { GetProductsCommandInput, GetProductsCommandOutput } from "./commands/GetProductsCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
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
export declare class Pricing extends PricingClient {
    /**
     * <p>Returns the metadata for one service or a list of the metadata for all services. Use
     *          this without a service code to get the service codes for all services.
     *          Use it with a service code, such as <code>AmazonEC2</code>, to get information specific to
     *          that service, such as the attribute
     *          names available for that service. For example, some of the attribute names available for EC2 are
     *          <code>volumeType</code>, <code>maxIopsVolume</code>, <code>operation</code>,
     *          <code>locationType</code>, and <code>instanceCapacity10xlarge</code>.</p>
     */
    describeServices(args: DescribeServicesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeServicesCommandOutput>;
    describeServices(args: DescribeServicesCommandInput, cb: (err: any, data?: DescribeServicesCommandOutput) => void): void;
    describeServices(args: DescribeServicesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeServicesCommandOutput) => void): void;
    /**
     * <p>Returns a list of attribute values. Attibutes are similar to the details
     *           in a Price List API offer file. For a list of available attributes, see
     *          <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/reading-an-offer.html#pps-defs">Offer File Definitions</a>
     *          in the <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-what-is.html">AWS Billing and Cost Management User Guide</a>.</p>
     */
    getAttributeValues(args: GetAttributeValuesCommandInput, options?: __HttpHandlerOptions): Promise<GetAttributeValuesCommandOutput>;
    getAttributeValues(args: GetAttributeValuesCommandInput, cb: (err: any, data?: GetAttributeValuesCommandOutput) => void): void;
    getAttributeValues(args: GetAttributeValuesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAttributeValuesCommandOutput) => void): void;
    /**
     * <p>Returns a list of all products that match the filter criteria.</p>
     */
    getProducts(args: GetProductsCommandInput, options?: __HttpHandlerOptions): Promise<GetProductsCommandOutput>;
    getProducts(args: GetProductsCommandInput, cb: (err: any, data?: GetProductsCommandOutput) => void): void;
    getProducts(args: GetProductsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetProductsCommandOutput) => void): void;
}
