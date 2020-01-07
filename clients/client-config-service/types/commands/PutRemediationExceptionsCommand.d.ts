import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { PutRemediationExceptionsRequest, PutRemediationExceptionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutRemediationExceptionsCommandInput = PutRemediationExceptionsRequest;
export declare type PutRemediationExceptionsCommandOutput = PutRemediationExceptionsResponse & __MetadataBearer;
export declare class PutRemediationExceptionsCommand extends $Command<PutRemediationExceptionsCommandInput, PutRemediationExceptionsCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: PutRemediationExceptionsCommandInput;
    constructor(input: PutRemediationExceptionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutRemediationExceptionsCommandInput, PutRemediationExceptionsCommandOutput>;
    private serialize;
    private deserialize;
}
