import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { ListJobsRequest, ListJobsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListJobsCommandInput = ListJobsRequest;
export declare type ListJobsCommandOutput = ListJobsResult & __MetadataBearer;
export declare class ListJobsCommand extends $Command<ListJobsCommandInput, ListJobsCommandOutput, S3ControlClientResolvedConfig> {
    readonly input: ListJobsCommandInput;
    constructor(input: ListJobsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ControlClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListJobsCommandInput, ListJobsCommandOutput>;
    private serialize;
    private deserialize;
}
