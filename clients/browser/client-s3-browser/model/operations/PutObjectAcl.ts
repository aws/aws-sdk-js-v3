import { PutObjectAclInput } from "../shapes/PutObjectAclInput";
import { PutObjectAclOutput } from "../shapes/PutObjectAclOutput";
import { NoSuchKey } from "../shapes/NoSuchKey";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutObjectAcl: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutObjectAcl",
  http: {
    method: "PUT",
    requestUri: "/{Bucket}/{Key+}?acl"
  },
  input: {
    shape: PutObjectAclInput
  },
  output: {
    shape: PutObjectAclOutput
  },
  errors: [
    {
      shape: NoSuchKey
    }
  ]
};
