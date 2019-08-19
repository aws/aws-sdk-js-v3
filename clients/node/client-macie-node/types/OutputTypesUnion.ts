import { AssociateMemberAccountOutput } from "./AssociateMemberAccountOutput";
import { AssociateS3ResourcesOutput } from "./AssociateS3ResourcesOutput";
import { DisassociateMemberAccountOutput } from "./DisassociateMemberAccountOutput";
import { DisassociateS3ResourcesOutput } from "./DisassociateS3ResourcesOutput";
import { ListMemberAccountsOutput } from "./ListMemberAccountsOutput";
import { ListS3ResourcesOutput } from "./ListS3ResourcesOutput";
import { UpdateS3ResourcesOutput } from "./UpdateS3ResourcesOutput";
export type OutputTypesUnion =
  | AssociateMemberAccountOutput
  | AssociateS3ResourcesOutput
  | DisassociateMemberAccountOutput
  | DisassociateS3ResourcesOutput
  | ListMemberAccountsOutput
  | ListS3ResourcesOutput
  | UpdateS3ResourcesOutput;
