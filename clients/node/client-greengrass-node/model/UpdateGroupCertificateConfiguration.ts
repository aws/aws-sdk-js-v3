import { UpdateGroupCertificateConfigurationInput } from "./UpdateGroupCertificateConfigurationInput";
import { UpdateGroupCertificateConfigurationOutput } from "./UpdateGroupCertificateConfigurationOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
