import { ShareDirectoryInput } from "../shapes/ShareDirectoryInput";
import { ShareDirectoryOutput } from "../shapes/ShareDirectoryOutput";
import { DirectoryAlreadySharedException } from "../shapes/DirectoryAlreadySharedException";
import { EntityDoesNotExistException } from "../shapes/EntityDoesNotExistException";
import { InvalidTargetException } from "../shapes/InvalidTargetException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ClientException } from "../shapes/ClientException";
import { ShareLimitExceededException } from "../shapes/ShareLimitExceededException";
import { OrganizationsException } from "../shapes/OrganizationsException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { UnsupportedOperationException } from "../shapes/UnsupportedOperationException";
import { ServiceException } from "../shapes/ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ShareDirectory: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ShareDirectory",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ShareDirectoryInput
  },
  output: {
    shape: ShareDirectoryOutput
  },
  errors: [
    {
      shape: DirectoryAlreadySharedException
    },
    {
      shape: EntityDoesNotExistException
    },
    {
      shape: InvalidTargetException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: ClientException
    },
    {
      shape: ShareLimitExceededException
    },
    {
      shape: OrganizationsException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: UnsupportedOperationException
    },
    {
      shape: ServiceException
    }
  ]
};
