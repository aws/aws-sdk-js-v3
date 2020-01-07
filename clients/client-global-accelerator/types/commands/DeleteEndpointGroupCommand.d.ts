import { GlobalAcceleratorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlobalAcceleratorClient";
import { DeleteEndpointGroupRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteEndpointGroupCommandInput = DeleteEndpointGroupRequest;
export declare type DeleteEndpointGroupCommandOutput = __MetadataBearer;
export declare class DeleteEndpointGroupCommand extends $Command<DeleteEndpointGroupCommandInput, DeleteEndpointGroupCommandOutput, GlobalAcceleratorClientResolvedConfig> {
    readonly input: DeleteEndpointGroupCommandInput;
    constructor(input: DeleteEndpointGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlobalAcceleratorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteEndpointGroupCommandInput, DeleteEndpointGroupCommandOutput>;
    private serialize;
    private deserialize;
}
