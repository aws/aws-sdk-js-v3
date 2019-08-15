import { ListDistributionsByWebACLIdInput } from "../shapes/ListDistributionsByWebACLIdInput";
import { ListDistributionsByWebACLIdOutput } from "../shapes/ListDistributionsByWebACLIdOutput";
import { InvalidArgument } from "../shapes/InvalidArgument";
import { InvalidWebACLId } from "../shapes/InvalidWebACLId";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListDistributionsByWebACLId: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListDistributionsByWebACLId",
  http: {
    method: "GET",
    requestUri: "/2019-03-26/distributionsByWebACLId/{WebACLId}"
  },
  input: {
    shape: ListDistributionsByWebACLIdInput
  },
  output: {
    shape: ListDistributionsByWebACLIdOutput
  },
  errors: [
    {
      shape: InvalidArgument
    },
    {
      shape: InvalidWebACLId
    }
  ]
};
