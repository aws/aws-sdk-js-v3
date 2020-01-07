import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { CreateJobRequest, CreateJobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateJobCommandInput = CreateJobRequest;
export declare type CreateJobCommandOutput = CreateJobResponse & __MetadataBearer;
export declare class CreateJobCommand extends $Command<CreateJobCommandInput, CreateJobCommandOutput, GlueClientResolvedConfig> {
    readonly input: CreateJobCommandInput;
    constructor(input: CreateJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateJobCommandInput, CreateJobCommandOutput>;
    private serialize;
    private deserialize;
}
