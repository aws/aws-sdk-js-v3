import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { CreateDevEndpointRequest, CreateDevEndpointResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateDevEndpointCommandInput = CreateDevEndpointRequest;
export declare type CreateDevEndpointCommandOutput = CreateDevEndpointResponse & __MetadataBearer;
export declare class CreateDevEndpointCommand extends $Command<CreateDevEndpointCommandInput, CreateDevEndpointCommandOutput, GlueClientResolvedConfig> {
    readonly input: CreateDevEndpointCommandInput;
    constructor(input: CreateDevEndpointCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDevEndpointCommandInput, CreateDevEndpointCommandOutput>;
    private serialize;
    private deserialize;
}
