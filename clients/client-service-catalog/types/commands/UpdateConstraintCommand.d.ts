import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { UpdateConstraintInput, UpdateConstraintOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateConstraintCommandInput = UpdateConstraintInput;
export declare type UpdateConstraintCommandOutput = UpdateConstraintOutput & __MetadataBearer;
export declare class UpdateConstraintCommand extends $Command<UpdateConstraintCommandInput, UpdateConstraintCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: UpdateConstraintCommandInput;
    constructor(input: UpdateConstraintCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateConstraintCommandInput, UpdateConstraintCommandOutput>;
    private serialize;
    private deserialize;
}
