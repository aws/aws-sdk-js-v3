import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the usage data of a usage plan.</p> <div class="remarks"/> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html">Create and Use Usage Plans</a>, <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-create-usage-plans-with-console.html#api-gateway-usage-plan-manage-usage">Manage Usage in a Usage Plan</a> </div>
 */
export interface GetUsageOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The plan Id associated with this usage data.</p>
   */
  usagePlanId?: string;

  /**
   * <p>The starting date of the usage data.</p>
   */
  startDate?: string;

  /**
   * <p>The ending date of the usage data.</p>
   */
  endDate?: string;

  /**
   * _String shape
   */
  position?: string;

  /**
   * <p>The usage data, as daily logs of used and remaining quotas, over the specified time interval indexed over the API keys in a usage plan. For example, <code>{..., "values" : { "{api_key}" : [ [0, 100], [10, 90], [100, 10]]}</code>, where <code>{api_key}</code> stands for an API key value and the daily log entry is of the format <code>[used quota, remaining quota]</code>.</p>
   */
  items?: { [key: string]: Array<Array<number>> };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
