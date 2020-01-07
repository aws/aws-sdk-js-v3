import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetDevEndpointRequest, GetDevEndpointResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetDevEndpointCommandInput = GetDevEndpointRequest;
export declare type GetDevEndpointCommandOutput = GetDevEndpointResponse & __MetadataBearer;
export declare class GetDevEndpointCommand extends $Command<GetDevEndpointCommandInput, GetDevEndpointCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetDevEndpointCommandInput;
    constructor(input: GetDevEndpointCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDevEndpointCommandInput, GetDevEndpointCommandOutput>;
    private serialize;
    private deserialize;
}
