import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { CopyProductInput, CopyProductOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CopyProductCommandInput = CopyProductInput;
export declare type CopyProductCommandOutput = CopyProductOutput & __MetadataBearer;
export declare class CopyProductCommand extends $Command<CopyProductCommandInput, CopyProductCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: CopyProductCommandInput;
    constructor(input: CopyProductCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CopyProductCommandInput, CopyProductCommandOutput>;
    private serialize;
    private deserialize;
}
