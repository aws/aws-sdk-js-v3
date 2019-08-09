import {
  _TriggerNodeDetails,
  _UnmarshalledTriggerNodeDetails
} from "./_TriggerNodeDetails";
import {
  _JobNodeDetails,
  _UnmarshalledJobNodeDetails
} from "./_JobNodeDetails";
import {
  _CrawlerNodeDetails,
  _UnmarshalledCrawlerNodeDetails
} from "./_CrawlerNodeDetails";

/**
 * <p>A node represents an AWS Glue component like Trigger, Job etc. which is part of a workflow.</p>
 */
export interface _Node {
  /**
   * <p>The type of AWS Glue component represented by the node.</p>
   */
  Type?: "CRAWLER" | "JOB" | "TRIGGER" | string;

  /**
   * <p>The name of the AWS Glue component represented by the node.</p>
   */
  Name?: string;

  /**
   * <p>The unique Id assigned to the node within the workflow.</p>
   */
  UniqueId?: string;

  /**
   * <p>Details of the Trigger when the node represents a Trigger.</p>
   */
  TriggerDetails?: _TriggerNodeDetails;

  /**
   * <p>Details of the Job when the node represents a Job.</p>
   */
  JobDetails?: _JobNodeDetails;

  /**
   * <p>Details of the crawler when the node represents a crawler.</p>
   */
  CrawlerDetails?: _CrawlerNodeDetails;
}

export interface _UnmarshalledNode extends _Node {
  /**
   * <p>Details of the Trigger when the node represents a Trigger.</p>
   */
  TriggerDetails?: _UnmarshalledTriggerNodeDetails;

  /**
   * <p>Details of the Job when the node represents a Job.</p>
   */
  JobDetails?: _UnmarshalledJobNodeDetails;

  /**
   * <p>Details of the crawler when the node represents a crawler.</p>
   */
  CrawlerDetails?: _UnmarshalledCrawlerNodeDetails;
}
