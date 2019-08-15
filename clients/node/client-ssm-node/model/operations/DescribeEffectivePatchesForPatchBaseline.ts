import { DescribeEffectivePatchesForPatchBaselineInput } from "../shapes/DescribeEffectivePatchesForPatchBaselineInput";
import { DescribeEffectivePatchesForPatchBaselineOutput } from "../shapes/DescribeEffectivePatchesForPatchBaselineOutput";
import { InvalidResourceId } from "../shapes/InvalidResourceId";
import { DoesNotExistException } from "../shapes/DoesNotExistException";
import { UnsupportedOperatingSystem } from "../shapes/UnsupportedOperatingSystem";
import { InternalServerError } from "../shapes/InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeEffectivePatchesForPatchBaseline: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeEffectivePatchesForPatchBaseline",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeEffectivePatchesForPatchBaselineInput
  },
  output: {
    shape: DescribeEffectivePatchesForPatchBaselineOutput
  },
  errors: [
    {
      shape: InvalidResourceId
    },
    {
      shape: DoesNotExistException
    },
    {
      shape: UnsupportedOperatingSystem
    },
    {
      shape: InternalServerError
    }
  ]
};
