import { GetGroupCertificateConfigurationInput } from "./GetGroupCertificateConfigurationInput";
import { GetGroupCertificateConfigurationOutput } from "./GetGroupCertificateConfigurationOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetGroupCertificateConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetGroupCertificateConfiguration",
  http: {
    method: "GET",
    requestUri:
      "/greengrass/groups/{GroupId}/certificateauthorities/configuration/expiry"
  },
  input: {
    shape: GetGroupCertificateConfigurationInput
  },
  output: {
    shape: GetGroupCertificateConfigurationOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: InternalServerErrorException
    }
  ]
};
