import { _UnmarshalledEndpointConfiguration } from "./_EndpointConfiguration";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents a custom domain name as a user-friendly host name of an API (<a>RestApi</a>).</p> <div class="Remarks"> <p>When you deploy an API, API Gateway creates a default host name for the API. This default API host name is of the <code>{restapi-id}.execute-api.{region}.amazonaws.com</code> format. With the default host name, you can access the API's root resource with the URL of <code>https://{restapi-id}.execute-api.{region}.amazonaws.com/{stage}/</code>. When you set up a custom domain name of <code>apis.example.com</code> for this API, you can then access the same resource using the URL of the <code>https://apis.examples.com/myApi</code>, where <code>myApi</code> is the base path mapping (<a>BasePathMapping</a>) of your API under the custom domain name. </p> </div> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html">Set a Custom Host Name for an API</a> </div>
 */
export interface GetDomainNameOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The custom domain name as an API host name, for example, <code>my-api.example.com</code>.</p>
   */
  domainName?: string;

  /**
   * <p>The name of the certificate that will be used by edge-optimized endpoint for this domain name.</p>
   */
  certificateName?: string;

  /**
   * <p>The reference to an AWS-managed certificate that will be used by edge-optimized endpoint for this domain name. AWS Certificate Manager is the only supported source.</p>
   */
  certificateArn?: string;

  /**
   * <p>The timestamp when the certificate that was used by edge-optimized endpoint for this domain name was uploaded.</p>
   */
  certificateUploadDate?: Date;

  /**
   * <p>The domain name associated with the regional endpoint for this custom domain name. You set up this association by adding a DNS record that points the custom domain name to this regional domain name. The regional domain name is returned by API Gateway when you create a regional endpoint.</p>
   */
  regionalDomainName?: string;

  /**
   * <p>The region-specific Amazon Route 53 Hosted Zone ID of the regional endpoint. For more information, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-regional-api-custom-domain-create.html">Set up a Regional Custom Domain Name</a> and <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#apigateway_region">AWS Regions and Endpoints for API Gateway</a>. </p>
   */
  regionalHostedZoneId?: string;

  /**
   * <p>The name of the certificate that will be used for validating the regional domain name.</p>
   */
  regionalCertificateName?: string;

  /**
   * <p>The reference to an AWS-managed certificate that will be used for validating the regional domain name. AWS Certificate Manager is the only supported source.</p>
   */
  regionalCertificateArn?: string;

  /**
   * <p>The domain name of the Amazon CloudFront distribution associated with this custom domain name for an edge-optimized endpoint. You set up this association when adding a DNS record pointing the custom domain name to this distribution name. For more information about CloudFront distributions, see the <a href="https://aws.amazon.com/documentation/cloudfront/" target="_blank">Amazon CloudFront documentation</a>.</p>
   */
  distributionDomainName?: string;

  /**
   * <p>The region-agnostic Amazon Route 53 Hosted Zone ID of the edge-optimized endpoint. The valid value is <code>Z2FDTNDATAQYW2</code> for all the regions. For more information, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-regional-api-custom-domain-create.html">Set up a Regional Custom Domain Name</a> and <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#apigateway_region">AWS Regions and Endpoints for API Gateway</a>. </p>
   */
  distributionHostedZoneId?: string;

  /**
   * <p>The endpoint configuration of this <a>DomainName</a> showing the endpoint types of the domain name. </p>
   */
  endpointConfiguration?: _UnmarshalledEndpointConfiguration;

  /**
   * <p>The status of the <a>DomainName</a> migration. The valid values are <code>AVAILABLE</code> and <code>UPDATING</code>. If the status is <code>UPDATING</code>, the domain cannot be modified further until the existing operation is complete. If it is <code>AVAILABLE</code>, the domain can be updated.</p>
   */
  domainNameStatus?: "AVAILABLE" | "UPDATING" | "PENDING" | string;

  /**
   * <p>An optional text message containing detailed information about status of the <a>DomainName</a> migration.</p>
   */
  domainNameStatusMessage?: string;

  /**
   * <p>The Transport Layer Security (TLS) version + cipher suite for this <a>DomainName</a>. The valid values are <code>TLS_1_0</code> and <code>TLS_1_2</code>.</p>
   */
  securityPolicy?: "TLS_1_0" | "TLS_1_2" | string;

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   */
  tags?: { [key: string]: string };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
