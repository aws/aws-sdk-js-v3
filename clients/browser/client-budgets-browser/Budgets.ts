import { BudgetsClient } from "./BudgetsClient";
import { CreateBudgetInput } from "./types/CreateBudgetInput";
import { CreateBudgetOutput } from "./types/CreateBudgetOutput";
import { CreateNotificationInput } from "./types/CreateNotificationInput";
import { CreateNotificationOutput } from "./types/CreateNotificationOutput";
import { CreateSubscriberInput } from "./types/CreateSubscriberInput";
import { CreateSubscriberOutput } from "./types/CreateSubscriberOutput";
import { CreationLimitExceededException } from "./types/CreationLimitExceededException";
import { DeleteBudgetInput } from "./types/DeleteBudgetInput";
import { DeleteBudgetOutput } from "./types/DeleteBudgetOutput";
import { DeleteNotificationInput } from "./types/DeleteNotificationInput";
import { DeleteNotificationOutput } from "./types/DeleteNotificationOutput";
import { DeleteSubscriberInput } from "./types/DeleteSubscriberInput";
import { DeleteSubscriberOutput } from "./types/DeleteSubscriberOutput";
import { DescribeBudgetInput } from "./types/DescribeBudgetInput";
import { DescribeBudgetOutput } from "./types/DescribeBudgetOutput";
import { DescribeBudgetPerformanceHistoryInput } from "./types/DescribeBudgetPerformanceHistoryInput";
import { DescribeBudgetPerformanceHistoryOutput } from "./types/DescribeBudgetPerformanceHistoryOutput";
import { DescribeBudgetsInput } from "./types/DescribeBudgetsInput";
import { DescribeBudgetsOutput } from "./types/DescribeBudgetsOutput";
import { DescribeNotificationsForBudgetInput } from "./types/DescribeNotificationsForBudgetInput";
import { DescribeNotificationsForBudgetOutput } from "./types/DescribeNotificationsForBudgetOutput";
import { DescribeSubscribersForNotificationInput } from "./types/DescribeSubscribersForNotificationInput";
import { DescribeSubscribersForNotificationOutput } from "./types/DescribeSubscribersForNotificationOutput";
import { DuplicateRecordException } from "./types/DuplicateRecordException";
import { ExpiredNextTokenException } from "./types/ExpiredNextTokenException";
import { InternalErrorException } from "./types/InternalErrorException";
import { InvalidNextTokenException } from "./types/InvalidNextTokenException";
import { InvalidParameterException } from "./types/InvalidParameterException";
import { NotFoundException } from "./types/NotFoundException";
import { UpdateBudgetInput } from "./types/UpdateBudgetInput";
import { UpdateBudgetOutput } from "./types/UpdateBudgetOutput";
import { UpdateNotificationInput } from "./types/UpdateNotificationInput";
import { UpdateNotificationOutput } from "./types/UpdateNotificationOutput";
import { UpdateSubscriberInput } from "./types/UpdateSubscriberInput";
import { UpdateSubscriberOutput } from "./types/UpdateSubscriberOutput";
import { CreateBudgetCommand } from "./commands/CreateBudgetCommand";
import { CreateNotificationCommand } from "./commands/CreateNotificationCommand";
import { CreateSubscriberCommand } from "./commands/CreateSubscriberCommand";
import { DeleteBudgetCommand } from "./commands/DeleteBudgetCommand";
import { DeleteNotificationCommand } from "./commands/DeleteNotificationCommand";
import { DeleteSubscriberCommand } from "./commands/DeleteSubscriberCommand";
import { DescribeBudgetCommand } from "./commands/DescribeBudgetCommand";
import { DescribeBudgetPerformanceHistoryCommand } from "./commands/DescribeBudgetPerformanceHistoryCommand";
import { DescribeBudgetsCommand } from "./commands/DescribeBudgetsCommand";
import { DescribeNotificationsForBudgetCommand } from "./commands/DescribeNotificationsForBudgetCommand";
import { DescribeSubscribersForNotificationCommand } from "./commands/DescribeSubscribersForNotificationCommand";
import { UpdateBudgetCommand } from "./commands/UpdateBudgetCommand";
import { UpdateNotificationCommand } from "./commands/UpdateNotificationCommand";
import { UpdateSubscriberCommand } from "./commands/UpdateSubscriberCommand";

