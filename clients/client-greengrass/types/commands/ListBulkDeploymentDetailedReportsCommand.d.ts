import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { ListBulkDeploymentDetailedReportsRequest, ListBulkDeploymentDetailedReportsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListBulkDeploymentDetailedReportsCommandInput = ListBulkDeploymentDetailedReportsRequest;
export declare type ListBulkDeploymentDetailedReportsCommandOutput = ListBulkDeploymentDetailedReportsResponse & __MetadataBearer;
export declare class ListBulkDeploymentDetailedReportsCommand extends $Command<ListBulkDeploymentDetailedReportsCommandInput, ListBulkDeploymentDetailedReportsCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: ListBulkDeploymentDetailedReportsCommandInput;
    constructor(input: ListBulkDeploymentDetailedReportsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListBulkDeploymentDetailedReportsCommandInput, ListBulkDeploymentDetailedReportsCommandOutput>;
    private serialize;
    private deserialize;
}
