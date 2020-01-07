import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DeleteDBProxyRequest, DeleteDBProxyResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteDBProxyCommandInput = DeleteDBProxyRequest;
export declare type DeleteDBProxyCommandOutput = DeleteDBProxyResponse & __MetadataBearer;
export declare class DeleteDBProxyCommand extends $Command<DeleteDBProxyCommandInput, DeleteDBProxyCommandOutput, RDSClientResolvedConfig> {
    readonly input: DeleteDBProxyCommandInput;
    constructor(input: DeleteDBProxyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDBProxyCommandInput, DeleteDBProxyCommandOutput>;
    private serialize;
    private deserialize;
}
