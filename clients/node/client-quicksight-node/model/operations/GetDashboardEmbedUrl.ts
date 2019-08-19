import { GetDashboardEmbedUrlInput } from "../shapes/GetDashboardEmbedUrlInput";
import { GetDashboardEmbedUrlOutput } from "../shapes/GetDashboardEmbedUrlOutput";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { ResourceExistsException } from "../shapes/ResourceExistsException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { PreconditionNotMetException } from "../shapes/PreconditionNotMetException";
import { DomainNotWhitelistedException } from "../shapes/DomainNotWhitelistedException";
import { QuickSightUserNotFoundException } from "../shapes/QuickSightUserNotFoundException";
import { IdentityTypeNotSupportedException } from "../shapes/IdentityTypeNotSupportedException";
import { SessionLifetimeInMinutesInvalidException } from "../shapes/SessionLifetimeInMinutesInvalidException";
import { UnsupportedUserEditionException } from "../shapes/UnsupportedUserEditionException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ResourceUnavailableException } from "../shapes/ResourceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
