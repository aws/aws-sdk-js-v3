import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetJobsRequest, GetJobsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetJobsCommandInput = GetJobsRequest;
export declare type GetJobsCommandOutput = GetJobsResponse & __MetadataBearer;
export declare class GetJobsCommand extends $Command<GetJobsCommandInput, GetJobsCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetJobsCommandInput;
    constructor(input: GetJobsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetJobsCommandInput, GetJobsCommandOutput>;
    private serialize;
    private deserialize;
}
