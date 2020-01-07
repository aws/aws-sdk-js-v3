import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetResourceDefinitionRequest, GetResourceDefinitionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetResourceDefinitionCommandInput = GetResourceDefinitionRequest;
export declare type GetResourceDefinitionCommandOutput = GetResourceDefinitionResponse & __MetadataBearer;
export declare class GetResourceDefinitionCommand extends $Command<GetResourceDefinitionCommandInput, GetResourceDefinitionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: GetResourceDefinitionCommandInput;
    constructor(input: GetResourceDefinitionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetResourceDefinitionCommandInput, GetResourceDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
