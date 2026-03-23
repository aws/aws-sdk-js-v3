import type { TypeRegistry } from "@smithy/core/schema";

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
      errorTypeRegistries?: TypeRegistry[];
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
   * @override
   */
  public getShapeId(): string {
    return "aws.protocols#ec2Query";
  }

  /**
   * EC2 Query reads XResponse.XResult instead of XResponse directly.
   */
  protected useNestedResult(): boolean {
    return false;
  }
}
