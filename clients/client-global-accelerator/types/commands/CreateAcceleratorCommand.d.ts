import { GlobalAcceleratorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlobalAcceleratorClient";
import { CreateAcceleratorRequest, CreateAcceleratorResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateAcceleratorCommandInput = CreateAcceleratorRequest;
export declare type CreateAcceleratorCommandOutput = CreateAcceleratorResponse & __MetadataBearer;
export declare class CreateAcceleratorCommand extends $Command<CreateAcceleratorCommandInput, CreateAcceleratorCommandOutput, GlobalAcceleratorClientResolvedConfig> {
    readonly input: CreateAcceleratorCommandInput;
    constructor(input: CreateAcceleratorCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlobalAcceleratorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateAcceleratorCommandInput, CreateAcceleratorCommandOutput>;
    private serialize;
    private deserialize;
}
