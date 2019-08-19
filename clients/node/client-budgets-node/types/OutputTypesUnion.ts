import { CreateBudgetOutput } from "./CreateBudgetOutput";
import { CreateNotificationOutput } from "./CreateNotificationOutput";
import { CreateSubscriberOutput } from "./CreateSubscriberOutput";
import { DeleteBudgetOutput } from "./DeleteBudgetOutput";
import { DeleteNotificationOutput } from "./DeleteNotificationOutput";
import { DeleteSubscriberOutput } from "./DeleteSubscriberOutput";
import { DescribeBudgetOutput } from "./DescribeBudgetOutput";
import { DescribeBudgetPerformanceHistoryOutput } from "./DescribeBudgetPerformanceHistoryOutput";
import { DescribeBudgetsOutput } from "./DescribeBudgetsOutput";
import { DescribeNotificationsForBudgetOutput } from "./DescribeNotificationsForBudgetOutput";
import { DescribeSubscribersForNotificationOutput } from "./DescribeSubscribersForNotificationOutput";
import { UpdateBudgetOutput } from "./UpdateBudgetOutput";
import { UpdateNotificationOutput } from "./UpdateNotificationOutput";
import { UpdateSubscriberOutput } from "./UpdateSubscriberOutput";
export type OutputTypesUnion =
  | CreateBudgetOutput
  | CreateNotificationOutput
  | CreateSubscriberOutput
  | DeleteBudgetOutput
  | DeleteNotificationOutput
  | DeleteSubscriberOutput
  | DescribeBudgetOutput
  | DescribeBudgetPerformanceHistoryOutput
  | DescribeBudgetsOutput
  | DescribeNotificationsForBudgetOutput
  | DescribeSubscribersForNotificationOutput
  | UpdateBudgetOutput
  | UpdateNotificationOutput
  | UpdateSubscriberOutput;
