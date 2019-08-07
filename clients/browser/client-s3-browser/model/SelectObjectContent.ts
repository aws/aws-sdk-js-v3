import { SelectObjectContentInput } from "./SelectObjectContentInput";
import { SelectObjectContentOutput } from "./SelectObjectContentOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const SelectObjectContent: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SelectObjectContent",
  http: {
    method: "POST",
    requestUri: "/{Bucket}/{Key+}?select&select-type=2"
  },
  input: {
    shape: SelectObjectContentInput,
    locationName: "SelectObjectContentRequest",
    xmlNamespace: {
      uri: "http://s3.amazonaws.com/doc/2006-03-01/"
    }
  },
  output: {
    shape: SelectObjectContentOutput
  },
  errors: []
};
