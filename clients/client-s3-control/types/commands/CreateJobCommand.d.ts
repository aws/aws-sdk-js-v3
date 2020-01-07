import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { CreateJobRequest, CreateJobResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateJobCommandInput = CreateJobRequest;
export declare type CreateJobCommandOutput = CreateJobResult & __MetadataBearer;
export declare class CreateJobCommand extends $Command<CreateJobCommandInput, CreateJobCommandOutput, S3ControlClientResolvedConfig> {
    readonly input: CreateJobCommandInput;
    constructor(input: CreateJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ControlClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateJobCommandInput, CreateJobCommandOutput>;
    private serialize;
    private deserialize;
}
