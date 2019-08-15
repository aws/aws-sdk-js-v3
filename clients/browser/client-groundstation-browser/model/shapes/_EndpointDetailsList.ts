import { List as _List_ } from "@aws-sdk/types";
import { _EndpointDetails } from "./_EndpointDetails";

export const _EndpointDetailsList: _List_ = {
  type: "list",
  member: {
    shape: _EndpointDetails
  }
};
