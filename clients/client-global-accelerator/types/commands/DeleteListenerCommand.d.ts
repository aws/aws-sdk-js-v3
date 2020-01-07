import { GlobalAcceleratorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlobalAcceleratorClient";
import { DeleteListenerRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteListenerCommandInput = DeleteListenerRequest;
export declare type DeleteListenerCommandOutput = __MetadataBearer;
export declare class DeleteListenerCommand extends $Command<DeleteListenerCommandInput, DeleteListenerCommandOutput, GlobalAcceleratorClientResolvedConfig> {
    readonly input: DeleteListenerCommandInput;
    constructor(input: DeleteListenerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlobalAcceleratorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteListenerCommandInput, DeleteListenerCommandOutput>;
    private serialize;
    private deserialize;
}
