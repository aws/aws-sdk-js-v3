import { GlobalAcceleratorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlobalAcceleratorClient";
import { UpdateEndpointGroupRequest, UpdateEndpointGroupResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateEndpointGroupCommandInput = UpdateEndpointGroupRequest;
export declare type UpdateEndpointGroupCommandOutput = UpdateEndpointGroupResponse & __MetadataBearer;
export declare class UpdateEndpointGroupCommand extends $Command<UpdateEndpointGroupCommandInput, UpdateEndpointGroupCommandOutput, GlobalAcceleratorClientResolvedConfig> {
    readonly input: UpdateEndpointGroupCommandInput;
    constructor(input: UpdateEndpointGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlobalAcceleratorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateEndpointGroupCommandInput, UpdateEndpointGroupCommandOutput>;
    private serialize;
    private deserialize;
}
