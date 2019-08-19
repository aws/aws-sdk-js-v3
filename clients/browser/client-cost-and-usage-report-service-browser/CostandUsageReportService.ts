import { CostandUsageReportServiceClient } from "./CostandUsageReportServiceClient";
import { DeleteReportDefinitionInput } from "./types/DeleteReportDefinitionInput";
import { DeleteReportDefinitionOutput } from "./types/DeleteReportDefinitionOutput";
import { DescribeReportDefinitionsInput } from "./types/DescribeReportDefinitionsInput";
import { DescribeReportDefinitionsOutput } from "./types/DescribeReportDefinitionsOutput";
import { DuplicateReportNameException } from "./types/DuplicateReportNameException";
import { InternalErrorException } from "./types/InternalErrorException";
import { PutReportDefinitionInput } from "./types/PutReportDefinitionInput";
import { PutReportDefinitionOutput } from "./types/PutReportDefinitionOutput";
import { ReportLimitReachedException } from "./types/ReportLimitReachedException";
import { ValidationException } from "./types/ValidationException";
import { DeleteReportDefinitionCommand } from "./commands/DeleteReportDefinitionCommand";
import { DescribeReportDefinitionsCommand } from "./commands/DescribeReportDefinitionsCommand";
import { PutReportDefinitionCommand } from "./commands/PutReportDefinitionCommand";

export class CostandUsageReportService extends CostandUsageReportServiceClient {
  /**
   * <p>Deletes the specified report.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalErrorException} <p>An error on the server occurred during the processing of your request. Try again later.</p>
   *   - {ValidationException} <p>The input fails to satisfy the constraints specified by an AWS service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteReportDefinition(
    args: DeleteReportDefinitionInput
  ): Promise<DeleteReportDefinitionOutput>;
  public deleteReportDefinition(
    args: DeleteReportDefinitionInput,
    cb: (err: any, data?: DeleteReportDefinitionOutput) => void
  ): void;
  public deleteReportDefinition(
    args: DeleteReportDefinitionInput,
    cb?: (err: any, data?: DeleteReportDefinitionOutput) => void
  ): Promise<DeleteReportDefinitionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteReportDefinitionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the AWS Cost and Usage reports available to this account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalErrorException} <p>An error on the server occurred during the processing of your request. Try again later.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeReportDefinitions(
    args: DescribeReportDefinitionsInput
  ): Promise<DescribeReportDefinitionsOutput>;
  public describeReportDefinitions(
    args: DescribeReportDefinitionsInput,
    cb: (err: any, data?: DescribeReportDefinitionsOutput) => void
  ): void;
  public describeReportDefinitions(
    args: DescribeReportDefinitionsInput,
    cb?: (err: any, data?: DescribeReportDefinitionsOutput) => void
  ): Promise<DescribeReportDefinitionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeReportDefinitionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new report using the description that you provide.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {DuplicateReportNameException} <p>A report with the specified name already exists in the account. Specify a different report name.</p>
   *   - {ReportLimitReachedException} <p>This account already has five reports defined. To define a new report, you must delete an existing report.</p>
   *   - {InternalErrorException} <p>An error on the server occurred during the processing of your request. Try again later.</p>
   *   - {ValidationException} <p>The input fails to satisfy the constraints specified by an AWS service.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putReportDefinition(
    args: PutReportDefinitionInput
  ): Promise<PutReportDefinitionOutput>;
  public putReportDefinition(
    args: PutReportDefinitionInput,
    cb: (err: any, data?: PutReportDefinitionOutput) => void
  ): void;
  public putReportDefinition(
    args: PutReportDefinitionInput,
    cb?: (err: any, data?: PutReportDefinitionOutput) => void
  ): Promise<PutReportDefinitionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutReportDefinitionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
