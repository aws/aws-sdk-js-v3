import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { DeleteEndpointRequest, DeleteEndpointResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteEndpointCommandInput = DeleteEndpointRequest;
export declare type DeleteEndpointCommandOutput = DeleteEndpointResponse & __MetadataBearer;
export declare class DeleteEndpointCommand extends $Command<DeleteEndpointCommandInput, DeleteEndpointCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: DeleteEndpointCommandInput;
    constructor(input: DeleteEndpointCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteEndpointCommandInput, DeleteEndpointCommandOutput>;
    private serialize;
    private deserialize;
}
