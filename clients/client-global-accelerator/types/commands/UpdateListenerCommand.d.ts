import { GlobalAcceleratorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlobalAcceleratorClient";
import { UpdateListenerRequest, UpdateListenerResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateListenerCommandInput = UpdateListenerRequest;
export declare type UpdateListenerCommandOutput = UpdateListenerResponse & __MetadataBearer;
export declare class UpdateListenerCommand extends $Command<UpdateListenerCommandInput, UpdateListenerCommandOutput, GlobalAcceleratorClientResolvedConfig> {
    readonly input: UpdateListenerCommandInput;
    constructor(input: UpdateListenerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlobalAcceleratorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateListenerCommandInput, UpdateListenerCommandOutput>;
    private serialize;
    private deserialize;
}
