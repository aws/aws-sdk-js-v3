import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { ListJobsRequest, ListJobsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListJobsCommandInput = ListJobsRequest;
export declare type ListJobsCommandOutput = ListJobsResponse & __MetadataBearer;
export declare class ListJobsCommand extends $Command<ListJobsCommandInput, ListJobsCommandOutput, GlueClientResolvedConfig> {
    readonly input: ListJobsCommandInput;
    constructor(input: ListJobsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListJobsCommandInput, ListJobsCommandOutput>;
    private serialize;
    private deserialize;
}
