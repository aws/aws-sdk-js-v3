import { AwsQueryProtocol } from "./AwsQueryProtocol";
import type { QuerySerializerSettings } from "./QuerySerializerSettings";

/**
 * @public
 */
export class AwsEc2QueryProtocol extends AwsQueryProtocol {
  public constructor(
    public options: {
      defaultNamespace: string;
      xmlNamespace: string;
      version: string;
    }
  ) {
    super(options);
    const ec2Settings: Partial<QuerySerializerSettings> = {
      capitalizeKeys: true,
      flattenLists: true,
      serializeEmptyLists: false,
      ec2: true,
    };
    Object.assign(this.serializer.settings, ec2Settings);
  }

  /**
   * EC2 Query reads XResponse.XResult instead of XResponse directly.
   */
  protected useNestedResult(): boolean {
    return false;
  }
}
