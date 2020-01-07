import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { GenerateChangeSetRequest, GenerateChangeSetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GenerateChangeSetCommandInput = GenerateChangeSetRequest;
export declare type GenerateChangeSetCommandOutput = GenerateChangeSetResponse & __MetadataBearer;
export declare class GenerateChangeSetCommand extends $Command<GenerateChangeSetCommandInput, GenerateChangeSetCommandOutput, SMSClientResolvedConfig> {
    readonly input: GenerateChangeSetCommandInput;
    constructor(input: GenerateChangeSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GenerateChangeSetCommandInput, GenerateChangeSetCommandOutput>;
    private serialize;
    private deserialize;
}
