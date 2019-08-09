import { CancelResizeInput } from "./CancelResizeInput";
import { CancelResizeOutput } from "./CancelResizeOutput";
import { ClusterNotFoundFault } from "./ClusterNotFoundFault";
import { ResizeNotFoundFault } from "./ResizeNotFoundFault";
import { InvalidClusterStateFault } from "./InvalidClusterStateFault";
import { UnsupportedOperationFault } from "./UnsupportedOperationFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
