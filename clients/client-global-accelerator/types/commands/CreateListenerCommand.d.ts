import { GlobalAcceleratorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlobalAcceleratorClient";
import { CreateListenerRequest, CreateListenerResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateListenerCommandInput = CreateListenerRequest;
export declare type CreateListenerCommandOutput = CreateListenerResponse & __MetadataBearer;
export declare class CreateListenerCommand extends $Command<CreateListenerCommandInput, CreateListenerCommandOutput, GlobalAcceleratorClientResolvedConfig> {
    readonly input: CreateListenerCommandInput;
    constructor(input: CreateListenerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlobalAcceleratorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateListenerCommandInput, CreateListenerCommandOutput>;
    private serialize;
    private deserialize;
}
