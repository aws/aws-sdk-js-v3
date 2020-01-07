import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ImportKeyPairRequest, ImportKeyPairResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ImportKeyPairCommandInput = ImportKeyPairRequest;
export declare type ImportKeyPairCommandOutput = ImportKeyPairResult & __MetadataBearer;
export declare class ImportKeyPairCommand extends $Command<ImportKeyPairCommandInput, ImportKeyPairCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ImportKeyPairCommandInput;
    constructor(input: ImportKeyPairCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ImportKeyPairCommandInput, ImportKeyPairCommandOutput>;
    private serialize;
    private deserialize;
}
