import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { AssociateKmsKeyRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssociateKmsKeyCommandInput = AssociateKmsKeyRequest;
export declare type AssociateKmsKeyCommandOutput = __MetadataBearer;
export declare class AssociateKmsKeyCommand extends $Command<AssociateKmsKeyCommandInput, AssociateKmsKeyCommandOutput, CloudWatchLogsClientResolvedConfig> {
    readonly input: AssociateKmsKeyCommandInput;
    constructor(input: AssociateKmsKeyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchLogsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateKmsKeyCommandInput, AssociateKmsKeyCommandOutput>;
    private serialize;
    private deserialize;
}
