import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DeleteConstraintInput, DeleteConstraintOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteConstraintCommandInput = DeleteConstraintInput;
export declare type DeleteConstraintCommandOutput = DeleteConstraintOutput & __MetadataBearer;
export declare class DeleteConstraintCommand extends $Command<DeleteConstraintCommandInput, DeleteConstraintCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: DeleteConstraintCommandInput;
    constructor(input: DeleteConstraintCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteConstraintCommandInput, DeleteConstraintCommandOutput>;
    private serialize;
    private deserialize;
}
