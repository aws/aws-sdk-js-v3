import { CreateBudgetInput } from "./CreateBudgetInput";
import { CreateNotificationInput } from "./CreateNotificationInput";
import { CreateSubscriberInput } from "./CreateSubscriberInput";
import { DeleteBudgetInput } from "./DeleteBudgetInput";
import { DeleteNotificationInput } from "./DeleteNotificationInput";
import { DeleteSubscriberInput } from "./DeleteSubscriberInput";
import { DescribeBudgetInput } from "./DescribeBudgetInput";
import { DescribeBudgetPerformanceHistoryInput } from "./DescribeBudgetPerformanceHistoryInput";
import { DescribeBudgetsInput } from "./DescribeBudgetsInput";
import { DescribeNotificationsForBudgetInput } from "./DescribeNotificationsForBudgetInput";
import { DescribeSubscribersForNotificationInput } from "./DescribeSubscribersForNotificationInput";
import { UpdateBudgetInput } from "./UpdateBudgetInput";
import { UpdateNotificationInput } from "./UpdateNotificationInput";
import { UpdateSubscriberInput } from "./UpdateSubscriberInput";
export type InputTypesUnion =
  | CreateBudgetInput
  | CreateNotificationInput
  | CreateSubscriberInput
  | DeleteBudgetInput
  | DeleteNotificationInput
  | DeleteSubscriberInput
  | DescribeBudgetInput
  | DescribeBudgetPerformanceHistoryInput
  | DescribeBudgetsInput
  | DescribeNotificationsForBudgetInput
  | DescribeSubscribersForNotificationInput
  | UpdateBudgetInput
  | UpdateNotificationInput
  | UpdateSubscriberInput;
