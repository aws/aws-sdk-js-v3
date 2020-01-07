import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { UpdateEndpointRequest, UpdateEndpointResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateEndpointCommandInput = UpdateEndpointRequest;
export declare type UpdateEndpointCommandOutput = UpdateEndpointResponse & __MetadataBearer;
export declare class UpdateEndpointCommand extends $Command<UpdateEndpointCommandInput, UpdateEndpointCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: UpdateEndpointCommandInput;
    constructor(input: UpdateEndpointCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateEndpointCommandInput, UpdateEndpointCommandOutput>;
    private serialize;
    private deserialize;
}
