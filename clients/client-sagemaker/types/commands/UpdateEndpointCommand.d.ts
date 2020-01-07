import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { UpdateEndpointInput, UpdateEndpointOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateEndpointCommandInput = UpdateEndpointInput;
export declare type UpdateEndpointCommandOutput = UpdateEndpointOutput & __MetadataBearer;
export declare class UpdateEndpointCommand extends $Command<UpdateEndpointCommandInput, UpdateEndpointCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: UpdateEndpointCommandInput;
    constructor(input: UpdateEndpointCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateEndpointCommandInput, UpdateEndpointCommandOutput>;
    private serialize;
    private deserialize;
}
