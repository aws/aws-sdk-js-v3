import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListTransformJobsRequest, ListTransformJobsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListTransformJobsCommandInput = ListTransformJobsRequest;
export declare type ListTransformJobsCommandOutput = ListTransformJobsResponse & __MetadataBearer;
export declare class ListTransformJobsCommand extends $Command<ListTransformJobsCommandInput, ListTransformJobsCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListTransformJobsCommandInput;
    constructor(input: ListTransformJobsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTransformJobsCommandInput, ListTransformJobsCommandOutput>;
    private serialize;
    private deserialize;
}
