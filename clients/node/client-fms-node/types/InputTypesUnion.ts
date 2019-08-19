import { AssociateAdminAccountInput } from "./AssociateAdminAccountInput";
import { DeleteNotificationChannelInput } from "./DeleteNotificationChannelInput";
import { DeletePolicyInput } from "./DeletePolicyInput";
import { DisassociateAdminAccountInput } from "./DisassociateAdminAccountInput";
import { GetAdminAccountInput } from "./GetAdminAccountInput";
import { GetComplianceDetailInput } from "./GetComplianceDetailInput";
import { GetNotificationChannelInput } from "./GetNotificationChannelInput";
import { GetPolicyInput } from "./GetPolicyInput";
import { GetProtectionStatusInput } from "./GetProtectionStatusInput";
import { ListComplianceStatusInput } from "./ListComplianceStatusInput";
import { ListMemberAccountsInput } from "./ListMemberAccountsInput";
import { ListPoliciesInput } from "./ListPoliciesInput";
import { PutNotificationChannelInput } from "./PutNotificationChannelInput";
import { PutPolicyInput } from "./PutPolicyInput";
export type InputTypesUnion =
  | AssociateAdminAccountInput
  | DeleteNotificationChannelInput
  | DeletePolicyInput
  | DisassociateAdminAccountInput
  | GetAdminAccountInput
  | GetComplianceDetailInput
  | GetNotificationChannelInput
  | GetPolicyInput
  | GetProtectionStatusInput
  | ListComplianceStatusInput
  | ListMemberAccountsInput
  | ListPoliciesInput
  | PutNotificationChannelInput
  | PutPolicyInput;
