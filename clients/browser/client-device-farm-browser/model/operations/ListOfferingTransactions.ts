import { ListOfferingTransactionsInput } from "../shapes/ListOfferingTransactionsInput";
import { ListOfferingTransactionsOutput } from "../shapes/ListOfferingTransactionsOutput";
import { ArgumentException } from "../shapes/ArgumentException";
import { NotFoundException } from "../shapes/NotFoundException";
import { NotEligibleException } from "../shapes/NotEligibleException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceAccountException } from "../shapes/ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListOfferingTransactions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListOfferingTransactions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListOfferingTransactionsInput
  },
  output: {
    shape: ListOfferingTransactionsOutput
  },
  errors: [
    {
      shape: ArgumentException
    },
    {
      shape: NotFoundException
    },
    {
      shape: NotEligibleException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ServiceAccountException
    }
  ]
};
