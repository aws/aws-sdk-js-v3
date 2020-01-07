import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetFunctionDefinitionVersionRequest, GetFunctionDefinitionVersionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetFunctionDefinitionVersionCommandInput = GetFunctionDefinitionVersionRequest;
export declare type GetFunctionDefinitionVersionCommandOutput = GetFunctionDefinitionVersionResponse & __MetadataBearer;
export declare class GetFunctionDefinitionVersionCommand extends $Command<GetFunctionDefinitionVersionCommandInput, GetFunctionDefinitionVersionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: GetFunctionDefinitionVersionCommandInput;
    constructor(input: GetFunctionDefinitionVersionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetFunctionDefinitionVersionCommandInput, GetFunctionDefinitionVersionCommandOutput>;
    private serialize;
    private deserialize;
}
