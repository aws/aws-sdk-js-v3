import { InvokeInput } from "../shapes/InvokeInput";
import { InvokeOutput } from "../shapes/InvokeOutput";
import { ServiceException } from "../shapes/ServiceException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidRequestContentException } from "../shapes/InvalidRequestContentException";
import { RequestTooLargeException } from "../shapes/RequestTooLargeException";
import { UnsupportedMediaTypeException } from "../shapes/UnsupportedMediaTypeException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { EC2UnexpectedException } from "../shapes/EC2UnexpectedException";
import { SubnetIPAddressLimitReachedException } from "../shapes/SubnetIPAddressLimitReachedException";
import { ENILimitReachedException } from "../shapes/ENILimitReachedException";
import { EC2ThrottledException } from "../shapes/EC2ThrottledException";
import { EC2AccessDeniedException } from "../shapes/EC2AccessDeniedException";
import { InvalidSubnetIDException } from "../shapes/InvalidSubnetIDException";
import { InvalidSecurityGroupIDException } from "../shapes/InvalidSecurityGroupIDException";
import { InvalidZipFileException } from "../shapes/InvalidZipFileException";
import { KMSDisabledException } from "../shapes/KMSDisabledException";
import { KMSInvalidStateException } from "../shapes/KMSInvalidStateException";
import { KMSAccessDeniedException } from "../shapes/KMSAccessDeniedException";
import { KMSNotFoundException } from "../shapes/KMSNotFoundException";
import { InvalidRuntimeException } from "../shapes/InvalidRuntimeException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const Invoke: _Operation_ = {
  metadata: ServiceMetadata,
  name: "Invoke",
  http: {
    method: "POST",
    requestUri: "/2015-03-31/functions/{FunctionName}/invocations"
  },
  input: {
    shape: InvokeInput
  },
  output: {
    shape: InvokeOutput
  },
  errors: [
    {
      shape: ServiceException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidRequestContentException
    },
    {
      shape: RequestTooLargeException
    },
    {
      shape: UnsupportedMediaTypeException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: EC2UnexpectedException
    },
    {
      shape: SubnetIPAddressLimitReachedException
    },
    {
      shape: ENILimitReachedException
    },
    {
      shape: EC2ThrottledException
    },
    {
      shape: EC2AccessDeniedException
    },
    {
      shape: InvalidSubnetIDException
    },
    {
      shape: InvalidSecurityGroupIDException
    },
    {
      shape: InvalidZipFileException
    },
    {
      shape: KMSDisabledException
    },
    {
      shape: KMSInvalidStateException
    },
    {
      shape: KMSAccessDeniedException
    },
    {
      shape: KMSNotFoundException
    },
    {
      shape: InvalidRuntimeException
    }
  ]
};
