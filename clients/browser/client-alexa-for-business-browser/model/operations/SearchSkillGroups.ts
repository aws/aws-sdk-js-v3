import { SearchSkillGroupsInput } from "../shapes/SearchSkillGroupsInput";
import { SearchSkillGroupsOutput } from "../shapes/SearchSkillGroupsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SearchSkillGroups: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SearchSkillGroups",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SearchSkillGroupsInput
  },
  output: {
    shape: SearchSkillGroupsOutput
  },
  errors: []
};
