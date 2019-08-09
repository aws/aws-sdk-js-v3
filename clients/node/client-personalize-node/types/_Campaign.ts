import {
  _CampaignUpdateSummary,
  _UnmarshalledCampaignUpdateSummary
} from "./_CampaignUpdateSummary";

/**
 * <p>Describes a deployed solution version, otherwise known as a campaign. For more information on campaigns, see <a>CreateCampaign</a>.</p>
 */
export interface _Campaign {
  /**
   * <p>The name of the campaign.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the campaign. </p>
   */
  campaignArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of a specific version of the solution.</p>
   */
  solutionVersionArn?: string;

  /**
   * <p>Specifies the requested minimum provisioned transactions (recommendations) per second.</p>
   */
  minProvisionedTPS?: number;

  /**
   * <p>The status of the campaign.</p> <p>A campaign can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul>
   */
  status?: string;

  /**
   * <p>If a campaign fails, the reason behind the failure.</p>
   */
  failureReason?: string;

  /**
   * <p>The date and time (in Unix format) that the campaign was created.</p>
   */
  creationDateTime?: Date | string | number;

  /**
   * <p>The date and time (in Unix format) that the campaign was last updated.</p>
   */
  lastUpdatedDateTime?: Date | string | number;

  /**
   * <p>Provides a summary of the properties of a campaign update. For a complete listing, call the <a>DescribeCampaign</a> API.</p>
   */
  latestCampaignUpdate?: _CampaignUpdateSummary;
}

export interface _UnmarshalledCampaign extends _Campaign {
  /**
   * <p>The date and time (in Unix format) that the campaign was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The date and time (in Unix format) that the campaign was last updated.</p>
   */
  lastUpdatedDateTime?: Date;

  /**
   * <p>Provides a summary of the properties of a campaign update. For a complete listing, call the <a>DescribeCampaign</a> API.</p>
   */
  latestCampaignUpdate?: _UnmarshalledCampaignUpdateSummary;
}
