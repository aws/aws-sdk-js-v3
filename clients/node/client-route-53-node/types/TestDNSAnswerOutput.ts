import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A complex type that contains the response to a <code>TestDNSAnswer</code> request. </p>
 */
export interface TestDNSAnswerOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Route 53 name server used to respond to the request.</p>
   */
  Nameserver: string;

  /**
   * <p>The name of the resource record set that you submitted a request for.</p>
   */
  RecordName: string;

  /**
   * <p>The type of the resource record set that you submitted a request for.</p>
   */
  RecordType:
    | "SOA"
    | "A"
    | "TXT"
    | "NS"
    | "CNAME"
    | "MX"
    | "NAPTR"
    | "PTR"
    | "SRV"
    | "SPF"
    | "AAAA"
    | "CAA"
    | string;

  /**
   * <p>A list that contains values that Amazon Route 53 returned for this resource record set.</p>
   */
  RecordData: Array<string>;

  /**
   * <p>A code that indicates whether the request is valid or not. The most common response code is <code>NOERROR</code>, meaning that the request is valid. If the response is not valid, Amazon Route 53 returns a response code that describes the error. For a list of possible response codes, see <a href="http://www.iana.org/assignments/dns-parameters/dns-parameters.xhtml#dns-parameters-6">DNS RCODES</a> on the IANA website. </p>
   */
  ResponseCode: string;

  /**
   * <p>The protocol that Amazon Route 53 used to respond to the request, either <code>UDP</code> or <code>TCP</code>. </p>
   */
  Protocol: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
