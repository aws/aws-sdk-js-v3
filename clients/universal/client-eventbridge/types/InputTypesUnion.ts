import { ActivateEventSourceInput } from "./ActivateEventSourceInput";
import { CreateEventBusInput } from "./CreateEventBusInput";
import { CreatePartnerEventSourceInput } from "./CreatePartnerEventSourceInput";
import { DeactivateEventSourceInput } from "./DeactivateEventSourceInput";
import { DeleteEventBusInput } from "./DeleteEventBusInput";
import { DeletePartnerEventSourceInput } from "./DeletePartnerEventSourceInput";
import { DeleteRuleInput } from "./DeleteRuleInput";
import { DescribeEventBusInput } from "./DescribeEventBusInput";
import { DescribeEventSourceInput } from "./DescribeEventSourceInput";
import { DescribePartnerEventSourceInput } from "./DescribePartnerEventSourceInput";
import { DescribeRuleInput } from "./DescribeRuleInput";
import { DisableRuleInput } from "./DisableRuleInput";
import { EnableRuleInput } from "./EnableRuleInput";
import { ListEventBusesInput } from "./ListEventBusesInput";
import { ListEventSourcesInput } from "./ListEventSourcesInput";
import { ListPartnerEventSourceAccountsInput } from "./ListPartnerEventSourceAccountsInput";
import { ListPartnerEventSourcesInput } from "./ListPartnerEventSourcesInput";
import { ListRuleNamesByTargetInput } from "./ListRuleNamesByTargetInput";
import { ListRulesInput } from "./ListRulesInput";
import { ListTagsForResourceInput } from "./ListTagsForResourceInput";
import { ListTargetsByRuleInput } from "./ListTargetsByRuleInput";
import { PutEventsInput } from "./PutEventsInput";
import { PutPartnerEventsInput } from "./PutPartnerEventsInput";
import { PutPermissionInput } from "./PutPermissionInput";
import { PutRuleInput } from "./PutRuleInput";
import { PutTargetsInput } from "./PutTargetsInput";
import { RemovePermissionInput } from "./RemovePermissionInput";
import { RemoveTargetsInput } from "./RemoveTargetsInput";
import { TagResourceInput } from "./TagResourceInput";
import { TestEventPatternInput } from "./TestEventPatternInput";
import { UntagResourceInput } from "./UntagResourceInput";
export type InputTypesUnion =
  | ActivateEventSourceInput
  | CreateEventBusInput
  | CreatePartnerEventSourceInput
  | DeactivateEventSourceInput
  | DeleteEventBusInput
  | DeletePartnerEventSourceInput
  | DeleteRuleInput
  | DescribeEventBusInput
  | DescribeEventSourceInput
  | DescribePartnerEventSourceInput
  | DescribeRuleInput
  | DisableRuleInput
  | EnableRuleInput
  | ListEventBusesInput
  | ListEventSourcesInput
  | ListPartnerEventSourceAccountsInput
  | ListPartnerEventSourcesInput
  | ListRuleNamesByTargetInput
  | ListRulesInput
  | ListTagsForResourceInput
  | ListTargetsByRuleInput
  | PutEventsInput
  | PutPartnerEventsInput
  | PutPermissionInput
  | PutRuleInput
  | PutTargetsInput
  | RemovePermissionInput
  | RemoveTargetsInput
  | TagResourceInput
  | TestEventPatternInput
  | UntagResourceInput;
