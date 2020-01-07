import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { CreateEndpointResponse, CreatePlatformEndpointInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreatePlatformEndpointCommandInput = CreatePlatformEndpointInput;
export declare type CreatePlatformEndpointCommandOutput = CreateEndpointResponse & __MetadataBearer;
export declare class CreatePlatformEndpointCommand extends $Command<CreatePlatformEndpointCommandInput, CreatePlatformEndpointCommandOutput, SNSClientResolvedConfig> {
    readonly input: CreatePlatformEndpointCommandInput;
    constructor(input: CreatePlatformEndpointCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SNSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreatePlatformEndpointCommandInput, CreatePlatformEndpointCommandOutput>;
    private serialize;
    private deserialize;
}
