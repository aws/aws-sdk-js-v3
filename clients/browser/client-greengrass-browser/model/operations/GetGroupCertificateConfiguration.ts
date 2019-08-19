import { GetGroupCertificateConfigurationInput } from "../shapes/GetGroupCertificateConfigurationInput";
import { GetGroupCertificateConfigurationOutput } from "../shapes/GetGroupCertificateConfigurationOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
