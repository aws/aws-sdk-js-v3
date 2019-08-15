import { CreateLoadBalancerInput } from "../shapes/CreateLoadBalancerInput";
import { CreateLoadBalancerOutput } from "../shapes/CreateLoadBalancerOutput";
import { DuplicateAccessPointNameException } from "../shapes/DuplicateAccessPointNameException";
import { TooManyAccessPointsException } from "../shapes/TooManyAccessPointsException";
import { CertificateNotFoundException } from "../shapes/CertificateNotFoundException";
import { InvalidConfigurationRequestException } from "../shapes/InvalidConfigurationRequestException";
import { SubnetNotFoundException } from "../shapes/SubnetNotFoundException";
import { InvalidSubnetException } from "../shapes/InvalidSubnetException";
import { InvalidSecurityGroupException } from "../shapes/InvalidSecurityGroupException";
import { InvalidSchemeException } from "../shapes/InvalidSchemeException";
import { TooManyTagsException } from "../shapes/TooManyTagsException";
import { DuplicateTagKeysException } from "../shapes/DuplicateTagKeysException";
import { UnsupportedProtocolException } from "../shapes/UnsupportedProtocolException";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
