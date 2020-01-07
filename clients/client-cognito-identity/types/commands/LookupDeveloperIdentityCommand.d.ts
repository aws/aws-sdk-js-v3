import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import { LookupDeveloperIdentityInput, LookupDeveloperIdentityResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type LookupDeveloperIdentityCommandInput = LookupDeveloperIdentityInput;
export declare type LookupDeveloperIdentityCommandOutput = LookupDeveloperIdentityResponse & __MetadataBearer;
export declare class LookupDeveloperIdentityCommand extends $Command<LookupDeveloperIdentityCommandInput, LookupDeveloperIdentityCommandOutput, CognitoIdentityClientResolvedConfig> {
    readonly input: LookupDeveloperIdentityCommandInput;
    constructor(input: LookupDeveloperIdentityCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityClientResolvedConfig, options?: __HttpHandlerOptions): Handler<LookupDeveloperIdentityCommandInput, LookupDeveloperIdentityCommandOutput>;
    private serialize;
    private deserialize;
}
