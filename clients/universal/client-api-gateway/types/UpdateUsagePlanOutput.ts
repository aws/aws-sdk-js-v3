import { _UnmarshalledApiStage } from "./_ApiStage";
import { _UnmarshalledThrottleSettings } from "./_ThrottleSettings";
import { _UnmarshalledQuotaSettings } from "./_QuotaSettings";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents a usage plan than can specify who can assess associated API stages with specified request limits and quotas.</p> <div class="remarks"> <p>In a usage plan, you associate an API by specifying the API's Id and a stage name of the specified API. You add plan customers by adding API keys to the plan. </p> </div> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html">Create and Use Usage Plans</a> </div>
 */
export interface UpdateUsagePlanOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The identifier of a <a>UsagePlan</a> resource.</p>
   */
  id?: string;

  /**
   * <p>The name of a usage plan.</p>
   */
  name?: string;

  /**
   * <p>The description of a usage plan.</p>
   */
  description?: string;

  /**
   * <p>The associated API stages of a usage plan.</p>
   */
  apiStages?: Array<_UnmarshalledApiStage>;

  /**
   * <p>The request throttle limits of a usage plan.</p>
   */
  throttle?: _UnmarshalledThrottleSettings;

  /**
   * <p>The maximum number of permitted requests per a given unit time interval.</p>
   */
  quota?: _UnmarshalledQuotaSettings;

  /**
   * <p>The AWS Markeplace product identifier to associate with the usage plan as a SaaS product on AWS Marketplace.</p>
   */
  productCode?: string;

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   */
  tags?: { [key: string]: string };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
