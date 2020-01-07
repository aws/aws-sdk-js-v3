import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { DisassociateKmsKeyRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisassociateKmsKeyCommandInput = DisassociateKmsKeyRequest;
export declare type DisassociateKmsKeyCommandOutput = __MetadataBearer;
export declare class DisassociateKmsKeyCommand extends $Command<DisassociateKmsKeyCommandInput, DisassociateKmsKeyCommandOutput, CloudWatchLogsClientResolvedConfig> {
    readonly input: DisassociateKmsKeyCommandInput;
    constructor(input: DisassociateKmsKeyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchLogsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateKmsKeyCommandInput, DisassociateKmsKeyCommandOutput>;
    private serialize;
    private deserialize;
}
