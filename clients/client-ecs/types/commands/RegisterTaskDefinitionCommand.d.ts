import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { RegisterTaskDefinitionRequest, RegisterTaskDefinitionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RegisterTaskDefinitionCommandInput = RegisterTaskDefinitionRequest;
export declare type RegisterTaskDefinitionCommandOutput = RegisterTaskDefinitionResponse & __MetadataBearer;
export declare class RegisterTaskDefinitionCommand extends $Command<RegisterTaskDefinitionCommandInput, RegisterTaskDefinitionCommandOutput, ECSClientResolvedConfig> {
    readonly input: RegisterTaskDefinitionCommandInput;
    constructor(input: RegisterTaskDefinitionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterTaskDefinitionCommandInput, RegisterTaskDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
