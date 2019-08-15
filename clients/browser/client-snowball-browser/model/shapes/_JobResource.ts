import { _S3ResourceList } from "./_S3ResourceList";
import { _LambdaResourceList } from "./_LambdaResourceList";
import { _Ec2AmiResourceList } from "./_Ec2AmiResourceList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _JobResource: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    S3Resources: {
      shape: _S3ResourceList
    },
    LambdaResources: {
      shape: _LambdaResourceList
    },
    Ec2AmiResources: {
      shape: _Ec2AmiResourceList
    }
  }
};
