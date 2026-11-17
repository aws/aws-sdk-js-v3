// smithy-typescript generated code
import type { WaveHealthStatus, WaveProgressStatus } from "./enums";

/**
 * @public
 */
export interface StartImportFileEnrichmentResponse {
  /**
   * <p>The unique identifier of the import file enrichment job that was started.</p>
   * @public
   */
  jobID?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>Tag resource by ARN.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>Tag resource by Tags.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>Untag resource by ARN.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>Untag resource by Keys.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteVcenterClientRequest {
  /**
   * <p>ID of resource to be deleted.</p>
   * @public
   */
  vcenterClientID: string | undefined;
}

/**
 * @public
 */
export interface DescribeVcenterClientsRequest {
  /**
   * <p>Maximum results to be returned in DescribeVcenterClients.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Next pagination token to be provided for DescribeVcenterClients.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>vCenter client.</p>
 * @public
 */
export interface VcenterClient {
  /**
   * <p>ID of vCenter client.</p>
   * @public
   */
  vcenterClientID?: string | undefined;

  /**
   * <p>Arn of vCenter client.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>Hostname of vCenter client .</p>
   * @public
   */
  hostname?: string | undefined;

  /**
   * <p>Vcenter UUID of vCenter client.</p>
   * @public
   */
  vcenterUUID?: string | undefined;

  /**
   * <p>Datacenter name of vCenter client.</p>
   * @public
   */
  datacenterName?: string | undefined;

  /**
   * <p>Last seen time of vCenter client.</p>
   * @public
   */
  lastSeenDatetime?: string | undefined;

  /**
   * <p>Tags for Source Server of vCenter client.</p>
   * @public
   */
  sourceServerTags?: Record<string, string> | undefined;

  /**
   * <p>Tags for vCenter client.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeVcenterClientsResponse {
  /**
   * <p>List of items returned by DescribeVcenterClients.</p>
   * @public
   */
  items?: VcenterClient[] | undefined;

  /**
   * <p>Next pagination token returned from DescribeVcenterClients.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ArchiveWaveRequest {
  /**
   * <p>Wave ID.</p>
   * @public
   */
  waveID: string | undefined;

  /**
   * <p>Account ID.</p>
   * @public
   */
  accountID?: string | undefined;
}

/**
 * <p>Wave aggregated status.</p>
 * @public
 */
export interface WaveAggregatedStatus {
  /**
   * <p>Wave aggregated status last update dateTime.</p>
   * @public
   */
  lastUpdateDateTime?: string | undefined;

  /**
   * <p>DateTime marking when the first source server in the wave started replication.</p>
   * @public
   */
  replicationStartedDateTime?: string | undefined;

  /**
   * <p>Wave aggregated status health status.</p>
   * @public
   */
  healthStatus?: WaveHealthStatus | undefined;

  /**
   * <p>Wave aggregated status progress status.</p>
   * @public
   */
  progressStatus?: WaveProgressStatus | undefined;

  /**
   * <p>Wave aggregated status total applications amount.</p>
   * @public
   */
  totalApplications?: number | undefined;
}

/**
 * @public
 */
export interface Wave {
  /**
   * <p>Wave ID.</p>
   * @public
   */
  waveID?: string | undefined;

  /**
   * <p>Wave ARN.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>Wave name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Wave description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Wave archival status.</p>
   * @public
   */
  isArchived?: boolean | undefined;

  /**
   * <p>Wave aggregated status.</p>
   * @public
   */
  waveAggregatedStatus?: WaveAggregatedStatus | undefined;

  /**
   * <p>Wave creation dateTime.</p>
   * @public
   */
  creationDateTime?: string | undefined;

  /**
   * <p>Wave last modified dateTime.</p>
   * @public
   */
  lastModifiedDateTime?: string | undefined;

  /**
   * <p>Wave tags.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface AssociateApplicationsRequest {
  /**
   * <p>Wave ID.</p>
   * @public
   */
  waveID: string | undefined;

  /**
   * <p>Application IDs list.</p>
   * @public
   */
  applicationIDs: string[] | undefined;

  /**
   * <p>Account ID.</p>
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface AssociateApplicationsResponse {}

/**
 * @public
 */
export interface CreateWaveRequest {
  /**
   * <p>Wave name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Wave description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Wave tags.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Account ID.</p>
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface DeleteWaveRequest {
  /**
   * <p>Wave ID.</p>
   * @public
   */
  waveID: string | undefined;

  /**
   * <p>Account ID.</p>
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface DeleteWaveResponse {}

/**
 * @public
 */
export interface DisassociateApplicationsRequest {
  /**
   * <p>Wave ID.</p>
   * @public
   */
  waveID: string | undefined;

  /**
   * <p>Application IDs list.</p>
   * @public
   */
  applicationIDs: string[] | undefined;

  /**
   * <p>Account ID.</p>
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateApplicationsResponse {}

/**
 * <p>Waves list filters.</p>
 * @public
 */
export interface ListWavesRequestFilters {
  /**
   * <p>Filter waves list by wave ID.</p>
   * @public
   */
  waveIDs?: string[] | undefined;

  /**
   * <p>Filter waves list by archival status.</p>
   * @public
   */
  isArchived?: boolean | undefined;
}

/**
 * @public
 */
export interface ListWavesRequest {
  /**
   * <p>Waves list filters.</p>
   * @public
   */
  filters?: ListWavesRequestFilters | undefined;

  /**
   * <p>Maximum results to return when listing waves.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Request next token.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Request account ID.</p>
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface ListWavesResponse {
  /**
   * <p>Waves list.</p>
   * @public
   */
  items?: Wave[] | undefined;

  /**
   * <p>Response next token.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UnarchiveWaveRequest {
  /**
   * <p>Wave ID.</p>
   * @public
   */
  waveID: string | undefined;

  /**
   * <p>Account ID.</p>
   * @public
   */
  accountID?: string | undefined;
}

/**
 * @public
 */
export interface UpdateWaveRequest {
  /**
   * <p>Wave ID.</p>
   * @public
   */
  waveID: string | undefined;

  /**
   * <p>Wave name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Wave description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Account ID.</p>
   * @public
   */
  accountID?: string | undefined;
}
