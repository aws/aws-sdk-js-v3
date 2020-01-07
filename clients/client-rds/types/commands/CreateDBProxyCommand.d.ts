import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { CreateDBProxyRequest, CreateDBProxyResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateDBProxyCommandInput = CreateDBProxyRequest;
export declare type CreateDBProxyCommandOutput = CreateDBProxyResponse & __MetadataBearer;
export declare class CreateDBProxyCommand extends $Command<CreateDBProxyCommandInput, CreateDBProxyCommandOutput, RDSClientResolvedConfig> {
    readonly input: CreateDBProxyCommandInput;
    constructor(input: CreateDBProxyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDBProxyCommandInput, CreateDBProxyCommandOutput>;
    private serialize;
    private deserialize;
}
