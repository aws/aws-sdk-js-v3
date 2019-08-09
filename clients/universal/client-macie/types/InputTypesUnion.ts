import { AssociateMemberAccountInput } from "./AssociateMemberAccountInput";
import { AssociateS3ResourcesInput } from "./AssociateS3ResourcesInput";
import { DisassociateMemberAccountInput } from "./DisassociateMemberAccountInput";
import { DisassociateS3ResourcesInput } from "./DisassociateS3ResourcesInput";
import { ListMemberAccountsInput } from "./ListMemberAccountsInput";
import { ListS3ResourcesInput } from "./ListS3ResourcesInput";
import { UpdateS3ResourcesInput } from "./UpdateS3ResourcesInput";
export type InputTypesUnion =
  | AssociateMemberAccountInput
  | AssociateS3ResourcesInput
  | DisassociateMemberAccountInput
  | DisassociateS3ResourcesInput
  | ListMemberAccountsInput
  | ListS3ResourcesInput
  | UpdateS3ResourcesInput;
