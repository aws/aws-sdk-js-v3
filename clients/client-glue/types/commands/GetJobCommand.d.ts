import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetJobRequest, GetJobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetJobCommandInput = GetJobRequest;
export declare type GetJobCommandOutput = GetJobResponse & __MetadataBearer;
export declare class GetJobCommand extends $Command<GetJobCommandInput, GetJobCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetJobCommandInput;
    constructor(input: GetJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetJobCommandInput, GetJobCommandOutput>;
    private serialize;
    private deserialize;
}
