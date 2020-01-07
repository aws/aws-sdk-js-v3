import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListCompilationJobsRequest, ListCompilationJobsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListCompilationJobsCommandInput = ListCompilationJobsRequest;
export declare type ListCompilationJobsCommandOutput = ListCompilationJobsResponse & __MetadataBearer;
export declare class ListCompilationJobsCommand extends $Command<ListCompilationJobsCommandInput, ListCompilationJobsCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListCompilationJobsCommandInput;
    constructor(input: ListCompilationJobsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListCompilationJobsCommandInput, ListCompilationJobsCommandOutput>;
    private serialize;
    private deserialize;
}
