import { CreateLoadBalancerInput } from "./CreateLoadBalancerInput";
import { CreateLoadBalancerOutput } from "./CreateLoadBalancerOutput";
import { DuplicateAccessPointNameException } from "./DuplicateAccessPointNameException";
import { TooManyAccessPointsException } from "./TooManyAccessPointsException";
import { CertificateNotFoundException } from "./CertificateNotFoundException";
import { InvalidConfigurationRequestException } from "./InvalidConfigurationRequestException";
import { SubnetNotFoundException } from "./SubnetNotFoundException";
import { InvalidSubnetException } from "./InvalidSubnetException";
import { InvalidSecurityGroupException } from "./InvalidSecurityGroupException";
import { InvalidSchemeException } from "./InvalidSchemeException";
import { TooManyTagsException } from "./TooManyTagsException";
import { DuplicateTagKeysException } from "./DuplicateTagKeysException";
import { UnsupportedProtocolException } from "./UnsupportedProtocolException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateLoadBalancer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateLoadBalancer",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateLoadBalancerInput
  },
  output: {
    shape: CreateLoadBalancerOutput,
    resultWrapper: "CreateLoadBalancerResult"
  },
  errors: [
    {
      shape: DuplicateAccessPointNameException
    },
    {
      shape: TooManyAccessPointsException
    },
    {
      shape: CertificateNotFoundException
    },
    {
      shape: InvalidConfigurationRequestException
    },
    {
      shape: SubnetNotFoundException
    },
    {
      shape: InvalidSubnetException
    },
    {
      shape: InvalidSecurityGroupException
    },
    {
      shape: InvalidSchemeException
    },
    {
      shape: TooManyTagsException
    },
    {
      shape: DuplicateTagKeysException
    },
    {
      shape: UnsupportedProtocolException
    },
    {
      shape: OperationNotPermittedException
    }
  ]
};
