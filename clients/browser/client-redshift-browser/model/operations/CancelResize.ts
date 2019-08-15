import { CancelResizeInput } from "../shapes/CancelResizeInput";
import { CancelResizeOutput } from "../shapes/CancelResizeOutput";
import { ClusterNotFoundFault } from "../shapes/ClusterNotFoundFault";
import { ResizeNotFoundFault } from "../shapes/ResizeNotFoundFault";
import { InvalidClusterStateFault } from "../shapes/InvalidClusterStateFault";
import { UnsupportedOperationFault } from "../shapes/UnsupportedOperationFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CancelResize: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CancelResize",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CancelResizeInput
  },
  output: {
    shape: CancelResizeOutput,
    resultWrapper: "CancelResizeResult"
  },
  errors: [
    {
      shape: ClusterNotFoundFault
    },
    {
      shape: ResizeNotFoundFault
    },
    {
      shape: InvalidClusterStateFault
    },
    {
      shape: UnsupportedOperationFault
    }
  ]
};
