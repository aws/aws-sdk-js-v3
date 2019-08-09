import { _UnmarshalledDimensionValuesWithAttributes } from "./_DimensionValuesWithAttributes";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetDimensionValuesOutput shape
 */
export interface GetDimensionValuesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The filters that you used to filter your request. Some dimensions are available only for a specific context.</p> <p>If you set the context to <code>COST_AND_USAGE</code>, you can use the following dimensions for searching:</p> <ul> <li> <p>AZ - The Availability Zone. An example is <code>us-east-1a</code>.</p> </li> <li> <p>DATABASE_ENGINE - The Amazon Relational Database Service database. Examples are Aurora or MySQL.</p> </li> <li> <p>INSTANCE_TYPE - The type of Amazon EC2 instance. An example is <code>m4.xlarge</code>.</p> </li> <li> <p>LEGAL_ENTITY_NAME - The name of the organization that sells you AWS services, such as Amazon Web Services.</p> </li> <li> <p>LINKED_ACCOUNT - The description in the attribute map that includes the full name of the member account. The value field contains the AWS ID of the member account.</p> </li> <li> <p>OPERATING_SYSTEM - The operating system. Examples are Windows or Linux.</p> </li> <li> <p>OPERATION - The action performed. Examples include <code>RunInstance</code> and <code>CreateBucket</code>.</p> </li> <li> <p>PLATFORM - The Amazon EC2 operating system. Examples are Windows or Linux.</p> </li> <li> <p>PURCHASE_TYPE - The reservation type of the purchase to which this usage is related. Examples include On-Demand Instances and Standard Reserved Instances.</p> </li> <li> <p>SERVICE - The AWS service such as Amazon DynamoDB.</p> </li> <li> <p>USAGE_TYPE - The type of usage. An example is DataTransfer-In-Bytes. The response for the <code>GetDimensionValues</code> operation includes a unit attribute. Examples include GB and Hrs.</p> </li> <li> <p>USAGE_TYPE_GROUP - The grouping of common usage types. An example is Amazon EC2: CloudWatch – Alarms. The response for this operation includes a unit attribute.</p> </li> <li> <p>RECORD_TYPE - The different types of charges such as RI fees, usage costs, tax refunds, and credits.</p> </li> </ul> <p>If you set the context to <code>RESERVATIONS</code>, you can use the following dimensions for searching:</p> <ul> <li> <p>AZ - The Availability Zone. An example is <code>us-east-1a</code>.</p> </li> <li> <p>CACHE_ENGINE - The Amazon ElastiCache operating system. Examples are Windows or Linux.</p> </li> <li> <p>DEPLOYMENT_OPTION - The scope of Amazon Relational Database Service deployments. Valid values are <code>SingleAZ</code> and <code>MultiAZ</code>.</p> </li> <li> <p>INSTANCE_TYPE - The type of Amazon EC2 instance. An example is <code>m4.xlarge</code>.</p> </li> <li> <p>LINKED_ACCOUNT - The description in the attribute map that includes the full name of the member account. The value field contains the AWS ID of the member account.</p> </li> <li> <p>PLATFORM - The Amazon EC2 operating system. Examples are Windows or Linux.</p> </li> <li> <p>REGION - The AWS Region.</p> </li> <li> <p>SCOPE (Utilization only) - The scope of a Reserved Instance (RI). Values are regional or a single Availability Zone.</p> </li> <li> <p>TAG (Coverage only) - The tags that are associated with a Reserved Instance (RI).</p> </li> <li> <p>TENANCY - The tenancy of a resource. Examples are shared or dedicated.</p> </li> </ul>
   */
  DimensionValues: Array<_UnmarshalledDimensionValuesWithAttributes>;

  /**
   * <p>The number of results that AWS returned at one time.</p>
   */
  ReturnSize: number;

  /**
   * <p>The total number of search results.</p>
   */
  TotalSize: number;

  /**
   * <p>The token for the next set of retrievable results. AWS provides the token when the response from a previous call has more results than the maximum page size.</p>
   */
  NextPageToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
