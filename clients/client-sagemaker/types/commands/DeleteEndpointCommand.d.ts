import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteEndpointInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteEndpointCommandInput = DeleteEndpointInput;
export declare type DeleteEndpointCommandOutput = __MetadataBearer;
export declare class DeleteEndpointCommand extends $Command<DeleteEndpointCommandInput, DeleteEndpointCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DeleteEndpointCommandInput;
    constructor(input: DeleteEndpointCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteEndpointCommandInput, DeleteEndpointCommandOutput>;
    private serialize;
    private deserialize;
}
