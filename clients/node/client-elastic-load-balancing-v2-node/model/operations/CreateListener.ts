import { CreateListenerInput } from "../shapes/CreateListenerInput";
import { CreateListenerOutput } from "../shapes/CreateListenerOutput";
import { DuplicateListenerException } from "../shapes/DuplicateListenerException";
import { TooManyListenersException } from "../shapes/TooManyListenersException";
import { TooManyCertificatesException } from "../shapes/TooManyCertificatesException";
import { LoadBalancerNotFoundException } from "../shapes/LoadBalancerNotFoundException";
import { TargetGroupNotFoundException } from "../shapes/TargetGroupNotFoundException";
import { TargetGroupAssociationLimitException } from "../shapes/TargetGroupAssociationLimitException";
import { InvalidConfigurationRequestException } from "../shapes/InvalidConfigurationRequestException";
import { IncompatibleProtocolsException } from "../shapes/IncompatibleProtocolsException";
import { SSLPolicyNotFoundException } from "../shapes/SSLPolicyNotFoundException";
import { CertificateNotFoundException } from "../shapes/CertificateNotFoundException";
import { UnsupportedProtocolException } from "../shapes/UnsupportedProtocolException";
import { TooManyRegistrationsForTargetIdException } from "../shapes/TooManyRegistrationsForTargetIdException";
import { TooManyTargetsException } from "../shapes/TooManyTargetsException";
import { TooManyActionsException } from "../shapes/TooManyActionsException";
import { InvalidLoadBalancerActionException } from "../shapes/InvalidLoadBalancerActionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateListener: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateListener",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateListenerInput
  },
  output: {
    shape: CreateListenerOutput,
    resultWrapper: "CreateListenerResult"
  },
  errors: [
    {
      shape: DuplicateListenerException
    },
    {
      shape: TooManyListenersException
    },
    {
      shape: TooManyCertificatesException
    },
    {
      shape: LoadBalancerNotFoundException
    },
    {
      shape: TargetGroupNotFoundException
    },
    {
      shape: TargetGroupAssociationLimitException
    },
    {
      shape: InvalidConfigurationRequestException
    },
    {
      shape: IncompatibleProtocolsException
    },
    {
      shape: SSLPolicyNotFoundException
    },
    {
      shape: CertificateNotFoundException
    },
    {
      shape: UnsupportedProtocolException
    },
    {
      shape: TooManyRegistrationsForTargetIdException
    },
    {
      shape: TooManyTargetsException
    },
    {
      shape: TooManyActionsException
    },
    {
      shape: InvalidLoadBalancerActionException
    }
  ]
};
