import { ActivateEventSourceOutput } from "./ActivateEventSourceOutput";
import { CreateEventBusOutput } from "./CreateEventBusOutput";
import { CreatePartnerEventSourceOutput } from "./CreatePartnerEventSourceOutput";
import { DeactivateEventSourceOutput } from "./DeactivateEventSourceOutput";
import { DeleteEventBusOutput } from "./DeleteEventBusOutput";
import { DeletePartnerEventSourceOutput } from "./DeletePartnerEventSourceOutput";
import { DeleteRuleOutput } from "./DeleteRuleOutput";
import { DescribeEventBusOutput } from "./DescribeEventBusOutput";
import { DescribeEventSourceOutput } from "./DescribeEventSourceOutput";
import { DescribePartnerEventSourceOutput } from "./DescribePartnerEventSourceOutput";
import { DescribeRuleOutput } from "./DescribeRuleOutput";
import { DisableRuleOutput } from "./DisableRuleOutput";
import { EnableRuleOutput } from "./EnableRuleOutput";
import { ListEventBusesOutput } from "./ListEventBusesOutput";
import { ListEventSourcesOutput } from "./ListEventSourcesOutput";
import { ListPartnerEventSourceAccountsOutput } from "./ListPartnerEventSourceAccountsOutput";
import { ListPartnerEventSourcesOutput } from "./ListPartnerEventSourcesOutput";
import { ListRuleNamesByTargetOutput } from "./ListRuleNamesByTargetOutput";
import { ListRulesOutput } from "./ListRulesOutput";
import { ListTagsForResourceOutput } from "./ListTagsForResourceOutput";
import { ListTargetsByRuleOutput } from "./ListTargetsByRuleOutput";
import { PutEventsOutput } from "./PutEventsOutput";
import { PutPartnerEventsOutput } from "./PutPartnerEventsOutput";
import { PutPermissionOutput } from "./PutPermissionOutput";
import { PutRuleOutput } from "./PutRuleOutput";
import { PutTargetsOutput } from "./PutTargetsOutput";
import { RemovePermissionOutput } from "./RemovePermissionOutput";
import { RemoveTargetsOutput } from "./RemoveTargetsOutput";
import { TagResourceOutput } from "./TagResourceOutput";
import { TestEventPatternOutput } from "./TestEventPatternOutput";
import { UntagResourceOutput } from "./UntagResourceOutput";
export type OutputTypesUnion =
  | ActivateEventSourceOutput
  | CreateEventBusOutput
  | CreatePartnerEventSourceOutput
  | DeactivateEventSourceOutput
  | DeleteEventBusOutput
  | DeletePartnerEventSourceOutput
  | DeleteRuleOutput
  | DescribeEventBusOutput
  | DescribeEventSourceOutput
  | DescribePartnerEventSourceOutput
  | DescribeRuleOutput
  | DisableRuleOutput
  | EnableRuleOutput
  | ListEventBusesOutput
  | ListEventSourcesOutput
  | ListPartnerEventSourceAccountsOutput
  | ListPartnerEventSourcesOutput
  | ListRuleNamesByTargetOutput
  | ListRulesOutput
  | ListTagsForResourceOutput
  | ListTargetsByRuleOutput
  | PutEventsOutput
  | PutPartnerEventsOutput
  | PutPermissionOutput
  | PutRuleOutput
  | PutTargetsOutput
  | RemovePermissionOutput
  | RemoveTargetsOutput
  | TagResourceOutput
  | TestEventPatternOutput
  | UntagResourceOutput;
