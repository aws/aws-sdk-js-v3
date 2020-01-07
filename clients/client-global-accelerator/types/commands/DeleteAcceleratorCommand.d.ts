import { GlobalAcceleratorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlobalAcceleratorClient";
import { DeleteAcceleratorRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteAcceleratorCommandInput = DeleteAcceleratorRequest;
export declare type DeleteAcceleratorCommandOutput = __MetadataBearer;
export declare class DeleteAcceleratorCommand extends $Command<DeleteAcceleratorCommandInput, DeleteAcceleratorCommandOutput, GlobalAcceleratorClientResolvedConfig> {
    readonly input: DeleteAcceleratorCommandInput;
    constructor(input: DeleteAcceleratorCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlobalAcceleratorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAcceleratorCommandInput, DeleteAcceleratorCommandOutput>;
    private serialize;
    private deserialize;
}
