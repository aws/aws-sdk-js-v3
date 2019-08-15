import { UpdateGroupCertificateConfigurationInput } from "../shapes/UpdateGroupCertificateConfigurationInput";
import { UpdateGroupCertificateConfigurationOutput } from "../shapes/UpdateGroupCertificateConfigurationOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateGroupCertificateConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateGroupCertificateConfiguration",
  http: {
    method: "PUT",
    requestUri:
      "/greengrass/groups/{GroupId}/certificateauthorities/configuration/expiry"
  },
  input: {
    shape: UpdateGroupCertificateConfigurationInput
  },
  output: {
    shape: UpdateGroupCertificateConfigurationOutput
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
