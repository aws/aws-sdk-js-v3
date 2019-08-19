import { ListenerNotFoundException } from "./ListenerNotFoundException";
import { RuleNotFoundException } from "./RuleNotFoundException";
import { UnsupportedProtocolException } from "./UnsupportedProtocolException";
export type DescribeRulesExceptionsUnion =
  | ListenerNotFoundException
  | RuleNotFoundException
  | UnsupportedProtocolException;
