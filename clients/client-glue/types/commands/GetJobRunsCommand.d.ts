import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetJobRunsRequest, GetJobRunsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetJobRunsCommandInput = GetJobRunsRequest;
export declare type GetJobRunsCommandOutput = GetJobRunsResponse & __MetadataBearer;
export declare class GetJobRunsCommand extends $Command<GetJobRunsCommandInput, GetJobRunsCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetJobRunsCommandInput;
    constructor(input: GetJobRunsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetJobRunsCommandInput, GetJobRunsCommandOutput>;
    private serialize;
    private deserialize;
}
