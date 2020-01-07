import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { StopUserImportJobRequest, StopUserImportJobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopUserImportJobCommandInput = StopUserImportJobRequest;
export declare type StopUserImportJobCommandOutput = StopUserImportJobResponse & __MetadataBearer;
export declare class StopUserImportJobCommand extends $Command<StopUserImportJobCommandInput, StopUserImportJobCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: StopUserImportJobCommandInput;
    constructor(input: StopUserImportJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopUserImportJobCommandInput, StopUserImportJobCommandOutput>;
    private serialize;
    private deserialize;
}
