import { ModifyListenerInput } from "../shapes/ModifyListenerInput";
import { ModifyListenerOutput } from "../shapes/ModifyListenerOutput";
import { DuplicateListenerException } from "../shapes/DuplicateListenerException";
import { TooManyListenersException } from "../shapes/TooManyListenersException";
import { TooManyCertificatesException } from "../shapes/TooManyCertificatesException";
import { ListenerNotFoundException } from "../shapes/ListenerNotFoundException";
import { TargetGroupNotFoundException } from "../shapes/TargetGroupNotFoundException";
import { TargetGroupAssociationLimitException } from "../shapes/TargetGroupAssociationLimitException";
import { IncompatibleProtocolsException } from "../shapes/IncompatibleProtocolsException";
import { SSLPolicyNotFoundException } from "../shapes/SSLPolicyNotFoundException";
import { CertificateNotFoundException } from "../shapes/CertificateNotFoundException";
import { InvalidConfigurationRequestException } from "../shapes/InvalidConfigurationRequestException";
import { UnsupportedProtocolException } from "../shapes/UnsupportedProtocolException";
import { TooManyRegistrationsForTargetIdException } from "../shapes/TooManyRegistrationsForTargetIdException";
import { TooManyTargetsException } from "../shapes/TooManyTargetsException";
import { TooManyActionsException } from "../shapes/TooManyActionsException";
import { InvalidLoadBalancerActionException } from "../shapes/InvalidLoadBalancerActionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ModifyListener: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyListener",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyListenerInput
  },
  output: {
    shape: ModifyListenerOutput,
    resultWrapper: "ModifyListenerResult"
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
      shape: ListenerNotFoundException
    },
    {
      shape: TargetGroupNotFoundException
    },
    {
      shape: TargetGroupAssociationLimitException
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
      shape: InvalidConfigurationRequestException
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
