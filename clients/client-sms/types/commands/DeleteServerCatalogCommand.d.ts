import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { DeleteServerCatalogRequest, DeleteServerCatalogResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteServerCatalogCommandInput = DeleteServerCatalogRequest;
export declare type DeleteServerCatalogCommandOutput = DeleteServerCatalogResponse & __MetadataBearer;
export declare class DeleteServerCatalogCommand extends $Command<DeleteServerCatalogCommandInput, DeleteServerCatalogCommandOutput, SMSClientResolvedConfig> {
    readonly input: DeleteServerCatalogCommandInput;
    constructor(input: DeleteServerCatalogCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteServerCatalogCommandInput, DeleteServerCatalogCommandOutput>;
    private serialize;
    private deserialize;
}
