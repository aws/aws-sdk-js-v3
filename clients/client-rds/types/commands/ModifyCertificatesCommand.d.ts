import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { ModifyCertificatesMessage, ModifyCertificatesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyCertificatesCommandInput = ModifyCertificatesMessage;
export declare type ModifyCertificatesCommandOutput = ModifyCertificatesResult & __MetadataBearer;
export declare class ModifyCertificatesCommand extends $Command<ModifyCertificatesCommandInput, ModifyCertificatesCommandOutput, RDSClientResolvedConfig> {
    readonly input: ModifyCertificatesCommandInput;
    constructor(input: ModifyCertificatesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyCertificatesCommandInput, ModifyCertificatesCommandOutput>;
    private serialize;
    private deserialize;
}
