import { ListDistributionsByWebACLIdInput } from "./ListDistributionsByWebACLIdInput";
import { ListDistributionsByWebACLIdOutput } from "./ListDistributionsByWebACLIdOutput";
import { InvalidArgument } from "./InvalidArgument";
import { InvalidWebACLId } from "./InvalidWebACLId";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListDistributionsByWebACLId2019_03_26: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListDistributionsByWebACLId2019_03_26",
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
