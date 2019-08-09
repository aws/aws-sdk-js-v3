import { ListSkillsStoreCategoriesInput } from "./ListSkillsStoreCategoriesInput";
import { ListSkillsStoreCategoriesOutput } from "./ListSkillsStoreCategoriesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListSkillsStoreCategories: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListSkillsStoreCategories",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListSkillsStoreCategoriesInput
  },
  output: {
    shape: ListSkillsStoreCategoriesOutput
  },
  errors: []
};
