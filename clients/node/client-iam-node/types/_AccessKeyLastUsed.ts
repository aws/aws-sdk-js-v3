/**
 * <p>Contains information about the last time an AWS access key was used since IAM began tracking this information on April 22, 2015.</p> <p>This data type is used as a response element in the <a>GetAccessKeyLastUsed</a> operation.</p>
 */
export interface _AccessKeyLastUsed {
  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time format</a>, when the access key was most recently used. This field is null in the following situations:</p> <ul> <li> <p>The user does not have an access key.</p> </li> <li> <p>An access key exists but has not been used since IAM began tracking this information.</p> </li> <li> <p>There is no sign-in data associated with the user.</p> </li> </ul>
   */
  LastUsedDate: Date | string | number;

  /**
   * <p>The name of the AWS service with which this access key was most recently used. The value of this field is "N/A" in the following situations:</p> <ul> <li> <p>The user does not have an access key.</p> </li> <li> <p>An access key exists but has not been used since IAM started tracking this information.</p> </li> <li> <p>There is no sign-in data associated with the user.</p> </li> </ul>
   */
  ServiceName: string;

  /**
   * <p>The AWS Region where this access key was most recently used. The value for this field is "N/A" in the following situations:</p> <ul> <li> <p>The user does not have an access key.</p> </li> <li> <p>An access key exists but has not been used since IAM began tracking this information.</p> </li> <li> <p>There is no sign-in data associated with the user.</p> </li> </ul> <p>For more information about AWS Regions, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html">Regions and Endpoints</a> in the Amazon Web Services General Reference.</p>
   */
  Region: string;
}

export interface _UnmarshalledAccessKeyLastUsed extends _AccessKeyLastUsed {
  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time format</a>, when the access key was most recently used. This field is null in the following situations:</p> <ul> <li> <p>The user does not have an access key.</p> </li> <li> <p>An access key exists but has not been used since IAM began tracking this information.</p> </li> <li> <p>There is no sign-in data associated with the user.</p> </li> </ul>
   */
  LastUsedDate: Date;
}
