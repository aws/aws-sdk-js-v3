import { ShareDirectoryInput } from "./ShareDirectoryInput";
import { ShareDirectoryOutput } from "./ShareDirectoryOutput";
import { DirectoryAlreadySharedException } from "./DirectoryAlreadySharedException";
import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { InvalidTargetException } from "./InvalidTargetException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ClientException } from "./ClientException";
import { ShareLimitExceededException } from "./ShareLimitExceededException";
import { OrganizationsException } from "./OrganizationsException";
import { AccessDeniedException } from "./AccessDeniedException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
import { ServiceException } from "./ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
