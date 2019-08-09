import { PricingClient } from "./PricingClient";
import { DescribeServicesInput } from "./types/DescribeServicesInput";
import { DescribeServicesOutput } from "./types/DescribeServicesOutput";
import { ExpiredNextTokenException } from "./types/ExpiredNextTokenException";
import { GetAttributeValuesInput } from "./types/GetAttributeValuesInput";
import { GetAttributeValuesOutput } from "./types/GetAttributeValuesOutput";
import { GetProductsInput } from "./types/GetProductsInput";
import { GetProductsOutput } from "./types/GetProductsOutput";
import { InternalErrorException } from "./types/InternalErrorException";
import { InvalidNextTokenException } from "./types/InvalidNextTokenException";
import { InvalidParameterException } from "./types/InvalidParameterException";
import { NotFoundException } from "./types/NotFoundException";
import { DescribeServicesCommand } from "./commands/DescribeServicesCommand";
import { GetAttributeValuesCommand } from "./commands/GetAttributeValuesCommand";
import { GetProductsCommand } from "./commands/GetProductsCommand";

export class Pricing extends PricingClient {
  /**
   * <p>Returns the metadata for one service or a list of the metadata for all services. Use this without a service code to get the service codes for all services. Use it with a service code, such as <code>AmazonEC2</code>, to get information specific to that service, such as the attribute names available for that service. For example, some of the attribute names available for EC2 are <code>volumeType</code>, <code>maxIopsVolume</code>, <code>operation</code>, <code>locationType</code>, and <code>instanceCapacity10xlarge</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalErrorException} <p>An error on the server occurred during the processing of your request. Try again later.</p>
   *   - {InvalidParameterException} <p>One or more parameters had an invalid value.</p>
   *   - {NotFoundException} <p>The requested resource can't be found.</p>
   *   - {InvalidNextTokenException} <p>The pagination token is invalid. Try again without a pagination token.</p>
   *   - {ExpiredNextTokenException} <p>The pagination token expired. Try again without a pagination token.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeServices(
    args: DescribeServicesInput
  ): Promise<DescribeServicesOutput>;
  public describeServices(
    args: DescribeServicesInput,
    cb: (err: any, data?: DescribeServicesOutput) => void
  ): void;
  public describeServices(
    args: DescribeServicesInput,
    cb?: (err: any, data?: DescribeServicesOutput) => void
  ): Promise<DescribeServicesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeServicesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of attribute values. Attibutes are similar to the details in a Price List API offer file. For a list of available attributes, see <a href="http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/reading-an-offer.html#pps-defs">Offer File Definitions</a> in the <a href="http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-what-is.html">AWS Billing and Cost Management User Guide</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalErrorException} <p>An error on the server occurred during the processing of your request. Try again later.</p>
   *   - {InvalidParameterException} <p>One or more parameters had an invalid value.</p>
   *   - {NotFoundException} <p>The requested resource can't be found.</p>
   *   - {InvalidNextTokenException} <p>The pagination token is invalid. Try again without a pagination token.</p>
   *   - {ExpiredNextTokenException} <p>The pagination token expired. Try again without a pagination token.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getAttributeValues(
    args: GetAttributeValuesInput
  ): Promise<GetAttributeValuesOutput>;
  public getAttributeValues(
    args: GetAttributeValuesInput,
    cb: (err: any, data?: GetAttributeValuesOutput) => void
  ): void;
  public getAttributeValues(
    args: GetAttributeValuesInput,
    cb?: (err: any, data?: GetAttributeValuesOutput) => void
  ): Promise<GetAttributeValuesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetAttributeValuesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns a list of all products that match the filter criteria.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalErrorException} <p>An error on the server occurred during the processing of your request. Try again later.</p>
   *   - {InvalidParameterException} <p>One or more parameters had an invalid value.</p>
   *   - {NotFoundException} <p>The requested resource can't be found.</p>
   *   - {InvalidNextTokenException} <p>The pagination token is invalid. Try again without a pagination token.</p>
   *   - {ExpiredNextTokenException} <p>The pagination token expired. Try again without a pagination token.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getProducts(args: GetProductsInput): Promise<GetProductsOutput>;
  public getProducts(
    args: GetProductsInput,
    cb: (err: any, data?: GetProductsOutput) => void
  ): void;
  public getProducts(
    args: GetProductsInput,
    cb?: (err: any, data?: GetProductsOutput) => void
  ): Promise<GetProductsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetProductsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
