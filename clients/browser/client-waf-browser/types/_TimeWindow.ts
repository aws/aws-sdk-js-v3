/**
 * <p>In a <a>GetSampledRequests</a> request, the <code>StartTime</code> and <code>EndTime</code> objects specify the time range for which you want AWS WAF to return a sample of web requests.</p> <p>In a <a>GetSampledRequests</a> response, the <code>StartTime</code> and <code>EndTime</code> objects specify the time range for which AWS WAF actually returned a sample of web requests. AWS WAF gets the specified number of requests from among the first 5,000 requests that your AWS resource receives during the specified time period. If your resource receives more than 5,000 requests during that period, AWS WAF stops sampling after the 5,000th request. In that case, <code>EndTime</code> is the time that AWS WAF received the 5,000th request. </p>
 */
export interface _TimeWindow {
  /**
   * <p>The beginning of the time range from which you want <code>GetSampledRequests</code> to return a sample of the requests that your AWS resource received. Specify the date and time in the following format: <code>"2016-09-27T14:50Z"</code>. You can specify any time range in the previous three hours.</p>
   */
  StartTime: Date | string | number;

  /**
   * <p>The end of the time range from which you want <code>GetSampledRequests</code> to return a sample of the requests that your AWS resource received. Specify the date and time in the following format: <code>"2016-09-27T14:50Z"</code>. You can specify any time range in the previous three hours.</p>
   */
  EndTime: Date | string | number;
}

export interface _UnmarshalledTimeWindow extends _TimeWindow {
  /**
   * <p>The beginning of the time range from which you want <code>GetSampledRequests</code> to return a sample of the requests that your AWS resource received. Specify the date and time in the following format: <code>"2016-09-27T14:50Z"</code>. You can specify any time range in the previous three hours.</p>
   */
  StartTime: Date;

  /**
   * <p>The end of the time range from which you want <code>GetSampledRequests</code> to return a sample of the requests that your AWS resource received. Specify the date and time in the following format: <code>"2016-09-27T14:50Z"</code>. You can specify any time range in the previous three hours.</p>
   */
  EndTime: Date;
}
