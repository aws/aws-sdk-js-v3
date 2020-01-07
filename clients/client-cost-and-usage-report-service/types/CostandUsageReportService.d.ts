import { CostandUsageReportServiceClient } from "./CostandUsageReportServiceClient";
import { DeleteReportDefinitionCommandInput, DeleteReportDefinitionCommandOutput } from "./commands/DeleteReportDefinitionCommand";
import { DescribeReportDefinitionsCommandInput, DescribeReportDefinitionsCommandOutput } from "./commands/DescribeReportDefinitionsCommand";
import { ModifyReportDefinitionCommandInput, ModifyReportDefinitionCommandOutput } from "./commands/ModifyReportDefinitionCommand";
import { PutReportDefinitionCommandInput, PutReportDefinitionCommandOutput } from "./commands/PutReportDefinitionCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>The AWS Cost and Usage Report API enables you to programmatically create, query, and delete
 *         AWS Cost and Usage report definitions.</p>
 *          <p>AWS Cost and Usage reports track the monthly AWS costs and usage
 *    associated with your AWS account.
 *
 *         The report contains line items for each unique combination of AWS product,
 *         usage type, and operation that your AWS account uses.
 *
 *         You can configure the AWS Cost and Usage report to show only the data that you want, using the
 *         AWS Cost and Usage API.</p>
 *
 *
 *          <p>Service Endpoint</p>
 *          <p>The AWS Cost and Usage Report API provides the following endpoint:</p>
 *          <ul>
 *             <li>
 *                <p>cur.us-east-1.amazonaws.com</p>
 *             </li>
 *          </ul>
 */
export declare class CostandUsageReportService extends CostandUsageReportServiceClient {
    /**
     * <p>Deletes the specified report.</p>
     */
    deleteReportDefinition(args: DeleteReportDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteReportDefinitionCommandOutput>;
    deleteReportDefinition(args: DeleteReportDefinitionCommandInput, cb: (err: any, data?: DeleteReportDefinitionCommandOutput) => void): void;
    deleteReportDefinition(args: DeleteReportDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteReportDefinitionCommandOutput) => void): void;
    /**
     * <p>Lists the AWS Cost and Usage reports available to this account.</p>
     */
    describeReportDefinitions(args: DescribeReportDefinitionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeReportDefinitionsCommandOutput>;
    describeReportDefinitions(args: DescribeReportDefinitionsCommandInput, cb: (err: any, data?: DescribeReportDefinitionsCommandOutput) => void): void;
    describeReportDefinitions(args: DescribeReportDefinitionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeReportDefinitionsCommandOutput) => void): void;
    /**
     * <p>Allows you to programatically update your report preferences.</p>
     */
    modifyReportDefinition(args: ModifyReportDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<ModifyReportDefinitionCommandOutput>;
    modifyReportDefinition(args: ModifyReportDefinitionCommandInput, cb: (err: any, data?: ModifyReportDefinitionCommandOutput) => void): void;
    modifyReportDefinition(args: ModifyReportDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ModifyReportDefinitionCommandOutput) => void): void;
    /**
     * <p>Creates a new report using the description that you provide.</p>
     */
    putReportDefinition(args: PutReportDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<PutReportDefinitionCommandOutput>;
    putReportDefinition(args: PutReportDefinitionCommandInput, cb: (err: any, data?: PutReportDefinitionCommandOutput) => void): void;
    putReportDefinition(args: PutReportDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutReportDefinitionCommandOutput) => void): void;
}
