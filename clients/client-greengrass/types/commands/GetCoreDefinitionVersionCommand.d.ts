import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetCoreDefinitionVersionRequest, GetCoreDefinitionVersionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetCoreDefinitionVersionCommandInput = GetCoreDefinitionVersionRequest;
export declare type GetCoreDefinitionVersionCommandOutput = GetCoreDefinitionVersionResponse & __MetadataBearer;
export declare class GetCoreDefinitionVersionCommand extends $Command<GetCoreDefinitionVersionCommandInput, GetCoreDefinitionVersionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: GetCoreDefinitionVersionCommandInput;
    constructor(input: GetCoreDefinitionVersionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCoreDefinitionVersionCommandInput, GetCoreDefinitionVersionCommandOutput>;
    private serialize;
    private deserialize;
}
