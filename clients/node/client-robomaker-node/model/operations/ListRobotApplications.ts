import { ListRobotApplicationsInput } from "../shapes/ListRobotApplicationsInput";
import { ListRobotApplicationsOutput } from "../shapes/ListRobotApplicationsOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListRobotApplications: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListRobotApplications",
  http: {
    method: "POST",
    requestUri: "/listRobotApplications"
  },
  input: {
    shape: ListRobotApplicationsInput
  },
  output: {
    shape: ListRobotApplicationsOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalServerException
    }
  ]
};
