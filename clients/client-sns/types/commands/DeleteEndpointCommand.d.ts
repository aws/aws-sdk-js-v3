import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { DeleteEndpointInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteEndpointCommandInput = DeleteEndpointInput;
export declare type DeleteEndpointCommandOutput = __MetadataBearer;
export declare class DeleteEndpointCommand extends $Command<DeleteEndpointCommandInput, DeleteEndpointCommandOutput, SNSClientResolvedConfig> {
    readonly input: DeleteEndpointCommandInput;
    constructor(input: DeleteEndpointCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SNSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteEndpointCommandInput, DeleteEndpointCommandOutput>;
    private serialize;
    private deserialize;
}
