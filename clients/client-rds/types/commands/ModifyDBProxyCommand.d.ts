import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { ModifyDBProxyRequest, ModifyDBProxyResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyDBProxyCommandInput = ModifyDBProxyRequest;
export declare type ModifyDBProxyCommandOutput = ModifyDBProxyResponse & __MetadataBearer;
export declare class ModifyDBProxyCommand extends $Command<ModifyDBProxyCommandInput, ModifyDBProxyCommandOutput, RDSClientResolvedConfig> {
    readonly input: ModifyDBProxyCommandInput;
    constructor(input: ModifyDBProxyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyDBProxyCommandInput, ModifyDBProxyCommandOutput>;
    private serialize;
    private deserialize;
}
