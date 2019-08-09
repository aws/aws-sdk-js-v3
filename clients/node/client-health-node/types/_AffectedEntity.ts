/**
 * <p>Information about an entity that is affected by a Health event.</p>
 */
export interface _AffectedEntity {
  /**
   * <p>The unique identifier for the entity. Format: <code>arn:aws:health:<i>entity-region</i>:<i>aws-account</i>:entity/<i>entity-id</i> </code>. Example: <code>arn:aws:health:us-east-1:111222333444:entity/AVh5GGT7ul1arKr1sE1K</code> </p>
   */
  entityArn?: string;

  /**
   * <p>The unique identifier for the event. Format: <code>arn:aws:health:<i>event-region</i>::event/<i>SERVICE</i>/<i>EVENT_TYPE_CODE</i>/<i>EVENT_TYPE_PLUS_ID</i> </code>. Example: <code>Example: arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-DEF456</code> </p>
   */
  eventArn?: string;

  /**
   * <p>The ID of the affected entity.</p>
   */
  entityValue?: string;

  /**
   * _entityUrl shape
   */
  entityUrl?: string;

  /**
   * <p>The 12-digit AWS account number that contains the affected entity.</p>
   */
  awsAccountId?: string;

  /**
   * <p>The most recent time that the entity was updated.</p>
   */
  lastUpdatedTime?: Date | string | number;

  /**
   * <p>The most recent status of the entity affected by the event. The possible values are <code>IMPAIRED</code>, <code>UNIMPAIRED</code>, and <code>UNKNOWN</code>.</p>
   */
  statusCode?: "IMPAIRED" | "UNIMPAIRED" | "UNKNOWN" | string;

  /**
   * <p>A map of entity tags attached to the affected entity.</p>
   */
  tags?: { [key: string]: string } | Iterable<[string, string]>;
}

export interface _UnmarshalledAffectedEntity extends _AffectedEntity {
  /**
   * <p>The most recent time that the entity was updated.</p>
   */
  lastUpdatedTime?: Date;

  /**
   * <p>A map of entity tags attached to the affected entity.</p>
   */
  tags?: { [key: string]: string };
}
