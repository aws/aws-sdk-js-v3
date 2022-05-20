// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  GenerateDataSetCommand,
  GenerateDataSetCommandInput,
  GenerateDataSetCommandOutput,
} from "./commands/GenerateDataSetCommand";
import {
  StartSupportDataExportCommand,
  StartSupportDataExportCommandInput,
  StartSupportDataExportCommandOutput,
} from "./commands/StartSupportDataExportCommand";
import { MarketplaceCommerceAnalyticsClient } from "./MarketplaceCommerceAnalyticsClient";

/**
 * Provides AWS Marketplace business intelligence data on-demand.
 */
export class MarketplaceCommerceAnalytics extends MarketplaceCommerceAnalyticsClient {
  /**
   * Given a data set type and data set publication date, asynchronously publishes the requested data set to the specified
   *         S3 bucket and notifies the specified SNS topic once the data is available. Returns a unique request identifier that
   *         can be used to correlate requests with notifications from the SNS topic.
   *         Data sets will be published in comma-separated values (CSV) format with the file name {data_set_type}_YYYY-MM-DD.csv.
   *         If a file with the same name already exists (e.g. if the same data set is requested twice), the original file will
   *         be overwritten by the new file.
   *         Requires a Role with an attached permissions policy providing Allow permissions for the following actions:
   *         s3:PutObject, s3:GetBucketLocation, sns:GetTopicAttributes, sns:Publish, iam:GetRolePolicy.
   */
  public generateDataSet(
    args: GenerateDataSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GenerateDataSetCommandOutput>;
  public generateDataSet(
    args: GenerateDataSetCommandInput,
    cb: (err: any, data?: GenerateDataSetCommandOutput) => void
  ): void;
  public generateDataSet(
    args: GenerateDataSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GenerateDataSetCommandOutput) => void
  ): void;
  public generateDataSet(
    args: GenerateDataSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GenerateDataSetCommandOutput) => void),
    cb?: (err: any, data?: GenerateDataSetCommandOutput) => void
  ): Promise<GenerateDataSetCommandOutput> | void {
    const command = new GenerateDataSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * Given a data set type and a from date, asynchronously publishes the requested customer support data
   *         to the specified S3 bucket and notifies the specified SNS topic once the data is available. Returns a unique request
   *         identifier that can be used to correlate requests with notifications from the SNS topic.
   *         Data sets will be published in comma-separated values (CSV) format with the file name {data_set_type}_YYYY-MM-DD'T'HH-mm-ss'Z'.csv.
   *         If a file with the same name already exists (e.g. if the same data set is requested twice), the original file will
   *         be overwritten by the new file.
   *         Requires a Role with an attached permissions policy providing Allow permissions for the following actions:
   *         s3:PutObject, s3:GetBucketLocation, sns:GetTopicAttributes, sns:Publish, iam:GetRolePolicy.
   */
  public startSupportDataExport(
    args: StartSupportDataExportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartSupportDataExportCommandOutput>;
  public startSupportDataExport(
    args: StartSupportDataExportCommandInput,
    cb: (err: any, data?: StartSupportDataExportCommandOutput) => void
  ): void;
  public startSupportDataExport(
    args: StartSupportDataExportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartSupportDataExportCommandOutput) => void
  ): void;
  public startSupportDataExport(
    args: StartSupportDataExportCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartSupportDataExportCommandOutput) => void),
    cb?: (err: any, data?: StartSupportDataExportCommandOutput) => void
  ): Promise<StartSupportDataExportCommandOutput> | void {
    const command = new StartSupportDataExportCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
