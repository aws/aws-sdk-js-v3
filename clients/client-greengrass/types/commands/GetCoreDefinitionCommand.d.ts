import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetCoreDefinitionRequest, GetCoreDefinitionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetCoreDefinitionCommandInput = GetCoreDefinitionRequest;
export declare type GetCoreDefinitionCommandOutput = GetCoreDefinitionResponse & __MetadataBearer;
export declare class GetCoreDefinitionCommand extends $Command<GetCoreDefinitionCommandInput, GetCoreDefinitionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: GetCoreDefinitionCommandInput;
    constructor(input: GetCoreDefinitionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCoreDefinitionCommandInput, GetCoreDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
