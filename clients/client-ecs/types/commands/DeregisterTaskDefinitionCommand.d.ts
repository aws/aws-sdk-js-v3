import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { DeregisterTaskDefinitionRequest, DeregisterTaskDefinitionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeregisterTaskDefinitionCommandInput = DeregisterTaskDefinitionRequest;
export declare type DeregisterTaskDefinitionCommandOutput = DeregisterTaskDefinitionResponse & __MetadataBearer;
export declare class DeregisterTaskDefinitionCommand extends $Command<DeregisterTaskDefinitionCommandInput, DeregisterTaskDefinitionCommandOutput, ECSClientResolvedConfig> {
    readonly input: DeregisterTaskDefinitionCommandInput;
    constructor(input: DeregisterTaskDefinitionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeregisterTaskDefinitionCommandInput, DeregisterTaskDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
