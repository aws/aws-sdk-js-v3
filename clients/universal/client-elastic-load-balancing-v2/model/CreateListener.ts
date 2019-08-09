import { CreateListenerInput } from "./CreateListenerInput";
import { CreateListenerOutput } from "./CreateListenerOutput";
import { DuplicateListenerException } from "./DuplicateListenerException";
import { TooManyListenersException } from "./TooManyListenersException";
import { TooManyCertificatesException } from "./TooManyCertificatesException";
import { LoadBalancerNotFoundException } from "./LoadBalancerNotFoundException";
import { TargetGroupNotFoundException } from "./TargetGroupNotFoundException";
import { TargetGroupAssociationLimitException } from "./TargetGroupAssociationLimitException";
import { InvalidConfigurationRequestException } from "./InvalidConfigurationRequestException";
import { IncompatibleProtocolsException } from "./IncompatibleProtocolsException";
import { SSLPolicyNotFoundException } from "./SSLPolicyNotFoundException";
import { CertificateNotFoundException } from "./CertificateNotFoundException";
import { UnsupportedProtocolException } from "./UnsupportedProtocolException";
import { TooManyRegistrationsForTargetIdException } from "./TooManyRegistrationsForTargetIdException";
import { TooManyTargetsException } from "./TooManyTargetsException";
import { TooManyActionsException } from "./TooManyActionsException";
import { InvalidLoadBalancerActionException } from "./InvalidLoadBalancerActionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
