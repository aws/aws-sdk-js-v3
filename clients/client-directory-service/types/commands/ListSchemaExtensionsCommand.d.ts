import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { ListSchemaExtensionsRequest, ListSchemaExtensionsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListSchemaExtensionsCommandInput = ListSchemaExtensionsRequest;
export declare type ListSchemaExtensionsCommandOutput = ListSchemaExtensionsResult & __MetadataBearer;
export declare class ListSchemaExtensionsCommand extends $Command<ListSchemaExtensionsCommandInput, ListSchemaExtensionsCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: ListSchemaExtensionsCommandInput;
    constructor(input: ListSchemaExtensionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSchemaExtensionsCommandInput, ListSchemaExtensionsCommandOutput>;
    private serialize;
    private deserialize;
}
