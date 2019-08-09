import { ModifyListenerInput } from "./ModifyListenerInput";
import { ModifyListenerOutput } from "./ModifyListenerOutput";
import { DuplicateListenerException } from "./DuplicateListenerException";
import { TooManyListenersException } from "./TooManyListenersException";
import { TooManyCertificatesException } from "./TooManyCertificatesException";
import { ListenerNotFoundException } from "./ListenerNotFoundException";
import { TargetGroupNotFoundException } from "./TargetGroupNotFoundException";
import { TargetGroupAssociationLimitException } from "./TargetGroupAssociationLimitException";
import { IncompatibleProtocolsException } from "./IncompatibleProtocolsException";
import { SSLPolicyNotFoundException } from "./SSLPolicyNotFoundException";
import { CertificateNotFoundException } from "./CertificateNotFoundException";
import { InvalidConfigurationRequestException } from "./InvalidConfigurationRequestException";
import { UnsupportedProtocolException } from "./UnsupportedProtocolException";
import { TooManyRegistrationsForTargetIdException } from "./TooManyRegistrationsForTargetIdException";
import { TooManyTargetsException } from "./TooManyTargetsException";
import { TooManyActionsException } from "./TooManyActionsException";
import { InvalidLoadBalancerActionException } from "./InvalidLoadBalancerActionException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
