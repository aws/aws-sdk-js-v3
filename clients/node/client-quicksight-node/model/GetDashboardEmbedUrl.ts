import { GetDashboardEmbedUrlInput } from "./GetDashboardEmbedUrlInput";
import { GetDashboardEmbedUrlOutput } from "./GetDashboardEmbedUrlOutput";
import { AccessDeniedException } from "./AccessDeniedException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ResourceExistsException } from "./ResourceExistsException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { PreconditionNotMetException } from "./PreconditionNotMetException";
import { DomainNotWhitelistedException } from "./DomainNotWhitelistedException";
import { QuickSightUserNotFoundException } from "./QuickSightUserNotFoundException";
import { IdentityTypeNotSupportedException } from "./IdentityTypeNotSupportedException";
import { SessionLifetimeInMinutesInvalidException } from "./SessionLifetimeInMinutesInvalidException";
import { UnsupportedUserEditionException } from "./UnsupportedUserEditionException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceUnavailableException } from "./ResourceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetDashboardEmbedUrl: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDashboardEmbedUrl",
  http: {
    method: "GET",
    requestUri: "/accounts/{AwsAccountId}/dashboards/{DashboardId}/embed-url"
  },
  input: {
    shape: GetDashboardEmbedUrlInput
  },
  output: {
    shape: GetDashboardEmbedUrlOutput
  },
  errors: [
    {
      shape: AccessDeniedException
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: ResourceExistsException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: PreconditionNotMetException
    },
    {
      shape: DomainNotWhitelistedException
    },
    {
      shape: QuickSightUserNotFoundException
    },
    {
      shape: IdentityTypeNotSupportedException
    },
    {
      shape: SessionLifetimeInMinutesInvalidException
    },
    {
      shape: UnsupportedUserEditionException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ResourceUnavailableException
    }
  ]
};
