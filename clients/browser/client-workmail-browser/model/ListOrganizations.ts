import { ListOrganizationsInput } from "./ListOrganizationsInput";
import { ListOrganizationsOutput } from "./ListOrganizationsOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListOrganizations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListOrganizations",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListOrganizationsInput
  },
  output: {
    shape: ListOrganizationsOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    }
  ]
};
