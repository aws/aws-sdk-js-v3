import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { StartSchemaExtensionRequest, StartSchemaExtensionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartSchemaExtensionCommandInput = StartSchemaExtensionRequest;
export declare type StartSchemaExtensionCommandOutput = StartSchemaExtensionResult & __MetadataBearer;
export declare class StartSchemaExtensionCommand extends $Command<StartSchemaExtensionCommandInput, StartSchemaExtensionCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: StartSchemaExtensionCommandInput;
    constructor(input: StartSchemaExtensionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartSchemaExtensionCommandInput, StartSchemaExtensionCommandOutput>;
    private serialize;
    private deserialize;
}
