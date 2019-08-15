import { AssociateSkillGroupWithRoomInput } from "../shapes/AssociateSkillGroupWithRoomInput";
import { AssociateSkillGroupWithRoomOutput } from "../shapes/AssociateSkillGroupWithRoomOutput";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AssociateSkillGroupWithRoom: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssociateSkillGroupWithRoom",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AssociateSkillGroupWithRoomInput
  },
  output: {
    shape: AssociateSkillGroupWithRoomOutput
  },
  errors: [
    {
      shape: ConcurrentModificationException
    }
  ]
};
