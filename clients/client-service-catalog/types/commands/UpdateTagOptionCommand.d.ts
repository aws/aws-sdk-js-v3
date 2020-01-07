import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { UpdateTagOptionInput, UpdateTagOptionOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateTagOptionCommandInput = UpdateTagOptionInput;
export declare type UpdateTagOptionCommandOutput = UpdateTagOptionOutput & __MetadataBearer;
export declare class UpdateTagOptionCommand extends $Command<UpdateTagOptionCommandInput, UpdateTagOptionCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: UpdateTagOptionCommandInput;
    constructor(input: UpdateTagOptionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateTagOptionCommandInput, UpdateTagOptionCommandOutput>;
    private serialize;
    private deserialize;
}
