import { MarketplaceCommerceAnalyticsClient } from "./MarketplaceCommerceAnalyticsClient";
import { GenerateDataSetCommandInput, GenerateDataSetCommandOutput } from "./commands/GenerateDataSetCommand";
import { StartSupportDataExportCommandInput, StartSupportDataExportCommandOutput } from "./commands/StartSupportDataExportCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * Provides AWS Marketplace business intelligence data on-demand.
 */
export declare class MarketplaceCommerceAnalytics extends MarketplaceCommerceAnalyticsClient {
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
    generateDataSet(args: GenerateDataSetCommandInput, options?: __HttpHandlerOptions): Promise<GenerateDataSetCommandOutput>;
    generateDataSet(args: GenerateDataSetCommandInput, cb: (err: any, data?: GenerateDataSetCommandOutput) => void): void;
    generateDataSet(args: GenerateDataSetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GenerateDataSetCommandOutput) => void): void;
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
    startSupportDataExport(args: StartSupportDataExportCommandInput, options?: __HttpHandlerOptions): Promise<StartSupportDataExportCommandOutput>;
    startSupportDataExport(args: StartSupportDataExportCommandInput, cb: (err: any, data?: StartSupportDataExportCommandOutput) => void): void;
    startSupportDataExport(args: StartSupportDataExportCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartSupportDataExportCommandOutput) => void): void;
}
