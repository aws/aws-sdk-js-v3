import { OpsWorksCMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksCMClient";
import { CreateServerRequest, CreateServerResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateServerCommandInput = CreateServerRequest;
export declare type CreateServerCommandOutput = CreateServerResponse & __MetadataBearer;
export declare class CreateServerCommand extends $Command<CreateServerCommandInput, CreateServerCommandOutput, OpsWorksCMClientResolvedConfig> {
    readonly input: CreateServerCommandInput;
    constructor(input: CreateServerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksCMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateServerCommandInput, CreateServerCommandOutput>;
    private serialize;
    private deserialize;
}
