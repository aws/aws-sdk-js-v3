import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { UpdateDevEndpointRequest, UpdateDevEndpointResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateDevEndpointCommandInput = UpdateDevEndpointRequest;
export declare type UpdateDevEndpointCommandOutput = UpdateDevEndpointResponse & __MetadataBearer;
export declare class UpdateDevEndpointCommand extends $Command<UpdateDevEndpointCommandInput, UpdateDevEndpointCommandOutput, GlueClientResolvedConfig> {
    readonly input: UpdateDevEndpointCommandInput;
    constructor(input: UpdateDevEndpointCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDevEndpointCommandInput, UpdateDevEndpointCommandOutput>;
    private serialize;
    private deserialize;
}
