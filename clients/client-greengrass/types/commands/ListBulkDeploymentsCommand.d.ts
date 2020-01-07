import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { ListBulkDeploymentsRequest, ListBulkDeploymentsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListBulkDeploymentsCommandInput = ListBulkDeploymentsRequest;
export declare type ListBulkDeploymentsCommandOutput = ListBulkDeploymentsResponse & __MetadataBearer;
export declare class ListBulkDeploymentsCommand extends $Command<ListBulkDeploymentsCommandInput, ListBulkDeploymentsCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: ListBulkDeploymentsCommandInput;
    constructor(input: ListBulkDeploymentsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListBulkDeploymentsCommandInput, ListBulkDeploymentsCommandOutput>;
    private serialize;
    private deserialize;
}
