import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DeleteServiceActionInput, DeleteServiceActionOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteServiceActionCommandInput = DeleteServiceActionInput;
export declare type DeleteServiceActionCommandOutput = DeleteServiceActionOutput & __MetadataBearer;
export declare class DeleteServiceActionCommand extends $Command<DeleteServiceActionCommandInput, DeleteServiceActionCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: DeleteServiceActionCommandInput;
    constructor(input: DeleteServiceActionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteServiceActionCommandInput, DeleteServiceActionCommandOutput>;
    private serialize;
    private deserialize;
}
