import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetJobRunRequest, GetJobRunResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetJobRunCommandInput = GetJobRunRequest;
export declare type GetJobRunCommandOutput = GetJobRunResponse & __MetadataBearer;
export declare class GetJobRunCommand extends $Command<GetJobRunCommandInput, GetJobRunCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetJobRunCommandInput;
    constructor(input: GetJobRunCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetJobRunCommandInput, GetJobRunCommandOutput>;
    private serialize;
    private deserialize;
}
