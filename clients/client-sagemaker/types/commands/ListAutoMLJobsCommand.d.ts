import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListAutoMLJobsRequest, ListAutoMLJobsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListAutoMLJobsCommandInput = ListAutoMLJobsRequest;
export declare type ListAutoMLJobsCommandOutput = ListAutoMLJobsResponse & __MetadataBearer;
export declare class ListAutoMLJobsCommand extends $Command<ListAutoMLJobsCommandInput, ListAutoMLJobsCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListAutoMLJobsCommandInput;
    constructor(input: ListAutoMLJobsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAutoMLJobsCommandInput, ListAutoMLJobsCommandOutput>;
    private serialize;
    private deserialize;
}
