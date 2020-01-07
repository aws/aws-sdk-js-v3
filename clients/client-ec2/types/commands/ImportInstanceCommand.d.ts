import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ImportInstanceRequest, ImportInstanceResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ImportInstanceCommandInput = ImportInstanceRequest;
export declare type ImportInstanceCommandOutput = ImportInstanceResult & __MetadataBearer;
export declare class ImportInstanceCommand extends $Command<ImportInstanceCommandInput, ImportInstanceCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ImportInstanceCommandInput;
    constructor(input: ImportInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ImportInstanceCommandInput, ImportInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
