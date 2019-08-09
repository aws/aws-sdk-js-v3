import { ListRobotApplicationsInput } from "./ListRobotApplicationsInput";
import { ListRobotApplicationsOutput } from "./ListRobotApplicationsOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
