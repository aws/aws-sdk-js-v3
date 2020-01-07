import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { CreatePlatformVersionRequest, CreatePlatformVersionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreatePlatformVersionCommandInput = CreatePlatformVersionRequest;
export declare type CreatePlatformVersionCommandOutput = CreatePlatformVersionResult & __MetadataBearer;
export declare class CreatePlatformVersionCommand extends $Command<CreatePlatformVersionCommandInput, CreatePlatformVersionCommandOutput, ElasticBeanstalkClientResolvedConfig> {
    readonly input: CreatePlatformVersionCommandInput;
    constructor(input: CreatePlatformVersionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticBeanstalkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreatePlatformVersionCommandInput, CreatePlatformVersionCommandOutput>;
    private serialize;
    private deserialize;
}
