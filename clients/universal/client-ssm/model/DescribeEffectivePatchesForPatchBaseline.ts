import { DescribeEffectivePatchesForPatchBaselineInput } from "./DescribeEffectivePatchesForPatchBaselineInput";
import { DescribeEffectivePatchesForPatchBaselineOutput } from "./DescribeEffectivePatchesForPatchBaselineOutput";
import { InvalidResourceId } from "./InvalidResourceId";
import { DoesNotExistException } from "./DoesNotExistException";
import { UnsupportedOperatingSystem } from "./UnsupportedOperatingSystem";
import { InternalServerError } from "./InternalServerError";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
