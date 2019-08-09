import { _UnmarshalledCustomerAgentInfo } from "./_CustomerAgentInfo";
import { _UnmarshalledCustomerConnectorInfo } from "./_CustomerConnectorInfo";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetDiscoverySummaryOutput shape
 */
export interface GetDiscoverySummaryOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The number of servers discovered.</p>
   */
  servers?: number;

  /**
   * <p>The number of applications discovered.</p>
   */
  applications?: number;

  /**
   * <p>The number of servers mapped to applications.</p>
   */
  serversMappedToApplications?: number;

  /**
   * <p>The number of servers mapped to tags.</p>
   */
  serversMappedtoTags?: number;

  /**
   * <p>Details about discovered agents, including agent status and health.</p>
   */
  agentSummary?: _UnmarshalledCustomerAgentInfo;

  /**
   * <p>Details about discovered connectors, including connector status and health.</p>
   */
  connectorSummary?: _UnmarshalledCustomerConnectorInfo;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