export class Budgets extends BudgetsClient {
  /**
   * <p>Creates a budget and, if included, notifications and subscribers. </p> <important> <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_CreateBudget.html#API_CreateBudget_Examples">Examples</a> section. </p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
   *   - {InternalErrorException} <p>An error on the server occurred during the processing of your request. Try again later.</p>
   *   - {CreationLimitExceededException} <p>You've exceeded the notification or subscriber limit.</p>
   *   - {DuplicateRecordException} <p>The budget name already exists. Budget names must be unique within an account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createBudget(args: CreateBudgetInput): Promise<CreateBudgetOutput>;
  public createBudget(
    args: CreateBudgetInput,
    cb: (err: any, data?: CreateBudgetOutput) => void
  ): void;
  public createBudget(
    args: CreateBudgetInput,
    cb?: (err: any, data?: CreateBudgetOutput) => void
  ): Promise<CreateBudgetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateBudgetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a notification. You must create the budget before you create the associated notification.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalErrorException} <p>An error on the server occurred during the processing of your request. Try again later.</p>
   *   - {InvalidParameterException} <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
   *   - {NotFoundException} <p>We can’t locate the resource that you specified.</p>
   *   - {CreationLimitExceededException} <p>You've exceeded the notification or subscriber limit.</p>
   *   - {DuplicateRecordException} <p>The budget name already exists. Budget names must be unique within an account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createNotification(
    args: CreateNotificationInput
  ): Promise<CreateNotificationOutput>;
  public createNotification(
    args: CreateNotificationInput,
    cb: (err: any, data?: CreateNotificationOutput) => void
  ): void;
  public createNotification(
    args: CreateNotificationInput,
    cb?: (err: any, data?: CreateNotificationOutput) => void
  ): Promise<CreateNotificationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateNotificationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a subscriber. You must create the associated budget and notification before you create the subscriber.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalErrorException} <p>An error on the server occurred during the processing of your request. Try again later.</p>
   *   - {InvalidParameterException} <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
   *   - {CreationLimitExceededException} <p>You've exceeded the notification or subscriber limit.</p>
   *   - {DuplicateRecordException} <p>The budget name already exists. Budget names must be unique within an account.</p>
   *   - {NotFoundException} <p>We can’t locate the resource that you specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createSubscriber(
    args: CreateSubscriberInput
  ): Promise<CreateSubscriberOutput>;
  public createSubscriber(
    args: CreateSubscriberInput,
    cb: (err: any, data?: CreateSubscriberOutput) => void
  ): void;
  public createSubscriber(
    args: CreateSubscriberInput,
    cb?: (err: any, data?: CreateSubscriberOutput) => void
  ): Promise<CreateSubscriberOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateSubscriberCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a budget. You can delete your budget at any time.</p> <important> <p>Deleting a budget also deletes the notifications and subscribers that are associated with that budget.</p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalErrorException} <p>An error on the server occurred during the processing of your request. Try again later.</p>
   *   - {InvalidParameterException} <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
   *   - {NotFoundException} <p>We can’t locate the resource that you specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteBudget(args: DeleteBudgetInput): Promise<DeleteBudgetOutput>;
  public deleteBudget(
    args: DeleteBudgetInput,
    cb: (err: any, data?: DeleteBudgetOutput) => void
  ): void;
  public deleteBudget(
    args: DeleteBudgetInput,
    cb?: (err: any, data?: DeleteBudgetOutput) => void
  ): Promise<DeleteBudgetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteBudgetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a notification.</p> <important> <p>Deleting a notification also deletes the subscribers that are associated with the notification.</p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidParameterException} <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
   *   - {InternalErrorException} <p>An error on the server occurred during the processing of your request. Try again later.</p>
   *   - {NotFoundException} <p>We can’t locate the resource that you specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteNotification(
    args: DeleteNotificationInput
  ): Promise<DeleteNotificationOutput>;
  public deleteNotification(
    args: DeleteNotificationInput,
    cb: (err: any, data?: DeleteNotificationOutput) => void
  ): void;
  public deleteNotification(
    args: DeleteNotificationInput,
    cb?: (err: any, data?: DeleteNotificationOutput) => void
  ): Promise<DeleteNotificationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteNotificationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a subscriber.</p> <important> <p>Deleting the last subscriber to a notification also deletes the notification.</p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalErrorException} <p>An error on the server occurred during the processing of your request. Try again later.</p>
   *   - {InvalidParameterException} <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
   *   - {NotFoundException} <p>We can’t locate the resource that you specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteSubscriber(
    args: DeleteSubscriberInput
  ): Promise<DeleteSubscriberOutput>;
  public deleteSubscriber(
    args: DeleteSubscriberInput,
    cb: (err: any, data?: DeleteSubscriberOutput) => void
  ): void;
  public deleteSubscriber(
    args: DeleteSubscriberInput,
    cb?: (err: any, data?: DeleteSubscriberOutput) => void
  ): Promise<DeleteSubscriberOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteSubscriberCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes a budget.</p> <important> <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudget.html#API_DescribeBudget_Examples">Examples</a> section. </p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalErrorException} <p>An error on the server occurred during the processing of your request. Try again later.</p>
   *   - {InvalidParameterException} <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
   *   - {NotFoundException} <p>We can’t locate the resource that you specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeBudget(
    args: DescribeBudgetInput
  ): Promise<DescribeBudgetOutput>;
  public describeBudget(
    args: DescribeBudgetInput,
    cb: (err: any, data?: DescribeBudgetOutput) => void
  ): void;
  public describeBudget(
    args: DescribeBudgetInput,
    cb?: (err: any, data?: DescribeBudgetOutput) => void
  ): Promise<DescribeBudgetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeBudgetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the history for <code>DAILY</code>, <code>MONTHLY</code>, and <code>QUARTERLY</code> budgets. Budget history isn't available for <code>ANNUAL</code> budgets.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalErrorException} <p>An error on the server occurred during the processing of your request. Try again later.</p>
   *   - {InvalidParameterException} <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
   *   - {NotFoundException} <p>We can’t locate the resource that you specified.</p>
   *   - {InvalidNextTokenException} <p>The pagination token is invalid.</p>
   *   - {ExpiredNextTokenException} <p>The pagination token expired.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeBudgetPerformanceHistory(
    args: DescribeBudgetPerformanceHistoryInput
  ): Promise<DescribeBudgetPerformanceHistoryOutput>;
  public describeBudgetPerformanceHistory(
    args: DescribeBudgetPerformanceHistoryInput,
    cb: (err: any, data?: DescribeBudgetPerformanceHistoryOutput) => void
  ): void;
  public describeBudgetPerformanceHistory(
    args: DescribeBudgetPerformanceHistoryInput,
    cb?: (err: any, data?: DescribeBudgetPerformanceHistoryOutput) => void
  ): Promise<DescribeBudgetPerformanceHistoryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeBudgetPerformanceHistoryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the budgets that are associated with an account.</p> <important> <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudgets.html#API_DescribeBudgets_Examples">Examples</a> section. </p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalErrorException} <p>An error on the server occurred during the processing of your request. Try again later.</p>
   *   - {InvalidParameterException} <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
   *   - {NotFoundException} <p>We can’t locate the resource that you specified.</p>
   *   - {InvalidNextTokenException} <p>The pagination token is invalid.</p>
   *   - {ExpiredNextTokenException} <p>The pagination token expired.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeBudgets(
    args: DescribeBudgetsInput
  ): Promise<DescribeBudgetsOutput>;
  public describeBudgets(
    args: DescribeBudgetsInput,
    cb: (err: any, data?: DescribeBudgetsOutput) => void
  ): void;
  public describeBudgets(
    args: DescribeBudgetsInput,
    cb?: (err: any, data?: DescribeBudgetsOutput) => void
  ): Promise<DescribeBudgetsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeBudgetsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the notifications that are associated with a budget.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalErrorException} <p>An error on the server occurred during the processing of your request. Try again later.</p>
   *   - {InvalidParameterException} <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
   *   - {NotFoundException} <p>We can’t locate the resource that you specified.</p>
   *   - {InvalidNextTokenException} <p>The pagination token is invalid.</p>
   *   - {ExpiredNextTokenException} <p>The pagination token expired.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeNotificationsForBudget(
    args: DescribeNotificationsForBudgetInput
  ): Promise<DescribeNotificationsForBudgetOutput>;
  public describeNotificationsForBudget(
    args: DescribeNotificationsForBudgetInput,
    cb: (err: any, data?: DescribeNotificationsForBudgetOutput) => void
  ): void;
  public describeNotificationsForBudget(
    args: DescribeNotificationsForBudgetInput,
    cb?: (err: any, data?: DescribeNotificationsForBudgetOutput) => void
  ): Promise<DescribeNotificationsForBudgetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeNotificationsForBudgetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the subscribers that are associated with a notification.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalErrorException} <p>An error on the server occurred during the processing of your request. Try again later.</p>
   *   - {NotFoundException} <p>We can’t locate the resource that you specified.</p>
   *   - {InvalidParameterException} <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
   *   - {InvalidNextTokenException} <p>The pagination token is invalid.</p>
   *   - {ExpiredNextTokenException} <p>The pagination token expired.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeSubscribersForNotification(
    args: DescribeSubscribersForNotificationInput
  ): Promise<DescribeSubscribersForNotificationOutput>;
  public describeSubscribersForNotification(
    args: DescribeSubscribersForNotificationInput,
    cb: (err: any, data?: DescribeSubscribersForNotificationOutput) => void
  ): void;
  public describeSubscribersForNotification(
    args: DescribeSubscribersForNotificationInput,
    cb?: (err: any, data?: DescribeSubscribersForNotificationOutput) => void
  ): Promise<DescribeSubscribersForNotificationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeSubscribersForNotificationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a budget. You can change every part of a budget except for the <code>budgetName</code> and the <code>calculatedSpend</code>. When you modify a budget, the <code>calculatedSpend</code> drops to zero until AWS has new usage data to use for forecasting.</p> <important> <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_UpdateBudget.html#API_UpdateBudget_Examples">Examples</a> section. </p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalErrorException} <p>An error on the server occurred during the processing of your request. Try again later.</p>
   *   - {InvalidParameterException} <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
   *   - {NotFoundException} <p>We can’t locate the resource that you specified.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateBudget(args: UpdateBudgetInput): Promise<UpdateBudgetOutput>;
  public updateBudget(
    args: UpdateBudgetInput,
    cb: (err: any, data?: UpdateBudgetOutput) => void
  ): void;
  public updateBudget(
    args: UpdateBudgetInput,
    cb?: (err: any, data?: UpdateBudgetOutput) => void
  ): Promise<UpdateBudgetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateBudgetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a notification.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalErrorException} <p>An error on the server occurred during the processing of your request. Try again later.</p>
   *   - {InvalidParameterException} <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
   *   - {NotFoundException} <p>We can’t locate the resource that you specified.</p>
   *   - {DuplicateRecordException} <p>The budget name already exists. Budget names must be unique within an account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateNotification(
    args: UpdateNotificationInput
  ): Promise<UpdateNotificationOutput>;
  public updateNotification(
    args: UpdateNotificationInput,
    cb: (err: any, data?: UpdateNotificationOutput) => void
  ): void;
  public updateNotification(
    args: UpdateNotificationInput,
    cb?: (err: any, data?: UpdateNotificationOutput) => void
  ): Promise<UpdateNotificationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateNotificationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a subscriber.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalErrorException} <p>An error on the server occurred during the processing of your request. Try again later.</p>
   *   - {InvalidParameterException} <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
   *   - {NotFoundException} <p>We can’t locate the resource that you specified.</p>
   *   - {DuplicateRecordException} <p>The budget name already exists. Budget names must be unique within an account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateSubscriber(
    args: UpdateSubscriberInput
  ): Promise<UpdateSubscriberOutput>;
  public updateSubscriber(
    args: UpdateSubscriberInput,
    cb: (err: any, data?: UpdateSubscriberOutput) => void
  ): void;
  public updateSubscriber(
    args: UpdateSubscriberInput,
    cb?: (err: any, data?: UpdateSubscriberOutput) => void
  ): Promise<UpdateSubscriberOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateSubscriberCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
