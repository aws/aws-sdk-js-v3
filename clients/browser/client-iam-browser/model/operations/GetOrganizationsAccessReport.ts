import { GetOrganizationsAccessReportInput } from "../shapes/GetOrganizationsAccessReportInput";
import { GetOrganizationsAccessReportOutput } from "../shapes/GetOrganizationsAccessReportOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetOrganizationsAccessReport: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetOrganizationsAccessReport",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetOrganizationsAccessReportInput
  },
  output: {
    shape: GetOrganizationsAccessReportOutput,
    resultWrapper: "GetOrganizationsAccessReportResult"
  },
  errors: [
    {
      shape: NoSuchEntityException
    }
  ]
};
