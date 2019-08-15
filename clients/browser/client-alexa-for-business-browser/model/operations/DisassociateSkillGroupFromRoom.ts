import { DisassociateSkillGroupFromRoomInput } from "../shapes/DisassociateSkillGroupFromRoomInput";
import { DisassociateSkillGroupFromRoomOutput } from "../shapes/DisassociateSkillGroupFromRoomOutput";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DisassociateSkillGroupFromRoom: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisassociateSkillGroupFromRoom",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisassociateSkillGroupFromRoomInput
  },
  output: {
    shape: DisassociateSkillGroupFromRoomOutput
  },
  errors: [
    {
      shape: ConcurrentModificationException
    }
  ]
};
