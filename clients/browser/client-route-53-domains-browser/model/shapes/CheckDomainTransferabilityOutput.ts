import { _DomainTransferability } from "./_DomainTransferability";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CheckDomainTransferabilityOutput: _Structure_ = {
  type: "structure",
  required: ["Transferability"],
  members: {
    Transferability: {
      shape: _DomainTransferability
    }
  }
};
