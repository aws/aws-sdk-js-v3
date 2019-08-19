import { ListSkillsStoreSkillsByCategoryInput } from "../shapes/ListSkillsStoreSkillsByCategoryInput";
import { ListSkillsStoreSkillsByCategoryOutput } from "../shapes/ListSkillsStoreSkillsByCategoryOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListSkillsStoreSkillsByCategory: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListSkillsStoreSkillsByCategory",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListSkillsStoreSkillsByCategoryInput
  },
  output: {
    shape: ListSkillsStoreSkillsByCategoryOutput
  },
  errors: []
};
