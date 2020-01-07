import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { CreateRealtimeEndpointInput, CreateRealtimeEndpointOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateRealtimeEndpointCommandInput = CreateRealtimeEndpointInput;
export declare type CreateRealtimeEndpointCommandOutput = CreateRealtimeEndpointOutput & __MetadataBearer;
export declare class CreateRealtimeEndpointCommand extends $Command<CreateRealtimeEndpointCommandInput, CreateRealtimeEndpointCommandOutput, MachineLearningClientResolvedConfig> {
    readonly input: CreateRealtimeEndpointCommandInput;
    constructor(input: CreateRealtimeEndpointCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MachineLearningClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateRealtimeEndpointCommandInput, CreateRealtimeEndpointCommandOutput>;
    private serialize;
    private deserialize;
}
