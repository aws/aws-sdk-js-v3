import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { DeleteDevEndpointRequest, DeleteDevEndpointResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteDevEndpointCommandInput = DeleteDevEndpointRequest;
export declare type DeleteDevEndpointCommandOutput = DeleteDevEndpointResponse & __MetadataBearer;
export declare class DeleteDevEndpointCommand extends $Command<DeleteDevEndpointCommandInput, DeleteDevEndpointCommandOutput, GlueClientResolvedConfig> {
    readonly input: DeleteDevEndpointCommandInput;
    constructor(input: DeleteDevEndpointCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDevEndpointCommandInput, DeleteDevEndpointCommandOutput>;
    private serialize;
    private deserialize;
}
