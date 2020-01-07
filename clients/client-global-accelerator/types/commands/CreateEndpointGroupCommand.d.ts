import { GlobalAcceleratorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlobalAcceleratorClient";
import { CreateEndpointGroupRequest, CreateEndpointGroupResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateEndpointGroupCommandInput = CreateEndpointGroupRequest;
export declare type CreateEndpointGroupCommandOutput = CreateEndpointGroupResponse & __MetadataBearer;
export declare class CreateEndpointGroupCommand extends $Command<CreateEndpointGroupCommandInput, CreateEndpointGroupCommandOutput, GlobalAcceleratorClientResolvedConfig> {
    readonly input: CreateEndpointGroupCommandInput;
    constructor(input: CreateEndpointGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlobalAcceleratorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateEndpointGroupCommandInput, CreateEndpointGroupCommandOutput>;
    private serialize;
    private deserialize;
}
