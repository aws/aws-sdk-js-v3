import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";
import { ListClusterJobsRequest, ListClusterJobsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListClusterJobsCommandInput = ListClusterJobsRequest;
export declare type ListClusterJobsCommandOutput = ListClusterJobsResult & __MetadataBearer;
export declare class ListClusterJobsCommand extends $Command<ListClusterJobsCommandInput, ListClusterJobsCommandOutput, SnowballClientResolvedConfig> {
    readonly input: ListClusterJobsCommandInput;
    constructor(input: ListClusterJobsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SnowballClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListClusterJobsCommandInput, ListClusterJobsCommandOutput>;
    private serialize;
    private deserialize;
}
