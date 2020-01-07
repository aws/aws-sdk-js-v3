import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetResourceDefinitionVersionRequest, GetResourceDefinitionVersionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetResourceDefinitionVersionCommandInput = GetResourceDefinitionVersionRequest;
export declare type GetResourceDefinitionVersionCommandOutput = GetResourceDefinitionVersionResponse & __MetadataBearer;
export declare class GetResourceDefinitionVersionCommand extends $Command<GetResourceDefinitionVersionCommandInput, GetResourceDefinitionVersionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: GetResourceDefinitionVersionCommandInput;
    constructor(input: GetResourceDefinitionVersionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetResourceDefinitionVersionCommandInput, GetResourceDefinitionVersionCommandOutput>;
    private serialize;
    private deserialize;
}
