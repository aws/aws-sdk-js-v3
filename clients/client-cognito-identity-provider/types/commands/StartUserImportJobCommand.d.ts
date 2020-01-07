import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { StartUserImportJobRequest, StartUserImportJobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartUserImportJobCommandInput = StartUserImportJobRequest;
export declare type StartUserImportJobCommandOutput = StartUserImportJobResponse & __MetadataBearer;
export declare class StartUserImportJobCommand extends $Command<StartUserImportJobCommandInput, StartUserImportJobCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: StartUserImportJobCommandInput;
    constructor(input: StartUserImportJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartUserImportJobCommandInput, StartUserImportJobCommandOutput>;
    private serialize;
    private deserialize;
}
