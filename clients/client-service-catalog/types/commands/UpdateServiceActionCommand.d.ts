import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { UpdateServiceActionInput, UpdateServiceActionOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateServiceActionCommandInput = UpdateServiceActionInput;
export declare type UpdateServiceActionCommandOutput = UpdateServiceActionOutput & __MetadataBearer;
export declare class UpdateServiceActionCommand extends $Command<UpdateServiceActionCommandInput, UpdateServiceActionCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: UpdateServiceActionCommandInput;
    constructor(input: UpdateServiceActionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateServiceActionCommandInput, UpdateServiceActionCommandOutput>;
    private serialize;
    private deserialize;
}
