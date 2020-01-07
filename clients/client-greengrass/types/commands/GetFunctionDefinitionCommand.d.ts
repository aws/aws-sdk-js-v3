import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetFunctionDefinitionRequest, GetFunctionDefinitionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetFunctionDefinitionCommandInput = GetFunctionDefinitionRequest;
export declare type GetFunctionDefinitionCommandOutput = GetFunctionDefinitionResponse & __MetadataBearer;
export declare class GetFunctionDefinitionCommand extends $Command<GetFunctionDefinitionCommandInput, GetFunctionDefinitionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: GetFunctionDefinitionCommandInput;
    constructor(input: GetFunctionDefinitionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetFunctionDefinitionCommandInput, GetFunctionDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
