import { ListOfferingTransactionsInput } from "./ListOfferingTransactionsInput";
import { ListOfferingTransactionsOutput } from "./ListOfferingTransactionsOutput";
import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { NotEligibleException } from "./NotEligibleException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
