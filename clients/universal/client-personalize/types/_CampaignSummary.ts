/**
 * <p>Provides a summary of the properties of a campaign. For a complete listing, call the <a>DescribeCampaign</a> API.</p>
 */
export interface _CampaignSummary {
  /**
   * <p>The name of the campaign.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the campaign.</p>
   */
  campaignArn?: string;

  /**
   * <p>The status of the campaign.</p> <p>A campaign can be in one of the following states:</p> <ul> <li> <p>CREATE PENDING &gt; CREATE IN_PROGRESS &gt; ACTIVE -or- CREATE FAILED</p> </li> <li> <p>DELETE PENDING &gt; DELETE IN_PROGRESS</p> </li> </ul>
   */
  status?: string;

  /**
   * <p>The date and time (in Unix time) that the campaign was created.</p>
   */
  creationDateTime?: Date | string | number;

  /**
   * <p>The date and time (in Unix time) that the campaign was last updated.</p>
   */
  lastUpdatedDateTime?: Date | string | number;

  /**
   * <p>If a campaign fails, the reason behind the failure.</p>
   */
  failureReason?: string;
}

export interface _UnmarshalledCampaignSummary extends _CampaignSummary {
  /**
   * <p>The date and time (in Unix time) that the campaign was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The date and time (in Unix time) that the campaign was last updated.</p>
   */
  lastUpdatedDateTime?: Date;
}
