import { MarketplaceCommerceAnalyticsClient } from "./MarketplaceCommerceAnalyticsClient";
import { GenerateDataSetInput } from "./types/GenerateDataSetInput";
import { GenerateDataSetOutput } from "./types/GenerateDataSetOutput";
import { MarketplaceCommerceAnalyticsException } from "./types/MarketplaceCommerceAnalyticsException";
import { StartSupportDataExportInput } from "./types/StartSupportDataExportInput";
import { StartSupportDataExportOutput } from "./types/StartSupportDataExportOutput";
import { GenerateDataSetCommand } from "./commands/GenerateDataSetCommand";
import { StartSupportDataExportCommand } from "./commands/StartSupportDataExportCommand";

export class MarketplaceCommerceAnalytics extends MarketplaceCommerceAnalyticsClient {
  /**
   * Given a data set type and data set publication date, asynchronously publishes the requested data set to the specified S3 bucket and notifies the specified SNS topic once the data is available. Returns a unique request identifier that can be used to correlate requests with notifications from the SNS topic. Data sets will be published in comma-separated values (CSV) format with the file name {data_set_type}_YYYY-MM-DD.csv. If a file with the same name already exists (e.g. if the same data set is requested twice), the original file will be overwritten by the new file. Requires a Role with an attached permissions policy providing Allow permissions for the following actions: s3:PutObject, s3:GetBucketLocation, sns:GetTopicAttributes, sns:Publish, iam:GetRolePolicy.
   *
   * This operation may fail with one of the following errors:
   *   - {MarketplaceCommerceAnalyticsException} This exception is thrown when an internal service error occurs.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public generateDataSet(
    args: GenerateDataSetInput
  ): Promise<GenerateDataSetOutput>;
  public generateDataSet(
    args: GenerateDataSetInput,
    cb: (err: any, data?: GenerateDataSetOutput) => void
  ): void;
  public generateDataSet(
    args: GenerateDataSetInput,
    cb?: (err: any, data?: GenerateDataSetOutput) => void
  ): Promise<GenerateDataSetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GenerateDataSetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * Given a data set type and a from date, asynchronously publishes the requested customer support data to the specified S3 bucket and notifies the specified SNS topic once the data is available. Returns a unique request identifier that can be used to correlate requests with notifications from the SNS topic. Data sets will be published in comma-separated values (CSV) format with the file name {data_set_type}_YYYY-MM-DD'T'HH-mm-ss'Z'.csv. If a file with the same name already exists (e.g. if the same data set is requested twice), the original file will be overwritten by the new file. Requires a Role with an attached permissions policy providing Allow permissions for the following actions: s3:PutObject, s3:GetBucketLocation, sns:GetTopicAttributes, sns:Publish, iam:GetRolePolicy.
   *
   * This operation may fail with one of the following errors:
   *   - {MarketplaceCommerceAnalyticsException} This exception is thrown when an internal service error occurs.
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startSupportDataExport(
    args: StartSupportDataExportInput
  ): Promise<StartSupportDataExportOutput>;
  public startSupportDataExport(
    args: StartSupportDataExportInput,
    cb: (err: any, data?: StartSupportDataExportOutput) => void
  ): void;
  public startSupportDataExport(
    args: StartSupportDataExportInput,
    cb?: (err: any, data?: StartSupportDataExportOutput) => void
  ): Promise<StartSupportDataExportOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartSupportDataExportCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
