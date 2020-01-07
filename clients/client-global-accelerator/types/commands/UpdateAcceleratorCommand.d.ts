import { GlobalAcceleratorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlobalAcceleratorClient";
import { UpdateAcceleratorRequest, UpdateAcceleratorResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateAcceleratorCommandInput = UpdateAcceleratorRequest;
export declare type UpdateAcceleratorCommandOutput = UpdateAcceleratorResponse & __MetadataBearer;
export declare class UpdateAcceleratorCommand extends $Command<UpdateAcceleratorCommandInput, UpdateAcceleratorCommandOutput, GlobalAcceleratorClientResolvedConfig> {
    readonly input: UpdateAcceleratorCommandInput;
    constructor(input: UpdateAcceleratorCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlobalAcceleratorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateAcceleratorCommandInput, UpdateAcceleratorCommandOutput>;
    private serialize;
    private deserialize;
}
