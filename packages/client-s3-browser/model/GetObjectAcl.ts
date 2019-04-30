import { GetObjectAclInput } from "./GetObjectAclInput";
import { GetObjectAclOutput } from "./GetObjectAclOutput";
import { NoSuchKey } from "./NoSuchKey";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetObjectAcl: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetObjectAcl",
  http: {
    method: "GET",
    requestUri: "/{Bucket}/{Key+}?acl"
  },
  input: {
    shape: GetObjectAclInput
  },
  output: {
    shape: GetObjectAclOutput
  },
  errors: [
    {
      shape: NoSuchKey
    }
  ]
};
